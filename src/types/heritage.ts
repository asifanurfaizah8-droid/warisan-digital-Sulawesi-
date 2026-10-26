export type Province =
  | 'Sulawesi Selatan'
  | 'Sulawesi Barat'
  | 'Sulawesi Tengah'
  | 'Sulawesi Tenggara'
  | 'Sulawesi Utara'
  | 'Gorontalo';

export type Tribe =
  | 'Bugis'
  | 'Makassar'
  | 'Toraja'
  | 'Mandar'
  | 'Mamasa'
  | 'Kaili'
  | 'Pamona'
  | 'Tolaki'
  | 'Buton'
  | 'Muna'
  | 'Moronene'
  | 'Minahasa'
  | 'Bolaang Mongondow'
  | 'Sangihe'
  | 'Gorontalo';

export type HeritageCategory =
  | 'resep'
  | 'bahasa'
  | 'kerajinan'
  | 'tani_bahari'
  | 'permainan'
  | 'cerita_sejarah';

export interface LocalTerm {
  term: string;
  meaning: string;
  language: string;
  script?: string; // e.g. Lontara characters
  pronunciationTip?: string;
}

export interface StepOrNarrative {
  stepNumber?: number;
  title: string;
  description: string;
  photoHint?: string;
}

export type VerificationStatus =
  | 'terverifikasi' // Terverifikasi Sejarah & Ilmiah / WBTb Nasional
  | 'tradisi_lisan' // Tradisi Lisan Turun-Temurun
  | 'sastra_mitologi' // Sastra Epik & Mitologi Kuno (e.g. I La Galigo)
  | 'legenda_rakyat' // Folklor & Legenda Tutur Rakyat
  | 'butuh_verifikasi'; // Membutuhkan Riset Lapangan Tambahan

export type NarratorStatus =
  | 'tokoh_nyata' // Tokoh Nyata / Tokoh Adat / Pelaku Budaya
  | 'tokoh_sejarah_tercatat' // Tokoh Sejarah Tercatat di Arsip / Lontara
  | 'nama_disamarkan' // Nama Disamarkan demi Privasi Informan
  | 'tokoh_ilustratif'; // Personifikasi Ilustratif Tradisi

export type ReferenceType =
  | 'buku'
  | 'jurnal'
  | 'naskah_lontara'
  | 'arsip_pemerintah'
  | 'unesco_wbtb'
  | 'wawancara_adat'
  | 'museum';

export interface CulturalReference {
  type: ReferenceType;
  title: string;
  authorOrInstitution: string;
  year?: string | number;
  details?: string; // e.g. "Halaman 142-156", "Registrasi WBTb No. 201400145"
  url?: string;
}

export interface GeographicData {
  regency?: string; // Kabupaten / Kota
  district?: string; // Kecamatan
  village?: string; // Desa / Kelurahan
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface DocumentationMeta {
  recordingYear?: number | string;
  documentationDate?: string;
  recordingLocation?: string;
  recordingInstitution?: string;
  contributorName?: string;
  imageSourceOrLicense?: string;
}

export interface ErrorReport {
  id: string;
  heritageId: string;
  heritageTitle: string;
  reporterName: string;
  reporterContact?: string;
  errorType:
    | 'salah_ejaan'
    | 'sanggahan_sejarah'
    | 'saran_referensi'
    | 'kekeliruan_istilah'
    | 'lainnya';
  description: string;
  suggestedCorrection?: string;
  referenceSource?: string;
  submittedAt: string;
  status: 'menunggu_tinjauan' | 'diterima' | 'ditinjau';
}

export interface EditHistoryEntry {
  date: string;
  editorName: string;
  note?: string;
  fieldsChanged?: string[];
}

export interface HeritageItem {
  id: string;
  title: string;
  subtitle: string;
  category: HeritageCategory;
  province: Province;
  tribe: Tribe;
  regionDetail: string;
  verificationStatus?: VerificationStatus;
  epistemologicalNote?: string; // Catatan metodologis mengenai sifat informasi (fakta sejarah vs sastra mitologi vs tradisi tutur)
  elderNarrator: {
    name: string;
    age?: number;
    titleOrRole: string;
    location: string;
    status?: NarratorStatus; // Penjelasan status narasumber: Tokoh Nyata, Tokoh Sejarah, Nama Disamarkan, atau Ilustratif
  };
  recordedBy: {
    name: string;
    schoolOrAffiliation: string;
    date: string;
  };
  summary: string;
  philosophicalMeaning: string;
  localTerms: LocalTerm[];
  ingredientsOrMaterials?: string[];
  toolsUsed?: string[];
  stepsOrNarrative: StepOrNarrative[];
  preservationAdvice: string;
  estimatedEra: string;
  tags: string[];
  references?: CulturalReference[];
  geographicData?: GeographicData;
  documentationMeta?: DocumentationMeta;
  isUserCreated?: boolean;
  likesCount?: number;
  badge?: string;
  audioNoteDuration?: string;
  lastEditedBy?: string;
  lastEditedAt?: string;
  editCount?: number;
  editHistory?: EditHistoryEntry[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  tribe: Tribe;
  province: Province;
  category: HeritageCategory;
  difficulty?: 'dasar' | 'menengah' | 'mahir';
}
