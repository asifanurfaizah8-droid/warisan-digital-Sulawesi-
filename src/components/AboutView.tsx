import React from 'react';
import {
  ShieldCheck,
  BookOpen,
  Award,
  Users,
  Compass,
  FileText,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Bookmark,
  Landmark,
  Scale,
} from 'lucide-react';
import { VERIFICATION_STATUS_CONFIG, NARRATOR_STATUS_CONFIG } from '../utils/academicEnrichment';

interface AboutViewProps {
  totalItemsCount: number;
  onExploreLibrary: () => void;
  onExploreMap: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  totalItemsCount,
  onExploreLibrary,
  onExploreMap,
}) => {
  return (
    <div className="space-y-10 max-w-5xl mx-auto animate-in fade-in pb-12">
      {/* Hero Header */}
      <div className="relative rounded-3xl bg-gradient-to-br from-stone-900 via-stone-900 to-amber-950/60 border border-amber-900/40 p-8 sm:p-12 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            <span>Metodologi, Kurasi & Standar Keabsahan Budaya</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black tracking-tight text-amber-100 leading-tight">
            Menjaga Keotentikan, Membedakan Fakta Sejarah & Tradisi Tutur
          </h1>

          <p className="text-base sm:text-lg text-stone-300 leading-relaxed font-serif">
            Aplikasi <strong>Warisan Digital Sulawesi</strong> didedikasikan sebagai media pembelajaran,
            dokumentasi pengetahuan adat, dan rujukan budaya yang kredibel bagi pelajar, akademisi,
            dan generasi muda penerus bangsa.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
            <button
              onClick={onExploreLibrary}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 transition flex items-center gap-2 shadow-lg shadow-amber-500/10"
            >
              <BookOpen className="w-4 h-4" />
              <span>Jelajahi Repositori ({totalItemsCount} Warisan)</span>
            </button>
            <button
              onClick={onExploreMap}
              className="px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-300 border border-amber-900/40 transition flex items-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Peta 15 Suku Adat</span>
            </button>
          </div>
        </div>
      </div>

      {/* Official Cultural Disclaimer Notice */}
      <div className="p-6 sm:p-8 rounded-2xl bg-amber-950/25 border border-amber-800/40 space-y-3">
        <div className="flex items-center gap-2.5 text-amber-300 font-serif font-bold text-lg">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0" />
          <span>Pernyataan Penyangkalan Resmi (Cultural Epistemological Disclaimer)</span>
        </div>
        <p className="text-stone-300 text-sm leading-relaxed">
          Kebudayaan Sulawesi merupakan warisan peradaban yang sangat kaya dan majemuk. Sebagian
          besar pengetahuan lokal diwariskan secara lisan (oral tradition) dari generasi ke generasi,
          sehingga adalah wajar apabila terdapat variasi penuturan nama, bumbu, urutan upacara, maupun
          sudut pandang sejarah antar kampung atau sub-etnis.
        </p>
        <p className="text-stone-400 text-xs leading-relaxed">
          Platform ini mengklasifikasikan setiap artikel secara objektif berdasarkan tingkat keabsahan
          informasi (Fakta Sejarah Terverifikasi, Tradisi Lisan, Sastra Epik & Mitologi, atau Legenda Rakyat)
          agar pembaca dapat menelaah konteks informasinya secara jernih dan berimbang.
        </p>
      </div>

      {/* Epistemological Hierarchy Grid */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-serif font-bold text-amber-100 flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <span>Klasifikasi Tingkat Kepercayaan Informasi (Trust Level)</span>
          </h2>
          <p className="text-xs text-stone-400">
            Setiap artikel di aplikasi ini ditandai dengan lencana keabsahan untuk memudahkan pemahaman akademis:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(VERIFICATION_STATUS_CONFIG).map(([key, config]) => (
            <div
              key={key}
              className="p-5 rounded-2xl bg-stone-900/80 border border-stone-800 space-y-3 hover:border-stone-700 transition"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${config.badgeClass}`}
                >
                  <span className={`w-2 h-2 rounded-full ${config.dotColor}`} />
                  {config.label}
                </span>
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">{config.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Special Section: I La Galigo & Mythological Epics */}
      <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 border border-purple-900/40 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-serif font-bold text-purple-100">
              Konsep Epik I La Galigo & Sastra Mitologis
            </h3>
            <p className="text-xs text-purple-300 font-mono">
              UNESCO Memory of the World Register (2011)
            </p>
          </div>
        </div>
        <p className="text-stone-300 text-sm leading-relaxed">
          Karya sastra epik seperti <em>Sureq Galigo</em> (I La Galigo) merupakan karya sastra Bugis kuno
          terpanjang di dunia (sekitar 300.000 larik puisi berirama lima ketukan pentameter). Naskah ini
          mengisahkan penciptaan alam semesta (kosmogoni), petualangan Sawerigading, serta tatanan etika
          dan falsafah luhur leluhur Luwu dan Nusantara.
        </p>
        <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 text-xs text-stone-300 space-y-2">
          <span className="font-semibold text-purple-200 block">
            Pedoman Pembacaan Ilmiah:
          </span>
          <p>
            I La Galigo tidak boleh diperlakukan secara harfiah sebagai catatan sejarah empiris (historiografi faktual),
            melainkan sebagai adikarya sastra mitologis yang sarat metafora kejiwaan, moralitas politik kuno,
            dan kearifan maritim Bugis-Makassar purba.
          </p>
        </div>
      </div>

      {/* Transparency on Narrators & Contributors */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-serif font-bold text-amber-100 flex items-center gap-2.5">
            <Users className="w-6 h-6 text-blue-400" />
            <span>Status Narasumber & Etika Dokumentasi</span>
          </h2>
          <p className="text-xs text-stone-400">
            Penjelasan status pencatat dan narasumber demi menghindari kerancuan tokoh fiktif vs tokoh sejarah:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {Object.entries(NARRATOR_STATUS_CONFIG).map(([key, info]) => (
            <div
              key={key}
              className="p-4 rounded-xl bg-stone-900 border border-stone-800 flex items-start gap-3 text-xs"
            >
              <div className="w-7 h-7 rounded-lg bg-stone-800 text-amber-400 flex items-center justify-center shrink-0 font-bold font-mono">
                ✓
              </div>
              <div>
                <span className="font-bold text-stone-200 block">{info.label}</span>
                <span className="text-stone-400 leading-relaxed mt-0.5 block">
                  {info.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cultural References & Institutional Partners */}
      <div className="p-6 sm:p-8 rounded-2xl bg-stone-900 border border-amber-900/30 space-y-5">
        <div className="space-y-1">
          <h2 className="text-xl font-serif font-bold text-amber-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-400" />
            <span>Sumber Referensi & Rujukan Utama</span>
          </h2>
          <p className="text-xs text-stone-400">
            Penyusunan artikel di aplikasi ini merujuk pada dokumen otoritatif dan naskah primer:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800/80 space-y-1">
            <span className="font-semibold text-amber-200 block font-mono">
              1. Naskah Manuskrip Lontara
            </span>
            <p className="text-stone-400">
              Lontara Latoa, Lontara Patturioloang Gowa-Tallo, Lontara Bilang, Lontara Bone, dan Lontara Mandar.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800/80 space-y-1">
            <span className="font-semibold text-amber-200 block font-mono">
              2. Inventaris Resmi WBTb & UNESCO
            </span>
            <p className="text-stone-400">
              Katalog Warisan Budaya Takbenda Kemendikbudristek RI, Sertifikat UNESCO Pinisi & I La Galigo.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800/80 space-y-1">
            <span className="font-semibold text-amber-200 block font-mono">
              3. Balai Pelestarian Kebudayaan
            </span>
            <p className="text-stone-400">
              BPK Wilayah XVIII (Sulteng-Sulbar), BPK Wilayah XIX (Sulsel-Sultra), BPK Wilayah XVII (Sulut-Gorontalo).
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800/80 space-y-1">
            <span className="font-semibold text-amber-200 block font-mono">
              4. Literatur Ilmiah Antropologi
            </span>
            <p className="text-stone-400">
              Karya Prof. Mattulada, Christian Pelras, Stanislaus Sandarupa, Sam Ratulangi, Susanto Zuhdi, Albert Kruyt.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800/80 space-y-1">
            <span className="font-semibold text-amber-200 block font-mono">
              5. Lembaga & Tokoh Pemangku Adat
            </span>
            <p className="text-stone-400">
              Dewan Adat Saoraja, Lembaga Adat Kesu Toraja, Lembaga Adat Tolaki, Dewan Adat Pohala'a Gorontalo, Keraton Wolio.
            </p>
          </div>
          <div className="p-3.5 rounded-xl bg-stone-950/60 border border-stone-800/80 space-y-1">
            <span className="font-semibold text-amber-200 block font-mono">
              6. Arsip Sejarah Nasional (ANRI)
            </span>
            <p className="text-stone-400">
              Koleksi arsip kolonial dan naskah perjanjian persekutuan nusantara tempo dulu.
            </p>
          </div>
        </div>
      </div>

      {/* Open Culture License & Community Participation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
          <div className="flex items-center gap-2 text-stone-200 font-semibold text-sm">
            <Landmark className="w-4 h-4 text-amber-400" />
            <span>Lisensi Terbuka Budaya Nirlaba</span>
          </div>
          <p className="text-xs text-stone-400 leading-relaxed">
            Seluruh basis data pengetahuan di platform ini disediakan untuk tujuan pendidikan,
            penelitian kebudayaan, dan pelestarian tanpa tujuan komersial di bawah lisensi
            <strong> Creative Commons Atribusi-NonKomersial (CC BY-NC 4.0)</strong>.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 space-y-3">
          <div className="flex items-center gap-2 text-stone-200 font-semibold text-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Partisipasi Masyarakat (Kurasi Kolektif)</span>
          </div>
          <p className="text-xs text-stone-400 leading-relaxed">
            Pengguna dan peneliti dipersilakan menggunakan tombol <strong>"Koreksi Teks & Ejaan"</strong>{' '}
            maupun <strong>"Laporkan Kesalahan / Sanggahan"</strong> pada setiap artikel untuk memastikan
            akurasi nama tetua, ejaan bahasa daerah, dan kelengkapan referensi rujukan ilmiah.
          </p>
        </div>
      </div>
    </div>
  );
};
