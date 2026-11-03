import { HeritageItem, HeritageCategory, Tribe } from '../types/heritage';

export interface TermCulturalMetadata {
  domain: string;
  context: string;
  domainEmoji: string;
  preferredCategory?: HeritageCategory;
}

export const CULTURAL_TERM_OVERRIDES: Record<string, TermCulturalMetadata> = {
  // Patikala
  patikala: {
    domain: 'Gastronomi & Rempah Alam',
    context: 'Bumbu Asam Masakan Tradisional',
    domainEmoji: '🍲',
    preferredCategory: 'resep',
  },
  // Sabbangparu
  sabbangparu: {
    domain: 'Kriya & Seni Tenun Adat',
    context: 'Jenis Kain Sutra Sengkang Busana Adat',
    domainEmoji: '🧵',
    preferredCategory: 'kerajinan',
  },
  'balo tettong': {
    domain: 'Kriya & Seni Tenun Adat',
    context: 'Motif Garis Vertikal Tenun Sutra Sengkang',
    domainEmoji: '🧵',
    preferredCategory: 'kerajinan',
  },
  lagosi: {
    domain: 'Kriya & Seni Tenun Adat',
    context: 'Motif Bunga Liar Sutra Sengkang',
    domainEmoji: '🧵',
    preferredCategory: 'kerajinan',
  },
  // Daun Mayana
  'daun mayana': {
    domain: 'Gastronomi & Rempah Alam',
    context: 'Daun Miana Pembungkus & Aroma Pa’piong',
    domainEmoji: '🌿',
    preferredCategory: 'resep',
  },
  mayana: {
    domain: 'Gastronomi & Rempah Alam',
    context: 'Daun Miana Pembungkus & Aroma Pa’piong',
    domainEmoji: '🌿',
    preferredCategory: 'resep',
  },
  // Punggawa
  punggawa: {
    domain: 'Navigasi & Kemaritiman',
    context: 'Kapten Pelayaran & Nakhoda Sandeq Mandar',
    domainEmoji: '⛵',
    preferredCategory: 'tani_bahari',
  },
  sandeq: {
    domain: 'Navigasi & Kemaritiman',
    context: 'Perahu Cadik Runcing Tangkas Mandar',
    domainEmoji: '⛵',
    preferredCategory: 'tani_bahari',
  },
  sombaq: {
    domain: 'Navigasi & Kemaritiman',
    context: 'Layar Segitiga Penunggang Angin Mandar',
    domainEmoji: '⛵',
    preferredCategory: 'tani_bahari',
  },
  barateng: {
    domain: 'Navigasi & Kemaritiman',
    context: 'Kayu Cadik Penyeimbang Perahu Sandeq',
    domainEmoji: '⛵',
    preferredCategory: 'tani_bahari',
  },
  // Banua Olang
  'banua olang': {
    domain: 'Arsitektur Rumah Tradisional',
    context: 'Rumah Adat Panggung Kayu Mamasa',
    domainEmoji: '🏡',
    preferredCategory: 'kerajinan',
  },
  'mesa kada dipotuo': {
    domain: 'Falsafah Luhur & Adat Istiadat',
    context: 'Falsafah Musyawarah & Kerukunan Mamasa',
    domainEmoji: '🏛️',
    preferredCategory: 'bahasa',
  },
  'sambu’': {
    domain: 'Kriya & Seni Tenun Adat',
    context: 'Kain Selendang Tenun Adat Mamasa',
    domainEmoji: '🧵',
    preferredCategory: 'kerajinan',
  },
  // Ledo / Tara
  'ledo / tara': {
    domain: 'Linguistik & Dialek Daerah',
    context: 'Dua Dialek Utama Rumpun Bahasa Kaili',
    domainEmoji: '🗣️',
    preferredCategory: 'bahasa',
  },
  'kaili ledo': {
    domain: 'Linguistik & Dialek Daerah',
    context: 'Dialek Ledo Lembah Palu',
    domainEmoji: '🗣️',
    preferredCategory: 'bahasa',
  },
  // Nosarara Nosabatutu
  'nosarara nosabatutu': {
    domain: 'Falsafah Luhur & Adat Istiadat',
    context: 'Falsafah Persaudaraan & Persatuan Kaili',
    domainEmoji: '🏛️',
    preferredCategory: 'bahasa',
  },
  nosarara: {
    domain: 'Falsafah Luhur & Adat Istiadat',
    context: 'Konsep Satu Darah & Kekeluargaan Kaili',
    domainEmoji: '🏛️',
    preferredCategory: 'bahasa',
  },
  souraja: {
    domain: 'Arsitektur Rumah Tradisional',
    context: 'Rumah Istana Panggung Pasak Kayu Tahan Gempa',
    domainEmoji: '🏡',
    preferredCategory: 'cerita_sejarah',
  },
  // Lipu & Buton
  lipu: {
    domain: 'Falsafah Luhur & Ketatanegaraan Adat',
    context: 'Negeri & Kedaulatan Rakyat Kesultanan Buton',
    domainEmoji: '🏛️',
    preferredCategory: 'bahasa',
  },
  sara: {
    domain: 'Falsafah Luhur & Ketatanegaraan Adat',
    context: 'Hukum & Pranata Keadilan Kesultanan Buton',
    domainEmoji: '⚖️',
    preferredCategory: 'bahasa',
  },
  lambo: {
    domain: 'Navigasi & Kemaritiman',
    context: 'Kapal Layar Niaga Antarpulau Tradisi Buton',
    domainEmoji: '⛵',
    preferredCategory: 'tani_bahari',
  },
  'perahu lambo': {
    domain: 'Navigasi & Kemaritiman',
    context: 'Kapal Layar Niaga Antarpulau Buton',
    domainEmoji: '⛵',
    preferredCategory: 'tani_bahari',
  },
  // Kuliner Buton
  kasuami: {
    domain: 'Gastronomi & Ketahanan Pangan',
    context: 'Tumpeng Singkong Kukus Bekal Pelaut Buton',
    domainEmoji: '🍲',
    preferredCategory: 'resep',
  },
  kaopi: {
    domain: 'Gastronomi & Ketahanan Pangan',
    context: 'Singkong Parut Diperas Kering Bahan Kasuami',
    domainEmoji: '🌾',
    preferredCategory: 'resep',
  },
  cora: {
    domain: 'Gastronomi & Anyaman Tradisional',
    context: 'Cetakan Kerucut Daun Kelapa Kasuami',
    domainEmoji: '🥥',
    preferredCategory: 'resep',
  },
  parende: {
    domain: 'Gastronomi & Resep Pusaka',
    context: 'Kuah Kuning Asam Segar Ikan Buton',
    domainEmoji: '🐟',
    preferredCategory: 'resep',
  },
  // Kuliner Kaledo
  kaledo: {
    domain: 'Gastronomi & Resep Pusaka',
    context: 'Sup Tulang Kaki Sapi Kuah Asam Rawit Donggala',
    domainEmoji: '🍲',
    preferredCategory: 'resep',
  },
  kasiwa: {
    domain: 'Gastronomi & Pangan Lokal',
    context: 'Singkong Rebus Pengganti Nasi Pendamping Kaledo',
    domainEmoji: '🍠',
    preferredCategory: 'resep',
  },
  'uripa / asam mentah': {
    domain: 'Gastronomi & Rempah Alam',
    context: 'Buah Asam Jawa Hijau Penentu Kuah Kaledo',
    domainEmoji: '🌱',
    preferredCategory: 'resep',
  },
  'uta kelo': {
    domain: 'Gastronomi & Resep Pusaka',
    context: 'Sayur Daun Kelor Segar Tradisi Kaili',
    domainEmoji: '🥗',
    preferredCategory: 'resep',
  },
  // Toraja
  'tallu lolona': {
    domain: 'Kearifan Kosmologi & Lingkungan',
    context: 'Keselarasan Tiga Tunas Semesta Toraja',
    domainEmoji: '🌱',
    preferredCategory: 'bahasa',
  },
  'pa’piong': {
    domain: 'Gastronomi & Seni Masak Bambu',
    context: 'Kuliner Bakar Bambu Upacara Adat Toraja',
    domainEmoji: '🎋',
    preferredCategory: 'resep',
  },
  katokkon: {
    domain: 'Gastronomi & Rempah Alam',
    context: 'Cabai Gendut Super Pedas Khas Toraja',
    domainEmoji: '🌶️',
    preferredCategory: 'resep',
  },
  'bulo talang': {
    domain: 'Gastronomi & Pemanfaatan Bambu',
    context: 'Bambu Dinding Basah Khusus Memasak Pa’piong',
    domainEmoji: '🎋',
    preferredCategory: 'resep',
  },
  tongkonan: {
    domain: 'Arsitektur Rumah Tradisional',
    context: 'Rumah Adat Leluhur Beratap Perahu Toraja',
    domainEmoji: '🏡',
    preferredCategory: 'cerita_sejarah',
  },
  alang: {
    domain: 'Arsitektur & Lumbung Adat',
    context: 'Lumbung Padi Berukir Suku Toraja',
    domainEmoji: '🌾',
    preferredCategory: 'cerita_sejarah',
  },
  // Bugis & Makassar
  'siri’ na pacce': {
    domain: 'Falsafah Luhur & Adat Istiadat',
    context: 'Harga Diri Moral & Empati Kemanusiaan',
    domainEmoji: '🏛️',
    preferredCategory: 'bahasa',
  },
  'siri’': {
    domain: 'Falsafah Luhur & Adat Istiadat',
    context: 'Nilai Martabat & Kehormatan Moral Bugis-Makassar',
    domainEmoji: '🏛️',
    preferredCategory: 'bahasa',
  },
  pacce: {
    domain: 'Falsafah Luhur & Adat Istiadat',
    context: 'Rasa Belarasa & Solidaritas Duka Sesama',
    domainEmoji: '🏛️',
    preferredCategory: 'bahasa',
  },
  sipakatau: {
    domain: 'Falsafah Luhur & Adat Istiadat',
    context: 'Memanusiakan Sesama Manusia Bugis',
    domainEmoji: '🏛️',
    preferredCategory: 'bahasa',
  },
  sipakalebbi: {
    domain: 'Falsafah Luhur & Adat Istiadat',
    context: 'Saling Menghargai & Memuliakan Martabat',
    domainEmoji: '🏛️',
    preferredCategory: 'bahasa',
  },
  sipakainge: {
    domain: 'Falsafah Luhur & Adat Istiadat',
    context: 'Saling Mengingatkan dalam Kebenaran',
    domainEmoji: '🏛️',
    preferredCategory: 'bahasa',
  },
  kapurung: {
    domain: 'Gastronomi & Resep Pusaka',
    context: 'Sagu Bulat Kuah Asam Patikala Luwu Bugis',
    domainEmoji: '🍲',
    preferredCategory: 'resep',
  },
  sippo: {
    domain: 'Gastronomi & Peralatan Adat',
    context: 'Sumpit Bambu Penggulung Adonan Sagu Kapurung',
    domainEmoji: '🥢',
    preferredCategory: 'resep',
  },
  'mappalili tabaro': {
    domain: 'Kearifan Agraris & Hutan Sagu',
    context: 'Adat Musyawarah Perawatan & Panen Pohon Sagu',
    domainEmoji: '🌴',
    preferredCategory: 'tani_bahari',
  },
  walida: {
    domain: 'Kriya & Seni Tenun Adat',
    context: 'Bilah Kayu Perapat Benang Tenun Sutra',
    domainEmoji: '🧵',
    preferredCategory: 'kerajinan',
  },
  // Minahasa
  'si tou timou tumou tou': {
    domain: 'Falsafah Luhur & Adat Istiadat',
    context: 'Falsafah Hidup Memanusiakan Orang Lain Minahasa',
    domainEmoji: '🏛️',
    preferredCategory: 'bahasa',
  },
  mapalus: {
    domain: 'Gotong Royong & Kearifan Agraris',
    context: 'Sistem Gotong Royong Kerja Bersama Minahasa',
    domainEmoji: '🤝',
    preferredCategory: 'tani_bahari',
  },
  tinutuan: {
    domain: 'Gastronomi & Resep Pusaka',
    context: 'Bubur Manado Aneka Sayuran Segar',
    domainEmoji: '🍲',
    preferredCategory: 'resep',
  },
  // Tolaki
  'kalo sara': {
    domain: 'Falsafah Luhur & Hukum Adat',
    context: 'Pranata Hukum Perdamaian Lingkaran Rotan Tolaki',
    domainEmoji: '⚖️',
    preferredCategory: 'bahasa',
  },
  kalosara: {
    domain: 'Falsafah Luhur & Hukum Adat',
    context: 'Simbol Suci Lingkaran Rotan Pemersatu Tolaki',
    domainEmoji: '⚖️',
    preferredCategory: 'bahasa',
  },
  sinonggi: {
    domain: 'Gastronomi & Resep Pusaka',
    context: 'Pangan Pokok Olahan Pati Sagu Basah Tolaki',
    domainEmoji: '🍲',
    preferredCategory: 'resep',
  },
  mombowahu: {
    domain: 'Kearifan Agraris & Sagu',
    context: 'Budidaya & Pengolahan Pohon Sagu Rawa Konawe',
    domainEmoji: '🌴',
    preferredCategory: 'tani_bahari',
  },
  // Pamona
  'sintuwu maroso': {
    domain: 'Falsafah Luhur & Adat Istiadat',
    context: 'Falsafah Bersatu Teguh Danau Poso',
    domainEmoji: '🏛️',
    preferredCategory: 'bahasa',
  },
  kayori: {
    domain: 'Sastra Lisan & Tradisi Tutur',
    context: 'Pantun & Syair Nyanyian Adat Poso',
    domainEmoji: '📜',
    preferredCategory: 'bahasa',
  },
  modero: {
    domain: 'Seni Pertunjukan & Tari Rakyat',
    context: 'Tari Lingkaran Persaudaraan Pesta Panen Poso',
    domainEmoji: '💃',
    preferredCategory: 'permainan',
  },
  // Gorontalo
  'aadati hula-hulaa to saraa': {
    domain: 'Falsafah Luhur & Hukum Adat',
    context: 'Prinsip Adat Bersendi Syarak Gorontalo',
    domainEmoji: '🏛️',
    preferredCategory: 'bahasa',
  },
  dulohupa: {
    domain: 'Musyawarah & Demokrasi Adat',
    context: 'Musyawarah Mufakat & Balai Adat Gorontalo',
    domainEmoji: '🏛️',
    preferredCategory: 'bahasa',
  },
  huyula: {
    domain: 'Gotong Royong Tradisional',
    context: 'Sistem Gotong Royong Tani & Nelayan Gorontalo',
    domainEmoji: '🤝',
    preferredCategory: 'tani_bahari',
  },
  tanggomo: {
    domain: 'Sastra Lisan & Balada Tradisi',
    context: 'Sastra Tutur Balada Berirama Berita Gorontalo',
    domainEmoji: '📜',
    preferredCategory: 'bahasa',
  },
  // Bolaang Mongondow
  mototompiaan: {
    domain: 'Falsafah Luhur & Adat Istiadat',
    context: 'Saling Memperbaiki & Menyayangi Sesama',
    domainEmoji: '🏛️',
    preferredCategory: 'bahasa',
  },
  komalig: {
    domain: 'Arsitektur Rumah Tradisional',
    context: 'Rumah Istana Adat Bolaang Mongondow',
    domainEmoji: '🏡',
    preferredCategory: 'cerita_sejarah',
  },
  bogani: {
    domain: 'Kepemimpinan & Ksatria Adat',
    context: 'Gelar Ksatria Pemimpin Pelindung Rakyat Mongondow',
    domainEmoji: '🛡️',
    preferredCategory: 'cerita_sejarah',
  },
  // Sangihe
  'somahe kai kehage': {
    domain: 'Falsafah Luhur & Ketabahan Bahari',
    context: 'Falsafah Menantang Ombak Pantang Menyerah',
    domainEmoji: '🌊',
    preferredCategory: 'bahasa',
  },
  sasambo: {
    domain: 'Sastra Lisan & Lagu Bahari',
    context: 'Lantunan Nyanyian Doa Pelaut Sangihe',
    domainEmoji: '🎶',
    preferredCategory: 'bahasa',
  },
  eha: {
    domain: 'Konservasi Tradisional & Laut',
    context: 'Pranata Larangan Adat Menjaga Ekosistem Laut & Buah Pala',
    domainEmoji: '🐠',
    preferredCategory: 'tani_bahari',
  },
  'perahu pamo': {
    domain: 'Navigasi & Kemaritiman',
    context: 'Perahu Kayu Tradisional Pemburu Cakalang',
    domainEmoji: '⛵',
    preferredCategory: 'tani_bahari',
  },
  // Muna
  'kaghati kolope': {
    domain: 'Kearifan Tradisi & Aerodinamika Purba',
    context: 'Layang-Layang Daun Gadung Purba Suku Muna',
    domainEmoji: '🪁',
    preferredCategory: 'permainan',
  },
  pomani: {
    domain: 'Kearifan Agraris Karst',
    context: 'Teknik Menanam Jagung di Rekahan Karst Muna',
    domainEmoji: '🪨',
    preferredCategory: 'tani_bahari',
  },
  // Moronene
  'ta’e motahau, ta’e morambaho': {
    domain: 'Kearifan Ekologi & Falsafah Hutan',
    context: 'Jangan Merusak Jangan Menebang Hutan Moronene',
    domainEmoji: '🌳',
    preferredCategory: 'bahasa',
  },
  tobu: {
    domain: 'Arsitektur Rumah Tradisional',
    context: 'Rumah Panggung Tinggi Lindung Rawa Moronene',
    domainEmoji: '🏡',
    preferredCategory: 'bahasa',
  },
};

