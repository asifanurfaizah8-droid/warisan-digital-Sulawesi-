import React, { useState } from 'react';
import {
  X,
  Save,
  BookOpen,
  User,
  GraduationCap,
  Plus,
  Trash2,
  FileText,
} from 'lucide-react';
import {
  HeritageItem,
  HeritageCategory,
  Province,
  Tribe,
  LocalTerm,
  StepOrNarrative,
} from '../types/heritage';

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
    { stepNumber: 1, title: 'Persiapan Awal', description: '' },
  ]);
  const [tagsInput, setTagsInput] = useState('');

  // Sync province when tribe changes
  const handleTribeChange = (t: Tribe) => {
    setSelectedTribe(t);
    const found = TRIBES_MAPPING.find((m) => m.tribe === t);
    if (found) {
      setSelectedProvince(found.province);
    }
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
      <div className="relative w-full max-w-4xl bg-stone-900 border border-amber-900/60 rounded-2xl shadow-2xl text-stone-100 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Cultural top banner */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-600 via-red-600 to-amber-500" />

        {/* Modal Header */}
        <div className="px-6 py-4 bg-stone-900 border-b border-stone-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-red-700 flex items-center justify-center shadow-lg shadow-amber-900/40 text-stone-950 font-bold">
              <FileText className="w-5 h-5 text-stone-950" />
            </div>
            <div>
              <h2 className="font-serif font-black text-lg sm:text-xl text-amber-100">
                Tambah Warisan Budaya Baru
              </h2>
              <p className="text-xs text-stone-400">
                Pencatatan Pengetahuan Tradisi, Resep & Falsafah Luhur Sulawesi
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

        {/* Modal Form */}
        <form onSubmit={handleSave} className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Suku & Kategori Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-stone-950/70 border border-stone-800">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-300">Suku Adat (15 Suku)</label>
              <select
                value={selectedTribe}
                onChange={(e) => handleTribeChange(e.target.value as Tribe)}
                className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-2 text-xs text-amber-300 font-semibold focus:outline-none focus:border-amber-500"
              >
                {TRIBES_MAPPING.map((m) => (
                  <option key={m.tribe} value={m.tribe}>
                    Suku {m.tribe} ({m.province.replace('Sulawesi', 'Sul-')})
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-stone-300">Kategori Budaya</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as HeritageCategory)}
                className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-2 text-xs text-amber-300 font-semibold focus:outline-none focus:border-amber-500"
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
                placeholder="Contoh: Watampone, Bone"
              />
            </div>
          </div>

          {/* Form Content Fields */}
          <div className="space-y-4">
            {/* Title & Subtitle */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-amber-300">
                  Nama Warisan Budaya / Menu Makanan *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2 text-xs text-stone-100 focus:outline-none focus:border-amber-500 font-serif font-bold"
                  placeholder="Contoh: Kue Barongko Asli Bone"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Sub-judul / Penjelasan Singkat</label>
                <input
                  type="text"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500 font-serif"
                  placeholder="Kudapan Manis Lembut Berbungkus Daun Pisang"
                />
              </div>
            </div>

            {/* Narrator & Student Profiling */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-stone-950/70 border border-stone-800">
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-stone-300">Nama Tetua / Narasumber</label>
                <input
                  type="text"
                  value={elderName}
                  onChange={(e) => setElderName(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-100"
                  placeholder="Nenek Indo' Becce"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-stone-300">Peran / Bidang Adat</label>
                <input
                  type="text"
                  value={elderRole}
                  onChange={(e) => setElderRole(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-100"
                  placeholder="Pewaris Resep / Koki Adat"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-stone-300">Pencatat / Siswa</label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-100"
                  placeholder="Nama Pelajar"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-stone-300">Sekolah / Lembaga</label>
                <input
                  type="text"
                  value={studentSchool}
                  onChange={(e) => setStudentSchool(e.target.value)}
                  className="w-full bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1.5 text-xs text-stone-100"
                  placeholder="SMA Negeri 1 Watampone"
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
                placeholder="Ringkasan tentang asal-usul, cara pembuatan, bahan utama, dan maknanya..."
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
                placeholder="Falsafah moral atau kearifan hidup yang terkandung..."
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

            {/* Ingredients & Tools */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-stone-300">Bahan Utama / Unsur Tradisi</label>
                  <button
                    type="button"
                    onClick={() => setIngredients((prev) => [...prev, ''])}
                    className="text-[11px] text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Tambah Bahan</span>
                  </button>
                </div>
                {ingredients.map((ing, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <input
                      type="text"
                      value={ing}
                      onChange={(e) => {
                        const next = [...ingredients];
                        next[i] = e.target.value;
                        setIngredients(next);
                      }}
                      placeholder={`Bahan ${i + 1}`}
                      className="flex-1 bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1 text-xs text-stone-200"
                    />
                    <button
                      type="button"
                      onClick={() => setIngredients((p) => p.filter((_, idx) => idx !== i))}
                      className="p-1 text-stone-500 hover:text-red-400"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-stone-300">Alat Tradisional yang Digunakan</label>
                  <button
                    type="button"
                    onClick={() => setTools((prev) => [...prev, ''])}
                    className="text-[11px] text-amber-400 hover:text-amber-300 flex items-center gap-1"
                  >
                    <Plus className="w-3 h-3" />
                    <span>Tambah Alat</span>
                  </button>
                </div>
                {tools.map((tl, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <input
                      type="text"
                      value={tl}
                      onChange={(e) => {
                        const next = [...tools];
                        next[i] = e.target.value;
                        setTools(next);
                      }}
                      placeholder={`Alat ${i + 1}`}
                      className="flex-1 bg-stone-900 border border-stone-800 rounded-lg px-2.5 py-1 text-xs text-stone-200"
                    />
                    <button
                      type="button"
                      onClick={() => setTools((p) => p.filter((_, idx) => idx !== i))}
                      className="p-1 text-stone-500 hover:text-red-400"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                ))}
              </div>
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

            {/* Estimated Era & Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Akar Era / Sejarah</label>
                <input
                  type="text"
                  value={estimatedEra}
                  onChange={(e) => setEstimatedEra(e.target.value)}
                  placeholder="Contoh: Diwariskan sejak abad ke-17"
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">Tagar Pencarian (Pisahkan Koma)</label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="kuliner, barongko, bugis, kue_tradisional"
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-stone-200 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>
          </div>

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
