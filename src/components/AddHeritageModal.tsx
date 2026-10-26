import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Mic,
  MicOff,
  Sparkles,
  Save,
  BookOpen,
  User,
  GraduationCap,
  Plus,
  Trash2,
  Check,
  AlertCircle,
  FileText,
  Volume2,
} from 'lucide-react';
import {
  HeritageItem,
  HeritageCategory,
  Province,
  Tribe,
  LocalTerm,
  StepOrNarrative,
} from '../types/heritage';
import { getSpeechRecognition } from '../utils/speechRecognition';

interface AddHeritageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (newItem: HeritageItem) => void;
}

const TRIBES_MAPPING: { tribe: Tribe; province: Province }[] = [
  { tribe: 'Bugis', province: 'Sulawesi Selatan' },
  { tribe: 'Makassar', province: 'Sulawesi Selatan' },
  { tribe: 'Toraja', province: 'Sulawesi Selatan' },
  { tribe: 'Mandar', province: 'Sulawesi Barat' },
  { tribe: 'Mamasa', province: 'Sulawesi Barat' },
  { tribe: 'Kaili', province: 'Sulawesi Tengah' },
  { tribe: 'Pamona', province: 'Sulawesi Tengah' },
  { tribe: 'Tolaki', province: 'Sulawesi Tenggara' },
  { tribe: 'Buton', province: 'Sulawesi Tenggara' },
  { tribe: 'Muna', province: 'Sulawesi Tenggara' },
  { tribe: 'Moronene', province: 'Sulawesi Tenggara' },
  { tribe: 'Minahasa', province: 'Sulawesi Utara' },
  { tribe: 'Bolaang Mongondow', province: 'Sulawesi Utara' },
  { tribe: 'Sangihe', province: 'Sulawesi Utara' },
  { tribe: 'Gorontalo', province: 'Gorontalo' },
];

const CATEGORIES_LIST: { key: HeritageCategory; label: string; icon: string }[] = [
  { key: 'resep', label: 'Resep Makanan Tradisional', icon: '🍲' },
  { key: 'bahasa', label: 'Bahasa & Falsafah', icon: '🗣️' },
  { key: 'kerajinan', label: 'Kerajinan Tangan', icon: '🧵' },
  { key: 'tani_bahari', label: 'Kearifan Tani & Bahari', icon: '🌾' },
  { key: 'permainan', label: 'Permainan Tradisional', icon: '🪁' },
  { key: 'cerita_sejarah', label: 'Cerita Sejarah Kampung', icon: '📜' },
];

