import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Bookmark,
  BookOpen,
  Volume2,
  User,
  GraduationCap,
  Sparkles,
  MapPin,
  Calendar,
  RotateCcw,
  Edit3,
  Plus,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import {
  HeritageCategory,
  HeritageItem,
  Province,
  Tribe,
  VerificationStatus,
} from '../types/heritage';
import {
  VERIFICATION_STATUS_CONFIG,
  NARRATOR_STATUS_CONFIG,
} from '../utils/academicEnrichment';

interface HeritageLibraryProps {
  items: HeritageItem[];
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
  onSelectItem: (item: HeritageItem) => void;
  filterTribe?: Tribe | null;
  filterProvince?: Province | null;
  onResetFilters: () => void;
  onOpenEdit?: (item: HeritageItem) => void;
  onOpenAdd?: () => void;
}

const CATEGORIES: { key: HeritageCategory | 'all'; label: string; icon: string }[] = [
  { key: 'all', label: 'Semua Warisan', icon: '🏛️' },
  { key: 'resep', label: 'Resep Makanan Tradisional', icon: '🍲' },
  { key: 'bahasa', label: 'Bahasa & Falsafah', icon: '🗣️' },
  { key: 'kerajinan', label: 'Kerajinan Tangan', icon: '🧵' },
  { key: 'tani_bahari', label: 'Kearifan Tani & Bahari', icon: '🌾' },
  { key: 'permainan', label: 'Permainan Tradisional', icon: '🪁' },
  { key: 'cerita_sejarah', label: 'Cerita Sejarah Kampung', icon: '📜' },
];

const VERIFICATION_OPTIONS: { key: VerificationStatus | 'all'; label: string }[] = [
  { key: 'all', label: 'Semua Status Keabsahan' },
  { key: 'terverifikasi', label: 'Terverifikasi Sejarah & WBTb' },
  { key: 'tradisi_lisan', label: 'Tradisi Lisan' },
  { key: 'sastra_mitologi', label: 'Sastra Epik & Mitologi' },
  { key: 'legenda_rakyat', label: 'Legenda Rakyat' },
];

