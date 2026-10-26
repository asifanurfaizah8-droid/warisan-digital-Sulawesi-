import { HeritageItem } from '../types/heritage';

export const TRIBE_EXPANSION_ITEMS: HeritageItem[] = [
  // =========================================================================
  // SUKU MAMASA (SULAWESI BARAT)
  // =========================================================================
  {
    id: 'exp-mamasa-resep-kareba-manuk',
    title: 'Kareba Manuk Mamasa Pedas Buluh Lengkuas',
    subtitle: 'Masakan Ayam Kampung Bumbu Serai & Lengkuas Hutan Lereng Gandangdewata',
    category: 'resep',
    province: 'Sulawesi Barat',
    tribe: 'Mamasa',
    regionDetail: 'Kecamatan Balla & Messawa, Kabupaten Mamasa',
    elderNarrator: {
      name: "Nenek Indo' Bulan",
      age: 77,
      titleOrRole: 'Tetua Masak Adat Pegunungan Kondosapata',
      location: 'Balla Pepek, Mamasa',
    },
    recordedBy: {
      name: 'Yulianus Tandilangi',
      schoolOrAffiliation: 'SMA Negeri 1 Mamasa',
      date: '16 Oktober 2024',
    },
    summary:
      'Kareba Manuk adalah masakan tradisional ayam kampung khas pegunungan Mamasa yang diolah dengan lengkuas parut berlimpah, cabai rawit gunung (lada katokkon khas), serai, dan sedikit perasan asam mangga hutan, dimasak perlahan hingga daging ayam empuk dan bumbunya meresap kering.',
    philosophicalMeaning:
      'Menghangatkan tubuh di tengah hawa dingin pegunungan Gandangdewata serta simbol penghormatan kepada tamu kehormatan yang tiba di rumah panggung Banua Sibarrung.',
    localTerms: [
      {
        term: 'Kareba Manuk',
        meaning: 'Olahan ayam bumbu rempah pegunungan khas Mamasa',
        language: 'Bahasa Mamasa',
      },
      {
        term: 'Lada Katokkon',
        meaning: 'Cabai bulat kecil beraroma wangi dengan tingkat kepedasan tinggi khas dataran tinggi',
        language: 'Bahasa Mamasa',
      },
    ],
    ingredientsOrMaterials: [
      '1 ekor ayam kampung muda dipotong kecil',
      '10 siung bawang merah & 6 siung bawang putih',
      '15 cabai katokkon merah Mamasa',
      '100 gram lengkuas segar diparut halus',
      '4 batang serai digeprek',
      '1 sendok teh garam batu & irisan asam kandis/mangga',
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Penyiapan Daging & Rempah',
        description: 'Potong ayam kampung lalu lumuri dengan garam dan sedikit air perasan asam hutan agar tidak amis.',
      },
      {
        stepNumber: 2,
        title: 'Pemasakan Bersama Lengkuas',
        description: 'Campurkan ayam bersama parutan lengkuas, serai, bawang ulek, dan cabai katokkon dalam wajan tanah liat.',
      },
      {
        stepNumber: 3,
        title: 'Pengungkepan Lambat',
        description: 'Masak dengan api kayu bakar kecil tanpa minyak goreng hingga air sari daging keluar dan menyusut kembali menjadi saus pekat berminyak alami.',
      },
    ],
    preservationAdvice:
      'Gunakan ayam kampung yang dipelihara bebas di perbukitan dan cabai katokkon lokal Mamasa agar aroma khas pegunungan tetap terjaga.',
    estimatedEra: 'Abad ke-18 hingga sekarang',
    tags: ['resep', 'mamasa', 'sulawesi-barat', 'kuliner-pegunungan'],
    likesCount: 88,
  },
  {
    id: 'exp-mamasa-bahasa-kondosapata',
    title: 'Kondosapata Uai Sapalelean: Falsafah Persatuan Lembah Mamasa',
    subtitle: 'Satu Petak Sawah Luas yang Dialiri Air Bersama Demi Kemakmuran Semua Insan',
    category: 'bahasa',
    province: 'Sulawesi Barat',
    tribe: 'Mamasa',
    regionDetail: 'Lembah Mamasa, Kabupaten Mamasa',
    elderNarrator: {
      name: 'Puang Ambe Demmatande',
      age: 84,
      titleOrRole: 'Tokoh Adat Lembah Kondosapata Mamasa',
      location: 'Tawalian, Mamasa',
    },
    recordedBy: {
      name: 'Elisabeth Palinggi',
      schoolOrAffiliation: 'Komunitas Literasi Adat Mamasa',
      date: '18 Oktober 2024',
    },
    summary:
      '"Kondosapata Uai Sapalelean" adalah falsafah dasar tatanan sosial masyarakat Mamasa yang melambangkan bahwa seluruh tanah Mamasa laksana satu petak sawah luas yang dialiri mata air yang sama, sehingga tidak boleh ada warga yang serakah membendung air untuk kepentingannya sendiri.',
    philosophicalMeaning:
      'Mengajarkan keadilan sosial, kesetaraan hak atas sumber daya alam, kerukunan antar desa, dan gotong royong tanpa membedakan latar belakang kasta maupun status.',
    localTerms: [
      {
        term: 'Kondosapata',
        meaning: 'Satu hamparan petak tanah/sawah yang luas dan subur',
        language: 'Bahasa Mamasa',
      },
      {
        term: 'Uai Sapalelean',
        meaning: 'Air yang dialirkan secara adil merata ke segala penjuru',
        language: 'Bahasa Mamasa',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Asal Usul Ikrar Adat',
        description: 'Ditetapkan oleh para tetua adat di masa lampau untuk mengakhiri perselisihan batas air irigasi di antara kampung-kampung lereng gunung.',
      },
      {
        stepNumber: 2,
        title: 'Penerapan di Kehidupan Sehari-hari',
        description: 'Jika ada tetangga tertimpa kemalangan atau gagal panen, seluruh warga kampung wajib mengalirkan bantuan seperti air yang mengalir ke petak sawah yang kering.',
      },
    ],
    preservationAdvice:
      'Wajib diwariskan dalam musyawarah desa dan pendidikan muatan lokal agar generasi muda Mamasa senantiasa mencintai persaudaraan.',
    estimatedEra: 'Turun-temurun sejak era pra-kolonial',
    tags: ['bahasa', 'falsafah', 'mamasa', 'persatuan'],
    likesCount: 112,
  },
  {
    id: 'exp-mamasa-kerajinan-sambu',
    title: 'Tenun Sambu Mamasa Motif Garis Selimut Pegunungan',
    subtitle: 'Kain Tenun Tradisional Gedogan Bernuansa Warna Alam Merah Bata dan Hitam',
    category: 'kerajinan',
    province: 'Sulawesi Barat',
    tribe: 'Mamasa',
    regionDetail: 'Kecamatan Mambi & Balla, Mamasa',
    elderNarrator: {
      name: "Indo' Martha Reski",
      age: 72,
      titleOrRole: 'Maestro Penenun Sambu Mamasa',
      location: 'Balla, Mamasa',
    },
    recordedBy: {
      name: 'Riska Demmapari',
      schoolOrAffiliation: 'Sanggar Tenun Mandiri Mamasa',
      date: '20 Oktober 2024',
    },
    summary:
      'Sambu Mamasa adalah kain tenun tradisional bertekstur tebal yang ditenun menggunakan alat gedogan kayu dengan bahan benang katun atau serat alami. Warna merah melambangkan keberanian dan darah kehidupan, sedangkan hitam melambangkan keteguhan iman dan tanah pertiwi.',
    philosophicalMeaning:
      'Memberikan kehangatan fisik dan perlindungan spiritual bagi pemakainya dalam ritual upacara adat kelahiran, pernikahan, hingga pemakaman.',
    localTerms: [
      {
        term: 'Sambu',
        meaning: 'Kain sarung/selimut tenun tebal khas Mamasa',
        language: 'Bahasa Mamasa',
      },
      {
        term: 'Tannun Gedogan',
        meaning: 'Alat tenun tradisional yang dipangku di pinggang perajin',
        language: 'Bahasa Mamasa',
      },
    ],
    toolsUsed: ['Alat tenun gedogan kayu cempaka', 'Teropong bambu benang pakan', 'Sisir kayu pengetat tenunan', 'Pewarna akar mengkudu dan arang daun'],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pemintalan & Pewarnaan Alami',
        description: 'Benang katun dicelup ke dalam rendaman getah kayu dan akar mengkudu selama berhari-hari.',
      },
      {
        stepNumber: 2,
        title: 'Pemasangan Lungsi di Pinggang',
        description: 'Penenun duduk di lantai rumah kayu menopang kayu penahan di punggung bawah untuk menjaga tegangan benang.',
      },
      {
        stepNumber: 3,
        title: 'Penenunan Rapat Motif Sambu',
        description: 'Benang pakan diselipkan dan dirapatkan berulang kali hingga membentuk rajutan kain yang tebal dan tahan angin dingin.',
      },
    ],
    preservationAdvice:
      'Dukung regenerasi penenun muda di desa Balla agar alat tenun kayu tradisional tidak punah tergerus mesin tekstil pabrik.',
    estimatedEra: 'Abad ke-16',
    tags: ['kerajinan', 'tenun', 'mamasa', 'sambu'],
    likesCount: 95,
  },
  {
    id: 'exp-mamasa-tani-sawah-terasering',
    title: 'Kearifan Mappatua Padi Uma Sawah Terasering Mamasa',
    subtitle: 'Musyawarah Jadwal Tanam Serentak dan Larangan Berburu Burung Pemangsa Hama',
    category: 'tani_bahari',
    province: 'Sulawesi Barat',
    tribe: 'Mamasa',
    regionDetail: 'Kecamatan Pana & Nosu, Mamasa',
    elderNarrator: {
      name: 'Ambe Tandi',
      age: 79,
      titleOrRole: 'Pangala Uma (Ketua Kelompok Petani Adat)',
      location: 'Nosu, Mamasa',
    },
    recordedBy: {
      name: 'Markus Sambo',
      schoolOrAffiliation: 'Fakultas Pertanian Universitas Terbuka Majene',
      date: '22 Oktober 2024',
    },
    summary:
      'Masyarakat tani Mamasa di lereng gunung Nosu menerapkan sistem rotasi air dan tanam serempak yang disebut Mappatua Padi Uma. Mereka mematuhi pantangan menebang pohon di hulu mata air serta menjaga burung hantu dan elang gunung yang menjaga padi dari tikus ladang.',
    philosophicalMeaning:
      'Menjaga keseimbangan ekologi pegunungan yang curam agar tanah tidak longsor dan air tetap melimpah untuk anak cucu.',
    localTerms: [
      {
        term: 'Uma',
        meaning: 'Sawah berundak di lereng bukit',
        language: 'Bahasa Mamasa',
      },
      {
        term: 'Pangala Uma',
        meaning: 'Tetua adat yang berhak menentukan hari pertama membajak sawah',
        language: 'Bahasa Mamasa',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Musyawarah di Balla Pa’tani',
        description: 'Para petani berkumpul saat bintang kejora tampak sebelum fajar untuk menentukan musim semai.',
      },
      {
        stepNumber: 2,
        title: 'Gotong Royong Perbaikan Tanggul Sawah',
        description: 'Seluruh warga laki-laki turun memperbaiki batu-batu penahan terasering agar air tidak bocor ke petak bawah.',
      },
    ],
    preservationAdvice:
      'Pertahankan sistem terasering batu alami tanpa semen berlebihan agar drainase alami tanah vulkanik tetap elastis.',
    estimatedEra: 'Sejak masa leluhur awal Mamasa',
    tags: ['tani_bahari', 'mamasa', 'terasering', 'ekologi'],
    likesCount: 81,
  },
  {
    id: 'exp-mamasa-sejarah-banua-sibarrung',
    title: 'Sejarah Rumah Adat Banua Sibarrung & Benteng Adat Balla',
    subtitle: 'Kisah Arsitektur Tahan Gempa Atap Ijuk Perahu Leluhur di Pegunungan Terpencil',
    category: 'cerita_sejarah',
    province: 'Sulawesi Barat',
    tribe: 'Mamasa',
    regionDetail: 'Desa Balla Pepek, Kabupaten Mamasa',
    elderNarrator: {
      name: 'Puang Arung Balla',
      age: 86,
      titleOrRole: 'Penjaga Rumah Pusaka Banua Layuk Balla',
      location: 'Balla Pepek, Mamasa',
    },
    recordedBy: {
      name: 'Gideon Matande',
      schoolOrAffiliation: 'Pusat Dokumentasi Sejarah Mamasa',
      date: '25 Oktober 2024',
    },
    summary:
      'Banua Sibarrung dan Banua Layuk di perkampungan tua Balla didirikan ratusan tahun lalu dengan tiang-tiang kayu uru raksasa yang tidak ditanam ke tanah melainkan diletakkan di atas batu pipih cadas. Struktur sambungan pasak kayu fleksibel ini terbukti tahan terhadap guncangan gempa vulkanik selama berabad-abad.',
    philosophicalMeaning:
      'Menjadi cerminan bahwa manusia harus berpijak pada fondasi yang kokoh (kejujuran) namun tetap lentur dan ramah dalam bersikap menghadapi cobaan hidup.',
    localTerms: [
      {
        term: 'Banua Layuk',
        meaning: 'Rumah adat tinggi tempat bermukim tetua pemimpin adat Mamasa',
        language: 'Bahasa Mamasa',
      },
      {
        term: 'Kayu Uru',
        meaning: 'Kayu hutan endemik Sulawesi beraroma wangi, anti rayap dan sangat awet',
        language: 'Bahasa Mamasa',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pemilihan Kayu di Hutan Larangan',
        description: 'Penebangan pohon kayu uru hanya dilakukan dengan izin tetua dan wajib menanam 5 bibit pengganti.',
      },
      {
        stepNumber: 2,
        title: 'Perakitan Tanpa Paku Logam',
        description: 'Semua balok disambung dengan teknik purus dan lubang kunci kayu yang saling mengunci rapat.',
      },
    ],
    preservationAdvice:
      'Atap ijuk tradisional harus diganti berkala setiap 25 tahun dengan bahan ijuk aren alami agar keaslian arsitektur tidak hilang.',
    estimatedEra: 'Abad ke-15',
    tags: ['cerita_sejarah', 'mamasa', 'arsitektur-adat', 'banua-layuk'],
    likesCount: 104,
  },

  // =========================================================================
  // SUKU MORONENE (SULAWESI TENGGARA)
  // =========================================================================
  {
    id: 'exp-moronene-resep-sinonggi-tawaloho',
    title: 'Sinonggi Moronene Gula Aren & Kuah Ikan Tawaloho',
    subtitle: 'Sajian Sagu Kenyal Khas Suku Moronene dengan Asam Daun Kedondong Hutan',
    category: 'resep',
    province: 'Sulawesi Tenggara',
    tribe: 'Moronene',
    regionDetail: 'Kecamatan Rumbia & Poleang, Kabupaten Bombana',
    elderNarrator: {
      name: 'Ine Wa Kambo',
      age: 76,
      titleOrRole: 'Tetua Masak Tradisional Lembah Rumbia',
      location: 'Kasipute, Rumbia, Bombana',
    },
    recordedBy: {
      name: 'La Ode Rusli Moronene',
      schoolOrAffiliation: 'Komunitas Pemuda Adat Moronene Bombana',
      date: '17 Oktober 2024',
    },
    summary:
      'Masyarakat suku Moronene di Rumbia mengolah pati sagu segar murni yang disiram air mendidih hingga mengembang bening kenyal, lalu disantap bersama kuah ikan bandeng atau gabus yang dibumbui kunyit bakar, cabai rawit, dan asam segar dari daun tawaloho (daun kedondong hutan muda).',
    philosophicalMeaning:
      'Simbol keterikatan tak terpisahkan antara masyarakat Moronene dengan pohon rumbia (sagu) sebagai pohon kehidupan yang menghidupi mereka sejak ribuan tahun silam.',
    localTerms: [
      {
        term: 'Tawaloho',
        meaning: 'Daun kedondong hutan yang memberikan rasa asam segar alami pada kuah ikan',
        language: 'Bahasa Moronene',
      },
      {
        term: 'Pau-pau',
        meaning: 'Alat jepit dari bilah bambu untuk memilin sagu sinonggi ke dalam mangkuk',
        language: 'Bahasa Moronene',
      },
    ],
    ingredientsOrMaterials: [
      '250 gram pati sagu rumbia basah kualitas putih bersih',
      '500 gram ikan segar sungai atau laut',
      '1 ikat pucuk daun tawaloho muda',
      '4 ruas kunyit bakar dihaluskan',
      '8 siung bawang merah & cabai rawit secukupnya',
      'Air mendidih suhu 100°C',
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Memasak Kuah Kuning Tawaloho',
        description: 'Rebus ikan bersama bawang, kunyit halus, garam, dan daun tawaloho hingga aroma asam segarnya keluar.',
      },
      {
        stepNumber: 2,
        title: 'Menyiram Sagu Rumbia',
        description: 'Larutkan sagu dengan sedikit air dingin di mangkuk tanah, lalu siram dengan air panas mendidih sambil diaduk cepat hingga menjadi gel bening kental.',
      },
      {
        stepNumber: 3,
        title: 'Menyantap dengan Pau-pau',
        description: 'Gunakan sumpit bambu pau-pau untuk menggulung sinonggi, celupkan ke kuah ikan hangat, lalu telan tanpa dikunyah berlebihan.',
      },
    ],
    preservationAdvice:
      'Jaga kelestarian rawa rumbia di Bombana agar pasokan pati sagu lokal berkualitas tinggi tetap melimpah.',
    estimatedEra: 'Turun-temurun sejak era purba Moronene',
    tags: ['resep', 'moronene', 'sulawesi-tenggara', 'bombana', 'sagu'],
    likesCount: 92,
  },
  {
    id: 'exp-moronene-falsafah-taemotahau',
    title: "Ta'e Motahau, Ta'e Morambaho: Falsafah Perlindungan Alam Moronene",
    subtitle: 'Pantang Serakah dan Pantang Merusak Hutan Rimba Adat Tobu',
    category: 'bahasa',
    province: 'Sulawesi Tenggara',
    tribe: 'Moronene',
    regionDetail: 'Kawasan Adat Hutan Tobu, Bombana',
    elderNarrator: {
      name: 'Mokole Mansur Kasim',
      age: 81,
      titleOrRole: 'Ketua Lembaga Adat Moronene Rumbia',
      location: 'Rumbia, Bombana',
    },
    recordedBy: {
      name: 'Dewi Sartika Bombana',
      schoolOrAffiliation: 'Pegiat Pelestari Budaya Moronene',
      date: '19 Oktober 2024',
    },
    summary:
      'Falsafah luhur suku Moronene berbunyi "Ta\'e Motahau, Ta\'e Morambaho" yang bermakna tidak boleh serakah mengambil kekayaan alam melampaui kebutuhan hidup, dan tidak boleh merusak tatanan hutan rimba adat (tobu) yang merupakan hulu mata air kehidupan.',
    philosophicalMeaning:
      'Etika lingkungan hidup kuno yang melarang eksploitasi alam berlebihan demi menjamin kelangsungan hidup tujuh generasi ke depan.',
    localTerms: [
      {
        term: 'Tobu',
        meaning: 'Hutan rimba lindung adat tempat bersarangnya satwa dan sumber mata air murni',
        language: 'Bahasa Moronene',
      },
      {
        term: 'Mokole',
        meaning: 'Pemimpin adat terhormat pembawa keadilan bagi suku Moronene',
        language: 'Bahasa Moronene',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Penetapan Hutan Larangan',
        description: 'Tetua adat membatasi batas hutan tobu dengan menanam pohon beringin dan batu penanda.',
      },
      {
        stepNumber: 2,
        title: 'Sanksi Adat bagi Pelanggar',
        description: 'Siapa pun yang menebang pohon di hulu air dikenai denda kerbau dan wajib merehabilitasi area yang rusak.',
      },
    ],
    preservationAdvice:
      'Penting untuk diintegrasikan dalam peraturan daerah perlindungan masyarakat adat di Kabupaten Bombana.',
    estimatedEra: 'Abad ke-14',
    tags: ['bahasa', 'falsafah', 'moronene', 'hutan-adat', 'konservasi'],
    likesCount: 110,
  },
  {
    id: 'exp-moronene-kerajinan-kasaburi',
    title: 'Anyaman Kasaburi Serat Daun Lontar & Pandan Rumbia',
    subtitle: 'Seni Anyaman Tikar dan Wadah Beras Geometris Berpewarna Alami Akar Mengkudu',
    category: 'kerajinan',
    province: 'Sulawesi Tenggara',
    tribe: 'Moronene',
    regionDetail: 'Kecamatan Poleang Timur, Bombana',
    elderNarrator: {
      name: 'Wa Nisa',
      age: 73,
      titleOrRole: 'Pengrajin Anyaman Daun Lontar Moronene',
      location: 'Boepinang, Poleang',
    },
    recordedBy: {
      name: 'Rahmawati Syukur',
      schoolOrAffiliation: 'Sanggar Seni Moronene Mekar',
      date: '21 Oktober 2024',
    },
    summary:
      'Kasaburi adalah kerajinan anyaman tradisional suku Moronene yang dibuat dari serat daun lontar dan pandan duri yang telah direbus dan dijemur kering. Anyaman ini menghasilkan wadah beras adat, tempat sirih pinang, dan tikar tidur yang lentur, harum, dan tahan puluhan tahun.',
    philosophicalMeaning:
      'Menanamkan kesabaran, kerapian pikiran, dan ketelatenan perempuan Moronene dalam merajut jalinan rumah tangga yang harmonis.',
    localTerms: [
      {
        term: 'Kasaburi',
        meaning: 'Wadah anyaman serat daun bermotif mata ketupat khas Moronene',
        language: 'Bahasa Moronene',
      },
      {
        term: 'Gonda',
        meaning: 'Alat pisau belah kecil dari tulang atau bambu untuk menyerut serat daun',
        language: 'Bahasa Moronene',
      },
    ],
    toolsUsed: ['Pisau gonda bilah bambu', 'Daun pandan duri kering', 'Rebusan akar mengkudu merah', 'Penjepit kayu jati'],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Penyiapan Daun Pandan',
        description: 'Daun dipangkas durinya, dibelah sama lebar dengan gonda, lalu direbus untuk menghilangkan getah.',
      },
      {
        stepNumber: 2,
        title: 'Pengeringan & Pewarnaan',
        description: 'Dijemur di bawah angin teduh lalu dicelup ke dalam pewarna rebusan daun nila dan akar mengkudu.',
      },
      {
        stepNumber: 3,
        title: 'Penganyaman Geometris Rapat',
        description: 'Dianyam diagonal dengan perhitungan hitungan ganjil melambangkan perlindungan doa spiritual.',
      },
    ],
    preservationAdvice:
      'Kembangkan produk kasaburi menjadi tas jinjing modern dan dompet etnik agar diminati oleh generasi milenial.',
    estimatedEra: 'Abad ke-17',
    tags: ['kerajinan', 'anyaman', 'moronene', 'pandan'],
    likesCount: 86,
  },
  {
    id: 'exp-moronene-cerita-sejarah-rumbia',
    title: 'Sejarah Kampung Rumbia & Jejak Kerajaan Moronene Kuno',
    subtitle: 'Kisah Asal-Usul Pemukiman Pesisir Lembah Emas Sungai Kasipute Bombana',
    category: 'cerita_sejarah',
    province: 'Sulawesi Tenggara',
    tribe: 'Moronene',
    regionDetail: 'Kasipute, Rumbia, Kabupaten Bombana',
    elderNarrator: {
      name: 'Tetua Daeng Malolo Moronene',
      age: 85,
      titleOrRole: 'Penutur Silsilah Mokole Rumbia',
      location: 'Kasipute, Bombana',
    },
    recordedBy: {
      name: 'Firman Hidayat',
      schoolOrAffiliation: 'Dinas Kebudayaan Bombana',
      date: '23 Oktober 2024',
    },
    summary:
      'Kampung Rumbia didirikan di sepanjang delta Sungai Kasipute di mana pohon-pohon rumbia tumbuh subur. Para leluhur suku Moronene menambang pasir emas sungai secara manual dengan tempurung kayu tanpa merusak air, menjaga hubungan damai dengan pelaut Bugis dan Buton yang singgah berdagang rempah.',
    philosophicalMeaning:
      'Bukti sejarah bahwa keterbukaan terhadap suku pendatang dapat berjalan harmonis berdampingan dengan penjagaan adat tanah leluhur.',
    localTerms: [
      {
        term: 'Kasipute',
        meaning: 'Pasir putih bersih di muara sungai tempat bertemunya air tawar dan air laut',
        language: 'Bahasa Moronene',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pertemuan di Bawah Pohon Rumbia Raksasa',
        description: 'Para pendiri kampung bermusyawarah di bawah naungan pohon rumbia untuk menetapkan batas pemukiman.',
      },
      {
        stepNumber: 2,
        title: 'Perjanjian Damai Antar Pelaut',
        description: 'Raja Mokole menyambut para pelaut Nusantara dengan sajian sirih pinang tanda persaudaraan kekal.',
      },
    ],
    preservationAdvice:
      'Dokumentasikan situs-situs makam raja Mokole di Rumbia sebagai cagar budaya yang dilindungi undang-undang.',
    estimatedEra: 'Abad ke-15',
    tags: ['cerita_sejarah', 'moronene', 'bombana', 'rumbia'],
    likesCount: 97,
  },

  // =========================================================================
  // SUKU BOLAANG MONGONDOW (SULAWESI UTARA)
  // =========================================================================
  {
    id: 'exp-mongondow-resep-dinangoi',
    title: 'Dinangoi & Alingkoge Sagu Kelapa Panggang Belanga Tanah',
    subtitle: 'Kudapan Tradisional Gurih Manis Gula Aren Khas Tanah Totabuan',
    category: 'resep',
    province: 'Sulawesi Utara',
    tribe: 'Bolaang Mongondow',
    regionDetail: 'Kotamobagu & Kabupaten Bolaang Mongondow',
    elderNarrator: {
      name: 'Oma Nontje Mokoginta',
      age: 75,
      titleOrRole: 'Pewaris Resep Kue Tradisional Totabuan',
      location: 'Kotamobagu Barat',
    },
    recordedBy: {
      name: 'Fandi Paputungan',
      schoolOrAffiliation: 'SMK Negeri 1 Kotamobagu',
      date: '15 Oktober 2024',
    },
    summary:
      'Dinangoi adalah kue tradisional khas suku Bolaang Mongondow yang dibuat dari sagu basah yang dicampur dengan parutan kelapa agak muda, kemudian dipanggang kering di atas wajan tanah liat panas tanpa minyak, lalu ditaburi gula aren Totabuan yang meleleh harum caramel.',
    philosophicalMeaning:
      'Menyimbolkan kesederhanaan hidup masyarakat Mongondow yang mampu menciptakan kenikmatan tinggi dari bahan pangan kebun alami.',
    localTerms: [
      {
        term: 'Dinangoi',
        meaning: 'Lempeng sagu panggang kelapa gula aren khas Mongondow',
        language: 'Bahasa Bolaang Mongondow',
      },
      {
        term: 'Kukis Totabuan',
        meaning: 'Penganan manis tradisional suguhan tamu kehormatan di tanah Bolaang Mongondow',
        language: 'Bahasa Bolaang Mongondow',
      },
    ],
    ingredientsOrMaterials: [
      '300 gram sagu basah segar diayak',
      '1 butir kelapa setengah tua diparut memanjang',
      '150 gram gula aren asli Bolaang Mongondow disisir',
      '1/2 sendok teh garam',
      'Daun pisang untuk penutup wajan panggang',
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pencampuran Adonan Kering',
        description: 'Campurkan butiran sagu ayak bersama kelapa parut dan sedikit garam hingga merata dan tidak menggumpal.',
      },
      {
        stepNumber: 2,
        title: 'Pemanggangan di Belanga Panas',
        description: 'Taburkan adonan di atas wajan tanah liat panas setebal setengah sentimeter, ratakan dengan sendok kayu.',
      },
      {
        stepNumber: 3,
        title: 'Pemberian Gula Aren Meleleh',
        description: 'Saat dasar sagu mulai renyah kecokelatan, taburkan sisiran gula aren di atasnya, lipat menjadi setengah lingkaran, lalu angkat harum.',
      },
    ],
    preservationAdvice:
      'Gunakan gula aren asli Kotamobagu tanpa campuran gula pasir tebu agar cita rasa wangi karamel alaminya terjaga.',
    estimatedEra: 'Abad ke-17',
    tags: ['resep', 'bolaang-mongondow', 'sulawesi-utara', 'totabuan', 'dinangoi'],
    likesCount: 99,
  },
  {
    id: 'exp-mongondow-falsafah-mototompiaan',
    title: 'Mototompiaan, Mototabian, Bo Mototanoban: Tiga Pilar Luhur Mongondow',
    subtitle: 'Saling Memperbaiki, Saling Menyayangi, dan Saling Mengenang Kebaikan',
    category: 'bahasa',
    province: 'Sulawesi Utara',
    tribe: 'Bolaang Mongondow',
    regionDetail: 'Wilayah Bolaang Mongondow Raya',
    elderNarrator: {
      name: 'Ki Bagat Mokoagow',
      age: 83,
      titleOrRole: 'Tetua Dewan Lembaga Adat Totabuan',
      location: 'Lolak, Bolaang Mongondow',
    },
    recordedBy: {
      name: 'Siti Mokodompit',
      schoolOrAffiliation: 'Pusat Studi Budaya Totabuan',
      date: '18 Oktober 2024',
    },
    summary:
      'Tiga pilar moral agung masyarakat Bolaang Mongondow ini menjadi pedoman hidup: "Mototompiaan" (saling memperbaiki kesalahan dengan bijaksana), "Mototabian" (saling mengasihi dan mengutamakan cinta kasih), serta "Mototanoban" (saling merindukan dan mengenang budi baik sesama saudara).',
    philosophicalMeaning:
      'Membentuk kepribadian masyarakat yang santun, menolak permusuhan, serta menjunjung tinggi ikatan persaudaraan sejati di tanah rantau maupun di kampung halaman.',
    localTerms: [
      {
        term: 'Mototompiaan',
        meaning: 'Saling membetulkan dan memperbaiki secara damai tanpa mempermalukan orang lain',
        language: 'Bahasa Bolaang Mongondow',
      },
      {
        term: 'Mototabian',
        meaning: 'Saling mengasihi dengan tulus hati bagaikan saudara kandung',
        language: 'Bahasa Bolaang Mongondow',
      },
      {
        term: 'Mototanoban',
        meaning: 'Saling mengingat dan merindukan kebaikan budi pekerti',
        language: 'Bahasa Bolaang Mongondow',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Penanaman Nilai Sejak Belia',
        description: 'Orang tua Mongondow mengajarkan ketiga falsafah ini di meja makan dan saat anak-anak hendak merantau.',
      },
      {
        stepNumber: 2,
        title: 'Penerapan dalam Musyawarah Adat',
        description: 'Bila ada perselisihan tanah atau warisan, tetua adat mengingatkan kedua pihak untuk Mototompiaan sebelum hukum negara dipanggil.',
      },
    ],
    preservationAdvice:
      'Harus terus dikumandangkan di setiap upacara peringatan HUT daerah dan acara adat pernikahan Mongondow.',
    estimatedEra: 'Sejak era pemerintahan Raja-raja Mongondow',
    tags: ['bahasa', 'falsafah', 'bolaang-mongondow', 'moral', 'totabuan'],
    likesCount: 124,
  },
  {
    id: 'exp-mongondow-kerajinan-kabilaha',
    title: 'Kerajinan Wadah Beras Kabilaha Anyaman Bambu Totabuan',
    subtitle: 'Tempat Menyimpan Butir Gabah & Sajian Adat Berhias Motif Silang Kuno',
    category: 'kerajinan',
    province: 'Sulawesi Utara',
    tribe: 'Bolaang Mongondow',
    regionDetail: 'Kecamatan Dumoga & Passi, Bolaang Mongondow',
    elderNarrator: {
      name: 'Ki Yopi Manoppo',
      age: 78,
      titleOrRole: 'Pengrajin Bambu Anyam Halus Dumoga',
      location: 'Dumoga Barat',
    },
    recordedBy: {
      name: 'Aldo Ginoga',
      schoolOrAffiliation: 'Sanggar Seni Totabuan Gemilang',
      date: '20 Oktober 2024',
    },
    summary:
      'Kabilaha adalah wadah tradisional suku Bolaang Mongondow yang dianyam dari bilah bambu duri tipis pilihan. Anyamannya sangat rapat sehingga beras atau gabah tidak akan lolos keluar. Wadah ini digunakan dalam upacara persembahan hasil panen padi sawah pertama kepada leluhur dan tetua kampung.',
    philosophicalMeaning:
      'Menyimpan keberkahan rezeki pangan keluarga dengan aman serta lambang ketelitian dalam mengelola nafkah hidup.',
    localTerms: [
      {
        term: 'Kabilaha',
        meaning: 'Wadah silinder anyaman bambu penampung beras suci adat',
        language: 'Bahasa Bolaang Mongondow',
      },
    ],
    toolsUsed: ['Pisau raut bilah baja', 'Bambu tolang/duri tua dijemur 40 hari', 'Serat rotan pengikat bibir wadah'],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Penyortiran Bilah Bambu',
        description: 'Bambu diserut tipis halus hingga licin pada kedua sisinya agar tidak melukai tangan pengguna.',
      },
      {
        stepNumber: 2,
        title: 'Penganyaman Pola Anyam Tunggal Rapat',
        description: 'Dianyam dari dasar melingkar naik ke atas membentuk tabung anggun berkaki kokoh.',
      },
    ],
    preservationAdvice:
      'Kombinasikan dengan sentuhan pernis alami ramah lingkungan agar kabilaha dapat berfungsi sebagai wadah dekoratif modern.',
    estimatedEra: 'Abad ke-16',
    tags: ['kerajinan', 'bambu', 'bolaang-mongondow', 'kabilaha'],
    likesCount: 89,
  },
  {
    id: 'exp-mongondow-tani-posintad-dumoga',
    title: 'Kearifan Tani Posintad Sawah Subur Lembah Dumoga',
    subtitle: 'Sistem Gotong Royong Gilir Air Bersama Petani Transmigran & Pribumi',
    category: 'tani_bahari',
    province: 'Sulawesi Utara',
    tribe: 'Bolaang Mongondow',
    regionDetail: 'Lembah Dumoga, Bolaang Mongondow',
    elderNarrator: {
      name: 'Ki Hasan Mokodompit',
      age: 80,
      titleOrRole: 'Ketua Serikat Petani Tradisional Dumoga',
      location: 'Imandi, Dumoga Timur',
    },
    recordedBy: {
      name: 'Indra Podomi',
      schoolOrAffiliation: 'Fakultas Pertanian Universitas Sam Ratulangi',
      date: '22 Oktober 2024',
    },
    summary:
      'Lembah Dumoga dikenal sebagai lumbung beras utama Sulawesi Utara. Suku Bolaang Mongondow mempraktikkan "Posintad", yaitu sistem musyawarah giliran pengaliran air sungai dari Taman Nasional Bogani Nani Wartabone agar setiap petak sawah mendapatkan air tanpa sengketa.',
    philosophicalMeaning:
      'Harmoni antara manusia dengan hutan lindung perbukitan serta teladan toleransi lintas etnis yang hidup damai berdampingan.',
    localTerms: [
      {
        term: 'Posintad',
        meaning: 'Bekerja bersama saling bergantian membersihkan pintu air irigasi',
        language: 'Bahasa Bolaang Mongondow',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pembersihan Hulu Bendungan Batu',
        description: 'Seluruh petani turun bersama membersihkan lumut dan sampah ranting di hulu sebelum musim tanam tiba.',
      },
      {
        stepNumber: 2,
        title: 'Pemberian Tanda Kayu Ukur Air',
        description: 'Dipasang bilah kayu penanda debit air agar petak sawah yang berada di ujung hilir tetap kebagian air bersih.',
      },
    ],
    preservationAdvice:
      'Lindungi tutupan hutan Bogani Nani Wartabone dari perambahan liar agar mata air lembah Dumoga tidak pernah mengering.',
    estimatedEra: 'Awal abad ke-20',
    tags: ['tani_bahari', 'bolaang-mongondow', 'dumoga', 'irigasi'],
    likesCount: 94,
  },

  // =========================================================================
  // SUKU SANGIHE (SULAWESI UTARA)
  // =========================================================================
  {
    id: 'exp-sangihe-resep-sabu-kuah-kuning',
    title: 'Sabu Ikan Tongkol Segar Kuah Kuning Belimbing Wuluh Sangihe',
    subtitle: 'Masakan Kuah Ikan Laut Pulau Perbatasan Beraroma Jeruk Kesturi & Kunyit Bakar',
    category: 'resep',
    province: 'Sulawesi Utara',
    tribe: 'Sangihe',
    regionDetail: 'Tahuna & Tabukan, Kepulauan Sangihe',
    elderNarrator: {
      name: 'Oma Meiske Makasenda',
      age: 76,
      titleOrRole: 'Tetua Dapur Pesisir Teluk Tahuna',
      location: 'Tahuna, Kepulauan Sangihe',
    },
    recordedBy: {
      name: 'Christian Paparang',
      schoolOrAffiliation: 'Politeknik Negeri Nusa Utara Sangihe',
      date: '17 Oktober 2024',
    },
    summary:
      'Nelayan Sangihe yang baru mendarat dari Samudra Pasifik langsung mengolah ikan segar dalam belanga air mendidih bumbu kuning kunyit bakar, jahe merah keprok, perasan jeruk kesturi wangi, cabai rawit pedas, dan belimbing wuluh segar yang dimakan bersama pisang goroho rebus atau sagu lempeng.',
    philosophicalMeaning:
      'Kesegaran murni tanpa santan merefleksikan kejernihan jiwa pelaut Sangihe yang berani dan jujur dalam mengarungi ombak kehidupan.',
    localTerms: [
      {
        term: 'Sabu',
        meaning: 'Kuah ikan rebus bening kaya bumbu rempah asam segar khas kepulauan',
        language: 'Bahasa Sangihe',
      },
      {
        term: 'Kesturi',
        meaning: 'Jeruk limau kecil berkulit hijau wangi khas Sulawesi Utara',
        language: 'Bahasa Melayu Manado/Sangihe',
      },
    ],
    ingredientsOrMaterials: [
      '1 ekor ikan cakalang/tongkol segar dipotong tebal',
      '8 buah belimbing wuluh dibelah dua',
      '4 buah jeruk kesturi diperas airnya',
      '3 cm kunyit tua dibakar lalu digeprek',
      '2 batang serai keprok & daun kemangi hutan',
      'Cabai rawit merah tumbuk kasar & garam laut murni',
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Perebusan Air Rempah Aromatik',
        description: 'Didihkan air bersih bersama kunyit bakar, jahe geprek, serai, dan cabai rawit hingga aromanya semerbak harum.',
      },
      {
        stepNumber: 2,
        title: 'Memasukkan Ikan Segar',
        description: 'Masukkan potongan ikan laut yang baru dibersihkan dengan api besar agar daging ikan mengunci sari manis alaminya.',
      },
      {
        stepNumber: 3,
        title: 'Sentuhan Asam Terakhir',
        description: 'Menjelang diangkat, masukkan belimbing wuluh, daun kemangi, dan kucuran air jeruk kesturi.',
      },
    ],
    preservationAdvice:
      'Gunakan ikan laut segar hasil tangkapan pancing ramah lingkungan (huhate) agar tekstur daging tidak lembek.',
    estimatedEra: 'Turun-temurun sejak era pelayaran kuno Sangihe',
    tags: ['resep', 'sangihe', 'sulawesi-utara', 'bahari', 'kuah-kuning'],
    likesCount: 103,
  },
  {
    id: 'exp-sangihe-falsafah-somahe-kai-kehage',
    title: 'Somahe Kai Kehage: Falsafah Ketangguhan Jiwa Bahari Sangihe',
    subtitle: 'Biar Badai Menghempas Ombak Menerjang, Pantang Surut Mundur di Tengah Samudra',
    category: 'bahasa',
    province: 'Sulawesi Utara',
    tribe: 'Sangihe',
    regionDetail: 'Kepulauan Sangihe, Talaud, dan Sitaro',
    elderNarrator: {
      name: 'Opa Derek Tatengkeng',
      age: 82,
      titleOrRole: 'Nakhoda Adat & Tokoh Budaya Nusa Utara',
      location: 'Tabukan Utara, Sangihe',
    },
    recordedBy: {
      name: 'Glorya Pontoh',
      schoolOrAffiliation: 'Komunitas Generasi Bahari Sangihe',
      date: '19 Oktober 2024',
    },
    summary:
      'Somahe Kai Kehage adalah semboyan dan falsafah hidup suku Sangihe yang berarti "Tantangan dan cobaan yang dihadapi pantang membuat kita mundur atau putus asa". Laksana nakhoda perahu yang justru semakin teguh memegang kemudi saat gelombang samudra membesar.',
    philosophicalMeaning:
      'Membentuk mentalitas pantang menyerah, ulet, dan tawakal kepada Tuhan Yang Maha Esa di mana pun anak cucu Sangihe merantau.',
    localTerms: [
      {
        term: 'Somahe Kai Kehage',
        meaning: 'Semakin besar rintangan yang menghadang, semakin teguh tekad melangkah maju',
        language: 'Bahasa Sangihe',
      },
      {
        term: 'Nusa Utara',
        meaning: 'Sebutan kepulauan bahari terdepan di utara Sulawesi',
        language: 'Bahasa Sangihe',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Nasihat Berlayar bagi Anak Muda',
        description: 'Tetua selalu membisikkan kalimat ini saat anak muda Sangihe pertama kali naik kapal merantau melintasi lautan.',
      },
      {
        stepNumber: 2,
        title: 'Dikumandangkan Saat Pesta Adat Tulude',
        description: 'Falsafah ini menjadi doa penutup pesta adat Tulude untuk membuang kesialan masa lalu dan menyongsong tahun baru dengan ketabahan.',
      },
    ],
    preservationAdvice:
      'Jadikan pedoman ketahanan mental generasi muda dalam menghadapi perubahan zaman modern.',
    estimatedEra: 'Sejak zaman purba perintis pulau-pulau Sangihe',
    tags: ['bahasa', 'falsafah', 'sangihe', 'bahari', 'keteguhan'],
    likesCount: 130,
  },
  {
    id: 'exp-sangihe-kerajinan-koffo-pisang',
    title: 'Kain Tenun Koffo Serat Batang Pisang Abaka Sangihe',
    subtitle: 'Mahakarya Tekstil Kuno Nusantara dari Serat Batang Pisang Hutan Tahan Air Laut',
    category: 'kerajinan',
    province: 'Sulawesi Utara',
    tribe: 'Sangihe',
    regionDetail: 'Tahuna, Kepulauan Sangihe',
    elderNarrator: {
      name: 'Oma Hermina Sasundu',
      age: 80,
      titleOrRole: 'Pewaris Terakhir Tradisi Tenun Koffo Abaka',
      location: 'Manganitu, Sangihe',
    },
    recordedBy: {
      name: 'Novita Kansil',
      schoolOrAffiliation: 'Museum Kebudayaan Daerah Sangihe',
      date: '21 Oktober 2024',
    },
    summary:
      'Koffo adalah kain tenun unik langka khas suku Sangihe yang dibuat dari serat pelepah pisang abaka (Musa textilis). Serat pisang dipisahkan secara manual, dipintal menjadi benang berkilau emas alami, lalu ditenun menjadi busana adat bangsawan yang tahan kelembapan laut dan sangat kuat.',
    philosophicalMeaning:
      'Melambangkan kemandirian ekologis nenek moyang kepulauan yang mampu memanfaatkan vegetasi hutan liar menjadi busana bernilai seni luhur.',
    localTerms: [
      {
        term: 'Koffo',
        meaning: 'Kain tenun serat pisang abaka khas Sangihe yang terkenal sejak abad ke-18',
        language: 'Bahasa Sangihe',
      },
      {
        term: 'Pisang Abaka',
        meaning: 'Jenis pisang liar berbatang tinggi dengan serat pelepah paling kuat di dunia',
        language: 'Bahasa Sangihe/Melayu',
      },
    ],
    toolsUsed: ['Bilah pisau pemisah serat abaka', 'Alat tenun gedogan kayu kepulauan', 'Pewarna alami daun tarum dan lumpur mangrove'],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pemisahan Serat Pelepah',
        description: 'Batang pisang abaka disayat lapis demi lapis lalu diserut hingga tersisa serat benang putih elastis.',
      },
      {
        stepNumber: 2,
        title: 'Pencucian & Penjemuran Angin Laut',
        description: 'Serat dicuci di air mengalir dan dianginkan di bawah rindang pohon agar tidak patah.',
      },
      {
        stepNumber: 3,
        title: 'Penenunan Bermotif Geometris Burung & Ombak',
        description: 'Ditenun teliti dengan sisipan motif sulur daun kepulauan.',
      },
    ],
    preservationAdvice:
      'Wajib direvitalisasi dengan program budidaya pisang abaka dan pelatihan tenun bagi remaja putri Sangihe.',
    estimatedEra: 'Abad ke-17 hingga masa awal kolonial',
    tags: ['kerajinan', 'koffo', 'sangihe', 'abaka', 'tekstil-kuno'],
    likesCount: 115,
  },
  {
    id: 'exp-sangihe-tani-bahari-huhate',
    title: 'Kearifan Huhate & Perahu Pamo Nelayan Ikan Cakalang Sangihe',
    subtitle: 'Teknik Memancing Ikan Tongkol Ramah Lingkungan dengan Umpan Teri Hidup Tanpa Jaring Rusak Karang',
    category: 'tani_bahari',
    province: 'Sulawesi Utara',
    tribe: 'Sangihe',
    regionDetail: 'Perairan Pasifik Utara & Teluk Tahuna',
    elderNarrator: {
      name: 'Nakhoda Benyamin Janis',
      age: 78,
      titleOrRole: 'Panglima Laut Nelayan Tradisional Huhate',
      location: 'Petta, Tabukan Utara, Sangihe',
    },
    recordedBy: {
      name: 'Richard Salindeho',
      schoolOrAffiliation: 'Himpunan Nelayan Seluruh Indonesia Sangihe',
      date: '23 Oktober 2024',
    },
    summary:
      'Huhate (pole and line) adalah metode pancing tradisional nelayan Sangihe yang menggunakan joran bambu kokoh tanpa mata kait berduri (barbless hook). Ikan cakalang ditarik ke geladak perahu pamo dengan bantuan semprotan air dan umpan ikan teri hidup yang tidak merusak terumbu karang sama sekali.',
    philosophicalMeaning:
      'Etika memancing yang hanya mengambil ikan dewasa di permukaan samudra, membiarkan anak ikan dan karang laut tetap lestari.',
    localTerms: [
      {
        term: 'Huhate',
        meaning: 'Seni memancing joran bambu cepat nelayan cakalang Samudra Pasifik',
        language: 'Bahasa Sangihe',
      },
      {
        term: 'Perahu Pamo',
        meaning: 'Perahu kayu bermesin ganda berdaya jelajah tinggi khas nelayan kepulauan',
        language: 'Bahasa Sangihe',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pencarian Gerombolan Burung Laut (Toro)',
        description: 'Nakhoda membaca arah kawanan burung camar menukik ke laut pertanda kawanan ikan cakalang sedang berburu.',
      },
      {
        stepNumber: 2,
        title: 'Penyemprotan Air & Pelemparan Umpan Teri',
        description: 'Air disemprotkan di lambung kapal menyerupai hujan rintik agar cakalang mengira ada kawanan mangsa berkumpul.',
      },
      {
        stepNumber: 3,
        title: 'Sentakan Joran Bambu Cepat',
        description: 'Pemancing menarik joran ke belakang kepala sekali sentak, ikan lepas otomatis di palka tanpa merobek mulut ikan.',
      },
    ],
    preservationAdvice:
      'Tetapkan perairan kepulauan sebagai zona eksklusif penangkapan huhate bebas dari pukat harimau kapal asing.',
    estimatedEra: 'Sejak era purba bahari Sangihe',
    tags: ['tani_bahari', 'sangihe', 'huhate', 'cakalang', 'bahari-berkelanjutan'],
    likesCount: 108,
  },

  // =========================================================================
  // SUKU MUNA (SULAWESI TENGGARA)
  // =========================================================================
  {
    id: 'exp-muna-resep-kambuse-jagung',
    title: 'Kambuse Jagung Pipil Kapur Sirih & Ikan Kaholeo Bakar',
    subtitle: 'Makanan Pokok Tradisional Pengganti Beras Khas Tanah Karst Muna',
    category: 'resep',
    province: 'Sulawesi Tenggara',
    tribe: 'Muna',
    regionDetail: 'Raha, Tongkuno, dan Lohia, Kabupaten Muna',
    elderNarrator: {
      name: 'Wa Ode Farida',
      age: 79,
      titleOrRole: 'Tetua Masak Tradisional Kotano Wuna',
      location: 'Tongkuno, Muna',
    },
    recordedBy: {
      name: 'La Ode Muhammad Arif',
      schoolOrAffiliation: 'SMA Negeri 1 Raha',
      date: '14 Oktober 2024',
    },
    summary:
      'Kambuse adalah makanan pokok khas suku Muna yang terbuat dari butiran jagung putih tua yang direbus berjam-jam bersama sedikit air kapur sirih agar kulit arinya terkelupas bersih dan butirnya merekah empuk kenyal. Kambuse dimakan bersama kelapa parut sangrai dan ikan asin kaholeo bakar dengan sambal terasi cabai rawit merah.',
    philosophicalMeaning:
      'Simbol ketahanan hidup suku Muna di tanah berbatu karang yang gersang, mengajarkan rasa syukur mendalam atas berkah jagung yang selalu setia memberi tenaga.',
    localTerms: [
      {
        term: 'Kambuse',
        meaning: 'Olahan jagung pipil rebus kapur sirih lembut khas Muna',
        language: 'Bahasa Muna',
      },
      {
        term: 'Kaholeo',
        meaning: 'Ikan laut yang diasinkan dan dijemur angin kering tanpa pengawet buatan',
        language: 'Bahasa Muna',
      },
    ],
    ingredientsOrMaterials: [
      '500 gram jagung putih kering Muna pipil',
      '1 sendok teh kapur sirih dilarutkan dalam air',
      '1/2 butir kelapa setengah tua diparut halus dengan garam',
      'Ikan kaholeo bakar',
      'Sambal belimbing atau jeruk nipis',
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Perebusan Jagung & Pelepasan Kulit Ari',
        description: 'Rebus jagung dengan air kapur sirih hingga kulit tipisnya terlepas, lalu cuci bilas berkali-kali hingga bersih.',
      },
      {
        stepNumber: 2,
        title: 'Perebusan Kedua Hingga Mekar',
        description: 'Rebus kembali butiran jagung dengan air bersih segar di belanga tanah liat hingga butir jagung mekar merekah lembut.',
      },
      {
        stepNumber: 3,
        title: 'Penyajian Hangat',
        description: 'Sajikan selagi hangat dengan taburan kelapa gurih dan lauk ikan bakar kaholeo.',
      },
    ],
    preservationAdvice:
      'Pertahankan varietas bibit jagung putih lokal Muna yang tahan kekeringan dan kaya serat alami.',
    estimatedEra: 'Sejak berdirinya Kerajaan Muna abad ke-14',
    tags: ['resep', 'muna', 'sulawesi-tenggara', 'kambuse', 'jagung'],
    likesCount: 96,
  },
  {
    id: 'exp-muna-kerajinan-kaghati-kolope',
    title: 'Layang-Layang Daun Kolope (Kaghati Kolope) Tertua di Dunia',
    subtitle: 'Mahakarya Aerodinamika Purba Suku Muna Berbahan Daun Umbi Hutan Tahan Hujan',
    category: 'kerajinan',
    province: 'Sulawesi Tenggara',
    tribe: 'Muna',
    regionDetail: 'Desa Liang Kabori & Lohia, Kabupaten Muna',
    elderNarrator: {
      name: 'La Ode Amaluddin',
      age: 82,
      titleOrRole: 'Maestro Pembuat Kaghati Kolope Tradisional',
      location: 'Lohia, Muna',
    },
    recordedBy: {
      name: 'Wa Ode Sartika',
      schoolOrAffiliation: 'Komunitas Pelestari Kaghati Muna',
      date: '16 Oktober 2024',
    },
    summary:
      'Kaghati Kolope adalah layang-layang tradisional suku Muna yang terbukti melalui lukisan dinding gua prasejarah Liang Kabori telah ada sejak 4.000 tahun silam. Terbuat dari lembaran daun kolope (umbi hutan) yang dijemur dan dijahit dengan lidi bambu serta benang serat nenas, layang-layang ini mampu mengudara di langit selama 7 hari 7 malam tanpa rusak tersiram air hujan.',
    philosophicalMeaning:
      'Lambang doa spiritual leluhur yang membubung tinggi ke langit, menjaga keselarasan antara penghuni bumi dan penguasa alam semesta.',
    localTerms: [
      {
        term: 'Kaghati',
        meaning: 'Layang-layang tradisional suku Muna',
        language: 'Bahasa Muna',
      },
      {
        term: 'Kolope',
        meaning: 'Daun tanaman umbi gadung hutan yang berlilin alami dan tahan air',
        language: 'Bahasa Muna',
      },
    ],
    toolsUsed: ['Daun kolope pilihan diasapi', 'Bambu parut tipis untuk rangka silang', 'Serat daun nenas hutan untuk tali layang', 'Lidi kelapa penjahit lembaran daun'],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pemilihan & Pengasapan Daun',
        description: 'Daun kolope dipetik di hutan karst, dijemur lalu diasapi di atas tungku dapur agar minyak lilin alaminya keluar merata.',
      },
      {
        stepNumber: 2,
        title: 'Penjahitan Lembaran Layangan',
        description: 'Lembaran daun dijahit berjajar satu per satu menggunakan lidi bambu halus hingga membentuk bidang layangan heksagonal.',
      },
      {
        stepNumber: 3,
        title: 'Pemasangan Duri Pengait & Tali Kamumu',
        description: 'Rangka bambu diikat dengan serat nenas dan dipasangi alat dengung kamumu dari pita daun lontar yang bersuara merdu saat tertiup angin kencang.',
      },
    ],
    preservationAdvice:
      'Perlu terus diajarkan di sekolah-sekolah di Muna agar generasi penerus bangga memiliki teknologi layang-layang tertua di dunia.',
    estimatedEra: 'Zaman prasejarah (sekitar 2.000 - 4.000 SM)',
    tags: ['kerajinan', 'muna', 'kaghati-kolope', 'layang-layang', 'prasejarah'],
    likesCount: 142,
  },
  {
    id: 'exp-muna-cerita-sejarah-liang-kabori',
    title: 'Sejarah Lukisan Gua Prasejarah Liang Kabori & Peradaban Karst Muna',
    subtitle: 'Rekam Jejak Kehidupan Berburu, Bertani, dan Menerbangkan Layangan Purba di Dinding Karst',
    category: 'cerita_sejarah',
    province: 'Sulawesi Tenggara',
    tribe: 'Muna',
    regionDetail: 'Kawasan Karst Liang Kabori, Kabupaten Muna',
    elderNarrator: {
      name: 'La Ode Siradjudin',
      age: 80,
      titleOrRole: 'Juru Pelihara Gua Adat Liang Kabori',
      location: 'Liang Kabori, Muna',
    },
    recordedBy: {
      name: 'Nurfadilah Muna',
      schoolOrAffiliation: 'Balai Pelestarian Cagar Budaya Sulawesi Tenggara',
      date: '24 Oktober 2024',
    },
    summary:
      'Gua Liang Kabori menyimpan ratusan lukisan dinding cadas berwarna cokelat kemerahan dari getah pohon alami dan darah hewan. Lukisan tersebut menggambarkan manusia purba menunggang kuda, memegang tombak berburu anoa, mendayung perahu, serta gambar sosok manusia memegang tali layang-layang Kaghati yang mempesona para arkeolog dunia.',
    philosophicalMeaning:
      'Membuktikan tingginya tingkat kecerdasan dan peradaban leluhur pulau Muna dalam mencatat sejarah hidupnya secara visual.',
    localTerms: [
      {
        term: 'Liang Kabori',
        meaning: 'Gua bertulis atau gua bergambar tempat peristirahatan leluhur suci',
        language: 'Bahasa Muna',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Penemuan Lukisan oleh Para Pemburu Madu',
        description: 'Leluhur Muna terdahulu menganggap gua ini keramat dan hanya memasukinya saat berdoa memohon hujan.',
      },
      {
        stepNumber: 2,
        title: 'Pengakuan Dunia Arkeologi Internasional',
        description: 'Penelitian internasional memastikan gambar layang-layang di gua ini merupakan dokumentasi tertua di muka bumi.',
      },
    ],
    preservationAdvice:
      'Dilarang keras menyentuh dinding lukisan atau menyalakan api di dalam gua agar pigmen getah alami tidak terkelupas.',
    estimatedEra: 'Era Neolitikum (4.000 tahun silam)',
    tags: ['cerita_sejarah', 'muna', 'liang-kabori', 'arkeologi', 'karst'],
    likesCount: 128,
  },

  // =========================================================================
  // SUKU BUTON (SULAWESI TENGGARA)
  // =========================================================================
  {
    id: 'exp-buton-resep-kasuami-parende',
    title: 'Kasuami Tumpeng Singkong Parut & Parende Ikan Tongkol Buton',
    subtitle: 'Kukusan Ubi Kayu Berbentuk Kerucut Emas Dimakan Kuah Asam Belimbing Segar',
    category: 'resep',
    province: 'Sulawesi Tenggara',
    tribe: 'Buton',
    regionDetail: 'Kota Baubau & Kepulauan Buton',
    elderNarrator: {
      name: 'Wa Ode Sitti Aminah',
      age: 78,
      titleOrRole: 'Tetua Masak Keraton Wolio Buton',
      location: 'Melai, Baubau',
    },
    recordedBy: {
      name: 'La Ode Abdul Malik',
      schoolOrAffiliation: 'Komunitas Pecinta Budaya Wolio',
      date: '15 Oktober 2024',
    },
    summary:
      'Kasuami adalah makanan khas suku Buton yang terbuat dari singkong parut yang telah diperas habis air racunnya menggunakan alat peras kayu tradisional (geba). Parutan singkong kering dimasukkan ke dalam anyaman daun kelapa berbentuk kerucut (kukusan tumpeng) lalu dikukus hingga kenyal pulen, disajikan berdampingan dengan Parende (sup ikan kuah asam kunyit segar beraroma daun kemangi).',
    philosophicalMeaning:
      'Bentuk kerucut kasuami melambangkan ketauhidan kepada Sang Pencipta Yang Maha Esa, sedangkan kuah parende yang segar melambangkan keikhlasan hati orang Buton menerima tamu.',
    localTerms: [
      {
        term: 'Kasuami',
        meaning: 'Kue tumpeng singkong kukus padat kaya energi bekal pelaut Buton',
        language: 'Bahasa Buton / Wolio',
      },
      {
        term: 'Parende',
        meaning: 'Sup ikan laut kuah kuning segar dengan bumbu asam belimbing wuluh',
        language: 'Bahasa Buton / Wolio',
      },
    ],
    ingredientsOrMaterials: [
      '1 kg singkong putih segar diparut halus',
      'Anyaman kukusan daun kelapa berbentuk kerucut',
      '500 gram ikan tongkol segar dipotong tebal',
      '6 butir belimbing wuluh & 4 siung bawang merah',
      '3 cm kunyit bakar dihaluskan',
      'Daun kemangi & garam laut',
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pemerasan Air Singkong dengan Kayu Geba',
        description: 'Singkong parut dimasukkan ke karung kain lalu dipres dengan kayu pemberat hingga kering tanpa air.',
      },
      {
        stepNumber: 2,
        title: 'Pengukusan Bentuk Kerucut',
        description: 'Remah singkong diayak, dimasukkan ke dalam kerucut anyaman kelapa, lalu dikukus di atas belanga air panas selama 20 menit.',
      },
      {
        stepNumber: 3,
        title: 'Pemasakan Kuah Parende',
        description: 'Rebus ikan bersama bumbu kunyit, bawang merah, cabai rawit, dan belimbing wuluh hingga matang berkuah kuning cerah.',
      },
    ],
    preservationAdvice:
      'Kasuami tahan disimpan hingga 3-4 hari di laut lepas tanpa basi, cocok sebagai alternatif pangan non-beras nasional.',
    estimatedEra: 'Sejak era Kesultanan Buton abad ke-16',
    tags: ['resep', 'buton', 'sulawesi-tenggara', 'kasuami', 'parende'],
    likesCount: 118,
  },
  {
    id: 'exp-buton-falsafah-yinda-yindamo',
    title: 'Yinda-yindamo Karo Somanamo Lipu: Falsafah Kenegaraan Kesultanan Buton',
    subtitle: 'Rela Berkorban Raga dan Harta Demi Menjaga Kedaulatan serta Kehormatan Negeri',
    category: 'bahasa',
    province: 'Sulawesi Tenggara',
    tribe: 'Buton',
    regionDetail: 'Benteng Keraton Wolio, Kota Baubau',
    elderNarrator: {
      name: 'La Ode Muhammad Djirimu',
      age: 85,
      titleOrRole: 'Bonto Ogena (Menteri Tertinggi Adat Lembaga Keraton Buton)',
      location: 'Keraton Wolio, Baubau',
    },
    recordedBy: {
      name: 'Wa Ode Nurul Hasanah',
      schoolOrAffiliation: 'Pusat Kajian Naskah Kuno Buton',
      date: '17 Oktober 2024',
    },
    summary:
      'Falsafah berjenjang Kesultanan Buton mengajarkan empat tingkat pengorbanan suci: 1) Yinda-yindamo Karo Somanamo Sara (Korbankan diri demi tegaknya hukum adat/syariat), 2) Yinda-yindamo Sara Somanamo Lipu (Korbankan perangkat pemerintahan demi keselamatan rakyat dan negeri), 3) Yinda-yindamo Lipu Somanamo Agama (Korbankan negeri demi menjaga kemurnian iman kepada Tuhan).',
    philosophicalMeaning:
      'Konsep tata kelola negara paling demokratis dan beretika tinggi di mana pejabat dan Sultan justru berada di garis terdepan dalam berkorban.',
    localTerms: [
      {
        term: 'Lipu',
        meaning: 'Negeri, tanah tumpah darah, dan seluruh rakyat',
        language: 'Bahasa Wolio',
      },
      {
        term: 'Sara',
        meaning: 'Hukum perundang-undangan adat dan pemerintahan yang adil',
        language: 'Bahasa Wolio',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Ikrar Pelantikan Sultan Buton',
        description: 'Setiap calon Sultan di Benteng Wolio wajib bersumpah di atas batu Popaua memegang teguh falsafah ini.',
      },
      {
        stepNumber: 2,
        title: 'Pemakzulan Jika Sultan Menzalimi Rakyat',
        description: 'Jika seorang pemimpin melanggar sumpah ini, majelis dewan Siolimbona berhak memecat Sultan demi menyelamatkan Lipu.',
      },
    ],
    preservationAdvice:
      'Perlu terus dipelajari oleh para pemimpin publik dan generasi muda sebagai teladan integritas kepemimpinan.',
    estimatedEra: 'Abad ke-16 (Era Sultan Buton I Murhum)',
    tags: ['bahasa', 'falsafah', 'buton', 'wolio', 'kepemimpinan'],
    likesCount: 135,
  },
  {
    id: 'exp-buton-sejarah-benteng-wolio',
    title: 'Sejarah Benteng Keraton Wolio Baubau Benteng Terluas di Dunia',
    subtitle: 'Kisah Benteng Batu Karst & Perekat Putih Telur Penangkal Meriam Bajak Laut',
    category: 'cerita_sejarah',
    province: 'Sulawesi Tenggara',
    tribe: 'Buton',
    regionDetail: 'Kelurahan Melai, Kota Baubau',
    elderNarrator: {
      name: 'La Ode Ridwan',
      age: 83,
      titleOrRole: 'Pemandu Pusaka Benteng Keraton Buton',
      location: 'Baubau, Buton',
    },
    recordedBy: {
      name: 'Arif Hidayat Wolio',
      schoolOrAffiliation: 'Fakultas Sastra Universitas Dayanu Ikhsanuddin',
      date: '21 Oktober 2024',
    },
    summary:
      'Benteng Keraton Buton dinobatkan oleh Guinness World Records sebagai benteng terluas di dunia dengan keliling dinding mencapai 2,74 kilometer. Dibangun di atas bukit karang menghadap Selat Buton, dinding benteng disusun dari batu gunung kapur dengan adukan perekat kapur sirih dan putih telur tanpa semen modern.',
    philosophicalMeaning:
      'Melambangkan benteng pertahanan moral di mana perisai terkuat suatu bangsa bukanlah senjata melainkan persatuan rakyat dan ketaatan pada hukum keadilan.',
    localTerms: [
      {
        term: 'Lawa',
        meaning: 'Pintu gerbang benteng keraton yang berjumlah 12 mewakili 12 lubang pada tubuh manusia',
        language: 'Bahasa Wolio',
      },
      {
        term: 'Baluara',
        meaning: 'Menara pengintai sudut benteng tempat meriam pertahanan ditempatkan',
        language: 'Bahasa Wolio',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pembangunan Bertahap Gotong Royong',
        description: 'Dibangun secara swadaya oleh warga 12 distrik Kesultanan Buton secara estafet membawa batu gunung.',
      },
      {
        stepNumber: 2,
        title: 'Pertahanan Selama Berabad-abad',
        description: 'Benteng ini tidak pernah berhasil dijebol oleh serangan penjajah kolonial maupun bajak laut Selat Makassar.',
      },
    ],
    preservationAdvice:
      'Jaga dinding batu cadas asli dari lumut berlebih dan hindari pemasangan semen semen modern yang dapat merusak batuan kapur kuno.',
    estimatedEra: 'Abad ke-16 (dimulai era Sultan Buton III La Sangaji)',
    tags: ['cerita_sejarah', 'buton', 'benteng-wolio', 'cagar-budaya', 'baubau'],
    likesCount: 140,
  },

  // =========================================================================
  // SUKU TOLAKI (SULAWESI TENGGARA)
  // =========================================================================
  {
    id: 'exp-tolaki-falsafah-kalo-sara',
    title: 'Kalo Sara: Simbol Tertinggi Hukum Perdamaian Adat Tolaki',
    subtitle: 'Tiga Lingkaran Anyaman Rotan Pembawa Rekonsiliasi & Keadilan Suku',
    category: 'bahasa',
    province: 'Sulawesi Tenggara',
    tribe: 'Tolaki',
    regionDetail: 'Kabupaten Konawe, Kolaka, dan Kota Kendari',
    elderNarrator: {
      name: 'Bapak Mansur Puuwatu',
      age: 82,
      titleOrRole: 'Pabitara (Juru Bicara Hukum Adat Kalosara Tolaki)',
      location: 'Unaaha, Konawe',
    },
    recordedBy: {
      name: 'Sinarwati Tolaki',
      schoolOrAffiliation: 'Lembaga Adat Tolaki Sultra',
      date: '19 Oktober 2024',
    },
    summary:
      'Kalo Sara adalah benda sakral berbentuk lingkaran anyaman tiga untai rotan yang diletakkan di atas kain putih beralas anyaman siwole (bakul). Kalo melambangkan: 1) Lingkaran atas yaitu hubungan manusia dengan Tuhan, 2) Lingkaran tengah hubungan antar sesama manusia, 3) Lingkaran bawah hubungan manusia dengan alam semesta.',
    philosophicalMeaning:
      'Setiap perselisihan berdarah atau sengketa tanah yang paling rumit akan seketika mereda dan damai bila Kalo Sara telah diletakkan di tengah-tengah kedua belah pihak.',
    localTerms: [
      {
        term: 'Kalo Sara',
        meaning: 'Simbol lingkaran rotan suci perwujudan hukum adat tertinggi suku Tolaki',
        language: 'Bahasa Tolaki',
      },
      {
        term: 'Pabitara',
        meaning: 'Cendekiawan adat yang mahir bertutur kata diplomasi perdamaian',
        language: 'Bahasa Tolaki',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Anyaman Rotan Tiga Untai',
        description: 'Dipilin dari sebatang rotan hutan pilihan yang dihubungkan kedua ujungnya membentuk lingkaran tanpa putus.',
      },
      {
        stepNumber: 2,
        title: 'Penghantaran oleh Pabitara',
        description: 'Dihantarkan dengan tutur kata sastra Tolaki yang halus dan berwibawa di hadapan para pihak yang bersengketa.',
      },
    ],
    preservationAdvice:
      'Wajib dipertahankan sebagai sarana alternatif penyelesaian konflik sosial di luar pengadilan (restorative justice).',
    estimatedEra: 'Sejak berdirinya Kerajaan Konawe abad ke-13',
    tags: ['bahasa', 'falsafah', 'tolaki', 'kalo-sara', 'perdamaian', 'konawe'],
    likesCount: 122,
  },
  {
    id: 'exp-tolaki-resep-tinutuan-kerang-pokandulu',
    title: 'Sinonggi Ikan Asam Tawaloho & Kuah Kerang Pokandulu Tolaki',
    subtitle: 'Sajian Pesta Kebun Sagu Disiram Kuah Kerang Sungai Pegunungan Konawe',
    category: 'resep',
    province: 'Sulawesi Tenggara',
    tribe: 'Tolaki',
    regionDetail: 'Konawe Selatan & Konawe Utara',
    elderNarrator: {
      name: 'Ibu Wa Ode Maimunah Tolaki',
      age: 74,
      titleOrRole: 'Tetua Masak Komunitas Sagu Tolaki',
      location: 'Ranomeeto, Konawe Selatan',
    },
    recordedBy: {
      name: 'Agusman Konawe',
      schoolOrAffiliation: 'Fakultas Budaya Universitas Halu Oleo Kendari',
      date: '21 Oktober 2024',
    },
    summary:
      'Masyarakat Tolaki menyantap sinonggi bersama kuah kerang sungai air tawar (pokandulu) yang dimasak bening dengan serai, jahe geprek, dan sayur pakis hutan liar. Rasa gurih manis dari sari kerang sungai berpadu harmonis dengan lembutnya tekstur gel sagu murni.',
    philosophicalMeaning:
      'Menghargai sungai-sungai jernih Konawe yang telah menafkahi nenek moyang suku Tolaki dari generasi ke generasi.',
    localTerms: [
      {
        term: 'Pokandulu',
        meaning: 'Kerang air tawar cangkang hitam berkilau yang hidup di dasar sungai berpasir',
        language: 'Bahasa Tolaki',
      },
      {
        term: 'Sinonggi',
        meaning: 'Makanan pokok dari pati sari pohon sagu yang disiram air panas mendidih',
        language: 'Bahasa Tolaki',
      },
    ],
    ingredientsOrMaterials: [
      '300 gram pati sagu basah segar',
      '500 gram kerang pokandulu sungai dicuci bersih',
      '1 ikat pucuk pakis hutan muda',
      '3 batang serai & 4 siung bawang merah',
      'Garam dan cabai rawit ulek kasar',
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Perebusan Kerang Pokandulu',
        description: 'Rebus kerang bersama serai geprek dan irisan bawang merah hingga cangkang terbuka dan kaldunya berwarna keruh manis.',
      },
      {
        stepNumber: 2,
        title: 'Penyiraman Sagu Sinonggi',
        description: 'Kocok sagu dengan air mendidih menggunakan sumpit bambu hingga kenyal merekat sempurna.',
      },
    ],
    preservationAdvice:
      'Jaga kebersihan air sungai Konawe dari polusi limbah tambang agar populasi kerang pokandulu tidak punah.',
    estimatedEra: 'Abad ke-15',
    tags: ['resep', 'tolaki', 'sinonggi', 'konawe', 'sungai'],
    likesCount: 95,
  },

  // =========================================================================
  // SUKU KAILI (SULAWESI TENGAH)
  // =========================================================================
  {
    id: 'exp-kaili-bahasa-nosarara-nosabatutu',
    title: 'Nosarara Nosabatutu: Semboyan Agung Persaudaraan Tanah Kaili',
    subtitle: 'Meskipun Kita Berbeda Suku dan Keyakinan, Kita Semua Bersaudara dan Bersatu',
    category: 'bahasa',
    province: 'Sulawesi Tengah',
    tribe: 'Kaili',
    regionDetail: 'Kota Palu, Kabupaten Donggala, dan Sigi',
    elderNarrator: {
      name: 'Papangge Rusli Dg. Mallawa',
      age: 81,
      titleOrRole: 'Tetua Majelis Adat Suku Kaili Lembah Palu',
      location: 'Kabonena, Palu Barat',
    },
    recordedBy: {
      name: 'Mohamad Fadli Kaili',
      schoolOrAffiliation: 'Aliansi Masyarakat Adat Nusantara (AMAN) Sulteng',
      date: '16 Oktober 2024',
    },
    summary:
      'Nosarara Nosabatutu berasal dari bahasa Kaili: "Nosarara" (bersaudara seperti saudara se-kandungan) dan "Nosabatutu" (bersatu saling menopang seperti seikat lidi). Menjadi falsafah pemersatu lembah Palu yang terbuka menyambut pendatang dari berbagai penjuru tanah air.',
    philosophicalMeaning:
      'Nilai toleransi tingkat tinggi yang menolak segala bentuk diskriminasi, kebencian, dan perpecahan antar umat manusia.',
    localTerms: [
      {
        term: 'Nosarara',
        meaning: 'Merasa satu darah, saling menganggap saudara sekandung',
        language: 'Bahasa Kaili',
      },
      {
        term: 'Nosabatutu',
        meaning: 'Bersatu padu bergotong royong dalam suka maupun duka',
        language: 'Bahasa Kaili',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Penanaman di Rumah Adat Souraja',
        description: 'Para sesepuh Kaili selalu mengajarkan semboyan ini kepada anak-cucu sebelum mereka keluar rumah menyapa tetangga.',
      },
      {
        stepNumber: 2,
        title: 'Pemulihan Pasca Bencana',
        description: 'Saat gempa dan likuefaksi melanda Palu-Sigi-Donggala, semboyan inilah yang membangkitkan warga saling berbagi tenda dan makanan.',
      },
    ],
    preservationAdvice:
      'Terus digaungkan sebagai jati diri budaya Sulawesi Tengah di ruang-ruang publik dan sekolah.',
    estimatedEra: 'Sejak berdirinya kerajaan-kerajaan Kaili abad ke-16',
    tags: ['bahasa', 'falsafah', 'kaili', 'palu', 'persaudaraan'],
    likesCount: 138,
  },
  {
    id: 'exp-kaili-kerajinan-buya-sabe-bomba',
    title: 'Tenun Donggala Buya Sabe Motif Bunga Bomba Khas Kaili',
    subtitle: 'Kain Sutra Tenun Berkilau Warisan Saudagar Pelabuhan Banawa',
    category: 'kerajinan',
    province: 'Sulawesi Tengah',
    tribe: 'Kaili',
    regionDetail: 'Kecamatan Banawa, Kabupaten Donggala',
    elderNarrator: {
      name: 'Ibu Fatimah Dg. Manassa',
      age: 77,
      titleOrRole: 'Maestro Penenun Sutra Bomba Donggala',
      location: 'Limboro, Banawa, Donggala',
    },
    recordedBy: {
      name: 'Nurlaila Hasan',
      schoolOrAffiliation: 'Sanggar Tenun Sutra Donggala Pusaka',
      date: '18 Oktober 2024',
    },
    summary:
      'Buya Sabe adalah kain tenun sutra kebanggaan masyarakat Kaili Donggala yang ditenun dengan alat tenun gedogan kayu dan benang sutra emas impor yang diperdagangkan sejak era saudagar rempah Nusantara. Motif "Bomba" (bunga yang mekar) melambangkan kesucian jiwa, keanggunan, dan keterbukaan hati perempuan Kaili.',
    philosophicalMeaning:
      'Menjaga martabat dan keindahan keluarga di mana setiap helai benang ditenun dengan doa keberkahan.',
    localTerms: [
      {
        term: 'Buya Sabe',
        meaning: 'Kain sarung sutra halus tenunan tangan Donggala',
        language: 'Bahasa Kaili',
      },
      {
        term: 'Motif Bomba',
        meaning: 'Ragam hias bunga bermahkota delapan melambangkan delapan penjuru mata angin',
        language: 'Bahasa Kaili',
      },
    ],
    toolsUsed: ['Alat tenun gedogan kayu jati', 'Benang sutra pilihan', 'Benang pakan warna emas dan perak', 'Sisir tenun bambu'],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pencelupan Benang Sutra',
        description: 'Benang dicelup warna alami daun tarum dan getah kayu hingga warna menempel kuat tanpa luntur.',
      },
      {
        stepNumber: 2,
        title: 'Pemasangan Pola Bunga Bomba',
        description: 'Penenun menyematkan benang emas pada pakan secara cermat membentuk kelopak bunga mekar.',
      },
    ],
    preservationAdvice:
      'Dukung koperasi penenun di desa Limboro Donggala agar perajin muda mendapatkan upah yang adil dan berdaya.',
    estimatedEra: 'Abad ke-17',
    tags: ['kerajinan', 'kaili', 'tenun', 'donggala', 'bomba', 'sutra'],
    likesCount: 116,
  },

  // =========================================================================
  // SUKU PAMONA (SULAWESI TENGAH)
  // =========================================================================
  {
    id: 'exp-pamona-resep-itu-itu-masak-bambu',
    title: 'Itu-itu Ikan Mas Danau Poso Masak Bambu Buluh Kunyit',
    subtitle: 'Masakan Ikan Air Tawar Danau Purba Dibakar dalam Ruas Bambu Beraroma Daun Kedondong',
    category: 'resep',
    province: 'Sulawesi Tengah',
    tribe: 'Pamona',
    regionDetail: 'Tentena, Danau Poso, Kabupaten Poso',
    elderNarrator: {
      name: 'Papa Nataniel Peuru',
      age: 79,
      titleOrRole: 'Tetua Adat Pesisir Danau Poso',
      location: 'Tentena, Pamona Puselemba',
    },
    recordedBy: {
      name: 'Debora Talasa',
      schoolOrAffiliation: 'Komunitas Pecinta Danau Poso',
      date: '20 Oktober 2024',
    },
    summary:
      'Itu-itu adalah kuliner khas suku Pamona di mana ikan mas atau sidat (sogili) segar dari Danau Poso dibumbui dengan cabai rawit pedas, kemangi hutan, kunyit geprek, dan pucuk daun kedondong hutan muda yang dimasukkan ke dalam bilah bambu buluh hijau lalu dibakar di atas bara api kayu hingga harum menguap.',
    philosophicalMeaning:
      'Pemanfaatan bambu hutan secara lestari tanpa menggunakan wadah plastik, menjaga kemurnian danau Poso yang airnya bisa langsung diminum.',
    localTerms: [
      {
        term: 'Itu-itu',
        meaning: 'Olahan ikan berkuah rempah yang dimasak di dalam selongsong bambu bakar',
        language: 'Bahasa Pamona',
      },
      {
        term: 'Sogili',
        meaning: 'Ikan sidat danau raksasa endemik perairan Poso yang sangat gurih bernutrisi tinggi',
        language: 'Bahasa Pamona',
      },
    ],
    ingredientsOrMaterials: [
      '1 kg ikan mas atau sidat sogili Danau Poso',
      'Ruas bambu hijau segar berdiameter 8 cm',
      '1 ikat daun kemangi dan daun kedondong hutan',
      '8 butir bawang merah & 4 siung bawang putih',
      'Cabai rawit gunung Poso & kunyit bakar',
      'Daun pisang untuk penyumbat mulut bambu',
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pencampuran Bumbu & Ikan',
        description: 'Potongan ikan danau dilumuri bumbu ulek rempah dan daun kedondong hutan hingga meresap rata.',
      },
      {
        stepNumber: 2,
        title: 'Pengisian ke Dalam Bambu Buluh',
        description: 'Masukkan ikan berselang-seling dengan dedaunan harum ke dalam ruas bambu, lalu sumbat mulutnya dengan daun pisang.',
      },
      {
        stepNumber: 3,
        title: 'Pembakaran di Atas Bara Api Kayu',
        description: 'Bakar bambu secara miring di atas bara api selama 45 menit sambil diputar perlahan hingga air bambu mendidih harum.',
      },
    ],
    preservationAdvice:
      'Gunakan bambu segar yang baru ditebang di kebun agar aroma getah bambunya memberi rasa manis gurih alami.',
    estimatedEra: 'Abad ke-14',
    tags: ['resep', 'pamona', 'poso', 'tentena', 'danau-poso', 'bambu'],
    likesCount: 110,
  },
  {
    id: 'exp-pamona-permainan-modero-danau',
    title: 'Modero Poso: Seni Tari & Permainan Melingkar Persaudaraan Pasca Panen',
    subtitle: 'Bergandengan Tangan Melingkar Bersama Berbalas Pantun Kayori di Bawah Rembulan Danau Poso',
    category: 'permainan',
    province: 'Sulawesi Tengah',
    tribe: 'Pamona',
    regionDetail: 'Tepi Danau Poso & Lembah Bada',
    elderNarrator: {
      name: 'Mama Yustina Wulanga',
      age: 75,
      titleOrRole: 'Penutur Syair Pantun Kayori Dero Adat',
      location: 'Tentena, Poso',
    },
    recordedBy: {
      name: 'Kornelius Tobigo',
      schoolOrAffiliation: 'Fakultas Seni Institut Agama Kristen Negeri Toraja-Poso',
      date: '22 Oktober 2024',
    },
    summary:
      'Modero adalah tarian rakyat sekaligus permainan sosial suku Pamona di mana pemuda-pemudi dan orang tua bergandengan tangan membentuk lingkaran besar di lapangan terbuka pada malam bulan purnama usai panen padi. Dipandu oleh irama tabuhan gong dan gendang, peserta melangkah serentak sambil melantunkan syair pantun jenaka dan nasihat cinta tanah air (Kayori).',
    philosophicalMeaning:
      'Menghapus sekat-sekat perbedaan sosial di mana semua tangan saling bertaut erat, mengukuhkan perdamaian sejati masyarakat Poso.',
    localTerms: [
      {
        term: 'Modero',
        meaning: 'Tarian melingkar bergandengan tangan penuh kegembiraan dan keakraban',
        language: 'Bahasa Pamona',
      },
      {
        term: 'Kayori',
        meaning: 'Syair pantun bersajak empat baris berisi sindiran jenaka dan petuah luhur',
        language: 'Bahasa Pamona',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pembuatan Lingkaran di Lapangan Tanah',
        description: 'Tetua kampung mengawali langkah pertama dengan mengajak para tamu bergandengan tangan melingkar.',
      },
      {
        stepNumber: 2,
        title: 'Langkah Kaki Dua Maju Satu Mundur',
        description: 'Semua peserta mengayunkan langkah kaki serentak mengikuti ketukan gong yang semakin cepat dan meriah.',
      },
      {
        stepNumber: 3,
        title: 'Balas Pantun Kayori',
        description: 'Kelompok laki-laki melempar bait pantun Kayori dan langsung dijawab kompak oleh barisan perempuan dengan tawa hangat.',
      },
    ],
    preservationAdvice:
      'Terus selenggarakan festival Modero di tepian Danau Poso sebagai wadah silaturahmi damai antar komunitas.',
    estimatedEra: 'Turun-temurun sejak era purba Pamona',
    tags: ['permainan', 'pamona', 'modero', 'poso', 'kayori', 'tarian-rakyat'],
    likesCount: 125,
  },

  // =========================================================================
  // SUKU MANDAR (SULAWESI BARAT)
  // =========================================================================
  {
    id: 'exp-mandar-tani-bahari-sandeq',
    title: 'Perahu Layar Sandeq: Mahakarya Navigasi Bintang Pelaut Mandar',
    subtitle: 'Perahu Cadik Bercadik Ganda Tercepat di Nusantara Menembus Ombak Selat Makassar',
    category: 'tani_bahari',
    province: 'Sulawesi Barat',
    tribe: 'Mandar',
    regionDetail: 'Majene, Pambusuang, dan Balanipa, Polewali Mandar',
    elderNarrator: {
      name: 'Pua Sulaeman Passandeq',
      age: 80,
      titleOrRole: 'Punggawa Pembuat Perahu Sandeq Tradisional',
      location: 'Pambusuang, Polewali Mandar',
    },
    recordedBy: {
      name: 'Muhammad Ilham Mandar',
      schoolOrAffiliation: 'Fakultas Kelautan Universitas Sulawesi Barat',
      date: '17 Oktober 2024',
    },
    summary:
      'Sandeq adalah perahu layar bercadik ganda khas suku Mandar yang diakui dunia maritim sebagai perahu layar tradisional tercepat di lautan lepas (kecepatan mencapai 20-30 knot). Dibuat dari satu batang kayu gelondongan utuh yang dikeruk ramping, perahu ini memanfaatkan layar segitiga besar (sombal tanja) untuk berlayar mencari ikan terbang (tuing-tuing) hingga ribuan mil laut.',
    philosophicalMeaning:
      'Melambangkan keberanian, ketajaman akal nalar, dan keikhlasan pelaut Mandar dalam membaca arah mata angin dan rasi bintang ciptaan Ilahi.',
    localTerms: [
      {
        term: 'Sandeq',
        meaning: 'Runcing atau tajam; perahu layar kayu ramping berkecepatan tinggi',
        language: 'Bahasa Mandar',
      },
      {
        term: 'Punggawa',
        meaning: 'Nahkoda ahli ilmu perbintangan dan penunjuk arah gelombang laut Mandar',
        language: 'Bahasa Mandar',
      },
      {
        term: 'Sombal Tanja',
        meaning: 'Layar segitiga kain putih penangkap angin lambung perahu',
        language: 'Bahasa Mandar',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pemilihan Pohon Kayu di Pedalaman',
        description: 'Punggawa memilih sebatang pohon kayu kalapi tua yang lurus dan kokoh dengan ritual doa keselamatan.',
      },
      {
        stepNumber: 2,
        title: 'Pengerukan Lambung Sandeq Ramping',
        description: 'Batang kayu dikeruk dengan kapak beliung tipis hingga berbobot ringan namun berdaya apung tinggi.',
      },
      {
        stepNumber: 3,
        title: 'Pemasangan Cadik Bambu Baratan',
        description: 'Cadik bambu dipasang seimbang di kanan-kiri lambung untuk menahan terpaan gelombang miring di Selat Makassar.',
      },
    ],
    preservationAdvice:
      'Selenggarakan Sandeq Race tahunan secara berkala agar keahlian maritim maestro pembuat perahu tidak hilang.',
    estimatedEra: 'Abad ke-16',
    tags: ['tani_bahari', 'mandar', 'sandeq', 'bahari', 'majene', 'perahu-layar'],
    likesCount: 155,
  },
  {
    id: 'exp-mandar-cerita-keluarga-pua-saqbe',
    title: 'Petuah Pua Saqbe Mandar: Menenun Sabar Seperti Menata Hidup Berumah Tangga',
    subtitle: 'Nasihat Menjelang Gadis Mandar Duduk di Depan Alat Tenun Gedogan Sure Garusu',
    category: 'bahasa',
    province: 'Sulawesi Barat',
    tribe: 'Mandar',
    regionDetail: 'Kecamatan Tinambung, Polewali Mandar',
    elderNarrator: {
      name: "Pua' Hajjah Maryam",
      age: 79,
      titleOrRole: 'Penenun Senior Sutra Saqbe Mandar',
      location: 'Karama, Tinambung, Polman',
    },
    recordedBy: {
      name: 'Nurlina Mandar',
      schoolOrAffiliation: 'Sanggar Tenun Sutra Mandar Lestari',
      date: '23 Oktober 2024',
    },
    summary:
      'Sebelum seorang anak gadis Mandar belajar menenun Saqbe Mandar, nenek atau ibunya akan berpesan bahwa setiap benang pakan yang dimasukkan ibarat kata-kata yang diucapkan kepada suami dan anak-anak. Jika ditarik terlalu keras maka benang akan putus, jika terlalu longgar maka kain akan berkerut jelek. Kunci kain yang indah adalah kesabaran yang seimbang.',
    philosophicalMeaning:
      'Pendidikan budi pekerti perempuan Mandar dalam menjaga ketenteraman, kelembutan tutur kata, dan keharmonisan rumah tangga.',
    localTerms: [
      {
        term: 'Saqbe Mandar',
        meaning: 'Kain sarung sutra tenun tangan kebanggaan masyarakat Mandar',
        language: 'Bahasa Mandar',
      },
      {
        term: 'Sure Garusu',
        meaning: 'Corak garis kotak-kotak berpadu warna cerah lambang ketegasan dan kelembutan',
        language: 'Bahasa Mandar',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Duduk Menghadap Gedogan',
        description: 'Gadis muda diajarkan mengatur napas dan membersihkan hati dari amarah sebelum menyentuh benang sutra.',
      },
      {
        stepNumber: 2,
        title: 'Merapatkan Benang dengan Sisir Kayu',
        description: 'Setiap ketukan sisir kayu diiringi zikir doa agar rumah tangga kelak diberi ketenteraman lahir batin.',
      },
    ],
    preservationAdvice:
      'Rekam nasihat-nasihat lisan para penenun tua Mandar sebagai bahan kajian antropologi keluarga Nusantara.',
    estimatedEra: 'Turun-temurun sejak era awal Kesultanan Balanipa',
    tags: ['falsafah', 'mandar', 'tenun', 'saqbe', 'nasihat-ibu'],
    likesCount: 114,
  },

  // =========================================================================
  // SUKU GORONTALO (GORONTALO)
  // =========================================================================
  {
    id: 'exp-gorontalo-resep-ilabulo-sagu',
    title: 'Ilabulo Sagu Gurih Hati Ayam & Rempah Bungkus Daun Pisang',
    subtitle: 'Kudapan Kenyal Hangat Pedas Lada Makanan Raja-Raja Gorontalo Tempo Dulu',
    category: 'resep',
    province: 'Gorontalo',
    tribe: 'Gorontalo',
    regionDetail: 'Kota Gorontalo & Limboto, Kabupaten Gorontalo',
    elderNarrator: {
      name: 'Ti Ti’a Hajjah Zubaidah',
      age: 78,
      titleOrRole: 'Pewaris Masakan Tradisional Istana Duluwo Limo Lo Pohala’a',
      location: 'Limba U-1, Kota Gorontalo',
    },
    recordedBy: {
      name: 'Mohamad Rinaldi Monoarfa',
      schoolOrAffiliation: 'Fakultas Pertanian Universitas Negeri Gorontalo',
      date: '15 Oktober 2024',
    },
    summary:
      'Ilabulo adalah makanan khas suku Gorontalo yang terbuat dari pati sagu basah yang dicampur kaldu ayam kental, jeroan hati ampela ayam cincang halus, telur rebus, serta bumbu pedas merica lada, pala, dan bawang merah berlimpah. Adonan dibungkus daun pisang lalu dibakar di atas bara arang batok kelapa hingga aromanya semerbak harum.',
    philosophicalMeaning:
      '"Totombuluwa" melambangkan penyatuan berbagai unsur berbeda (sagu, daging, rempah pedas) menjadi satu kelezatan utuh, simbol persatuan lima kerajaan Pohala\'a di Gorontalo.',
    localTerms: [
      {
        term: 'Ilabulo',
        meaning: 'Sajian sagu berbumbu kaldu hati ayam panggang daun pisang',
        language: 'Bahasa Gorontalo',
      },
      {
        term: 'Pohala’a',
        meaning: 'Persaudaraan persekutuan lima kerajaan adat Gorontalo',
        language: 'Bahasa Gorontalo',
      },
    ],
    ingredientsOrMaterials: [
      '250 gram sagu basah kualitas putih bersih',
      '200 gram hati ampela ayam dicincang matang',
      '300 ml kaldu ayam pekat hangat',
      '1 butir telur ayam kocok',
      '6 siung bawang merah & 4 siung bawang putih',
      '1 sendok teh merica putih bubuk & cabai rawit pedas',
      'Daun pisang klutuk untuk pembungkus',
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pengadukan Adonan Sagu & Kaldu',
        description: 'Campurkan pati sagu dengan kaldu ayam hangat, bumbu halus, dan telur kocok hingga licin mengental.',
      },
      {
        stepNumber: 2,
        title: 'Pemberian Isian Hati Ayam & Pembungkusan',
        description: 'Sendokkan adonan ke selembar daun pisang, beri isian hati ayam cincang di tengahnya, gulung dan semat dengan lidi.',
      },
      {
        stepNumber: 3,
        title: 'Pemanggangan di Atas Arang Kelapa',
        description: 'Bakar bungkusan di atas bara api arang hingga daun pisang menghitam harum dan isian sagu matang kenyal bening.',
      },
    ],
    preservationAdvice:
      'Bakar dengan arang batok kelapa alami tanpa minyak gas agar rasa asap harumnya meresap sempurna.',
    estimatedEra: 'Abad ke-15 (era Kerajaan Hulontalo)',
    tags: ['resep', 'gorontalo', 'ilabulo', 'sagu', 'kuliner-raja'],
    likesCount: 119,
  },
  {
    id: 'exp-gorontalo-bahasa-batanga-pomaya',
    title: "Batanga Pomaya, Nyawa Podungalo, Harata Pantohelolo: Falsafah Luhur Gorontalo",
    subtitle: 'Raga untuk Mengabdi, Nyawa Taruhan Negeri, Harta Pembawa Manfaat Sesama',
    category: 'bahasa',
    province: 'Gorontalo',
    tribe: 'Gorontalo',
    regionDetail: 'Provinsi Gorontalo',
    elderNarrator: {
      name: 'Baate Ramli Hippy',
      age: 84,
      titleOrRole: 'Pemangku Lembaga Adat Lima Pohala’a Gorontalo',
      location: 'Suwawa, Bone Bolango',
    },
    recordedBy: {
      name: 'Siti Rahayu Gobel',
      schoolOrAffiliation: 'Komunitas Riset Budaya Hulondalo',
      date: '18 Oktober 2024',
    },
    summary:
      'Sumpah pengabdian agung para ksatria dan pemimpin Gorontalo berbunyi: "Batanga Pomaya" (badan/raga dipersembahkan untuk melayani kepentingan rakyat), "Nyawa Podungalo" (nyawa siap dipertaruhkan membela tanah tumpah darah dan kebenaran), serta "Harata Pantohelolo" (harta kekayaan diinfakkan untuk membantu orang miskin dan membangun negeri).',
    philosophicalMeaning:
      'Puncak etika kepemimpinan dan integritas manusia di hadapan Tuhan dan masyarakat, di mana kekuasaan adalah amanah pengorbanan bukan penindasan.',
    localTerms: [
      {
        term: 'Batanga',
        meaning: 'Raga atau jasad jasmani manusia',
        language: 'Bahasa Gorontalo',
      },
      {
        term: 'Pomaya',
        meaning: 'Bakti pengabdian tanpa mengharap pamrih',
        language: 'Bahasa Gorontalo',
      },
      {
        term: 'Podungalo',
        meaning: 'Rela dikorbankan demi kemaslahatan umum',
        language: 'Bahasa Gorontalo',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pengucapan dalam Upacara Adat Pulanga',
        description: 'Setiap tokoh yang menerima gelar adat kehormatan (Pulanga) wajib mengucapkan sumpah suci ini di hadapan para tetua adat.',
      },
      {
        stepNumber: 2,
        title: 'Pertanggungjawaban Moral',
        description: 'Jika seorang bergelar adat menyalahgunakan amanah, gelar kehormatannya dicabut dan namanya tidak diizinkan masuk ke liang makam pahlawan.',
      },
    ],
    preservationAdvice:
      'Ajarkan nilai anti-korupsi berbasis falsafah Batanga Pomaya sejak usia sekolah dasar di Gorontalo.',
    estimatedEra: 'Sejak berdirinya kerajaan-kerajaan Gorontalo abad ke-14',
    tags: ['bahasa', 'falsafah', 'gorontalo', 'integritas', 'kepemimpinan', 'pulanga'],
    likesCount: 145,
  },
  {
    id: 'exp-gorontalo-kerajinan-karawo-halus',
    title: 'Sulaman Karawo Gorontalo: Mahakarya Jarum & Cabut Benang Terhalus',
    subtitle: 'Seni Kerawang Tangan Mengurai Serat Kain Menjadi Mahakarya Motif Bunga & Geometris',
    category: 'kerajinan',
    province: 'Gorontalo',
    tribe: 'Gorontalo',
    regionDetail: 'Kecamatan Telaga & Bongomeme, Kabupaten Gorontalo',
    elderNarrator: {
      name: 'Ti Ti’a Mariam Botutihe',
      age: 76,
      titleOrRole: 'Maestro Penyulam Karawo Halus',
      location: 'Telaga Biru, Gorontalo',
    },
    recordedBy: {
      name: 'Fauziah Daud',
      schoolOrAffiliation: 'Yayasan Karawo Lestari Gorontalo',
      date: '20 Oktober 2024',
    },
    summary:
      'Karawo adalah seni sulam khas suku Gorontalo yang memerlukan ketelitian luar biasa. Proses pembuatannya diawali dengan mencabut helai-helai benang dari kain katun polos satu demi satu menggunakan jarum kecil (proses Mokaru), lalu merajut benang berwarna ke dalam lubang-lubang kain (proses Ma\'karawo) hingga membentuk motif flora, fauna, dan geometri yang luar biasa indah.',
    philosophicalMeaning:
      'Cermin ketabahan, kesabaran tanpa batas, dan ketelitian hati perempuan Gorontalo dalam merawat keindahan hidup keluarga.',
    localTerms: [
      {
        term: 'Karawo',
        meaning: 'Sulam kerawang tangan khas Gorontalo dari teknik mengurai serat benang kain',
        language: 'Bahasa Gorontalo',
      },
      {
        term: 'Mokaru',
        meaning: 'Tahap mencabut benang kain secara berjarak presisi dengan ujung jarum',
        language: 'Bahasa Gorontalo',
      },
      {
        term: 'Ma’karawo',
        meaning: 'Tahap menyulam dan mengikat benang warna membentuk ragam hias',
        language: 'Bahasa Gorontalo',
      },
    ],
    toolsUsed: ['Jarum sulam baja runcing halus', 'Kain katun serat rapat', 'Benang sulam warna-warni sutra/katun', 'Kaca pembesar'],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Perhitungan & Pencabutan Benang (Mokaru)',
        description: 'Penyulam menghitung jumlah serat benang yang dicabut dan disisakan dengan ketelitian milimeter tanpa merusak serat lainnya.',
      },
      {
        stepNumber: 2,
        title: 'Penyulaman Benang Motif (Ma’karawo)',
        description: 'Benang berwarna disusupkan dan diikat simpul pada rangka benang yang tersisa hingga motif tampak hidup dan rapi di bolak-balik kain.',
      },
    ],
    preservationAdvice:
      'Berikan perlindungan hak kekayaan intelektual (HAKI) dan dorong penghargaan harga yang layak bagi penyulam perempuan di desa-desa.',
    estimatedEra: 'Abad ke-17 (Masa perlawanan rakyat Gorontalo terhadap monopoli)',
    tags: ['kerajinan', 'karawo', 'gorontalo', 'sulam-tangan', 'tekstil'],
    likesCount: 132,
  },
  {
    id: 'exp-gorontalo-permainan-langga-silat',
    title: 'Langga Gorontalo: Seni Bela Diri Ketangkasan & Akrobatik Kehormatan',
    subtitle: 'Silat Tradisional Gerak Tubuh Fleksibel Pembela Kaum Lemah di Lapangan Istana',
    category: 'permainan',
    province: 'Gorontalo',
    tribe: 'Gorontalo',
    regionDetail: 'Kecamatan Tapa & Kota Gorontalo',
    elderNarrator: {
      name: 'Guru Usman Bilondatu',
      age: 82,
      titleOrRole: 'Guru Besar Pendekar Langga Tradisional Gorontalo',
      location: 'Tapa, Bone Bolango',
    },
    recordedBy: {
      name: 'Hendra Katili',
      schoolOrAffiliation: 'Persatuan Pendekar Silat Tradisional Gorontalo',
      date: '22 Oktober 2024',
    },
    summary:
      'Langga adalah seni bela diri sekaligus permainan ketangkasan akrobatik tradisional suku Gorontalo yang memadukan keindahan gerak menari, refleks menghindar lentur, dan kuncian cepat. Langga dimainkan tanpa senjata mematikan diiringi irama tabuhan rebana marwas, di mana pendekar pantang menyerang lawan yang sudah jatuh.',
    philosophicalMeaning:
      'Mengajarkan ksatria untuk mengendalikan hawa nafsu amarah, membela kehormatan orang tua dan kaum lemah, serta memuliakan lawan tanding.',
    localTerms: [
      {
        term: 'Langga',
        meaning: 'Seni bela diri akrobatik silat kehormatan khas bumi Gorontalo',
        language: 'Bahasa Gorontalo',
      },
      {
        term: 'Balanga',
        meaning: 'Posisi kuda-kuda rendah lentur bagaikan gerakan air mengalir',
        language: 'Bahasa Gorontalo',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Hormat Berjabat Tangan di Tengah Gelanggang',
        description: 'Kedua pesilat saling merunduk dan menyentuh dada kiri tanda ketulusan hati sebelum memulai gerak.',
      },
      {
        stepNumber: 2,
        title: 'Gerak Menghindar Berirama',
        description: 'Pesilat melompat dan berguling menghindar serangan dengan kelenturan tubuh tanpa kontak kasar mematikan.',
      },
      {
        stepNumber: 3,
        title: 'Kuncian Bersahabat & Pelukan',
        description: 'Diakhiri dengan kuncian lembut dan pelukan hangat di hadapan para penonton dan tetua adat.',
      },
    ],
    preservationAdvice:
      'Giatkan kejuaraan Langga antarpelajar se-Provinsi Gorontalo sebagai sarana pembentukan karakter pemuda berakhlak mulia.',
    estimatedEra: 'Abad ke-16',
    tags: ['permainan', 'gorontalo', 'langga', 'silat', 'bela-diri', 'akrobatik'],
    likesCount: 115,
  },

  // =========================================================================
  // SUKU MINAHASA (SULAWESI UTARA)
  // =========================================================================
  {
    id: 'exp-minahasa-bahasa-torang-samua-basudara',
    title: 'Torang Samua Basudara & Si Tou Timou Tumou Tou: Jiwa Minahasa',
    subtitle: 'Manusia Hidup untuk Memanusiakan Manusia Lain dan Kita Semua Bersaudara',
    category: 'bahasa',
    province: 'Sulawesi Utara',
    tribe: 'Minahasa',
    regionDetail: 'Manado, Minahasa, Tomohon, Minut, Minsel, Mitra',
    elderNarrator: {
      name: 'Opa Bert Sondakh',
      age: 82,
      titleOrRole: 'Tokoh Budaya Lembaga Kerapatan Adat Minahasa',
      location: 'Kakas, Minahasa',
    },
    recordedBy: {
      name: 'Gabriella Rondonuwu',
      schoolOrAffiliation: 'Fakultas Ilmu Budaya Unsrat Manado',
      date: '17 Oktober 2024',
    },
    summary:
      'Dua falsafah yang menyatu dalam jiwa orang Minahasa: "Si Tou Timou Tumou Tou" yang dicetuskan oleh Pahlawan Nasional Dr. Sam Ratulangi bermakna manusia baru dapat dikatakan benar-benar hidup jika ia mendidik dan memanusiakan manusia lainnya. Didukung semboyan kerukunan "Torang Samua Basudara" (kita semua bersaudara) yang menjadikan Sulawesi Utara rumah paling toleran dan damai di Nusantara.',
    philosophicalMeaning:
      'Pendidikan budi pekerti yang mengutamakan ilmu pengetahuan, kasih sayang tanpa pamrih, dan penolakan terhadap diskriminasi agama atau suku.',
    localTerms: [
      {
        term: 'Si Tou Timou Tumou Tou',
        meaning: 'Manusia hidup untuk mendidik dan memanusiakan sesamanya',
        language: 'Bahasa Minahasa (Tontemboan/Tombulu)',
      },
      {
        term: 'Mapalus',
        meaning: 'Sistem gotong royong kerja bersama tanpa upah uang demi kemajuan desa',
        language: 'Bahasa Minahasa',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Mendidik Anak dengan Keteladanan',
        description: 'Orang tua Minahasa mengutamakan sekolah dan pendidikan tinggi bagi putra-putrinya agar mampu menolong sesama.',
      },
      {
        stepNumber: 2,
        title: 'Praktek Buka Pintu Rumah saat Hari Raya',
        description: 'Tradisi Open House saat Natal maupun Lebaran di mana tetangga lintas iman saling berkunjung dan menikmati jamuan bersama.',
      },
    ],
    preservationAdvice:
      'Terus pertahankan semboyan ini sebagai benteng perdamaian dan kerukunan bangsa Indonesia.',
    estimatedEra: 'Turun-temurun & dirumuskan modern abad ke-20',
    tags: ['bahasa', 'falsafah', 'minahasa', 'sulawesi-utara', 'toleransi', 'pendidikan'],
    likesCount: 160,
  },
  {
    id: 'exp-minahasa-kerajinan-kolintang-cempaka',
    title: 'Alat Musik Kolintang Kayu Cempaka Warisan Nada Minahasa',
    subtitle: 'Bilah Kayu Bersuara Emas Pengiring Melodi Kasih di Bawah Kaki Gunung Lokon',
    category: 'kerajinan',
    province: 'Sulawesi Utara',
    tribe: 'Minahasa',
    regionDetail: 'Tomohon & Minahasa Utara',
    elderNarrator: {
      name: 'Opa Frans Wewengkang',
      age: 80,
      titleOrRole: 'Maestro Pembuat Bilah Kolintang Nada Diatonis',
      location: 'Lembean, Minahasa Utara',
    },
    recordedBy: {
      name: 'Michael Wowor',
      schoolOrAffiliation: 'Persatuan Insan Kolintang Nasional (PINKAN)',
      date: '19 Oktober 2024',
    },
    summary:
      'Kolintang adalah alat musik perkusi bernada tradisional suku Minahasa yang dibuat dari bilah kayu cempaka atau kayu bandaran pilihan yang telah dikeringkan bertahun-tahun. Ketika dipukul dengan stik pemukul berkepala karet mentah, bilah kayu ini menghasilkan alunan nada merdu gema bergaung yang harmonis mengiringi kidung puji-pujian dan tari adat.',
    philosophicalMeaning:
      'Keharmonisan nada kolintang tercipta karena perbedaan ukuran bilah kayu yang saling melengkapi, simbol masyarakat Minahasa yang bersatu dalam keberagaman talenta.',
    localTerms: [
      {
        term: 'Kolintang',
        meaning: 'Alat musik bilah kayu Minahasa yang menghasilkan bunyi ting, tang, tong yang berurutan',
        language: 'Bahasa Minahasa',
      },
    ],
    toolsUsed: ['Kayu cempaka tua dijemur 2 tahun', 'Gergaji pahat penyetem nada', 'Tuner garpu tala nada diatonis', 'Kotak resonansi kayu jati'],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pemilihan & Pengetukan Kayu Kering',
        description: 'Kayu dipotong balok lalu diketuk untuk mendengar resonansi dengung alaminya sebelum dipahat.',
      },
      {
        stepNumber: 2,
        title: 'Penyeteman Nada Presisi',
        description: 'Bagian bawah bilah dikikis cekung perlahan hingga mencapai frekuensi nada standar internasional.',
      },
    ],
    preservationAdvice:
      'Dukung pendaftaran Kolintang sebagai Warisan Budaya Takbenda Dunia di UNESCO.',
    estimatedEra: 'Abad ke-16 berkembang diatonis abad ke-20',
    tags: ['kerajinan', 'minahasa', 'kolintang', 'musik-tradisional', 'cempaka'],
    likesCount: 148,
  },
  {
    id: 'exp-minahasa-cerita-sejarah-benteng-moraya',
    title: 'Sejarah Perang Tondano & Benteng Moraya Mempertahankan Kedaulatan',
    subtitle: 'Kisah Heroik Ksatria Minahasa Melawan Monopoli Kompeni di Danau Tondano',
    category: 'cerita_sejarah',
    province: 'Sulawesi Utara',
    tribe: 'Minahasa',
    regionDetail: 'Tondano, Kabupaten Minahasa',
    elderNarrator: {
      name: 'Tonaas Johny Politon',
      age: 81,
      titleOrRole: 'Tetua Sejarah Adat Benteng Moraya Tondano',
      location: 'Tondano Barat, Minahasa',
    },
    recordedBy: {
      name: 'Priscillia Sumampouw',
      schoolOrAffiliation: 'Fakultas Hukum Universitas Sam Ratulangi',
      date: '24 Oktober 2024',
    },
    summary:
      'Benteng Moraya di tepi Danau Tondano adalah saksi bisu pertempuran dahsyat Perang Tondano (1808-1809). Rakyat dan ksatria Minahasa bersatu mendirikan benteng kayu di atas perairan rawa danau dengan parit pertahanan air untuk melawan pasukan kolonial yang ingin merampas beras dan memaksakan tenaga kerja paksa. Mereka bertempur hingga titik darah penghabisan mempertahankan kemerdekaan tanah leluhur.',
    philosophicalMeaning:
      'Semangat patriotisme membela tanah air dan martabat rakyat kecil yang pantang tunduk pada penindasan asing.',
    localTerms: [
      {
        term: 'Moraya',
        meaning: 'Genangan air atau rawa luas tempat pertempuran pertahanan rakyat Tondano',
        language: 'Bahasa Minahasa',
      },
      {
        term: 'Tonaas',
        meaning: 'Pemimpin adat ksatria berilmu tinggi dan pemberani',
        language: 'Bahasa Minahasa',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Musyawarah Watu Pinawetengan Para Tonaas',
        description: 'Para pemimpin sembilan sub-etnis Minahasa sepakat bersatu mendukung perlawanan rakyat Tondano.',
      },
      {
        stepNumber: 2,
        title: 'Pertahanan Moraya Menggunakan Perahu Danau',
        description: 'Ksatria Tondano memanfaatkan kepiawaian bergerak di atas rawa mengalahkan meriam lawan.',
      },
    ],
    preservationAdvice:
      'Kunjungi Monumen Benteng Moraya dan rawat pilar-pilar relief sejarah perjuangannya dengan penuh takzim.',
    estimatedEra: 'Tahun 1808 - 1809',
    tags: ['cerita_sejarah', 'minahasa', 'benteng-moraya', 'tondano', 'patriotisme'],
    likesCount: 139,
  },

  // =========================================================================
  // SUKU BUGIS (SULAWESI SELATAN)
  // =========================================================================
  {
    id: 'exp-bugis-bahasa-taro-ada-taro-gau',
    title: 'Taro Ada Taro Gau: Falsafah Integritas Satunya Kata dan Perbuatan',
    subtitle: 'Harga Diri Insan Bugis Terletak pada Kesetiaannya Menepati Janji yang Telah Terucap',
    category: 'bahasa',
    province: 'Sulawesi Selatan',
    tribe: 'Bugis',
    regionDetail: 'Bone, Soppeng, Wajo, Sidrap, Pinrang, Barru',
    elderNarrator: {
      name: 'Puang Haji Petta Lolo',
      age: 83,
      titleOrRole: 'Pemerhati Manuskrip Lontara Bugis',
      location: 'Watampone, Bone',
    },
    recordedBy: {
      name: 'Andi M. Zulkifli',
      schoolOrAffiliation: 'Departemen Sastra Daerah Universitas Hasanuddin',
      date: '16 Oktober 2024',
    },
    summary:
      'Pepatah luhur Bugis "Taro Ada Taro Gau" bermakna: apa yang telah diikrarkan oleh lidah harus selaras dengan apa yang diwujudkan dalam tindakan nyata. Orang Bugis menganggap pengingkaran janji sebagai cacat kehormatan (siri\') terbesar yang memalukan keluarga dan leluhur.',
    philosophicalMeaning:
      'Pondasi integritas, kejujuran (lempu\'), dan kredibilitas moral seseorang di tengah masyarakat dan dalam perniagaan Nusantara.',
    localTerms: [
      {
        term: 'Taro Ada',
        meaning: 'Menaruh kata, membuat janji atau komitmen',
        language: 'Bahasa Bugis',
      },
      {
        term: 'Taro Gau',
        meaning: 'Menaruh perbuatan, membuktikan komitmen lewat tindakan nyata',
        language: 'Bahasa Bugis',
      },
      {
        term: 'Lempu',
        meaning: 'Kejujuran lurus tanpa tipu muslihat',
        language: 'Bahasa Bugis',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Nasihat Menjelang Akad dan Niaga',
        description: 'Orang tua Bugis selalu menguji kejujuran anak muda lewat kata-kata kecil sebelum menyerahkan tanggung jawab besar.',
      },
      {
        stepNumber: 2,
        title: 'Prinsip Saudagar Bugis di Pelabuhan',
        description: 'Saudagar Bugis berdagang tanpa kwitansi rumit pada zaman dulu, cukup berpegang pada Taro Ada Taro Gau sebagai jaminan emas.',
      },
    ],
    preservationAdvice:
      'Jadikan prinsip Taro Ada Taro Gau sebagai etika bisnis dan etika kepemimpinan nasional.',
    estimatedEra: 'Turun-temurun sejak era Lontara abad ke-14',
    tags: ['bahasa', 'falsafah', 'bugis', 'integritas', 'kejujuran', 'lempu'],
    likesCount: 172,
  },
  {
    id: 'exp-bugis-tani-bahari-panrita-lopi',
    title: 'Kearifan Panrita Lopi & Pembuatan Perahu Pinisi Ara Tanah Beru',
    subtitle: 'Mahakarya Kapal Layar Nusantara yang Dibangun Berdasarkan Firasat Jiwa & Pengetahuan Lisan Tanpa Gambar Cetak Biru',
    category: 'tani_bahari',
    province: 'Sulawesi Selatan',
    tribe: 'Bugis',
    regionDetail: 'Bulukumba, Tanah Beru, dan Bira',
    elderNarrator: {
      name: 'Panrita Lopi H. Syahrir',
      age: 79,
      titleOrRole: 'Kepala Tukang Pembuat Kapal Pinisi Nusantara',
      location: 'Tanah Beru, Bulukumba',
    },
    recordedBy: {
      name: 'Andi Nurhaliza Bira',
      schoolOrAffiliation: 'Pusat Dokumentasi Pinisi Dunia',
      date: '19 Oktober 2024',
    },
    summary:
      'Kapal Pinisi telah diakui UNESCO sebagai Warisan Budaya Takbenda Dunia. Panrita Lopi (ahli pembuat kapal) Bugis-Konjo-Makassar membangun kapal layar raksasa seberat ratusan ton hanya berpedoman pada intuisi batin, ketukan palu kayu, serta rumus hitungan mistis lisan warisan leluhur Sawerigading tanpa pernah memakai gambar cetak biru kertas.',
    philosophicalMeaning:
      'Harmoni spiritual antara manusia dengan kayu pohon hutan dan ombak samudra, di mana kapal dianggap sebagai makhluk bernyawa yang wajib dilindungi.',
    localTerms: [
      {
        term: 'Panrita Lopi',
        meaning: 'Maestro ahli spiritual dan perancang kapal pinisi tradisional',
        language: 'Bahasa Bugis/Konjo',
      },
      {
        term: 'Anrong Guru Lopi',
        meaning: 'Guru besar tukang kayu penanggung jawab kekokohan lunas kapal',
        language: 'Bahasa Makassar/Bugis',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Upacara Pemotongan Lunas (Kalabiseang)',
        description: 'Lunas diletakkan menghadap laut dan dipotong di kedua ujungnya untuk dibuang ke ombak sebagai persembahan keselamatan.',
      },
      {
        stepNumber: 2,
        title: 'Penyusunan Papan Dinding Sebelum Tulang Rusuk',
        description: 'Berbeda dengan teknik Barat, papan lambung kapal Pinisi dirakit terlebih dahulu sebelum kerangka rusuk dipasang di bagian dalam.',
      },
      {
        stepNumber: 3,
        title: 'Peluncuran ke Laut (Ansongko Lopi)',
        description: 'Ratusan warga bergotong royong menarik kapal ke air diiringi tabuhan gendang dan sorak kemenangan.',
      },
    ],
    preservationAdvice:
      'Lindungi ketersediaan kayu besi bitti dan ulin secara berkelanjutan melalui reboisasi hutan bibit pinisi.',
    estimatedEra: 'Sejak era epos I La Galigo abad ke-14',
    tags: ['tani_bahari', 'bugis', 'pinisi', 'bulukumba', 'unesco', 'maritim'],
    likesCount: 185,
  },

  // =========================================================================
  // SUKU MAKASSAR (SULAWESI SELATAN)
  // =========================================================================
  {
    id: 'exp-makassar-bahasa-siri-na-pacce',
    title: 'Siri’ Na Pacce: Falsafah Kehormatan & Jiwa Solidaritas Tanpa Batas Makassar',
    subtitle: 'Menjaga Martabat Diri Keluarga Sekaligus Merasakan Kepedihan Saudara yang Teraniaya',
    category: 'bahasa',
    province: 'Sulawesi Selatan',
    tribe: 'Makassar',
    regionDetail: 'Kota Makassar, Gowa, Takalar, Jeneponto, Bantaeng',
    elderNarrator: {
      name: 'Daeng Mangnguntungi',
      age: 82,
      titleOrRole: 'Tetua Lembaga Adat Budaya Bate Salapang Gowa',
      location: 'Somba Opu, Gowa',
    },
    recordedBy: {
      name: 'Rahmatullah Dg. Kulle',
      schoolOrAffiliation: 'Fakultas Adab UIN Alauddin Makassar',
      date: '15 Oktober 2024',
    },
    summary:
      'Siri\' Na Pacce adalah falsafah hidup paling mendasar masyarakat Makassar. "Siri\'" bermakna harga diri, martabat moral, dan rasa malu bila berbuat tercela. Sedangkan "Pacce" (atau Pesse dalam Bugis) bermakna rasa empati mendalam, pedih di dada ketika melihat saudara sekampung atau sesama manusia ditimpa kesusahan dan ketidakadilan.',
    philosophicalMeaning:
      'Seseorang yang hanya memiliki Siri\' tanpa Pacce akan menjadi sombong, namun jika memiliki keduanya ia menjadi ksatria pelindung masyarakat yang adil dan berbelas kasih.',
    localTerms: [
      {
        term: 'Siri’',
        meaning: 'Kehormatan diri, rasa malu moral untuk tidak melakukan kejahatan',
        language: 'Bahasa Makassar',
      },
      {
        term: 'Pacce',
        meaning: 'Rasa sakit empati yang mendorong tindakan nyata menolong sesama yang terluka',
        language: 'Bahasa Makassar',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pesan Tetua Sebelum Anak Melangkah Keluar',
        description: 'Orang tua Makassar selalu berpesan: "Jaga siri\'nu, paccei saudaramu", jadilah manusia yang berharga diri dan suka menolong.',
      },
      {
        stepNumber: 2,
        title: 'Tolong Menolong Tanpa Memandang Suku',
        description: 'Jika ada perahu karam atau tetangga kelaparan, pacce mewajibkan siapa pun mengulurkan tangan tanpa bertanya asal usulnya.',
      },
    ],
    preservationAdvice:
      'Pahami makna Siri\' Na Pacce secara positif sebagai pendorong kejujuran dan kemanusiaan, bukan untuk arogansi kekerasan.',
    estimatedEra: 'Abad ke-14 era Kerajaan Gowa-Tallo',
    tags: ['bahasa', 'falsafah', 'makassar', 'siri', 'pacce', 'solidaritas'],
    likesCount: 165,
  },
  {
    id: 'exp-makassar-sejarah-karaeng-pattingalloang',
    title: 'Sejarah Karaeng Pattingalloang Cendekiawan Dunia dari Benteng Somba Opu',
    subtitle: 'Perdana Menteri Kerajaan Tallo Penguasa Berbagai Bahasa Eropa & Pemilik Teropong Galileo Galilei',
    category: 'cerita_sejarah',
    province: 'Sulawesi Selatan',
    tribe: 'Makassar',
    regionDetail: 'Kawasan Benteng Somba Opu, Gowa & Makassar',
    elderNarrator: {
      name: 'Daeng Serang Karaeng Lembang',
      age: 80,
      titleOrRole: 'Peneliti Sejarah Klasik Makassar Kerajaan Kembar',
      location: 'Katangka, Gowa',
    },
    recordedBy: {
      name: 'Fikri Haikal Gowa',
      schoolOrAffiliation: 'Departemen Ilmu Sejarah Universitas Hasanuddin',
      date: '21 Oktober 2024',
    },
    summary:
      'Karaeng Pattingalloang (1600-1654) adalah Perdana Menteri Kerajaan Tallo dan pembimbing Sultan Malikussaid. Ia menguasai bahasa Latin, Portugis, Spanyol, Arab, dan Belanda, memiliki perpustakaan atlas bola dunia terlengkap di Asia Tenggara pada abad ke-17, serta memesan teleskop teropong bintang langsung kepada ilmuwan Galileo Galilei di Italia.',
    philosophicalMeaning:
      'Membuktikan bahwa keterbukaan terhadap sains dan ilmu pengetahuan global adalah tradisi asli bangsa kita yang mampu duduk setara dengan bangsa mana pun di dunia.',
    localTerms: [
      {
        term: 'Karaeng',
        meaning: 'Gelar bangsawan ningrat terhormat di Kerajaan Gowa dan Tallo',
        language: 'Bahasa Makassar',
      },
      {
        term: 'Somba Opu',
        meaning: 'Benteng batu pualam megah pusat perdagangan bebas internasional Makassar',
        language: 'Bahasa Makassar',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Penerimaan Utusan Internasional',
        description: 'Karaeng Pattingalloang menerima pedagang Inggris, Denmark, Arab, dan Portugis dengan hukum perdagangan yang adil.',
      },
      {
        stepNumber: 2,
        title: 'Pengamatan Bintang di Menara Benteng',
        description: 'Bersama para cendekiawan ia memetakan rasi bintang untuk meningkatkan keselamatan para pelaut Nusantara.',
      },
    ],
    preservationAdvice:
      'Nama Karaeng Pattingalloang harus dijadikan inspirasi nama lembaga riset, perpustakaan daerah, dan pusat sains Sulawesi Selatan.',
    estimatedEra: 'Abad ke-17 (Tahun 1600 - 1654 M)',
    tags: ['cerita_sejarah', 'makassar', 'karaeng-pattingalloang', 'sains', 'somba-opu'],
    likesCount: 158,
  },

  // =========================================================================
  // SUKU TORAJA (SULAWESI SELATAN)
  // =========================================================================
  {
    id: 'exp-toraja-resep-pantollo-lendong',
    title: 'Pantollo’ Lendong Belut Sawah Masak Kluwek Hitam Pamarrasan Toraja',
    subtitle: 'Masakan Belut Sawah Gurih Berkuah Pekat Bumbu Buah Pangi Hitam Lereng Rantepao',
    category: 'resep',
    province: 'Sulawesi Selatan',
    tribe: 'Toraja',
    regionDetail: 'Makale & Rantepao, Tana Toraja & Toraja Utara',
    elderNarrator: {
      name: "Nenek Lai' Rantebua",
      age: 78,
      titleOrRole: 'Tetua Dapur Upacara Rambu Solo’ & Rambu Tuka’',
      location: 'Kesu’, Toraja Utara',
    },
    recordedBy: {
      name: 'Yosias Mangoting',
      schoolOrAffiliation: 'Fakultas Teologi & Budaya IAKN Toraja',
      date: '14 Oktober 2024',
    },
    summary:
      'Pantollo’ Lendong adalah masakan istimewa suku Toraja berupa belut sawah gemuk yang dibakar sekilas untuk menghilangkan lendirnya, lalu dimasak bersama bumbu pamarrasan (daging biji pangi/kluwek hitam fermentasi), cabai katokkon merah pedas, serai, daun kemangi, dan jahe hingga berkuah kental hitam gurih beraroma khas tanah pegunungan.',
    philosophicalMeaning:
      'Simbol rasa syukur atas berkah air sawah lembah Toraja yang subur, menyatukan rasa pedas, gurih, dan hangat dalam kebersamaan keluarga besar Tongkonan.',
    localTerms: [
      {
        term: 'Pamarrasan',
        meaning: 'Bumbu rempah hitam pekat dari fermentasi biji buah pangi hutan tua khas Toraja',
        language: 'Bahasa Toraja',
      },
      {
        term: 'Lendong',
        meaning: 'Belut sawah air tawar yang hidup di lumpur terasering sawah Toraja',
        language: 'Bahasa Toraja',
      },
    ],
    ingredientsOrMaterials: [
      '1 kg belut sawah segar dibakar sebentar lalu dipotong',
      '4 sendok makan pasta pamarrasan hitam murni',
      '10 cabai katokkon Toraja dirajang',
      '6 siung bawang merah & 4 siung bawang putih',
      '3 batang serai geprek & 2 cm jahe merah',
      'Daun kemangi hutan & sedikit air jeruk nipis',
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pembersihan & Pembakaran Awal Belut',
        description: 'Belut dilumuri abu jerami padi lalu dibakar di atas bara sekilas agar kulitnya kesat dan gurih.',
      },
      {
        stepNumber: 2,
        title: 'Penumisan Bumbu Pamarrasan',
        description: 'Tumis bumbu halus bersama pasta pamarrasan, serai, dan cabai katokkon hingga mengeluarkan minyak hitam pekat.',
      },
      {
        stepNumber: 3,
        title: 'Pemasakan Perlahan',
        description: 'Masukkan belut dan sedikit air, masak dengan api kecil hingga bumbu meresap ke dalam daging belut.',
      },
    ],
    preservationAdvice:
      'Pastikan biji pamarrasan telah difermentasi dengan sempurna agar tidak beracun dan menghasilkan cita rasa hitam gurih khas.',
    estimatedEra: 'Turun-temurun sejak era Aluk Todolo Toraja',
    tags: ['resep', 'toraja', 'pantollo', 'pamarrasan', 'belut', 'rantepao'],
    likesCount: 122,
  },
  {
    id: 'exp-toraja-kerajinan-kandaure-manik',
    title: 'Kandaure Manik: Hiasan Manik-Manik Rumbai Kebesaran Upacara Toraja',
    subtitle: 'Rangkaian Ribuan Butir Manik Kaca Berpola Garis Geometris Penghias Tongkonan & Busana Gadis Adat',
    category: 'kerajinan',
    province: 'Sulawesi Selatan',
    tribe: 'Toraja',
    regionDetail: 'Sangalla & Mengkendek, Tana Toraja',
    elderNarrator: {
      name: "Indo' Sanda Bunga",
      age: 77,
      titleOrRole: 'Pakar Perangkai Kandaure Pusaka',
      location: 'Sangalla, Tana Toraja',
    },
    recordedBy: {
      name: 'Natalia Tandirerung',
      schoolOrAffiliation: 'Komunitas Seni Kriya Toraja',
      date: '18 Oktober 2024',
    },
    summary:
      'Kandaure adalah hiasan pusaka adat suku Toraja yang tersusun dari ribuan manik-manik kaca kecil berwarna merah, kuning emas, putih, dan hitam. Manik-manik ini diuntai secara presisi membentuk tabung berumbai segitiga yang anggun, dipakai sebagai selempang dada gadis bangsawan pada upacara syukur Rambu Tuka’ atau digantung di depan tiang Tongkonan.',
    philosophicalMeaning:
      'Melambangkan kemakmuran, pancaran cahaya rezeki yang melimpah, dan kemurnian martabat keluarga perempuan Toraja.',
    localTerms: [
      {
        term: 'Kandaure',
        meaning: 'Rangkaian manik-manik berumbai pusaka kebesaran upacara adat Toraja',
        language: 'Bahasa Toraja',
      },
      {
        term: 'Rambu Tuka’',
        meaning: 'Upacara sukacita adat (pernikahan, peresmian rumah adat Tongkonan, syukuran panen)',
        language: 'Bahasa Toraja',
      },
    ],
    toolsUsed: ['Manik-manik kaca aneka warna', 'Benang nilon/serat nanas kuat', 'Jarum untai tipis', 'Penyangga kayu melingkar'],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pembuatan Pola Corak Pa’sekkong Kandaure',
        description: 'Perajin menghitung urutan warna manik merah dan kuning membentuk pola kait berulang.',
      },
      {
        stepNumber: 2,
        title: 'Penguntaian Rumbai Segitiga',
        description: 'Untaian benang diikat simpul kuat pada cincin penyangga atas lalu dijuntaikan membentuk rumbai-rumbai indah.',
      },
    ],
    preservationAdvice:
      'Gunakan manik-manik berkualitas tinggi yang tidak mudah pecah agar kandaure dapat diwariskan hingga beberapa generasi keluarga.',
    estimatedEra: 'Abad ke-15',
    tags: ['kerajinan', 'toraja', 'kandaure', 'manik-manik', 'rambu-tuka'],
    likesCount: 136,
  },
  {
    id: 'exp-toraja-cerita-keluarga-banua-tongkonan',
    title: 'Petuah Nenek Indo’ Banua Tongkonan: Misa’ Kada Dipotuo, Pantan Kada Dipomate',
    subtitle: 'Nasihat Menjaga Persaudaraan Satu Rahim Tongkonan Menghadapi Badai Kehidupan',
    category: 'bahasa',
    province: 'Sulawesi Selatan',
    tribe: 'Toraja',
    regionDetail: 'Kecamatan Kesu’ & Tikala, Toraja Utara',
    elderNarrator: {
      name: "Nenek Indo' Lai' Sampe",
      age: 86,
      titleOrRole: 'Tetua Rahim Tongkonan Marinding',
      location: 'Kesu’, Toraja Utara',
    },
    recordedBy: {
      name: 'Salvinus Rantelino',
      schoolOrAffiliation: 'Aliansi Masyarakat Adat Toraja',
      date: '22 Oktober 2024',
    },
    summary:
      'Di teras rumah panggung Tongkonan saat senja berkabut, Nenek Indo’ selalu mengumpulkan cucu-cucunya yang hendak berangkat merantau ke Kalimantan, Papua, atau Jawa. Ia mengingatkan bahwa Tongkonan bukan sekadar kayu berukir, melainkan rahim asal-usul keluarga. Ke mana pun pergi, jangan pernah berselisih dengan saudara kandung: "Misa\' kada dipotuo, pantan kada dipomate" (seia sekata kita hidup mulia, berselisih paham kita celaka).',
    philosophicalMeaning:
      'Kekuatan keluarga besar adalah perisai paling kokoh menghadapi kepedihan hidup dan kegagalan di tanah perantauan.',
    localTerms: [
      {
        term: 'Tongkonan',
        meaning: 'Pusat rumah adat keluarga besar tempat bermusyawarah dan bertemunya seluruh keturunan',
        language: 'Bahasa Toraja',
      },
      {
        term: 'Misa’ Kada',
        meaning: 'Satu kata mufakat dalam ikatan kasih persaudaraan',
        language: 'Bahasa Toraja',
      },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Duduk Melingkar di Ambang Pintu Banua',
        description: 'Cucu-cucu mencium tangan tetua dan menerima segenggam beras suci sebagai simbol agar tidak lupa kampung halaman.',
      },
      {
        stepNumber: 2,
        title: 'Komitmen Menjaga Nama Baik Keluarga',
        description: 'Setiap anak rantau berikrar tidak akan membawa aib yang mencemari kehormatan ukiran Tongkonan leluhur.',
      },
    ],
    preservationAdvice:
      'Dokumentasikan cerita-cerita lisan para nenek Toraja agar ikatan anak cucu rantau dengan tanah leluhur tidak terputus zaman.',
    estimatedEra: 'Turun-temurun sejak era leluhur Puang Ri Kesu’',
    tags: ['falsafah', 'toraja', 'tongkonan', 'persaudaraan', 'rantau'],
    likesCount: 147,
  },
];
