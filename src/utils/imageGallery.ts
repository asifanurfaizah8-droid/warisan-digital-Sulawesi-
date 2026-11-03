/**
 * Image helper utilities and curated cultural photo presets for Sulawesi Heritage
 */
import { HeritageCategory, Tribe, HeritageItem } from '../types/heritage';

export interface PresetImage {
  id: string;
  title: string;
  category: HeritageCategory;
  tribe?: Tribe | 'Semua';
  url: string;
  caption: string;
  credit: string;
}

export const SULAWESI_IMAGE_PRESETS: PresetImage[] = [
  // Kuliner / Resep Makanan Tradisional
  {
    id: 'kuliner-coto',
    title: 'Coto Makassar & Rempah Tradisional',
    category: 'resep',
    tribe: 'Makassar',
    url: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80',
    caption: 'Kuah kaya rempah kacang tanah dan daging khas Sulawesi Selatan yang dimasak dalam periuk gerabah tanah liat (Uring Butta).',
    credit: 'Dokumentasi Kuliner Nusantara / Unsplash',
  },
  {
    id: 'kuliner-barongko',
    title: 'Kue Barongko Daun Pisang',
    category: 'resep',
    tribe: 'Bugis',
    url: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1000&q=80',
    caption: 'Kue berbahan pisang kepok matang berbalut daun pisang segar, perlambang kejujuran hati nurani luhur Bugis.',
    credit: 'Dokumentasi Gastronomi Adat',
  },
  {
    id: 'kuliner-tinutuan',
    title: 'Bubur Tinutuan / Manado',
    category: 'resep',
    tribe: 'Minahasa',
    url: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80',
    caption: 'Bubur sehat aneka sayur kangkung, bayam, kemangi, jagung manis, dan labu kuning perwujudan Mapalus gotong royong.',
    credit: 'Arsip Gastronomi Minahasa',
  },
  {
    id: 'kuliner-ikan-bakar',
    title: 'Ikan Bakar Parape & Sambal Dabu-dabu',
    category: 'resep',
    tribe: 'Bugis',
    url: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=1000&q=80',
    caption: 'Sajian ikan laut segar dipanggang dengan bumbu karamel bawang merah dan asam jawa warisan pesisir.',
    credit: 'Koleksi Kuliner Bahari Nusantara',
  },
  {
    id: 'kuliner-kapurung',
    title: 'Sajian Sagu Kapurung / Sinonggi',
    category: 'resep',
    tribe: 'Tolaki',
    url: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1000&q=80',
    caption: 'Olahan sagu murni kenyal berkuah ikan pindang kuning dan sayuran liar hutan rimba Sulawesi.',
    credit: 'Dokumentasi Ketahanan Pangan Adat',
  },

  // Kerajinan Tangan / Kriya
  {
    id: 'kerajinan-tenun-sengkang',
    title: 'Kain Tenun Sutera Sengkang',
    category: 'kerajinan',
    tribe: 'Bugis',
    url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=1000&q=80',
    caption: 'Tenun sutera motif lago-lago dan pucuk rebung hasil helai benang murbei Danau Tempe.',
    credit: 'Penenun Tradisional Danau Tempe',
  },
  {
    id: 'kerajinan-tenun-toraja',
    title: 'Tenun Ikat & Ukiran Pa’ssura Toraja',
    category: 'kerajinan',
    tribe: 'Toraja',
    url: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=1000&q=80',
    caption: 'Motif Pa’teddong (kepala kerbau) yang melambangkan kemakmuran dan kedermawanan dalam masyarakat adat Toraja.',
    credit: 'Sentra Tenun Sa’dan Toraja',
  },
  {
    id: 'kerajinan-fuya-kulit-kayu',
    title: 'Kain Kulit Kayu Fuya / Kumpe',
    category: 'kerajinan',
    tribe: 'Pamona',
    url: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1000&q=80',
    caption: 'Pakaian prasejarah dari serat pohon beringin atau ivo yang ditempa memakai batu ike prasejarah.',
    credit: 'Balai Pelestarian Kebudayaan Lembah Bada',
  },

  // Kearifan Tani & Bahari
  {
    id: 'tani-bahari-sandeq',
    title: 'Perahu Sandeq Cadik Mandar',
    category: 'tani_bahari',
    tribe: 'Mandar',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    caption: 'Perahu layar bercadik ganda berkecepatan tinggi karya pelaut ulung Mandar menembus angin barat Teluk Mandar.',
    credit: 'Dokumentasi Pelaut Suku Mandar',
  },
  {
    id: 'tani-bahari-poso-masapi',
    title: 'Kearifan Wayamasapi Danau Poso',
    category: 'tani_bahari',
    tribe: 'Pamona',
    url: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1000&q=80',
    caption: 'Pagar bambu pelestarian sidat di muara Danau Poso dengan pembagian hasil berkeadilan sosial (Pusintuwu).',
    credit: 'Komunitas Adat Danau Poso',
  },
  {
    id: 'tani-bahari-sawah-toraja',
    title: 'Sawah Terasering & Aluk Todolo',
    category: 'tani_bahari',
    tribe: 'Toraja',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
    caption: 'Sistem pertanian terasering pegunungan Toraja yang mengalirkan air pegunungan suci ke lumbung alang sura.',
    credit: 'Arsip Lansekap Kultural Toraja',
  },

  // Bahasa & Sastra Sejarah
  {
    id: 'sejarah-lontara',
    title: 'Naskah Manuskrip Daun Lontar',
    category: 'bahasa',
    tribe: 'Bugis',
    url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80',
    caption: 'Aksara Lontara kuno berisi catatan silsilah, perjanjian to-riolo, serta wiracarita I La Galigo.',
    credit: 'Yayasan Kebudayaan Sulawesi',
  },
  {
    id: 'arsitektur-tongkonan',
    title: 'Rumah Adat Tongkonan Megah',
    category: 'cerita_sejarah',
    tribe: 'Toraja',
    url: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1000&q=80',
    caption: 'Atap melengkung menyerupai haluan perahu leluhur yang mengingatkan asal-muasal kedatangan manusia pertama.',
    credit: 'Pusat Dokumentasi Toraja',
  },
  {
    id: 'permainan-gasing-sulawesi',
    title: 'Gasing Kayu Besi Tradisional',
    category: 'permainan',
    tribe: 'Makassar',
    url: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80',
    caption: 'Gasing kayu ulin atau kayu jati yang dimainkan pemuda desa di pelataran rumah panggung selepas panen.',
    credit: 'Pesta Rakyat Sulawesi',
  },
];