/**
 * Normalizes term string for dictionary matching
 */
export function normalizeTermKey(term: string): string {
  return term
    .trim()
    .toLowerCase()
    .replace(/[’'`]/g, '’')
    .replace(/\s+/g, ' ');
}

/**
 * Returns accurate cultural context, domain, and icon for any heritage term
 */
export function getCulturalContextForTerm(
  termName: string,
  meaning: string,
  tribe: Tribe,
  item: HeritageItem
): TermCulturalMetadata {
  const normKey = normalizeTermKey(termName);

  // 1. Direct match in curated overrides
  if (CULTURAL_TERM_OVERRIDES[normKey]) {
    return CULTURAL_TERM_OVERRIDES[normKey];
  }

  // Exact word boundary matching for overrides
  for (const [key, val] of Object.entries(CULTURAL_TERM_OVERRIDES)) {
    if (normKey === key) {
      return val;
    }
    // Check if key is a distinct word within multi-word term
    const regex = new RegExp(`(^|\\s)${key}(\\s|$)`, 'i');
    if (regex.test(normKey)) {
      return val;
    }
  }

  // 2. Intelligent heuristics based on term name, meaning, and item category
  const textToScan = `${termName} ${meaning} ${item.title}`.toLowerCase();

  // Falsafah & Hukum
  if (
    textToScan.includes('falsafah') ||
    textToScan.includes('filosofi') ||
    textToScan.includes('hukum adat') ||
    textToScan.includes('moral') ||
    textToScan.includes('semboyan') ||
    textToScan.includes('petuah') ||
    textToScan.includes('ikrar') ||
    textToScan.includes('tatanan') ||
    textToScan.includes('sumpah')
  ) {
    return {
      domain: 'Falsafah Luhur & Adat Istiadat',
      context: `Falsafah Luhur Masyarakat ${tribe}`,
      domainEmoji: '🏛️',
      preferredCategory: 'bahasa',
    };
  }

  // Kuliner & Resep
  if (
    textToScan.includes('sup') ||
    textToScan.includes('sayur') ||
    textToScan.includes('bumbu') ||
    textToScan.includes('masakan') ||
    textToScan.includes('makanan') ||
    textToScan.includes('kuah') ||
    textToScan.includes('resep') ||
    textToScan.includes('pangan') ||
    textToScan.includes('sagu') ||
    textToScan.includes('singkong') ||
    textToScan.includes('kecombrang') ||
    textToScan.includes('ikan') ||
    textToScan.includes('daging') ||
    textToScan.includes('kukus') ||
    textToScan.includes('panggang') ||
    textToScan.includes('bakar')
  ) {
    return {
      domain: 'Gastronomi & Resep Pusaka',
      context: `Kuliner Tradisional Suku ${tribe}`,
      domainEmoji: '🍲',
      preferredCategory: 'resep',
    };
  }

  // Navigasi & Bahari
  if (
    textToScan.includes('perahu') ||
    textToScan.includes('layar') ||
    textToScan.includes('cadik') ||
    textToScan.includes('nelayan') ||
    textToScan.includes('pelaut') ||
    textToScan.includes('navigasi') ||
    textToScan.includes('samudra') ||
    textToScan.includes('laut') ||
    textToScan.includes('bintang') ||
    textToScan.includes('ombak')
  ) {
    return {
      domain: 'Navigasi & Kemaritiman',
      context: `Tradisi Bahari & Pelayaran Suku ${tribe}`,
      domainEmoji: '⛵',
      preferredCategory: 'tani_bahari',
    };
  }

  // Kriya & Tenun
  if (
    textToScan.includes('tenun') ||
    textToScan.includes('sutra') ||
    textToScan.includes('kain') ||
    textToScan.includes('anyaman') ||
    textToScan.includes('corak') ||
    textToScan.includes('motif') ||
    textToScan.includes('benang') ||
    textToScan.includes('ukiran')
  ) {
    return {
      domain: 'Kriya & Seni Tenun Adat',
      context: `Kriya Tradisional Suku ${tribe}`,
      domainEmoji: '🧵',
      preferredCategory: 'kerajinan',
    };
  }

  // Arsitektur
  if (
    textToScan.includes('rumah adat') ||
    textToScan.includes('istana') ||
    textToScan.includes('panggung') ||
    textToScan.includes('lumbung') ||
    textToScan.includes('tiang') ||
    textToScan.includes('pasak')
  ) {
    return {
      domain: 'Arsitektur Rumah Tradisional',
      context: `Arsitektur Adat Suku ${tribe}`,
      domainEmoji: '🏡',
      preferredCategory: 'cerita_sejarah',
    };
  }

  // Linguistik / Bahasa
  if (
    textToScan.includes('dialek') ||
    textToScan.includes('bahasa') ||
    textToScan.includes('kosakata') ||
    textToScan.includes('istilah') ||
    textToScan.includes('aksara')
  ) {
    return {
      domain: 'Linguistik & Dialek Daerah',
      context: `Tata Bahasa & Tutur Suku ${tribe}`,
      domainEmoji: '🗣️',
      preferredCategory: 'bahasa',
    };
  }

  // Permainan
  if (
    textToScan.includes('permainan') ||
    textToScan.includes('gasing') ||
    textToScan.includes('layang') ||
    textToScan.includes('ketangkasan')
  ) {
    return {
      domain: 'Permainan & Olahraga Tradisional',
      context: `Permainan Rakyat Suku ${tribe}`,
      domainEmoji: '🎯',
      preferredCategory: 'permainan',
    };
  }

  // Fallback to Category of Item
  const catNames: Record<HeritageCategory, { domain: string; context: string; emoji: string }> = {
    resep: {
      domain: 'Gastronomi & Resep Pusaka',
      context: `Kuliner Tradisional Suku ${tribe}`,
      emoji: '🍲',
    },
    bahasa: {
      domain: 'Bahasa & Falsafah Hidup',
      context: `Tutur & Falsafah Suku ${tribe}`,
      emoji: '📜',
    },
    kerajinan: {
      domain: 'Kriya & Kesenian Adat',
      context: `Kriya Pusaka Suku ${tribe}`,
      emoji: '🧵',
    },
    tani_bahari: {
      domain: 'Kearifan Agraris & Kemaritiman',
      context: `Kearifan Alam & Hayati Suku ${tribe}`,
      emoji: '🌾',
    },
    permainan: {
      domain: 'Permainan Rakyat Tradisional',
      context: 'Permainan Tradisional Sulawesi',
      emoji: '🎯',
    },
    cerita_sejarah: {
      domain: 'Cerita Sejarah & Warisan Budaya',
      context: `Warisan Sejarah Suku ${tribe}`,
      emoji: '🏛️',
    },
  };

  const fallback = catNames[item.category] || {
    domain: 'Khazanah Warisan Budaya',
    context: `Tradisi Suku ${tribe}`,
    emoji: '✨',
  };

  return {
    domain: fallback.domain,
    context: fallback.context,
    domainEmoji: fallback.emoji,
    preferredCategory: item.category,
  };
}

/**
 * Selects the most legitimate and culturally appropriate origin item for a dictionary term,
 * strictly preventing inappropriate recipe or irrelevant pairings (e.g., Nosarara -> Kaledo, Lipu -> Kasuami).
 */
export function selectBestOriginItem(
  candidates: { item: HeritageItem; meaning: string }[],
  termName: string,
  tribe: Tribe
): { bestItem: HeritageItem; bestMeaning: string } {
  if (candidates.length === 1) {
    return { bestItem: candidates[0].item, bestMeaning: candidates[0].meaning };
  }

  const normKey = normalizeTermKey(termName);
  const metadata = CULTURAL_TERM_OVERRIDES[normKey] || getCulturalContextForTerm(termName, candidates[0].meaning, tribe, candidates[0].item);
  const targetCategory = metadata.preferredCategory;

  // Filter candidates matching targetCategory
  if (targetCategory) {
    const matchedCategoryCandidates = candidates.filter(
      (c) => c.item.category === targetCategory
    );
    if (matchedCategoryCandidates.length > 0) {
      // If multiple, pick one whose title contains the term
      const titleMatches = matchedCategoryCandidates.filter((c) =>
        c.item.title.toLowerCase().includes(termName.toLowerCase())
      );
      if (titleMatches.length > 0) {
        return { bestItem: titleMatches[0].item, bestMeaning: titleMatches[0].meaning };
      }
      return {
        bestItem: matchedCategoryCandidates[0].item,
        bestMeaning: matchedCategoryCandidates[0].meaning,
      };
    }
  }

  // Strict avoidance rules:
  // If term has philosophical/constitutional nature, NEVER pick 'resep'
  const isPhilosophical =
    normKey.includes('nosarara') ||
    normKey.includes('lipu') ||
    normKey.includes('sara') ||
    normKey.includes('siri') ||
    normKey.includes('sipakatau') ||
    normKey.includes('kalo') ||
    normKey.includes('mesa kada');

  if (isPhilosophical) {
    const nonRecipeCandidates = candidates.filter((c) => c.item.category !== 'resep');
    if (nonRecipeCandidates.length > 0) {
      return {
        bestItem: nonRecipeCandidates[0].item,
        bestMeaning: nonRecipeCandidates[0].meaning,
      };
    }
  }

  // Default to first candidate
  return { bestItem: candidates[0].item, bestMeaning: candidates[0].meaning };
}
