import React, { useState } from 'react';
import { X, AlertTriangle, BookOpen, Send, CheckCircle2, ShieldCheck, Info } from 'lucide-react';
import { HeritageItem, ErrorReport } from '../types/heritage';
import { saveErrorReport } from '../utils/storage';

interface ReportErrorModalProps {
  item: HeritageItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess?: (message: string) => void;
}

export const ReportErrorModal: React.FC<ReportErrorModalProps> = ({
  item,
  isOpen,
  onClose,
  onSubmitSuccess,
}) => {
  const [reporterName, setReporterName] = useState('');
  const [reporterContact, setReporterContact] = useState('');
  const [errorType, setErrorType] = useState<ErrorReport['errorType']>('sanggahan_sejarah');
  const [description, setDescription] = useState('');
  const [suggestedCorrection, setSuggestedCorrection] = useState('');
  const [referenceSource, setReferenceSource] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen || !item) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reporterName.trim() || !description.trim()) return;

    setIsSubmitting(true);
    const newReport: ErrorReport = {
      id: `report-${Date.now()}`,
      heritageId: item.id,
      heritageTitle: item.title,
      reporterName: reporterName.trim(),
      reporterContact: reporterContact.trim() || undefined,
      errorType,
      description: description.trim(),
      suggestedCorrection: suggestedCorrection.trim() || undefined,
      referenceSource: referenceSource.trim() || undefined,
      submittedAt: new Date().toLocaleDateString('id-ID', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
      status: 'menunggu_tinjauan',
    };

    saveErrorReport(newReport);
    setIsSubmitting(false);
    setSubmitted(true);

    if (onSubmitSuccess) {
      onSubmitSuccess(
        'Laporan perbaikan data & usulan referensi Anda berhasil dicatat. Terima kasih atas kontribusi kurasi budaya!'
      );
    }

    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-stone-900 border border-amber-900/50 rounded-2xl shadow-2xl text-stone-100 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header decoration */}
        <div className="h-2 w-full bg-gradient-to-r from-red-600 via-amber-500 to-amber-600" />

        {/* Modal Header */}
        <div className="px-6 py-4 bg-stone-900/90 border-b border-stone-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-amber-100">
                Kritik, Koreksi & Usulan Referensi Ilmiah
              </h3>
              <p className="text-xs text-stone-400">
                Partisipasi Komunitas & Peneliti untuk Validitas Budaya
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

        {/* Modal Body / Form */}
        <div className="p-6 overflow-y-auto space-y-5 flex-1">
          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-serif font-bold text-amber-100">
                  Laporan Anda Telah Diterima!
                </h4>
                <p className="text-sm text-stone-300 max-w-md">
                  Terima kasih telah berkontribusi menjaga kejujuran informasi dan integritas
                  referensi budaya Sulawesi.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Target Article Banner */}
              <div className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 flex items-start gap-3 text-xs">
                <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <span className="text-stone-400 block font-mono">Artikel yang Ditinjau:</span>
                  <span className="font-semibold text-stone-200 text-sm block">
                    {item.title}
                  </span>
                  <span className="text-amber-400/90 font-mono">
                    Suku {item.tribe} • {item.province}
                  </span>
                </div>
              </div>

              {/* Error Type Selector */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-stone-300 block">
                  Jenis Koreksi / Sanggahan:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {[
                    { key: 'sanggahan_sejarah', label: 'Sanggahan Fakta / Klaim Sejarah' },
                    { key: 'saran_referensi', label: 'Penambahan Rujukan / Jurnal / Buku' },
                    { key: 'kekeliruan_istilah', label: 'Kekeliruan Istilah Bahasa / Falsafah' },
                    { key: 'salah_ejaan', label: 'Kesalahan Ejaan / Typo Naskah' },
                    { key: 'lainnya', label: 'Koreksi Data / Status Narasumber' },
                  ].map((t) => (
                    <button
                      key={t.key}
                      type="button"
                      onClick={() => setErrorType(t.key as any)}
                      className={`p-2.5 rounded-xl border text-left transition flex items-center justify-between ${
                        errorType === t.key
                          ? 'bg-amber-500/20 border-amber-500/50 text-amber-200 font-semibold'
                          : 'bg-stone-950/50 border-stone-800 text-stone-400 hover:text-stone-200 hover:border-stone-700'
                      }`}
                    >
                      <span>{t.label}</span>
                      {errorType === t.key && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reporter Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">
                    Nama Peneliti / Pengusul: *
                  </label>
                  <input
                    type="text"
                    required
                    value={reporterName}
                    onChange={(e) => setReporterName(e.target.value)}
                    placeholder="Contoh: Dr. Andi Rahmat / Warga Lokal Bone"
                    className="w-full px-3 py-2 bg-stone-950/70 border border-stone-800 rounded-xl text-stone-200 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-stone-300">
                    Instansi / Kontak (Opsional):
                  </label>
                  <input
                    type="text"
                    value={reporterContact}
                    onChange={(e) => setReporterContact(e.target.value)}
                    placeholder="Contoh: BPK Wilayah XIX / email@instansi.ac.id"
                    className="w-full px-3 py-2 bg-stone-950/70 border border-stone-800 rounded-xl text-stone-200 text-xs focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Description of Error */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">
                  Uraian Kekeliruan / Catatan Kritis: *
                </label>
                <textarea
                  required
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Jelaskan bagian mana dari artikel yang kurang tepat atau membutuhkan klarifikasi lebih objektif..."
                  className="w-full px-3 py-2 bg-stone-950/70 border border-stone-800 rounded-xl text-stone-200 text-xs focus:outline-none focus:border-amber-500 leading-relaxed"
                />
              </div>

              {/* Reference Source */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Sumber Referensi / Buku / Naskah Pembanding:</span>
                </label>
                <input
                  type="text"
                  value={referenceSource}
                  onChange={(e) => setReferenceSource(e.target.value)}
                  placeholder="Contoh: Mattulada (1985) 'Latoa', hal. 45; atau Naskah Lontara Patturioloang"
                  className="w-full px-3 py-2 bg-stone-950/70 border border-stone-800 rounded-xl text-stone-200 text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Suggested Correction */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-300">
                  Usulan Teks Perbaikan (Opsional):
                </label>
                <textarea
                  rows={2}
                  value={suggestedCorrection}
                  onChange={(e) => setSuggestedCorrection(e.target.value)}
                  placeholder="Tuliskan usulan redaksi yang lebih tepat dan berimbang..."
                  className="w-full px-3 py-2 bg-stone-950/70 border border-stone-800 rounded-xl text-stone-200 text-xs focus:outline-none focus:border-amber-500 leading-relaxed"
                />
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs transition"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting || !reporterName.trim() || !description.trim()}
                  className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs flex items-center gap-2 transition disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim Laporan Koreksi</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