export const HeritageLibrary: React.FC<HeritageLibraryProps> = ({
  items,
  bookmarkedIds,
  onToggleBookmark,
  onSelectItem,
  filterTribe,
  filterProvince,
  onResetFilters,
  onOpenEdit,
  onOpenAdd,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<HeritageCategory | 'all'>('all');
  const [selectedVerification, setSelectedVerification] = useState<VerificationStatus | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvinceFilter, setSelectedProvinceFilter] = useState<string>(
    filterProvince || 'all'
  );
  const [selectedTribeFilter, setSelectedTribeFilter] = useState<string>(filterTribe || 'all');
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);

  // Sync external filters if passed from map
  React.useEffect(() => {
    if (filterTribe) {
      setSelectedTribeFilter(filterTribe);
    }
  }, [filterTribe]);

  React.useEffect(() => {
    if (filterProvince) {
      setSelectedProvinceFilter(filterProvince);
    }
  }, [filterProvince]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Verification Status filter
      if (
        selectedVerification !== 'all' &&
        (item.verificationStatus || 'tradisi_lisan') !== selectedVerification
      ) {
        return false;
      }

      // Province filter
      if (selectedProvinceFilter !== 'all' && item.province !== selectedProvinceFilter) {
        return false;
      }

      // Tribe filter
      if (selectedTribeFilter !== 'all' && item.tribe !== selectedTribeFilter) {
        return false;
      }

      // Bookmarked filter
      if (onlyBookmarked && !bookmarkedIds.includes(item.id)) {
        return false;
      }

      // Comprehensive search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesSubtitle = item.subtitle?.toLowerCase().includes(q) ?? false;
        const matchesSummary = item.summary.toLowerCase().includes(q);
        const matchesElder = item.elderNarrator.name.toLowerCase().includes(q);
        const matchesElderLoc = item.elderNarrator.location?.toLowerCase().includes(q) ?? false;
        const matchesElderRole = item.elderNarrator.titleOrRole?.toLowerCase().includes(q) ?? false;
        const matchesStudent = item.recordedBy.name.toLowerCase().includes(q);
        const matchesRegion = item.regionDetail?.toLowerCase().includes(q) ?? false;
        const matchesTribe = item.tribe.toLowerCase().includes(q);
        const matchesProvince = item.province.toLowerCase().includes(q);
        const matchesTags = item.tags.some((t) => t.toLowerCase().includes(q));
        const matchesTerms = item.localTerms.some(
          (t) => t.term.toLowerCase().includes(q) || t.meaning.toLowerCase().includes(q)
        );
        const matchesIngredients =
          item.ingredientsOrMaterials?.some((ing) => ing.toLowerCase().includes(q)) ?? false;
        const matchesRefs =
          item.references?.some(
            (r) =>
              r.title.toLowerCase().includes(q) ||
              r.authorOrInstitution.toLowerCase().includes(q)
          ) ?? false;

        if (
          !matchesTitle &&
          !matchesSubtitle &&
          !matchesSummary &&
          !matchesElder &&
          !matchesElderLoc &&
          !matchesElderRole &&
          !matchesStudent &&
          !matchesRegion &&
          !matchesTribe &&
          !matchesProvince &&
          !matchesTags &&
          !matchesTerms &&
          !matchesIngredients &&
          !matchesRefs
        ) {
          return false;
        }
      }

      return true;
    });
  }, [
    items,
    selectedCategory,
    selectedVerification,
    selectedProvinceFilter,
    selectedTribeFilter,
    onlyBookmarked,
    bookmarkedIds,
    searchQuery,
  ]);

  const getCategoryBadgeClass = (category: HeritageCategory) => {
    switch (category) {
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
        return 'bg-stone-800 text-stone-300 border-stone-700';
    }
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedVerification !== 'all' ||
    selectedProvinceFilter !== 'all' ||
    selectedTribeFilter !== 'all' ||
    searchQuery.trim() !== '' ||
    onlyBookmarked;

  return (
    <div className="space-y-6">
      {/* Search & Top Filter Bar */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-4 sm:p-6 space-y-4 shadow-xl">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari nama budaya, suku, daerah, nama tetua/narasumber, buku rujukan, atau istilah daerah..."
            className="w-full pl-12 pr-4 py-3 bg-stone-950 border border-stone-800 rounded-xl text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 transition text-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-500 hover:text-stone-300 text-xs"
            >
              Hapus
            </button>
          )}
        </div>

        {/* Categories Horizontal Scroll */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 shrink-0 ${
                selectedCategory === cat.key
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-lg shadow-amber-500/20'
                  : 'bg-stone-950 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Verification Status (Trust Level) Filter Pills */}
        <div className="pt-2 border-t border-stone-800/80 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[11px] text-stone-400 font-mono whitespace-nowrap flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Tingkat Kepercayaan:</span>
          </span>
          {VERIFICATION_OPTIONS.map((opt) => (
            <button
              key={opt.key}
              onClick={() => setSelectedVerification(opt.key)}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition ${
                selectedVerification === opt.key
                  ? 'bg-amber-500/20 text-amber-200 border border-amber-500/60 font-semibold'
                  : 'bg-stone-950 text-stone-400 hover:text-stone-200 border border-stone-800/80'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Bottom Filter Controls (Province, Tribe, Bookmark, Add) */}
        <div className="pt-2 border-t border-stone-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Province Dropdown */}
            <select
              value={selectedProvinceFilter}
              onChange={(e) => setSelectedProvinceFilter(e.target.value)}
              className="px-3 py-2 bg-stone-950 border border-stone-800 rounded-xl text-stone-300 focus:outline-none focus:border-amber-500 text-xs"
            >
              <option value="all">Semua Provinsi (6)</option>
              <option value="Sulawesi Selatan">Sulawesi Selatan</option>
              <option value="Sulawesi Barat">Sulawesi Barat</option>
              <option value="Sulawesi Tengah">Sulawesi Tengah</option>
              <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
              <option value="Sulawesi Utara">Sulawesi Utara</option>
              <option value="Gorontalo">Gorontalo</option>
            </select>

            {/* Tribe Dropdown */}
            <select
              value={selectedTribeFilter}
              onChange={(e) => setSelectedTribeFilter(e.target.value)}
              className="px-3 py-2 bg-stone-950 border border-stone-800 rounded-xl text-stone-300 focus:outline-none focus:border-amber-500 text-xs"
            >
              <option value="all">Semua Suku (15)</option>
              <option value="Bugis">Suku Bugis</option>
              <option value="Makassar">Suku Makassar</option>
              <option value="Toraja">Suku Toraja</option>
              <option value="Mandar">Suku Mandar</option>
              <option value="Mamasa">Suku Mamasa</option>
              <option value="Kaili">Suku Kaili</option>
              <option value="Pamona">Suku Pamona</option>
              <option value="Tolaki">Suku Tolaki</option>
              <option value="Buton">Suku Buton</option>
              <option value="Muna">Suku Muna</option>
              <option value="Moronene">Suku Moronene</option>
              <option value="Minahasa">Suku Minahasa</option>
              <option value="Bolaang Mongondow">Suku Bolaang Mongondow</option>
              <option value="Sangihe">Suku Sangihe</option>
              <option value="Gorontalo">Suku Gorontalo</option>
            </select>

            {/* Bookmark Filter */}
            <button
              onClick={() => setOnlyBookmarked(!onlyBookmarked)}
              className={`px-3 py-2 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition ${
                onlyBookmarked
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                  : 'bg-stone-950 text-stone-400 border-stone-800 hover:text-stone-200'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${onlyBookmarked ? 'fill-current' : ''}`} />
              <span>Favorit ({bookmarkedIds.length})</span>
            </button>
          </div>

          {/* Add Heritage Button */}
          {onOpenAdd && (
            <button
              onClick={onOpenAdd}
              className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-500 hover:bg-amber-400 text-stone-950 shadow-md shadow-amber-500/20 flex items-center gap-1.5 transition active:scale-95 ml-auto"
            >
              <Plus className="w-4 h-4 font-bold" />
              <span>Rekam / Tambah Warisan</span>
            </button>
          )}
        </div>

        {/* Active Filter Summary Bar */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between text-xs text-stone-400 pt-1 border-t border-stone-800/60">
            <span>
              Menampilkan <strong className="text-amber-300">{filteredItems.length}</strong> dari{' '}
              {items.length} artikel warisan budaya
            </span>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedVerification('all');
                setSelectedProvinceFilter('all');
                setSelectedTribeFilter('all');
                setSearchQuery('');
                setOnlyBookmarked(false);
                onResetFilters();
              }}
              className="text-amber-400 hover:underline font-mono"
            >
              Reset Semua Filter
            </button>
          </div>
        )}
      </div>

      {/* Grid of Heritage Items */}
      {filteredItems.length === 0 ? (
        <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center mx-auto text-amber-400">
            <BookOpen className="w-8 h-8 opacity-60" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-lg text-stone-200">
              Belum Ada Warisan yang Cocok
            </h3>
            <p className="text-xs text-stone-400 max-w-md mx-auto">
              Tidak ditemukan arsip budaya untuk kriteria pencarian tersebut. Silakan bersihkan kata
              kunci atau atur ulang filter pencarian.
            </p>
          </div>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedVerification('all');
              setSelectedProvinceFilter('all');
              setSelectedTribeFilter('all');
              setSelectedCategory('all');
              setOnlyBookmarked(false);
              onResetFilters();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-500/20 transition"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Semua Filter Pencarian</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isBookmarked = bookmarkedIds.includes(item.id);
            const verConfig =
              VERIFICATION_STATUS_CONFIG[item.verificationStatus || 'tradisi_lisan'];
            const narrConfig =
              NARRATOR_STATUS_CONFIG[item.elderNarrator.status || 'tokoh_nyata'];

            return (
              <div
                key={item.id}
                className="bg-stone-900/90 border border-stone-800 hover:border-amber-700/60 rounded-2xl p-5 shadow-lg hover:shadow-amber-950/30 transition-all flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  {/* Card Badges Row */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span
                        className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border ${getCategoryBadgeClass(
                          item.category
                        )}`}
                      >
                        {item.category.replace('_', ' ')}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        Suku {item.tribe}
                      </span>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(item.id);
                      }}
                      className="text-stone-400 hover:text-amber-300 transition"
                      title="Simpan ke Favorit"
                    >
                      <Bookmark
                        className={`w-4 h-4 ${
                          isBookmarked ? 'fill-amber-400 text-amber-400' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Verification Status Pill */}
                  <div className="flex items-center gap-1.5 text-[10px]">
                    <span
                      title={verConfig.description}
                      className={`px-2 py-0.5 rounded-full border flex items-center gap-1 font-semibold ${verConfig.badgeClass}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${verConfig.dotColor}`} />
                      <span>{verConfig.label}</span>
                    </span>

                    {item.references && item.references.length > 0 && (
                      <span className="px-1.5 py-0.5 rounded bg-stone-800 text-stone-300 font-mono text-[10px]">
                        📚 {item.references.length} Rujukan
                      </span>
                    )}
                  </div>

                  {/* Title and Subtitle */}
                  <div>
                    <h3
                      onClick={() => onSelectItem(item)}
                      className="font-serif font-bold text-lg text-amber-100 group-hover:text-amber-200 transition cursor-pointer line-clamp-2"
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-400 line-clamp-1 font-serif mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Elder & Narrator Status Metadata */}
                  <div className="space-y-1.5 pt-1 text-xs">
                    <div className="flex items-center gap-2 text-stone-300">
                      <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <div className="flex items-center gap-1.5 line-clamp-1 flex-1">
                        <strong>{item.elderNarrator.name}</strong>
                        <span className="text-[10px] text-stone-400 font-mono">
                          ({narrConfig.label})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-stone-400 text-[11px]">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className="line-clamp-1">
                        Pencatat: {item.recordedBy.name} ({item.recordedBy.schoolOrAffiliation})
                      </span>
                    </div>
                  </div>

                  {/* Summary Snippet */}
                  <p className="text-xs text-stone-300 line-clamp-3 font-serif leading-relaxed pt-1">
                    {item.summary}
                  </p>

                  {/* Local Terms Pills Preview */}
                  {item.localTerms && item.localTerms.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {item.localTerms.slice(0, 3).map((term, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-stone-950 text-amber-300/90 border border-stone-800 font-mono"
                        >
                          {term.term}
                        </span>
                      ))}
                      {item.localTerms.length > 3 && (
                        <span className="text-[10px] text-stone-500 self-center">
                          +{item.localTerms.length - 3} lagi
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-stone-400 font-mono text-[11px]">
                    <MapPin className="w-3 h-3 text-amber-400/80" />
                    <span>{item.province.replace('Sulawesi', 'Sul-')}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {onOpenEdit && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenEdit(item);
                        }}
                        className="px-2.5 py-1 rounded-lg text-stone-400 hover:text-amber-300 hover:bg-stone-800 transition flex items-center gap-1 text-[11px]"
                        title="Koreksi kata salah di warisan ini"
                      >
                        <Edit3 className="w-3 h-3 text-amber-400" />
                        <span>Koreksi</span>
                      </button>
                    )}

                    <button
                      onClick={() => onSelectItem(item)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
                    >
                      <span>Buka Arsip</span>
                      <span className="group-hover:translate-x-0.5 transition-transform">➔</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
