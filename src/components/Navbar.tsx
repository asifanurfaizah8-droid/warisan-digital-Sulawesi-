import React from 'react';
import {
  BookOpen,
  Compass,
  Sparkles,
  BookMarked,
  Landmark,
  Award,
  Plus,
  ShieldCheck,
  Sun,
  Moon,
  Type,
} from 'lucide-react';
import { FontSizeSetting, ThemeSetting } from '../utils/storage';

interface NavbarProps {
  activeTab: 'library' | 'map' | 'glossary' | 'quiz' | 'about';
  setActiveTab: (tab: 'library' | 'map' | 'glossary' | 'quiz' | 'about') => void;
  itemsCount: number;
  onOpenAdd?: () => void;
  theme: ThemeSetting;
  onToggleTheme: () => void;
  fontSize: FontSizeSetting;
  onChangeFontSize: (size: FontSizeSetting) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  itemsCount,
  onOpenAdd,
  theme,
  onToggleTheme,
  fontSize,
  onChangeFontSize,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-amber-900/40 text-stone-100 shadow-xl transition-colors duration-200">
      {/* Decorative top cultural band representing Sulawesi traditional patterns */}
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-700 via-red-600 to-amber-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Identity */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setActiveTab('library')}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-red-700 flex items-center justify-center shadow-lg shadow-amber-900/40 border border-amber-400/30">
              <Landmark className="w-5 h-5 text-stone-900" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-black text-xl tracking-tight text-amber-100">
                  Warisan Digital
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Sulawesi
                </span>
              </div>
              <p className="text-xs text-stone-400 font-sans hidden sm:block">
                Arsip Pengetahuan Tetua & Komunitas Adat
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-1.5">
            <button
              onClick={() => setActiveTab('library')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all ${
                activeTab === 'library'
                  ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40 shadow-inner'
                  : 'text-stone-300 hover:text-amber-200 hover:bg-stone-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Perpustakaan</span>
              <span className="text-[11px] px-1.5 py-0.2 rounded-full bg-stone-800 text-stone-300 font-mono">
                {itemsCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('map')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all ${
                activeTab === 'map'
                  ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40 shadow-inner'
                  : 'text-stone-300 hover:text-amber-200 hover:bg-stone-800/60'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Peta 15 Suku</span>
            </button>

            <button
              onClick={() => setActiveTab('glossary')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all ${
                activeTab === 'glossary'
                  ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40 shadow-inner'
                  : 'text-stone-300 hover:text-amber-200 hover:bg-stone-800/60'
              }`}
            >
              <BookMarked className="w-4 h-4" />
              <span>Kamus & Falsafah</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all ${
                activeTab === 'quiz'
                  ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40 shadow-inner'
                  : 'text-stone-300 hover:text-amber-200 hover:bg-stone-800/60'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Kuis Budaya</span>
            </button>

            <button
              onClick={() => setActiveTab('about')}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs lg:text-sm font-medium transition-all ${
                activeTab === 'about'
                  ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40 shadow-inner'
                  : 'text-stone-300 hover:text-amber-200 hover:bg-stone-800/60'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Metodologi & Kurasi</span>
            </button>
          </nav>

          {/* Action on the right: Accessibility & Add */}
          <div className="flex items-center gap-2">
            {/* Font scale quick button */}
            <div className="hidden xl:flex items-center rounded-xl bg-stone-950 border border-stone-800 p-0.5 text-xs font-mono">
              <button
                type="button"
                onClick={() => onChangeFontSize('normal')}
                title="Ukuran Font Normal"
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
                onClick={() => onChangeFontSize('large')}
                title="Ukuran Font Sedang"
                className={`px-2 py-1 rounded-lg transition ${
                  fontSize === 'large'
                    ? 'bg-amber-500 text-stone-950 font-bold'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
              >
                A+
              </button>
            </div>

            {/* Theme Toggle (Dark / Light) */}
            <button
              onClick={onToggleTheme}
              title={theme === 'dark' ? 'Ganti ke Mode Terang' : 'Ganti ke Mode Gelap'}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 transition"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {onOpenAdd && (
              <button
                onClick={onOpenAdd}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-md shadow-amber-500/20 transition active:scale-95"
              >
                <Plus className="w-4 h-4 font-bold" />
                <span className="hidden sm:inline">Tambah Warisan</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-stone-800/80 text-xs font-medium">
          <button
            onClick={() => setActiveTab('library')}
            className={`flex flex-col items-center gap-1 py-1 px-1.5 rounded ${
              activeTab === 'library' ? 'text-amber-300 font-bold' : 'text-stone-400'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span className="text-[11px]">Pustaka</span>
          </button>
          <button
            onClick={() => setActiveTab('map')}
            className={`flex flex-col items-center gap-1 py-1 px-1.5 rounded ${
              activeTab === 'map' ? 'text-amber-300 font-bold' : 'text-stone-400'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span className="text-[11px]">Peta</span>
          </button>
          <button
            onClick={() => setActiveTab('glossary')}
            className={`flex flex-col items-center gap-1 py-1 px-1.5 rounded ${
              activeTab === 'glossary' ? 'text-amber-300 font-bold' : 'text-stone-400'
            }`}
          >
            <BookMarked className="w-4 h-4" />
            <span className="text-[11px]">Kamus</span>
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`flex flex-col items-center gap-1 py-1 px-1.5 rounded ${
              activeTab === 'about' ? 'text-amber-300 font-bold' : 'text-stone-400'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-[11px]">Metode</span>
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex flex-col items-center gap-1 py-1 px-1.5 rounded ${
              activeTab === 'quiz' ? 'text-amber-300 font-bold' : 'text-stone-400'
            }`}
          >
            <Award className="w-4 h-4" />
            <span className="text-[11px]">Kuis</span>
          </button>
        </div>
      </div>
    </header>
  );
};
