import React, { useState, useRef } from 'react';
import {
  UploadCloud,
  Image as ImageIcon,
  Link as LinkIcon,
  X,
  Check,
  Sparkles,
  RefreshCw,
  Camera,
} from 'lucide-react';
import {
  SULAWESI_IMAGE_PRESETS,
  compressAndReadImage,
  PresetImage,
} from '../utils/imageGallery';
import { HeritageCategory, Tribe } from '../types/heritage';

interface ImagePickerUploadProps {
  currentImageUrl?: string;
  currentCaption?: string;
  category?: HeritageCategory;
  tribe?: Tribe;
  onImageChange: (imageUrl: string, caption?: string) => void;
  onRemoveImage?: () => void;
}

export const ImagePickerUpload: React.FC<ImagePickerUploadProps> = ({
  currentImageUrl = '',
  currentCaption = '',
  category,
  tribe,
  onImageChange,
  onRemoveImage,
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'url' | 'presets'>('upload');
  const [urlInput, setUrlInput] = useState('');
  const [captionInput, setCaptionInput] = useState(currentCaption);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Filter presets based on current category or show all
  const relevantPresets = React.useMemo(() => {
    if (!category) return SULAWESI_IMAGE_PRESETS;
    const matched = SULAWESI_IMAGE_PRESETS.filter(
      (p) => p.category === category || p.tribe === tribe
    );
    return matched.length > 0 ? matched : SULAWESI_IMAGE_PRESETS;
  }, [category, tribe]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    setUploadError(null);

    try {
      const compressedDataUrl = await compressAndReadImage(file);
      onImageChange(compressedDataUrl, captionInput || file.name);
    } catch (err: any) {
      setUploadError(err.message || 'Gagal memproses gambar. Pastikan format JPG/PNG/WebP.');
    } finally {
      setIsProcessing(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;
    onImageChange(urlInput.trim(), captionInput || 'Dokumentasi Warisan Budaya Sulawesi');
    setUrlInput('');
  };

  const handleSelectPreset = (preset: PresetImage) => {
    setCaptionInput(preset.caption);
    onImageChange(preset.url, preset.caption);
  };

  return (
    <div className="space-y-4 rounded-2xl bg-stone-950/70 border border-stone-800 p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Camera className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-200">
            Foto & Dokumentasi Gambar
          </span>
        </div>
        {currentImageUrl && onRemoveImage && (
          <button
            type="button"
            onClick={onRemoveImage}
            className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 transition"
          >
            <X className="w-3.5 h-3.5" />
            <span>Hapus Foto</span>
          </button>
        )}
      </div>

      {/* Current Preview If Image Exists */}
      {currentImageUrl ? (
        <div className="relative rounded-xl overflow-hidden border border-stone-700 bg-stone-900 group">
          <div className="aspect-video w-full max-h-56 overflow-hidden bg-stone-950">
            <img
              src={currentImageUrl}
              alt={captionInput || 'Dokumentasi Budaya'}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';
              }}
            />
          </div>

          <div className="p-3 bg-stone-900/95 border-t border-stone-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-emerald-400 flex items-center gap-1 font-medium">
                <Check className="w-3.5 h-3.5" />
                <span>Foto Terpasang</span>
              </span>
              <span className="text-stone-400 text-[11px]">Siap Ditampilkan di Artikel</span>
            </div>

            <div className="space-y-1">
              <label className="text-[11px] text-stone-400">Keterangan / Caption Foto:</label>
              <input
                type="text"
                value={captionInput}
                onChange={(e) => {
                  setCaptionInput(e.target.value);
                  onImageChange(currentImageUrl, e.target.value);
                }}
                placeholder="Contoh: Penyajian Kue Barongko pada upacara adat pernikahan Bone..."
                className="w-full px-3 py-1.5 rounded-lg bg-stone-950 border border-stone-800 text-stone-200 text-xs focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="p-4 rounded-xl border border-dashed border-stone-700 bg-stone-900/40 text-center space-y-2">
          <ImageIcon className="w-8 h-8 text-stone-500 mx-auto" />
          <p className="text-xs text-stone-400">
            Belum ada foto terpasang. Unggah foto hidangan atau budaya untuk memperkaya artikel!
          </p>
        </div>
      )}

      {/* Tabs for Adding/Changing Image */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-900 border border-stone-800 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('upload')}
            className={`flex-1 py-1.5 rounded-lg font-medium transition flex items-center justify-center gap-1.5 ${
              activeTab === 'upload'
                ? 'bg-amber-500 text-stone-950 font-bold shadow'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <UploadCloud className="w-3.5 h-3.5" />
            <span>Unggah dari HP / PC</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('presets')}
            className={`flex-1 py-1.5 rounded-lg font-medium transition flex items-center justify-center gap-1.5 ${
              activeTab === 'presets'
                ? 'bg-amber-500 text-stone-950 font-bold shadow'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Koleksi Foto Sulawesi</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('url')}
            className={`flex-1 py-1.5 rounded-lg font-medium transition flex items-center justify-center gap-1.5 ${
              activeTab === 'url'
                ? 'bg-amber-500 text-stone-950 font-bold shadow'
                : 'text-stone-400 hover:text-stone-200'
            }`}
          >
            <LinkIcon className="w-3.5 h-3.5" />
            <span>Tautan URL</span>
          </button>
        </div>

        {/* Tab 1: Upload File */}
        {activeTab === 'upload' && (
          <div className="space-y-2">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
              id="file-image-picker"
            />
            <label
              htmlFor="file-image-picker"
              className={`w-full py-4 px-4 rounded-xl border border-dashed border-stone-700 hover:border-amber-500 bg-stone-900/60 hover:bg-stone-900 cursor-pointer flex flex-col items-center justify-center gap-2 transition text-center ${
                isProcessing ? 'opacity-50 pointer-events-none' : ''
              }`}
            >
              {isProcessing ? (
                <RefreshCw className="w-5 h-5 text-amber-400 animate-spin" />
              ) : (
                <UploadCloud className="w-5 h-5 text-amber-400" />
              )}
              <div className="text-xs">
                <span className="font-semibold text-stone-200">
                  {isProcessing ? 'Mengompres dan memproses foto...' : 'Klik untuk Pilih Berkas Gambar'}
                </span>
                <p className="text-[11px] text-stone-400 mt-0.5">
                  Mendukung JPG, PNG, WebP (Otomatis dikompres ringan untuk kecepatan muat)
                </p>
              </div>
            </label>
            {uploadError && (
              <p className="text-xs text-red-400 text-center">{uploadError}</p>
            )}
          </div>
        )}

        {/* Tab 2: Preset Cultural Photos */}
        {activeTab === 'presets' && (
          <div className="space-y-2">
            <p className="text-[11px] text-stone-400">
              Pilih foto resolusi tinggi khas Sulawesi yang sesuai dengan topik Anda:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-56 overflow-y-auto pr-1">
              {relevantPresets.map((preset) => (
                <button
                  type="button"
                  key={preset.id}
                  onClick={() => handleSelectPreset(preset)}
                  className={`group relative rounded-xl overflow-hidden border text-left transition ${
                    currentImageUrl === preset.url
                      ? 'border-amber-400 ring-2 ring-amber-400/40'
                      : 'border-stone-800 hover:border-amber-500/60'
                  }`}
                >
                  <div className="aspect-video w-full bg-stone-950 overflow-hidden">
                    <img
                      src={preset.url}
                      alt={preset.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-1.5 bg-stone-900 text-[10px] space-y-0.5">
                    <p className="font-bold text-stone-200 truncate">{preset.title}</p>
                    <p className="text-stone-400 truncate text-[9px]">{preset.credit}</p>
                  </div>
                  {currentImageUrl === preset.url && (
                    <div className="absolute top-1 right-1 w-5 h-5 rounded-full bg-amber-500 text-stone-950 flex items-center justify-center font-bold">
                      <Check className="w-3 h-3" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: URL input */}
        {activeTab === 'url' && (
          <form onSubmit={handleApplyUrl} className="flex gap-2">
            <input
              type="url"
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
              placeholder="https://example.com/foto-kuliner-sulawesi.jpg"
              className="flex-1 px-3 py-2 rounded-xl bg-stone-950 border border-stone-800 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition"
            >
              Pasang
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
