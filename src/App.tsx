import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HeritageLibrary } from './components/HeritageLibrary';
import { SulawesiMap } from './components/SulawesiMap';
import { GlossaryView } from './components/GlossaryView';
import { QuizView } from './components/QuizView';
import { AboutView } from './components/AboutView';
import { HeritageDetailModal } from './components/HeritageDetailModal';
import { EditHeritageModal } from './components/EditHeritageModal';
import { AddHeritageModal } from './components/AddHeritageModal';
import { HeritageItem, Province, Tribe } from './types/heritage';
import {
  getBookmarkedIds,
  getSavedHeritageItems,
  toggleBookmark,
  updateHeritageItem,
  saveHeritageItem,
  resetItemToOriginal,
  getStoredTheme,
  setStoredTheme,
  getStoredFontSize,
  setStoredFontSize,
  ThemeSetting,
  FontSizeSetting,
} from './utils/storage';
import { Landmark, Heart, CheckCircle2, ShieldCheck, Scale } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'library' | 'map' | 'glossary' | 'quiz' | 'about'>('library');
  const [items, setItems] = useState<HeritageItem[]>([]);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [selectedDetailItem, setSelectedDetailItem] = useState<HeritageItem | null>(null);
  const [selectedEditItem, setSelectedEditItem] = useState<HeritageItem | null>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Accessibility & Appearance
  const [theme, setTheme] = useState<ThemeSetting>(getStoredTheme);
  const [fontSize, setFontSize] = useState<FontSizeSetting>(getStoredFontSize);

  // Filter state passed from map or hero to library
  const [filterTribe, setFilterTribe] = useState<Tribe | null>(null);
  const [filterProvince, setFilterProvince] = useState<Province | null>(null);

  useEffect(() => {
    const loadedItems = getSavedHeritageItems();
    setItems(loadedItems);
    setBookmarkedIds(getBookmarkedIds());
  }, []);

  const handleToggleTheme = () => {
    const nextTheme: ThemeSetting = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    setStoredTheme(nextTheme);
  };

  const handleChangeFontSize = (size: FontSizeSetting) => {
    setFontSize(size);
    setStoredFontSize(size);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  const handleToggleBookmark = (id: string) => {
    const next = toggleBookmark(id);
    setBookmarkedIds(next);
  };

  const handleSelectTribeFromMapOrHero = (tribe: Tribe) => {
    setFilterTribe(tribe);
    setFilterProvince(null);
    setActiveTab('library');
  };

  const handleSelectProvinceFromMap = (province: Province) => {
    setFilterProvince(province);
    setFilterTribe(null);
    setActiveTab('library');
  };

  const handleResetFilters = () => {
    setFilterTribe(null);
    setFilterProvince(null);
  };

  // Handle saving corrections to an existing heritage item
  const handleSaveEdit = (updatedItem: HeritageItem, editorName: string, note: string) => {
    const updatedList = updateHeritageItem(updatedItem, editorName, note);
    setItems(updatedList);

    // If detail modal is open for this item, keep it updated with new text
    if (selectedDetailItem && selectedDetailItem.id === updatedItem.id) {
      const refreshed = updatedList.find((x) => x.id === updatedItem.id) || updatedItem;
      setSelectedDetailItem(refreshed);
    }

    showToast(`Koreksi kata pada "${updatedItem.title}" berhasil disimpan!`);
  };

  // Handle reset item to original system default
  const handleResetToOriginal = (id: string) => {
    const updatedList = resetItemToOriginal(id);
    setItems(updatedList);
    const reverted = updatedList.find((x) => x.id === id);
    if (selectedDetailItem && selectedDetailItem.id === id && reverted) {
      setSelectedDetailItem(reverted);
    }
    showToast('Teks warisan telah dipulihkan ke versi naskah awal.');
  };

  // Handle adding a brand new heritage item
  const handleSaveNewItem = (newItem: HeritageItem) => {
    const updatedList = saveHeritageItem(newItem);
    setItems(updatedList);
    setSelectedDetailItem(newItem);
    showToast(`Warisan baru "${newItem.title}" berhasil didokumentasikan!`);
  };

  const rootBgClass =
    theme === 'dark'
      ? 'bg-stone-950 text-stone-100 selection:bg-amber-500 selection:text-stone-950'
      : 'bg-stone-100 text-stone-900 selection:bg-amber-600 selection:text-stone-100';

  return (
    <div className={`min-h-screen ${rootBgClass} flex flex-col font-sans transition-colors duration-200`}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-amber-500 text-stone-950 font-semibold text-xs sm:text-sm shadow-2xl shadow-amber-500/30 border border-amber-300">
            <CheckCircle2 className="w-5 h-5 text-stone-950 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        itemsCount={items.length}
        onOpenAdd={() => setIsAddModalOpen(true)}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        fontSize={fontSize}
        onChangeFontSize={handleChangeFontSize}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        {/* VIEW: LIBRARY */}
        {activeTab === 'library' && (
          <div className="space-y-8 animate-in fade-in">
            {/* Hero Section */}
            <HeroSection
              onExploreMap={() => setActiveTab('map')}
              onSelectTribeFilter={handleSelectTribeFromMapOrHero}
              totalRecordsCount={items.length}
              onOpenAdd={() => setIsAddModalOpen(true)}
              onOpenAbout={() => setActiveTab('about')}
            />

            {/* Library Section */}
            <div id="heritage-library-section">
              <HeritageLibrary
                items={items}
                bookmarkedIds={bookmarkedIds}
                onToggleBookmark={handleToggleBookmark}
                onSelectItem={(item) => setSelectedDetailItem(item)}
                filterTribe={filterTribe}
                filterProvince={filterProvince}
                onResetFilters={handleResetFilters}
                onOpenEdit={(item) => setSelectedEditItem(item)}
                onOpenAdd={() => setIsAddModalOpen(true)}
              />
            </div>
          </div>
        )}

        {/* VIEW: MAP & TRIBE EXPLORER */}
        {activeTab === 'map' && (
          <SulawesiMap
            items={items}
            onSelectTribe={handleSelectTribeFromMapOrHero}
            onSelectProvince={handleSelectProvinceFromMap}
          />
        )}

        {/* VIEW: GLOSSARY, REGIONAL LANGUAGES & ANCESTRAL STORIES */}
        {activeTab === 'glossary' && (
          <GlossaryView
            items={items}
            onSelectItem={(item) => setSelectedDetailItem(item)}
            onOpenEdit={(item) => setSelectedEditItem(item)}
          />
        )}

        {/* VIEW: QUIZ */}
        {activeTab === 'quiz' && <QuizView />}

        {/* VIEW: ABOUT & METHODOLOGY */}
        {activeTab === 'about' && (
          <AboutView
            totalItemsCount={items.length}
            onExploreLibrary={() => setActiveTab('library')}
            onExploreMap={() => setActiveTab('map')}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 border-t border-amber-900/30 text-stone-400 py-10 px-4 sm:px-6 lg:px-8 mt-12 transition-colors">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300">
                <Landmark className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <span className="font-serif font-black text-lg text-amber-100">
                  Warisan Digital Sulawesi
                </span>
                <p className="text-xs text-stone-400">
                  Repositori Terbuka Pengetahuan Adat & Komunitas Lokal
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <button
                onClick={() => setActiveTab('library')}
                className="hover:text-amber-300 transition"
              >
                Perpustakaan ({items.length})
              </button>
              <button
                onClick={() => setActiveTab('map')}
                className="hover:text-amber-300 transition"
              >
                Peta 15 Suku (6 Provinsi)
              </button>
              <button
                onClick={() => setActiveTab('glossary')}
                className="hover:text-amber-300 transition"
              >
                Kamus & Falsafah
              </button>
              <button
                onClick={() => setActiveTab('quiz')}
                className="hover:text-amber-300 transition"
              >
                Kuis Budaya
              </button>
              <button
                onClick={() => setActiveTab('about')}
                className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1 transition"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Metodologi & Verifikasi</span>
              </button>
              <button
                onClick={() => setIsAddModalOpen(true)}
                className="text-amber-400 hover:text-amber-300 font-bold transition"
              >
                + Tambah Warisan
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-2 text-center sm:text-left">
            <p>
              Mencakup kearifan Suku Bugis, Makassar, Toraja, Mandar, Mamasa, Kaili, Pamona, Tolaki,
              Buton, Muna, Moronene, Minahasa, Bolaang Mongondow, Sangihe, dan Gorontalo (6 Provinsi
              Sulawesi). Lisensi Creative Commons CC BY-NC 4.0.
            </p>
            <p className="flex items-center justify-center gap-1">
              Dibuat dengan <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline" /> untuk
              generasi penerus bangsa.
            </p>
          </div>
        </div>
      </footer>

      {/* Heritage Detail Modal */}
      <HeritageDetailModal
        item={selectedDetailItem}
        allItems={items}
        isOpen={!!selectedDetailItem}
        onClose={() => setSelectedDetailItem(null)}
        isBookmarked={selectedDetailItem ? bookmarkedIds.includes(selectedDetailItem.id) : false}
        onToggleBookmark={handleToggleBookmark}
        onOpenEdit={(item) => setSelectedEditItem(item)}
        onSelectItem={(item) => setSelectedDetailItem(item)}
      />

      {/* Edit / Word Correction Modal */}
      <EditHeritageModal
        item={selectedEditItem}
        isOpen={!!selectedEditItem}
        onClose={() => setSelectedEditItem(null)}
        onSave={handleSaveEdit}
        onResetToOriginal={handleResetToOriginal}
      />

      {/* Add Heritage / Record Elder Story Modal */}
      <AddHeritageModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleSaveNewItem}
      />
    </div>
  );
}
