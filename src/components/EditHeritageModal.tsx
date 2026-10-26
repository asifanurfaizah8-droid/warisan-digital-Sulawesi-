import React, { useState, useEffect } from 'react';
import {
  X,
  Edit3,
  Check,
  RotateCcw,
  Sparkles,
  Search,
  Replace,
  Plus,
  Trash2,
  BookOpen,
  User,
  GraduationCap,
  Volume2,
  AlertCircle,
  HelpCircle,
  Save,
  Clock,
  History,
} from 'lucide-react';
import {
  HeritageItem,
  HeritageCategory,
  Province,
  Tribe,
  LocalTerm,
  StepOrNarrative,
} from '../types/heritage';

interface EditHeritageModalProps {
  item: HeritageItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedItem: HeritageItem, editorName: string, note: string) => void;
  onResetToOriginal?: (id: string) => void;
}

const TRIBES_LIST: Tribe[] = [
  'Bugis',
  'Makassar',
  'Toraja',
  'Mandar',
  'Mamasa',
  'Kaili',
  'Pamona',
  'Tolaki',
  'Buton',
  'Muna',
  'Moronene',
  'Minahasa',
  'Bolaang Mongondow',
  'Sangihe',
  'Gorontalo',
];

const PROVINCES_LIST: Province[] = [
  'Sulawesi Selatan',
  'Sulawesi Barat',
  'Sulawesi Tengah',
  'Sulawesi Tenggara',
  'Sulawesi Utara',
  'Gorontalo',
];

const CATEGORIES_LIST: { key: HeritageCategory; label: string }[] = [
  { key: 'resep', label: 'Resep Makanan Tradisional' },
  { key: 'bahasa', label: 'Bahasa & Falsafah' },
  { key: 'kerajinan', label: 'Kerajinan Tangan' },
  { key: 'tani_bahari', label: 'Kearifan Tani & Bahari' },
  { key: 'permainan', label: 'Permainan Tradisional' },
  { key: 'cerita_sejarah', label: 'Cerita Sejarah Kampung' },
];

