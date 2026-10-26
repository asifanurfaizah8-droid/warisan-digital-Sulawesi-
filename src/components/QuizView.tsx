import React, { useState, useEffect, useMemo } from 'react';
import {
  Award,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  BookOpen,
  ChevronRight,
  UtensilsCrossed,
  Palette,
  Compass,
  Trophy,
  Landmark,
  Layers,
  Shuffle,
  Volume2,
  VolumeX,
  ArrowLeft,
  Check,
  Flame,
  HelpCircle,
} from 'lucide-react';
import { SULAWESI_QUIZ_BANK, QUIZ_SECTIONS, QuizSectionConfig } from '../data/sulawesiQuizData';
import { QuizQuestion, HeritageCategory } from '../types/heritage';
import {
  getAnsweredQuizQuestionIds,
  markQuizQuestionAnswered,
  resetAnsweredQuizQuestions,
  recordQuizSession,
  getStoredQuizStats,
  speakText,
  stopSpeaking,
} from '../utils/storage';

interface QuizAnswerRecord {
  question: QuizQuestion;
  selectedOption: number;
  isCorrect: boolean;
}

export const QuizView: React.FC = () => {
  // Navigation & Config States
  const [selectedSectionId, setSelectedSectionId] = useState<string>('section-all');
  const [onlyUnanswered, setOnlyUnanswered] = useState<boolean>(true);
  const [roundQuestionCount, setRoundQuestionCount] = useState<number>(5);
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  // Active Game State
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [answerHistory, setAnswerHistory] = useState<QuizAnswerRecord[]>([]);

  // Persistent tracking state
  const [answeredIds, setAnsweredIds] = useState<string[]>([]);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [quizStats, setQuizStats] = useState(getStoredQuizStats());

  useEffect(() => {
    setAnsweredIds(getAnsweredQuizQuestionIds());
    setQuizStats(getStoredQuizStats());
  }, []);

  // Stop audio on unmount
  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  const currentSection = useMemo(() => {
    return (
      QUIZ_SECTIONS.find((s) => s.id === selectedSectionId) || QUIZ_SECTIONS[0]
    );
  }, [selectedSectionId]);

  // Questions belonging to the selected section
  const sectionQuestions = useMemo(() => {
    if (currentSection.category === 'all') {
      return SULAWESI_QUIZ_BANK;
    }
    return SULAWESI_QUIZ_BANK.filter((q) => q.category === currentSection.category);
  }, [currentSection]);

  // Questions in this section that have NOT been answered yet
  const unansweredSectionQuestions = useMemo(() => {
    const answeredSet = new Set(answeredIds);
    return sectionQuestions.filter((q) => !answeredSet.has(q.id));
  }, [sectionQuestions, answeredIds]);

  // Start a new game round
  const handleStartQuiz = () => {
    let pool = onlyUnanswered ? unansweredSectionQuestions : [...sectionQuestions];

    // If onlyUnanswered is active but all questions are answered, fall back to entire pool
    if (pool.length === 0) {
      pool = [...sectionQuestions];
    }

    // Shuffle pool with Fisher-Yates
    const shuffled = [...pool].sort(() => Math.random() - 0.5);

    // Slice according to selected count
    const countToTake =
      roundQuestionCount >= shuffled.length ? shuffled.length : roundQuestionCount;
    const selectedBatch = shuffled.slice(0, countToTake);

    setActiveQuestions(selectedBatch);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
    setAnswerHistory([]);
    setGameStarted(true);
    stopSpeaking();
  };

  const currentQ = activeQuestions[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered || !currentQ) return;
    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQ.answerIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Record answer
    setAnswerHistory((prev) => [
      ...prev,
      {
        question: currentQ,
        selectedOption: index,
        isCorrect,
      },
    ]);

    // Mark as answered in persistent storage so it will NOT repeat
    const updatedAnswered = markQuizQuestionAnswered(currentQ.id);
    setAnsweredIds(updatedAnswered);
  };

  const handleNext = () => {
    stopSpeaking();
    setIsSpeaking(false);
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      const finalScore = score + (selectedOption === currentQ.answerIndex && !isAnswered ? 1 : 0);
      recordQuizSession(score, activeQuestions.length);
      setQuizStats(getStoredQuizStats());
    }
  };

  const handleToggleSpeak = () => {
    if (!currentQ) return;
    if (isSpeaking) {
      stopSpeaking();
      setIsSpeaking(false);
    } else {
      const textToRead = `${currentQ.question}. Pilihan A: ${currentQ.options[0]}. Pilihan B: ${currentQ.options[1]}. Pilihan C: ${currentQ.options[2]}. Pilihan D: ${currentQ.options[3]}.`;
      setIsSpeaking(true);
      speakText(textToRead, () => setIsSpeaking(false));
    }
  };

  const handleResetSectionProgress = () => {
    const questionIdsInThisSection = sectionQuestions.map((q) => q.id);
    const updated = resetAnsweredQuizQuestions(questionIdsInThisSection);
    setAnsweredIds(updated);
  };

  const handleResetAllProgress = () => {
    if (confirm('Apakah Anda yakin ingin mereset seluruh riwayat bank soal? Semua soal akan ditandai belum pernah dijawab.')) {
      resetAnsweredQuizQuestions();
      setAnsweredIds([]);
    }
  };

  const getBadgeTitle = (finalScore: number, total: number) => {
    if (total === 0) return 'Pelajar Muda Budaya';
    const ratio = finalScore / total;
    if (ratio === 1) return 'Pewaris Luhur Kehormatan Sulawesi';
    if (ratio >= 0.75) return 'Duta Pelestari Warisan Nusantara';
    if (ratio >= 0.5) return 'Penjelajah Pengetahuan Komunitas Adat';
    return 'Pelajar Muda Pencinta Budaya';
  };

  const renderSectionIcon = (iconName: string) => {
    switch (iconName) {
      case 'UtensilsCrossed':
        return <UtensilsCrossed className="w-5 h-5" />;
      case 'BookOpen':
        return <BookOpen className="w-5 h-5" />;
      case 'Palette':
        return <Palette className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      case 'Trophy':
        return <Trophy className="w-5 h-5" />;
      case 'Landmark':
        return <Landmark className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in pb-12">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 border border-amber-900/30 rounded-2xl p-6 sm:p-8 text-stone-100 shadow-2xl space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-semibold tracking-wide">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Bank Soal Terstruktur Warisan Sulawesi</span>
          </div>

          <div className="flex items-center gap-3 text-xs text-stone-400 font-mono">
            <span className="flex items-center gap-1.5 bg-stone-950/70 px-3 py-1 rounded-lg border border-stone-800">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>
                {answeredIds.length} / {SULAWESI_QUIZ_BANK.length} Soal Dijawab
              </span>
            </span>
          </div>
        </div>

        <div className="space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-serif font-black text-amber-100 tracking-tight">
            Kuis Budaya & Uji Pengetahuan Sulawesi
          </h2>
          <p className="text-sm text-stone-300 font-serif leading-relaxed max-w-2xl">
            Pilih bagian pertanyaan tematik atau uji seluruh kebudayaan 15 suku. Fitur{' '}
            <strong className="text-amber-300 font-medium">Bebas Pengulangan</strong> memastikan Anda
            selalu disajikan soal-soal baru yang belum pernah dijawab sebelumnya!
          </p>
        </div>
      </div>

      {/* VIEW 1: SECTION SELECTION & QUIZ SETUP */}
      {!gameStarted ? (
        <div className="space-y-6">
          {/* Section Selection Cards */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-sm uppercase tracking-wider font-mono text-stone-400 font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4 text-amber-400" />
                <span>Pilih Bagian Kuis (Kategori Tematik)</span>
              </h3>
              <span className="text-xs text-stone-500 font-serif">
                Tersedia 6 Bagian Tematik + 1 Mode Campuran
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {QUIZ_SECTIONS.map((sec) => {
                const isSelected = sec.id === selectedSectionId;
                const totalInSec =
                  sec.category === 'all'
                    ? SULAWESI_QUIZ_BANK.length
                    : SULAWESI_QUIZ_BANK.filter((q) => q.category === sec.category).length;

                const answeredInSec =
                  sec.category === 'all'
                    ? answeredIds.length
                    : SULAWESI_QUIZ_BANK.filter(
                        (q) => q.category === sec.category && answeredIds.includes(q.id)
                      ).length;

                const percent = Math.min(100, Math.round((answeredInSec / totalInSec) * 100));

                return (
                  <button
                    key={sec.id}
                    onClick={() => setSelectedSectionId(sec.id)}
                    className={`relative p-5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between gap-3 group ${
                      isSelected
                        ? 'bg-gradient-to-b from-amber-950/40 to-stone-900 border-amber-500/80 shadow-lg shadow-amber-950/40 ring-1 ring-amber-500/40'
                        : 'bg-stone-900/70 border-stone-800 hover:border-amber-700/50 hover:bg-stone-850/80'
                    }`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center transition ${
                            isSelected
                              ? 'bg-amber-500 text-stone-950 font-bold'
                              : 'bg-stone-800 text-stone-400 group-hover:text-amber-300'
                          }`}
                        >
                          {renderSectionIcon(sec.iconName)}
                        </div>

                        {isSelected && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase font-bold bg-amber-400 text-stone-950">
                            Aktif
                          </span>
                        )}
                      </div>

                      <h4
                        className={`font-serif font-bold text-base leading-snug transition ${
                          isSelected ? 'text-amber-200' : 'text-stone-200 group-hover:text-amber-100'
                        }`}
                      >
                        {sec.title}
                      </h4>

                      <p className="text-xs text-stone-400 font-serif leading-relaxed line-clamp-2">
                        {sec.description}
                      </p>
                    </div>

                    {/* Progress indicator */}
                    <div className="space-y-1.5 pt-2 border-t border-stone-800/80">
                      <div className="flex items-center justify-between text-[11px] font-mono text-stone-400">
                        <span>
                          {answeredInSec}/{totalInSec} Soal Terjawab
                        </span>
                        <span className={percent === 100 ? 'text-emerald-400 font-bold' : ''}>
                          {percent}%
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-stone-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full transition-all duration-300 ${
                            percent === 100
                              ? 'bg-emerald-500'
                              : 'bg-gradient-to-r from-amber-500 to-amber-400'
                          }`}
                          style={{ width: `${percent}%` }}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quiz Configuration Panel */}
          <div className="bg-stone-900 border border-amber-900/30 rounded-2xl p-6 shadow-xl space-y-6">
            <div className="border-b border-stone-800 pb-4">
              <h3 className="font-serif font-bold text-lg text-amber-100">
                Pengaturan Ronde Kuis: {currentSection.title}
              </h3>
              <p className="text-xs text-stone-400 font-serif mt-1">
                Total ketersediaan soal di bagian ini: <strong>{sectionQuestions.length} soal</strong>{' '}
                ({unansweredSectionQuestions.length} soal belum pernah dijawab).
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Anti-repetition toggle */}
              <div className="space-y-2">
                <label className="text-xs uppercase font-mono font-bold tracking-wider text-stone-300 flex items-center gap-1.5">
                  <Shuffle className="w-3.5 h-3.5 text-amber-400" />
                  <span>Mode Bebas Pengulangan</span>
                </label>
                <div
                  onClick={() => setOnlyUnanswered(!onlyUnanswered)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition flex items-start gap-3 ${
                    onlyUnanswered
                      ? 'bg-amber-950/30 border-amber-600/60 text-stone-200'
                      : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:border-stone-700'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border ${
                      onlyUnanswered
                        ? 'bg-amber-500 border-amber-400 text-stone-950'
                        : 'border-stone-700 bg-stone-900'
                    }`}
                  >
                    {onlyUnanswered && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-sm font-serif font-semibold text-amber-100 block">
                      Hanya Soal yang Belum Terjawab
                    </span>
                    <p className="text-xs text-stone-400 font-serif leading-relaxed">
                      Sistem akan menyaring soal agar Anda tidak menemukan soal yang sama, kecuali jika
                      seluruh bank soal telah selesai dipelajari.
                    </p>
                  </div>
                </div>
              </div>

              {/* Number of questions per round */}
              <div className="space-y-2">
                <label className="text-xs uppercase font-mono font-bold tracking-wider text-stone-300 flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Jumlah Soal Ronde Ini</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[5, 10, 20].map((count) => {
                    const isSelected = roundQuestionCount === count;
                    return (
                      <button
                        key={count}
                        onClick={() => setRoundQuestionCount(count)}
                        className={`p-3 rounded-xl border text-center transition font-mono text-sm ${
                          isSelected
                            ? 'bg-amber-500 text-stone-950 border-amber-400 font-bold shadow-md shadow-amber-500/20'
                            : 'bg-stone-950/60 border-stone-800 text-stone-300 hover:bg-stone-800'
                        }`}
                      >
                        {count} Soal
                      </button>
                    );
                  })}
                </div>
                <p className="text-[11px] text-stone-500 font-serif">
                  *Ronde akan menyesuaikan secara otomatis jika jumlah soal yang tersisa lebih sedikit.
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-stone-800">
              <div className="flex items-center gap-3">
                {unansweredSectionQuestions.length === 0 && (
                  <button
                    onClick={handleResetSectionProgress}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-amber-400 hover:text-amber-300 hover:bg-amber-950/30 rounded-lg border border-amber-800/40 transition"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset Soal Bagian Ini ({sectionQuestions.length})</span>
                  </button>
                )}
                <button
                  onClick={handleResetAllProgress}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-stone-400 hover:text-red-400 hover:bg-red-950/20 rounded-lg border border-stone-800 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Seluruh Bank Soal</span>
                </button>
              </div>

              <button
                onClick={handleStartQuiz}
                className="inline-flex items-center gap-2.5 px-7 py-3 rounded-xl font-serif font-bold text-base text-stone-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-lg shadow-amber-500/25 transition transform active:scale-95"
              >
                <span>Mulai Kuis Sekarang</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      ) : !showResult ? (
        /* VIEW 2: ACTIVE QUESTION SCREEN */
        <div className="bg-stone-900 border border-amber-900/40 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
          {/* Top Bar with Back, Progress & Audio */}
          <div className="flex items-center justify-between border-b border-stone-800 pb-4">
            <button
              onClick={() => {
                stopSpeaking();
                setGameStarted(false);
              }}
              className="inline-flex items-center gap-1.5 text-xs font-mono text-stone-400 hover:text-amber-300 transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Ganti Bagian</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleSpeak}
                title="Dengarkan Soal (Teks ke Suara)"
                className={`p-2 rounded-lg border transition ${
                  isSpeaking
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300 animate-pulse'
                    : 'bg-stone-950 border-stone-800 text-stone-400 hover:text-stone-200'
                }`}
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="text-xs font-mono px-2.5 py-1 rounded bg-stone-950 border border-stone-800 text-amber-400">
                Skor: {score} Poin
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-stone-400 font-mono">
              <span>
                Soal {currentIndex + 1} dari {activeQuestions.length}
              </span>
              <span className="text-stone-400">
                {currentSection.title.replace('Bagian ', 'B')}
              </span>
            </div>
            <div className="w-full h-2 bg-stone-950 rounded-full overflow-hidden border border-stone-800">
              <div
                className="h-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-300 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / activeQuestions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Box */}
          <div className="space-y-3.5 pt-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] uppercase font-mono px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold">
                Suku {currentQ.tribe}
              </span>
              <span className="text-xs text-stone-400 font-serif">• {currentQ.province}</span>
              {currentQ.difficulty && (
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-stone-800 text-stone-400 border border-stone-700">
                  Tingkat: {currentQ.difficulty}
                </span>
              )}
            </div>

            <h3 className="font-serif font-bold text-lg sm:text-xl text-amber-100 leading-snug">
              {currentQ.question}
            </h3>
          </div>

          {/* Options Grid */}
          <div className="space-y-2.5">
            {currentQ.options.map((option, idx) => {
              let btnClass =
                'bg-stone-950/70 border-stone-800 text-stone-200 hover:bg-stone-850 hover:border-amber-700/60';

              if (isAnswered) {
                if (idx === currentQ.answerIndex) {
                  btnClass =
                    'bg-emerald-950/90 border-emerald-500 text-emerald-100 font-semibold ring-1 ring-emerald-500/50 shadow-md shadow-emerald-950/40';
                } else if (idx === selectedOption) {
                  btnClass =
                    'bg-red-950/80 border-red-500 text-red-200 font-semibold shadow-md shadow-red-950/40';
                } else {
                  btnClass = 'bg-stone-950/40 border-stone-850 text-stone-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-xl border text-left text-sm transition flex items-center justify-between gap-3 ${btnClass}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-full font-mono text-xs flex items-center justify-center shrink-0 border ${
                        isAnswered && idx === currentQ.answerIndex
                          ? 'bg-emerald-500 text-stone-950 border-emerald-400 font-bold'
                          : isAnswered && idx === selectedOption
                          ? 'bg-red-500 text-stone-950 border-red-400 font-bold'
                          : 'bg-stone-800 text-stone-300 border-stone-700'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="font-serif leading-relaxed">{option}</span>
                  </div>

                  {isAnswered && idx === currentQ.answerIndex && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isAnswered && idx === selectedOption && idx !== currentQ.answerIndex && (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box when answered */}
          {isAnswered && (
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs sm:text-sm text-stone-300 space-y-1.5 animate-in fade-in">
              <span className="font-semibold text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Penjelasan Edukasi Budaya:
              </span>
              <p className="font-serif leading-relaxed text-stone-200">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="pt-2 flex items-center justify-between">
              <span className="text-xs text-stone-400 font-serif">
                {selectedOption === currentQ.answerIndex ? (
                  <span className="text-emerald-400 font-semibold">✓ Jawaban Anda Benar!</span>
                ) : (
                  <span className="text-red-400 font-semibold">✗ Jawaban belum tepat</span>
                )}
              </span>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-serif font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-md shadow-amber-500/20 transition transform active:scale-95"
              >
                <span>
                  {currentIndex < activeQuestions.length - 1
                    ? 'Soal Berikutnya'
                    : 'Lihat Hasil & Gelar'}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* VIEW 3: RESULT & COMPREHENSIVE REVIEW SCREEN */
        <div className="space-y-6">
          <div className="bg-stone-900 border border-amber-900/40 rounded-2xl p-8 shadow-2xl text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center mx-auto text-stone-950 shadow-lg shadow-amber-500/30">
              <Award className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase font-mono tracking-widest text-amber-400 font-bold">
                Gelar Kehormatan Budaya
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-black text-amber-100">
                {getBadgeTitle(score, activeQuestions.length)}
              </h3>
              <p className="text-sm text-stone-300 font-serif">
                Anda berhasil menjawab benar <strong>{score}</strong> dari {activeQuestions.length} soal
                ({Math.round((score / activeQuestions.length) * 100)}%) pada{' '}
                <strong className="text-amber-200">{currentSection.title}</strong>!
              </p>
            </div>

            <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 text-xs text-stone-300 font-serif max-w-lg mx-auto leading-relaxed italic">
              "Kearifan leluhur tidak sekadar dihafal untuk ujian, melainkan diresapi ke dalam sikap
              hidup: memanusiakan sesama manusia dan menjaga kelestarian bumi Sulawesi."
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={handleStartQuiz}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-serif font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 transition shadow-md"
              >
                <Shuffle className="w-4 h-4" />
                <span>Ronde Berikutnya (Soal Baru)</span>
              </button>

              <button
                onClick={() => {
                  setGameStarted(false);
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-serif font-semibold text-stone-200 bg-stone-800 hover:bg-stone-750 border border-stone-700 transition"
              >
                <Layers className="w-4 h-4" />
                <span>Pilih Bagian Kuis Lain</span>
              </button>
            </div>
          </div>

          {/* Question Review Accordion / Cards */}
          <div className="bg-stone-900 border border-amber-900/30 rounded-2xl p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-stone-800 pb-3">
              <h3 className="font-serif font-bold text-base text-amber-100 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-400" />
                <span>Ulasan Jawaban & Rangkuman Pengetahuan</span>
              </h3>
              <span className="text-xs text-stone-400 font-mono">
                {answerHistory.filter((a) => a.isCorrect).length} Benar /{' '}
                {answerHistory.filter((a) => !a.isCorrect).length} Salah
              </span>
            </div>

            <div className="space-y-3">
              {answerHistory.map((rec, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl border space-y-2 text-xs transition ${
                    rec.isCorrect
                      ? 'bg-stone-950/50 border-emerald-900/50'
                      : 'bg-stone-950/50 border-red-950/60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[11px]">
                        <span className="font-mono text-stone-400 font-bold">#{i + 1}</span>
                        <span className="px-2 py-0.5 rounded bg-stone-800 text-stone-300 font-mono text-[10px]">
                          Suku {rec.question.tribe}
                        </span>
                        <span className="text-stone-500 font-serif">• {rec.question.province}</span>
                      </div>
                      <p className="font-serif font-semibold text-stone-200 text-sm">
                        {rec.question.question}
                      </p>
                    </div>

                    <div className="shrink-0 pt-1">
                      {rec.isCorrect ? (
                        <span className="inline-flex items-center gap-1 text-emerald-400 font-mono text-[11px] font-semibold">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Benar</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-red-400 font-mono text-[11px] font-semibold">
                          <XCircle className="w-4 h-4" />
                          <span>Salah</span>
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="space-y-1 pt-1 border-t border-stone-850">
                    <div className="text-stone-300 font-serif">
                      <span className="text-stone-500 font-mono">Jawaban Tepat: </span>
                      <strong className="text-emerald-300">
                        {rec.question.options[rec.question.answerIndex]}
                      </strong>
                    </div>

                    <p className="text-stone-400 font-serif leading-relaxed italic">
                      "{rec.question.explanation}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