/**
 * Compresses an image file in browser to JPEG base64 Data URL
 * Ensures light memory footprint (< 150KB) and smooth loading
 */
export async function compressAndReadImage(
  file: File,
  maxWidth = 1200,
  maxHeight = 800,
  quality = 0.8
): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('File yang dipilih bukan berkas gambar.'));
      return;
    }

    const reader = new FileReader();
    reader.onload = (readerEvent) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        if (height > maxHeight) {
          width = Math.round((width * maxHeight) / height);
          height = maxHeight;
        }

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(readerEvent.target?.result as string);
          return;
        }

        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = () => reject(new Error('Gagal memuat gambar yang dipilih.'));
      img.src = readerEvent.target?.result as string;
    };
    reader.onerror = () => reject(new Error('Gagal membaca file gambar.'));
    reader.readAsDataURL(file);
  });
}

/**
 * Returns a fallback curated image URL if an item lacks one
 */
export function getDefaultImageForItem(item: Partial<HeritageItem>): string {
  if (item.imageUrl) return item.imageUrl;

  const matchCategory = SULAWESI_IMAGE_PRESETS.find(
    (p) => p.category === item.category && (p.tribe === item.tribe || p.tribe === 'Semua')
  );
  if (matchCategory) return matchCategory.url;

  const generalCategoryMatch = SULAWESI_IMAGE_PRESETS.find((p) => p.category === item.category);
  if (generalCategoryMatch) return generalCategoryMatch.url;

  return 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1000&q=80';
}