export const EditHeritageModal: React.FC<EditHeritageModalProps> = ({
  item,
  isOpen,
  onClose,
  onSave,
  onResetToOriginal,
}) => {
  if (!isOpen || !item) return null;

  // Active section tab
  const [activeTab, setActiveTab] = useState<'content' | 'narrators' | 'terms' | 'steps' | 'find_replace'>('content');

  // Form State
  const [title, setTitle] = useState(item.title);
  const [subtitle, setSubtitle] = useState(item.subtitle);
  const [category, setCategory] = useState<HeritageCategory>(item.category);
  const [tribe, setTribe] = useState<Tribe>(item.tribe);
  const [province, setProvince] = useState<Province>(item.province);
  const [regionDetail, setRegionDetail] = useState(item.regionDetail);
  const [estimatedEra, setEstimatedEra] = useState(item.estimatedEra || '');

  // Narrator & student
  const [elderName, setElderName] = useState(item.elderNarrator.name);
  const [elderAge, setElderAge] = useState<number | ''>(item.elderNarrator.age ?? '');
  const [elderTitle, setElderTitle] = useState(item.elderNarrator.titleOrRole);
  const [elderLocation, setElderLocation] = useState(item.elderNarrator.location);

  const [studentName, setStudentName] = useState(item.recordedBy.name);
  const [studentSchool, setStudentSchool] = useState(item.recordedBy.schoolOrAffiliation);
  const [recordDate, setRecordDate] = useState(item.recordedBy.date);

  // Content
  const [summary, setSummary] = useState(item.summary);
  const [philosophicalMeaning, setPhilosophicalMeaning] = useState(item.philosophicalMeaning);
  const [preservationAdvice, setPreservationAdvice] = useState(item.preservationAdvice || '');

  // Local terms
  const [localTerms, setLocalTerms] = useState<LocalTerm[]>(
    item.localTerms ? item.localTerms.map((t) => ({ ...t })) : []
  );

  // Ingredients / Materials
  const [ingredients, setIngredients] = useState<string[]>(
    item.ingredientsOrMaterials ? [...item.ingredientsOrMaterials] : []
  );

  // Tools
  const [tools, setTools] = useState<string[]>(item.toolsUsed ? [...item.toolsUsed] : []);

  // Steps
  const [steps, setSteps] = useState<StepOrNarrative[]>(
    item.stepsOrNarrative ? item.stepsOrNarrative.map((s) => ({ ...s })) : []
  );

  // Tags
  const [tagsInput, setTagsInput] = useState(item.tags ? item.tags.join(', ') : '');

  // Editor metadata
  const [editorName, setEditorName] = useState('');
  const [correctionNote, setCorrectionNote] = useState('');

  // Quick Find & Replace
  const [findWord, setFindWord] = useState('');
  const [replaceWord, setReplaceWord] = useState('');
  const [replaceCountNotice, setReplaceCountNotice] = useState<string | null>(null);

  // Notification / Feedback
  const [showSavedFeedback, setShowSavedFeedback] = useState(false);

  // Reset internal state when item changes
  useEffect(() => {
    setTitle(item.title);
    setSubtitle(item.subtitle);
    setCategory(item.category);
    setTribe(item.tribe);
    setProvince(item.province);
    setRegionDetail(item.regionDetail);
    setEstimatedEra(item.estimatedEra || '');
    setElderName(item.elderNarrator.name);
    setElderAge(item.elderNarrator.age ?? '');
    setElderTitle(item.elderNarrator.titleOrRole);
    setElderLocation(item.elderNarrator.location);
    setStudentName(item.recordedBy.name);
    setStudentSchool(item.recordedBy.schoolOrAffiliation);
    setRecordDate(item.recordedBy.date);
    setSummary(item.summary);
    setPhilosophicalMeaning(item.philosophicalMeaning);
    setPreservationAdvice(item.preservationAdvice || '');
    setLocalTerms(item.localTerms ? item.localTerms.map((t) => ({ ...t })) : []);
    setIngredients(item.ingredientsOrMaterials ? [...item.ingredientsOrMaterials] : []);
    setTools(item.toolsUsed ? [...item.toolsUsed] : []);
    setSteps(item.stepsOrNarrative ? item.stepsOrNarrative.map((s) => ({ ...s })) : []);
    setTagsInput(item.tags ? item.tags.join(', ') : '');
    setEditorName('');
    setCorrectionNote('');
    setFindWord('');
    setReplaceWord('');
    setReplaceCountNotice(null);
  }, [item]);

  // Handle Find & Replace Across all editable text fields
  const handlePerformReplace = () => {
    if (!findWord.trim()) return;

    let count = 0;
    const regex = new RegExp(findWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');

    const replaceInString = (str: string) => {
      const matches = str.match(regex);
      if (matches) count += matches.length;
      return str.replace(regex, replaceWord);
    };

    setTitle((prev) => replaceInString(prev));
    setSubtitle((prev) => replaceInString(prev));
    setSummary((prev) => replaceInString(prev));
    setPhilosophicalMeaning((prev) => replaceInString(prev));
    setPreservationAdvice((prev) => replaceInString(prev));
    setElderName((prev) => replaceInString(prev));
    setElderTitle((prev) => replaceInString(prev));
    setRegionDetail((prev) => replaceInString(prev));

    setLocalTerms((prev) =>
      prev.map((t) => ({
        ...t,
        term: replaceInString(t.term),
        meaning: replaceInString(t.meaning),
        language: replaceInString(t.language),
        pronunciationTip: t.pronunciationTip ? replaceInString(t.pronunciationTip) : undefined,
      }))
    );

    setIngredients((prev) => prev.map((ing) => replaceInString(ing)));
    setTools((prev) => prev.map((tl) => replaceInString(tl)));

    setSteps((prev) =>
      prev.map((step) => ({
        ...step,
        title: replaceInString(step.title),
        description: replaceInString(step.description),
      }))
    );

    setReplaceCountNotice(
      count > 0
        ? `Berhasil mengganti ${count} kata "${findWord}" menjadi "${replaceWord}".`
        : `Kata "${findWord}" tidak ditemukan dalam naskah ini.`
    );
  };

  // Local terms handlers
  const handleUpdateTerm = (index: number, field: keyof LocalTerm, value: string) => {
    setLocalTerms((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const handleAddTerm = () => {
    setLocalTerms((prev) => [
      ...prev,
      {
        term: '',
        meaning: '',
        language: `Bahasa ${tribe}`,
        pronunciationTip: '',
      },
    ]);
  };

  const handleRemoveTerm = (index: number) => {
    setLocalTerms((prev) => prev.filter((_, i) => i !== index));
  };

  // Ingredients handlers
  const handleUpdateIngredient = (index: number, value: string) => {
    setIngredients((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const handleAddIngredient = () => {
    setIngredients((prev) => [...prev, '']);
  };

  const handleRemoveIngredient = (index: number) => {
    setIngredients((prev) => prev.filter((_, i) => i !== index));
  };

  // Tools handlers
  const handleUpdateTool = (index: number, value: string) => {
    setTools((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  };

  const handleAddTool = () => {
    setTools((prev) => [...prev, '']);
  };

  const handleRemoveTool = (index: number) => {
    setTools((prev) => prev.filter((_, i) => i !== index));
  };

  // Steps handlers
  const handleUpdateStep = (index: number, field: keyof StepOrNarrative, value: any) => {
    setSteps((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const handleAddStep = () => {
    setSteps((prev) => [
      ...prev,
      {
        stepNumber: prev.length + 1,
        title: `Tahap ${prev.length + 1}`,
        description: '',
      },
    ]);
  };

  const handleRemoveStep = (index: number) => {
    setSteps((prev) =>
      prev
        .filter((_, i) => i !== index)
        .map((step, idx) => ({ ...step, stepNumber: idx + 1 }))
    );
  };

  // Submit Save
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const parsedTags = tagsInput
      .split(',')
      .map((t) => t.trim().replace(/^#/, ''))
      .filter(Boolean);

    const updatedItem: HeritageItem = {
      ...item,
      title: title.trim() || item.title,
      subtitle: subtitle.trim(),
      category,
      tribe,
      province,
      regionDetail: regionDetail.trim(),
      estimatedEra: estimatedEra.trim(),
      elderNarrator: {
        name: elderName.trim() || item.elderNarrator.name,
        age: typeof elderAge === 'number' ? elderAge : undefined,
        titleOrRole: elderTitle.trim(),
        location: elderLocation.trim(),
      },
      recordedBy: {
        name: studentName.trim() || item.recordedBy.name,
        schoolOrAffiliation: studentSchool.trim(),
        date: recordDate.trim(),
      },
      summary: summary.trim(),
      philosophicalMeaning: philosophicalMeaning.trim(),
      preservationAdvice: preservationAdvice.trim(),
      localTerms: localTerms.filter((t) => t.term.trim().length > 0),
      ingredientsOrMaterials: ingredients.filter((ing) => ing.trim().length > 0),
      toolsUsed: tools.filter((tl) => tl.trim().length > 0),
      stepsOrNarrative: steps.filter((st) => st.title.trim() || st.description.trim()),
      tags: parsedTags.length > 0 ? parsedTags : item.tags,
    };

    onSave(
      updatedItem,
      editorName.trim() || 'Warga Komunitas Sulawesi',
      correctionNote.trim() || 'Koreksi ejaan / kata salah'
    );

    setShowSavedFeedback(true);
    setTimeout(() => {
      setShowSavedFeedback(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-stone-900 border border-amber-600/50 rounded-2xl shadow-2xl text-stone-100 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Top Cultural Bar */}
        <div className="h-2 w-full bg-gradient-to-r from-amber-600 via-amber-400 to-red-600" />

        {/* Modal Header */}
        <div className="px-6 py-4 bg-stone-900 border-b border-stone-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center justify-center shrink-0">
              <Edit3 className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif font-black text-lg sm:text-xl text-amber-100">
                  Koreksi & Perbaiki Kata
                </h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                  Koreksi Terbuka
                </span>
              </div>
              <p className="text-xs text-stone-400">
                Ubah kata atau istilah yang salah di judul, narasi, narasumber, istilah daerah, atau bahan.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {onResetToOriginal && (
              <button
                type="button"
                onClick={() => {
                  if (confirm('Pulihkan teks warisan ini kembali ke versi naskah asli bawaan sistem?')) {
                    onResetToOriginal(item.id);
                    onClose();
                  }
                }}
                title="Pulihkan ke Naskah Asli Bawaan"
                className="px-2.5 py-1.5 rounded-lg text-xs text-stone-400 hover:text-amber-300 hover:bg-stone-800 border border-stone-800 transition flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Naskah Asli</span>
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition"
              title="Tutup Formulir"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Section Navigation Tabs */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-stone-950/80 border-b border-stone-800 overflow-x-auto scrollbar-none text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('content')}
            className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
              activeTab === 'content'
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-850'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Judul & Narasi</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('narrators')}
            className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
              activeTab === 'narrators'
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-850'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Narasumber & Pencatat</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('terms')}
            className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
              activeTab === 'terms'
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-850'
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" />
            <span>Kosa Kata Daerah ({localTerms.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('steps')}
            className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
              activeTab === 'steps'
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'text-stone-400 hover:text-stone-200 hover:bg-stone-850'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Bahan, Alat & Langkah ({steps.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('find_replace')}
            className={`px-3 py-1.5 rounded-lg font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
              activeTab === 'find_replace'
                ? 'bg-amber-500 text-stone-950 shadow'
                : 'text-amber-400/90 hover:text-amber-200 hover:bg-stone-850'
            }`}
          >
            <Replace className="w-3.5 h-3.5" />
            <span>Cari & Ganti Kata Otomatis</span>
          </button>
        </div>

        {/* Modal Form Content */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* TAB 1: JUDUL, SUBJUDUL, DAN NARASI */}
          {activeTab === 'content' && (
            <div className="space-y-4">
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Silakan koreksi setiap kata yang salah ketik (typo), nama daerah, kategori, atau uraian filosofi leluhur.
                </span>
              </div>

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
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-stone-100 focus:outline-none focus:border-amber-500 font-serif"
                    placeholder="Contoh: Kapurung Ikan Mairo & Daun Patikala"
                  />
                </div>

                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-semibold text-stone-300">
                    Subjudul / Keterangan Tradisi
                  </label>
                  <input
                    type="text"
                    value={subtitle}
                    onChange={(e) => setSubtitle(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-stone-200 focus:outline-none focus:border-amber-500 font-serif"
                    placeholder="Contoh: Olahan Sagu Kenyal Leluhur Luwu & Wajo"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">Suku Adat</label>
                  <select
                    value={tribe}
                    onChange={(e) => setTribe(e.target.value as Tribe)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500 font-serif"
                  >
                    {TRIBES_LIST.map((t) => (
                      <option key={t} value={t}>
                        Suku {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">Provinsi</label>
                  <select
                    value={province}
                    onChange={(e) => setProvince(e.target.value as Province)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500 font-serif"
                  >
                    {PROVINCES_LIST.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">Kategori Warisan</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as HeritageCategory)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500 font-serif"
                  >
                    {CATEGORIES_LIST.map((c) => (
                      <option key={c.key} value={c.key}>
                        {c.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">Rincian Wilayah / Kabupaten</label>
                  <input
                    type="text"
                    value={regionDetail}
                    onChange={(e) => setRegionDetail(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                    placeholder="Contoh: Kabupaten Luwu, Palopo & Bone"
                  />
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-amber-300">
                  Ringkasan Pengetahuan & Asal-usul
                </label>
                <textarea
                  rows={4}
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-xs sm:text-sm text-stone-200 focus:outline-none focus:border-amber-500 font-serif leading-relaxed"
                  placeholder="Uraikan ringkasan pengetahuan atau tradisi dengan kata-kata yang benar..."
                />
              </div>

              {/* Philosophical meaning */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-amber-300">
                  Makna Filosofis, Nilai Moral & Pantangan Adat
                </label>
                <textarea
                  rows={3}
                  value={philosophicalMeaning}
                  onChange={(e) => setPhilosophicalMeaning(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-xs sm:text-sm text-amber-100 focus:outline-none focus:border-amber-500 font-serif leading-relaxed italic"
                  placeholder="Nilai luhur atau falsafah hidup yang terkandung..."
                />
              </div>

              {/* Preservation advice & era */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1 sm:col-span-2">
                  <label className="text-xs font-semibold text-stone-300">
                    Pesan & Amanah Leluhur untuk Generasi Muda
                  </label>
                  <textarea
                    rows={2}
                    value={preservationAdvice}
                    onChange={(e) => setPreservationAdvice(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl p-3 text-xs text-stone-200 focus:outline-none focus:border-amber-500 font-serif leading-relaxed"
                    placeholder="Pesan tetua agar kearifan ini tidak punah..."
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">Akar Tradisi / Era</label>
                  <input
                    type="text"
                    value={estimatedEra}
                    onChange={(e) => setEstimatedEra(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                    placeholder="Contoh: Sejak era Kedatuan Luwu / Abad ke-17"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">Tagar Pencarian (Pisahkan Koma)</label>
                  <input
                    type="text"
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500 font-mono"
                    placeholder="kapurung, luwu, tabaro, kuliner_bugis"
                  />
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: NARASUMBER & PENCATAT */}
          {activeTab === 'narrators' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <User className="w-4 h-4 text-amber-400" />
                  Koreksi Profil Narasumber Tetua Adat
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">
                      Nama Lengkap Tetua / Narasumber
                    </label>
                    <input
                      type="text"
                      value={elderName}
                      onChange={(e) => setElderName(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
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
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">Gelar / Peran Adat</label>
                    <input
                      type="text"
                      value={elderTitle}
                      onChange={(e) => setElderTitle(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                      placeholder="Misal: Tetua Dapur Adat Saoraja / Tokoh Pembuat Perahu"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">Lokasi / Domisili Tetua</label>
                    <input
                      type="text"
                      value={elderLocation}
                      onChange={(e) => setElderLocation(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                      placeholder="Misal: Palopo, Luwu"
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-300 flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-blue-400" />
                  Koreksi Profil Pelajar / Pencatat Naskah
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">Nama Pencatat / Pelajar</label>
                    <input
                      type="text"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">Asal Sekolah / Lembaga</label>
                    <input
                      type="text"
                      value={studentSchool}
                      onChange={(e) => setStudentSchool(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                      placeholder="SMA / Kampus / Komunitas"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-stone-300">Tanggal Pencatatan</label>
                    <input
                      type="text"
                      value={recordDate}
                      onChange={(e) => setRecordDate(e.target.value)}
                      className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: KOSA KATA & ISTILAH BAHASA DAERAH */}
          {activeTab === 'terms' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                    Kamus Kosa Kata & Istilah Bahasa Daerah
                  </h3>
                  <p className="text-xs text-stone-400">
                    Ubah penulisan ejaan bahasa ibu, arti kata, atau tambahkan istilah baru.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleAddTerm}
                  className="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-semibold transition flex items-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Tambah Istilah</span>
                </button>
              </div>

              {localTerms.length === 0 ? (
                <div className="p-8 text-center bg-stone-950/60 rounded-xl border border-stone-800 text-stone-400 text-xs">
                  Belum ada istilah terdaftar. Klik "+ Tambah Istilah" untuk menambahkan kosa kata baru.
                </div>
              ) : (
                <div className="space-y-3">
                  {localTerms.map((term, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 space-y-3 relative group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-amber-400/90 font-bold">
                          Istilah #{idx + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleRemoveTerm(idx)}
                          className="text-stone-500 hover:text-red-400 transition p-1"
                          title="Hapus Istilah"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-stone-300">
                            Kata / Istilah Asli <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            value={term.term}
                            onChange={(e) => handleUpdateTerm(idx, 'term', e.target.value)}
                            className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-amber-200 font-serif font-bold focus:outline-none focus:border-amber-500"
                            placeholder="Contoh: Tabaro"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-stone-300">Bahasa Suku</label>
                          <input
                            type="text"
                            value={term.language}
                            onChange={(e) => handleUpdateTerm(idx, 'language', e.target.value)}
                            className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                            placeholder="Contoh: Bugis / Makassar"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="text-[11px] font-semibold text-stone-300">Panduan Lafal (Opsional)</label>
                          <input
                            type="text"
                            value={term.pronunciationTip || ''}
                            onChange={(e) => handleUpdateTerm(idx, 'pronunciationTip', e.target.value)}
                            className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-300 focus:outline-none focus:border-amber-500"
                            placeholder="Contoh: Dibaca dengan aksen sentak glotal"
                          />
                        </div>

                        <div className="space-y-1 sm:col-span-3">
                          <label className="text-[11px] font-semibold text-stone-300">
                            Arti / Makna dalam Bahasa Indonesia
                          </label>
                          <input
                            type="text"
                            value={term.meaning}
                            onChange={(e) => handleUpdateTerm(idx, 'meaning', e.target.value)}
                            className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                            placeholder="Pati tepung sagu basah murni dari pohon rumbia..."
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: BAHAN, ALAT, DAN LANGKAH TAHAPAN */}
          {activeTab === 'steps' && (
            <div className="space-y-6">
              {/* Ingredients / Materials */}
              <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Bahan atau Material Utama ({ingredients.length})
                    </h3>
                    <p className="text-[11px] text-stone-400">
                      Koreksi takaran, nama daun/rempah, atau komponen yang keliru.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddIngredient}
                    className="px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs transition flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Tambah Bahan</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {ingredients.map((ing, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500 w-5">{i + 1}.</span>
                      <input
                        type="text"
                        value={ing}
                        onChange={(e) => handleUpdateIngredient(i, e.target.value)}
                        className="flex-1 bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                        placeholder="Contoh: Buah patikala (kecombrang) geprek 4 buah"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveIngredient(i)}
                        className="text-stone-500 hover:text-red-400 transition p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Peralatan Tradisional ({tools.length})
                    </h3>
                    <p className="text-[11px] text-stone-400">
                      Peralatan bambu, cobek batu, alat tenun, dsb.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddTool}
                    className="px-2.5 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs transition flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Tambah Alat</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {tools.map((tool, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-xs font-mono text-stone-500 w-5">{i + 1}.</span>
                      <input
                        type="text"
                        value={tool}
                        onChange={(e) => handleUpdateTool(i, e.target.value)}
                        className="flex-1 bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                        placeholder="Contoh: Sumpit bambu (Sippo)"
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveTool(i)}
                        className="text-stone-500 hover:text-red-400 transition p-1"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps or Narrative */}
              <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-amber-300">
                      Tahapan Pembuatan / Alur Kisah Tradisi ({steps.length})
                    </h3>
                    <p className="text-[11px] text-stone-400">
                      Perbaiki kata-kata di judul tahapan atau kalimat penjelasannya.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleAddStep}
                    className="px-2.5 py-1 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/30 text-xs transition flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Tambah Langkah</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {steps.map((st, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-lg bg-stone-900 border border-stone-800 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-mono font-bold text-amber-400">
                          Langkah {st.stepNumber || i + 1}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleRemoveStep(i)}
                          className="text-stone-500 hover:text-red-400 transition p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <input
                        type="text"
                        value={st.title}
                        onChange={(e) => handleUpdateStep(i, 'title', e.target.value)}
                        className="w-full bg-stone-950 border border-stone-800 rounded px-2.5 py-1.5 text-xs text-amber-100 font-serif font-bold focus:outline-none focus:border-amber-500"
                        placeholder="Judul Tahap (misal: Mengaduk Adonan Sagu Air Mendidih)"
                      />

                      <textarea
                        rows={2}
                        value={st.description}
                        onChange={(e) => handleUpdateStep(i, 'description', e.target.value)}
                        className="w-full bg-stone-950 border border-stone-800 rounded p-2 text-xs text-stone-300 font-sans focus:outline-none focus:border-amber-500"
                        placeholder="Penjelasan tahapan detail..."
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: CARI & GANTI KATA OTOMATIS */}
          {activeTab === 'find_replace' && (
            <div className="p-5 rounded-2xl bg-stone-950/80 border border-amber-900/40 space-y-5">
              <div>
                <h3 className="font-serif font-bold text-base text-amber-200 flex items-center gap-2">
                  <Replace className="w-4 h-4 text-amber-400" />
                  Alat Otomatis: Cari & Ganti Kata yang Salah Ketik
                </h3>
                <p className="text-xs text-stone-400 mt-1">
                  Fitur ini akan mencari seluruh kata yang salah di seluruh bagian teks naskah ini (judul, ringkasan, nama tetua, istilah daerah, bahan, dan langkah) lalu menggantinya secara serentak.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">
                    Kata yang Salah / Ingin Diganti:
                  </label>
                  <input
                    type="text"
                    value={findWord}
                    onChange={(e) => setFindWord(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-red-300 focus:outline-none focus:border-amber-500 font-mono"
                    placeholder="Contoh: kapurung (salah ketik: kaprung)"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">
                    Ganti dengan Kata yang Benar:
                  </label>
                  <input
                    type="text"
                    value={replaceWord}
                    onChange={(e) => setReplaceWord(e.target.value)}
                    className="w-full bg-stone-900 border border-stone-800 rounded-xl px-3.5 py-2.5 text-xs text-emerald-300 focus:outline-none focus:border-amber-500 font-mono"
                    placeholder="Contoh: Kapurung Asli"
                  />
                </div>
              </div>

              {replaceCountNotice && (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200">
                  {replaceCountNotice}
                </div>
              )}

              <button
                type="button"
                onClick={handlePerformReplace}
                disabled={!findWord.trim()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 disabled:opacity-50 text-stone-950 font-bold text-xs shadow-md transition"
              >
                <Replace className="w-3.5 h-3.5" />
                <span>Jalankan Cari & Ganti Kata di Seluruh Naskah</span>
              </button>
            </div>
          )}

          {/* Editor Note & Attribution Bar (Always at bottom) */}
          <div className="p-4 rounded-xl bg-stone-950/90 border border-stone-800/80 space-y-3">
            <div className="flex items-center gap-2 text-xs text-stone-400 font-semibold uppercase tracking-wider">
              <History className="w-3.5 h-3.5 text-amber-400" />
              <span>Transparansi Koreksi & Catatan Editor</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-[11px] text-stone-400">
                  Nama Anda (Pengkoreksi):
                </label>
                <input
                  type="text"
                  value={editorName}
                  onChange={(e) => setEditorName(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-lg px-3 py-1.5 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                  placeholder="Misal: Andi Tenri (Pemerhati Bahasa Bugis)"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] text-stone-400">
                  Catatan Perbaikan:
                </label>
                <input
                  type="text"
                  value={correctionNote}
                  onChange={(e) => setCorrectionNote(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-lg px-3 py-1.5 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                  placeholder="Misal: Memperbaiki ejaan patikala dan makna tabaro"
                />
              </div>
            </div>

            {item.lastEditedBy && (
              <p className="text-[11px] text-stone-500 italic pt-1">
                Catatan: Warisan ini sebelumnya pernah dikoreksi oleh{' '}
                <strong className="text-stone-300">{item.lastEditedBy}</strong> pada{' '}
                {item.lastEditedAt || 'waktu sebelumnya'} (Total {item.editCount || 1}x revisi).
              </p>
            )}
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-stone-800 text-stone-300 hover:bg-stone-800 text-xs font-medium transition"
            >
              Batal
            </button>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                type="submit"
                disabled={showSavedFeedback}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-stone-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition active:scale-95"
              >
                {showSavedFeedback ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-950" />
                    <span>Perubahan Berhasil Disimpan!</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Simpan Perubahan Kata</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