export const AddHeritageModal: React.FC<AddHeritageModalProps> = ({
  isOpen,
  onClose,
  onSave,
}) => {
  if (!isOpen) return null;

  const [mode, setMode] = useState<'interview' | 'manual'>('interview');
  const [isRecording, setIsRecording] = useState(false);
  const [recordSeconds, setRecordSeconds] = useState(0);
  const [speechTranscript, setSpeechTranscript] = useState('');
  const [isStructuring, setIsStructuring] = useState(false);
  const [structuringError, setStructuringError] = useState<string | null>(null);

  // Core metadata
  const [selectedTribe, setSelectedTribe] = useState<Tribe>('Bugis');
  const [selectedProvince, setSelectedProvince] = useState<Province>('Sulawesi Selatan');
  const [selectedCategory, setSelectedCategory] = useState<HeritageCategory>('resep');
  const [regionDetail, setRegionDetail] = useState('');

  // Narrator & student
  const [elderName, setElderName] = useState('');
  const [elderAge, setElderAge] = useState<number | ''>('');
  const [elderRole, setElderRole] = useState('');
  const [elderLocation, setElderLocation] = useState('');

  const [studentName, setStudentName] = useState('');
  const [studentSchool, setStudentSchool] = useState('');

  // Structured content
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [summary, setSummary] = useState('');
  const [philosophicalMeaning, setPhilosophicalMeaning] = useState('');
  const [preservationAdvice, setPreservationAdvice] = useState('');
  const [estimatedEra, setEstimatedEra] = useState('');
  const [localTerms, setLocalTerms] = useState<LocalTerm[]>([
    { term: '', meaning: '', language: 'Bahasa Bugis' },
  ]);
  const [ingredients, setIngredients] = useState<string[]>(['']);
  const [tools, setTools] = useState<string[]>(['']);
  const [steps, setSteps] = useState<StepOrNarrative[]>([
    { stepNumber: 1, title: 'Persiapan Bahan Awal', description: '' },
  ]);
  const [tagsInput, setTagsInput] = useState('');

  const timerRef = useRef<any>(null);
  const recognitionRef = useRef<any>(null);

  // Sync province when tribe changes
  const handleTribeChange = (t: Tribe) => {
    setSelectedTribe(t);
    const found = TRIBES_MAPPING.find((m) => m.tribe === t);
    if (found) {
      setSelectedProvince(found.province);
    }
  };

  // Timer logic for recording
  useEffect(() => {
    if (isRecording) {
      timerRef.current = setInterval(() => {
        setRecordSeconds((s) => s + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current);
      setRecordSeconds(0);
    }
    return () => clearInterval(timerRef.current);
  }, [isRecording]);

  // Speech Recognition Handling
  const handleToggleRecord = () => {
    if (isRecording) {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      setIsRecording(false);
    } else {
      const recognition = getSpeechRecognition();
      if (!recognition.isSupported) {
        alert(
          'Browser Anda belum mendukung Web Speech Recognition. Anda dapat tetap mengetik atau menempelkan transkrip cerita di kotak teks.'
        );
        return;
      }

      recognitionRef.current = recognition;
      setIsRecording(true);
      recognition.start(
        (transcript) => {
          setSpeechTranscript((prev) => (prev ? `${prev} ${transcript}` : transcript));
        },
        (error) => {
          console.warn('Speech error:', error);
          setIsRecording(false);
        }
      );
    }
  };

  // Trigger AI / Heuristic Structuring API
  const handleStructureStory = async () => {
    if (!speechTranscript.trim()) {
      setStructuringError('Harap rekam suara atau ketik transkrip cerita terlebih dahulu.');
      return;
    }

    setIsStructuring(true);
    setStructuringError(null);

    try {
      const res = await fetch('/api/structure-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rawStory: speechTranscript,
          elderName: elderName || 'Nenek / Kakek Adat',
          elderAge: elderAge || undefined,
          studentName: studentName || 'Generasi Muda',
          region: selectedProvince,
          tribe: selectedTribe,
          categoryHint: selectedCategory,
        }),
      });

      const json = await res.json();
      if (json.success && json.data) {
        const d = json.data;
        setTitle(d.title || '');
        setSummary(d.summary || '');
        setPhilosophicalMeaning(d.philosophicalMeaning || '');
        setPreservationAdvice(d.preservationAdvice || '');
        setEstimatedEra(d.estimatedEra || '');
        if (d.category) setSelectedCategory(d.category);
        if (d.localTerms && Array.isArray(d.localTerms)) {
          setLocalTerms(d.localTerms);
        }
        if (d.ingredientsOrMaterials && Array.isArray(d.ingredientsOrMaterials)) {
          setIngredients(d.ingredientsOrMaterials);
        }
        if (d.toolsUsed && Array.isArray(d.toolsUsed)) {
          setTools(d.toolsUsed);
        }
        if (d.stepsOrNarrative && Array.isArray(d.stepsOrNarrative)) {
          setSteps(d.stepsOrNarrative);
        }
        setMode('manual'); // switch to review / manual mode so user can inspect and edit every word!
      } else {
        throw new Error(json.error || 'Gagal memproses cerita.');
      }
    } catch (err: any) {
      setStructuringError(
        err.message || 'Gagal menyusun naskah terstruktur. Anda dapat melanjutkannya secara manual.'
      );
    } finally {
      setIsStructuring(false);
    }
  };

  // Sample prompt filler for testing
  const handleLoadSample = () => {
    setElderName("Nenek Indo' Becce");
    setElderAge(76);
    setElderRole('Pewaris Dapur Bugis Bone');
    setElderLocation('Watampone, Bone');
    setStudentName('Andi Alfian & Rahma');
    setStudentSchool('SMA Negeri 1 Watampone');
    setSelectedTribe('Bugis');
    setSelectedProvince('Sulawesi Selatan');
    setSelectedCategory('resep');
    setRegionDetail('Kabupaten Bone');
    setSpeechTranscript(
      `Nenek bercerita tentang cara membuat kue Barongko asli Bugis untuk hajatan adat. 
Bahan utamanya pisang kepok masak pohon yang dihaluskan bersama santan kental perasan pertama, telur ayam kampung, dan gula pasir. 
Adonan dibungkus daun pisang muda lalu dikukus hingga matang wangi. 
Makna filosofisnya: Barongko dibungkus daun pisang hijau di luar dan pisang di dalam, artinya apa yang ada di dalam hati nurani harus sama luhurnya dengan apa yang tampak di luar (falsafah kejujuran Bugis). 
Istilahnya: Onde-onde, Barongko, Mappatabe'. 
Pesan Nenek: Jangan pakai santan instan atau perasa buatan agar cita rasa asli tidak sirna.`
    );
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) {
      alert('Mohon isi judul warisan budaya.');
      return;
    }

    const newItemId = `${selectedTribe.toLowerCase()}-${Date.now().toString(36)}`;
    const parsedTags = tagsInput
      .split(',')
      .map((t) => t.trim().replace(/^#/, ''))
      .filter(Boolean);

    const newItem: HeritageItem = {
      id: newItemId,
      title: title.trim(),
      subtitle: subtitle.trim() || `Kearifan Leluhur Suku ${selectedTribe}`,
      category: selectedCategory,
      province: selectedProvince,
      tribe: selectedTribe,
      regionDetail: regionDetail.trim() || `${selectedTribe}, ${selectedProvince}`,
      elderNarrator: {
        name: elderName.trim() || 'Tetua Adat',
        age: typeof elderAge === 'number' ? elderAge : undefined,
        titleOrRole: elderRole.trim() || 'Tokoh Tradisi',
        location: elderLocation.trim() || selectedProvince,
      },
      recordedBy: {
        name: studentName.trim() || 'Pelajar Budaya',
        schoolOrAffiliation: studentSchool.trim() || 'Komunitas Warisan',
        date: new Date().toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        }),
      },
      summary:
        summary.trim() ||
        `Dokumentasi pengetahuan lokal dari ${elderName || 'Tetua'} (${selectedTribe}).`,
      philosophicalMeaning:
        philosophicalMeaning.trim() || 'Menjaga kehormatan dan persaudaraan sesama manusia.',
      preservationAdvice:
        preservationAdvice.trim() ||
        'Pesan tetua: Lestarikan kearifan ini untuk masa depan anak cucu.',
      estimatedEra: estimatedEra.trim() || 'Diwariskan turun-temurun lintas generasi',
      localTerms: localTerms.filter((t) => t.term.trim().length > 0),
      ingredientsOrMaterials: ingredients.filter((ing) => ing.trim().length > 0),
      toolsUsed: tools.filter((tl) => tl.trim().length > 0),
      stepsOrNarrative: steps.filter((st) => st.title.trim() || st.description.trim()),
      tags: parsedTags.length > 0 ? parsedTags : [selectedTribe.toLowerCase(), selectedCategory],
      isUserCreated: true,
      likesCount: 0,
    };

    onSave(newItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-stone-900 border border-amber-600/50 rounded-2xl shadow-2xl text-stone-100 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Cultural Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-red-600" />

        {/* Modal Header */}
        <div className="px-6 py-4 bg-stone-900 border-b border-stone-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-stone-950 flex items-center justify-center shrink-0 shadow-lg">
              <Plus className="w-5 h-5 font-bold" />
            </div>
            <div>
              <h2 className="font-serif font-black text-lg sm:text-xl text-amber-100">
                Tambahkan Warisan Budaya & Rekam Kisah Tetua
              </h2>
              <p className="text-xs text-stone-400">
                Dokumentasikan resep kuno, falsafah bahasa, kerajinan, atau cerita kampung dari kakek-nenek.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector */}
        <div className="flex items-center gap-2 px-6 py-3 bg-stone-950/80 border-b border-stone-800 text-xs">
          <button
            type="button"
            onClick={() => setMode('interview')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition flex items-center gap-2 ${
              mode === 'interview'
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-850'
            }`}
          >
            <Mic className="w-3.5 h-3.5" />
            <span>Rekam / Transkrip Suara Tetua</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('manual')}
            className={`px-3.5 py-1.5 rounded-xl font-semibold transition flex items-center gap-2 ${
              mode === 'manual'
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-850'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Formulir Terstruktur Manual</span>
          </button>

          <button
            type="button"
            onClick={handleLoadSample}
            className="ml-auto text-[11px] px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-750 text-amber-300 border border-stone-700 transition"
          >
            💡 Muat Contoh Wawancara
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Suku & Kategori Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-stone-950/70 border border-stone-800">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-300">Suku Adat (15 Suku)</label>
              <select
                value={selectedTribe}
                onChange={(e) => handleTribeChange(e.target.value as Tribe)}
                className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-2 text-xs text-amber-300 font-bold focus:outline-none focus:border-amber-500"
              >
                {TRIBES_MAPPING.map((m) => (
                  <option key={m.tribe} value={m.tribe}>
                    Suku {m.tribe} ({m.province.replace('Sulawesi', 'Sul-')})
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-300">Kategori Warisan</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as HeritageCategory)}
                className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
              >
                {CATEGORIES_LIST.map((c) => (
                  <option key={c.key} value={c.key}>
                    {c.icon} {c.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-300">Kabupaten / Wilayah Detail</label>
              <input
                type="text"
                value={regionDetail}
                onChange={(e) => setRegionDetail(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                placeholder="Contoh: Balanipa, Majene"
              />
            </div>
          </div>

          {/* MODE 1: INTERVIEW & AI STRUCTURING */}
          {mode === 'interview' && (
            <div className="space-y-5">
              {/* Voice recording card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-950/40 via-stone-900 to-stone-950 border border-amber-900/50 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="font-serif font-bold text-amber-100 text-sm sm:text-base flex items-center gap-2">
                      <Mic className="w-4 h-4 text-amber-400" />
                      Perekaman Cerita Tetua Langsung
                    </h3>
                    <p className="text-xs text-stone-400">
                      Nyalakan mikrofon untuk merekam percakapan kakek/nenek atau tempelkan transkrip lisan di bawah.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleToggleRecord}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition shadow ${
                      isRecording
                        ? 'bg-red-600 text-white animate-pulse'
                        : 'bg-amber-500 hover:bg-amber-400 text-stone-950'
                    }`}
                  >
                    {isRecording ? (
                      <>
                        <MicOff className="w-4 h-4" />
                        <span>Hentikan Rekam ({recordSeconds}s)</span>
                      </>
                    ) : (
                      <>
                        <Mic className="w-4 h-4" />
                        <span>Mulai Rekam Suara</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Transcript text area */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">
                    Transkrip Catatan Lisan / Hasil Rekaman:
                  </label>
                  <textarea
                    rows={6}
                    value={speechTranscript}
                    onChange={(e) => setSpeechTranscript(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-xs sm:text-sm text-stone-200 focus:outline-none focus:border-amber-500 font-serif leading-relaxed"
                    placeholder="Ceritakan tuturan tetua secara bebas... (misal: 'Nenek saya menceritakan resep lawa bale yang dibuat dengan ikan teri segar dicampur kelapa sangrai dan asam mangga...')"
                  />
                </div>

                {structuringError && (
                  <div className="p-3 rounded-xl bg-red-950/40 border border-red-800 text-xs text-red-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{structuringError}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <p className="text-[11px] text-stone-400">
                    Klik tombol di samping untuk mengubah tuturan lisan menjadi naskah arsip rapi dengan tahapan, bahan, dan makna falsafah.
                  </p>

                  <button
                    type="button"
                    onClick={handleStructureStory}
                    disabled={isStructuring || !speechTranscript.trim()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 disabled:opacity-50 text-stone-950 font-bold text-xs shadow-lg transition"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>
                      {isStructuring
                        ? 'Menyusun Naskah Budaya...'
                        : 'Strukturkan Otomatis dengan Arsiparis'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Narrator profile inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-stone-950/70 border border-stone-800">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">
                    Nama Narasumber Tetua Adat
                  </label>
                  <input
                    type="text"
                    value={elderName}
                    onChange={(e) => setElderName(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                    placeholder="Misal: Nenek Indo' Becce"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">Usia Tetua (Tahun)</label>
                  <input
                    type="number"
                    value={elderAge}
                    onChange={(e) =>
                      setElderAge(e.target.value ? parseInt(e.target.value, 10) : '')
                    }
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                    placeholder="75"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">Nama Pelajar / Pencatat</label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                    placeholder="Nama Anda"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">Sekolah / Asal Komunitas</label>
                  <input
                    type="text"
                    value={studentSchool}
                    onChange={(e) => setStudentSchool(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                    placeholder="SMA / Kampus / Sanggar Seni"
                  />
                </div>
              </div>
            </div>
          )}

          {/* MODE 2: FORMULIR MANUAL LENGKAP */}
          {mode === 'manual' && (
            <div className="space-y-6">
              {/* Title & Subtitle */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-semibold text-amber-300">
                    Judul Warisan Budaya <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-amber-500 font-serif font-bold"
                    placeholder="Contoh: Barongko Pisang Warisan Nenek"
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-semibold text-stone-300">
                    Subjudul / Deskripsi Singkat
                  </label>
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500 font-serif"
                    placeholder="Kudapan Manis Lembut Adat Bugis Bone"
                  />
                </div>
              </div>

              {/* Narrator & Student */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-stone-950/70 border border-stone-800">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-stone-300">Nama Tetua</label>
                  <input
                    type="text"
                    value={elderName}
                    onChange={(e) => setElderName(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-100"
                    placeholder="Nenek Indo' Becce"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-stone-300">Gelar / Peran</label>
                  <input
                    type="text"
                    value={elderRole}
                    onChange={(e) => setElderRole(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-100"
                    placeholder="Penenun / Koki Adat"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-stone-300">Pencatat</label>
                  <input
                    type="text"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-100"
                    placeholder="Nama Pelajar"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-stone-300">Sekolah / Asal</label>
                  <input
                    type="text"
                    value={studentSchool}
                    onChange={(e) => setStudentSchool(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-100"
                    placeholder="Asal Sekolah"
                  />
                </div>
              </div>

              {/* Summary & Philosophical Meaning */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-amber-300">
                  Ringkasan Pengetahuan & Asal-usul
                </label>
                <textarea
                  rows={3}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-xs sm:text-sm text-stone-200 focus:outline-none focus:border-amber-500 font-serif leading-relaxed"
                  placeholder="Ringkasan tentang asal-usul, cara pembuatan, dan maknanya..."
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-amber-300">
                  Makna Filosofis & Nilai Budi Pekerti
                </label>
                <textarea
                  rows={2}
                  value={philosophicalMeaning}
                  onChange={(e) => setPhilosophicalMeaning(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-xs sm:text-sm text-amber-100 focus:outline-none focus:border-amber-500 font-serif italic"
                  placeholder="Falsafah moral atau pantangan leluhur..."
                />
              </div>

              {/* Preservation Advice */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">
                  Pesan & Amanah Leluhur untuk Generasi Masa Kini
                </label>
                <textarea
                  rows={2}
                  value={preservationAdvice}
                  onChange={(e) => setPreservationAdvice(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-xs text-stone-200 focus:outline-none focus:border-amber-500 font-serif"
                  placeholder="Pesan tetua..."
                />
              </div>

              {/* Local Terms */}
              <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Kosa Kata Bahasa Daerah ({localTerms.length})
                  </h3>
                  <button
                    type="button"
                    onClick={() =>
                      setLocalTerms((prev) => [
                        ...prev,
                        { term: '', meaning: '', language: `Bahasa ${selectedTribe}` },
                      ])
                    }
                    className="px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs transition flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Tambah Istilah</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {localTerms.map((t, idx) => (
                    <div key={idx} className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
                      <input
                        type="text"
                        value={t.term}
                        onChange={(e) => {
                          const next = [...localTerms];
                          next[idx].term = e.target.value;
                          setLocalTerms(next);
                        }}
                        className="bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-amber-200 font-bold"
                        placeholder="Istilah Daerah"
                      />
                      <input
                        type="text"
                        value={t.meaning}
                        onChange={(e) => {
                          const next = [...localTerms];
                          next[idx].meaning = e.target.value;
                          setLocalTerms(next);
                        }}
                        className="bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-200"
                        placeholder="Artinya"
                      />
                      <div className="flex items-center gap-1">
                        <input
                          type="text"
                          value={t.language}
                          onChange={(e) => {
                            const next = [...localTerms];
                            next[idx].language = e.target.value;
                            setLocalTerms(next);
                          }}
                          className="flex-1 bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-300"
                          placeholder="Bahasa"
                        />
                        <button
                          type="button"
                          onClick={() => setLocalTerms((p) => p.filter((_, i) => i !== idx))}
                          className="p-1 text-stone-500 hover:text-red-400"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Modal Footer */}
          <div className="pt-4 border-t border-stone-800 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-stone-800 text-stone-300 hover:bg-stone-800 text-xs font-medium transition"
            >
              Batal
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition active:scale-95"
            >
              <Save className="w-4 h-4" />
              <span>Simpan ke Perpustakaan Warisan</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
