import React, { useState, useEffect, useMemo } from 'react';
import {
  X,
  Volume2,
  VolumeX,
  Share2,
  Printer,
  Heart,
  Bookmark,
  Calendar,
  User,
  GraduationCap,
  MapPin,
  Clock,
  Sparkles,
  Flame,
  CheckCircle2,
  FileText,
  ChevronRight,
  BookOpen,
  Edit3,
  AlertTriangle,
  ShieldCheck,
  Compass,
  Copy,
  Check,
  Scale,
  ExternalLink,
  Tag,
} from 'lucide-react';
import { HeritageItem, CulturalReference } from '../types/heritage';
import { speakText, stopSpeaking } from '../utils/storage';
import {
  VERIFICATION_STATUS_CONFIG,
  NARRATOR_STATUS_CONFIG,
} from '../utils/academicEnrichment';
import { ReportErrorModal } from './ReportErrorModal';

interface HeritageDetailModalProps {
  item: HeritageItem | null;
  allItems?: HeritageItem[];
  isOpen: boolean;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
  onOpenEdit?: (item: HeritageItem) => void;
  onSelectItem?: (item: HeritageItem) => void;
}

export const HeritageDetailModal: React.FC<HeritageDetailModalProps> = ({
  item,
  allItems = [],
  isOpen,
  onClose,
  isBookmarked,
  onToggleBookmark,
  onOpenEdit,
  onSelectItem,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [liked, setLiked] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'larger'>('normal');
  const [copiedCitation, setCopiedCitation] = useState(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  // Compute related items based on tribe, category, or shared tags
  const relatedItems = useMemo(() => {
    if (!item || allItems.length === 0) return [];
    return allItems
      .filter((other) => other.id !== item.id)
      .map((other) => {
        let score = 0;
        if (other.tribe === item.tribe) score += 3;
        if (other.category === item.category) score += 2;
        const sharedTags = other.tags.filter((t) => item.tags.includes(t));
        score += sharedTags.length;
        return { item: other, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3)
      .map((x) => x.item);
  }, [item, allItems]);

  if (!isOpen || !item) return null;

  const handleToggleVoiceReader = () => {
    if (isPlayingAudio) {
      stopSpeaking();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      const textToRead = `${item.title}. Warisan dari Suku ${item.tribe}, ${item.province}. Penuturan oleh ${item.elderNarrator.name}. ${item.summary}. Makna filosofis: ${item.philosophicalMeaning}. Pesan tetua: ${item.preservationAdvice}`;
      speakText(textToRead, () => {
        setIsPlayingAudio(false);
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShareAndCitation = async () => {
    const citation = `"${item.title}". Warisan Digital Sulawesi: Suku ${item.tribe}, ${item.province}. Dicatat oleh ${item.recordedBy.name} (${item.recordedBy.schoolOrAffiliation}). Akses Repositori Budaya Sulawesi.`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: item.title,
          text: citation,
          url: window.location.href,
        });
        return;
      } catch (err) {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(citation);
      setCopiedCitation(true);
      setTimeout(() => setCopiedCitation(false), 3000);
    } catch {
      // Fallback
    }
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'resep':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'bahasa':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'kerajinan':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 'tani_bahari':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      case 'permainan':
        return 'bg-pink-500/20 text-pink-300 border-pink-500/40';
      case 'cerita_sejarah':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40';
      default:
        return 'bg-stone-700/40 text-stone-300 border-stone-600';
    }
  };

  const verificationConfig =
    VERIFICATION_STATUS_CONFIG[item.verificationStatus || 'tradisi_lisan'];

  const narratorConfig =
    NARRATOR_STATUS_CONFIG[item.elderNarrator.status || 'tokoh_nyata'];

  // Font size classes
  const fontBodyClass =
    fontSize === 'larger'
      ? 'text-base sm:text-lg leading-relaxed'
      : fontSize === 'large'
      ? 'text-sm sm:text-base leading-relaxed'
      : 'text-xs sm:text-sm leading-relaxed';

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
        <div className="relative w-full max-w-4xl bg-stone-900 border border-amber-900/50 rounded-2xl shadow-2xl text-stone-100 overflow-hidden flex flex-col max-h-[92vh]">
          {/* Cultural top banner */}
          <div className="h-2 w-full bg-gradient-to-r from-amber-600 via-red-600 to-amber-500" />

          {/* Toast Notification */}
          {toastMessage && (
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-xl bg-emerald-950/90 text-emerald-200 border border-emerald-500/50 text-xs font-semibold shadow-xl flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* Modal Header */}
          <div className="px-6 py-4 bg-stone-900/95 border-b border-stone-800 flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2 flex-wrap">
              <span
                className={`text-xs uppercase font-mono px-2.5 py-0.5 rounded-full border ${getCategoryColor(
                  item.category
                )}`}
              >
                {item.category.replace('_', ' ')}
              </span>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
                Suku {item.tribe}
              </span>

              {/* Trust & Verification Status Badge */}
              <div
                title={verificationConfig.description}
                className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border flex items-center gap-1.5 cursor-help ${verificationConfig.badgeClass}`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${verificationConfig.dotColor}`} />
                <span>{verificationConfig.label}</span>
              </div>
            </div>

            {/* Action Buttons Top Bar */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Font Size Selector (A- / A / A+) */}
              <div className="hidden sm:flex items-center rounded-xl bg-stone-800 border border-stone-700 p-0.5 text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setFontSize('normal')}
                  title="Ukuran teks normal"
                  className={`px-2 py-1 rounded-lg transition ${
                    fontSize === 'normal'
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  A
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('large')}
                  title="Ukuran teks sedang"
                  className={`px-2 py-1 rounded-lg transition ${
                    fontSize === 'large'
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  A+
                </button>
                <button
                  type="button"
                  onClick={() => setFontSize('larger')}
                  title="Ukuran teks besar"
                  className={`px-2 py-1 rounded-lg transition ${
                    fontSize === 'larger'
                      ? 'bg-amber-500 text-stone-950 font-bold'
                      : 'text-stone-400 hover:text-stone-200'
                  }`}
                >
                  A++
                </button>
              </div>

              {/* Audio Voice Reader */}
              <button
                onClick={handleToggleVoiceReader}
                title="Dengarkan pembacaan naskah lisan"
                className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition ${
                  isPlayingAudio
                    ? 'bg-amber-500 text-stone-950 border-amber-400 animate-pulse'
                    : 'bg-stone-800 hover:bg-stone-700 text-amber-300 border-stone-700'
                }`}
              >
                {isPlayingAudio ? (
                  <>
                    <VolumeX className="w-4 h-4" />
                    <span className="hidden md:inline">Hentikan</span>
                  </>
                ) : (
                  <>
                    <Volume2 className="w-4 h-4" />
                    <span className="hidden md:inline">Suara</span>
                  </>
                )}
              </button>

              {/* Share & Copy Citation */}
              <button
                onClick={handleShareAndCitation}
                title="Salin Sitasi Ilmiah & Bagikan"
                className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 text-xs flex items-center gap-1 transition"
              >
                {copiedCitation ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="hidden md:inline text-emerald-300">Tersalin</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span className="hidden md:inline">Bagikan</span>
                  </>
                )}
              </button>

              {/* Report Error / Suggest Academic Reference */}
              <button
                onClick={() => setIsReportModalOpen(true)}
                title="Laporkan kekeliruan atau usulkan referensi ilmiah pembanding"
                className="p-2 rounded-xl bg-stone-800 hover:bg-red-950/50 text-red-300 border border-red-900/50 text-xs flex items-center gap-1 transition"
              >
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span className="hidden md:inline">Koreksi Data</span>
              </button>

              {/* Bookmark */}
              <button
                onClick={() => onToggleBookmark(item.id)}
                title="Simpan ke Favorit"
                className={`p-2 rounded-xl border transition ${
                  isBookmarked
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                    : 'bg-stone-800 hover:bg-stone-700 text-stone-400 border-stone-700'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
              </button>

              {/* Close Button */}
              <button
                onClick={() => {
                  stopSpeaking();
                  onClose();
                }}
                className="p-2 rounded-xl text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 print:p-0 print:bg-white print:text-black">
            {/* Title & Subtitle */}
            <div className="space-y-3 border-b border-stone-800 pb-5">
              <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-amber-100">
                {item.title}
              </h2>
              <p className="text-sm sm:text-base text-stone-300 font-serif leading-relaxed">
                {item.subtitle}
              </p>

              {/* Epistemological Banner (Especially for I La Galigo / Mythological Epics) */}
              {item.epistemologicalNote && (
                <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 text-xs text-purple-200 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-purple-300 font-serif">
                    <Sparkles className="w-4 h-4" />
                    <span>Catatan Metodologis & Konteks Sastra Klasik:</span>
                  </div>
                  <p className="leading-relaxed text-stone-300 font-serif italic">
                    {item.epistemologicalNote}
                  </p>
                </div>
              )}

              {/* Geographic Hierarchy & Coordinate Metadata */}
              <div className="p-3.5 rounded-xl bg-stone-950/70 border border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-stone-300">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    Wilayah Adat: <strong>{item.regionDetail}</strong> ({item.province})
                  </span>
                </div>
                {item.geographicData?.coordinates && (
                  <div className="flex items-center gap-1.5 font-mono text-[11px] text-stone-400">
                    <Compass className="w-3.5 h-3.5 text-blue-400" />
                    <span>
                      GPS: {item.geographicData.coordinates.lat.toFixed(4)},{' '}
                      {item.geographicData.coordinates.lng.toFixed(4)}
                    </span>
                  </div>
                )}
              </div>

              {/* Informant / Narrator & Documentation Team Card */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* Elder Narrator Card with Verification Status */}
                <div className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-5 h-5" />
                  </div>
                  <div className="text-xs space-y-1 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-stone-400 font-mono text-[11px]">Narasumber:</span>
                      <span
                        title={narratorConfig.description}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-stone-800 text-stone-300 border border-stone-700 font-mono"
                      >
                        {narratorConfig.label}
                      </span>
                    </div>
                    <span className="font-semibold text-stone-200 block text-sm">
                      {item.elderNarrator.name}{' '}
                      {item.elderNarrator.age ? `(${item.elderNarrator.age} thn)` : ''}
                    </span>
                    <p className="text-stone-400 text-[11px]">
                      {item.elderNarrator.titleOrRole} • {item.elderNarrator.location}
                    </p>
                  </div>
                </div>

                {/* Recorder / Educational Team Card */}
                <div className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="text-xs space-y-1 flex-1">
                    <span className="text-stone-400 block font-mono text-[11px]">
                      Didokumentasikan oleh:
                    </span>
                    <span className="font-semibold text-stone-200 block text-sm">
                      {item.recordedBy.name}
                    </span>
                    <p className="text-stone-400 text-[11px]">
                      {item.recordedBy.schoolOrAffiliation} • {item.recordedBy.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary & Philosophical Meaning */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
              <div className="md:col-span-7 space-y-3">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-amber-400" />
                  Ringkasan Pengetahuan & Konteks Budaya
                </h3>
                <p className={`${fontBodyClass} text-stone-200 font-serif`}>
                  {item.summary}
                </p>
                {item.estimatedEra && (
                  <div className="text-xs text-stone-400 flex items-center gap-1.5 pt-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400/80" />
                    <span>Akar Sejarah / Tradisi: {item.estimatedEra}</span>
                  </div>
                )}
              </div>

              <div className="md:col-span-5 bg-gradient-to-br from-amber-950/50 to-stone-950 p-4 rounded-xl border border-amber-800/40 space-y-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-amber-400" />
                  Makna Filosofis & Nilai Moral
                </h3>
                <p className={`${fontBodyClass} text-amber-100/90 font-serif italic`}>
                  "{item.philosophicalMeaning}"
                </p>
              </div>
            </div>

            {/* Local Dialect Words / Vocabulary */}
            {item.localTerms && item.localTerms.length > 0 && (
              <div className="space-y-3 border-t border-stone-800 pt-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    Kamus Kosa Kata & Istilah Bahasa Daerah ({item.localTerms.length})
                  </h3>
                  <span className="text-[11px] text-stone-400">Klik ikon suara untuk dengar lafal</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {item.localTerms.map((term, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-stone-950/70 border border-stone-800 space-y-1.5 hover:border-amber-700/50 transition"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-bold text-amber-200 text-sm">
                          {term.term}
                        </span>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => speakText(term.term)}
                            title="Dengarkan pengucapan istilah"
                            className="p-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                          {onOpenEdit && (
                            <button
                              onClick={() => onOpenEdit(item)}
                              title="Koreksi ejaan atau arti istilah ini"
                              className="p-1 rounded bg-stone-800 hover:bg-amber-950 text-stone-400 hover:text-amber-300 transition"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                      <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 inline-block">
                        {term.language}
                      </span>
                      <p className="text-xs text-stone-400 leading-snug">{term.meaning}</p>
                      {term.pronunciationTip && (
                        <p className="text-[11px] text-stone-500 italic">
                          Lafal: {term.pronunciationTip}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Ingredients / Materials & Tools */}
            {((item.ingredientsOrMaterials && item.ingredientsOrMaterials.length > 0) ||
              (item.toolsUsed && item.toolsUsed.length > 0)) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-stone-800 pt-5">
                {item.ingredientsOrMaterials && item.ingredientsOrMaterials.length > 0 && (
                  <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                      Bahan / Komponen Utama
                    </h3>
                    <ul className="text-xs text-stone-300 space-y-1.5 list-disc list-inside font-serif">
                      {item.ingredientsOrMaterials.map((ing, i) => (
                        <li key={i}>{ing}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.toolsUsed && item.toolsUsed.length > 0 && (
                  <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 space-y-2">
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                      Peralatan Tradisional
                    </h3>
                    <ul className="text-xs text-stone-300 space-y-1.5 list-disc list-inside font-serif">
                      {item.toolsUsed.map((tool, i) => (
                        <li key={i}>{tool}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* Steps & Narrative Flow */}
            {item.stepsOrNarrative && item.stepsOrNarrative.length > 0 && (
              <div className="space-y-4 border-t border-stone-800 pt-5">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                  Tahapan Proses & Tata Cara Tradisional ({item.stepsOrNarrative.length} Langkah)
                </h3>

                <div className="space-y-3">
                  {item.stepsOrNarrative.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 flex gap-4 items-start"
                    >
                      <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center justify-center font-mono text-sm font-bold shrink-0 mt-0.5">
                        {step.stepNumber || idx + 1}
                      </div>
                      <div className="space-y-1 flex-1">
                        <h4 className="font-serif font-bold text-amber-100 text-sm">
                          {step.title}
                        </h4>
                        <p className={`${fontBodyClass} text-stone-300 font-sans`}>
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Preservation Advice */}
            {item.preservationAdvice && (
              <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/30 to-stone-950 border border-amber-800/40 text-xs text-amber-200 space-y-1">
                <span className="font-semibold text-amber-300 block">
                  Pesan & Amanah Pelestarian untuk Generasi Muda:
                </span>
                <p className={`${fontBodyClass} font-serif italic text-amber-100/90`}>
                  "{item.preservationAdvice}"
                </p>
              </div>
            )}

            {/* Academic References & Bibliography */}
            {item.references && item.references.length > 0 && (
              <div className="space-y-3 border-t border-stone-800 pt-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-amber-400" />
                    <span>Daftar Referensi & Rujukan Ilmiah ({item.references.length})</span>
                  </h3>
                  <span className="text-[11px] text-stone-400">Verifikasi Dokumen Budaya</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  {item.references.map((ref, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 space-y-1.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-stone-850 text-amber-400 border border-stone-700">
                          {ref.type.replace('_', ' ')}
                        </span>
                        {ref.year && (
                          <span className="text-stone-400 font-mono text-[11px]">
                            {ref.year}
                          </span>
                        )}
                      </div>
                      <h5 className="font-serif font-bold text-stone-200 text-xs leading-snug">
                        {ref.title}
                      </h5>
                      <p className="text-stone-400 text-[11px]">
                        Oleh: <strong>{ref.authorOrInstitution}</strong>
                      </p>
                      {ref.details && (
                        <p className="text-stone-400 text-[11px] italic">{ref.details}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Documentation Metadata & Open License */}
            {item.documentationMeta && (
              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800/80 space-y-2 text-xs">
                <div className="flex items-center gap-1.5 text-stone-300 font-semibold">
                  <Scale className="w-4 h-4 text-emerald-400" />
                  <span>Metadata Dokumentasi & Hak Penggunaan:</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-stone-400">
                  <div>
                    <span className="text-stone-400">Tahun Pencatatan: </span>
                    <span className="text-stone-300 font-mono">
                      {item.documentationMeta.recordingYear}
                    </span>
                  </div>
                  <div>
                    <span className="text-stone-400">Institusi / Mitra: </span>
                    <span className="text-stone-300">
                      {item.documentationMeta.recordingInstitution}
                    </span>
                  </div>
                  <div className="sm:col-span-2">
                    <span className="text-stone-400">Lisensi Konten: </span>
                    <span className="text-emerald-400/90 font-mono">
                      {item.documentationMeta.imageSourceOrLicense}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* Related Cultural Entries */}
            {relatedItems.length > 0 && onSelectItem && (
              <div className="space-y-3 border-t border-stone-800 pt-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>Rekomendasi Terkait Suku & Tema</span>
                  </h3>
                  <span className="text-[11px] text-stone-400">Jelajahi hubungan budaya</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {relatedItems.map((rel) => (
                    <button
                      key={rel.id}
                      type="button"
                      onClick={() => onSelectItem(rel)}
                      className="p-3 rounded-xl bg-stone-950/70 border border-stone-800 text-left hover:border-amber-600/50 hover:bg-stone-950 transition flex flex-col justify-between space-y-2 group"
                    >
                      <div className="space-y-1">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/20 inline-block">
                          Suku {rel.tribe}
                        </span>
                        <h5 className="font-serif font-bold text-xs text-stone-200 group-hover:text-amber-200 transition line-clamp-2">
                          {rel.title}
                        </h5>
                      </div>
                      <div className="flex items-center text-[11px] text-amber-400 font-semibold group-hover:translate-x-0.5 transition">
                        <span>Baca Artikel</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Metadata */}
            <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400">
              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag, i) => (
                  <span key={i} className="px-2 py-0.5 rounded bg-stone-800 text-stone-300 font-mono">
                    #{tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {/* Correction trigger button */}
                {onOpenEdit && (
                  <button
                    onClick={() => onOpenEdit(item)}
                    className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 text-xs transition"
                  >
                    <Edit3 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Koreksi Teks</span>
                  </button>
                )}

                {/* Report error trigger button */}
                <button
                  onClick={() => setIsReportModalOpen(true)}
                  className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-red-950/40 text-stone-300 hover:text-red-300 border border-stone-700 text-xs transition"
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Laporkan Kesalahan</span>
                </button>

                {/* Like appreciation button */}
                <button
                  onClick={() => setLiked(!liked)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition ${
                    liked
                      ? 'bg-red-950/60 text-red-400 border-red-800'
                      : 'bg-stone-800 text-stone-400 hover:text-stone-200 border-stone-700'
                  }`}
                >
                  <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-current' : ''}`} />
                  <span>{(item.likesCount || 0) + (liked ? 1 : 0)}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Report Error Modal */}
      <ReportErrorModal
        item={item}
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
        onSubmitSuccess={(msg) => setToastMessage(msg)}
      />
    </>
  );
};
