import { HeritageItem } from '../types/heritage';

export const TRIBE_EXPANSION_ITEMS_PART3: HeritageItem[] = [
  // =========================================================================
  // RESEP MAKANAN TRADISIONAL TAMBAHAN
  // =========================================================================
  {
    id: 'exp-resep-kaili-kaledo-donggala',
    title: 'Kaledo (Kaki Lembu Donggala) Asam Jawa Muda & Singkong Rebus',
    subtitle: 'Sup Sumsum Kaki Sapi Berkuah Bening Asam Pedas Menyegarkan Khas Lembah Palu',
    category: 'resep',
    province: 'Sulawesi Tengah',
    tribe: 'Kaili',
    regionDetail: 'Kota Palu & Kabupaten Donggala',
    elderNarrator: {
      name: 'Papangge Rusli Dg. Kaledo',
      age: 79,
      titleOrRole: 'Tetua Peracik Kaledo Asli Lembah Palu',
      location: 'Banawa, Donggala',
    },
    recordedBy: {
      name: 'Fauzan Palu',
      schoolOrAffiliation: 'Fakultas Pertanian Universitas Tadulako',
      date: '16 Oktober 2024',
    },
    summary:
      'Kaledo adalah singkatan dari Kaki Lembu Donggala. Tulang kaki sapi beserta sumsum gurihnya direbus berjam-jam bersama asam jawa muda segar yang dikeruk langsung dari pohonnya, cabai rawit hijau ulek kasar, dan sedikit garam tanpa kecap atau rempah manis. Disajikan panas mendidih dengan sedotan bambu untuk menyedot sumsum dan singkong rebus empuk.',
    philosophicalMeaning:
      'Kesederhanaan bumbu (hanya asam dan cabai) yang mampu mengeluarkan kelezatan puncak kaldu sumsum alami, cermin ketulusan dan ketegasan sikap orang Kaili.',
    localTerms: [
      {
        term: 'Kaledo',
        meaning: 'Kaki Lembu Donggala; sup tulang sumsum kuah asam segar khas Kaili',
        language: 'Bahasa Kaili',
      },
      {
        term: 'Uve Ntodi',
        meaning: 'Air rebusan kuah asam segar yang mengalirkan keringat penawar lelah',
        language: 'Bahasa Kaili',
      },
    ],
    ingredientsOrMaterials: [
      '1 potong besar tulang kaki lembu berisi sumsum',
      '10 buah polong asam jawa muda dikeruk kulitnya',
      '20 buah cabai rawit hijau Kaili diulek kasar',
      'Garam batu secukupnya & air bersih sumur',
      'Singkong kuning empuk dikukus sebagai pengganti nasi',
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Perebusan Tulang Sumsum',
        description: 'Tulang kaki lembu direbus di kuali besar api kayu selama 3 jam hingga daging yang menempel empuk lembut.',
      },
      {
        stepNumber: 2,
        title: 'Pemberian Asam Muda & Cabai',
        description: 'Rebus asam muda terpisah, saring air asam kentalnya lalu masukkan ke dalam kuah kaldu bersama ulekan cabai rawit hijau.',
      },
      {
        stepNumber: 3,
        title: 'Penyajian Panas dengan Sedotan',
        description: 'Tuang ke mangkuk tanah liat, taburi garam secukupnya, dan santap bersama singkong rebus selagi mengepul.',
      },
    ],
    preservationAdvice:
      'Gunakan asam jawa muda segar (bukan pasta asam olahan pabrik) agar rasa asamnya tidak kecut getir di tenggorokan.',
    estimatedEra: 'Abad ke-18 era pelabuhan Donggala',
    tags: ['resep', 'kaili', 'kaledo', 'donggala', 'palu', 'sumsum'],
    likesCount: 148,
  },
  {
    id: 'exp-resep-mandar-jepa-panette',
    title: 'Jepa Ubi Kayu Parut Bakar Panette & Ikan Terbang Tuing-Tuing',
    subtitle: 'Roti Pipih Singkong Tradisional Bekal Melaut Pelaut Mandar di Atas Piring Tanah Liat',
    category: 'resep',
    province: 'Sulawesi Barat',
    tribe: 'Mandar',
    regionDetail: 'Pambusuang, Tinambung, Polewali Mandar & Majene',
    elderNarrator: {
      name: 'Pua Indo Kanna',
      age: 78,
      titleOrRole: 'Pewaris Keahlian Membuat Jepa Panette Tradisional',
      location: 'Tinambung, Polewali Mandar',
    },
    recordedBy: {
      name: 'Salmawati Mandar',
      schoolOrAffiliation: 'Sanggar Kuliner Bahari Mandar',
      date: '18 Oktober 2024',
    },
    summary:
      'Jepa adalah makanan pokok tradisional khas suku Mandar yang terbuat dari singkong parut yang telah diperas air patinya, dicampur kelapa setengah tua parut, lalu dipanggang kering di antara dua piring tanah liat panas membara (panette). Jepa berbentuk bundar pipih kecokelatan beraroma asap, dimakan bersama ikan tuing-tuing (ikan terbang) asap gurih.',
    philosophicalMeaning:
      'Makanan yang tahan disimpan berbulan-bulan di atas perahu Sandeq tanpa basi, simbol ketahanan batin dan kemandirian kaum bahari Mandar.',
    localTerms: [
      {
        term: 'Jepa',
        meaning: 'Lempeng roti singkong parut bakar khas Mandar',
        language: 'Bahasa Mandar',
      },
      {
        term: 'Panette',
        meaning: 'Piring gerabah tanah liat sepasang penutup pembakar jepa di atas tungku',
        language: 'Bahasa Mandar',
      },
      {
        term: 'Tuing-tuing',
        meaning: 'Ikan terbang yang melompat di atas permukaan Selat Makassar',
        language: 'Bahasa Mandar',
      },
    ],
    ingredientsOrMaterials: [
      '1 kg singkong putih parut diperas kering',
      '1 butir kelapa setengah tua diparut memanjang',
      '1 sendok teh garam halus',
      'Sepasang piring tanah liat panette',
      'Ikan tuing-tuing bakar sambal asam mangga',
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pengayakan Remah Singkong & Kelapa',
        description: 'Campurkan ampas singkong parut dengan kelapa parut dan garam, ayak dengan saringan bambu agar butirannya seragam.',
      },
      {
        stepNumber: 2,
        title: 'Pemanggangan di Antara Dua Piring Panette',
        description: 'Panaskan kedua piring tanah liat di atas bara api, tuangkan adonan ke piring bawah, tutup rapat dengan piring atas yang membara.',
      },
      {
        stepNumber: 3,
        title: 'Pematangan Cepat 3 Menit',
        description: 'Panas dari kedua sisi membuat jepa matang renyah di luar namun lembut di dalam dengan wangi arang kelapa.',
      },
    ],
    preservationAdvice:
      'Pertahankan pembuatan panette tanah liat pengrajin desa agar cita rasa gurih arangnya tidak hilang digantikan wajan teflon modern.',
    estimatedEra: 'Turun-temurun sejak era awal pelaut Mandar',
    tags: ['resep', 'mandar', 'jepa', 'singkong', 'tuing-tuing', 'bahari'],
    likesCount: 139,
  },
  {
    id: 'exp-resep-makassar-pallubasa-serundeng',
    title: 'Pallubasa Daging Sapi Serundeng Kelapa Sangrai & Telur Ayam Kampung',
    subtitle: 'Sup Daging Sapi Berkuah Rempah Kental Gurih Berpadu Kelapa Sangrai Tumbuk Lembut',
    category: 'resep',
    province: 'Sulawesi Selatan',
    tribe: 'Makassar',
    regionDetail: 'Kota Makassar & Kabupaten Gowa',
    elderNarrator: {
      name: 'Daeng Rewa Karaeng Bonto',
      age: 77,
      titleOrRole: 'Pewaris Dapur Kuliner Pallubasa Klasik Makassar',
      location: 'Jalan Serigala, Makassar',
    },
    recordedBy: {
      name: 'Muh. Ikhsan Dg. Ngawing',
      schoolOrAffiliation: 'Fakultas Kedokteran Gigi Unhas Makassar',
      date: '20 Oktober 2024',
    },
    summary:
      'Pallubasa adalah kuliner legendaris suku Makassar yang mengolah potongan daging sapi dan jeroan empuk dalam kuah rempah berlimpah (ketumbar, jintan, serai, jahe, lengkuas). Ciri khas utamanya adalah taburan melimpah kelapa parut yang disangrai kering hingga cokelat gelap lalu ditumbuk berminyak wangi, serta dicampur sebutir kuning telur ayam kampung mentah (alas) selagi kuah mendidih.',
    philosophicalMeaning:
      'Kelapa sangrai yang harum melambangkan kemakmuran bumi Makassar dan memberi tenaga perkasa bagi para pekerja pelabuhan dan pelaut.',
    localTerms: [
      {
        term: 'Pallubasa',
        meaning: 'Masakan berkuah basah kaya rempah daging sapi khas Makassar',
        language: 'Bahasa Makassar',
      },
      {
        term: 'Alas',
        meaning: 'Kuning telur ayam kampung segar yang dicampurkan langsung ke dalam mangkuk panas',
        language: 'Bahasa Makassar',
      },
    ],
    ingredientsOrMaterials: [
      '500 gram daging sapi gandik & sandung lamur',
      '1 butir kelapa tua disangrai cokelat lalu ditumbuk halus berminyak',
      '1 butir kuning telur ayam kampung per mangkuk',
      '10 butir ketumbar sangrai, 1 sendok teh jintan, 6 siung bawang merah',
      '4 batang serai geprek & 3 ruas lengkuas memar',
      'Air asam jawa dan garam secukupnya',
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Perebusan Daging Sapi & Rempah Aromatik',
        description: 'Rebus daging bersama serai, lengkuas, dan bumbu halus hingga kaldu pekat dan daging empuk meresap.',
      },
      {
        stepNumber: 2,
        title: 'Pencampuran Kelapa Sangrai Gurih',
        description: 'Masukkan tumbukan kelapa sangrai ke dalam rebusan kuah kaldu, aduk hingga kuah menjadi cokelat pekat harum kacang.',
      },
      {
        stepNumber: 3,
        title: 'Pemberian Kuning Telur Alas',
        description: 'Pecahkan kuning telur ayam kampung ke dasar mangkuk, siram dengan kuah mendidih hingga setengah matang lembut.',
      },
    ],
    preservationAdvice:
      'Sangrai kelapa dengan api kecil perlahan agar tidak hangus pahit, menghasilkan aroma nutty yang khas.',
    estimatedEra: 'Abad ke-17',
    tags: ['resep', 'makassar', 'pallubasa', 'kuliner-makassar', 'daging'],
    likesCount: 156,
  },
  {
    id: 'exp-resep-bugis-barobbo-jagung-pulut',
    title: 'Barobbo Bubur Jagung Pulut Manis Gurih Sayur Khas Bugis',
    subtitle: 'Bubur Jagung Parut Segar Dimasak Sayur Kangkung Bayam & Suwiran Ayam Udang',
    category: 'resep',
    province: 'Sulawesi Selatan',
    tribe: 'Bugis',
    regionDetail: 'Barru, Pangkep, dan Soppeng',
    elderNarrator: {
      name: "Puang Indo' Janna",
      age: 75,
      titleOrRole: 'Tetua Masak Komunitas Pertanian Jagung Bugis',
      location: 'Tanete Rilau, Barru',
    },
    recordedBy: {
      name: 'Andi Nur Azizah Barru',
      schoolOrAffiliation: 'Politeknik Pertanian Negeri Pangkep',
      date: '22 Oktober 2024',
    },
    summary:
      'Barobbo adalah hidangan bubur tradisional masyarakat Bugis yang dibuat dari bulir jagung pulut putih segar yang diserut kasar lalu dimasak bersama kaldu ayam kampung, irisan sayur kangkung, daun labu muda, bayam, dan udang manis. Disantap hangat bersama perkedel jagung renyah, sambal cabai rawit jeruk nipis, dan taburan bawang merah goreng.',
    philosophicalMeaning:
      'Simbol kebersamaan musim panen jagung di mana para petani berkumpul di balai-balai sawah menyantap semangkuk barobbo yang mengenyangkan dan menyehatkan.',
    localTerms: [
      {
        term: 'Barobbo',
        meaning: 'Bubur jagung pulut segar khas suku Bugis yang lembut dan sarat sayur mayur',
        language: 'Bahasa Bugis',
      },
      {
        term: 'Jagung Pulut',
        meaning: 'Varietas jagung putih lokal yang pulen, kenyal, dan manis gurih alami',
        language: 'Bahasa Bugis',
      },
    ],
    ingredientsOrMaterials: [
      '4 tongkol jagung pulut putih segar diserut',
      '1 ikat kangkung dan daun bayam sawah',
      '150 gram udang kupas segar atau suwiran ayam kampung',
      '6 siung bawang merah & 3 siung bawang putih dihaluskan',
      '1 batang daun bawang & seledri iris',
      'Bawang goreng & jeruk nipis untuk penyajian',
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Perebusan Serutan Jagung Pulut',
        description: 'Rebus jagung serut dalam kaldu ayam mendidih sambil diaduk teratur hingga pati jagung mengental lembut.',
      },
      {
        stepNumber: 2,
        title: 'Pemasukan Sayur & Udang',
        description: 'Masukkan tumisan bawang, udang segar, dan sayuran hijau hingga layu matang hijau segar.',
      },
      {
        stepNumber: 3,
        title: 'Penyajian Hangat Berbawang Goreng',
        description: 'Sajikan dengan perasan jeruk nipis, sambal terasi, dan perkedel jagung garing.',
      },
    ],
    preservationAdvice:
      'Tanam terus jagung pulut lokal agar tidak tergantikan oleh jagung hibrida manis impor yang kurang pulen saat dibubur.',
    estimatedEra: 'Abad ke-16',
    tags: ['resep', 'bugis', 'barobbo', 'jagung', 'kuliner-sehat'],
    likesCount: 141,
  },
  {
    id: 'exp-resep-minahasa-ayam-bulu-pangi',
    title: 'Ayam Bulu / Manuk Masak Bambu Sayur Pangi Minahasa',
    subtitle: 'Masakan Ayam Kampung Bumbu Rempah Daun Pangi yang Dibakar dalam Batang Bambu Hijau',
    category: 'resep',
    province: 'Sulawesi Utara',
    tribe: 'Minahasa',
    regionDetail: 'Kawangkoan, Tomohon, dan Minahasa Selatan',
    elderNarrator: {
      name: 'Opa Royke Tendean',
      age: 79,
      titleOrRole: 'Tetua Masak Bulu Upacara Syukuran Minahasa',
      location: 'Kawangkoan, Minahasa',
    },
    recordedBy: {
      name: 'Inggrid Lumempouw',
      schoolOrAffiliation: 'Fakultas Pariwisata Unima Tomohon',
      date: '24 Oktober 2024',
    },
    summary:
      'Ayam Bulu (Masak di Batang Bambu) adalah masakan khas Minahasa di mana potongan ayam kampung dicampur dengan irisan halus daun pangi hutan yang telah dihilangkan getahnya, cabai rawit pedas, jahe, serai, daun kemangi, dan daun jeruk. Adonan dimasukkan ke dalam ruas bambu muda lalu dipanggang di atas bara api kayu hingga harum getah bambunya menyatu sempurna dengan daging ayam.',
    philosophicalMeaning:
      'Memasak di dalam bambu hutan melambangkan keterikatan masyarakat Minahasa dengan alam pegunungan yang memberi mereka kehidupan dan rezeki melimpah.',
    localTerms: [
      {
        term: 'Nasi / Ayam Bulu',
        meaning: 'Masakan yang dimasukkan ke dalam selongsong bambu (bulu) lalu dibakar',
        language: 'Bahasa Minahasa / Melayu Manado',
      },
      {
        term: 'Daun Pangi',
        meaning: 'Daun pohon kluwek hutan yang dirajang halus gurih dan kaya zat besi',
        language: 'Bahasa Minahasa',
      },
    ],
    ingredientsOrMaterials: [
      '1 ekor ayam kampung dipotong kecil',
      '2 ikat daun pangi muda dirajang halus',
      '20 cabai rawit merah & 8 siung bawang merah',
      '4 batang serai geprek & 2 lembar daun pandan',
      'Ruas bambu hijau berdiameter 8 cm',
      'Daun pisang untuk menyumbat mulut bambu',
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Peremasan Daun Pangi dengan Garam',
        description: 'Daun pangi diramas garam lalu dicuci bersih untuk mengeluarkan getah asam alaminya.',
      },
      {
        stepNumber: 2,
        title: 'Pengadukan Bumbu Rempah & Ayam',
        description: 'Campurkan ayam, daun pangi, serai, cabai, dan jahe hingga bumbu terlumuri merata ke sela daging.',
      },
      {
        stepNumber: 3,
        title: 'Pembakaran Miring di Atas Api Kayu',
        description: 'Bakar bambu di samping bara api selama 1 jam sambil dibalik-balik hingga kuah di dalam bambu mendidih kering harum.',
      },
    ],
    preservationAdvice:
      'Pilih bambu yang masih berair segar agar bambu tidak hangus terbakar sebelum daging di dalamnya matang sempurna.',
    estimatedEra: 'Turun-temurun sejak era leluhur Toar Lumimuut Minahasa',
    tags: ['resep', 'minahasa', 'ayam-bulu', 'pangi', 'masak-bambu', 'tomohon'],
    likesCount: 135,
  },

  // =========================================================================
  // KERAJINAN TANGAN & KARYA PUSAKA TAMBAHAN
  // =========================================================================
  {
    id: 'exp-kerajinan-bugis-songkok-recca-bone',
    title: 'Songkok Recca / Guru Pelepah Lontar Halus Berlapis Emas Bone',
    subtitle: 'Mahakarya Seni Anyaman Serat Pelepah Daun Lontar Lambang Martabat Pria Bugis',
    category: 'kerajinan',
    province: 'Sulawesi Selatan',
    tribe: 'Bugis',
    regionDetail: 'Kecamatan Awangpone & Tanete Riattang, Bone',
    elderNarrator: {
      name: 'Puang Haji Petta Matanna',
      age: 81,
      titleOrRole: 'Maestro Anyam Songkok Recca Istana Arung Palakka',
      location: 'Paccing, Awangpone, Bone',
    },
    recordedBy: {
      name: 'Andi M. Fajar Bone',
      schoolOrAffiliation: 'Balai Pelestarian Nilai Budaya Sulsel',
      date: '17 Oktober 2024',
    },
    summary:
      'Songkok Recca (atau Songkok Pamiring Guru) adalah penutup kepala tradisional pria Bugis yang dibuat dari serat pelepah pohon lontar (tala) yang dipukul-pukul (direcca) dengan pemukul kayu hingga menyisakan serat halus putih berkilau. Dianyam secara manual dengan pola kait rumit menggunakan cetakan kayu, bagian tepi atasnya sering dihiasi lempengan benang emas murni.',
    philosophicalMeaning:
      'Melambangkan kewibawaan akal pikiran pria Bugis yang lurus, tahan tempaan cobaan, dan berpegang teguh pada nilai kejujuran.',
    localTerms: [
      {
        term: 'Recca',
        meaning: 'Memukul-mukul pelepah lontar hingga terurai menjadi serat benang',
        language: 'Bahasa Bugis',
      },
      {
        term: 'Songkok Pamiring',
        meaning: 'Peci anyaman lontar berbingkai benang emas tanda kebangsawanan dan kehormatan',
        language: 'Bahasa Bugis',
      },
    ],
    toolsUsed: ['Pemukul kayu bulat untuk merecca pelepah', 'Cetakan kayu kepala (assolong)', 'Jarum anyam baja kecil', 'Pewarna hitam lumpur alami'],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pemukulan Pelepah Lontar',
        description: 'Pelepah lontar tua dipukul berhati-hati di atas kayu landasan hingga daging pelepah hancur dan serat halusnya terlepas.',
      },
      {
        stepNumber: 2,
        title: 'Perendaman & Pewarnaan Alami',
        description: 'Sebagian serat direndam di dalam lumpur sawah selama berhari-hari agar menjadi hitam pekat berkilau alami.',
      },
      {
        stepNumber: 3,
        title: 'Penganyaman Teliti Selama 1-2 Bulan',
        description: 'Perajin merajut serat hitam dan putih satu per satu di atas cetakan kayu menghasilkan motif anyaman mikro yang sangat rapat.',
      },
    ],
    preservationAdvice:
      'Lindungi pohon lontar di Kabupaten Bone dan beri insentif beasiswa bagi anak-anak muda yang tekun belajar menganyam Songkok Recca.',
    estimatedEra: 'Abad ke-17 (Masa Arung Palakka Raja Bone)',
    tags: ['kerajinan', 'bugis', 'songkok-recca', 'bone', 'anyaman', 'lontar'],
    likesCount: 167,
  },
  {
    id: 'exp-kerajinan-makassar-badik-pamor-kurissi',
    title: 'Badik Pusaka Makassar Pamor Kurissi & Gagang Tanduk Kerbau',
    subtitle: 'Senjata Tradisional Tempa Besi Meteorit Pelindung Siri’ & Simbol Kehormatan Leluhur',
    category: 'kerajinan',
    province: 'Sulawesi Selatan',
    tribe: 'Makassar',
    regionDetail: 'Kecamatan Sanrobone, Takalar & Gowa',
    elderNarrator: {
      name: 'Panre Bessi Daeng Mappa',
      age: 80,
      titleOrRole: 'Empu Pandai Besi Tradisional Penempa Senjata Pusaka Gowa',
      location: 'Sanrobone, Takalar',
    },
    recordedBy: {
      name: 'Andi Faisal Karaeng Jarre',
      schoolOrAffiliation: 'Perkumpulan Pengkaji Senjata Pusaka Nusantara Celebes',
      date: '19 Oktober 2024',
    },
    summary:
      'Badik Makassar adalah senjata tikam tradisional berbilah tunggal asimetris yang ditempa oleh Panre Bessi (pandai besi) dari lipatan besi hitam, baja murni, dan serpihan batu meteorit berpamor nikel perak. Pamor "Kurissi" (sisik ikan gurih bergaris) dipercaya membawa kedamaian dan melindungi pemiliknya dari marabahaya saat merantau.',
    philosophicalMeaning:
      'Badik bagi pria Makassar adalah simbol pelindung kehormatan keluarga (Siri\'). Pepatah mengatakan: "Keluarnya badik dari sarungnya adalah jalan terakhir bila martabat telah diinjak dan musyawarah telah buntu".',
    localTerms: [
      {
        term: 'Panre Bessi',
        meaning: 'Ahli pandai besi penempa pusaka yang memiliki ilmu metalurgi dan doa spiritual',
        language: 'Bahasa Makassar',
      },
      {
        term: 'Pamor Kurissi',
        meaning: 'Motif lipatan bilah besi berlapis yang menyerupai susunan sisik ikan berkilau',
        language: 'Bahasa Makassar',
      },
    ],
    toolsUsed: ['Tungku arang batok kelapa suhu 1.200°C', 'Palu tempa manual bilah baja', 'Minyak kelapa suci pendingin sepuhan', 'Kayu kemuning wangi untuk sarung (wanua)'],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pelipatan Besi & Nikel Ratusan Kali',
        description: 'Besi dan baja dibakar membara lalu dilipat dan ditempa berkali-kali membentuk ratusan lapisan mikro serat pamor.',
      },
      {
        stepNumber: 2,
        title: 'Penyepuhan Air & Minyak Kelapa',
        description: 'Bilah dicelupkan ke dalam air rempah dingin untuk mengunci ketajaman bilah baja.',
      },
      {
        stepNumber: 3,
        title: 'Pembuatan Gagang Tanduk Kerbau Hitam',
        description: 'Gagang diukir melengkung menyerupai paruh burung elang laut yang nyaman digenggam tangan.',
      },
    ],
    preservationAdvice:
      'Lestarikan seni tempa badik sebagai warisan seni kriya metalurgi kuno Nusantara bernilai seni tinggi.',
    estimatedEra: 'Abad ke-14',
    tags: ['kerajinan', 'makassar', 'badik', 'pandai-besi', 'pusaka', 'pamor'],
    likesCount: 158,
  },
  {
    id: 'exp-kerajinan-tolaki-bingka-anyaman-rotan',
    title: 'Anyaman Bingka Rotan Tolaki Wadah Pangan Hutan Pegunungan',
    subtitle: 'Keranjang Anyam Rotan Bertali Pundak Sahabat Petani Sagu Lembah Konawe',
    category: 'kerajinan',
    province: 'Sulawesi Tenggara',
    tribe: 'Tolaki',
    regionDetail: 'Unaaha, Konawe & Kolaka',
    elderNarrator: {
      name: 'Ambe H. Baharuddin Tolaki',
      age: 78,
      titleOrRole: 'Pengrajin Rotan Adat Wonua Konawe',
      location: 'Wawotobi, Konawe',
    },
    recordedBy: {
      name: 'Siti Rahmawati Konawe',
      schoolOrAffiliation: 'Fakultas Teknik Kehutanan Universitas Halu Oleo',
      date: '21 Oktober 2024',
    },
    summary:
      'Bingka adalah tas keranjang anyaman punggung suku Tolaki yang dibuat dari jalinan serat rotan hutan tohiti yang lentur dan kuat. Didesain dengan dasar berkaki empat dari kayu ulin dan dua tali sandang di pundak, Bingka digunakan petani dan perempuan Tolaki untuk mengangkut pati sagu basah, ubi hutan, dan sayur pakis menuruni bukit terjal.',
    philosophicalMeaning:
      'Melambangkan ketangguhan masyarakat Tolaki memikul beban nafkah keluarga dengan pundak yang tegap dan hati yang ikhlas.',
    localTerms: [
      {
        term: 'Bingka',
        meaning: 'Keranjang anyaman rotan bertali sandang pundak penampung hasil bumi',
        language: 'Bahasa Tolaki',
      },
      {
        term: 'Rotan Tohiti',
        meaning: 'Jenis rotan hutan terbaik yang sangat ulet dan tahan air kelembapan tinggi',
        language: 'Bahasa Tolaki',
      },
    ],
    toolsUsed: ['Pisau raut rotan bilah baja', 'Rotan tohiti tua dijemur', 'Kulit kayu waru untuk tali sandang pundak'],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pembersihan & Pembelahan Serat Rotan',
        description: 'Batang rotan dibersihkan durinya lalu dibelah menjadi serat pita tipis selebar 0,5 cm.',
      },
      {
        stepNumber: 2,
        title: 'Penganyaman Pola Mata Ketupat Ganda',
        description: 'Dianyam dari dasar kotak mengembang ke atas membentuk tabung ergonomis yang pas menempel di punggung manusia.',
      },
    ],
    preservationAdvice:
      'Kembangkan kerajinan Bingka menjadi ransel etnik modis untuk mendukung ekonomi kreatif ramah lingkungan perajin desa.',
    estimatedEra: 'Abad ke-15',
    tags: ['kerajinan', 'tolaki', 'rotan', 'bingka', 'konawe', 'tas-etnik'],
    likesCount: 110,
  },

  // =========================================================================
  // BAHASA DAERAH & FALSAFAH LUHUR TAMBAHAN
  // =========================================================================
  {
    id: 'exp-falsafah-bugis-sipakatau-sipakalebbi',
    title: 'Sipakatau, Sipakalebbi, Sipakainge: Tiga Pilar Kemanusiaan Bugis',
    subtitle: 'Saling Memanusiakan, Saling Memuliakan Martabat, dan Saling Mengingatkan Kebaikan',
    category: 'bahasa',
    province: 'Sulawesi Selatan',
    tribe: 'Bugis',
    regionDetail: 'Seluruh Tanah Bugis (Sulawesi Selatan & Rantau)',
    elderNarrator: {
      name: 'Puang Matoa Arung Salotungo',
      age: 86,
      titleOrRole: 'Pakar Adat dan Falsafah Lontara Bugis',
      location: 'Soppeng, Sulawesi Selatan',
    },
    recordedBy: {
      name: 'Andi Tenri Olle',
      schoolOrAffiliation: 'Fakultas Ilmu Budaya Universitas Hasanuddin',
      date: '15 Oktober 2024',
    },
    summary:
      'Tiga pilar kemanusiaan agung peradaban Bugis: 1) "Sipakatau" (saling memperlakukan sesama sebagai manusia seutuhnya, tanpa merendahkan derajat orang lain), 2) "Sipakalebbi" (saling menghormati, memuji secara tulus, dan memuliakan kelebihan orang lain), 3) "Sipakainge" (saling menasihati dengan kasih sayang apabila ada saudara yang keliru atau tersesat langkah).',
    philosophicalMeaning:
      'Pondasi masyarakat madani yang demokratis, penuh empati, dan menjaga perdamaian universal tanpa membedakan kasta maupun kekayaan.',
    localTerms: [
      {
        term: 'Sipakatau',
        meaning: 'Saling memanusiakan satu sama lain',
        language: 'Bahasa Bugis',
      },
      {
        term: 'Sipakalebbi',
        meaning: 'Saling memuliakan dan menghargai martabat sesama',
        language: 'Bahasa Bugis',
      },
      {
        term: 'Sipakainge',
        meaning: 'Saling mengingatkan dan menasihati dalam jalan kebenaran',
        language: 'Bahasa Bugis',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Diajarkan dalam Keluarga Sejak Kanak-kanak',
        description: 'Orang tua Bugis melarang anak berbicara meninggikan suara kepada siapa pun demi mengamalkan Sipakalebbi.',
      },
      {
        stepNumber: 2,
        title: 'Penerapan di Tanah Rantau Nusantara',
        description: 'Menjadi bekal perantau Bugis agar diterima dengan hangat di mana pun kakinya berpijak karena selalu menghormati adat setempat.',
      },
    ],
    preservationAdvice:
      'Jadikan kurikulum pembentukan karakter toleransi di seluruh jenjang pendidikan sekolah.',
    estimatedEra: 'Sejak era purba Lontara abad ke-13',
    tags: ['bahasa', 'falsafah', 'bugis', 'sipakatau', 'sipakalebbi', 'kemanusiaan'],
    likesCount: 180,
  },
  {
    id: 'exp-falsafah-pamona-sintuwu-maroso',
    title: 'Sintuwu Maroso & Siwagi Nto Lino: Falsafah Hidup Rukun Suku Pamona',
    subtitle: 'Bersatu Kita Teguh dan Saling Menyayangi Seluruh Makhluk Penghuni Bumi',
    category: 'bahasa',
    province: 'Sulawesi Tengah',
    tribe: 'Pamona',
    regionDetail: 'Kabupaten Poso & Lembah Bada',
    elderNarrator: {
      name: 'Papa Silas Tawole',
      age: 82,
      titleOrRole: 'Tetua Majelis Adat Pamona Poso',
      location: 'Tentena, Danau Poso',
    },
    recordedBy: {
      name: 'Grace Wulanga',
      schoolOrAffiliation: 'Fakultas Hukum Universitas Sintuwu Maroso Poso',
      date: '17 Oktober 2024',
    },
    summary:
      'Sintuwu Maroso bermakna persatuan yang kokoh tak tergoyahkan laksana batu cadas Danau Poso. Falsafah ini diperluas dengan konsep "Siwagi Nto Lino", yaitu kewajiban moral setiap manusia Pamona untuk menyayangi, melindungi, dan hidup berdampingan secara damai dengan semua suku bangsa, tumbuhan, dan satwa di alam semesta.',
    philosophicalMeaning:
      'Rekonsiliasi sejati dan kerukunan abadi yang terbukti memulihkan kedamaian tanah Poso menjadi salah satu tempat paling damai dan bersaudara di Nusantara.',
    localTerms: [
      {
        term: 'Sintuwu Maroso',
        meaning: 'Bersatu padu dengan hati yang kokoh kuat',
        language: 'Bahasa Pamona',
      },
      {
        term: 'Siwagi Nto Lino',
        meaning: 'Saling mengasihi seluruh manusia dan menjaga keharmonisan bumi',
        language: 'Bahasa Pamona',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Musyawarah Mombeli Mori di Tepi Danau',
        description: 'Tetua adat duduk bersama membahas kesejahteraan kampung dengan prinsip Sintuwu Maroso.',
      },
      {
        stepNumber: 2,
        title: 'Penyelesaian Sengketa dengan Jamuan Makan Bersama',
        description: 'Jika timbul perselisihan, kedua belah pihak diwajibkan makan di piring yang sama untuk menyatukan kembali rasa persaudaraan.',
      },
    ],
    preservationAdvice:
      'Terus pelihara semangat Sintuwu Maroso sebagai inspirasi perdamaian abadi bagi seluruh penjuru dunia.',
    estimatedEra: 'Turun-temurun sejak era megalitikum Poso',
    tags: ['bahasa', 'falsafah', 'pamona', 'sintuwu-maroso', 'poso', 'perdamaian'],
    likesCount: 162,
  },
];
