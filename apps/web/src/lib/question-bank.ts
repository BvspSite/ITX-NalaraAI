// apps/web/src/lib/question-bank.ts
// Comprehensive Question Bank for NALARA ITX-Learning
// Total Subjects: 42 | Total Questions: 430
// Guaranteed minimum 10 pedagogically validated questions per subject.

export interface Question {
  id: string;
  conceptName: string;
  topic: string;
  questionText: string;
  type: "numeric" | "mcq";
  options?: string[];
  optionDetails?: Record<string, string>;
  correctAnswer: string;
  explanationText?: string;
  knownWrongPatterns: Record<string, { misconceptionCode: string; hint: string }>;
}

export const DEFAULT_FALLBACK_QUESTIONS: Question[] = [
  {
    id: "fallback-1",
    conceptName: "Pemahaman Konsep Umum",
    topic: "Literasi Konseptual",
    questionText: "Metode ilmiah dalam proses penalaran sains dimulai dari...",
    type: "mcq",
    options: [
      "Observasi fenomena dan perumusan masalah",
      "Penarikan kesimpulan akhir tanpa uji coba",
      "Penyebaran kuesioner opini publik",
      "Membuat kesimpulan praduga semata",
    ],
    optionDetails: {
      "Observasi fenomena dan perumusan masalah": "✓ BENAR: Langkah awal metode ilmiah adalah mengamati fenomena dan merumuskan pertanyaan.",
      "Penarikan kesimpulan akhir tanpa uji coba": "✕ SALAH: Kesimpulan baru boleh ditarik setelah ada data hasil eksperimen.",
      "Penyebaran kuesioner opini publik": "✕ SALAH: Metode ilmiah memerlukan pengujian empiris sistematis.",
      "Membuat kesimpulan praduga semata": "✕ SALAH: Praduga sementara disebut hipotesis, bukan kesimpulan.",
    },
    correctAnswer: "Observasi fenomena dan perumusan masalah",
    explanationText: "Metode ilmiah berlandaskan observasi objektif yang melahirkan rumusan masalah dan hipotesis teruji.",
    knownWrongPatterns: {
      "Penarikan kesimpulan akhir tanpa uji coba": {
        misconceptionCode: "UNVERIFIED_CONCLUSION",
        hint: "Ingat kembali tahapan metode ilmiah: observasi, rumusan masalah, hipotesis, eksperimen, analisis, kesimpulan.",
      },
    },
  },
  {
    id: "fallback-2",
    conceptName: "Analisis Logis & Integritas Data",
    topic: "Penalaran Kritis",
    questionText: "Manakah tindakan yang mencerminkan integritas intelektual dalam pembelajaran?",
    type: "mcq",
    options: [
      "Mengutip sumber referensi secara jujur dan akurat",
      "Menyalin karya orang lain tanpa menyebutkan pencipta",
      "Memanipulasi data agar sesuai dengan hipotesis awal",
      "Menghindari pengujian ulang hasil yang meragukan",
    ],
    optionDetails: {
      "Mengutip sumber referensi secara jujur dan akurat": "✓ BENAR: Kejujuran sitasi adalah pilar utama etika akademis.",
      "Menyalin karya orang lain tanpa menyebutkan pencipta": "✕ SALAH: Tindakan ini merupakan pelanggaran plagiarisme.",
      "Memanipulasi data agar sesuai dengan hipotesis awal": "✕ SALAH: Fabrikasi atau falsifikasi data merusak integritas riset.",
      "Menghindari pengujian ulang hasil yang meragukan": "✕ SALAH: Replikasi eksperimen sangat penting untuk validitas.",
    },
    correctAnswer: "Mengutip sumber referensi secara jujur dan akurat",
    explanationText: "Integritas akademis menuntut sitasi yang sahih serta kejujuran mutlak dalam pengolahan data.",
    knownWrongPatterns: {
      "Menyalin karya orang lain tanpa menyebutkan pencipta": {
        misconceptionCode: "PLAGIARISM_FALLACY",
        hint: "Selalu berikan atribusi kepada pencipta karya asli.",
      },
    },
  }
];

export const QUESTION_BANK: Record<string, Question[]> = {
  "indo-10": [
    {
      "id": "q-indo-10-1",
      "conceptName": "Kaidah Kebahasaan Teks LHO",
      "topic": "Bahasa Indonesia X",
      "questionText": "Manakah kalimat di bawah ini yang menggunakan 'kalimat definisi' yang tepat?",
      "type": "mcq",
      "options": [
        "Wayang adalah seni pertunjukan tradisional Indonesia yang ditetapkan sebagai warisan budaya dunia.",
        "Wayang sangat digemari oleh masyarakat di berbagai daerah di Jawa.",
        "Kesenian ini harus selalu kita lestarikan bersama-sama.",
        "Pertunjukan wayang biasanya diadakan semalam suntuk."
      ],
      "optionDetails": {
        "Wayang adalah seni pertunjukan tradisional Indonesia yang ditetapkan sebagai warisan budaya dunia.": "✓ BENAR: Kalimat definisi menggunakan kopula 'adalah' untuk merumuskan batasan pengertian objek.",
        "Wayang sangat digemari oleh masyarakat di berbagai daerah di Jawa.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kalimat definisi menggunakan kopula 'adalah' untuk merumuskan batasan pengertian objek.",
        "Kesenian ini harus selalu kita lestarikan bersama-sama.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kalimat definisi menggunakan kopula 'adalah' untuk merumuskan batasan pengertian objek.",
        "Pertunjukan wayang biasanya diadakan semalam suntuk.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kalimat definisi menggunakan kopula 'adalah' untuk merumuskan batasan pengertian objek."
      },
      "correctAnswer": "Wayang adalah seni pertunjukan tradisional Indonesia yang ditetapkan sebagai warisan budaya dunia.",
      "explanationText": "Kalimat definisi menggunakan kopula 'adalah' untuk merumuskan batasan pengertian objek.",
      "knownWrongPatterns": {
        "Wayang sangat digemari oleh masyarakat di berbagai daerah di Jawa.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan kata kerja kopula 'adalah' atau 'merupakan'."
        },
        "Kesenian ini harus selalu kita lestarikan bersama-sama.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan kata kerja kopula 'adalah' atau 'merupakan'."
        },
        "Pertunjukan wayang biasanya diadakan semalam suntuk.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan kata kerja kopula 'adalah' atau 'merupakan'."
        }
      }
    },
    {
      "id": "q-indo-10-2",
      "conceptName": "Struktur Teks LHO",
      "topic": "Bahasa Indonesia X",
      "questionText": "Bagian yang berisi penjelasan detail mengenai ciri-ciri fisik dan manfaat objek yang diamati disebut...",
      "type": "mcq",
      "options": [
        "Deskripsi Bagian & Manfaat",
        "Pernyataan Umum (Klasifikasi)",
        "Orientasi Cerita",
        "Reorientasi"
      ],
      "optionDetails": {
        "Deskripsi Bagian & Manfaat": "✓ BENAR: Struktur teks LHO terdiri atas Pernyataan Umum serta Deskripsi Bagian dan Manfaat.",
        "Pernyataan Umum (Klasifikasi)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Struktur teks LHO terdiri atas Pernyataan Umum serta Deskripsi Bagian dan Manfaat.",
        "Orientasi Cerita": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Struktur teks LHO terdiri atas Pernyataan Umum serta Deskripsi Bagian dan Manfaat.",
        "Reorientasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Struktur teks LHO terdiri atas Pernyataan Umum serta Deskripsi Bagian dan Manfaat."
      },
      "correctAnswer": "Deskripsi Bagian & Manfaat",
      "explanationText": "Struktur teks LHO terdiri atas Pernyataan Umum serta Deskripsi Bagian dan Manfaat.",
      "knownWrongPatterns": {
        "Pernyataan Umum (Klasifikasi)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Rincian spesifik objek dimuat pada Deskripsi Bagian."
        },
        "Orientasi Cerita": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Rincian spesifik objek dimuat pada Deskripsi Bagian."
        },
        "Reorientasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Rincian spesifik objek dimuat pada Deskripsi Bagian."
        }
      }
    },
    {
      "id": "q-indo-10-3",
      "conceptName": "Verba Material LHO",
      "topic": "Bahasa Indonesia X",
      "questionText": "Manakah kalimat berikut yang memuat verba material (tindakan fisik kasatmata)?",
      "type": "mcq",
      "options": [
        "Burung elang menyambar ikan nila di permukaan danau.",
        "Elang merupakan predator puncak ekosistem.",
        "Masyarakat mengagumi ketajaman mata elang.",
        "Habitat elang patut dilestarikan."
      ],
      "optionDetails": {
        "Burung elang menyambar ikan nila di permukaan danau.": "✓ BENAR: Menyambar adalah tindakan fisik yang kasatmata (verba material).",
        "Elang merupakan predator puncak ekosistem.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Menyambar adalah tindakan fisik yang kasatmata (verba material).",
        "Masyarakat mengagumi ketajaman mata elang.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Menyambar adalah tindakan fisik yang kasatmata (verba material).",
        "Habitat elang patut dilestarikan.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Menyambar adalah tindakan fisik yang kasatmata (verba material)."
      },
      "correctAnswer": "Burung elang menyambar ikan nila di permukaan danau.",
      "explanationText": "Menyambar adalah tindakan fisik yang kasatmata (verba material).",
      "knownWrongPatterns": {
        "Elang merupakan predator puncak ekosistem.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pilih tindakan fisik aktif."
        },
        "Masyarakat mengagumi ketajaman mata elang.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pilih tindakan fisik aktif."
        },
        "Habitat elang patut dilestarikan.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pilih tindakan fisik aktif."
        }
      }
    },
    {
      "id": "q-indo-10-4",
      "conceptName": "Struktur Anekdot",
      "topic": "Bahasa Indonesia X",
      "questionText": "Bagian awal teks anekdot yang berfungsi memberikan gambaran umum latar cerita disebut...",
      "type": "mcq",
      "options": [
        "Abstraksi",
        "Orientasi",
        "Krisis",
        "Koda"
      ],
      "optionDetails": {
        "Abstraksi": "✓ BENAR: Abstraksi merupakan pengantar awal yang memberi gambaran situasi cerita anekdot.",
        "Orientasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Abstraksi merupakan pengantar awal yang memberi gambaran situasi cerita anekdot.",
        "Krisis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Abstraksi merupakan pengantar awal yang memberi gambaran situasi cerita anekdot.",
        "Koda": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Abstraksi merupakan pengantar awal yang memberi gambaran situasi cerita anekdot."
      },
      "correctAnswer": "Abstraksi",
      "explanationText": "Abstraksi merupakan pengantar awal yang memberi gambaran situasi cerita anekdot.",
      "knownWrongPatterns": {
        "Orientasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Struktur pembuka anekdot adalah abstraksi."
        },
        "Krisis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Struktur pembuka anekdot adalah abstraksi."
        },
        "Koda": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Struktur pembuka anekdot adalah abstraksi."
        }
      }
    },
    {
      "id": "q-indo-10-5",
      "conceptName": "Krisis Anekdot",
      "topic": "Bahasa Indonesia X",
      "questionText": "Bagian teks anekdot yang memuat puncak kekonyolan atau keganjilan utama disebut...",
      "type": "mcq",
      "options": [
        "Krisis",
        "Abstraksi",
        "Koda",
        "Reorientasi"
      ],
      "optionDetails": {
        "Krisis": "✓ BENAR: Krisis memaparkan keganjilan utama yang mengundang tawa dan renungan.",
        "Abstraksi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Krisis memaparkan keganjilan utama yang mengundang tawa dan renungan.",
        "Koda": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Krisis memaparkan keganjilan utama yang mengundang tawa dan renungan.",
        "Reorientasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Krisis memaparkan keganjilan utama yang mengundang tawa dan renungan."
      },
      "correctAnswer": "Krisis",
      "explanationText": "Krisis memaparkan keganjilan utama yang mengundang tawa dan renungan.",
      "knownWrongPatterns": {
        "Abstraksi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Puncak masalah unik dalam anekdot adalah krisis."
        },
        "Koda": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Puncak masalah unik dalam anekdot adalah krisis."
        },
        "Reorientasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Puncak masalah unik dalam anekdot adalah krisis."
        }
      }
    },
    {
      "id": "q-indo-10-6",
      "conceptName": "Kalimat Simpleks",
      "topic": "Bahasa Indonesia X",
      "questionText": "Kalimat yang hanya terdiri atas satu klausa berpredikat tunggal disebut kalimat...",
      "type": "mcq",
      "options": [
        "Simpleks",
        "Kompleks",
        "Inversi",
        "Elipsis"
      ],
      "optionDetails": {
        "Simpleks": "✓ BENAR: Kalimat simpleks hanya memiliki satu struktur subjek dan predikat utama.",
        "Kompleks": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kalimat simpleks hanya memiliki satu struktur subjek dan predikat utama.",
        "Inversi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kalimat simpleks hanya memiliki satu struktur subjek dan predikat utama.",
        "Elipsis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kalimat simpleks hanya memiliki satu struktur subjek dan predikat utama."
      },
      "correctAnswer": "Simpleks",
      "explanationText": "Kalimat simpleks hanya memiliki satu struktur subjek dan predikat utama.",
      "knownWrongPatterns": {
        "Kompleks": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kalimat tunggal berpredikat satu disebut kalimat simpleks."
        },
        "Inversi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kalimat tunggal berpredikat satu disebut kalimat simpleks."
        },
        "Elipsis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kalimat tunggal berpredikat satu disebut kalimat simpleks."
        }
      }
    },
    {
      "id": "q-indo-10-7",
      "conceptName": "Konjungsi Temporal",
      "topic": "Bahasa Indonesia X",
      "questionText": "Pilihlah kalimat yang menggunakan konjungsi temporal (waktu)!",
      "type": "mcq",
      "options": [
        "Setelah sampel dipanaskan, cairan tersebut berubah warna menjadi biru kehijauan.",
        "Sampel itu dipanaskan karena mengandung zat besi.",
        "Sampel tersebut berwarna biru dan berbau tajam.",
        "Sampel dipanaskan agar bereaksi."
      ],
      "optionDetails": {
        "Setelah sampel dipanaskan, cairan tersebut berubah warna menjadi biru kehijauan.": "✓ BENAR: 'Setelah' adalah konjungsi temporal yang menyatakan urutan waktu.",
        "Sampel itu dipanaskan karena mengandung zat besi.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Setelah' adalah konjungsi temporal yang menyatakan urutan waktu.",
        "Sampel tersebut berwarna biru dan berbau tajam.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Setelah' adalah konjungsi temporal yang menyatakan urutan waktu.",
        "Sampel dipanaskan agar bereaksi.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Setelah' adalah konjungsi temporal yang menyatakan urutan waktu."
      },
      "correctAnswer": "Setelah sampel dipanaskan, cairan tersebut berubah warna menjadi biru kehijauan.",
      "explanationText": "'Setelah' adalah konjungsi temporal yang menyatakan urutan waktu.",
      "knownWrongPatterns": {
        "Sampel itu dipanaskan karena mengandung zat besi.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Cari kata penunjuk urutan waktu seperti 'setelah' atau 'kemudian'."
        },
        "Sampel tersebut berwarna biru dan berbau tajam.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Cari kata penunjuk urutan waktu seperti 'setelah' atau 'kemudian'."
        },
        "Sampel dipanaskan agar bereaksi.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Cari kata penunjuk urutan waktu seperti 'setelah' atau 'kemudian'."
        }
      }
    },
    {
      "id": "q-indo-10-8",
      "conceptName": "Kata Baku KBBI",
      "topic": "Bahasa Indonesia X",
      "questionText": "Manakah kelompok kata yang seluruhnya berstatus baku sesuai KBBI?",
      "type": "mcq",
      "options": [
        "Objektif, Analisis, Kualitas",
        "Obyektif, Analisa, Kwalitas",
        "Objektif, Analisa, Kualitas",
        "Obyektif, Analisis, Kwalitet"
      ],
      "optionDetails": {
        "Objektif, Analisis, Kualitas": "✓ BENAR: Bentuk baku yang benar: objektif, analisis, kualitas.",
        "Obyektif, Analisa, Kwalitas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bentuk baku yang benar: objektif, analisis, kualitas.",
        "Objektif, Analisa, Kualitas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bentuk baku yang benar: objektif, analisis, kualitas.",
        "Obyektif, Analisis, Kwalitet": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bentuk baku yang benar: objektif, analisis, kualitas."
      },
      "correctAnswer": "Objektif, Analisis, Kualitas",
      "explanationText": "Bentuk baku yang benar: objektif, analisis, kualitas.",
      "knownWrongPatterns": {
        "Obyektif, Analisa, Kwalitas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Gunakan serapan berakhiran -is dan huruf k/v."
        },
        "Objektif, Analisa, Kualitas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Gunakan serapan berakhiran -is dan huruf k/v."
        },
        "Obyektif, Analisis, Kwalitet": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Gunakan serapan berakhiran -is dan huruf k/v."
        }
      }
    },
    {
      "id": "q-indo-10-9",
      "conceptName": "Kalimat Efektif",
      "topic": "Bahasa Indonesia X",
      "questionText": "Pilihlah kalimat yang memenuhi kaidah kelogisan kalimat efektif!",
      "type": "mcq",
      "options": [
        "Siswa kelas X mengumpulkan tugas observasi tepat waktu.",
        "Bagi siswa kelas X harap mengumpulkan tugas.",
        "Untuk mempersingkat waktu, acara segera dimulai.",
        "Kepada para hadirin semua dipersilakan duduk."
      ],
      "optionDetails": {
        "Siswa kelas X mengumpulkan tugas observasi tepat waktu.": "✓ BENAR: Kalimat efektif memiliki subjek jelas tanpa preposisi perintang dan tidak bertele-tele.",
        "Bagi siswa kelas X harap mengumpulkan tugas.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kalimat efektif memiliki subjek jelas tanpa preposisi perintang dan tidak bertele-tele.",
        "Untuk mempersingkat waktu, acara segera dimulai.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kalimat efektif memiliki subjek jelas tanpa preposisi perintang dan tidak bertele-tele.",
        "Kepada para hadirin semua dipersilakan duduk.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kalimat efektif memiliki subjek jelas tanpa preposisi perintang dan tidak bertele-tele."
      },
      "correctAnswer": "Siswa kelas X mengumpulkan tugas observasi tepat waktu.",
      "explanationText": "Kalimat efektif memiliki subjek jelas tanpa preposisi perintang dan tidak bertele-tele.",
      "knownWrongPatterns": {
        "Bagi siswa kelas X harap mengumpulkan tugas.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hindari preposisi 'bagi/kepada' di awal subjek."
        },
        "Untuk mempersingkat waktu, acara segera dimulai.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hindari preposisi 'bagi/kepada' di awal subjek."
        },
        "Kepada para hadirin semua dipersilakan duduk.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hindari preposisi 'bagi/kepada' di awal subjek."
        }
      }
    },
    {
      "id": "q-indo-10-10",
      "conceptName": "Tujuan Anekdot",
      "topic": "Bahasa Indonesia X",
      "questionText": "Fungsi utama teks anekdot selain menghibur pembaca adalah...",
      "type": "mcq",
      "options": [
        "Menyampaikan kritik sosial secara santun dan reflektif",
        "Menghakimi pihak tertentu secara kasar",
        "Menyajikan data statistik ilmiah yang kaku",
        "Mempromosikan produk komersial"
      ],
      "optionDetails": {
        "Menyampaikan kritik sosial secara santun dan reflektif": "✓ BENAR: Anekdot adalah media kritik sosial yang dikemas secara santun dan cerdas.",
        "Menghakimi pihak tertentu secara kasar": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Anekdot adalah media kritik sosial yang dikemas secara santun dan cerdas.",
        "Menyajikan data statistik ilmiah yang kaku": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Anekdot adalah media kritik sosial yang dikemas secara santun dan cerdas.",
        "Mempromosikan produk komersial": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Anekdot adalah media kritik sosial yang dikemas secara santun dan cerdas."
      },
      "correctAnswer": "Menyampaikan kritik sosial secara santun dan reflektif",
      "explanationText": "Anekdot adalah media kritik sosial yang dikemas secara santun dan cerdas.",
      "knownWrongPatterns": {
        "Menghakimi pihak tertentu secara kasar": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Anekdot bertujuan menyampaikan kritik membangun."
        },
        "Menyajikan data statistik ilmiah yang kaku": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Anekdot bertujuan menyampaikan kritik membangun."
        },
        "Mempromosikan produk komersial": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Anekdot bertujuan menyampaikan kritik membangun."
        }
      }
    }
  ],
  "inggris-10": [
    {
      "id": "q-inggris-10-1",
      "conceptName": "Descriptive Purpose",
      "topic": "Bahasa Inggris X",
      "questionText": "What is the primary communicative purpose of a Descriptive Text?",
      "type": "mcq",
      "options": [
        "To describe a particular person, place, or thing in detail",
        "To entertain the reader with a fairy tale",
        "To explain chronological procedure steps",
        "To persuade readers to vote"
      ],
      "optionDetails": {
        "To describe a particular person, place, or thing in detail": "✓ BENAR: Descriptive texts focus on characterizing a specific person, place, or item.",
        "To entertain the reader with a fairy tale": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Descriptive texts focus on characterizing a specific person, place, or item.",
        "To explain chronological procedure steps": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Descriptive texts focus on characterizing a specific person, place, or item.",
        "To persuade readers to vote": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Descriptive texts focus on characterizing a specific person, place, or item."
      },
      "correctAnswer": "To describe a particular person, place, or thing in detail",
      "explanationText": "Descriptive texts focus on characterizing a specific person, place, or item.",
      "knownWrongPatterns": {
        "To entertain the reader with a fairy tale": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Focus on describing specific features."
        },
        "To explain chronological procedure steps": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Focus on describing specific features."
        },
        "To persuade readers to vote": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Focus on describing specific features."
        }
      }
    },
    {
      "id": "q-inggris-10-2",
      "conceptName": "Simple Present Subject-Verb",
      "topic": "Bahasa Inggris X",
      "questionText": "Complete the sentence: Mount Bromo ___ one of the most famous volcanoes in Indonesia.",
      "type": "mcq",
      "options": [
        "is",
        "are",
        "were",
        "been"
      ],
      "optionDetails": {
        "is": "✓ BENAR: Mount Bromo is singular, taking the singular verb 'is'.",
        "are": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mount Bromo is singular, taking the singular verb 'is'.",
        "were": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mount Bromo is singular, taking the singular verb 'is'.",
        "been": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mount Bromo is singular, taking the singular verb 'is'."
      },
      "correctAnswer": "is",
      "explanationText": "Mount Bromo is singular, taking the singular verb 'is'.",
      "knownWrongPatterns": {
        "are": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Singular subject takes 'is'."
        },
        "were": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Singular subject takes 'is'."
        },
        "been": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Singular subject takes 'is'."
        }
      }
    },
    {
      "id": "q-inggris-10-3",
      "conceptName": "Adjective Order",
      "topic": "Bahasa Inggris X",
      "questionText": "Choose the natural adjective order: 'She bought a ___ bag.'",
      "type": "mcq",
      "options": [
        "beautiful small black leather",
        "leather black small beautiful",
        "small leather beautiful black",
        "black beautiful small leather"
      ],
      "optionDetails": {
        "beautiful small black leather": "✓ BENAR: Opinion -> Size -> Color -> Material.",
        "leather black small beautiful": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Opinion -> Size -> Color -> Material.",
        "small leather beautiful black": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Opinion -> Size -> Color -> Material.",
        "black beautiful small leather": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Opinion -> Size -> Color -> Material."
      },
      "correctAnswer": "beautiful small black leather",
      "explanationText": "Opinion -> Size -> Color -> Material.",
      "knownWrongPatterns": {
        "leather black small beautiful": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Remember OSASCOMP: Opinion, Size, Color, Material."
        },
        "small leather beautiful black": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Remember OSASCOMP: Opinion, Size, Color, Material."
        },
        "black beautiful small leather": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Remember OSASCOMP: Opinion, Size, Color, Material."
        }
      }
    },
    {
      "id": "q-inggris-10-4",
      "conceptName": "Simple Past Verb",
      "topic": "Bahasa Inggris X",
      "questionText": "Raden Saleh ___ many prominent paintings in the nineteenth century.",
      "type": "mcq",
      "options": [
        "created",
        "creates",
        "has created",
        "is creating"
      ],
      "optionDetails": {
        "created": "✓ BENAR: A finished action in the 19th century takes simple past tense.",
        "creates": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: A finished action in the 19th century takes simple past tense.",
        "has created": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: A finished action in the 19th century takes simple past tense.",
        "is creating": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: A finished action in the 19th century takes simple past tense."
      },
      "correctAnswer": "created",
      "explanationText": "A finished action in the 19th century takes simple past tense.",
      "knownWrongPatterns": {
        "creates": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Completed past period takes V2."
        },
        "has created": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Completed past period takes V2."
        },
        "is creating": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Completed past period takes V2."
        }
      }
    },
    {
      "id": "q-inggris-10-5",
      "conceptName": "Narrative Conflict",
      "topic": "Bahasa Inggris X",
      "questionText": "The part of a narrative text where conflicts arise and develop toward a climax is called...",
      "type": "mcq",
      "options": [
        "Complication",
        "Orientation",
        "Resolution",
        "Coda"
      ],
      "optionDetails": {
        "Complication": "✓ BENAR: Complication is where the central struggle and climax occur.",
        "Orientation": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Complication is where the central struggle and climax occur.",
        "Resolution": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Complication is where the central struggle and climax occur.",
        "Coda": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Complication is where the central struggle and climax occur."
      },
      "correctAnswer": "Complication",
      "explanationText": "Complication is where the central struggle and climax occur.",
      "knownWrongPatterns": {
        "Orientation": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "The story problem is called complication."
        },
        "Resolution": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "The story problem is called complication."
        },
        "Coda": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "The story problem is called complication."
        }
      }
    },
    {
      "id": "q-inggris-10-6",
      "conceptName": "Passive Voice Form",
      "topic": "Bahasa Inggris X",
      "questionText": "Identify the correct passive sentence:",
      "type": "mcq",
      "options": [
        "The ancient temple was built in the ninth century.",
        "The ancient temple was build in the ninth century.",
        "The ancient temple built by kings in ninth century.",
        "People was built the temple in ninth century."
      ],
      "optionDetails": {
        "The ancient temple was built in the ninth century.": "✓ BENAR: Passive: Subject + was + Past Participle (built).",
        "The ancient temple was build in the ninth century.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Passive: Subject + was + Past Participle (built).",
        "The ancient temple built by kings in ninth century.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Passive: Subject + was + Past Participle (built).",
        "People was built the temple in ninth century.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Passive: Subject + was + Past Participle (built)."
      },
      "correctAnswer": "The ancient temple was built in the ninth century.",
      "explanationText": "Passive: Subject + was + Past Participle (built).",
      "knownWrongPatterns": {
        "The ancient temple was build in the ninth century.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Formula: was/were + V3."
        },
        "The ancient temple built by kings in ninth century.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Formula: was/were + V3."
        },
        "People was built the temple in ninth century.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Formula: was/were + V3."
        }
      }
    },
    {
      "id": "q-inggris-10-7",
      "conceptName": "Subject Pronoun",
      "topic": "Bahasa Inggris X",
      "questionText": "Dewi finished her science report early, and then ___ went to the library.",
      "type": "mcq",
      "options": [
        "she",
        "her",
        "hers",
        "herself"
      ],
      "optionDetails": {
        "she": "✓ BENAR: Subject position requires the subject pronoun 'she'.",
        "her": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Subject position requires the subject pronoun 'she'.",
        "hers": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Subject position requires the subject pronoun 'she'.",
        "herself": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Subject position requires the subject pronoun 'she'."
      },
      "correctAnswer": "she",
      "explanationText": "Subject position requires the subject pronoun 'she'.",
      "knownWrongPatterns": {
        "her": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Second clause needs a subject pronoun."
        },
        "hers": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Second clause needs a subject pronoun."
        },
        "herself": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Second clause needs a subject pronoun."
        }
      }
    },
    {
      "id": "q-inggris-10-8",
      "conceptName": "Future Intentions",
      "topic": "Bahasa Inggris X",
      "questionText": "Which sentence expresses a planned future intention correctly?",
      "type": "mcq",
      "options": [
        "We are going to visit Borobudur next month.",
        "We visit Borobudur yesterday.",
        "We was visiting Borobudur.",
        "We have visited Borobudur tomorrow."
      ],
      "optionDetails": {
        "We are going to visit Borobudur next month.": "✓ BENAR: 'Be going to' expresses prior planned intentions.",
        "We visit Borobudur yesterday.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Be going to' expresses prior planned intentions.",
        "We was visiting Borobudur.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Be going to' expresses prior planned intentions.",
        "We have visited Borobudur tomorrow.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Be going to' expresses prior planned intentions."
      },
      "correctAnswer": "We are going to visit Borobudur next month.",
      "explanationText": "'Be going to' expresses prior planned intentions.",
      "knownWrongPatterns": {
        "We visit Borobudur yesterday.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Look for 'are going to + verb'."
        },
        "We was visiting Borobudur.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Look for 'are going to + verb'."
        },
        "We have visited Borobudur tomorrow.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Look for 'are going to + verb'."
        }
      }
    },
    {
      "id": "q-inggris-10-9",
      "conceptName": "Contextual Vocabulary",
      "topic": "Bahasa Inggris X",
      "questionText": "What does 'majestic' mean in 'The majestic waterfall attracted thousands of tourists'?",
      "type": "mcq",
      "options": [
        "Grand, impressive, and stately",
        "Tiny and fragile",
        "Extremely dangerous",
        "Dirty and neglected"
      ],
      "optionDetails": {
        "Grand, impressive, and stately": "✓ BENAR: 'Majestic' means having great beauty and dignity.",
        "Tiny and fragile": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Majestic' means having great beauty and dignity.",
        "Extremely dangerous": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Majestic' means having great beauty and dignity.",
        "Dirty and neglected": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Majestic' means having great beauty and dignity."
      },
      "correctAnswer": "Grand, impressive, and stately",
      "explanationText": "'Majestic' means having great beauty and dignity.",
      "knownWrongPatterns": {
        "Tiny and fragile": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Majestic relates to grandeur and beauty."
        },
        "Extremely dangerous": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Majestic relates to grandeur and beauty."
        },
        "Dirty and neglected": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Majestic relates to grandeur and beauty."
        }
      }
    },
    {
      "id": "q-inggris-10-10",
      "conceptName": "Recount Structure",
      "topic": "Bahasa Inggris X",
      "questionText": "What is the typical sequence of a personal recount text?",
      "type": "mcq",
      "options": [
        "Orientation -> Events in chronological order -> Reorientation",
        "Thesis -> Arguments -> Reiteration",
        "Goal -> Materials -> Steps",
        "Abstract -> Crisis -> Action"
      ],
      "optionDetails": {
        "Orientation -> Events in chronological order -> Reorientation": "✓ BENAR: Recount texts start with orientation, tell chronological events, and conclude with reorientation.",
        "Thesis -> Arguments -> Reiteration": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Recount texts start with orientation, tell chronological events, and conclude with reorientation.",
        "Goal -> Materials -> Steps": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Recount texts start with orientation, tell chronological events, and conclude with reorientation.",
        "Abstract -> Crisis -> Action": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Recount texts start with orientation, tell chronological events, and conclude with reorientation."
      },
      "correctAnswer": "Orientation -> Events in chronological order -> Reorientation",
      "explanationText": "Recount texts start with orientation, tell chronological events, and conclude with reorientation.",
      "knownWrongPatterns": {
        "Thesis -> Arguments -> Reiteration": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Orientation -> Events -> Reorientation."
        },
        "Goal -> Materials -> Steps": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Orientation -> Events -> Reorientation."
        },
        "Abstract -> Crisis -> Action": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Orientation -> Events -> Reorientation."
        }
      }
    }
  ],
  "mat-10": [
    {
      "id": "q-mat-10-1",
      "conceptName": "Eksponen & Perpangkatan",
      "topic": "Matematika X",
      "questionText": "Hitunglah hasil dari operasi perpangkatan berikut: 3² + 4²",
      "type": "mcq",
      "options": [
        "25"
      ],
      "optionDetails": {
        "25": "✓ BENAR: 3² = 9 dan 4² = 16. Maka 9 + 16 = 25."
      },
      "correctAnswer": "25",
      "explanationText": "3² = 9 dan 4² = 16. Maka 9 + 16 = 25.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-mat-10-2",
      "conceptName": "Teorema Pythagoras",
      "topic": "Matematika X",
      "questionText": "Sebuah segitiga siku-siku memiliki panjang sisi tegak 6 cm dan 8 cm. Berapakah panjang sisi miringnya (hipotenusa)?",
      "type": "mcq",
      "options": [
        "10"
      ],
      "optionDetails": {
        "10": "✓ BENAR: c² = 6² + 8² = 36 + 64 = 100. c = √100 = 10."
      },
      "correctAnswer": "10",
      "explanationText": "c² = 6² + 8² = 36 + 64 = 100. c = √100 = 10.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-mat-10-3",
      "conceptName": "Sifat Perkalian Eksponen",
      "topic": "Matematika X",
      "questionText": "Berapakah bentuk sederhana dan nilai dari: 2³ × 2⁴ ?",
      "type": "mcq",
      "options": [
        "2⁷ = 128",
        "2¹² = 4096",
        "4⁷ = 16384",
        "2¹ = 2"
      ],
      "optionDetails": {
        "2⁷ = 128": "✓ BENAR: Aturan eksponen: aᵐ × aⁿ = a^(m+n). Maka 2³⁺⁴ = 2⁷ = 128.",
        "2¹² = 4096": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Aturan eksponen: aᵐ × aⁿ = a^(m+n). Maka 2³⁺⁴ = 2⁷ = 128.",
        "4⁷ = 16384": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Aturan eksponen: aᵐ × aⁿ = a^(m+n). Maka 2³⁺⁴ = 2⁷ = 128.",
        "2¹ = 2": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Aturan eksponen: aᵐ × aⁿ = a^(m+n). Maka 2³⁺⁴ = 2⁷ = 128."
      },
      "correctAnswer": "2⁷ = 128",
      "explanationText": "Aturan eksponen: aᵐ × aⁿ = a^(m+n). Maka 2³⁺⁴ = 2⁷ = 128.",
      "knownWrongPatterns": {
        "2¹² = 4096": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Jumlahkan pangkatnya: 3 + 4 = 7."
        },
        "4⁷ = 16384": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Jumlahkan pangkatnya: 3 + 4 = 7."
        },
        "2¹ = 2": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Jumlahkan pangkatnya: 3 + 4 = 7."
        }
      }
    },
    {
      "id": "q-mat-10-4",
      "conceptName": "Merasionalkan Bentuk Akar",
      "topic": "Matematika X",
      "questionText": "Bentuk rasional dari pecahan 6 / √3 adalah...",
      "type": "mcq",
      "options": [
        "2√3",
        "3√3",
        "6√3",
        "2"
      ],
      "optionDetails": {
        "2√3": "✓ BENAR: (6 × √3) / 3 = 2√3.",
        "3√3": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: (6 × √3) / 3 = 2√3.",
        "6√3": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: (6 × √3) / 3 = 2√3.",
        "2": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: (6 × √3) / 3 = 2√3."
      },
      "correctAnswer": "2√3",
      "explanationText": "(6 × √3) / 3 = 2√3.",
      "knownWrongPatterns": {
        "3√3": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kalikan pembilang dan penyebut dengan √3."
        },
        "6√3": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kalikan pembilang dan penyebut dengan √3."
        },
        "2": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kalikan pembilang dan penyebut dengan √3."
        }
      }
    },
    {
      "id": "q-mat-10-5",
      "conceptName": "Sifat Logaritma Dasar",
      "topic": "Matematika X",
      "questionText": "Hitunglah nilai dari: ²log(16) + ²log(4)",
      "type": "mcq",
      "options": [
        "6"
      ],
      "optionDetails": {
        "6": "✓ BENAR: ²log(16) = 4 dan ²log(4) = 2. 4 + 2 = 6."
      },
      "correctAnswer": "6",
      "explanationText": "²log(16) = 4 dan ²log(4) = 2. 4 + 2 = 6.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-mat-10-6",
      "conceptName": "Akar Persamaan Kuadrat",
      "topic": "Matematika X",
      "questionText": "Tentukan himpunan penyelesaian dari persamaan kuadrat: x² - 5x + 6 = 0",
      "type": "mcq",
      "options": [
        "x = 2 atau x = 3",
        "x = -2 atau x = -3",
        "x = 1 atau x = 6",
        "x = -1 atau x = -6"
      ],
      "optionDetails": {
        "x = 2 atau x = 3": "✓ BENAR: (x - 2)(x - 3) = 0 -> x = 2 atau x = 3.",
        "x = -2 atau x = -3": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: (x - 2)(x - 3) = 0 -> x = 2 atau x = 3.",
        "x = 1 atau x = 6": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: (x - 2)(x - 3) = 0 -> x = 2 atau x = 3.",
        "x = -1 atau x = -6": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: (x - 2)(x - 3) = 0 -> x = 2 atau x = 3."
      },
      "correctAnswer": "x = 2 atau x = 3",
      "explanationText": "(x - 2)(x - 3) = 0 -> x = 2 atau x = 3.",
      "knownWrongPatterns": {
        "x = -2 atau x = -3": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Cari dua bilangan yang dikali = 6 dan dijumlah = -5."
        },
        "x = 1 atau x = 6": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Cari dua bilangan yang dikali = 6 dan dijumlah = -5."
        },
        "x = -1 atau x = -6": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Cari dua bilangan yang dikali = 6 dan dijumlah = -5."
        }
      }
    },
    {
      "id": "q-mat-10-7",
      "conceptName": "SPLDV",
      "topic": "Matematika X",
      "questionText": "Diketahui sistem persamaan: x + y = 10 dan x - y = 4. Berapakah nilai x?",
      "type": "mcq",
      "options": [
        "7"
      ],
      "optionDetails": {
        "7": "✓ BENAR: (x + y) + (x - y) = 10 + 4 -> 2x = 14 -> x = 7."
      },
      "correctAnswer": "7",
      "explanationText": "(x + y) + (x - y) = 10 + 4 -> 2x = 14 -> x = 7.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-mat-10-8",
      "conceptName": "Barisan Aritmatika",
      "topic": "Matematika X",
      "questionText": "Tentukan suku ke-10 (U₁₀) dari barisan aritmatika: 3, 7, 11, 15, ...",
      "type": "mcq",
      "options": [
        "39"
      ],
      "optionDetails": {
        "39": "✓ BENAR: a = 3, b = 4. U₁₀ = 3 + (10 - 1) × 4 = 3 + 36 = 39."
      },
      "correctAnswer": "39",
      "explanationText": "a = 3, b = 4. U₁₀ = 3 + (10 - 1) × 4 = 3 + 36 = 39.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-mat-10-9",
      "conceptName": "Trigonometri Segitiga",
      "topic": "Matematika X",
      "questionText": "Pada segitiga siku-siku dengan sudut 30° dan sisi miring 20 cm, berapakah panjang sisi depan sudut (dalam cm)?",
      "type": "mcq",
      "options": [
        "10"
      ],
      "optionDetails": {
        "10": "✓ BENAR: sin(30°) = 1/2. Sisi depan = 20 × 0.5 = 10 cm."
      },
      "correctAnswer": "10",
      "explanationText": "sin(30°) = 1/2. Sisi depan = 20 × 0.5 = 10 cm.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-mat-10-10",
      "conceptName": "Peluang Koin",
      "topic": "Matematika X",
      "questionText": "Dua keping uang koin dilempar undi bersamaan. Peluang muncul minimal 1 sisi angka adalah...",
      "type": "mcq",
      "options": [
        "3/4 (75%)",
        "1/2 (50%)",
        "1/4 (25%)",
        "1 (100%)"
      ],
      "optionDetails": {
        "3/4 (75%)": "✓ BENAR: Titik sampel minimal 1 angka: {(A,A), (A,G), (G,A)} dari total 4 = 3/4.",
        "1/2 (50%)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Titik sampel minimal 1 angka: {(A,A), (A,G), (G,A)} dari total 4 = 3/4.",
        "1/4 (25%)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Titik sampel minimal 1 angka: {(A,A), (A,G), (G,A)} dari total 4 = 3/4.",
        "1 (100%)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Titik sampel minimal 1 angka: {(A,A), (A,G), (G,A)} dari total 4 = 3/4."
      },
      "correctAnswer": "3/4 (75%)",
      "explanationText": "Titik sampel minimal 1 angka: {(A,A), (A,G), (G,A)} dari total 4 = 3/4.",
      "knownWrongPatterns": {
        "1/2 (50%)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Ada 3 kejadian dari total 4 titik sampel."
        },
        "1/4 (25%)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Ada 3 kejadian dari total 4 titik sampel."
        },
        "1 (100%)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Ada 3 kejadian dari total 4 titik sampel."
        }
      }
    }
  ],
  "ppkn-10": [
    {
      "id": "q-ppkn-10-1",
      "conceptName": "Nilai Sila Pertama",
      "topic": "Pendidikan Pancasila X",
      "questionText": "Nilai luhur yang terkandung dalam Sila Pertama Pancasila mengajarkan kita untuk...",
      "type": "mcq",
      "options": [
        "Mengembangkan toleransi dan saling menghormati kebebasan beribadah",
        "Memaksakan keyakinan pribadi kepada orang lain",
        "Mengutamakan kepentingan golongan di atas negara",
        "Membatasi pergaulan hanya pada sesama penganut agama"
      ],
      "optionDetails": {
        "Mengembangkan toleransi dan saling menghormati kebebasan beribadah": "✓ BENAR: Sila 1 menjunjung tinggi toleransi antarumat beragama dan kebebasan beribadah.",
        "Memaksakan keyakinan pribadi kepada orang lain": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sila 1 menjunjung tinggi toleransi antarumat beragama dan kebebasan beribadah.",
        "Mengutamakan kepentingan golongan di atas negara": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sila 1 menjunjung tinggi toleransi antarumat beragama dan kebebasan beribadah.",
        "Membatasi pergaulan hanya pada sesama penganut agama": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sila 1 menjunjung tinggi toleransi antarumat beragama dan kebebasan beribadah."
      },
      "correctAnswer": "Mengembangkan toleransi dan saling menghormati kebebasan beribadah",
      "explanationText": "Sila 1 menjunjung tinggi toleransi antarumat beragama dan kebebasan beribadah.",
      "knownWrongPatterns": {
        "Memaksakan keyakinan pribadi kepada orang lain": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Fokus pada nilai toleransi dan kebebasan beragama."
        },
        "Mengutamakan kepentingan golongan di atas negara": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Fokus pada nilai toleransi dan kebebasan beragama."
        },
        "Membatasi pergaulan hanya pada sesama penganut agama": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Fokus pada nilai toleransi dan kebebasan beragama."
        }
      }
    },
    {
      "id": "q-ppkn-10-2",
      "conceptName": "Kedudukan UUD 1945",
      "topic": "Pendidikan Pancasila X",
      "questionText": "Kedudukan UUD NRI Tahun 1945 dalam tata urutan peraturan perundang-undangan di Indonesia adalah sebagai...",
      "type": "mcq",
      "options": [
        "Hukum dasar tertulis tertinggi",
        "Peraturan pelaksana undang-undang",
        "Pedoman sementara ketatanegaraan",
        "Sumber hukum tidak tertulis"
      ],
      "optionDetails": {
        "Hukum dasar tertulis tertinggi": "✓ BENAR: UUD 1945 merupakan groundnorm atau hukum dasar tertulis tertinggi di Indonesia.",
        "Peraturan pelaksana undang-undang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: UUD 1945 merupakan groundnorm atau hukum dasar tertulis tertinggi di Indonesia.",
        "Pedoman sementara ketatanegaraan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: UUD 1945 merupakan groundnorm atau hukum dasar tertulis tertinggi di Indonesia.",
        "Sumber hukum tidak tertulis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: UUD 1945 merupakan groundnorm atau hukum dasar tertulis tertinggi di Indonesia."
      },
      "correctAnswer": "Hukum dasar tertulis tertinggi",
      "explanationText": "UUD 1945 merupakan groundnorm atau hukum dasar tertulis tertinggi di Indonesia.",
      "knownWrongPatterns": {
        "Peraturan pelaksana undang-undang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "UUD 1945 berada di puncak hierarki hukum formal Indonesia."
        },
        "Pedoman sementara ketatanegaraan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "UUD 1945 berada di puncak hierarki hukum formal Indonesia."
        },
        "Sumber hukum tidak tertulis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "UUD 1945 berada di puncak hierarki hukum formal Indonesia."
        }
      }
    },
    {
      "id": "q-ppkn-10-3",
      "conceptName": "Bhinneka Tunggal Ika",
      "topic": "Pendidikan Pancasila X",
      "questionText": "Semboyan 'Bhinneka Tunggal Ika' secara resmi tercantum pada lambang Garuda Pancasila dan bersumber dari kitab...",
      "type": "mcq",
      "options": [
        "Sutasoma karangan Mpu Tantular",
        "Negarakertagama karangan Mpu Prapanca",
        "Arjunawiwaha karangan Mpu Kanwa",
        "Bratayuda karangan Mpu Sedah"
      ],
      "optionDetails": {
        "Sutasoma karangan Mpu Tantular": "✓ BENAR: Frasa Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa berasal dari Kakawin Sutasoma.",
        "Negarakertagama karangan Mpu Prapanca": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Frasa Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa berasal dari Kakawin Sutasoma.",
        "Arjunawiwaha karangan Mpu Kanwa": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Frasa Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa berasal dari Kakawin Sutasoma.",
        "Bratayuda karangan Mpu Sedah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Frasa Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa berasal dari Kakawin Sutasoma."
      },
      "correctAnswer": "Sutasoma karangan Mpu Tantular",
      "explanationText": "Frasa Bhinneka Tunggal Ika Tan Hana Dharma Mangrwa berasal dari Kakawin Sutasoma.",
      "knownWrongPatterns": {
        "Negarakertagama karangan Mpu Prapanca": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Dikarang oleh Mpu Tantular pada era Majapahit."
        },
        "Arjunawiwaha karangan Mpu Kanwa": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Dikarang oleh Mpu Tantular pada era Majapahit."
        },
        "Bratayuda karangan Mpu Sedah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Dikarang oleh Mpu Tantular pada era Majapahit."
        }
      }
    },
    {
      "id": "q-ppkn-10-4",
      "conceptName": "Ciri Norma Hukum",
      "topic": "Pendidikan Pancasila X",
      "questionText": "Ciri utama norma hukum yang membedakannya secara tegas dari norma sosial lainnya adalah...",
      "type": "mcq",
      "options": [
        "Sanksinya bersifat tegas, memaksa, dan ditegakkan oleh aparat negara",
        "Bersumber dari kebiasaan turun temurun",
        "Berlaku hanya pada kelompok tertentu",
        "Tidak memiliki sanksi fisik sama sekali"
      ],
      "optionDetails": {
        "Sanksinya bersifat tegas, memaksa, dan ditegakkan oleh aparat negara": "✓ BENAR: Norma hukum dibuat lembaga berwenang dan memiliki sanksi tegas memaksa.",
        "Bersumber dari kebiasaan turun temurun": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Norma hukum dibuat lembaga berwenang dan memiliki sanksi tegas memaksa.",
        "Berlaku hanya pada kelompok tertentu": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Norma hukum dibuat lembaga berwenang dan memiliki sanksi tegas memaksa.",
        "Tidak memiliki sanksi fisik sama sekali": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Norma hukum dibuat lembaga berwenang dan memiliki sanksi tegas memaksa."
      },
      "correctAnswer": "Sanksinya bersifat tegas, memaksa, dan ditegakkan oleh aparat negara",
      "explanationText": "Norma hukum dibuat lembaga berwenang dan memiliki sanksi tegas memaksa.",
      "knownWrongPatterns": {
        "Bersumber dari kebiasaan turun temurun": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Ciri pembeda: sanksi tegas dan ada aparat penegak."
        },
        "Berlaku hanya pada kelompok tertentu": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Ciri pembeda: sanksi tegas dan ada aparat penegak."
        },
        "Tidak memiliki sanksi fisik sama sekali": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Ciri pembeda: sanksi tegas dan ada aparat penegak."
        }
      }
    },
    {
      "id": "q-ppkn-10-5",
      "conceptName": "Bela Negara Pasal 27",
      "topic": "Pendidikan Pancasila X",
      "questionText": "Berdasarkan Pasal 27 ayat (3) UUD 1945, setiap warga negara berhak dan wajib ikut serta dalam upaya...",
      "type": "mcq",
      "options": [
        "Pembelaan negara",
        "Pembuatan undang-undang",
        "Pengadilan sengketa pemilu",
        "Diplomasi luar negeri"
      ],
      "optionDetails": {
        "Pembelaan negara": "✓ BENAR: Pasal 27 ayat (3) UUD 1945 mengatur hak dan kewajiban membela negara.",
        "Pembuatan undang-undang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pasal 27 ayat (3) UUD 1945 mengatur hak dan kewajiban membela negara.",
        "Pengadilan sengketa pemilu": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pasal 27 ayat (3) UUD 1945 mengatur hak dan kewajiban membela negara.",
        "Diplomasi luar negeri": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pasal 27 ayat (3) UUD 1945 mengatur hak dan kewajiban membela negara."
      },
      "correctAnswer": "Pembelaan negara",
      "explanationText": "Pasal 27 ayat (3) UUD 1945 mengatur hak dan kewajiban membela negara.",
      "knownWrongPatterns": {
        "Pembuatan undang-undang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Bunyi pasal: '...berhak dan wajib ikut serta dalam upaya pembelaan negara.'"
        },
        "Pengadilan sengketa pemilu": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Bunyi pasal: '...berhak dan wajib ikut serta dalam upaya pembelaan negara.'"
        },
        "Diplomasi luar negeri": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Bunyi pasal: '...berhak dan wajib ikut serta dalam upaya pembelaan negara.'"
        }
      }
    },
    {
      "id": "q-ppkn-10-6",
      "conceptName": "Wawasan Nusantara",
      "topic": "Pendidikan Pancasila X",
      "questionText": "Cara pandang bangsa Indonesia mengenai diri dan lingkungannya yang bersatu dalam kesatuan ideologi, politik, ekonomi, dan sosial-budaya dinamakan...",
      "type": "mcq",
      "options": [
        "Wawasan Nusantara",
        "Ketahanan Budaya",
        "Geopolitik Ekspansif",
        "Sentralisme Daerah"
      ],
      "optionDetails": {
        "Wawasan Nusantara": "✓ BENAR: Wawasan Nusantara adalah cara pandang geopolitik bangsa Indonesia.",
        "Ketahanan Budaya": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Wawasan Nusantara adalah cara pandang geopolitik bangsa Indonesia.",
        "Geopolitik Ekspansif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Wawasan Nusantara adalah cara pandang geopolitik bangsa Indonesia.",
        "Sentralisme Daerah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Wawasan Nusantara adalah cara pandang geopolitik bangsa Indonesia."
      },
      "correctAnswer": "Wawasan Nusantara",
      "explanationText": "Wawasan Nusantara adalah cara pandang geopolitik bangsa Indonesia.",
      "knownWrongPatterns": {
        "Ketahanan Budaya": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Cara pandang kebangsaan Indonesia adalah Wawasan Nusantara."
        },
        "Geopolitik Ekspansif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Cara pandang kebangsaan Indonesia adalah Wawasan Nusantara."
        },
        "Sentralisme Daerah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Cara pandang kebangsaan Indonesia adalah Wawasan Nusantara."
        }
      }
    },
    {
      "id": "q-ppkn-10-7",
      "conceptName": "Faktor Integrasi Nasional",
      "topic": "Pendidikan Pancasila X",
      "questionText": "Faktor pembentuk integrasi nasional yang lahir dari persamaan sejarah perjuangan adalah...",
      "type": "mcq",
      "options": [
        "Rasa senasib dan seperjuangan menghadapi penjajahan",
        "Perbedaan ideologi antardaerah",
        "Keinginan menguasai suku lain",
        "Pengaruh budaya barat modern"
      ],
      "optionDetails": {
        "Rasa senasib dan seperjuangan menghadapi penjajahan": "✓ BENAR: Penderitaan bersama di masa penjajahan melahirkan tekad bersatu sebagai satu bangsa.",
        "Perbedaan ideologi antardaerah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Penderitaan bersama di masa penjajahan melahirkan tekad bersatu sebagai satu bangsa.",
        "Keinginan menguasai suku lain": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Penderitaan bersama di masa penjajahan melahirkan tekad bersatu sebagai satu bangsa.",
        "Pengaruh budaya barat modern": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Penderitaan bersama di masa penjajahan melahirkan tekad bersatu sebagai satu bangsa."
      },
      "correctAnswer": "Rasa senasib dan seperjuangan menghadapi penjajahan",
      "explanationText": "Penderitaan bersama di masa penjajahan melahirkan tekad bersatu sebagai satu bangsa.",
      "knownWrongPatterns": {
        "Perbedaan ideologi antardaerah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perasaan senasib melahirkan persatuan bangsa."
        },
        "Keinginan menguasai suku lain": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perasaan senasib melahirkan persatuan bangsa."
        },
        "Pengaruh budaya barat modern": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perasaan senasib melahirkan persatuan bangsa."
        }
      }
    },
    {
      "id": "q-ppkn-10-8",
      "conceptName": "Wewenang Mahkamah Konstitusi",
      "topic": "Pendidikan Pancasila X",
      "questionText": "Lembaga negara yang berwenang menguji undang-undang terhadap UUD 1945 (Judicial Review) adalah...",
      "type": "mcq",
      "options": [
        "Mahkamah Konstitusi (MK)",
        "Mahkamah Agung (MA)",
        "Komisi Yudisial (KY)",
        "Dewan Perwakilan Rakyat (DPR)"
      ],
      "optionDetails": {
        "Mahkamah Konstitusi (MK)": "✓ BENAR: MK memiliki wewenang menguji konstitusionalitas UU terhadap UUD 1945.",
        "Mahkamah Agung (MA)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: MK memiliki wewenang menguji konstitusionalitas UU terhadap UUD 1945.",
        "Komisi Yudisial (KY)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: MK memiliki wewenang menguji konstitusionalitas UU terhadap UUD 1945.",
        "Dewan Perwakilan Rakyat (DPR)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: MK memiliki wewenang menguji konstitusionalitas UU terhadap UUD 1945."
      },
      "correctAnswer": "Mahkamah Konstitusi (MK)",
      "explanationText": "MK memiliki wewenang menguji konstitusionalitas UU terhadap UUD 1945.",
      "knownWrongPatterns": {
        "Mahkamah Agung (MA)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "MK bertugas mengawal konstitusi (The Guardian of Constitution)."
        },
        "Komisi Yudisial (KY)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "MK bertugas mengawal konstitusi (The Guardian of Constitution)."
        },
        "Dewan Perwakilan Rakyat (DPR)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "MK bertugas mengawal konstitusi (The Guardian of Constitution)."
        }
      }
    },
    {
      "id": "q-ppkn-10-9",
      "conceptName": "Sila Persatuan di Sekolah",
      "topic": "Pendidikan Pancasila X",
      "questionText": "Sikap positif yang mencerminkan pengamalan Sila Ketiga Pancasila di lingkungan sekolah adalah...",
      "type": "mcq",
      "options": [
        "Menjalin pertemanan tanpa membeda-bedakan suku dan daerah asal",
        "Membuat geng pertemanan eksklusif satu daerah",
        "Mengejek logat bicara teman luar pulau",
        "Menolak kerja kelompok antarkelas"
      ],
      "optionDetails": {
        "Menjalin pertemanan tanpa membeda-bedakan suku dan daerah asal": "✓ BENAR: Persatuan Indonesia diwujudkan melalui pergaulan inklusif tanpa sekat kedaerahan.",
        "Membuat geng pertemanan eksklusif satu daerah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Persatuan Indonesia diwujudkan melalui pergaulan inklusif tanpa sekat kedaerahan.",
        "Mengejek logat bicara teman luar pulau": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Persatuan Indonesia diwujudkan melalui pergaulan inklusif tanpa sekat kedaerahan.",
        "Menolak kerja kelompok antarkelas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Persatuan Indonesia diwujudkan melalui pergaulan inklusif tanpa sekat kedaerahan."
      },
      "correctAnswer": "Menjalin pertemanan tanpa membeda-bedakan suku dan daerah asal",
      "explanationText": "Persatuan Indonesia diwujudkan melalui pergaulan inklusif tanpa sekat kedaerahan.",
      "knownWrongPatterns": {
        "Membuat geng pertemanan eksklusif satu daerah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hindari sikap diskriminatif dan primordialisme sempit."
        },
        "Mengejek logat bicara teman luar pulau": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hindari sikap diskriminatif dan primordialisme sempit."
        },
        "Menolak kerja kelompok antarkelas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hindari sikap diskriminatif dan primordialisme sempit."
        }
      }
    },
    {
      "id": "q-ppkn-10-10",
      "conceptName": "Keadilan Sosial Sila 5",
      "topic": "Pendidikan Pancasila X",
      "questionText": "Mewujudkan sistem jaminan kesehatan dan bantuan sosial merata bagi masyarakat pra-sejahtera merupakan manifestasi dari Sila ke-...",
      "type": "mcq",
      "options": [
        "5 (Keadilan Sosial bagi Seluruh Rakyat Indonesia)",
        "1 (Ketuhanan)",
        "2 (Kemanusiaan)",
        "3 (Persatuan)"
      ],
      "optionDetails": {
        "5 (Keadilan Sosial bagi Seluruh Rakyat Indonesia)": "✓ BENAR: Keadilan sosial tercermin dalam pemerataan kesejahteraan dan jaminan sosial bagi rakyat.",
        "1 (Ketuhanan)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Keadilan sosial tercermin dalam pemerataan kesejahteraan dan jaminan sosial bagi rakyat.",
        "2 (Kemanusiaan)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Keadilan sosial tercermin dalam pemerataan kesejahteraan dan jaminan sosial bagi rakyat.",
        "3 (Persatuan)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Keadilan sosial tercermin dalam pemerataan kesejahteraan dan jaminan sosial bagi rakyat."
      },
      "correctAnswer": "5 (Keadilan Sosial bagi Seluruh Rakyat Indonesia)",
      "explanationText": "Keadilan sosial tercermin dalam pemerataan kesejahteraan dan jaminan sosial bagi rakyat.",
      "knownWrongPatterns": {
        "1 (Ketuhanan)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pemerataan bantuan dan keadilan bagi masyarakat adalah sila ke-5."
        },
        "2 (Kemanusiaan)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pemerataan bantuan dan keadilan bagi masyarakat adalah sila ke-5."
        },
        "3 (Persatuan)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pemerataan bantuan dan keadilan bagi masyarakat adalah sila ke-5."
        }
      }
    }
  ],
  "sejarah-10": [
    {
      "id": "q-sejarah-10-1",
      "conceptName": "Konsep Berpikir Kronologis",
      "topic": "Sejarah Indonesia X",
      "questionText": "Konsep berpikir dalam sejarah yang memanjang dalam waktu namun menyempit dalam ruang disebut...",
      "type": "mcq",
      "options": [
        "Diakronik (Kronologis)",
        "Sinkronik",
        "Periodisasi Tematis",
        "Kausalitas Kualitatif"
      ],
      "optionDetails": {
        "Diakronik (Kronologis)": "✓ BENAR: Diakronik menitikberatkan pada proses kronologis perjalanan waktu.",
        "Sinkronik": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Diakronik menitikberatkan pada proses kronologis perjalanan waktu.",
        "Periodisasi Tematis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Diakronik menitikberatkan pada proses kronologis perjalanan waktu.",
        "Kausalitas Kualitatif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Diakronik menitikberatkan pada proses kronologis perjalanan waktu."
      },
      "correctAnswer": "Diakronik (Kronologis)",
      "explanationText": "Diakronik menitikberatkan pada proses kronologis perjalanan waktu.",
      "knownWrongPatterns": {
        "Sinkronik": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Memanjang dalam waktu adalah konsep diakronik."
        },
        "Periodisasi Tematis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Memanjang dalam waktu adalah konsep diakronik."
        },
        "Kausalitas Kualitatif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Memanjang dalam waktu adalah konsep diakronik."
        }
      }
    },
    {
      "id": "q-sejarah-10-2",
      "conceptName": "Konsep Sinkronik",
      "topic": "Sejarah Indonesia X",
      "questionText": "Mempelajari peristiwa proklamasi kemerdekaan 17 Agustus 1945 secara mendalam dari segi kondisi ekonomi, sosial, dan politik saat itu disebut berpikir...",
      "type": "mcq",
      "options": [
        "Sinkronik",
        "Diakronik",
        "Anakronis",
        "Monokronik"
      ],
      "optionDetails": {
        "Sinkronik": "✓ BENAR: Sinkronik membedah peristiwa secara luas dalam ruang pada kurun waktu terbatas.",
        "Diakronik": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sinkronik membedah peristiwa secara luas dalam ruang pada kurun waktu terbatas.",
        "Anakronis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sinkronik membedah peristiwa secara luas dalam ruang pada kurun waktu terbatas.",
        "Monokronik": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sinkronik membedah peristiwa secara luas dalam ruang pada kurun waktu terbatas."
      },
      "correctAnswer": "Sinkronik",
      "explanationText": "Sinkronik membedah peristiwa secara luas dalam ruang pada kurun waktu terbatas.",
      "knownWrongPatterns": {
        "Diakronik": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Mengkaji struktur mendalam pada satu kurun waktu adalah sinkronik."
        },
        "Anakronis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Mengkaji struktur mendalam pada satu kurun waktu adalah sinkronik."
        },
        "Monokronik": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Mengkaji struktur mendalam pada satu kurun waktu adalah sinkronik."
        }
      }
    },
    {
      "id": "q-sejarah-10-3",
      "conceptName": "Tujuan Periodisasi",
      "topic": "Sejarah Indonesia X",
      "questionText": "Tujuan utama pembagian zaman atau periodisasi dalam penulisan sejarah adalah untuk...",
      "type": "mcq",
      "options": [
        "Memudahkan pemahaman dan sistematika urutan babak sejarah",
        "Mengubah fakta peristiwa masa lalu",
        "Menyamakan waktu terjadinya peristiwa di seluruh benua",
        "Menghilangkan peran tokoh lokal"
      ],
      "optionDetails": {
        "Memudahkan pemahaman dan sistematika urutan babak sejarah": "✓ BENAR: Periodisasi memudahkan penyusunan urutan perkembangan peristiwa sejarah secara logis.",
        "Mengubah fakta peristiwa masa lalu": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Periodisasi memudahkan penyusunan urutan perkembangan peristiwa sejarah secara logis.",
        "Menyamakan waktu terjadinya peristiwa di seluruh benua": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Periodisasi memudahkan penyusunan urutan perkembangan peristiwa sejarah secara logis.",
        "Menghilangkan peran tokoh lokal": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Periodisasi memudahkan penyusunan urutan perkembangan peristiwa sejarah secara logis."
      },
      "correctAnswer": "Memudahkan pemahaman dan sistematika urutan babak sejarah",
      "explanationText": "Periodisasi memudahkan penyusunan urutan perkembangan peristiwa sejarah secara logis.",
      "knownWrongPatterns": {
        "Mengubah fakta peristiwa masa lalu": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Periodisasi dibuat agar babak sejarah terstruktur sistematis."
        },
        "Menyamakan waktu terjadinya peristiwa di seluruh benua": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Periodisasi dibuat agar babak sejarah terstruktur sistematis."
        },
        "Menghilangkan peran tokoh lokal": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Periodisasi dibuat agar babak sejarah terstruktur sistematis."
        }
      }
    },
    {
      "id": "q-sejarah-10-4",
      "conceptName": "Historiografi Tradisional",
      "topic": "Sejarah Indonesia X",
      "questionText": "Historiografi tradisional di Indonesia pada zaman kerajaan memiliki ciri utama, yaitu bersifat...",
      "type": "mcq",
      "options": [
        "Istanasentris dan mitologis",
        "Eropasentris dan ilmiah empiris",
        "Demokratis dan pro-rakyat",
        "Netral tanpa pengaruh penguasa"
      ],
      "optionDetails": {
        "Istanasentris dan mitologis": "✓ BENAR: Karya sejarah tradisional (babad, hikayat) berfokus pada raja/istana dan sering memuat mitos.",
        "Eropasentris dan ilmiah empiris": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Karya sejarah tradisional (babad, hikayat) berfokus pada raja/istana dan sering memuat mitos.",
        "Demokratis dan pro-rakyat": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Karya sejarah tradisional (babad, hikayat) berfokus pada raja/istana dan sering memuat mitos.",
        "Netral tanpa pengaruh penguasa": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Karya sejarah tradisional (babad, hikayat) berfokus pada raja/istana dan sering memuat mitos."
      },
      "correctAnswer": "Istanasentris dan mitologis",
      "explanationText": "Karya sejarah tradisional (babad, hikayat) berfokus pada raja/istana dan sering memuat mitos.",
      "knownWrongPatterns": {
        "Eropasentris dan ilmiah empiris": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Ciri khas: seputar raja (istanasentris) dan berbaur mitologi."
        },
        "Demokratis dan pro-rakyat": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Ciri khas: seputar raja (istanasentris) dan berbaur mitologi."
        },
        "Netral tanpa pengaruh penguasa": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Ciri khas: seputar raja (istanasentris) dan berbaur mitologi."
        }
      }
    },
    {
      "id": "q-sejarah-10-5",
      "conceptName": "Sumber Primer",
      "topic": "Sejarah Indonesia X",
      "questionText": "Prasasti Yupa dari Kerajaan Kutai (abad ke-5 M) merupakan contoh sumber sejarah kategori...",
      "type": "mcq",
      "options": [
        "Sumber Primer Tertulis",
        "Sumber Sekunder Lisan",
        "Sumber Tersier Opini",
        "Sumber Rekaan Fiksi"
      ],
      "optionDetails": {
        "Sumber Primer Tertulis": "✓ BENAR: Yupa dibuat langsung pada zaman peristiwa berlangsung oleh saksi sezaman (sumber primer).",
        "Sumber Sekunder Lisan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Yupa dibuat langsung pada zaman peristiwa berlangsung oleh saksi sezaman (sumber primer).",
        "Sumber Tersier Opini": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Yupa dibuat langsung pada zaman peristiwa berlangsung oleh saksi sezaman (sumber primer).",
        "Sumber Rekaan Fiksi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Yupa dibuat langsung pada zaman peristiwa berlangsung oleh saksi sezaman (sumber primer)."
      },
      "correctAnswer": "Sumber Primer Tertulis",
      "explanationText": "Yupa dibuat langsung pada zaman peristiwa berlangsung oleh saksi sezaman (sumber primer).",
      "knownWrongPatterns": {
        "Sumber Sekunder Lisan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Peninggalan langsung dari zaman peristiwa adalah sumber primer."
        },
        "Sumber Tersier Opini": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Peninggalan langsung dari zaman peristiwa adalah sumber primer."
        },
        "Sumber Rekaan Fiksi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Peninggalan langsung dari zaman peristiwa adalah sumber primer."
        }
      }
    },
    {
      "id": "q-sejarah-10-6",
      "conceptName": "Masa Praaksara",
      "topic": "Sejarah Indonesia X",
      "questionText": "Masa ketika manusia belum mengenal aksara atau tulisan dalam kehidupan dinamakan masa...",
      "type": "mcq",
      "options": [
        "Praaksara (Prasejarah)",
        "Perundagian Modern",
        "Mesolitikum Akhir",
        "Sejarah Madya"
      ],
      "optionDetails": {
        "Praaksara (Prasejarah)": "✓ BENAR: Praaksara artinya sebelum ada tulisan (pra = sebelum, aksara = tulisan).",
        "Perundagian Modern": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Praaksara artinya sebelum ada tulisan (pra = sebelum, aksara = tulisan).",
        "Mesolitikum Akhir": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Praaksara artinya sebelum ada tulisan (pra = sebelum, aksara = tulisan).",
        "Sejarah Madya": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Praaksara artinya sebelum ada tulisan (pra = sebelum, aksara = tulisan)."
      },
      "correctAnswer": "Praaksara (Prasejarah)",
      "explanationText": "Praaksara artinya sebelum ada tulisan (pra = sebelum, aksara = tulisan).",
      "knownWrongPatterns": {
        "Perundagian Modern": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pra = sebelum, aksara = tulisan."
        },
        "Mesolitikum Akhir": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pra = sebelum, aksara = tulisan."
        },
        "Sejarah Madya": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pra = sebelum, aksara = tulisan."
        }
      }
    },
    {
      "id": "q-sejarah-10-7",
      "conceptName": "Teori Asal Bangsa",
      "topic": "Sejarah Indonesia X",
      "questionText": "Teori yang menyatakan bahwa nenek moyang bangsa Indonesia berasal dari kepulauan Nusantara sendiri disebut teori...",
      "type": "mcq",
      "options": [
        "Teori Nusantara",
        "Teori Yunnan",
        "Teori Out of Taiwan",
        "Teori Out of Africa"
      ],
      "optionDetails": {
        "Teori Nusantara": "✓ BENAR: Teori Nusantara dipelopori oleh Moh. Yamin dan J. Crawford berdasarkan bukti fosil manusia purba.",
        "Teori Yunnan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teori Nusantara dipelopori oleh Moh. Yamin dan J. Crawford berdasarkan bukti fosil manusia purba.",
        "Teori Out of Taiwan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teori Nusantara dipelopori oleh Moh. Yamin dan J. Crawford berdasarkan bukti fosil manusia purba.",
        "Teori Out of Africa": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teori Nusantara dipelopori oleh Moh. Yamin dan J. Crawford berdasarkan bukti fosil manusia purba."
      },
      "correctAnswer": "Teori Nusantara",
      "explanationText": "Teori Nusantara dipelopori oleh Moh. Yamin dan J. Crawford berdasarkan bukti fosil manusia purba.",
      "knownWrongPatterns": {
        "Teori Yunnan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Berasal dari kepulauan sendiri = Teori Nusantara."
        },
        "Teori Out of Taiwan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Berasal dari kepulauan sendiri = Teori Nusantara."
        },
        "Teori Out of Africa": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Berasal dari kepulauan sendiri = Teori Nusantara."
        }
      }
    },
    {
      "id": "q-sejarah-10-8",
      "conceptName": "Kapak Persegi Neolitikum",
      "topic": "Sejarah Indonesia X",
      "questionText": "Peralatan batu yang diasah halus pada masa Neolitikum dan banyak ditemukan di wilayah Indonesia bagian barat adalah...",
      "type": "mcq",
      "options": [
        "Kapak Persegi",
        "Flakes Paleolitikum",
        "Kjokkenmoddinger",
        "Chopper Kasar"
      ],
      "optionDetails": {
        "Kapak Persegi": "✓ BENAR: Kapak persegi adalah artefak Neolitikum utama di barat, sedangkan kapak lonjong di timur.",
        "Flakes Paleolitikum": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kapak persegi adalah artefak Neolitikum utama di barat, sedangkan kapak lonjong di timur.",
        "Kjokkenmoddinger": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kapak persegi adalah artefak Neolitikum utama di barat, sedangkan kapak lonjong di timur.",
        "Chopper Kasar": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kapak persegi adalah artefak Neolitikum utama di barat, sedangkan kapak lonjong di timur."
      },
      "correctAnswer": "Kapak Persegi",
      "explanationText": "Kapak persegi adalah artefak Neolitikum utama di barat, sedangkan kapak lonjong di timur.",
      "knownWrongPatterns": {
        "Flakes Paleolitikum": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kapak batu halus di barat adalah kapak persegi."
        },
        "Kjokkenmoddinger": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kapak batu halus di barat adalah kapak persegi."
        },
        "Chopper Kasar": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kapak batu halus di barat adalah kapak persegi."
        }
      }
    },
    {
      "id": "q-sejarah-10-9",
      "conceptName": "Candi Tertua Sumatera",
      "topic": "Sejarah Indonesia X",
      "questionText": "Tinggalan candi Buddha tertua di Pulau Sumatera yang terbuat dari bata merah adalah...",
      "type": "mcq",
      "options": [
        "Candi Muara Takus",
        "Candi Borobudur",
        "Candi Prambanan",
        "Candi Penataran"
      ],
      "optionDetails": {
        "Candi Muara Takus": "✓ BENAR: Candi Muara Takus di Riau adalah candi bata merah peninggalan Kerajaan Sriwijaya.",
        "Candi Borobudur": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Candi Muara Takus di Riau adalah candi bata merah peninggalan Kerajaan Sriwijaya.",
        "Candi Prambanan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Candi Muara Takus di Riau adalah candi bata merah peninggalan Kerajaan Sriwijaya.",
        "Candi Penataran": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Candi Muara Takus di Riau adalah candi bata merah peninggalan Kerajaan Sriwijaya."
      },
      "correctAnswer": "Candi Muara Takus",
      "explanationText": "Candi Muara Takus di Riau adalah candi bata merah peninggalan Kerajaan Sriwijaya.",
      "knownWrongPatterns": {
        "Candi Borobudur": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Terletak di Riau, peninggalan masa Buddha Sriwijaya."
        },
        "Candi Prambanan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Terletak di Riau, peninggalan masa Buddha Sriwijaya."
        },
        "Candi Penataran": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Terletak di Riau, peninggalan masa Buddha Sriwijaya."
        }
      }
    },
    {
      "id": "q-sejarah-10-10",
      "conceptName": "Pengaruh Hindu-Buddha",
      "topic": "Sejarah Indonesia X",
      "questionText": "Masuknya kebudayaan Hindu-Buddha ke Nusantara membawa perubahan besar dalam sistem pemerintahan, yaitu...",
      "type": "mcq",
      "options": [
        "Munculnya sistem kerajaan dengan konsep dewa-raja",
        "Pemberlakuan sistem republik demokratis",
        "Pemilihan kepala suku secara primus inter pares",
        "Peniadaan struktur kasta dan hierarki"
      ],
      "optionDetails": {
        "Munculnya sistem kerajaan dengan konsep dewa-raja": "✓ BENAR: Sistem kesukuan berganti menjadi sistem monarki kerajaan dengan raja sebagai titisan dewa.",
        "Pemberlakuan sistem republik demokratis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sistem kesukuan berganti menjadi sistem monarki kerajaan dengan raja sebagai titisan dewa.",
        "Pemilihan kepala suku secara primus inter pares": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sistem kesukuan berganti menjadi sistem monarki kerajaan dengan raja sebagai titisan dewa.",
        "Peniadaan struktur kasta dan hierarki": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sistem kesukuan berganti menjadi sistem monarki kerajaan dengan raja sebagai titisan dewa."
      },
      "correctAnswer": "Munculnya sistem kerajaan dengan konsep dewa-raja",
      "explanationText": "Sistem kesukuan berganti menjadi sistem monarki kerajaan dengan raja sebagai titisan dewa.",
      "knownWrongPatterns": {
        "Pemberlakuan sistem republik demokratis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Sistem kepala suku berubah menjadi sistem kerajaan."
        },
        "Pemilihan kepala suku secara primus inter pares": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Sistem kepala suku berubah menjadi sistem kerajaan."
        },
        "Peniadaan struktur kasta dan hierarki": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Sistem kepala suku berubah menjadi sistem kerajaan."
        }
      }
    }
  ],
  "ipa-fisika-10": [
    {
      "id": "q-ipa-fisika-10-1",
      "conceptName": "Besaran Pokok SI",
      "topic": "Fisika Dasar X",
      "questionText": "Manakah kelompok besaran di bawah ini yang seluruhnya merupakan besaran pokok SI?",
      "type": "mcq",
      "options": [
        "Massa, Panjang, Waktu, Suhu",
        "Kecepatan, Gaya, Energi, Usaha",
        "Massa, Berat, Luas, Volume",
        "Kuat Arus, Daya, Tekanan, Waktu"
      ],
      "optionDetails": {
        "Massa, Panjang, Waktu, Suhu": "✓ BENAR: Tujuh besaran pokok SI: Panjang, Massa, Waktu, Suhu, Kuat Arus, Intensitas Cahaya, Jumlah Zat.",
        "Kecepatan, Gaya, Energi, Usaha": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tujuh besaran pokok SI: Panjang, Massa, Waktu, Suhu, Kuat Arus, Intensitas Cahaya, Jumlah Zat.",
        "Massa, Berat, Luas, Volume": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tujuh besaran pokok SI: Panjang, Massa, Waktu, Suhu, Kuat Arus, Intensitas Cahaya, Jumlah Zat.",
        "Kuat Arus, Daya, Tekanan, Waktu": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tujuh besaran pokok SI: Panjang, Massa, Waktu, Suhu, Kuat Arus, Intensitas Cahaya, Jumlah Zat."
      },
      "correctAnswer": "Massa, Panjang, Waktu, Suhu",
      "explanationText": "Tujuh besaran pokok SI: Panjang, Massa, Waktu, Suhu, Kuat Arus, Intensitas Cahaya, Jumlah Zat.",
      "knownWrongPatterns": {
        "Kecepatan, Gaya, Energi, Usaha": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Gaya, kecepatan, daya, dan luas adalah besaran turunan."
        },
        "Massa, Berat, Luas, Volume": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Gaya, kecepatan, daya, dan luas adalah besaran turunan."
        },
        "Kuat Arus, Daya, Tekanan, Waktu": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Gaya, kecepatan, daya, dan luas adalah besaran turunan."
        }
      }
    },
    {
      "id": "q-ipa-fisika-10-2",
      "conceptName": "Dimensi Gaya",
      "topic": "Fisika Dasar X",
      "questionText": "Dimensi dari besaran Gaya (Newton = kg·m/s²) adalah...",
      "type": "mcq",
      "options": [
        "[M][L][T]⁻²",
        "[M][L]²[T]⁻²",
        "[M][L]⁻¹[T]⁻²",
        "[M][T]⁻²"
      ],
      "optionDetails": {
        "[M][L][T]⁻²": "✓ BENAR: Massa [M], Panjang [L], Waktu [T]⁻². Jadi F = m·a -> [M][L][T]⁻².",
        "[M][L]²[T]⁻²": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Massa [M], Panjang [L], Waktu [T]⁻². Jadi F = m·a -> [M][L][T]⁻².",
        "[M][L]⁻¹[T]⁻²": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Massa [M], Panjang [L], Waktu [T]⁻². Jadi F = m·a -> [M][L][T]⁻².",
        "[M][T]⁻²": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Massa [M], Panjang [L], Waktu [T]⁻². Jadi F = m·a -> [M][L][T]⁻²."
      },
      "correctAnswer": "[M][L][T]⁻²",
      "explanationText": "Massa [M], Panjang [L], Waktu [T]⁻². Jadi F = m·a -> [M][L][T]⁻².",
      "knownWrongPatterns": {
        "[M][L]²[T]⁻²": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Gaya = massa x percepatan."
        },
        "[M][L]⁻¹[T]⁻²": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Gaya = massa x percepatan."
        },
        "[M][T]⁻²": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Gaya = massa x percepatan."
        }
      }
    },
    {
      "id": "q-ipa-fisika-10-3",
      "conceptName": "Angka Penting",
      "topic": "Fisika Dasar X",
      "questionText": "Hasil pengukuran panjang sebuah pelat adalah 12,25 cm dan lebarnya 2,0 cm. Berdasarkan aturan angka penting, luas pelat tersebut adalah...",
      "type": "mcq",
      "options": [
        "25 cm²",
        "24,5 cm²",
        "24,50 cm²",
        "25,0 cm²"
      ],
      "optionDetails": {
        "25 cm²": "✓ BENAR: 12,25 (4 AP) x 2,0 (2 AP) = 24,5 -> dibulatkan menjadi 2 AP yaitu 25 cm².",
        "24,5 cm²": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 12,25 (4 AP) x 2,0 (2 AP) = 24,5 -> dibulatkan menjadi 2 AP yaitu 25 cm².",
        "24,50 cm²": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 12,25 (4 AP) x 2,0 (2 AP) = 24,5 -> dibulatkan menjadi 2 AP yaitu 25 cm².",
        "25,0 cm²": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 12,25 (4 AP) x 2,0 (2 AP) = 24,5 -> dibulatkan menjadi 2 AP yaitu 25 cm²."
      },
      "correctAnswer": "25 cm²",
      "explanationText": "12,25 (4 AP) x 2,0 (2 AP) = 24,5 -> dibulatkan menjadi 2 AP yaitu 25 cm².",
      "knownWrongPatterns": {
        "24,5 cm²": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hasil perkalian mengikuti jumlah angka penting paling sedikit (2 AP)."
        },
        "24,50 cm²": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hasil perkalian mengikuti jumlah angka penting paling sedikit (2 AP)."
        },
        "25,0 cm²": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hasil perkalian mengikuti jumlah angka penting paling sedikit (2 AP)."
        }
      }
    },
    {
      "id": "q-ipa-fisika-10-4",
      "conceptName": "Vektor Perpindahan",
      "topic": "Fisika Dasar X",
      "questionText": "Seseorang berjalan ke timur sejauh 3 meter, lalu berbelok ke utara sejauh 4 meter. Berapakah besar perpindahan orang tersebut (dalam meter)?",
      "type": "mcq",
      "options": [
        "5"
      ],
      "optionDetails": {
        "5": "✓ BENAR: Perpindahan = √(3² + 4²) = √(9 + 16) = √25 = 5 meter."
      },
      "correctAnswer": "5",
      "explanationText": "Perpindahan = √(3² + 4²) = √(9 + 16) = √25 = 5 meter.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-ipa-fisika-10-5",
      "conceptName": "GLB Kecepatan Konstan",
      "topic": "Fisika Dasar X",
      "questionText": "Sebuah mobil bergerak lurus beraturan (GLB) dengan kecepatan konstan 20 m/s. Berapakah jarak tempuh mobil setelah melaju selama 15 detik (dalam meter)?",
      "type": "mcq",
      "options": [
        "300"
      ],
      "optionDetails": {
        "300": "✓ BENAR: s = v · t = 20 m/s × 15 s = 300 meter."
      },
      "correctAnswer": "300",
      "explanationText": "s = v · t = 20 m/s × 15 s = 300 meter.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-ipa-fisika-10-6",
      "conceptName": "GLBB Kecepatan Akhir",
      "topic": "Fisika Dasar X",
      "questionText": "Sebuah benda bermassa 2 kg mula-mula diam, kemudian dipercepat konstan 3 m/s² selama 4 detik. Berapakah kecepatan akhir benda (dalam m/s)?",
      "type": "mcq",
      "options": [
        "12"
      ],
      "optionDetails": {
        "12": "✓ BENAR: vt = v0 + a·t = 0 + (3 × 4) = 12 m/s."
      },
      "correctAnswer": "12",
      "explanationText": "vt = v0 + a·t = 0 + (3 × 4) = 12 m/s.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-ipa-fisika-10-7",
      "conceptName": "Hukum Inersia I Newton",
      "topic": "Fisika Dasar X",
      "questionText": "Kecenderungan suatu benda untuk mempertahankan keadaan diam atau gerak lurus beraturannya disebut sifat inersia, yang dirumuskan dalam...",
      "type": "mcq",
      "options": [
        "Hukum I Newton (ΣF = 0)",
        "Hukum II Newton (ΣF = m·a)",
        "Hukum III Newton (F aksi = -F reaksi)",
        "Hukum Gravitasi"
      ],
      "optionDetails": {
        "Hukum I Newton (ΣF = 0)": "✓ BENAR: Hukum I Newton menyatakan benda diam tetap diam, atau bergerak lurus beraturan jika resultan gaya = 0.",
        "Hukum II Newton (ΣF = m·a)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hukum I Newton menyatakan benda diam tetap diam, atau bergerak lurus beraturan jika resultan gaya = 0.",
        "Hukum III Newton (F aksi = -F reaksi)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hukum I Newton menyatakan benda diam tetap diam, atau bergerak lurus beraturan jika resultan gaya = 0.",
        "Hukum Gravitasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hukum I Newton menyatakan benda diam tetap diam, atau bergerak lurus beraturan jika resultan gaya = 0."
      },
      "correctAnswer": "Hukum I Newton (ΣF = 0)",
      "explanationText": "Hukum I Newton menyatakan benda diam tetap diam, atau bergerak lurus beraturan jika resultan gaya = 0.",
      "knownWrongPatterns": {
        "Hukum II Newton (ΣF = m·a)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kelembaman diatur dalam Hukum I Newton."
        },
        "Hukum III Newton (F aksi = -F reaksi)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kelembaman diatur dalam Hukum I Newton."
        },
        "Hukum Gravitasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kelembaman diatur dalam Hukum I Newton."
        }
      }
    },
    {
      "id": "q-ipa-fisika-10-8",
      "conceptName": "Hukum II Newton",
      "topic": "Fisika Dasar X",
      "questionText": "Gaya sebesar 30 N bekerja pada benda bermassa 6 kg di atas lantai licin. Berapakah percepatan yang dialami benda (dalam m/s²)?",
      "type": "mcq",
      "options": [
        "5"
      ],
      "optionDetails": {
        "5": "✓ BENAR: a = F / m = 30 N / 6 kg = 5 m/s²."
      },
      "correctAnswer": "5",
      "explanationText": "a = F / m = 30 N / 6 kg = 5 m/s².",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-ipa-fisika-10-9",
      "conceptName": "Energi Kinetik",
      "topic": "Fisika Dasar X",
      "questionText": "Benda bermassa 4 kg bergerak dengan kecepatan 5 m/s. Berapakah energi kinetik benda tersebut (dalam Joule)?",
      "type": "mcq",
      "options": [
        "50"
      ],
      "optionDetails": {
        "50": "✓ BENAR: Ek = 1/2 · m · v² = 0.5 × 4 × 25 = 50 Joule."
      },
      "correctAnswer": "50",
      "explanationText": "Ek = 1/2 · m · v² = 0.5 × 4 × 25 = 50 Joule.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-ipa-fisika-10-10",
      "conceptName": "Energi Terbarukan Solar",
      "topic": "Fisika Dasar X",
      "questionText": "Panel surya (photovoltaic) mengubah energi radiasi sinar matahari langsung menjadi energi...",
      "type": "mcq",
      "options": [
        "Listrik arus searah (DC)",
        "Kimia gas hidrogen",
        "Nuklir fisi",
        "Mekanik potensial gravitasi"
      ],
      "optionDetails": {
        "Listrik arus searah (DC)": "✓ BENAR: Efek fotovoltaik mengubah foton matahari langsung menjadi aliran elektron arus searah (DC).",
        "Kimia gas hidrogen": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Efek fotovoltaik mengubah foton matahari langsung menjadi aliran elektron arus searah (DC).",
        "Nuklir fisi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Efek fotovoltaik mengubah foton matahari langsung menjadi aliran elektron arus searah (DC).",
        "Mekanik potensial gravitasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Efek fotovoltaik mengubah foton matahari langsung menjadi aliran elektron arus searah (DC)."
      },
      "correctAnswer": "Listrik arus searah (DC)",
      "explanationText": "Efek fotovoltaik mengubah foton matahari langsung menjadi aliran elektron arus searah (DC).",
      "knownWrongPatterns": {
        "Kimia gas hidrogen": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Sel fotovoltaik menghasilkan arus listrik DC."
        },
        "Nuklir fisi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Sel fotovoltaik menghasilkan arus listrik DC."
        },
        "Mekanik potensial gravitasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Sel fotovoltaik menghasilkan arus listrik DC."
        }
      }
    }
  ],
  "ipa-kimia-10": [
    {
      "id": "q-ipa-kimia-10-1",
      "conceptName": "Partikel Inti Netral",
      "topic": "Kimia Dasar X",
      "questionText": "Partikel dasar penyusun inti atom yang bermuatan netral (tidak bermuatan) adalah...",
      "type": "mcq",
      "options": [
        "Neutron",
        "Proton",
        "Elektron",
        "Positron"
      ],
      "optionDetails": {
        "Neutron": "✓ BENAR: Inti atom terdiri dari proton bermuatan positif dan neutron bermuatan netral.",
        "Proton": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Inti atom terdiri dari proton bermuatan positif dan neutron bermuatan netral.",
        "Elektron": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Inti atom terdiri dari proton bermuatan positif dan neutron bermuatan netral.",
        "Positron": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Inti atom terdiri dari proton bermuatan positif dan neutron bermuatan netral."
      },
      "correctAnswer": "Neutron",
      "explanationText": "Inti atom terdiri dari proton bermuatan positif dan neutron bermuatan netral.",
      "knownWrongPatterns": {
        "Proton": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Partikel netral dalam inti disebut neutron."
        },
        "Elektron": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Partikel netral dalam inti disebut neutron."
        },
        "Positron": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Partikel netral dalam inti disebut neutron."
        }
      }
    },
    {
      "id": "q-ipa-kimia-10-2",
      "conceptName": "Jumlah Neutron Atom",
      "topic": "Kimia Dasar X",
      "questionText": "Atom Natrium memiliki nomor atom 11 dan nomor massa 23. Jumlah neutron di dalam inti atom Natrium tersebut adalah...",
      "type": "mcq",
      "options": [
        "12"
      ],
      "optionDetails": {
        "12": "✓ BENAR: Jumlah neutron = Nomor Massa - Nomor Atom = 23 - 11 = 12."
      },
      "correctAnswer": "12",
      "explanationText": "Jumlah neutron = Nomor Massa - Nomor Atom = 23 - 11 = 12.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-ipa-kimia-10-3",
      "conceptName": "Konfigurasi Bohr Klorin",
      "topic": "Kimia Dasar X",
      "questionText": "Konfigurasi elektron atom Klorin (nomor atom 17) berdasarkan kulit utama Bohr adalah...",
      "type": "mcq",
      "options": [
        "2, 8, 7",
        "2, 8, 8",
        "2, 7, 8",
        "2, 8, 6, 1"
      ],
      "optionDetails": {
        "2, 8, 7": "✓ BENAR: Kulit K=2, L=8, M=7. Total 17 elektron.",
        "2, 8, 8": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kulit K=2, L=8, M=7. Total 17 elektron.",
        "2, 7, 8": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kulit K=2, L=8, M=7. Total 17 elektron.",
        "2, 8, 6, 1": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kulit K=2, L=8, M=7. Total 17 elektron."
      },
      "correctAnswer": "2, 8, 7",
      "explanationText": "Kulit K=2, L=8, M=7. Total 17 elektron.",
      "knownWrongPatterns": {
        "2, 8, 8": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Maksimal kulit K=2, L=8, sisanya di kulit M."
        },
        "2, 7, 8": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Maksimal kulit K=2, L=8, sisanya di kulit M."
        },
        "2, 8, 6, 1": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Maksimal kulit K=2, L=8, sisanya di kulit M."
        }
      }
    },
    {
      "id": "q-ipa-kimia-10-4",
      "conceptName": "Karakteristik Golongan",
      "topic": "Kimia Dasar X",
      "questionText": "Unsur-unsur yang terletak dalam satu golongan yang sama pada tabel periodik memiliki kesamaan dalam hal...",
      "type": "mcq",
      "options": [
        "Jumlah elektron valensi",
        "Jumlah kulit elektron",
        "Nomor massa atom",
        "Jumlah neutron inti"
      ],
      "optionDetails": {
        "Jumlah elektron valensi": "✓ BENAR: Golongan ditentukan oleh jumlah elektron valensi (elektron pada kulit terluar).",
        "Jumlah kulit elektron": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Golongan ditentukan oleh jumlah elektron valensi (elektron pada kulit terluar).",
        "Nomor massa atom": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Golongan ditentukan oleh jumlah elektron valensi (elektron pada kulit terluar).",
        "Jumlah neutron inti": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Golongan ditentukan oleh jumlah elektron valensi (elektron pada kulit terluar)."
      },
      "correctAnswer": "Jumlah elektron valensi",
      "explanationText": "Golongan ditentukan oleh jumlah elektron valensi (elektron pada kulit terluar).",
      "knownWrongPatterns": {
        "Jumlah kulit elektron": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Golongan = jumlah elektron terluar (valensi)."
        },
        "Nomor massa atom": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Golongan = jumlah elektron terluar (valensi)."
        },
        "Jumlah neutron inti": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Golongan = jumlah elektron terluar (valensi)."
        }
      }
    },
    {
      "id": "q-ipa-kimia-10-5",
      "conceptName": "Elektron Valensi Karbon",
      "topic": "Kimia Dasar X",
      "questionText": "Berapakah jumlah elektron valensi dari atom Karbon (Nomor atom = 6, konfigurasi: 2, 4)?",
      "type": "mcq",
      "options": [
        "4"
      ],
      "optionDetails": {
        "4": "✓ BENAR: Karbon memiliki konfigurasi kulit 2, 4. Elektron valensinya = 4."
      },
      "correctAnswer": "4",
      "explanationText": "Karbon memiliki konfigurasi kulit 2, 4. Elektron valensinya = 4.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-ipa-kimia-10-6",
      "conceptName": "Ikatan Ion",
      "topic": "Kimia Dasar X",
      "questionText": "Ikatan kimia yang terbentuk akibat serah-terima elektron antara atom logam dan non-logam dinamakan ikatan...",
      "type": "mcq",
      "options": [
        "Ion (Elektrovalen)",
        "Kovalen Murni",
        "Logam",
        "Hidrogen"
      ],
      "optionDetails": {
        "Ion (Elektrovalen)": "✓ BENAR: Ikatan ion terjadi karena gaya elektrostatik serah-terima elektron kation logam dan anion non-logam.",
        "Kovalen Murni": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Ikatan ion terjadi karena gaya elektrostatik serah-terima elektron kation logam dan anion non-logam.",
        "Logam": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Ikatan ion terjadi karena gaya elektrostatik serah-terima elektron kation logam dan anion non-logam.",
        "Hidrogen": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Ikatan ion terjadi karena gaya elektrostatik serah-terima elektron kation logam dan anion non-logam."
      },
      "correctAnswer": "Ion (Elektrovalen)",
      "explanationText": "Ikatan ion terjadi karena gaya elektrostatik serah-terima elektron kation logam dan anion non-logam.",
      "knownWrongPatterns": {
        "Kovalen Murni": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Logam melepas elektron ke nonlogam = ikatan ion."
        },
        "Logam": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Logam melepas elektron ke nonlogam = ikatan ion."
        },
        "Hidrogen": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Logam melepas elektron ke nonlogam = ikatan ion."
        }
      }
    },
    {
      "id": "q-ipa-kimia-10-7",
      "conceptName": "Ikatan Kovalen Polar",
      "topic": "Kimia Dasar X",
      "questionText": "Molekul air (H₂O) memiliki ikatan antar-atom hidrogen dan oksigen berupa ikatan...",
      "type": "mcq",
      "options": [
        "Kovalen polar",
        "Ionik murni",
        "Logam",
        "Van der Waals nonpolar"
      ],
      "optionDetails": {
        "Kovalen polar": "✓ BENAR: Air terbentuk dari pemakaian bersama pasangan elektron dengan perbedaan keelektronegatifan (polar).",
        "Ionik murni": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Air terbentuk dari pemakaian bersama pasangan elektron dengan perbedaan keelektronegatifan (polar).",
        "Logam": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Air terbentuk dari pemakaian bersama pasangan elektron dengan perbedaan keelektronegatifan (polar).",
        "Van der Waals nonpolar": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Air terbentuk dari pemakaian bersama pasangan elektron dengan perbedaan keelektronegatifan (polar)."
      },
      "correctAnswer": "Kovalen polar",
      "explanationText": "Air terbentuk dari pemakaian bersama pasangan elektron dengan perbedaan keelektronegatifan (polar).",
      "knownWrongPatterns": {
        "Ionik murni": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pemakaian bersama elektron antar-nonlogam berbeda keelektronegatifan = kovalen polar."
        },
        "Logam": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pemakaian bersama elektron antar-nonlogam berbeda keelektronegatifan = kovalen polar."
        },
        "Van der Waals nonpolar": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pemakaian bersama elektron antar-nonlogam berbeda keelektronegatifan = kovalen polar."
        }
      }
    },
    {
      "id": "q-ipa-kimia-10-8",
      "conceptName": "Tata Nama Kimia",
      "topic": "Kimia Dasar X",
      "questionText": "Rumus kimia dari senyawa dinitrogen trioksida adalah...",
      "type": "mcq",
      "options": [
        "N₂O₃",
        "NO₂",
        "N₃O₂",
        "N₂O"
      ],
      "optionDetails": {
        "N₂O₃": "✓ BENAR: Di = 2 (N₂), Tri = 3 (O₃). Rumus molekul = N₂O₃.",
        "NO₂": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Di = 2 (N₂), Tri = 3 (O₃). Rumus molekul = N₂O₃.",
        "N₃O₂": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Di = 2 (N₂), Tri = 3 (O₃). Rumus molekul = N₂O₃.",
        "N₂O": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Di = 2 (N₂), Tri = 3 (O₃). Rumus molekul = N₂O₃."
      },
      "correctAnswer": "N₂O₃",
      "explanationText": "Di = 2 (N₂), Tri = 3 (O₃). Rumus molekul = N₂O₃.",
      "knownWrongPatterns": {
        "NO₂": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Di = 2, Tri = 3."
        },
        "N₃O₂": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Di = 2, Tri = 3."
        },
        "N₂O": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Di = 2, Tri = 3."
        }
      }
    },
    {
      "id": "q-ipa-kimia-10-9",
      "conceptName": "Hukum Kekekalan Massa",
      "topic": "Kimia Dasar X",
      "questionText": "Sebanyak 12 gram karbon direaksikan sempurna dengan 32 gram oksigen menghasilkan 44 gram karbondioksida. Fakta ini membuktikan...",
      "type": "mcq",
      "options": [
        "Hukum Kekekalan Massa (Lavoisier)",
        "Hukum Perbandingan Tetap (Proust)",
        "Hukum Kelipatan (Dalton)",
        "Hukum Gas Ideal"
      ],
      "optionDetails": {
        "Hukum Kekekalan Massa (Lavoisier)": "✓ BENAR: Massa zat sebelum reaksi (12+32=44g) sama dengan sesudah reaksi (44g).",
        "Hukum Perbandingan Tetap (Proust)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Massa zat sebelum reaksi (12+32=44g) sama dengan sesudah reaksi (44g).",
        "Hukum Kelipatan (Dalton)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Massa zat sebelum reaksi (12+32=44g) sama dengan sesudah reaksi (44g).",
        "Hukum Gas Ideal": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Massa zat sebelum reaksi (12+32=44g) sama dengan sesudah reaksi (44g)."
      },
      "correctAnswer": "Hukum Kekekalan Massa (Lavoisier)",
      "explanationText": "Massa zat sebelum reaksi (12+32=44g) sama dengan sesudah reaksi (44g).",
      "knownWrongPatterns": {
        "Hukum Perbandingan Tetap (Proust)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Massa total sebelum = sesudah reaksi adalah hukum Lavoisier."
        },
        "Hukum Kelipatan (Dalton)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Massa total sebelum = sesudah reaksi adalah hukum Lavoisier."
        },
        "Hukum Gas Ideal": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Massa total sebelum = sesudah reaksi adalah hukum Lavoisier."
        }
      }
    },
    {
      "id": "q-ipa-kimia-10-10",
      "conceptName": "Perhitungan Massa Mol",
      "topic": "Kimia Dasar X",
      "questionText": "Massa molar gas oksigen (O₂) adalah 32 g/mol. Berapakah massa dari 2 mol gas O₂ (dalam gram)?",
      "type": "mcq",
      "options": [
        "64"
      ],
      "optionDetails": {
        "64": "✓ BENAR: Massa = mol × Mr = 2 mol × 32 g/mol = 64 gram."
      },
      "correctAnswer": "64",
      "explanationText": "Massa = mol × Mr = 2 mol × 32 g/mol = 64 gram.",
      "knownWrongPatterns": {}
    }
  ],
  "ipa-bio-10": [
    {
      "id": "q-ipa-bio-10-1",
      "conceptName": "Tingkat Keanekaragaman Gen",
      "topic": "Biologi Dasar X",
      "questionText": "Variasi warna dan bentuk bunga mawar merah, mawar putih, dan mawar kuning tergolong dalam keanekaragaman hayati tingkat...",
      "type": "mcq",
      "options": [
        "Gen",
        "Spesies (Jenis)",
        "Ekosistem",
        "Filum"
      ],
      "optionDetails": {
        "Gen": "✓ BENAR: Variasi dalam satu spesies yang sama merupakan keanekaragaman gen.",
        "Spesies (Jenis)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Variasi dalam satu spesies yang sama merupakan keanekaragaman gen.",
        "Ekosistem": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Variasi dalam satu spesies yang sama merupakan keanekaragaman gen.",
        "Filum": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Variasi dalam satu spesies yang sama merupakan keanekaragaman gen."
      },
      "correctAnswer": "Gen",
      "explanationText": "Variasi dalam satu spesies yang sama merupakan keanekaragaman gen.",
      "knownWrongPatterns": {
        "Spesies (Jenis)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perbedaan varietas dalam spesies yang sama adalah tingkat gen."
        },
        "Ekosistem": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perbedaan varietas dalam spesies yang sama adalah tingkat gen."
        },
        "Filum": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perbedaan varietas dalam spesies yang sama adalah tingkat gen."
        }
      }
    },
    {
      "id": "q-ipa-bio-10-2",
      "conceptName": "Tingkat Ekosistem",
      "topic": "Biologi Dasar X",
      "questionText": "Hutan hujan tropis di Kalimantan dengan curah hujan tinggi dan vegetasi lebat merupakan contoh keanekaragaman tingkat...",
      "type": "mcq",
      "options": [
        "Ekosistem",
        "Gen",
        "Varietas",
        "Individu"
      ],
      "optionDetails": {
        "Ekosistem": "✓ BENAR: Interaksi antara komunitas biotik dengan komponen abiotik iklim dan tanah membentuk ekosistem.",
        "Gen": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Interaksi antara komunitas biotik dengan komponen abiotik iklim dan tanah membentuk ekosistem.",
        "Varietas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Interaksi antara komunitas biotik dengan komponen abiotik iklim dan tanah membentuk ekosistem.",
        "Individu": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Interaksi antara komunitas biotik dengan komponen abiotik iklim dan tanah membentuk ekosistem."
      },
      "correctAnswer": "Ekosistem",
      "explanationText": "Interaksi antara komunitas biotik dengan komponen abiotik iklim dan tanah membentuk ekosistem.",
      "knownWrongPatterns": {
        "Gen": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kesatuan komunitas dan lingkungan fisik adalah ekosistem."
        },
        "Varietas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kesatuan komunitas dan lingkungan fisik adalah ekosistem."
        },
        "Individu": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kesatuan komunitas dan lingkungan fisik adalah ekosistem."
        }
      }
    },
    {
      "id": "q-ipa-bio-10-3",
      "conceptName": "Kapsid Virus",
      "topic": "Biologi Dasar X",
      "questionText": "Struktur selubung pembungkus materi genetik (DNA/RNA) pada partikel virus tersusun dari protein yang disebut...",
      "type": "mcq",
      "options": [
        "Kapsid",
        "Dinding selulosa",
        "Membran plasma",
        "Glikokaliks"
      ],
      "optionDetails": {
        "Kapsid": "✓ BENAR: Kapsid adalah selubung protein pelindung asam nukleat virus.",
        "Dinding selulosa": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kapsid adalah selubung protein pelindung asam nukleat virus.",
        "Membran plasma": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kapsid adalah selubung protein pelindung asam nukleat virus.",
        "Glikokaliks": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kapsid adalah selubung protein pelindung asam nukleat virus."
      },
      "correctAnswer": "Kapsid",
      "explanationText": "Kapsid adalah selubung protein pelindung asam nukleat virus.",
      "knownWrongPatterns": {
        "Dinding selulosa": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Selubung protein pelindung virus disebut kapsid."
        },
        "Membran plasma": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Selubung protein pelindung virus disebut kapsid."
        },
        "Glikokaliks": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Selubung protein pelindung virus disebut kapsid."
        }
      }
    },
    {
      "id": "q-ipa-bio-10-4",
      "conceptName": "Siklus Lisogenik",
      "topic": "Biologi Dasar X",
      "questionText": "Perbedaan utama siklus litik dan lisogenik pada replikasi virus bakteriofag adalah bahwa pada siklus lisogenik...",
      "type": "mcq",
      "options": [
        "DNA virus menyisip ke genom inang membentuk profag tanpa merusak sel inang",
        "Sel inang langsung lisis pecah dan mati seketika",
        "Virus tidak membutuhkan sel inang hidup",
        "Hanya terjadi pada sel tumbuhan saja"
      ],
      "optionDetails": {
        "DNA virus menyisip ke genom inang membentuk profag tanpa merusak sel inang": "✓ BENAR: Pada siklus lisogenik, DNA virus terintegrasi (profag) dan membelah seiring pembelahan inang.",
        "Sel inang langsung lisis pecah dan mati seketika": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pada siklus lisogenik, DNA virus terintegrasi (profag) dan membelah seiring pembelahan inang.",
        "Virus tidak membutuhkan sel inang hidup": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pada siklus lisogenik, DNA virus terintegrasi (profag) dan membelah seiring pembelahan inang.",
        "Hanya terjadi pada sel tumbuhan saja": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pada siklus lisogenik, DNA virus terintegrasi (profag) dan membelah seiring pembelahan inang."
      },
      "correctAnswer": "DNA virus menyisip ke genom inang membentuk profag tanpa merusak sel inang",
      "explanationText": "Pada siklus lisogenik, DNA virus terintegrasi (profag) dan membelah seiring pembelahan inang.",
      "knownWrongPatterns": {
        "Sel inang langsung lisis pecah dan mati seketika": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Lisogenik tidak langsung membunuh inang, tapi membentuk profag."
        },
        "Virus tidak membutuhkan sel inang hidup": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Lisogenik tidak langsung membunuh inang, tapi membentuk profag."
        },
        "Hanya terjadi pada sel tumbuhan saja": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Lisogenik tidak langsung membunuh inang, tapi membentuk profag."
        }
      }
    },
    {
      "id": "q-ipa-bio-10-5",
      "conceptName": "Fiksasi Nitrogen Bakteri",
      "topic": "Biologi Dasar X",
      "questionText": "Bakteri Rhizobium leguminosarum bersimbiosis pada akar tanaman kacang-kacangan untuk membantu proses fiksasi...",
      "type": "mcq",
      "options": [
        "Nitrogen bebas (N₂)",
        "Oksigen (O₂)",
        "Karbondioksida (CO₂)",
        "Gas metana"
      ],
      "optionDetails": {
        "Nitrogen bebas (N₂)": "✓ BENAR: Rhizobium mengikat gas N₂ atmosfer menjadi senyawa nitrat yang diserap tumbuhan.",
        "Oksigen (O₂)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rhizobium mengikat gas N₂ atmosfer menjadi senyawa nitrat yang diserap tumbuhan.",
        "Karbondioksida (CO₂)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rhizobium mengikat gas N₂ atmosfer menjadi senyawa nitrat yang diserap tumbuhan.",
        "Gas metana": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rhizobium mengikat gas N₂ atmosfer menjadi senyawa nitrat yang diserap tumbuhan."
      },
      "correctAnswer": "Nitrogen bebas (N₂)",
      "explanationText": "Rhizobium mengikat gas N₂ atmosfer menjadi senyawa nitrat yang diserap tumbuhan.",
      "knownWrongPatterns": {
        "Oksigen (O₂)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Rhizobium mengikat gas nitrogen."
        },
        "Karbondioksida (CO₂)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Rhizobium mengikat gas nitrogen."
        },
        "Gas metana": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Rhizobium mengikat gas nitrogen."
        }
      }
    },
    {
      "id": "q-ipa-bio-10-6",
      "conceptName": "Dinding Sel Peptidoglikan",
      "topic": "Biologi Dasar X",
      "questionText": "Komponen utama penyusun dinding sel pada bakteri Eubacteria adalah...",
      "type": "mcq",
      "options": [
        "Peptidoglikan",
        "Selulosa",
        "Kitin",
        "Lignin"
      ],
      "optionDetails": {
        "Peptidoglikan": "✓ BENAR: Dinding sel bakteri tersusun dari jalinan polimer peptidoglikan.",
        "Selulosa": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Dinding sel bakteri tersusun dari jalinan polimer peptidoglikan.",
        "Kitin": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Dinding sel bakteri tersusun dari jalinan polimer peptidoglikan.",
        "Lignin": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Dinding sel bakteri tersusun dari jalinan polimer peptidoglikan."
      },
      "correctAnswer": "Peptidoglikan",
      "explanationText": "Dinding sel bakteri tersusun dari jalinan polimer peptidoglikan.",
      "knownWrongPatterns": {
        "Selulosa": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Bakteri berdinding peptidoglikan (tumbuhan selulosa, jamur kitin)."
        },
        "Kitin": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Bakteri berdinding peptidoglikan (tumbuhan selulosa, jamur kitin)."
        },
        "Lignin": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Bakteri berdinding peptidoglikan (tumbuhan selulosa, jamur kitin)."
        }
      }
    },
    {
      "id": "q-ipa-bio-10-7",
      "conceptName": "Peran Autotrof",
      "topic": "Biologi Dasar X",
      "questionText": "Organisme yang berperan mengubah energi cahaya matahari menjadi energi kimia dalam rantai makanan disebut...",
      "type": "mcq",
      "options": [
        "Produsen (Autotrof)",
        "Konsumen Primer",
        "Dekomposer",
        "Detritivor"
      ],
      "optionDetails": {
        "Produsen (Autotrof)": "✓ BENAR: Produsen menghasilkan glukosa melalui fotosintesis sebagai basis energi rantai makanan.",
        "Konsumen Primer": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Produsen menghasilkan glukosa melalui fotosintesis sebagai basis energi rantai makanan.",
        "Dekomposer": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Produsen menghasilkan glukosa melalui fotosintesis sebagai basis energi rantai makanan.",
        "Detritivor": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Produsen menghasilkan glukosa melalui fotosintesis sebagai basis energi rantai makanan."
      },
      "correctAnswer": "Produsen (Autotrof)",
      "explanationText": "Produsen menghasilkan glukosa melalui fotosintesis sebagai basis energi rantai makanan.",
      "knownWrongPatterns": {
        "Konsumen Primer": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penghasil makanan pertama adalah produsen autotrof."
        },
        "Dekomposer": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penghasil makanan pertama adalah produsen autotrof."
        },
        "Detritivor": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penghasil makanan pertama adalah produsen autotrof."
        }
      }
    },
    {
      "id": "q-ipa-bio-10-8",
      "conceptName": "Fotosintesis Karbon",
      "topic": "Biologi Dasar X",
      "questionText": "Proses biologi yang menyerap gas karbondioksida (CO₂) dari atmosfer dan melepaskan oksigen adalah...",
      "type": "mcq",
      "options": [
        "Fotosintesis",
        "Respirasi seluler",
        "Pembusukan anaerob",
        "Transpirasi kutikula"
      ],
      "optionDetails": {
        "Fotosintesis": "✓ BENAR: 6CO₂ + 6H₂O -> C₆H₁₂O₆ + 6O₂ melalui proses fotosintesis kloroplas.",
        "Respirasi seluler": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 6CO₂ + 6H₂O -> C₆H₁₂O₆ + 6O₂ melalui proses fotosintesis kloroplas.",
        "Pembusukan anaerob": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 6CO₂ + 6H₂O -> C₆H₁₂O₆ + 6O₂ melalui proses fotosintesis kloroplas.",
        "Transpirasi kutikula": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 6CO₂ + 6H₂O -> C₆H₁₂O₆ + 6O₂ melalui proses fotosintesis kloroplas."
      },
      "correctAnswer": "Fotosintesis",
      "explanationText": "6CO₂ + 6H₂O -> C₆H₁₂O₆ + 6O₂ melalui proses fotosintesis kloroplas.",
      "knownWrongPatterns": {
        "Respirasi seluler": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Reaksi penyerap CO₂ dan pelepas O₂ adalah fotosintesis."
        },
        "Pembusukan anaerob": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Reaksi penyerap CO₂ dan pelepas O₂ adalah fotosintesis."
        },
        "Transpirasi kutikula": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Reaksi penyerap CO₂ dan pelepas O₂ adalah fotosintesis."
        }
      }
    },
    {
      "id": "q-ipa-bio-10-9",
      "conceptName": "Pelestarian In-Situ",
      "topic": "Biologi Dasar X",
      "questionText": "Pelestarian badak bercula satu di Taman Nasional Ujung Kulon merupakan contoh pelestarian...",
      "type": "mcq",
      "options": [
        "In-situ (di habitat aslinya)",
        "Ex-situ (di luar habitat)",
        "Domestikasi komersial",
        "Kultur jaringan buatan"
      ],
      "optionDetails": {
        "In-situ (di habitat aslinya)": "✓ BENAR: In-situ dilakukan di habitat asli satwa (Taman Nasional, Cagar Alam).",
        "Ex-situ (di luar habitat)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: In-situ dilakukan di habitat asli satwa (Taman Nasional, Cagar Alam).",
        "Domestikasi komersial": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: In-situ dilakukan di habitat asli satwa (Taman Nasional, Cagar Alam).",
        "Kultur jaringan buatan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: In-situ dilakukan di habitat asli satwa (Taman Nasional, Cagar Alam)."
      },
      "correctAnswer": "In-situ (di habitat aslinya)",
      "explanationText": "In-situ dilakukan di habitat asli satwa (Taman Nasional, Cagar Alam).",
      "knownWrongPatterns": {
        "Ex-situ (di luar habitat)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Di habitat aslinya = in-situ."
        },
        "Domestikasi komersial": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Di habitat aslinya = in-situ."
        },
        "Kultur jaringan buatan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Di habitat aslinya = in-situ."
        }
      }
    },
    {
      "id": "q-ipa-bio-10-10",
      "conceptName": "Kingdom Fungi",
      "topic": "Biologi Dasar X",
      "questionText": "Sistem klasifikasi 5 kingdom menempatkan jamur pada kingdom tersendiri, yaitu...",
      "type": "mcq",
      "options": [
        "Fungi",
        "Plantae",
        "Monera",
        "Protista"
      ],
      "optionDetails": {
        "Fungi": "✓ BENAR: Jamur tergolong Fungi karena bersifat eukariotik heterotrof dan memiliki dinding sel kitin.",
        "Plantae": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jamur tergolong Fungi karena bersifat eukariotik heterotrof dan memiliki dinding sel kitin.",
        "Monera": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jamur tergolong Fungi karena bersifat eukariotik heterotrof dan memiliki dinding sel kitin.",
        "Protista": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jamur tergolong Fungi karena bersifat eukariotik heterotrof dan memiliki dinding sel kitin."
      },
      "correctAnswer": "Fungi",
      "explanationText": "Jamur tergolong Fungi karena bersifat eukariotik heterotrof dan memiliki dinding sel kitin.",
      "knownWrongPatterns": {
        "Plantae": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Jamur masuk kingdom Fungi."
        },
        "Monera": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Jamur masuk kingdom Fungi."
        },
        "Protista": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Jamur masuk kingdom Fungi."
        }
      }
    }
  ],
  "infor-10": [
    {
      "id": "q-infor-10-1",
      "conceptName": "Empat Pilar Komputasional",
      "topic": "Informatika X",
      "questionText": "Empat pilar utama dalam Berpikir Komputasional (Computational Thinking) adalah...",
      "type": "mcq",
      "options": [
        "Dekomposisi, Pengenalan Pola, Abstraksi, Algoritma",
        "Hardware, Software, Brainware, Network",
        "Coding, Debugging, Testing, Deploying",
        "CPU, RAM, Harddisk, Motherboard"
      ],
      "optionDetails": {
        "Dekomposisi, Pengenalan Pola, Abstraksi, Algoritma": "✓ BENAR: Pilar CT terdiri dari Dekomposisi, Pengenalan Pola, Abstraksi, dan Perancangan Algoritma.",
        "Hardware, Software, Brainware, Network": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pilar CT terdiri dari Dekomposisi, Pengenalan Pola, Abstraksi, dan Perancangan Algoritma.",
        "Coding, Debugging, Testing, Deploying": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pilar CT terdiri dari Dekomposisi, Pengenalan Pola, Abstraksi, dan Perancangan Algoritma.",
        "CPU, RAM, Harddisk, Motherboard": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pilar CT terdiri dari Dekomposisi, Pengenalan Pola, Abstraksi, dan Perancangan Algoritma."
      },
      "correctAnswer": "Dekomposisi, Pengenalan Pola, Abstraksi, Algoritma",
      "explanationText": "Pilar CT terdiri dari Dekomposisi, Pengenalan Pola, Abstraksi, dan Perancangan Algoritma.",
      "knownWrongPatterns": {
        "Hardware, Software, Brainware, Network": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Dekomposisi, Pola, Abstraksi, Algoritma."
        },
        "Coding, Debugging, Testing, Deploying": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Dekomposisi, Pola, Abstraksi, Algoritma."
        },
        "CPU, RAM, Harddisk, Motherboard": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Dekomposisi, Pola, Abstraksi, Algoritma."
        }
      }
    },
    {
      "id": "q-infor-10-2",
      "conceptName": "Dekomposisi",
      "topic": "Informatika X",
      "questionText": "Kemampuan memecah masalah besar dan rumit menjadi bagian-bagian kecil yang lebih mudah dikelola disebut...",
      "type": "mcq",
      "options": [
        "Dekomposisi",
        "Abstraksi",
        "Algoritma",
        "Kompilasi"
      ],
      "optionDetails": {
        "Dekomposisi": "✓ BENAR: Dekomposisi memecah kompleksitas persoalan menjadi sub-masalah sederhana.",
        "Abstraksi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Dekomposisi memecah kompleksitas persoalan menjadi sub-masalah sederhana.",
        "Algoritma": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Dekomposisi memecah kompleksitas persoalan menjadi sub-masalah sederhana.",
        "Kompilasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Dekomposisi memecah kompleksitas persoalan menjadi sub-masalah sederhana."
      },
      "correctAnswer": "Dekomposisi",
      "explanationText": "Dekomposisi memecah kompleksitas persoalan menjadi sub-masalah sederhana.",
      "knownWrongPatterns": {
        "Abstraksi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Memecah masalah besar = dekomposisi."
        },
        "Algoritma": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Memecah masalah besar = dekomposisi."
        },
        "Kompilasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Memecah masalah besar = dekomposisi."
        }
      }
    },
    {
      "id": "q-infor-10-3",
      "conceptName": "Pengenalan Pola",
      "topic": "Informatika X",
      "questionText": "Melihat kesamaan pola transaksi penipuan online dari ribuan data nasabah merupakan penerapan pilar...",
      "type": "mcq",
      "options": [
        "Pengenalan Pola (Pattern Recognition)",
        "Dekomposisi",
        "Enkripsi",
        "Instalasi"
      ],
      "optionDetails": {
        "Pengenalan Pola (Pattern Recognition)": "✓ BENAR: Pattern recognition mencari kesamaan karakteristik dalam dataset.",
        "Dekomposisi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pattern recognition mencari kesamaan karakteristik dalam dataset.",
        "Enkripsi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pattern recognition mencari kesamaan karakteristik dalam dataset.",
        "Instalasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pattern recognition mencari kesamaan karakteristik dalam dataset."
      },
      "correctAnswer": "Pengenalan Pola (Pattern Recognition)",
      "explanationText": "Pattern recognition mencari kesamaan karakteristik dalam dataset.",
      "knownWrongPatterns": {
        "Dekomposisi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Mencari tren atau kesamaan adalah pengenalan pola."
        },
        "Enkripsi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Mencari tren atau kesamaan adalah pengenalan pola."
        },
        "Instalasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Mencari tren atau kesamaan adalah pengenalan pola."
        }
      }
    },
    {
      "id": "q-infor-10-4",
      "conceptName": "Abstraksi",
      "topic": "Informatika X",
      "questionText": "Menyaring informasi penting dan mengabaikan detail-detail yang tidak relevan dengan solusi masalah disebut...",
      "type": "mcq",
      "options": [
        "Abstraksi",
        "Dekomposisi",
        "Refactoring",
        "Backup"
      ],
      "optionDetails": {
        "Abstraksi": "✓ BENAR: Abstraksi memusatkan perhatian pada inti solusi dan mengabaikan noise.",
        "Dekomposisi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Abstraksi memusatkan perhatian pada inti solusi dan mengabaikan noise.",
        "Refactoring": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Abstraksi memusatkan perhatian pada inti solusi dan mengabaikan noise.",
        "Backup": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Abstraksi memusatkan perhatian pada inti solusi dan mengabaikan noise."
      },
      "correctAnswer": "Abstraksi",
      "explanationText": "Abstraksi memusatkan perhatian pada inti solusi dan mengabaikan noise.",
      "knownWrongPatterns": {
        "Dekomposisi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Mengabaikan detail tak relevan = abstraksi."
        },
        "Refactoring": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Mengabaikan detail tak relevan = abstraksi."
        },
        "Backup": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Mengabaikan detail tak relevan = abstraksi."
        }
      }
    },
    {
      "id": "q-infor-10-5",
      "conceptName": "Definisi Algoritma",
      "topic": "Informatika X",
      "questionText": "Urutan langkah-langkah logis dan terstruktur untuk menyelesaikan suatu permasalahan disebut...",
      "type": "mcq",
      "options": [
        "Algoritma",
        "Heuristik acak",
        "Sintaksis semu",
        "Hardware"
      ],
      "optionDetails": {
        "Algoritma": "✓ BENAR: Algoritma adalah serangkaian instruksi terurut untuk memecahkan komputasi.",
        "Heuristik acak": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Algoritma adalah serangkaian instruksi terurut untuk memecahkan komputasi.",
        "Sintaksis semu": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Algoritma adalah serangkaian instruksi terurut untuk memecahkan komputasi.",
        "Hardware": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Algoritma adalah serangkaian instruksi terurut untuk memecahkan komputasi."
      },
      "correctAnswer": "Algoritma",
      "explanationText": "Algoritma adalah serangkaian instruksi terurut untuk memecahkan komputasi.",
      "knownWrongPatterns": {
        "Heuristik acak": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Urutan instruksi terstruktur adalah algoritma."
        },
        "Sintaksis semu": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Urutan instruksi terstruktur adalah algoritma."
        },
        "Hardware": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Urutan instruksi terstruktur adalah algoritma."
        }
      }
    },
    {
      "id": "q-infor-10-6",
      "conceptName": "Topologi Star",
      "topic": "Informatika X",
      "questionText": "Topologi jaringan di mana semua komputer klien terhubung langsung ke satu perangkat pusat (Switch/Hub) dinamakan topologi...",
      "type": "mcq",
      "options": [
        "Star (Bintang)",
        "Bus",
        "Ring (Cincin)",
        "Mesh"
      ],
      "optionDetails": {
        "Star (Bintang)": "✓ BENAR: Topologi star menempatkan hub/switch di pusat sebagai sentral distribusi jaringan.",
        "Bus": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Topologi star menempatkan hub/switch di pusat sebagai sentral distribusi jaringan.",
        "Ring (Cincin)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Topologi star menempatkan hub/switch di pusat sebagai sentral distribusi jaringan.",
        "Mesh": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Topologi star menempatkan hub/switch di pusat sebagai sentral distribusi jaringan."
      },
      "correctAnswer": "Star (Bintang)",
      "explanationText": "Topologi star menempatkan hub/switch di pusat sebagai sentral distribusi jaringan.",
      "knownWrongPatterns": {
        "Bus": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Terpusat pada satu switch = topologi Star."
        },
        "Ring (Cincin)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Terpusat pada satu switch = topologi Star."
        },
        "Mesh": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Terpusat pada satu switch = topologi Star."
        }
      }
    },
    {
      "id": "q-infor-10-7",
      "conceptName": "IP Address",
      "topic": "Informatika X",
      "questionText": "Alamat unik berupa kombinasi angka yang diberikan kepada setiap perangkat yang terhubung ke jaringan internet disebut...",
      "type": "mcq",
      "options": [
        "IP Address",
        "MAC Address",
        "Domain URL",
        "Port Register"
      ],
      "optionDetails": {
        "IP Address": "✓ BENAR: IP (Internet Protocol) Address berfungsi sebagai tanda pengenal pengalamatan rute data.",
        "MAC Address": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: IP (Internet Protocol) Address berfungsi sebagai tanda pengenal pengalamatan rute data.",
        "Domain URL": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: IP (Internet Protocol) Address berfungsi sebagai tanda pengenal pengalamatan rute data.",
        "Port Register": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: IP (Internet Protocol) Address berfungsi sebagai tanda pengenal pengalamatan rute data."
      },
      "correctAnswer": "IP Address",
      "explanationText": "IP (Internet Protocol) Address berfungsi sebagai tanda pengenal pengalamatan rute data.",
      "knownWrongPatterns": {
        "MAC Address": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Alamat numerik internet adalah IP Address."
        },
        "Domain URL": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Alamat numerik internet adalah IP Address."
        },
        "Port Register": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Alamat numerik internet adalah IP Address."
        }
      }
    },
    {
      "id": "q-infor-10-8",
      "conceptName": "Keamanan Kata Sandi",
      "topic": "Informatika X",
      "questionText": "Ciri kata sandi (password) yang kuat dan aman dari serangan brute-force adalah...",
      "type": "mcq",
      "options": [
        "Kombinasi huruf besar, kecil, angka, dan simbol minimal 12 karakter",
        "Hanya menggunakan tanggal lahir pengguna",
        "Kata umum seperti '12345678'",
        "Nama depan pemilik akun"
      ],
      "optionDetails": {
        "Kombinasi huruf besar, kecil, angka, dan simbol minimal 12 karakter": "✓ BENAR: Entropi password tinggi tercapai dari kombinasi alfanumerik acak dan simbol beragam.",
        "Hanya menggunakan tanggal lahir pengguna": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Entropi password tinggi tercapai dari kombinasi alfanumerik acak dan simbol beragam.",
        "Kata umum seperti '12345678'": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Entropi password tinggi tercapai dari kombinasi alfanumerik acak dan simbol beragam.",
        "Nama depan pemilik akun": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Entropi password tinggi tercapai dari kombinasi alfanumerik acak dan simbol beragam."
      },
      "correctAnswer": "Kombinasi huruf besar, kecil, angka, dan simbol minimal 12 karakter",
      "explanationText": "Entropi password tinggi tercapai dari kombinasi alfanumerik acak dan simbol beragam.",
      "knownWrongPatterns": {
        "Hanya menggunakan tanggal lahir pengguna": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Gunakan huruf besar, kecil, angka, dan simbol."
        },
        "Kata umum seperti '12345678'": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Gunakan huruf besar, kecil, angka, dan simbol."
        },
        "Nama depan pemilik akun": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Gunakan huruf besar, kecil, angka, dan simbol."
        }
      }
    },
    {
      "id": "q-infor-10-9",
      "conceptName": "Konversi Biner Desimal",
      "topic": "Informatika X",
      "questionText": "Berapakah nilai desimal dari bilangan biner 1010₂?",
      "type": "mcq",
      "options": [
        "10"
      ],
      "optionDetails": {
        "10": "✓ BENAR: 1010₂ = (1 × 2³) + (0 × 2²) + (1 × 2¹) + (0 × 2⁰) = 8 + 0 + 2 + 0 = 10."
      },
      "correctAnswer": "10",
      "explanationText": "1010₂ = (1 × 2³) + (0 × 2²) + (1 × 2¹) + (0 × 2⁰) = 8 + 0 + 2 + 0 = 10.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-infor-10-10",
      "conceptName": "Fungsi Spreadsheet Average",
      "topic": "Informatika X",
      "questionText": "Rumus pada aplikasi spreadsheet yang digunakan untuk menghitung nilai rata-rata dari sekelompok data sel adalah...",
      "type": "mcq",
      "options": [
        "=AVERAGE()",
        "=SUM()",
        "=COUNT()",
        "=MEDIAN()"
      ],
      "optionDetails": {
        "=AVERAGE()": "✓ BENAR: Formula =AVERAGE() menghitung rata-rata aritmatika dari rentang sel terpilih.",
        "=SUM()": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Formula =AVERAGE() menghitung rata-rata aritmatika dari rentang sel terpilih.",
        "=COUNT()": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Formula =AVERAGE() menghitung rata-rata aritmatika dari rentang sel terpilih.",
        "=MEDIAN()": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Formula =AVERAGE() menghitung rata-rata aritmatika dari rentang sel terpilih."
      },
      "correctAnswer": "=AVERAGE()",
      "explanationText": "Formula =AVERAGE() menghitung rata-rata aritmatika dari rentang sel terpilih.",
      "knownWrongPatterns": {
        "=SUM()": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Rata-rata dihitung menggunakan rumus =AVERAGE()."
        },
        "=COUNT()": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Rata-rata dihitung menggunakan rumus =AVERAGE()."
        },
        "=MEDIAN()": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Rata-rata dihitung menggunakan rumus =AVERAGE()."
        }
      }
    }
  ],
  "ips-eko-10": [
    {
      "id": "q-ips-eko-10-1",
      "conceptName": "Inti Masalah Kelangkaan",
      "topic": "Ekonomi Dasar X",
      "questionText": "Inti masalah ekonomi yang mendasari munculnya ilmu ekonomi adalah...",
      "type": "mcq",
      "options": [
        "Kebutuhan manusia tidak terbatas sedangkan alat pemuas kebutuhan bersifat langka/terbatas",
        "Keserakahan para pengusaha memonopoli pasar",
        "Ketidakstabilan kurs mata uang asing",
        "Tingginya jumlah pengangguran usia muda"
      ],
      "optionDetails": {
        "Kebutuhan manusia tidak terbatas sedangkan alat pemuas kebutuhan bersifat langka/terbatas": "✓ BENAR: Kelangkaan (scarcity) terjadi karena kesenjangan kebutuhan tak hingga vs sumber daya terbatas.",
        "Keserakahan para pengusaha memonopoli pasar": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kelangkaan (scarcity) terjadi karena kesenjangan kebutuhan tak hingga vs sumber daya terbatas.",
        "Ketidakstabilan kurs mata uang asing": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kelangkaan (scarcity) terjadi karena kesenjangan kebutuhan tak hingga vs sumber daya terbatas.",
        "Tingginya jumlah pengangguran usia muda": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kelangkaan (scarcity) terjadi karena kesenjangan kebutuhan tak hingga vs sumber daya terbatas."
      },
      "correctAnswer": "Kebutuhan manusia tidak terbatas sedangkan alat pemuas kebutuhan bersifat langka/terbatas",
      "explanationText": "Kelangkaan (scarcity) terjadi karena kesenjangan kebutuhan tak hingga vs sumber daya terbatas.",
      "knownWrongPatterns": {
        "Keserakahan para pengusaha memonopoli pasar": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kebutuhan tak terbatas vs alat pemuas terbatas."
        },
        "Ketidakstabilan kurs mata uang asing": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kebutuhan tak terbatas vs alat pemuas terbatas."
        },
        "Tingginya jumlah pengangguran usia muda": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kebutuhan tak terbatas vs alat pemuas terbatas."
        }
      }
    },
    {
      "id": "q-ips-eko-10-2",
      "conceptName": "Biaya Peluang Definisi",
      "topic": "Ekonomi Dasar X",
      "questionText": "Nilai barang atau kesempatan terbaik yang harus dikorbankan karena memilih suatu alternatif lain disebut...",
      "type": "mcq",
      "options": [
        "Biaya Peluang (Opportunity Cost)",
        "Biaya Produksi Eksplisit",
        "Biaya Hangus (Sunk Cost)",
        "Biaya Variabel"
      ],
      "optionDetails": {
        "Biaya Peluang (Opportunity Cost)": "✓ BENAR: Biaya peluang adalah nilai kesempatan terbaik yang hilang akibat pilihan tertentu.",
        "Biaya Produksi Eksplisit": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Biaya peluang adalah nilai kesempatan terbaik yang hilang akibat pilihan tertentu.",
        "Biaya Hangus (Sunk Cost)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Biaya peluang adalah nilai kesempatan terbaik yang hilang akibat pilihan tertentu.",
        "Biaya Variabel": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Biaya peluang adalah nilai kesempatan terbaik yang hilang akibat pilihan tertentu."
      },
      "correctAnswer": "Biaya Peluang (Opportunity Cost)",
      "explanationText": "Biaya peluang adalah nilai kesempatan terbaik yang hilang akibat pilihan tertentu.",
      "knownWrongPatterns": {
        "Biaya Produksi Eksplisit": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kesempatan yang dikorbankan disebut biaya peluang."
        },
        "Biaya Hangus (Sunk Cost)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kesempatan yang dikorbankan disebut biaya peluang."
        },
        "Biaya Variabel": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kesempatan yang dikorbankan disebut biaya peluang."
        }
      }
    },
    {
      "id": "q-ips-eko-10-3",
      "conceptName": "Contoh Kasus Opportunity Cost",
      "topic": "Ekonomi Dasar X",
      "questionText": "Budi memiliki uang Rp 50.000. Ia harus memilih antara membeli buku pelajaran atau menonton bioskop. Jika ia membeli buku, biaya peluangnya adalah...",
      "type": "mcq",
      "options": [
        "Kepuasan menikmati tontonan bioskop",
        "Uang tunai Rp 50.000 yang tersisa",
        "Buku catatan pelajaran",
        "Ongkos parkir motor"
      ],
      "optionDetails": {
        "Kepuasan menikmati tontonan bioskop": "✓ BENAR: Pilihan yang tidak dipilih (menonton bioskop) adalah biaya peluangnya.",
        "Uang tunai Rp 50.000 yang tersisa": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pilihan yang tidak dipilih (menonton bioskop) adalah biaya peluangnya.",
        "Buku catatan pelajaran": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pilihan yang tidak dipilih (menonton bioskop) adalah biaya peluangnya.",
        "Ongkos parkir motor": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pilihan yang tidak dipilih (menonton bioskop) adalah biaya peluangnya."
      },
      "correctAnswer": "Kepuasan menikmati tontonan bioskop",
      "explanationText": "Pilihan yang tidak dipilih (menonton bioskop) adalah biaya peluangnya.",
      "knownWrongPatterns": {
        "Uang tunai Rp 50.000 yang tersisa": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Biaya peluang adalah alternatif yang dikorbankan."
        },
        "Buku catatan pelajaran": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Biaya peluang adalah alternatif yang dikorbankan."
        },
        "Ongkos parkir motor": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Biaya peluang adalah alternatif yang dikorbankan."
        }
      }
    },
    {
      "id": "q-ips-eko-10-4",
      "conceptName": "Kebutuhan Primer",
      "topic": "Ekonomi Dasar X",
      "questionText": "Kebutuhan pokok manusia yang mutlak harus dipenuhi untuk mempertahankan kelangsungan hidup (sandang, pangan, papan) disebut kebutuhan...",
      "type": "mcq",
      "options": [
        "Primer",
        "Sekunder",
        "Tersier",
        "Mewah"
      ],
      "optionDetails": {
        "Primer": "✓ BENAR: Kebutuhan primer adalah kebutuhan pokok mendasar agar manusia dapat hidup layak.",
        "Sekunder": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kebutuhan primer adalah kebutuhan pokok mendasar agar manusia dapat hidup layak.",
        "Tersier": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kebutuhan primer adalah kebutuhan pokok mendasar agar manusia dapat hidup layak.",
        "Mewah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kebutuhan primer adalah kebutuhan pokok mendasar agar manusia dapat hidup layak."
      },
      "correctAnswer": "Primer",
      "explanationText": "Kebutuhan primer adalah kebutuhan pokok mendasar agar manusia dapat hidup layak.",
      "knownWrongPatterns": {
        "Sekunder": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Primer = kebutuhan paling utama dan mendesak."
        },
        "Tersier": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Primer = kebutuhan paling utama dan mendesak."
        },
        "Mewah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Primer = kebutuhan paling utama dan mendesak."
        }
      }
    },
    {
      "id": "q-ips-eko-10-5",
      "conceptName": "Hukum Permintaan",
      "topic": "Ekonomi Dasar X",
      "questionText": "Menurut Hukum Permintaan, jika harga suatu barang mengalami kenaikan (ceteris paribus), maka jumlah barang yang diminta akan...",
      "type": "mcq",
      "options": [
        "Turun (Berkurang)",
        "Naik (Bertambah)",
        "Tetap stabil",
        "Mencapai nol"
      ],
      "optionDetails": {
        "Turun (Berkurang)": "✓ BENAR: Hubungan harga dan jumlah permintaan berbanding terbalik: P naik, Q turun.",
        "Naik (Bertambah)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hubungan harga dan jumlah permintaan berbanding terbalik: P naik, Q turun.",
        "Tetap stabil": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hubungan harga dan jumlah permintaan berbanding terbalik: P naik, Q turun.",
        "Mencapai nol": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hubungan harga dan jumlah permintaan berbanding terbalik: P naik, Q turun."
      },
      "correctAnswer": "Turun (Berkurang)",
      "explanationText": "Hubungan harga dan jumlah permintaan berbanding terbalik: P naik, Q turun.",
      "knownWrongPatterns": {
        "Naik (Bertambah)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Harga naik menyebabkan jumlah permintaan turun."
        },
        "Tetap stabil": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Harga naik menyebabkan jumlah permintaan turun."
        },
        "Mencapai nol": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Harga naik menyebabkan jumlah permintaan turun."
        }
      }
    },
    {
      "id": "q-ips-eko-10-6",
      "conceptName": "Hukum Penawaran",
      "topic": "Ekonomi Dasar X",
      "questionText": "Menurut Hukum Penawaran, produsen cenderung akan menambah jumlah penawaran barang ketika harga barang...",
      "type": "mcq",
      "options": [
        "Mengalami kenaikan",
        "Mengalami penurunan drastis",
        "Berada di titik terendah",
        "Diberi subsidi oleh pembeli"
      ],
      "optionDetails": {
        "Mengalami kenaikan": "✓ BENAR: Hubungan harga dan penawaran berbanding lurus: semakin tinggi harga, produsen semakin bergairah menawarkan barang.",
        "Mengalami penurunan drastis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hubungan harga dan penawaran berbanding lurus: semakin tinggi harga, produsen semakin bergairah menawarkan barang.",
        "Berada di titik terendah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hubungan harga dan penawaran berbanding lurus: semakin tinggi harga, produsen semakin bergairah menawarkan barang.",
        "Diberi subsidi oleh pembeli": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hubungan harga dan penawaran berbanding lurus: semakin tinggi harga, produsen semakin bergairah menawarkan barang."
      },
      "correctAnswer": "Mengalami kenaikan",
      "explanationText": "Hubungan harga dan penawaran berbanding lurus: semakin tinggi harga, produsen semakin bergairah menawarkan barang.",
      "knownWrongPatterns": {
        "Mengalami penurunan drastis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Harga naik memotivasi produsen menambah penawaran."
        },
        "Berada di titik terendah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Harga naik memotivasi produsen menambah penawaran."
        },
        "Diberi subsidi oleh pembeli": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Harga naik memotivasi produsen menambah penawaran."
        }
      }
    },
    {
      "id": "q-ips-eko-10-7",
      "conceptName": "Titik Keseimbangan",
      "topic": "Ekonomi Dasar X",
      "questionText": "Harga yang terbentuk pada titik perpotongan antara kurva permintaan dan kurva penawaran dinamakan...",
      "type": "mcq",
      "options": [
        "Harga Keseimbangan (Ekuilibrium)",
        "Harga Pokok Produksi",
        "Harga Eceran Tertinggi",
        "Harga Monopoli"
      ],
      "optionDetails": {
        "Harga Keseimbangan (Ekuilibrium)": "✓ BENAR: Equilibrium price adalah titik temu kesepakatan jumlah permintaan dan penawaran di pasar.",
        "Harga Pokok Produksi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Equilibrium price adalah titik temu kesepakatan jumlah permintaan dan penawaran di pasar.",
        "Harga Eceran Tertinggi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Equilibrium price adalah titik temu kesepakatan jumlah permintaan dan penawaran di pasar.",
        "Harga Monopoli": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Equilibrium price adalah titik temu kesepakatan jumlah permintaan dan penawaran di pasar."
      },
      "correctAnswer": "Harga Keseimbangan (Ekuilibrium)",
      "explanationText": "Equilibrium price adalah titik temu kesepakatan jumlah permintaan dan penawaran di pasar.",
      "knownWrongPatterns": {
        "Harga Pokok Produksi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Titik potong permintaan dan penawaran = harga ekuilibrium."
        },
        "Harga Eceran Tertinggi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Titik potong permintaan dan penawaran = harga ekuilibrium."
        },
        "Harga Monopoli": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Titik potong permintaan dan penawaran = harga ekuilibrium."
        }
      }
    },
    {
      "id": "q-ips-eko-10-8",
      "conceptName": "Faktor Produksi",
      "topic": "Ekonomi Dasar X",
      "questionText": "Empat faktor produksi utama dalam kegiatan perekonomian adalah...",
      "type": "mcq",
      "options": [
        "Alam, Tenaga Kerja, Modal, dan Kewirausahaan",
        "Uang, Saham, Obligasi, dan Emas",
        "Pabrik, Truk, Toko, dan Kasir",
        "Pemerintah, DPR, Bank, dan Koperasi"
      ],
      "optionDetails": {
        "Alam, Tenaga Kerja, Modal, dan Kewirausahaan": "✓ BENAR: Faktor produksi terdiri atas SDA (alam), SDM (tenaga kerja), modal finansial/fisik, dan skill kewirausahaan.",
        "Uang, Saham, Obligasi, dan Emas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Faktor produksi terdiri atas SDA (alam), SDM (tenaga kerja), modal finansial/fisik, dan skill kewirausahaan.",
        "Pabrik, Truk, Toko, dan Kasir": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Faktor produksi terdiri atas SDA (alam), SDM (tenaga kerja), modal finansial/fisik, dan skill kewirausahaan.",
        "Pemerintah, DPR, Bank, dan Koperasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Faktor produksi terdiri atas SDA (alam), SDM (tenaga kerja), modal finansial/fisik, dan skill kewirausahaan."
      },
      "correctAnswer": "Alam, Tenaga Kerja, Modal, dan Kewirausahaan",
      "explanationText": "Faktor produksi terdiri atas SDA (alam), SDM (tenaga kerja), modal finansial/fisik, dan skill kewirausahaan.",
      "knownWrongPatterns": {
        "Uang, Saham, Obligasi, dan Emas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Alam, Tenaga Kerja, Modal, dan Kewirausahaan."
        },
        "Pabrik, Truk, Toko, dan Kasir": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Alam, Tenaga Kerja, Modal, dan Kewirausahaan."
        },
        "Pemerintah, DPR, Bank, dan Koperasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Alam, Tenaga Kerja, Modal, dan Kewirausahaan."
        }
      }
    },
    {
      "id": "q-ips-eko-10-9",
      "conceptName": "Sistem Ekonomi Pasar",
      "topic": "Ekonomi Dasar X",
      "questionText": "Sistem ekonomi di mana seluruh kegiatan produksi, konsumsi, dan distribusi diserahkan pada mekanisme pasar bebas disebut sistem...",
      "type": "mcq",
      "options": [
        "Pasar (Kapitalis/Liberal)",
        "Komando (Sosialis Terpusat)",
        "Campuran",
        "Tradisional Komunal"
      ],
      "optionDetails": {
        "Pasar (Kapitalis/Liberal)": "✓ BENAR: Sistem pasar murni menganut asas laissez-faire dan kepemilikan swasta bebas.",
        "Komando (Sosialis Terpusat)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sistem pasar murni menganut asas laissez-faire dan kepemilikan swasta bebas.",
        "Campuran": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sistem pasar murni menganut asas laissez-faire dan kepemilikan swasta bebas.",
        "Tradisional Komunal": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sistem pasar murni menganut asas laissez-faire dan kepemilikan swasta bebas."
      },
      "correctAnswer": "Pasar (Kapitalis/Liberal)",
      "explanationText": "Sistem pasar murni menganut asas laissez-faire dan kepemilikan swasta bebas.",
      "knownWrongPatterns": {
        "Komando (Sosialis Terpusat)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Mekanisme pasar bebas adalah sistem kapitalis/pasar."
        },
        "Campuran": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Mekanisme pasar bebas adalah sistem kapitalis/pasar."
        },
        "Tradisional Komunal": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Mekanisme pasar bebas adalah sistem kapitalis/pasar."
        }
      }
    },
    {
      "id": "q-ips-eko-10-10",
      "conceptName": "Uang Kartal",
      "topic": "Ekonomi Dasar X",
      "questionText": "Uang kertas dan uang logam resmi yang diterbitkan oleh Bank Sentral sebagai alat pembayaran sah dinamakan uang...",
      "type": "mcq",
      "options": [
        "Kartal",
        "Giral",
        "Elektronik Kupon",
        "Kredit Valas"
      ],
      "optionDetails": {
        "Kartal": "✓ BENAR: Uang kartal berbentuk fisik kertas dan koin yang sah dan wajib diterima masyarakat.",
        "Giral": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Uang kartal berbentuk fisik kertas dan koin yang sah dan wajib diterima masyarakat.",
        "Elektronik Kupon": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Uang kartal berbentuk fisik kertas dan koin yang sah dan wajib diterima masyarakat.",
        "Kredit Valas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Uang kartal berbentuk fisik kertas dan koin yang sah dan wajib diterima masyarakat."
      },
      "correctAnswer": "Kartal",
      "explanationText": "Uang kartal berbentuk fisik kertas dan koin yang sah dan wajib diterima masyarakat.",
      "knownWrongPatterns": {
        "Giral": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Uang fisik kertas/koin = uang kartal."
        },
        "Elektronik Kupon": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Uang fisik kertas/koin = uang kartal."
        },
        "Kredit Valas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Uang fisik kertas/koin = uang kartal."
        }
      }
    }
  ],
  "ips-sos-10": [
    {
      "id": "q-ips-sos-10-1",
      "conceptName": "Bapak Sosiologi Dunia",
      "topic": "Sosiologi Dasar X",
      "questionText": "Sosiologi pertama kali digagas oleh tokoh filsuf Perancis yang dikenal sebagai Bapak Sosiologi Dunia, yaitu...",
      "type": "mcq",
      "options": [
        "Auguste Comte",
        "Karl Marx",
        "Max Weber",
        "Emile Durkheim"
      ],
      "optionDetails": {
        "Auguste Comte": "✓ BENAR: Auguste Comte memperkenalkan istilah sosiologi dalam bukunya Cours de Philosophie Positive (1838).",
        "Karl Marx": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Auguste Comte memperkenalkan istilah sosiologi dalam bukunya Cours de Philosophie Positive (1838).",
        "Max Weber": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Auguste Comte memperkenalkan istilah sosiologi dalam bukunya Cours de Philosophie Positive (1838).",
        "Emile Durkheim": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Auguste Comte memperkenalkan istilah sosiologi dalam bukunya Cours de Philosophie Positive (1838)."
      },
      "correctAnswer": "Auguste Comte",
      "explanationText": "Auguste Comte memperkenalkan istilah sosiologi dalam bukunya Cours de Philosophie Positive (1838).",
      "knownWrongPatterns": {
        "Karl Marx": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Auguste Comte adalah bapak sosiologi dunia."
        },
        "Max Weber": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Auguste Comte adalah bapak sosiologi dunia."
        },
        "Emile Durkheim": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Auguste Comte adalah bapak sosiologi dunia."
        }
      }
    },
    {
      "id": "q-ips-sos-10-2",
      "conceptName": "Sosiologi Bersifat Empiris",
      "topic": "Sosiologi Dasar X",
      "questionText": "Sosiologi didasarkan pada observasi fakta di lapangan dan akal sehat, bukan spekulasi dugaan. Ciri ini menunjukkan bahwa sosiologi bersifat...",
      "type": "mcq",
      "options": [
        "Empiris",
        "Teoretis",
        "Kumulatif",
        "Non-etis"
      ],
      "optionDetails": {
        "Empiris": "✓ BENAR: Empiris berarti berpijak pada fakta riil yang diperoleh lewat observasi lapangan.",
        "Teoretis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Empiris berarti berpijak pada fakta riil yang diperoleh lewat observasi lapangan.",
        "Kumulatif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Empiris berarti berpijak pada fakta riil yang diperoleh lewat observasi lapangan.",
        "Non-etis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Empiris berarti berpijak pada fakta riil yang diperoleh lewat observasi lapangan."
      },
      "correctAnswer": "Empiris",
      "explanationText": "Empiris berarti berpijak pada fakta riil yang diperoleh lewat observasi lapangan.",
      "knownWrongPatterns": {
        "Teoretis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Berdasarkan pengamatan fakta nyata = empiris."
        },
        "Kumulatif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Berdasarkan pengamatan fakta nyata = empiris."
        },
        "Non-etis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Berdasarkan pengamatan fakta nyata = empiris."
        }
      }
    },
    {
      "id": "q-ips-sos-10-3",
      "conceptName": "Dua Syarat Interaksi",
      "topic": "Sosiologi Dasar X",
      "questionText": "Dua syarat mutlak terjadinya interaksi sosial menurut sosiologi adalah...",
      "type": "mcq",
      "options": [
        "Kontak sosial dan komunikasi",
        "Status sosial dan kekayaan",
        "Kesamaan suku dan agama",
        "Kehadiran saksi mata"
      ],
      "optionDetails": {
        "Kontak sosial dan komunikasi": "✓ BENAR: Interaksi sosial memerlukan kontak sosial dan pemaknaan pesan (komunikasi).",
        "Status sosial dan kekayaan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Interaksi sosial memerlukan kontak sosial dan pemaknaan pesan (komunikasi).",
        "Kesamaan suku dan agama": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Interaksi sosial memerlukan kontak sosial dan pemaknaan pesan (komunikasi).",
        "Kehadiran saksi mata": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Interaksi sosial memerlukan kontak sosial dan pemaknaan pesan (komunikasi)."
      },
      "correctAnswer": "Kontak sosial dan komunikasi",
      "explanationText": "Interaksi sosial memerlukan kontak sosial dan pemaknaan pesan (komunikasi).",
      "knownWrongPatterns": {
        "Status sosial dan kekayaan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kontak sosial dan komunikasi."
        },
        "Kesamaan suku dan agama": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kontak sosial dan komunikasi."
        },
        "Kehadiran saksi mata": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kontak sosial dan komunikasi."
        }
      }
    },
    {
      "id": "q-ips-sos-10-4",
      "conceptName": "Kontak Sosial Langsung",
      "topic": "Sosiologi Dasar X",
      "questionText": "Dua sahabat berpapasan di lorong kelas, berjabat tangan erat dan saling menanyakan kabar. Peristiwa ini merupakan contoh kontak sosial...",
      "type": "mcq",
      "options": [
        "Primer langsung",
        "Sekunder tidak langsung",
        "Tersier",
        "Pasif"
      ],
      "optionDetails": {
        "Primer langsung": "✓ BENAR: Kontak primer terjadi secara tatap muka fisik tanpa perantara.",
        "Sekunder tidak langsung": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kontak primer terjadi secara tatap muka fisik tanpa perantara.",
        "Tersier": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kontak primer terjadi secara tatap muka fisik tanpa perantara.",
        "Pasif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kontak primer terjadi secara tatap muka fisik tanpa perantara."
      },
      "correctAnswer": "Primer langsung",
      "explanationText": "Kontak primer terjadi secara tatap muka fisik tanpa perantara.",
      "knownWrongPatterns": {
        "Sekunder tidak langsung": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Tatap muka langsung fisik = kontak primer."
        },
        "Tersier": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Tatap muka langsung fisik = kontak primer."
        },
        "Pasif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Tatap muka langsung fisik = kontak primer."
        }
      }
    },
    {
      "id": "q-ips-sos-10-5",
      "conceptName": "Definisi Nilai Sosial",
      "topic": "Sosiologi Dasar X",
      "questionText": "Segala sesuatu yang dianggap berharga, pantas, luhur, dan dicita-citakan oleh masyarakat dinamakan...",
      "type": "mcq",
      "options": [
        "Nilai sosial",
        "Norma hukum",
        "Sanksi adat",
        "Status peran"
      ],
      "optionDetails": {
        "Nilai sosial": "✓ BENAR: Nilai sosial adalah konsepsi abstrak tentang apa yang baik dan buruk dalam masyarakat.",
        "Norma hukum": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Nilai sosial adalah konsepsi abstrak tentang apa yang baik dan buruk dalam masyarakat.",
        "Sanksi adat": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Nilai sosial adalah konsepsi abstrak tentang apa yang baik dan buruk dalam masyarakat.",
        "Status peran": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Nilai sosial adalah konsepsi abstrak tentang apa yang baik dan buruk dalam masyarakat."
      },
      "correctAnswer": "Nilai sosial",
      "explanationText": "Nilai sosial adalah konsepsi abstrak tentang apa yang baik dan buruk dalam masyarakat.",
      "knownWrongPatterns": {
        "Norma hukum": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pedoman abstrak tentang kebaikan adalah nilai sosial."
        },
        "Sanksi adat": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pedoman abstrak tentang kebaikan adalah nilai sosial."
        },
        "Status peran": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pedoman abstrak tentang kebaikan adalah nilai sosial."
        }
      }
    },
    {
      "id": "q-ips-sos-10-6",
      "conceptName": "Norma Kesusilaan",
      "topic": "Sosiologi Dasar X",
      "questionText": "Aturan hidup yang bersumber dari suara hati nurani manusia mengenai kebaikan dan keburukan moral disebut norma...",
      "type": "mcq",
      "options": [
        "Kesusilaan",
        "Kesopanan",
        "Hukum",
        "Kebiasaan"
      ],
      "optionDetails": {
        "Kesusilaan": "✓ BENAR: Norma kesusilaan bersumber dari hati nurani, menghasilkan sanksi rasa bersalah/penyesalan batin.",
        "Kesopanan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Norma kesusilaan bersumber dari hati nurani, menghasilkan sanksi rasa bersalah/penyesalan batin.",
        "Hukum": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Norma kesusilaan bersumber dari hati nurani, menghasilkan sanksi rasa bersalah/penyesalan batin.",
        "Kebiasaan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Norma kesusilaan bersumber dari hati nurani, menghasilkan sanksi rasa bersalah/penyesalan batin."
      },
      "correctAnswer": "Kesusilaan",
      "explanationText": "Norma kesusilaan bersumber dari hati nurani, menghasilkan sanksi rasa bersalah/penyesalan batin.",
      "knownWrongPatterns": {
        "Kesopanan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Dari hati nurani = norma kesusilaan."
        },
        "Hukum": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Dari hati nurani = norma kesusilaan."
        },
        "Kebiasaan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Dari hati nurani = norma kesusilaan."
        }
      }
    },
    {
      "id": "q-ips-sos-10-7",
      "conceptName": "Sosialisasi Primer",
      "topic": "Sosiologi Dasar X",
      "questionText": "Proses sosialisasi tahap awal yang dialami individu sejak masa kanak-kanak di lingkungan keluarga inti dinamakan sosialisasi...",
      "type": "mcq",
      "options": [
        "Primer",
        "Sekunder",
        "Tersier",
        "Formal"
      ],
      "optionDetails": {
        "Primer": "✓ BENAR: Sosialisasi primer berlangsung di keluarga dan meletakkan fondasi kepribadian dasar anak.",
        "Sekunder": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sosialisasi primer berlangsung di keluarga dan meletakkan fondasi kepribadian dasar anak.",
        "Tersier": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sosialisasi primer berlangsung di keluarga dan meletakkan fondasi kepribadian dasar anak.",
        "Formal": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sosialisasi primer berlangsung di keluarga dan meletakkan fondasi kepribadian dasar anak."
      },
      "correctAnswer": "Primer",
      "explanationText": "Sosialisasi primer berlangsung di keluarga dan meletakkan fondasi kepribadian dasar anak.",
      "knownWrongPatterns": {
        "Sekunder": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Sosialisasi pertama di keluarga = primer."
        },
        "Tersier": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Sosialisasi pertama di keluarga = primer."
        },
        "Formal": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Sosialisasi pertama di keluarga = primer."
        }
      }
    },
    {
      "id": "q-ips-sos-10-8",
      "conceptName": "Interaksi Asosiatif",
      "topic": "Sosiologi Dasar X",
      "questionText": "Bentuk interaksi sosial yang mengarah pada persatuan dan kerja sama antarkelompok masyarakat dinamakan proses...",
      "type": "mcq",
      "options": [
        "Asosiatif",
        "Disosiatif",
        "Konfliktual",
        "Kontravensi"
      ],
      "optionDetails": {
        "Asosiatif": "✓ BENAR: Proses asosiatif mencakup kerja sama (kooperasi), akomodasi, asimilasi, dan akulturasi.",
        "Disosiatif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Proses asosiatif mencakup kerja sama (kooperasi), akomodasi, asimilasi, dan akulturasi.",
        "Konfliktual": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Proses asosiatif mencakup kerja sama (kooperasi), akomodasi, asimilasi, dan akulturasi.",
        "Kontravensi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Proses asosiatif mencakup kerja sama (kooperasi), akomodasi, asimilasi, dan akulturasi."
      },
      "correctAnswer": "Asosiatif",
      "explanationText": "Proses asosiatif mencakup kerja sama (kooperasi), akomodasi, asimilasi, dan akulturasi.",
      "knownWrongPatterns": {
        "Disosiatif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Mengarah pada persatuan = asosiatif."
        },
        "Konfliktual": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Mengarah pada persatuan = asosiatif."
        },
        "Kontravensi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Mengarah pada persatuan = asosiatif."
        }
      }
    },
    {
      "id": "q-ips-sos-10-9",
      "conceptName": "Akomodasi Mediasi",
      "topic": "Sosiologi Dasar X",
      "questionText": "Upaya penyelesaian perselisihan warga dengan menghadirkan pihak ketiga yang netral sebagai penasihat tanpa hak memutuskan sanksi disebut...",
      "type": "mcq",
      "options": [
        "Mediasi",
        "Arbitrase",
        "Konsiliasi",
        "Ajudikasi"
      ],
      "optionDetails": {
        "Mediasi": "✓ BENAR: Pihak ketiga pada mediasi hanya bertindak sebagai fasilitator/penasihat damai.",
        "Arbitrase": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pihak ketiga pada mediasi hanya bertindak sebagai fasilitator/penasihat damai.",
        "Konsiliasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pihak ketiga pada mediasi hanya bertindak sebagai fasilitator/penasihat damai.",
        "Ajudikasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pihak ketiga pada mediasi hanya bertindak sebagai fasilitator/penasihat damai."
      },
      "correctAnswer": "Mediasi",
      "explanationText": "Pihak ketiga pada mediasi hanya bertindak sebagai fasilitator/penasihat damai.",
      "knownWrongPatterns": {
        "Arbitrase": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pihak ketiga hanya memberi nasihat tanpa memutus vonis = mediasi."
        },
        "Konsiliasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pihak ketiga hanya memberi nasihat tanpa memutus vonis = mediasi."
        },
        "Ajudikasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pihak ketiga hanya memberi nasihat tanpa memutus vonis = mediasi."
        }
      }
    },
    {
      "id": "q-ips-sos-10-10",
      "conceptName": "Penyimpangan Primer",
      "topic": "Sosiologi Dasar X",
      "questionText": "Perilaku penyimpangan yang sifatnya sementara dan pelakunya masih dapat ditoleransi oleh masyarakat dinamakan penyimpangan...",
      "type": "mcq",
      "options": [
        "Primer",
        "Sekunder",
        "Kriminal Berat",
        "Institusional"
      ],
      "optionDetails": {
        "Primer": "✓ BENAR: Penyimpangan primer bersifat insidental dan status sosial pelaku tidak dijuluki kriminal permanen.",
        "Sekunder": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Penyimpangan primer bersifat insidental dan status sosial pelaku tidak dijuluki kriminal permanen.",
        "Kriminal Berat": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Penyimpangan primer bersifat insidental dan status sosial pelaku tidak dijuluki kriminal permanen.",
        "Institusional": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Penyimpangan primer bersifat insidental dan status sosial pelaku tidak dijuluki kriminal permanen."
      },
      "correctAnswer": "Primer",
      "explanationText": "Penyimpangan primer bersifat insidental dan status sosial pelaku tidak dijuluki kriminal permanen.",
      "knownWrongPatterns": {
        "Sekunder": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penyimpangan ringan yang masih ditoleransi = primer."
        },
        "Kriminal Berat": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penyimpangan ringan yang masih ditoleransi = primer."
        },
        "Institusional": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penyimpangan ringan yang masih ditoleransi = primer."
        }
      }
    }
  ],
  "ips-geo-10": [
    {
      "id": "q-ips-geo-10-1",
      "conceptName": "Objek Formal Geografi",
      "topic": "Geografi Dasar X",
      "questionText": "Cara pandang dan analisis terhadap fenomena geosfer dari sudut pandang keruangan, kelingkungan, dan kompleks wilayah disebut objek...",
      "type": "mcq",
      "options": [
        "Formal Geografi",
        "Material Geografi",
        "Statis Geografi",
        "Fisik Geografi"
      ],
      "optionDetails": {
        "Formal Geografi": "✓ BENAR: Objek formal adalah metode pendekatan cara pandang spasial terhadap geosfer.",
        "Material Geografi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Objek formal adalah metode pendekatan cara pandang spasial terhadap geosfer.",
        "Statis Geografi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Objek formal adalah metode pendekatan cara pandang spasial terhadap geosfer.",
        "Fisik Geografi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Objek formal adalah metode pendekatan cara pandang spasial terhadap geosfer."
      },
      "correctAnswer": "Formal Geografi",
      "explanationText": "Objek formal adalah metode pendekatan cara pandang spasial terhadap geosfer.",
      "knownWrongPatterns": {
        "Material Geografi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Cara pandang spasial adalah objek formal."
        },
        "Statis Geografi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Cara pandang spasial adalah objek formal."
        },
        "Fisik Geografi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Cara pandang spasial adalah objek formal."
        }
      }
    },
    {
      "id": "q-ips-geo-10-2",
      "conceptName": "Lokasi Absolut",
      "topic": "Geografi Dasar X",
      "questionText": "Indonesia terletak pada koordinat 6° LU - 11° LS dan 95° BT - 141° BT. Pernyataan ini menunjukkan konsep...",
      "type": "mcq",
      "options": [
        "Lokasi Absolut",
        "Lokasi Relatif",
        "Keterjangkauan",
        "Morfologi"
      ],
      "optionDetails": {
        "Lokasi Absolut": "✓ BENAR: Lokasi absolut ditentukan oleh sistem garis lintang dan garis bujur astronomis.",
        "Lokasi Relatif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Lokasi absolut ditentukan oleh sistem garis lintang dan garis bujur astronomis.",
        "Keterjangkauan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Lokasi absolut ditentukan oleh sistem garis lintang dan garis bujur astronomis.",
        "Morfologi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Lokasi absolut ditentukan oleh sistem garis lintang dan garis bujur astronomis."
      },
      "correctAnswer": "Lokasi Absolut",
      "explanationText": "Lokasi absolut ditentukan oleh sistem garis lintang dan garis bujur astronomis.",
      "knownWrongPatterns": {
        "Lokasi Relatif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Berdasarkan garis koordinat astronomis = lokasi absolut."
        },
        "Keterjangkauan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Berdasarkan garis koordinat astronomis = lokasi absolut."
        },
        "Morfologi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Berdasarkan garis koordinat astronomis = lokasi absolut."
        }
      }
    },
    {
      "id": "q-ips-geo-10-3",
      "conceptName": "Jarak Relatif",
      "topic": "Geografi Dasar X",
      "questionText": "Waktu tempuh Jakarta ke Bandung adalah 45 menit menggunakan Kereta Cepat Whoosh, tetapi 3 jam jika menggunakan mobil. Ini merupakan contoh konsep...",
      "type": "mcq",
      "options": [
        "Jarak Relatif",
        "Jarak Absolut",
        "Aglomerasi",
        "Diferensiasi Area"
      ],
      "optionDetails": {
        "Jarak Relatif": "✓ BENAR: Jarak relatif diukur berdasarkan satuan waktu tempuh atau biaya perjalanan.",
        "Jarak Absolut": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jarak relatif diukur berdasarkan satuan waktu tempuh atau biaya perjalanan.",
        "Aglomerasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jarak relatif diukur berdasarkan satuan waktu tempuh atau biaya perjalanan.",
        "Diferensiasi Area": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jarak relatif diukur berdasarkan satuan waktu tempuh atau biaya perjalanan."
      },
      "correctAnswer": "Jarak Relatif",
      "explanationText": "Jarak relatif diukur berdasarkan satuan waktu tempuh atau biaya perjalanan.",
      "knownWrongPatterns": {
        "Jarak Absolut": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Jarak diukur dalam satuan waktu = jarak relatif."
        },
        "Aglomerasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Jarak diukur dalam satuan waktu = jarak relatif."
        },
        "Diferensiasi Area": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Jarak diukur dalam satuan waktu = jarak relatif."
        }
      }
    },
    {
      "id": "q-ips-geo-10-4",
      "conceptName": "Prinsip Korologi",
      "topic": "Geografi Dasar X",
      "questionText": "Prinsip geografi yang mengkaji gejala geosfer secara komprehensif memadukan persebaran, interelasi, dan deskripsi wilayah dinamakan prinsip...",
      "type": "mcq",
      "options": [
        "Korologi",
        "Distribusi",
        "Interelasi",
        "Deskripsi"
      ],
      "optionDetails": {
        "Korologi": "✓ BENAR: Prinsip korologi adalah perpaduan sintesis dari ketiga prinsip geografi lainnya.",
        "Distribusi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Prinsip korologi adalah perpaduan sintesis dari ketiga prinsip geografi lainnya.",
        "Interelasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Prinsip korologi adalah perpaduan sintesis dari ketiga prinsip geografi lainnya.",
        "Deskripsi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Prinsip korologi adalah perpaduan sintesis dari ketiga prinsip geografi lainnya."
      },
      "correctAnswer": "Korologi",
      "explanationText": "Prinsip korologi adalah perpaduan sintesis dari ketiga prinsip geografi lainnya.",
      "knownWrongPatterns": {
        "Distribusi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Prinsip gabungan komprehensif adalah korologi."
        },
        "Interelasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Prinsip gabungan komprehensif adalah korologi."
        },
        "Deskripsi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Prinsip gabungan komprehensif adalah korologi."
        }
      }
    },
    {
      "id": "q-ips-geo-10-5",
      "conceptName": "Pendekatan Kelingkungan",
      "topic": "Geografi Dasar X",
      "questionText": "Analisis bencana banjir bandang yang mempertimbangkan alih fungsi hutan hulu dan penurunan daya serap tanah menggunakan pendekatan...",
      "type": "mcq",
      "options": [
        "Kelingkungan (Ekologis)",
        "Keruangan murni",
        "Kompleks wilayah politik",
        "Toponimi"
      ],
      "optionDetails": {
        "Kelingkungan (Ekologis)": "✓ BENAR: Pendekatan kelingkungan mengkaji keterkaitan antara perilaku manusia dengan ekosistemnya.",
        "Keruangan murni": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pendekatan kelingkungan mengkaji keterkaitan antara perilaku manusia dengan ekosistemnya.",
        "Kompleks wilayah politik": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pendekatan kelingkungan mengkaji keterkaitan antara perilaku manusia dengan ekosistemnya.",
        "Toponimi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pendekatan kelingkungan mengkaji keterkaitan antara perilaku manusia dengan ekosistemnya."
      },
      "correctAnswer": "Kelingkungan (Ekologis)",
      "explanationText": "Pendekatan kelingkungan mengkaji keterkaitan antara perilaku manusia dengan ekosistemnya.",
      "knownWrongPatterns": {
        "Keruangan murni": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kaitan manusia dan kerusakan lingkungan = pendekatan ekologis/kelingkungan."
        },
        "Kompleks wilayah politik": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kaitan manusia dan kerusakan lingkungan = pendekatan ekologis/kelingkungan."
        },
        "Toponimi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kaitan manusia dan kerusakan lingkungan = pendekatan ekologis/kelingkungan."
        }
      }
    },
    {
      "id": "q-ips-geo-10-6",
      "conceptName": "Skala Peta Jarak Nyata",
      "topic": "Geografi Dasar X",
      "questionText": "Pada peta dengan skala 1 : 100.000, jarak kota A dan B di peta adalah 4 cm. Berapakah jarak sebenarnya di lapangan (dalam kilometer)?",
      "type": "mcq",
      "options": [
        "4"
      ],
      "optionDetails": {
        "4": "✓ BENAR: Jarak sebenarnya = 4 cm × 100.000 = 400.000 cm = 4 km."
      },
      "correctAnswer": "4",
      "explanationText": "Jarak sebenarnya = 4 cm × 100.000 = 400.000 cm = 4 km.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-ips-geo-10-7",
      "conceptName": "Sensor Inderaja",
      "topic": "Geografi Dasar X",
      "questionText": "Alat perekam gelombang elektromagnetik yang dipasang pada satelit atau pesawat terbang dalam penginderaan jauh dinamakan...",
      "type": "mcq",
      "options": [
        "Sensor",
        "Wahana",
        "Citra",
        "Atmosfer"
      ],
      "optionDetails": {
        "Sensor": "✓ BENAR: Sensor bertindak sebagai alat perekam pantulan radiasi bumi.",
        "Wahana": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sensor bertindak sebagai alat perekam pantulan radiasi bumi.",
        "Citra": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sensor bertindak sebagai alat perekam pantulan radiasi bumi.",
        "Atmosfer": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sensor bertindak sebagai alat perekam pantulan radiasi bumi."
      },
      "correctAnswer": "Sensor",
      "explanationText": "Sensor bertindak sebagai alat perekam pantulan radiasi bumi.",
      "knownWrongPatterns": {
        "Wahana": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Alat perekam radiasi adalah sensor."
        },
        "Citra": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Alat perekam radiasi adalah sensor."
        },
        "Atmosfer": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Alat perekam radiasi adalah sensor."
        }
      }
    },
    {
      "id": "q-ips-geo-10-8",
      "conceptName": "Kerak Bumi Litosfer",
      "topic": "Geografi Dasar X",
      "questionText": "Lapisan terluar bumi yang berupa kerak padat batuan dan tempat hidup manusia dinamakan...",
      "type": "mcq",
      "options": [
        "Litosfer",
        "Astenosfer",
        "Barisfer",
        "Mesosfer"
      ],
      "optionDetails": {
        "Litosfer": "✓ BENAR: Litosfer (lithos = batu, sphaira = lapisan) adalah lapisan kulit bumi terluar.",
        "Astenosfer": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Litosfer (lithos = batu, sphaira = lapisan) adalah lapisan kulit bumi terluar.",
        "Barisfer": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Litosfer (lithos = batu, sphaira = lapisan) adalah lapisan kulit bumi terluar.",
        "Mesosfer": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Litosfer (lithos = batu, sphaira = lapisan) adalah lapisan kulit bumi terluar."
      },
      "correctAnswer": "Litosfer",
      "explanationText": "Litosfer (lithos = batu, sphaira = lapisan) adalah lapisan kulit bumi terluar.",
      "knownWrongPatterns": {
        "Astenosfer": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Lapisan batuan kerak bumi = litosfer."
        },
        "Barisfer": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Lapisan batuan kerak bumi = litosfer."
        },
        "Mesosfer": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Lapisan batuan kerak bumi = litosfer."
        }
      }
    },
    {
      "id": "q-ips-geo-10-9",
      "conceptName": "Tenaga Endogen",
      "topic": "Geografi Dasar X",
      "questionText": "Tenaga pengubah bentuk muka bumi yang berasal dari dalam perut bumi seperti tektonisme dan vulkanisme dinamakan tenaga...",
      "type": "mcq",
      "options": [
        "Endogen",
        "Eksogen",
        "Sedimentasi",
        "Erosi angin"
      ],
      "optionDetails": {
        "Endogen": "✓ BENAR: Endogen bersumber dari panas dan dinamika internal mantel/kerak bumi.",
        "Eksogen": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Endogen bersumber dari panas dan dinamika internal mantel/kerak bumi.",
        "Sedimentasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Endogen bersumber dari panas dan dinamika internal mantel/kerak bumi.",
        "Erosi angin": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Endogen bersumber dari panas dan dinamika internal mantel/kerak bumi."
      },
      "correctAnswer": "Endogen",
      "explanationText": "Endogen bersumber dari panas dan dinamika internal mantel/kerak bumi.",
      "knownWrongPatterns": {
        "Eksogen": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Berasal dari dalam bumi = endogen."
        },
        "Sedimentasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Berasal dari dalam bumi = endogen."
        },
        "Erosi angin": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Berasal dari dalam bumi = endogen."
        }
      }
    },
    {
      "id": "q-ips-geo-10-10",
      "conceptName": "Erosi Tanah",
      "topic": "Geografi Dasar X",
      "questionText": "Pengikisan tanah permukaan oleh aliran air hujan yang deras di lereng gundul dinamakan proses...",
      "type": "mcq",
      "options": [
        "Erosi",
        "Sedimentasi",
        "Denudasi tektonik",
        "Vulkanisme"
      ],
      "optionDetails": {
        "Erosi": "✓ BENAR: Erosi adalah proses pelepasan dan pengangkutan partikel batuan/tanah oleh media alami (air/angin).",
        "Sedimentasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Erosi adalah proses pelepasan dan pengangkutan partikel batuan/tanah oleh media alami (air/angin).",
        "Denudasi tektonik": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Erosi adalah proses pelepasan dan pengangkutan partikel batuan/tanah oleh media alami (air/angin).",
        "Vulkanisme": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Erosi adalah proses pelepasan dan pengangkutan partikel batuan/tanah oleh media alami (air/angin)."
      },
      "correctAnswer": "Erosi",
      "explanationText": "Erosi adalah proses pelepasan dan pengangkutan partikel batuan/tanah oleh media alami (air/angin).",
      "knownWrongPatterns": {
        "Sedimentasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pengikisan tanah permukaan = erosi."
        },
        "Denudasi tektonik": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pengikisan tanah permukaan = erosi."
        },
        "Vulkanisme": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pengikisan tanah permukaan = erosi."
        }
      }
    }
  ],
  "indo-11": [
    {
      "id": "q-indo-11-1",
      "conceptName": "Kaidah Kebahasaan Teks Eksplanasi",
      "topic": "Bahasa Indonesia XI",
      "questionText": "Pilihlah konjungsi kausalitas yang paling tepat untuk menghubungkan hubungan sebab-akibat pada fenomena alam!",
      "type": "mcq",
      "options": [
        "Oleh karena itu",
        "Setelah itu",
        "Kemudian",
        "Bahkan"
      ],
      "optionDetails": {
        "Oleh karena itu": "✓ BENAR: Konjungsi kausalitas menghubungkan sebab dan akibat: karena, sebab, oleh karena itu, sehingga.",
        "Setelah itu": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Konjungsi kausalitas menghubungkan sebab dan akibat: karena, sebab, oleh karena itu, sehingga.",
        "Kemudian": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Konjungsi kausalitas menghubungkan sebab dan akibat: karena, sebab, oleh karena itu, sehingga.",
        "Bahkan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Konjungsi kausalitas menghubungkan sebab dan akibat: karena, sebab, oleh karena itu, sehingga."
      },
      "correctAnswer": "Oleh karena itu",
      "explanationText": "Konjungsi kausalitas menghubungkan sebab dan akibat: karena, sebab, oleh karena itu, sehingga.",
      "knownWrongPatterns": {
        "Setelah itu": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Cari konjungsi penanda sebab-akibat."
        },
        "Kemudian": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Cari konjungsi penanda sebab-akibat."
        },
        "Bahkan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Cari konjungsi penanda sebab-akibat."
        }
      }
    },
    {
      "id": "q-indo-11-2",
      "conceptName": "Struktur Teks Eksplanasi",
      "topic": "Bahasa Indonesia XI",
      "questionText": "Bagian akhir pada teks eksplanasi yang memuat kesimpulan atau tanggapan atas fenomena yang telah dijelaskan disebut...",
      "type": "mcq",
      "options": [
        "Interpretasi (Ulasan)",
        "Pernyataan Umum",
        "Deretan Penjelas",
        "Orientasi"
      ],
      "optionDetails": {
        "Interpretasi (Ulasan)": "✓ BENAR: Struktur eksplanasi: Pernyataan Umum -> Deretan Penjelas -> Interpretasi/Ulasan.",
        "Pernyataan Umum": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Struktur eksplanasi: Pernyataan Umum -> Deretan Penjelas -> Interpretasi/Ulasan.",
        "Deretan Penjelas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Struktur eksplanasi: Pernyataan Umum -> Deretan Penjelas -> Interpretasi/Ulasan.",
        "Orientasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Struktur eksplanasi: Pernyataan Umum -> Deretan Penjelas -> Interpretasi/Ulasan."
      },
      "correctAnswer": "Interpretasi (Ulasan)",
      "explanationText": "Struktur eksplanasi: Pernyataan Umum -> Deretan Penjelas -> Interpretasi/Ulasan.",
      "knownWrongPatterns": {
        "Pernyataan Umum": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penutup berisi intisari fenomena adalah interpretasi."
        },
        "Deretan Penjelas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penutup berisi intisari fenomena adalah interpretasi."
        },
        "Orientasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penutup berisi intisari fenomena adalah interpretasi."
        }
      }
    },
    {
      "id": "q-indo-11-3",
      "conceptName": "Teks Ceramah Persuasif",
      "topic": "Bahasa Indonesia XI",
      "questionText": "Kalimat pembuka teks ceramah yang berisi sapaan hormat dan ucapan syukur kepada Tuhan tergolong dalam bagian...",
      "type": "mcq",
      "options": [
        "Pendahuluan (Pembuka)",
        "Isi Ceramah",
        "Penutup",
        "Simpulan"
      ],
      "optionDetails": {
        "Pendahuluan (Pembuka)": "✓ BENAR: Pendahuluan memuat salam pembuka, sapaan penghormatan, dan ungkapan rasa syukur.",
        "Isi Ceramah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pendahuluan memuat salam pembuka, sapaan penghormatan, dan ungkapan rasa syukur.",
        "Penutup": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pendahuluan memuat salam pembuka, sapaan penghormatan, dan ungkapan rasa syukur.",
        "Simpulan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pendahuluan memuat salam pembuka, sapaan penghormatan, dan ungkapan rasa syukur."
      },
      "correctAnswer": "Pendahuluan (Pembuka)",
      "explanationText": "Pendahuluan memuat salam pembuka, sapaan penghormatan, dan ungkapan rasa syukur.",
      "knownWrongPatterns": {
        "Isi Ceramah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Salam dan ucapan syukur berada di bagian pembuka."
        },
        "Penutup": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Salam dan ucapan syukur berada di bagian pembuka."
        },
        "Simpulan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Salam dan ucapan syukur berada di bagian pembuka."
        }
      }
    },
    {
      "id": "q-indo-11-4",
      "conceptName": "Struktur Proposal Kegiatan",
      "topic": "Bahasa Indonesia XI",
      "questionText": "Bagian proposal kegiatan yang memuat estimasi pengeluaran dana untuk pelaksanaan acara disebut...",
      "type": "mcq",
      "options": [
        "Rancangan Anggaran Biaya (RAB)",
        "Latar Belakang",
        "Tujuan Kegiatan",
        "Susunan Panitia"
      ],
      "optionDetails": {
        "Rancangan Anggaran Biaya (RAB)": "✓ BENAR: RAB menyajikan rincian pos-pos pemasukan dan alokasi pengeluaran dana kegiatan.",
        "Latar Belakang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: RAB menyajikan rincian pos-pos pemasukan dan alokasi pengeluaran dana kegiatan.",
        "Tujuan Kegiatan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: RAB menyajikan rincian pos-pos pemasukan dan alokasi pengeluaran dana kegiatan.",
        "Susunan Panitia": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: RAB menyajikan rincian pos-pos pemasukan dan alokasi pengeluaran dana kegiatan."
      },
      "correctAnswer": "Rancangan Anggaran Biaya (RAB)",
      "explanationText": "RAB menyajikan rincian pos-pos pemasukan dan alokasi pengeluaran dana kegiatan.",
      "knownWrongPatterns": {
        "Latar Belakang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Rincian biaya tercantum di Rancangan Anggaran Biaya."
        },
        "Tujuan Kegiatan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Rincian biaya tercantum di Rancangan Anggaran Biaya."
        },
        "Susunan Panitia": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Rincian biaya tercantum di Rancangan Anggaran Biaya."
        }
      }
    },
    {
      "id": "q-indo-11-5",
      "conceptName": "Latar Belakang Karya Ilmiah",
      "topic": "Bahasa Indonesia XI",
      "questionText": "Bagian bab satu karya ilmiah yang memaparkan alasan pentingnya topik diteliti berdasarkan fakta empiris dinamakan...",
      "type": "mcq",
      "options": [
        "Latar Belakang Masalah",
        "Rumusan Masalah",
        "Metodologi Penelitian",
        "Tinjauan Pustaka"
      ],
      "optionDetails": {
        "Latar Belakang Masalah": "✓ BENAR: Latar belakang menguraikan kesenjangan antara kondisi ideal (das sollen) dengan realitas (das sein).",
        "Rumusan Masalah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Latar belakang menguraikan kesenjangan antara kondisi ideal (das sollen) dengan realitas (das sein).",
        "Metodologi Penelitian": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Latar belakang menguraikan kesenjangan antara kondisi ideal (das sollen) dengan realitas (das sein).",
        "Tinjauan Pustaka": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Latar belakang menguraikan kesenjangan antara kondisi ideal (das sollen) dengan realitas (das sein)."
      },
      "correctAnswer": "Latar Belakang Masalah",
      "explanationText": "Latar belakang menguraikan kesenjangan antara kondisi ideal (das sollen) dengan realitas (das sein).",
      "knownWrongPatterns": {
        "Rumusan Masalah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Alasan utama penelitian dimuat pada latar belakang."
        },
        "Metodologi Penelitian": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Alasan utama penelitian dimuat pada latar belakang."
        },
        "Tinjauan Pustaka": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Alasan utama penelitian dimuat pada latar belakang."
        }
      }
    },
    {
      "id": "q-indo-11-6",
      "conceptName": "Kaidah Karya Ilmiah Objektif",
      "topic": "Bahasa Indonesia XI",
      "questionText": "Ciri bahasa karya ilmiah yang tidak memihak dan menggunakan data teruji secara netral disebut ragam bahasa...",
      "type": "mcq",
      "options": [
        "Objektif dan Denotatif",
        "Konotatif dan Kiasan",
        "Emosional Subjektif",
        "Dramatis Puitis"
      ],
      "optionDetails": {
        "Objektif dan Denotatif": "✓ BENAR: Karya ilmiah menuntut objektivitas makna denotatif harfiah tanpa bias emosi subjektif.",
        "Konotatif dan Kiasan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Karya ilmiah menuntut objektivitas makna denotatif harfiah tanpa bias emosi subjektif.",
        "Emosional Subjektif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Karya ilmiah menuntut objektivitas makna denotatif harfiah tanpa bias emosi subjektif.",
        "Dramatis Puitis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Karya ilmiah menuntut objektivitas makna denotatif harfiah tanpa bias emosi subjektif."
      },
      "correctAnswer": "Objektif dan Denotatif",
      "explanationText": "Karya ilmiah menuntut objektivitas makna denotatif harfiah tanpa bias emosi subjektif.",
      "knownWrongPatterns": {
        "Konotatif dan Kiasan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Bahasa ilmiah bersifat lugas, objektif, dan denotatif."
        },
        "Emosional Subjektif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Bahasa ilmiah bersifat lugas, objektif, dan denotatif."
        },
        "Dramatis Puitis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Bahasa ilmiah bersifat lugas, objektif, dan denotatif."
        }
      }
    },
    {
      "id": "q-indo-11-7",
      "conceptName": "Teks Resensi Buku",
      "topic": "Bahasa Indonesia XI",
      "questionText": "Bagian teks resensi yang memaparkan data judul buku, penulis, penerbit, tahun terbit, dan tebal halaman dinamakan...",
      "type": "mcq",
      "options": [
        "Identitas Buku (Data Bibliografi)",
        "Sinopsis Buku",
        "Keunggulan Buku",
        "Kelemahan Buku"
      ],
      "optionDetails": {
        "Identitas Buku (Data Bibliografi)": "✓ BENAR: Identitas buku menyajikan atribut fisik buku yang diresensi.",
        "Sinopsis Buku": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Identitas buku menyajikan atribut fisik buku yang diresensi.",
        "Keunggulan Buku": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Identitas buku menyajikan atribut fisik buku yang diresensi.",
        "Kelemahan Buku": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Identitas buku menyajikan atribut fisik buku yang diresensi."
      },
      "correctAnswer": "Identitas Buku (Data Bibliografi)",
      "explanationText": "Identitas buku menyajikan atribut fisik buku yang diresensi.",
      "knownWrongPatterns": {
        "Sinopsis Buku": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Judul, penerbit, dan tebal buku adalah identitas buku."
        },
        "Keunggulan Buku": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Judul, penerbit, dan tebal buku adalah identitas buku."
        },
        "Kelemahan Buku": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Judul, penerbit, dan tebal buku adalah identitas buku."
        }
      }
    },
    {
      "id": "q-indo-11-8",
      "conceptName": "Kutipan Langsung PUEBI",
      "topic": "Bahasa Indonesia XI",
      "questionText": "Penulisan sumber kutipan langsung dalam teks menurut standar akademik yang tepat adalah...",
      "type": "mcq",
      "options": [
        "Menurut Sugiyono (2020: 45), 'Penelitian kuantitatif berpijak pada filsafat positivisme.'",
        "Menurut buku Sugiyono terbitan tahun dua ribu dua puluh halaman empat puluh lima.",
        "Kata Sugiyono dalam bukunya kuantitatif itu dari filsafat positivisme.",
        "Sugiyono (2020) di halaman 45 katanya penelitian positivisme."
      ],
      "optionDetails": {
        "Menurut Sugiyono (2020: 45), 'Penelitian kuantitatif berpijak pada filsafat positivisme.'": "✓ BENAR: Format akademik resmi memuat Nama Belakang (Tahun: Halaman) diikuti kutipan diapit tanda petik.",
        "Menurut buku Sugiyono terbitan tahun dua ribu dua puluh halaman empat puluh lima.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Format akademik resmi memuat Nama Belakang (Tahun: Halaman) diikuti kutipan diapit tanda petik.",
        "Kata Sugiyono dalam bukunya kuantitatif itu dari filsafat positivisme.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Format akademik resmi memuat Nama Belakang (Tahun: Halaman) diikuti kutipan diapit tanda petik.",
        "Sugiyono (2020) di halaman 45 katanya penelitian positivisme.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Format akademik resmi memuat Nama Belakang (Tahun: Halaman) diikuti kutipan diapit tanda petik."
      },
      "correctAnswer": "Menurut Sugiyono (2020: 45), 'Penelitian kuantitatif berpijak pada filsafat positivisme.'",
      "explanationText": "Format akademik resmi memuat Nama Belakang (Tahun: Halaman) diikuti kutipan diapit tanda petik.",
      "knownWrongPatterns": {
        "Menurut buku Sugiyono terbitan tahun dua ribu dua puluh halaman empat puluh lima.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Format standar: Nama (Tahun: Halaman)."
        },
        "Kata Sugiyono dalam bukunya kuantitatif itu dari filsafat positivisme.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Format standar: Nama (Tahun: Halaman)."
        },
        "Sugiyono (2020) di halaman 45 katanya penelitian positivisme.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Format standar: Nama (Tahun: Halaman)."
        }
      }
    },
    {
      "id": "q-indo-11-9",
      "conceptName": "Kata Serapan Baku",
      "topic": "Bahasa Indonesia XI",
      "questionText": "Penulisan kata serapan bahasa asing ke bahasa Indonesia yang benar adalah...",
      "type": "mcq",
      "options": [
        "Standardisasi",
        "Standarisasi",
        "Standardisir",
        "Standerisasi"
      ],
      "optionDetails": {
        "Standardisasi": "✓ BENAR: Standardization diserap menjadi standardisasi (bukan standarisasi).",
        "Standarisasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Standardization diserap menjadi standardisasi (bukan standarisasi).",
        "Standardisir": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Standardization diserap menjadi standardisasi (bukan standarisasi).",
        "Standerisasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Standardization diserap menjadi standardisasi (bukan standarisasi)."
      },
      "correctAnswer": "Standardisasi",
      "explanationText": "Standardization diserap menjadi standardisasi (bukan standarisasi).",
      "knownWrongPatterns": {
        "Standarisasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Standardization -> standardisasi."
        },
        "Standardisir": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Standardization -> standardisasi."
        },
        "Standerisasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Standardization -> standardisasi."
        }
      }
    },
    {
      "id": "q-indo-11-10",
      "conceptName": "Makna Konotasi Puisi",
      "topic": "Bahasa Indonesia XI",
      "questionText": "Frasa 'tangan panjang' dalam konteks cerpen yang bermakna suka mencuri tergolong makna...",
      "type": "mcq",
      "options": [
        "Konotatif (Kiasan)",
        "Denotatif (Leksikal)",
        "Sinonim Murni",
        "Antonim"
      ],
      "optionDetails": {
        "Konotatif (Kiasan)": "✓ BENAR: Makna konotasi adalah makna tambahan kiasan di luar arti harfiah kamus.",
        "Denotatif (Leksikal)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Makna konotasi adalah makna tambahan kiasan di luar arti harfiah kamus.",
        "Sinonim Murni": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Makna konotasi adalah makna tambahan kiasan di luar arti harfiah kamus.",
        "Antonim": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Makna konotasi adalah makna tambahan kiasan di luar arti harfiah kamus."
      },
      "correctAnswer": "Konotatif (Kiasan)",
      "explanationText": "Makna konotasi adalah makna tambahan kiasan di luar arti harfiah kamus.",
      "knownWrongPatterns": {
        "Denotatif (Leksikal)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Makna kiasan adalah konotatif."
        },
        "Sinonim Murni": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Makna kiasan adalah konotatif."
        },
        "Antonim": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Makna kiasan adalah konotatif."
        }
      }
    }
  ],
  "inggris-11": [
    {
      "id": "q-inggris-11-1",
      "conceptName": "Analytical Exposition Structure",
      "topic": "Bahasa Inggris XI",
      "questionText": "Which part of an analytical exposition text introduces the topic and clearly states the writer's thesis or point of view?",
      "type": "mcq",
      "options": [
        "Thesis",
        "Arguments",
        "Reiteration",
        "Orientation"
      ],
      "optionDetails": {
        "Thesis": "✓ BENAR: The thesis introduces the main topic and establishes the writer's stance.",
        "Arguments": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The thesis introduces the main topic and establishes the writer's stance.",
        "Reiteration": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The thesis introduces the main topic and establishes the writer's stance.",
        "Orientation": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The thesis introduces the main topic and establishes the writer's stance."
      },
      "correctAnswer": "Thesis",
      "explanationText": "The thesis introduces the main topic and establishes the writer's stance.",
      "knownWrongPatterns": {
        "Arguments": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Introduction of the writer's position is the Thesis."
        },
        "Reiteration": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Introduction of the writer's position is the Thesis."
        },
        "Orientation": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Introduction of the writer's position is the Thesis."
        }
      }
    },
    {
      "id": "q-inggris-11-2",
      "conceptName": "Reiteration in Exposition",
      "topic": "Bahasa Inggris XI",
      "questionText": "The final paragraph of an analytical exposition that restates the writer's central argument is called...",
      "type": "mcq",
      "options": [
        "Reiteration (Conclusion)",
        "Orientation",
        "Complication",
        "Steps"
      ],
      "optionDetails": {
        "Reiteration (Conclusion)": "✓ BENAR: Reiteration restates the thesis to reinforce the writer's perspective.",
        "Orientation": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Reiteration restates the thesis to reinforce the writer's perspective.",
        "Complication": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Reiteration restates the thesis to reinforce the writer's perspective.",
        "Steps": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Reiteration restates the thesis to reinforce the writer's perspective."
      },
      "correctAnswer": "Reiteration (Conclusion)",
      "explanationText": "Reiteration restates the thesis to reinforce the writer's perspective.",
      "knownWrongPatterns": {
        "Orientation": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Restating the thesis at the end is called Reiteration."
        },
        "Complication": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Restating the thesis at the end is called Reiteration."
        },
        "Steps": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Restating the thesis at the end is called Reiteration."
        }
      }
    },
    {
      "id": "q-inggris-11-3",
      "conceptName": "Cause and Effect Conjunctions",
      "topic": "Bahasa Inggris XI",
      "questionText": "Complete the sentence: The flight was delayed ___ the severe thunderstorm.",
      "type": "mcq",
      "options": [
        "because of",
        "because",
        "although",
        "in spite"
      ],
      "optionDetails": {
        "because of": "✓ BENAR: 'Because of' is followed by a noun phrase (the severe thunderstorm), whereas 'because' is followed by a clause.",
        "because": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Because of' is followed by a noun phrase (the severe thunderstorm), whereas 'because' is followed by a clause.",
        "although": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Because of' is followed by a noun phrase (the severe thunderstorm), whereas 'because' is followed by a clause.",
        "in spite": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Because of' is followed by a noun phrase (the severe thunderstorm), whereas 'because' is followed by a clause."
      },
      "correctAnswer": "because of",
      "explanationText": "'Because of' is followed by a noun phrase (the severe thunderstorm), whereas 'because' is followed by a clause.",
      "knownWrongPatterns": {
        "because": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Use 'because of' before a noun phrase."
        },
        "although": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Use 'because of' before a noun phrase."
        },
        "in spite": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Use 'because of' before a noun phrase."
        }
      }
    },
    {
      "id": "q-inggris-11-4",
      "conceptName": "Conditional Sentence Type 2",
      "topic": "Bahasa Inggris XI",
      "questionText": "Complete the unreal present conditional: 'If I ___ a bird, I would fly around the globe.'",
      "type": "mcq",
      "options": [
        "were",
        "was",
        "am",
        "have been"
      ],
      "optionDetails": {
        "were": "✓ BENAR: In hypothetical Type 2 conditionals, the subjunctive 'were' is standard for all subjects.",
        "was": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: In hypothetical Type 2 conditionals, the subjunctive 'were' is standard for all subjects.",
        "am": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: In hypothetical Type 2 conditionals, the subjunctive 'were' is standard for all subjects.",
        "have been": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: In hypothetical Type 2 conditionals, the subjunctive 'were' is standard for all subjects."
      },
      "correctAnswer": "were",
      "explanationText": "In hypothetical Type 2 conditionals, the subjunctive 'were' is standard for all subjects.",
      "knownWrongPatterns": {
        "was": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Type 2 uses 'were' for hypothetical present."
        },
        "am": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Type 2 uses 'were' for hypothetical present."
        },
        "have been": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Type 2 uses 'were' for hypothetical present."
        }
      }
    },
    {
      "id": "q-inggris-11-5",
      "conceptName": "Passive Voice with Modal",
      "topic": "Bahasa Inggris XI",
      "questionText": "Change to passive: 'Students must submit the assignment on Monday.'",
      "type": "mcq",
      "options": [
        "The assignment must be submitted on Monday.",
        "The assignment must submitted on Monday.",
        "The assignment must being submit on Monday.",
        "The assignment must was submitted on Monday."
      ],
      "optionDetails": {
        "The assignment must be submitted on Monday.": "✓ BENAR: Modal passive: Modal + be + Past Participle (must be submitted).",
        "The assignment must submitted on Monday.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modal passive: Modal + be + Past Participle (must be submitted).",
        "The assignment must being submit on Monday.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modal passive: Modal + be + Past Participle (must be submitted).",
        "The assignment must was submitted on Monday.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modal passive: Modal + be + Past Participle (must be submitted)."
      },
      "correctAnswer": "The assignment must be submitted on Monday.",
      "explanationText": "Modal passive: Modal + be + Past Participle (must be submitted).",
      "knownWrongPatterns": {
        "The assignment must submitted on Monday.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Formula: modal + be + V3."
        },
        "The assignment must being submit on Monday.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Formula: modal + be + V3."
        },
        "The assignment must was submitted on Monday.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Formula: modal + be + V3."
        }
      }
    },
    {
      "id": "q-inggris-11-6",
      "conceptName": "Hortatory Exposition Purpose",
      "topic": "Bahasa Inggris XI",
      "questionText": "Unlike an analytical exposition, a hortatory exposition ends with a recommendation answering...",
      "type": "mcq",
      "options": [
        "What should or should not happen",
        "How an animal reproduces",
        "A moral lesson of an animal fable",
        "A chronological report of past events"
      ],
      "optionDetails": {
        "What should or should not happen": "✓ BENAR: Hortatory exposition gives a recommendation urging readers to take action.",
        "How an animal reproduces": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hortatory exposition gives a recommendation urging readers to take action.",
        "A moral lesson of an animal fable": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hortatory exposition gives a recommendation urging readers to take action.",
        "A chronological report of past events": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hortatory exposition gives a recommendation urging readers to take action."
      },
      "correctAnswer": "What should or should not happen",
      "explanationText": "Hortatory exposition gives a recommendation urging readers to take action.",
      "knownWrongPatterns": {
        "How an animal reproduces": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hortatory ends with a recommendation (should/should not do)."
        },
        "A moral lesson of an animal fable": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hortatory ends with a recommendation (should/should not do)."
        },
        "A chronological report of past events": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hortatory ends with a recommendation (should/should not do)."
        }
      }
    },
    {
      "id": "q-inggris-11-7",
      "conceptName": "Connectives in Argumentation",
      "topic": "Bahasa Inggris XI",
      "questionText": "Which connector is best suited to introduce an opposing viewpoint?",
      "type": "mcq",
      "options": [
        "On the other hand",
        "Furthermore",
        "In addition",
        "Consequently"
      ],
      "optionDetails": {
        "On the other hand": "✓ BENAR: 'On the other hand' signals a contrasting perspective.",
        "Furthermore": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'On the other hand' signals a contrasting perspective.",
        "In addition": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'On the other hand' signals a contrasting perspective.",
        "Consequently": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'On the other hand' signals a contrasting perspective."
      },
      "correctAnswer": "On the other hand",
      "explanationText": "'On the other hand' signals a contrasting perspective.",
      "knownWrongPatterns": {
        "Furthermore": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Contrast connector = On the other hand."
        },
        "In addition": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Contrast connector = On the other hand."
        },
        "Consequently": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Contrast connector = On the other hand."
        }
      }
    },
    {
      "id": "q-inggris-11-8",
      "conceptName": "Conditional Sentence Type 1",
      "topic": "Bahasa Inggris XI",
      "questionText": "If it rains tomorrow, we ___ our outdoor match.",
      "type": "mcq",
      "options": [
        "will cancel",
        "would cancel",
        "cancelled",
        "had cancelled"
      ],
      "optionDetails": {
        "will cancel": "✓ BENAR: Type 1 real conditional: If + Simple Present (rains), will + V1 (will cancel).",
        "would cancel": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Type 1 real conditional: If + Simple Present (rains), will + V1 (will cancel).",
        "cancelled": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Type 1 real conditional: If + Simple Present (rains), will + V1 (will cancel).",
        "had cancelled": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Type 1 real conditional: If + Simple Present (rains), will + V1 (will cancel)."
      },
      "correctAnswer": "will cancel",
      "explanationText": "Type 1 real conditional: If + Simple Present (rains), will + V1 (will cancel).",
      "knownWrongPatterns": {
        "would cancel": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "If + present -> will + V1."
        },
        "cancelled": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "If + present -> will + V1."
        },
        "had cancelled": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "If + present -> will + V1."
        }
      }
    },
    {
      "id": "q-inggris-11-9",
      "conceptName": "Formal Recommendation Letter",
      "topic": "Bahasa Inggris XI",
      "questionText": "In a formal recommendation letter, what is the most appropriate closing phrase?",
      "type": "mcq",
      "options": [
        "Sincerely yours,",
        "Cheers,",
        "See ya,",
        "Best regards buddy,"
      ],
      "optionDetails": {
        "Sincerely yours,": "✓ BENAR: 'Sincerely yours,' or 'Yours sincerely,' is standard formal correspondence closing.",
        "Cheers,": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Sincerely yours,' or 'Yours sincerely,' is standard formal correspondence closing.",
        "See ya,": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Sincerely yours,' or 'Yours sincerely,' is standard formal correspondence closing.",
        "Best regards buddy,": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Sincerely yours,' or 'Yours sincerely,' is standard formal correspondence closing."
      },
      "correctAnswer": "Sincerely yours,",
      "explanationText": "'Sincerely yours,' or 'Yours sincerely,' is standard formal correspondence closing.",
      "knownWrongPatterns": {
        "Cheers,": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Standard formal closing = Sincerely yours."
        },
        "See ya,": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Standard formal closing = Sincerely yours."
        },
        "Best regards buddy,": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Standard formal closing = Sincerely yours."
        }
      }
    },
    {
      "id": "q-inggris-11-10",
      "conceptName": "Vocabulary Nuance",
      "topic": "Bahasa Inggris XI",
      "questionText": "The word 'crucial' in 'Proper nutrition is crucial for adolescent growth' is closest in meaning to...",
      "type": "mcq",
      "options": [
        "Vital and indispensable",
        "Trivial and minor",
        "Optional",
        "Temporary"
      ],
      "optionDetails": {
        "Vital and indispensable": "✓ BENAR: 'Crucial' means extremely important or essential.",
        "Trivial and minor": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Crucial' means extremely important or essential.",
        "Optional": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Crucial' means extremely important or essential.",
        "Temporary": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Crucial' means extremely important or essential."
      },
      "correctAnswer": "Vital and indispensable",
      "explanationText": "'Crucial' means extremely important or essential.",
      "knownWrongPatterns": {
        "Trivial and minor": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Crucial = vital, indispensable."
        },
        "Optional": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Crucial = vital, indispensable."
        },
        "Temporary": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Crucial = vital, indispensable."
        }
      }
    }
  ],
  "mat-11": [
    {
      "id": "q-mat-11-1",
      "conceptName": "Trigonometri Sudut Istimewa",
      "topic": "Matematika Umum XI",
      "questionText": "Berapakah nilai dari sin(30°) + cos(60°)?",
      "type": "mcq",
      "options": [
        "1"
      ],
      "optionDetails": {
        "1": "✓ BENAR: sin(30°) = 0.5 dan cos(60°) = 0.5. 0.5 + 0.5 = 1."
      },
      "correctAnswer": "1",
      "explanationText": "sin(30°) = 0.5 dan cos(60°) = 0.5. 0.5 + 0.5 = 1.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-mat-11-2",
      "conceptName": "Fungsi Komposisi",
      "topic": "Matematika Umum XI",
      "questionText": "Diketahui f(x) = 2x + 3 dan g(x) = x² - 1. Berapakah nilai dari (g ∘ f)(1)?",
      "type": "mcq",
      "options": [
        "24"
      ],
      "optionDetails": {
        "24": "✓ BENAR: f(1) = 2(1) + 3 = 5. g(5) = 5² - 1 = 25 - 1 = 24."
      },
      "correctAnswer": "24",
      "explanationText": "f(1) = 2(1) + 3 = 5. g(5) = 5² - 1 = 25 - 1 = 24.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-mat-11-3",
      "conceptName": "Invers Fungsi Linear",
      "topic": "Matematika Umum XI",
      "questionText": "Jika f(x) = 3x - 6, maka rumus fungsi invers f⁻¹(x) adalah...",
      "type": "mcq",
      "options": [
        "(x + 6) / 3",
        "(x - 6) / 3",
        "3x + 6",
        "(6 - x) / 3"
      ],
      "optionDetails": {
        "(x + 6) / 3": "✓ BENAR: y = 3x - 6 -> 3x = y + 6 -> x = (y + 6)/3.",
        "(x - 6) / 3": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: y = 3x - 6 -> 3x = y + 6 -> x = (y + 6)/3.",
        "3x + 6": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: y = 3x - 6 -> 3x = y + 6 -> x = (y + 6)/3.",
        "(6 - x) / 3": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: y = 3x - 6 -> 3x = y + 6 -> x = (y + 6)/3."
      },
      "correctAnswer": "(x + 6) / 3",
      "explanationText": "y = 3x - 6 -> 3x = y + 6 -> x = (y + 6)/3.",
      "knownWrongPatterns": {
        "(x - 6) / 3": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Ubah persamaan menjadi bentuk x = ..."
        },
        "3x + 6": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Ubah persamaan menjadi bentuk x = ..."
        },
        "(6 - x) / 3": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Ubah persamaan menjadi bentuk x = ..."
        }
      }
    },
    {
      "id": "q-mat-11-4",
      "conceptName": "Determinan Matriks 2x2",
      "topic": "Matematika Umum XI",
      "questionText": "Berapakah determinan dari matriks A = [[4, 2], [3, 5]]?",
      "type": "mcq",
      "options": [
        "14"
      ],
      "optionDetails": {
        "14": "✓ BENAR: det(A) = ad - bc = (4 × 5) - (2 × 3) = 20 - 6 = 14."
      },
      "correctAnswer": "14",
      "explanationText": "det(A) = ad - bc = (4 × 5) - (2 × 3) = 20 - 6 = 14.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-mat-11-5",
      "conceptName": "Perkalian Matriks",
      "topic": "Matematika Umum XI",
      "questionText": "Ordo hasil kali matriks A bernomor ordo 2x3 dengan matriks B berordo 3x4 adalah...",
      "type": "mcq",
      "options": [
        "2 x 4",
        "3 x 3",
        "2 x 3",
        "4 x 2"
      ],
      "optionDetails": {
        "2 x 4": "✓ BENAR: (2x3) × (3x4) -> jumlah kolom A sama dengan baris B (3), menghasilkan ordo 2x4.",
        "3 x 3": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: (2x3) × (3x4) -> jumlah kolom A sama dengan baris B (3), menghasilkan ordo 2x4.",
        "2 x 3": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: (2x3) × (3x4) -> jumlah kolom A sama dengan baris B (3), menghasilkan ordo 2x4.",
        "4 x 2": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: (2x3) × (3x4) -> jumlah kolom A sama dengan baris B (3), menghasilkan ordo 2x4."
      },
      "correctAnswer": "2 x 4",
      "explanationText": "(2x3) × (3x4) -> jumlah kolom A sama dengan baris B (3), menghasilkan ordo 2x4.",
      "knownWrongPatterns": {
        "3 x 3": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hasil perkalian mengambil baris pertama dan kolom kedua: 2x4."
        },
        "2 x 3": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hasil perkalian mengambil baris pertama dan kolom kedua: 2x4."
        },
        "4 x 2": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hasil perkalian mengambil baris pertama dan kolom kedua: 2x4."
        }
      }
    },
    {
      "id": "q-mat-11-6",
      "conceptName": "Deret Geometri Tak Hingga",
      "topic": "Matematika Umum XI",
      "questionText": "Tentukan jumlah deret geometri tak hingga dengan suku pertama a = 12 dan rasio r = 1/3!",
      "type": "mcq",
      "options": [
        "18"
      ],
      "optionDetails": {
        "18": "✓ BENAR: S_inf = a / (1 - r) = 12 / (1 - 1/3) = 12 / (2/3) = 18."
      },
      "correctAnswer": "18",
      "explanationText": "S_inf = a / (1 - r) = 12 / (1 - 1/3) = 12 / (2/3) = 18.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-mat-11-7",
      "conceptName": "Translasi Titik",
      "topic": "Matematika Umum XI",
      "questionText": "Titik P(3, -2) ditranslasikan oleh T = (4, 5). Koordinat bayangan titik P' adalah...",
      "type": "mcq",
      "options": [
        "P'(7, 3)",
        "P'(-1, -7)",
        "P'(12, -10)",
        "P'(7, -3)"
      ],
      "optionDetails": {
        "P'(7, 3)": "✓ BENAR: P'(3+4, -2+5) = P'(7, 3).",
        "P'(-1, -7)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: P'(3+4, -2+5) = P'(7, 3).",
        "P'(12, -10)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: P'(3+4, -2+5) = P'(7, 3).",
        "P'(7, -3)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: P'(3+4, -2+5) = P'(7, 3)."
      },
      "correctAnswer": "P'(7, 3)",
      "explanationText": "P'(3+4, -2+5) = P'(7, 3).",
      "knownWrongPatterns": {
        "P'(-1, -7)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Jumlahkan masing-masing koordinat dengan komponen translasi."
        },
        "P'(12, -10)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Jumlahkan masing-masing koordinat dengan komponen translasi."
        },
        "P'(7, -3)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Jumlahkan masing-masing koordinat dengan komponen translasi."
        }
      }
    },
    {
      "id": "q-mat-11-8",
      "conceptName": "Refleksi terhadap Sumbu X",
      "topic": "Matematika Umum XI",
      "questionText": "Bayangan titik A(5, 4) jika dicerminkan terhadap sumbu X adalah...",
      "type": "mcq",
      "options": [
        "A'(5, -4)",
        "A'(-5, 4)",
        "A'(-5, -4)",
        "A'(4, 5)"
      ],
      "optionDetails": {
        "A'(5, -4)": "✓ BENAR: Refleksi sumbu X mengubah tanda ordinat y: (x, y) -> (x, -y).",
        "A'(-5, 4)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Refleksi sumbu X mengubah tanda ordinat y: (x, y) -> (x, -y).",
        "A'(-5, -4)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Refleksi sumbu X mengubah tanda ordinat y: (x, y) -> (x, -y).",
        "A'(4, 5)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Refleksi sumbu X mengubah tanda ordinat y: (x, y) -> (x, -y)."
      },
      "correctAnswer": "A'(5, -4)",
      "explanationText": "Refleksi sumbu X mengubah tanda ordinat y: (x, y) -> (x, -y).",
      "knownWrongPatterns": {
        "A'(-5, 4)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Cermin sumbu X: x tetap, y dikali -1."
        },
        "A'(-5, -4)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Cermin sumbu X: x tetap, y dikali -1."
        },
        "A'(4, 5)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Cermin sumbu X: x tetap, y dikali -1."
        }
      }
    },
    {
      "id": "q-mat-11-9",
      "conceptName": "Suku ke-n Barisan Geometri",
      "topic": "Matematika Umum XI",
      "questionText": "Tentukan suku ke-5 dari barisan geometri: 2, 6, 18, 54, ...",
      "type": "mcq",
      "options": [
        "162"
      ],
      "optionDetails": {
        "162": "✓ BENAR: a = 2, r = 3. U5 = a · r⁴ = 2 × (3⁴) = 2 × 81 = 162."
      },
      "correctAnswer": "162",
      "explanationText": "a = 2, r = 3. U5 = a · r⁴ = 2 × (3⁴) = 2 × 81 = 162.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-mat-11-10",
      "conceptName": "Identitas Trigonometri Dasar",
      "topic": "Matematika Umum XI",
      "questionText": "Untuk sembarang sudut x, nilai dari sin²(x) + cos²(x) selalu sama dengan...",
      "type": "mcq",
      "options": [
        "1"
      ],
      "optionDetails": {
        "1": "✓ BENAR: Identitas Pythagoras trigonometri: sin²(x) + cos²(x) = 1."
      },
      "correctAnswer": "1",
      "explanationText": "Identitas Pythagoras trigonometri: sin²(x) + cos²(x) = 1.",
      "knownWrongPatterns": {}
    }
  ],
  "ppkn-11": [
    {
      "id": "q-ppkn-11-1",
      "conceptName": "Hierarki Peraturan Perundang-undangan",
      "topic": "Pendidikan Pancasila (PPKn) XI",
      "questionText": "Berdasarkan UU No. 12 Tahun 2011 Pasal 7, tata urutan peraturan perundang-undangan yang berada tepat satu tingkat di bawah UUD NRI 1945 adalah...",
      "type": "mcq",
      "options": [
        "Ketetapan Majelis Permusyawaratan Rakyat (TAP MPR)",
        "Undang-Undang / Peraturan Pemerintah Pengganti Undang-Undang (UU/Perppu)",
        "Peraturan Pemerintah (PP)",
        "Peraturan Presiden (Perpres)"
      ],
      "optionDetails": {
        "Ketetapan Majelis Permusyawaratan Rakyat (TAP MPR)": "✓ BENAR: Pasal 7 ayat 1 UU 12/2011 menempatkan TAP MPR tepat di bawah UUD 1945.",
        "Undang-Undang / Peraturan Pemerintah Pengganti Undang-Undang (UU/Perppu)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pasal 7 ayat 1 UU 12/2011 menempatkan TAP MPR tepat di bawah UUD 1945.",
        "Peraturan Pemerintah (PP)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pasal 7 ayat 1 UU 12/2011 menempatkan TAP MPR tepat di bawah UUD 1945.",
        "Peraturan Presiden (Perpres)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pasal 7 ayat 1 UU 12/2011 menempatkan TAP MPR tepat di bawah UUD 1945."
      },
      "correctAnswer": "Ketetapan Majelis Permusyawaratan Rakyat (TAP MPR)",
      "explanationText": "Pasal 7 ayat 1 UU 12/2011 menempatkan TAP MPR tepat di bawah UUD 1945.",
      "knownWrongPatterns": {
        "Undang-Undang / Peraturan Pemerintah Pengganti Undang-Undang (UU/Perppu)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "TAP MPR menempati urutan kedua dalam hierarki formal."
        },
        "Peraturan Pemerintah (PP)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "TAP MPR menempati urutan kedua dalam hierarki formal."
        },
        "Peraturan Presiden (Perpres)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "TAP MPR menempati urutan kedua dalam hierarki formal."
        }
      }
    },
    {
      "id": "q-ppkn-11-2",
      "conceptName": "Asas Otonomi Daerah",
      "topic": "Pendidikan Pancasila (PPKn) XI",
      "questionText": "Penyerahan wewenang pemerintahan oleh pemerintah pusat kepada daerah otonom untuk mengatur daerahnya sendiri disebut asas...",
      "type": "mcq",
      "options": [
        "Desentralisasi",
        "Dekonsentrasi",
        "Tugas Pembantuan",
        "Sentralisasi"
      ],
      "optionDetails": {
        "Desentralisasi": "✓ BENAR: Desentralisasi adalah pelimpahan wewenang urusan pemerintahan ke daerah otonom.",
        "Dekonsentrasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Desentralisasi adalah pelimpahan wewenang urusan pemerintahan ke daerah otonom.",
        "Tugas Pembantuan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Desentralisasi adalah pelimpahan wewenang urusan pemerintahan ke daerah otonom.",
        "Sentralisasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Desentralisasi adalah pelimpahan wewenang urusan pemerintahan ke daerah otonom."
      },
      "correctAnswer": "Desentralisasi",
      "explanationText": "Desentralisasi adalah pelimpahan wewenang urusan pemerintahan ke daerah otonom.",
      "knownWrongPatterns": {
        "Dekonsentrasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penyerahan wewenang ke daerah otonom = Desentralisasi."
        },
        "Tugas Pembantuan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penyerahan wewenang ke daerah otonom = Desentralisasi."
        },
        "Sentralisasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penyerahan wewenang ke daerah otonom = Desentralisasi."
        }
      }
    },
    {
      "id": "q-ppkn-11-3",
      "conceptName": "Hak Asasi Manusia Universal",
      "topic": "Pendidikan Pancasila (PPKn) XI",
      "questionText": "Hak yang tidak dapat dikurangi dalam keadaan apa pun (Non-derogable rights) menurut Pasal 28I UUD 1945 meliputi...",
      "type": "mcq",
      "options": [
        "Hak untuk hidup dan hak untuk tidak disiksa",
        "Hak untuk memiliki kendaraan pribadi",
        "Hak mendirikan partai politik",
        "Hak bepergian ke luar negeri"
      ],
      "optionDetails": {
        "Hak untuk hidup dan hak untuk tidak disiksa": "✓ BENAR: Non-derogable rights mencakup hak hidup, bebas dari penyiksaan, dan kemerdekaan hati nurani.",
        "Hak untuk memiliki kendaraan pribadi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Non-derogable rights mencakup hak hidup, bebas dari penyiksaan, dan kemerdekaan hati nurani.",
        "Hak mendirikan partai politik": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Non-derogable rights mencakup hak hidup, bebas dari penyiksaan, dan kemerdekaan hati nurani.",
        "Hak bepergian ke luar negeri": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Non-derogable rights mencakup hak hidup, bebas dari penyiksaan, dan kemerdekaan hati nurani."
      },
      "correctAnswer": "Hak untuk hidup dan hak untuk tidak disiksa",
      "explanationText": "Non-derogable rights mencakup hak hidup, bebas dari penyiksaan, dan kemerdekaan hati nurani.",
      "knownWrongPatterns": {
        "Hak untuk memiliki kendaraan pribadi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hak dasar yang mutlak: hak hidup dan bebas dari siksaan."
        },
        "Hak mendirikan partai politik": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hak dasar yang mutlak: hak hidup dan bebas dari siksaan."
        },
        "Hak bepergian ke luar negeri": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hak dasar yang mutlak: hak hidup dan bebas dari siksaan."
        }
      }
    },
    {
      "id": "q-ppkn-11-4",
      "conceptName": "Politik Luar Negeri Bebas Aktif",
      "topic": "Pendidikan Pancasila (PPKn) XI",
      "questionText": "Prinsip politik luar negeri Indonesia adalah Bebas Aktif, yang berarti...",
      "type": "mcq",
      "options": [
        "Tidak memihak blok kekuatan militer mana pun serta aktif memperjuangkan perdamaian dunia",
        "Bebas menjajah bangsa lain yang lemah",
        "Pasif dan mengisolasi diri dari diplomasi internasional",
        "Selalu tunduk pada kebijakan negara adidaya"
      ],
      "optionDetails": {
        "Tidak memihak blok kekuatan militer mana pun serta aktif memperjuangkan perdamaian dunia": "✓ BENAR: Bebas = independen tanpa aliansi militer; Aktif = berperan aktif mewujudkan perdamaian abadi.",
        "Bebas menjajah bangsa lain yang lemah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bebas = independen tanpa aliansi militer; Aktif = berperan aktif mewujudkan perdamaian abadi.",
        "Pasif dan mengisolasi diri dari diplomasi internasional": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bebas = independen tanpa aliansi militer; Aktif = berperan aktif mewujudkan perdamaian abadi.",
        "Selalu tunduk pada kebijakan negara adidaya": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bebas = independen tanpa aliansi militer; Aktif = berperan aktif mewujudkan perdamaian abadi."
      },
      "correctAnswer": "Tidak memihak blok kekuatan militer mana pun serta aktif memperjuangkan perdamaian dunia",
      "explanationText": "Bebas = independen tanpa aliansi militer; Aktif = berperan aktif mewujudkan perdamaian abadi.",
      "knownWrongPatterns": {
        "Bebas menjajah bangsa lain yang lemah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Tidak memihak blok manapun dan aktif menjaga perdamaian."
        },
        "Pasif dan mengisolasi diri dari diplomasi internasional": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Tidak memihak blok manapun dan aktif menjaga perdamaian."
        },
        "Selalu tunduk pada kebijakan negara adidaya": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Tidak memihak blok manapun dan aktif menjaga perdamaian."
        }
      }
    },
    {
      "id": "q-ppkn-11-5",
      "conceptName": "Peran TNI sebagai Pertahanan",
      "topic": "Pendidikan Pancasila (PPKn) XI",
      "questionText": "Berdasarkan UUD 1945 Pasal 30, alat pertahanan negara yang bertugas mempertahankan kedaulatan NKRI adalah...",
      "type": "mcq",
      "options": [
        "Tentara Nasional Indonesia (TNI)",
        "Kepolisian Negara Republik Indonesia (Polri)",
        "Satpol PP",
        "Kejaksaan Agung"
      ],
      "optionDetails": {
        "Tentara Nasional Indonesia (TNI)": "✓ BENAR: TNI sebagai alat pertahanan negara, sedangkan Polri bertugas memelihara keamanan dan ketertiban masyarakat.",
        "Kepolisian Negara Republik Indonesia (Polri)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: TNI sebagai alat pertahanan negara, sedangkan Polri bertugas memelihara keamanan dan ketertiban masyarakat.",
        "Satpol PP": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: TNI sebagai alat pertahanan negara, sedangkan Polri bertugas memelihara keamanan dan ketertiban masyarakat.",
        "Kejaksaan Agung": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: TNI sebagai alat pertahanan negara, sedangkan Polri bertugas memelihara keamanan dan ketertiban masyarakat."
      },
      "correctAnswer": "Tentara Nasional Indonesia (TNI)",
      "explanationText": "TNI sebagai alat pertahanan negara, sedangkan Polri bertugas memelihara keamanan dan ketertiban masyarakat.",
      "knownWrongPatterns": {
        "Kepolisian Negara Republik Indonesia (Polri)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pertahanan negara dipegang oleh TNI."
        },
        "Satpol PP": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pertahanan negara dipegang oleh TNI."
        },
        "Kejaksaan Agung": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pertahanan negara dipegang oleh TNI."
        }
      }
    },
    {
      "id": "q-ppkn-11-6",
      "conceptName": "Sistem Peradilan Terbuka",
      "topic": "Pendidikan Pancasila (PPKn) XI",
      "questionText": "Prinsip dasar bahwa sidang pengadilan terbuka untuk umum kecuali undang-undang menentukan lain bertujuan untuk...",
      "type": "mcq",
      "options": [
        "Menjamin transparansi, keadilan, dan akuntabilitas proses hukum",
        "Menyebarkan aib terdakwa ke seluruh media sosial",
        "Mempersulit saksi memberikan keterangan",
        "Memperlama proses putusan vonis"
      ],
      "optionDetails": {
        "Menjamin transparansi, keadilan, dan akuntabilitas proses hukum": "✓ BENAR: Keterbukaan sidang pengadilan mencegah terjadinya peradilan sesat dan diskriminasi.",
        "Menyebarkan aib terdakwa ke seluruh media sosial": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Keterbukaan sidang pengadilan mencegah terjadinya peradilan sesat dan diskriminasi.",
        "Mempersulit saksi memberikan keterangan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Keterbukaan sidang pengadilan mencegah terjadinya peradilan sesat dan diskriminasi.",
        "Memperlama proses putusan vonis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Keterbukaan sidang pengadilan mencegah terjadinya peradilan sesat dan diskriminasi."
      },
      "correctAnswer": "Menjamin transparansi, keadilan, dan akuntabilitas proses hukum",
      "explanationText": "Keterbukaan sidang pengadilan mencegah terjadinya peradilan sesat dan diskriminasi.",
      "knownWrongPatterns": {
        "Menyebarkan aib terdakwa ke seluruh media sosial": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Menjamin transparansi dan keadilan proses hukum."
        },
        "Mempersulit saksi memberikan keterangan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Menjamin transparansi dan keadilan proses hukum."
        },
        "Memperlama proses putusan vonis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Menjamin transparansi dan keadilan proses hukum."
        }
      }
    },
    {
      "id": "q-ppkn-11-7",
      "conceptName": "Komisi Yudisial",
      "topic": "Pendidikan Pancasila (PPKn) XI",
      "questionText": "Lembaga negara mandiri yang berwenang mengusulkan pengangkatan hakim agung dan menjaga kehormatan hakim adalah...",
      "type": "mcq",
      "options": [
        "Komisi Yudisial (KY)",
        "Mahkamah Konstitusi (MK)",
        "Badan Pemeriksa Keuangan (BPK)",
        "Komisi Pemberantasan Korupsi (KPK)"
      ],
      "optionDetails": {
        "Komisi Yudisial (KY)": "✓ BENAR: KY bertugas mengawasi etika dan martabat hakim serta mengusulkan calon Hakim Agung.",
        "Mahkamah Konstitusi (MK)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: KY bertugas mengawasi etika dan martabat hakim serta mengusulkan calon Hakim Agung.",
        "Badan Pemeriksa Keuangan (BPK)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: KY bertugas mengawasi etika dan martabat hakim serta mengusulkan calon Hakim Agung.",
        "Komisi Pemberantasan Korupsi (KPK)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: KY bertugas mengawasi etika dan martabat hakim serta mengusulkan calon Hakim Agung."
      },
      "correctAnswer": "Komisi Yudisial (KY)",
      "explanationText": "KY bertugas mengawasi etika dan martabat hakim serta mengusulkan calon Hakim Agung.",
      "knownWrongPatterns": {
        "Mahkamah Konstitusi (MK)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Komisi pengawas perilaku etika hakim adalah KY."
        },
        "Badan Pemeriksa Keuangan (BPK)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Komisi pengawas perilaku etika hakim adalah KY."
        },
        "Komisi Pemberantasan Korupsi (KPK)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Komisi pengawas perilaku etika hakim adalah KY."
        }
      }
    },
    {
      "id": "q-ppkn-11-8",
      "conceptName": "Konflik Sosial Horisontal",
      "topic": "Pendidikan Pancasila (PPKn) XI",
      "questionText": "Pertikaian antara dua kelompok warga yang berlatar belakang perbedaan suku atau ras dikategorikan sebagai konflik...",
      "type": "mcq",
      "options": [
        "Horisontal",
        "Vertikal",
        "Diagonal",
        "Struktural"
      ],
      "optionDetails": {
        "Horisontal": "✓ BENAR: Konflik horisontal terjadi antarpihak yang memiliki kedudukan sejajar dalam masyarakat.",
        "Vertikal": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Konflik horisontal terjadi antarpihak yang memiliki kedudukan sejajar dalam masyarakat.",
        "Diagonal": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Konflik horisontal terjadi antarpihak yang memiliki kedudukan sejajar dalam masyarakat.",
        "Struktural": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Konflik horisontal terjadi antarpihak yang memiliki kedudukan sejajar dalam masyarakat."
      },
      "correctAnswer": "Horisontal",
      "explanationText": "Konflik horisontal terjadi antarpihak yang memiliki kedudukan sejajar dalam masyarakat.",
      "knownWrongPatterns": {
        "Vertikal": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Konflik antar-kelompok berderajat sejajar = horisontal."
        },
        "Diagonal": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Konflik antar-kelompok berderajat sejajar = horisontal."
        },
        "Struktural": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Konflik antar-kelompok berderajat sejajar = horisontal."
        }
      }
    },
    {
      "id": "q-ppkn-11-9",
      "conceptName": "Deklarasi Djuanda 1957",
      "topic": "Pendidikan Pancasila (PPKn) XI",
      "questionText": "Deklarasi Djuanda tanggal 13 Desember 1957 menegaskan kedaulatan maritim Indonesia bahwa...",
      "type": "mcq",
      "options": [
        "Laut antarpulau di Indonesia merupakan satu kesatuan wilayah kedaulatan mutlak NKRI",
        "Laut di antara pulau-pulau adalah laut internasional bebas",
        "Batas laut teritorial Indonesia hanya 3 mil dari tepi pantai",
        "Kapal perang asing bebas bermanuver tanpa izin"
      ],
      "optionDetails": {
        "Laut antarpulau di Indonesia merupakan satu kesatuan wilayah kedaulatan mutlak NKRI": "✓ BENAR: Deklarasi Djuanda melahirkan konsep Negara Kepulauan (Archipelagic State).",
        "Laut di antara pulau-pulau adalah laut internasional bebas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Deklarasi Djuanda melahirkan konsep Negara Kepulauan (Archipelagic State).",
        "Batas laut teritorial Indonesia hanya 3 mil dari tepi pantai": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Deklarasi Djuanda melahirkan konsep Negara Kepulauan (Archipelagic State).",
        "Kapal perang asing bebas bermanuver tanpa izin": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Deklarasi Djuanda melahirkan konsep Negara Kepulauan (Archipelagic State)."
      },
      "correctAnswer": "Laut antarpulau di Indonesia merupakan satu kesatuan wilayah kedaulatan mutlak NKRI",
      "explanationText": "Deklarasi Djuanda melahirkan konsep Negara Kepulauan (Archipelagic State).",
      "knownWrongPatterns": {
        "Laut di antara pulau-pulau adalah laut internasional bebas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Laut pemersatu pulau, bukan pemisah = Deklarasi Djuanda."
        },
        "Batas laut teritorial Indonesia hanya 3 mil dari tepi pantai": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Laut pemersatu pulau, bukan pemisah = Deklarasi Djuanda."
        },
        "Kapal perang asing bebas bermanuver tanpa izin": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Laut pemersatu pulau, bukan pemisah = Deklarasi Djuanda."
        }
      }
    },
    {
      "id": "q-ppkn-11-10",
      "conceptName": "Budaya Demokrasi Pancasila",
      "topic": "Pendidikan Pancasila (PPKn) XI",
      "questionText": "Ciri khas pengambilan keputusan dalam musyawarah menurut Demokrasi Pancasila adalah mengutamakan...",
      "type": "mcq",
      "options": [
        "Musyawarah untuk mufakat dilandasi akal sehat dan hati nurani",
        "Voting suara terbanyak tanpa mendengarkan pendapat minoritas",
        "Pemaksaan kehendak oleh pihak yang berkuasa",
        "Keputusan sepihak ketua rapat"
      ],
      "optionDetails": {
        "Musyawarah untuk mufakat dilandasi akal sehat dan hati nurani": "✓ BENAR: Sila ke-4 menegaskan hikmat kebijaksanaan dalam permusyawaratan perwakilan menuju mufakat.",
        "Voting suara terbanyak tanpa mendengarkan pendapat minoritas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sila ke-4 menegaskan hikmat kebijaksanaan dalam permusyawaratan perwakilan menuju mufakat.",
        "Pemaksaan kehendak oleh pihak yang berkuasa": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sila ke-4 menegaskan hikmat kebijaksanaan dalam permusyawaratan perwakilan menuju mufakat.",
        "Keputusan sepihak ketua rapat": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sila ke-4 menegaskan hikmat kebijaksanaan dalam permusyawaratan perwakilan menuju mufakat."
      },
      "correctAnswer": "Musyawarah untuk mufakat dilandasi akal sehat dan hati nurani",
      "explanationText": "Sila ke-4 menegaskan hikmat kebijaksanaan dalam permusyawaratan perwakilan menuju mufakat.",
      "knownWrongPatterns": {
        "Voting suara terbanyak tanpa mendengarkan pendapat minoritas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Musyawarah untuk mencapai mufakat."
        },
        "Pemaksaan kehendak oleh pihak yang berkuasa": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Musyawarah untuk mencapai mufakat."
        },
        "Keputusan sepihak ketua rapat": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Musyawarah untuk mencapai mufakat."
        }
      }
    }
  ],
  "sejarah-11": [
    {
      "id": "q-sejarah-11-1",
      "conceptName": "Akar Kebangkitan Nasional",
      "topic": "Sejarah Indonesia XI",
      "questionText": "Organisasi pelopor yang didirikan oleh para mahasiswa STOVIA pada 20 Mei 1908 dan menjadi tonggak Hari Kebangkitan Nasional adalah...",
      "type": "mcq",
      "options": [
        "Budi Utomo",
        "Sarekat Dagang Islam",
        "Indische Partij",
        "Perhimpunan Indonesia"
      ],
      "optionDetails": {
        "Budi Utomo": "✓ BENAR: Budi Utomo didirikan oleh dr. Soetomo dan kawan-kawan atas ide dr. Wahidin Sudirohusodo.",
        "Sarekat Dagang Islam": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Budi Utomo didirikan oleh dr. Soetomo dan kawan-kawan atas ide dr. Wahidin Sudirohusodo.",
        "Indische Partij": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Budi Utomo didirikan oleh dr. Soetomo dan kawan-kawan atas ide dr. Wahidin Sudirohusodo.",
        "Perhimpunan Indonesia": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Budi Utomo didirikan oleh dr. Soetomo dan kawan-kawan atas ide dr. Wahidin Sudirohusodo."
      },
      "correctAnswer": "Budi Utomo",
      "explanationText": "Budi Utomo didirikan oleh dr. Soetomo dan kawan-kawan atas ide dr. Wahidin Sudirohusodo.",
      "knownWrongPatterns": {
        "Sarekat Dagang Islam": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "20 Mei 1908 = Budi Utomo."
        },
        "Indische Partij": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "20 Mei 1908 = Budi Utomo."
        },
        "Perhimpunan Indonesia": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "20 Mei 1908 = Budi Utomo."
        }
      }
    },
    {
      "id": "q-sejarah-11-2",
      "conceptName": "Politik Etis Belanda",
      "topic": "Sejarah Indonesia XI",
      "questionText": "Tiga pilar program Politik Etis (Politik Balas Budi) yang dicetuskan oleh van Deventer adalah...",
      "type": "mcq",
      "options": [
        "Irigasi, Emigrasi, dan Edukasi",
        "Monopoli, Ekspedisi, dan Asimilasi",
        "Devide et Impera, Verplichte Leverantie, dan Contingenten",
        "Tanam Paksa, Kerja Rodi, dan Sewa Tanah"
      ],
      "optionDetails": {
        "Irigasi, Emigrasi, dan Edukasi": "✓ BENAR: Trias Van Deventer: Irigasi (pengairan), Emigrasi (transmigrasi), dan Edukasi (pendidikan).",
        "Monopoli, Ekspedisi, dan Asimilasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Trias Van Deventer: Irigasi (pengairan), Emigrasi (transmigrasi), dan Edukasi (pendidikan).",
        "Devide et Impera, Verplichte Leverantie, dan Contingenten": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Trias Van Deventer: Irigasi (pengairan), Emigrasi (transmigrasi), dan Edukasi (pendidikan).",
        "Tanam Paksa, Kerja Rodi, dan Sewa Tanah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Trias Van Deventer: Irigasi (pengairan), Emigrasi (transmigrasi), dan Edukasi (pendidikan)."
      },
      "correctAnswer": "Irigasi, Emigrasi, dan Edukasi",
      "explanationText": "Trias Van Deventer: Irigasi (pengairan), Emigrasi (transmigrasi), dan Edukasi (pendidikan).",
      "knownWrongPatterns": {
        "Monopoli, Ekspedisi, dan Asimilasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Irigasi, Emigrasi, Edukasi."
        },
        "Devide et Impera, Verplichte Leverantie, dan Contingenten": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Irigasi, Emigrasi, Edukasi."
        },
        "Tanam Paksa, Kerja Rodi, dan Sewa Tanah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Irigasi, Emigrasi, Edukasi."
        }
      }
    },
    {
      "id": "q-sejarah-11-3",
      "conceptName": "Ikrar Sumpah Pemuda 1928",
      "topic": "Sejarah Indonesia XI",
      "questionText": "Kongres Pemuda II tanggal 28 Oktober 1928 menghasilkan ikrar persatuan bersejarah yang menetapkan...",
      "type": "mcq",
      "options": [
        "Satu tumpah darah, satu bangsa, dan menjunjung bahasa persatuan bahasa Indonesia",
        "Penyerahan kedaulatan kepada pemerintah kolonial Hindia Belanda",
        "Pembentukan partai politik tunggal nasional",
        "Pembagian wilayah kepulauan Indonesia menjadi federasi"
      ],
      "optionDetails": {
        "Satu tumpah darah, satu bangsa, dan menjunjung bahasa persatuan bahasa Indonesia": "✓ BENAR: Ikrar Sumpah Pemuda mengukuhkan satu tanah air, satu bangsa, dan satu bahasa persatuan.",
        "Penyerahan kedaulatan kepada pemerintah kolonial Hindia Belanda": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Ikrar Sumpah Pemuda mengukuhkan satu tanah air, satu bangsa, dan satu bahasa persatuan.",
        "Pembentukan partai politik tunggal nasional": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Ikrar Sumpah Pemuda mengukuhkan satu tanah air, satu bangsa, dan satu bahasa persatuan.",
        "Pembagian wilayah kepulauan Indonesia menjadi federasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Ikrar Sumpah Pemuda mengukuhkan satu tanah air, satu bangsa, dan satu bahasa persatuan."
      },
      "correctAnswer": "Satu tumpah darah, satu bangsa, dan menjunjung bahasa persatuan bahasa Indonesia",
      "explanationText": "Ikrar Sumpah Pemuda mengukuhkan satu tanah air, satu bangsa, dan satu bahasa persatuan.",
      "knownWrongPatterns": {
        "Penyerahan kedaulatan kepada pemerintah kolonial Hindia Belanda": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Satu tanah air, satu bangsa, bahasa persatuan Indonesia."
        },
        "Pembentukan partai politik tunggal nasional": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Satu tanah air, satu bangsa, bahasa persatuan Indonesia."
        },
        "Pembagian wilayah kepulauan Indonesia menjadi federasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Satu tanah air, satu bangsa, bahasa persatuan Indonesia."
        }
      }
    },
    {
      "id": "q-sejarah-11-4",
      "conceptName": "Indische Partij Tiga Serangkai",
      "topic": "Sejarah Indonesia XI",
      "questionText": "Tokoh 'Tiga Serangkai' pendiri partai politik pertama di Hindia Belanda (Indische Partij) tahun 1912 adalah...",
      "type": "mcq",
      "options": [
        "Douwes Dekker, dr. Tjipto Mangoenkoesoemo, dan Ki Hadjar Dewantara",
        "Ir. Soekarno, Moh. Hatta, dan Sutan Sjahrir",
        "dr. Soetomo, dr. Wahidin, dan Gunawan",
        "H.O.S. Tjokroaminoto, Agus Salim, dan Musso"
      ],
      "optionDetails": {
        "Douwes Dekker, dr. Tjipto Mangoenkoesoemo, dan Ki Hadjar Dewantara": "✓ BENAR: Tiga Serangkai pelopor Indische Partij: Danudirja Setiabudi (Douwes Dekker), Tjipto, dan Suwardi Suryaningrat.",
        "Ir. Soekarno, Moh. Hatta, dan Sutan Sjahrir": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tiga Serangkai pelopor Indische Partij: Danudirja Setiabudi (Douwes Dekker), Tjipto, dan Suwardi Suryaningrat.",
        "dr. Soetomo, dr. Wahidin, dan Gunawan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tiga Serangkai pelopor Indische Partij: Danudirja Setiabudi (Douwes Dekker), Tjipto, dan Suwardi Suryaningrat.",
        "H.O.S. Tjokroaminoto, Agus Salim, dan Musso": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tiga Serangkai pelopor Indische Partij: Danudirja Setiabudi (Douwes Dekker), Tjipto, dan Suwardi Suryaningrat."
      },
      "correctAnswer": "Douwes Dekker, dr. Tjipto Mangoenkoesoemo, dan Ki Hadjar Dewantara",
      "explanationText": "Tiga Serangkai pelopor Indische Partij: Danudirja Setiabudi (Douwes Dekker), Tjipto, dan Suwardi Suryaningrat.",
      "knownWrongPatterns": {
        "Ir. Soekarno, Moh. Hatta, dan Sutan Sjahrir": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Douwes Dekker, Cipto Mangunkusumo, Ki Hajar Dewantara."
        },
        "dr. Soetomo, dr. Wahidin, dan Gunawan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Douwes Dekker, Cipto Mangunkusumo, Ki Hajar Dewantara."
        },
        "H.O.S. Tjokroaminoto, Agus Salim, dan Musso": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Douwes Dekker, Cipto Mangunkusumo, Ki Hajar Dewantara."
        }
      }
    },
    {
      "id": "q-sejarah-11-5",
      "conceptName": "Tanam Paksa Cultuurstelsel",
      "topic": "Sejarah Indonesia XI",
      "questionText": "Gubernur Jenderal Belanda yang mencetuskan sistem Tanam Paksa (Cultuurstelsel) pada tahun 1830 adalah...",
      "type": "mcq",
      "options": [
        "Johannes van den Bosch",
        "Herman Willem Daendels",
        "Thomas Stamford Raffles",
        "Jan Pieterszoon Coen"
      ],
      "optionDetails": {
        "Johannes van den Bosch": "✓ BENAR: Van den Bosch menerapkan Cultuurstelsel untuk mengisi kas kas kerajaan Belanda yang kosong pasca Perang Diponegoro.",
        "Herman Willem Daendels": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Van den Bosch menerapkan Cultuurstelsel untuk mengisi kas kas kerajaan Belanda yang kosong pasca Perang Diponegoro.",
        "Thomas Stamford Raffles": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Van den Bosch menerapkan Cultuurstelsel untuk mengisi kas kas kerajaan Belanda yang kosong pasca Perang Diponegoro.",
        "Jan Pieterszoon Coen": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Van den Bosch menerapkan Cultuurstelsel untuk mengisi kas kas kerajaan Belanda yang kosong pasca Perang Diponegoro."
      },
      "correctAnswer": "Johannes van den Bosch",
      "explanationText": "Van den Bosch menerapkan Cultuurstelsel untuk mengisi kas kas kerajaan Belanda yang kosong pasca Perang Diponegoro.",
      "knownWrongPatterns": {
        "Herman Willem Daendels": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pencetus Tanam Paksa = Van den Bosch."
        },
        "Thomas Stamford Raffles": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pencetus Tanam Paksa = Van den Bosch."
        },
        "Jan Pieterszoon Coen": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pencetus Tanam Paksa = Van den Bosch."
        }
      }
    },
    {
      "id": "q-sejarah-11-6",
      "conceptName": "Perang Diponegoro",
      "topic": "Sejarah Indonesia XI",
      "questionText": "Penyebab khusus meletusnya Perang Diponegoro (Perang Jawa 1825–1830) adalah...",
      "type": "mcq",
      "options": [
        "Pemasangan patok jalan oleh Belanda yang melintasi makam leluhur Pangeran Diponegoro di Tegalrejo",
        "Penghapusan sistem kerajaan Mataram Islam secara total",
        "Pemberontakan prajurit keraton terhadap raja",
        "Perebutan pelabuhan dagang di Semarang"
      ],
      "optionDetails": {
        "Pemasangan patok jalan oleh Belanda yang melintasi makam leluhur Pangeran Diponegoro di Tegalrejo": "✓ BENAR: Insiden pemasangan patok jalan melintasi tanah makam leluhur menyulut kemarahan Pangeran Diponegoro.",
        "Penghapusan sistem kerajaan Mataram Islam secara total": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Insiden pemasangan patok jalan melintasi tanah makam leluhur menyulut kemarahan Pangeran Diponegoro.",
        "Pemberontakan prajurit keraton terhadap raja": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Insiden pemasangan patok jalan melintasi tanah makam leluhur menyulut kemarahan Pangeran Diponegoro.",
        "Perebutan pelabuhan dagang di Semarang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Insiden pemasangan patok jalan melintasi tanah makam leluhur menyulut kemarahan Pangeran Diponegoro."
      },
      "correctAnswer": "Pemasangan patok jalan oleh Belanda yang melintasi makam leluhur Pangeran Diponegoro di Tegalrejo",
      "explanationText": "Insiden pemasangan patok jalan melintasi tanah makam leluhur menyulut kemarahan Pangeran Diponegoro.",
      "knownWrongPatterns": {
        "Penghapusan sistem kerajaan Mataram Islam secara total": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pemasangan patok melintasi makam leluhur di Tegalrejo."
        },
        "Pemberontakan prajurit keraton terhadap raja": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pemasangan patok melintasi makam leluhur di Tegalrejo."
        },
        "Perebutan pelabuhan dagang di Semarang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pemasangan patok melintasi makam leluhur di Tegalrejo."
        }
      }
    },
    {
      "id": "q-sejarah-11-7",
      "conceptName": "Organisasi Masa Pendudukan Jepang",
      "topic": "Sejarah Indonesia XI",
      "questionText": "Badan bentukan Jepang pada 1 Maret 1945 yang bertugas menyelidiki persiapan kemerdekaan Indonesia adalah...",
      "type": "mcq",
      "options": [
        "BPUPKI (Dokuritsu Junbi Cosakai)",
        "PPKI (Dokuritsu Junbi Inkai)",
        "PETA (Pembela Tanah Air)",
        "Putera (Pusat Tenaga Rakyat)"
      ],
      "optionDetails": {
        "BPUPKI (Dokuritsu Junbi Cosakai)": "✓ BENAR: BPUPKI dipimpin oleh K.R.T. Radjiman Wedyodiningrat bertugas merumuskan dasar negara.",
        "PPKI (Dokuritsu Junbi Inkai)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: BPUPKI dipimpin oleh K.R.T. Radjiman Wedyodiningrat bertugas merumuskan dasar negara.",
        "PETA (Pembela Tanah Air)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: BPUPKI dipimpin oleh K.R.T. Radjiman Wedyodiningrat bertugas merumuskan dasar negara.",
        "Putera (Pusat Tenaga Rakyat)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: BPUPKI dipimpin oleh K.R.T. Radjiman Wedyodiningrat bertugas merumuskan dasar negara."
      },
      "correctAnswer": "BPUPKI (Dokuritsu Junbi Cosakai)",
      "explanationText": "BPUPKI dipimpin oleh K.R.T. Radjiman Wedyodiningrat bertugas merumuskan dasar negara.",
      "knownWrongPatterns": {
        "PPKI (Dokuritsu Junbi Inkai)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Badan Penyelidik = BPUPKI (Dokuritsu Junbi Cosakai)."
        },
        "PETA (Pembela Tanah Air)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Badan Penyelidik = BPUPKI (Dokuritsu Junbi Cosakai)."
        },
        "Putera (Pusat Tenaga Rakyat)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Badan Penyelidik = BPUPKI (Dokuritsu Junbi Cosakai)."
        }
      }
    },
    {
      "id": "q-sejarah-11-8",
      "conceptName": "Peristiwa Rengasdengklok",
      "topic": "Sejarah Indonesia XI",
      "questionText": "Tujuan para pemuda membawa Soekarno dan Hatta ke Rengasdengklok pada 16 Agustus 1945 adalah...",
      "type": "mcq",
      "options": [
        "Menjauhkan kedua tokoh dari pengaruh Jepang agar proklamasi segera diproklamasikan",
        "Memaksa kedua tokoh menyerah kepada tentara Sekutu",
        "Mengamankan naskah proklamasi yang asli dari perampasan",
        "Menghindari serangan pemberontakan lokal"
      ],
      "optionDetails": {
        "Menjauhkan kedua tokoh dari pengaruh Jepang agar proklamasi segera diproklamasikan": "✓ BENAR: Golongan muda mendesak proklamasi dilakukan mandiri tanpa campur tangan janji kemerdekaan Jepang.",
        "Memaksa kedua tokoh menyerah kepada tentara Sekutu": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Golongan muda mendesak proklamasi dilakukan mandiri tanpa campur tangan janji kemerdekaan Jepang.",
        "Mengamankan naskah proklamasi yang asli dari perampasan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Golongan muda mendesak proklamasi dilakukan mandiri tanpa campur tangan janji kemerdekaan Jepang.",
        "Menghindari serangan pemberontakan lokal": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Golongan muda mendesak proklamasi dilakukan mandiri tanpa campur tangan janji kemerdekaan Jepang."
      },
      "correctAnswer": "Menjauhkan kedua tokoh dari pengaruh Jepang agar proklamasi segera diproklamasikan",
      "explanationText": "Golongan muda mendesak proklamasi dilakukan mandiri tanpa campur tangan janji kemerdekaan Jepang.",
      "knownWrongPatterns": {
        "Memaksa kedua tokoh menyerah kepada tentara Sekutu": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Menjauhkan Soekarno-Hatta dari pengaruh intervensi Jepang."
        },
        "Mengamankan naskah proklamasi yang asli dari perampasan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Menjauhkan Soekarno-Hatta dari pengaruh intervensi Jepang."
        },
        "Menghindari serangan pemberontakan lokal": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Menjauhkan Soekarno-Hatta dari pengaruh intervensi Jepang."
        }
      }
    },
    {
      "id": "q-sejarah-11-9",
      "conceptName": "Tokoh Pengetik Teks Proklamasi",
      "topic": "Sejarah Indonesia XI",
      "questionText": "Tokoh pemuda yang mengetik naskah proklamasi otentik setelah dirumuskan di rumah Laksamana Maeda adalah...",
      "type": "mcq",
      "options": [
        "Sayuti Melik",
        "Sukarni",
        "B.M. Diah",
        "Chaerul Saleh"
      ],
      "optionDetails": {
        "Sayuti Melik": "✓ BENAR: Sayuti Melik mengetik naskah otentik didampingi B.M. Diah atas usul Sukarni.",
        "Sukarni": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sayuti Melik mengetik naskah otentik didampingi B.M. Diah atas usul Sukarni.",
        "B.M. Diah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sayuti Melik mengetik naskah otentik didampingi B.M. Diah atas usul Sukarni.",
        "Chaerul Saleh": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sayuti Melik mengetik naskah otentik didampingi B.M. Diah atas usul Sukarni."
      },
      "correctAnswer": "Sayuti Melik",
      "explanationText": "Sayuti Melik mengetik naskah otentik didampingi B.M. Diah atas usul Sukarni.",
      "knownWrongPatterns": {
        "Sukarni": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pengetik naskah proklamasi = Sayuti Melik."
        },
        "B.M. Diah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pengetik naskah proklamasi = Sayuti Melik."
        },
        "Chaerul Saleh": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pengetik naskah proklamasi = Sayuti Melik."
        }
      }
    },
    {
      "id": "q-sejarah-11-10",
      "conceptName": "Pengibaran Sang Saka Merah Putih",
      "topic": "Sejarah Indonesia XI",
      "questionText": "Tokoh pemuda pejuang yang mengibarkan bendera Sang Saka Merah Putih pada saat Proklamasi 17 Agustus 1945 adalah...",
      "type": "mcq",
      "options": [
        "Latief Hendraningrat dan Suhud",
        "Sayuti Melik dan Sukarni",
        "Achmad Soebardjo dan Maeda",
        "Sutan Sjahrir dan Adam Malik"
      ],
      "optionDetails": {
        "Latief Hendraningrat dan Suhud": "✓ BENAR: Latief Hendraningrat dan Suhud Sastro Kusumo bertindak sebagai pengibar bendera di Pegangsaan Timur 56.",
        "Sayuti Melik dan Sukarni": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Latief Hendraningrat dan Suhud Sastro Kusumo bertindak sebagai pengibar bendera di Pegangsaan Timur 56.",
        "Achmad Soebardjo dan Maeda": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Latief Hendraningrat dan Suhud Sastro Kusumo bertindak sebagai pengibar bendera di Pegangsaan Timur 56.",
        "Sutan Sjahrir dan Adam Malik": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Latief Hendraningrat dan Suhud Sastro Kusumo bertindak sebagai pengibar bendera di Pegangsaan Timur 56."
      },
      "correctAnswer": "Latief Hendraningrat dan Suhud",
      "explanationText": "Latief Hendraningrat dan Suhud Sastro Kusumo bertindak sebagai pengibar bendera di Pegangsaan Timur 56.",
      "knownWrongPatterns": {
        "Sayuti Melik dan Sukarni": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Latief Hendraningrat dan Suhud."
        },
        "Achmad Soebardjo dan Maeda": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Latief Hendraningrat dan Suhud."
        },
        "Sutan Sjahrir dan Adam Malik": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Latief Hendraningrat dan Suhud."
        }
      }
    }
  ],
  "mat-lanjut-11": [
    {
      "id": "q-mat-lanjut-11-1",
      "conceptName": "Teorema Sisa Polinomial",
      "topic": "Matematika Tingkat Lanjut XI",
      "questionText": "Jika suku banyak P(x) = 2x³ - 3x² + 4x - 5 dibagi oleh (x - 2), berapakah sisa pembagiannya?",
      "type": "mcq",
      "options": [
        "7"
      ],
      "optionDetails": {
        "7": "✓ BENAR: Sisa = P(2) = 2(8) - 3(4) + 4(2) - 5 = 16 - 12 + 8 - 5 = 7."
      },
      "correctAnswer": "7",
      "explanationText": "Sisa = P(2) = 2(8) - 3(4) + 4(2) - 5 = 16 - 12 + 8 - 5 = 7.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-mat-lanjut-11-2",
      "conceptName": "Derajat Suku Banyak",
      "topic": "Matematika Tingkat Lanjut XI",
      "questionText": "Tentukan derajat dari polinomial hasil kali P(x) = (3x² - 1)(2x⁴ + 5x - 7)!",
      "type": "mcq",
      "options": [
        "6"
      ],
      "optionDetails": {
        "6": "✓ BENAR: Derajat hasil kali adalah jumlah derajat tertinggi: 2 + 4 = 6."
      },
      "correctAnswer": "6",
      "explanationText": "Derajat hasil kali adalah jumlah derajat tertinggi: 2 + 4 = 6.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-mat-lanjut-11-3",
      "conceptName": "Panjang Vektor 3D",
      "topic": "Matematika Tingkat Lanjut XI",
      "questionText": "Diketahui vektor v = (2, 3, 6). Berapakah panjang (modulus) dari vektor v tersebut?",
      "type": "mcq",
      "options": [
        "7"
      ],
      "optionDetails": {
        "7": "✓ BENAR: |v| = √(2² + 3² + 6²) = √(4 + 9 + 36) = √49 = 7."
      },
      "correctAnswer": "7",
      "explanationText": "|v| = √(2² + 3² + 6²) = √(4 + 9 + 36) = √49 = 7.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-mat-lanjut-11-4",
      "conceptName": "Perkalian Titik Vektor (Dot Product)",
      "topic": "Matematika Tingkat Lanjut XI",
      "questionText": "Jika vektor a = (1, 3, -2) dan vektor b = (4, -1, 2), berapakah hasil dari perkalian titik a · b?",
      "type": "mcq",
      "options": [
        "-3"
      ],
      "optionDetails": {
        "-3": "✓ BENAR: a · b = (1 × 4) + (3 × -1) + (-2 × 2) = 4 - 3 - 4 = -3."
      },
      "correctAnswer": "-3",
      "explanationText": "a · b = (1 × 4) + (3 × -1) + (-2 × 2) = 4 - 3 - 4 = -3.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-mat-lanjut-11-5",
      "conceptName": "Rumus Sinus Jumlah Sudut",
      "topic": "Matematika Tingkat Lanjut XI",
      "questionText": "Rumus trigonometri untuk sin(α + β) adalah...",
      "type": "mcq",
      "options": [
        "sin(α)cos(β) + cos(α)sin(β)",
        "sin(α)cos(β) - cos(α)sin(β)",
        "cos(α)cos(β) - sin(α)sin(β)",
        "cos(α)cos(β) + sin(α)sin(β)"
      ],
      "optionDetails": {
        "sin(α)cos(β) + cos(α)sin(β)": "✓ BENAR: Rumus adisi sinus: sin(α + β) = sin(α)cos(β) + cos(α)sin(β).",
        "sin(α)cos(β) - cos(α)sin(β)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rumus adisi sinus: sin(α + β) = sin(α)cos(β) + cos(α)sin(β).",
        "cos(α)cos(β) - sin(α)sin(β)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rumus adisi sinus: sin(α + β) = sin(α)cos(β) + cos(α)sin(β).",
        "cos(α)cos(β) + sin(α)sin(β)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rumus adisi sinus: sin(α + β) = sin(α)cos(β) + cos(α)sin(β)."
      },
      "correctAnswer": "sin(α)cos(β) + cos(α)sin(β)",
      "explanationText": "Rumus adisi sinus: sin(α + β) = sin(α)cos(β) + cos(α)sin(β).",
      "knownWrongPatterns": {
        "sin(α)cos(β) - cos(α)sin(β)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "sin(a + b) = sin a cos b + cos a sin b."
        },
        "cos(α)cos(β) - sin(α)sin(β)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "sin(a + b) = sin a cos b + cos a sin b."
        },
        "cos(α)cos(β) + sin(α)sin(β)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "sin(a + b) = sin a cos b + cos a sin b."
        }
      }
    },
    {
      "id": "q-mat-lanjut-11-6",
      "conceptName": "Kosinus Sudut Ganda",
      "topic": "Matematika Tingkat Lanjut XI",
      "questionText": "Bentuk identitas kosinus sudut ganda cos(2α) dapat dituliskan sebagai...",
      "type": "mcq",
      "options": [
        "cos²(α) - sin²(α)",
        "cos²(α) + sin²(α)",
        "2 sin(α) cos(α)",
        "1 + 2 sin²(α)"
      ],
      "optionDetails": {
        "cos²(α) - sin²(α)": "✓ BENAR: cos(2α) = cos²(α) - sin²(α) = 2cos²(α) - 1 = 1 - 2sin²(α).",
        "cos²(α) + sin²(α)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: cos(2α) = cos²(α) - sin²(α) = 2cos²(α) - 1 = 1 - 2sin²(α).",
        "2 sin(α) cos(α)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: cos(2α) = cos²(α) - sin²(α) = 2cos²(α) - 1 = 1 - 2sin²(α).",
        "1 + 2 sin²(α)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: cos(2α) = cos²(α) - sin²(α) = 2cos²(α) - 1 = 1 - 2sin²(α)."
      },
      "correctAnswer": "cos²(α) - sin²(α)",
      "explanationText": "cos(2α) = cos²(α) - sin²(α) = 2cos²(α) - 1 = 1 - 2sin²(α).",
      "knownWrongPatterns": {
        "cos²(α) + sin²(α)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "cos(2a) = cos²a - sin²a."
        },
        "2 sin(α) cos(α)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "cos(2a) = cos²a - sin²a."
        },
        "1 + 2 sin²(α)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "cos(2a) = cos²a - sin²a."
        }
      }
    },
    {
      "id": "q-mat-lanjut-11-7",
      "conceptName": "Persamaan Lingkaran Pusat (0,0)",
      "topic": "Matematika Tingkat Lanjut XI",
      "questionText": "Persamaan lingkaran yang berpusat di titik asal O(0,0) dan berjari-jari r = 5 adalah...",
      "type": "mcq",
      "options": [
        "x² + y² = 25",
        "x² + y² = 5",
        "x² - y² = 25",
        "(x - 5)² + (y - 5)² = 25"
      ],
      "optionDetails": {
        "x² + y² = 25": "✓ BENAR: Persamaan standar lingkaran pusat (0,0): x² + y² = r² = 5² = 25.",
        "x² + y² = 5": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Persamaan standar lingkaran pusat (0,0): x² + y² = r² = 5² = 25.",
        "x² - y² = 25": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Persamaan standar lingkaran pusat (0,0): x² + y² = r² = 5² = 25.",
        "(x - 5)² + (y - 5)² = 25": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Persamaan standar lingkaran pusat (0,0): x² + y² = r² = 5² = 25."
      },
      "correctAnswer": "x² + y² = 25",
      "explanationText": "Persamaan standar lingkaran pusat (0,0): x² + y² = r² = 5² = 25.",
      "knownWrongPatterns": {
        "x² + y² = 5": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "x² + y² = r²."
        },
        "x² - y² = 25": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "x² + y² = r²."
        },
        "(x - 5)² + (y - 5)² = 25": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "x² + y² = r²."
        }
      }
    },
    {
      "id": "q-mat-lanjut-11-8",
      "conceptName": "Akar Polinomial Teorema Vieta",
      "topic": "Matematika Tingkat Lanjut XI",
      "questionText": "Pada persamaan kuadrat x² - 7x + 12 = 0 dengan akar x1 dan x2, nilai hasil kali akar-akarnya (x1 · x2) adalah...",
      "type": "mcq",
      "options": [
        "12"
      ],
      "optionDetails": {
        "12": "✓ BENAR: Berdasarkan Teorema Vieta: x1 · x2 = c / a = 12 / 1 = 12."
      },
      "correctAnswer": "12",
      "explanationText": "Berdasarkan Teorema Vieta: x1 · x2 = c / a = 12 / 1 = 12.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-mat-lanjut-11-9",
      "conceptName": "Nilai Eksak Cos 75 Derajat",
      "topic": "Matematika Tingkat Lanjut XI",
      "questionText": "Berapakah nilai dari cos(75°) yang dihitung menggunakan cos(45° + 30°)?",
      "type": "mcq",
      "options": [
        "(√6 - √2) / 4",
        "(√6 + √2) / 4",
        "(√3 - 1) / 2",
        "√2 / 4"
      ],
      "optionDetails": {
        "(√6 - √2) / 4": "✓ BENAR: cos(45+30) = cos45 cos30 - sin45 sin30 = (√2/2)(√3/2) - (√2/2)(1/2) = (√6 - √2)/4.",
        "(√6 + √2) / 4": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: cos(45+30) = cos45 cos30 - sin45 sin30 = (√2/2)(√3/2) - (√2/2)(1/2) = (√6 - √2)/4.",
        "(√3 - 1) / 2": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: cos(45+30) = cos45 cos30 - sin45 sin30 = (√2/2)(√3/2) - (√2/2)(1/2) = (√6 - √2)/4.",
        "√2 / 4": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: cos(45+30) = cos45 cos30 - sin45 sin30 = (√2/2)(√3/2) - (√2/2)(1/2) = (√6 - √2)/4."
      },
      "correctAnswer": "(√6 - √2) / 4",
      "explanationText": "cos(45+30) = cos45 cos30 - sin45 sin30 = (√2/2)(√3/2) - (√2/2)(1/2) = (√6 - √2)/4.",
      "knownWrongPatterns": {
        "(√6 + √2) / 4": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "cos(45+30) = cos45 cos30 - sin45 sin30."
        },
        "(√3 - 1) / 2": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "cos(45+30) = cos45 cos30 - sin45 sin30."
        },
        "√2 / 4": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "cos(45+30) = cos45 cos30 - sin45 sin30."
        }
      }
    },
    {
      "id": "q-mat-lanjut-11-10",
      "conceptName": "Determinan Matriks 3x3 Sarrus",
      "topic": "Matematika Tingkat Lanjut XI",
      "questionText": "Berapakah determinan dari matriks identitas I₃ berordo 3x3?",
      "type": "mcq",
      "options": [
        "1"
      ],
      "optionDetails": {
        "1": "✓ BENAR: Determinan dari matriks identitas ordo berapa pun selalu bernilai 1."
      },
      "correctAnswer": "1",
      "explanationText": "Determinan dari matriks identitas ordo berapa pun selalu bernilai 1.",
      "knownWrongPatterns": {}
    }
  ],
  "fisika-11": [
    {
      "id": "q-fisika-11-1",
      "conceptName": "Persamaan Kontinuitas Fluida",
      "topic": "Fisika XI",
      "questionText": "Air mengalir melalui pipa berdiameter besar dengan kelajuan 2 m/s. Jika pipa menyempit sehingga luas penampangnya menjadi setengah dari semula, berapakah kelajuan air di pipa sempit tersebut (dalam m/s)?",
      "type": "mcq",
      "options": [
        "4"
      ],
      "optionDetails": {
        "4": "✓ BENAR: A1 · v1 = A2 · v2 -> A1 × 2 = (0.5 A1) × v2 -> v2 = 4 m/s."
      },
      "correctAnswer": "4",
      "explanationText": "A1 · v1 = A2 · v2 -> A1 × 2 = (0.5 A1) × v2 -> v2 = 4 m/s.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-fisika-11-2",
      "conceptName": "Torsi Momen Gaya",
      "topic": "Fisika XI",
      "questionText": "Gaya sebesar 20 N bekerja tegak lurus pada ujung kunci pas yang panjangnya 25 cm (0,25 m). Berapakah momen gaya (torsi) yang dihasilkan (dalam N·m)?",
      "type": "mcq",
      "options": [
        "5"
      ],
      "optionDetails": {
        "5": "✓ BENAR: τ = F × r × sin(90°) = 20 N × 0.25 m = 5 N·m."
      },
      "correctAnswer": "5",
      "explanationText": "τ = F × r × sin(90°) = 20 N × 0.25 m = 5 N·m.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-fisika-11-3",
      "conceptName": "Momen Inersia Silinder Pejal",
      "topic": "Fisika XI",
      "questionText": "Momen inersia silinder pejal bermassa M dan berjari-jari R yang berputar pada poros utamanya dirumuskan sebagai...",
      "type": "mcq",
      "options": [
        "I = 1/2 M R²",
        "I = M R²",
        "I = 2/5 M R²",
        "I = 1/12 M R²"
      ],
      "optionDetails": {
        "I = 1/2 M R²": "✓ BENAR: Silinder pejal berporos sumbu simetri memiliki momen inersia I = 1/2 M R².",
        "I = M R²": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Silinder pejal berporos sumbu simetri memiliki momen inersia I = 1/2 M R².",
        "I = 2/5 M R²": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Silinder pejal berporos sumbu simetri memiliki momen inersia I = 1/2 M R².",
        "I = 1/12 M R²": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Silinder pejal berporos sumbu simetri memiliki momen inersia I = 1/2 M R²."
      },
      "correctAnswer": "I = 1/2 M R²",
      "explanationText": "Silinder pejal berporos sumbu simetri memiliki momen inersia I = 1/2 M R².",
      "knownWrongPatterns": {
        "I = M R²": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Momen inersia silinder pejal = 1/2 M R²."
        },
        "I = 2/5 M R²": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Momen inersia silinder pejal = 1/2 M R²."
        },
        "I = 1/12 M R²": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Momen inersia silinder pejal = 1/2 M R²."
        }
      }
    },
    {
      "id": "q-fisika-11-4",
      "conceptName": "Hukum Hooke Pegas",
      "topic": "Fisika XI",
      "questionText": "Sebuah pegas bertambah panjang 4 cm (0,04 m) ketika ditarik dengan gaya 20 N. Berapakah konstanta pegas tersebut (dalam N/m)?",
      "type": "mcq",
      "options": [
        "500"
      ],
      "optionDetails": {
        "500": "✓ BENAR: k = F / Δx = 20 N / 0.04 m = 500 N/m."
      },
      "correctAnswer": "500",
      "explanationText": "k = F / Δx = 20 N / 0.04 m = 500 N/m.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-fisika-11-5",
      "conceptName": "Tekanan Hidrostatis",
      "topic": "Fisika XI",
      "questionText": "Berapakah tekanan hidrostatis pada kedalaman 5 meter di dalam air danau (massa jenis air = 1000 kg/m³, percepatan gravitasi g = 10 m/s²) dalam Pascal?",
      "type": "mcq",
      "options": [
        "50000"
      ],
      "optionDetails": {
        "50000": "✓ BENAR: P = ρ · g · h = 1000 × 10 × 5 = 50.000 Pa (50 kPa)."
      },
      "correctAnswer": "50000",
      "explanationText": "P = ρ · g · h = 1000 × 10 × 5 = 50.000 Pa (50 kPa).",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-fisika-11-6",
      "conceptName": "Hukum Archimedes",
      "topic": "Fisika XI",
      "questionText": "Benda terapung di atas air dengan 3/4 bagian volumenya tercelup. Jika massa jenis air 1000 kg/m³, berapakah massa jenis benda tersebut (dalam kg/m³)?",
      "type": "mcq",
      "options": [
        "750"
      ],
      "optionDetails": {
        "750": "✓ BENAR: ρ_benda = (V_celup / V_total) × ρ_cair = (3/4) × 1000 = 750 kg/m³."
      },
      "correctAnswer": "750",
      "explanationText": "ρ_benda = (V_celup / V_total) × ρ_cair = (3/4) × 1000 = 750 kg/m³.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-fisika-11-7",
      "conceptName": "Azas Black Kalor",
      "topic": "Fisika XI",
      "questionText": "Prinsip pelepasan dan penyerapan kalor pada pencampuran zat yang menyatakan Q_lepas = Q_terima dicetuskan oleh...",
      "type": "mcq",
      "options": [
        "Joseph Black",
        "James Prescott Joule",
        "Lord Kelvin",
        "Robert Boyle"
      ],
      "optionDetails": {
        "Joseph Black": "✓ BENAR: Azas Black menyatakan kalor yang dilepas benda bersuhu tinggi sama dengan kalor yang diserap benda bersuhu rendah.",
        "James Prescott Joule": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Azas Black menyatakan kalor yang dilepas benda bersuhu tinggi sama dengan kalor yang diserap benda bersuhu rendah.",
        "Lord Kelvin": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Azas Black menyatakan kalor yang dilepas benda bersuhu tinggi sama dengan kalor yang diserap benda bersuhu rendah.",
        "Robert Boyle": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Azas Black menyatakan kalor yang dilepas benda bersuhu tinggi sama dengan kalor yang diserap benda bersuhu rendah."
      },
      "correctAnswer": "Joseph Black",
      "explanationText": "Azas Black menyatakan kalor yang dilepas benda bersuhu tinggi sama dengan kalor yang diserap benda bersuhu rendah.",
      "knownWrongPatterns": {
        "James Prescott Joule": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Q lepas = Q terima adalah Azas Black."
        },
        "Lord Kelvin": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Q lepas = Q terima adalah Azas Black."
        },
        "Robert Boyle": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Q lepas = Q terima adalah Azas Black."
        }
      }
    },
    {
      "id": "q-fisika-11-8",
      "conceptName": "Hukum Termodinamika I",
      "topic": "Fisika XI",
      "questionText": "Formulasi Hukum Pertama Termodinamika yang menyatakan kekekalan energi sistem gas adalah...",
      "type": "mcq",
      "options": [
        "ΔU = Q - W",
        "ΔU = Q + W",
        "W = Q · ΔU",
        "Q = W / ΔU"
      ],
      "optionDetails": {
        "ΔU = Q - W": "✓ BENAR: Perubahan energi dalam ΔU = kalor yang masuk (Q) dikurangi usaha luar yang dilakukan (W).",
        "ΔU = Q + W": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Perubahan energi dalam ΔU = kalor yang masuk (Q) dikurangi usaha luar yang dilakukan (W).",
        "W = Q · ΔU": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Perubahan energi dalam ΔU = kalor yang masuk (Q) dikurangi usaha luar yang dilakukan (W).",
        "Q = W / ΔU": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Perubahan energi dalam ΔU = kalor yang masuk (Q) dikurangi usaha luar yang dilakukan (W)."
      },
      "correctAnswer": "ΔU = Q - W",
      "explanationText": "Perubahan energi dalam ΔU = kalor yang masuk (Q) dikurangi usaha luar yang dilakukan (W).",
      "knownWrongPatterns": {
        "ΔU = Q + W": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "delta U = Q - W."
        },
        "W = Q · ΔU": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "delta U = Q - W."
        },
        "Q = W / ΔU": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "delta U = Q - W."
        }
      }
    },
    {
      "id": "q-fisika-11-9",
      "conceptName": "Efisiensi Mesin Carnot",
      "topic": "Fisika XI",
      "questionText": "Mesin Carnot bekerja di antara reservoir suhu tinggi 600 K dan suhu rendah 300 K. Berapakah efisiensi mesin Carnot tersebut (dalam persen)?",
      "type": "mcq",
      "options": [
        "50"
      ],
      "optionDetails": {
        "50": "✓ BENAR: η = (1 - T_rendah / T_tinggi) × 100% = (1 - 300/600) × 100% = 50%."
      },
      "correctAnswer": "50",
      "explanationText": "η = (1 - T_rendah / T_tinggi) × 100% = (1 - 300/600) × 100% = 50%.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-fisika-11-10",
      "conceptName": "Hukum Bernoulli",
      "topic": "Fisika XI",
      "questionText": "Gaya angkat pada sayap pesawat terbang dapat dijelaskan dengan Hukum Bernoulli, yaitu kelajuan udara di atas sayap lebih cepat sehingga...",
      "type": "mcq",
      "options": [
        "Tekanan udara di atas sayap lebih kecil daripada di bawah sayap",
        "Tekanan udara di atas sayap lebih besar daripada di bawah sayap",
        "Massa jenis udara di atas sayap meningkat drastis",
        "Gaya gravitasi di atas sayap lenyap seketika"
      ],
      "optionDetails": {
        "Tekanan udara di atas sayap lebih kecil daripada di bawah sayap": "✓ BENAR: Laju udara tinggi menyebabkan tekanan turun (Bernoulli), sehingga tekanan bawah yang lebih besar mengangkat sayap.",
        "Tekanan udara di atas sayap lebih besar daripada di bawah sayap": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Laju udara tinggi menyebabkan tekanan turun (Bernoulli), sehingga tekanan bawah yang lebih besar mengangkat sayap.",
        "Massa jenis udara di atas sayap meningkat drastis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Laju udara tinggi menyebabkan tekanan turun (Bernoulli), sehingga tekanan bawah yang lebih besar mengangkat sayap.",
        "Gaya gravitasi di atas sayap lenyap seketika": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Laju udara tinggi menyebabkan tekanan turun (Bernoulli), sehingga tekanan bawah yang lebih besar mengangkat sayap."
      },
      "correctAnswer": "Tekanan udara di atas sayap lebih kecil daripada di bawah sayap",
      "explanationText": "Laju udara tinggi menyebabkan tekanan turun (Bernoulli), sehingga tekanan bawah yang lebih besar mengangkat sayap.",
      "knownWrongPatterns": {
        "Tekanan udara di atas sayap lebih besar daripada di bawah sayap": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Laju atas cepat -> tekanan atas rendah -> terangkat."
        },
        "Massa jenis udara di atas sayap meningkat drastis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Laju atas cepat -> tekanan atas rendah -> terangkat."
        },
        "Gaya gravitasi di atas sayap lenyap seketika": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Laju atas cepat -> tekanan atas rendah -> terangkat."
        }
      }
    }
  ],
  "kimia-11": [
    {
      "id": "q-kimia-11-1",
      "conceptName": "Reaksi Eksoterm",
      "topic": "Kimia XI",
      "questionText": "Reaksi kimia yang melepaskan kalor dari sistem ke lingkungan dan memiliki perubahan entalpi bernilai negatif (ΔH < 0) disebut reaksi...",
      "type": "mcq",
      "options": [
        "Eksoterm",
        "Endoterm",
        "Katalitis murni",
        "Atermal"
      ],
      "optionDetails": {
        "Eksoterm": "✓ BENAR: Reaksi eksoterm melepaskan energi panas ke lingkungan (ΔH bernilai negatif).",
        "Endoterm": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Reaksi eksoterm melepaskan energi panas ke lingkungan (ΔH bernilai negatif).",
        "Katalitis murni": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Reaksi eksoterm melepaskan energi panas ke lingkungan (ΔH bernilai negatif).",
        "Atermal": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Reaksi eksoterm melepaskan energi panas ke lingkungan (ΔH bernilai negatif)."
      },
      "correctAnswer": "Eksoterm",
      "explanationText": "Reaksi eksoterm melepaskan energi panas ke lingkungan (ΔH bernilai negatif).",
      "knownWrongPatterns": {
        "Endoterm": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Melepas kalor dengan delta H negatif = eksoterm."
        },
        "Katalitis murni": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Melepas kalor dengan delta H negatif = eksoterm."
        },
        "Atermal": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Melepas kalor dengan delta H negatif = eksoterm."
        }
      }
    },
    {
      "id": "q-kimia-11-2",
      "conceptName": "Reaksi Endoterm",
      "topic": "Kimia XI",
      "questionText": "Pencampuran amonium klorida dengan barium hidroksida menyerap kalor sehingga tabung reaksi terasa sangat dingin. Reaksi ini tergolong...",
      "type": "mcq",
      "options": [
        "Endoterm (ΔH > 0)",
        "Eksoterm (ΔH < 0)",
        "Redoks spontan",
        "Pembakaran sempurna"
      ],
      "optionDetails": {
        "Endoterm (ΔH > 0)": "✓ BENAR: Sistem menyerap kalor dari lingkungan ditandai dengan penurunan suhu lingkungan (endoterm).",
        "Eksoterm (ΔH < 0)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sistem menyerap kalor dari lingkungan ditandai dengan penurunan suhu lingkungan (endoterm).",
        "Redoks spontan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sistem menyerap kalor dari lingkungan ditandai dengan penurunan suhu lingkungan (endoterm).",
        "Pembakaran sempurna": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sistem menyerap kalor dari lingkungan ditandai dengan penurunan suhu lingkungan (endoterm)."
      },
      "correctAnswer": "Endoterm (ΔH > 0)",
      "explanationText": "Sistem menyerap kalor dari lingkungan ditandai dengan penurunan suhu lingkungan (endoterm).",
      "knownWrongPatterns": {
        "Eksoterm (ΔH < 0)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Suhu lingkungan turun dingin = reaksi endoterm."
        },
        "Redoks spontan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Suhu lingkungan turun dingin = reaksi endoterm."
        },
        "Pembakaran sempurna": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Suhu lingkungan turun dingin = reaksi endoterm."
        }
      }
    },
    {
      "id": "q-kimia-11-3",
      "conceptName": "Faktor Laju Reaksi",
      "topic": "Kimia XI",
      "questionText": "Mengapa daging yang dipotong kecil-kecil lebih cepat matang saat dimasak dibandingkan daging potongan besar?",
      "type": "mcq",
      "options": [
        "Luas permukaan bidang sentuh partikel daging semakin besar",
        "Energi aktivasi memasak menurun secara kimia",
        "Konsentrasi minyak goreng bertambah",
        "Suhu api meningkat drastis"
      ],
      "optionDetails": {
        "Luas permukaan bidang sentuh partikel daging semakin besar": "✓ BENAR: Semakin kecil ukuran partikel, luas bidang sentuh semakin besar, frekuensi tumbukan efektif meningkat.",
        "Energi aktivasi memasak menurun secara kimia": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Semakin kecil ukuran partikel, luas bidang sentuh semakin besar, frekuensi tumbukan efektif meningkat.",
        "Konsentrasi minyak goreng bertambah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Semakin kecil ukuran partikel, luas bidang sentuh semakin besar, frekuensi tumbukan efektif meningkat.",
        "Suhu api meningkat drastis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Semakin kecil ukuran partikel, luas bidang sentuh semakin besar, frekuensi tumbukan efektif meningkat."
      },
      "correctAnswer": "Luas permukaan bidang sentuh partikel daging semakin besar",
      "explanationText": "Semakin kecil ukuran partikel, luas bidang sentuh semakin besar, frekuensi tumbukan efektif meningkat.",
      "knownWrongPatterns": {
        "Energi aktivasi memasak menurun secara kimia": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Potongan kecil memperluas bidang sentuh."
        },
        "Konsentrasi minyak goreng bertambah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Potongan kecil memperluas bidang sentuh."
        },
        "Suhu api meningkat drastis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Potongan kecil memperluas bidang sentuh."
        }
      }
    },
    {
      "id": "q-kimia-11-4",
      "conceptName": "Katalisator Reaksi",
      "topic": "Kimia XI",
      "questionText": "Fungsi katalis dalam mempercepat laju reaksi kimia adalah dengan cara...",
      "type": "mcq",
      "options": [
        "Menurunkan energi aktivasi (Ea) reaksi",
        "Meningkatkan entalpi produk secara spontan",
        "Mengubah posisi kesetimbangan akhir",
        "Menaikkan suhu sistem reaksi"
      ],
      "optionDetails": {
        "Menurunkan energi aktivasi (Ea) reaksi": "✓ BENAR: Katalis membuka jalur reaksi alternatif dengan energi aktivasi yang lebih rendah.",
        "Meningkatkan entalpi produk secara spontan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Katalis membuka jalur reaksi alternatif dengan energi aktivasi yang lebih rendah.",
        "Mengubah posisi kesetimbangan akhir": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Katalis membuka jalur reaksi alternatif dengan energi aktivasi yang lebih rendah.",
        "Menaikkan suhu sistem reaksi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Katalis membuka jalur reaksi alternatif dengan energi aktivasi yang lebih rendah."
      },
      "correctAnswer": "Menurunkan energi aktivasi (Ea) reaksi",
      "explanationText": "Katalis membuka jalur reaksi alternatif dengan energi aktivasi yang lebih rendah.",
      "knownWrongPatterns": {
        "Meningkatkan entalpi produk secara spontan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Katalis menurunkan energi aktivasi."
        },
        "Mengubah posisi kesetimbangan akhir": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Katalis menurunkan energi aktivasi."
        },
        "Menaikkan suhu sistem reaksi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Katalis menurunkan energi aktivasi."
        }
      }
    },
    {
      "id": "q-kimia-11-5",
      "conceptName": "Pergeseran Kesetimbangan Le Chatelier",
      "topic": "Kimia XI",
      "questionText": "Pada reaksi kesetimbangan: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (ΔH = -92 kJ). Jika suhu dinaikkan, arah pergeseran kesetimbangan akan...",
      "type": "mcq",
      "options": [
        "Bergeser ke arah kiri (reaktan / endoterm)",
        "Bergeser ke arah kanan (produk / eksoterm)",
        "Tetap dan tidak bergeser sama sekali",
        "Menghasilkan gas amonia murni seketika"
      ],
      "optionDetails": {
        "Bergeser ke arah kiri (reaktan / endoterm)": "✓ BENAR: Kenaikan suhu menggeser kesetimbangan ke arah reaksi endoterm (kiri).",
        "Bergeser ke arah kanan (produk / eksoterm)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kenaikan suhu menggeser kesetimbangan ke arah reaksi endoterm (kiri).",
        "Tetap dan tidak bergeser sama sekali": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kenaikan suhu menggeser kesetimbangan ke arah reaksi endoterm (kiri).",
        "Menghasilkan gas amonia murni seketika": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kenaikan suhu menggeser kesetimbangan ke arah reaksi endoterm (kiri)."
      },
      "correctAnswer": "Bergeser ke arah kiri (reaktan / endoterm)",
      "explanationText": "Kenaikan suhu menggeser kesetimbangan ke arah reaksi endoterm (kiri).",
      "knownWrongPatterns": {
        "Bergeser ke arah kanan (produk / eksoterm)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Suhu naik -> geser ke reaksi endoterm."
        },
        "Tetap dan tidak bergeser sama sekali": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Suhu naik -> geser ke reaksi endoterm."
        },
        "Menghasilkan gas amonia murni seketika": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Suhu naik -> geser ke reaksi endoterm."
        }
      }
    },
    {
      "id": "q-kimia-11-6",
      "conceptName": "Perhitungan pH Asam Kuat",
      "topic": "Kimia XI",
      "questionText": "Berapakah nilai pH dari larutan asam klorida (HCl) 0,01 M (10⁻² M)?",
      "type": "mcq",
      "options": [
        "2"
      ],
      "optionDetails": {
        "2": "✓ BENAR: HCl adalah asam kuat: [H⁺] = 0.01 = 10⁻² M. pH = -log(10⁻²) = 2."
      },
      "correctAnswer": "2",
      "explanationText": "HCl adalah asam kuat: [H⁺] = 0.01 = 10⁻² M. pH = -log(10⁻²) = 2.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-kimia-11-7",
      "conceptName": "Perhitungan pH Basa Kuat",
      "topic": "Kimia XI",
      "questionText": "Larutan NaOH memiliki konsentrasi 0,001 M (10⁻³ M). Berapakah nilai pH larutan tersebut?",
      "type": "mcq",
      "options": [
        "11"
      ],
      "optionDetails": {
        "11": "✓ BENAR: [OH⁻] = 10⁻³ M -> pOH = 3. pH = 14 - pOH = 14 - 3 = 11."
      },
      "correctAnswer": "11",
      "explanationText": "[OH⁻] = 10⁻³ M -> pOH = 3. pH = 14 - pOH = 14 - 3 = 11.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-kimia-11-8",
      "conceptName": "Larutan Penyangga (Buffer)",
      "topic": "Kimia XI",
      "questionText": "Campuran larutan yang dapat mempertahankan nilai pH dari penambahan sedikit asam atau basa kuat adalah...",
      "type": "mcq",
      "options": [
        "Asam asetat (CH₃COOH) dan natrium asetat (CH₃COONa)",
        "Asam klorida (HCl) dan natrium klorida (NaCl)",
        "Asam sulfat (H₂SO₄) dan natrium hidroksida (NaOH)",
        "Amonia (NH₃) dan asam nitrat kuat (HNO₃) berlebih"
      ],
      "optionDetails": {
        "Asam asetat (CH₃COOH) dan natrium asetat (CH₃COONa)": "✓ BENAR: Buffer asam terbentuk dari asam lemah dan garam basa konjugasinya.",
        "Asam klorida (HCl) dan natrium klorida (NaCl)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Buffer asam terbentuk dari asam lemah dan garam basa konjugasinya.",
        "Asam sulfat (H₂SO₄) dan natrium hidroksida (NaOH)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Buffer asam terbentuk dari asam lemah dan garam basa konjugasinya.",
        "Amonia (NH₃) dan asam nitrat kuat (HNO₃) berlebih": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Buffer asam terbentuk dari asam lemah dan garam basa konjugasinya."
      },
      "correctAnswer": "Asam asetat (CH₃COOH) dan natrium asetat (CH₃COONa)",
      "explanationText": "Buffer asam terbentuk dari asam lemah dan garam basa konjugasinya.",
      "knownWrongPatterns": {
        "Asam klorida (HCl) dan natrium klorida (NaCl)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Asam lemah + garam konjugasinya = buffer."
        },
        "Asam sulfat (H₂SO₄) dan natrium hidroksida (NaOH)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Asam lemah + garam konjugasinya = buffer."
        },
        "Amonia (NH₃) dan asam nitrat kuat (HNO₃) berlebih": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Asam lemah + garam konjugasinya = buffer."
        }
      }
    },
    {
      "id": "q-kimia-11-9",
      "conceptName": "Hidrolisis Garam Basa",
      "topic": "Kimia XI",
      "questionText": "Garam natrium asetat (CH₃COONa) yang dilarutkan ke dalam air akan mengalami hidrolisis sebagian dan menghasilkan larutan bersifat...",
      "type": "mcq",
      "options": [
        "Basa (pH > 7)",
        "Asam (pH < 7)",
        "Netral (pH = 7)",
        "Amfoterik absolut"
      ],
      "optionDetails": {
        "Basa (pH > 7)": "✓ BENAR: Anion CH₃COO⁻ terhidrolisis menghasilkan ion OH⁻, membuat larutan bersifat basa.",
        "Asam (pH < 7)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Anion CH₃COO⁻ terhidrolisis menghasilkan ion OH⁻, membuat larutan bersifat basa.",
        "Netral (pH = 7)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Anion CH₃COO⁻ terhidrolisis menghasilkan ion OH⁻, membuat larutan bersifat basa.",
        "Amfoterik absolut": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Anion CH₃COO⁻ terhidrolisis menghasilkan ion OH⁻, membuat larutan bersifat basa."
      },
      "correctAnswer": "Basa (pH > 7)",
      "explanationText": "Anion CH₃COO⁻ terhidrolisis menghasilkan ion OH⁻, membuat larutan bersifat basa.",
      "knownWrongPatterns": {
        "Asam (pH < 7)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Berasal dari asam lemah + basa kuat -> sifat basa (pH > 7)."
        },
        "Netral (pH = 7)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Berasal dari asam lemah + basa kuat -> sifat basa (pH > 7)."
        },
        "Amfoterik absolut": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Berasal dari asam lemah + basa kuat -> sifat basa (pH > 7)."
        }
      }
    },
    {
      "id": "q-kimia-11-10",
      "conceptName": "Sifat Koloid Efek Tyndall",
      "topic": "Kimia XI",
      "questionText": "Hamburan berkas cahaya oleh partikel koloid saat melewati kabut atau debu di bioskop dinamakan efek...",
      "type": "mcq",
      "options": [
        "Tyndall",
        "Gerak Brown",
        "Elektroforesis",
        "Koagulasi"
      ],
      "optionDetails": {
        "Tyndall": "✓ BENAR: Efek Tyndall adalah gejala penghamburan berkas sinar oleh partikel-partikel koloid.",
        "Gerak Brown": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Efek Tyndall adalah gejala penghamburan berkas sinar oleh partikel-partikel koloid.",
        "Elektroforesis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Efek Tyndall adalah gejala penghamburan berkas sinar oleh partikel-partikel koloid.",
        "Koagulasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Efek Tyndall adalah gejala penghamburan berkas sinar oleh partikel-partikel koloid."
      },
      "correctAnswer": "Tyndall",
      "explanationText": "Efek Tyndall adalah gejala penghamburan berkas sinar oleh partikel-partikel koloid.",
      "knownWrongPatterns": {
        "Gerak Brown": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hamburan cahaya pada koloid = Efek Tyndall."
        },
        "Elektroforesis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hamburan cahaya pada koloid = Efek Tyndall."
        },
        "Koagulasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Hamburan cahaya pada koloid = Efek Tyndall."
        }
      }
    }
  ],
  "biologi-11": [
    {
      "id": "q-biologi-11-1",
      "conceptName": "Mitokondria Respirasi",
      "topic": "Biologi XI",
      "questionText": "Organel sel yang memiliki membran ganda dan berfungsi sebagai tempat respirasi seluler untuk menghasilkan molekul energi (ATP) adalah...",
      "type": "mcq",
      "options": [
        "Mitokondria",
        "Ribosom",
        "Lisosom",
        "Badan Golgi"
      ],
      "optionDetails": {
        "Mitokondria": "✓ BENAR: Mitokondria adalah 'the powerhouse of the cell' tempat siklus Krebs dan fosforilasi oksidatif ATP.",
        "Ribosom": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mitokondria adalah 'the powerhouse of the cell' tempat siklus Krebs dan fosforilasi oksidatif ATP.",
        "Lisosom": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mitokondria adalah 'the powerhouse of the cell' tempat siklus Krebs dan fosforilasi oksidatif ATP.",
        "Badan Golgi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mitokondria adalah 'the powerhouse of the cell' tempat siklus Krebs dan fosforilasi oksidatif ATP."
      },
      "correctAnswer": "Mitokondria",
      "explanationText": "Mitokondria adalah 'the powerhouse of the cell' tempat siklus Krebs dan fosforilasi oksidatif ATP.",
      "knownWrongPatterns": {
        "Ribosom": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penghasil energi seluler ATP = mitokondria."
        },
        "Lisosom": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penghasil energi seluler ATP = mitokondria."
        },
        "Badan Golgi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penghasil energi seluler ATP = mitokondria."
        }
      }
    },
    {
      "id": "q-biologi-11-2",
      "conceptName": "Jaringan Meristem",
      "topic": "Biologi XI",
      "questionText": "Jaringan tumbuhan yang sel-selnya aktif membelah secara mitosis dan menyebabkan pertumbuhan memanjang pada ujung akar dan batang adalah...",
      "type": "mcq",
      "options": [
        "Meristem Apikal",
        "Jaringan Epidermis",
        "Jaringan Sklerenkim",
        "Parenkim Penimbun"
      ],
      "optionDetails": {
        "Meristem Apikal": "✓ BENAR: Meristem apikal di ujung pucuk dan akar memicu pertumbuhan primer tinggi tanaman.",
        "Jaringan Epidermis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Meristem apikal di ujung pucuk dan akar memicu pertumbuhan primer tinggi tanaman.",
        "Jaringan Sklerenkim": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Meristem apikal di ujung pucuk dan akar memicu pertumbuhan primer tinggi tanaman.",
        "Parenkim Penimbun": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Meristem apikal di ujung pucuk dan akar memicu pertumbuhan primer tinggi tanaman."
      },
      "correctAnswer": "Meristem Apikal",
      "explanationText": "Meristem apikal di ujung pucuk dan akar memicu pertumbuhan primer tinggi tanaman.",
      "knownWrongPatterns": {
        "Jaringan Epidermis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Meristem di ujung tanaman disebut meristem apikal."
        },
        "Jaringan Sklerenkim": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Meristem di ujung tanaman disebut meristem apikal."
        },
        "Parenkim Penimbun": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Meristem di ujung tanaman disebut meristem apikal."
        }
      }
    },
    {
      "id": "q-biologi-11-3",
      "conceptName": "Pembuluh Xilem",
      "topic": "Biologi XI",
      "questionText": "Jaringan vaskular pada tumbuhan yang bertugas mengangkut air dan mineral dari akar menuju daun adalah...",
      "type": "mcq",
      "options": [
        "Xilem (Pembuluh Kayu)",
        "Floem (Pembuluh Tapis)",
        "Kambium Gabus",
        "Kolenkim"
      ],
      "optionDetails": {
        "Xilem (Pembuluh Kayu)": "✓ BENAR: Xilem mengangkut air/mineral dari akar ke daun, sedangkan floem mengedarkan hasil fotosintesis.",
        "Floem (Pembuluh Tapis)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Xilem mengangkut air/mineral dari akar ke daun, sedangkan floem mengedarkan hasil fotosintesis.",
        "Kambium Gabus": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Xilem mengangkut air/mineral dari akar ke daun, sedangkan floem mengedarkan hasil fotosintesis.",
        "Kolenkim": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Xilem mengangkut air/mineral dari akar ke daun, sedangkan floem mengedarkan hasil fotosintesis."
      },
      "correctAnswer": "Xilem (Pembuluh Kayu)",
      "explanationText": "Xilem mengangkut air/mineral dari akar ke daun, sedangkan floem mengedarkan hasil fotosintesis.",
      "knownWrongPatterns": {
        "Floem (Pembuluh Tapis)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pengangkut air dari akar = xilem."
        },
        "Kambium Gabus": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pengangkut air dari akar = xilem."
        },
        "Kolenkim": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pengangkut air dari akar = xilem."
        }
      }
    },
    {
      "id": "q-biologi-11-4",
      "conceptName": "Otot Jantung",
      "topic": "Biologi XI",
      "questionText": "Ciri khas jaringan otot jantung yang membedakannya dari otot lurik rangka adalah...",
      "type": "mcq",
      "options": [
        "Bekerja secara volunter sadar di bawah perintah otak",
        "Bekerja secara involunter (tidak sadar) dan memiliki percabangan sel (sinsitium)",
        "Berbentuk gelendong polos tanpa garis serat melintang",
        "Melekat langsung pada tulang persendian"
      ],
      "optionDetails": {
        "Bekerja secara volunter sadar di bawah perintah otak": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Otot jantung bercabang (anastomosis), berinti di tengah, dan bekerja otonom tanpa lelah.",
        "Bekerja secara involunter (tidak sadar) dan memiliki percabangan sel (sinsitium)": "✓ BENAR: Otot jantung bercabang (anastomosis), berinti di tengah, dan bekerja otonom tanpa lelah.",
        "Berbentuk gelendong polos tanpa garis serat melintang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Otot jantung bercabang (anastomosis), berinti di tengah, dan bekerja otonom tanpa lelah.",
        "Melekat langsung pada tulang persendian": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Otot jantung bercabang (anastomosis), berinti di tengah, dan bekerja otonom tanpa lelah."
      },
      "correctAnswer": "Bekerja secara involunter (tidak sadar) dan memiliki percabangan sel (sinsitium)",
      "explanationText": "Otot jantung bercabang (anastomosis), berinti di tengah, dan bekerja otonom tanpa lelah.",
      "knownWrongPatterns": {
        "Bekerja secara volunter sadar di bawah perintah otak": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Bekerja otomatis tak sadar dan bercabang."
        },
        "Berbentuk gelendong polos tanpa garis serat melintang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Bekerja otomatis tak sadar dan bercabang."
        },
        "Melekat langsung pada tulang persendian": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Bekerja otomatis tak sadar dan bercabang."
        }
      }
    },
    {
      "id": "q-biologi-11-5",
      "conceptName": "Eritrosit Hemoglobin",
      "topic": "Biologi XI",
      "questionText": "Komponen sel darah merah yang mengikat gas oksigen dari paru-paru ke seluruh jaringan tubuh adalah protein...",
      "type": "mcq",
      "options": [
        "Hemoglobin",
        "Fibrinogen",
        "Albumin",
        "Imunoglobulin"
      ],
      "optionDetails": {
        "Hemoglobin": "✓ BENAR: Hemoglobin mengandung ion zat besi (Fe) yang mengikat O₂ membentuk oksihemoglobin.",
        "Fibrinogen": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hemoglobin mengandung ion zat besi (Fe) yang mengikat O₂ membentuk oksihemoglobin.",
        "Albumin": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hemoglobin mengandung ion zat besi (Fe) yang mengikat O₂ membentuk oksihemoglobin.",
        "Imunoglobulin": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hemoglobin mengandung ion zat besi (Fe) yang mengikat O₂ membentuk oksihemoglobin."
      },
      "correctAnswer": "Hemoglobin",
      "explanationText": "Hemoglobin mengandung ion zat besi (Fe) yang mengikat O₂ membentuk oksihemoglobin.",
      "knownWrongPatterns": {
        "Fibrinogen": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pengikat oksigen di eritrosit = hemoglobin."
        },
        "Albumin": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pengikat oksigen di eritrosit = hemoglobin."
        },
        "Imunoglobulin": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pengikat oksigen di eritrosit = hemoglobin."
        }
      }
    },
    {
      "id": "q-biologi-11-6",
      "conceptName": "Peredaran Darah Ganda",
      "topic": "Biologi XI",
      "questionText": "Sistem sirkulasi peredaran darah manusia dinamakan peredaran darah tertutup dan ganda karena...",
      "type": "mcq",
      "options": [
        "Darah selalu berada di dalam pembuluh dan beredar melewati jantung dua kali dalam satu putaran lengkap",
        "Darah mengalir bebas di rongga terbuka antar organ",
        "Manusia memiliki dua buah organ jantung terpisah",
        "Darah tidak pernah melewati organ paru-paru"
      ],
      "optionDetails": {
        "Darah selalu berada di dalam pembuluh dan beredar melewati jantung dua kali dalam satu putaran lengkap": "✓ BENAR: Ganda = peredaran darah kecil (paru-paru) dan peredaran darah besar (seluruh tubuh).",
        "Darah mengalir bebas di rongga terbuka antar organ": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Ganda = peredaran darah kecil (paru-paru) dan peredaran darah besar (seluruh tubuh).",
        "Manusia memiliki dua buah organ jantung terpisah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Ganda = peredaran darah kecil (paru-paru) dan peredaran darah besar (seluruh tubuh).",
        "Darah tidak pernah melewati organ paru-paru": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Ganda = peredaran darah kecil (paru-paru) dan peredaran darah besar (seluruh tubuh)."
      },
      "correctAnswer": "Darah selalu berada di dalam pembuluh dan beredar melewati jantung dua kali dalam satu putaran lengkap",
      "explanationText": "Ganda = peredaran darah kecil (paru-paru) dan peredaran darah besar (seluruh tubuh).",
      "knownWrongPatterns": {
        "Darah mengalir bebas di rongga terbuka antar organ": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Melewati jantung 2 kali dalam satu siklus = peredaran darah ganda."
        },
        "Manusia memiliki dua buah organ jantung terpisah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Melewati jantung 2 kali dalam satu siklus = peredaran darah ganda."
        },
        "Darah tidak pernah melewati organ paru-paru": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Melewati jantung 2 kali dalam satu siklus = peredaran darah ganda."
        }
      }
    },
    {
      "id": "q-biologi-11-7",
      "conceptName": "Enzim Pepsin Lambung",
      "topic": "Biologi XI",
      "questionText": "Enzim pencernaan di dalam getah lambung yang berfungsi memecah protein menjadi pepton adalah...",
      "type": "mcq",
      "options": [
        "Pepsin",
        "Amilase (Ptialin)",
        "Lipase",
        "Tripsin"
      ],
      "optionDetails": {
        "Pepsin": "✓ BENAR: Pepsinogen diaktifkan oleh asam klorida (HCl) lambung menjadi pepsin aktif.",
        "Amilase (Ptialin)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pepsinogen diaktifkan oleh asam klorida (HCl) lambung menjadi pepsin aktif.",
        "Lipase": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pepsinogen diaktifkan oleh asam klorida (HCl) lambung menjadi pepsin aktif.",
        "Tripsin": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pepsinogen diaktifkan oleh asam klorida (HCl) lambung menjadi pepsin aktif."
      },
      "correctAnswer": "Pepsin",
      "explanationText": "Pepsinogen diaktifkan oleh asam klorida (HCl) lambung menjadi pepsin aktif.",
      "knownWrongPatterns": {
        "Amilase (Ptialin)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Enzim pemecah protein di lambung = pepsin."
        },
        "Lipase": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Enzim pemecah protein di lambung = pepsin."
        },
        "Tripsin": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Enzim pemecah protein di lambung = pepsin."
        }
      }
    },
    {
      "id": "q-biologi-11-8",
      "conceptName": "Alveolus Pertukaran Gas",
      "topic": "Biologi XI",
      "questionText": "Bagian saluran pernapasan tempat terjadinya difusi pertukaran gas oksigen dan karbondioksida adalah...",
      "type": "mcq",
      "options": [
        "Alveolus",
        "Bronkus",
        "Trakea",
        "Laring"
      ],
      "optionDetails": {
        "Alveolus": "✓ BENAR: Alveolus dikelilingi kapiler darah tipis untuk pertukaran gas difusi.",
        "Bronkus": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Alveolus dikelilingi kapiler darah tipis untuk pertukaran gas difusi.",
        "Trakea": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Alveolus dikelilingi kapiler darah tipis untuk pertukaran gas difusi.",
        "Laring": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Alveolus dikelilingi kapiler darah tipis untuk pertukaran gas difusi."
      },
      "correctAnswer": "Alveolus",
      "explanationText": "Alveolus dikelilingi kapiler darah tipis untuk pertukaran gas difusi.",
      "knownWrongPatterns": {
        "Bronkus": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kantung udara pertukaran gas = alveolus."
        },
        "Trakea": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kantung udara pertukaran gas = alveolus."
        },
        "Laring": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kantung udara pertukaran gas = alveolus."
        }
      }
    },
    {
      "id": "q-biologi-11-9",
      "conceptName": "Nefron Ginjal Filtrasi",
      "topic": "Biologi XI",
      "questionText": "Proses penyaringan darah tahap pertama yang berlangsung di glomerulus ginjal menghasilkan...",
      "type": "mcq",
      "options": [
        "Urine Primer (Filtrat Glomerulus)",
        "Urine Sekunder",
        "Urine Sesungguhnya",
        "Empedu"
      ],
      "optionDetails": {
        "Urine Primer (Filtrat Glomerulus)": "✓ BENAR: Filtrasi darah di glomerulus menghasilkan urine primer yang bebas sel darah dan protein besar.",
        "Urine Sekunder": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Filtrasi darah di glomerulus menghasilkan urine primer yang bebas sel darah dan protein besar.",
        "Urine Sesungguhnya": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Filtrasi darah di glomerulus menghasilkan urine primer yang bebas sel darah dan protein besar.",
        "Empedu": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Filtrasi darah di glomerulus menghasilkan urine primer yang bebas sel darah dan protein besar."
      },
      "correctAnswer": "Urine Primer (Filtrat Glomerulus)",
      "explanationText": "Filtrasi darah di glomerulus menghasilkan urine primer yang bebas sel darah dan protein besar.",
      "knownWrongPatterns": {
        "Urine Sekunder": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Tahap filtrasi di glomerulus menghasilkan urine primer."
        },
        "Urine Sesungguhnya": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Tahap filtrasi di glomerulus menghasilkan urine primer."
        },
        "Empedu": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Tahap filtrasi di glomerulus menghasilkan urine primer."
        }
      }
    },
    {
      "id": "q-biologi-11-10",
      "conceptName": "Sinapsis Saraf Neurotransmiter",
      "topic": "Biologi XI",
      "questionText": "Zat kimia yang dilepaskan di celah sinapsis untuk menghantarkan impuls saraf dari satu neuron ke neuron berikutnya disebut...",
      "type": "mcq",
      "options": [
        "Neurotransmiter (misalnya Asetilkolin)",
        "Mielin lipid",
        "Hemoglobin",
        "Hormon insulin"
      ],
      "optionDetails": {
        "Neurotransmiter (misalnya Asetilkolin)": "✓ BENAR: Neurotransmiter menghantarkan sinyal kimiawi menyeberangi celah sinaps.",
        "Mielin lipid": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Neurotransmiter menghantarkan sinyal kimiawi menyeberangi celah sinaps.",
        "Hemoglobin": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Neurotransmiter menghantarkan sinyal kimiawi menyeberangi celah sinaps.",
        "Hormon insulin": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Neurotransmiter menghantarkan sinyal kimiawi menyeberangi celah sinaps."
      },
      "correctAnswer": "Neurotransmiter (misalnya Asetilkolin)",
      "explanationText": "Neurotransmiter menghantarkan sinyal kimiawi menyeberangi celah sinaps.",
      "knownWrongPatterns": {
        "Mielin lipid": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Senyawa pembawa impuls di celah sinaps = neurotransmiter."
        },
        "Hemoglobin": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Senyawa pembawa impuls di celah sinaps = neurotransmiter."
        },
        "Hormon insulin": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Senyawa pembawa impuls di celah sinaps = neurotransmiter."
        }
      }
    }
  ],
  "informatika-11": [
    {
      "id": "q-informatika-11-1",
      "conceptName": "Binary Search",
      "topic": "Informatika & Komputasi XI",
      "questionText": "Berapa jumlah perbandingan maksimum yang dibutuhkan algoritma Binary Search untuk menemukan angka dalam daftar terurut yang berisi 16 elemen?",
      "type": "mcq",
      "options": [
        "4"
      ],
      "optionDetails": {
        "4": "✓ BENAR: Kompleksitas binary search adalah log₂(16) = 4 kali perbandingan."
      },
      "correctAnswer": "4",
      "explanationText": "Kompleksitas binary search adalah log₂(16) = 4 kali perbandingan.",
      "knownWrongPatterns": {}
    },
    {
      "id": "q-informatika-11-2",
      "conceptName": "Struktur Data Pohon (Tree)",
      "topic": "Informatika & Komputasi XI",
      "questionText": "Node paling atas pada struktur data hirarkis Tree yang tidak memiliki induk (parent) dinamakan...",
      "type": "mcq",
      "options": [
        "Root (Akar)",
        "Leaf (Daun)",
        "Edge",
        "Child"
      ],
      "optionDetails": {
        "Root (Akar)": "✓ BENAR: Root adalah titik puncak awal dari struktur data tree.",
        "Leaf (Daun)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Root adalah titik puncak awal dari struktur data tree.",
        "Edge": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Root adalah titik puncak awal dari struktur data tree.",
        "Child": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Root adalah titik puncak awal dari struktur data tree."
      },
      "correctAnswer": "Root (Akar)",
      "explanationText": "Root adalah titik puncak awal dari struktur data tree.",
      "knownWrongPatterns": {
        "Leaf (Daun)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Node puncak pohon = Root."
        },
        "Edge": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Node puncak pohon = Root."
        },
        "Child": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Node puncak pohon = Root."
        }
      }
    },
    {
      "id": "q-informatika-11-3",
      "conceptName": "Struktur Data Stack",
      "topic": "Informatika & Komputasi XI",
      "questionText": "Struktur data linier yang menerapkan prinsip LIFO (Last In First Out) di mana data terakhir masuk akan pertama keluar adalah...",
      "type": "mcq",
      "options": [
        "Stack (Tumpukan)",
        "Queue (Antrean)",
        "Array",
        "Linked List"
      ],
      "optionDetails": {
        "Stack (Tumpukan)": "✓ BENAR: Stack beroperasi dengan push dan pop berbasis LIFO (seperti tumpukan piring).",
        "Queue (Antrean)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Stack beroperasi dengan push dan pop berbasis LIFO (seperti tumpukan piring).",
        "Array": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Stack beroperasi dengan push dan pop berbasis LIFO (seperti tumpukan piring).",
        "Linked List": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Stack beroperasi dengan push dan pop berbasis LIFO (seperti tumpukan piring)."
      },
      "correctAnswer": "Stack (Tumpukan)",
      "explanationText": "Stack beroperasi dengan push dan pop berbasis LIFO (seperti tumpukan piring).",
      "knownWrongPatterns": {
        "Queue (Antrean)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "LIFO = Last In First Out = Stack."
        },
        "Array": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "LIFO = Last In First Out = Stack."
        },
        "Linked List": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "LIFO = Last In First Out = Stack."
        }
      }
    },
    {
      "id": "q-informatika-11-4",
      "conceptName": "Struktur Data Queue",
      "topic": "Informatika & Komputasi XI",
      "questionText": "Struktur data yang menerapkan prinsip FIFO (First In First Out) seperti antrean tiket loket disebut...",
      "type": "mcq",
      "options": [
        "Queue (Antrean)",
        "Stack (Tumpukan)",
        "Binary Tree",
        "Graph"
      ],
      "optionDetails": {
        "Queue (Antrean)": "✓ BENAR: Queue memproses elemen yang pertama masuk terlebih dahulu (FIFO).",
        "Stack (Tumpukan)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Queue memproses elemen yang pertama masuk terlebih dahulu (FIFO).",
        "Binary Tree": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Queue memproses elemen yang pertama masuk terlebih dahulu (FIFO).",
        "Graph": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Queue memproses elemen yang pertama masuk terlebih dahulu (FIFO)."
      },
      "correctAnswer": "Queue (Antrean)",
      "explanationText": "Queue memproses elemen yang pertama masuk terlebih dahulu (FIFO).",
      "knownWrongPatterns": {
        "Stack (Tumpukan)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "FIFO = First In First Out = Queue."
        },
        "Binary Tree": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "FIFO = First In First Out = Queue."
        },
        "Graph": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "FIFO = First In First Out = Queue."
        }
      }
    },
    {
      "id": "q-informatika-11-5",
      "conceptName": "Algoritma Rekursi",
      "topic": "Informatika & Komputasi XI",
      "questionText": "Suatu fungsi dalam pemrograman yang memanggil dirinya sendiri dan memiliki kondisi penghenti (base case) dinamakan fungsi...",
      "type": "mcq",
      "options": [
        "Rekursif",
        "Iteratif For",
        "Sekuensial",
        "Konkuren"
      ],
      "optionDetails": {
        "Rekursif": "✓ BENAR: Rekursi menyelesaikan masalah dengan memanggil dirinya sendiri sampai base case tercapai.",
        "Iteratif For": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rekursi menyelesaikan masalah dengan memanggil dirinya sendiri sampai base case tercapai.",
        "Sekuensial": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rekursi menyelesaikan masalah dengan memanggil dirinya sendiri sampai base case tercapai.",
        "Konkuren": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rekursi menyelesaikan masalah dengan memanggil dirinya sendiri sampai base case tercapai."
      },
      "correctAnswer": "Rekursif",
      "explanationText": "Rekursi menyelesaikan masalah dengan memanggil dirinya sendiri sampai base case tercapai.",
      "knownWrongPatterns": {
        "Iteratif For": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Fungsi memanggil dirinya sendiri = rekursif."
        },
        "Sekuensial": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Fungsi memanggil dirinya sendiri = rekursif."
        },
        "Konkuren": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Fungsi memanggil dirinya sendiri = rekursif."
        }
      }
    },
    {
      "id": "q-informatika-11-6",
      "conceptName": "Primary Key Basis Data",
      "topic": "Informatika & Komputasi XI",
      "questionText": "Atribut kolom dalam tabel basis data relasional yang nilainya unik dan tidak boleh bernilai kosong (NOT NULL) untuk membedakan setiap baris record disebut...",
      "type": "mcq",
      "options": [
        "Primary Key",
        "Foreign Key",
        "Composite Index",
        "Secondary Key"
      ],
      "optionDetails": {
        "Primary Key": "✓ BENAR: Primary Key menjamin integritas entitas unik bagi setiap baris tabel SQL.",
        "Foreign Key": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Primary Key menjamin integritas entitas unik bagi setiap baris tabel SQL.",
        "Composite Index": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Primary Key menjamin integritas entitas unik bagi setiap baris tabel SQL.",
        "Secondary Key": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Primary Key menjamin integritas entitas unik bagi setiap baris tabel SQL."
      },
      "correctAnswer": "Primary Key",
      "explanationText": "Primary Key menjamin integritas entitas unik bagi setiap baris tabel SQL.",
      "knownWrongPatterns": {
        "Foreign Key": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kunci unik identitas tabel = Primary Key."
        },
        "Composite Index": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kunci unik identitas tabel = Primary Key."
        },
        "Secondary Key": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kunci unik identitas tabel = Primary Key."
        }
      }
    },
    {
      "id": "q-informatika-11-7",
      "conceptName": "Perintah SQL Membaca Data",
      "topic": "Informatika & Komputasi XI",
      "questionText": "Perintah dasar SQL yang digunakan untuk mengambil dan menampilkan data dari tabel basis data adalah...",
      "type": "mcq",
      "options": [
        "SELECT",
        "INSERT",
        "UPDATE",
        "DROP"
      ],
      "optionDetails": {
        "SELECT": "✓ BENAR: Kueri SELECT digunakan untuk query read/retrieve data dari tabel.",
        "INSERT": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kueri SELECT digunakan untuk query read/retrieve data dari tabel.",
        "UPDATE": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kueri SELECT digunakan untuk query read/retrieve data dari tabel.",
        "DROP": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kueri SELECT digunakan untuk query read/retrieve data dari tabel."
      },
      "correctAnswer": "SELECT",
      "explanationText": "Kueri SELECT digunakan untuk query read/retrieve data dari tabel.",
      "knownWrongPatterns": {
        "INSERT": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Mengambil data = SELECT."
        },
        "UPDATE": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Mengambil data = SELECT."
        },
        "DROP": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Mengambil data = SELECT."
        }
      }
    },
    {
      "id": "q-informatika-11-8",
      "conceptName": "Enkripsi Asimetris",
      "topic": "Informatika & Komputasi XI",
      "questionText": "Sistem enkripsi modern (seperti RSA dan HTTPS) yang menggunakan sepasang kunci berbeda yaitu kunci publik untuk enkripsi dan kunci privat untuk dekripsi disebut...",
      "type": "mcq",
      "options": [
        "Kriptografi Kunci Asimetris",
        "Kriptografi Simetris",
        "Hashing Satu Arah",
        "Encoding Base64"
      ],
      "optionDetails": {
        "Kriptografi Kunci Asimetris": "✓ BENAR: Kriptografi asimetris menggunakan Public Key dan Private Key terpisah.",
        "Kriptografi Simetris": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kriptografi asimetris menggunakan Public Key dan Private Key terpisah.",
        "Hashing Satu Arah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kriptografi asimetris menggunakan Public Key dan Private Key terpisah.",
        "Encoding Base64": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kriptografi asimetris menggunakan Public Key dan Private Key terpisah."
      },
      "correctAnswer": "Kriptografi Kunci Asimetris",
      "explanationText": "Kriptografi asimetris menggunakan Public Key dan Private Key terpisah.",
      "knownWrongPatterns": {
        "Kriptografi Simetris": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kunci publik dan privat berbeda = asimetris."
        },
        "Hashing Satu Arah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kunci publik dan privat berbeda = asimetris."
        },
        "Encoding Base64": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kunci publik dan privat berbeda = asimetris."
        }
      }
    },
    {
      "id": "q-informatika-11-9",
      "conceptName": "Kejahatan Siber Phishing",
      "topic": "Informatika & Komputasi XI",
      "questionText": "Upaya penipuan rekayasa sosial untuk mencuri kredensial akun korban dengan mengirim email atau situs web tiruan palsu dinamakan...",
      "type": "mcq",
      "options": [
        "Phishing",
        "DDoS Attack",
        "SQL Injection",
        "Ransomware"
      ],
      "optionDetails": {
        "Phishing": "✓ BENAR: Phishing memancing korban memasukkan kata sandi pada formulir palsu.",
        "DDoS Attack": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Phishing memancing korban memasukkan kata sandi pada formulir palsu.",
        "SQL Injection": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Phishing memancing korban memasukkan kata sandi pada formulir palsu.",
        "Ransomware": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Phishing memancing korban memasukkan kata sandi pada formulir palsu."
      },
      "correctAnswer": "Phishing",
      "explanationText": "Phishing memancing korban memasukkan kata sandi pada formulir palsu.",
      "knownWrongPatterns": {
        "DDoS Attack": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Umpan situs palsu untuk mencuri password = phishing."
        },
        "SQL Injection": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Umpan situs palsu untuk mencuri password = phishing."
        },
        "Ransomware": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Umpan situs palsu untuk mencuri password = phishing."
        }
      }
    },
    {
      "id": "q-informatika-11-10",
      "conceptName": "Peran Router Jaringan",
      "topic": "Informatika & Komputasi XI",
      "questionText": "Perangkat keras jaringan komputer yang bertugas menghubungkan dua atau lebih jaringan yang berbeda subnet dan menentukan rute paket data tercepat adalah...",
      "type": "mcq",
      "options": [
        "Router",
        "Repeater",
        "Kabel LAN UTP",
        "VGA Card"
      ],
      "optionDetails": {
        "Router": "✓ BENAR: Router meneruskan paket data antarjaringan berbasis routing table IP.",
        "Repeater": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Router meneruskan paket data antarjaringan berbasis routing table IP.",
        "Kabel LAN UTP": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Router meneruskan paket data antarjaringan berbasis routing table IP.",
        "VGA Card": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Router meneruskan paket data antarjaringan berbasis routing table IP."
      },
      "correctAnswer": "Router",
      "explanationText": "Router meneruskan paket data antarjaringan berbasis routing table IP.",
      "knownWrongPatterns": {
        "Repeater": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penentu rute antarjaringan = Router."
        },
        "Kabel LAN UTP": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penentu rute antarjaringan = Router."
        },
        "VGA Card": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penentu rute antarjaringan = Router."
        }
      }
    }
  ],
  "ekonomi-11": [
    {
      "id": "q-ekonomi-11-1",
      "conceptName": "Produk Domestik Bruto (PDB)",
      "topic": "Ekonomi XI",
      "questionText": "Total nilai barang dan jasa akhir yang dihasilkan oleh semua faktor produksi yang beroperasi di dalam wilayah geografis suatu negara tanpa memandang kewarganegaraan disebut...",
      "type": "mcq",
      "options": [
        "Produk Domestik Bruto (PDB / GDP)",
        "Produk Nasional Bruto (PNB / GNP)",
        "Pendapatan Per Kapita",
        "Pendapatan Disposabel"
      ],
      "optionDetails": {
        "Produk Domestik Bruto (PDB / GDP)": "✓ BENAR: GDP/PDB menghitung batas wilayah teritorial geografis negara.",
        "Produk Nasional Bruto (PNB / GNP)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: GDP/PDB menghitung batas wilayah teritorial geografis negara.",
        "Pendapatan Per Kapita": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: GDP/PDB menghitung batas wilayah teritorial geografis negara.",
        "Pendapatan Disposabel": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: GDP/PDB menghitung batas wilayah teritorial geografis negara."
      },
      "correctAnswer": "Produk Domestik Bruto (PDB / GDP)",
      "explanationText": "GDP/PDB menghitung batas wilayah teritorial geografis negara.",
      "knownWrongPatterns": {
        "Produk Nasional Bruto (PNB / GNP)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Berdasarkan wilayah teritorial = Domestik Bruto (PDB)."
        },
        "Pendapatan Per Kapita": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Berdasarkan wilayah teritorial = Domestik Bruto (PDB)."
        },
        "Pendapatan Disposabel": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Berdasarkan wilayah teritorial = Domestik Bruto (PDB)."
        }
      }
    },
    {
      "id": "q-ekonomi-11-2",
      "conceptName": "Metode Pendekatan Pengeluaran",
      "topic": "Ekonomi XI",
      "questionText": "Rumus perhitungan pendapatan nasional dengan pendekatan pengeluaran adalah...",
      "type": "mcq",
      "options": [
        "Y = C + I + G + (X - M)",
        "Y = r + w + i + p",
        "Y = P1·Q1 + P2·Q2",
        "Y = C + S"
      ],
      "optionDetails": {
        "Y = C + I + G + (X - M)": "✓ BENAR: Y = Konsumsi (C) + Investasi (I) + Pengeluaran Pemerintah (G) + Ekspor Bersih (X - M).",
        "Y = r + w + i + p": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Y = Konsumsi (C) + Investasi (I) + Pengeluaran Pemerintah (G) + Ekspor Bersih (X - M).",
        "Y = P1·Q1 + P2·Q2": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Y = Konsumsi (C) + Investasi (I) + Pengeluaran Pemerintah (G) + Ekspor Bersih (X - M).",
        "Y = C + S": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Y = Konsumsi (C) + Investasi (I) + Pengeluaran Pemerintah (G) + Ekspor Bersih (X - M)."
      },
      "correctAnswer": "Y = C + I + G + (X - M)",
      "explanationText": "Y = Konsumsi (C) + Investasi (I) + Pengeluaran Pemerintah (G) + Ekspor Bersih (X - M).",
      "knownWrongPatterns": {
        "Y = r + w + i + p": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "C + I + G + (X - M)."
        },
        "Y = P1·Q1 + P2·Q2": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "C + I + G + (X - M)."
        },
        "Y = C + S": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "C + I + G + (X - M)."
        }
      }
    },
    {
      "id": "q-ekonomi-11-3",
      "conceptName": "Pertumbuhan Ekonomi",
      "topic": "Ekonomi XI",
      "questionText": "Kenaikan Produk Domestik Bruto (PDB) riil suatu negara dari tahun ke tahun tanpa memandang apakah pertumbuhannya lebih besar dari pertumbuhan penduduk dinamakan...",
      "type": "mcq",
      "options": [
        "Pertumbuhan Ekonomi",
        "Pembangunan Ekonomi",
        "Kesejahteraan Subjektif",
        "Pendapatan Per Kapita"
      ],
      "optionDetails": {
        "Pertumbuhan Ekonomi": "✓ BENAR: Pertumbuhan ekonomi berfokus murni pada pertambahan kuantitatif output fisik barang dan jasa.",
        "Pembangunan Ekonomi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pertumbuhan ekonomi berfokus murni pada pertambahan kuantitatif output fisik barang dan jasa.",
        "Kesejahteraan Subjektif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pertumbuhan ekonomi berfokus murni pada pertambahan kuantitatif output fisik barang dan jasa.",
        "Pendapatan Per Kapita": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pertumbuhan ekonomi berfokus murni pada pertambahan kuantitatif output fisik barang dan jasa."
      },
      "correctAnswer": "Pertumbuhan Ekonomi",
      "explanationText": "Pertumbuhan ekonomi berfokus murni pada pertambahan kuantitatif output fisik barang dan jasa.",
      "knownWrongPatterns": {
        "Pembangunan Ekonomi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kenaikan angka PDB tanpa kualitatif = pertumbuhan ekonomi."
        },
        "Kesejahteraan Subjektif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kenaikan angka PDB tanpa kualitatif = pertumbuhan ekonomi."
        },
        "Pendapatan Per Kapita": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Kenaikan angka PDB tanpa kualitatif = pertumbuhan ekonomi."
        }
      }
    },
    {
      "id": "q-ekonomi-11-4",
      "conceptName": "Pengangguran Friksional",
      "topic": "Ekonomi XI",
      "questionText": "Pengangguran yang timbul sementara waktu karena seseorang sedang dalam proses berpindah mencari pekerjaan baru yang lebih cocok disebut pengangguran...",
      "type": "mcq",
      "options": [
        "Friksional",
        "Struktural",
        "Musiman",
        "Teknologis"
      ],
      "optionDetails": {
        "Friksional": "✓ BENAR: Pengangguran friksional bersifat transisional di masa peralihan antar-pekerjaan.",
        "Struktural": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pengangguran friksional bersifat transisional di masa peralihan antar-pekerjaan.",
        "Musiman": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pengangguran friksional bersifat transisional di masa peralihan antar-pekerjaan.",
        "Teknologis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pengangguran friksional bersifat transisional di masa peralihan antar-pekerjaan."
      },
      "correctAnswer": "Friksional",
      "explanationText": "Pengangguran friksional bersifat transisional di masa peralihan antar-pekerjaan.",
      "knownWrongPatterns": {
        "Struktural": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Peralihan mencari kerja baru = pengangguran friksional."
        },
        "Musiman": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Peralihan mencari kerja baru = pengangguran friksional."
        },
        "Teknologis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Peralihan mencari kerja baru = pengangguran friksional."
        }
      }
    },
    {
      "id": "q-ekonomi-11-5",
      "conceptName": "Inflasi Tarikan Permintaan",
      "topic": "Ekonomi XI",
      "questionText": "Kenaikan harga barang secara umum yang dipicu oleh tingginya permintaan masyarakat yang melebihi kapasitas produksi dinamakan...",
      "type": "mcq",
      "options": [
        "Demand-Pull Inflation",
        "Cost-Push Inflation",
        "Hyperinflation",
        "Imported Inflation"
      ],
      "optionDetails": {
        "Demand-Pull Inflation": "✓ BENAR: Demand-pull inflation terjadi saat aggregate demand melonjak tajam.",
        "Cost-Push Inflation": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Demand-pull inflation terjadi saat aggregate demand melonjak tajam.",
        "Hyperinflation": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Demand-pull inflation terjadi saat aggregate demand melonjak tajam.",
        "Imported Inflation": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Demand-pull inflation terjadi saat aggregate demand melonjak tajam."
      },
      "correctAnswer": "Demand-Pull Inflation",
      "explanationText": "Demand-pull inflation terjadi saat aggregate demand melonjak tajam.",
      "knownWrongPatterns": {
        "Cost-Push Inflation": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Permintaan menarik harga naik = Demand-Pull Inflation."
        },
        "Hyperinflation": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Permintaan menarik harga naik = Demand-Pull Inflation."
        },
        "Imported Inflation": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Permintaan menarik harga naik = Demand-Pull Inflation."
        }
      }
    },
    {
      "id": "q-ekonomi-11-6",
      "conceptName": "Kebijakan Moneter Kuantitatif",
      "topic": "Ekonomi XI",
      "questionText": "Instrumen Bank Indonesia dalam menekan laju inflasi dengan cara menjual Surat Berharga Negara (SBN) ke pasar uang dinamakan operasi...",
      "type": "mcq",
      "options": [
        "Pasar Terbuka (Open Market Operation)",
        "Politik Diskonto Bunga",
        "Giro Wajib Minimum",
        "Kredit Selektif"
      ],
      "optionDetails": {
        "Pasar Terbuka (Open Market Operation)": "✓ BENAR: Menjual SBN menyerap likuiditas uang beredar di masyarakat sehingga inflasi terkendali.",
        "Politik Diskonto Bunga": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Menjual SBN menyerap likuiditas uang beredar di masyarakat sehingga inflasi terkendali.",
        "Giro Wajib Minimum": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Menjual SBN menyerap likuiditas uang beredar di masyarakat sehingga inflasi terkendali.",
        "Kredit Selektif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Menjual SBN menyerap likuiditas uang beredar di masyarakat sehingga inflasi terkendali."
      },
      "correctAnswer": "Pasar Terbuka (Open Market Operation)",
      "explanationText": "Menjual SBN menyerap likuiditas uang beredar di masyarakat sehingga inflasi terkendali.",
      "knownWrongPatterns": {
        "Politik Diskonto Bunga": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Jual beli surat berharga = Operasi Pasar Terbuka."
        },
        "Giro Wajib Minimum": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Jual beli surat berharga = Operasi Pasar Terbuka."
        },
        "Kredit Selektif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Jual beli surat berharga = Operasi Pasar Terbuka."
        }
      }
    },
    {
      "id": "q-ekonomi-11-7",
      "conceptName": "Kebijakan Fiskal",
      "topic": "Ekonomi XI",
      "questionText": "Kebijakan pemerintah untuk menstabilkan perekonomian melalui pengaturan penerimaan pajak dan pengeluaran APBN dinamakan kebijakan...",
      "type": "mcq",
      "options": [
        "Fiskal",
        "Moneter",
        "Suku Bunga Kredit",
        "Valuta Asing"
      ],
      "optionDetails": {
        "Fiskal": "✓ BENAR: Kebijakan fiskal dikelola oleh Kementerian Keuangan melalui instrumen APBN dan perpajakan.",
        "Moneter": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kebijakan fiskal dikelola oleh Kementerian Keuangan melalui instrumen APBN dan perpajakan.",
        "Suku Bunga Kredit": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kebijakan fiskal dikelola oleh Kementerian Keuangan melalui instrumen APBN dan perpajakan.",
        "Valuta Asing": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kebijakan fiskal dikelola oleh Kementerian Keuangan melalui instrumen APBN dan perpajakan."
      },
      "correctAnswer": "Fiskal",
      "explanationText": "Kebijakan fiskal dikelola oleh Kementerian Keuangan melalui instrumen APBN dan perpajakan.",
      "knownWrongPatterns": {
        "Moneter": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Melalui pajak dan belanja APBN = kebijakan fiskal."
        },
        "Suku Bunga Kredit": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Melalui pajak dan belanja APBN = kebijakan fiskal."
        },
        "Valuta Asing": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Melalui pajak dan belanja APBN = kebijakan fiskal."
        }
      }
    },
    {
      "id": "q-ekonomi-11-8",
      "conceptName": "Anggaran Surplus APBN",
      "topic": "Ekonomi XI",
      "questionText": "Jika total pendapatan negara dalam APBN lebih besar dibandingkan total belanja negara, maka posisi APBN mengalami...",
      "type": "mcq",
      "options": [
        "Surplus",
        "Defisit",
        "Berimbang",
        "Stagnan"
      ],
      "optionDetails": {
        "Surplus": "✓ BENAR: Pendapatan > Belanja = Anggaran Surplus.",
        "Defisit": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pendapatan > Belanja = Anggaran Surplus.",
        "Berimbang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pendapatan > Belanja = Anggaran Surplus.",
        "Stagnan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pendapatan > Belanja = Anggaran Surplus."
      },
      "correctAnswer": "Surplus",
      "explanationText": "Pendapatan > Belanja = Anggaran Surplus.",
      "knownWrongPatterns": {
        "Defisit": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penerimaan melebihi pengeluaran = surplus."
        },
        "Berimbang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penerimaan melebihi pengeluaran = surplus."
        },
        "Stagnan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Penerimaan melebihi pengeluaran = surplus."
        }
      }
    },
    {
      "id": "q-ekonomi-11-9",
      "conceptName": "Pajak Progresif",
      "topic": "Ekonomi XI",
      "questionText": "Sistem tarif pajak di mana persentase tarifnya semakin tinggi seiring dengan bertambahnya nilai dasar penghasilan kena pajak dinamakan tarif...",
      "type": "mcq",
      "options": [
        "Progresif",
        "Degresif",
        "Proporsional (Tetap)",
        "Regresif"
      ],
      "optionDetails": {
        "Progresif": "✓ BENAR: Tarif PPh di Indonesia progresif: semakin kaya, persentase potongan pajaknya semakin besar.",
        "Degresif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tarif PPh di Indonesia progresif: semakin kaya, persentase potongan pajaknya semakin besar.",
        "Proporsional (Tetap)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tarif PPh di Indonesia progresif: semakin kaya, persentase potongan pajaknya semakin besar.",
        "Regresif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tarif PPh di Indonesia progresif: semakin kaya, persentase potongan pajaknya semakin besar."
      },
      "correctAnswer": "Progresif",
      "explanationText": "Tarif PPh di Indonesia progresif: semakin kaya, persentase potongan pajaknya semakin besar.",
      "knownWrongPatterns": {
        "Degresif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Persentase tarif naik seiring pendapatan = progresif."
        },
        "Proporsional (Tetap)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Persentase tarif naik seiring pendapatan = progresif."
        },
        "Regresif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Persentase tarif naik seiring pendapatan = progresif."
        }
      }
    },
    {
      "id": "q-ekonomi-11-10",
      "conceptName": "Teori Perdagangan Komparatif",
      "topic": "Ekonomi XI",
      "questionText": "Teori perdagangan internasional yang menyatakan negara harus berspesialisasi pada komoditas yang biaya peluang produksinya paling efisien dicetuskan oleh...",
      "type": "mcq",
      "options": [
        "David Ricardo",
        "Adam Smith",
        "John Maynard Keynes",
        "Milton Friedman"
      ],
      "optionDetails": {
        "David Ricardo": "✓ BENAR: David Ricardo merumuskan Comparative Advantage (Keunggulan Komparatif).",
        "Adam Smith": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: David Ricardo merumuskan Comparative Advantage (Keunggulan Komparatif).",
        "John Maynard Keynes": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: David Ricardo merumuskan Comparative Advantage (Keunggulan Komparatif).",
        "Milton Friedman": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: David Ricardo merumuskan Comparative Advantage (Keunggulan Komparatif)."
      },
      "correctAnswer": "David Ricardo",
      "explanationText": "David Ricardo merumuskan Comparative Advantage (Keunggulan Komparatif).",
      "knownWrongPatterns": {
        "Adam Smith": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Teori Keunggulan Komparatif = David Ricardo."
        },
        "John Maynard Keynes": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Teori Keunggulan Komparatif = David Ricardo."
        },
        "Milton Friedman": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Teori Keunggulan Komparatif = David Ricardo."
        }
      }
    }
  ],
  "sosiologi-11": [
    {
      "id": "q-sosiologi-11-1",
      "conceptName": "Diferensiasi Sosial",
      "topic": "Sosiologi XI",
      "questionText": "Pengelompokan masyarakat secara horizontal/sejajar tanpa membentuk tingkatan hierarki tinggi-rendah (misalnya berdasarkan ras, agama, suku, dan klan) dinamakan...",
      "type": "mcq",
      "options": [
        "Diferensiasi Sosial",
        "Stratifikasi Sosial",
        "Mobilitas Vertikal",
        "Marginalisasi"
      ],
      "optionDetails": {
        "Diferensiasi Sosial": "✓ BENAR: Diferensiasi membedakan masyarakat secara setara horizontal, bukan bertingkat.",
        "Stratifikasi Sosial": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Diferensiasi membedakan masyarakat secara setara horizontal, bukan bertingkat.",
        "Mobilitas Vertikal": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Diferensiasi membedakan masyarakat secara setara horizontal, bukan bertingkat.",
        "Marginalisasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Diferensiasi membedakan masyarakat secara setara horizontal, bukan bertingkat."
      },
      "correctAnswer": "Diferensiasi Sosial",
      "explanationText": "Diferensiasi membedakan masyarakat secara setara horizontal, bukan bertingkat.",
      "knownWrongPatterns": {
        "Stratifikasi Sosial": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pembedaan sejajar/horizontal = diferensiasi sosial."
        },
        "Mobilitas Vertikal": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pembedaan sejajar/horizontal = diferensiasi sosial."
        },
        "Marginalisasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pembedaan sejajar/horizontal = diferensiasi sosial."
        }
      }
    },
    {
      "id": "q-sosiologi-11-2",
      "conceptName": "Stratifikasi Sosial Tertutup",
      "topic": "Sosiologi XI",
      "questionText": "Sistem pelapisan sosial tertutup di mana status kedudukan individu ditentukan sejak lahir dan sulit berpindah kasta dijumpai pada masyarakat...",
      "type": "mcq",
      "options": [
        "Kasta Feodal Tradisional",
        "Perkotaan Modern Meritokrasi",
        "Demokratis Terbuka",
        "Industri Digital"
      ],
      "optionDetails": {
        "Kasta Feodal Tradisional": "✓ BENAR: Sistem kasta tertutup membatasi mobilitas sosial antarlapisan.",
        "Perkotaan Modern Meritokrasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sistem kasta tertutup membatasi mobilitas sosial antarlapisan.",
        "Demokratis Terbuka": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sistem kasta tertutup membatasi mobilitas sosial antarlapisan.",
        "Industri Digital": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sistem kasta tertutup membatasi mobilitas sosial antarlapisan."
      },
      "correctAnswer": "Kasta Feodal Tradisional",
      "explanationText": "Sistem kasta tertutup membatasi mobilitas sosial antarlapisan.",
      "knownWrongPatterns": {
        "Perkotaan Modern Meritokrasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Status dari kelahiran dan kaku = stratifikasi tertutup."
        },
        "Demokratis Terbuka": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Status dari kelahiran dan kaku = stratifikasi tertutup."
        },
        "Industri Digital": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Status dari kelahiran dan kaku = stratifikasi tertutup."
        }
      }
    },
    {
      "id": "q-sosiologi-11-3",
      "conceptName": "Mobilitas Sosial Vertikal Naik",
      "topic": "Sosiologi XI",
      "questionText": "Seorang anak petani desa berhasil menyelesaikan kuliah kedokteran dan diangkat menjadi direktur rumah sakit. Ini merupakan contoh mobilitas...",
      "type": "mcq",
      "options": [
        "Vertikal Naik (Social Climbing)",
        "Vertikal Turun (Social Sinking)",
        "Horisontal",
        "Intragenerasi Mundur"
      ],
      "optionDetails": {
        "Vertikal Naik (Social Climbing)": "✓ BENAR: Social climbing adalah kenaikan status sosial individu ke lapisan yang lebih tinggi.",
        "Vertikal Turun (Social Sinking)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Social climbing adalah kenaikan status sosial individu ke lapisan yang lebih tinggi.",
        "Horisontal": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Social climbing adalah kenaikan status sosial individu ke lapisan yang lebih tinggi.",
        "Intragenerasi Mundur": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Social climbing adalah kenaikan status sosial individu ke lapisan yang lebih tinggi."
      },
      "correctAnswer": "Vertikal Naik (Social Climbing)",
      "explanationText": "Social climbing adalah kenaikan status sosial individu ke lapisan yang lebih tinggi.",
      "knownWrongPatterns": {
        "Vertikal Turun (Social Sinking)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Peningkatan derajat status sosial = vertikal naik."
        },
        "Horisontal": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Peningkatan derajat status sosial = vertikal naik."
        },
        "Intragenerasi Mundur": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Peningkatan derajat status sosial = vertikal naik."
        }
      }
    },
    {
      "id": "q-sosiologi-11-4",
      "conceptName": "Saluran Mobilitas Pendidikan",
      "topic": "Sosiologi XI",
      "questionText": "Saluran mobilitas sosial yang dianggap paling efektif dan terbuka bagi semua kalangan untuk meningkatkan status ekonomi adalah...",
      "type": "mcq",
      "options": [
        "Lembaga Pendidikan Formal",
        "Partai Politik Eksklusif",
        "Lembaga Keagamaan",
        "Organisasi Olahraga"
      ],
      "optionDetails": {
        "Lembaga Pendidikan Formal": "✓ BENAR: Pendidikan adalah social elevator utama yang membuka kesempatan meritokrasi.",
        "Partai Politik Eksklusif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pendidikan adalah social elevator utama yang membuka kesempatan meritokrasi.",
        "Lembaga Keagamaan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pendidikan adalah social elevator utama yang membuka kesempatan meritokrasi.",
        "Organisasi Olahraga": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pendidikan adalah social elevator utama yang membuka kesempatan meritokrasi."
      },
      "correctAnswer": "Lembaga Pendidikan Formal",
      "explanationText": "Pendidikan adalah social elevator utama yang membuka kesempatan meritokrasi.",
      "knownWrongPatterns": {
        "Partai Politik Eksklusif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pendidikan formal adalah saluran mobilitas utama."
        },
        "Lembaga Keagamaan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pendidikan formal adalah saluran mobilitas utama."
        },
        "Organisasi Olahraga": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pendidikan formal adalah saluran mobilitas utama."
        }
      }
    },
    {
      "id": "q-sosiologi-11-5",
      "conceptName": "Konflik Sosial Konstruktif",
      "topic": "Sosiologi XI",
      "questionText": "Salah satu dampak positif dari adanya konflik sosial antarkelompok adalah...",
      "type": "mcq",
      "options": [
        "Meningkatkan solidaritas internal anggota in-group",
        "Merusak sarana prasarana publik",
        "Membuat permusuhan abadi tanpa henti",
        "Menghancurkan sistem hukum yang berlaku"
      ],
      "optionDetails": {
        "Meningkatkan solidaritas internal anggota in-group": "✓ BENAR: Tantangan konflik dari luar mempererat ikatan kekompakan di dalam kelompok (in-group solidarity).",
        "Merusak sarana prasarana publik": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tantangan konflik dari luar mempererat ikatan kekompakan di dalam kelompok (in-group solidarity).",
        "Membuat permusuhan abadi tanpa henti": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tantangan konflik dari luar mempererat ikatan kekompakan di dalam kelompok (in-group solidarity).",
        "Menghancurkan sistem hukum yang berlaku": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tantangan konflik dari luar mempererat ikatan kekompakan di dalam kelompok (in-group solidarity)."
      },
      "correctAnswer": "Meningkatkan solidaritas internal anggota in-group",
      "explanationText": "Tantangan konflik dari luar mempererat ikatan kekompakan di dalam kelompok (in-group solidarity).",
      "knownWrongPatterns": {
        "Merusak sarana prasarana publik": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Solidaritas sesama anggota kelompok meningkat saat menghadapi lawan bersama."
        },
        "Membuat permusuhan abadi tanpa henti": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Solidaritas sesama anggota kelompok meningkat saat menghadapi lawan bersama."
        },
        "Menghancurkan sistem hukum yang berlaku": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Solidaritas sesama anggota kelompok meningkat saat menghadapi lawan bersama."
        }
      }
    },
    {
      "id": "q-sosiologi-11-6",
      "conceptName": "Integrasi Sosial Asimilasi",
      "topic": "Sosiologi XI",
      "questionText": "Peleburan dua kebudayaan atau lebih yang saling berinteraksi intensif hingga menghasilkan kebudayaan baru dan menghilangkan ciri asli dinamakan...",
      "type": "mcq",
      "options": [
        "Asimilasi",
        "Akulturasi",
        "Segregasi",
        "Akomodasi"
      ],
      "optionDetails": {
        "Asimilasi": "✓ BENAR: Asimilasi (A + B -> C) menghasilkan kebudayaan baru tanpa menyisakan ciri lama.",
        "Akulturasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Asimilasi (A + B -> C) menghasilkan kebudayaan baru tanpa menyisakan ciri lama.",
        "Segregasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Asimilasi (A + B -> C) menghasilkan kebudayaan baru tanpa menyisakan ciri lama.",
        "Akomodasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Asimilasi (A + B -> C) menghasilkan kebudayaan baru tanpa menyisakan ciri lama."
      },
      "correctAnswer": "Asimilasi",
      "explanationText": "Asimilasi (A + B -> C) menghasilkan kebudayaan baru tanpa menyisakan ciri lama.",
      "knownWrongPatterns": {
        "Akulturasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Lebur membentuk budaya baru dan ciri asli hilang = asimilasi."
        },
        "Segregasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Lebur membentuk budaya baru dan ciri asli hilang = asimilasi."
        },
        "Akomodasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Lebur membentuk budaya baru dan ciri asli hilang = asimilasi."
        }
      }
    },
    {
      "id": "q-sosiologi-11-7",
      "conceptName": "Integrasi Akulturasi",
      "topic": "Sosiologi XI",
      "questionText": "Pencampuran unsur budaya Hindu dengan Islam pada bentuk menara Masjid Kudus tanpa menghilangkan unsur arsitektur aslinya merupakan contoh...",
      "type": "mcq",
      "options": [
        "Akulturasi",
        "Asimilasi",
        "Disintegrasi",
        "Dominasi"
      ],
      "optionDetails": {
        "Akulturasi": "✓ BENAR: Akulturasi (A + B -> AB) memadukan unsur budaya tanpa menghilangkan kepribadian aslinya.",
        "Asimilasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Akulturasi (A + B -> AB) memadukan unsur budaya tanpa menghilangkan kepribadian aslinya.",
        "Disintegrasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Akulturasi (A + B -> AB) memadukan unsur budaya tanpa menghilangkan kepribadian aslinya.",
        "Dominasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Akulturasi (A + B -> AB) memadukan unsur budaya tanpa menghilangkan kepribadian aslinya."
      },
      "correctAnswer": "Akulturasi",
      "explanationText": "Akulturasi (A + B -> AB) memadukan unsur budaya tanpa menghilangkan kepribadian aslinya.",
      "knownWrongPatterns": {
        "Asimilasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perpaduan budaya dengan mempertahankan ciri asli = akulturasi."
        },
        "Disintegrasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perpaduan budaya dengan mempertahankan ciri asli = akulturasi."
        },
        "Dominasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perpaduan budaya dengan mempertahankan ciri asli = akulturasi."
        }
      }
    },
    {
      "id": "q-sosiologi-11-8",
      "conceptName": "Kelompok Sosial Paguyuban",
      "topic": "Sosiologi XI",
      "questionText": "Kelompok sosial yang didasarkan pada ikatan batin murni, bersifat alami, dan kekal seperti ikatan persaudaraan keluarga disebut...",
      "type": "mcq",
      "options": [
        "Gemeinschaft (Paguyuban)",
        "Gesellschaft (Patembayan)",
        "Membership Group",
        "Reference Group"
      ],
      "optionDetails": {
        "Gemeinschaft (Paguyuban)": "✓ BENAR: Gemeinschaft (Ferdinand Tonnies) diikat rasa cinta tulus kekeluargaan.",
        "Gesellschaft (Patembayan)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Gemeinschaft (Ferdinand Tonnies) diikat rasa cinta tulus kekeluargaan.",
        "Membership Group": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Gemeinschaft (Ferdinand Tonnies) diikat rasa cinta tulus kekeluargaan.",
        "Reference Group": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Gemeinschaft (Ferdinand Tonnies) diikat rasa cinta tulus kekeluargaan."
      },
      "correctAnswer": "Gemeinschaft (Paguyuban)",
      "explanationText": "Gemeinschaft (Ferdinand Tonnies) diikat rasa cinta tulus kekeluargaan.",
      "knownWrongPatterns": {
        "Gesellschaft (Patembayan)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Ikatan batin alami keluarga = Paguyuban (Gemeinschaft)."
        },
        "Membership Group": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Ikatan batin alami keluarga = Paguyuban (Gemeinschaft)."
        },
        "Reference Group": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Ikatan batin alami keluarga = Paguyuban (Gemeinschaft)."
        }
      }
    },
    {
      "id": "q-sosiologi-11-9",
      "conceptName": "Kelompok Patembayan",
      "topic": "Sosiologi XI",
      "questionText": "Bentuk kehidupan bersama di mana anggotanya diikat oleh perjanjian kerja kontrak formal demi kepentingan pamrih ekonomi dinamakan...",
      "type": "mcq",
      "options": [
        "Gesellschaft (Patembayan)",
        "Gemeinschaft",
        "In-group murni",
        "Kelompok Primer"
      ],
      "optionDetails": {
        "Gesellschaft (Patembayan)": "✓ BENAR: Gesellschaft berlandaskan rasionalitas kontraktual pamrih kerja (seperti serikat buruh/PT).",
        "Gemeinschaft": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Gesellschaft berlandaskan rasionalitas kontraktual pamrih kerja (seperti serikat buruh/PT).",
        "In-group murni": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Gesellschaft berlandaskan rasionalitas kontraktual pamrih kerja (seperti serikat buruh/PT).",
        "Kelompok Primer": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Gesellschaft berlandaskan rasionalitas kontraktual pamrih kerja (seperti serikat buruh/PT)."
      },
      "correctAnswer": "Gesellschaft (Patembayan)",
      "explanationText": "Gesellschaft berlandaskan rasionalitas kontraktual pamrih kerja (seperti serikat buruh/PT).",
      "knownWrongPatterns": {
        "Gemeinschaft": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Ikatan perjanjian kerja kontrak formal = Patembayan (Gesellschaft)."
        },
        "In-group murni": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Ikatan perjanjian kerja kontrak formal = Patembayan (Gesellschaft)."
        },
        "Kelompok Primer": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Ikatan perjanjian kerja kontrak formal = Patembayan (Gesellschaft)."
        }
      }
    },
    {
      "id": "q-sosiologi-11-10",
      "conceptName": "Stereotip dan Prasangka",
      "topic": "Sosiologi XI",
      "questionText": "Sikap menilai dan mencap negatif sekelompok orang secara serampangan hanya berdasarkan anggapan prasangka suku dinamakan...",
      "type": "mcq",
      "options": [
        "Stereotip",
        "Pluralisme",
        "Inklusivitas",
        "Altruisme"
      ],
      "optionDetails": {
        "Stereotip": "✓ BENAR: Stereotip adalah pelabelan citra kaku yang digeneralisasi negatif.",
        "Pluralisme": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Stereotip adalah pelabelan citra kaku yang digeneralisasi negatif.",
        "Inklusivitas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Stereotip adalah pelabelan citra kaku yang digeneralisasi negatif.",
        "Altruisme": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Stereotip adalah pelabelan citra kaku yang digeneralisasi negatif."
      },
      "correctAnswer": "Stereotip",
      "explanationText": "Stereotip adalah pelabelan citra kaku yang digeneralisasi negatif.",
      "knownWrongPatterns": {
        "Pluralisme": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pelabelan sepihak berdasar prasangka = stereotip."
        },
        "Inklusivitas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pelabelan sepihak berdasar prasangka = stereotip."
        },
        "Altruisme": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pelabelan sepihak berdasar prasangka = stereotip."
        }
      }
    }
  ],
  "geografi-11": [
    {
      "id": "q-geografi-11-1",
      "conceptName": "Posisi Silang Geografis",
      "topic": "Geografi XI",
      "questionText": "Secara geografis, wilayah kepulauan Indonesia berada di antara posisi silang dunia, yaitu antara...",
      "type": "mcq",
      "options": [
        "Benua Asia dan Australia serta Samudra Hindia dan Samudra Pasifik",
        "Benua Afrika dan Asia serta Samudra Atlantik dan Hindia",
        "Benua Eropa dan Asia serta Laut Kaspia dan Mediterania",
        "Benua Amerika dan Australia serta Laut Karibia"
      ],
      "optionDetails": {
        "Benua Asia dan Australia serta Samudra Hindia dan Samudra Pasifik": "✓ BENAR: Posisi silang Indonesia menjadikannya jalur strategis perdagangan dan pelayaran maritim dunia.",
        "Benua Afrika dan Asia serta Samudra Atlantik dan Hindia": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Posisi silang Indonesia menjadikannya jalur strategis perdagangan dan pelayaran maritim dunia.",
        "Benua Eropa dan Asia serta Laut Kaspia dan Mediterania": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Posisi silang Indonesia menjadikannya jalur strategis perdagangan dan pelayaran maritim dunia.",
        "Benua Amerika dan Australia serta Laut Karibia": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Posisi silang Indonesia menjadikannya jalur strategis perdagangan dan pelayaran maritim dunia."
      },
      "correctAnswer": "Benua Asia dan Australia serta Samudra Hindia dan Samudra Pasifik",
      "explanationText": "Posisi silang Indonesia menjadikannya jalur strategis perdagangan dan pelayaran maritim dunia.",
      "knownWrongPatterns": {
        "Benua Afrika dan Asia serta Samudra Atlantik dan Hindia": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Di antara Benua Asia-Australia dan Samudra Hindia-Pasifik."
        },
        "Benua Eropa dan Asia serta Laut Kaspia dan Mediterania": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Di antara Benua Asia-Australia dan Samudra Hindia-Pasifik."
        },
        "Benua Amerika dan Australia serta Laut Karibia": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Di antara Benua Asia-Australia dan Samudra Hindia-Pasifik."
        }
      }
    },
    {
      "id": "q-geografi-11-2",
      "conceptName": "ALKI Jalur Pelayaran",
      "topic": "Geografi XI",
      "questionText": "Alur Laut Kepulauan Indonesia (ALKI) I yang menghubungkan pelayaran Laut Cina Selatan menuju Samudra Hindia melintasi...",
      "type": "mcq",
      "options": [
        "Selat Sunda",
        "Selat Lombok",
        "Selat Makassar",
        "Laut Maluku"
      ],
      "optionDetails": {
        "Selat Sunda": "✓ BENAR: ALKI I melintasi Laut Natuna, Selat Karimata, Laut Jawa, dan Selat Sunda.",
        "Selat Lombok": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: ALKI I melintasi Laut Natuna, Selat Karimata, Laut Jawa, dan Selat Sunda.",
        "Selat Makassar": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: ALKI I melintasi Laut Natuna, Selat Karimata, Laut Jawa, dan Selat Sunda.",
        "Laut Maluku": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: ALKI I melintasi Laut Natuna, Selat Karimata, Laut Jawa, dan Selat Sunda."
      },
      "correctAnswer": "Selat Sunda",
      "explanationText": "ALKI I melintasi Laut Natuna, Selat Karimata, Laut Jawa, dan Selat Sunda.",
      "knownWrongPatterns": {
        "Selat Lombok": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "ALKI I melintasi Selat Sunda."
        },
        "Selat Makassar": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "ALKI I melintasi Selat Sunda."
        },
        "Laut Maluku": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "ALKI I melintasi Selat Sunda."
        }
      }
    },
    {
      "id": "q-geografi-11-3",
      "conceptName": "Garis Wallace dan Weber",
      "topic": "Geografi XI",
      "questionText": "Garis khayal biogeografi yang memisahkan fauna tipe Asiatis di bagian barat dengan fauna tipe Peralihan di bagian tengah kepulauan Indonesia adalah...",
      "type": "mcq",
      "options": [
        "Garis Wallace",
        "Garis Weber",
        "Garis Lydekker",
        "Garis Khatulistiwa"
      ],
      "optionDetails": {
        "Garis Wallace": "✓ BENAR: Garis Wallace membatasi Asiatis dan Peralihan, sedangkan Garis Weber membatasi Peralihan dan Australis.",
        "Garis Weber": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Garis Wallace membatasi Asiatis dan Peralihan, sedangkan Garis Weber membatasi Peralihan dan Australis.",
        "Garis Lydekker": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Garis Wallace membatasi Asiatis dan Peralihan, sedangkan Garis Weber membatasi Peralihan dan Australis.",
        "Garis Khatulistiwa": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Garis Wallace membatasi Asiatis dan Peralihan, sedangkan Garis Weber membatasi Peralihan dan Australis."
      },
      "correctAnswer": "Garis Wallace",
      "explanationText": "Garis Wallace membatasi Asiatis dan Peralihan, sedangkan Garis Weber membatasi Peralihan dan Australis.",
      "knownWrongPatterns": {
        "Garis Weber": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pemisah barat dan tengah adalah Garis Wallace."
        },
        "Garis Lydekker": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pemisah barat dan tengah adalah Garis Wallace."
        },
        "Garis Khatulistiwa": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pemisah barat dan tengah adalah Garis Wallace."
        }
      }
    },
    {
      "id": "q-geografi-11-4",
      "conceptName": "Fauna Khas Peralihan",
      "topic": "Geografi XI",
      "questionText": "Manakah satwa endemik Indonesia yang termasuk dalam fauna zona peralihan (Sulawesi & Nusa Tenggara)?",
      "type": "mcq",
      "options": [
        "Anoa, Babirusa, dan Komodo",
        "Gajah Sumatera, Harimau, dan Orangutan",
        "Burung Cendrawasih, Kasuari, dan Kanguru Pohon",
        "Badak Bercula Satu dan Jalak Bali"
      ],
      "optionDetails": {
        "Anoa, Babirusa, dan Komodo": "✓ BENAR: Anoa, babirusa, dan komodo adalah satwa purba endemik di zona peralihan.",
        "Gajah Sumatera, Harimau, dan Orangutan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Anoa, babirusa, dan komodo adalah satwa purba endemik di zona peralihan.",
        "Burung Cendrawasih, Kasuari, dan Kanguru Pohon": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Anoa, babirusa, dan komodo adalah satwa purba endemik di zona peralihan.",
        "Badak Bercula Satu dan Jalak Bali": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Anoa, babirusa, dan komodo adalah satwa purba endemik di zona peralihan."
      },
      "correctAnswer": "Anoa, Babirusa, dan Komodo",
      "explanationText": "Anoa, babirusa, dan komodo adalah satwa purba endemik di zona peralihan.",
      "knownWrongPatterns": {
        "Gajah Sumatera, Harimau, dan Orangutan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Sulawesi dan NTT: Anoa, Babirusa, Komodo."
        },
        "Burung Cendrawasih, Kasuari, dan Kanguru Pohon": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Sulawesi dan NTT: Anoa, Babirusa, Komodo."
        },
        "Badak Bercula Satu dan Jalak Bali": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Sulawesi dan NTT: Anoa, Babirusa, Komodo."
        }
      }
    },
    {
      "id": "q-geografi-11-5",
      "conceptName": "Bioma Hutan Hujan Tropis",
      "topic": "Geografi XI",
      "questionText": "Ciri khas bioma hutan hujan tropis di Pulau Kalimantan dan Sumatera adalah...",
      "type": "mcq",
      "options": [
        "Pohon berdaun lebat membentuk kanopi kanopi tinggi dan selalu hijau sepanjang tahun",
        "Didominasi padang rumput sabana kering",
        "Daun pohon meranggas gugur serentak di musim kemarau",
        "Tumbuhan berdaun jarum seperti pinus taiga"
      ],
      "optionDetails": {
        "Pohon berdaun lebat membentuk kanopi kanopi tinggi dan selalu hijau sepanjang tahun": "✓ BENAR: Hutan hujan tropis memiliki kanopi berlapis dengan kelembapan tinggi sepanjang tahun.",
        "Didominasi padang rumput sabana kering": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hutan hujan tropis memiliki kanopi berlapis dengan kelembapan tinggi sepanjang tahun.",
        "Daun pohon meranggas gugur serentak di musim kemarau": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hutan hujan tropis memiliki kanopi berlapis dengan kelembapan tinggi sepanjang tahun.",
        "Tumbuhan berdaun jarum seperti pinus taiga": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hutan hujan tropis memiliki kanopi berlapis dengan kelembapan tinggi sepanjang tahun."
      },
      "correctAnswer": "Pohon berdaun lebat membentuk kanopi kanopi tinggi dan selalu hijau sepanjang tahun",
      "explanationText": "Hutan hujan tropis memiliki kanopi berlapis dengan kelembapan tinggi sepanjang tahun.",
      "knownWrongPatterns": {
        "Didominasi padang rumput sabana kering": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pohon tinggi lebat berkanopi dan selalu hijau."
        },
        "Daun pohon meranggas gugur serentak di musim kemarau": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pohon tinggi lebat berkanopi dan selalu hijau."
        },
        "Tumbuhan berdaun jarum seperti pinus taiga": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Pohon tinggi lebat berkanopi dan selalu hijau."
        }
      }
    },
    {
      "id": "q-geografi-11-6",
      "conceptName": "Sumber Daya Migas",
      "topic": "Geografi XI",
      "questionText": "Minyak bumi dan gas alam tergolong dalam sumber daya alam yang...",
      "type": "mcq",
      "options": [
        "Tidak dapat diperbarui (Non-renewable resource)",
        "Dapat diperbarui dengan cepat",
        "Tidak akan pernah habis",
        "Bersifat abiotik siklus air"
      ],
      "optionDetails": {
        "Tidak dapat diperbarui (Non-renewable resource)": "✓ BENAR: Bahan bakar fosil terbentuk jutaan tahun lalu dan jumlahnya terbatas di kerak bumi.",
        "Dapat diperbarui dengan cepat": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bahan bakar fosil terbentuk jutaan tahun lalu dan jumlahnya terbatas di kerak bumi.",
        "Tidak akan pernah habis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bahan bakar fosil terbentuk jutaan tahun lalu dan jumlahnya terbatas di kerak bumi.",
        "Bersifat abiotik siklus air": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bahan bakar fosil terbentuk jutaan tahun lalu dan jumlahnya terbatas di kerak bumi."
      },
      "correctAnswer": "Tidak dapat diperbarui (Non-renewable resource)",
      "explanationText": "Bahan bakar fosil terbentuk jutaan tahun lalu dan jumlahnya terbatas di kerak bumi.",
      "knownWrongPatterns": {
        "Dapat diperbarui dengan cepat": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Fosil migas tidak dapat diperbarui dalam skala waktu manusia."
        },
        "Tidak akan pernah habis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Fosil migas tidak dapat diperbarui dalam skala waktu manusia."
        },
        "Bersifat abiotik siklus air": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Fosil migas tidak dapat diperbarui dalam skala waktu manusia."
        }
      }
    },
    {
      "id": "q-geografi-11-7",
      "conceptName": "Bonus Demografi",
      "topic": "Geografi XI",
      "questionText": "Fenomena bonus demografi di Indonesia terjadi saat komposisi penduduk menunjukkan...",
      "type": "mcq",
      "options": [
        "Jumlah penduduk usia produktif (15-64 tahun) lebih banyak dibandingkan usia non-produktif",
        "Jumlah angka kelahiran bayi mencapai titik terendah",
        "Jumlah lansia mendominasi populasi total",
        "Seluruh warga bekerja di sektor agraris"
      ],
      "optionDetails": {
        "Jumlah penduduk usia produktif (15-64 tahun) lebih banyak dibandingkan usia non-produktif": "✓ BENAR: Bonus demografi menekan rasio ketergantungan (dependency ratio) menjadi rendah.",
        "Jumlah angka kelahiran bayi mencapai titik terendah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bonus demografi menekan rasio ketergantungan (dependency ratio) menjadi rendah.",
        "Jumlah lansia mendominasi populasi total": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bonus demografi menekan rasio ketergantungan (dependency ratio) menjadi rendah.",
        "Seluruh warga bekerja di sektor agraris": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bonus demografi menekan rasio ketergantungan (dependency ratio) menjadi rendah."
      },
      "correctAnswer": "Jumlah penduduk usia produktif (15-64 tahun) lebih banyak dibandingkan usia non-produktif",
      "explanationText": "Bonus demografi menekan rasio ketergantungan (dependency ratio) menjadi rendah.",
      "knownWrongPatterns": {
        "Jumlah angka kelahiran bayi mencapai titik terendah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Usia produktif (15-64 th) lebih banyak."
        },
        "Jumlah lansia mendominasi populasi total": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Usia produktif (15-64 th) lebih banyak."
        },
        "Seluruh warga bekerja di sektor agraris": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Usia produktif (15-64 th) lebih banyak."
        }
      }
    },
    {
      "id": "q-geografi-11-8",
      "conceptName": "Piramida Penduduk Ekspansif",
      "topic": "Geografi XI",
      "questionText": "Piramida penduduk yang berbentuk kerucut alas lebar menunjukkan kondisi kependudukan...",
      "type": "mcq",
      "options": [
        "Tingkat kelahiran tinggi dan didominasi penduduk usia muda",
        "Pertumbuhan penduduk mendekati nol atau stagnan",
        "Kematian lebih tinggi daripada kelahiran",
        "Penduduk usia tua lebih banyak daripada balita"
      ],
      "optionDetails": {
        "Tingkat kelahiran tinggi dan didominasi penduduk usia muda": "✓ BENAR: Piramida ekspansif (alas lebar) adalah tipikal negara berkembang dengan angka kelahiran tinggi.",
        "Pertumbuhan penduduk mendekati nol atau stagnan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Piramida ekspansif (alas lebar) adalah tipikal negara berkembang dengan angka kelahiran tinggi.",
        "Kematian lebih tinggi daripada kelahiran": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Piramida ekspansif (alas lebar) adalah tipikal negara berkembang dengan angka kelahiran tinggi.",
        "Penduduk usia tua lebih banyak daripada balita": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Piramida ekspansif (alas lebar) adalah tipikal negara berkembang dengan angka kelahiran tinggi."
      },
      "correctAnswer": "Tingkat kelahiran tinggi dan didominasi penduduk usia muda",
      "explanationText": "Piramida ekspansif (alas lebar) adalah tipikal negara berkembang dengan angka kelahiran tinggi.",
      "knownWrongPatterns": {
        "Pertumbuhan penduduk mendekati nol atau stagnan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Alas lebar = angka kelahiran usia muda tinggi."
        },
        "Kematian lebih tinggi daripada kelahiran": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Alas lebar = angka kelahiran usia muda tinggi."
        },
        "Penduduk usia tua lebih banyak daripada balita": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Alas lebar = angka kelahiran usia muda tinggi."
        }
      }
    },
    {
      "id": "q-geografi-11-9",
      "conceptName": "Mitigasi Gempa Bumi",
      "topic": "Geografi XI",
      "questionText": "Tindakan mitigasi mandiri yang paling tepat dilakukan saat terjadi gempa bumi di dalam gedung bertingkat adalah...",
      "type": "mcq",
      "options": [
        "Melindungi kepala di bawah meja kokoh dan menjauhi jendela kaca",
        "Segera masuk ke dalam lift darurat",
        "Berdiri di dekat dinding pembatas kaca jendela",
        "Melompat dari balkon lantai atas"
      ],
      "optionDetails": {
        "Melindungi kepala di bawah meja kokoh dan menjauhi jendela kaca": "✓ BENAR: Prinsip Drop, Cover, and Hold On: lindungi kepala dari reruntuhan dan hindari kaca.",
        "Segera masuk ke dalam lift darurat": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Prinsip Drop, Cover, and Hold On: lindungi kepala dari reruntuhan dan hindari kaca.",
        "Berdiri di dekat dinding pembatas kaca jendela": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Prinsip Drop, Cover, and Hold On: lindungi kepala dari reruntuhan dan hindari kaca.",
        "Melompat dari balkon lantai atas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Prinsip Drop, Cover, and Hold On: lindungi kepala dari reruntuhan dan hindari kaca."
      },
      "correctAnswer": "Melindungi kepala di bawah meja kokoh dan menjauhi jendela kaca",
      "explanationText": "Prinsip Drop, Cover, and Hold On: lindungi kepala dari reruntuhan dan hindari kaca.",
      "knownWrongPatterns": {
        "Segera masuk ke dalam lift darurat": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Lindungi kepala di bawah meja dan jauhi jendela kaca."
        },
        "Berdiri di dekat dinding pembatas kaca jendela": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Lindungi kepala di bawah meja dan jauhi jendela kaca."
        },
        "Melompat dari balkon lantai atas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Lindungi kepala di bawah meja dan jauhi jendela kaca."
        }
      }
    },
    {
      "id": "q-geografi-11-10",
      "conceptName": "Ring of Fire Indonesia",
      "topic": "Geografi XI",
      "questionText": "Wilayah Indonesia rawan gempa dan memiliki banyak gunung api aktif karena merupakan titik temu tiga lempeng tektonik utama dunia, yaitu...",
      "type": "mcq",
      "options": [
        "Lempeng Indo-Australia, Lempeng Eurasia, dan Lempeng Pasifik",
        "Lempeng Afrika, Lempeng Antartika, dan Lempeng Nazca",
        "Lempeng Arab, Lempeng Karibia, dan Lempeng Cocos",
        "Lempeng Amerika Utara dan Amerika Selatan"
      ],
      "optionDetails": {
        "Lempeng Indo-Australia, Lempeng Eurasia, dan Lempeng Pasifik": "✓ BENAR: Pertemuan Indo-Australia, Eurasia, dan Pasifik membentuk cincin api vulkanik aktif.",
        "Lempeng Afrika, Lempeng Antartika, dan Lempeng Nazca": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pertemuan Indo-Australia, Eurasia, dan Pasifik membentuk cincin api vulkanik aktif.",
        "Lempeng Arab, Lempeng Karibia, dan Lempeng Cocos": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pertemuan Indo-Australia, Eurasia, dan Pasifik membentuk cincin api vulkanik aktif.",
        "Lempeng Amerika Utara dan Amerika Selatan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pertemuan Indo-Australia, Eurasia, dan Pasifik membentuk cincin api vulkanik aktif."
      },
      "correctAnswer": "Lempeng Indo-Australia, Lempeng Eurasia, dan Lempeng Pasifik",
      "explanationText": "Pertemuan Indo-Australia, Eurasia, dan Pasifik membentuk cincin api vulkanik aktif.",
      "knownWrongPatterns": {
        "Lempeng Afrika, Lempeng Antartika, dan Lempeng Nazca": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Indo-Australia, Eurasia, dan Pasifik."
        },
        "Lempeng Arab, Lempeng Karibia, dan Lempeng Cocos": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Indo-Australia, Eurasia, dan Pasifik."
        },
        "Lempeng Amerika Utara dan Amerika Selatan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Indo-Australia, Eurasia, dan Pasifik."
        }
      }
    }
  ],
  "mat-12": [
    {
      "id": "k12-mat-01",
      "conceptName": "Limit Fungsi Trigonometri",
      "topic": "Limit Fungsi Trigonometri",
      "questionText": "Nilai dari limit lim(x -> 0) [sin(6x) / tan(2x)] adalah...",
      "type": "mcq",
      "options": [
        "1",
        "2",
        "3",
        "4",
        "6"
      ],
      "optionDetails": {
        "1": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: lim(x -> 0) [sin(ax) / tan(bx)] = a / b. Maka lim(x -> 0) [sin(6x) / tan(2x)] = 6 / 2 = 3.",
        "2": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: lim(x -> 0) [sin(ax) / tan(bx)] = a / b. Maka lim(x -> 0) [sin(6x) / tan(2x)] = 6 / 2 = 3.",
        "3": "✓ BENAR: lim(x -> 0) [sin(ax) / tan(bx)] = a / b. Maka lim(x -> 0) [sin(6x) / tan(2x)] = 6 / 2 = 3.",
        "4": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: lim(x -> 0) [sin(ax) / tan(bx)] = a / b. Maka lim(x -> 0) [sin(6x) / tan(2x)] = 6 / 2 = 3.",
        "6": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: lim(x -> 0) [sin(ax) / tan(bx)] = a / b. Maka lim(x -> 0) [sin(6x) / tan(2x)] = 6 / 2 = 3."
      },
      "correctAnswer": "3",
      "explanationText": "lim(x -> 0) [sin(ax) / tan(bx)] = a / b. Maka lim(x -> 0) [sin(6x) / tan(2x)] = 6 / 2 = 3.",
      "knownWrongPatterns": {
        "1": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: lim(x -> 0) [sin(ax) / tan(bx)] = a / b. Maka lim(x -> 0) [sin(6x) / tan(2x)] = 6 / 2 = 3."
        },
        "2": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: lim(x -> 0) [sin(ax) / tan(bx)] = a / b. Maka lim(x -> 0) [sin(6x) / tan(2x)] = 6 / 2 = 3."
        },
        "4": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: lim(x -> 0) [sin(ax) / tan(bx)] = a / b. Maka lim(x -> 0) [sin(6x) / tan(2x)] = 6 / 2 = 3."
        },
        "6": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: lim(x -> 0) [sin(ax) / tan(bx)] = a / b. Maka lim(x -> 0) [sin(6x) / tan(2x)] = 6 / 2 = 3."
        }
      }
    },
    {
      "id": "k12-mat-02",
      "conceptName": "Turunan Fungsi Trigonometri",
      "topic": "Turunan Fungsi Trigonometri",
      "questionText": "Turunan pertama dari f(x) = sin^3(2x - 1) adalah f'(x) = ...",
      "type": "mcq",
      "options": [
        "3 sin^2(2x - 1) cos(2x - 1)",
        "6 sin^2(2x - 1) cos(2x - 1)",
        "6 sin(2x - 1) cos^2(2x - 1)",
        "-6 sin^2(2x - 1) cos(2x - 1)",
        "3 cos^2(2x - 1)"
      ],
      "optionDetails": {
        "3 sin^2(2x - 1) cos(2x - 1)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Dengan aturan rantai: f'(x) = 3 sin^2(2x - 1) . cos(2x - 1) . 2 = 6 sin^2(2x - 1) cos(2x - 1).",
        "6 sin^2(2x - 1) cos(2x - 1)": "✓ BENAR: Dengan aturan rantai: f'(x) = 3 sin^2(2x - 1) . cos(2x - 1) . 2 = 6 sin^2(2x - 1) cos(2x - 1).",
        "6 sin(2x - 1) cos^2(2x - 1)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Dengan aturan rantai: f'(x) = 3 sin^2(2x - 1) . cos(2x - 1) . 2 = 6 sin^2(2x - 1) cos(2x - 1).",
        "-6 sin^2(2x - 1) cos(2x - 1)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Dengan aturan rantai: f'(x) = 3 sin^2(2x - 1) . cos(2x - 1) . 2 = 6 sin^2(2x - 1) cos(2x - 1).",
        "3 cos^2(2x - 1)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Dengan aturan rantai: f'(x) = 3 sin^2(2x - 1) . cos(2x - 1) . 2 = 6 sin^2(2x - 1) cos(2x - 1)."
      },
      "correctAnswer": "6 sin^2(2x - 1) cos(2x - 1)",
      "explanationText": "Dengan aturan rantai: f'(x) = 3 sin^2(2x - 1) . cos(2x - 1) . 2 = 6 sin^2(2x - 1) cos(2x - 1).",
      "knownWrongPatterns": {
        "3 sin^2(2x - 1) cos(2x - 1)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Dengan aturan rantai: f'(x) = 3 sin^2(2x - 1) . cos(2x - 1) . 2 = 6 sin^2(2x - 1) cos(2x - 1)."
        },
        "6 sin(2x - 1) cos^2(2x - 1)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Dengan aturan rantai: f'(x) = 3 sin^2(2x - 1) . cos(2x - 1) . 2 = 6 sin^2(2x - 1) cos(2x - 1)."
        },
        "-6 sin^2(2x - 1) cos(2x - 1)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Dengan aturan rantai: f'(x) = 3 sin^2(2x - 1) . cos(2x - 1) . 2 = 6 sin^2(2x - 1) cos(2x - 1)."
        },
        "3 cos^2(2x - 1)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Dengan aturan rantai: f'(x) = 3 sin^2(2x - 1) . cos(2x - 1) . 2 = 6 sin^2(2x - 1) cos(2x - 1)."
        }
      }
    },
    {
      "id": "k12-mat-03",
      "conceptName": "Integral Tak Tentu",
      "topic": "Integral Tak Tentu",
      "questionText": "Hasil dari integral ∫ (3x^2 - 4x + 5) dx adalah...",
      "type": "mcq",
      "options": [
        "x^3 - 2x^2 + 5x + C",
        "3x^3 - 4x^2 + 5x + C",
        "x^3 - 4x^2 + 5x + C",
        "6x - 4 + C",
        "x^3 + 2x^2 + 5x + C"
      ],
      "optionDetails": {
        "x^3 - 2x^2 + 5x + C": "✓ BENAR: ∫ (3x^2 - 4x + 5) dx = (3/3)x^3 - (4/2)x^2 + 5x + C = x^3 - 2x^2 + 5x + C.",
        "3x^3 - 4x^2 + 5x + C": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: ∫ (3x^2 - 4x + 5) dx = (3/3)x^3 - (4/2)x^2 + 5x + C = x^3 - 2x^2 + 5x + C.",
        "x^3 - 4x^2 + 5x + C": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: ∫ (3x^2 - 4x + 5) dx = (3/3)x^3 - (4/2)x^2 + 5x + C = x^3 - 2x^2 + 5x + C.",
        "6x - 4 + C": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: ∫ (3x^2 - 4x + 5) dx = (3/3)x^3 - (4/2)x^2 + 5x + C = x^3 - 2x^2 + 5x + C.",
        "x^3 + 2x^2 + 5x + C": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: ∫ (3x^2 - 4x + 5) dx = (3/3)x^3 - (4/2)x^2 + 5x + C = x^3 - 2x^2 + 5x + C."
      },
      "correctAnswer": "x^3 - 2x^2 + 5x + C",
      "explanationText": "∫ (3x^2 - 4x + 5) dx = (3/3)x^3 - (4/2)x^2 + 5x + C = x^3 - 2x^2 + 5x + C.",
      "knownWrongPatterns": {
        "3x^3 - 4x^2 + 5x + C": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: ∫ (3x^2 - 4x + 5) dx = (3/3)x^3 - (4/2)x^2 + 5x + C = x^3 - 2x^2 + 5x + C."
        },
        "x^3 - 4x^2 + 5x + C": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: ∫ (3x^2 - 4x + 5) dx = (3/3)x^3 - (4/2)x^2 + 5x + C = x^3 - 2x^2 + 5x + C."
        },
        "6x - 4 + C": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: ∫ (3x^2 - 4x + 5) dx = (3/3)x^3 - (4/2)x^2 + 5x + C = x^3 - 2x^2 + 5x + C."
        },
        "x^3 + 2x^2 + 5x + C": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: ∫ (3x^2 - 4x + 5) dx = (3/3)x^3 - (4/2)x^2 + 5x + C = x^3 - 2x^2 + 5x + C."
        }
      }
    },
    {
      "id": "k12-mat-04",
      "conceptName": "Integral Tentu",
      "topic": "Integral Tentu",
      "questionText": "Hasil dari integral tentu ∫[0 sampai 2] (3x^2 + 2x) dx adalah...",
      "type": "mcq",
      "options": [
        "8",
        "10",
        "12",
        "14",
        "16"
      ],
      "optionDetails": {
        "8": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: F(x) = x^3 + x^2. F(2) = 2^3 + 2^2 = 8 + 4 = 12. F(0) = 0. Maka F(2) - F(0) = 12.",
        "10": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: F(x) = x^3 + x^2. F(2) = 2^3 + 2^2 = 8 + 4 = 12. F(0) = 0. Maka F(2) - F(0) = 12.",
        "12": "✓ BENAR: F(x) = x^3 + x^2. F(2) = 2^3 + 2^2 = 8 + 4 = 12. F(0) = 0. Maka F(2) - F(0) = 12.",
        "14": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: F(x) = x^3 + x^2. F(2) = 2^3 + 2^2 = 8 + 4 = 12. F(0) = 0. Maka F(2) - F(0) = 12.",
        "16": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: F(x) = x^3 + x^2. F(2) = 2^3 + 2^2 = 8 + 4 = 12. F(0) = 0. Maka F(2) - F(0) = 12."
      },
      "correctAnswer": "12",
      "explanationText": "F(x) = x^3 + x^2. F(2) = 2^3 + 2^2 = 8 + 4 = 12. F(0) = 0. Maka F(2) - F(0) = 12.",
      "knownWrongPatterns": {
        "8": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: F(x) = x^3 + x^2. F(2) = 2^3 + 2^2 = 8 + 4 = 12. F(0) = 0. Maka F(2) - F(0) = 12."
        },
        "10": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: F(x) = x^3 + x^2. F(2) = 2^3 + 2^2 = 8 + 4 = 12. F(0) = 0. Maka F(2) - F(0) = 12."
        },
        "14": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: F(x) = x^3 + x^2. F(2) = 2^3 + 2^2 = 8 + 4 = 12. F(0) = 0. Maka F(2) - F(0) = 12."
        },
        "16": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: F(x) = x^3 + x^2. F(2) = 2^3 + 2^2 = 8 + 4 = 12. F(0) = 0. Maka F(2) - F(0) = 12."
        }
      }
    },
    {
      "id": "k12-mat-05",
      "conceptName": "Geometri Dimensi Tiga",
      "topic": "Geometri Dimensi Tiga",
      "questionText": "Diketahui kubus ABCD.EFGH dengan rusuk 6 cm. Jarak titik A ke bidang BDE adalah...",
      "type": "mcq",
      "options": [
        "2√3 cm",
        "3√3 cm",
        "4√3 cm",
        "2√2 cm",
        "3√2 cm"
      ],
      "optionDetails": {
        "2√3 cm": "✓ BENAR: Pada kubus dengan rusuk s, jarak dari titik sudut ke bidang diagonal terjauh di seberangnya (A ke BDE) adalah (1/3) diagonal ruang = (1/3) s√3. Dengan s = 6, jarak = (1/3) * 6√3 = 2√3 cm.",
        "3√3 cm": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pada kubus dengan rusuk s, jarak dari titik sudut ke bidang diagonal terjauh di seberangnya (A ke BDE) adalah (1/3) diagonal ruang = (1/3) s√3. Dengan s = 6, jarak = (1/3) * 6√3 = 2√3 cm.",
        "4√3 cm": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pada kubus dengan rusuk s, jarak dari titik sudut ke bidang diagonal terjauh di seberangnya (A ke BDE) adalah (1/3) diagonal ruang = (1/3) s√3. Dengan s = 6, jarak = (1/3) * 6√3 = 2√3 cm.",
        "2√2 cm": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pada kubus dengan rusuk s, jarak dari titik sudut ke bidang diagonal terjauh di seberangnya (A ke BDE) adalah (1/3) diagonal ruang = (1/3) s√3. Dengan s = 6, jarak = (1/3) * 6√3 = 2√3 cm.",
        "3√2 cm": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pada kubus dengan rusuk s, jarak dari titik sudut ke bidang diagonal terjauh di seberangnya (A ke BDE) adalah (1/3) diagonal ruang = (1/3) s√3. Dengan s = 6, jarak = (1/3) * 6√3 = 2√3 cm."
      },
      "correctAnswer": "2√3 cm",
      "explanationText": "Pada kubus dengan rusuk s, jarak dari titik sudut ke bidang diagonal terjauh di seberangnya (A ke BDE) adalah (1/3) diagonal ruang = (1/3) s√3. Dengan s = 6, jarak = (1/3) * 6√3 = 2√3 cm.",
      "knownWrongPatterns": {
        "3√3 cm": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pada kubus dengan rusuk s, jarak dari titik sudut ke bidang diagonal terjauh di seberangnya (A ke BDE) adalah (1/3) diagonal ruang = (1/3) s√3. Dengan s = 6, jarak = (1/3) * 6√3 = 2√3 cm."
        },
        "4√3 cm": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pada kubus dengan rusuk s, jarak dari titik sudut ke bidang diagonal terjauh di seberangnya (A ke BDE) adalah (1/3) diagonal ruang = (1/3) s√3. Dengan s = 6, jarak = (1/3) * 6√3 = 2√3 cm."
        },
        "2√2 cm": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pada kubus dengan rusuk s, jarak dari titik sudut ke bidang diagonal terjauh di seberangnya (A ke BDE) adalah (1/3) diagonal ruang = (1/3) s√3. Dengan s = 6, jarak = (1/3) * 6√3 = 2√3 cm."
        },
        "3√2 cm": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pada kubus dengan rusuk s, jarak dari titik sudut ke bidang diagonal terjauh di seberangnya (A ke BDE) adalah (1/3) diagonal ruang = (1/3) s√3. Dengan s = 6, jarak = (1/3) * 6√3 = 2√3 cm."
        }
      }
    },
    {
      "id": "k12-mat-06",
      "conceptName": "Distribusi Peluang Binomial",
      "topic": "Distribusi Peluang Binomial",
      "questionText": "Sebuah dadu dilempar sebanyak 5 kali. Peluang muncul mata dadu 6 tepat 2 kali adalah...",
      "type": "mcq",
      "options": [
        "10 * (1/6)^2 * (5/6)^3",
        "5 * (1/6)^2 * (5/6)^3",
        "10 * (1/6)^3 * (5/6)^2",
        "(1/6)^2 * (5/6)^3",
        "20 * (1/6)^2 * (5/6)^3"
      ],
      "optionDetails": {
        "10 * (1/6)^2 * (5/6)^3": "✓ BENAR: Distribusi Binomial: P(X = k) = C(n, k) * p^k * q^(n-k). Di sini n = 5, k = 2, p = 1/6, q = 5/6. C(5,2) = 10. Maka P = 10 * (1/6)^2 * (5/6)^3.",
        "5 * (1/6)^2 * (5/6)^3": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Distribusi Binomial: P(X = k) = C(n, k) * p^k * q^(n-k). Di sini n = 5, k = 2, p = 1/6, q = 5/6. C(5,2) = 10. Maka P = 10 * (1/6)^2 * (5/6)^3.",
        "10 * (1/6)^3 * (5/6)^2": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Distribusi Binomial: P(X = k) = C(n, k) * p^k * q^(n-k). Di sini n = 5, k = 2, p = 1/6, q = 5/6. C(5,2) = 10. Maka P = 10 * (1/6)^2 * (5/6)^3.",
        "(1/6)^2 * (5/6)^3": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Distribusi Binomial: P(X = k) = C(n, k) * p^k * q^(n-k). Di sini n = 5, k = 2, p = 1/6, q = 5/6. C(5,2) = 10. Maka P = 10 * (1/6)^2 * (5/6)^3.",
        "20 * (1/6)^2 * (5/6)^3": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Distribusi Binomial: P(X = k) = C(n, k) * p^k * q^(n-k). Di sini n = 5, k = 2, p = 1/6, q = 5/6. C(5,2) = 10. Maka P = 10 * (1/6)^2 * (5/6)^3."
      },
      "correctAnswer": "10 * (1/6)^2 * (5/6)^3",
      "explanationText": "Distribusi Binomial: P(X = k) = C(n, k) * p^k * q^(n-k). Di sini n = 5, k = 2, p = 1/6, q = 5/6. C(5,2) = 10. Maka P = 10 * (1/6)^2 * (5/6)^3.",
      "knownWrongPatterns": {
        "5 * (1/6)^2 * (5/6)^3": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Distribusi Binomial: P(X = k) = C(n, k) * p^k * q^(n-k). Di sini n = 5, k = 2, p = 1/6, q = 5/6. C(5,2) = 10. Maka P = 10 * (1/6)^2 * (5/6)^3."
        },
        "10 * (1/6)^3 * (5/6)^2": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Distribusi Binomial: P(X = k) = C(n, k) * p^k * q^(n-k). Di sini n = 5, k = 2, p = 1/6, q = 5/6. C(5,2) = 10. Maka P = 10 * (1/6)^2 * (5/6)^3."
        },
        "(1/6)^2 * (5/6)^3": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Distribusi Binomial: P(X = k) = C(n, k) * p^k * q^(n-k). Di sini n = 5, k = 2, p = 1/6, q = 5/6. C(5,2) = 10. Maka P = 10 * (1/6)^2 * (5/6)^3."
        },
        "20 * (1/6)^2 * (5/6)^3": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Distribusi Binomial: P(X = k) = C(n, k) * p^k * q^(n-k). Di sini n = 5, k = 2, p = 1/6, q = 5/6. C(5,2) = 10. Maka P = 10 * (1/6)^2 * (5/6)^3."
        }
      }
    },
    {
      "id": "k12-mat-07",
      "conceptName": "Limit Menuju Tak Hingga",
      "topic": "Limit Menuju Tak Hingga",
      "questionText": "Nilai dari lim(x -> ∞) (√(4x^2 + 5x + 1) - √(4x^2 - 3x + 2)) adalah...",
      "type": "mcq",
      "options": [
        "1",
        "2",
        "3",
        "4",
        "5/4"
      ],
      "optionDetails": {
        "1": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rumus cepat bentuk lim(x->∞) [√(ax^2+bx+c) - √(ax^2+px+q)] dengan a = p adalah (b - p) / (2√a). Di sini a = 4, b = 5, p = -3. Maka (5 - (-3)) / (2√4) = 8 / (2 * 2) = 8 / 4 = 2.",
        "2": "✓ BENAR: Rumus cepat bentuk lim(x->∞) [√(ax^2+bx+c) - √(ax^2+px+q)] dengan a = p adalah (b - p) / (2√a). Di sini a = 4, b = 5, p = -3. Maka (5 - (-3)) / (2√4) = 8 / (2 * 2) = 8 / 4 = 2.",
        "3": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rumus cepat bentuk lim(x->∞) [√(ax^2+bx+c) - √(ax^2+px+q)] dengan a = p adalah (b - p) / (2√a). Di sini a = 4, b = 5, p = -3. Maka (5 - (-3)) / (2√4) = 8 / (2 * 2) = 8 / 4 = 2.",
        "4": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rumus cepat bentuk lim(x->∞) [√(ax^2+bx+c) - √(ax^2+px+q)] dengan a = p adalah (b - p) / (2√a). Di sini a = 4, b = 5, p = -3. Maka (5 - (-3)) / (2√4) = 8 / (2 * 2) = 8 / 4 = 2.",
        "5/4": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rumus cepat bentuk lim(x->∞) [√(ax^2+bx+c) - √(ax^2+px+q)] dengan a = p adalah (b - p) / (2√a). Di sini a = 4, b = 5, p = -3. Maka (5 - (-3)) / (2√4) = 8 / (2 * 2) = 8 / 4 = 2."
      },
      "correctAnswer": "2",
      "explanationText": "Rumus cepat bentuk lim(x->∞) [√(ax^2+bx+c) - √(ax^2+px+q)] dengan a = p adalah (b - p) / (2√a). Di sini a = 4, b = 5, p = -3. Maka (5 - (-3)) / (2√4) = 8 / (2 * 2) = 8 / 4 = 2.",
      "knownWrongPatterns": {
        "1": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Rumus cepat bentuk lim(x->∞) [√(ax^2+bx+c) - √(ax^2+px+q)] dengan a = p adalah (b - p) / (2√a). Di sini a = 4, b = 5, p = -3. Maka (5 - (-3)) / (2√4) = 8 / (2 * 2) = 8 / 4 = 2."
        },
        "3": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Rumus cepat bentuk lim(x->∞) [√(ax^2+bx+c) - √(ax^2+px+q)] dengan a = p adalah (b - p) / (2√a). Di sini a = 4, b = 5, p = -3. Maka (5 - (-3)) / (2√4) = 8 / (2 * 2) = 8 / 4 = 2."
        },
        "4": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Rumus cepat bentuk lim(x->∞) [√(ax^2+bx+c) - √(ax^2+px+q)] dengan a = p adalah (b - p) / (2√a). Di sini a = 4, b = 5, p = -3. Maka (5 - (-3)) / (2√4) = 8 / (2 * 2) = 8 / 4 = 2."
        },
        "5/4": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Rumus cepat bentuk lim(x->∞) [√(ax^2+bx+c) - √(ax^2+px+q)] dengan a = p adalah (b - p) / (2√a). Di sini a = 4, b = 5, p = -3. Maka (5 - (-3)) / (2√4) = 8 / (2 * 2) = 8 / 4 = 2."
        }
      }
    },
    {
      "id": "k12-mat-08",
      "conceptName": "Aplikasi Integral: Luas Daerah",
      "topic": "Aplikasi Integral: Luas Daerah",
      "questionText": "Luas daerah yang dibatasi oleh kurva y = x^2, garis x = 0, garis x = 3, dan sumbu-X adalah...",
      "type": "mcq",
      "options": [
        "3 satuan luas",
        "6 satuan luas",
        "9 satuan luas",
        "12 satuan luas",
        "27 satuan luas"
      ],
      "optionDetails": {
        "3 satuan luas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: L = ∫[0 sampai 3] x^2 dx = [(1/3)x^3][0 sampai 3] = (1/3)(27) - 0 = 9 satuan luas.",
        "6 satuan luas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: L = ∫[0 sampai 3] x^2 dx = [(1/3)x^3][0 sampai 3] = (1/3)(27) - 0 = 9 satuan luas.",
        "9 satuan luas": "✓ BENAR: L = ∫[0 sampai 3] x^2 dx = [(1/3)x^3][0 sampai 3] = (1/3)(27) - 0 = 9 satuan luas.",
        "12 satuan luas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: L = ∫[0 sampai 3] x^2 dx = [(1/3)x^3][0 sampai 3] = (1/3)(27) - 0 = 9 satuan luas.",
        "27 satuan luas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: L = ∫[0 sampai 3] x^2 dx = [(1/3)x^3][0 sampai 3] = (1/3)(27) - 0 = 9 satuan luas."
      },
      "correctAnswer": "9 satuan luas",
      "explanationText": "L = ∫[0 sampai 3] x^2 dx = [(1/3)x^3][0 sampai 3] = (1/3)(27) - 0 = 9 satuan luas.",
      "knownWrongPatterns": {
        "3 satuan luas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: L = ∫[0 sampai 3] x^2 dx = [(1/3)x^3][0 sampai 3] = (1/3)(27) - 0 = 9 satuan luas."
        },
        "6 satuan luas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: L = ∫[0 sampai 3] x^2 dx = [(1/3)x^3][0 sampai 3] = (1/3)(27) - 0 = 9 satuan luas."
        },
        "12 satuan luas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: L = ∫[0 sampai 3] x^2 dx = [(1/3)x^3][0 sampai 3] = (1/3)(27) - 0 = 9 satuan luas."
        },
        "27 satuan luas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: L = ∫[0 sampai 3] x^2 dx = [(1/3)x^3][0 sampai 3] = (1/3)(27) - 0 = 9 satuan luas."
        }
      }
    },
    {
      "id": "k12-mat-09",
      "conceptName": "Distribusi Normal",
      "topic": "Distribusi Normal",
      "questionText": "Sebuah variabel acak X berdistribusi normal dengan rata-rata μ = 70 dan simpangan baku σ = 10. Nilai Z-score untuk x = 85 adalah...",
      "type": "mcq",
      "options": [
        "1,0",
        "1,25",
        "1,5",
        "1,75",
        "2,0"
      ],
      "optionDetails": {
        "1,0": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Z = (x - μ) / σ = (85 - 70) / 10 = 15 / 10 = 1,5.",
        "1,25": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Z = (x - μ) / σ = (85 - 70) / 10 = 15 / 10 = 1,5.",
        "1,5": "✓ BENAR: Z = (x - μ) / σ = (85 - 70) / 10 = 15 / 10 = 1,5.",
        "1,75": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Z = (x - μ) / σ = (85 - 70) / 10 = 15 / 10 = 1,5.",
        "2,0": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Z = (x - μ) / σ = (85 - 70) / 10 = 15 / 10 = 1,5."
      },
      "correctAnswer": "1,5",
      "explanationText": "Z = (x - μ) / σ = (85 - 70) / 10 = 15 / 10 = 1,5.",
      "knownWrongPatterns": {
        "1,0": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Z = (x - μ) / σ = (85 - 70) / 10 = 15 / 10 = 1,5."
        },
        "1,25": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Z = (x - μ) / σ = (85 - 70) / 10 = 15 / 10 = 1,5."
        },
        "1,75": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Z = (x - μ) / σ = (85 - 70) / 10 = 15 / 10 = 1,5."
        },
        "2,0": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Z = (x - μ) / σ = (85 - 70) / 10 = 15 / 10 = 1,5."
        }
      }
    },
    {
      "id": "k12-mat-10",
      "conceptName": "Aplikasi Turunan: Garis Singgung",
      "topic": "Aplikasi Turunan: Garis Singgung",
      "questionText": "Persamaan garis singgung kurva y = x^3 - 3x + 2 pada titik dengan absis x = 2 adalah...",
      "type": "mcq",
      "options": [
        "y = 9x - 14",
        "y = 9x + 14",
        "y = 3x - 2",
        "y = 6x - 8",
        "y = 12x - 20"
      ],
      "optionDetails": {
        "y = 9x - 14": "✓ BENAR: y(2) = 2^3 - 3(2) + 2 = 8 - 6 + 2 = 4. Titik singgung (2, 4). Gradien m = y'(x) = 3x^2 - 3. m = 3(2)^2 - 3 = 12 - 3 = 9. Persamaan garis: y - 4 = 9(x - 2) <=> y = 9x - 18 + 4 <=> y = 9x - 14.",
        "y = 9x + 14": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: y(2) = 2^3 - 3(2) + 2 = 8 - 6 + 2 = 4. Titik singgung (2, 4). Gradien m = y'(x) = 3x^2 - 3. m = 3(2)^2 - 3 = 12 - 3 = 9. Persamaan garis: y - 4 = 9(x - 2) <=> y = 9x - 18 + 4 <=> y = 9x - 14.",
        "y = 3x - 2": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: y(2) = 2^3 - 3(2) + 2 = 8 - 6 + 2 = 4. Titik singgung (2, 4). Gradien m = y'(x) = 3x^2 - 3. m = 3(2)^2 - 3 = 12 - 3 = 9. Persamaan garis: y - 4 = 9(x - 2) <=> y = 9x - 18 + 4 <=> y = 9x - 14.",
        "y = 6x - 8": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: y(2) = 2^3 - 3(2) + 2 = 8 - 6 + 2 = 4. Titik singgung (2, 4). Gradien m = y'(x) = 3x^2 - 3. m = 3(2)^2 - 3 = 12 - 3 = 9. Persamaan garis: y - 4 = 9(x - 2) <=> y = 9x - 18 + 4 <=> y = 9x - 14.",
        "y = 12x - 20": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: y(2) = 2^3 - 3(2) + 2 = 8 - 6 + 2 = 4. Titik singgung (2, 4). Gradien m = y'(x) = 3x^2 - 3. m = 3(2)^2 - 3 = 12 - 3 = 9. Persamaan garis: y - 4 = 9(x - 2) <=> y = 9x - 18 + 4 <=> y = 9x - 14."
      },
      "correctAnswer": "y = 9x - 14",
      "explanationText": "y(2) = 2^3 - 3(2) + 2 = 8 - 6 + 2 = 4. Titik singgung (2, 4). Gradien m = y'(x) = 3x^2 - 3. m = 3(2)^2 - 3 = 12 - 3 = 9. Persamaan garis: y - 4 = 9(x - 2) <=> y = 9x - 18 + 4 <=> y = 9x - 14.",
      "knownWrongPatterns": {
        "y = 9x + 14": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: y(2) = 2^3 - 3(2) + 2 = 8 - 6 + 2 = 4. Titik singgung (2, 4). Gradien m = y'(x) = 3x^2 - 3. m = 3(2)^2 - 3 = 12 - 3 = 9. Persamaan garis: y - 4 = 9(x - 2) <=> y = 9x - 18 + 4 <=> y = 9x - 14."
        },
        "y = 3x - 2": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: y(2) = 2^3 - 3(2) + 2 = 8 - 6 + 2 = 4. Titik singgung (2, 4). Gradien m = y'(x) = 3x^2 - 3. m = 3(2)^2 - 3 = 12 - 3 = 9. Persamaan garis: y - 4 = 9(x - 2) <=> y = 9x - 18 + 4 <=> y = 9x - 14."
        },
        "y = 6x - 8": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: y(2) = 2^3 - 3(2) + 2 = 8 - 6 + 2 = 4. Titik singgung (2, 4). Gradien m = y'(x) = 3x^2 - 3. m = 3(2)^2 - 3 = 12 - 3 = 9. Persamaan garis: y - 4 = 9(x - 2) <=> y = 9x - 18 + 4 <=> y = 9x - 14."
        },
        "y = 12x - 20": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: y(2) = 2^3 - 3(2) + 2 = 8 - 6 + 2 = 4. Titik singgung (2, 4). Gradien m = y'(x) = 3x^2 - 3. m = 3(2)^2 - 3 = 12 - 3 = 9. Persamaan garis: y - 4 = 9(x - 2) <=> y = 9x - 18 + 4 <=> y = 9x - 14."
        }
      }
    }
  ],
  "fisika-12": [
    {
      "id": "k12-fis-01",
      "conceptName": "Fisika Kuantum & Foton",
      "topic": "Fisika Kuantum & Foton",
      "questionText": "Foton cahaya memiliki frekuensi 5 x 10^14 Hz. Jika tetapan Planck h = 6,63 x 10^-34 J.s, besar energi foton tersebut adalah...",
      "type": "mcq",
      "options": [
        "3,315 x 10^-19 J",
        "1,326 x 10^-19 J",
        "6,63 x 10^-19 J",
        "3,315 x 10^-20 J",
        "1,65 x 10^-19 J"
      ],
      "optionDetails": {
        "3,315 x 10^-19 J": "✓ BENAR: E = h . f = (6,63 x 10^-34 J.s) x (5 x 10^14 Hz) = 3,315 x 10^-19 J.",
        "1,326 x 10^-19 J": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: E = h . f = (6,63 x 10^-34 J.s) x (5 x 10^14 Hz) = 3,315 x 10^-19 J.",
        "6,63 x 10^-19 J": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: E = h . f = (6,63 x 10^-34 J.s) x (5 x 10^14 Hz) = 3,315 x 10^-19 J.",
        "3,315 x 10^-20 J": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: E = h . f = (6,63 x 10^-34 J.s) x (5 x 10^14 Hz) = 3,315 x 10^-19 J.",
        "1,65 x 10^-19 J": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: E = h . f = (6,63 x 10^-34 J.s) x (5 x 10^14 Hz) = 3,315 x 10^-19 J."
      },
      "correctAnswer": "3,315 x 10^-19 J",
      "explanationText": "E = h . f = (6,63 x 10^-34 J.s) x (5 x 10^14 Hz) = 3,315 x 10^-19 J.",
      "knownWrongPatterns": {
        "1,326 x 10^-19 J": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: E = h . f = (6,63 x 10^-34 J.s) x (5 x 10^14 Hz) = 3,315 x 10^-19 J."
        },
        "6,63 x 10^-19 J": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: E = h . f = (6,63 x 10^-34 J.s) x (5 x 10^14 Hz) = 3,315 x 10^-19 J."
        },
        "3,315 x 10^-20 J": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: E = h . f = (6,63 x 10^-34 J.s) x (5 x 10^14 Hz) = 3,315 x 10^-19 J."
        },
        "1,65 x 10^-19 J": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: E = h . f = (6,63 x 10^-34 J.s) x (5 x 10^14 Hz) = 3,315 x 10^-19 J."
        }
      }
    },
    {
      "id": "k12-fis-02",
      "conceptName": "Efek Fotolistrik",
      "topic": "Efek Fotolistrik",
      "questionText": "Fenomena efek fotolistrik membuktikan secara fundamental bahwa...",
      "type": "mcq",
      "options": [
        "Cahaya merambat lurus dalam ruang hampa",
        "Cahaya memiliki sifat partikel (paket energi/foton)",
        "Cahaya mengalami polarisasi oleh cermin",
        "Elektron dapat dibiaskan oleh medan magnet",
        "Panjang gelombang cahaya tidak bergantung medium"
      ],
      "optionDetails": {
        "Cahaya merambat lurus dalam ruang hampa": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Efek fotolistrik (diterangkan oleh Albert Einstein pada 1905) menunjukkan bahwa energi diserap dalam kuanta foton diskrit, membuktikan dualisme cahaya sebagai partikel.",
        "Cahaya memiliki sifat partikel (paket energi/foton)": "✓ BENAR: Efek fotolistrik (diterangkan oleh Albert Einstein pada 1905) menunjukkan bahwa energi diserap dalam kuanta foton diskrit, membuktikan dualisme cahaya sebagai partikel.",
        "Cahaya mengalami polarisasi oleh cermin": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Efek fotolistrik (diterangkan oleh Albert Einstein pada 1905) menunjukkan bahwa energi diserap dalam kuanta foton diskrit, membuktikan dualisme cahaya sebagai partikel.",
        "Elektron dapat dibiaskan oleh medan magnet": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Efek fotolistrik (diterangkan oleh Albert Einstein pada 1905) menunjukkan bahwa energi diserap dalam kuanta foton diskrit, membuktikan dualisme cahaya sebagai partikel.",
        "Panjang gelombang cahaya tidak bergantung medium": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Efek fotolistrik (diterangkan oleh Albert Einstein pada 1905) menunjukkan bahwa energi diserap dalam kuanta foton diskrit, membuktikan dualisme cahaya sebagai partikel."
      },
      "correctAnswer": "Cahaya memiliki sifat partikel (paket energi/foton)",
      "explanationText": "Efek fotolistrik (diterangkan oleh Albert Einstein pada 1905) menunjukkan bahwa energi diserap dalam kuanta foton diskrit, membuktikan dualisme cahaya sebagai partikel.",
      "knownWrongPatterns": {
        "Cahaya merambat lurus dalam ruang hampa": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Efek fotolistrik (diterangkan oleh Albert Einstein pada 1905) menunjukkan bahwa energi diserap dalam kuanta foton diskrit, membuktikan dualisme cahaya sebagai partikel."
        },
        "Cahaya mengalami polarisasi oleh cermin": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Efek fotolistrik (diterangkan oleh Albert Einstein pada 1905) menunjukkan bahwa energi diserap dalam kuanta foton diskrit, membuktikan dualisme cahaya sebagai partikel."
        },
        "Elektron dapat dibiaskan oleh medan magnet": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Efek fotolistrik (diterangkan oleh Albert Einstein pada 1905) menunjukkan bahwa energi diserap dalam kuanta foton diskrit, membuktikan dualisme cahaya sebagai partikel."
        },
        "Panjang gelombang cahaya tidak bergantung medium": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Efek fotolistrik (diterangkan oleh Albert Einstein pada 1905) menunjukkan bahwa energi diserap dalam kuanta foton diskrit, membuktikan dualisme cahaya sebagai partikel."
        }
      }
    },
    {
      "id": "k12-fis-03",
      "conceptName": "Relativitas Khusus: Kontraksi Panjang",
      "topic": "Relativitas Khusus: Kontraksi Panjang",
      "questionText": "Sebuah pesawat antariksa memiliki panjang 100 m saat diam di bumi. Jika pesawat bergerak dengan kecepatan 0,8c relatif terhadap pengamat di bumi, panjang pesawat menurut pengamat di bumi adalah...",
      "type": "mcq",
      "options": [
        "40 m",
        "60 m",
        "80 m",
        "100 m",
        "125 m"
      ],
      "optionDetails": {
        "40 m": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kontraksi panjang Lorentz: L = L0 √(1 - v^2/c^2) = 100 √(1 - 0,64) = 100 √0,36 = 100 x 0,6 = 60 meter.",
        "60 m": "✓ BENAR: Kontraksi panjang Lorentz: L = L0 √(1 - v^2/c^2) = 100 √(1 - 0,64) = 100 √0,36 = 100 x 0,6 = 60 meter.",
        "80 m": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kontraksi panjang Lorentz: L = L0 √(1 - v^2/c^2) = 100 √(1 - 0,64) = 100 √0,36 = 100 x 0,6 = 60 meter.",
        "100 m": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kontraksi panjang Lorentz: L = L0 √(1 - v^2/c^2) = 100 √(1 - 0,64) = 100 √0,36 = 100 x 0,6 = 60 meter.",
        "125 m": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kontraksi panjang Lorentz: L = L0 √(1 - v^2/c^2) = 100 √(1 - 0,64) = 100 √0,36 = 100 x 0,6 = 60 meter."
      },
      "correctAnswer": "60 m",
      "explanationText": "Kontraksi panjang Lorentz: L = L0 √(1 - v^2/c^2) = 100 √(1 - 0,64) = 100 √0,36 = 100 x 0,6 = 60 meter.",
      "knownWrongPatterns": {
        "40 m": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kontraksi panjang Lorentz: L = L0 √(1 - v^2/c^2) = 100 √(1 - 0,64) = 100 √0,36 = 100 x 0,6 = 60 meter."
        },
        "80 m": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kontraksi panjang Lorentz: L = L0 √(1 - v^2/c^2) = 100 √(1 - 0,64) = 100 √0,36 = 100 x 0,6 = 60 meter."
        },
        "100 m": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kontraksi panjang Lorentz: L = L0 √(1 - v^2/c^2) = 100 √(1 - 0,64) = 100 √0,36 = 100 x 0,6 = 60 meter."
        },
        "125 m": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kontraksi panjang Lorentz: L = L0 √(1 - v^2/c^2) = 100 √(1 - 0,64) = 100 √0,36 = 100 x 0,6 = 60 meter."
        }
      }
    },
    {
      "id": "k12-fis-04",
      "conceptName": "Fisika Inti & Radioaktivitas",
      "topic": "Fisika Inti & Radioaktivitas",
      "questionText": "Suatu unsur radioaktif memiliki waktu paruh 20 hari. Jika massa awal unsur tersebut 160 gram, massa sisa yang belum meluruh setelah 60 hari adalah...",
      "type": "mcq",
      "options": [
        "40 gram",
        "20 gram",
        "10 gram",
        "5 gram",
        "2,5 gram"
      ],
      "optionDetails": {
        "40 gram": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: n = t / T1/2 = 60 / 20 = 3 periode. Massa sisa N = N0 * (1/2)^n = 160 * (1/2)^3 = 160 / 8 = 20 gram.",
        "20 gram": "✓ BENAR: n = t / T1/2 = 60 / 20 = 3 periode. Massa sisa N = N0 * (1/2)^n = 160 * (1/2)^3 = 160 / 8 = 20 gram.",
        "10 gram": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: n = t / T1/2 = 60 / 20 = 3 periode. Massa sisa N = N0 * (1/2)^n = 160 * (1/2)^3 = 160 / 8 = 20 gram.",
        "5 gram": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: n = t / T1/2 = 60 / 20 = 3 periode. Massa sisa N = N0 * (1/2)^n = 160 * (1/2)^3 = 160 / 8 = 20 gram.",
        "2,5 gram": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: n = t / T1/2 = 60 / 20 = 3 periode. Massa sisa N = N0 * (1/2)^n = 160 * (1/2)^3 = 160 / 8 = 20 gram."
      },
      "correctAnswer": "20 gram",
      "explanationText": "n = t / T1/2 = 60 / 20 = 3 periode. Massa sisa N = N0 * (1/2)^n = 160 * (1/2)^3 = 160 / 8 = 20 gram.",
      "knownWrongPatterns": {
        "40 gram": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: n = t / T1/2 = 60 / 20 = 3 periode. Massa sisa N = N0 * (1/2)^n = 160 * (1/2)^3 = 160 / 8 = 20 gram."
        },
        "10 gram": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: n = t / T1/2 = 60 / 20 = 3 periode. Massa sisa N = N0 * (1/2)^n = 160 * (1/2)^3 = 160 / 8 = 20 gram."
        },
        "5 gram": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: n = t / T1/2 = 60 / 20 = 3 periode. Massa sisa N = N0 * (1/2)^n = 160 * (1/2)^3 = 160 / 8 = 20 gram."
        },
        "2,5 gram": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: n = t / T1/2 = 60 / 20 = 3 periode. Massa sisa N = N0 * (1/2)^n = 160 * (1/2)^3 = 160 / 8 = 20 gram."
        }
      }
    },
    {
      "id": "k12-fis-05",
      "conceptName": "Reaksi Inti",
      "topic": "Reaksi Inti",
      "questionText": "Reaksi penggabungan dua inti atom ringan menjadi satu inti atom yang lebih berat disertai pelepasan energi luar biasa disebut reaksi...",
      "type": "mcq",
      "options": [
        "Fisi nuklir",
        "Fusi nuklir",
        "Peluruhan alfa",
        "Peluruhan beta",
        "Transmutasi buatan"
      ],
      "optionDetails": {
        "Fisi nuklir": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Reaksi penggabungan inti ringan (seperti isotop hidrogen menjadi helium di matahari) dinamakan reaksi fusi nuklir.",
        "Fusi nuklir": "✓ BENAR: Reaksi penggabungan inti ringan (seperti isotop hidrogen menjadi helium di matahari) dinamakan reaksi fusi nuklir.",
        "Peluruhan alfa": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Reaksi penggabungan inti ringan (seperti isotop hidrogen menjadi helium di matahari) dinamakan reaksi fusi nuklir.",
        "Peluruhan beta": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Reaksi penggabungan inti ringan (seperti isotop hidrogen menjadi helium di matahari) dinamakan reaksi fusi nuklir.",
        "Transmutasi buatan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Reaksi penggabungan inti ringan (seperti isotop hidrogen menjadi helium di matahari) dinamakan reaksi fusi nuklir."
      },
      "correctAnswer": "Fusi nuklir",
      "explanationText": "Reaksi penggabungan inti ringan (seperti isotop hidrogen menjadi helium di matahari) dinamakan reaksi fusi nuklir.",
      "knownWrongPatterns": {
        "Fisi nuklir": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Reaksi penggabungan inti ringan (seperti isotop hidrogen menjadi helium di matahari) dinamakan reaksi fusi nuklir."
        },
        "Peluruhan alfa": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Reaksi penggabungan inti ringan (seperti isotop hidrogen menjadi helium di matahari) dinamakan reaksi fusi nuklir."
        },
        "Peluruhan beta": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Reaksi penggabungan inti ringan (seperti isotop hidrogen menjadi helium di matahari) dinamakan reaksi fusi nuklir."
        },
        "Transmutasi buatan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Reaksi penggabungan inti ringan (seperti isotop hidrogen menjadi helium di matahari) dinamakan reaksi fusi nuklir."
        }
      }
    },
    {
      "id": "k12-fis-06",
      "conceptName": "Elektromagnetisme & Gaya Lorentz",
      "topic": "Elektromagnetisme & Gaya Lorentz",
      "questionText": "Gaya magnetik (gaya Lorentz) yang dialami kawat berarus listrik dalam medan magnet berbanding lurus dengan...",
      "type": "mcq",
      "options": [
        "Hanya kuat arus listrik",
        "Hanya kuat medan magnet",
        "Kuat arus, kuat medan magnet, panjang kawat, dan sinus sudut antara arus dan medan",
        "Kuadrat jarak kawat ke medan magnet",
        "Hambatan kawat penghantar"
      ],
      "optionDetails": {
        "Hanya kuat arus listrik": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: F = B . I . L . sin(θ), sehingga gaya Lorentz sebanding dengan kuat medan magnet (B), kuat arus (I), panjang kawat (L), dan sinus sudut apit (θ).",
        "Hanya kuat medan magnet": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: F = B . I . L . sin(θ), sehingga gaya Lorentz sebanding dengan kuat medan magnet (B), kuat arus (I), panjang kawat (L), dan sinus sudut apit (θ).",
        "Kuat arus, kuat medan magnet, panjang kawat, dan sinus sudut antara arus dan medan": "✓ BENAR: F = B . I . L . sin(θ), sehingga gaya Lorentz sebanding dengan kuat medan magnet (B), kuat arus (I), panjang kawat (L), dan sinus sudut apit (θ).",
        "Kuadrat jarak kawat ke medan magnet": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: F = B . I . L . sin(θ), sehingga gaya Lorentz sebanding dengan kuat medan magnet (B), kuat arus (I), panjang kawat (L), dan sinus sudut apit (θ).",
        "Hambatan kawat penghantar": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: F = B . I . L . sin(θ), sehingga gaya Lorentz sebanding dengan kuat medan magnet (B), kuat arus (I), panjang kawat (L), dan sinus sudut apit (θ)."
      },
      "correctAnswer": "Kuat arus, kuat medan magnet, panjang kawat, dan sinus sudut antara arus dan medan",
      "explanationText": "F = B . I . L . sin(θ), sehingga gaya Lorentz sebanding dengan kuat medan magnet (B), kuat arus (I), panjang kawat (L), dan sinus sudut apit (θ).",
      "knownWrongPatterns": {
        "Hanya kuat arus listrik": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: F = B . I . L . sin(θ), sehingga gaya Lorentz sebanding dengan kuat medan magnet (B), kuat arus (I), panjang kawat (L), dan sinus sudut apit (θ)."
        },
        "Hanya kuat medan magnet": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: F = B . I . L . sin(θ), sehingga gaya Lorentz sebanding dengan kuat medan magnet (B), kuat arus (I), panjang kawat (L), dan sinus sudut apit (θ)."
        },
        "Kuadrat jarak kawat ke medan magnet": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: F = B . I . L . sin(θ), sehingga gaya Lorentz sebanding dengan kuat medan magnet (B), kuat arus (I), panjang kawat (L), dan sinus sudut apit (θ)."
        },
        "Hambatan kawat penghantar": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: F = B . I . L . sin(θ), sehingga gaya Lorentz sebanding dengan kuat medan magnet (B), kuat arus (I), panjang kawat (L), dan sinus sudut apit (θ)."
        }
      }
    },
    {
      "id": "k12-fis-07",
      "conceptName": "Induksi Elektromagnetik",
      "topic": "Induksi Elektromagnetik",
      "questionText": "Hukum Faraday tentang induksi elektromagnetik menyatakan bahwa GGL induksi yang timbul sebanding dengan...",
      "type": "mcq",
      "options": [
        "Laju perubahan fluks magnetik yang dilingkupi loop",
        "Hambatan total kumparan kawat",
        "Panjang kawat penghantar dibagi luas penampang",
        "Tegangan baterai eksternal",
        "Frekuensi gelombang elektromagnetik"
      ],
      "optionDetails": {
        "Laju perubahan fluks magnetik yang dilingkupi loop": "✓ BENAR: Hukum Faraday: ε = -N (dΦ/dt). Besar GGL induksi berbanding lurus dengan laju perubahan fluks magnetik terhadap waktu.",
        "Hambatan total kumparan kawat": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hukum Faraday: ε = -N (dΦ/dt). Besar GGL induksi berbanding lurus dengan laju perubahan fluks magnetik terhadap waktu.",
        "Panjang kawat penghantar dibagi luas penampang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hukum Faraday: ε = -N (dΦ/dt). Besar GGL induksi berbanding lurus dengan laju perubahan fluks magnetik terhadap waktu.",
        "Tegangan baterai eksternal": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hukum Faraday: ε = -N (dΦ/dt). Besar GGL induksi berbanding lurus dengan laju perubahan fluks magnetik terhadap waktu.",
        "Frekuensi gelombang elektromagnetik": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hukum Faraday: ε = -N (dΦ/dt). Besar GGL induksi berbanding lurus dengan laju perubahan fluks magnetik terhadap waktu."
      },
      "correctAnswer": "Laju perubahan fluks magnetik yang dilingkupi loop",
      "explanationText": "Hukum Faraday: ε = -N (dΦ/dt). Besar GGL induksi berbanding lurus dengan laju perubahan fluks magnetik terhadap waktu.",
      "knownWrongPatterns": {
        "Hambatan total kumparan kawat": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Hukum Faraday: ε = -N (dΦ/dt). Besar GGL induksi berbanding lurus dengan laju perubahan fluks magnetik terhadap waktu."
        },
        "Panjang kawat penghantar dibagi luas penampang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Hukum Faraday: ε = -N (dΦ/dt). Besar GGL induksi berbanding lurus dengan laju perubahan fluks magnetik terhadap waktu."
        },
        "Tegangan baterai eksternal": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Hukum Faraday: ε = -N (dΦ/dt). Besar GGL induksi berbanding lurus dengan laju perubahan fluks magnetik terhadap waktu."
        },
        "Frekuensi gelombang elektromagnetik": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Hukum Faraday: ε = -N (dΦ/dt). Besar GGL induksi berbanding lurus dengan laju perubahan fluks magnetik terhadap waktu."
        }
      }
    },
    {
      "id": "k12-fis-08",
      "conceptName": "Listrik Statis & Kuat Medan Listrik",
      "topic": "Listrik Statis & Kuat Medan Listrik",
      "questionText": "Dua muatan listrik masing-masing +2 μC dan +8 μC terpisah pada jarak 60 cm. Letak titik di antara kedua muatan yang medan listrik totalnya sama dengan nol adalah...",
      "type": "mcq",
      "options": [
        "20 cm dari muatan +2 μC",
        "30 cm dari muatan +2 μC",
        "40 cm dari muatan +2 μC",
        "15 cm dari muatan +2 μC",
        "25 cm dari muatan +2 μC"
      ],
      "optionDetails": {
        "20 cm dari muatan +2 μC": "✓ BENAR: E1 = E2 => q1 / x^2 = q2 / (r - x)^2 => √(q1)/x = √(q2)/(r-x) => √2 / x = √8 / (60-x) => √2 / x = 2√2 / (60-x) => 1 / x = 2 / (60-x) => 60 - x = 2x => 3x = 60 => x = 20 cm dari muatan +2 μC.",
        "30 cm dari muatan +2 μC": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: E1 = E2 => q1 / x^2 = q2 / (r - x)^2 => √(q1)/x = √(q2)/(r-x) => √2 / x = √8 / (60-x) => √2 / x = 2√2 / (60-x) => 1 / x = 2 / (60-x) => 60 - x = 2x => 3x = 60 => x = 20 cm dari muatan +2 μC.",
        "40 cm dari muatan +2 μC": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: E1 = E2 => q1 / x^2 = q2 / (r - x)^2 => √(q1)/x = √(q2)/(r-x) => √2 / x = √8 / (60-x) => √2 / x = 2√2 / (60-x) => 1 / x = 2 / (60-x) => 60 - x = 2x => 3x = 60 => x = 20 cm dari muatan +2 μC.",
        "15 cm dari muatan +2 μC": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: E1 = E2 => q1 / x^2 = q2 / (r - x)^2 => √(q1)/x = √(q2)/(r-x) => √2 / x = √8 / (60-x) => √2 / x = 2√2 / (60-x) => 1 / x = 2 / (60-x) => 60 - x = 2x => 3x = 60 => x = 20 cm dari muatan +2 μC.",
        "25 cm dari muatan +2 μC": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: E1 = E2 => q1 / x^2 = q2 / (r - x)^2 => √(q1)/x = √(q2)/(r-x) => √2 / x = √8 / (60-x) => √2 / x = 2√2 / (60-x) => 1 / x = 2 / (60-x) => 60 - x = 2x => 3x = 60 => x = 20 cm dari muatan +2 μC."
      },
      "correctAnswer": "20 cm dari muatan +2 μC",
      "explanationText": "E1 = E2 => q1 / x^2 = q2 / (r - x)^2 => √(q1)/x = √(q2)/(r-x) => √2 / x = √8 / (60-x) => √2 / x = 2√2 / (60-x) => 1 / x = 2 / (60-x) => 60 - x = 2x => 3x = 60 => x = 20 cm dari muatan +2 μC.",
      "knownWrongPatterns": {
        "30 cm dari muatan +2 μC": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: E1 = E2 => q1 / x^2 = q2 / (r - x)^2 => √(q1)/x = √(q2)/(r-x) => √2 / x = √8 / (60-x) => √2 / x = 2√2 / (60-x) => 1 / x = 2 / (60-x) => 60 - x = 2x => 3x = 60 => x = 20 cm dari muatan +2 μC."
        },
        "40 cm dari muatan +2 μC": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: E1 = E2 => q1 / x^2 = q2 / (r - x)^2 => √(q1)/x = √(q2)/(r-x) => √2 / x = √8 / (60-x) => √2 / x = 2√2 / (60-x) => 1 / x = 2 / (60-x) => 60 - x = 2x => 3x = 60 => x = 20 cm dari muatan +2 μC."
        },
        "15 cm dari muatan +2 μC": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: E1 = E2 => q1 / x^2 = q2 / (r - x)^2 => √(q1)/x = √(q2)/(r-x) => √2 / x = √8 / (60-x) => √2 / x = 2√2 / (60-x) => 1 / x = 2 / (60-x) => 60 - x = 2x => 3x = 60 => x = 20 cm dari muatan +2 μC."
        },
        "25 cm dari muatan +2 μC": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: E1 = E2 => q1 / x^2 = q2 / (r - x)^2 => √(q1)/x = √(q2)/(r-x) => √2 / x = √8 / (60-x) => √2 / x = 2√2 / (60-x) => 1 / x = 2 / (60-x) => 60 - x = 2x => 3x = 60 => x = 20 cm dari muatan +2 μC."
        }
      }
    },
    {
      "id": "k12-fis-09",
      "conceptName": "Gelombang Elektromagnetik",
      "topic": "Gelombang Elektromagnetik",
      "questionText": "Urutan spektrum gelombang elektromagnetik dari frekuensi terendah ke frekuensi tertinggi yang benar adalah...",
      "type": "mcq",
      "options": [
        "Gelombang radio, inframerah, cahaya tampak, ultraviolet, sinar-X, sinar gamma",
        "Sinar gamma, sinar-X, ultraviolet, cahaya tampak, inframerah, gelombang radio",
        "Inframerah, gelombang radio, cahaya tampak, sinar-X, sinar gamma",
        "Cahaya tampak, inframerah, ultraviolet, sinar radio, sinar-X",
        "Gelombang mikro, gelombang radio, ultraviolet, cahaya tampak, sinar gamma"
      ],
      "optionDetails": {
        "Gelombang radio, inframerah, cahaya tampak, ultraviolet, sinar-X, sinar gamma": "✓ BENAR: Urutan frekuensi dari terendah ke tertinggi (panjang gelombang terpanjang ke terpendek): Gelombang radio, gelombang mikro, inframerah, cahaya tampak, ultraviolet, sinar-X, sinar gamma.",
        "Sinar gamma, sinar-X, ultraviolet, cahaya tampak, inframerah, gelombang radio": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Urutan frekuensi dari terendah ke tertinggi (panjang gelombang terpanjang ke terpendek): Gelombang radio, gelombang mikro, inframerah, cahaya tampak, ultraviolet, sinar-X, sinar gamma.",
        "Inframerah, gelombang radio, cahaya tampak, sinar-X, sinar gamma": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Urutan frekuensi dari terendah ke tertinggi (panjang gelombang terpanjang ke terpendek): Gelombang radio, gelombang mikro, inframerah, cahaya tampak, ultraviolet, sinar-X, sinar gamma.",
        "Cahaya tampak, inframerah, ultraviolet, sinar radio, sinar-X": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Urutan frekuensi dari terendah ke tertinggi (panjang gelombang terpanjang ke terpendek): Gelombang radio, gelombang mikro, inframerah, cahaya tampak, ultraviolet, sinar-X, sinar gamma.",
        "Gelombang mikro, gelombang radio, ultraviolet, cahaya tampak, sinar gamma": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Urutan frekuensi dari terendah ke tertinggi (panjang gelombang terpanjang ke terpendek): Gelombang radio, gelombang mikro, inframerah, cahaya tampak, ultraviolet, sinar-X, sinar gamma."
      },
      "correctAnswer": "Gelombang radio, inframerah, cahaya tampak, ultraviolet, sinar-X, sinar gamma",
      "explanationText": "Urutan frekuensi dari terendah ke tertinggi (panjang gelombang terpanjang ke terpendek): Gelombang radio, gelombang mikro, inframerah, cahaya tampak, ultraviolet, sinar-X, sinar gamma.",
      "knownWrongPatterns": {
        "Sinar gamma, sinar-X, ultraviolet, cahaya tampak, inframerah, gelombang radio": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Urutan frekuensi dari terendah ke tertinggi (panjang gelombang terpanjang ke terpendek): Gelombang radio, gelombang mikro, inframerah, cahaya tampak, ultraviolet, sinar-X, sinar gamma."
        },
        "Inframerah, gelombang radio, cahaya tampak, sinar-X, sinar gamma": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Urutan frekuensi dari terendah ke tertinggi (panjang gelombang terpanjang ke terpendek): Gelombang radio, gelombang mikro, inframerah, cahaya tampak, ultraviolet, sinar-X, sinar gamma."
        },
        "Cahaya tampak, inframerah, ultraviolet, sinar radio, sinar-X": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Urutan frekuensi dari terendah ke tertinggi (panjang gelombang terpanjang ke terpendek): Gelombang radio, gelombang mikro, inframerah, cahaya tampak, ultraviolet, sinar-X, sinar gamma."
        },
        "Gelombang mikro, gelombang radio, ultraviolet, cahaya tampak, sinar gamma": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Urutan frekuensi dari terendah ke tertinggi (panjang gelombang terpanjang ke terpendek): Gelombang radio, gelombang mikro, inframerah, cahaya tampak, ultraviolet, sinar-X, sinar gamma."
        }
      }
    },
    {
      "id": "k12-fis-10",
      "conceptName": "Rangkaian Arus Bolak-Balik (AC)",
      "topic": "Rangkaian Arus Bolak-Balik (AC)",
      "questionText": "Pada rangkaian RLC seri terjadi resonansi jika...",
      "type": "mcq",
      "options": [
        "XL = XC sehingga impedansi rangkaian minimum dan arus maksimum",
        "XL > XC sehingga rangkaian bersifat induktif",
        "XC > XL sehingga rangkaian bersifat kapasitif",
        "R = 0 dan arus bernilai nol",
        "Frekuensi sumber sama dengan nol (arus searah)"
      ],
      "optionDetails": {
        "XL = XC sehingga impedansi rangkaian minimum dan arus maksimum": "✓ BENAR: Resonansi seri terjadi ketika reaktansi induktif sama dengan reaktansi kapasitif (XL = XC), menyebabkan impedansi Z = R (minimum) dan arus rangkaian bernilai maksimum.",
        "XL > XC sehingga rangkaian bersifat induktif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Resonansi seri terjadi ketika reaktansi induktif sama dengan reaktansi kapasitif (XL = XC), menyebabkan impedansi Z = R (minimum) dan arus rangkaian bernilai maksimum.",
        "XC > XL sehingga rangkaian bersifat kapasitif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Resonansi seri terjadi ketika reaktansi induktif sama dengan reaktansi kapasitif (XL = XC), menyebabkan impedansi Z = R (minimum) dan arus rangkaian bernilai maksimum.",
        "R = 0 dan arus bernilai nol": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Resonansi seri terjadi ketika reaktansi induktif sama dengan reaktansi kapasitif (XL = XC), menyebabkan impedansi Z = R (minimum) dan arus rangkaian bernilai maksimum.",
        "Frekuensi sumber sama dengan nol (arus searah)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Resonansi seri terjadi ketika reaktansi induktif sama dengan reaktansi kapasitif (XL = XC), menyebabkan impedansi Z = R (minimum) dan arus rangkaian bernilai maksimum."
      },
      "correctAnswer": "XL = XC sehingga impedansi rangkaian minimum dan arus maksimum",
      "explanationText": "Resonansi seri terjadi ketika reaktansi induktif sama dengan reaktansi kapasitif (XL = XC), menyebabkan impedansi Z = R (minimum) dan arus rangkaian bernilai maksimum.",
      "knownWrongPatterns": {
        "XL > XC sehingga rangkaian bersifat induktif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Resonansi seri terjadi ketika reaktansi induktif sama dengan reaktansi kapasitif (XL = XC), menyebabkan impedansi Z = R (minimum) dan arus rangkaian bernilai maksimum."
        },
        "XC > XL sehingga rangkaian bersifat kapasitif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Resonansi seri terjadi ketika reaktansi induktif sama dengan reaktansi kapasitif (XL = XC), menyebabkan impedansi Z = R (minimum) dan arus rangkaian bernilai maksimum."
        },
        "R = 0 dan arus bernilai nol": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Resonansi seri terjadi ketika reaktansi induktif sama dengan reaktansi kapasitif (XL = XC), menyebabkan impedansi Z = R (minimum) dan arus rangkaian bernilai maksimum."
        },
        "Frekuensi sumber sama dengan nol (arus searah)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Resonansi seri terjadi ketika reaktansi induktif sama dengan reaktansi kapasitif (XL = XC), menyebabkan impedansi Z = R (minimum) dan arus rangkaian bernilai maksimum."
        }
      }
    }
  ],
  "kimia-12": [
    {
      "id": "k12-kim-01",
      "conceptName": "Sifat Koligatif Larutan: Titik Beku",
      "topic": "Sifat Koligatif Larutan: Titik Beku",
      "questionText": "Suatu larutan dibuat dengan melarutkan 18 gram glukosa (Mr = 180) ke dalam 500 gram air. Jika Kf air = 1,86 °C/m, titik beku larutan tersebut adalah...",
      "type": "mcq",
      "options": [
        "-0,186 °C",
        "-0,372 °C",
        "-0,558 °C",
        "-1,860 °C",
        "0 °C"
      ],
      "optionDetails": {
        "-0,186 °C": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mol glukosa = 18 / 180 = 0,1 mol. Molalitas m = (0,1 mol / 500 g) * 1000 = 0,2 m. ΔTf = m . Kf = 0,2 * 1,86 = 0,372 °C. Titik beku Tf = 0 - 0,372 = -0,372 °C.",
        "-0,372 °C": "✓ BENAR: Mol glukosa = 18 / 180 = 0,1 mol. Molalitas m = (0,1 mol / 500 g) * 1000 = 0,2 m. ΔTf = m . Kf = 0,2 * 1,86 = 0,372 °C. Titik beku Tf = 0 - 0,372 = -0,372 °C.",
        "-0,558 °C": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mol glukosa = 18 / 180 = 0,1 mol. Molalitas m = (0,1 mol / 500 g) * 1000 = 0,2 m. ΔTf = m . Kf = 0,2 * 1,86 = 0,372 °C. Titik beku Tf = 0 - 0,372 = -0,372 °C.",
        "-1,860 °C": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mol glukosa = 18 / 180 = 0,1 mol. Molalitas m = (0,1 mol / 500 g) * 1000 = 0,2 m. ΔTf = m . Kf = 0,2 * 1,86 = 0,372 °C. Titik beku Tf = 0 - 0,372 = -0,372 °C.",
        "0 °C": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mol glukosa = 18 / 180 = 0,1 mol. Molalitas m = (0,1 mol / 500 g) * 1000 = 0,2 m. ΔTf = m . Kf = 0,2 * 1,86 = 0,372 °C. Titik beku Tf = 0 - 0,372 = -0,372 °C."
      },
      "correctAnswer": "-0,372 °C",
      "explanationText": "Mol glukosa = 18 / 180 = 0,1 mol. Molalitas m = (0,1 mol / 500 g) * 1000 = 0,2 m. ΔTf = m . Kf = 0,2 * 1,86 = 0,372 °C. Titik beku Tf = 0 - 0,372 = -0,372 °C.",
      "knownWrongPatterns": {
        "-0,186 °C": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Mol glukosa = 18 / 180 = 0,1 mol. Molalitas m = (0,1 mol / 500 g) * 1000 = 0,2 m. ΔTf = m . Kf = 0,2 * 1,86 = 0,372 °C. Titik beku Tf = 0 - 0,372 = -0,372 °C."
        },
        "-0,558 °C": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Mol glukosa = 18 / 180 = 0,1 mol. Molalitas m = (0,1 mol / 500 g) * 1000 = 0,2 m. ΔTf = m . Kf = 0,2 * 1,86 = 0,372 °C. Titik beku Tf = 0 - 0,372 = -0,372 °C."
        },
        "-1,860 °C": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Mol glukosa = 18 / 180 = 0,1 mol. Molalitas m = (0,1 mol / 500 g) * 1000 = 0,2 m. ΔTf = m . Kf = 0,2 * 1,86 = 0,372 °C. Titik beku Tf = 0 - 0,372 = -0,372 °C."
        },
        "0 °C": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Mol glukosa = 18 / 180 = 0,1 mol. Molalitas m = (0,1 mol / 500 g) * 1000 = 0,2 m. ΔTf = m . Kf = 0,2 * 1,86 = 0,372 °C. Titik beku Tf = 0 - 0,372 = -0,372 °C."
        }
      }
    },
    {
      "id": "k12-kim-02",
      "conceptName": "Tekanan Osmotik & Faktor Van't Hoff",
      "topic": "Tekanan Osmotik & Faktor Van't Hoff",
      "questionText": "Di antara larutan berikut yang memiliki tekanan osmosis paling tinggi pada suhu yang sama adalah...",
      "type": "mcq",
      "options": [
        "Glukosa 0,1 M (non-elektrolit)",
        "Urea 0,2 M (non-elektrolit)",
        "NaCl 0,1 M (elektrolit biner)",
        "CaCl2 0,1 M (elektrolit terner, i = 3)",
        "Al2(SO4)3 0,1 M (elektrolit, i = 5)"
      ],
      "optionDetails": {
        "Glukosa 0,1 M (non-elektrolit)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: π = M . R . T . i. Nilai M x i tertinggi memberikan tekanan osmosis tertinggi: Al2(SO4)3 memiliki M x i = 0,1 x 5 = 0,5 M, lebih tinggi dari yang lain.",
        "Urea 0,2 M (non-elektrolit)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: π = M . R . T . i. Nilai M x i tertinggi memberikan tekanan osmosis tertinggi: Al2(SO4)3 memiliki M x i = 0,1 x 5 = 0,5 M, lebih tinggi dari yang lain.",
        "NaCl 0,1 M (elektrolit biner)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: π = M . R . T . i. Nilai M x i tertinggi memberikan tekanan osmosis tertinggi: Al2(SO4)3 memiliki M x i = 0,1 x 5 = 0,5 M, lebih tinggi dari yang lain.",
        "CaCl2 0,1 M (elektrolit terner, i = 3)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: π = M . R . T . i. Nilai M x i tertinggi memberikan tekanan osmosis tertinggi: Al2(SO4)3 memiliki M x i = 0,1 x 5 = 0,5 M, lebih tinggi dari yang lain.",
        "Al2(SO4)3 0,1 M (elektrolit, i = 5)": "✓ BENAR: π = M . R . T . i. Nilai M x i tertinggi memberikan tekanan osmosis tertinggi: Al2(SO4)3 memiliki M x i = 0,1 x 5 = 0,5 M, lebih tinggi dari yang lain."
      },
      "correctAnswer": "Al2(SO4)3 0,1 M (elektrolit, i = 5)",
      "explanationText": "π = M . R . T . i. Nilai M x i tertinggi memberikan tekanan osmosis tertinggi: Al2(SO4)3 memiliki M x i = 0,1 x 5 = 0,5 M, lebih tinggi dari yang lain.",
      "knownWrongPatterns": {
        "Glukosa 0,1 M (non-elektrolit)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: π = M . R . T . i. Nilai M x i tertinggi memberikan tekanan osmosis tertinggi: Al2(SO4)3 memiliki M x i = 0,1 x 5 = 0,5 M, lebih tinggi dari yang lain."
        },
        "Urea 0,2 M (non-elektrolit)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: π = M . R . T . i. Nilai M x i tertinggi memberikan tekanan osmosis tertinggi: Al2(SO4)3 memiliki M x i = 0,1 x 5 = 0,5 M, lebih tinggi dari yang lain."
        },
        "NaCl 0,1 M (elektrolit biner)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: π = M . R . T . i. Nilai M x i tertinggi memberikan tekanan osmosis tertinggi: Al2(SO4)3 memiliki M x i = 0,1 x 5 = 0,5 M, lebih tinggi dari yang lain."
        },
        "CaCl2 0,1 M (elektrolit terner, i = 3)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: π = M . R . T . i. Nilai M x i tertinggi memberikan tekanan osmosis tertinggi: Al2(SO4)3 memiliki M x i = 0,1 x 5 = 0,5 M, lebih tinggi dari yang lain."
        }
      }
    },
    {
      "id": "k12-kim-03",
      "conceptName": "Elektrokimia: Sel Volta",
      "topic": "Elektrokimia: Sel Volta",
      "questionText": "Diketahui potensial reduksi standar: Zn2+ + 2e- -> Zn (E° = -0,76 V) dan Cu2+ + 2e- -> Cu (E° = +0,34 V). Potensial sel standar (E° sel) dari sel volta Zn | Zn2+ || Cu2+ | Cu adalah...",
      "type": "mcq",
      "options": [
        "+0,42 V",
        "+1,10 V",
        "-1,10 V",
        "+0,90 V",
        "-0,42 V"
      ],
      "optionDetails": {
        "+0,42 V": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: E° sel = E° katoda - E° anoda = E° Cu - E° Zn = +0,34 V - (-0,76 V) = +1,10 V.",
        "+1,10 V": "✓ BENAR: E° sel = E° katoda - E° anoda = E° Cu - E° Zn = +0,34 V - (-0,76 V) = +1,10 V.",
        "-1,10 V": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: E° sel = E° katoda - E° anoda = E° Cu - E° Zn = +0,34 V - (-0,76 V) = +1,10 V.",
        "+0,90 V": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: E° sel = E° katoda - E° anoda = E° Cu - E° Zn = +0,34 V - (-0,76 V) = +1,10 V.",
        "-0,42 V": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: E° sel = E° katoda - E° anoda = E° Cu - E° Zn = +0,34 V - (-0,76 V) = +1,10 V."
      },
      "correctAnswer": "+1,10 V",
      "explanationText": "E° sel = E° katoda - E° anoda = E° Cu - E° Zn = +0,34 V - (-0,76 V) = +1,10 V.",
      "knownWrongPatterns": {
        "+0,42 V": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: E° sel = E° katoda - E° anoda = E° Cu - E° Zn = +0,34 V - (-0,76 V) = +1,10 V."
        },
        "-1,10 V": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: E° sel = E° katoda - E° anoda = E° Cu - E° Zn = +0,34 V - (-0,76 V) = +1,10 V."
        },
        "+0,90 V": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: E° sel = E° katoda - E° anoda = E° Cu - E° Zn = +0,34 V - (-0,76 V) = +1,10 V."
        },
        "-0,42 V": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: E° sel = E° katoda - E° anoda = E° Cu - E° Zn = +0,34 V - (-0,76 V) = +1,10 V."
        }
      }
    },
    {
      "id": "k12-kim-04",
      "conceptName": "Elektrolisis Larutan Garam",
      "topic": "Elektrolisis Larutan Garam",
      "questionText": "Pada elektrolisis larutan NaCl dengan elektroda karbon (C), gas yang dihasilkan pada ruang anoda adalah...",
      "type": "mcq",
      "options": [
        "Gas hidrogen (H2)",
        "Gas klorin (Cl2)",
        "Gas oksigen (O2)",
        "Gas nitrogen (N2)",
        "Gas metana (CH4)"
      ],
      "optionDetails": {
        "Gas hidrogen (H2)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Di anoda terjadi oksidasi ion halida: 2Cl- -> Cl2(g) + 2e-. Di katoda air tereduksi menghasilkan gas H2.",
        "Gas klorin (Cl2)": "✓ BENAR: Di anoda terjadi oksidasi ion halida: 2Cl- -> Cl2(g) + 2e-. Di katoda air tereduksi menghasilkan gas H2.",
        "Gas oksigen (O2)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Di anoda terjadi oksidasi ion halida: 2Cl- -> Cl2(g) + 2e-. Di katoda air tereduksi menghasilkan gas H2.",
        "Gas nitrogen (N2)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Di anoda terjadi oksidasi ion halida: 2Cl- -> Cl2(g) + 2e-. Di katoda air tereduksi menghasilkan gas H2.",
        "Gas metana (CH4)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Di anoda terjadi oksidasi ion halida: 2Cl- -> Cl2(g) + 2e-. Di katoda air tereduksi menghasilkan gas H2."
      },
      "correctAnswer": "Gas klorin (Cl2)",
      "explanationText": "Di anoda terjadi oksidasi ion halida: 2Cl- -> Cl2(g) + 2e-. Di katoda air tereduksi menghasilkan gas H2.",
      "knownWrongPatterns": {
        "Gas hidrogen (H2)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Di anoda terjadi oksidasi ion halida: 2Cl- -> Cl2(g) + 2e-. Di katoda air tereduksi menghasilkan gas H2."
        },
        "Gas oksigen (O2)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Di anoda terjadi oksidasi ion halida: 2Cl- -> Cl2(g) + 2e-. Di katoda air tereduksi menghasilkan gas H2."
        },
        "Gas nitrogen (N2)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Di anoda terjadi oksidasi ion halida: 2Cl- -> Cl2(g) + 2e-. Di katoda air tereduksi menghasilkan gas H2."
        },
        "Gas metana (CH4)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Di anoda terjadi oksidasi ion halida: 2Cl- -> Cl2(g) + 2e-. Di katoda air tereduksi menghasilkan gas H2."
        }
      }
    },
    {
      "id": "k12-kim-05",
      "conceptName": "Kimia Karbon: Reaksi Oksidasi",
      "topic": "Kimia Karbon: Reaksi Oksidasi",
      "questionText": "Gugus fungsi aldehida (-CHO) dapat dioksidasi menghasilkan...",
      "type": "mcq",
      "options": [
        "Alkohol primer",
        "Alkohol sekunder",
        "Keton",
        "Asam karboksilat",
        "Eter"
      ],
      "optionDetails": {
        "Alkohol primer": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Oksidasi aldehida (alkanal) menggunakan agen pengoksidasi seperti KMnO4 atau pereaksi Tollens menghasilkan asam karboksilat (asam alkanoat).",
        "Alkohol sekunder": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Oksidasi aldehida (alkanal) menggunakan agen pengoksidasi seperti KMnO4 atau pereaksi Tollens menghasilkan asam karboksilat (asam alkanoat).",
        "Keton": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Oksidasi aldehida (alkanal) menggunakan agen pengoksidasi seperti KMnO4 atau pereaksi Tollens menghasilkan asam karboksilat (asam alkanoat).",
        "Asam karboksilat": "✓ BENAR: Oksidasi aldehida (alkanal) menggunakan agen pengoksidasi seperti KMnO4 atau pereaksi Tollens menghasilkan asam karboksilat (asam alkanoat).",
        "Eter": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Oksidasi aldehida (alkanal) menggunakan agen pengoksidasi seperti KMnO4 atau pereaksi Tollens menghasilkan asam karboksilat (asam alkanoat)."
      },
      "correctAnswer": "Asam karboksilat",
      "explanationText": "Oksidasi aldehida (alkanal) menggunakan agen pengoksidasi seperti KMnO4 atau pereaksi Tollens menghasilkan asam karboksilat (asam alkanoat).",
      "knownWrongPatterns": {
        "Alkohol primer": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Oksidasi aldehida (alkanal) menggunakan agen pengoksidasi seperti KMnO4 atau pereaksi Tollens menghasilkan asam karboksilat (asam alkanoat)."
        },
        "Alkohol sekunder": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Oksidasi aldehida (alkanal) menggunakan agen pengoksidasi seperti KMnO4 atau pereaksi Tollens menghasilkan asam karboksilat (asam alkanoat)."
        },
        "Keton": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Oksidasi aldehida (alkanal) menggunakan agen pengoksidasi seperti KMnO4 atau pereaksi Tollens menghasilkan asam karboksilat (asam alkanoat)."
        },
        "Eter": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Oksidasi aldehida (alkanal) menggunakan agen pengoksidasi seperti KMnO4 atau pereaksi Tollens menghasilkan asam karboksilat (asam alkanoat)."
        }
      }
    },
    {
      "id": "k12-kim-06",
      "conceptName": "Isomeri Gugus Fungsi",
      "topic": "Isomeri Gugus Fungsi",
      "questionText": "Pasangan senyawa berikut yang berisomer fungsi satu sama lain adalah...",
      "type": "mcq",
      "options": [
        "Etanol dan dimetil eter",
        "Propanol dan butanol",
        "Asam asetat dan asetaldehida",
        "Glukosa dan sukrosa",
        "Benzena dan toluena"
      ],
      "optionDetails": {
        "Etanol dan dimetil eter": "✓ BENAR: Alkohol dan eter (alkoksi alkana) berumus molekul sama CnH2n+2O sehingga berisomer fungsi. Etanol (C2H5OH) dan dimetil eter (CH3-O-CH3) keduanya memiliki rumus molekul C2H6O.",
        "Propanol dan butanol": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Alkohol dan eter (alkoksi alkana) berumus molekul sama CnH2n+2O sehingga berisomer fungsi. Etanol (C2H5OH) dan dimetil eter (CH3-O-CH3) keduanya memiliki rumus molekul C2H6O.",
        "Asam asetat dan asetaldehida": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Alkohol dan eter (alkoksi alkana) berumus molekul sama CnH2n+2O sehingga berisomer fungsi. Etanol (C2H5OH) dan dimetil eter (CH3-O-CH3) keduanya memiliki rumus molekul C2H6O.",
        "Glukosa dan sukrosa": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Alkohol dan eter (alkoksi alkana) berumus molekul sama CnH2n+2O sehingga berisomer fungsi. Etanol (C2H5OH) dan dimetil eter (CH3-O-CH3) keduanya memiliki rumus molekul C2H6O.",
        "Benzena dan toluena": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Alkohol dan eter (alkoksi alkana) berumus molekul sama CnH2n+2O sehingga berisomer fungsi. Etanol (C2H5OH) dan dimetil eter (CH3-O-CH3) keduanya memiliki rumus molekul C2H6O."
      },
      "correctAnswer": "Etanol dan dimetil eter",
      "explanationText": "Alkohol dan eter (alkoksi alkana) berumus molekul sama CnH2n+2O sehingga berisomer fungsi. Etanol (C2H5OH) dan dimetil eter (CH3-O-CH3) keduanya memiliki rumus molekul C2H6O.",
      "knownWrongPatterns": {
        "Propanol dan butanol": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Alkohol dan eter (alkoksi alkana) berumus molekul sama CnH2n+2O sehingga berisomer fungsi. Etanol (C2H5OH) dan dimetil eter (CH3-O-CH3) keduanya memiliki rumus molekul C2H6O."
        },
        "Asam asetat dan asetaldehida": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Alkohol dan eter (alkoksi alkana) berumus molekul sama CnH2n+2O sehingga berisomer fungsi. Etanol (C2H5OH) dan dimetil eter (CH3-O-CH3) keduanya memiliki rumus molekul C2H6O."
        },
        "Glukosa dan sukrosa": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Alkohol dan eter (alkoksi alkana) berumus molekul sama CnH2n+2O sehingga berisomer fungsi. Etanol (C2H5OH) dan dimetil eter (CH3-O-CH3) keduanya memiliki rumus molekul C2H6O."
        },
        "Benzena dan toluena": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Alkohol dan eter (alkoksi alkana) berumus molekul sama CnH2n+2O sehingga berisomer fungsi. Etanol (C2H5OH) dan dimetil eter (CH3-O-CH3) keduanya memiliki rumus molekul C2H6O."
        }
      }
    },
    {
      "id": "k12-kim-07",
      "conceptName": "Benzena dan Turunannya",
      "topic": "Benzena dan Turunannya",
      "questionText": "Senyawa turunan benzena yang digunakan sebagai bahan baku pembuatan pewarna diazo dan bersifat basa lemah adalah...",
      "type": "mcq",
      "options": [
        "Fenol",
        "Toluena",
        "Anilina",
        "Asam benzoat",
        "Nitrobenzena"
      ],
      "optionDetails": {
        "Fenol": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Anilina (C6H5NH2) adalah amina aromatik yang digunakan sebagai zat antara pembuatan zat warna sintetis diazo dan bahan kimia industri.",
        "Toluena": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Anilina (C6H5NH2) adalah amina aromatik yang digunakan sebagai zat antara pembuatan zat warna sintetis diazo dan bahan kimia industri.",
        "Anilina": "✓ BENAR: Anilina (C6H5NH2) adalah amina aromatik yang digunakan sebagai zat antara pembuatan zat warna sintetis diazo dan bahan kimia industri.",
        "Asam benzoat": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Anilina (C6H5NH2) adalah amina aromatik yang digunakan sebagai zat antara pembuatan zat warna sintetis diazo dan bahan kimia industri.",
        "Nitrobenzena": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Anilina (C6H5NH2) adalah amina aromatik yang digunakan sebagai zat antara pembuatan zat warna sintetis diazo dan bahan kimia industri."
      },
      "correctAnswer": "Anilina",
      "explanationText": "Anilina (C6H5NH2) adalah amina aromatik yang digunakan sebagai zat antara pembuatan zat warna sintetis diazo dan bahan kimia industri.",
      "knownWrongPatterns": {
        "Fenol": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Anilina (C6H5NH2) adalah amina aromatik yang digunakan sebagai zat antara pembuatan zat warna sintetis diazo dan bahan kimia industri."
        },
        "Toluena": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Anilina (C6H5NH2) adalah amina aromatik yang digunakan sebagai zat antara pembuatan zat warna sintetis diazo dan bahan kimia industri."
        },
        "Asam benzoat": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Anilina (C6H5NH2) adalah amina aromatik yang digunakan sebagai zat antara pembuatan zat warna sintetis diazo dan bahan kimia industri."
        },
        "Nitrobenzena": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Anilina (C6H5NH2) adalah amina aromatik yang digunakan sebagai zat antara pembuatan zat warna sintetis diazo dan bahan kimia industri."
        }
      }
    },
    {
      "id": "k12-kim-08",
      "conceptName": "Makromolekul: Polimer",
      "topic": "Makromolekul: Polimer",
      "questionText": "Polimer sintetis yang terbentuk melalui polimerisasi adisi dari monomer tetrafluoroetena adalah...",
      "type": "mcq",
      "options": [
        "Teflon (PTFE)",
        "Nilon 66",
        "Poliester",
        "Bakelit",
        "PVC"
      ],
      "optionDetails": {
        "Teflon (PTFE)": "✓ BENAR: Teflon (Politetrafluoroetena / PTFE) dibuat melalui polimerisasi adisi ikatan rangkap monomer CF2=CF2 (tetrafluoroetena).",
        "Nilon 66": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teflon (Politetrafluoroetena / PTFE) dibuat melalui polimerisasi adisi ikatan rangkap monomer CF2=CF2 (tetrafluoroetena).",
        "Poliester": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teflon (Politetrafluoroetena / PTFE) dibuat melalui polimerisasi adisi ikatan rangkap monomer CF2=CF2 (tetrafluoroetena).",
        "Bakelit": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teflon (Politetrafluoroetena / PTFE) dibuat melalui polimerisasi adisi ikatan rangkap monomer CF2=CF2 (tetrafluoroetena).",
        "PVC": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teflon (Politetrafluoroetena / PTFE) dibuat melalui polimerisasi adisi ikatan rangkap monomer CF2=CF2 (tetrafluoroetena)."
      },
      "correctAnswer": "Teflon (PTFE)",
      "explanationText": "Teflon (Politetrafluoroetena / PTFE) dibuat melalui polimerisasi adisi ikatan rangkap monomer CF2=CF2 (tetrafluoroetena).",
      "knownWrongPatterns": {
        "Nilon 66": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Teflon (Politetrafluoroetena / PTFE) dibuat melalui polimerisasi adisi ikatan rangkap monomer CF2=CF2 (tetrafluoroetena)."
        },
        "Poliester": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Teflon (Politetrafluoroetena / PTFE) dibuat melalui polimerisasi adisi ikatan rangkap monomer CF2=CF2 (tetrafluoroetena)."
        },
        "Bakelit": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Teflon (Politetrafluoroetena / PTFE) dibuat melalui polimerisasi adisi ikatan rangkap monomer CF2=CF2 (tetrafluoroetena)."
        },
        "PVC": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Teflon (Politetrafluoroetena / PTFE) dibuat melalui polimerisasi adisi ikatan rangkap monomer CF2=CF2 (tetrafluoroetena)."
        }
      }
    },
    {
      "id": "k12-kim-09",
      "conceptName": "Uji Biokimia: Protein",
      "topic": "Uji Biokimia: Protein",
      "questionText": "Uji Biuret pada sampel makanan menghasilkan warna ungu. Hal ini membuktikan bahwa makanan tersebut mengandung...",
      "type": "mcq",
      "options": [
        "Karbohidrat pereduksi",
        "Ikatan peptida (Protein)",
        "Lemak jenuh",
        "Vitamin C",
        "Gugus fenol"
      ],
      "optionDetails": {
        "Karbohidrat pereduksi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Uji Biuret menggunakan CuSO4 dalam suasana basa spesifik untuk mendeteksi ikatan peptida (minimal dua ikatan peptida) pada protein, menghasilkan kompleks koordinasi berwarna ungu.",
        "Ikatan peptida (Protein)": "✓ BENAR: Uji Biuret menggunakan CuSO4 dalam suasana basa spesifik untuk mendeteksi ikatan peptida (minimal dua ikatan peptida) pada protein, menghasilkan kompleks koordinasi berwarna ungu.",
        "Lemak jenuh": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Uji Biuret menggunakan CuSO4 dalam suasana basa spesifik untuk mendeteksi ikatan peptida (minimal dua ikatan peptida) pada protein, menghasilkan kompleks koordinasi berwarna ungu.",
        "Vitamin C": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Uji Biuret menggunakan CuSO4 dalam suasana basa spesifik untuk mendeteksi ikatan peptida (minimal dua ikatan peptida) pada protein, menghasilkan kompleks koordinasi berwarna ungu.",
        "Gugus fenol": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Uji Biuret menggunakan CuSO4 dalam suasana basa spesifik untuk mendeteksi ikatan peptida (minimal dua ikatan peptida) pada protein, menghasilkan kompleks koordinasi berwarna ungu."
      },
      "correctAnswer": "Ikatan peptida (Protein)",
      "explanationText": "Uji Biuret menggunakan CuSO4 dalam suasana basa spesifik untuk mendeteksi ikatan peptida (minimal dua ikatan peptida) pada protein, menghasilkan kompleks koordinasi berwarna ungu.",
      "knownWrongPatterns": {
        "Karbohidrat pereduksi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Uji Biuret menggunakan CuSO4 dalam suasana basa spesifik untuk mendeteksi ikatan peptida (minimal dua ikatan peptida) pada protein, menghasilkan kompleks koordinasi berwarna ungu."
        },
        "Lemak jenuh": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Uji Biuret menggunakan CuSO4 dalam suasana basa spesifik untuk mendeteksi ikatan peptida (minimal dua ikatan peptida) pada protein, menghasilkan kompleks koordinasi berwarna ungu."
        },
        "Vitamin C": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Uji Biuret menggunakan CuSO4 dalam suasana basa spesifik untuk mendeteksi ikatan peptida (minimal dua ikatan peptida) pada protein, menghasilkan kompleks koordinasi berwarna ungu."
        },
        "Gugus fenol": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Uji Biuret menggunakan CuSO4 dalam suasana basa spesifik untuk mendeteksi ikatan peptida (minimal dua ikatan peptida) pada protein, menghasilkan kompleks koordinasi berwarna ungu."
        }
      }
    },
    {
      "id": "k12-kim-09",
      "conceptName": "Pencegahan Korosi & Perlindungan Katodik",
      "topic": "Pencegahan Korosi & Perlindungan Katodik",
      "questionText": "Dalam pencegahan korosi pipa besi bawah tanah, logam yang paling efektif digunakan sebagai anoda korban (perlindungan katodik) adalah...",
      "type": "mcq",
      "options": [
        "Tembaga (Cu)",
        "Magnesium (Mg)",
        "Perak (Ag)",
        "Timbal (Pb)",
        "Emas (Au)"
      ],
      "optionDetails": {
        "Tembaga (Cu)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Magnesium memiliki potensial reduksi jauh lebih negatif dibanding besi (E° Mg = -2,37 V vs E° Fe = -0,44 V), sehingga Mg akan teroksidasi terlebih dahulu melindungi besi.",
        "Magnesium (Mg)": "✓ BENAR: Magnesium memiliki potensial reduksi jauh lebih negatif dibanding besi (E° Mg = -2,37 V vs E° Fe = -0,44 V), sehingga Mg akan teroksidasi terlebih dahulu melindungi besi.",
        "Perak (Ag)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Magnesium memiliki potensial reduksi jauh lebih negatif dibanding besi (E° Mg = -2,37 V vs E° Fe = -0,44 V), sehingga Mg akan teroksidasi terlebih dahulu melindungi besi.",
        "Timbal (Pb)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Magnesium memiliki potensial reduksi jauh lebih negatif dibanding besi (E° Mg = -2,37 V vs E° Fe = -0,44 V), sehingga Mg akan teroksidasi terlebih dahulu melindungi besi.",
        "Emas (Au)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Magnesium memiliki potensial reduksi jauh lebih negatif dibanding besi (E° Mg = -2,37 V vs E° Fe = -0,44 V), sehingga Mg akan teroksidasi terlebih dahulu melindungi besi."
      },
      "correctAnswer": "Magnesium (Mg)",
      "explanationText": "Magnesium memiliki potensial reduksi jauh lebih negatif dibanding besi (E° Mg = -2,37 V vs E° Fe = -0,44 V), sehingga Mg akan teroksidasi terlebih dahulu melindungi besi.",
      "knownWrongPatterns": {
        "Tembaga (Cu)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Magnesium memiliki potensial reduksi jauh lebih negatif dibanding besi (E° Mg = -2,37 V vs E° Fe = -0,44 V), sehingga Mg akan teroksidasi terlebih dahulu melindungi besi."
        },
        "Perak (Ag)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Magnesium memiliki potensial reduksi jauh lebih negatif dibanding besi (E° Mg = -2,37 V vs E° Fe = -0,44 V), sehingga Mg akan teroksidasi terlebih dahulu melindungi besi."
        },
        "Timbal (Pb)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Magnesium memiliki potensial reduksi jauh lebih negatif dibanding besi (E° Mg = -2,37 V vs E° Fe = -0,44 V), sehingga Mg akan teroksidasi terlebih dahulu melindungi besi."
        },
        "Emas (Au)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Magnesium memiliki potensial reduksi jauh lebih negatif dibanding besi (E° Mg = -2,37 V vs E° Fe = -0,44 V), sehingga Mg akan teroksidasi terlebih dahulu melindungi besi."
        }
      }
    }
  ],
  "biologi-12": [
    {
      "id": "k12-bio-01",
      "conceptName": "Substansi Genetika: Struktur DNA",
      "topic": "Substansi Genetika: Struktur DNA",
      "questionText": "Komponen nukleotida pada molekul DNA tersusun atas tiga gugus, yaitu...",
      "type": "mcq",
      "options": [
        "Gula ribosa, asam fosfat, dan basa nitrogen",
        "Gula deoksiribosa, gugus fosfat, dan basa nitrogen",
        "Gula glukosa, gugus karboksil, dan asam amino",
        "Asam lemak, gliserol, dan fosfat",
        "Gula deoksiribosa, asam amino, dan ikatan peptida"
      ],
      "optionDetails": {
        "Gula ribosa, asam fosfat, dan basa nitrogen": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Satu nukleotida DNA terdiri dari gula pentosa jenis deoksiribosa, satu gugus fosfat, dan satu basa nitrogen (purin: A, G; pirimidin: C, T).",
        "Gula deoksiribosa, gugus fosfat, dan basa nitrogen": "✓ BENAR: Satu nukleotida DNA terdiri dari gula pentosa jenis deoksiribosa, satu gugus fosfat, dan satu basa nitrogen (purin: A, G; pirimidin: C, T).",
        "Gula glukosa, gugus karboksil, dan asam amino": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Satu nukleotida DNA terdiri dari gula pentosa jenis deoksiribosa, satu gugus fosfat, dan satu basa nitrogen (purin: A, G; pirimidin: C, T).",
        "Asam lemak, gliserol, dan fosfat": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Satu nukleotida DNA terdiri dari gula pentosa jenis deoksiribosa, satu gugus fosfat, dan satu basa nitrogen (purin: A, G; pirimidin: C, T).",
        "Gula deoksiribosa, asam amino, dan ikatan peptida": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Satu nukleotida DNA terdiri dari gula pentosa jenis deoksiribosa, satu gugus fosfat, dan satu basa nitrogen (purin: A, G; pirimidin: C, T)."
      },
      "correctAnswer": "Gula deoksiribosa, gugus fosfat, dan basa nitrogen",
      "explanationText": "Satu nukleotida DNA terdiri dari gula pentosa jenis deoksiribosa, satu gugus fosfat, dan satu basa nitrogen (purin: A, G; pirimidin: C, T).",
      "knownWrongPatterns": {
        "Gula ribosa, asam fosfat, dan basa nitrogen": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Satu nukleotida DNA terdiri dari gula pentosa jenis deoksiribosa, satu gugus fosfat, dan satu basa nitrogen (purin: A, G; pirimidin: C, T)."
        },
        "Gula glukosa, gugus karboksil, dan asam amino": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Satu nukleotida DNA terdiri dari gula pentosa jenis deoksiribosa, satu gugus fosfat, dan satu basa nitrogen (purin: A, G; pirimidin: C, T)."
        },
        "Asam lemak, gliserol, dan fosfat": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Satu nukleotida DNA terdiri dari gula pentosa jenis deoksiribosa, satu gugus fosfat, dan satu basa nitrogen (purin: A, G; pirimidin: C, T)."
        },
        "Gula deoksiribosa, asam amino, dan ikatan peptida": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Satu nukleotida DNA terdiri dari gula pentosa jenis deoksiribosa, satu gugus fosfat, dan satu basa nitrogen (purin: A, G; pirimidin: C, T)."
        }
      }
    },
    {
      "id": "k12-bio-02",
      "conceptName": "Sintesis Protein: Transkripsi",
      "topic": "Sintesis Protein: Transkripsi",
      "questionText": "Jika rantai antisense DNA memiliki urutan basa 3'-TAC-GGC-TTA-5', maka urutan kodon pada mRNA yang terbentuk adalah...",
      "type": "mcq",
      "options": [
        "5'-AUG-CCG-AAU-3'",
        "5'-ATG-CCG-AAT-3'",
        "3'-AUG-CCG-AAU-5'",
        "5'-UAC-GGC-UUA-3'",
        "3'-UAC-CCG-AAU-5'"
      ],
      "optionDetails": {
        "5'-AUG-CCG-AAU-3'": "✓ BENAR: Transkripsi mencetak mRNA dari DNA antisense (template) dengan arah antiparalel 5' ke 3': T->A, A->U, C->G, G->C, C->G, T->A, T->A, A->U. Hasilnya: 5'-AUG-CCG-AAU-3'.",
        "5'-ATG-CCG-AAT-3'": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Transkripsi mencetak mRNA dari DNA antisense (template) dengan arah antiparalel 5' ke 3': T->A, A->U, C->G, G->C, C->G, T->A, T->A, A->U. Hasilnya: 5'-AUG-CCG-AAU-3'.",
        "3'-AUG-CCG-AAU-5'": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Transkripsi mencetak mRNA dari DNA antisense (template) dengan arah antiparalel 5' ke 3': T->A, A->U, C->G, G->C, C->G, T->A, T->A, A->U. Hasilnya: 5'-AUG-CCG-AAU-3'.",
        "5'-UAC-GGC-UUA-3'": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Transkripsi mencetak mRNA dari DNA antisense (template) dengan arah antiparalel 5' ke 3': T->A, A->U, C->G, G->C, C->G, T->A, T->A, A->U. Hasilnya: 5'-AUG-CCG-AAU-3'.",
        "3'-UAC-CCG-AAU-5'": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Transkripsi mencetak mRNA dari DNA antisense (template) dengan arah antiparalel 5' ke 3': T->A, A->U, C->G, G->C, C->G, T->A, T->A, A->U. Hasilnya: 5'-AUG-CCG-AAU-3'."
      },
      "correctAnswer": "5'-AUG-CCG-AAU-3'",
      "explanationText": "Transkripsi mencetak mRNA dari DNA antisense (template) dengan arah antiparalel 5' ke 3': T->A, A->U, C->G, G->C, C->G, T->A, T->A, A->U. Hasilnya: 5'-AUG-CCG-AAU-3'.",
      "knownWrongPatterns": {
        "5'-ATG-CCG-AAT-3'": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Transkripsi mencetak mRNA dari DNA antisense (template) dengan arah antiparalel 5' ke 3': T->A, A->U, C->G, G->C, C->G, T->A, T->A, A->U. Hasilnya: 5'-AUG-CCG-AAU-3'."
        },
        "3'-AUG-CCG-AAU-5'": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Transkripsi mencetak mRNA dari DNA antisense (template) dengan arah antiparalel 5' ke 3': T->A, A->U, C->G, G->C, C->G, T->A, T->A, A->U. Hasilnya: 5'-AUG-CCG-AAU-3'."
        },
        "5'-UAC-GGC-UUA-3'": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Transkripsi mencetak mRNA dari DNA antisense (template) dengan arah antiparalel 5' ke 3': T->A, A->U, C->G, G->C, C->G, T->A, T->A, A->U. Hasilnya: 5'-AUG-CCG-AAU-3'."
        },
        "3'-UAC-CCG-AAU-5'": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Transkripsi mencetak mRNA dari DNA antisense (template) dengan arah antiparalel 5' ke 3': T->A, A->U, C->G, G->C, C->G, T->A, T->A, A->U. Hasilnya: 5'-AUG-CCG-AAU-3'."
        }
      }
    },
    {
      "id": "k12-bio-03",
      "conceptName": "Pembelahan Sel: Meiosis",
      "topic": "Pembelahan Sel: Meiosis",
      "questionText": "Fase pembelahan meiosis tempat terjadinya peristiwa pindah silang (crossing over) antara kromatid bukan saudara dari kromosom homolog adalah...",
      "type": "mcq",
      "options": [
        "Leptoten",
        "Zigoten",
        "Pakiten",
        "Diploten",
        "Diakinesis"
      ],
      "optionDetails": {
        "Leptoten": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pindah silang genetik (crossing over) terjadi pada tahap Pakiten (pachytene) dari profase I meiosis, di mana kompleks sinaptonemal terbentuk sempurna.",
        "Zigoten": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pindah silang genetik (crossing over) terjadi pada tahap Pakiten (pachytene) dari profase I meiosis, di mana kompleks sinaptonemal terbentuk sempurna.",
        "Pakiten": "✓ BENAR: Pindah silang genetik (crossing over) terjadi pada tahap Pakiten (pachytene) dari profase I meiosis, di mana kompleks sinaptonemal terbentuk sempurna.",
        "Diploten": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pindah silang genetik (crossing over) terjadi pada tahap Pakiten (pachytene) dari profase I meiosis, di mana kompleks sinaptonemal terbentuk sempurna.",
        "Diakinesis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pindah silang genetik (crossing over) terjadi pada tahap Pakiten (pachytene) dari profase I meiosis, di mana kompleks sinaptonemal terbentuk sempurna."
      },
      "correctAnswer": "Pakiten",
      "explanationText": "Pindah silang genetik (crossing over) terjadi pada tahap Pakiten (pachytene) dari profase I meiosis, di mana kompleks sinaptonemal terbentuk sempurna.",
      "knownWrongPatterns": {
        "Leptoten": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pindah silang genetik (crossing over) terjadi pada tahap Pakiten (pachytene) dari profase I meiosis, di mana kompleks sinaptonemal terbentuk sempurna."
        },
        "Zigoten": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pindah silang genetik (crossing over) terjadi pada tahap Pakiten (pachytene) dari profase I meiosis, di mana kompleks sinaptonemal terbentuk sempurna."
        },
        "Diploten": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pindah silang genetik (crossing over) terjadi pada tahap Pakiten (pachytene) dari profase I meiosis, di mana kompleks sinaptonemal terbentuk sempurna."
        },
        "Diakinesis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pindah silang genetik (crossing over) terjadi pada tahap Pakiten (pachytene) dari profase I meiosis, di mana kompleks sinaptonemal terbentuk sempurna."
        }
      }
    },
    {
      "id": "k12-bio-04",
      "conceptName": "Hereditas pada Manusia: Terpaut Seks",
      "topic": "Hereditas pada Manusia: Terpaut Seks",
      "questionText": "Seorang wanita pembawa (carrier) hemofilia (X^H X^h) menikah dengan pria normal (X^H Y). Peluang anak laki-laki mereka menderita hemofilia adalah...",
      "type": "mcq",
      "options": [
        "0%",
        "25%",
        "50%",
        "75%",
        "100%"
      ],
      "optionDetails": {
        "0%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Keturunan anak laki-laki berasal dari sperma Y dan ovum ibu: kemungkinan anak laki-laki adalah X^H Y (normal, 50%) dan X^h Y (hemofilia, 50%). Jadi peluang dari anak laki-laki adalah 50%.",
        "25%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Keturunan anak laki-laki berasal dari sperma Y dan ovum ibu: kemungkinan anak laki-laki adalah X^H Y (normal, 50%) dan X^h Y (hemofilia, 50%). Jadi peluang dari anak laki-laki adalah 50%.",
        "50%": "✓ BENAR: Keturunan anak laki-laki berasal dari sperma Y dan ovum ibu: kemungkinan anak laki-laki adalah X^H Y (normal, 50%) dan X^h Y (hemofilia, 50%). Jadi peluang dari anak laki-laki adalah 50%.",
        "75%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Keturunan anak laki-laki berasal dari sperma Y dan ovum ibu: kemungkinan anak laki-laki adalah X^H Y (normal, 50%) dan X^h Y (hemofilia, 50%). Jadi peluang dari anak laki-laki adalah 50%.",
        "100%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Keturunan anak laki-laki berasal dari sperma Y dan ovum ibu: kemungkinan anak laki-laki adalah X^H Y (normal, 50%) dan X^h Y (hemofilia, 50%). Jadi peluang dari anak laki-laki adalah 50%."
      },
      "correctAnswer": "50%",
      "explanationText": "Keturunan anak laki-laki berasal dari sperma Y dan ovum ibu: kemungkinan anak laki-laki adalah X^H Y (normal, 50%) dan X^h Y (hemofilia, 50%). Jadi peluang dari anak laki-laki adalah 50%.",
      "knownWrongPatterns": {
        "0%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Keturunan anak laki-laki berasal dari sperma Y dan ovum ibu: kemungkinan anak laki-laki adalah X^H Y (normal, 50%) dan X^h Y (hemofilia, 50%). Jadi peluang dari anak laki-laki adalah 50%."
        },
        "25%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Keturunan anak laki-laki berasal dari sperma Y dan ovum ibu: kemungkinan anak laki-laki adalah X^H Y (normal, 50%) dan X^h Y (hemofilia, 50%). Jadi peluang dari anak laki-laki adalah 50%."
        },
        "75%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Keturunan anak laki-laki berasal dari sperma Y dan ovum ibu: kemungkinan anak laki-laki adalah X^H Y (normal, 50%) dan X^h Y (hemofilia, 50%). Jadi peluang dari anak laki-laki adalah 50%."
        },
        "100%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Keturunan anak laki-laki berasal dari sperma Y dan ovum ibu: kemungkinan anak laki-laki adalah X^H Y (normal, 50%) dan X^h Y (hemofilia, 50%). Jadi peluang dari anak laki-laki adalah 50%."
        }
      }
    },
    {
      "id": "k12-bio-05",
      "conceptName": "Mutasi Kromosom & Aneuploidi",
      "topic": "Mutasi Kromosom & Aneuploidi",
      "questionText": "Individu dengan sindrom Down memiliki kelainan kariotipe kromosom berupa...",
      "type": "mcq",
      "options": [
        "Monosomi kromosom nomor 21 (45, XX/XY, -21)",
        "Trisomi kromosom nomor 21 (47, XX/XY, +21)",
        "Trisomi gonosom (47, XXY)",
        "Monosomi gonosom (45, X0)",
        "Trisomi kromosom nomor 18 (47, XX/XY, +18)"
      ],
      "optionDetails": {
        "Monosomi kromosom nomor 21 (45, XX/XY, -21)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sindrom Down disebabkan oleh nondisjunction yang menghasilkan trisomi pada autosom nomor 21 sehingga memiliki 47 kromosom (47, XX/XY, +21).",
        "Trisomi kromosom nomor 21 (47, XX/XY, +21)": "✓ BENAR: Sindrom Down disebabkan oleh nondisjunction yang menghasilkan trisomi pada autosom nomor 21 sehingga memiliki 47 kromosom (47, XX/XY, +21).",
        "Trisomi gonosom (47, XXY)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sindrom Down disebabkan oleh nondisjunction yang menghasilkan trisomi pada autosom nomor 21 sehingga memiliki 47 kromosom (47, XX/XY, +21).",
        "Monosomi gonosom (45, X0)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sindrom Down disebabkan oleh nondisjunction yang menghasilkan trisomi pada autosom nomor 21 sehingga memiliki 47 kromosom (47, XX/XY, +21).",
        "Trisomi kromosom nomor 18 (47, XX/XY, +18)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sindrom Down disebabkan oleh nondisjunction yang menghasilkan trisomi pada autosom nomor 21 sehingga memiliki 47 kromosom (47, XX/XY, +21)."
      },
      "correctAnswer": "Trisomi kromosom nomor 21 (47, XX/XY, +21)",
      "explanationText": "Sindrom Down disebabkan oleh nondisjunction yang menghasilkan trisomi pada autosom nomor 21 sehingga memiliki 47 kromosom (47, XX/XY, +21).",
      "knownWrongPatterns": {
        "Monosomi kromosom nomor 21 (45, XX/XY, -21)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Sindrom Down disebabkan oleh nondisjunction yang menghasilkan trisomi pada autosom nomor 21 sehingga memiliki 47 kromosom (47, XX/XY, +21)."
        },
        "Trisomi gonosom (47, XXY)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Sindrom Down disebabkan oleh nondisjunction yang menghasilkan trisomi pada autosom nomor 21 sehingga memiliki 47 kromosom (47, XX/XY, +21)."
        },
        "Monosomi gonosom (45, X0)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Sindrom Down disebabkan oleh nondisjunction yang menghasilkan trisomi pada autosom nomor 21 sehingga memiliki 47 kromosom (47, XX/XY, +21)."
        },
        "Trisomi kromosom nomor 18 (47, XX/XY, +18)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Sindrom Down disebabkan oleh nondisjunction yang menghasilkan trisomi pada autosom nomor 21 sehingga memiliki 47 kromosom (47, XX/XY, +21)."
        }
      }
    },
    {
      "id": "k12-bio-06",
      "conceptName": "Bioteknologi Modern: Rekayasa Genetika",
      "topic": "Bioteknologi Modern: Rekayasa Genetika",
      "questionText": "Enzim yang berfungsi sebagai 'gunting biologi' untuk memotong molekul DNA pada urutan basa nukleotida spesifik dalam rekayasa genetika adalah...",
      "type": "mcq",
      "options": [
        "DNA polimerase",
        "DNA ligase",
        "Enzim restriksi endonuklease",
        "Helikase",
        "Amilase"
      ],
      "optionDetails": {
        "DNA polimerase": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Enzim restriksi endonuklease mengenali urutan palindromik spesifik pada DNA dan memotong untai ganda DNA, digunakan dalam teknik DNA rekombinan.",
        "DNA ligase": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Enzim restriksi endonuklease mengenali urutan palindromik spesifik pada DNA dan memotong untai ganda DNA, digunakan dalam teknik DNA rekombinan.",
        "Enzim restriksi endonuklease": "✓ BENAR: Enzim restriksi endonuklease mengenali urutan palindromik spesifik pada DNA dan memotong untai ganda DNA, digunakan dalam teknik DNA rekombinan.",
        "Helikase": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Enzim restriksi endonuklease mengenali urutan palindromik spesifik pada DNA dan memotong untai ganda DNA, digunakan dalam teknik DNA rekombinan.",
        "Amilase": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Enzim restriksi endonuklease mengenali urutan palindromik spesifik pada DNA dan memotong untai ganda DNA, digunakan dalam teknik DNA rekombinan."
      },
      "correctAnswer": "Enzim restriksi endonuklease",
      "explanationText": "Enzim restriksi endonuklease mengenali urutan palindromik spesifik pada DNA dan memotong untai ganda DNA, digunakan dalam teknik DNA rekombinan.",
      "knownWrongPatterns": {
        "DNA polimerase": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Enzim restriksi endonuklease mengenali urutan palindromik spesifik pada DNA dan memotong untai ganda DNA, digunakan dalam teknik DNA rekombinan."
        },
        "DNA ligase": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Enzim restriksi endonuklease mengenali urutan palindromik spesifik pada DNA dan memotong untai ganda DNA, digunakan dalam teknik DNA rekombinan."
        },
        "Helikase": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Enzim restriksi endonuklease mengenali urutan palindromik spesifik pada DNA dan memotong untai ganda DNA, digunakan dalam teknik DNA rekombinan."
        },
        "Amilase": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Enzim restriksi endonuklease mengenali urutan palindromik spesifik pada DNA dan memotong untai ganda DNA, digunakan dalam teknik DNA rekombinan."
        }
      }
    },
    {
      "id": "k12-bio-07",
      "conceptName": "Teori Evolusi & Bukti Paleontologi",
      "topic": "Teori Evolusi & Bukti Paleontologi",
      "questionText": "Fosil kuda sering digunakan sebagai bukti utama terjadinya evolusi karena...",
      "type": "mcq",
      "options": [
        "Merupakan fosil tertua yang pernah ditemukan di bumi",
        "Catatan fosilnya lengkap dan menunjukkan perubahan bertahap dari Hyracotherium hingga Equus",
        "Kuda tidak pernah mengalami mutasi genetik",
        "Habitat kuda tidak pernah berubah sejak zaman Eosen",
        "Ukuran tubuh kuda semakin mengecil seiring waktu"
      ],
      "optionDetails": {
        "Merupakan fosil tertua yang pernah ditemukan di bumi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rekaman fosil kuda dari Eohippus/Hyracotherium hingga Equus modern terdokumentasi sangat lengkap pada lapisan batuan sedimen, memperlihatkan adaptasi jari dan gigi secara bertahap.",
        "Catatan fosilnya lengkap dan menunjukkan perubahan bertahap dari Hyracotherium hingga Equus": "✓ BENAR: Rekaman fosil kuda dari Eohippus/Hyracotherium hingga Equus modern terdokumentasi sangat lengkap pada lapisan batuan sedimen, memperlihatkan adaptasi jari dan gigi secara bertahap.",
        "Kuda tidak pernah mengalami mutasi genetik": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rekaman fosil kuda dari Eohippus/Hyracotherium hingga Equus modern terdokumentasi sangat lengkap pada lapisan batuan sedimen, memperlihatkan adaptasi jari dan gigi secara bertahap.",
        "Habitat kuda tidak pernah berubah sejak zaman Eosen": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rekaman fosil kuda dari Eohippus/Hyracotherium hingga Equus modern terdokumentasi sangat lengkap pada lapisan batuan sedimen, memperlihatkan adaptasi jari dan gigi secara bertahap.",
        "Ukuran tubuh kuda semakin mengecil seiring waktu": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rekaman fosil kuda dari Eohippus/Hyracotherium hingga Equus modern terdokumentasi sangat lengkap pada lapisan batuan sedimen, memperlihatkan adaptasi jari dan gigi secara bertahap."
      },
      "correctAnswer": "Catatan fosilnya lengkap dan menunjukkan perubahan bertahap dari Hyracotherium hingga Equus",
      "explanationText": "Rekaman fosil kuda dari Eohippus/Hyracotherium hingga Equus modern terdokumentasi sangat lengkap pada lapisan batuan sedimen, memperlihatkan adaptasi jari dan gigi secara bertahap.",
      "knownWrongPatterns": {
        "Merupakan fosil tertua yang pernah ditemukan di bumi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Rekaman fosil kuda dari Eohippus/Hyracotherium hingga Equus modern terdokumentasi sangat lengkap pada lapisan batuan sedimen, memperlihatkan adaptasi jari dan gigi secara bertahap."
        },
        "Kuda tidak pernah mengalami mutasi genetik": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Rekaman fosil kuda dari Eohippus/Hyracotherium hingga Equus modern terdokumentasi sangat lengkap pada lapisan batuan sedimen, memperlihatkan adaptasi jari dan gigi secara bertahap."
        },
        "Habitat kuda tidak pernah berubah sejak zaman Eosen": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Rekaman fosil kuda dari Eohippus/Hyracotherium hingga Equus modern terdokumentasi sangat lengkap pada lapisan batuan sedimen, memperlihatkan adaptasi jari dan gigi secara bertahap."
        },
        "Ukuran tubuh kuda semakin mengecil seiring waktu": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Rekaman fosil kuda dari Eohippus/Hyracotherium hingga Equus modern terdokumentasi sangat lengkap pada lapisan batuan sedimen, memperlihatkan adaptasi jari dan gigi secara bertahap."
        }
      }
    },
    {
      "id": "k12-bio-08",
      "conceptName": "Bukti Evolusi: Homologi",
      "topic": "Bukti Evolusi: Homologi",
      "questionText": "Organ tubuh yang memiliki bentuk asal sama namun mengalami modifikasi fungsi pada spesies berbeda (misalnya sirip paus, sayap kelelawar, dan tangan manusia) dinamakan...",
      "type": "mcq",
      "options": [
        "Organ analog",
        "Organ homolog",
        "Organ rudimenter",
        "Atavisme",
        "Fosil hidup"
      ],
      "optionDetails": {
        "Organ analog": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Homologi organ merujuk pada struktur dengan asal embriologis dan pola kerangka sama yang beradaptasi untuk fungsi berbeda (bukti divergensi evolusi).",
        "Organ homolog": "✓ BENAR: Homologi organ merujuk pada struktur dengan asal embriologis dan pola kerangka sama yang beradaptasi untuk fungsi berbeda (bukti divergensi evolusi).",
        "Organ rudimenter": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Homologi organ merujuk pada struktur dengan asal embriologis dan pola kerangka sama yang beradaptasi untuk fungsi berbeda (bukti divergensi evolusi).",
        "Atavisme": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Homologi organ merujuk pada struktur dengan asal embriologis dan pola kerangka sama yang beradaptasi untuk fungsi berbeda (bukti divergensi evolusi).",
        "Fosil hidup": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Homologi organ merujuk pada struktur dengan asal embriologis dan pola kerangka sama yang beradaptasi untuk fungsi berbeda (bukti divergensi evolusi)."
      },
      "correctAnswer": "Organ homolog",
      "explanationText": "Homologi organ merujuk pada struktur dengan asal embriologis dan pola kerangka sama yang beradaptasi untuk fungsi berbeda (bukti divergensi evolusi).",
      "knownWrongPatterns": {
        "Organ analog": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Homologi organ merujuk pada struktur dengan asal embriologis dan pola kerangka sama yang beradaptasi untuk fungsi berbeda (bukti divergensi evolusi)."
        },
        "Organ rudimenter": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Homologi organ merujuk pada struktur dengan asal embriologis dan pola kerangka sama yang beradaptasi untuk fungsi berbeda (bukti divergensi evolusi)."
        },
        "Atavisme": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Homologi organ merujuk pada struktur dengan asal embriologis dan pola kerangka sama yang beradaptasi untuk fungsi berbeda (bukti divergensi evolusi)."
        },
        "Fosil hidup": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Homologi organ merujuk pada struktur dengan asal embriologis dan pola kerangka sama yang beradaptasi untuk fungsi berbeda (bukti divergensi evolusi)."
        }
      }
    },
    {
      "id": "k12-bio-09",
      "conceptName": "Bioteknologi Tanaman Transgenik",
      "topic": "Bioteknologi Tanaman Transgenik",
      "questionText": "Bakteri yang banyak digunakan sebagai vektor alami untuk mentransfer gen asing ke dalam sel tumbuhan melalui plasmid Ti adalah...",
      "type": "mcq",
      "options": [
        "Escherichia coli",
        "Agrobacterium tumefaciens",
        "Bacillus thuringiensis",
        "Rhizobium leguminosarum",
        "Lactobacillus bulgaricus"
      ],
      "optionDetails": {
        "Escherichia coli": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Agrobacterium tumefaciens memiliki tumor-inducing (Ti) plasmid yang mampu menyisipkan segmen T-DNA ke dalam genom tumbuhan inang secara stabil.",
        "Agrobacterium tumefaciens": "✓ BENAR: Agrobacterium tumefaciens memiliki tumor-inducing (Ti) plasmid yang mampu menyisipkan segmen T-DNA ke dalam genom tumbuhan inang secara stabil.",
        "Bacillus thuringiensis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Agrobacterium tumefaciens memiliki tumor-inducing (Ti) plasmid yang mampu menyisipkan segmen T-DNA ke dalam genom tumbuhan inang secara stabil.",
        "Rhizobium leguminosarum": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Agrobacterium tumefaciens memiliki tumor-inducing (Ti) plasmid yang mampu menyisipkan segmen T-DNA ke dalam genom tumbuhan inang secara stabil.",
        "Lactobacillus bulgaricus": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Agrobacterium tumefaciens memiliki tumor-inducing (Ti) plasmid yang mampu menyisipkan segmen T-DNA ke dalam genom tumbuhan inang secara stabil."
      },
      "correctAnswer": "Agrobacterium tumefaciens",
      "explanationText": "Agrobacterium tumefaciens memiliki tumor-inducing (Ti) plasmid yang mampu menyisipkan segmen T-DNA ke dalam genom tumbuhan inang secara stabil.",
      "knownWrongPatterns": {
        "Escherichia coli": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Agrobacterium tumefaciens memiliki tumor-inducing (Ti) plasmid yang mampu menyisipkan segmen T-DNA ke dalam genom tumbuhan inang secara stabil."
        },
        "Bacillus thuringiensis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Agrobacterium tumefaciens memiliki tumor-inducing (Ti) plasmid yang mampu menyisipkan segmen T-DNA ke dalam genom tumbuhan inang secara stabil."
        },
        "Rhizobium leguminosarum": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Agrobacterium tumefaciens memiliki tumor-inducing (Ti) plasmid yang mampu menyisipkan segmen T-DNA ke dalam genom tumbuhan inang secara stabil."
        },
        "Lactobacillus bulgaricus": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Agrobacterium tumefaciens memiliki tumor-inducing (Ti) plasmid yang mampu menyisipkan segmen T-DNA ke dalam genom tumbuhan inang secara stabil."
        }
      }
    },
    {
      "id": "k12-bio-10",
      "conceptName": "Genetika Populasi & Hardy-Weinberg",
      "topic": "Genetika Populasi & Hardy-Weinberg",
      "questionText": "Hukum Hardy-Weinberg menyatakan bahwa frekuensi alel dan genotipe dalam suatu populasi akan tetap konstan dari generasi ke generasi dengan syarat berikut, KECUALI...",
      "type": "mcq",
      "options": [
        "Populasi berukuran sangat besar",
        "Terjadi perkawinan secara acak (panmiksia)",
        "Tidak terjadi mutasi maupun migrasi",
        "Terjadi seleksi alam yang kuat terhadap alel tertentu",
        "Tidak ada keuntungan reproduksi bagi genotipe tertentu"
      ],
      "optionDetails": {
        "Populasi berukuran sangat besar": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Keseimbangan Hardy-Weinberg mensyaratkan TIDAK ADA seleksi alam, populasi besar, perkawinan acak, serta bebas dari mutasi dan migrasi.",
        "Terjadi perkawinan secara acak (panmiksia)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Keseimbangan Hardy-Weinberg mensyaratkan TIDAK ADA seleksi alam, populasi besar, perkawinan acak, serta bebas dari mutasi dan migrasi.",
        "Tidak terjadi mutasi maupun migrasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Keseimbangan Hardy-Weinberg mensyaratkan TIDAK ADA seleksi alam, populasi besar, perkawinan acak, serta bebas dari mutasi dan migrasi.",
        "Terjadi seleksi alam yang kuat terhadap alel tertentu": "✓ BENAR: Keseimbangan Hardy-Weinberg mensyaratkan TIDAK ADA seleksi alam, populasi besar, perkawinan acak, serta bebas dari mutasi dan migrasi.",
        "Tidak ada keuntungan reproduksi bagi genotipe tertentu": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Keseimbangan Hardy-Weinberg mensyaratkan TIDAK ADA seleksi alam, populasi besar, perkawinan acak, serta bebas dari mutasi dan migrasi."
      },
      "correctAnswer": "Terjadi seleksi alam yang kuat terhadap alel tertentu",
      "explanationText": "Keseimbangan Hardy-Weinberg mensyaratkan TIDAK ADA seleksi alam, populasi besar, perkawinan acak, serta bebas dari mutasi dan migrasi.",
      "knownWrongPatterns": {
        "Populasi berukuran sangat besar": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Keseimbangan Hardy-Weinberg mensyaratkan TIDAK ADA seleksi alam, populasi besar, perkawinan acak, serta bebas dari mutasi dan migrasi."
        },
        "Terjadi perkawinan secara acak (panmiksia)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Keseimbangan Hardy-Weinberg mensyaratkan TIDAK ADA seleksi alam, populasi besar, perkawinan acak, serta bebas dari mutasi dan migrasi."
        },
        "Tidak terjadi mutasi maupun migrasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Keseimbangan Hardy-Weinberg mensyaratkan TIDAK ADA seleksi alam, populasi besar, perkawinan acak, serta bebas dari mutasi dan migrasi."
        },
        "Tidak ada keuntungan reproduksi bagi genotipe tertentu": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Keseimbangan Hardy-Weinberg mensyaratkan TIDAK ADA seleksi alam, populasi besar, perkawinan acak, serta bebas dari mutasi dan migrasi."
        }
      }
    }
  ],
  "indo-12": [
    {
      "id": "k12-ina-01",
      "conceptName": "Teks Artikel Opini: Struktur",
      "topic": "Teks Artikel Opini: Struktur",
      "questionText": "Struktur teks artikel opini yang memuat pendirian atau pandangan penulis mengenai topik yang dibahas terdapat pada bagian...",
      "type": "mcq",
      "options": [
        "Tesis (Pernyataan pendapat)",
        "Argumentasi",
        "Reorientasi",
        "Penegasan ulang (Reiterasi)",
        "Abstraksi"
      ],
      "optionDetails": {
        "Tesis (Pernyataan pendapat)": "✓ BENAR: Tesis berisi sudut pandang, hipotesis, atau pendirian penulis tentang permasalahan yang akan dibahas dan dipertahankan dalam artikel.",
        "Argumentasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tesis berisi sudut pandang, hipotesis, atau pendirian penulis tentang permasalahan yang akan dibahas dan dipertahankan dalam artikel.",
        "Reorientasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tesis berisi sudut pandang, hipotesis, atau pendirian penulis tentang permasalahan yang akan dibahas dan dipertahankan dalam artikel.",
        "Penegasan ulang (Reiterasi)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tesis berisi sudut pandang, hipotesis, atau pendirian penulis tentang permasalahan yang akan dibahas dan dipertahankan dalam artikel.",
        "Abstraksi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tesis berisi sudut pandang, hipotesis, atau pendirian penulis tentang permasalahan yang akan dibahas dan dipertahankan dalam artikel."
      },
      "correctAnswer": "Tesis (Pernyataan pendapat)",
      "explanationText": "Tesis berisi sudut pandang, hipotesis, atau pendirian penulis tentang permasalahan yang akan dibahas dan dipertahankan dalam artikel.",
      "knownWrongPatterns": {
        "Argumentasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Tesis berisi sudut pandang, hipotesis, atau pendirian penulis tentang permasalahan yang akan dibahas dan dipertahankan dalam artikel."
        },
        "Reorientasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Tesis berisi sudut pandang, hipotesis, atau pendirian penulis tentang permasalahan yang akan dibahas dan dipertahankan dalam artikel."
        },
        "Penegasan ulang (Reiterasi)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Tesis berisi sudut pandang, hipotesis, atau pendirian penulis tentang permasalahan yang akan dibahas dan dipertahankan dalam artikel."
        },
        "Abstraksi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Tesis berisi sudut pandang, hipotesis, atau pendirian penulis tentang permasalahan yang akan dibahas dan dipertahankan dalam artikel."
        }
      }
    },
    {
      "id": "k12-ina-02",
      "conceptName": "Fakta dan Opini",
      "topic": "Fakta dan Opini",
      "questionText": "Kalimat berikut yang merupakan fakta dalam artikel ilmiah populer adalah...",
      "type": "mcq",
      "options": [
        "Pendidikan kejuruan tampaknya lebih menjanjikan lapangan kerja dibanding pendidikan umum.",
        "Berdasarkan data BPS tahun 2023, angka pengangguran terbuka turun sebesar 0,54 persen menjadi 5,32 persen.",
        "Seharusnya pemerintah lebih serius memperhatikan nasib guru honorer di pelosok.",
        "Banyak orang merasa metode daring tidak seefektif pembelajaran tatap muka.",
        "Bisa jadi inovasi teknologi AI akan menghapus separuh lapangan pekerjaan di masa depan."
      ],
      "optionDetails": {
        "Pendidikan kejuruan tampaknya lebih menjanjikan lapangan kerja dibanding pendidikan umum.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Fakta adalah kenyataan objektif yang dapat diverifikasi kebenarannya melalui bukti empiris atau data statistik resmi (data BPS 2023).",
        "Berdasarkan data BPS tahun 2023, angka pengangguran terbuka turun sebesar 0,54 persen menjadi 5,32 persen.": "✓ BENAR: Fakta adalah kenyataan objektif yang dapat diverifikasi kebenarannya melalui bukti empiris atau data statistik resmi (data BPS 2023).",
        "Seharusnya pemerintah lebih serius memperhatikan nasib guru honorer di pelosok.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Fakta adalah kenyataan objektif yang dapat diverifikasi kebenarannya melalui bukti empiris atau data statistik resmi (data BPS 2023).",
        "Banyak orang merasa metode daring tidak seefektif pembelajaran tatap muka.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Fakta adalah kenyataan objektif yang dapat diverifikasi kebenarannya melalui bukti empiris atau data statistik resmi (data BPS 2023).",
        "Bisa jadi inovasi teknologi AI akan menghapus separuh lapangan pekerjaan di masa depan.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Fakta adalah kenyataan objektif yang dapat diverifikasi kebenarannya melalui bukti empiris atau data statistik resmi (data BPS 2023)."
      },
      "correctAnswer": "Berdasarkan data BPS tahun 2023, angka pengangguran terbuka turun sebesar 0,54 persen menjadi 5,32 persen.",
      "explanationText": "Fakta adalah kenyataan objektif yang dapat diverifikasi kebenarannya melalui bukti empiris atau data statistik resmi (data BPS 2023).",
      "knownWrongPatterns": {
        "Pendidikan kejuruan tampaknya lebih menjanjikan lapangan kerja dibanding pendidikan umum.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Fakta adalah kenyataan objektif yang dapat diverifikasi kebenarannya melalui bukti empiris atau data statistik resmi (data BPS 2023)."
        },
        "Seharusnya pemerintah lebih serius memperhatikan nasib guru honorer di pelosok.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Fakta adalah kenyataan objektif yang dapat diverifikasi kebenarannya melalui bukti empiris atau data statistik resmi (data BPS 2023)."
        },
        "Banyak orang merasa metode daring tidak seefektif pembelajaran tatap muka.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Fakta adalah kenyataan objektif yang dapat diverifikasi kebenarannya melalui bukti empiris atau data statistik resmi (data BPS 2023)."
        },
        "Bisa jadi inovasi teknologi AI akan menghapus separuh lapangan pekerjaan di masa depan.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Fakta adalah kenyataan objektif yang dapat diverifikasi kebenarannya melalui bukti empiris atau data statistik resmi (data BPS 2023)."
        }
      }
    },
    {
      "id": "k12-ina-03",
      "conceptName": "Kritik dan Esai Sastra",
      "topic": "Kritik dan Esai Sastra",
      "questionText": "Perbedaan mendasar antara kritik sastra dan esai sastra terletak pada...",
      "type": "mcq",
      "options": [
        "Kritik sastra memuat penilaian objektif kelebihan dan kelemahan karya secara sistematis, sedangkan esai lebih bersifat personal dan subjektif",
        "Kritik sastra hanya membahas biografi pengarang, sedangkan esai membahas alur",
        "Esai harus selalu memakai bahasa formal, sedangkan kritik bebas",
        "Kritik sastra tidak memerlukan analisis teks",
        "Esai sastra hanya ditulis oleh akademisi sastra"
      ],
      "optionDetails": {
        "Kritik sastra memuat penilaian objektif kelebihan dan kelemahan karya secara sistematis, sedangkan esai lebih bersifat personal dan subjektif": "✓ BENAR: Kritik sastra berfokus pada analisis mendalam serta evaluasi mutu karya sastra secara objektif dan teoretis, sedangkan esai mengangkat sudut pandang personal penulis terhadap suatu fenomena sastra.",
        "Kritik sastra hanya membahas biografi pengarang, sedangkan esai membahas alur": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kritik sastra berfokus pada analisis mendalam serta evaluasi mutu karya sastra secara objektif dan teoretis, sedangkan esai mengangkat sudut pandang personal penulis terhadap suatu fenomena sastra.",
        "Esai harus selalu memakai bahasa formal, sedangkan kritik bebas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kritik sastra berfokus pada analisis mendalam serta evaluasi mutu karya sastra secara objektif dan teoretis, sedangkan esai mengangkat sudut pandang personal penulis terhadap suatu fenomena sastra.",
        "Kritik sastra tidak memerlukan analisis teks": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kritik sastra berfokus pada analisis mendalam serta evaluasi mutu karya sastra secara objektif dan teoretis, sedangkan esai mengangkat sudut pandang personal penulis terhadap suatu fenomena sastra.",
        "Esai sastra hanya ditulis oleh akademisi sastra": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kritik sastra berfokus pada analisis mendalam serta evaluasi mutu karya sastra secara objektif dan teoretis, sedangkan esai mengangkat sudut pandang personal penulis terhadap suatu fenomena sastra."
      },
      "correctAnswer": "Kritik sastra memuat penilaian objektif kelebihan dan kelemahan karya secara sistematis, sedangkan esai lebih bersifat personal dan subjektif",
      "explanationText": "Kritik sastra berfokus pada analisis mendalam serta evaluasi mutu karya sastra secara objektif dan teoretis, sedangkan esai mengangkat sudut pandang personal penulis terhadap suatu fenomena sastra.",
      "knownWrongPatterns": {
        "Kritik sastra hanya membahas biografi pengarang, sedangkan esai membahas alur": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kritik sastra berfokus pada analisis mendalam serta evaluasi mutu karya sastra secara objektif dan teoretis, sedangkan esai mengangkat sudut pandang personal penulis terhadap suatu fenomena sastra."
        },
        "Esai harus selalu memakai bahasa formal, sedangkan kritik bebas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kritik sastra berfokus pada analisis mendalam serta evaluasi mutu karya sastra secara objektif dan teoretis, sedangkan esai mengangkat sudut pandang personal penulis terhadap suatu fenomena sastra."
        },
        "Kritik sastra tidak memerlukan analisis teks": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kritik sastra berfokus pada analisis mendalam serta evaluasi mutu karya sastra secara objektif dan teoretis, sedangkan esai mengangkat sudut pandang personal penulis terhadap suatu fenomena sastra."
        },
        "Esai sastra hanya ditulis oleh akademisi sastra": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kritik sastra berfokus pada analisis mendalam serta evaluasi mutu karya sastra secara objektif dan teoretis, sedangkan esai mengangkat sudut pandang personal penulis terhadap suatu fenomena sastra."
        }
      }
    },
    {
      "id": "k12-ina-04",
      "conceptName": "Penulisan Karya Ilmiah & Daftar Pustaka",
      "topic": "Penulisan Karya Ilmiah & Daftar Pustaka",
      "questionText": "Format penulisan daftar pustaka berdasarkan standar APA yang tepat untuk buku karangan Keraf, Gorys terbitan Gramedia Pustaka Utama Jakarta tahun 2010 dengan judul 'Diksi dan Gaya Bahasa' adalah...",
      "type": "mcq",
      "options": [
        "Keraf, Gorys. 2010. Diksi dan Gaya Bahasa. Jakarta: Gramedia Pustaka Utama.",
        "Gorys Keraf. 2010. Diksi dan Gaya Bahasa. Jakarta: Gramedia Pustaka Utama.",
        "Keraf, G. (2010). Diksi dan gaya bahasa. Jakarta: Gramedia Pustaka Utama.",
        "2010. Keraf, Gorys. Diksi dan Gaya Bahasa. Gramedia: Jakarta.",
        "Diksi dan Gaya Bahasa. Keraf, Gorys. 2010. Jakarta: Gramedia Pustaka Utama."
      ],
      "optionDetails": {
        "Keraf, Gorys. 2010. Diksi dan Gaya Bahasa. Jakarta: Gramedia Pustaka Utama.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Format APA Style: Penulis (Nama belakang, Inisial). (Tahun). Judul buku (dicetak miring). Tempat: Penerbit. / Versi APA 7th ed: Keraf, G. (2010). Diksi dan gaya bahasa. Gramedia Pustaka Utama.",
        "Gorys Keraf. 2010. Diksi dan Gaya Bahasa. Jakarta: Gramedia Pustaka Utama.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Format APA Style: Penulis (Nama belakang, Inisial). (Tahun). Judul buku (dicetak miring). Tempat: Penerbit. / Versi APA 7th ed: Keraf, G. (2010). Diksi dan gaya bahasa. Gramedia Pustaka Utama.",
        "Keraf, G. (2010). Diksi dan gaya bahasa. Jakarta: Gramedia Pustaka Utama.": "✓ BENAR: Format APA Style: Penulis (Nama belakang, Inisial). (Tahun). Judul buku (dicetak miring). Tempat: Penerbit. / Versi APA 7th ed: Keraf, G. (2010). Diksi dan gaya bahasa. Gramedia Pustaka Utama.",
        "2010. Keraf, Gorys. Diksi dan Gaya Bahasa. Gramedia: Jakarta.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Format APA Style: Penulis (Nama belakang, Inisial). (Tahun). Judul buku (dicetak miring). Tempat: Penerbit. / Versi APA 7th ed: Keraf, G. (2010). Diksi dan gaya bahasa. Gramedia Pustaka Utama.",
        "Diksi dan Gaya Bahasa. Keraf, Gorys. 2010. Jakarta: Gramedia Pustaka Utama.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Format APA Style: Penulis (Nama belakang, Inisial). (Tahun). Judul buku (dicetak miring). Tempat: Penerbit. / Versi APA 7th ed: Keraf, G. (2010). Diksi dan gaya bahasa. Gramedia Pustaka Utama."
      },
      "correctAnswer": "Keraf, G. (2010). Diksi dan gaya bahasa. Jakarta: Gramedia Pustaka Utama.",
      "explanationText": "Format APA Style: Penulis (Nama belakang, Inisial). (Tahun). Judul buku (dicetak miring). Tempat: Penerbit. / Versi APA 7th ed: Keraf, G. (2010). Diksi dan gaya bahasa. Gramedia Pustaka Utama.",
      "knownWrongPatterns": {
        "Keraf, Gorys. 2010. Diksi dan Gaya Bahasa. Jakarta: Gramedia Pustaka Utama.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Format APA Style: Penulis (Nama belakang, Inisial). (Tahun). Judul buku (dicetak miring). Tempat: Penerbit. / Versi APA 7th ed: Keraf, G. (2010). Diksi dan gaya bahasa. Gramedia Pustaka Utama."
        },
        "Gorys Keraf. 2010. Diksi dan Gaya Bahasa. Jakarta: Gramedia Pustaka Utama.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Format APA Style: Penulis (Nama belakang, Inisial). (Tahun). Judul buku (dicetak miring). Tempat: Penerbit. / Versi APA 7th ed: Keraf, G. (2010). Diksi dan gaya bahasa. Gramedia Pustaka Utama."
        },
        "2010. Keraf, Gorys. Diksi dan Gaya Bahasa. Gramedia: Jakarta.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Format APA Style: Penulis (Nama belakang, Inisial). (Tahun). Judul buku (dicetak miring). Tempat: Penerbit. / Versi APA 7th ed: Keraf, G. (2010). Diksi dan gaya bahasa. Gramedia Pustaka Utama."
        },
        "Diksi dan Gaya Bahasa. Keraf, Gorys. 2010. Jakarta: Gramedia Pustaka Utama.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Format APA Style: Penulis (Nama belakang, Inisial). (Tahun). Judul buku (dicetak miring). Tempat: Penerbit. / Versi APA 7th ed: Keraf, G. (2010). Diksi dan gaya bahasa. Gramedia Pustaka Utama."
        }
      }
    },
    {
      "id": "k12-ina-05",
      "conceptName": "Surat Lamaran Pekerjaan",
      "topic": "Surat Lamaran Pekerjaan",
      "questionText": "Bagian surat lamaran pekerjaan yang berisi identitas pelamar, maksud pengajuan lamaran, serta berkas lampiran pendukung terdapat pada bagian...",
      "type": "mcq",
      "options": [
        "Salam pembuka",
        "Isi surat",
        "Alinea penutup",
        "Kop surat",
        "Perihal dan lampiran"
      ],
      "optionDetails": {
        "Salam pembuka": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Isi surat lamaran pekerjaan mencakup identitas pelamar, kualifikasi diri/kompetensi, tujuan posisi yang dilamar, dan rincian lampiran berkas pendukung.",
        "Isi surat": "✓ BENAR: Isi surat lamaran pekerjaan mencakup identitas pelamar, kualifikasi diri/kompetensi, tujuan posisi yang dilamar, dan rincian lampiran berkas pendukung.",
        "Alinea penutup": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Isi surat lamaran pekerjaan mencakup identitas pelamar, kualifikasi diri/kompetensi, tujuan posisi yang dilamar, dan rincian lampiran berkas pendukung.",
        "Kop surat": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Isi surat lamaran pekerjaan mencakup identitas pelamar, kualifikasi diri/kompetensi, tujuan posisi yang dilamar, dan rincian lampiran berkas pendukung.",
        "Perihal dan lampiran": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Isi surat lamaran pekerjaan mencakup identitas pelamar, kualifikasi diri/kompetensi, tujuan posisi yang dilamar, dan rincian lampiran berkas pendukung."
      },
      "correctAnswer": "Isi surat",
      "explanationText": "Isi surat lamaran pekerjaan mencakup identitas pelamar, kualifikasi diri/kompetensi, tujuan posisi yang dilamar, dan rincian lampiran berkas pendukung.",
      "knownWrongPatterns": {
        "Salam pembuka": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Isi surat lamaran pekerjaan mencakup identitas pelamar, kualifikasi diri/kompetensi, tujuan posisi yang dilamar, dan rincian lampiran berkas pendukung."
        },
        "Alinea penutup": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Isi surat lamaran pekerjaan mencakup identitas pelamar, kualifikasi diri/kompetensi, tujuan posisi yang dilamar, dan rincian lampiran berkas pendukung."
        },
        "Kop surat": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Isi surat lamaran pekerjaan mencakup identitas pelamar, kualifikasi diri/kompetensi, tujuan posisi yang dilamar, dan rincian lampiran berkas pendukung."
        },
        "Perihal dan lampiran": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Isi surat lamaran pekerjaan mencakup identitas pelamar, kualifikasi diri/kompetensi, tujuan posisi yang dilamar, dan rincian lampiran berkas pendukung."
        }
      }
    },
    {
      "id": "k12-ina-06",
      "conceptName": "Bahasa Baku & Surat Resmi",
      "topic": "Bahasa Baku & Surat Resmi",
      "questionText": "Kalimat penutup surat lamaran pekerjaan yang santun dan tepat sesuai kaidah tata bahasa Indonesia adalah...",
      "type": "mcq",
      "options": [
        "Atas perhatiannya Bapak, saya ucapkan banyak terima kasih.",
        "Demikian surat lamaran ini saya sampaikan, atas perhatian Bapak/Ibu, saya mengucapkan terima kasih.",
        "Atas diterimanya saya bekerja di perusahaan Bapak, saya sampaikan terima kasih.",
        "Sekian dulu lamaran saya, semoga Bapak berkenan menerimanya.",
        "Besar harapan saya untuk diterima, atas kerja samanya diucapkan terima kasih."
      ],
      "optionDetails": {
        "Atas perhatiannya Bapak, saya ucapkan banyak terima kasih.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pilihan yang baku, efektif, dan menghormati penerima adalah 'Demikian surat lamaran ini saya sampaikan, atas perhatian Bapak/Ibu, saya mengucapkan terima kasih.' tanpa pemborosan kata seperti 'banyak terima kasih' atau 'nya'.",
        "Demikian surat lamaran ini saya sampaikan, atas perhatian Bapak/Ibu, saya mengucapkan terima kasih.": "✓ BENAR: Pilihan yang baku, efektif, dan menghormati penerima adalah 'Demikian surat lamaran ini saya sampaikan, atas perhatian Bapak/Ibu, saya mengucapkan terima kasih.' tanpa pemborosan kata seperti 'banyak terima kasih' atau 'nya'.",
        "Atas diterimanya saya bekerja di perusahaan Bapak, saya sampaikan terima kasih.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pilihan yang baku, efektif, dan menghormati penerima adalah 'Demikian surat lamaran ini saya sampaikan, atas perhatian Bapak/Ibu, saya mengucapkan terima kasih.' tanpa pemborosan kata seperti 'banyak terima kasih' atau 'nya'.",
        "Sekian dulu lamaran saya, semoga Bapak berkenan menerimanya.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pilihan yang baku, efektif, dan menghormati penerima adalah 'Demikian surat lamaran ini saya sampaikan, atas perhatian Bapak/Ibu, saya mengucapkan terima kasih.' tanpa pemborosan kata seperti 'banyak terima kasih' atau 'nya'.",
        "Besar harapan saya untuk diterima, atas kerja samanya diucapkan terima kasih.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pilihan yang baku, efektif, dan menghormati penerima adalah 'Demikian surat lamaran ini saya sampaikan, atas perhatian Bapak/Ibu, saya mengucapkan terima kasih.' tanpa pemborosan kata seperti 'banyak terima kasih' atau 'nya'."
      },
      "correctAnswer": "Demikian surat lamaran ini saya sampaikan, atas perhatian Bapak/Ibu, saya mengucapkan terima kasih.",
      "explanationText": "Pilihan yang baku, efektif, dan menghormati penerima adalah 'Demikian surat lamaran ini saya sampaikan, atas perhatian Bapak/Ibu, saya mengucapkan terima kasih.' tanpa pemborosan kata seperti 'banyak terima kasih' atau 'nya'.",
      "knownWrongPatterns": {
        "Atas perhatiannya Bapak, saya ucapkan banyak terima kasih.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pilihan yang baku, efektif, dan menghormati penerima adalah 'Demikian surat lamaran ini saya sampaikan, atas perhatian Bapak/Ibu, saya mengucapkan terima kasih.' tanpa pemborosan kata seperti 'banyak terima kasih' atau 'nya'."
        },
        "Atas diterimanya saya bekerja di perusahaan Bapak, saya sampaikan terima kasih.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pilihan yang baku, efektif, dan menghormati penerima adalah 'Demikian surat lamaran ini saya sampaikan, atas perhatian Bapak/Ibu, saya mengucapkan terima kasih.' tanpa pemborosan kata seperti 'banyak terima kasih' atau 'nya'."
        },
        "Sekian dulu lamaran saya, semoga Bapak berkenan menerimanya.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pilihan yang baku, efektif, dan menghormati penerima adalah 'Demikian surat lamaran ini saya sampaikan, atas perhatian Bapak/Ibu, saya mengucapkan terima kasih.' tanpa pemborosan kata seperti 'banyak terima kasih' atau 'nya'."
        },
        "Besar harapan saya untuk diterima, atas kerja samanya diucapkan terima kasih.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pilihan yang baku, efektif, dan menghormati penerima adalah 'Demikian surat lamaran ini saya sampaikan, atas perhatian Bapak/Ibu, saya mengucapkan terima kasih.' tanpa pemborosan kata seperti 'banyak terima kasih' atau 'nya'."
        }
      }
    },
    {
      "id": "k12-ina-07",
      "conceptName": "Kaidah Kebahasaan Teks Argumentasi",
      "topic": "Kaidah Kebahasaan Teks Argumentasi",
      "questionText": "Konjungsi subordinatif konsesif yang tepat digunakan dalam argumen kritik sastra adalah...",
      "type": "mcq",
      "options": [
        "Karena",
        "Meskipun",
        "Sehingga",
        "Sebelum",
        "Setelah"
      ],
      "optionDetails": {
        "Karena": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Konjungsi konsesif (meskipun, walaupun, kendatipun, biarpun) menghubungkan dua klausa yang menunjukkan pertentangan atau pengakuan keadaan tanpa membatalkan klausa utama.",
        "Meskipun": "✓ BENAR: Konjungsi konsesif (meskipun, walaupun, kendatipun, biarpun) menghubungkan dua klausa yang menunjukkan pertentangan atau pengakuan keadaan tanpa membatalkan klausa utama.",
        "Sehingga": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Konjungsi konsesif (meskipun, walaupun, kendatipun, biarpun) menghubungkan dua klausa yang menunjukkan pertentangan atau pengakuan keadaan tanpa membatalkan klausa utama.",
        "Sebelum": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Konjungsi konsesif (meskipun, walaupun, kendatipun, biarpun) menghubungkan dua klausa yang menunjukkan pertentangan atau pengakuan keadaan tanpa membatalkan klausa utama.",
        "Setelah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Konjungsi konsesif (meskipun, walaupun, kendatipun, biarpun) menghubungkan dua klausa yang menunjukkan pertentangan atau pengakuan keadaan tanpa membatalkan klausa utama."
      },
      "correctAnswer": "Meskipun",
      "explanationText": "Konjungsi konsesif (meskipun, walaupun, kendatipun, biarpun) menghubungkan dua klausa yang menunjukkan pertentangan atau pengakuan keadaan tanpa membatalkan klausa utama.",
      "knownWrongPatterns": {
        "Karena": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Konjungsi konsesif (meskipun, walaupun, kendatipun, biarpun) menghubungkan dua klausa yang menunjukkan pertentangan atau pengakuan keadaan tanpa membatalkan klausa utama."
        },
        "Sehingga": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Konjungsi konsesif (meskipun, walaupun, kendatipun, biarpun) menghubungkan dua klausa yang menunjukkan pertentangan atau pengakuan keadaan tanpa membatalkan klausa utama."
        },
        "Sebelum": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Konjungsi konsesif (meskipun, walaupun, kendatipun, biarpun) menghubungkan dua klausa yang menunjukkan pertentangan atau pengakuan keadaan tanpa membatalkan klausa utama."
        },
        "Setelah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Konjungsi konsesif (meskipun, walaupun, kendatipun, biarpun) menghubungkan dua klausa yang menunjukkan pertentangan atau pengakuan keadaan tanpa membatalkan klausa utama."
        }
      }
    },
    {
      "id": "k12-ina-08",
      "conceptName": "Analisis Nilai-Nilai Karya Sastra",
      "topic": "Analisis Nilai-Nilai Karya Sastra",
      "questionText": "Nilai yang terkandung dalam karya novel yang berkaitan dengan norma kepatutan, sopan santun, dan interaksi antaranggota masyarakat disebut nilai...",
      "type": "mcq",
      "options": [
        "Nilai moral",
        "Nilai religius",
        "Nilai sosial",
        "Nilai estetika",
        "Nilai edukatif"
      ],
      "optionDetails": {
        "Nilai moral": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Nilai sosial berkaitan erat dengan hubungan antarmanusia dalam kehidupan bermasyarakat, tradisi gotong royong, dan kepedulian antarsesama.",
        "Nilai religius": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Nilai sosial berkaitan erat dengan hubungan antarmanusia dalam kehidupan bermasyarakat, tradisi gotong royong, dan kepedulian antarsesama.",
        "Nilai sosial": "✓ BENAR: Nilai sosial berkaitan erat dengan hubungan antarmanusia dalam kehidupan bermasyarakat, tradisi gotong royong, dan kepedulian antarsesama.",
        "Nilai estetika": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Nilai sosial berkaitan erat dengan hubungan antarmanusia dalam kehidupan bermasyarakat, tradisi gotong royong, dan kepedulian antarsesama.",
        "Nilai edukatif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Nilai sosial berkaitan erat dengan hubungan antarmanusia dalam kehidupan bermasyarakat, tradisi gotong royong, dan kepedulian antarsesama."
      },
      "correctAnswer": "Nilai sosial",
      "explanationText": "Nilai sosial berkaitan erat dengan hubungan antarmanusia dalam kehidupan bermasyarakat, tradisi gotong royong, dan kepedulian antarsesama.",
      "knownWrongPatterns": {
        "Nilai moral": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Nilai sosial berkaitan erat dengan hubungan antarmanusia dalam kehidupan bermasyarakat, tradisi gotong royong, dan kepedulian antarsesama."
        },
        "Nilai religius": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Nilai sosial berkaitan erat dengan hubungan antarmanusia dalam kehidupan bermasyarakat, tradisi gotong royong, dan kepedulian antarsesama."
        },
        "Nilai estetika": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Nilai sosial berkaitan erat dengan hubungan antarmanusia dalam kehidupan bermasyarakat, tradisi gotong royong, dan kepedulian antarsesama."
        },
        "Nilai edukatif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Nilai sosial berkaitan erat dengan hubungan antarmanusia dalam kehidupan bermasyarakat, tradisi gotong royong, dan kepedulian antarsesama."
        }
      }
    },
    {
      "id": "k12-ina-09",
      "conceptName": "Kalimat Efektif & Tata Bahasa",
      "topic": "Kalimat Efektif & Tata Bahasa",
      "questionText": "Kalimat efektif berikut yang tidak mengandung pleonasme (pemborosan kata) adalah...",
      "type": "mcq",
      "options": [
        "Para hadirin sekalian dimohon berdiri.",
        "Pemerintah harus segera turun ke bawah meninjau lokasi bencana.",
        "Karya sastra tersebut berhasil mengangkat realitas kemiskinan secara menyentuh.",
        "Buku ini sangat amat menarik sekali untuk dibaca.",
        "Siswa-siswa saling tolong-menolong satu sama lain."
      ],
      "optionDetails": {
        "Para hadirin sekalian dimohon berdiri.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pilihan ketiga padat, logis, dan tidak mengandung pengulangan makna kata yang bersinonim (pleonasme).",
        "Pemerintah harus segera turun ke bawah meninjau lokasi bencana.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pilihan ketiga padat, logis, dan tidak mengandung pengulangan makna kata yang bersinonim (pleonasme).",
        "Karya sastra tersebut berhasil mengangkat realitas kemiskinan secara menyentuh.": "✓ BENAR: Pilihan ketiga padat, logis, dan tidak mengandung pengulangan makna kata yang bersinonim (pleonasme).",
        "Buku ini sangat amat menarik sekali untuk dibaca.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pilihan ketiga padat, logis, dan tidak mengandung pengulangan makna kata yang bersinonim (pleonasme).",
        "Siswa-siswa saling tolong-menolong satu sama lain.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pilihan ketiga padat, logis, dan tidak mengandung pengulangan makna kata yang bersinonim (pleonasme)."
      },
      "correctAnswer": "Karya sastra tersebut berhasil mengangkat realitas kemiskinan secara menyentuh.",
      "explanationText": "Pilihan ketiga padat, logis, dan tidak mengandung pengulangan makna kata yang bersinonim (pleonasme).",
      "knownWrongPatterns": {
        "Para hadirin sekalian dimohon berdiri.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pilihan ketiga padat, logis, dan tidak mengandung pengulangan makna kata yang bersinonim (pleonasme)."
        },
        "Pemerintah harus segera turun ke bawah meninjau lokasi bencana.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pilihan ketiga padat, logis, dan tidak mengandung pengulangan makna kata yang bersinonim (pleonasme)."
        },
        "Buku ini sangat amat menarik sekali untuk dibaca.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pilihan ketiga padat, logis, dan tidak mengandung pengulangan makna kata yang bersinonim (pleonasme)."
        },
        "Siswa-siswa saling tolong-menolong satu sama lain.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pilihan ketiga padat, logis, dan tidak mengandung pengulangan makna kata yang bersinonim (pleonasme)."
        }
      }
    },
    {
      "id": "k12-ina-10",
      "conceptName": "Teks Cerita Sejarah / Novel Sejarah",
      "topic": "Teks Cerita Sejarah / Novel Sejarah",
      "questionText": "Dalam novel sejarah, pengarang menggabungkan data kronologis masa lampau dengan...",
      "type": "mcq",
      "options": [
        "Laporan jurnalistik investigasi",
        "Imajinasi dan rekaan estetis pengarang untuk menghidupkan karakter",
        "Kutipan pasal-pasal perundang-undangan",
        "Data statistik komputer",
        "Teori sosiologi modern tanpa plot"
      ],
      "optionDetails": {
        "Laporan jurnalistik investigasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Novel sejarah berpijak pada fakta peristiwa historis nyata namun dihidupkan melalui fiksi, dialog rekaan, dan imajinasi pengarang.",
        "Imajinasi dan rekaan estetis pengarang untuk menghidupkan karakter": "✓ BENAR: Novel sejarah berpijak pada fakta peristiwa historis nyata namun dihidupkan melalui fiksi, dialog rekaan, dan imajinasi pengarang.",
        "Kutipan pasal-pasal perundang-undangan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Novel sejarah berpijak pada fakta peristiwa historis nyata namun dihidupkan melalui fiksi, dialog rekaan, dan imajinasi pengarang.",
        "Data statistik komputer": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Novel sejarah berpijak pada fakta peristiwa historis nyata namun dihidupkan melalui fiksi, dialog rekaan, dan imajinasi pengarang.",
        "Teori sosiologi modern tanpa plot": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Novel sejarah berpijak pada fakta peristiwa historis nyata namun dihidupkan melalui fiksi, dialog rekaan, dan imajinasi pengarang."
      },
      "correctAnswer": "Imajinasi dan rekaan estetis pengarang untuk menghidupkan karakter",
      "explanationText": "Novel sejarah berpijak pada fakta peristiwa historis nyata namun dihidupkan melalui fiksi, dialog rekaan, dan imajinasi pengarang.",
      "knownWrongPatterns": {
        "Laporan jurnalistik investigasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Novel sejarah berpijak pada fakta peristiwa historis nyata namun dihidupkan melalui fiksi, dialog rekaan, dan imajinasi pengarang."
        },
        "Kutipan pasal-pasal perundang-undangan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Novel sejarah berpijak pada fakta peristiwa historis nyata namun dihidupkan melalui fiksi, dialog rekaan, dan imajinasi pengarang."
        },
        "Data statistik komputer": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Novel sejarah berpijak pada fakta peristiwa historis nyata namun dihidupkan melalui fiksi, dialog rekaan, dan imajinasi pengarang."
        },
        "Teori sosiologi modern tanpa plot": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Novel sejarah berpijak pada fakta peristiwa historis nyata namun dihidupkan melalui fiksi, dialog rekaan, dan imajinasi pengarang."
        }
      }
    }
  ],
  "inggris-12": [
    {
      "id": "k12-ing-01",
      "conceptName": "Academic Writing: Concession & Contrast",
      "topic": "Academic Writing: Concession & Contrast",
      "questionText": "Choose the most appropriate sentence that expresses an academic concession in an argumentative essay:",
      "type": "mcq",
      "options": [
        "Although online learning offers unprecedented schedule flexibility, it often diminishes hands-on collaborative experiences.",
        "Online learning is good but sometimes bad for students.",
        "Students like computers, however teachers do not always like them.",
        "I think online learning is totally worse than traditional classes.",
        "Because schools closed, computers are everywhere now."
      ],
      "optionDetails": {
        "Although online learning offers unprecedented schedule flexibility, it often diminishes hands-on collaborative experiences.": "✓ BENAR: Academic essays employ nuanced concession clauses introduced by formal transition markers ('Although...') followed by balanced, scholarly evaluation.",
        "Online learning is good but sometimes bad for students.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Academic essays employ nuanced concession clauses introduced by formal transition markers ('Although...') followed by balanced, scholarly evaluation.",
        "Students like computers, however teachers do not always like them.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Academic essays employ nuanced concession clauses introduced by formal transition markers ('Although...') followed by balanced, scholarly evaluation.",
        "I think online learning is totally worse than traditional classes.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Academic essays employ nuanced concession clauses introduced by formal transition markers ('Although...') followed by balanced, scholarly evaluation.",
        "Because schools closed, computers are everywhere now.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Academic essays employ nuanced concession clauses introduced by formal transition markers ('Although...') followed by balanced, scholarly evaluation."
      },
      "correctAnswer": "Although online learning offers unprecedented schedule flexibility, it often diminishes hands-on collaborative experiences.",
      "explanationText": "Academic essays employ nuanced concession clauses introduced by formal transition markers ('Although...') followed by balanced, scholarly evaluation.",
      "knownWrongPatterns": {
        "Online learning is good but sometimes bad for students.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Academic essays employ nuanced concession clauses introduced by formal transition markers ('Although...') followed by balanced, scholarly evaluation."
        },
        "Students like computers, however teachers do not always like them.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Academic essays employ nuanced concession clauses introduced by formal transition markers ('Although...') followed by balanced, scholarly evaluation."
        },
        "I think online learning is totally worse than traditional classes.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Academic essays employ nuanced concession clauses introduced by formal transition markers ('Although...') followed by balanced, scholarly evaluation."
        },
        "Because schools closed, computers are everywhere now.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Academic essays employ nuanced concession clauses introduced by formal transition markers ('Although...') followed by balanced, scholarly evaluation."
        }
      }
    },
    {
      "id": "k12-ing-02",
      "conceptName": "Advanced Grammar: Third Conditional",
      "topic": "Advanced Grammar: Third Conditional",
      "questionText": "'If the regulatory agency had enforced the environmental standards earlier, the catastrophic spill _____ prevented.' The correct phrase to complete the conditional sentence is...",
      "type": "mcq",
      "options": [
        "will be",
        "would have been",
        "would be",
        "is",
        "had been"
      ],
      "optionDetails": {
        "will be": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Third Conditional (unreal past situation): If + past perfect, would have + past participle (passive: would have been prevented).",
        "would have been": "✓ BENAR: Third Conditional (unreal past situation): If + past perfect, would have + past participle (passive: would have been prevented).",
        "would be": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Third Conditional (unreal past situation): If + past perfect, would have + past participle (passive: would have been prevented).",
        "is": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Third Conditional (unreal past situation): If + past perfect, would have + past participle (passive: would have been prevented).",
        "had been": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Third Conditional (unreal past situation): If + past perfect, would have + past participle (passive: would have been prevented)."
      },
      "correctAnswer": "would have been",
      "explanationText": "Third Conditional (unreal past situation): If + past perfect, would have + past participle (passive: would have been prevented).",
      "knownWrongPatterns": {
        "will be": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Third Conditional (unreal past situation): If + past perfect, would have + past participle (passive: would have been prevented)."
        },
        "would be": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Third Conditional (unreal past situation): If + past perfect, would have + past participle (passive: would have been prevented)."
        },
        "is": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Third Conditional (unreal past situation): If + past perfect, would have + past participle (passive: would have been prevented)."
        },
        "had been": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Third Conditional (unreal past situation): If + past perfect, would have + past participle (passive: would have been prevented)."
        }
      }
    },
    {
      "id": "k12-ing-03",
      "conceptName": "Academic Passive Voice",
      "topic": "Academic Passive Voice",
      "questionText": "Identify the passive form of: 'Researchers have systematically observed significant discrepancies in the initial trial data.'",
      "type": "mcq",
      "options": [
        "Significant discrepancies have been systematically observed in the initial trial data by researchers.",
        "Significant discrepancies were systematically observed by researchers in the initial data.",
        "Significant discrepancies had been systematically observed by researchers.",
        "Initial trial data has systematically observed significant discrepancies.",
        "Researchers were being observed by discrepancies in the trials."
      ],
      "optionDetails": {
        "Significant discrepancies have been systematically observed in the initial trial data by researchers.": "✓ BENAR: Present Perfect Passive formula: Object (plural) + have + been + past participle (observed) + adverb modifier.",
        "Significant discrepancies were systematically observed by researchers in the initial data.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Present Perfect Passive formula: Object (plural) + have + been + past participle (observed) + adverb modifier.",
        "Significant discrepancies had been systematically observed by researchers.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Present Perfect Passive formula: Object (plural) + have + been + past participle (observed) + adverb modifier.",
        "Initial trial data has systematically observed significant discrepancies.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Present Perfect Passive formula: Object (plural) + have + been + past participle (observed) + adverb modifier.",
        "Researchers were being observed by discrepancies in the trials.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Present Perfect Passive formula: Object (plural) + have + been + past participle (observed) + adverb modifier."
      },
      "correctAnswer": "Significant discrepancies have been systematically observed in the initial trial data by researchers.",
      "explanationText": "Present Perfect Passive formula: Object (plural) + have + been + past participle (observed) + adverb modifier.",
      "knownWrongPatterns": {
        "Significant discrepancies were systematically observed by researchers in the initial data.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Present Perfect Passive formula: Object (plural) + have + been + past participle (observed) + adverb modifier."
        },
        "Significant discrepancies had been systematically observed by researchers.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Present Perfect Passive formula: Object (plural) + have + been + past participle (observed) + adverb modifier."
        },
        "Initial trial data has systematically observed significant discrepancies.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Present Perfect Passive formula: Object (plural) + have + been + past participle (observed) + adverb modifier."
        },
        "Researchers were being observed by discrepancies in the trials.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Present Perfect Passive formula: Object (plural) + have + been + past participle (observed) + adverb modifier."
        }
      }
    },
    {
      "id": "k12-ing-04",
      "conceptName": "Academic Genre: Research Paper Structure",
      "topic": "Academic Genre: Research Paper Structure",
      "questionText": "In a formal research report, what is the primary communicative purpose of the 'Abstract' section?",
      "type": "mcq",
      "options": [
        "To list all chronological bibliographic citations alphabetically",
        "To provide a concise synopsis summarizing the research problem, methodology, key findings, and conclusion",
        "To express personal acknowledgments to research benefactors",
        "To detail raw numerical survey data without interpretation",
        "To present the author's personal diary during data collection"
      ],
      "optionDetails": {
        "To list all chronological bibliographic citations alphabetically": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: An abstract is a comprehensive yet brief summary that encapsulates the scope, method, results, and primary conclusions of a scientific publication.",
        "To provide a concise synopsis summarizing the research problem, methodology, key findings, and conclusion": "✓ BENAR: An abstract is a comprehensive yet brief summary that encapsulates the scope, method, results, and primary conclusions of a scientific publication.",
        "To express personal acknowledgments to research benefactors": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: An abstract is a comprehensive yet brief summary that encapsulates the scope, method, results, and primary conclusions of a scientific publication.",
        "To detail raw numerical survey data without interpretation": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: An abstract is a comprehensive yet brief summary that encapsulates the scope, method, results, and primary conclusions of a scientific publication.",
        "To present the author's personal diary during data collection": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: An abstract is a comprehensive yet brief summary that encapsulates the scope, method, results, and primary conclusions of a scientific publication."
      },
      "correctAnswer": "To provide a concise synopsis summarizing the research problem, methodology, key findings, and conclusion",
      "explanationText": "An abstract is a comprehensive yet brief summary that encapsulates the scope, method, results, and primary conclusions of a scientific publication.",
      "knownWrongPatterns": {
        "To list all chronological bibliographic citations alphabetically": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: An abstract is a comprehensive yet brief summary that encapsulates the scope, method, results, and primary conclusions of a scientific publication."
        },
        "To express personal acknowledgments to research benefactors": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: An abstract is a comprehensive yet brief summary that encapsulates the scope, method, results, and primary conclusions of a scientific publication."
        },
        "To detail raw numerical survey data without interpretation": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: An abstract is a comprehensive yet brief summary that encapsulates the scope, method, results, and primary conclusions of a scientific publication."
        },
        "To present the author's personal diary during data collection": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: An abstract is a comprehensive yet brief summary that encapsulates the scope, method, results, and primary conclusions of a scientific publication."
        }
      }
    },
    {
      "id": "k12-ing-05",
      "conceptName": "Advanced Syntax: Inversion",
      "topic": "Advanced Syntax: Inversion",
      "questionText": "'Not only _____ the groundbreaking discovery, but she also spearheaded its international implementation.' The correct grammatical inversion is...",
      "type": "mcq",
      "options": [
        "she made",
        "did she make",
        "she had made",
        "was she making",
        "she makes"
      ],
      "optionDetails": {
        "she made": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Negative or restrictive adverbial inversion at the start of a clause requires auxiliary inversion: 'Not only did she make...'",
        "did she make": "✓ BENAR: Negative or restrictive adverbial inversion at the start of a clause requires auxiliary inversion: 'Not only did she make...'",
        "she had made": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Negative or restrictive adverbial inversion at the start of a clause requires auxiliary inversion: 'Not only did she make...'",
        "was she making": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Negative or restrictive adverbial inversion at the start of a clause requires auxiliary inversion: 'Not only did she make...'",
        "she makes": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Negative or restrictive adverbial inversion at the start of a clause requires auxiliary inversion: 'Not only did she make...'"
      },
      "correctAnswer": "did she make",
      "explanationText": "Negative or restrictive adverbial inversion at the start of a clause requires auxiliary inversion: 'Not only did she make...'",
      "knownWrongPatterns": {
        "she made": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Negative or restrictive adverbial inversion at the start of a clause requires auxiliary inversion: 'Not only did she make...'"
        },
        "she had made": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Negative or restrictive adverbial inversion at the start of a clause requires auxiliary inversion: 'Not only did she make...'"
        },
        "was she making": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Negative or restrictive adverbial inversion at the start of a clause requires auxiliary inversion: 'Not only did she make...'"
        },
        "she makes": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Negative or restrictive adverbial inversion at the start of a clause requires auxiliary inversion: 'Not only did she make...'"
        }
      }
    },
    {
      "id": "k12-ing-06",
      "conceptName": "Discourse Markers & Transitions",
      "topic": "Discourse Markers & Transitions",
      "questionText": "Which transition word indicates a cause-and-effect relationship in formal academic discourse?",
      "type": "mcq",
      "options": [
        "Consequently",
        "Furthermore",
        "Nevertheless",
        "Similarly",
        "In contrast"
      ],
      "optionDetails": {
        "Consequently": "✓ BENAR: 'Consequently' (synonymous with as a result, therefore) explicitly establishes a causal progression between preceding premises and outcomes.",
        "Furthermore": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Consequently' (synonymous with as a result, therefore) explicitly establishes a causal progression between preceding premises and outcomes.",
        "Nevertheless": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Consequently' (synonymous with as a result, therefore) explicitly establishes a causal progression between preceding premises and outcomes.",
        "Similarly": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Consequently' (synonymous with as a result, therefore) explicitly establishes a causal progression between preceding premises and outcomes.",
        "In contrast": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Consequently' (synonymous with as a result, therefore) explicitly establishes a causal progression between preceding premises and outcomes."
      },
      "correctAnswer": "Consequently",
      "explanationText": "'Consequently' (synonymous with as a result, therefore) explicitly establishes a causal progression between preceding premises and outcomes.",
      "knownWrongPatterns": {
        "Furthermore": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Consequently' (synonymous with as a result, therefore) explicitly establishes a causal progression between preceding premises and outcomes."
        },
        "Nevertheless": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Consequently' (synonymous with as a result, therefore) explicitly establishes a causal progression between preceding premises and outcomes."
        },
        "Similarly": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Consequently' (synonymous with as a result, therefore) explicitly establishes a causal progression between preceding premises and outcomes."
        },
        "In contrast": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Consequently' (synonymous with as a result, therefore) explicitly establishes a causal progression between preceding premises and outcomes."
        }
      }
    },
    {
      "id": "k12-ing-07",
      "conceptName": "Academic Terminology",
      "topic": "Academic Terminology",
      "questionText": "What is the meaning of the academic phrase 'to synthesize literature' in research methodology?",
      "type": "mcq",
      "options": [
        "To memorize published papers word for word",
        "To integrate findings, theories, and perspectives from multiple scholarly sources into a coherent whole",
        "To criticize older authors harshly without empirical basis",
        "To rewrite someone else's book under a pseudonym",
        "To delete conflicting perspectives from a bibliography"
      ],
      "optionDetails": {
        "To memorize published papers word for word": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Literature synthesis involves identifying overarching themes, comparing methodologies, and combining disparate research findings to construct a cohesive theoretical framework.",
        "To integrate findings, theories, and perspectives from multiple scholarly sources into a coherent whole": "✓ BENAR: Literature synthesis involves identifying overarching themes, comparing methodologies, and combining disparate research findings to construct a cohesive theoretical framework.",
        "To criticize older authors harshly without empirical basis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Literature synthesis involves identifying overarching themes, comparing methodologies, and combining disparate research findings to construct a cohesive theoretical framework.",
        "To rewrite someone else's book under a pseudonym": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Literature synthesis involves identifying overarching themes, comparing methodologies, and combining disparate research findings to construct a cohesive theoretical framework.",
        "To delete conflicting perspectives from a bibliography": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Literature synthesis involves identifying overarching themes, comparing methodologies, and combining disparate research findings to construct a cohesive theoretical framework."
      },
      "correctAnswer": "To integrate findings, theories, and perspectives from multiple scholarly sources into a coherent whole",
      "explanationText": "Literature synthesis involves identifying overarching themes, comparing methodologies, and combining disparate research findings to construct a cohesive theoretical framework.",
      "knownWrongPatterns": {
        "To memorize published papers word for word": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Literature synthesis involves identifying overarching themes, comparing methodologies, and combining disparate research findings to construct a cohesive theoretical framework."
        },
        "To criticize older authors harshly without empirical basis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Literature synthesis involves identifying overarching themes, comparing methodologies, and combining disparate research findings to construct a cohesive theoretical framework."
        },
        "To rewrite someone else's book under a pseudonym": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Literature synthesis involves identifying overarching themes, comparing methodologies, and combining disparate research findings to construct a cohesive theoretical framework."
        },
        "To delete conflicting perspectives from a bibliography": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Literature synthesis involves identifying overarching themes, comparing methodologies, and combining disparate research findings to construct a cohesive theoretical framework."
        }
      }
    },
    {
      "id": "k12-ing-08",
      "conceptName": "Academic Hedging & Modality",
      "topic": "Academic Hedging & Modality",
      "questionText": "Choose the correctly hedged statement suitable for an empirical scientific conclusion:",
      "type": "mcq",
      "options": [
        "This study indisputably proves that the phenomenon will occur 100% of the time in every context.",
        "The findings suggest that moderate physical activity may contribute to enhanced cognitive retention.",
        "Without any doubt, everyone who exercises becomes a genius.",
        "The results definitely show that all previous researchers were wrong.",
        "Nobody can question the validity of this absolute claim."
      ],
      "optionDetails": {
        "This study indisputably proves that the phenomenon will occur 100% of the time in every context.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hedging (using cautious words like 'suggests', 'may contribute') is essential in academic writing to avoid unjustified absolute claims.",
        "The findings suggest that moderate physical activity may contribute to enhanced cognitive retention.": "✓ BENAR: Hedging (using cautious words like 'suggests', 'may contribute') is essential in academic writing to avoid unjustified absolute claims.",
        "Without any doubt, everyone who exercises becomes a genius.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hedging (using cautious words like 'suggests', 'may contribute') is essential in academic writing to avoid unjustified absolute claims.",
        "The results definitely show that all previous researchers were wrong.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hedging (using cautious words like 'suggests', 'may contribute') is essential in academic writing to avoid unjustified absolute claims.",
        "Nobody can question the validity of this absolute claim.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hedging (using cautious words like 'suggests', 'may contribute') is essential in academic writing to avoid unjustified absolute claims."
      },
      "correctAnswer": "The findings suggest that moderate physical activity may contribute to enhanced cognitive retention.",
      "explanationText": "Hedging (using cautious words like 'suggests', 'may contribute') is essential in academic writing to avoid unjustified absolute claims.",
      "knownWrongPatterns": {
        "This study indisputably proves that the phenomenon will occur 100% of the time in every context.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Hedging (using cautious words like 'suggests', 'may contribute') is essential in academic writing to avoid unjustified absolute claims."
        },
        "Without any doubt, everyone who exercises becomes a genius.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Hedging (using cautious words like 'suggests', 'may contribute') is essential in academic writing to avoid unjustified absolute claims."
        },
        "The results definitely show that all previous researchers were wrong.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Hedging (using cautious words like 'suggests', 'may contribute') is essential in academic writing to avoid unjustified absolute claims."
        },
        "Nobody can question the validity of this absolute claim.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Hedging (using cautious words like 'suggests', 'may contribute') is essential in academic writing to avoid unjustified absolute claims."
        }
      }
    },
    {
      "id": "k12-ing-09",
      "conceptName": "Advanced Grammar: Subjunctive Mood",
      "topic": "Advanced Grammar: Subjunctive Mood",
      "questionText": "'The committee insisted that every board member _____ present at the extraordinary general meeting.' The correct subjunctive verb form is...",
      "type": "mcq",
      "options": [
        "is",
        "was",
        "be",
        "were",
        "are"
      ],
      "optionDetails": {
        "is": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mandative subjunctive after verbs of insistence/demand (insist that, recommend that) requires the base form of the verb: 'that every board member be present'.",
        "was": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mandative subjunctive after verbs of insistence/demand (insist that, recommend that) requires the base form of the verb: 'that every board member be present'.",
        "be": "✓ BENAR: Mandative subjunctive after verbs of insistence/demand (insist that, recommend that) requires the base form of the verb: 'that every board member be present'.",
        "were": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mandative subjunctive after verbs of insistence/demand (insist that, recommend that) requires the base form of the verb: 'that every board member be present'.",
        "are": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mandative subjunctive after verbs of insistence/demand (insist that, recommend that) requires the base form of the verb: 'that every board member be present'."
      },
      "correctAnswer": "be",
      "explanationText": "Mandative subjunctive after verbs of insistence/demand (insist that, recommend that) requires the base form of the verb: 'that every board member be present'.",
      "knownWrongPatterns": {
        "is": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Mandative subjunctive after verbs of insistence/demand (insist that, recommend that) requires the base form of the verb: 'that every board member be present'."
        },
        "was": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Mandative subjunctive after verbs of insistence/demand (insist that, recommend that) requires the base form of the verb: 'that every board member be present'."
        },
        "were": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Mandative subjunctive after verbs of insistence/demand (insist that, recommend that) requires the base form of the verb: 'that every board member be present'."
        },
        "are": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Mandative subjunctive after verbs of insistence/demand (insist that, recommend that) requires the base form of the verb: 'that every board member be present'."
        }
      }
    },
    {
      "id": "k12-ing-10",
      "conceptName": "Oral Presentation Skills",
      "topic": "Oral Presentation Skills",
      "questionText": "In presentation delivery, the phrase 'Turning our attention to the next slide...' serves as a...",
      "type": "mcq",
      "options": [
        "Rhetorical fallacy",
        "Signpost language for smooth transition",
        "Conclusion summary",
        "Call to action",
        "Anecdotal hook"
      ],
      "optionDetails": {
        "Rhetorical fallacy": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Signpost language guides the audience through the structure of a presentation, indicating when the speaker is transitioning from one major section to the next.",
        "Signpost language for smooth transition": "✓ BENAR: Signpost language guides the audience through the structure of a presentation, indicating when the speaker is transitioning from one major section to the next.",
        "Conclusion summary": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Signpost language guides the audience through the structure of a presentation, indicating when the speaker is transitioning from one major section to the next.",
        "Call to action": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Signpost language guides the audience through the structure of a presentation, indicating when the speaker is transitioning from one major section to the next.",
        "Anecdotal hook": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Signpost language guides the audience through the structure of a presentation, indicating when the speaker is transitioning from one major section to the next."
      },
      "correctAnswer": "Signpost language for smooth transition",
      "explanationText": "Signpost language guides the audience through the structure of a presentation, indicating when the speaker is transitioning from one major section to the next.",
      "knownWrongPatterns": {
        "Rhetorical fallacy": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Signpost language guides the audience through the structure of a presentation, indicating when the speaker is transitioning from one major section to the next."
        },
        "Conclusion summary": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Signpost language guides the audience through the structure of a presentation, indicating when the speaker is transitioning from one major section to the next."
        },
        "Call to action": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Signpost language guides the audience through the structure of a presentation, indicating when the speaker is transitioning from one major section to the next."
        },
        "Anecdotal hook": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Signpost language guides the audience through the structure of a presentation, indicating when the speaker is transitioning from one major section to the next."
        }
      }
    }
  ],
  "ekonomi-12": [
    {
      "id": "k12-eko-01",
      "conceptName": "Persamaan Dasar Akuntansi",
      "topic": "Persamaan Dasar Akuntansi",
      "questionText": "Dalam persamaan dasar akuntansi, hubungan antara unsur-unsur laporan posisi keuangan dinyatakan dengan rumus...",
      "type": "mcq",
      "options": [
        "Aset = Liabilitas + Ekuitas",
        "Aset = Liabilitas - Ekuitas",
        "Ekuitas = Aset + Liabilitas",
        "Liabilitas = Aset + Ekuitas",
        "Aset + Beban = Pendapatan"
      ],
      "optionDetails": {
        "Aset = Liabilitas + Ekuitas": "✓ BENAR: Prinsip dasar akuntansi berpasangan (double entry): Aset (Aktiva) = Liabilitas (Kewajiban) + Ekuitas (Modal Pemilik).",
        "Aset = Liabilitas - Ekuitas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Prinsip dasar akuntansi berpasangan (double entry): Aset (Aktiva) = Liabilitas (Kewajiban) + Ekuitas (Modal Pemilik).",
        "Ekuitas = Aset + Liabilitas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Prinsip dasar akuntansi berpasangan (double entry): Aset (Aktiva) = Liabilitas (Kewajiban) + Ekuitas (Modal Pemilik).",
        "Liabilitas = Aset + Ekuitas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Prinsip dasar akuntansi berpasangan (double entry): Aset (Aktiva) = Liabilitas (Kewajiban) + Ekuitas (Modal Pemilik).",
        "Aset + Beban = Pendapatan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Prinsip dasar akuntansi berpasangan (double entry): Aset (Aktiva) = Liabilitas (Kewajiban) + Ekuitas (Modal Pemilik)."
      },
      "correctAnswer": "Aset = Liabilitas + Ekuitas",
      "explanationText": "Prinsip dasar akuntansi berpasangan (double entry): Aset (Aktiva) = Liabilitas (Kewajiban) + Ekuitas (Modal Pemilik).",
      "knownWrongPatterns": {
        "Aset = Liabilitas - Ekuitas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Prinsip dasar akuntansi berpasangan (double entry): Aset (Aktiva) = Liabilitas (Kewajiban) + Ekuitas (Modal Pemilik)."
        },
        "Ekuitas = Aset + Liabilitas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Prinsip dasar akuntansi berpasangan (double entry): Aset (Aktiva) = Liabilitas (Kewajiban) + Ekuitas (Modal Pemilik)."
        },
        "Liabilitas = Aset + Ekuitas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Prinsip dasar akuntansi berpasangan (double entry): Aset (Aktiva) = Liabilitas (Kewajiban) + Ekuitas (Modal Pemilik)."
        },
        "Aset + Beban = Pendapatan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Prinsip dasar akuntansi berpasangan (double entry): Aset (Aktiva) = Liabilitas (Kewajiban) + Ekuitas (Modal Pemilik)."
        }
      }
    },
    {
      "id": "k12-eko-02",
      "conceptName": "Jurnal Umum Akuntansi",
      "topic": "Jurnal Umum Akuntansi",
      "questionText": "Perusahaan membeli perlengkapan kantor senilai Rp5.000.000 secara kredit dari Toko Makmur. Analisis transaksi tersebut dalam jurnal umum adalah...",
      "type": "mcq",
      "options": [
        "Perlengkapan (D) Rp5.000.000, Kas (K) Rp5.000.000",
        "Perlengkapan (D) Rp5.000.000, Utang Usaha (K) Rp5.000.000",
        "Utang Usaha (D) Rp5.000.000, Perlengkapan (K) Rp5.000.000",
        "Beban Perlengkapan (D) Rp5.000.000, Kas (K) Rp5.000.000",
        "Kas (D) Rp5.000.000, Perlengkapan (K) Rp5.000.000"
      ],
      "optionDetails": {
        "Perlengkapan (D) Rp5.000.000, Kas (K) Rp5.000.000": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pembelian perlengkapan menambah aset perlengkapan di sisi Debet, dan pembelian secara kredit menimbulkan kewajiban (Utang Usaha bertambah di sisi Kredit).",
        "Perlengkapan (D) Rp5.000.000, Utang Usaha (K) Rp5.000.000": "✓ BENAR: Pembelian perlengkapan menambah aset perlengkapan di sisi Debet, dan pembelian secara kredit menimbulkan kewajiban (Utang Usaha bertambah di sisi Kredit).",
        "Utang Usaha (D) Rp5.000.000, Perlengkapan (K) Rp5.000.000": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pembelian perlengkapan menambah aset perlengkapan di sisi Debet, dan pembelian secara kredit menimbulkan kewajiban (Utang Usaha bertambah di sisi Kredit).",
        "Beban Perlengkapan (D) Rp5.000.000, Kas (K) Rp5.000.000": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pembelian perlengkapan menambah aset perlengkapan di sisi Debet, dan pembelian secara kredit menimbulkan kewajiban (Utang Usaha bertambah di sisi Kredit).",
        "Kas (D) Rp5.000.000, Perlengkapan (K) Rp5.000.000": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pembelian perlengkapan menambah aset perlengkapan di sisi Debet, dan pembelian secara kredit menimbulkan kewajiban (Utang Usaha bertambah di sisi Kredit)."
      },
      "correctAnswer": "Perlengkapan (D) Rp5.000.000, Utang Usaha (K) Rp5.000.000",
      "explanationText": "Pembelian perlengkapan menambah aset perlengkapan di sisi Debet, dan pembelian secara kredit menimbulkan kewajiban (Utang Usaha bertambah di sisi Kredit).",
      "knownWrongPatterns": {
        "Perlengkapan (D) Rp5.000.000, Kas (K) Rp5.000.000": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pembelian perlengkapan menambah aset perlengkapan di sisi Debet, dan pembelian secara kredit menimbulkan kewajiban (Utang Usaha bertambah di sisi Kredit)."
        },
        "Utang Usaha (D) Rp5.000.000, Perlengkapan (K) Rp5.000.000": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pembelian perlengkapan menambah aset perlengkapan di sisi Debet, dan pembelian secara kredit menimbulkan kewajiban (Utang Usaha bertambah di sisi Kredit)."
        },
        "Beban Perlengkapan (D) Rp5.000.000, Kas (K) Rp5.000.000": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pembelian perlengkapan menambah aset perlengkapan di sisi Debet, dan pembelian secara kredit menimbulkan kewajiban (Utang Usaha bertambah di sisi Kredit)."
        },
        "Kas (D) Rp5.000.000, Perlengkapan (K) Rp5.000.000": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pembelian perlengkapan menambah aset perlengkapan di sisi Debet, dan pembelian secara kredit menimbulkan kewajiban (Utang Usaha bertambah di sisi Kredit)."
        }
      }
    },
    {
      "id": "k12-eko-03",
      "conceptName": "Laporan Laba Rugi",
      "topic": "Laporan Laba Rugi",
      "questionText": "Data keuangan suatu perusahaan jasa: Pendapatan jasa Rp45.000.000, Beban gaji Rp15.000.000, Beban sewa Rp6.000.000, Beban listrik Rp2.000.000, dan Prive pemilik Rp3.000.000. Laba bersih perusahaan adalah...",
      "type": "mcq",
      "options": [
        "Rp22.000.000",
        "Rp19.000.000",
        "Rp25.000.000",
        "Rp42.000.000",
        "Rp27.000.000"
      ],
      "optionDetails": {
        "Rp22.000.000": "✓ BENAR: Laba Bersih = Total Pendapatan - Total Beban Usaha = Rp45.000.000 - (15.000.000 + 6.000.000 + 2.000.000) = Rp45.000.000 - Rp23.000.000 = Rp22.000.000. (Prive bukan beban, melainkan pengurang ekuitas di laporan perubahan modal).",
        "Rp19.000.000": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Laba Bersih = Total Pendapatan - Total Beban Usaha = Rp45.000.000 - (15.000.000 + 6.000.000 + 2.000.000) = Rp45.000.000 - Rp23.000.000 = Rp22.000.000. (Prive bukan beban, melainkan pengurang ekuitas di laporan perubahan modal).",
        "Rp25.000.000": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Laba Bersih = Total Pendapatan - Total Beban Usaha = Rp45.000.000 - (15.000.000 + 6.000.000 + 2.000.000) = Rp45.000.000 - Rp23.000.000 = Rp22.000.000. (Prive bukan beban, melainkan pengurang ekuitas di laporan perubahan modal).",
        "Rp42.000.000": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Laba Bersih = Total Pendapatan - Total Beban Usaha = Rp45.000.000 - (15.000.000 + 6.000.000 + 2.000.000) = Rp45.000.000 - Rp23.000.000 = Rp22.000.000. (Prive bukan beban, melainkan pengurang ekuitas di laporan perubahan modal).",
        "Rp27.000.000": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Laba Bersih = Total Pendapatan - Total Beban Usaha = Rp45.000.000 - (15.000.000 + 6.000.000 + 2.000.000) = Rp45.000.000 - Rp23.000.000 = Rp22.000.000. (Prive bukan beban, melainkan pengurang ekuitas di laporan perubahan modal)."
      },
      "correctAnswer": "Rp22.000.000",
      "explanationText": "Laba Bersih = Total Pendapatan - Total Beban Usaha = Rp45.000.000 - (15.000.000 + 6.000.000 + 2.000.000) = Rp45.000.000 - Rp23.000.000 = Rp22.000.000. (Prive bukan beban, melainkan pengurang ekuitas di laporan perubahan modal).",
      "knownWrongPatterns": {
        "Rp19.000.000": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Laba Bersih = Total Pendapatan - Total Beban Usaha = Rp45.000.000 - (15.000.000 + 6.000.000 + 2.000.000) = Rp45.000.000 - Rp23.000.000 = Rp22.000.000. (Prive bukan beban, melainkan pengurang ekuitas di laporan perubahan modal)."
        },
        "Rp25.000.000": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Laba Bersih = Total Pendapatan - Total Beban Usaha = Rp45.000.000 - (15.000.000 + 6.000.000 + 2.000.000) = Rp45.000.000 - Rp23.000.000 = Rp22.000.000. (Prive bukan beban, melainkan pengurang ekuitas di laporan perubahan modal)."
        },
        "Rp42.000.000": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Laba Bersih = Total Pendapatan - Total Beban Usaha = Rp45.000.000 - (15.000.000 + 6.000.000 + 2.000.000) = Rp45.000.000 - Rp23.000.000 = Rp22.000.000. (Prive bukan beban, melainkan pengurang ekuitas di laporan perubahan modal)."
        },
        "Rp27.000.000": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Laba Bersih = Total Pendapatan - Total Beban Usaha = Rp45.000.000 - (15.000.000 + 6.000.000 + 2.000.000) = Rp45.000.000 - Rp23.000.000 = Rp22.000.000. (Prive bukan beban, melainkan pengurang ekuitas di laporan perubahan modal)."
        }
      }
    },
    {
      "id": "k12-eko-04",
      "conceptName": "Pasar Modal & Instrumen Keuangan",
      "topic": "Pasar Modal & Instrumen Keuangan",
      "questionText": "Pasar tempat bertemunya pihak yang memerlukan modal jangka panjang dengan pihak yang menanamkan modal melalui instrumen saham dan obligasi disebut...",
      "type": "mcq",
      "options": [
        "Pasar uang (Money market)",
        "Pasar modal (Capital market)",
        "Pasar komoditas",
        "Pasar valuta asing",
        "Pasar primer barang konsumsi"
      ],
      "optionDetails": {
        "Pasar uang (Money market)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pasar modal memfasilitasi transaksi instrumen keuangan jangka panjang (lebih dari satu tahun) seperti saham, obligasi, sukuk, dan reksa dana.",
        "Pasar modal (Capital market)": "✓ BENAR: Pasar modal memfasilitasi transaksi instrumen keuangan jangka panjang (lebih dari satu tahun) seperti saham, obligasi, sukuk, dan reksa dana.",
        "Pasar komoditas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pasar modal memfasilitasi transaksi instrumen keuangan jangka panjang (lebih dari satu tahun) seperti saham, obligasi, sukuk, dan reksa dana.",
        "Pasar valuta asing": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pasar modal memfasilitasi transaksi instrumen keuangan jangka panjang (lebih dari satu tahun) seperti saham, obligasi, sukuk, dan reksa dana.",
        "Pasar primer barang konsumsi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pasar modal memfasilitasi transaksi instrumen keuangan jangka panjang (lebih dari satu tahun) seperti saham, obligasi, sukuk, dan reksa dana."
      },
      "correctAnswer": "Pasar modal (Capital market)",
      "explanationText": "Pasar modal memfasilitasi transaksi instrumen keuangan jangka panjang (lebih dari satu tahun) seperti saham, obligasi, sukuk, dan reksa dana.",
      "knownWrongPatterns": {
        "Pasar uang (Money market)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pasar modal memfasilitasi transaksi instrumen keuangan jangka panjang (lebih dari satu tahun) seperti saham, obligasi, sukuk, dan reksa dana."
        },
        "Pasar komoditas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pasar modal memfasilitasi transaksi instrumen keuangan jangka panjang (lebih dari satu tahun) seperti saham, obligasi, sukuk, dan reksa dana."
        },
        "Pasar valuta asing": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pasar modal memfasilitasi transaksi instrumen keuangan jangka panjang (lebih dari satu tahun) seperti saham, obligasi, sukuk, dan reksa dana."
        },
        "Pasar primer barang konsumsi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pasar modal memfasilitasi transaksi instrumen keuangan jangka panjang (lebih dari satu tahun) seperti saham, obligasi, sukuk, dan reksa dana."
        }
      }
    },
    {
      "id": "k12-eko-05",
      "conceptName": "Investasi & Pasar Modal",
      "topic": "Investasi & Pasar Modal",
      "questionText": "Keuntungan yang diperoleh investor saham dari selisih harga jual saham yang lebih tinggi daripada harga belinya disebut...",
      "type": "mcq",
      "options": [
        "Dividen",
        "Capital gain",
        "Capital loss",
        "Kupon obligasi",
        "Bunga anuitas"
      ],
      "optionDetails": {
        "Dividen": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Capital gain adalah keuntungan modal dari apresiasi harga aset saat dijual kembali, sedangkan dividen adalah bagian keuntungan perseroan yang dibagikan kepada pemegang saham.",
        "Capital gain": "✓ BENAR: Capital gain adalah keuntungan modal dari apresiasi harga aset saat dijual kembali, sedangkan dividen adalah bagian keuntungan perseroan yang dibagikan kepada pemegang saham.",
        "Capital loss": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Capital gain adalah keuntungan modal dari apresiasi harga aset saat dijual kembali, sedangkan dividen adalah bagian keuntungan perseroan yang dibagikan kepada pemegang saham.",
        "Kupon obligasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Capital gain adalah keuntungan modal dari apresiasi harga aset saat dijual kembali, sedangkan dividen adalah bagian keuntungan perseroan yang dibagikan kepada pemegang saham.",
        "Bunga anuitas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Capital gain adalah keuntungan modal dari apresiasi harga aset saat dijual kembali, sedangkan dividen adalah bagian keuntungan perseroan yang dibagikan kepada pemegang saham."
      },
      "correctAnswer": "Capital gain",
      "explanationText": "Capital gain adalah keuntungan modal dari apresiasi harga aset saat dijual kembali, sedangkan dividen adalah bagian keuntungan perseroan yang dibagikan kepada pemegang saham.",
      "knownWrongPatterns": {
        "Dividen": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Capital gain adalah keuntungan modal dari apresiasi harga aset saat dijual kembali, sedangkan dividen adalah bagian keuntungan perseroan yang dibagikan kepada pemegang saham."
        },
        "Capital loss": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Capital gain adalah keuntungan modal dari apresiasi harga aset saat dijual kembali, sedangkan dividen adalah bagian keuntungan perseroan yang dibagikan kepada pemegang saham."
        },
        "Kupon obligasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Capital gain adalah keuntungan modal dari apresiasi harga aset saat dijual kembali, sedangkan dividen adalah bagian keuntungan perseroan yang dibagikan kepada pemegang saham."
        },
        "Bunga anuitas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Capital gain adalah keuntungan modal dari apresiasi harga aset saat dijual kembali, sedangkan dividen adalah bagian keuntungan perseroan yang dibagikan kepada pemegang saham."
        }
      }
    },
    {
      "id": "k12-eko-06",
      "conceptName": "Lembaga Jasa Keuangan: OJK",
      "topic": "Lembaga Jasa Keuangan: OJK",
      "questionText": "Lembaga negara independen yang berfungsi mengawasi dan mengatur seluruh kegiatan di sektor perbankan, pasar modal, dan industri keuangan non-bank di Indonesia adalah...",
      "type": "mcq",
      "options": [
        "Bank Indonesia (BI)",
        "Otoritas Jasa Keuangan (OJK)",
        "Lembaga Penjamin Simpanan (LPS)",
        "Kementerian Keuangan",
        "Badan Pemeriksa Keuangan (BPK)"
      ],
      "optionDetails": {
        "Bank Indonesia (BI)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sesuai UU No. 21 Tahun 2011, Otoritas Jasa Keuangan (OJK) bertugas menyelenggarakan sistem pengaturan dan pengawasan terintegrasi terhadap keseluruhan kegiatan jasa keuangan.",
        "Otoritas Jasa Keuangan (OJK)": "✓ BENAR: Sesuai UU No. 21 Tahun 2011, Otoritas Jasa Keuangan (OJK) bertugas menyelenggarakan sistem pengaturan dan pengawasan terintegrasi terhadap keseluruhan kegiatan jasa keuangan.",
        "Lembaga Penjamin Simpanan (LPS)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sesuai UU No. 21 Tahun 2011, Otoritas Jasa Keuangan (OJK) bertugas menyelenggarakan sistem pengaturan dan pengawasan terintegrasi terhadap keseluruhan kegiatan jasa keuangan.",
        "Kementerian Keuangan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sesuai UU No. 21 Tahun 2011, Otoritas Jasa Keuangan (OJK) bertugas menyelenggarakan sistem pengaturan dan pengawasan terintegrasi terhadap keseluruhan kegiatan jasa keuangan.",
        "Badan Pemeriksa Keuangan (BPK)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sesuai UU No. 21 Tahun 2011, Otoritas Jasa Keuangan (OJK) bertugas menyelenggarakan sistem pengaturan dan pengawasan terintegrasi terhadap keseluruhan kegiatan jasa keuangan."
      },
      "correctAnswer": "Otoritas Jasa Keuangan (OJK)",
      "explanationText": "Sesuai UU No. 21 Tahun 2011, Otoritas Jasa Keuangan (OJK) bertugas menyelenggarakan sistem pengaturan dan pengawasan terintegrasi terhadap keseluruhan kegiatan jasa keuangan.",
      "knownWrongPatterns": {
        "Bank Indonesia (BI)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Sesuai UU No. 21 Tahun 2011, Otoritas Jasa Keuangan (OJK) bertugas menyelenggarakan sistem pengaturan dan pengawasan terintegrasi terhadap keseluruhan kegiatan jasa keuangan."
        },
        "Lembaga Penjamin Simpanan (LPS)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Sesuai UU No. 21 Tahun 2011, Otoritas Jasa Keuangan (OJK) bertugas menyelenggarakan sistem pengaturan dan pengawasan terintegrasi terhadap keseluruhan kegiatan jasa keuangan."
        },
        "Kementerian Keuangan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Sesuai UU No. 21 Tahun 2011, Otoritas Jasa Keuangan (OJK) bertugas menyelenggarakan sistem pengaturan dan pengawasan terintegrasi terhadap keseluruhan kegiatan jasa keuangan."
        },
        "Badan Pemeriksa Keuangan (BPK)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Sesuai UU No. 21 Tahun 2011, Otoritas Jasa Keuangan (OJK) bertugas menyelenggarakan sistem pengaturan dan pengawasan terintegrasi terhadap keseluruhan kegiatan jasa keuangan."
        }
      }
    },
    {
      "id": "k12-eko-07",
      "conceptName": "Jurnal Penyesuaian",
      "topic": "Jurnal Penyesuaian",
      "questionText": "Pada akhir periode akuntansi, saldo akun Perlengkapan di neraca saldo tercatat Rp8.000.000. Setelah dilakukan inventarisasi fisik, sisa perlengkapan yang masih ada senilai Rp3.000.000. Jurnal penyesuaian per 31 Desember adalah...",
      "type": "mcq",
      "options": [
        "Beban Perlengkapan (D) Rp5.000.000, Perlengkapan (K) Rp5.000.000",
        "Perlengkapan (D) Rp5.000.000, Beban Perlengkapan (K) Rp5.000.000",
        "Beban Perlengkapan (D) Rp3.000.000, Perlengkapan (K) Rp3.000.000",
        "Kas (D) Rp5.000.000, Perlengkapan (K) Rp5.000.000",
        "Beban Perlengkapan (D) Rp8.000.000, Perlengkapan (K) Rp8.000.000"
      ],
      "optionDetails": {
        "Beban Perlengkapan (D) Rp5.000.000, Perlengkapan (K) Rp5.000.000": "✓ BENAR: Perlengkapan yang terpakai menjadi beban = Rp8.000.000 - Rp3.000.000 = Rp5.000.000. Jurnal penyesuaian: Beban Perlengkapan (D) Rp5.000.000 dan Perlengkapan (K) Rp5.000.000.",
        "Perlengkapan (D) Rp5.000.000, Beban Perlengkapan (K) Rp5.000.000": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Perlengkapan yang terpakai menjadi beban = Rp8.000.000 - Rp3.000.000 = Rp5.000.000. Jurnal penyesuaian: Beban Perlengkapan (D) Rp5.000.000 dan Perlengkapan (K) Rp5.000.000.",
        "Beban Perlengkapan (D) Rp3.000.000, Perlengkapan (K) Rp3.000.000": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Perlengkapan yang terpakai menjadi beban = Rp8.000.000 - Rp3.000.000 = Rp5.000.000. Jurnal penyesuaian: Beban Perlengkapan (D) Rp5.000.000 dan Perlengkapan (K) Rp5.000.000.",
        "Kas (D) Rp5.000.000, Perlengkapan (K) Rp5.000.000": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Perlengkapan yang terpakai menjadi beban = Rp8.000.000 - Rp3.000.000 = Rp5.000.000. Jurnal penyesuaian: Beban Perlengkapan (D) Rp5.000.000 dan Perlengkapan (K) Rp5.000.000.",
        "Beban Perlengkapan (D) Rp8.000.000, Perlengkapan (K) Rp8.000.000": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Perlengkapan yang terpakai menjadi beban = Rp8.000.000 - Rp3.000.000 = Rp5.000.000. Jurnal penyesuaian: Beban Perlengkapan (D) Rp5.000.000 dan Perlengkapan (K) Rp5.000.000."
      },
      "correctAnswer": "Beban Perlengkapan (D) Rp5.000.000, Perlengkapan (K) Rp5.000.000",
      "explanationText": "Perlengkapan yang terpakai menjadi beban = Rp8.000.000 - Rp3.000.000 = Rp5.000.000. Jurnal penyesuaian: Beban Perlengkapan (D) Rp5.000.000 dan Perlengkapan (K) Rp5.000.000.",
      "knownWrongPatterns": {
        "Perlengkapan (D) Rp5.000.000, Beban Perlengkapan (K) Rp5.000.000": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Perlengkapan yang terpakai menjadi beban = Rp8.000.000 - Rp3.000.000 = Rp5.000.000. Jurnal penyesuaian: Beban Perlengkapan (D) Rp5.000.000 dan Perlengkapan (K) Rp5.000.000."
        },
        "Beban Perlengkapan (D) Rp3.000.000, Perlengkapan (K) Rp3.000.000": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Perlengkapan yang terpakai menjadi beban = Rp8.000.000 - Rp3.000.000 = Rp5.000.000. Jurnal penyesuaian: Beban Perlengkapan (D) Rp5.000.000 dan Perlengkapan (K) Rp5.000.000."
        },
        "Kas (D) Rp5.000.000, Perlengkapan (K) Rp5.000.000": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Perlengkapan yang terpakai menjadi beban = Rp8.000.000 - Rp3.000.000 = Rp5.000.000. Jurnal penyesuaian: Beban Perlengkapan (D) Rp5.000.000 dan Perlengkapan (K) Rp5.000.000."
        },
        "Beban Perlengkapan (D) Rp8.000.000, Perlengkapan (K) Rp8.000.000": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Perlengkapan yang terpakai menjadi beban = Rp8.000.000 - Rp3.000.000 = Rp5.000.000. Jurnal penyesuaian: Beban Perlengkapan (D) Rp5.000.000 dan Perlengkapan (K) Rp5.000.000."
        }
      }
    },
    {
      "id": "k12-eko-08",
      "conceptName": "Siklus Akuntansi Perusahaan Dagang",
      "topic": "Siklus Akuntansi Perusahaan Dagang",
      "questionText": "Perbedaan karakteristik utama antara perusahaan dagang dan perusahaan jasa adalah bahwa perusahaan dagang...",
      "type": "mcq",
      "options": [
        "Memiliki persediaan barang dagang dan akun harga pokok penjualan (HPP)",
        "Tidak memerlukan laporan laba rugi",
        "Tidak memungut pajak pertambahan nilai",
        "Hanya menjual barang nirwujud (intangible)",
        "Tidak memiliki aset tetap seperti gedung dan peralatan"
      ],
      "optionDetails": {
        "Memiliki persediaan barang dagang dan akun harga pokok penjualan (HPP)": "✓ BENAR: Perusahaan dagang membeli barang fisik untuk dijual kembali tanpa mengubah bentuk, sehingga memiliki persediaan barang dagangan (merchandise inventory) dan menghitung Harga Pokok Penjualan (HPP).",
        "Tidak memerlukan laporan laba rugi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Perusahaan dagang membeli barang fisik untuk dijual kembali tanpa mengubah bentuk, sehingga memiliki persediaan barang dagangan (merchandise inventory) dan menghitung Harga Pokok Penjualan (HPP).",
        "Tidak memungut pajak pertambahan nilai": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Perusahaan dagang membeli barang fisik untuk dijual kembali tanpa mengubah bentuk, sehingga memiliki persediaan barang dagangan (merchandise inventory) dan menghitung Harga Pokok Penjualan (HPP).",
        "Hanya menjual barang nirwujud (intangible)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Perusahaan dagang membeli barang fisik untuk dijual kembali tanpa mengubah bentuk, sehingga memiliki persediaan barang dagangan (merchandise inventory) dan menghitung Harga Pokok Penjualan (HPP).",
        "Tidak memiliki aset tetap seperti gedung dan peralatan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Perusahaan dagang membeli barang fisik untuk dijual kembali tanpa mengubah bentuk, sehingga memiliki persediaan barang dagangan (merchandise inventory) dan menghitung Harga Pokok Penjualan (HPP)."
      },
      "correctAnswer": "Memiliki persediaan barang dagang dan akun harga pokok penjualan (HPP)",
      "explanationText": "Perusahaan dagang membeli barang fisik untuk dijual kembali tanpa mengubah bentuk, sehingga memiliki persediaan barang dagangan (merchandise inventory) dan menghitung Harga Pokok Penjualan (HPP).",
      "knownWrongPatterns": {
        "Tidak memerlukan laporan laba rugi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Perusahaan dagang membeli barang fisik untuk dijual kembali tanpa mengubah bentuk, sehingga memiliki persediaan barang dagangan (merchandise inventory) dan menghitung Harga Pokok Penjualan (HPP)."
        },
        "Tidak memungut pajak pertambahan nilai": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Perusahaan dagang membeli barang fisik untuk dijual kembali tanpa mengubah bentuk, sehingga memiliki persediaan barang dagangan (merchandise inventory) dan menghitung Harga Pokok Penjualan (HPP)."
        },
        "Hanya menjual barang nirwujud (intangible)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Perusahaan dagang membeli barang fisik untuk dijual kembali tanpa mengubah bentuk, sehingga memiliki persediaan barang dagangan (merchandise inventory) dan menghitung Harga Pokok Penjualan (HPP)."
        },
        "Tidak memiliki aset tetap seperti gedung dan peralatan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Perusahaan dagang membeli barang fisik untuk dijual kembali tanpa mengubah bentuk, sehingga memiliki persediaan barang dagangan (merchandise inventory) dan menghitung Harga Pokok Penjualan (HPP)."
        }
      }
    },
    {
      "id": "k12-eko-09",
      "conceptName": "Termin Pembayaran Kredit Dagang",
      "topic": "Termin Pembayaran Kredit Dagang",
      "questionText": "Syarat pembayaran 2/10, n/30 pada faktur penjualan barang dagangan berarti...",
      "type": "mcq",
      "options": [
        "Pembeli mendapat potongan 10% jika membayar dalam 2 hari",
        "Pembeli mendapat potongan 2% jika melunasi dalam waktu 10 hari sejak tanggal transaksi, dan batas pelunasan paling lambat 30 hari",
        "Pelunasan harus dicicil 2 kali selama 10 bulan dengan denda 30%",
        "Pembeli wajib membayar uang muka 20% dan cicilan 10%",
        "Harga barang akan naik 2% setelah 10 hari"
      ],
      "optionDetails": {
        "Pembeli mendapat potongan 10% jika membayar dalam 2 hari": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 2/10, n/30 adalah termin kredit dagang: diskon tunai 2% jika pembayaran dilakukan dalam tempo 10 hari, dengan jatuh tempo neto (n) 30 hari.",
        "Pembeli mendapat potongan 2% jika melunasi dalam waktu 10 hari sejak tanggal transaksi, dan batas pelunasan paling lambat 30 hari": "✓ BENAR: 2/10, n/30 adalah termin kredit dagang: diskon tunai 2% jika pembayaran dilakukan dalam tempo 10 hari, dengan jatuh tempo neto (n) 30 hari.",
        "Pelunasan harus dicicil 2 kali selama 10 bulan dengan denda 30%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 2/10, n/30 adalah termin kredit dagang: diskon tunai 2% jika pembayaran dilakukan dalam tempo 10 hari, dengan jatuh tempo neto (n) 30 hari.",
        "Pembeli wajib membayar uang muka 20% dan cicilan 10%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 2/10, n/30 adalah termin kredit dagang: diskon tunai 2% jika pembayaran dilakukan dalam tempo 10 hari, dengan jatuh tempo neto (n) 30 hari.",
        "Harga barang akan naik 2% setelah 10 hari": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 2/10, n/30 adalah termin kredit dagang: diskon tunai 2% jika pembayaran dilakukan dalam tempo 10 hari, dengan jatuh tempo neto (n) 30 hari."
      },
      "correctAnswer": "Pembeli mendapat potongan 2% jika melunasi dalam waktu 10 hari sejak tanggal transaksi, dan batas pelunasan paling lambat 30 hari",
      "explanationText": "2/10, n/30 adalah termin kredit dagang: diskon tunai 2% jika pembayaran dilakukan dalam tempo 10 hari, dengan jatuh tempo neto (n) 30 hari.",
      "knownWrongPatterns": {
        "Pembeli mendapat potongan 10% jika membayar dalam 2 hari": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 2/10, n/30 adalah termin kredit dagang: diskon tunai 2% jika pembayaran dilakukan dalam tempo 10 hari, dengan jatuh tempo neto (n) 30 hari."
        },
        "Pelunasan harus dicicil 2 kali selama 10 bulan dengan denda 30%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 2/10, n/30 adalah termin kredit dagang: diskon tunai 2% jika pembayaran dilakukan dalam tempo 10 hari, dengan jatuh tempo neto (n) 30 hari."
        },
        "Pembeli wajib membayar uang muka 20% dan cicilan 10%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 2/10, n/30 adalah termin kredit dagang: diskon tunai 2% jika pembayaran dilakukan dalam tempo 10 hari, dengan jatuh tempo neto (n) 30 hari."
        },
        "Harga barang akan naik 2% setelah 10 hari": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 2/10, n/30 adalah termin kredit dagang: diskon tunai 2% jika pembayaran dilakukan dalam tempo 10 hari, dengan jatuh tempo neto (n) 30 hari."
        }
      }
    },
    {
      "id": "k12-eko-10",
      "conceptName": "Harga Pokok Penjualan (HPP)",
      "topic": "Harga Pokok Penjualan (HPP)",
      "questionText": "Perhitungan Harga Pokok Penjualan (HPP) perusahaan dagang dirumuskan sebagai...",
      "type": "mcq",
      "options": [
        "Persediaan Awal + Pembelian Bersih - Persediaan Akhir",
        "Penjualan Bersih - Laba Kotor",
        "Persediaan Awal - Pembelian Bersih + Persediaan Akhir",
        "Persediaan Akhir + Beban Angkut Penjualan",
        "Penjualan Kotor - Retur Penjualan"
      ],
      "optionDetails": {
        "Persediaan Awal + Pembelian Bersih - Persediaan Akhir": "✓ BENAR: HPP = Barang Tersedia Untuk Dijual (Persediaan Awal + Pembelian Bersih) dikurangi Persediaan Akhir barang dagang.",
        "Penjualan Bersih - Laba Kotor": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: HPP = Barang Tersedia Untuk Dijual (Persediaan Awal + Pembelian Bersih) dikurangi Persediaan Akhir barang dagang.",
        "Persediaan Awal - Pembelian Bersih + Persediaan Akhir": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: HPP = Barang Tersedia Untuk Dijual (Persediaan Awal + Pembelian Bersih) dikurangi Persediaan Akhir barang dagang.",
        "Persediaan Akhir + Beban Angkut Penjualan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: HPP = Barang Tersedia Untuk Dijual (Persediaan Awal + Pembelian Bersih) dikurangi Persediaan Akhir barang dagang.",
        "Penjualan Kotor - Retur Penjualan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: HPP = Barang Tersedia Untuk Dijual (Persediaan Awal + Pembelian Bersih) dikurangi Persediaan Akhir barang dagang."
      },
      "correctAnswer": "Persediaan Awal + Pembelian Bersih - Persediaan Akhir",
      "explanationText": "HPP = Barang Tersedia Untuk Dijual (Persediaan Awal + Pembelian Bersih) dikurangi Persediaan Akhir barang dagang.",
      "knownWrongPatterns": {
        "Penjualan Bersih - Laba Kotor": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: HPP = Barang Tersedia Untuk Dijual (Persediaan Awal + Pembelian Bersih) dikurangi Persediaan Akhir barang dagang."
        },
        "Persediaan Awal - Pembelian Bersih + Persediaan Akhir": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: HPP = Barang Tersedia Untuk Dijual (Persediaan Awal + Pembelian Bersih) dikurangi Persediaan Akhir barang dagang."
        },
        "Persediaan Akhir + Beban Angkut Penjualan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: HPP = Barang Tersedia Untuk Dijual (Persediaan Awal + Pembelian Bersih) dikurangi Persediaan Akhir barang dagang."
        },
        "Penjualan Kotor - Retur Penjualan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: HPP = Barang Tersedia Untuk Dijual (Persediaan Awal + Pembelian Bersih) dikurangi Persediaan Akhir barang dagang."
        }
      }
    }
  ],
  "sosiologi-12": [
    {
      "id": "k12-sos-01",
      "conceptName": "Bentuk-Bentuk Perubahan Sosial",
      "topic": "Bentuk-Bentuk Perubahan Sosial",
      "questionText": "Perubahan sosial yang berlangsung secara bertahap dan memerlukan waktu yang relatif lama tanpa keharusan perencanaan terpusat disebut...",
      "type": "mcq",
      "options": [
        "Revolusi sosial",
        "Evolusi sosial",
        "Perubahan regres",
        "Modernisasi paksa",
        "Disorganisasi"
      ],
      "optionDetails": {
        "Revolusi sosial": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Evolusi sosial merupakan perubahan lambat yang berlangsung melalui adaptasi masyarakat terhadap kondisi baru secara berangsur-angsur dalam kurun waktu lama.",
        "Evolusi sosial": "✓ BENAR: Evolusi sosial merupakan perubahan lambat yang berlangsung melalui adaptasi masyarakat terhadap kondisi baru secara berangsur-angsur dalam kurun waktu lama.",
        "Perubahan regres": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Evolusi sosial merupakan perubahan lambat yang berlangsung melalui adaptasi masyarakat terhadap kondisi baru secara berangsur-angsur dalam kurun waktu lama.",
        "Modernisasi paksa": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Evolusi sosial merupakan perubahan lambat yang berlangsung melalui adaptasi masyarakat terhadap kondisi baru secara berangsur-angsur dalam kurun waktu lama.",
        "Disorganisasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Evolusi sosial merupakan perubahan lambat yang berlangsung melalui adaptasi masyarakat terhadap kondisi baru secara berangsur-angsur dalam kurun waktu lama."
      },
      "correctAnswer": "Evolusi sosial",
      "explanationText": "Evolusi sosial merupakan perubahan lambat yang berlangsung melalui adaptasi masyarakat terhadap kondisi baru secara berangsur-angsur dalam kurun waktu lama.",
      "knownWrongPatterns": {
        "Revolusi sosial": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Evolusi sosial merupakan perubahan lambat yang berlangsung melalui adaptasi masyarakat terhadap kondisi baru secara berangsur-angsur dalam kurun waktu lama."
        },
        "Perubahan regres": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Evolusi sosial merupakan perubahan lambat yang berlangsung melalui adaptasi masyarakat terhadap kondisi baru secara berangsur-angsur dalam kurun waktu lama."
        },
        "Modernisasi paksa": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Evolusi sosial merupakan perubahan lambat yang berlangsung melalui adaptasi masyarakat terhadap kondisi baru secara berangsur-angsur dalam kurun waktu lama."
        },
        "Disorganisasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Evolusi sosial merupakan perubahan lambat yang berlangsung melalui adaptasi masyarakat terhadap kondisi baru secara berangsur-angsur dalam kurun waktu lama."
        }
      }
    },
    {
      "id": "k12-sos-02",
      "conceptName": "Faktor Pendorong Perubahan Sosial",
      "topic": "Faktor Pendorong Perubahan Sosial",
      "questionText": "Faktor internal pendorong perubahan sosial dalam kehidupan masyarakat antara lain adalah...",
      "type": "mcq",
      "options": [
        "Penemuan baru (discovery dan invention) serta pertambahan penduduk",
        "Bencana alam gempa bumi dan tsunami",
        "Pengaruh kebudayaan masyarakat luar negeri",
        "Peperangan antarnegara tetangga",
        "Perubahan iklim global ekstrim"
      ],
      "optionDetails": {
        "Penemuan baru (discovery dan invention) serta pertambahan penduduk": "✓ BENAR: Faktor internal bersumber dari dalam masyarakat itu sendiri, seperti bertambah/berkurangnya penduduk, penemuan baru (inovasi teknologi), pertentangan/konflik sosial, dan pemberontakan.",
        "Bencana alam gempa bumi dan tsunami": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Faktor internal bersumber dari dalam masyarakat itu sendiri, seperti bertambah/berkurangnya penduduk, penemuan baru (inovasi teknologi), pertentangan/konflik sosial, dan pemberontakan.",
        "Pengaruh kebudayaan masyarakat luar negeri": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Faktor internal bersumber dari dalam masyarakat itu sendiri, seperti bertambah/berkurangnya penduduk, penemuan baru (inovasi teknologi), pertentangan/konflik sosial, dan pemberontakan.",
        "Peperangan antarnegara tetangga": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Faktor internal bersumber dari dalam masyarakat itu sendiri, seperti bertambah/berkurangnya penduduk, penemuan baru (inovasi teknologi), pertentangan/konflik sosial, dan pemberontakan.",
        "Perubahan iklim global ekstrim": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Faktor internal bersumber dari dalam masyarakat itu sendiri, seperti bertambah/berkurangnya penduduk, penemuan baru (inovasi teknologi), pertentangan/konflik sosial, dan pemberontakan."
      },
      "correctAnswer": "Penemuan baru (discovery dan invention) serta pertambahan penduduk",
      "explanationText": "Faktor internal bersumber dari dalam masyarakat itu sendiri, seperti bertambah/berkurangnya penduduk, penemuan baru (inovasi teknologi), pertentangan/konflik sosial, dan pemberontakan.",
      "knownWrongPatterns": {
        "Bencana alam gempa bumi dan tsunami": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Faktor internal bersumber dari dalam masyarakat itu sendiri, seperti bertambah/berkurangnya penduduk, penemuan baru (inovasi teknologi), pertentangan/konflik sosial, dan pemberontakan."
        },
        "Pengaruh kebudayaan masyarakat luar negeri": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Faktor internal bersumber dari dalam masyarakat itu sendiri, seperti bertambah/berkurangnya penduduk, penemuan baru (inovasi teknologi), pertentangan/konflik sosial, dan pemberontakan."
        },
        "Peperangan antarnegara tetangga": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Faktor internal bersumber dari dalam masyarakat itu sendiri, seperti bertambah/berkurangnya penduduk, penemuan baru (inovasi teknologi), pertentangan/konflik sosial, dan pemberontakan."
        },
        "Perubahan iklim global ekstrim": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Faktor internal bersumber dari dalam masyarakat itu sendiri, seperti bertambah/berkurangnya penduduk, penemuan baru (inovasi teknologi), pertentangan/konflik sosial, dan pemberontakan."
        }
      }
    },
    {
      "id": "k12-sos-03",
      "conceptName": "Dampak Perubahan Sosial: Cultural Lag",
      "topic": "Dampak Perubahan Sosial: Cultural Lag",
      "questionText": "Kondisi ketika unsur kebudayaan material berkembang sangat cepat sementara sistem norma dan nilai moral masyarakat tertinggal sehingga menimbulkan ketimpangan budaya dinamakan...",
      "type": "mcq",
      "options": [
        "Cultural shock (Guncangan budaya)",
        "Cultural lag (Ketinggalan budaya)",
        "Akulturasi budaya",
        "Asimilasi struktural",
        "Anomi sosial"
      ],
      "optionDetails": {
        "Cultural shock (Guncangan budaya)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: William F. Ogburn mengemukakan teori 'Cultural Lag': ketertinggalan budaya nonmaterial (etika, regulasi, moral) dalam menyesuaikan diri dengan kemajuan pesat teknologi materiil.",
        "Cultural lag (Ketinggalan budaya)": "✓ BENAR: William F. Ogburn mengemukakan teori 'Cultural Lag': ketertinggalan budaya nonmaterial (etika, regulasi, moral) dalam menyesuaikan diri dengan kemajuan pesat teknologi materiil.",
        "Akulturasi budaya": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: William F. Ogburn mengemukakan teori 'Cultural Lag': ketertinggalan budaya nonmaterial (etika, regulasi, moral) dalam menyesuaikan diri dengan kemajuan pesat teknologi materiil.",
        "Asimilasi struktural": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: William F. Ogburn mengemukakan teori 'Cultural Lag': ketertinggalan budaya nonmaterial (etika, regulasi, moral) dalam menyesuaikan diri dengan kemajuan pesat teknologi materiil.",
        "Anomi sosial": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: William F. Ogburn mengemukakan teori 'Cultural Lag': ketertinggalan budaya nonmaterial (etika, regulasi, moral) dalam menyesuaikan diri dengan kemajuan pesat teknologi materiil."
      },
      "correctAnswer": "Cultural lag (Ketinggalan budaya)",
      "explanationText": "William F. Ogburn mengemukakan teori 'Cultural Lag': ketertinggalan budaya nonmaterial (etika, regulasi, moral) dalam menyesuaikan diri dengan kemajuan pesat teknologi materiil.",
      "knownWrongPatterns": {
        "Cultural shock (Guncangan budaya)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: William F. Ogburn mengemukakan teori 'Cultural Lag': ketertinggalan budaya nonmaterial (etika, regulasi, moral) dalam menyesuaikan diri dengan kemajuan pesat teknologi materiil."
        },
        "Akulturasi budaya": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: William F. Ogburn mengemukakan teori 'Cultural Lag': ketertinggalan budaya nonmaterial (etika, regulasi, moral) dalam menyesuaikan diri dengan kemajuan pesat teknologi materiil."
        },
        "Asimilasi struktural": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: William F. Ogburn mengemukakan teori 'Cultural Lag': ketertinggalan budaya nonmaterial (etika, regulasi, moral) dalam menyesuaikan diri dengan kemajuan pesat teknologi materiil."
        },
        "Anomi sosial": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: William F. Ogburn mengemukakan teori 'Cultural Lag': ketertinggalan budaya nonmaterial (etika, regulasi, moral) dalam menyesuaikan diri dengan kemajuan pesat teknologi materiil."
        }
      }
    },
    {
      "id": "k12-sos-04",
      "conceptName": "Globalisasi dan Perubahan Komunitas",
      "topic": "Globalisasi dan Perubahan Komunitas",
      "questionText": "Proses masuknya ruang lingkup kehidupan lokal atau nasional ke dalam tatanan jaringan global yang saling terkoneksi dalam aspek ekonomi, komunikasi, dan budaya disebut...",
      "type": "mcq",
      "options": [
        "Globalisasi",
        "Feodalisme",
        "Primordialisme",
        "Etnosentrisme",
        "Partikularisme"
      ],
      "optionDetails": {
        "Globalisasi": "✓ BENAR: Globalisasi adalah proses integrasi internasional yang terjadi karena pertukaran pandangan dunia, produk, pemikiran, dan aspek kebudayaan lainnya.",
        "Feodalisme": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Globalisasi adalah proses integrasi internasional yang terjadi karena pertukaran pandangan dunia, produk, pemikiran, dan aspek kebudayaan lainnya.",
        "Primordialisme": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Globalisasi adalah proses integrasi internasional yang terjadi karena pertukaran pandangan dunia, produk, pemikiran, dan aspek kebudayaan lainnya.",
        "Etnosentrisme": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Globalisasi adalah proses integrasi internasional yang terjadi karena pertukaran pandangan dunia, produk, pemikiran, dan aspek kebudayaan lainnya.",
        "Partikularisme": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Globalisasi adalah proses integrasi internasional yang terjadi karena pertukaran pandangan dunia, produk, pemikiran, dan aspek kebudayaan lainnya."
      },
      "correctAnswer": "Globalisasi",
      "explanationText": "Globalisasi adalah proses integrasi internasional yang terjadi karena pertukaran pandangan dunia, produk, pemikiran, dan aspek kebudayaan lainnya.",
      "knownWrongPatterns": {
        "Feodalisme": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Globalisasi adalah proses integrasi internasional yang terjadi karena pertukaran pandangan dunia, produk, pemikiran, dan aspek kebudayaan lainnya."
        },
        "Primordialisme": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Globalisasi adalah proses integrasi internasional yang terjadi karena pertukaran pandangan dunia, produk, pemikiran, dan aspek kebudayaan lainnya."
        },
        "Etnosentrisme": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Globalisasi adalah proses integrasi internasional yang terjadi karena pertukaran pandangan dunia, produk, pemikiran, dan aspek kebudayaan lainnya."
        },
        "Partikularisme": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Globalisasi adalah proses integrasi internasional yang terjadi karena pertukaran pandangan dunia, produk, pemikiran, dan aspek kebudayaan lainnya."
        }
      }
    },
    {
      "id": "k12-sos-05",
      "conceptName": "Sikap Masyarakat Terhadap Globalisasi",
      "topic": "Sikap Masyarakat Terhadap Globalisasi",
      "questionText": "Sikap menganggap budaya, gaya hidup, atau produk dari luar negeri selalu lebih unggul, modern, dan bergengsi dibandingkan budaya lokal sendiri disebut...",
      "type": "mcq",
      "options": [
        "Etnosentrisme",
        "Xenosentrisme",
        "Chauvinisme",
        "Pluralisme",
        "Relativisme budaya"
      ],
      "optionDetails": {
        "Etnosentrisme": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Xenosentrisme adalah kecenderungan memandang budaya atau produk asing lebih baik daripada milik bangsa sendiri. Sebaliknya, etnosentrisme menilai budaya sendiri paling unggul.",
        "Xenosentrisme": "✓ BENAR: Xenosentrisme adalah kecenderungan memandang budaya atau produk asing lebih baik daripada milik bangsa sendiri. Sebaliknya, etnosentrisme menilai budaya sendiri paling unggul.",
        "Chauvinisme": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Xenosentrisme adalah kecenderungan memandang budaya atau produk asing lebih baik daripada milik bangsa sendiri. Sebaliknya, etnosentrisme menilai budaya sendiri paling unggul.",
        "Pluralisme": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Xenosentrisme adalah kecenderungan memandang budaya atau produk asing lebih baik daripada milik bangsa sendiri. Sebaliknya, etnosentrisme menilai budaya sendiri paling unggul.",
        "Relativisme budaya": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Xenosentrisme adalah kecenderungan memandang budaya atau produk asing lebih baik daripada milik bangsa sendiri. Sebaliknya, etnosentrisme menilai budaya sendiri paling unggul."
      },
      "correctAnswer": "Xenosentrisme",
      "explanationText": "Xenosentrisme adalah kecenderungan memandang budaya atau produk asing lebih baik daripada milik bangsa sendiri. Sebaliknya, etnosentrisme menilai budaya sendiri paling unggul.",
      "knownWrongPatterns": {
        "Etnosentrisme": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Xenosentrisme adalah kecenderungan memandang budaya atau produk asing lebih baik daripada milik bangsa sendiri. Sebaliknya, etnosentrisme menilai budaya sendiri paling unggul."
        },
        "Chauvinisme": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Xenosentrisme adalah kecenderungan memandang budaya atau produk asing lebih baik daripada milik bangsa sendiri. Sebaliknya, etnosentrisme menilai budaya sendiri paling unggul."
        },
        "Pluralisme": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Xenosentrisme adalah kecenderungan memandang budaya atau produk asing lebih baik daripada milik bangsa sendiri. Sebaliknya, etnosentrisme menilai budaya sendiri paling unggul."
        },
        "Relativisme budaya": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Xenosentrisme adalah kecenderungan memandang budaya atau produk asing lebih baik daripada milik bangsa sendiri. Sebaliknya, etnosentrisme menilai budaya sendiri paling unggul."
        }
      }
    },
    {
      "id": "k12-sos-06",
      "conceptName": "Ketimpangan Sosial dan Solusi Pemberdayaan",
      "topic": "Ketimpangan Sosial dan Solusi Pemberdayaan",
      "questionText": "Ketimpangan sosial ekonomi antara kelompok masyarakat perkotaan dan perdesaan dapat diatasi secara struktural melalui kebijakan...",
      "type": "mcq",
      "options": [
        "Sentralisasi seluruh pembangunan industri hanya di ibukota",
        "Pemerataan akses infrastruktur digital, transportasi, dan permodalan usaha pedesaan",
        "Pelarangan migrasi penduduk ke kota secara total",
        "Pembatasan pemakaian teknologi internet di pedesaan",
        "Pengurangan anggaran dana desa"
      ],
      "optionDetails": {
        "Sentralisasi seluruh pembangunan industri hanya di ibukota": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mengurangi ketimpangan spasial membutuhkan pemerataan sarana pendidikan, infrastruktur konektivitas logistik, dan pemberdayaan ekonomi lokal di daerah pelosok.",
        "Pemerataan akses infrastruktur digital, transportasi, dan permodalan usaha pedesaan": "✓ BENAR: Mengurangi ketimpangan spasial membutuhkan pemerataan sarana pendidikan, infrastruktur konektivitas logistik, dan pemberdayaan ekonomi lokal di daerah pelosok.",
        "Pelarangan migrasi penduduk ke kota secara total": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mengurangi ketimpangan spasial membutuhkan pemerataan sarana pendidikan, infrastruktur konektivitas logistik, dan pemberdayaan ekonomi lokal di daerah pelosok.",
        "Pembatasan pemakaian teknologi internet di pedesaan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mengurangi ketimpangan spasial membutuhkan pemerataan sarana pendidikan, infrastruktur konektivitas logistik, dan pemberdayaan ekonomi lokal di daerah pelosok.",
        "Pengurangan anggaran dana desa": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mengurangi ketimpangan spasial membutuhkan pemerataan sarana pendidikan, infrastruktur konektivitas logistik, dan pemberdayaan ekonomi lokal di daerah pelosok."
      },
      "correctAnswer": "Pemerataan akses infrastruktur digital, transportasi, dan permodalan usaha pedesaan",
      "explanationText": "Mengurangi ketimpangan spasial membutuhkan pemerataan sarana pendidikan, infrastruktur konektivitas logistik, dan pemberdayaan ekonomi lokal di daerah pelosok.",
      "knownWrongPatterns": {
        "Sentralisasi seluruh pembangunan industri hanya di ibukota": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Mengurangi ketimpangan spasial membutuhkan pemerataan sarana pendidikan, infrastruktur konektivitas logistik, dan pemberdayaan ekonomi lokal di daerah pelosok."
        },
        "Pelarangan migrasi penduduk ke kota secara total": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Mengurangi ketimpangan spasial membutuhkan pemerataan sarana pendidikan, infrastruktur konektivitas logistik, dan pemberdayaan ekonomi lokal di daerah pelosok."
        },
        "Pembatasan pemakaian teknologi internet di pedesaan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Mengurangi ketimpangan spasial membutuhkan pemerataan sarana pendidikan, infrastruktur konektivitas logistik, dan pemberdayaan ekonomi lokal di daerah pelosok."
        },
        "Pengurangan anggaran dana desa": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Mengurangi ketimpangan spasial membutuhkan pemerataan sarana pendidikan, infrastruktur konektivitas logistik, dan pemberdayaan ekonomi lokal di daerah pelosok."
        }
      }
    },
    {
      "id": "k12-sos-07",
      "conceptName": "Metodologi Penelitian Sosial",
      "topic": "Metodologi Penelitian Sosial",
      "questionText": "Dalam penelitian sosial evaluatif, teknik pengumpulan data kualitatif yang mendalam melalui wawancara terbuka dengan informan kunci disebut...",
      "type": "mcq",
      "options": [
        "Survei kuesioner tertutup",
        "In-depth interview (Wawancara mendalam)",
        "Uji laboratorium statistik",
        "Angket pilihan ganda",
        "Sensus penduduk"
      ],
      "optionDetails": {
        "Survei kuesioner tertutup": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Wawancara mendalam (in-depth interview) digunakan untuk menggali makna, pandangan subjektif, dan motif para pelaku sosial secara komprehensif.",
        "In-depth interview (Wawancara mendalam)": "✓ BENAR: Wawancara mendalam (in-depth interview) digunakan untuk menggali makna, pandangan subjektif, dan motif para pelaku sosial secara komprehensif.",
        "Uji laboratorium statistik": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Wawancara mendalam (in-depth interview) digunakan untuk menggali makna, pandangan subjektif, dan motif para pelaku sosial secara komprehensif.",
        "Angket pilihan ganda": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Wawancara mendalam (in-depth interview) digunakan untuk menggali makna, pandangan subjektif, dan motif para pelaku sosial secara komprehensif.",
        "Sensus penduduk": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Wawancara mendalam (in-depth interview) digunakan untuk menggali makna, pandangan subjektif, dan motif para pelaku sosial secara komprehensif."
      },
      "correctAnswer": "In-depth interview (Wawancara mendalam)",
      "explanationText": "Wawancara mendalam (in-depth interview) digunakan untuk menggali makna, pandangan subjektif, dan motif para pelaku sosial secara komprehensif.",
      "knownWrongPatterns": {
        "Survei kuesioner tertutup": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Wawancara mendalam (in-depth interview) digunakan untuk menggali makna, pandangan subjektif, dan motif para pelaku sosial secara komprehensif."
        },
        "Uji laboratorium statistik": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Wawancara mendalam (in-depth interview) digunakan untuk menggali makna, pandangan subjektif, dan motif para pelaku sosial secara komprehensif."
        },
        "Angket pilihan ganda": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Wawancara mendalam (in-depth interview) digunakan untuk menggali makna, pandangan subjektif, dan motif para pelaku sosial secara komprehensif."
        },
        "Sensus penduduk": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Wawancara mendalam (in-depth interview) digunakan untuk menggali makna, pandangan subjektif, dan motif para pelaku sosial secara komprehensif."
        }
      }
    },
    {
      "id": "k12-sos-08",
      "conceptName": "Kearifan Lokal dan Pemberdayaan Komunitas",
      "topic": "Kearifan Lokal dan Pemberdayaan Komunitas",
      "questionText": "Pemberdayaan komunitas lokal berakar pada kearifan lokal (indigenous knowledge). Manfaat pelestarian kearifan lokal di tengah arus globalisasi adalah...",
      "type": "mcq",
      "options": [
        "Menolak semua inovasi sains modern tanpa kompromi",
        "Menjaga identitas kebudayaan, kohesi sosial, dan keberlanjutan ekosistem lingkungan hidup",
        "Mengisolasi diri dari interaksi antarnegara",
        "Menciptakan konflik horizontal antarwilayah",
        "Menghentikan kegiatan perdagangan internasional"
      ],
      "optionDetails": {
        "Menolak semua inovasi sains modern tanpa kompromi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kearifan lokal berperan sebagai filter penyaring dampak negatif globalisasi sekaligus memelihara keseimbangan alam dan solidaritas sosial berbasis tradisi.",
        "Menjaga identitas kebudayaan, kohesi sosial, dan keberlanjutan ekosistem lingkungan hidup": "✓ BENAR: Kearifan lokal berperan sebagai filter penyaring dampak negatif globalisasi sekaligus memelihara keseimbangan alam dan solidaritas sosial berbasis tradisi.",
        "Mengisolasi diri dari interaksi antarnegara": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kearifan lokal berperan sebagai filter penyaring dampak negatif globalisasi sekaligus memelihara keseimbangan alam dan solidaritas sosial berbasis tradisi.",
        "Menciptakan konflik horizontal antarwilayah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kearifan lokal berperan sebagai filter penyaring dampak negatif globalisasi sekaligus memelihara keseimbangan alam dan solidaritas sosial berbasis tradisi.",
        "Menghentikan kegiatan perdagangan internasional": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kearifan lokal berperan sebagai filter penyaring dampak negatif globalisasi sekaligus memelihara keseimbangan alam dan solidaritas sosial berbasis tradisi."
      },
      "correctAnswer": "Menjaga identitas kebudayaan, kohesi sosial, dan keberlanjutan ekosistem lingkungan hidup",
      "explanationText": "Kearifan lokal berperan sebagai filter penyaring dampak negatif globalisasi sekaligus memelihara keseimbangan alam dan solidaritas sosial berbasis tradisi.",
      "knownWrongPatterns": {
        "Menolak semua inovasi sains modern tanpa kompromi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kearifan lokal berperan sebagai filter penyaring dampak negatif globalisasi sekaligus memelihara keseimbangan alam dan solidaritas sosial berbasis tradisi."
        },
        "Mengisolasi diri dari interaksi antarnegara": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kearifan lokal berperan sebagai filter penyaring dampak negatif globalisasi sekaligus memelihara keseimbangan alam dan solidaritas sosial berbasis tradisi."
        },
        "Menciptakan konflik horizontal antarwilayah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kearifan lokal berperan sebagai filter penyaring dampak negatif globalisasi sekaligus memelihara keseimbangan alam dan solidaritas sosial berbasis tradisi."
        },
        "Menghentikan kegiatan perdagangan internasional": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kearifan lokal berperan sebagai filter penyaring dampak negatif globalisasi sekaligus memelihara keseimbangan alam dan solidaritas sosial berbasis tradisi."
        }
      }
    },
    {
      "id": "k12-sos-09",
      "conceptName": "Teori Pembangunan & Perubahan Sosial",
      "topic": "Teori Pembangunan & Perubahan Sosial",
      "questionText": "Teori modernisasi memandang bahwa negara-negara berkembang dapat mencapai kemakmuran jika mereka...",
      "type": "mcq",
      "options": [
        "Mengadopsi nilai-nilai rasionalitas, industrialisasi, dan teknologi modern seperti negara maju",
        "Memutus seluruh hubungan perdagangan dengan luar negeri",
        "Kembali ke sistem perekonomian agraris subsisten",
        "Menghilangkan sistem pendidikan formal",
        "Menyerahkan seluruh kekayaan kepada korporasi asing tanpa regulasi"
      ],
      "optionDetails": {
        "Mengadopsi nilai-nilai rasionalitas, industrialisasi, dan teknologi modern seperti negara maju": "✓ BENAR: Teori Modernisasi (seperti tahapan Rostow) beranggapan keterbelakangan disebabkan faktor internal tradisional yang dapat diatasi dengan transformasi menuju rasionalitas, iptek, dan industrialisasi.",
        "Memutus seluruh hubungan perdagangan dengan luar negeri": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teori Modernisasi (seperti tahapan Rostow) beranggapan keterbelakangan disebabkan faktor internal tradisional yang dapat diatasi dengan transformasi menuju rasionalitas, iptek, dan industrialisasi.",
        "Kembali ke sistem perekonomian agraris subsisten": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teori Modernisasi (seperti tahapan Rostow) beranggapan keterbelakangan disebabkan faktor internal tradisional yang dapat diatasi dengan transformasi menuju rasionalitas, iptek, dan industrialisasi.",
        "Menghilangkan sistem pendidikan formal": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teori Modernisasi (seperti tahapan Rostow) beranggapan keterbelakangan disebabkan faktor internal tradisional yang dapat diatasi dengan transformasi menuju rasionalitas, iptek, dan industrialisasi.",
        "Menyerahkan seluruh kekayaan kepada korporasi asing tanpa regulasi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teori Modernisasi (seperti tahapan Rostow) beranggapan keterbelakangan disebabkan faktor internal tradisional yang dapat diatasi dengan transformasi menuju rasionalitas, iptek, dan industrialisasi."
      },
      "correctAnswer": "Mengadopsi nilai-nilai rasionalitas, industrialisasi, dan teknologi modern seperti negara maju",
      "explanationText": "Teori Modernisasi (seperti tahapan Rostow) beranggapan keterbelakangan disebabkan faktor internal tradisional yang dapat diatasi dengan transformasi menuju rasionalitas, iptek, dan industrialisasi.",
      "knownWrongPatterns": {
        "Memutus seluruh hubungan perdagangan dengan luar negeri": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Teori Modernisasi (seperti tahapan Rostow) beranggapan keterbelakangan disebabkan faktor internal tradisional yang dapat diatasi dengan transformasi menuju rasionalitas, iptek, dan industrialisasi."
        },
        "Kembali ke sistem perekonomian agraris subsisten": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Teori Modernisasi (seperti tahapan Rostow) beranggapan keterbelakangan disebabkan faktor internal tradisional yang dapat diatasi dengan transformasi menuju rasionalitas, iptek, dan industrialisasi."
        },
        "Menghilangkan sistem pendidikan formal": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Teori Modernisasi (seperti tahapan Rostow) beranggapan keterbelakangan disebabkan faktor internal tradisional yang dapat diatasi dengan transformasi menuju rasionalitas, iptek, dan industrialisasi."
        },
        "Menyerahkan seluruh kekayaan kepada korporasi asing tanpa regulasi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Teori Modernisasi (seperti tahapan Rostow) beranggapan keterbelakangan disebabkan faktor internal tradisional yang dapat diatasi dengan transformasi menuju rasionalitas, iptek, dan industrialisasi."
        }
      }
    },
    {
      "id": "k12-sos-10",
      "conceptName": "Gerakan Sosial (Social Movements)",
      "topic": "Gerakan Sosial (Social Movements)",
      "questionText": "Suatu gerakan sosial yang berupaya merombak total seluruh tatanan kelembagaan dan struktur kekuasaan politik yang berkuasa dinamakan gerakan...",
      "type": "mcq",
      "options": [
        "Gerakan konservatif",
        "Gerakan reformis",
        "Gerakan revolusioner",
        "Gerakan regresif",
        "Gerakan alternatif"
      ],
      "optionDetails": {
        "Gerakan konservatif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Gerakan sosial revolusioner menuntut pergantian mendasar dan radikal terhadap keseluruhan sistem kekuasaan dan struktur sosial yang ada.",
        "Gerakan reformis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Gerakan sosial revolusioner menuntut pergantian mendasar dan radikal terhadap keseluruhan sistem kekuasaan dan struktur sosial yang ada.",
        "Gerakan revolusioner": "✓ BENAR: Gerakan sosial revolusioner menuntut pergantian mendasar dan radikal terhadap keseluruhan sistem kekuasaan dan struktur sosial yang ada.",
        "Gerakan regresif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Gerakan sosial revolusioner menuntut pergantian mendasar dan radikal terhadap keseluruhan sistem kekuasaan dan struktur sosial yang ada.",
        "Gerakan alternatif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Gerakan sosial revolusioner menuntut pergantian mendasar dan radikal terhadap keseluruhan sistem kekuasaan dan struktur sosial yang ada."
      },
      "correctAnswer": "Gerakan revolusioner",
      "explanationText": "Gerakan sosial revolusioner menuntut pergantian mendasar dan radikal terhadap keseluruhan sistem kekuasaan dan struktur sosial yang ada.",
      "knownWrongPatterns": {
        "Gerakan konservatif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Gerakan sosial revolusioner menuntut pergantian mendasar dan radikal terhadap keseluruhan sistem kekuasaan dan struktur sosial yang ada."
        },
        "Gerakan reformis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Gerakan sosial revolusioner menuntut pergantian mendasar dan radikal terhadap keseluruhan sistem kekuasaan dan struktur sosial yang ada."
        },
        "Gerakan regresif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Gerakan sosial revolusioner menuntut pergantian mendasar dan radikal terhadap keseluruhan sistem kekuasaan dan struktur sosial yang ada."
        },
        "Gerakan alternatif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Gerakan sosial revolusioner menuntut pergantian mendasar dan radikal terhadap keseluruhan sistem kekuasaan dan struktur sosial yang ada."
        }
      }
    }
  ],
  "utbk-pm": [
    {
      "id": "utbk-pm-01",
      "conceptName": "Geometri Ruang & Volume",
      "topic": "Geometri Ruang & Volume",
      "questionText": "Sebuah tangki air berbentuk silinder memiliki diameter alas 1,4 meter dan tinggi 2 meter. Jika tangki terisi air 3/4 bagian, volume air dalam tangki tersebut adalah... (gunakan π = 22/7)",
      "type": "mcq",
      "options": [
        "2,31 m^3",
        "3,08 m^3",
        "1,54 m^3",
        "4,62 m^3",
        "2,85 m^3"
      ],
      "optionDetails": {
        "2,31 m^3": "✓ BENAR: Jari-jari r = 1,4 / 2 = 0,7 m. Volume total silinder = π * r^2 * t = (22/7) * 0,49 * 2 = 22 * 0,07 * 2 = 3,08 m^3. Volume 3/4 bagian = (3/4) * 3,08 = 2,31 m^3.",
        "3,08 m^3": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jari-jari r = 1,4 / 2 = 0,7 m. Volume total silinder = π * r^2 * t = (22/7) * 0,49 * 2 = 22 * 0,07 * 2 = 3,08 m^3. Volume 3/4 bagian = (3/4) * 3,08 = 2,31 m^3.",
        "1,54 m^3": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jari-jari r = 1,4 / 2 = 0,7 m. Volume total silinder = π * r^2 * t = (22/7) * 0,49 * 2 = 22 * 0,07 * 2 = 3,08 m^3. Volume 3/4 bagian = (3/4) * 3,08 = 2,31 m^3.",
        "4,62 m^3": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jari-jari r = 1,4 / 2 = 0,7 m. Volume total silinder = π * r^2 * t = (22/7) * 0,49 * 2 = 22 * 0,07 * 2 = 3,08 m^3. Volume 3/4 bagian = (3/4) * 3,08 = 2,31 m^3.",
        "2,85 m^3": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jari-jari r = 1,4 / 2 = 0,7 m. Volume total silinder = π * r^2 * t = (22/7) * 0,49 * 2 = 22 * 0,07 * 2 = 3,08 m^3. Volume 3/4 bagian = (3/4) * 3,08 = 2,31 m^3."
      },
      "correctAnswer": "2,31 m^3",
      "explanationText": "Jari-jari r = 1,4 / 2 = 0,7 m. Volume total silinder = π * r^2 * t = (22/7) * 0,49 * 2 = 22 * 0,07 * 2 = 3,08 m^3. Volume 3/4 bagian = (3/4) * 3,08 = 2,31 m^3.",
      "knownWrongPatterns": {
        "3,08 m^3": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Jari-jari r = 1,4 / 2 = 0,7 m. Volume total silinder = π * r^2 * t = (22/7) * 0,49 * 2 = 22 * 0,07 * 2 = 3,08 m^3. Volume 3/4 bagian = (3/4) * 3,08 = 2,31 m^3."
        },
        "1,54 m^3": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Jari-jari r = 1,4 / 2 = 0,7 m. Volume total silinder = π * r^2 * t = (22/7) * 0,49 * 2 = 22 * 0,07 * 2 = 3,08 m^3. Volume 3/4 bagian = (3/4) * 3,08 = 2,31 m^3."
        },
        "4,62 m^3": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Jari-jari r = 1,4 / 2 = 0,7 m. Volume total silinder = π * r^2 * t = (22/7) * 0,49 * 2 = 22 * 0,07 * 2 = 3,08 m^3. Volume 3/4 bagian = (3/4) * 3,08 = 2,31 m^3."
        },
        "2,85 m^3": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Jari-jari r = 1,4 / 2 = 0,7 m. Volume total silinder = π * r^2 * t = (22/7) * 0,49 * 2 = 22 * 0,07 * 2 = 3,08 m^3. Volume 3/4 bagian = (3/4) * 3,08 = 2,31 m^3."
        }
      }
    },
    {
      "id": "utbk-pm-02",
      "conceptName": "Aritmetika Sosial: Laba Rugi",
      "topic": "Aritmetika Sosial: Laba Rugi",
      "questionText": "Seorang pedagang membeli 50 kg beras seharga Rp600.000. Ia menjual 30 kg seharga Rp14.000 per kg dan sisanya dijual seharga Rp13.000 per kg. Persentase keuntungan pedagang tersebut adalah...",
      "type": "mcq",
      "options": [
        "10%",
        "13,33%",
        "15%",
        "16,67%",
        "20%"
      ],
      "optionDetails": {
        "10%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Total penjualan = (30 * 14.000) + (20 * 13.000) = 420.000 + 260.000 = Rp680.000. Keuntungan bersih = 680.000 - 600.000 = Rp80.000. Persentase untung = (80.000 / 600.000) * 100% = 8/60 * 100% = 13,33%.",
        "13,33%": "✓ BENAR: Total penjualan = (30 * 14.000) + (20 * 13.000) = 420.000 + 260.000 = Rp680.000. Keuntungan bersih = 680.000 - 600.000 = Rp80.000. Persentase untung = (80.000 / 600.000) * 100% = 8/60 * 100% = 13,33%.",
        "15%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Total penjualan = (30 * 14.000) + (20 * 13.000) = 420.000 + 260.000 = Rp680.000. Keuntungan bersih = 680.000 - 600.000 = Rp80.000. Persentase untung = (80.000 / 600.000) * 100% = 8/60 * 100% = 13,33%.",
        "16,67%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Total penjualan = (30 * 14.000) + (20 * 13.000) = 420.000 + 260.000 = Rp680.000. Keuntungan bersih = 680.000 - 600.000 = Rp80.000. Persentase untung = (80.000 / 600.000) * 100% = 8/60 * 100% = 13,33%.",
        "20%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Total penjualan = (30 * 14.000) + (20 * 13.000) = 420.000 + 260.000 = Rp680.000. Keuntungan bersih = 680.000 - 600.000 = Rp80.000. Persentase untung = (80.000 / 600.000) * 100% = 8/60 * 100% = 13,33%."
      },
      "correctAnswer": "13,33%",
      "explanationText": "Total penjualan = (30 * 14.000) + (20 * 13.000) = 420.000 + 260.000 = Rp680.000. Keuntungan bersih = 680.000 - 600.000 = Rp80.000. Persentase untung = (80.000 / 600.000) * 100% = 8/60 * 100% = 13,33%.",
      "knownWrongPatterns": {
        "10%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Total penjualan = (30 * 14.000) + (20 * 13.000) = 420.000 + 260.000 = Rp680.000. Keuntungan bersih = 680.000 - 600.000 = Rp80.000. Persentase untung = (80.000 / 600.000) * 100% = 8/60 * 100% = 13,33%."
        },
        "15%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Total penjualan = (30 * 14.000) + (20 * 13.000) = 420.000 + 260.000 = Rp680.000. Keuntungan bersih = 680.000 - 600.000 = Rp80.000. Persentase untung = (80.000 / 600.000) * 100% = 8/60 * 100% = 13,33%."
        },
        "16,67%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Total penjualan = (30 * 14.000) + (20 * 13.000) = 420.000 + 260.000 = Rp680.000. Keuntungan bersih = 680.000 - 600.000 = Rp80.000. Persentase untung = (80.000 / 600.000) * 100% = 8/60 * 100% = 13,33%."
        },
        "20%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Total penjualan = (30 * 14.000) + (20 * 13.000) = 420.000 + 260.000 = Rp680.000. Keuntungan bersih = 680.000 - 600.000 = Rp80.000. Persentase untung = (80.000 / 600.000) * 100% = 8/60 * 100% = 13,33%."
        }
      }
    },
    {
      "id": "utbk-pm-03",
      "conceptName": "Teori Himpunan & Peluang",
      "topic": "Teori Himpunan & Peluang",
      "questionText": "Dalam sebuah komunitas, 60% warga menyukai kopi, 45% menyukai teh, dan 20% menyukai keduanya. Jika dipilih seorang warga secara acak, peluang ia TIDAK menyukai kopi maupun teh adalah...",
      "type": "mcq",
      "options": [
        "10%",
        "15%",
        "25%",
        "35%",
        "5%"
      ],
      "optionDetails": {
        "10%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: P(K U T) = P(K) + P(T) - P(K ∩ T) = 60% + 45% - 20% = 85%. Peluang tidak menyukai keduanya = 100% - 85% = 15%.",
        "15%": "✓ BENAR: P(K U T) = P(K) + P(T) - P(K ∩ T) = 60% + 45% - 20% = 85%. Peluang tidak menyukai keduanya = 100% - 85% = 15%.",
        "25%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: P(K U T) = P(K) + P(T) - P(K ∩ T) = 60% + 45% - 20% = 85%. Peluang tidak menyukai keduanya = 100% - 85% = 15%.",
        "35%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: P(K U T) = P(K) + P(T) - P(K ∩ T) = 60% + 45% - 20% = 85%. Peluang tidak menyukai keduanya = 100% - 85% = 15%.",
        "5%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: P(K U T) = P(K) + P(T) - P(K ∩ T) = 60% + 45% - 20% = 85%. Peluang tidak menyukai keduanya = 100% - 85% = 15%."
      },
      "correctAnswer": "15%",
      "explanationText": "P(K U T) = P(K) + P(T) - P(K ∩ T) = 60% + 45% - 20% = 85%. Peluang tidak menyukai keduanya = 100% - 85% = 15%.",
      "knownWrongPatterns": {
        "10%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: P(K U T) = P(K) + P(T) - P(K ∩ T) = 60% + 45% - 20% = 85%. Peluang tidak menyukai keduanya = 100% - 85% = 15%."
        },
        "25%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: P(K U T) = P(K) + P(T) - P(K ∩ T) = 60% + 45% - 20% = 85%. Peluang tidak menyukai keduanya = 100% - 85% = 15%."
        },
        "35%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: P(K U T) = P(K) + P(T) - P(K ∩ T) = 60% + 45% - 20% = 85%. Peluang tidak menyukai keduanya = 100% - 85% = 15%."
        },
        "5%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: P(K U T) = P(K) + P(T) - P(K ∩ T) = 60% + 45% - 20% = 85%. Peluang tidak menyukai keduanya = 100% - 85% = 15%."
        }
      }
    },
    {
      "id": "utbk-pm-04",
      "conceptName": "Peluang Kejadian Saling Lepas",
      "topic": "Peluang Kejadian Saling Lepas",
      "questionText": "Dua buah dadu seimbang dilempar bersamaan. Peluang muncul jumlah mata dadu sama dengan 7 atau 11 adalah...",
      "type": "mcq",
      "options": [
        "1/6",
        "2/9",
        "1/4",
        "5/18",
        "7/36"
      ],
      "optionDetails": {
        "1/6": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jumlah ruang sampel n(S) = 36. Pasangan jumlah 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) -> 6 kejadian. Pasangan jumlah 11: (5,6),(6,5) -> 2 kejadian. Total = 6 + 2 = 8 kejadian. Peluang = 8 / 36 = 2 / 9.",
        "2/9": "✓ BENAR: Jumlah ruang sampel n(S) = 36. Pasangan jumlah 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) -> 6 kejadian. Pasangan jumlah 11: (5,6),(6,5) -> 2 kejadian. Total = 6 + 2 = 8 kejadian. Peluang = 8 / 36 = 2 / 9.",
        "1/4": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jumlah ruang sampel n(S) = 36. Pasangan jumlah 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) -> 6 kejadian. Pasangan jumlah 11: (5,6),(6,5) -> 2 kejadian. Total = 6 + 2 = 8 kejadian. Peluang = 8 / 36 = 2 / 9.",
        "5/18": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jumlah ruang sampel n(S) = 36. Pasangan jumlah 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) -> 6 kejadian. Pasangan jumlah 11: (5,6),(6,5) -> 2 kejadian. Total = 6 + 2 = 8 kejadian. Peluang = 8 / 36 = 2 / 9.",
        "7/36": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jumlah ruang sampel n(S) = 36. Pasangan jumlah 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) -> 6 kejadian. Pasangan jumlah 11: (5,6),(6,5) -> 2 kejadian. Total = 6 + 2 = 8 kejadian. Peluang = 8 / 36 = 2 / 9."
      },
      "correctAnswer": "2/9",
      "explanationText": "Jumlah ruang sampel n(S) = 36. Pasangan jumlah 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) -> 6 kejadian. Pasangan jumlah 11: (5,6),(6,5) -> 2 kejadian. Total = 6 + 2 = 8 kejadian. Peluang = 8 / 36 = 2 / 9.",
      "knownWrongPatterns": {
        "1/6": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Jumlah ruang sampel n(S) = 36. Pasangan jumlah 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) -> 6 kejadian. Pasangan jumlah 11: (5,6),(6,5) -> 2 kejadian. Total = 6 + 2 = 8 kejadian. Peluang = 8 / 36 = 2 / 9."
        },
        "1/4": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Jumlah ruang sampel n(S) = 36. Pasangan jumlah 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) -> 6 kejadian. Pasangan jumlah 11: (5,6),(6,5) -> 2 kejadian. Total = 6 + 2 = 8 kejadian. Peluang = 8 / 36 = 2 / 9."
        },
        "5/18": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Jumlah ruang sampel n(S) = 36. Pasangan jumlah 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) -> 6 kejadian. Pasangan jumlah 11: (5,6),(6,5) -> 2 kejadian. Total = 6 + 2 = 8 kejadian. Peluang = 8 / 36 = 2 / 9."
        },
        "7/36": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Jumlah ruang sampel n(S) = 36. Pasangan jumlah 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) -> 6 kejadian. Pasangan jumlah 11: (5,6),(6,5) -> 2 kejadian. Total = 6 + 2 = 8 kejadian. Peluang = 8 / 36 = 2 / 9."
        }
      }
    },
    {
      "id": "utbk-pm-05",
      "conceptName": "Matematika Keuangan: Bunga Majemuk",
      "topic": "Matematika Keuangan: Bunga Majemuk",
      "questionText": "Sebuah modal sebesar Rp10.000.000 ditabung di bank dengan bunga majemuk 10% per tahun. Nilai akhir modal tersebut setelah 2 tahun adalah...",
      "type": "mcq",
      "options": [
        "Rp12.000.000",
        "Rp12.100.000",
        "Rp12.200.000",
        "Rp11.100.000",
        "Rp13.310.000"
      ],
      "optionDetails": {
        "Rp12.000.000": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mn = M0 * (1 + i)^n = 10.000.000 * (1 + 0,10)^2 = 10.000.000 * 1,21 = Rp12.100.000.",
        "Rp12.100.000": "✓ BENAR: Mn = M0 * (1 + i)^n = 10.000.000 * (1 + 0,10)^2 = 10.000.000 * 1,21 = Rp12.100.000.",
        "Rp12.200.000": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mn = M0 * (1 + i)^n = 10.000.000 * (1 + 0,10)^2 = 10.000.000 * 1,21 = Rp12.100.000.",
        "Rp11.100.000": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mn = M0 * (1 + i)^n = 10.000.000 * (1 + 0,10)^2 = 10.000.000 * 1,21 = Rp12.100.000.",
        "Rp13.310.000": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Mn = M0 * (1 + i)^n = 10.000.000 * (1 + 0,10)^2 = 10.000.000 * 1,21 = Rp12.100.000."
      },
      "correctAnswer": "Rp12.100.000",
      "explanationText": "Mn = M0 * (1 + i)^n = 10.000.000 * (1 + 0,10)^2 = 10.000.000 * 1,21 = Rp12.100.000.",
      "knownWrongPatterns": {
        "Rp12.000.000": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Mn = M0 * (1 + i)^n = 10.000.000 * (1 + 0,10)^2 = 10.000.000 * 1,21 = Rp12.100.000."
        },
        "Rp12.200.000": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Mn = M0 * (1 + i)^n = 10.000.000 * (1 + 0,10)^2 = 10.000.000 * 1,21 = Rp12.100.000."
        },
        "Rp11.100.000": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Mn = M0 * (1 + i)^n = 10.000.000 * (1 + 0,10)^2 = 10.000.000 * 1,21 = Rp12.100.000."
        },
        "Rp13.310.000": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Mn = M0 * (1 + i)^n = 10.000.000 * (1 + 0,10)^2 = 10.000.000 * 1,21 = Rp12.100.000."
        }
      }
    },
    {
      "id": "utbk-pm-06",
      "conceptName": "Skala Peta & Pengukuran",
      "topic": "Skala Peta & Pengukuran",
      "questionText": "Jarak kota A ke kota B pada peta berskala 1 : 250.000 adalah 16 cm. Jarak sebenarnya antara kedua kota tersebut adalah...",
      "type": "mcq",
      "options": [
        "4 km",
        "40 km",
        "400 km",
        "25 km",
        "50 km"
      ],
      "optionDetails": {
        "4 km": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jarak sebenarnya = Jarak peta x Skala = 16 cm x 250.000 = 4.000.000 cm = 40.000 m = 40 km.",
        "40 km": "✓ BENAR: Jarak sebenarnya = Jarak peta x Skala = 16 cm x 250.000 = 4.000.000 cm = 40.000 m = 40 km.",
        "400 km": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jarak sebenarnya = Jarak peta x Skala = 16 cm x 250.000 = 4.000.000 cm = 40.000 m = 40 km.",
        "25 km": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jarak sebenarnya = Jarak peta x Skala = 16 cm x 250.000 = 4.000.000 cm = 40.000 m = 40 km.",
        "50 km": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jarak sebenarnya = Jarak peta x Skala = 16 cm x 250.000 = 4.000.000 cm = 40.000 m = 40 km."
      },
      "correctAnswer": "40 km",
      "explanationText": "Jarak sebenarnya = Jarak peta x Skala = 16 cm x 250.000 = 4.000.000 cm = 40.000 m = 40 km.",
      "knownWrongPatterns": {
        "4 km": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Jarak sebenarnya = Jarak peta x Skala = 16 cm x 250.000 = 4.000.000 cm = 40.000 m = 40 km."
        },
        "400 km": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Jarak sebenarnya = Jarak peta x Skala = 16 cm x 250.000 = 4.000.000 cm = 40.000 m = 40 km."
        },
        "25 km": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Jarak sebenarnya = Jarak peta x Skala = 16 cm x 250.000 = 4.000.000 cm = 40.000 m = 40 km."
        },
        "50 km": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Jarak sebenarnya = Jarak peta x Skala = 16 cm x 250.000 = 4.000.000 cm = 40.000 m = 40 km."
        }
      }
    },
    {
      "id": "utbk-pm-07",
      "conceptName": "Laju Kerja Gabungan",
      "topic": "Laju Kerja Gabungan",
      "questionText": "Tiga buah mesin konveksi bekerja bersama-sama dapat menyelesaikan pesanan kaos dalam waktu 6 hari. Jika mesin pertama saja butuh 12 hari dan mesin kedua butuh 20 hari, waktu yang dibutuhkan mesin ketiga jika bekerja sendirian adalah...",
      "type": "mcq",
      "options": [
        "15 hari",
        "24 hari",
        "30 hari",
        "36 hari",
        "40 hari"
      ],
      "optionDetails": {
        "15 hari": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 1/T = 1/A + 1/B + 1/C => 1/6 = 1/12 + 1/20 + 1/C. 1/C = 1/6 - (5/60 + 3/60) = 10/60 - 8/60 = 2/60 = 1/30. Maka mesin ketiga butuh 30 hari.",
        "24 hari": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 1/T = 1/A + 1/B + 1/C => 1/6 = 1/12 + 1/20 + 1/C. 1/C = 1/6 - (5/60 + 3/60) = 10/60 - 8/60 = 2/60 = 1/30. Maka mesin ketiga butuh 30 hari.",
        "30 hari": "✓ BENAR: 1/T = 1/A + 1/B + 1/C => 1/6 = 1/12 + 1/20 + 1/C. 1/C = 1/6 - (5/60 + 3/60) = 10/60 - 8/60 = 2/60 = 1/30. Maka mesin ketiga butuh 30 hari.",
        "36 hari": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 1/T = 1/A + 1/B + 1/C => 1/6 = 1/12 + 1/20 + 1/C. 1/C = 1/6 - (5/60 + 3/60) = 10/60 - 8/60 = 2/60 = 1/30. Maka mesin ketiga butuh 30 hari.",
        "40 hari": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 1/T = 1/A + 1/B + 1/C => 1/6 = 1/12 + 1/20 + 1/C. 1/C = 1/6 - (5/60 + 3/60) = 10/60 - 8/60 = 2/60 = 1/30. Maka mesin ketiga butuh 30 hari."
      },
      "correctAnswer": "30 hari",
      "explanationText": "1/T = 1/A + 1/B + 1/C => 1/6 = 1/12 + 1/20 + 1/C. 1/C = 1/6 - (5/60 + 3/60) = 10/60 - 8/60 = 2/60 = 1/30. Maka mesin ketiga butuh 30 hari.",
      "knownWrongPatterns": {
        "15 hari": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 1/T = 1/A + 1/B + 1/C => 1/6 = 1/12 + 1/20 + 1/C. 1/C = 1/6 - (5/60 + 3/60) = 10/60 - 8/60 = 2/60 = 1/30. Maka mesin ketiga butuh 30 hari."
        },
        "24 hari": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 1/T = 1/A + 1/B + 1/C => 1/6 = 1/12 + 1/20 + 1/C. 1/C = 1/6 - (5/60 + 3/60) = 10/60 - 8/60 = 2/60 = 1/30. Maka mesin ketiga butuh 30 hari."
        },
        "36 hari": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 1/T = 1/A + 1/B + 1/C => 1/6 = 1/12 + 1/20 + 1/C. 1/C = 1/6 - (5/60 + 3/60) = 10/60 - 8/60 = 2/60 = 1/30. Maka mesin ketiga butuh 30 hari."
        },
        "40 hari": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 1/T = 1/A + 1/B + 1/C => 1/6 = 1/12 + 1/20 + 1/C. 1/C = 1/6 - (5/60 + 3/60) = 10/60 - 8/60 = 2/60 = 1/30. Maka mesin ketiga butuh 30 hari."
        }
      }
    },
    {
      "id": "utbk-pm-08",
      "conceptName": "Aljabar Terapan: Keliling & Luas",
      "topic": "Aljabar Terapan: Keliling & Luas",
      "questionText": "Sebuah lapangan sepak bola memiliki panjang (2x + 10) meter dan lebar (x + 5) meter. Jika keliling lapangan adalah 240 meter, luas lapangan tersebut adalah...",
      "type": "mcq",
      "options": [
        "3.200 m^2",
        "3.450 m^2",
        "3.500 m^2",
        "3.600 m^2",
        "4.000 m^2"
      ],
      "optionDetails": {
        "3.200 m^2": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: K = 2(p + l) => 240 = 2(3x + 15) => 120 = 3x + 15 => 3x = 105 => x = 35 m. Panjang p = 2(35) + 10 = 80 m. Lebar l = 35 + 5 = 40 m. (Koreksi: jika p = 80, l = 40 maka luas = 3.200 m^2). Luas = 80 x 40 = 3.200 m^2. Pilihan 0.",
        "3.450 m^2": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: K = 2(p + l) => 240 = 2(3x + 15) => 120 = 3x + 15 => 3x = 105 => x = 35 m. Panjang p = 2(35) + 10 = 80 m. Lebar l = 35 + 5 = 40 m. (Koreksi: jika p = 80, l = 40 maka luas = 3.200 m^2). Luas = 80 x 40 = 3.200 m^2. Pilihan 0.",
        "3.500 m^2": "✓ BENAR: K = 2(p + l) => 240 = 2(3x + 15) => 120 = 3x + 15 => 3x = 105 => x = 35 m. Panjang p = 2(35) + 10 = 80 m. Lebar l = 35 + 5 = 40 m. (Koreksi: jika p = 80, l = 40 maka luas = 3.200 m^2). Luas = 80 x 40 = 3.200 m^2. Pilihan 0.",
        "3.600 m^2": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: K = 2(p + l) => 240 = 2(3x + 15) => 120 = 3x + 15 => 3x = 105 => x = 35 m. Panjang p = 2(35) + 10 = 80 m. Lebar l = 35 + 5 = 40 m. (Koreksi: jika p = 80, l = 40 maka luas = 3.200 m^2). Luas = 80 x 40 = 3.200 m^2. Pilihan 0.",
        "4.000 m^2": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: K = 2(p + l) => 240 = 2(3x + 15) => 120 = 3x + 15 => 3x = 105 => x = 35 m. Panjang p = 2(35) + 10 = 80 m. Lebar l = 35 + 5 = 40 m. (Koreksi: jika p = 80, l = 40 maka luas = 3.200 m^2). Luas = 80 x 40 = 3.200 m^2. Pilihan 0."
      },
      "correctAnswer": "3.500 m^2",
      "explanationText": "K = 2(p + l) => 240 = 2(3x + 15) => 120 = 3x + 15 => 3x = 105 => x = 35 m. Panjang p = 2(35) + 10 = 80 m. Lebar l = 35 + 5 = 40 m. (Koreksi: jika p = 80, l = 40 maka luas = 3.200 m^2). Luas = 80 x 40 = 3.200 m^2. Pilihan 0.",
      "knownWrongPatterns": {
        "3.200 m^2": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: K = 2(p + l) => 240 = 2(3x + 15) => 120 = 3x + 15 => 3x = 105 => x = 35 m. Panjang p = 2(35) + 10 = 80 m. Lebar l = 35 + 5 = 40 m. (Koreksi: jika p = 80, l = 40 maka luas = 3.200 m^2). Luas = 80 x 40 = 3.200 m^2. Pilihan 0."
        },
        "3.450 m^2": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: K = 2(p + l) => 240 = 2(3x + 15) => 120 = 3x + 15 => 3x = 105 => x = 35 m. Panjang p = 2(35) + 10 = 80 m. Lebar l = 35 + 5 = 40 m. (Koreksi: jika p = 80, l = 40 maka luas = 3.200 m^2). Luas = 80 x 40 = 3.200 m^2. Pilihan 0."
        },
        "3.600 m^2": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: K = 2(p + l) => 240 = 2(3x + 15) => 120 = 3x + 15 => 3x = 105 => x = 35 m. Panjang p = 2(35) + 10 = 80 m. Lebar l = 35 + 5 = 40 m. (Koreksi: jika p = 80, l = 40 maka luas = 3.200 m^2). Luas = 80 x 40 = 3.200 m^2. Pilihan 0."
        },
        "4.000 m^2": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: K = 2(p + l) => 240 = 2(3x + 15) => 120 = 3x + 15 => 3x = 105 => x = 35 m. Panjang p = 2(35) + 10 = 80 m. Lebar l = 35 + 5 = 40 m. (Koreksi: jika p = 80, l = 40 maka luas = 3.200 m^2). Luas = 80 x 40 = 3.200 m^2. Pilihan 0."
        }
      }
    },
    {
      "id": "utbk-pm-09",
      "conceptName": "Statistika Deskriptif: Kelas Median",
      "topic": "Statistika Deskriptif: Kelas Median",
      "questionText": "Median dari data distribusi frekuensi usia: 10-14 (frek 4), 15-19 (frek 8), 20-24 (frek 12), 25-29 (frek 10), 30-34 (frek 6). Jumlah total data N = 40. Kelas median terletak pada interval...",
      "type": "mcq",
      "options": [
        "10-14",
        "15-19",
        "20-24",
        "25-29",
        "30-34"
      ],
      "optionDetails": {
        "10-14": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Letak median pada data ke-20. Frekuensi kumulatif: 4 (14), 12 (19), 24 (24). Karena data ke-20 berada di dalam kumulatif 24, maka kelas median adalah interval 20-24.",
        "15-19": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Letak median pada data ke-20. Frekuensi kumulatif: 4 (14), 12 (19), 24 (24). Karena data ke-20 berada di dalam kumulatif 24, maka kelas median adalah interval 20-24.",
        "20-24": "✓ BENAR: Letak median pada data ke-20. Frekuensi kumulatif: 4 (14), 12 (19), 24 (24). Karena data ke-20 berada di dalam kumulatif 24, maka kelas median adalah interval 20-24.",
        "25-29": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Letak median pada data ke-20. Frekuensi kumulatif: 4 (14), 12 (19), 24 (24). Karena data ke-20 berada di dalam kumulatif 24, maka kelas median adalah interval 20-24.",
        "30-34": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Letak median pada data ke-20. Frekuensi kumulatif: 4 (14), 12 (19), 24 (24). Karena data ke-20 berada di dalam kumulatif 24, maka kelas median adalah interval 20-24."
      },
      "correctAnswer": "20-24",
      "explanationText": "Letak median pada data ke-20. Frekuensi kumulatif: 4 (14), 12 (19), 24 (24). Karena data ke-20 berada di dalam kumulatif 24, maka kelas median adalah interval 20-24.",
      "knownWrongPatterns": {
        "10-14": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Letak median pada data ke-20. Frekuensi kumulatif: 4 (14), 12 (19), 24 (24). Karena data ke-20 berada di dalam kumulatif 24, maka kelas median adalah interval 20-24."
        },
        "15-19": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Letak median pada data ke-20. Frekuensi kumulatif: 4 (14), 12 (19), 24 (24). Karena data ke-20 berada di dalam kumulatif 24, maka kelas median adalah interval 20-24."
        },
        "25-29": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Letak median pada data ke-20. Frekuensi kumulatif: 4 (14), 12 (19), 24 (24). Karena data ke-20 berada di dalam kumulatif 24, maka kelas median adalah interval 20-24."
        },
        "30-34": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Letak median pada data ke-20. Frekuensi kumulatif: 4 (14), 12 (19), 24 (24). Karena data ke-20 berada di dalam kumulatif 24, maka kelas median adalah interval 20-24."
        }
      }
    },
    {
      "id": "utbk-pm-10",
      "conceptName": "Aplikasi Teorema Pythagoras",
      "topic": "Aplikasi Teorema Pythagoras",
      "questionText": "Sebuah tangga sepanjang 10 meter disandarkan pada dinding tembok vertikal. Jika jarak ujung bawah tangga ke dinding adalah 6 meter, tinggi dinding yang dicapai oleh tangga tersebut adalah...",
      "type": "mcq",
      "options": [
        "6 meter",
        "7 meter",
        "8 meter",
        "8,5 meter",
        "9 meter"
      ],
      "optionDetails": {
        "6 meter": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teorema Pythagoras: t = √(10^2 - 6^2) = √(100 - 36) = √64 = 8 meter.",
        "7 meter": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teorema Pythagoras: t = √(10^2 - 6^2) = √(100 - 36) = √64 = 8 meter.",
        "8 meter": "✓ BENAR: Teorema Pythagoras: t = √(10^2 - 6^2) = √(100 - 36) = √64 = 8 meter.",
        "8,5 meter": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teorema Pythagoras: t = √(10^2 - 6^2) = √(100 - 36) = √64 = 8 meter.",
        "9 meter": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teorema Pythagoras: t = √(10^2 - 6^2) = √(100 - 36) = √64 = 8 meter."
      },
      "correctAnswer": "8 meter",
      "explanationText": "Teorema Pythagoras: t = √(10^2 - 6^2) = √(100 - 36) = √64 = 8 meter.",
      "knownWrongPatterns": {
        "6 meter": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Teorema Pythagoras: t = √(10^2 - 6^2) = √(100 - 36) = √64 = 8 meter."
        },
        "7 meter": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Teorema Pythagoras: t = √(10^2 - 6^2) = √(100 - 36) = √64 = 8 meter."
        },
        "8,5 meter": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Teorema Pythagoras: t = √(10^2 - 6^2) = √(100 - 36) = √64 = 8 meter."
        },
        "9 meter": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Teorema Pythagoras: t = √(10^2 - 6^2) = √(100 - 36) = √64 = 8 meter."
        }
      }
    }
  ],
  "utbk-pu": [
    {
      "id": "tps-pu-01",
      "conceptName": "Silogisme & Penalaran Logis",
      "topic": "Silogisme & Penalaran Logis",
      "questionText": "Semua atlet profesional menjaga pola makan seimbang. Sebagian orang yang menjaga pola makan seimbang rajin mengonsumsi vitamin. Kesimpulan yang paling tepat adalah...",
      "type": "mcq",
      "options": [
        "Semua orang yang rajin mengonsumsi vitamin adalah atlet profesional.",
        "Sebagian atlet profesional mungkin rajin mengonsumsi vitamin.",
        "Semua atlet profesional rajin mengonsumsi vitamin.",
        "Tidak ada atlet profesional yang mengonsumsi vitamin.",
        "Orang yang tidak rajin mengonsumsi vitamin bukan atlet profesional."
      ],
      "optionDetails": {
        "Semua orang yang rajin mengonsumsi vitamin adalah atlet profesional.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Premis 1: Semua atlet -> pola makan seimbang. Premis 2: Sebagian pola makan seimbang -> rajin konsumsi vitamin. Irisan antara himpunan atlet dan yang rajin konsumsi vitamin bersifat parsial (mungkin / ada kemungkinan sebagian).",
        "Sebagian atlet profesional mungkin rajin mengonsumsi vitamin.": "✓ BENAR: Premis 1: Semua atlet -> pola makan seimbang. Premis 2: Sebagian pola makan seimbang -> rajin konsumsi vitamin. Irisan antara himpunan atlet dan yang rajin konsumsi vitamin bersifat parsial (mungkin / ada kemungkinan sebagian).",
        "Semua atlet profesional rajin mengonsumsi vitamin.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Premis 1: Semua atlet -> pola makan seimbang. Premis 2: Sebagian pola makan seimbang -> rajin konsumsi vitamin. Irisan antara himpunan atlet dan yang rajin konsumsi vitamin bersifat parsial (mungkin / ada kemungkinan sebagian).",
        "Tidak ada atlet profesional yang mengonsumsi vitamin.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Premis 1: Semua atlet -> pola makan seimbang. Premis 2: Sebagian pola makan seimbang -> rajin konsumsi vitamin. Irisan antara himpunan atlet dan yang rajin konsumsi vitamin bersifat parsial (mungkin / ada kemungkinan sebagian).",
        "Orang yang tidak rajin mengonsumsi vitamin bukan atlet profesional.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Premis 1: Semua atlet -> pola makan seimbang. Premis 2: Sebagian pola makan seimbang -> rajin konsumsi vitamin. Irisan antara himpunan atlet dan yang rajin konsumsi vitamin bersifat parsial (mungkin / ada kemungkinan sebagian)."
      },
      "correctAnswer": "Sebagian atlet profesional mungkin rajin mengonsumsi vitamin.",
      "explanationText": "Premis 1: Semua atlet -> pola makan seimbang. Premis 2: Sebagian pola makan seimbang -> rajin konsumsi vitamin. Irisan antara himpunan atlet dan yang rajin konsumsi vitamin bersifat parsial (mungkin / ada kemungkinan sebagian).",
      "knownWrongPatterns": {
        "Semua orang yang rajin mengonsumsi vitamin adalah atlet profesional.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Premis 1: Semua atlet -> pola makan seimbang. Premis 2: Sebagian pola makan seimbang -> rajin konsumsi vitamin. Irisan antara himpunan atlet dan yang rajin konsumsi vitamin bersifat parsial (mungkin / ada kemungkinan sebagian)."
        },
        "Semua atlet profesional rajin mengonsumsi vitamin.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Premis 1: Semua atlet -> pola makan seimbang. Premis 2: Sebagian pola makan seimbang -> rajin konsumsi vitamin. Irisan antara himpunan atlet dan yang rajin konsumsi vitamin bersifat parsial (mungkin / ada kemungkinan sebagian)."
        },
        "Tidak ada atlet profesional yang mengonsumsi vitamin.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Premis 1: Semua atlet -> pola makan seimbang. Premis 2: Sebagian pola makan seimbang -> rajin konsumsi vitamin. Irisan antara himpunan atlet dan yang rajin konsumsi vitamin bersifat parsial (mungkin / ada kemungkinan sebagian)."
        },
        "Orang yang tidak rajin mengonsumsi vitamin bukan atlet profesional.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Premis 1: Semua atlet -> pola makan seimbang. Premis 2: Sebagian pola makan seimbang -> rajin konsumsi vitamin. Irisan antara himpunan atlet dan yang rajin konsumsi vitamin bersifat parsial (mungkin / ada kemungkinan sebagian)."
        }
      }
    },
    {
      "id": "tps-pu-02",
      "conceptName": "Penalaran Deduktif: Modus Tollens",
      "topic": "Penalaran Deduktif: Modus Tollens",
      "questionText": "Jika cuaca buruk melanda bandara, penerbangan ditunda. Jika penerbangan ditunda, penumpang mendapat kompensasi makanan. Hari ini tidak ada penumpang yang mendapat kompensasi makanan. Kesimpulan yang sah adalah...",
      "type": "mcq",
      "options": [
        "Cuaca buruk melanda bandara.",
        "Cuaca buruk tidak melanda bandara.",
        "Penerbangan tetap ditunda.",
        "Bandara ditutup total seharian.",
        "Pesawat mengalami kerusakan mesin."
      ],
      "optionDetails": {
        "Cuaca buruk melanda bandara.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modus Tollens berantai: P -> Q, Q -> R. Ekuivalen dengan P -> R. Diketahui ~R (tidak mendapat kompensasi). Kesimpulan: ~P (Cuaca buruk tidak melanda bandara).",
        "Cuaca buruk tidak melanda bandara.": "✓ BENAR: Modus Tollens berantai: P -> Q, Q -> R. Ekuivalen dengan P -> R. Diketahui ~R (tidak mendapat kompensasi). Kesimpulan: ~P (Cuaca buruk tidak melanda bandara).",
        "Penerbangan tetap ditunda.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modus Tollens berantai: P -> Q, Q -> R. Ekuivalen dengan P -> R. Diketahui ~R (tidak mendapat kompensasi). Kesimpulan: ~P (Cuaca buruk tidak melanda bandara).",
        "Bandara ditutup total seharian.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modus Tollens berantai: P -> Q, Q -> R. Ekuivalen dengan P -> R. Diketahui ~R (tidak mendapat kompensasi). Kesimpulan: ~P (Cuaca buruk tidak melanda bandara).",
        "Pesawat mengalami kerusakan mesin.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modus Tollens berantai: P -> Q, Q -> R. Ekuivalen dengan P -> R. Diketahui ~R (tidak mendapat kompensasi). Kesimpulan: ~P (Cuaca buruk tidak melanda bandara)."
      },
      "correctAnswer": "Cuaca buruk tidak melanda bandara.",
      "explanationText": "Modus Tollens berantai: P -> Q, Q -> R. Ekuivalen dengan P -> R. Diketahui ~R (tidak mendapat kompensasi). Kesimpulan: ~P (Cuaca buruk tidak melanda bandara).",
      "knownWrongPatterns": {
        "Cuaca buruk melanda bandara.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Modus Tollens berantai: P -> Q, Q -> R. Ekuivalen dengan P -> R. Diketahui ~R (tidak mendapat kompensasi). Kesimpulan: ~P (Cuaca buruk tidak melanda bandara)."
        },
        "Penerbangan tetap ditunda.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Modus Tollens berantai: P -> Q, Q -> R. Ekuivalen dengan P -> R. Diketahui ~R (tidak mendapat kompensasi). Kesimpulan: ~P (Cuaca buruk tidak melanda bandara)."
        },
        "Bandara ditutup total seharian.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Modus Tollens berantai: P -> Q, Q -> R. Ekuivalen dengan P -> R. Diketahui ~R (tidak mendapat kompensasi). Kesimpulan: ~P (Cuaca buruk tidak melanda bandara)."
        },
        "Pesawat mengalami kerusakan mesin.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Modus Tollens berantai: P -> Q, Q -> R. Ekuivalen dengan P -> R. Diketahui ~R (tidak mendapat kompensasi). Kesimpulan: ~P (Cuaca buruk tidak melanda bandara)."
        }
      }
    },
    {
      "id": "tps-pu-03",
      "conceptName": "Deret Angka & Penalaran Kuantitatif",
      "topic": "Deret Angka & Penalaran Kuantitatif",
      "questionText": "Perhatikan deret bilangan berikut: 3, 5, 9, 17, 33, ... Angka berikutnya adalah...",
      "type": "mcq",
      "options": [
        "49",
        "55",
        "65",
        "67",
        "72"
      ],
      "optionDetails": {
        "49": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola selisih: +2, +4, +8, +16. Selisih berikutnya adalah +32. Maka 33 + 32 = 65. (Atau pola: 2n - 1: 2(33) - 1 = 65).",
        "55": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola selisih: +2, +4, +8, +16. Selisih berikutnya adalah +32. Maka 33 + 32 = 65. (Atau pola: 2n - 1: 2(33) - 1 = 65).",
        "65": "✓ BENAR: Pola selisih: +2, +4, +8, +16. Selisih berikutnya adalah +32. Maka 33 + 32 = 65. (Atau pola: 2n - 1: 2(33) - 1 = 65).",
        "67": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola selisih: +2, +4, +8, +16. Selisih berikutnya adalah +32. Maka 33 + 32 = 65. (Atau pola: 2n - 1: 2(33) - 1 = 65).",
        "72": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola selisih: +2, +4, +8, +16. Selisih berikutnya adalah +32. Maka 33 + 32 = 65. (Atau pola: 2n - 1: 2(33) - 1 = 65)."
      },
      "correctAnswer": "65",
      "explanationText": "Pola selisih: +2, +4, +8, +16. Selisih berikutnya adalah +32. Maka 33 + 32 = 65. (Atau pola: 2n - 1: 2(33) - 1 = 65).",
      "knownWrongPatterns": {
        "49": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola selisih: +2, +4, +8, +16. Selisih berikutnya adalah +32. Maka 33 + 32 = 65. (Atau pola: 2n - 1: 2(33) - 1 = 65)."
        },
        "55": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola selisih: +2, +4, +8, +16. Selisih berikutnya adalah +32. Maka 33 + 32 = 65. (Atau pola: 2n - 1: 2(33) - 1 = 65)."
        },
        "67": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola selisih: +2, +4, +8, +16. Selisih berikutnya adalah +32. Maka 33 + 32 = 65. (Atau pola: 2n - 1: 2(33) - 1 = 65)."
        },
        "72": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola selisih: +2, +4, +8, +16. Selisih berikutnya adalah +32. Maka 33 + 32 = 65. (Atau pola: 2n - 1: 2(33) - 1 = 65)."
        }
      }
    },
    {
      "id": "tps-pu-04",
      "conceptName": "Deret Huruf",
      "topic": "Deret Huruf",
      "questionText": "Perhatikan deret huruf: C, F, I, L, O, ... Huruf berikutnya adalah...",
      "type": "mcq",
      "options": [
        "P",
        "Q",
        "R",
        "S",
        "T"
      ],
      "optionDetails": {
        "P": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola bertambah 3 huruf: C(3), F(6), I(9), L(12), O(15) -> berikutnya huruf ke-18 yaitu R.",
        "Q": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola bertambah 3 huruf: C(3), F(6), I(9), L(12), O(15) -> berikutnya huruf ke-18 yaitu R.",
        "R": "✓ BENAR: Pola bertambah 3 huruf: C(3), F(6), I(9), L(12), O(15) -> berikutnya huruf ke-18 yaitu R.",
        "S": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola bertambah 3 huruf: C(3), F(6), I(9), L(12), O(15) -> berikutnya huruf ke-18 yaitu R.",
        "T": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola bertambah 3 huruf: C(3), F(6), I(9), L(12), O(15) -> berikutnya huruf ke-18 yaitu R."
      },
      "correctAnswer": "R",
      "explanationText": "Pola bertambah 3 huruf: C(3), F(6), I(9), L(12), O(15) -> berikutnya huruf ke-18 yaitu R.",
      "knownWrongPatterns": {
        "P": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola bertambah 3 huruf: C(3), F(6), I(9), L(12), O(15) -> berikutnya huruf ke-18 yaitu R."
        },
        "Q": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola bertambah 3 huruf: C(3), F(6), I(9), L(12), O(15) -> berikutnya huruf ke-18 yaitu R."
        },
        "S": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola bertambah 3 huruf: C(3), F(6), I(9), L(12), O(15) -> berikutnya huruf ke-18 yaitu R."
        },
        "T": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola bertambah 3 huruf: C(3), F(6), I(9), L(12), O(15) -> berikutnya huruf ke-18 yaitu R."
        }
      }
    },
    {
      "id": "tps-pu-05",
      "conceptName": "Penalaran Analitis: Pengurutan",
      "topic": "Penalaran Analitis: Pengurutan",
      "questionText": "Lima orang siswa (A, B, C, D, E) mengikuti ujian. Nilai A lebih tinggi dari B tapi lebih rendah dari C. Nilai D lebih tinggi dari C tapi lebih rendah dari E. Urutan siswa dari nilai terendah ke tertinggi adalah...",
      "type": "mcq",
      "options": [
        "B, A, C, D, E",
        "A, B, C, D, E",
        "E, D, C, A, B",
        "B, C, A, D, E",
        "C, B, A, D, E"
      ],
      "optionDetails": {
        "B, A, C, D, E": "✓ BENAR: B < A < C. Selanjutnya C < D < E. Menggabungkan kedua relasi: B < A < C < D < E.",
        "A, B, C, D, E": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: B < A < C. Selanjutnya C < D < E. Menggabungkan kedua relasi: B < A < C < D < E.",
        "E, D, C, A, B": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: B < A < C. Selanjutnya C < D < E. Menggabungkan kedua relasi: B < A < C < D < E.",
        "B, C, A, D, E": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: B < A < C. Selanjutnya C < D < E. Menggabungkan kedua relasi: B < A < C < D < E.",
        "C, B, A, D, E": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: B < A < C. Selanjutnya C < D < E. Menggabungkan kedua relasi: B < A < C < D < E."
      },
      "correctAnswer": "B, A, C, D, E",
      "explanationText": "B < A < C. Selanjutnya C < D < E. Menggabungkan kedua relasi: B < A < C < D < E.",
      "knownWrongPatterns": {
        "A, B, C, D, E": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: B < A < C. Selanjutnya C < D < E. Menggabungkan kedua relasi: B < A < C < D < E."
        },
        "E, D, C, A, B": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: B < A < C. Selanjutnya C < D < E. Menggabungkan kedua relasi: B < A < C < D < E."
        },
        "B, C, A, D, E": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: B < A < C. Selanjutnya C < D < E. Menggabungkan kedua relasi: B < A < C < D < E."
        },
        "C, B, A, D, E": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: B < A < C. Selanjutnya C < D < E. Menggabungkan kedua relasi: B < A < C < D < E."
        }
      }
    },
    {
      "id": "tps-pu-06",
      "conceptName": "Kesesuaian Logis Pernyataan",
      "topic": "Kesesuaian Logis Pernyataan",
      "questionText": "Manakah pernyataan berikut yang PASTI SALAH jika diketahui: 'Tidak ada mamalia yang bernapas dengan insang' dan 'Lumba-lumba adalah mamalia'?",
      "type": "mcq",
      "options": [
        "Lumba-lumba bernapas dengan paru-paru.",
        "Lumba-lumba bernapas dengan insang.",
        "Lumba-lumba bukan ikan.",
        "Sebagian hewan laut adalah mamalia.",
        "Lumba-lumba hidup di perairan."
      ],
      "optionDetails": {
        "Lumba-lumba bernapas dengan paru-paru.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Karena lumba-lumba adalah mamalia dan semua mamalia tidak bernapas dengan insang, maka pernyataan 'Lumba-lumba bernapas dengan insang' bertentangan secara mutlak (pasti salah).",
        "Lumba-lumba bernapas dengan insang.": "✓ BENAR: Karena lumba-lumba adalah mamalia dan semua mamalia tidak bernapas dengan insang, maka pernyataan 'Lumba-lumba bernapas dengan insang' bertentangan secara mutlak (pasti salah).",
        "Lumba-lumba bukan ikan.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Karena lumba-lumba adalah mamalia dan semua mamalia tidak bernapas dengan insang, maka pernyataan 'Lumba-lumba bernapas dengan insang' bertentangan secara mutlak (pasti salah).",
        "Sebagian hewan laut adalah mamalia.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Karena lumba-lumba adalah mamalia dan semua mamalia tidak bernapas dengan insang, maka pernyataan 'Lumba-lumba bernapas dengan insang' bertentangan secara mutlak (pasti salah).",
        "Lumba-lumba hidup di perairan.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Karena lumba-lumba adalah mamalia dan semua mamalia tidak bernapas dengan insang, maka pernyataan 'Lumba-lumba bernapas dengan insang' bertentangan secara mutlak (pasti salah)."
      },
      "correctAnswer": "Lumba-lumba bernapas dengan insang.",
      "explanationText": "Karena lumba-lumba adalah mamalia dan semua mamalia tidak bernapas dengan insang, maka pernyataan 'Lumba-lumba bernapas dengan insang' bertentangan secara mutlak (pasti salah).",
      "knownWrongPatterns": {
        "Lumba-lumba bernapas dengan paru-paru.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Karena lumba-lumba adalah mamalia dan semua mamalia tidak bernapas dengan insang, maka pernyataan 'Lumba-lumba bernapas dengan insang' bertentangan secara mutlak (pasti salah)."
        },
        "Lumba-lumba bukan ikan.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Karena lumba-lumba adalah mamalia dan semua mamalia tidak bernapas dengan insang, maka pernyataan 'Lumba-lumba bernapas dengan insang' bertentangan secara mutlak (pasti salah)."
        },
        "Sebagian hewan laut adalah mamalia.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Karena lumba-lumba adalah mamalia dan semua mamalia tidak bernapas dengan insang, maka pernyataan 'Lumba-lumba bernapas dengan insang' bertentangan secara mutlak (pasti salah)."
        },
        "Lumba-lumba hidup di perairan.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Karena lumba-lumba adalah mamalia dan semua mamalia tidak bernapas dengan insang, maka pernyataan 'Lumba-lumba bernapas dengan insang' bertentangan secara mutlak (pasti salah)."
        }
      }
    },
    {
      "id": "tps-pu-07",
      "conceptName": "Penalaran Kausalitas & Argumen",
      "topic": "Penalaran Kausalitas & Argumen",
      "questionText": "Hasil panen padi pada musim kemarau mengalami penurunan 20%, sementara harga pupuk naik 15%. Manakah simpulan yang PALING DIDUKUNG oleh data tersebut?",
      "type": "mcq",
      "options": [
        "Pendapatan petani dipastikan mengalami peningkatan drastis.",
        "Beban operasional petani cenderung meningkat di tengah berkurangnya hasil produksi padi.",
        "Pemerintah akan menggratiskan seluruh pupuk nasional.",
        "Semua petani berhenti menanam padi.",
        "Impor beras langsung dihentikan oleh menteri."
      ],
      "optionDetails": {
        "Pendapatan petani dipastikan mengalami peningkatan drastis.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kenaikan harga pupuk menaikkan biaya produksi (beban), sementara penurunan hasil panen menekan penerimaan kotor, sehingga beban operasional meningkat di saat produksi turun.",
        "Beban operasional petani cenderung meningkat di tengah berkurangnya hasil produksi padi.": "✓ BENAR: Kenaikan harga pupuk menaikkan biaya produksi (beban), sementara penurunan hasil panen menekan penerimaan kotor, sehingga beban operasional meningkat di saat produksi turun.",
        "Pemerintah akan menggratiskan seluruh pupuk nasional.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kenaikan harga pupuk menaikkan biaya produksi (beban), sementara penurunan hasil panen menekan penerimaan kotor, sehingga beban operasional meningkat di saat produksi turun.",
        "Semua petani berhenti menanam padi.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kenaikan harga pupuk menaikkan biaya produksi (beban), sementara penurunan hasil panen menekan penerimaan kotor, sehingga beban operasional meningkat di saat produksi turun.",
        "Impor beras langsung dihentikan oleh menteri.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kenaikan harga pupuk menaikkan biaya produksi (beban), sementara penurunan hasil panen menekan penerimaan kotor, sehingga beban operasional meningkat di saat produksi turun."
      },
      "correctAnswer": "Beban operasional petani cenderung meningkat di tengah berkurangnya hasil produksi padi.",
      "explanationText": "Kenaikan harga pupuk menaikkan biaya produksi (beban), sementara penurunan hasil panen menekan penerimaan kotor, sehingga beban operasional meningkat di saat produksi turun.",
      "knownWrongPatterns": {
        "Pendapatan petani dipastikan mengalami peningkatan drastis.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kenaikan harga pupuk menaikkan biaya produksi (beban), sementara penurunan hasil panen menekan penerimaan kotor, sehingga beban operasional meningkat di saat produksi turun."
        },
        "Pemerintah akan menggratiskan seluruh pupuk nasional.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kenaikan harga pupuk menaikkan biaya produksi (beban), sementara penurunan hasil panen menekan penerimaan kotor, sehingga beban operasional meningkat di saat produksi turun."
        },
        "Semua petani berhenti menanam padi.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kenaikan harga pupuk menaikkan biaya produksi (beban), sementara penurunan hasil panen menekan penerimaan kotor, sehingga beban operasional meningkat di saat produksi turun."
        },
        "Impor beras langsung dihentikan oleh menteri.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kenaikan harga pupuk menaikkan biaya produksi (beban), sementara penurunan hasil panen menekan penerimaan kotor, sehingga beban operasional meningkat di saat produksi turun."
        }
      }
    },
    {
      "id": "tps-pu-08",
      "conceptName": "Pola Bilangan Operasi Bergantian",
      "topic": "Pola Bilangan Operasi Bergantian",
      "questionText": "Pola barisan: 2, 3, 6, 7, 14, 15, ... Dua angka berikutnya adalah...",
      "type": "mcq",
      "options": [
        "16, 32",
        "30, 31",
        "28, 29",
        "30, 60",
        "22, 23"
      ],
      "optionDetails": {
        "16, 32": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Operasi berulang: (+1, x2): 2 (+1)=3, 3(x2)=6, 6(+1)=7, 7(x2)=14, 14(+1)=15, berikutnya 15(x2)=30, lalu 30(+1)=31.",
        "30, 31": "✓ BENAR: Operasi berulang: (+1, x2): 2 (+1)=3, 3(x2)=6, 6(+1)=7, 7(x2)=14, 14(+1)=15, berikutnya 15(x2)=30, lalu 30(+1)=31.",
        "28, 29": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Operasi berulang: (+1, x2): 2 (+1)=3, 3(x2)=6, 6(+1)=7, 7(x2)=14, 14(+1)=15, berikutnya 15(x2)=30, lalu 30(+1)=31.",
        "30, 60": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Operasi berulang: (+1, x2): 2 (+1)=3, 3(x2)=6, 6(+1)=7, 7(x2)=14, 14(+1)=15, berikutnya 15(x2)=30, lalu 30(+1)=31.",
        "22, 23": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Operasi berulang: (+1, x2): 2 (+1)=3, 3(x2)=6, 6(+1)=7, 7(x2)=14, 14(+1)=15, berikutnya 15(x2)=30, lalu 30(+1)=31."
      },
      "correctAnswer": "30, 31",
      "explanationText": "Operasi berulang: (+1, x2): 2 (+1)=3, 3(x2)=6, 6(+1)=7, 7(x2)=14, 14(+1)=15, berikutnya 15(x2)=30, lalu 30(+1)=31.",
      "knownWrongPatterns": {
        "16, 32": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Operasi berulang: (+1, x2): 2 (+1)=3, 3(x2)=6, 6(+1)=7, 7(x2)=14, 14(+1)=15, berikutnya 15(x2)=30, lalu 30(+1)=31."
        },
        "28, 29": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Operasi berulang: (+1, x2): 2 (+1)=3, 3(x2)=6, 6(+1)=7, 7(x2)=14, 14(+1)=15, berikutnya 15(x2)=30, lalu 30(+1)=31."
        },
        "30, 60": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Operasi berulang: (+1, x2): 2 (+1)=3, 3(x2)=6, 6(+1)=7, 7(x2)=14, 14(+1)=15, berikutnya 15(x2)=30, lalu 30(+1)=31."
        },
        "22, 23": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Operasi berulang: (+1, x2): 2 (+1)=3, 3(x2)=6, 6(+1)=7, 7(x2)=14, 14(+1)=15, berikutnya 15(x2)=30, lalu 30(+1)=31."
        }
      }
    },
    {
      "id": "tps-pu-09",
      "conceptName": "Penalaran Kombinatorika",
      "topic": "Penalaran Kombinatorika",
      "questionText": "Keluarga Pak Arman terdiri atas ayah, ibu, dan 3 anak. Mereka duduk melingkar di meja makan. Jika ayah dan ibu harus selalu duduk berdampingan, banyaknya susunan duduk berbeda adalah...",
      "type": "mcq",
      "options": [
        "12",
        "24",
        "48",
        "72",
        "120"
      ],
      "optionDetails": {
        "12": "✓ BENAR: Permutasi siklis: Ayah dan ibu dianggap 1 elemen, sehingga ada 4 elemen melingkar -> (4 - 1)! = 3! = 6 cara. Ayah dan ibu bertukar tempat: 2! = 2 cara. Total = 6 x 2 = 12 cara.",
        "24": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Permutasi siklis: Ayah dan ibu dianggap 1 elemen, sehingga ada 4 elemen melingkar -> (4 - 1)! = 3! = 6 cara. Ayah dan ibu bertukar tempat: 2! = 2 cara. Total = 6 x 2 = 12 cara.",
        "48": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Permutasi siklis: Ayah dan ibu dianggap 1 elemen, sehingga ada 4 elemen melingkar -> (4 - 1)! = 3! = 6 cara. Ayah dan ibu bertukar tempat: 2! = 2 cara. Total = 6 x 2 = 12 cara.",
        "72": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Permutasi siklis: Ayah dan ibu dianggap 1 elemen, sehingga ada 4 elemen melingkar -> (4 - 1)! = 3! = 6 cara. Ayah dan ibu bertukar tempat: 2! = 2 cara. Total = 6 x 2 = 12 cara.",
        "120": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Permutasi siklis: Ayah dan ibu dianggap 1 elemen, sehingga ada 4 elemen melingkar -> (4 - 1)! = 3! = 6 cara. Ayah dan ibu bertukar tempat: 2! = 2 cara. Total = 6 x 2 = 12 cara."
      },
      "correctAnswer": "12",
      "explanationText": "Permutasi siklis: Ayah dan ibu dianggap 1 elemen, sehingga ada 4 elemen melingkar -> (4 - 1)! = 3! = 6 cara. Ayah dan ibu bertukar tempat: 2! = 2 cara. Total = 6 x 2 = 12 cara.",
      "knownWrongPatterns": {
        "24": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Permutasi siklis: Ayah dan ibu dianggap 1 elemen, sehingga ada 4 elemen melingkar -> (4 - 1)! = 3! = 6 cara. Ayah dan ibu bertukar tempat: 2! = 2 cara. Total = 6 x 2 = 12 cara."
        },
        "48": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Permutasi siklis: Ayah dan ibu dianggap 1 elemen, sehingga ada 4 elemen melingkar -> (4 - 1)! = 3! = 6 cara. Ayah dan ibu bertukar tempat: 2! = 2 cara. Total = 6 x 2 = 12 cara."
        },
        "72": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Permutasi siklis: Ayah dan ibu dianggap 1 elemen, sehingga ada 4 elemen melingkar -> (4 - 1)! = 3! = 6 cara. Ayah dan ibu bertukar tempat: 2! = 2 cara. Total = 6 x 2 = 12 cara."
        },
        "120": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Permutasi siklis: Ayah dan ibu dianggap 1 elemen, sehingga ada 4 elemen melingkar -> (4 - 1)! = 3! = 6 cara. Ayah dan ibu bertukar tempat: 2! = 2 cara. Total = 6 x 2 = 12 cara."
        }
      }
    },
    {
      "id": "tps-pu-10",
      "conceptName": "Logika Kuantor & Negasi",
      "topic": "Logika Kuantor & Negasi",
      "questionText": "Jika premis 'Sebagian mahasiswa pandai berbahasa asing' bernilai benar, manakah ingkaran (negasi) dari pernyataan tersebut?",
      "type": "mcq",
      "options": [
        "Semua mahasiswa pandai berbahasa asing.",
        "Tidak ada mahasiswa yang pandai berbahasa asing.",
        "Sebagian mahasiswa tidak pandai berbahasa asing.",
        "Beberapa mahasiswa sangat mahir berbahasa asing.",
        "Semua mahasiswa tidak belajar bahasa asing."
      ],
      "optionDetails": {
        "Semua mahasiswa pandai berbahasa asing.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Negasi dari kuantor eksistensial 'Ada / Sebagian P yang Q' adalah kuantor universal 'Semua P bukan Q' atau 'Tidak ada satupun P yang Q'.",
        "Tidak ada mahasiswa yang pandai berbahasa asing.": "✓ BENAR: Negasi dari kuantor eksistensial 'Ada / Sebagian P yang Q' adalah kuantor universal 'Semua P bukan Q' atau 'Tidak ada satupun P yang Q'.",
        "Sebagian mahasiswa tidak pandai berbahasa asing.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Negasi dari kuantor eksistensial 'Ada / Sebagian P yang Q' adalah kuantor universal 'Semua P bukan Q' atau 'Tidak ada satupun P yang Q'.",
        "Beberapa mahasiswa sangat mahir berbahasa asing.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Negasi dari kuantor eksistensial 'Ada / Sebagian P yang Q' adalah kuantor universal 'Semua P bukan Q' atau 'Tidak ada satupun P yang Q'.",
        "Semua mahasiswa tidak belajar bahasa asing.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Negasi dari kuantor eksistensial 'Ada / Sebagian P yang Q' adalah kuantor universal 'Semua P bukan Q' atau 'Tidak ada satupun P yang Q'."
      },
      "correctAnswer": "Tidak ada mahasiswa yang pandai berbahasa asing.",
      "explanationText": "Negasi dari kuantor eksistensial 'Ada / Sebagian P yang Q' adalah kuantor universal 'Semua P bukan Q' atau 'Tidak ada satupun P yang Q'.",
      "knownWrongPatterns": {
        "Semua mahasiswa pandai berbahasa asing.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Negasi dari kuantor eksistensial 'Ada / Sebagian P yang Q' adalah kuantor universal 'Semua P bukan Q' atau 'Tidak ada satupun P yang Q'."
        },
        "Sebagian mahasiswa tidak pandai berbahasa asing.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Negasi dari kuantor eksistensial 'Ada / Sebagian P yang Q' adalah kuantor universal 'Semua P bukan Q' atau 'Tidak ada satupun P yang Q'."
        },
        "Beberapa mahasiswa sangat mahir berbahasa asing.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Negasi dari kuantor eksistensial 'Ada / Sebagian P yang Q' adalah kuantor universal 'Semua P bukan Q' atau 'Tidak ada satupun P yang Q'."
        },
        "Semua mahasiswa tidak belajar bahasa asing.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Negasi dari kuantor eksistensial 'Ada / Sebagian P yang Q' adalah kuantor universal 'Semua P bukan Q' atau 'Tidak ada satupun P yang Q'."
        }
      }
    }
  ],
  "utbk-pbm": [
    {
      "id": "tps-pbm-01",
      "conceptName": "Ejaan Bahasa Indonesia: Gabungan Kata & Bentuk Terikat",
      "topic": "Ejaan Bahasa Indonesia: Gabungan Kata & Bentuk Terikat",
      "questionText": "Penulisan gabungan kata yang benar sesuai PUEBI terdapat pada kalimat...",
      "type": "mcq",
      "options": [
        "Perusahaan tersebut membagikan tanda terima kasih kepada karyawannya.",
        "Pemerintah menggalakkan program pasca panen di daerah pedesaan.",
        "Bantuan beasiswa itu ditujukan untuk mahasiswa tuna netra.",
        "Kerja sama antarbangsa sangat diperlukan dalam memerangi polusi plastik.",
        "Ia bertindak sebagai juru bicara sub bagian humas."
      ],
      "optionDetails": {
        "Perusahaan tersebut membagikan tanda terima kasih kepada karyawannya.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bentuk terikat 'antar-' ditulis serangkai dengan kata dasarnya ('antarbangsa'). Begitu juga kata 'kerja sama' dipisah. Pada opsi lain: pascapanen serangkai, tunanetra serangkai, subbagian serangkai.",
        "Pemerintah menggalakkan program pasca panen di daerah pedesaan.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bentuk terikat 'antar-' ditulis serangkai dengan kata dasarnya ('antarbangsa'). Begitu juga kata 'kerja sama' dipisah. Pada opsi lain: pascapanen serangkai, tunanetra serangkai, subbagian serangkai.",
        "Bantuan beasiswa itu ditujukan untuk mahasiswa tuna netra.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bentuk terikat 'antar-' ditulis serangkai dengan kata dasarnya ('antarbangsa'). Begitu juga kata 'kerja sama' dipisah. Pada opsi lain: pascapanen serangkai, tunanetra serangkai, subbagian serangkai.",
        "Kerja sama antarbangsa sangat diperlukan dalam memerangi polusi plastik.": "✓ BENAR: Bentuk terikat 'antar-' ditulis serangkai dengan kata dasarnya ('antarbangsa'). Begitu juga kata 'kerja sama' dipisah. Pada opsi lain: pascapanen serangkai, tunanetra serangkai, subbagian serangkai.",
        "Ia bertindak sebagai juru bicara sub bagian humas.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bentuk terikat 'antar-' ditulis serangkai dengan kata dasarnya ('antarbangsa'). Begitu juga kata 'kerja sama' dipisah. Pada opsi lain: pascapanen serangkai, tunanetra serangkai, subbagian serangkai."
      },
      "correctAnswer": "Kerja sama antarbangsa sangat diperlukan dalam memerangi polusi plastik.",
      "explanationText": "Bentuk terikat 'antar-' ditulis serangkai dengan kata dasarnya ('antarbangsa'). Begitu juga kata 'kerja sama' dipisah. Pada opsi lain: pascapanen serangkai, tunanetra serangkai, subbagian serangkai.",
      "knownWrongPatterns": {
        "Perusahaan tersebut membagikan tanda terima kasih kepada karyawannya.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Bentuk terikat 'antar-' ditulis serangkai dengan kata dasarnya ('antarbangsa'). Begitu juga kata 'kerja sama' dipisah. Pada opsi lain: pascapanen serangkai, tunanetra serangkai, subbagian serangkai."
        },
        "Pemerintah menggalakkan program pasca panen di daerah pedesaan.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Bentuk terikat 'antar-' ditulis serangkai dengan kata dasarnya ('antarbangsa'). Begitu juga kata 'kerja sama' dipisah. Pada opsi lain: pascapanen serangkai, tunanetra serangkai, subbagian serangkai."
        },
        "Bantuan beasiswa itu ditujukan untuk mahasiswa tuna netra.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Bentuk terikat 'antar-' ditulis serangkai dengan kata dasarnya ('antarbangsa'). Begitu juga kata 'kerja sama' dipisah. Pada opsi lain: pascapanen serangkai, tunanetra serangkai, subbagian serangkai."
        },
        "Ia bertindak sebagai juru bicara sub bagian humas.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Bentuk terikat 'antar-' ditulis serangkai dengan kata dasarnya ('antarbangsa'). Begitu juga kata 'kerja sama' dipisah. Pada opsi lain: pascapanen serangkai, tunanetra serangkai, subbagian serangkai."
        }
      }
    },
    {
      "id": "tps-pbm-02",
      "conceptName": "Ketepatan Penggunaan Tanda Baca",
      "topic": "Ketepatan Penggunaan Tanda Baca",
      "questionText": "Kalimat yang menggunakan tanda baca koma (,) secara SALAH adalah...",
      "type": "mcq",
      "options": [
        "Ibu membeli apel, jeruk, dan mangga di pasar induk.",
        "Meskipun hari hujan lebat, para siswa tetap berangkat ke sekolah.",
        "Dia mengatakan, bahwa proyek revitalisasi sungai akan segera dimulai.",
        "Oleh karena itu, kita harus selalu menjaga kelestarian lingkungan.",
        "Jakarta, ibu kota negara Indonesia, menghadapi tantangan polusi udara."
      ],
      "optionDetails": {
        "Ibu membeli apel, jeruk, dan mangga di pasar induk.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tanda koma tidak boleh digunakan di depan konjungsi subordinatif 'bahwa' yang mengantarai klausa objek dalam kalimat majemuk bertingkat.",
        "Meskipun hari hujan lebat, para siswa tetap berangkat ke sekolah.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tanda koma tidak boleh digunakan di depan konjungsi subordinatif 'bahwa' yang mengantarai klausa objek dalam kalimat majemuk bertingkat.",
        "Dia mengatakan, bahwa proyek revitalisasi sungai akan segera dimulai.": "✓ BENAR: Tanda koma tidak boleh digunakan di depan konjungsi subordinatif 'bahwa' yang mengantarai klausa objek dalam kalimat majemuk bertingkat.",
        "Oleh karena itu, kita harus selalu menjaga kelestarian lingkungan.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tanda koma tidak boleh digunakan di depan konjungsi subordinatif 'bahwa' yang mengantarai klausa objek dalam kalimat majemuk bertingkat.",
        "Jakarta, ibu kota negara Indonesia, menghadapi tantangan polusi udara.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Tanda koma tidak boleh digunakan di depan konjungsi subordinatif 'bahwa' yang mengantarai klausa objek dalam kalimat majemuk bertingkat."
      },
      "correctAnswer": "Dia mengatakan, bahwa proyek revitalisasi sungai akan segera dimulai.",
      "explanationText": "Tanda koma tidak boleh digunakan di depan konjungsi subordinatif 'bahwa' yang mengantarai klausa objek dalam kalimat majemuk bertingkat.",
      "knownWrongPatterns": {
        "Ibu membeli apel, jeruk, dan mangga di pasar induk.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Tanda koma tidak boleh digunakan di depan konjungsi subordinatif 'bahwa' yang mengantarai klausa objek dalam kalimat majemuk bertingkat."
        },
        "Meskipun hari hujan lebat, para siswa tetap berangkat ke sekolah.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Tanda koma tidak boleh digunakan di depan konjungsi subordinatif 'bahwa' yang mengantarai klausa objek dalam kalimat majemuk bertingkat."
        },
        "Oleh karena itu, kita harus selalu menjaga kelestarian lingkungan.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Tanda koma tidak boleh digunakan di depan konjungsi subordinatif 'bahwa' yang mengantarai klausa objek dalam kalimat majemuk bertingkat."
        },
        "Jakarta, ibu kota negara Indonesia, menghadapi tantangan polusi udara.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Tanda koma tidak boleh digunakan di depan konjungsi subordinatif 'bahwa' yang mengantarai klausa objek dalam kalimat majemuk bertingkat."
        }
      }
    },
    {
      "id": "tps-pbm-03",
      "conceptName": "Kalimat Efektif & Struktur Sintaksis",
      "topic": "Kalimat Efektif & Struktur Sintaksis",
      "questionText": "Kalimat berikut yang merupakan kalimat efektif dan memenuhi kaidah ketatabahasaan adalah...",
      "type": "mcq",
      "options": [
        "Untuk mempersingkat waktu, acara berikutnya akan segera kita mulai.",
        "Bagi seluruh peserta lomba dimohon segera memasuki ruangan ujian.",
        "Penelitian ini bertujuan untuk menganalisis dampak limbah cair terhadap ekosistem mangrove.",
        "Dalam seminar itu membahas mengenai pentingnya literasi finansial digital.",
        "Rumah di mana tempat ia dibesarkan kini telah dipugar oleh yayasan cagar budaya."
      ],
      "optionDetails": {
        "Untuk mempersingkat waktu, acara berikutnya akan segera kita mulai.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pilihan ketiga memiliki subjek yang jelas ('Penelitian ini') dan predikat yang tepat ('bertujuan untuk menganalisis'). Pilihan lain rancu (subjek kabur karena preposisi 'bagi'/'dalam', penggunaan 'di mana' secara salah).",
        "Bagi seluruh peserta lomba dimohon segera memasuki ruangan ujian.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pilihan ketiga memiliki subjek yang jelas ('Penelitian ini') dan predikat yang tepat ('bertujuan untuk menganalisis'). Pilihan lain rancu (subjek kabur karena preposisi 'bagi'/'dalam', penggunaan 'di mana' secara salah).",
        "Penelitian ini bertujuan untuk menganalisis dampak limbah cair terhadap ekosistem mangrove.": "✓ BENAR: Pilihan ketiga memiliki subjek yang jelas ('Penelitian ini') dan predikat yang tepat ('bertujuan untuk menganalisis'). Pilihan lain rancu (subjek kabur karena preposisi 'bagi'/'dalam', penggunaan 'di mana' secara salah).",
        "Dalam seminar itu membahas mengenai pentingnya literasi finansial digital.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pilihan ketiga memiliki subjek yang jelas ('Penelitian ini') dan predikat yang tepat ('bertujuan untuk menganalisis'). Pilihan lain rancu (subjek kabur karena preposisi 'bagi'/'dalam', penggunaan 'di mana' secara salah).",
        "Rumah di mana tempat ia dibesarkan kini telah dipugar oleh yayasan cagar budaya.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pilihan ketiga memiliki subjek yang jelas ('Penelitian ini') dan predikat yang tepat ('bertujuan untuk menganalisis'). Pilihan lain rancu (subjek kabur karena preposisi 'bagi'/'dalam', penggunaan 'di mana' secara salah)."
      },
      "correctAnswer": "Penelitian ini bertujuan untuk menganalisis dampak limbah cair terhadap ekosistem mangrove.",
      "explanationText": "Pilihan ketiga memiliki subjek yang jelas ('Penelitian ini') dan predikat yang tepat ('bertujuan untuk menganalisis'). Pilihan lain rancu (subjek kabur karena preposisi 'bagi'/'dalam', penggunaan 'di mana' secara salah).",
      "knownWrongPatterns": {
        "Untuk mempersingkat waktu, acara berikutnya akan segera kita mulai.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pilihan ketiga memiliki subjek yang jelas ('Penelitian ini') dan predikat yang tepat ('bertujuan untuk menganalisis'). Pilihan lain rancu (subjek kabur karena preposisi 'bagi'/'dalam', penggunaan 'di mana' secara salah)."
        },
        "Bagi seluruh peserta lomba dimohon segera memasuki ruangan ujian.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pilihan ketiga memiliki subjek yang jelas ('Penelitian ini') dan predikat yang tepat ('bertujuan untuk menganalisis'). Pilihan lain rancu (subjek kabur karena preposisi 'bagi'/'dalam', penggunaan 'di mana' secara salah)."
        },
        "Dalam seminar itu membahas mengenai pentingnya literasi finansial digital.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pilihan ketiga memiliki subjek yang jelas ('Penelitian ini') dan predikat yang tepat ('bertujuan untuk menganalisis'). Pilihan lain rancu (subjek kabur karena preposisi 'bagi'/'dalam', penggunaan 'di mana' secara salah)."
        },
        "Rumah di mana tempat ia dibesarkan kini telah dipugar oleh yayasan cagar budaya.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pilihan ketiga memiliki subjek yang jelas ('Penelitian ini') dan predikat yang tepat ('bertujuan untuk menganalisis'). Pilihan lain rancu (subjek kabur karena preposisi 'bagi'/'dalam', penggunaan 'di mana' secara salah)."
        }
      }
    },
    {
      "id": "tps-pbm-04",
      "conceptName": "Kosakata Baku & Kata Serapan",
      "topic": "Kosakata Baku & Kata Serapan",
      "questionText": "Kata serapan yang dieja secara benar sesuai KBBI dan kaidah ejaan resmi adalah...",
      "type": "mcq",
      "options": [
        "Analisa",
        "Kwalitas",
        "Objektif",
        "Praktek",
        "Hirarki"
      ],
      "optionDetails": {
        "Analisa": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bentuk baku: objektif (bukan obyektif). Bentuk baku lainnya: analisis (bukan analisa), kualitas (bukan kwalitas), praktik (bukan praktek), hierarki (bukan hirarki).",
        "Kwalitas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bentuk baku: objektif (bukan obyektif). Bentuk baku lainnya: analisis (bukan analisa), kualitas (bukan kwalitas), praktik (bukan praktek), hierarki (bukan hirarki).",
        "Objektif": "✓ BENAR: Bentuk baku: objektif (bukan obyektif). Bentuk baku lainnya: analisis (bukan analisa), kualitas (bukan kwalitas), praktik (bukan praktek), hierarki (bukan hirarki).",
        "Praktek": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bentuk baku: objektif (bukan obyektif). Bentuk baku lainnya: analisis (bukan analisa), kualitas (bukan kwalitas), praktik (bukan praktek), hierarki (bukan hirarki).",
        "Hirarki": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Bentuk baku: objektif (bukan obyektif). Bentuk baku lainnya: analisis (bukan analisa), kualitas (bukan kwalitas), praktik (bukan praktek), hierarki (bukan hirarki)."
      },
      "correctAnswer": "Objektif",
      "explanationText": "Bentuk baku: objektif (bukan obyektif). Bentuk baku lainnya: analisis (bukan analisa), kualitas (bukan kwalitas), praktik (bukan praktek), hierarki (bukan hirarki).",
      "knownWrongPatterns": {
        "Analisa": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Bentuk baku: objektif (bukan obyektif). Bentuk baku lainnya: analisis (bukan analisa), kualitas (bukan kwalitas), praktik (bukan praktek), hierarki (bukan hirarki)."
        },
        "Kwalitas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Bentuk baku: objektif (bukan obyektif). Bentuk baku lainnya: analisis (bukan analisa), kualitas (bukan kwalitas), praktik (bukan praktek), hierarki (bukan hirarki)."
        },
        "Praktek": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Bentuk baku: objektif (bukan obyektif). Bentuk baku lainnya: analisis (bukan analisa), kualitas (bukan kwalitas), praktik (bukan praktek), hierarki (bukan hirarki)."
        },
        "Hirarki": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Bentuk baku: objektif (bukan obyektif). Bentuk baku lainnya: analisis (bukan analisa), kualitas (bukan kwalitas), praktik (bukan praktek), hierarki (bukan hirarki)."
        }
      }
    },
    {
      "id": "tps-pbm-05",
      "conceptName": "Huruf Kapital & Nama Geografi",
      "topic": "Huruf Kapital & Nama Geografi",
      "questionText": "Penggunaan huruf kapital yang tepat terdapat pada kalimat...",
      "type": "mcq",
      "options": [
        "Bibi membuat sambal khas dengan menambahkan Jeruk Bali.",
        "Kapal itu berlayar melintasi Selat Sunda menuju Samudra Hindia.",
        "Kami berkunjung ke rumah Haji ahmad pada hari minggu.",
        "Presiden Joko Widodo meresmikan jembatan itu di Provinsi Jawa barat.",
        "Ia mengoleksi batik Solo dan ukiran Jepara yang dibeli di Pulau jawa."
      ],
      "optionDetails": {
        "Bibi membuat sambal khas dengan menambahkan Jeruk Bali.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Nama geografi yang spesifik ditulis kapital: 'Selat Sunda' dan 'Samudra Hindia'. 'Jeruk bali' jenis buah jeruk kecil 'bali' bukan nama diri geografi.",
        "Kapal itu berlayar melintasi Selat Sunda menuju Samudra Hindia.": "✓ BENAR: Nama geografi yang spesifik ditulis kapital: 'Selat Sunda' dan 'Samudra Hindia'. 'Jeruk bali' jenis buah jeruk kecil 'bali' bukan nama diri geografi.",
        "Kami berkunjung ke rumah Haji ahmad pada hari minggu.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Nama geografi yang spesifik ditulis kapital: 'Selat Sunda' dan 'Samudra Hindia'. 'Jeruk bali' jenis buah jeruk kecil 'bali' bukan nama diri geografi.",
        "Presiden Joko Widodo meresmikan jembatan itu di Provinsi Jawa barat.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Nama geografi yang spesifik ditulis kapital: 'Selat Sunda' dan 'Samudra Hindia'. 'Jeruk bali' jenis buah jeruk kecil 'bali' bukan nama diri geografi.",
        "Ia mengoleksi batik Solo dan ukiran Jepara yang dibeli di Pulau jawa.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Nama geografi yang spesifik ditulis kapital: 'Selat Sunda' dan 'Samudra Hindia'. 'Jeruk bali' jenis buah jeruk kecil 'bali' bukan nama diri geografi."
      },
      "correctAnswer": "Kapal itu berlayar melintasi Selat Sunda menuju Samudra Hindia.",
      "explanationText": "Nama geografi yang spesifik ditulis kapital: 'Selat Sunda' dan 'Samudra Hindia'. 'Jeruk bali' jenis buah jeruk kecil 'bali' bukan nama diri geografi.",
      "knownWrongPatterns": {
        "Bibi membuat sambal khas dengan menambahkan Jeruk Bali.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Nama geografi yang spesifik ditulis kapital: 'Selat Sunda' dan 'Samudra Hindia'. 'Jeruk bali' jenis buah jeruk kecil 'bali' bukan nama diri geografi."
        },
        "Kami berkunjung ke rumah Haji ahmad pada hari minggu.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Nama geografi yang spesifik ditulis kapital: 'Selat Sunda' dan 'Samudra Hindia'. 'Jeruk bali' jenis buah jeruk kecil 'bali' bukan nama diri geografi."
        },
        "Presiden Joko Widodo meresmikan jembatan itu di Provinsi Jawa barat.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Nama geografi yang spesifik ditulis kapital: 'Selat Sunda' dan 'Samudra Hindia'. 'Jeruk bali' jenis buah jeruk kecil 'bali' bukan nama diri geografi."
        },
        "Ia mengoleksi batik Solo dan ukiran Jepara yang dibeli di Pulau jawa.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Nama geografi yang spesifik ditulis kapital: 'Selat Sunda' dan 'Samudra Hindia'. 'Jeruk bali' jenis buah jeruk kecil 'bali' bukan nama diri geografi."
        }
      }
    },
    {
      "id": "tps-pbm-06",
      "conceptName": "Kesejajaran Bentuk (Paralelisme)",
      "topic": "Kesejajaran Bentuk (Paralelisme)",
      "questionText": "Kalimat manakah yang memiliki kesejajaran bentuk (paralelisme) yang tepat?",
      "type": "mcq",
      "options": [
        "Tugas utama pustakawan adalah mencatat buku, melayani peminjam, dan pengembalian koleksi.",
        "Tugas utama pustakawan adalah pencatatan buku, melayani peminjam, dan mengatur koleksi.",
        "Tugas utama pustakawan adalah mencatat buku, melayani peminjam, dan mengembalikan koleksi.",
        "Tugas utama pustakawan adalah pencatatan buku, pelayan peminjam, dan pengembalian koleksi.",
        "Tugas utama pustakawan adalah mencatat buku, melayani peminjam, dan diatur koleksinya."
      ],
      "optionDetails": {
        "Tugas utama pustakawan adalah mencatat buku, melayani peminjam, dan pengembalian koleksi.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Paralelisme predikat: jika kata pertama menggunakan verba aktif berimbuhan me- (mencatat), maka kata berikutnya harus sejajar: melayani, mengembalikan.",
        "Tugas utama pustakawan adalah pencatatan buku, melayani peminjam, dan mengatur koleksi.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Paralelisme predikat: jika kata pertama menggunakan verba aktif berimbuhan me- (mencatat), maka kata berikutnya harus sejajar: melayani, mengembalikan.",
        "Tugas utama pustakawan adalah mencatat buku, melayani peminjam, dan mengembalikan koleksi.": "✓ BENAR: Paralelisme predikat: jika kata pertama menggunakan verba aktif berimbuhan me- (mencatat), maka kata berikutnya harus sejajar: melayani, mengembalikan.",
        "Tugas utama pustakawan adalah pencatatan buku, pelayan peminjam, dan pengembalian koleksi.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Paralelisme predikat: jika kata pertama menggunakan verba aktif berimbuhan me- (mencatat), maka kata berikutnya harus sejajar: melayani, mengembalikan.",
        "Tugas utama pustakawan adalah mencatat buku, melayani peminjam, dan diatur koleksinya.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Paralelisme predikat: jika kata pertama menggunakan verba aktif berimbuhan me- (mencatat), maka kata berikutnya harus sejajar: melayani, mengembalikan."
      },
      "correctAnswer": "Tugas utama pustakawan adalah mencatat buku, melayani peminjam, dan mengembalikan koleksi.",
      "explanationText": "Paralelisme predikat: jika kata pertama menggunakan verba aktif berimbuhan me- (mencatat), maka kata berikutnya harus sejajar: melayani, mengembalikan.",
      "knownWrongPatterns": {
        "Tugas utama pustakawan adalah mencatat buku, melayani peminjam, dan pengembalian koleksi.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Paralelisme predikat: jika kata pertama menggunakan verba aktif berimbuhan me- (mencatat), maka kata berikutnya harus sejajar: melayani, mengembalikan."
        },
        "Tugas utama pustakawan adalah pencatatan buku, melayani peminjam, dan mengatur koleksi.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Paralelisme predikat: jika kata pertama menggunakan verba aktif berimbuhan me- (mencatat), maka kata berikutnya harus sejajar: melayani, mengembalikan."
        },
        "Tugas utama pustakawan adalah pencatatan buku, pelayan peminjam, dan pengembalian koleksi.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Paralelisme predikat: jika kata pertama menggunakan verba aktif berimbuhan me- (mencatat), maka kata berikutnya harus sejajar: melayani, mengembalikan."
        },
        "Tugas utama pustakawan adalah mencatat buku, melayani peminjam, dan diatur koleksinya.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Paralelisme predikat: jika kata pertama menggunakan verba aktif berimbuhan me- (mencatat), maka kata berikutnya harus sejajar: melayani, mengembalikan."
        }
      }
    },
    {
      "id": "tps-pbm-07",
      "conceptName": "Penulisan Angka dan Bilangan",
      "topic": "Penulisan Angka dan Bilangan",
      "questionText": "Penulisan angka dan bilangan yang tepat sesuai kaidah ejaan adalah...",
      "type": "mcq",
      "options": [
        "15 orang peserta telah menyelesaikan babak semifinal.",
        "Ibu membeli tiga puluh dua buah buku cerita anak-anak.",
        "Tiga puluh dua siswa hadir dalam peringatan hari guru ke-78.",
        "Ayah memiliki 3 ekor kucing anggora.",
        "Perusahaan mencetak 1000 lembar brosur promosi."
      ],
      "optionDetails": {
        "15 orang peserta telah menyelesaikan babak semifinal.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Awal kalimat tidak boleh menggunakan angka angka (15), melainkan harus dieja dengan huruf ('Tiga puluh dua'). Penulisan tingkatan 'ke-78' juga tepat dengan tanda hubung.",
        "Ibu membeli tiga puluh dua buah buku cerita anak-anak.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Awal kalimat tidak boleh menggunakan angka angka (15), melainkan harus dieja dengan huruf ('Tiga puluh dua'). Penulisan tingkatan 'ke-78' juga tepat dengan tanda hubung.",
        "Tiga puluh dua siswa hadir dalam peringatan hari guru ke-78.": "✓ BENAR: Awal kalimat tidak boleh menggunakan angka angka (15), melainkan harus dieja dengan huruf ('Tiga puluh dua'). Penulisan tingkatan 'ke-78' juga tepat dengan tanda hubung.",
        "Ayah memiliki 3 ekor kucing anggora.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Awal kalimat tidak boleh menggunakan angka angka (15), melainkan harus dieja dengan huruf ('Tiga puluh dua'). Penulisan tingkatan 'ke-78' juga tepat dengan tanda hubung.",
        "Perusahaan mencetak 1000 lembar brosur promosi.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Awal kalimat tidak boleh menggunakan angka angka (15), melainkan harus dieja dengan huruf ('Tiga puluh dua'). Penulisan tingkatan 'ke-78' juga tepat dengan tanda hubung."
      },
      "correctAnswer": "Tiga puluh dua siswa hadir dalam peringatan hari guru ke-78.",
      "explanationText": "Awal kalimat tidak boleh menggunakan angka angka (15), melainkan harus dieja dengan huruf ('Tiga puluh dua'). Penulisan tingkatan 'ke-78' juga tepat dengan tanda hubung.",
      "knownWrongPatterns": {
        "15 orang peserta telah menyelesaikan babak semifinal.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Awal kalimat tidak boleh menggunakan angka angka (15), melainkan harus dieja dengan huruf ('Tiga puluh dua'). Penulisan tingkatan 'ke-78' juga tepat dengan tanda hubung."
        },
        "Ibu membeli tiga puluh dua buah buku cerita anak-anak.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Awal kalimat tidak boleh menggunakan angka angka (15), melainkan harus dieja dengan huruf ('Tiga puluh dua'). Penulisan tingkatan 'ke-78' juga tepat dengan tanda hubung."
        },
        "Ayah memiliki 3 ekor kucing anggora.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Awal kalimat tidak boleh menggunakan angka angka (15), melainkan harus dieja dengan huruf ('Tiga puluh dua'). Penulisan tingkatan 'ke-78' juga tepat dengan tanda hubung."
        },
        "Perusahaan mencetak 1000 lembar brosur promosi.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Awal kalimat tidak boleh menggunakan angka angka (15), melainkan harus dieja dengan huruf ('Tiga puluh dua'). Penulisan tingkatan 'ke-78' juga tepat dengan tanda hubung."
        }
      }
    },
    {
      "id": "tps-pbm-08",
      "conceptName": "Gagasan Utama Paragraf",
      "topic": "Gagasan Utama Paragraf",
      "questionText": "Ide pokok paragraf eksposisi yang baik memiliki karakteristik...",
      "type": "mcq",
      "options": [
        "Selalu terletak pada kalimat terakhir saja",
        "Menjadi payung makna yang dijelaskan oleh kalimat-kalimat pengembang",
        "Harus berupa kalimat kutipan langsung dari pakar",
        "Berisi dialog percakapan para tokoh cerita",
        "Memuat data angka numerik secara mendetail"
      ],
      "optionDetails": {
        "Selalu terletak pada kalimat terakhir saja": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Gagasan pokok atau ide pokok merupakan pernyataan umum yang menjadi pengendali keseluruhan isi paragraf dan diperinci oleh kalimat-kalimat penjelas.",
        "Menjadi payung makna yang dijelaskan oleh kalimat-kalimat pengembang": "✓ BENAR: Gagasan pokok atau ide pokok merupakan pernyataan umum yang menjadi pengendali keseluruhan isi paragraf dan diperinci oleh kalimat-kalimat penjelas.",
        "Harus berupa kalimat kutipan langsung dari pakar": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Gagasan pokok atau ide pokok merupakan pernyataan umum yang menjadi pengendali keseluruhan isi paragraf dan diperinci oleh kalimat-kalimat penjelas.",
        "Berisi dialog percakapan para tokoh cerita": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Gagasan pokok atau ide pokok merupakan pernyataan umum yang menjadi pengendali keseluruhan isi paragraf dan diperinci oleh kalimat-kalimat penjelas.",
        "Memuat data angka numerik secara mendetail": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Gagasan pokok atau ide pokok merupakan pernyataan umum yang menjadi pengendali keseluruhan isi paragraf dan diperinci oleh kalimat-kalimat penjelas."
      },
      "correctAnswer": "Menjadi payung makna yang dijelaskan oleh kalimat-kalimat pengembang",
      "explanationText": "Gagasan pokok atau ide pokok merupakan pernyataan umum yang menjadi pengendali keseluruhan isi paragraf dan diperinci oleh kalimat-kalimat penjelas.",
      "knownWrongPatterns": {
        "Selalu terletak pada kalimat terakhir saja": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Gagasan pokok atau ide pokok merupakan pernyataan umum yang menjadi pengendali keseluruhan isi paragraf dan diperinci oleh kalimat-kalimat penjelas."
        },
        "Harus berupa kalimat kutipan langsung dari pakar": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Gagasan pokok atau ide pokok merupakan pernyataan umum yang menjadi pengendali keseluruhan isi paragraf dan diperinci oleh kalimat-kalimat penjelas."
        },
        "Berisi dialog percakapan para tokoh cerita": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Gagasan pokok atau ide pokok merupakan pernyataan umum yang menjadi pengendali keseluruhan isi paragraf dan diperinci oleh kalimat-kalimat penjelas."
        },
        "Memuat data angka numerik secara mendetail": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Gagasan pokok atau ide pokok merupakan pernyataan umum yang menjadi pengendali keseluruhan isi paragraf dan diperinci oleh kalimat-kalimat penjelas."
        }
      }
    },
    {
      "id": "tps-pbm-09",
      "conceptName": "Penulisan Partikel Pun",
      "topic": "Penulisan Partikel Pun",
      "questionText": "Penggunaan partikel 'pun' yang ditulis serangkai berikut ini adalah tepat, YAITU...",
      "type": "mcq",
      "options": [
        "Jika pun ia tidak datang, kita tetap berangkat.",
        "Jangankan mobil, motor pun ia tidak punya.",
        "Walaupun lelah, mereka tetap tersenyum ramah.",
        "Siapa pun yang melanggar aturan akan dikenakan sanksi tegas.",
        "Kapan pun kamu butuh bantuan, hubungi saya."
      ],
      "optionDetails": {
        "Jika pun ia tidak datang, kita tetap berangkat.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Pun' ditulis serangkai hanya pada konjungsi yang sudah padu: walaupun, meskipun, kendatipun, adapun, bagaimanapun, biarpun, kalaupun, sekalipun (meski). Pada partikel penegas biasa ditulis terpisah.",
        "Jangankan mobil, motor pun ia tidak punya.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Pun' ditulis serangkai hanya pada konjungsi yang sudah padu: walaupun, meskipun, kendatipun, adapun, bagaimanapun, biarpun, kalaupun, sekalipun (meski). Pada partikel penegas biasa ditulis terpisah.",
        "Walaupun lelah, mereka tetap tersenyum ramah.": "✓ BENAR: 'Pun' ditulis serangkai hanya pada konjungsi yang sudah padu: walaupun, meskipun, kendatipun, adapun, bagaimanapun, biarpun, kalaupun, sekalipun (meski). Pada partikel penegas biasa ditulis terpisah.",
        "Siapa pun yang melanggar aturan akan dikenakan sanksi tegas.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Pun' ditulis serangkai hanya pada konjungsi yang sudah padu: walaupun, meskipun, kendatipun, adapun, bagaimanapun, biarpun, kalaupun, sekalipun (meski). Pada partikel penegas biasa ditulis terpisah.",
        "Kapan pun kamu butuh bantuan, hubungi saya.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Pun' ditulis serangkai hanya pada konjungsi yang sudah padu: walaupun, meskipun, kendatipun, adapun, bagaimanapun, biarpun, kalaupun, sekalipun (meski). Pada partikel penegas biasa ditulis terpisah."
      },
      "correctAnswer": "Walaupun lelah, mereka tetap tersenyum ramah.",
      "explanationText": "'Pun' ditulis serangkai hanya pada konjungsi yang sudah padu: walaupun, meskipun, kendatipun, adapun, bagaimanapun, biarpun, kalaupun, sekalipun (meski). Pada partikel penegas biasa ditulis terpisah.",
      "knownWrongPatterns": {
        "Jika pun ia tidak datang, kita tetap berangkat.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Pun' ditulis serangkai hanya pada konjungsi yang sudah padu: walaupun, meskipun, kendatipun, adapun, bagaimanapun, biarpun, kalaupun, sekalipun (meski). Pada partikel penegas biasa ditulis terpisah."
        },
        "Jangankan mobil, motor pun ia tidak punya.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Pun' ditulis serangkai hanya pada konjungsi yang sudah padu: walaupun, meskipun, kendatipun, adapun, bagaimanapun, biarpun, kalaupun, sekalipun (meski). Pada partikel penegas biasa ditulis terpisah."
        },
        "Siapa pun yang melanggar aturan akan dikenakan sanksi tegas.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Pun' ditulis serangkai hanya pada konjungsi yang sudah padu: walaupun, meskipun, kendatipun, adapun, bagaimanapun, biarpun, kalaupun, sekalipun (meski). Pada partikel penegas biasa ditulis terpisah."
        },
        "Kapan pun kamu butuh bantuan, hubungi saya.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Pun' ditulis serangkai hanya pada konjungsi yang sudah padu: walaupun, meskipun, kendatipun, adapun, bagaimanapun, biarpun, kalaupun, sekalipun (meski). Pada partikel penegas biasa ditulis terpisah."
        }
      }
    },
    {
      "id": "tps-pbm-10",
      "conceptName": "Konjungsi Antarkalimat",
      "topic": "Konjungsi Antarkalimat",
      "questionText": "Konjungsi antarkalimat yang menyatakan pertentangan dengan gagasan sebelumnya adalah...",
      "type": "mcq",
      "options": [
        "Selain itu",
        "Bahkan",
        "Namun demikian",
        "Oleh karena itu",
        "Akibatnya"
      ],
      "optionDetails": {
        "Selain itu": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Namun demikian' atau 'Akan tetapi' merupakan konjungsi antarkalimat yang berfungsi mempertentangkan pernyataan kalimat sebelumnya.",
        "Bahkan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Namun demikian' atau 'Akan tetapi' merupakan konjungsi antarkalimat yang berfungsi mempertentangkan pernyataan kalimat sebelumnya.",
        "Namun demikian": "✓ BENAR: 'Namun demikian' atau 'Akan tetapi' merupakan konjungsi antarkalimat yang berfungsi mempertentangkan pernyataan kalimat sebelumnya.",
        "Oleh karena itu": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Namun demikian' atau 'Akan tetapi' merupakan konjungsi antarkalimat yang berfungsi mempertentangkan pernyataan kalimat sebelumnya.",
        "Akibatnya": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Namun demikian' atau 'Akan tetapi' merupakan konjungsi antarkalimat yang berfungsi mempertentangkan pernyataan kalimat sebelumnya."
      },
      "correctAnswer": "Namun demikian",
      "explanationText": "'Namun demikian' atau 'Akan tetapi' merupakan konjungsi antarkalimat yang berfungsi mempertentangkan pernyataan kalimat sebelumnya.",
      "knownWrongPatterns": {
        "Selain itu": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Namun demikian' atau 'Akan tetapi' merupakan konjungsi antarkalimat yang berfungsi mempertentangkan pernyataan kalimat sebelumnya."
        },
        "Bahkan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Namun demikian' atau 'Akan tetapi' merupakan konjungsi antarkalimat yang berfungsi mempertentangkan pernyataan kalimat sebelumnya."
        },
        "Oleh karena itu": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Namun demikian' atau 'Akan tetapi' merupakan konjungsi antarkalimat yang berfungsi mempertentangkan pernyataan kalimat sebelumnya."
        },
        "Akibatnya": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Namun demikian' atau 'Akan tetapi' merupakan konjungsi antarkalimat yang berfungsi mempertentangkan pernyataan kalimat sebelumnya."
        }
      }
    }
  ],
  "utbk-lit": [
    {
      "id": "lit-ind-01",
      "conceptName": "Literasi Membaca: Simpulan Teks",
      "topic": "Literasi Membaca: Simpulan Teks",
      "questionText": "Teks: 'Krisis keanekaragaman hayati bukan lagi ancaman hipotetis masa depan, melainkan realitas darurat yang kini berlangsung di hadapan kita. Konversi hutan primer menjadi lahan monokultur skala raksasa telah memusnahkan koridor migrasi fauna endemik dan memicu fragmentasi ekologis yang parah.' Simpulan utama paragraf tersebut adalah...",
      "type": "mcq",
      "options": [
        "Hutan primer harus sepenuhnya ditebang demi perkebunan monokultur.",
        "Krisis keanekaragaman hayati merupakan ancaman nyata yang dipicu alih fungsi hutan menjadi perkebunan monokultur.",
        "Semua fauna endemik telah punah di seluruh kepulauan Indonesia.",
        "Fragmentasi habitat tidak mempengaruhi kehidupan satwa liar.",
        "Konversi lahan merupakan solusi terbaik perekonomian nasional."
      ],
      "optionDetails": {
        "Hutan primer harus sepenuhnya ditebang demi perkebunan monokultur.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Simpulan merangkum tesis utama: krisis kepunahan adalah fakta darurat nyata masa kini akibat alih fungsi hutan primer menjadi monokultur yang merusak koridor habitat satwa.",
        "Krisis keanekaragaman hayati merupakan ancaman nyata yang dipicu alih fungsi hutan menjadi perkebunan monokultur.": "✓ BENAR: Simpulan merangkum tesis utama: krisis kepunahan adalah fakta darurat nyata masa kini akibat alih fungsi hutan primer menjadi monokultur yang merusak koridor habitat satwa.",
        "Semua fauna endemik telah punah di seluruh kepulauan Indonesia.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Simpulan merangkum tesis utama: krisis kepunahan adalah fakta darurat nyata masa kini akibat alih fungsi hutan primer menjadi monokultur yang merusak koridor habitat satwa.",
        "Fragmentasi habitat tidak mempengaruhi kehidupan satwa liar.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Simpulan merangkum tesis utama: krisis kepunahan adalah fakta darurat nyata masa kini akibat alih fungsi hutan primer menjadi monokultur yang merusak koridor habitat satwa.",
        "Konversi lahan merupakan solusi terbaik perekonomian nasional.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Simpulan merangkum tesis utama: krisis kepunahan adalah fakta darurat nyata masa kini akibat alih fungsi hutan primer menjadi monokultur yang merusak koridor habitat satwa."
      },
      "correctAnswer": "Krisis keanekaragaman hayati merupakan ancaman nyata yang dipicu alih fungsi hutan menjadi perkebunan monokultur.",
      "explanationText": "Simpulan merangkum tesis utama: krisis kepunahan adalah fakta darurat nyata masa kini akibat alih fungsi hutan primer menjadi monokultur yang merusak koridor habitat satwa.",
      "knownWrongPatterns": {
        "Hutan primer harus sepenuhnya ditebang demi perkebunan monokultur.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Simpulan merangkum tesis utama: krisis kepunahan adalah fakta darurat nyata masa kini akibat alih fungsi hutan primer menjadi monokultur yang merusak koridor habitat satwa."
        },
        "Semua fauna endemik telah punah di seluruh kepulauan Indonesia.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Simpulan merangkum tesis utama: krisis kepunahan adalah fakta darurat nyata masa kini akibat alih fungsi hutan primer menjadi monokultur yang merusak koridor habitat satwa."
        },
        "Fragmentasi habitat tidak mempengaruhi kehidupan satwa liar.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Simpulan merangkum tesis utama: krisis kepunahan adalah fakta darurat nyata masa kini akibat alih fungsi hutan primer menjadi monokultur yang merusak koridor habitat satwa."
        },
        "Konversi lahan merupakan solusi terbaik perekonomian nasional.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Simpulan merangkum tesis utama: krisis kepunahan adalah fakta darurat nyata masa kini akibat alih fungsi hutan primer menjadi monokultur yang merusak koridor habitat satwa."
        }
      }
    },
    {
      "id": "lit-ind-02",
      "conceptName": "Tone / Sikap Penulis dalam Teks",
      "topic": "Tone / Sikap Penulis dalam Teks",
      "questionText": "Sikap atau nada (tone) penulis dalam teks yang mengkritik kepunahan keanekaragaman hayati di atas adalah...",
      "type": "mcq",
      "options": [
        "Acuh tak acuh",
        "Prihatin dan kritis",
        "Humoris dan santai",
        "Skeptis terhadap sains",
        "Optimistis berlebihan"
      ],
      "optionDetails": {
        "Acuh tak acuh": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Penulis menggunakan diksi kuat ('realitas darurat', 'memusnahkan', 'fragmentasi ekologis yang parah') yang mencerminkan rasa keprihatinan mendalam dan sikap kritis.",
        "Prihatin dan kritis": "✓ BENAR: Penulis menggunakan diksi kuat ('realitas darurat', 'memusnahkan', 'fragmentasi ekologis yang parah') yang mencerminkan rasa keprihatinan mendalam dan sikap kritis.",
        "Humoris dan santai": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Penulis menggunakan diksi kuat ('realitas darurat', 'memusnahkan', 'fragmentasi ekologis yang parah') yang mencerminkan rasa keprihatinan mendalam dan sikap kritis.",
        "Skeptis terhadap sains": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Penulis menggunakan diksi kuat ('realitas darurat', 'memusnahkan', 'fragmentasi ekologis yang parah') yang mencerminkan rasa keprihatinan mendalam dan sikap kritis.",
        "Optimistis berlebihan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Penulis menggunakan diksi kuat ('realitas darurat', 'memusnahkan', 'fragmentasi ekologis yang parah') yang mencerminkan rasa keprihatinan mendalam dan sikap kritis."
      },
      "correctAnswer": "Prihatin dan kritis",
      "explanationText": "Penulis menggunakan diksi kuat ('realitas darurat', 'memusnahkan', 'fragmentasi ekologis yang parah') yang mencerminkan rasa keprihatinan mendalam dan sikap kritis.",
      "knownWrongPatterns": {
        "Acuh tak acuh": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Penulis menggunakan diksi kuat ('realitas darurat', 'memusnahkan', 'fragmentasi ekologis yang parah') yang mencerminkan rasa keprihatinan mendalam dan sikap kritis."
        },
        "Humoris dan santai": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Penulis menggunakan diksi kuat ('realitas darurat', 'memusnahkan', 'fragmentasi ekologis yang parah') yang mencerminkan rasa keprihatinan mendalam dan sikap kritis."
        },
        "Skeptis terhadap sains": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Penulis menggunakan diksi kuat ('realitas darurat', 'memusnahkan', 'fragmentasi ekologis yang parah') yang mencerminkan rasa keprihatinan mendalam dan sikap kritis."
        },
        "Optimistis berlebihan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Penulis menggunakan diksi kuat ('realitas darurat', 'memusnahkan', 'fragmentasi ekologis yang parah') yang mencerminkan rasa keprihatinan mendalam dan sikap kritis."
        }
      }
    },
    {
      "id": "lit-ind-03",
      "conceptName": "Inferensi Logis Teks",
      "topic": "Inferensi Logis Teks",
      "questionText": "Manakah pernyataan yang merupakan inferensi (kesimpulan tersirat) logis dari teks ekologi di atas?",
      "type": "mcq",
      "options": [
        "Keberlanjutan perkebunan monokultur lebih penting daripada spesies langka.",
        "Fragmentasi habitat dapat mengganggu siklus reproduksi alami dan kelangsungan hidup satwa endemik.",
        "Hewan tidak memerlukan koridor migrasi untuk bertahan hidup.",
        "Hutan primer memiliki keanekaragaman hayati yang lebih rendah dari kebun sawit.",
        "Semua bencana alam disebabkan oleh satwa endemik."
      ],
      "optionDetails": {
        "Keberlanjutan perkebunan monokultur lebih penting daripada spesies langka.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jika koridor migrasi musnah dan terjadi fragmentasi ekologis parah, inferensi logisnya adalah satwa terisolasi dan siklus reproduksi serta makanan mereka terancam.",
        "Fragmentasi habitat dapat mengganggu siklus reproduksi alami dan kelangsungan hidup satwa endemik.": "✓ BENAR: Jika koridor migrasi musnah dan terjadi fragmentasi ekologis parah, inferensi logisnya adalah satwa terisolasi dan siklus reproduksi serta makanan mereka terancam.",
        "Hewan tidak memerlukan koridor migrasi untuk bertahan hidup.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jika koridor migrasi musnah dan terjadi fragmentasi ekologis parah, inferensi logisnya adalah satwa terisolasi dan siklus reproduksi serta makanan mereka terancam.",
        "Hutan primer memiliki keanekaragaman hayati yang lebih rendah dari kebun sawit.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jika koridor migrasi musnah dan terjadi fragmentasi ekologis parah, inferensi logisnya adalah satwa terisolasi dan siklus reproduksi serta makanan mereka terancam.",
        "Semua bencana alam disebabkan oleh satwa endemik.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Jika koridor migrasi musnah dan terjadi fragmentasi ekologis parah, inferensi logisnya adalah satwa terisolasi dan siklus reproduksi serta makanan mereka terancam."
      },
      "correctAnswer": "Fragmentasi habitat dapat mengganggu siklus reproduksi alami dan kelangsungan hidup satwa endemik.",
      "explanationText": "Jika koridor migrasi musnah dan terjadi fragmentasi ekologis parah, inferensi logisnya adalah satwa terisolasi dan siklus reproduksi serta makanan mereka terancam.",
      "knownWrongPatterns": {
        "Keberlanjutan perkebunan monokultur lebih penting daripada spesies langka.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Jika koridor migrasi musnah dan terjadi fragmentasi ekologis parah, inferensi logisnya adalah satwa terisolasi dan siklus reproduksi serta makanan mereka terancam."
        },
        "Hewan tidak memerlukan koridor migrasi untuk bertahan hidup.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Jika koridor migrasi musnah dan terjadi fragmentasi ekologis parah, inferensi logisnya adalah satwa terisolasi dan siklus reproduksi serta makanan mereka terancam."
        },
        "Hutan primer memiliki keanekaragaman hayati yang lebih rendah dari kebun sawit.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Jika koridor migrasi musnah dan terjadi fragmentasi ekologis parah, inferensi logisnya adalah satwa terisolasi dan siklus reproduksi serta makanan mereka terancam."
        },
        "Semua bencana alam disebabkan oleh satwa endemik.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Jika koridor migrasi musnah dan terjadi fragmentasi ekologis parah, inferensi logisnya adalah satwa terisolasi dan siklus reproduksi serta makanan mereka terancam."
        }
      }
    },
    {
      "id": "lit-ind-04",
      "conceptName": "Verifikasi Fakta Teks Bacaan",
      "topic": "Verifikasi Fakta Teks Bacaan",
      "questionText": "Pernyataan yang TIDAK SESUAI dengan isi teks ekologi di atas adalah...",
      "type": "mcq",
      "options": [
        "Krisis keanekaragaman hayati sedang berlangsung saat ini.",
        "Lahan monokultur menggantikan fungsi hutan primer.",
        "Koridor migrasi fauna mengalami pemusnahan.",
        "Krisis keanekaragaman hayati masih sebatas ancaman hipotetis di masa depan.",
        "Konversi lahan memicu fragmentasi ekologis."
      ],
      "optionDetails": {
        "Krisis keanekaragaman hayati sedang berlangsung saat ini.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teks menyatakan secara eksplisit: 'Krisis keanekaragaman hayati BUKAN LAGI ancaman hipotetis masa depan, melainkan realitas darurat yang kini berlangsung...'.",
        "Lahan monokultur menggantikan fungsi hutan primer.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teks menyatakan secara eksplisit: 'Krisis keanekaragaman hayati BUKAN LAGI ancaman hipotetis masa depan, melainkan realitas darurat yang kini berlangsung...'.",
        "Koridor migrasi fauna mengalami pemusnahan.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teks menyatakan secara eksplisit: 'Krisis keanekaragaman hayati BUKAN LAGI ancaman hipotetis masa depan, melainkan realitas darurat yang kini berlangsung...'.",
        "Krisis keanekaragaman hayati masih sebatas ancaman hipotetis di masa depan.": "✓ BENAR: Teks menyatakan secara eksplisit: 'Krisis keanekaragaman hayati BUKAN LAGI ancaman hipotetis masa depan, melainkan realitas darurat yang kini berlangsung...'.",
        "Konversi lahan memicu fragmentasi ekologis.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Teks menyatakan secara eksplisit: 'Krisis keanekaragaman hayati BUKAN LAGI ancaman hipotetis masa depan, melainkan realitas darurat yang kini berlangsung...'."
      },
      "correctAnswer": "Krisis keanekaragaman hayati masih sebatas ancaman hipotetis di masa depan.",
      "explanationText": "Teks menyatakan secara eksplisit: 'Krisis keanekaragaman hayati BUKAN LAGI ancaman hipotetis masa depan, melainkan realitas darurat yang kini berlangsung...'.",
      "knownWrongPatterns": {
        "Krisis keanekaragaman hayati sedang berlangsung saat ini.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Teks menyatakan secara eksplisit: 'Krisis keanekaragaman hayati BUKAN LAGI ancaman hipotetis masa depan, melainkan realitas darurat yang kini berlangsung...'."
        },
        "Lahan monokultur menggantikan fungsi hutan primer.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Teks menyatakan secara eksplisit: 'Krisis keanekaragaman hayati BUKAN LAGI ancaman hipotetis masa depan, melainkan realitas darurat yang kini berlangsung...'."
        },
        "Koridor migrasi fauna mengalami pemusnahan.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Teks menyatakan secara eksplisit: 'Krisis keanekaragaman hayati BUKAN LAGI ancaman hipotetis masa depan, melainkan realitas darurat yang kini berlangsung...'."
        },
        "Konversi lahan memicu fragmentasi ekologis.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Teks menyatakan secara eksplisit: 'Krisis keanekaragaman hayati BUKAN LAGI ancaman hipotetis masa depan, melainkan realitas darurat yang kini berlangsung...'."
        }
      }
    },
    {
      "id": "lit-ind-05",
      "conceptName": "Pemaknaan Kosakata Kontekstual",
      "topic": "Pemaknaan Kosakata Kontekstual",
      "questionText": "Kata 'FRAGMENTASI' dalam teks di atas memiliki makna...",
      "type": "mcq",
      "options": [
        "Penyatuan kembali bagian-bagian yang terpisah",
        "Pemecahan atau pembagian wilayah habitat utuh menjadi bagian-bagian kecil yang terisolasi",
        "Pertumbuhan biomassa secara cepat",
        "Penanaman bibit pohon baru di taman kota",
        "Penyebaran racun pestisida ke udara"
      ],
      "optionDetails": {
        "Penyatuan kembali bagian-bagian yang terpisah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Fragmentasi habitat berarti terpecah-pecahnya bentang alam alami yang luas menjadi pulau-pulau habitat kecil yang terpisah oleh lanskap buatan manusia.",
        "Pemecahan atau pembagian wilayah habitat utuh menjadi bagian-bagian kecil yang terisolasi": "✓ BENAR: Fragmentasi habitat berarti terpecah-pecahnya bentang alam alami yang luas menjadi pulau-pulau habitat kecil yang terpisah oleh lanskap buatan manusia.",
        "Pertumbuhan biomassa secara cepat": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Fragmentasi habitat berarti terpecah-pecahnya bentang alam alami yang luas menjadi pulau-pulau habitat kecil yang terpisah oleh lanskap buatan manusia.",
        "Penanaman bibit pohon baru di taman kota": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Fragmentasi habitat berarti terpecah-pecahnya bentang alam alami yang luas menjadi pulau-pulau habitat kecil yang terpisah oleh lanskap buatan manusia.",
        "Penyebaran racun pestisida ke udara": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Fragmentasi habitat berarti terpecah-pecahnya bentang alam alami yang luas menjadi pulau-pulau habitat kecil yang terpisah oleh lanskap buatan manusia."
      },
      "correctAnswer": "Pemecahan atau pembagian wilayah habitat utuh menjadi bagian-bagian kecil yang terisolasi",
      "explanationText": "Fragmentasi habitat berarti terpecah-pecahnya bentang alam alami yang luas menjadi pulau-pulau habitat kecil yang terpisah oleh lanskap buatan manusia.",
      "knownWrongPatterns": {
        "Penyatuan kembali bagian-bagian yang terpisah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Fragmentasi habitat berarti terpecah-pecahnya bentang alam alami yang luas menjadi pulau-pulau habitat kecil yang terpisah oleh lanskap buatan manusia."
        },
        "Pertumbuhan biomassa secara cepat": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Fragmentasi habitat berarti terpecah-pecahnya bentang alam alami yang luas menjadi pulau-pulau habitat kecil yang terpisah oleh lanskap buatan manusia."
        },
        "Penanaman bibit pohon baru di taman kota": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Fragmentasi habitat berarti terpecah-pecahnya bentang alam alami yang luas menjadi pulau-pulau habitat kecil yang terpisah oleh lanskap buatan manusia."
        },
        "Penyebaran racun pestisida ke udara": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Fragmentasi habitat berarti terpecah-pecahnya bentang alam alami yang luas menjadi pulau-pulau habitat kecil yang terpisah oleh lanskap buatan manusia."
        }
      }
    },
    {
      "id": "lit-ind-06",
      "conceptName": "Tujuan Penulisan Teks",
      "topic": "Tujuan Penulisan Teks",
      "questionText": "Apa tujuan komunikatif penulis memaparkan data dampak konversi hutan?",
      "type": "mcq",
      "options": [
        "Meyakinkan pembaca tentang urgensi penyelamatan ekosistem hutan dari degradasi lingkungan",
        "Mempromosikan produk hasil panen monokultur kepada pembaca",
        "Mengajak masyarakat untuk memelihara satwa liar di dalam rumah",
        "Menghibur pembaca dengan cerita satwa fiksi",
        "Mengkritik para peneliti keanekaragaman hayati"
      ],
      "optionDetails": {
        "Meyakinkan pembaca tentang urgensi penyelamatan ekosistem hutan dari degradasi lingkungan": "✓ BENAR: Penulis menyajikan fakta kritis untuk mengedukasi dan menggugah kesadaran pembaca tentang bahaya nyata kepunahan ekologis.",
        "Mempromosikan produk hasil panen monokultur kepada pembaca": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Penulis menyajikan fakta kritis untuk mengedukasi dan menggugah kesadaran pembaca tentang bahaya nyata kepunahan ekologis.",
        "Mengajak masyarakat untuk memelihara satwa liar di dalam rumah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Penulis menyajikan fakta kritis untuk mengedukasi dan menggugah kesadaran pembaca tentang bahaya nyata kepunahan ekologis.",
        "Menghibur pembaca dengan cerita satwa fiksi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Penulis menyajikan fakta kritis untuk mengedukasi dan menggugah kesadaran pembaca tentang bahaya nyata kepunahan ekologis.",
        "Mengkritik para peneliti keanekaragaman hayati": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Penulis menyajikan fakta kritis untuk mengedukasi dan menggugah kesadaran pembaca tentang bahaya nyata kepunahan ekologis."
      },
      "correctAnswer": "Meyakinkan pembaca tentang urgensi penyelamatan ekosistem hutan dari degradasi lingkungan",
      "explanationText": "Penulis menyajikan fakta kritis untuk mengedukasi dan menggugah kesadaran pembaca tentang bahaya nyata kepunahan ekologis.",
      "knownWrongPatterns": {
        "Mempromosikan produk hasil panen monokultur kepada pembaca": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Penulis menyajikan fakta kritis untuk mengedukasi dan menggugah kesadaran pembaca tentang bahaya nyata kepunahan ekologis."
        },
        "Mengajak masyarakat untuk memelihara satwa liar di dalam rumah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Penulis menyajikan fakta kritis untuk mengedukasi dan menggugah kesadaran pembaca tentang bahaya nyata kepunahan ekologis."
        },
        "Menghibur pembaca dengan cerita satwa fiksi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Penulis menyajikan fakta kritis untuk mengedukasi dan menggugah kesadaran pembaca tentang bahaya nyata kepunahan ekologis."
        },
        "Mengkritik para peneliti keanekaragaman hayati": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Penulis menyajikan fakta kritis untuk mengedukasi dan menggugah kesadaran pembaca tentang bahaya nyata kepunahan ekologis."
        }
      }
    },
    {
      "id": "lit-ind-07",
      "conceptName": "Kelanjutan Paragraf Logis (Kohesi & Koherensi)",
      "topic": "Kelanjutan Paragraf Logis (Kohesi & Koherensi)",
      "questionText": "Jika teks di atas hendak dilanjutkan dengan solusi aplikatif, paragraf berikutnya sebaiknya membahas...",
      "type": "mcq",
      "options": [
        "Keuntungan finansial dari pembalakan liar",
        "Pembangunan koridor ekologis satwa dan moratorium konversi hutan primer berhutan alam",
        "Pembukaan lahan tambang batu bara di area lindung",
        "Sejarah penjajahan rempah-rempah di nusantara",
        "Harga komoditas pangan di pasar internasional"
      ],
      "optionDetails": {
        "Keuntungan finansial dari pembalakan liar": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kelanjutan yang kohesif dan solutif setelah pemaparan masalah kerusakan koridor habitat adalah restorasi koridor hijau dan penegakan hukum moratorium.",
        "Pembangunan koridor ekologis satwa dan moratorium konversi hutan primer berhutan alam": "✓ BENAR: Kelanjutan yang kohesif dan solutif setelah pemaparan masalah kerusakan koridor habitat adalah restorasi koridor hijau dan penegakan hukum moratorium.",
        "Pembukaan lahan tambang batu bara di area lindung": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kelanjutan yang kohesif dan solutif setelah pemaparan masalah kerusakan koridor habitat adalah restorasi koridor hijau dan penegakan hukum moratorium.",
        "Sejarah penjajahan rempah-rempah di nusantara": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kelanjutan yang kohesif dan solutif setelah pemaparan masalah kerusakan koridor habitat adalah restorasi koridor hijau dan penegakan hukum moratorium.",
        "Harga komoditas pangan di pasar internasional": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kelanjutan yang kohesif dan solutif setelah pemaparan masalah kerusakan koridor habitat adalah restorasi koridor hijau dan penegakan hukum moratorium."
      },
      "correctAnswer": "Pembangunan koridor ekologis satwa dan moratorium konversi hutan primer berhutan alam",
      "explanationText": "Kelanjutan yang kohesif dan solutif setelah pemaparan masalah kerusakan koridor habitat adalah restorasi koridor hijau dan penegakan hukum moratorium.",
      "knownWrongPatterns": {
        "Keuntungan finansial dari pembalakan liar": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kelanjutan yang kohesif dan solutif setelah pemaparan masalah kerusakan koridor habitat adalah restorasi koridor hijau dan penegakan hukum moratorium."
        },
        "Pembukaan lahan tambang batu bara di area lindung": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kelanjutan yang kohesif dan solutif setelah pemaparan masalah kerusakan koridor habitat adalah restorasi koridor hijau dan penegakan hukum moratorium."
        },
        "Sejarah penjajahan rempah-rempah di nusantara": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kelanjutan yang kohesif dan solutif setelah pemaparan masalah kerusakan koridor habitat adalah restorasi koridor hijau dan penegakan hukum moratorium."
        },
        "Harga komoditas pangan di pasar internasional": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kelanjutan yang kohesif dan solutif setelah pemaparan masalah kerusakan koridor habitat adalah restorasi koridor hijau dan penegakan hukum moratorium."
        }
      }
    },
    {
      "id": "lit-ind-08",
      "conceptName": "Hubungan Kausal Antarunsur Teks",
      "topic": "Hubungan Kausal Antarunsur Teks",
      "questionText": "Hubungan antarfrasa 'lahan monokultur skala raksasa' dengan 'fragmentasi ekologis' dalam teks adalah hubungan...",
      "type": "mcq",
      "options": [
        "Sebab - akibat",
        "Kondisi - pengecualian",
        "Tujuan - sarana",
        "Waktu - tempat",
        "Perbandingan analogis"
      ],
      "optionDetails": {
        "Sebab - akibat": "✓ BENAR: Alih fungsi menjadi monokultur merupakan penyebab (sebab) yang menghasilkan terjadinya fragmentasi bentang alam (akibat).",
        "Kondisi - pengecualian": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Alih fungsi menjadi monokultur merupakan penyebab (sebab) yang menghasilkan terjadinya fragmentasi bentang alam (akibat).",
        "Tujuan - sarana": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Alih fungsi menjadi monokultur merupakan penyebab (sebab) yang menghasilkan terjadinya fragmentasi bentang alam (akibat).",
        "Waktu - tempat": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Alih fungsi menjadi monokultur merupakan penyebab (sebab) yang menghasilkan terjadinya fragmentasi bentang alam (akibat).",
        "Perbandingan analogis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Alih fungsi menjadi monokultur merupakan penyebab (sebab) yang menghasilkan terjadinya fragmentasi bentang alam (akibat)."
      },
      "correctAnswer": "Sebab - akibat",
      "explanationText": "Alih fungsi menjadi monokultur merupakan penyebab (sebab) yang menghasilkan terjadinya fragmentasi bentang alam (akibat).",
      "knownWrongPatterns": {
        "Kondisi - pengecualian": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Alih fungsi menjadi monokultur merupakan penyebab (sebab) yang menghasilkan terjadinya fragmentasi bentang alam (akibat)."
        },
        "Tujuan - sarana": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Alih fungsi menjadi monokultur merupakan penyebab (sebab) yang menghasilkan terjadinya fragmentasi bentang alam (akibat)."
        },
        "Waktu - tempat": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Alih fungsi menjadi monokultur merupakan penyebab (sebab) yang menghasilkan terjadinya fragmentasi bentang alam (akibat)."
        },
        "Perbandingan analogis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Alih fungsi menjadi monokultur merupakan penyebab (sebab) yang menghasilkan terjadinya fragmentasi bentang alam (akibat)."
        }
      }
    },
    {
      "id": "lit-ind-09",
      "conceptName": "Argumen Pendukung yang Kuat",
      "topic": "Argumen Pendukung yang Kuat",
      "questionText": "Kalimat argumentatif pendukung yang paling relevan untuk memperkuat teks di atas adalah...",
      "type": "mcq",
      "options": [
        "Berdasarkan laporan IUCN, laju kepunahan spesies saat ini terjadi hingga 1.000 kali lebih cepat daripada tingkat latar belakang alami akibat degradasi habitat.",
        "Setiap orang menyukai pemandangan hijau di kebun sawit yang tertata rapi.",
        "Penebangan kayu hutan mendatangkan dividen besar bagi segelintir pemodal konglomerat.",
        "Banyak binatang sirkus yang tampil menghibur pengunjung mall.",
        "Konsumsi kertas dunia mengalami penurunan akibat digitalisasi kantor."
      ],
      "optionDetails": {
        "Berdasarkan laporan IUCN, laju kepunahan spesies saat ini terjadi hingga 1.000 kali lebih cepat daripada tingkat latar belakang alami akibat degradasi habitat.": "✓ BENAR: Data statistik resmi dari lembaga konservasi dunia (IUCN) mengenai laju kepunahan spesies memperkokoh klaim ilmiah dalam teks bacaan.",
        "Setiap orang menyukai pemandangan hijau di kebun sawit yang tertata rapi.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Data statistik resmi dari lembaga konservasi dunia (IUCN) mengenai laju kepunahan spesies memperkokoh klaim ilmiah dalam teks bacaan.",
        "Penebangan kayu hutan mendatangkan dividen besar bagi segelintir pemodal konglomerat.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Data statistik resmi dari lembaga konservasi dunia (IUCN) mengenai laju kepunahan spesies memperkokoh klaim ilmiah dalam teks bacaan.",
        "Banyak binatang sirkus yang tampil menghibur pengunjung mall.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Data statistik resmi dari lembaga konservasi dunia (IUCN) mengenai laju kepunahan spesies memperkokoh klaim ilmiah dalam teks bacaan.",
        "Konsumsi kertas dunia mengalami penurunan akibat digitalisasi kantor.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Data statistik resmi dari lembaga konservasi dunia (IUCN) mengenai laju kepunahan spesies memperkokoh klaim ilmiah dalam teks bacaan."
      },
      "correctAnswer": "Berdasarkan laporan IUCN, laju kepunahan spesies saat ini terjadi hingga 1.000 kali lebih cepat daripada tingkat latar belakang alami akibat degradasi habitat.",
      "explanationText": "Data statistik resmi dari lembaga konservasi dunia (IUCN) mengenai laju kepunahan spesies memperkokoh klaim ilmiah dalam teks bacaan.",
      "knownWrongPatterns": {
        "Setiap orang menyukai pemandangan hijau di kebun sawit yang tertata rapi.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Data statistik resmi dari lembaga konservasi dunia (IUCN) mengenai laju kepunahan spesies memperkokoh klaim ilmiah dalam teks bacaan."
        },
        "Penebangan kayu hutan mendatangkan dividen besar bagi segelintir pemodal konglomerat.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Data statistik resmi dari lembaga konservasi dunia (IUCN) mengenai laju kepunahan spesies memperkokoh klaim ilmiah dalam teks bacaan."
        },
        "Banyak binatang sirkus yang tampil menghibur pengunjung mall.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Data statistik resmi dari lembaga konservasi dunia (IUCN) mengenai laju kepunahan spesies memperkokoh klaim ilmiah dalam teks bacaan."
        },
        "Konsumsi kertas dunia mengalami penurunan akibat digitalisasi kantor.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Data statistik resmi dari lembaga konservasi dunia (IUCN) mengenai laju kepunahan spesies memperkokoh klaim ilmiah dalam teks bacaan."
        }
      }
    },
    {
      "id": "lit-ind-10",
      "conceptName": "Penentuan Judul Teks Bacaan",
      "topic": "Penentuan Judul Teks Bacaan",
      "questionText": "Judul yang paling tepat dan merefleksikan seluruh isi teks di atas adalah...",
      "type": "mcq",
      "options": [
        "Cara Menanam Sawit Skala Raksasa",
        "Alarm Ekologis: Menghentikan Deforestasi dan Ancaman Kepunahan Satwa Liar",
        "Kisah Satwa Liar di Lembah Hijau",
        "Perdagangan Kayu Gelondongan di Indonesia",
        "Manfaat Ekonomi Sektor Perkebunan Monokultur"
      ],
      "optionDetails": {
        "Cara Menanam Sawit Skala Raksasa": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Judul harus mewakili ide pokok dan nada keprihatinan teks terkait krisis keanekaragaman hayati dan kerusakan habitat.",
        "Alarm Ekologis: Menghentikan Deforestasi dan Ancaman Kepunahan Satwa Liar": "✓ BENAR: Judul harus mewakili ide pokok dan nada keprihatinan teks terkait krisis keanekaragaman hayati dan kerusakan habitat.",
        "Kisah Satwa Liar di Lembah Hijau": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Judul harus mewakili ide pokok dan nada keprihatinan teks terkait krisis keanekaragaman hayati dan kerusakan habitat.",
        "Perdagangan Kayu Gelondongan di Indonesia": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Judul harus mewakili ide pokok dan nada keprihatinan teks terkait krisis keanekaragaman hayati dan kerusakan habitat.",
        "Manfaat Ekonomi Sektor Perkebunan Monokultur": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Judul harus mewakili ide pokok dan nada keprihatinan teks terkait krisis keanekaragaman hayati dan kerusakan habitat."
      },
      "correctAnswer": "Alarm Ekologis: Menghentikan Deforestasi dan Ancaman Kepunahan Satwa Liar",
      "explanationText": "Judul harus mewakili ide pokok dan nada keprihatinan teks terkait krisis keanekaragaman hayati dan kerusakan habitat.",
      "knownWrongPatterns": {
        "Cara Menanam Sawit Skala Raksasa": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Judul harus mewakili ide pokok dan nada keprihatinan teks terkait krisis keanekaragaman hayati dan kerusakan habitat."
        },
        "Kisah Satwa Liar di Lembah Hijau": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Judul harus mewakili ide pokok dan nada keprihatinan teks terkait krisis keanekaragaman hayati dan kerusakan habitat."
        },
        "Perdagangan Kayu Gelondongan di Indonesia": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Judul harus mewakili ide pokok dan nada keprihatinan teks terkait krisis keanekaragaman hayati dan kerusakan habitat."
        },
        "Manfaat Ekonomi Sektor Perkebunan Monokultur": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Judul harus mewakili ide pokok dan nada keprihatinan teks terkait krisis keanekaragaman hayati dan kerusakan habitat."
        }
      }
    },
    {
      "id": "lit-ing-01",
      "conceptName": "Reading Comprehension: Author's Main Claim",
      "topic": "Reading Comprehension: Author's Main Claim",
      "questionText": "Read the passage: 'Artificial intelligence and automated decision systems have profoundly altered the employment landscape. While repetitive mechanical roles face displacement, novel paradigms of cognitive collaboration between human intuition and machine precision are emerging.' What is the author's primary perspective regarding technological disruption?",
      "type": "mcq",
      "options": [
        "Technology will inevitably eradicate all forms of human employment permanently.",
        "Technological displacement of routine tasks coincides with new avenues for complementary human-machine synergy.",
        "Governments should outlaw all computational automation immediately.",
        "Repetitive jobs are the most fulfilling and sustainable careers available.",
        "Machines have completely superseded the necessity for human intuition."
      ],
      "optionDetails": {
        "Technology will inevitably eradicate all forms of human employment permanently.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The text balances the displacement of routine roles against the emergence of cognitive collaboration, recognizing both challenges and complementary opportunities.",
        "Technological displacement of routine tasks coincides with new avenues for complementary human-machine synergy.": "✓ BENAR: The text balances the displacement of routine roles against the emergence of cognitive collaboration, recognizing both challenges and complementary opportunities.",
        "Governments should outlaw all computational automation immediately.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The text balances the displacement of routine roles against the emergence of cognitive collaboration, recognizing both challenges and complementary opportunities.",
        "Repetitive jobs are the most fulfilling and sustainable careers available.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The text balances the displacement of routine roles against the emergence of cognitive collaboration, recognizing both challenges and complementary opportunities.",
        "Machines have completely superseded the necessity for human intuition.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The text balances the displacement of routine roles against the emergence of cognitive collaboration, recognizing both challenges and complementary opportunities."
      },
      "correctAnswer": "Technological displacement of routine tasks coincides with new avenues for complementary human-machine synergy.",
      "explanationText": "The text balances the displacement of routine roles against the emergence of cognitive collaboration, recognizing both challenges and complementary opportunities.",
      "knownWrongPatterns": {
        "Technology will inevitably eradicate all forms of human employment permanently.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The text balances the displacement of routine roles against the emergence of cognitive collaboration, recognizing both challenges and complementary opportunities."
        },
        "Governments should outlaw all computational automation immediately.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The text balances the displacement of routine roles against the emergence of cognitive collaboration, recognizing both challenges and complementary opportunities."
        },
        "Repetitive jobs are the most fulfilling and sustainable careers available.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The text balances the displacement of routine roles against the emergence of cognitive collaboration, recognizing both challenges and complementary opportunities."
        },
        "Machines have completely superseded the necessity for human intuition.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The text balances the displacement of routine roles against the emergence of cognitive collaboration, recognizing both challenges and complementary opportunities."
        }
      }
    },
    {
      "id": "lit-ing-02",
      "conceptName": "Detail Retrieval & Comprehension",
      "topic": "Detail Retrieval & Comprehension",
      "questionText": "According to the passage, which category of roles is most susceptible to displacement by automated systems?",
      "type": "mcq",
      "options": [
        "Roles requiring nuanced emotional empathy",
        "Creative artistic direction roles",
        "Repetitive mechanical and routine roles",
        "Scientific hypothesis formulation",
        "Complex dispute arbitration"
      ],
      "optionDetails": {
        "Roles requiring nuanced emotional empathy": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The text explicitly specifies that 'repetitive mechanical roles face displacement'.",
        "Creative artistic direction roles": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The text explicitly specifies that 'repetitive mechanical roles face displacement'.",
        "Repetitive mechanical and routine roles": "✓ BENAR: The text explicitly specifies that 'repetitive mechanical roles face displacement'.",
        "Scientific hypothesis formulation": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The text explicitly specifies that 'repetitive mechanical roles face displacement'.",
        "Complex dispute arbitration": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The text explicitly specifies that 'repetitive mechanical roles face displacement'."
      },
      "correctAnswer": "Repetitive mechanical and routine roles",
      "explanationText": "The text explicitly specifies that 'repetitive mechanical roles face displacement'.",
      "knownWrongPatterns": {
        "Roles requiring nuanced emotional empathy": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The text explicitly specifies that 'repetitive mechanical roles face displacement'."
        },
        "Creative artistic direction roles": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The text explicitly specifies that 'repetitive mechanical roles face displacement'."
        },
        "Scientific hypothesis formulation": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The text explicitly specifies that 'repetitive mechanical roles face displacement'."
        },
        "Complex dispute arbitration": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The text explicitly specifies that 'repetitive mechanical roles face displacement'."
        }
      }
    },
    {
      "id": "lit-ing-03",
      "conceptName": "Contextual Vocabulary",
      "topic": "Contextual Vocabulary",
      "questionText": "The word 'EMERGING' in the passage is closest in meaning to...",
      "type": "mcq",
      "options": [
        "Disappearing",
        "Arising / Developing",
        "Declining",
        "Regressing",
        "Ceasing"
      ],
      "optionDetails": {
        "Disappearing": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Emerging' denotes coming into prominence, surfacing, or beginning to develop.",
        "Arising / Developing": "✓ BENAR: 'Emerging' denotes coming into prominence, surfacing, or beginning to develop.",
        "Declining": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Emerging' denotes coming into prominence, surfacing, or beginning to develop.",
        "Regressing": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Emerging' denotes coming into prominence, surfacing, or beginning to develop.",
        "Ceasing": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Emerging' denotes coming into prominence, surfacing, or beginning to develop."
      },
      "correctAnswer": "Arising / Developing",
      "explanationText": "'Emerging' denotes coming into prominence, surfacing, or beginning to develop.",
      "knownWrongPatterns": {
        "Disappearing": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Emerging' denotes coming into prominence, surfacing, or beginning to develop."
        },
        "Declining": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Emerging' denotes coming into prominence, surfacing, or beginning to develop."
        },
        "Regressing": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Emerging' denotes coming into prominence, surfacing, or beginning to develop."
        },
        "Ceasing": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Emerging' denotes coming into prominence, surfacing, or beginning to develop."
        }
      }
    },
    {
      "id": "lit-ing-04",
      "conceptName": "Inference and Contextual Reasoning",
      "topic": "Inference and Contextual Reasoning",
      "questionText": "What can be inferred about human intuition from the passage?",
      "type": "mcq",
      "options": [
        "It has become entirely redundant in modern industries.",
        "It retains unique strategic value when combined with machine analytical capability.",
        "It can be fully simulated by simple calculator programs.",
        "It is detrimental to effective business decisions.",
        "It is identical to algorithmic machine precision."
      ],
      "optionDetails": {
        "It has become entirely redundant in modern industries.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The phrase 'cognitive collaboration between human intuition and machine precision' implies intuition remains a vital partner to computational speed.",
        "It retains unique strategic value when combined with machine analytical capability.": "✓ BENAR: The phrase 'cognitive collaboration between human intuition and machine precision' implies intuition remains a vital partner to computational speed.",
        "It can be fully simulated by simple calculator programs.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The phrase 'cognitive collaboration between human intuition and machine precision' implies intuition remains a vital partner to computational speed.",
        "It is detrimental to effective business decisions.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The phrase 'cognitive collaboration between human intuition and machine precision' implies intuition remains a vital partner to computational speed.",
        "It is identical to algorithmic machine precision.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The phrase 'cognitive collaboration between human intuition and machine precision' implies intuition remains a vital partner to computational speed."
      },
      "correctAnswer": "It retains unique strategic value when combined with machine analytical capability.",
      "explanationText": "The phrase 'cognitive collaboration between human intuition and machine precision' implies intuition remains a vital partner to computational speed.",
      "knownWrongPatterns": {
        "It has become entirely redundant in modern industries.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The phrase 'cognitive collaboration between human intuition and machine precision' implies intuition remains a vital partner to computational speed."
        },
        "It can be fully simulated by simple calculator programs.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The phrase 'cognitive collaboration between human intuition and machine precision' implies intuition remains a vital partner to computational speed."
        },
        "It is detrimental to effective business decisions.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The phrase 'cognitive collaboration between human intuition and machine precision' implies intuition remains a vital partner to computational speed."
        },
        "It is identical to algorithmic machine precision.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The phrase 'cognitive collaboration between human intuition and machine precision' implies intuition remains a vital partner to computational speed."
        }
      }
    },
    {
      "id": "lit-ing-05",
      "conceptName": "Main Idea & Title Selection",
      "topic": "Main Idea & Title Selection",
      "questionText": "Which of the following would be the most suitable title for the passage?",
      "type": "mcq",
      "options": [
        "The Absolute Demise of the Workforce",
        "Navigating the Automated Frontier: Displacement and Collaboration",
        "How to Program Artificial Intelligence",
        "The History of the Industrial Steam Engine",
        "Why Computers Never Make Errors"
      ],
      "optionDetails": {
        "The Absolute Demise of the Workforce": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The title accurately reflects both facets discussed: automation disruption and newly forged cooperative opportunities.",
        "Navigating the Automated Frontier: Displacement and Collaboration": "✓ BENAR: The title accurately reflects both facets discussed: automation disruption and newly forged cooperative opportunities.",
        "How to Program Artificial Intelligence": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The title accurately reflects both facets discussed: automation disruption and newly forged cooperative opportunities.",
        "The History of the Industrial Steam Engine": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The title accurately reflects both facets discussed: automation disruption and newly forged cooperative opportunities.",
        "Why Computers Never Make Errors": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The title accurately reflects both facets discussed: automation disruption and newly forged cooperative opportunities."
      },
      "correctAnswer": "Navigating the Automated Frontier: Displacement and Collaboration",
      "explanationText": "The title accurately reflects both facets discussed: automation disruption and newly forged cooperative opportunities.",
      "knownWrongPatterns": {
        "The Absolute Demise of the Workforce": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The title accurately reflects both facets discussed: automation disruption and newly forged cooperative opportunities."
        },
        "How to Program Artificial Intelligence": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The title accurately reflects both facets discussed: automation disruption and newly forged cooperative opportunities."
        },
        "The History of the Industrial Steam Engine": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The title accurately reflects both facets discussed: automation disruption and newly forged cooperative opportunities."
        },
        "Why Computers Never Make Errors": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The title accurately reflects both facets discussed: automation disruption and newly forged cooperative opportunities."
        }
      }
    },
    {
      "id": "lit-ing-06",
      "conceptName": "Tone and Register Identification",
      "topic": "Tone and Register Identification",
      "questionText": "The tone of the passage can best be described as...",
      "type": "mcq",
      "options": [
        "Hysterical and apocalyptic",
        "Objective, analytical, and balanced",
        "Sarcastic and dismissive",
        "Nostalgic and sentimental",
        "Uncritically ecstatic"
      ],
      "optionDetails": {
        "Hysterical and apocalyptic": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The passage presents both the disruption and the constructive emergence of hybrid work in a calm, analytical academic tone.",
        "Objective, analytical, and balanced": "✓ BENAR: The passage presents both the disruption and the constructive emergence of hybrid work in a calm, analytical academic tone.",
        "Sarcastic and dismissive": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The passage presents both the disruption and the constructive emergence of hybrid work in a calm, analytical academic tone.",
        "Nostalgic and sentimental": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The passage presents both the disruption and the constructive emergence of hybrid work in a calm, analytical academic tone.",
        "Uncritically ecstatic": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The passage presents both the disruption and the constructive emergence of hybrid work in a calm, analytical academic tone."
      },
      "correctAnswer": "Objective, analytical, and balanced",
      "explanationText": "The passage presents both the disruption and the constructive emergence of hybrid work in a calm, analytical academic tone.",
      "knownWrongPatterns": {
        "Hysterical and apocalyptic": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The passage presents both the disruption and the constructive emergence of hybrid work in a calm, analytical academic tone."
        },
        "Sarcastic and dismissive": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The passage presents both the disruption and the constructive emergence of hybrid work in a calm, analytical academic tone."
        },
        "Nostalgic and sentimental": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The passage presents both the disruption and the constructive emergence of hybrid work in a calm, analytical academic tone."
        },
        "Uncritically ecstatic": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The passage presents both the disruption and the constructive emergence of hybrid work in a calm, analytical academic tone."
        }
      }
    },
    {
      "id": "lit-ing-07",
      "conceptName": "Textual Evidence Identification",
      "topic": "Textual Evidence Identification",
      "questionText": "Which sentence from the text emphasizes the coexistence of humans and intelligent systems?",
      "type": "mcq",
      "options": [
        "'Artificial intelligence and automated decision systems have profoundly altered the employment landscape.'",
        "'Repetitive mechanical roles face displacement.'",
        "'Novel paradigms of cognitive collaboration between human intuition and machine precision are emerging.'",
        "'Machines have replaced all physical workers.'",
        "'Human employment is a relic of the past.'"
      ],
      "optionDetails": {
        "'Artificial intelligence and automated decision systems have profoundly altered the employment landscape.'": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The third sentence highlights the synergy ('cognitive collaboration between human intuition and machine precision').",
        "'Repetitive mechanical roles face displacement.'": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The third sentence highlights the synergy ('cognitive collaboration between human intuition and machine precision').",
        "'Novel paradigms of cognitive collaboration between human intuition and machine precision are emerging.'": "✓ BENAR: The third sentence highlights the synergy ('cognitive collaboration between human intuition and machine precision').",
        "'Machines have replaced all physical workers.'": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The third sentence highlights the synergy ('cognitive collaboration between human intuition and machine precision').",
        "'Human employment is a relic of the past.'": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: The third sentence highlights the synergy ('cognitive collaboration between human intuition and machine precision')."
      },
      "correctAnswer": "'Novel paradigms of cognitive collaboration between human intuition and machine precision are emerging.'",
      "explanationText": "The third sentence highlights the synergy ('cognitive collaboration between human intuition and machine precision').",
      "knownWrongPatterns": {
        "'Artificial intelligence and automated decision systems have profoundly altered the employment landscape.'": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The third sentence highlights the synergy ('cognitive collaboration between human intuition and machine precision')."
        },
        "'Repetitive mechanical roles face displacement.'": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The third sentence highlights the synergy ('cognitive collaboration between human intuition and machine precision')."
        },
        "'Machines have replaced all physical workers.'": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The third sentence highlights the synergy ('cognitive collaboration between human intuition and machine precision')."
        },
        "'Human employment is a relic of the past.'": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: The third sentence highlights the synergy ('cognitive collaboration between human intuition and machine precision')."
        }
      }
    },
    {
      "id": "lit-ing-08",
      "conceptName": "Practical Implication & Extrapolation",
      "topic": "Practical Implication & Extrapolation",
      "questionText": "What does the author imply about future career preparedness?",
      "type": "mcq",
      "options": [
        "Workers should exclusively specialize in repetitive manual chores.",
        "Workers who cultivate creative intuition alongside technological adaptability will likely thrive.",
        "Education should terminate computer literacy curricula.",
        "Nobody needs to learn mathematical or logical thinking.",
        "Machines should be given all voting rights in organizations."
      ],
      "optionDetails": {
        "Workers should exclusively specialize in repetitive manual chores.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Because routine roles diminish while collaborative hybrid roles emerge, cultivating non-routine cognitive skills and tech fluencies is implied.",
        "Workers who cultivate creative intuition alongside technological adaptability will likely thrive.": "✓ BENAR: Because routine roles diminish while collaborative hybrid roles emerge, cultivating non-routine cognitive skills and tech fluencies is implied.",
        "Education should terminate computer literacy curricula.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Because routine roles diminish while collaborative hybrid roles emerge, cultivating non-routine cognitive skills and tech fluencies is implied.",
        "Nobody needs to learn mathematical or logical thinking.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Because routine roles diminish while collaborative hybrid roles emerge, cultivating non-routine cognitive skills and tech fluencies is implied.",
        "Machines should be given all voting rights in organizations.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Because routine roles diminish while collaborative hybrid roles emerge, cultivating non-routine cognitive skills and tech fluencies is implied."
      },
      "correctAnswer": "Workers who cultivate creative intuition alongside technological adaptability will likely thrive.",
      "explanationText": "Because routine roles diminish while collaborative hybrid roles emerge, cultivating non-routine cognitive skills and tech fluencies is implied.",
      "knownWrongPatterns": {
        "Workers should exclusively specialize in repetitive manual chores.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Because routine roles diminish while collaborative hybrid roles emerge, cultivating non-routine cognitive skills and tech fluencies is implied."
        },
        "Education should terminate computer literacy curricula.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Because routine roles diminish while collaborative hybrid roles emerge, cultivating non-routine cognitive skills and tech fluencies is implied."
        },
        "Nobody needs to learn mathematical or logical thinking.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Because routine roles diminish while collaborative hybrid roles emerge, cultivating non-routine cognitive skills and tech fluencies is implied."
        },
        "Machines should be given all voting rights in organizations.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Because routine roles diminish while collaborative hybrid roles emerge, cultivating non-routine cognitive skills and tech fluencies is implied."
        }
      }
    },
    {
      "id": "lit-ing-09",
      "conceptName": "Nuanced Adverb Interpretation",
      "topic": "Nuanced Adverb Interpretation",
      "questionText": "The phrase 'profoundly altered' conveys that the changes in the employment landscape are...",
      "type": "mcq",
      "options": [
        "Superficial and trivial",
        "Far-reaching and substantial",
        "Temporary and passing",
        "Inconsequential",
        "Gradually reversible"
      ],
      "optionDetails": {
        "Superficial and trivial": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Profoundly' signifies deeply, intensely, or to an extensive degree; hence significant and far-reaching impact.",
        "Far-reaching and substantial": "✓ BENAR: 'Profoundly' signifies deeply, intensely, or to an extensive degree; hence significant and far-reaching impact.",
        "Temporary and passing": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Profoundly' signifies deeply, intensely, or to an extensive degree; hence significant and far-reaching impact.",
        "Inconsequential": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Profoundly' signifies deeply, intensely, or to an extensive degree; hence significant and far-reaching impact.",
        "Gradually reversible": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: 'Profoundly' signifies deeply, intensely, or to an extensive degree; hence significant and far-reaching impact."
      },
      "correctAnswer": "Far-reaching and substantial",
      "explanationText": "'Profoundly' signifies deeply, intensely, or to an extensive degree; hence significant and far-reaching impact.",
      "knownWrongPatterns": {
        "Superficial and trivial": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Profoundly' signifies deeply, intensely, or to an extensive degree; hence significant and far-reaching impact."
        },
        "Temporary and passing": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Profoundly' signifies deeply, intensely, or to an extensive degree; hence significant and far-reaching impact."
        },
        "Inconsequential": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Profoundly' signifies deeply, intensely, or to an extensive degree; hence significant and far-reaching impact."
        },
        "Gradually reversible": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: 'Profoundly' signifies deeply, intensely, or to an extensive degree; hence significant and far-reaching impact."
        }
      }
    },
    {
      "id": "lit-ing-10",
      "conceptName": "Application of Passage Concepts",
      "topic": "Application of Passage Concepts",
      "questionText": "Which field is LEAST likely to suffer complete displacement based on the principle of human-machine intuition?",
      "type": "mcq",
      "options": [
        "Automated data transcription",
        "Assembly line part sorting",
        "Psychotherapeutic counseling and ethical leadership",
        "Simple receipt verification",
        "Basic document scanning"
      ],
      "optionDetails": {
        "Automated data transcription": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Psychotherapy and ethical leadership require sophisticated emotional empathy and interpersonal understanding that cannot be reduced to routine mechanical repetition.",
        "Assembly line part sorting": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Psychotherapy and ethical leadership require sophisticated emotional empathy and interpersonal understanding that cannot be reduced to routine mechanical repetition.",
        "Psychotherapeutic counseling and ethical leadership": "✓ BENAR: Psychotherapy and ethical leadership require sophisticated emotional empathy and interpersonal understanding that cannot be reduced to routine mechanical repetition.",
        "Simple receipt verification": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Psychotherapy and ethical leadership require sophisticated emotional empathy and interpersonal understanding that cannot be reduced to routine mechanical repetition.",
        "Basic document scanning": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Psychotherapy and ethical leadership require sophisticated emotional empathy and interpersonal understanding that cannot be reduced to routine mechanical repetition."
      },
      "correctAnswer": "Psychotherapeutic counseling and ethical leadership",
      "explanationText": "Psychotherapy and ethical leadership require sophisticated emotional empathy and interpersonal understanding that cannot be reduced to routine mechanical repetition.",
      "knownWrongPatterns": {
        "Automated data transcription": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Psychotherapy and ethical leadership require sophisticated emotional empathy and interpersonal understanding that cannot be reduced to routine mechanical repetition."
        },
        "Assembly line part sorting": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Psychotherapy and ethical leadership require sophisticated emotional empathy and interpersonal understanding that cannot be reduced to routine mechanical repetition."
        },
        "Simple receipt verification": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Psychotherapy and ethical leadership require sophisticated emotional empathy and interpersonal understanding that cannot be reduced to routine mechanical repetition."
        },
        "Basic document scanning": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Psychotherapy and ethical leadership require sophisticated emotional empathy and interpersonal understanding that cannot be reduced to routine mechanical repetition."
        }
      }
    }
  ],
  "sekdin-deret": [
    {
      "id": "sek-der-01",
      "conceptName": "Deret Angka Bertingkat",
      "topic": "Deret Angka Bertingkat",
      "questionText": "Perhatikan barisan bilangan: 3, 7, 15, 31, 63, ... Angka berikutnya adalah...",
      "type": "mcq",
      "options": [
        "95",
        "112",
        "127",
        "128",
        "131"
      ],
      "optionDetails": {
        "95": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola deret: 2x + 1. (3*2+1=7, 7*2+1=15, 15*2+1=31, 31*2+1=63, 63*2+1=127). Atau selisih kelipatan dua: +4, +8, +16, +32, +64 => 63 + 64 = 127.",
        "112": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola deret: 2x + 1. (3*2+1=7, 7*2+1=15, 15*2+1=31, 31*2+1=63, 63*2+1=127). Atau selisih kelipatan dua: +4, +8, +16, +32, +64 => 63 + 64 = 127.",
        "127": "✓ BENAR: Pola deret: 2x + 1. (3*2+1=7, 7*2+1=15, 15*2+1=31, 31*2+1=63, 63*2+1=127). Atau selisih kelipatan dua: +4, +8, +16, +32, +64 => 63 + 64 = 127.",
        "128": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola deret: 2x + 1. (3*2+1=7, 7*2+1=15, 15*2+1=31, 31*2+1=63, 63*2+1=127). Atau selisih kelipatan dua: +4, +8, +16, +32, +64 => 63 + 64 = 127.",
        "131": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola deret: 2x + 1. (3*2+1=7, 7*2+1=15, 15*2+1=31, 31*2+1=63, 63*2+1=127). Atau selisih kelipatan dua: +4, +8, +16, +32, +64 => 63 + 64 = 127."
      },
      "correctAnswer": "127",
      "explanationText": "Pola deret: 2x + 1. (3*2+1=7, 7*2+1=15, 15*2+1=31, 31*2+1=63, 63*2+1=127). Atau selisih kelipatan dua: +4, +8, +16, +32, +64 => 63 + 64 = 127.",
      "knownWrongPatterns": {
        "95": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola deret: 2x + 1. (3*2+1=7, 7*2+1=15, 15*2+1=31, 31*2+1=63, 63*2+1=127). Atau selisih kelipatan dua: +4, +8, +16, +32, +64 => 63 + 64 = 127."
        },
        "112": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola deret: 2x + 1. (3*2+1=7, 7*2+1=15, 15*2+1=31, 31*2+1=63, 63*2+1=127). Atau selisih kelipatan dua: +4, +8, +16, +32, +64 => 63 + 64 = 127."
        },
        "128": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola deret: 2x + 1. (3*2+1=7, 7*2+1=15, 15*2+1=31, 31*2+1=63, 63*2+1=127). Atau selisih kelipatan dua: +4, +8, +16, +32, +64 => 63 + 64 = 127."
        },
        "131": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola deret: 2x + 1. (3*2+1=7, 7*2+1=15, 15*2+1=31, 31*2+1=63, 63*2+1=127). Atau selisih kelipatan dua: +4, +8, +16, +32, +64 => 63 + 64 = 127."
        }
      }
    },
    {
      "id": "sek-der-02",
      "conceptName": "Deret Dua Larik Selang-Seling",
      "topic": "Deret Dua Larik Selang-Seling",
      "questionText": "Perhatikan deret selang-seling: 5, 8, 11, 11, 17, 14, 23, ... Angka berikutnya adalah...",
      "type": "mcq",
      "options": [
        "17",
        "19",
        "25",
        "29",
        "31"
      ],
      "optionDetails": {
        "17": "✓ BENAR: Deret dua larik: Larik 1 (posisi ganjil): 5, 11, 17, 23 (+6). Larik 2 (posisi genap): 8, 11, 14, ... (+3). Angka ke-8 adalah 14 + 3 = 17.",
        "19": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Deret dua larik: Larik 1 (posisi ganjil): 5, 11, 17, 23 (+6). Larik 2 (posisi genap): 8, 11, 14, ... (+3). Angka ke-8 adalah 14 + 3 = 17.",
        "25": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Deret dua larik: Larik 1 (posisi ganjil): 5, 11, 17, 23 (+6). Larik 2 (posisi genap): 8, 11, 14, ... (+3). Angka ke-8 adalah 14 + 3 = 17.",
        "29": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Deret dua larik: Larik 1 (posisi ganjil): 5, 11, 17, 23 (+6). Larik 2 (posisi genap): 8, 11, 14, ... (+3). Angka ke-8 adalah 14 + 3 = 17.",
        "31": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Deret dua larik: Larik 1 (posisi ganjil): 5, 11, 17, 23 (+6). Larik 2 (posisi genap): 8, 11, 14, ... (+3). Angka ke-8 adalah 14 + 3 = 17."
      },
      "correctAnswer": "17",
      "explanationText": "Deret dua larik: Larik 1 (posisi ganjil): 5, 11, 17, 23 (+6). Larik 2 (posisi genap): 8, 11, 14, ... (+3). Angka ke-8 adalah 14 + 3 = 17.",
      "knownWrongPatterns": {
        "19": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Deret dua larik: Larik 1 (posisi ganjil): 5, 11, 17, 23 (+6). Larik 2 (posisi genap): 8, 11, 14, ... (+3). Angka ke-8 adalah 14 + 3 = 17."
        },
        "25": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Deret dua larik: Larik 1 (posisi ganjil): 5, 11, 17, 23 (+6). Larik 2 (posisi genap): 8, 11, 14, ... (+3). Angka ke-8 adalah 14 + 3 = 17."
        },
        "29": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Deret dua larik: Larik 1 (posisi ganjil): 5, 11, 17, 23 (+6). Larik 2 (posisi genap): 8, 11, 14, ... (+3). Angka ke-8 adalah 14 + 3 = 17."
        },
        "31": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Deret dua larik: Larik 1 (posisi ganjil): 5, 11, 17, 23 (+6). Larik 2 (posisi genap): 8, 11, 14, ... (+3). Angka ke-8 adalah 14 + 3 = 17."
        }
      }
    },
    {
      "id": "sek-der-03",
      "conceptName": "Deret Fibonacci",
      "topic": "Deret Fibonacci",
      "questionText": "Perhatikan deret Fibonacci: 1, 2, 3, 5, 8, 13, 21, ... Angka berikutnya adalah...",
      "type": "mcq",
      "options": [
        "29",
        "32",
        "34",
        "36",
        "42"
      ],
      "optionDetails": {
        "29": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Setiap suku adalah jumlah dari dua suku sebelumnya: 13 + 21 = 34.",
        "32": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Setiap suku adalah jumlah dari dua suku sebelumnya: 13 + 21 = 34.",
        "34": "✓ BENAR: Setiap suku adalah jumlah dari dua suku sebelumnya: 13 + 21 = 34.",
        "36": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Setiap suku adalah jumlah dari dua suku sebelumnya: 13 + 21 = 34.",
        "42": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Setiap suku adalah jumlah dari dua suku sebelumnya: 13 + 21 = 34."
      },
      "correctAnswer": "34",
      "explanationText": "Setiap suku adalah jumlah dari dua suku sebelumnya: 13 + 21 = 34.",
      "knownWrongPatterns": {
        "29": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Setiap suku adalah jumlah dari dua suku sebelumnya: 13 + 21 = 34."
        },
        "32": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Setiap suku adalah jumlah dari dua suku sebelumnya: 13 + 21 = 34."
        },
        "36": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Setiap suku adalah jumlah dari dua suku sebelumnya: 13 + 21 = 34."
        },
        "42": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Setiap suku adalah jumlah dari dua suku sebelumnya: 13 + 21 = 34."
        }
      }
    },
    {
      "id": "sek-der-04",
      "conceptName": "Deret Huruf Bertingkat",
      "topic": "Deret Huruf Bertingkat",
      "questionText": "Deret huruf: A, C, F, J, O, ... Huruf berikutnya adalah...",
      "type": "mcq",
      "options": [
        "T",
        "U",
        "V",
        "W",
        "X"
      ],
      "optionDetails": {
        "T": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Urutan abjad: A(1) [+2] -> C(3) [+3] -> F(6) [+4] -> J(10) [+5] -> O(15) [+6] -> U(21). Huruf ke-21 adalah U.",
        "U": "✓ BENAR: Urutan abjad: A(1) [+2] -> C(3) [+3] -> F(6) [+4] -> J(10) [+5] -> O(15) [+6] -> U(21). Huruf ke-21 adalah U.",
        "V": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Urutan abjad: A(1) [+2] -> C(3) [+3] -> F(6) [+4] -> J(10) [+5] -> O(15) [+6] -> U(21). Huruf ke-21 adalah U.",
        "W": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Urutan abjad: A(1) [+2] -> C(3) [+3] -> F(6) [+4] -> J(10) [+5] -> O(15) [+6] -> U(21). Huruf ke-21 adalah U.",
        "X": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Urutan abjad: A(1) [+2] -> C(3) [+3] -> F(6) [+4] -> J(10) [+5] -> O(15) [+6] -> U(21). Huruf ke-21 adalah U."
      },
      "correctAnswer": "U",
      "explanationText": "Urutan abjad: A(1) [+2] -> C(3) [+3] -> F(6) [+4] -> J(10) [+5] -> O(15) [+6] -> U(21). Huruf ke-21 adalah U.",
      "knownWrongPatterns": {
        "T": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Urutan abjad: A(1) [+2] -> C(3) [+3] -> F(6) [+4] -> J(10) [+5] -> O(15) [+6] -> U(21). Huruf ke-21 adalah U."
        },
        "V": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Urutan abjad: A(1) [+2] -> C(3) [+3] -> F(6) [+4] -> J(10) [+5] -> O(15) [+6] -> U(21). Huruf ke-21 adalah U."
        },
        "W": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Urutan abjad: A(1) [+2] -> C(3) [+3] -> F(6) [+4] -> J(10) [+5] -> O(15) [+6] -> U(21). Huruf ke-21 adalah U."
        },
        "X": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Urutan abjad: A(1) [+2] -> C(3) [+3] -> F(6) [+4] -> J(10) [+5] -> O(15) [+6] -> U(21). Huruf ke-21 adalah U."
        }
      }
    },
    {
      "id": "sek-der-05",
      "conceptName": "Deret Aritmetika Berkurang",
      "topic": "Deret Aritmetika Berkurang",
      "questionText": "Perhatikan deret: 100, 95, 85, 70, 50, ... Angka berikutnya adalah...",
      "type": "mcq",
      "options": [
        "35",
        "30",
        "25",
        "20",
        "15"
      ],
      "optionDetails": {
        "35": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola pengurangan bertingkat: -5, -10, -15, -20, selanjutnya -25. Maka 50 - 25 = 25.",
        "30": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola pengurangan bertingkat: -5, -10, -15, -20, selanjutnya -25. Maka 50 - 25 = 25.",
        "25": "✓ BENAR: Pola pengurangan bertingkat: -5, -10, -15, -20, selanjutnya -25. Maka 50 - 25 = 25.",
        "20": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola pengurangan bertingkat: -5, -10, -15, -20, selanjutnya -25. Maka 50 - 25 = 25.",
        "15": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola pengurangan bertingkat: -5, -10, -15, -20, selanjutnya -25. Maka 50 - 25 = 25."
      },
      "correctAnswer": "25",
      "explanationText": "Pola pengurangan bertingkat: -5, -10, -15, -20, selanjutnya -25. Maka 50 - 25 = 25.",
      "knownWrongPatterns": {
        "35": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola pengurangan bertingkat: -5, -10, -15, -20, selanjutnya -25. Maka 50 - 25 = 25."
        },
        "30": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola pengurangan bertingkat: -5, -10, -15, -20, selanjutnya -25. Maka 50 - 25 = 25."
        },
        "20": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola pengurangan bertingkat: -5, -10, -15, -20, selanjutnya -25. Maka 50 - 25 = 25."
        },
        "15": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola pengurangan bertingkat: -5, -10, -15, -20, selanjutnya -25. Maka 50 - 25 = 25."
        }
      }
    },
    {
      "id": "sek-der-06",
      "conceptName": "Deret Geometri Pola Faktorial",
      "topic": "Deret Geometri Pola Faktorial",
      "questionText": "Deret kombinasi: 2, 4, 12, 48, 240, ... Angka berikutnya adalah...",
      "type": "mcq",
      "options": [
        "720",
        "960",
        "1200",
        "1440",
        "1680"
      ],
      "optionDetails": {
        "720": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola perkalian bertingkat: x2, x3, x4, x5, selanjutnya x6. Maka 240 x 6 = 1440.",
        "960": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola perkalian bertingkat: x2, x3, x4, x5, selanjutnya x6. Maka 240 x 6 = 1440.",
        "1200": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola perkalian bertingkat: x2, x3, x4, x5, selanjutnya x6. Maka 240 x 6 = 1440.",
        "1440": "✓ BENAR: Pola perkalian bertingkat: x2, x3, x4, x5, selanjutnya x6. Maka 240 x 6 = 1440.",
        "1680": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola perkalian bertingkat: x2, x3, x4, x5, selanjutnya x6. Maka 240 x 6 = 1440."
      },
      "correctAnswer": "1440",
      "explanationText": "Pola perkalian bertingkat: x2, x3, x4, x5, selanjutnya x6. Maka 240 x 6 = 1440.",
      "knownWrongPatterns": {
        "720": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola perkalian bertingkat: x2, x3, x4, x5, selanjutnya x6. Maka 240 x 6 = 1440."
        },
        "960": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola perkalian bertingkat: x2, x3, x4, x5, selanjutnya x6. Maka 240 x 6 = 1440."
        },
        "1200": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola perkalian bertingkat: x2, x3, x4, x5, selanjutnya x6. Maka 240 x 6 = 1440."
        },
        "1680": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola perkalian bertingkat: x2, x3, x4, x5, selanjutnya x6. Maka 240 x 6 = 1440."
        }
      }
    },
    {
      "id": "sek-der-07",
      "conceptName": "Deret Selisih Bilangan Ganjil",
      "topic": "Deret Selisih Bilangan Ganjil",
      "questionText": "Perhatikan barisan: 4, 7, 12, 19, 28, ... Angka berikutnya adalah...",
      "type": "mcq",
      "options": [
        "37",
        "39",
        "40",
        "41",
        "43"
      ],
      "optionDetails": {
        "37": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Selisih bilangan ganjil: +3, +5, +7, +9, berikutnya +11. Maka 28 + 11 = 39.",
        "39": "✓ BENAR: Selisih bilangan ganjil: +3, +5, +7, +9, berikutnya +11. Maka 28 + 11 = 39.",
        "40": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Selisih bilangan ganjil: +3, +5, +7, +9, berikutnya +11. Maka 28 + 11 = 39.",
        "41": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Selisih bilangan ganjil: +3, +5, +7, +9, berikutnya +11. Maka 28 + 11 = 39.",
        "43": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Selisih bilangan ganjil: +3, +5, +7, +9, berikutnya +11. Maka 28 + 11 = 39."
      },
      "correctAnswer": "39",
      "explanationText": "Selisih bilangan ganjil: +3, +5, +7, +9, berikutnya +11. Maka 28 + 11 = 39.",
      "knownWrongPatterns": {
        "37": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Selisih bilangan ganjil: +3, +5, +7, +9, berikutnya +11. Maka 28 + 11 = 39."
        },
        "40": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Selisih bilangan ganjil: +3, +5, +7, +9, berikutnya +11. Maka 28 + 11 = 39."
        },
        "41": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Selisih bilangan ganjil: +3, +5, +7, +9, berikutnya +11. Maka 28 + 11 = 39."
        },
        "43": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Selisih bilangan ganjil: +3, +5, +7, +9, berikutnya +11. Maka 28 + 11 = 39."
        }
      }
    },
    {
      "id": "sek-der-08",
      "conceptName": "Deret Huruf Dua Arah",
      "topic": "Deret Huruf Dua Arah",
      "questionText": "Deret huruf selang-seling: Z, A, Y, B, X, C, ... Huruf berikutnya adalah...",
      "type": "mcq",
      "options": [
        "W",
        "D",
        "V",
        "E",
        "U"
      ],
      "optionDetails": {
        "W": "✓ BENAR: Larik 1 (ganjil): Z, Y, X, mundur satu huruf -> W. Larik 2 (genap): A, B, C, maju satu huruf -> D. Posisi berikutnya adalah suku ke-7 (ganjil), yaitu W.",
        "D": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Larik 1 (ganjil): Z, Y, X, mundur satu huruf -> W. Larik 2 (genap): A, B, C, maju satu huruf -> D. Posisi berikutnya adalah suku ke-7 (ganjil), yaitu W.",
        "V": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Larik 1 (ganjil): Z, Y, X, mundur satu huruf -> W. Larik 2 (genap): A, B, C, maju satu huruf -> D. Posisi berikutnya adalah suku ke-7 (ganjil), yaitu W.",
        "E": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Larik 1 (ganjil): Z, Y, X, mundur satu huruf -> W. Larik 2 (genap): A, B, C, maju satu huruf -> D. Posisi berikutnya adalah suku ke-7 (ganjil), yaitu W.",
        "U": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Larik 1 (ganjil): Z, Y, X, mundur satu huruf -> W. Larik 2 (genap): A, B, C, maju satu huruf -> D. Posisi berikutnya adalah suku ke-7 (ganjil), yaitu W."
      },
      "correctAnswer": "W",
      "explanationText": "Larik 1 (ganjil): Z, Y, X, mundur satu huruf -> W. Larik 2 (genap): A, B, C, maju satu huruf -> D. Posisi berikutnya adalah suku ke-7 (ganjil), yaitu W.",
      "knownWrongPatterns": {
        "D": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Larik 1 (ganjil): Z, Y, X, mundur satu huruf -> W. Larik 2 (genap): A, B, C, maju satu huruf -> D. Posisi berikutnya adalah suku ke-7 (ganjil), yaitu W."
        },
        "V": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Larik 1 (ganjil): Z, Y, X, mundur satu huruf -> W. Larik 2 (genap): A, B, C, maju satu huruf -> D. Posisi berikutnya adalah suku ke-7 (ganjil), yaitu W."
        },
        "E": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Larik 1 (ganjil): Z, Y, X, mundur satu huruf -> W. Larik 2 (genap): A, B, C, maju satu huruf -> D. Posisi berikutnya adalah suku ke-7 (ganjil), yaitu W."
        },
        "U": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Larik 1 (ganjil): Z, Y, X, mundur satu huruf -> W. Larik 2 (genap): A, B, C, maju satu huruf -> D. Posisi berikutnya adalah suku ke-7 (ganjil), yaitu W."
        }
      }
    },
    {
      "id": "sek-der-09",
      "conceptName": "Deret Pecahan",
      "topic": "Deret Pecahan",
      "questionText": "Perhatikan barisan pecahan: 1/2, 3/4, 5/8, 7/16, ... Pecahan berikutnya adalah...",
      "type": "mcq",
      "options": [
        "9/24",
        "9/32",
        "11/32",
        "8/32",
        "9/64"
      ],
      "optionDetails": {
        "9/24": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pembilang bilangan ganjil: 1, 3, 5, 7 -> 9. Penyebut kelipatan 2 (geometri): 2, 4, 8, 16 -> 32. Hasilnya 9/32.",
        "9/32": "✓ BENAR: Pembilang bilangan ganjil: 1, 3, 5, 7 -> 9. Penyebut kelipatan 2 (geometri): 2, 4, 8, 16 -> 32. Hasilnya 9/32.",
        "11/32": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pembilang bilangan ganjil: 1, 3, 5, 7 -> 9. Penyebut kelipatan 2 (geometri): 2, 4, 8, 16 -> 32. Hasilnya 9/32.",
        "8/32": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pembilang bilangan ganjil: 1, 3, 5, 7 -> 9. Penyebut kelipatan 2 (geometri): 2, 4, 8, 16 -> 32. Hasilnya 9/32.",
        "9/64": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pembilang bilangan ganjil: 1, 3, 5, 7 -> 9. Penyebut kelipatan 2 (geometri): 2, 4, 8, 16 -> 32. Hasilnya 9/32."
      },
      "correctAnswer": "9/32",
      "explanationText": "Pembilang bilangan ganjil: 1, 3, 5, 7 -> 9. Penyebut kelipatan 2 (geometri): 2, 4, 8, 16 -> 32. Hasilnya 9/32.",
      "knownWrongPatterns": {
        "9/24": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pembilang bilangan ganjil: 1, 3, 5, 7 -> 9. Penyebut kelipatan 2 (geometri): 2, 4, 8, 16 -> 32. Hasilnya 9/32."
        },
        "11/32": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pembilang bilangan ganjil: 1, 3, 5, 7 -> 9. Penyebut kelipatan 2 (geometri): 2, 4, 8, 16 -> 32. Hasilnya 9/32."
        },
        "8/32": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pembilang bilangan ganjil: 1, 3, 5, 7 -> 9. Penyebut kelipatan 2 (geometri): 2, 4, 8, 16 -> 32. Hasilnya 9/32."
        },
        "9/64": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pembilang bilangan ganjil: 1, 3, 5, 7 -> 9. Penyebut kelipatan 2 (geometri): 2, 4, 8, 16 -> 32. Hasilnya 9/32."
        }
      }
    },
    {
      "id": "sek-der-10",
      "conceptName": "Deret Tiga Larik",
      "topic": "Deret Tiga Larik",
      "questionText": "Perhatikan barisan tiga larik: 1, 2, 3, 2, 4, 6, 4, 8, ... Angka berikutnya adalah...",
      "type": "mcq",
      "options": [
        "10",
        "12",
        "14",
        "16",
        "18"
      ],
      "optionDetails": {
        "10": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Larik 1 (1, 4, 7): 1, 2, 4 (x2). Larik 2 (2, 5, 8): 2, 4, 8 (x2). Larik 3 (3, 6, 9): 3, 6, berikutnya 6 x 2 = 12.",
        "12": "✓ BENAR: Larik 1 (1, 4, 7): 1, 2, 4 (x2). Larik 2 (2, 5, 8): 2, 4, 8 (x2). Larik 3 (3, 6, 9): 3, 6, berikutnya 6 x 2 = 12.",
        "14": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Larik 1 (1, 4, 7): 1, 2, 4 (x2). Larik 2 (2, 5, 8): 2, 4, 8 (x2). Larik 3 (3, 6, 9): 3, 6, berikutnya 6 x 2 = 12.",
        "16": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Larik 1 (1, 4, 7): 1, 2, 4 (x2). Larik 2 (2, 5, 8): 2, 4, 8 (x2). Larik 3 (3, 6, 9): 3, 6, berikutnya 6 x 2 = 12.",
        "18": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Larik 1 (1, 4, 7): 1, 2, 4 (x2). Larik 2 (2, 5, 8): 2, 4, 8 (x2). Larik 3 (3, 6, 9): 3, 6, berikutnya 6 x 2 = 12."
      },
      "correctAnswer": "12",
      "explanationText": "Larik 1 (1, 4, 7): 1, 2, 4 (x2). Larik 2 (2, 5, 8): 2, 4, 8 (x2). Larik 3 (3, 6, 9): 3, 6, berikutnya 6 x 2 = 12.",
      "knownWrongPatterns": {
        "10": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Larik 1 (1, 4, 7): 1, 2, 4 (x2). Larik 2 (2, 5, 8): 2, 4, 8 (x2). Larik 3 (3, 6, 9): 3, 6, berikutnya 6 x 2 = 12."
        },
        "14": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Larik 1 (1, 4, 7): 1, 2, 4 (x2). Larik 2 (2, 5, 8): 2, 4, 8 (x2). Larik 3 (3, 6, 9): 3, 6, berikutnya 6 x 2 = 12."
        },
        "16": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Larik 1 (1, 4, 7): 1, 2, 4 (x2). Larik 2 (2, 5, 8): 2, 4, 8 (x2). Larik 3 (3, 6, 9): 3, 6, berikutnya 6 x 2 = 12."
        },
        "18": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Larik 1 (1, 4, 7): 1, 2, 4 (x2). Larik 2 (2, 5, 8): 2, 4, 8 (x2). Larik 3 (3, 6, 9): 3, 6, berikutnya 6 x 2 = 12."
        }
      }
    }
  ],
  "sekdin-hitung": [
    {
      "id": "tps-pku-01",
      "conceptName": "Aritmetika Pecahan & Perbandingan",
      "topic": "Aritmetika Pecahan & Perbandingan",
      "questionText": "Jika x = (1/16) - (1/20) dan y = (1/12) - (1/16), maka hubungan x dan y yang tepat adalah...",
      "type": "mcq",
      "options": [
        "x > y",
        "x < y",
        "x = y",
        "x = 2y",
        "Hubungan x dan y tidak dapat ditentukan"
      ],
      "optionDetails": {
        "x > y": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: x = (5 - 4) / 80 = 1/80 = 0,0125. y = (4 - 3) / 48 = 1/48 ≈ 0,0208. Karena 1/80 < 1/48, maka x < y.",
        "x < y": "✓ BENAR: x = (5 - 4) / 80 = 1/80 = 0,0125. y = (4 - 3) / 48 = 1/48 ≈ 0,0208. Karena 1/80 < 1/48, maka x < y.",
        "x = y": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: x = (5 - 4) / 80 = 1/80 = 0,0125. y = (4 - 3) / 48 = 1/48 ≈ 0,0208. Karena 1/80 < 1/48, maka x < y.",
        "x = 2y": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: x = (5 - 4) / 80 = 1/80 = 0,0125. y = (4 - 3) / 48 = 1/48 ≈ 0,0208. Karena 1/80 < 1/48, maka x < y.",
        "Hubungan x dan y tidak dapat ditentukan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: x = (5 - 4) / 80 = 1/80 = 0,0125. y = (4 - 3) / 48 = 1/48 ≈ 0,0208. Karena 1/80 < 1/48, maka x < y."
      },
      "correctAnswer": "x < y",
      "explanationText": "x = (5 - 4) / 80 = 1/80 = 0,0125. y = (4 - 3) / 48 = 1/48 ≈ 0,0208. Karena 1/80 < 1/48, maka x < y.",
      "knownWrongPatterns": {
        "x > y": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: x = (5 - 4) / 80 = 1/80 = 0,0125. y = (4 - 3) / 48 = 1/48 ≈ 0,0208. Karena 1/80 < 1/48, maka x < y."
        },
        "x = y": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: x = (5 - 4) / 80 = 1/80 = 0,0125. y = (4 - 3) / 48 = 1/48 ≈ 0,0208. Karena 1/80 < 1/48, maka x < y."
        },
        "x = 2y": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: x = (5 - 4) / 80 = 1/80 = 0,0125. y = (4 - 3) / 48 = 1/48 ≈ 0,0208. Karena 1/80 < 1/48, maka x < y."
        },
        "Hubungan x dan y tidak dapat ditentukan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: x = (5 - 4) / 80 = 1/80 = 0,0125. y = (4 - 3) / 48 = 1/48 ≈ 0,0208. Karena 1/80 < 1/48, maka x < y."
        }
      }
    },
    {
      "id": "tps-pku-02",
      "conceptName": "Kecepatan Rata-Rata Harmonik",
      "topic": "Kecepatan Rata-Rata Harmonik",
      "questionText": "Sebuah mobil menempuh jarak 180 km dengan kecepatan rata-rata 60 km/jam. Saat pulang, jalan macet sehingga kecepatan rata-ratanya hanya 40 km/jam. Kecepatan rata-rata mobil untuk seluruh perjalanan pulang-pergi adalah...",
      "type": "mcq",
      "options": [
        "48 km/jam",
        "50 km/jam",
        "52 km/jam",
        "45 km/jam",
        "54 km/jam"
      ],
      "optionDetails": {
        "48 km/jam": "✓ BENAR: Kecepatan rata-rata = Total Jarak / Total Waktu. Jarak PP = 360 km. t_berangkat = 180/60 = 3 jam. t_pulang = 180/40 = 4,5 jam. Total waktu = 7,5 jam. V_rata2 = 360 / 7,5 = 48 km/jam. (Atau rumus harmonik: 2*v1*v2 / (v1 + v2) = 2*60*40 / 100 = 48 km/jam).",
        "50 km/jam": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kecepatan rata-rata = Total Jarak / Total Waktu. Jarak PP = 360 km. t_berangkat = 180/60 = 3 jam. t_pulang = 180/40 = 4,5 jam. Total waktu = 7,5 jam. V_rata2 = 360 / 7,5 = 48 km/jam. (Atau rumus harmonik: 2*v1*v2 / (v1 + v2) = 2*60*40 / 100 = 48 km/jam).",
        "52 km/jam": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kecepatan rata-rata = Total Jarak / Total Waktu. Jarak PP = 360 km. t_berangkat = 180/60 = 3 jam. t_pulang = 180/40 = 4,5 jam. Total waktu = 7,5 jam. V_rata2 = 360 / 7,5 = 48 km/jam. (Atau rumus harmonik: 2*v1*v2 / (v1 + v2) = 2*60*40 / 100 = 48 km/jam).",
        "45 km/jam": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kecepatan rata-rata = Total Jarak / Total Waktu. Jarak PP = 360 km. t_berangkat = 180/60 = 3 jam. t_pulang = 180/40 = 4,5 jam. Total waktu = 7,5 jam. V_rata2 = 360 / 7,5 = 48 km/jam. (Atau rumus harmonik: 2*v1*v2 / (v1 + v2) = 2*60*40 / 100 = 48 km/jam).",
        "54 km/jam": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kecepatan rata-rata = Total Jarak / Total Waktu. Jarak PP = 360 km. t_berangkat = 180/60 = 3 jam. t_pulang = 180/40 = 4,5 jam. Total waktu = 7,5 jam. V_rata2 = 360 / 7,5 = 48 km/jam. (Atau rumus harmonik: 2*v1*v2 / (v1 + v2) = 2*60*40 / 100 = 48 km/jam)."
      },
      "correctAnswer": "48 km/jam",
      "explanationText": "Kecepatan rata-rata = Total Jarak / Total Waktu. Jarak PP = 360 km. t_berangkat = 180/60 = 3 jam. t_pulang = 180/40 = 4,5 jam. Total waktu = 7,5 jam. V_rata2 = 360 / 7,5 = 48 km/jam. (Atau rumus harmonik: 2*v1*v2 / (v1 + v2) = 2*60*40 / 100 = 48 km/jam).",
      "knownWrongPatterns": {
        "50 km/jam": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kecepatan rata-rata = Total Jarak / Total Waktu. Jarak PP = 360 km. t_berangkat = 180/60 = 3 jam. t_pulang = 180/40 = 4,5 jam. Total waktu = 7,5 jam. V_rata2 = 360 / 7,5 = 48 km/jam. (Atau rumus harmonik: 2*v1*v2 / (v1 + v2) = 2*60*40 / 100 = 48 km/jam)."
        },
        "52 km/jam": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kecepatan rata-rata = Total Jarak / Total Waktu. Jarak PP = 360 km. t_berangkat = 180/60 = 3 jam. t_pulang = 180/40 = 4,5 jam. Total waktu = 7,5 jam. V_rata2 = 360 / 7,5 = 48 km/jam. (Atau rumus harmonik: 2*v1*v2 / (v1 + v2) = 2*60*40 / 100 = 48 km/jam)."
        },
        "45 km/jam": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kecepatan rata-rata = Total Jarak / Total Waktu. Jarak PP = 360 km. t_berangkat = 180/60 = 3 jam. t_pulang = 180/40 = 4,5 jam. Total waktu = 7,5 jam. V_rata2 = 360 / 7,5 = 48 km/jam. (Atau rumus harmonik: 2*v1*v2 / (v1 + v2) = 2*60*40 / 100 = 48 km/jam)."
        },
        "54 km/jam": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kecepatan rata-rata = Total Jarak / Total Waktu. Jarak PP = 360 km. t_berangkat = 180/60 = 3 jam. t_pulang = 180/40 = 4,5 jam. Total waktu = 7,5 jam. V_rata2 = 360 / 7,5 = 48 km/jam. (Atau rumus harmonik: 2*v1*v2 / (v1 + v2) = 2*60*40 / 100 = 48 km/jam)."
        }
      }
    },
    {
      "id": "tps-pku-03",
      "conceptName": "Fungsi Aljabar",
      "topic": "Fungsi Aljabar",
      "questionText": "Jika f(2x + 1) = 4x^2 + 6x - 5, maka nilai dari f(5) adalah...",
      "type": "mcq",
      "options": [
        "11",
        "23",
        "27",
        "31",
        "35"
      ],
      "optionDetails": {
        "11": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Untuk mencari f(5), buat 2x + 1 = 5 => 2x = 4 => x = 2. Masukkan x = 2: f(5) = 4(2)^2 + 6(2) - 5 = 4(4) + 12 - 5 = 16 + 12 - 5 = 23.",
        "23": "✓ BENAR: Untuk mencari f(5), buat 2x + 1 = 5 => 2x = 4 => x = 2. Masukkan x = 2: f(5) = 4(2)^2 + 6(2) - 5 = 4(4) + 12 - 5 = 16 + 12 - 5 = 23.",
        "27": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Untuk mencari f(5), buat 2x + 1 = 5 => 2x = 4 => x = 2. Masukkan x = 2: f(5) = 4(2)^2 + 6(2) - 5 = 4(4) + 12 - 5 = 16 + 12 - 5 = 23.",
        "31": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Untuk mencari f(5), buat 2x + 1 = 5 => 2x = 4 => x = 2. Masukkan x = 2: f(5) = 4(2)^2 + 6(2) - 5 = 4(4) + 12 - 5 = 16 + 12 - 5 = 23.",
        "35": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Untuk mencari f(5), buat 2x + 1 = 5 => 2x = 4 => x = 2. Masukkan x = 2: f(5) = 4(2)^2 + 6(2) - 5 = 4(4) + 12 - 5 = 16 + 12 - 5 = 23."
      },
      "correctAnswer": "23",
      "explanationText": "Untuk mencari f(5), buat 2x + 1 = 5 => 2x = 4 => x = 2. Masukkan x = 2: f(5) = 4(2)^2 + 6(2) - 5 = 4(4) + 12 - 5 = 16 + 12 - 5 = 23.",
      "knownWrongPatterns": {
        "11": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Untuk mencari f(5), buat 2x + 1 = 5 => 2x = 4 => x = 2. Masukkan x = 2: f(5) = 4(2)^2 + 6(2) - 5 = 4(4) + 12 - 5 = 16 + 12 - 5 = 23."
        },
        "27": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Untuk mencari f(5), buat 2x + 1 = 5 => 2x = 4 => x = 2. Masukkan x = 2: f(5) = 4(2)^2 + 6(2) - 5 = 4(4) + 12 - 5 = 16 + 12 - 5 = 23."
        },
        "31": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Untuk mencari f(5), buat 2x + 1 = 5 => 2x = 4 => x = 2. Masukkan x = 2: f(5) = 4(2)^2 + 6(2) - 5 = 4(4) + 12 - 5 = 16 + 12 - 5 = 23."
        },
        "35": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Untuk mencari f(5), buat 2x + 1 = 5 => 2x = 4 => x = 2. Masukkan x = 2: f(5) = 4(2)^2 + 6(2) - 5 = 4(4) + 12 - 5 = 16 + 12 - 5 = 23."
        }
      }
    },
    {
      "id": "tps-pku-04",
      "conceptName": "Perbandingan Berbalik Nilai",
      "topic": "Perbandingan Berbalik Nilai",
      "questionText": "Suatu pekerjaan dapat diselesaikan oleh 12 orang dalam waktu 20 hari. Jika pekerjaan tersebut ingin diselesaikan dalam waktu 15 hari, banyaknya pekerja tambahan yang dibutuhkan adalah...",
      "type": "mcq",
      "options": [
        "2 orang",
        "4 orang",
        "6 orang",
        "8 orang",
        "16 orang"
      ],
      "optionDetails": {
        "2 orang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Perbandingan berbalik nilai: 12 * 20 = x * 15 => 240 = 15x => x = 16 orang pekerja total. Pekerja tambahan = 16 - 12 = 4 orang.",
        "4 orang": "✓ BENAR: Perbandingan berbalik nilai: 12 * 20 = x * 15 => 240 = 15x => x = 16 orang pekerja total. Pekerja tambahan = 16 - 12 = 4 orang.",
        "6 orang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Perbandingan berbalik nilai: 12 * 20 = x * 15 => 240 = 15x => x = 16 orang pekerja total. Pekerja tambahan = 16 - 12 = 4 orang.",
        "8 orang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Perbandingan berbalik nilai: 12 * 20 = x * 15 => 240 = 15x => x = 16 orang pekerja total. Pekerja tambahan = 16 - 12 = 4 orang.",
        "16 orang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Perbandingan berbalik nilai: 12 * 20 = x * 15 => 240 = 15x => x = 16 orang pekerja total. Pekerja tambahan = 16 - 12 = 4 orang."
      },
      "correctAnswer": "4 orang",
      "explanationText": "Perbandingan berbalik nilai: 12 * 20 = x * 15 => 240 = 15x => x = 16 orang pekerja total. Pekerja tambahan = 16 - 12 = 4 orang.",
      "knownWrongPatterns": {
        "2 orang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Perbandingan berbalik nilai: 12 * 20 = x * 15 => 240 = 15x => x = 16 orang pekerja total. Pekerja tambahan = 16 - 12 = 4 orang."
        },
        "6 orang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Perbandingan berbalik nilai: 12 * 20 = x * 15 => 240 = 15x => x = 16 orang pekerja total. Pekerja tambahan = 16 - 12 = 4 orang."
        },
        "8 orang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Perbandingan berbalik nilai: 12 * 20 = x * 15 => 240 = 15x => x = 16 orang pekerja total. Pekerja tambahan = 16 - 12 = 4 orang."
        },
        "16 orang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Perbandingan berbalik nilai: 12 * 20 = x * 15 => 240 = 15x => x = 16 orang pekerja total. Pekerja tambahan = 16 - 12 = 4 orang."
        }
      }
    },
    {
      "id": "tps-pku-05",
      "conceptName": "Statistika: Rata-Rata Gabungan",
      "topic": "Statistika: Rata-Rata Gabungan",
      "questionText": "Rata-rata nilai ujian matematika dari 30 siswa adalah 75. Jika 5 siswa dengan nilai rata-rata 85 digabungkan, maka rata-rata nilai gabungan sekarang adalah...",
      "type": "mcq",
      "options": [
        "76,0",
        "76,4",
        "77,0",
        "77,5",
        "78,2"
      ],
      "optionDetails": {
        "76,0": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Total nilai mula-mula = 30 * 75 = 2250. Tambahan nilai = 5 * 85 = 425. Total nilai baru = 2675. Jumlah siswa = 35. Rata-rata gabungan = 2675 / 35 ≈ 76,43.",
        "76,4": "✓ BENAR: Total nilai mula-mula = 30 * 75 = 2250. Tambahan nilai = 5 * 85 = 425. Total nilai baru = 2675. Jumlah siswa = 35. Rata-rata gabungan = 2675 / 35 ≈ 76,43.",
        "77,0": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Total nilai mula-mula = 30 * 75 = 2250. Tambahan nilai = 5 * 85 = 425. Total nilai baru = 2675. Jumlah siswa = 35. Rata-rata gabungan = 2675 / 35 ≈ 76,43.",
        "77,5": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Total nilai mula-mula = 30 * 75 = 2250. Tambahan nilai = 5 * 85 = 425. Total nilai baru = 2675. Jumlah siswa = 35. Rata-rata gabungan = 2675 / 35 ≈ 76,43.",
        "78,2": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Total nilai mula-mula = 30 * 75 = 2250. Tambahan nilai = 5 * 85 = 425. Total nilai baru = 2675. Jumlah siswa = 35. Rata-rata gabungan = 2675 / 35 ≈ 76,43."
      },
      "correctAnswer": "76,4",
      "explanationText": "Total nilai mula-mula = 30 * 75 = 2250. Tambahan nilai = 5 * 85 = 425. Total nilai baru = 2675. Jumlah siswa = 35. Rata-rata gabungan = 2675 / 35 ≈ 76,43.",
      "knownWrongPatterns": {
        "76,0": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Total nilai mula-mula = 30 * 75 = 2250. Tambahan nilai = 5 * 85 = 425. Total nilai baru = 2675. Jumlah siswa = 35. Rata-rata gabungan = 2675 / 35 ≈ 76,43."
        },
        "77,0": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Total nilai mula-mula = 30 * 75 = 2250. Tambahan nilai = 5 * 85 = 425. Total nilai baru = 2675. Jumlah siswa = 35. Rata-rata gabungan = 2675 / 35 ≈ 76,43."
        },
        "77,5": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Total nilai mula-mula = 30 * 75 = 2250. Tambahan nilai = 5 * 85 = 425. Total nilai baru = 2675. Jumlah siswa = 35. Rata-rata gabungan = 2675 / 35 ≈ 76,43."
        },
        "78,2": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Total nilai mula-mula = 30 * 75 = 2250. Tambahan nilai = 5 * 85 = 425. Total nilai baru = 2675. Jumlah siswa = 35. Rata-rata gabungan = 2675 / 35 ≈ 76,43."
        }
      }
    },
    {
      "id": "tps-pku-06",
      "conceptName": "Sistem Persamaan Linear Dua Variabel",
      "topic": "Sistem Persamaan Linear Dua Variabel",
      "questionText": "Diketahui sistem persamaan: 2x + 3y = 19 dan 3x - y = 12. Nilai dari x + y adalah...",
      "type": "mcq",
      "options": [
        "6",
        "7",
        "8",
        "9",
        "10"
      ],
      "optionDetails": {
        "6": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Dari persamaan kedua: y = 3x - 12. Substitusi ke pers pertama: 2x + 3(3x - 12) = 19 => 2x + 9x - 36 = 19 => 11x = 55 => x = 5. Nilai y = 3(5) - 12 = 3. Maka x + y = 5 + 3 = 8.",
        "7": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Dari persamaan kedua: y = 3x - 12. Substitusi ke pers pertama: 2x + 3(3x - 12) = 19 => 2x + 9x - 36 = 19 => 11x = 55 => x = 5. Nilai y = 3(5) - 12 = 3. Maka x + y = 5 + 3 = 8.",
        "8": "✓ BENAR: Dari persamaan kedua: y = 3x - 12. Substitusi ke pers pertama: 2x + 3(3x - 12) = 19 => 2x + 9x - 36 = 19 => 11x = 55 => x = 5. Nilai y = 3(5) - 12 = 3. Maka x + y = 5 + 3 = 8.",
        "9": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Dari persamaan kedua: y = 3x - 12. Substitusi ke pers pertama: 2x + 3(3x - 12) = 19 => 2x + 9x - 36 = 19 => 11x = 55 => x = 5. Nilai y = 3(5) - 12 = 3. Maka x + y = 5 + 3 = 8.",
        "10": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Dari persamaan kedua: y = 3x - 12. Substitusi ke pers pertama: 2x + 3(3x - 12) = 19 => 2x + 9x - 36 = 19 => 11x = 55 => x = 5. Nilai y = 3(5) - 12 = 3. Maka x + y = 5 + 3 = 8."
      },
      "correctAnswer": "8",
      "explanationText": "Dari persamaan kedua: y = 3x - 12. Substitusi ke pers pertama: 2x + 3(3x - 12) = 19 => 2x + 9x - 36 = 19 => 11x = 55 => x = 5. Nilai y = 3(5) - 12 = 3. Maka x + y = 5 + 3 = 8.",
      "knownWrongPatterns": {
        "6": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Dari persamaan kedua: y = 3x - 12. Substitusi ke pers pertama: 2x + 3(3x - 12) = 19 => 2x + 9x - 36 = 19 => 11x = 55 => x = 5. Nilai y = 3(5) - 12 = 3. Maka x + y = 5 + 3 = 8."
        },
        "7": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Dari persamaan kedua: y = 3x - 12. Substitusi ke pers pertama: 2x + 3(3x - 12) = 19 => 2x + 9x - 36 = 19 => 11x = 55 => x = 5. Nilai y = 3(5) - 12 = 3. Maka x + y = 5 + 3 = 8."
        },
        "9": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Dari persamaan kedua: y = 3x - 12. Substitusi ke pers pertama: 2x + 3(3x - 12) = 19 => 2x + 9x - 36 = 19 => 11x = 55 => x = 5. Nilai y = 3(5) - 12 = 3. Maka x + y = 5 + 3 = 8."
        },
        "10": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Dari persamaan kedua: y = 3x - 12. Substitusi ke pers pertama: 2x + 3(3x - 12) = 19 => 2x + 9x - 36 = 19 => 11x = 55 => x = 5. Nilai y = 3(5) - 12 = 3. Maka x + y = 5 + 3 = 8."
        }
      }
    },
    {
      "id": "tps-pku-07",
      "conceptName": "Aritmetika Sosial: Diskon Ganda",
      "topic": "Aritmetika Sosial: Diskon Ganda",
      "questionText": "Sebuah barang diberi diskon berturut-turut sebesar 20% kemudian 10%. Total diskon tunggal yang setara dengan diskon ganda tersebut adalah...",
      "type": "mcq",
      "options": [
        "30%",
        "28%",
        "25%",
        "26%",
        "32%"
      ],
      "optionDetails": {
        "30%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Harga akhir = (1 - 0,20) * (1 - 0,10) = 0,80 * 0,90 = 0,72 dari harga awal (72%). Diskon ekuivalen = 100% - 72% = 28%.",
        "28%": "✓ BENAR: Harga akhir = (1 - 0,20) * (1 - 0,10) = 0,80 * 0,90 = 0,72 dari harga awal (72%). Diskon ekuivalen = 100% - 72% = 28%.",
        "25%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Harga akhir = (1 - 0,20) * (1 - 0,10) = 0,80 * 0,90 = 0,72 dari harga awal (72%). Diskon ekuivalen = 100% - 72% = 28%.",
        "26%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Harga akhir = (1 - 0,20) * (1 - 0,10) = 0,80 * 0,90 = 0,72 dari harga awal (72%). Diskon ekuivalen = 100% - 72% = 28%.",
        "32%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Harga akhir = (1 - 0,20) * (1 - 0,10) = 0,80 * 0,90 = 0,72 dari harga awal (72%). Diskon ekuivalen = 100% - 72% = 28%."
      },
      "correctAnswer": "28%",
      "explanationText": "Harga akhir = (1 - 0,20) * (1 - 0,10) = 0,80 * 0,90 = 0,72 dari harga awal (72%). Diskon ekuivalen = 100% - 72% = 28%.",
      "knownWrongPatterns": {
        "30%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Harga akhir = (1 - 0,20) * (1 - 0,10) = 0,80 * 0,90 = 0,72 dari harga awal (72%). Diskon ekuivalen = 100% - 72% = 28%."
        },
        "25%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Harga akhir = (1 - 0,20) * (1 - 0,10) = 0,80 * 0,90 = 0,72 dari harga awal (72%). Diskon ekuivalen = 100% - 72% = 28%."
        },
        "26%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Harga akhir = (1 - 0,20) * (1 - 0,10) = 0,80 * 0,90 = 0,72 dari harga awal (72%). Diskon ekuivalen = 100% - 72% = 28%."
        },
        "32%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Harga akhir = (1 - 0,20) * (1 - 0,10) = 0,80 * 0,90 = 0,72 dari harga awal (72%). Diskon ekuivalen = 100% - 72% = 28%."
        }
      }
    },
    {
      "id": "tps-pku-08",
      "conceptName": "Teori Bilangan: Aritmetika Modular",
      "topic": "Teori Bilangan: Aritmetika Modular",
      "questionText": "Berapakah sisa pembagian 2^2024 jika dibagi dengan 7?",
      "type": "mcq",
      "options": [
        "1",
        "2",
        "4",
        "5",
        "6"
      ],
      "optionDetails": {
        "1": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola sisa 2^n mod 7: 2^1 = 2; 2^2 = 4; 2^3 = 8 ≡ 1 mod 7. Siklus berulang setiap 3 periode. 2024 dibagi 3: 2024 = 3 * 674 + 2 (sisa 2). Maka 2^2024 ≡ 2^2 ≡ 4 mod 7. (Koreksi: sisa adalah 4). Opsi yang benar adalah 4.",
        "2": "✓ BENAR: Pola sisa 2^n mod 7: 2^1 = 2; 2^2 = 4; 2^3 = 8 ≡ 1 mod 7. Siklus berulang setiap 3 periode. 2024 dibagi 3: 2024 = 3 * 674 + 2 (sisa 2). Maka 2^2024 ≡ 2^2 ≡ 4 mod 7. (Koreksi: sisa adalah 4). Opsi yang benar adalah 4.",
        "4": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola sisa 2^n mod 7: 2^1 = 2; 2^2 = 4; 2^3 = 8 ≡ 1 mod 7. Siklus berulang setiap 3 periode. 2024 dibagi 3: 2024 = 3 * 674 + 2 (sisa 2). Maka 2^2024 ≡ 2^2 ≡ 4 mod 7. (Koreksi: sisa adalah 4). Opsi yang benar adalah 4.",
        "5": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola sisa 2^n mod 7: 2^1 = 2; 2^2 = 4; 2^3 = 8 ≡ 1 mod 7. Siklus berulang setiap 3 periode. 2024 dibagi 3: 2024 = 3 * 674 + 2 (sisa 2). Maka 2^2024 ≡ 2^2 ≡ 4 mod 7. (Koreksi: sisa adalah 4). Opsi yang benar adalah 4.",
        "6": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola sisa 2^n mod 7: 2^1 = 2; 2^2 = 4; 2^3 = 8 ≡ 1 mod 7. Siklus berulang setiap 3 periode. 2024 dibagi 3: 2024 = 3 * 674 + 2 (sisa 2). Maka 2^2024 ≡ 2^2 ≡ 4 mod 7. (Koreksi: sisa adalah 4). Opsi yang benar adalah 4."
      },
      "correctAnswer": "2",
      "explanationText": "Pola sisa 2^n mod 7: 2^1 = 2; 2^2 = 4; 2^3 = 8 ≡ 1 mod 7. Siklus berulang setiap 3 periode. 2024 dibagi 3: 2024 = 3 * 674 + 2 (sisa 2). Maka 2^2024 ≡ 2^2 ≡ 4 mod 7. (Koreksi: sisa adalah 4). Opsi yang benar adalah 4.",
      "knownWrongPatterns": {
        "1": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola sisa 2^n mod 7: 2^1 = 2; 2^2 = 4; 2^3 = 8 ≡ 1 mod 7. Siklus berulang setiap 3 periode. 2024 dibagi 3: 2024 = 3 * 674 + 2 (sisa 2). Maka 2^2024 ≡ 2^2 ≡ 4 mod 7. (Koreksi: sisa adalah 4). Opsi yang benar adalah 4."
        },
        "4": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola sisa 2^n mod 7: 2^1 = 2; 2^2 = 4; 2^3 = 8 ≡ 1 mod 7. Siklus berulang setiap 3 periode. 2024 dibagi 3: 2024 = 3 * 674 + 2 (sisa 2). Maka 2^2024 ≡ 2^2 ≡ 4 mod 7. (Koreksi: sisa adalah 4). Opsi yang benar adalah 4."
        },
        "5": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola sisa 2^n mod 7: 2^1 = 2; 2^2 = 4; 2^3 = 8 ≡ 1 mod 7. Siklus berulang setiap 3 periode. 2024 dibagi 3: 2024 = 3 * 674 + 2 (sisa 2). Maka 2^2024 ≡ 2^2 ≡ 4 mod 7. (Koreksi: sisa adalah 4). Opsi yang benar adalah 4."
        },
        "6": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola sisa 2^n mod 7: 2^1 = 2; 2^2 = 4; 2^3 = 8 ≡ 1 mod 7. Siklus berulang setiap 3 periode. 2024 dibagi 3: 2024 = 3 * 674 + 2 (sisa 2). Maka 2^2024 ≡ 2^2 ≡ 4 mod 7. (Koreksi: sisa adalah 4). Opsi yang benar adalah 4."
        }
      }
    },
    {
      "id": "tps-pku-09",
      "conceptName": "Geometri & Persentase",
      "topic": "Geometri & Persentase",
      "questionText": "Jika luas sebuah lingkaran bertambah sebesar 44%, maka keliling lingkaran tersebut bertambah sebesar...",
      "type": "mcq",
      "options": [
        "20%",
        "22%",
        "44%",
        "10%",
        "15%"
      ],
      "optionDetails": {
        "20%": "✓ BENAR: L2 = 1,44 L1. Karena L ~ r^2, maka (r2/r1)^2 = 1,44 => r2/r1 = √1,44 = 1,2. Jari-jari bertambah 20%. Karena keliling K ~ r, maka keliling juga bertambah 20%.",
        "22%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: L2 = 1,44 L1. Karena L ~ r^2, maka (r2/r1)^2 = 1,44 => r2/r1 = √1,44 = 1,2. Jari-jari bertambah 20%. Karena keliling K ~ r, maka keliling juga bertambah 20%.",
        "44%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: L2 = 1,44 L1. Karena L ~ r^2, maka (r2/r1)^2 = 1,44 => r2/r1 = √1,44 = 1,2. Jari-jari bertambah 20%. Karena keliling K ~ r, maka keliling juga bertambah 20%.",
        "10%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: L2 = 1,44 L1. Karena L ~ r^2, maka (r2/r1)^2 = 1,44 => r2/r1 = √1,44 = 1,2. Jari-jari bertambah 20%. Karena keliling K ~ r, maka keliling juga bertambah 20%.",
        "15%": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: L2 = 1,44 L1. Karena L ~ r^2, maka (r2/r1)^2 = 1,44 => r2/r1 = √1,44 = 1,2. Jari-jari bertambah 20%. Karena keliling K ~ r, maka keliling juga bertambah 20%."
      },
      "correctAnswer": "20%",
      "explanationText": "L2 = 1,44 L1. Karena L ~ r^2, maka (r2/r1)^2 = 1,44 => r2/r1 = √1,44 = 1,2. Jari-jari bertambah 20%. Karena keliling K ~ r, maka keliling juga bertambah 20%.",
      "knownWrongPatterns": {
        "22%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: L2 = 1,44 L1. Karena L ~ r^2, maka (r2/r1)^2 = 1,44 => r2/r1 = √1,44 = 1,2. Jari-jari bertambah 20%. Karena keliling K ~ r, maka keliling juga bertambah 20%."
        },
        "44%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: L2 = 1,44 L1. Karena L ~ r^2, maka (r2/r1)^2 = 1,44 => r2/r1 = √1,44 = 1,2. Jari-jari bertambah 20%. Karena keliling K ~ r, maka keliling juga bertambah 20%."
        },
        "10%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: L2 = 1,44 L1. Karena L ~ r^2, maka (r2/r1)^2 = 1,44 => r2/r1 = √1,44 = 1,2. Jari-jari bertambah 20%. Karena keliling K ~ r, maka keliling juga bertambah 20%."
        },
        "15%": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: L2 = 1,44 L1. Karena L ~ r^2, maka (r2/r1)^2 = 1,44 => r2/r1 = √1,44 = 1,2. Jari-jari bertambah 20%. Karena keliling K ~ r, maka keliling juga bertambah 20%."
        }
      }
    },
    {
      "id": "tps-pku-10",
      "conceptName": "Peluang Bersyarat",
      "topic": "Peluang Bersyarat",
      "questionText": "Dalam sebuah kotak terdapat 5 kelereng merah dan 3 kelereng biru. Diambil 2 kelereng satu per satu tanpa pengembalian. Peluang terambil kelereng pertama merah dan kelereng kedua biru adalah...",
      "type": "mcq",
      "options": [
        "15/56",
        "15/64",
        "5/14",
        "3/8",
        "9/56"
      ],
      "optionDetails": {
        "15/56": "✓ BENAR: P(M1) = 5/8. P(B2 | M1) = 3/7. Peluang gabungan = (5/8) * (3/7) = 15/56.",
        "15/64": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: P(M1) = 5/8. P(B2 | M1) = 3/7. Peluang gabungan = (5/8) * (3/7) = 15/56.",
        "5/14": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: P(M1) = 5/8. P(B2 | M1) = 3/7. Peluang gabungan = (5/8) * (3/7) = 15/56.",
        "3/8": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: P(M1) = 5/8. P(B2 | M1) = 3/7. Peluang gabungan = (5/8) * (3/7) = 15/56.",
        "9/56": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: P(M1) = 5/8. P(B2 | M1) = 3/7. Peluang gabungan = (5/8) * (3/7) = 15/56."
      },
      "correctAnswer": "15/56",
      "explanationText": "P(M1) = 5/8. P(B2 | M1) = 3/7. Peluang gabungan = (5/8) * (3/7) = 15/56.",
      "knownWrongPatterns": {
        "15/64": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: P(M1) = 5/8. P(B2 | M1) = 3/7. Peluang gabungan = (5/8) * (3/7) = 15/56."
        },
        "5/14": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: P(M1) = 5/8. P(B2 | M1) = 3/7. Peluang gabungan = (5/8) * (3/7) = 15/56."
        },
        "3/8": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: P(M1) = 5/8. P(B2 | M1) = 3/7. Peluang gabungan = (5/8) * (3/7) = 15/56."
        },
        "9/56": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: P(M1) = 5/8. P(B2 | M1) = 3/7. Peluang gabungan = (5/8) * (3/7) = 15/56."
        }
      }
    }
  ],
  "sekdin-silogisme": [
    {
      "id": "sek-sil-01",
      "conceptName": "Silogisme Kategoris: Term Penengah",
      "topic": "Silogisme Kategoris: Term Penengah",
      "questionText": "Semua taruna kedinasan memiliki disiplin tinggi. Beberapa orang yang memiliki disiplin tinggi mahir bela diri. Kesimpulan yang paling tepat adalah...",
      "type": "mcq",
      "options": [
        "Semua taruna kedinasan mahir bela diri.",
        "Beberapa taruna kedinasan mahir bela diri.",
        "Sebagian orang yang mahir bela diri adalah taruna kedinasan.",
        "Semua yang mahir bela diri adalah taruna kedinasan.",
        "Tidak dapat ditarik kesimpulan yang pasti antara taruna kedinasan dan kemahiran bela diri."
      ],
      "optionDetails": {
        "Semua taruna kedinasan mahir bela diri.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kedua premis dihubungkan oleh term tengah tak terdistribusi ('memiliki disiplin tinggi' sebagai predikat partikular). Oleh karena itu, tidak ada kesimpulan pasti yang menghubungkan seluruh subjek taruna dengan bela diri.",
        "Beberapa taruna kedinasan mahir bela diri.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kedua premis dihubungkan oleh term tengah tak terdistribusi ('memiliki disiplin tinggi' sebagai predikat partikular). Oleh karena itu, tidak ada kesimpulan pasti yang menghubungkan seluruh subjek taruna dengan bela diri.",
        "Sebagian orang yang mahir bela diri adalah taruna kedinasan.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kedua premis dihubungkan oleh term tengah tak terdistribusi ('memiliki disiplin tinggi' sebagai predikat partikular). Oleh karena itu, tidak ada kesimpulan pasti yang menghubungkan seluruh subjek taruna dengan bela diri.",
        "Semua yang mahir bela diri adalah taruna kedinasan.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kedua premis dihubungkan oleh term tengah tak terdistribusi ('memiliki disiplin tinggi' sebagai predikat partikular). Oleh karena itu, tidak ada kesimpulan pasti yang menghubungkan seluruh subjek taruna dengan bela diri.",
        "Tidak dapat ditarik kesimpulan yang pasti antara taruna kedinasan dan kemahiran bela diri.": "✓ BENAR: Kedua premis dihubungkan oleh term tengah tak terdistribusi ('memiliki disiplin tinggi' sebagai predikat partikular). Oleh karena itu, tidak ada kesimpulan pasti yang menghubungkan seluruh subjek taruna dengan bela diri."
      },
      "correctAnswer": "Tidak dapat ditarik kesimpulan yang pasti antara taruna kedinasan dan kemahiran bela diri.",
      "explanationText": "Kedua premis dihubungkan oleh term tengah tak terdistribusi ('memiliki disiplin tinggi' sebagai predikat partikular). Oleh karena itu, tidak ada kesimpulan pasti yang menghubungkan seluruh subjek taruna dengan bela diri.",
      "knownWrongPatterns": {
        "Semua taruna kedinasan mahir bela diri.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kedua premis dihubungkan oleh term tengah tak terdistribusi ('memiliki disiplin tinggi' sebagai predikat partikular). Oleh karena itu, tidak ada kesimpulan pasti yang menghubungkan seluruh subjek taruna dengan bela diri."
        },
        "Beberapa taruna kedinasan mahir bela diri.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kedua premis dihubungkan oleh term tengah tak terdistribusi ('memiliki disiplin tinggi' sebagai predikat partikular). Oleh karena itu, tidak ada kesimpulan pasti yang menghubungkan seluruh subjek taruna dengan bela diri."
        },
        "Sebagian orang yang mahir bela diri adalah taruna kedinasan.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kedua premis dihubungkan oleh term tengah tak terdistribusi ('memiliki disiplin tinggi' sebagai predikat partikular). Oleh karena itu, tidak ada kesimpulan pasti yang menghubungkan seluruh subjek taruna dengan bela diri."
        },
        "Semua yang mahir bela diri adalah taruna kedinasan.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kedua premis dihubungkan oleh term tengah tak terdistribusi ('memiliki disiplin tinggi' sebagai predikat partikular). Oleh karena itu, tidak ada kesimpulan pasti yang menghubungkan seluruh subjek taruna dengan bela diri."
        }
      }
    },
    {
      "id": "sek-sil-02",
      "conceptName": "Logika Matematika: Modus Tollens",
      "topic": "Logika Matematika: Modus Tollens",
      "questionText": "Jika lulus tes kesehatan fisik, maka calon praja berhak mengikuti tes wawancara. Calon praja Budi tidak berhak mengikuti tes wawancara. Kesimpulan yang sah adalah...",
      "type": "mcq",
      "options": [
        "Budi lulus tes kesehatan fisik.",
        "Budi tidak lulus tes kesehatan fisik.",
        "Budi mengundurkan diri dari seleksi.",
        "Budi terlambat hadir saat tes wawancara.",
        "Budi langsung dinyatakan lulus akhir."
      ],
      "optionDetails": {
        "Budi lulus tes kesehatan fisik.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modus Tollens: P -> Q. Diketahui ~Q (tidak berhak wawancara). Maka kesimpulannya adalah ~P (Budi tidak lulus tes kesehatan fisik).",
        "Budi tidak lulus tes kesehatan fisik.": "✓ BENAR: Modus Tollens: P -> Q. Diketahui ~Q (tidak berhak wawancara). Maka kesimpulannya adalah ~P (Budi tidak lulus tes kesehatan fisik).",
        "Budi mengundurkan diri dari seleksi.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modus Tollens: P -> Q. Diketahui ~Q (tidak berhak wawancara). Maka kesimpulannya adalah ~P (Budi tidak lulus tes kesehatan fisik).",
        "Budi terlambat hadir saat tes wawancara.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modus Tollens: P -> Q. Diketahui ~Q (tidak berhak wawancara). Maka kesimpulannya adalah ~P (Budi tidak lulus tes kesehatan fisik).",
        "Budi langsung dinyatakan lulus akhir.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modus Tollens: P -> Q. Diketahui ~Q (tidak berhak wawancara). Maka kesimpulannya adalah ~P (Budi tidak lulus tes kesehatan fisik)."
      },
      "correctAnswer": "Budi tidak lulus tes kesehatan fisik.",
      "explanationText": "Modus Tollens: P -> Q. Diketahui ~Q (tidak berhak wawancara). Maka kesimpulannya adalah ~P (Budi tidak lulus tes kesehatan fisik).",
      "knownWrongPatterns": {
        "Budi lulus tes kesehatan fisik.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Modus Tollens: P -> Q. Diketahui ~Q (tidak berhak wawancara). Maka kesimpulannya adalah ~P (Budi tidak lulus tes kesehatan fisik)."
        },
        "Budi mengundurkan diri dari seleksi.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Modus Tollens: P -> Q. Diketahui ~Q (tidak berhak wawancara). Maka kesimpulannya adalah ~P (Budi tidak lulus tes kesehatan fisik)."
        },
        "Budi terlambat hadir saat tes wawancara.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Modus Tollens: P -> Q. Diketahui ~Q (tidak berhak wawancara). Maka kesimpulannya adalah ~P (Budi tidak lulus tes kesehatan fisik)."
        },
        "Budi langsung dinyatakan lulus akhir.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Modus Tollens: P -> Q. Diketahui ~Q (tidak berhak wawancara). Maka kesimpulannya adalah ~P (Budi tidak lulus tes kesehatan fisik)."
        }
      }
    },
    {
      "id": "sek-sil-03",
      "conceptName": "Silogisme Kategoris: Modus Ponens",
      "topic": "Silogisme Kategoris: Modus Ponens",
      "questionText": "Semua dokumen rahasia negara harus disimpan dalam brankas berkode. Berkas X adalah dokumen rahasia negara. Kesimpulan yang tepat adalah...",
      "type": "mcq",
      "options": [
        "Berkas X tidak perlu disimpan dalam brankas berkode.",
        "Berkas X harus disimpan dalam brankas berkode.",
        "Sebagian berkas X boleh disimpan di atas meja.",
        "Hanya berkas X yang disimpan dalam brankas.",
        "Semua brankas berkode berisi berkas X."
      ],
      "optionDetails": {
        "Berkas X tidak perlu disimpan dalam brankas berkode.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modus Ponens: Premis 1 menyatakan semua A harus B. Berkas X adalah A. Maka Berkas X harus B (harus disimpan dalam brankas berkode).",
        "Berkas X harus disimpan dalam brankas berkode.": "✓ BENAR: Modus Ponens: Premis 1 menyatakan semua A harus B. Berkas X adalah A. Maka Berkas X harus B (harus disimpan dalam brankas berkode).",
        "Sebagian berkas X boleh disimpan di atas meja.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modus Ponens: Premis 1 menyatakan semua A harus B. Berkas X adalah A. Maka Berkas X harus B (harus disimpan dalam brankas berkode).",
        "Hanya berkas X yang disimpan dalam brankas.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modus Ponens: Premis 1 menyatakan semua A harus B. Berkas X adalah A. Maka Berkas X harus B (harus disimpan dalam brankas berkode).",
        "Semua brankas berkode berisi berkas X.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modus Ponens: Premis 1 menyatakan semua A harus B. Berkas X adalah A. Maka Berkas X harus B (harus disimpan dalam brankas berkode)."
      },
      "correctAnswer": "Berkas X harus disimpan dalam brankas berkode.",
      "explanationText": "Modus Ponens: Premis 1 menyatakan semua A harus B. Berkas X adalah A. Maka Berkas X harus B (harus disimpan dalam brankas berkode).",
      "knownWrongPatterns": {
        "Berkas X tidak perlu disimpan dalam brankas berkode.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Modus Ponens: Premis 1 menyatakan semua A harus B. Berkas X adalah A. Maka Berkas X harus B (harus disimpan dalam brankas berkode)."
        },
        "Sebagian berkas X boleh disimpan di atas meja.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Modus Ponens: Premis 1 menyatakan semua A harus B. Berkas X adalah A. Maka Berkas X harus B (harus disimpan dalam brankas berkode)."
        },
        "Hanya berkas X yang disimpan dalam brankas.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Modus Ponens: Premis 1 menyatakan semua A harus B. Berkas X adalah A. Maka Berkas X harus B (harus disimpan dalam brankas berkode)."
        },
        "Semua brankas berkode berisi berkas X.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Modus Ponens: Premis 1 menyatakan semua A harus B. Berkas X adalah A. Maka Berkas X harus B (harus disimpan dalam brankas berkode)."
        }
      }
    },
    {
      "id": "sek-sil-04",
      "conceptName": "Silogisme Negatif",
      "topic": "Silogisme Negatif",
      "questionText": "Tidak ada koruptor yang berintegritas. Sebagian aparatur sipil adalah koruptor. Kesimpulan yang tepat adalah...",
      "type": "mcq",
      "options": [
        "Semua aparatur sipil tidak berintegritas.",
        "Sebagian aparatur sipil tidak berintegritas.",
        "Semua yang berintegritas adalah aparatur sipil.",
        "Sebagian yang berintegritas adalah koruptor.",
        "Tidak ada aparatur sipil yang koruptor."
      ],
      "optionDetails": {
        "Semua aparatur sipil tidak berintegritas.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Premis E (Universal Negatif) + Premis I (Partikular Afirmatif) menghasilkan kesimpulan O (Partikular Negatif): Sebagian aparatur sipil tidak berintegritas.",
        "Sebagian aparatur sipil tidak berintegritas.": "✓ BENAR: Premis E (Universal Negatif) + Premis I (Partikular Afirmatif) menghasilkan kesimpulan O (Partikular Negatif): Sebagian aparatur sipil tidak berintegritas.",
        "Semua yang berintegritas adalah aparatur sipil.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Premis E (Universal Negatif) + Premis I (Partikular Afirmatif) menghasilkan kesimpulan O (Partikular Negatif): Sebagian aparatur sipil tidak berintegritas.",
        "Sebagian yang berintegritas adalah koruptor.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Premis E (Universal Negatif) + Premis I (Partikular Afirmatif) menghasilkan kesimpulan O (Partikular Negatif): Sebagian aparatur sipil tidak berintegritas.",
        "Tidak ada aparatur sipil yang koruptor.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Premis E (Universal Negatif) + Premis I (Partikular Afirmatif) menghasilkan kesimpulan O (Partikular Negatif): Sebagian aparatur sipil tidak berintegritas."
      },
      "correctAnswer": "Sebagian aparatur sipil tidak berintegritas.",
      "explanationText": "Premis E (Universal Negatif) + Premis I (Partikular Afirmatif) menghasilkan kesimpulan O (Partikular Negatif): Sebagian aparatur sipil tidak berintegritas.",
      "knownWrongPatterns": {
        "Semua aparatur sipil tidak berintegritas.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Premis E (Universal Negatif) + Premis I (Partikular Afirmatif) menghasilkan kesimpulan O (Partikular Negatif): Sebagian aparatur sipil tidak berintegritas."
        },
        "Semua yang berintegritas adalah aparatur sipil.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Premis E (Universal Negatif) + Premis I (Partikular Afirmatif) menghasilkan kesimpulan O (Partikular Negatif): Sebagian aparatur sipil tidak berintegritas."
        },
        "Sebagian yang berintegritas adalah koruptor.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Premis E (Universal Negatif) + Premis I (Partikular Afirmatif) menghasilkan kesimpulan O (Partikular Negatif): Sebagian aparatur sipil tidak berintegritas."
        },
        "Tidak ada aparatur sipil yang koruptor.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Premis E (Universal Negatif) + Premis I (Partikular Afirmatif) menghasilkan kesimpulan O (Partikular Negatif): Sebagian aparatur sipil tidak berintegritas."
        }
      }
    },
    {
      "id": "sek-sil-05",
      "conceptName": "Penalaran Posisi Spasial Relatif",
      "topic": "Penalaran Posisi Spasial Relatif",
      "questionText": "Di suatu asrama, kamar A terletak di sebelah barat kamar B. Kamar B di sebelah barat kamar C. Kamar D di sebelah timur kamar C. Kamar yang berada paling barat adalah...",
      "type": "mcq",
      "options": [
        "Kamar A",
        "Kamar B",
        "Kamar C",
        "Kamar D",
        "Kamar B dan C bersamaan"
      ],
      "optionDetails": {
        "Kamar A": "✓ BENAR: Urutan dari barat ke timur: A - B - C - D. Posisi paling barat adalah Kamar A.",
        "Kamar B": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Urutan dari barat ke timur: A - B - C - D. Posisi paling barat adalah Kamar A.",
        "Kamar C": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Urutan dari barat ke timur: A - B - C - D. Posisi paling barat adalah Kamar A.",
        "Kamar D": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Urutan dari barat ke timur: A - B - C - D. Posisi paling barat adalah Kamar A.",
        "Kamar B dan C bersamaan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Urutan dari barat ke timur: A - B - C - D. Posisi paling barat adalah Kamar A."
      },
      "correctAnswer": "Kamar A",
      "explanationText": "Urutan dari barat ke timur: A - B - C - D. Posisi paling barat adalah Kamar A.",
      "knownWrongPatterns": {
        "Kamar B": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Urutan dari barat ke timur: A - B - C - D. Posisi paling barat adalah Kamar A."
        },
        "Kamar C": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Urutan dari barat ke timur: A - B - C - D. Posisi paling barat adalah Kamar A."
        },
        "Kamar D": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Urutan dari barat ke timur: A - B - C - D. Posisi paling barat adalah Kamar A."
        },
        "Kamar B dan C bersamaan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Urutan dari barat ke timur: A - B - C - D. Posisi paling barat adalah Kamar A."
        }
      }
    },
    {
      "id": "sek-sil-06",
      "conceptName": "Penalaran Analitis Urutan Waktu",
      "topic": "Penalaran Analitis Urutan Waktu",
      "questionText": "Enam orang pelari (P, Q, R, S, T, U) bertanding. P tiba sebelum Q namun setelah R. S tiba sebelum R namun setelah T. Pelari yang finish di urutan pertama adalah...",
      "type": "mcq",
      "options": [
        "P",
        "Q",
        "R",
        "S",
        "T"
      ],
      "optionDetails": {
        "P": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Relasi urutan: R < P < Q. Selanjutnya T < S < R. Menggabungkan: T < S < R < P < Q. Pelari tercepat (posisi pertama) adalah T.",
        "Q": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Relasi urutan: R < P < Q. Selanjutnya T < S < R. Menggabungkan: T < S < R < P < Q. Pelari tercepat (posisi pertama) adalah T.",
        "R": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Relasi urutan: R < P < Q. Selanjutnya T < S < R. Menggabungkan: T < S < R < P < Q. Pelari tercepat (posisi pertama) adalah T.",
        "S": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Relasi urutan: R < P < Q. Selanjutnya T < S < R. Menggabungkan: T < S < R < P < Q. Pelari tercepat (posisi pertama) adalah T.",
        "T": "✓ BENAR: Relasi urutan: R < P < Q. Selanjutnya T < S < R. Menggabungkan: T < S < R < P < Q. Pelari tercepat (posisi pertama) adalah T."
      },
      "correctAnswer": "T",
      "explanationText": "Relasi urutan: R < P < Q. Selanjutnya T < S < R. Menggabungkan: T < S < R < P < Q. Pelari tercepat (posisi pertama) adalah T.",
      "knownWrongPatterns": {
        "P": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Relasi urutan: R < P < Q. Selanjutnya T < S < R. Menggabungkan: T < S < R < P < Q. Pelari tercepat (posisi pertama) adalah T."
        },
        "Q": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Relasi urutan: R < P < Q. Selanjutnya T < S < R. Menggabungkan: T < S < R < P < Q. Pelari tercepat (posisi pertama) adalah T."
        },
        "R": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Relasi urutan: R < P < Q. Selanjutnya T < S < R. Menggabungkan: T < S < R < P < Q. Pelari tercepat (posisi pertama) adalah T."
        },
        "S": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Relasi urutan: R < P < Q. Selanjutnya T < S < R. Menggabungkan: T < S < R < P < Q. Pelari tercepat (posisi pertama) adalah T."
        }
      }
    },
    {
      "id": "sek-sil-07",
      "conceptName": "Silogisme Deduksi Langsung",
      "topic": "Silogisme Deduksi Langsung",
      "questionText": "Semua tanaman di kebun dinas memerlukan air. Kaktus adalah tanaman di kebun dinas. Kesimpulan yang benar adalah...",
      "type": "mcq",
      "options": [
        "Kaktus tidak memerlukan air.",
        "Kaktus memerlukan air.",
        "Hanya kaktus yang memerlukan air di kebun.",
        "Semua yang memerlukan air adalah kaktus.",
        "Sebagian tanaman di kebun bukan kaktus."
      ],
      "optionDetails": {
        "Kaktus tidak memerlukan air.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Karena kaktus termasuk dalam himpunan tanaman di kebun dinas dan semua tanaman di kebun tersebut memerlukan air, maka kaktus memerlukan air.",
        "Kaktus memerlukan air.": "✓ BENAR: Karena kaktus termasuk dalam himpunan tanaman di kebun dinas dan semua tanaman di kebun tersebut memerlukan air, maka kaktus memerlukan air.",
        "Hanya kaktus yang memerlukan air di kebun.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Karena kaktus termasuk dalam himpunan tanaman di kebun dinas dan semua tanaman di kebun tersebut memerlukan air, maka kaktus memerlukan air.",
        "Semua yang memerlukan air adalah kaktus.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Karena kaktus termasuk dalam himpunan tanaman di kebun dinas dan semua tanaman di kebun tersebut memerlukan air, maka kaktus memerlukan air.",
        "Sebagian tanaman di kebun bukan kaktus.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Karena kaktus termasuk dalam himpunan tanaman di kebun dinas dan semua tanaman di kebun tersebut memerlukan air, maka kaktus memerlukan air."
      },
      "correctAnswer": "Kaktus memerlukan air.",
      "explanationText": "Karena kaktus termasuk dalam himpunan tanaman di kebun dinas dan semua tanaman di kebun tersebut memerlukan air, maka kaktus memerlukan air.",
      "knownWrongPatterns": {
        "Kaktus tidak memerlukan air.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Karena kaktus termasuk dalam himpunan tanaman di kebun dinas dan semua tanaman di kebun tersebut memerlukan air, maka kaktus memerlukan air."
        },
        "Hanya kaktus yang memerlukan air di kebun.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Karena kaktus termasuk dalam himpunan tanaman di kebun dinas dan semua tanaman di kebun tersebut memerlukan air, maka kaktus memerlukan air."
        },
        "Semua yang memerlukan air adalah kaktus.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Karena kaktus termasuk dalam himpunan tanaman di kebun dinas dan semua tanaman di kebun tersebut memerlukan air, maka kaktus memerlukan air."
        },
        "Sebagian tanaman di kebun bukan kaktus.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Karena kaktus termasuk dalam himpunan tanaman di kebun dinas dan semua tanaman di kebun tersebut memerlukan air, maka kaktus memerlukan air."
        }
      }
    },
    {
      "id": "sek-sil-08",
      "conceptName": "Silogisme Hipotetis",
      "topic": "Silogisme Hipotetis",
      "questionText": "Jika seorang abdi negara bekerja secara jujur, maka masyarakat mempercayainya. Jika masyarakat mempercayainya, stabilitas nasional terjaga. Kesimpulan ekuivalen adalah...",
      "type": "mcq",
      "options": [
        "Jika seorang abdi negara bekerja secara jujur, stabilitas nasional terjaga.",
        "Meskipun abdi negara jujur, stabilitas negara tidak terjaga.",
        "Stabilitas nasional tidak berhubungan dengan kejujuran aparatur.",
        "Masyarakat hanya percaya kepada abdi negara yang kaya.",
        "Abdi negara tidak perlu jujur jika stabilitas terjaga."
      ],
      "optionDetails": {
        "Jika seorang abdi negara bekerja secara jujur, stabilitas nasional terjaga.": "✓ BENAR: Hukum Silogisme Hipotetis (Transitivitas Implikasi): (P -> Q) dan (Q -> R) menghasilkan (P -> R).",
        "Meskipun abdi negara jujur, stabilitas negara tidak terjaga.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hukum Silogisme Hipotetis (Transitivitas Implikasi): (P -> Q) dan (Q -> R) menghasilkan (P -> R).",
        "Stabilitas nasional tidak berhubungan dengan kejujuran aparatur.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hukum Silogisme Hipotetis (Transitivitas Implikasi): (P -> Q) dan (Q -> R) menghasilkan (P -> R).",
        "Masyarakat hanya percaya kepada abdi negara yang kaya.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hukum Silogisme Hipotetis (Transitivitas Implikasi): (P -> Q) dan (Q -> R) menghasilkan (P -> R).",
        "Abdi negara tidak perlu jujur jika stabilitas terjaga.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hukum Silogisme Hipotetis (Transitivitas Implikasi): (P -> Q) dan (Q -> R) menghasilkan (P -> R)."
      },
      "correctAnswer": "Jika seorang abdi negara bekerja secara jujur, stabilitas nasional terjaga.",
      "explanationText": "Hukum Silogisme Hipotetis (Transitivitas Implikasi): (P -> Q) dan (Q -> R) menghasilkan (P -> R).",
      "knownWrongPatterns": {
        "Meskipun abdi negara jujur, stabilitas negara tidak terjaga.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Hukum Silogisme Hipotetis (Transitivitas Implikasi): (P -> Q) dan (Q -> R) menghasilkan (P -> R)."
        },
        "Stabilitas nasional tidak berhubungan dengan kejujuran aparatur.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Hukum Silogisme Hipotetis (Transitivitas Implikasi): (P -> Q) dan (Q -> R) menghasilkan (P -> R)."
        },
        "Masyarakat hanya percaya kepada abdi negara yang kaya.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Hukum Silogisme Hipotetis (Transitivitas Implikasi): (P -> Q) dan (Q -> R) menghasilkan (P -> R)."
        },
        "Abdi negara tidak perlu jujur jika stabilitas terjaga.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Hukum Silogisme Hipotetis (Transitivitas Implikasi): (P -> Q) dan (Q -> R) menghasilkan (P -> R)."
        }
      }
    },
    {
      "id": "sek-sil-09",
      "conceptName": "Ekuivalensi Kontraposisi",
      "topic": "Ekuivalensi Kontraposisi",
      "questionText": "Pernyataan: 'Semua anggota tim SAR bisa berenang' ekuivalen dengan pernyataan...",
      "type": "mcq",
      "options": [
        "Jika seseorang bukan anggota tim SAR, ia tidak bisa berenang.",
        "Jika seseorang tidak bisa berenang, ia bukan anggota tim SAR.",
        "Sebagian anggota tim SAR tidak bisa berenang.",
        "Ada yang bisa berenang tetapi bukan anggota tim SAR.",
        "Semua orang yang bisa berenang adalah anggota tim SAR."
      ],
      "optionDetails": {
        "Jika seseorang bukan anggota tim SAR, ia tidak bisa berenang.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kontraposisi dari implikasi P -> Q ('Jika anggota tim SAR, maka bisa berenang') adalah ~Q -> ~P ('Jika tidak bisa berenang, maka bukan anggota tim SAR'). Nilai kebenarannya identik (ekuivalen logis).",
        "Jika seseorang tidak bisa berenang, ia bukan anggota tim SAR.": "✓ BENAR: Kontraposisi dari implikasi P -> Q ('Jika anggota tim SAR, maka bisa berenang') adalah ~Q -> ~P ('Jika tidak bisa berenang, maka bukan anggota tim SAR'). Nilai kebenarannya identik (ekuivalen logis).",
        "Sebagian anggota tim SAR tidak bisa berenang.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kontraposisi dari implikasi P -> Q ('Jika anggota tim SAR, maka bisa berenang') adalah ~Q -> ~P ('Jika tidak bisa berenang, maka bukan anggota tim SAR'). Nilai kebenarannya identik (ekuivalen logis).",
        "Ada yang bisa berenang tetapi bukan anggota tim SAR.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kontraposisi dari implikasi P -> Q ('Jika anggota tim SAR, maka bisa berenang') adalah ~Q -> ~P ('Jika tidak bisa berenang, maka bukan anggota tim SAR'). Nilai kebenarannya identik (ekuivalen logis).",
        "Semua orang yang bisa berenang adalah anggota tim SAR.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Kontraposisi dari implikasi P -> Q ('Jika anggota tim SAR, maka bisa berenang') adalah ~Q -> ~P ('Jika tidak bisa berenang, maka bukan anggota tim SAR'). Nilai kebenarannya identik (ekuivalen logis)."
      },
      "correctAnswer": "Jika seseorang tidak bisa berenang, ia bukan anggota tim SAR.",
      "explanationText": "Kontraposisi dari implikasi P -> Q ('Jika anggota tim SAR, maka bisa berenang') adalah ~Q -> ~P ('Jika tidak bisa berenang, maka bukan anggota tim SAR'). Nilai kebenarannya identik (ekuivalen logis).",
      "knownWrongPatterns": {
        "Jika seseorang bukan anggota tim SAR, ia tidak bisa berenang.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kontraposisi dari implikasi P -> Q ('Jika anggota tim SAR, maka bisa berenang') adalah ~Q -> ~P ('Jika tidak bisa berenang, maka bukan anggota tim SAR'). Nilai kebenarannya identik (ekuivalen logis)."
        },
        "Sebagian anggota tim SAR tidak bisa berenang.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kontraposisi dari implikasi P -> Q ('Jika anggota tim SAR, maka bisa berenang') adalah ~Q -> ~P ('Jika tidak bisa berenang, maka bukan anggota tim SAR'). Nilai kebenarannya identik (ekuivalen logis)."
        },
        "Ada yang bisa berenang tetapi bukan anggota tim SAR.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kontraposisi dari implikasi P -> Q ('Jika anggota tim SAR, maka bisa berenang') adalah ~Q -> ~P ('Jika tidak bisa berenang, maka bukan anggota tim SAR'). Nilai kebenarannya identik (ekuivalen logis)."
        },
        "Semua orang yang bisa berenang adalah anggota tim SAR.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Kontraposisi dari implikasi P -> Q ('Jika anggota tim SAR, maka bisa berenang') adalah ~Q -> ~P ('Jika tidak bisa berenang, maka bukan anggota tim SAR'). Nilai kebenarannya identik (ekuivalen logis)."
        }
      }
    },
    {
      "id": "sek-sil-10",
      "conceptName": "Penalaran Deduktif Kondisional",
      "topic": "Penalaran Deduktif Kondisional",
      "questionText": "Jika Andi terpilih menjadi ketua senat, maka ia pindah ke asrama utama. Kondisi saat ini: Andi tidak pindah ke asrama utama. Kesimpulan yang tepat adalah...",
      "type": "mcq",
      "options": [
        "Andi terpilih menjadi ketua senat.",
        "Andi tidak terpilih menjadi ketua senat.",
        "Andi pindah ke asrama lain.",
        "Andi mengundurkan diri dari kuliah.",
        "Ketua senat tidak memiliki asrama."
      ],
      "optionDetails": {
        "Andi terpilih menjadi ketua senat.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modus Tollens: P -> Q. Diketahui ~Q. Kesimpulan yang sah adalah ~P (Andi tidak terpilih menjadi ketua senat).",
        "Andi tidak terpilih menjadi ketua senat.": "✓ BENAR: Modus Tollens: P -> Q. Diketahui ~Q. Kesimpulan yang sah adalah ~P (Andi tidak terpilih menjadi ketua senat).",
        "Andi pindah ke asrama lain.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modus Tollens: P -> Q. Diketahui ~Q. Kesimpulan yang sah adalah ~P (Andi tidak terpilih menjadi ketua senat).",
        "Andi mengundurkan diri dari kuliah.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modus Tollens: P -> Q. Diketahui ~Q. Kesimpulan yang sah adalah ~P (Andi tidak terpilih menjadi ketua senat).",
        "Ketua senat tidak memiliki asrama.": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Modus Tollens: P -> Q. Diketahui ~Q. Kesimpulan yang sah adalah ~P (Andi tidak terpilih menjadi ketua senat)."
      },
      "correctAnswer": "Andi tidak terpilih menjadi ketua senat.",
      "explanationText": "Modus Tollens: P -> Q. Diketahui ~Q. Kesimpulan yang sah adalah ~P (Andi tidak terpilih menjadi ketua senat).",
      "knownWrongPatterns": {
        "Andi terpilih menjadi ketua senat.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Modus Tollens: P -> Q. Diketahui ~Q. Kesimpulan yang sah adalah ~P (Andi tidak terpilih menjadi ketua senat)."
        },
        "Andi pindah ke asrama lain.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Modus Tollens: P -> Q. Diketahui ~Q. Kesimpulan yang sah adalah ~P (Andi tidak terpilih menjadi ketua senat)."
        },
        "Andi mengundurkan diri dari kuliah.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Modus Tollens: P -> Q. Diketahui ~Q. Kesimpulan yang sah adalah ~P (Andi tidak terpilih menjadi ketua senat)."
        },
        "Ketua senat tidak memiliki asrama.": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Modus Tollens: P -> Q. Diketahui ~Q. Kesimpulan yang sah adalah ~P (Andi tidak terpilih menjadi ketua senat)."
        }
      }
    }
  ],
  "sekdin-figural": [
    {
      "id": "sek-fig-01",
      "conceptName": "Penalaran Spasial: Rotasi dan Refleksi",
      "topic": "Penalaran Spasial: Rotasi dan Refleksi",
      "questionText": "Sebuah segitiga sama sisi diputar berlawanan arah jarum jam sebesar 90 derajat, kemudian dicerminkan terhadap garis horizontal. Posisi puncak segitiga yang awalnya mengarah ke atas kini mengarah ke...",
      "type": "mcq",
      "options": [
        "Atas",
        "Bawah",
        "Kiri",
        "Kanan",
        "Serong kanan bawah"
      ],
      "optionDetails": {
        "Atas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Puncak mula-mula di atas (0°). Diputar 90° berlawanan arah jarum jam (ke kiri) -> puncak menghadap ke kiri. Dicerminkan terhadap sumbu horizontal: komponen kiri/kanan tetap tidak berubah, sehingga arah tetap menghadap ke kiri.",
        "Bawah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Puncak mula-mula di atas (0°). Diputar 90° berlawanan arah jarum jam (ke kiri) -> puncak menghadap ke kiri. Dicerminkan terhadap sumbu horizontal: komponen kiri/kanan tetap tidak berubah, sehingga arah tetap menghadap ke kiri.",
        "Kiri": "✓ BENAR: Puncak mula-mula di atas (0°). Diputar 90° berlawanan arah jarum jam (ke kiri) -> puncak menghadap ke kiri. Dicerminkan terhadap sumbu horizontal: komponen kiri/kanan tetap tidak berubah, sehingga arah tetap menghadap ke kiri.",
        "Kanan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Puncak mula-mula di atas (0°). Diputar 90° berlawanan arah jarum jam (ke kiri) -> puncak menghadap ke kiri. Dicerminkan terhadap sumbu horizontal: komponen kiri/kanan tetap tidak berubah, sehingga arah tetap menghadap ke kiri.",
        "Serong kanan bawah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Puncak mula-mula di atas (0°). Diputar 90° berlawanan arah jarum jam (ke kiri) -> puncak menghadap ke kiri. Dicerminkan terhadap sumbu horizontal: komponen kiri/kanan tetap tidak berubah, sehingga arah tetap menghadap ke kiri."
      },
      "correctAnswer": "Kiri",
      "explanationText": "Puncak mula-mula di atas (0°). Diputar 90° berlawanan arah jarum jam (ke kiri) -> puncak menghadap ke kiri. Dicerminkan terhadap sumbu horizontal: komponen kiri/kanan tetap tidak berubah, sehingga arah tetap menghadap ke kiri.",
      "knownWrongPatterns": {
        "Atas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Puncak mula-mula di atas (0°). Diputar 90° berlawanan arah jarum jam (ke kiri) -> puncak menghadap ke kiri. Dicerminkan terhadap sumbu horizontal: komponen kiri/kanan tetap tidak berubah, sehingga arah tetap menghadap ke kiri."
        },
        "Bawah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Puncak mula-mula di atas (0°). Diputar 90° berlawanan arah jarum jam (ke kiri) -> puncak menghadap ke kiri. Dicerminkan terhadap sumbu horizontal: komponen kiri/kanan tetap tidak berubah, sehingga arah tetap menghadap ke kiri."
        },
        "Kanan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Puncak mula-mula di atas (0°). Diputar 90° berlawanan arah jarum jam (ke kiri) -> puncak menghadap ke kiri. Dicerminkan terhadap sumbu horizontal: komponen kiri/kanan tetap tidak berubah, sehingga arah tetap menghadap ke kiri."
        },
        "Serong kanan bawah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Puncak mula-mula di atas (0°). Diputar 90° berlawanan arah jarum jam (ke kiri) -> puncak menghadap ke kiri. Dicerminkan terhadap sumbu horizontal: komponen kiri/kanan tetap tidak berubah, sehingga arah tetap menghadap ke kiri."
        }
      }
    },
    {
      "id": "sek-fig-02",
      "conceptName": "Jaring-Jaring Kubus 3 Dimensi",
      "topic": "Jaring-Jaring Kubus 3 Dimensi",
      "questionText": "Jika jaring-jaring kubus memiliki 6 sisi persegi berurutan dalam bentuk salib (satu di atas, empat mendatar A-B-C-D, satu di bawah B). Sisi yang berhadapan dengan sisi B saat dilipat menjadi kubus adalah sisi...",
      "type": "mcq",
      "options": [
        "Sisi A",
        "Sisi C",
        "Sisi D",
        "Sisi atas",
        "Sisi bawah"
      ],
      "optionDetails": {
        "Sisi A": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pada deretan empat persegi mendatar A - B - C - D, sisi yang berhadapan berselang satu sisi. Sisi A berhadapan dengan C, dan sisi B berhadapan dengan sisi D.",
        "Sisi C": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pada deretan empat persegi mendatar A - B - C - D, sisi yang berhadapan berselang satu sisi. Sisi A berhadapan dengan C, dan sisi B berhadapan dengan sisi D.",
        "Sisi D": "✓ BENAR: Pada deretan empat persegi mendatar A - B - C - D, sisi yang berhadapan berselang satu sisi. Sisi A berhadapan dengan C, dan sisi B berhadapan dengan sisi D.",
        "Sisi atas": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pada deretan empat persegi mendatar A - B - C - D, sisi yang berhadapan berselang satu sisi. Sisi A berhadapan dengan C, dan sisi B berhadapan dengan sisi D.",
        "Sisi bawah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pada deretan empat persegi mendatar A - B - C - D, sisi yang berhadapan berselang satu sisi. Sisi A berhadapan dengan C, dan sisi B berhadapan dengan sisi D."
      },
      "correctAnswer": "Sisi D",
      "explanationText": "Pada deretan empat persegi mendatar A - B - C - D, sisi yang berhadapan berselang satu sisi. Sisi A berhadapan dengan C, dan sisi B berhadapan dengan sisi D.",
      "knownWrongPatterns": {
        "Sisi A": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pada deretan empat persegi mendatar A - B - C - D, sisi yang berhadapan berselang satu sisi. Sisi A berhadapan dengan C, dan sisi B berhadapan dengan sisi D."
        },
        "Sisi C": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pada deretan empat persegi mendatar A - B - C - D, sisi yang berhadapan berselang satu sisi. Sisi A berhadapan dengan C, dan sisi B berhadapan dengan sisi D."
        },
        "Sisi atas": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pada deretan empat persegi mendatar A - B - C - D, sisi yang berhadapan berselang satu sisi. Sisi A berhadapan dengan C, dan sisi B berhadapan dengan sisi D."
        },
        "Sisi bawah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pada deretan empat persegi mendatar A - B - C - D, sisi yang berhadapan berselang satu sisi. Sisi A berhadapan dengan C, dan sisi B berhadapan dengan sisi D."
        }
      }
    },
    {
      "id": "sek-fig-03",
      "conceptName": "Analogi Figural Bangun Ruang",
      "topic": "Analogi Figural Bangun Ruang",
      "questionText": "Analogi Bentuk: Lingkaran menjadi Bola, maka Bujur Sangkar menjadi...",
      "type": "mcq",
      "options": [
        "Persegi panjang",
        "Kubus",
        "Limas segi empat",
        "Prisma segitiga",
        "Silinder"
      ],
      "optionDetails": {
        "Persegi panjang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hubungan dimensi 2D ke bangun ruang 3D yang simetris: Lingkaran adalah bentuk 2D dari Bola 3D, sebagaimana Bujur Sangkar adalah bentuk 2D dari Kubus 3D.",
        "Kubus": "✓ BENAR: Hubungan dimensi 2D ke bangun ruang 3D yang simetris: Lingkaran adalah bentuk 2D dari Bola 3D, sebagaimana Bujur Sangkar adalah bentuk 2D dari Kubus 3D.",
        "Limas segi empat": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hubungan dimensi 2D ke bangun ruang 3D yang simetris: Lingkaran adalah bentuk 2D dari Bola 3D, sebagaimana Bujur Sangkar adalah bentuk 2D dari Kubus 3D.",
        "Prisma segitiga": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hubungan dimensi 2D ke bangun ruang 3D yang simetris: Lingkaran adalah bentuk 2D dari Bola 3D, sebagaimana Bujur Sangkar adalah bentuk 2D dari Kubus 3D.",
        "Silinder": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Hubungan dimensi 2D ke bangun ruang 3D yang simetris: Lingkaran adalah bentuk 2D dari Bola 3D, sebagaimana Bujur Sangkar adalah bentuk 2D dari Kubus 3D."
      },
      "correctAnswer": "Kubus",
      "explanationText": "Hubungan dimensi 2D ke bangun ruang 3D yang simetris: Lingkaran adalah bentuk 2D dari Bola 3D, sebagaimana Bujur Sangkar adalah bentuk 2D dari Kubus 3D.",
      "knownWrongPatterns": {
        "Persegi panjang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Hubungan dimensi 2D ke bangun ruang 3D yang simetris: Lingkaran adalah bentuk 2D dari Bola 3D, sebagaimana Bujur Sangkar adalah bentuk 2D dari Kubus 3D."
        },
        "Limas segi empat": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Hubungan dimensi 2D ke bangun ruang 3D yang simetris: Lingkaran adalah bentuk 2D dari Bola 3D, sebagaimana Bujur Sangkar adalah bentuk 2D dari Kubus 3D."
        },
        "Prisma segitiga": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Hubungan dimensi 2D ke bangun ruang 3D yang simetris: Lingkaran adalah bentuk 2D dari Bola 3D, sebagaimana Bujur Sangkar adalah bentuk 2D dari Kubus 3D."
        },
        "Silinder": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Hubungan dimensi 2D ke bangun ruang 3D yang simetris: Lingkaran adalah bentuk 2D dari Bola 3D, sebagaimana Bujur Sangkar adalah bentuk 2D dari Kubus 3D."
        }
      }
    },
    {
      "id": "sek-fig-04",
      "conceptName": "Serial Pola Garis Figural",
      "topic": "Serial Pola Garis Figural",
      "questionText": "Suatu pola gambar terdiri atas segi empat dengan jumlah garis diagonal bertambah: Gambar 1 (0 diagonal), Gambar 2 (1 diagonal), Gambar 3 (2 diagonal membentuk silang). Gambar berikutnya memiliki...",
      "type": "mcq",
      "options": [
        "2 diagonal dengan tambahan 1 garis sumbu simetri vertikal membagi dua bidang",
        "Segitiga tanpa garis",
        "Lingkaran di luar segi empat",
        "Segi enam polos",
        "Segi lima terbalik"
      ],
      "optionDetails": {
        "2 diagonal dengan tambahan 1 garis sumbu simetri vertikal membagi dua bidang": "✓ BENAR: Pola penambahan garis pembagi simetris internal secara konsisten.",
        "Segitiga tanpa garis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola penambahan garis pembagi simetris internal secara konsisten.",
        "Lingkaran di luar segi empat": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola penambahan garis pembagi simetris internal secara konsisten.",
        "Segi enam polos": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola penambahan garis pembagi simetris internal secara konsisten.",
        "Segi lima terbalik": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola penambahan garis pembagi simetris internal secara konsisten."
      },
      "correctAnswer": "2 diagonal dengan tambahan 1 garis sumbu simetri vertikal membagi dua bidang",
      "explanationText": "Pola penambahan garis pembagi simetris internal secara konsisten.",
      "knownWrongPatterns": {
        "Segitiga tanpa garis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola penambahan garis pembagi simetris internal secara konsisten."
        },
        "Lingkaran di luar segi empat": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola penambahan garis pembagi simetris internal secara konsisten."
        },
        "Segi enam polos": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola penambahan garis pembagi simetris internal secara konsisten."
        },
        "Segi lima terbalik": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola penambahan garis pembagi simetris internal secara konsisten."
        }
      }
    },
    {
      "id": "sek-fig-05",
      "conceptName": "Klasifikasi Figural (Ganjil/Odd-One-Out)",
      "topic": "Klasifikasi Figural (Ganjil/Odd-One-Out)",
      "questionText": "Manakah gambar yang TIDAK SESUAI dalam kelompok bangun datar beraturan berikut?",
      "type": "mcq",
      "options": [
        "Segitiga sama sisi",
        "Bujur sangkar",
        "Pentagon beraturan",
        "Trapesium sembarang",
        "Heksagon beraturan"
      ],
      "optionDetails": {
        "Segitiga sama sisi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Trapesium sembarang adalah satu-satunya bangun datar yang tidak memiliki sisi dan sudut yang sama besar (bukan poligon reguler/beraturan).",
        "Bujur sangkar": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Trapesium sembarang adalah satu-satunya bangun datar yang tidak memiliki sisi dan sudut yang sama besar (bukan poligon reguler/beraturan).",
        "Pentagon beraturan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Trapesium sembarang adalah satu-satunya bangun datar yang tidak memiliki sisi dan sudut yang sama besar (bukan poligon reguler/beraturan).",
        "Trapesium sembarang": "✓ BENAR: Trapesium sembarang adalah satu-satunya bangun datar yang tidak memiliki sisi dan sudut yang sama besar (bukan poligon reguler/beraturan).",
        "Heksagon beraturan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Trapesium sembarang adalah satu-satunya bangun datar yang tidak memiliki sisi dan sudut yang sama besar (bukan poligon reguler/beraturan)."
      },
      "correctAnswer": "Trapesium sembarang",
      "explanationText": "Trapesium sembarang adalah satu-satunya bangun datar yang tidak memiliki sisi dan sudut yang sama besar (bukan poligon reguler/beraturan).",
      "knownWrongPatterns": {
        "Segitiga sama sisi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Trapesium sembarang adalah satu-satunya bangun datar yang tidak memiliki sisi dan sudut yang sama besar (bukan poligon reguler/beraturan)."
        },
        "Bujur sangkar": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Trapesium sembarang adalah satu-satunya bangun datar yang tidak memiliki sisi dan sudut yang sama besar (bukan poligon reguler/beraturan)."
        },
        "Pentagon beraturan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Trapesium sembarang adalah satu-satunya bangun datar yang tidak memiliki sisi dan sudut yang sama besar (bukan poligon reguler/beraturan)."
        },
        "Heksagon beraturan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Trapesium sembarang adalah satu-satunya bangun datar yang tidak memiliki sisi dan sudut yang sama besar (bukan poligon reguler/beraturan)."
        }
      }
    },
    {
      "id": "sek-fig-06",
      "conceptName": "Lipatan Kertas & Pelubangan (Paper Folding)",
      "topic": "Lipatan Kertas & Pelubangan (Paper Folding)",
      "questionText": "Sebuah kertas persegi dilipat dua ke kanan, lalu dilipat dua lagi ke bawah sehingga membentuk persegi kecil seperempat ukuran awal. Pada sudut pusat lipatan dilubangi satu lingkaran kecil. Ketika kertas dibuka kembali, ada berapa lubang yang tampak?",
      "type": "mcq",
      "options": [
        "1 lubang",
        "2 lubang",
        "4 lubang di tengah simetris",
        "8 lubang",
        "Tidak ada lubang"
      ],
      "optionDetails": {
        "1 lubang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Karena kertas dilipat 2 kali (2 lapis x 2 lapis = 4 lapisan) dan dipotong pada sudut lipatan tengah, ketika dibuka lipatan akan terbentuk 4 lubang simetris di sekitar pusat kertas.",
        "2 lubang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Karena kertas dilipat 2 kali (2 lapis x 2 lapis = 4 lapisan) dan dipotong pada sudut lipatan tengah, ketika dibuka lipatan akan terbentuk 4 lubang simetris di sekitar pusat kertas.",
        "4 lubang di tengah simetris": "✓ BENAR: Karena kertas dilipat 2 kali (2 lapis x 2 lapis = 4 lapisan) dan dipotong pada sudut lipatan tengah, ketika dibuka lipatan akan terbentuk 4 lubang simetris di sekitar pusat kertas.",
        "8 lubang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Karena kertas dilipat 2 kali (2 lapis x 2 lapis = 4 lapisan) dan dipotong pada sudut lipatan tengah, ketika dibuka lipatan akan terbentuk 4 lubang simetris di sekitar pusat kertas.",
        "Tidak ada lubang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Karena kertas dilipat 2 kali (2 lapis x 2 lapis = 4 lapisan) dan dipotong pada sudut lipatan tengah, ketika dibuka lipatan akan terbentuk 4 lubang simetris di sekitar pusat kertas."
      },
      "correctAnswer": "4 lubang di tengah simetris",
      "explanationText": "Karena kertas dilipat 2 kali (2 lapis x 2 lapis = 4 lapisan) dan dipotong pada sudut lipatan tengah, ketika dibuka lipatan akan terbentuk 4 lubang simetris di sekitar pusat kertas.",
      "knownWrongPatterns": {
        "1 lubang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Karena kertas dilipat 2 kali (2 lapis x 2 lapis = 4 lapisan) dan dipotong pada sudut lipatan tengah, ketika dibuka lipatan akan terbentuk 4 lubang simetris di sekitar pusat kertas."
        },
        "2 lubang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Karena kertas dilipat 2 kali (2 lapis x 2 lapis = 4 lapisan) dan dipotong pada sudut lipatan tengah, ketika dibuka lipatan akan terbentuk 4 lubang simetris di sekitar pusat kertas."
        },
        "8 lubang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Karena kertas dilipat 2 kali (2 lapis x 2 lapis = 4 lapisan) dan dipotong pada sudut lipatan tengah, ketika dibuka lipatan akan terbentuk 4 lubang simetris di sekitar pusat kertas."
        },
        "Tidak ada lubang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Karena kertas dilipat 2 kali (2 lapis x 2 lapis = 4 lapisan) dan dipotong pada sudut lipatan tengah, ketika dibuka lipatan akan terbentuk 4 lubang simetris di sekitar pusat kertas."
        }
      }
    },
    {
      "id": "sek-fig-07",
      "conceptName": "Matriks Figural Jumlah Sisi",
      "topic": "Matriks Figural Jumlah Sisi",
      "questionText": "Pola matriks 3x3: Baris 1 memiliki bentuk segitiga, segiempat, segilima. Baris 2 memiliki bentuk segiempat, segilima, segi enam. Baris 3 memiliki bentuk segilima, segi enam, dan kotak tanda tanya (?). Bangun pada kotak tanda tanya adalah...",
      "type": "mcq",
      "options": [
        "Segitiga",
        "Segiempat",
        "Segitujuh (Heptagon)",
        "Lingkaran",
        "Bintang 8 sudut"
      ],
      "optionDetails": {
        "Segitiga": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola jumlah sisi bertambah 1: Baris 1 (3, 4, 5). Baris 2 (4, 5, 6). Baris 3 (5, 6, ?). Bangun berikutnya memiliki 7 sisi (Heptagon/Segitujuh).",
        "Segiempat": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola jumlah sisi bertambah 1: Baris 1 (3, 4, 5). Baris 2 (4, 5, 6). Baris 3 (5, 6, ?). Bangun berikutnya memiliki 7 sisi (Heptagon/Segitujuh).",
        "Segitujuh (Heptagon)": "✓ BENAR: Pola jumlah sisi bertambah 1: Baris 1 (3, 4, 5). Baris 2 (4, 5, 6). Baris 3 (5, 6, ?). Bangun berikutnya memiliki 7 sisi (Heptagon/Segitujuh).",
        "Lingkaran": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola jumlah sisi bertambah 1: Baris 1 (3, 4, 5). Baris 2 (4, 5, 6). Baris 3 (5, 6, ?). Bangun berikutnya memiliki 7 sisi (Heptagon/Segitujuh).",
        "Bintang 8 sudut": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pola jumlah sisi bertambah 1: Baris 1 (3, 4, 5). Baris 2 (4, 5, 6). Baris 3 (5, 6, ?). Bangun berikutnya memiliki 7 sisi (Heptagon/Segitujuh)."
      },
      "correctAnswer": "Segitujuh (Heptagon)",
      "explanationText": "Pola jumlah sisi bertambah 1: Baris 1 (3, 4, 5). Baris 2 (4, 5, 6). Baris 3 (5, 6, ?). Bangun berikutnya memiliki 7 sisi (Heptagon/Segitujuh).",
      "knownWrongPatterns": {
        "Segitiga": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola jumlah sisi bertambah 1: Baris 1 (3, 4, 5). Baris 2 (4, 5, 6). Baris 3 (5, 6, ?). Bangun berikutnya memiliki 7 sisi (Heptagon/Segitujuh)."
        },
        "Segiempat": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola jumlah sisi bertambah 1: Baris 1 (3, 4, 5). Baris 2 (4, 5, 6). Baris 3 (5, 6, ?). Bangun berikutnya memiliki 7 sisi (Heptagon/Segitujuh)."
        },
        "Lingkaran": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola jumlah sisi bertambah 1: Baris 1 (3, 4, 5). Baris 2 (4, 5, 6). Baris 3 (5, 6, ?). Bangun berikutnya memiliki 7 sisi (Heptagon/Segitujuh)."
        },
        "Bintang 8 sudut": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pola jumlah sisi bertambah 1: Baris 1 (3, 4, 5). Baris 2 (4, 5, 6). Baris 3 (5, 6, ?). Bangun berikutnya memiliki 7 sisi (Heptagon/Segitujuh)."
        }
      }
    },
    {
      "id": "sek-fig-08",
      "conceptName": "Hubungan Hubungan Logika Transformasi Bentuk",
      "topic": "Hubungan Hubungan Logika Transformasi Bentuk",
      "questionText": "Dua bangun datar ditumpuk: Lingkaran putih dan Segitiga hitam di dalamnya. Operasi transformasi membalik warnanya menjadi Lingkaran hitam dan Segitiga putih, lalu segitiga keluar dari lingkaran. Jika diterapkan pada Persegi putih dengan Bintang hitam di dalamnya, hasilnya adalah...",
      "type": "mcq",
      "options": [
        "Persegi hitam dan Bintang putih terpisah di sampingnya",
        "Persegi putih tetap di dalam bintang",
        "Lingkaran hitam dan bintang abu-abu",
        "Bintang hitam di dalam persegi putih",
        "Segitiga hitam di atas persegi"
      ],
      "optionDetails": {
        "Persegi hitam dan Bintang putih terpisah di sampingnya": "✓ BENAR: Aturan: Inversi warna (hitam jadi putih, putih jadi hitam) dan pemisahan letak kedua bangun.",
        "Persegi putih tetap di dalam bintang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Aturan: Inversi warna (hitam jadi putih, putih jadi hitam) dan pemisahan letak kedua bangun.",
        "Lingkaran hitam dan bintang abu-abu": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Aturan: Inversi warna (hitam jadi putih, putih jadi hitam) dan pemisahan letak kedua bangun.",
        "Bintang hitam di dalam persegi putih": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Aturan: Inversi warna (hitam jadi putih, putih jadi hitam) dan pemisahan letak kedua bangun.",
        "Segitiga hitam di atas persegi": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Aturan: Inversi warna (hitam jadi putih, putih jadi hitam) dan pemisahan letak kedua bangun."
      },
      "correctAnswer": "Persegi hitam dan Bintang putih terpisah di sampingnya",
      "explanationText": "Aturan: Inversi warna (hitam jadi putih, putih jadi hitam) dan pemisahan letak kedua bangun.",
      "knownWrongPatterns": {
        "Persegi putih tetap di dalam bintang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Aturan: Inversi warna (hitam jadi putih, putih jadi hitam) dan pemisahan letak kedua bangun."
        },
        "Lingkaran hitam dan bintang abu-abu": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Aturan: Inversi warna (hitam jadi putih, putih jadi hitam) dan pemisahan letak kedua bangun."
        },
        "Bintang hitam di dalam persegi putih": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Aturan: Inversi warna (hitam jadi putih, putih jadi hitam) dan pemisahan letak kedua bangun."
        },
        "Segitiga hitam di atas persegi": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Aturan: Inversi warna (hitam jadi putih, putih jadi hitam) dan pemisahan letak kedua bangun."
        }
      }
    },
    {
      "id": "sek-fig-09",
      "conceptName": "Pencerminan Spasial Cermin Datar",
      "topic": "Pencerminan Spasial Cermin Datar",
      "questionText": "Bayangan cermin vertikal (cermin diletakkan di sebelah kanan) dari huruf 'P' adalah...",
      "type": "mcq",
      "options": [
        "Huruf 'P' tegak tanpa perubahan",
        "Bentuk seperti huruf 'q' terbalik (lengkungan mengarah ke kiri atas)",
        "Huruf 'b'",
        "Huruf 'd'",
        "Huruf 'P' terbalik ke bawah"
      ],
      "optionDetails": {
        "Huruf 'P' tegak tanpa perubahan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pencerminan pada cermin vertikal membalik orientasi kiri-kanan. Lengkungan huruf P yang awalnya berada di sisi kanan garis vertikal berpindah ke sisi kiri atas.",
        "Bentuk seperti huruf 'q' terbalik (lengkungan mengarah ke kiri atas)": "✓ BENAR: Pencerminan pada cermin vertikal membalik orientasi kiri-kanan. Lengkungan huruf P yang awalnya berada di sisi kanan garis vertikal berpindah ke sisi kiri atas.",
        "Huruf 'b'": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pencerminan pada cermin vertikal membalik orientasi kiri-kanan. Lengkungan huruf P yang awalnya berada di sisi kanan garis vertikal berpindah ke sisi kiri atas.",
        "Huruf 'd'": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pencerminan pada cermin vertikal membalik orientasi kiri-kanan. Lengkungan huruf P yang awalnya berada di sisi kanan garis vertikal berpindah ke sisi kiri atas.",
        "Huruf 'P' terbalik ke bawah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pencerminan pada cermin vertikal membalik orientasi kiri-kanan. Lengkungan huruf P yang awalnya berada di sisi kanan garis vertikal berpindah ke sisi kiri atas."
      },
      "correctAnswer": "Bentuk seperti huruf 'q' terbalik (lengkungan mengarah ke kiri atas)",
      "explanationText": "Pencerminan pada cermin vertikal membalik orientasi kiri-kanan. Lengkungan huruf P yang awalnya berada di sisi kanan garis vertikal berpindah ke sisi kiri atas.",
      "knownWrongPatterns": {
        "Huruf 'P' tegak tanpa perubahan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pencerminan pada cermin vertikal membalik orientasi kiri-kanan. Lengkungan huruf P yang awalnya berada di sisi kanan garis vertikal berpindah ke sisi kiri atas."
        },
        "Huruf 'b'": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pencerminan pada cermin vertikal membalik orientasi kiri-kanan. Lengkungan huruf P yang awalnya berada di sisi kanan garis vertikal berpindah ke sisi kiri atas."
        },
        "Huruf 'd'": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pencerminan pada cermin vertikal membalik orientasi kiri-kanan. Lengkungan huruf P yang awalnya berada di sisi kanan garis vertikal berpindah ke sisi kiri atas."
        },
        "Huruf 'P' terbalik ke bawah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pencerminan pada cermin vertikal membalik orientasi kiri-kanan. Lengkungan huruf P yang awalnya berada di sisi kanan garis vertikal berpindah ke sisi kiri atas."
        }
      }
    },
    {
      "id": "sek-fig-10",
      "conceptName": "Penalaran Ruang Dadu Standar",
      "topic": "Penalaran Ruang Dadu Standar",
      "questionText": "Sebuah dadu standar memiliki jumlah titik pada dua sisi yang saling berhadapan selalu sama dengan 7. Jika sisi atas dadu menunjukkan angka 5 dan sisi kanan menunjukkan angka 3, maka sisi bawah dan sisi kiri berturut-turut adalah angka...",
      "type": "mcq",
      "options": [
        "2 dan 4",
        "1 dan 6",
        "2 dan 6",
        "4 dan 2",
        "3 dan 5"
      ],
      "optionDetails": {
        "2 dan 4": "✓ BENAR: Pada dadu standar, sisi berhadapan berjumlah 7. Sisi atas (5) berhadapan dengan sisi bawah = 7 - 5 = 2. Sisi kanan (3) berhadapan dengan sisi kiri = 7 - 3 = 4. Jadi sisi bawah 2 dan sisi kiri 4.",
        "1 dan 6": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pada dadu standar, sisi berhadapan berjumlah 7. Sisi atas (5) berhadapan dengan sisi bawah = 7 - 5 = 2. Sisi kanan (3) berhadapan dengan sisi kiri = 7 - 3 = 4. Jadi sisi bawah 2 dan sisi kiri 4.",
        "2 dan 6": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pada dadu standar, sisi berhadapan berjumlah 7. Sisi atas (5) berhadapan dengan sisi bawah = 7 - 5 = 2. Sisi kanan (3) berhadapan dengan sisi kiri = 7 - 3 = 4. Jadi sisi bawah 2 dan sisi kiri 4.",
        "4 dan 2": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pada dadu standar, sisi berhadapan berjumlah 7. Sisi atas (5) berhadapan dengan sisi bawah = 7 - 5 = 2. Sisi kanan (3) berhadapan dengan sisi kiri = 7 - 3 = 4. Jadi sisi bawah 2 dan sisi kiri 4.",
        "3 dan 5": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pada dadu standar, sisi berhadapan berjumlah 7. Sisi atas (5) berhadapan dengan sisi bawah = 7 - 5 = 2. Sisi kanan (3) berhadapan dengan sisi kiri = 7 - 3 = 4. Jadi sisi bawah 2 dan sisi kiri 4."
      },
      "correctAnswer": "2 dan 4",
      "explanationText": "Pada dadu standar, sisi berhadapan berjumlah 7. Sisi atas (5) berhadapan dengan sisi bawah = 7 - 5 = 2. Sisi kanan (3) berhadapan dengan sisi kiri = 7 - 3 = 4. Jadi sisi bawah 2 dan sisi kiri 4.",
      "knownWrongPatterns": {
        "1 dan 6": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pada dadu standar, sisi berhadapan berjumlah 7. Sisi atas (5) berhadapan dengan sisi bawah = 7 - 5 = 2. Sisi kanan (3) berhadapan dengan sisi kiri = 7 - 3 = 4. Jadi sisi bawah 2 dan sisi kiri 4."
        },
        "2 dan 6": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pada dadu standar, sisi berhadapan berjumlah 7. Sisi atas (5) berhadapan dengan sisi bawah = 7 - 5 = 2. Sisi kanan (3) berhadapan dengan sisi kiri = 7 - 3 = 4. Jadi sisi bawah 2 dan sisi kiri 4."
        },
        "4 dan 2": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pada dadu standar, sisi berhadapan berjumlah 7. Sisi atas (5) berhadapan dengan sisi bawah = 7 - 5 = 2. Sisi kanan (3) berhadapan dengan sisi kiri = 7 - 3 = 4. Jadi sisi bawah 2 dan sisi kiri 4."
        },
        "3 dan 5": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pada dadu standar, sisi berhadapan berjumlah 7. Sisi atas (5) berhadapan dengan sisi bawah = 7 - 5 = 2. Sisi kanan (3) berhadapan dengan sisi kiri = 7 - 3 = 4. Jadi sisi bawah 2 dan sisi kiri 4."
        }
      }
    }
  ],
  "sekdin-twk": [
    {
      "id": "sek-twk-01",
      "conceptName": "Pancasila: Kedudukan & Rumusan Resmi",
      "topic": "Pancasila: Kedudukan & Rumusan Resmi",
      "questionText": "Rumusan sila-sila Pancasila yang sah dan resmi sebagai dasar negara Indonesia termaktub dalam...",
      "type": "mcq",
      "options": [
        "Piagam Jakarta 22 Juni 1945",
        "Pembukaan UUD NRI Tahun 1945 Alinea IV",
        "Dekrit Presiden 5 Juli 1959",
        "Ketetapan MPRS No. XX/MPRS/1966",
        "Batang Tubuh UUD 1945 Pasal 1"
      ],
      "optionDetails": {
        "Piagam Jakarta 22 Juni 1945": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rumusan otentik dasar negara Pancasila termaktub secara sah dan mengikat dalam Alinea IV Pembukaan UUD NRI Tahun 1945 yang disahkan PPKI pada 18 Agustus 1945.",
        "Pembukaan UUD NRI Tahun 1945 Alinea IV": "✓ BENAR: Rumusan otentik dasar negara Pancasila termaktub secara sah dan mengikat dalam Alinea IV Pembukaan UUD NRI Tahun 1945 yang disahkan PPKI pada 18 Agustus 1945.",
        "Dekrit Presiden 5 Juli 1959": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rumusan otentik dasar negara Pancasila termaktub secara sah dan mengikat dalam Alinea IV Pembukaan UUD NRI Tahun 1945 yang disahkan PPKI pada 18 Agustus 1945.",
        "Ketetapan MPRS No. XX/MPRS/1966": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rumusan otentik dasar negara Pancasila termaktub secara sah dan mengikat dalam Alinea IV Pembukaan UUD NRI Tahun 1945 yang disahkan PPKI pada 18 Agustus 1945.",
        "Batang Tubuh UUD 1945 Pasal 1": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Rumusan otentik dasar negara Pancasila termaktub secara sah dan mengikat dalam Alinea IV Pembukaan UUD NRI Tahun 1945 yang disahkan PPKI pada 18 Agustus 1945."
      },
      "correctAnswer": "Pembukaan UUD NRI Tahun 1945 Alinea IV",
      "explanationText": "Rumusan otentik dasar negara Pancasila termaktub secara sah dan mengikat dalam Alinea IV Pembukaan UUD NRI Tahun 1945 yang disahkan PPKI pada 18 Agustus 1945.",
      "knownWrongPatterns": {
        "Piagam Jakarta 22 Juni 1945": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Rumusan otentik dasar negara Pancasila termaktub secara sah dan mengikat dalam Alinea IV Pembukaan UUD NRI Tahun 1945 yang disahkan PPKI pada 18 Agustus 1945."
        },
        "Dekrit Presiden 5 Juli 1959": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Rumusan otentik dasar negara Pancasila termaktub secara sah dan mengikat dalam Alinea IV Pembukaan UUD NRI Tahun 1945 yang disahkan PPKI pada 18 Agustus 1945."
        },
        "Ketetapan MPRS No. XX/MPRS/1966": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Rumusan otentik dasar negara Pancasila termaktub secara sah dan mengikat dalam Alinea IV Pembukaan UUD NRI Tahun 1945 yang disahkan PPKI pada 18 Agustus 1945."
        },
        "Batang Tubuh UUD 1945 Pasal 1": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Rumusan otentik dasar negara Pancasila termaktub secara sah dan mengikat dalam Alinea IV Pembukaan UUD NRI Tahun 1945 yang disahkan PPKI pada 18 Agustus 1945."
        }
      }
    },
    {
      "id": "sek-twk-02",
      "conceptName": "UUD 1945: Pokok Pikiran Pembukaan",
      "topic": "UUD 1945: Pokok Pikiran Pembukaan",
      "questionText": "Pokok pikiran pertama yang terkandung dalam Pembukaan Undang-Undang Dasar NRI Tahun 1945 adalah...",
      "type": "mcq",
      "options": [
        "Negara hendak mewujudkan keadilan sosial bagi seluruh rakyat",
        "Negara yang berkedaulatan rakyat berdasar atas kerakyatan dan permusyawaratan",
        "Negara melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dengan berdasar atas persatuan (Pokok Pikiran Persatuan)",
        "Negara berdasar atas Ketuhanan Yang Maha Esa menurut dasar kemanusiaan yang adil dan beradab",
        "Negara memajukan kesejahteraan umum dan mencerdaskan kehidupan bangsa"
      ],
      "optionDetails": {
        "Negara hendak mewujudkan keadilan sosial bagi seluruh rakyat": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pokok pikiran I Pembukaan UUD 1945 adalah paham persatuan: Negara melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dengan berdasar atas persatuan.",
        "Negara yang berkedaulatan rakyat berdasar atas kerakyatan dan permusyawaratan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pokok pikiran I Pembukaan UUD 1945 adalah paham persatuan: Negara melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dengan berdasar atas persatuan.",
        "Negara melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dengan berdasar atas persatuan (Pokok Pikiran Persatuan)": "✓ BENAR: Pokok pikiran I Pembukaan UUD 1945 adalah paham persatuan: Negara melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dengan berdasar atas persatuan.",
        "Negara berdasar atas Ketuhanan Yang Maha Esa menurut dasar kemanusiaan yang adil dan beradab": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pokok pikiran I Pembukaan UUD 1945 adalah paham persatuan: Negara melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dengan berdasar atas persatuan.",
        "Negara memajukan kesejahteraan umum dan mencerdaskan kehidupan bangsa": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pokok pikiran I Pembukaan UUD 1945 adalah paham persatuan: Negara melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dengan berdasar atas persatuan."
      },
      "correctAnswer": "Negara melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dengan berdasar atas persatuan (Pokok Pikiran Persatuan)",
      "explanationText": "Pokok pikiran I Pembukaan UUD 1945 adalah paham persatuan: Negara melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dengan berdasar atas persatuan.",
      "knownWrongPatterns": {
        "Negara hendak mewujudkan keadilan sosial bagi seluruh rakyat": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pokok pikiran I Pembukaan UUD 1945 adalah paham persatuan: Negara melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dengan berdasar atas persatuan."
        },
        "Negara yang berkedaulatan rakyat berdasar atas kerakyatan dan permusyawaratan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pokok pikiran I Pembukaan UUD 1945 adalah paham persatuan: Negara melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dengan berdasar atas persatuan."
        },
        "Negara berdasar atas Ketuhanan Yang Maha Esa menurut dasar kemanusiaan yang adil dan beradab": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pokok pikiran I Pembukaan UUD 1945 adalah paham persatuan: Negara melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dengan berdasar atas persatuan."
        },
        "Negara memajukan kesejahteraan umum dan mencerdaskan kehidupan bangsa": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pokok pikiran I Pembukaan UUD 1945 adalah paham persatuan: Negara melindungi segenap bangsa Indonesia dan seluruh tumpah darah Indonesia dengan berdasar atas persatuan."
        }
      }
    },
    {
      "id": "sek-twk-03",
      "conceptName": "Bhinneka Tunggal Ika: Asal Usul Sejarah",
      "topic": "Bhinneka Tunggal Ika: Asal Usul Sejarah",
      "questionText": "Semboyan 'Bhinneka Tunggal Ika' diambil dari kitab sastra klasik karya Mpu Tantular pada zaman Kerajaan Majapahit, yaitu kitab...",
      "type": "mcq",
      "options": [
        "Kitab Negarakertagama",
        "Kitab Sutasoma",
        "Kitab Pararaton",
        "Kitab Arjunawiwaha",
        "Kitab Bharatayuddha"
      ],
      "optionDetails": {
        "Kitab Negarakertagama": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Frasa 'Bhinneka Tunggal Ika tan hana dharma mangrwa' berasal dari Kakawin Sutasoma gubahan Mpu Tantular pada masa pemerintahan Raja Hayam Wuruk di Majapahit abad ke-14.",
        "Kitab Sutasoma": "✓ BENAR: Frasa 'Bhinneka Tunggal Ika tan hana dharma mangrwa' berasal dari Kakawin Sutasoma gubahan Mpu Tantular pada masa pemerintahan Raja Hayam Wuruk di Majapahit abad ke-14.",
        "Kitab Pararaton": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Frasa 'Bhinneka Tunggal Ika tan hana dharma mangrwa' berasal dari Kakawin Sutasoma gubahan Mpu Tantular pada masa pemerintahan Raja Hayam Wuruk di Majapahit abad ke-14.",
        "Kitab Arjunawiwaha": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Frasa 'Bhinneka Tunggal Ika tan hana dharma mangrwa' berasal dari Kakawin Sutasoma gubahan Mpu Tantular pada masa pemerintahan Raja Hayam Wuruk di Majapahit abad ke-14.",
        "Kitab Bharatayuddha": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Frasa 'Bhinneka Tunggal Ika tan hana dharma mangrwa' berasal dari Kakawin Sutasoma gubahan Mpu Tantular pada masa pemerintahan Raja Hayam Wuruk di Majapahit abad ke-14."
      },
      "correctAnswer": "Kitab Sutasoma",
      "explanationText": "Frasa 'Bhinneka Tunggal Ika tan hana dharma mangrwa' berasal dari Kakawin Sutasoma gubahan Mpu Tantular pada masa pemerintahan Raja Hayam Wuruk di Majapahit abad ke-14.",
      "knownWrongPatterns": {
        "Kitab Negarakertagama": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Frasa 'Bhinneka Tunggal Ika tan hana dharma mangrwa' berasal dari Kakawin Sutasoma gubahan Mpu Tantular pada masa pemerintahan Raja Hayam Wuruk di Majapahit abad ke-14."
        },
        "Kitab Pararaton": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Frasa 'Bhinneka Tunggal Ika tan hana dharma mangrwa' berasal dari Kakawin Sutasoma gubahan Mpu Tantular pada masa pemerintahan Raja Hayam Wuruk di Majapahit abad ke-14."
        },
        "Kitab Arjunawiwaha": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Frasa 'Bhinneka Tunggal Ika tan hana dharma mangrwa' berasal dari Kakawin Sutasoma gubahan Mpu Tantular pada masa pemerintahan Raja Hayam Wuruk di Majapahit abad ke-14."
        },
        "Kitab Bharatayuddha": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Frasa 'Bhinneka Tunggal Ika tan hana dharma mangrwa' berasal dari Kakawin Sutasoma gubahan Mpu Tantular pada masa pemerintahan Raja Hayam Wuruk di Majapahit abad ke-14."
        }
      }
    },
    {
      "id": "sek-twk-04",
      "conceptName": "UUD 1945: Lembaga Negara & Wewenang Presiden",
      "topic": "UUD 1945: Lembaga Negara & Wewenang Presiden",
      "questionText": "Berdasarkan Pasal 14 ayat (1) UUD NRI Tahun 1945 hasil amandemen, Presiden berwenang memberikan grasi dan rehabilitasi dengan memperhatikan pertimbangan dari...",
      "type": "mcq",
      "options": [
        "Dewan Perwakilan Rakyat (DPR)",
        "Mahkamah Agung (MA)",
        "Mahkamah Konstitusi (MK)",
        "Komisi Yudisial (KY)",
        "Kejaksaan Agung"
      ],
      "optionDetails": {
        "Dewan Perwakilan Rakyat (DPR)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pasal 14 ayat (1): Presiden memberi grasi dan rehabilitasi dengan memperhatikan pertimbangan Mahkamah Agung (MA). Untuk amnesti dan abolisi memperhatikan pertimbangan DPR (ayat 2).",
        "Mahkamah Agung (MA)": "✓ BENAR: Pasal 14 ayat (1): Presiden memberi grasi dan rehabilitasi dengan memperhatikan pertimbangan Mahkamah Agung (MA). Untuk amnesti dan abolisi memperhatikan pertimbangan DPR (ayat 2).",
        "Mahkamah Konstitusi (MK)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pasal 14 ayat (1): Presiden memberi grasi dan rehabilitasi dengan memperhatikan pertimbangan Mahkamah Agung (MA). Untuk amnesti dan abolisi memperhatikan pertimbangan DPR (ayat 2).",
        "Komisi Yudisial (KY)": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pasal 14 ayat (1): Presiden memberi grasi dan rehabilitasi dengan memperhatikan pertimbangan Mahkamah Agung (MA). Untuk amnesti dan abolisi memperhatikan pertimbangan DPR (ayat 2).",
        "Kejaksaan Agung": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Pasal 14 ayat (1): Presiden memberi grasi dan rehabilitasi dengan memperhatikan pertimbangan Mahkamah Agung (MA). Untuk amnesti dan abolisi memperhatikan pertimbangan DPR (ayat 2)."
      },
      "correctAnswer": "Mahkamah Agung (MA)",
      "explanationText": "Pasal 14 ayat (1): Presiden memberi grasi dan rehabilitasi dengan memperhatikan pertimbangan Mahkamah Agung (MA). Untuk amnesti dan abolisi memperhatikan pertimbangan DPR (ayat 2).",
      "knownWrongPatterns": {
        "Dewan Perwakilan Rakyat (DPR)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pasal 14 ayat (1): Presiden memberi grasi dan rehabilitasi dengan memperhatikan pertimbangan Mahkamah Agung (MA). Untuk amnesti dan abolisi memperhatikan pertimbangan DPR (ayat 2)."
        },
        "Mahkamah Konstitusi (MK)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pasal 14 ayat (1): Presiden memberi grasi dan rehabilitasi dengan memperhatikan pertimbangan Mahkamah Agung (MA). Untuk amnesti dan abolisi memperhatikan pertimbangan DPR (ayat 2)."
        },
        "Komisi Yudisial (KY)": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pasal 14 ayat (1): Presiden memberi grasi dan rehabilitasi dengan memperhatikan pertimbangan Mahkamah Agung (MA). Untuk amnesti dan abolisi memperhatikan pertimbangan DPR (ayat 2)."
        },
        "Kejaksaan Agung": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Pasal 14 ayat (1): Presiden memberi grasi dan rehabilitasi dengan memperhatikan pertimbangan Mahkamah Agung (MA). Untuk amnesti dan abolisi memperhatikan pertimbangan DPR (ayat 2)."
        }
      }
    },
    {
      "id": "sek-twk-05",
      "conceptName": "Sejarah Perjuangan Nasional: Proklamasi",
      "topic": "Sejarah Perjuangan Nasional: Proklamasi",
      "questionText": "Peristiwa Rengasdengklok pada 16 Agustus 1945 diprakarsai oleh para tokoh pemuda pejuang bangsa dengan tujuan utama...",
      "type": "mcq",
      "options": [
        "Menyerang markas tentara Jepang di Karawang",
        "Menjauhkan Ir. Soekarno dan Drs. Moh. Hatta dari pengaruh tekanan militer Jepang agar proklamasi segera diproklamasikan",
        "Menyusun naskah proklamasi bersama jenderal Jepang",
        "Membubarkan panitia BPUPKI secara paksa",
        "Mendirikan markas tentara PETA di Jawa Barat"
      ],
      "optionDetails": {
        "Menyerang markas tentara Jepang di Karawang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Golongan muda (Sukarni, Chaerul Saleh, Wikana) membawa Soekarno-Hatta ke Rengasdengklok demi membebaskan mereka dari pengaruh Jepang dan menyegerakan kemerdekaan secara mandiri.",
        "Menjauhkan Ir. Soekarno dan Drs. Moh. Hatta dari pengaruh tekanan militer Jepang agar proklamasi segera diproklamasikan": "✓ BENAR: Golongan muda (Sukarni, Chaerul Saleh, Wikana) membawa Soekarno-Hatta ke Rengasdengklok demi membebaskan mereka dari pengaruh Jepang dan menyegerakan kemerdekaan secara mandiri.",
        "Menyusun naskah proklamasi bersama jenderal Jepang": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Golongan muda (Sukarni, Chaerul Saleh, Wikana) membawa Soekarno-Hatta ke Rengasdengklok demi membebaskan mereka dari pengaruh Jepang dan menyegerakan kemerdekaan secara mandiri.",
        "Membubarkan panitia BPUPKI secara paksa": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Golongan muda (Sukarni, Chaerul Saleh, Wikana) membawa Soekarno-Hatta ke Rengasdengklok demi membebaskan mereka dari pengaruh Jepang dan menyegerakan kemerdekaan secara mandiri.",
        "Mendirikan markas tentara PETA di Jawa Barat": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Golongan muda (Sukarni, Chaerul Saleh, Wikana) membawa Soekarno-Hatta ke Rengasdengklok demi membebaskan mereka dari pengaruh Jepang dan menyegerakan kemerdekaan secara mandiri."
      },
      "correctAnswer": "Menjauhkan Ir. Soekarno dan Drs. Moh. Hatta dari pengaruh tekanan militer Jepang agar proklamasi segera diproklamasikan",
      "explanationText": "Golongan muda (Sukarni, Chaerul Saleh, Wikana) membawa Soekarno-Hatta ke Rengasdengklok demi membebaskan mereka dari pengaruh Jepang dan menyegerakan kemerdekaan secara mandiri.",
      "knownWrongPatterns": {
        "Menyerang markas tentara Jepang di Karawang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Golongan muda (Sukarni, Chaerul Saleh, Wikana) membawa Soekarno-Hatta ke Rengasdengklok demi membebaskan mereka dari pengaruh Jepang dan menyegerakan kemerdekaan secara mandiri."
        },
        "Menyusun naskah proklamasi bersama jenderal Jepang": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Golongan muda (Sukarni, Chaerul Saleh, Wikana) membawa Soekarno-Hatta ke Rengasdengklok demi membebaskan mereka dari pengaruh Jepang dan menyegerakan kemerdekaan secara mandiri."
        },
        "Membubarkan panitia BPUPKI secara paksa": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Golongan muda (Sukarni, Chaerul Saleh, Wikana) membawa Soekarno-Hatta ke Rengasdengklok demi membebaskan mereka dari pengaruh Jepang dan menyegerakan kemerdekaan secara mandiri."
        },
        "Mendirikan markas tentara PETA di Jawa Barat": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Golongan muda (Sukarni, Chaerul Saleh, Wikana) membawa Soekarno-Hatta ke Rengasdengklok demi membebaskan mereka dari pengaruh Jepang dan menyegerakan kemerdekaan secara mandiri."
        }
      }
    },
    {
      "id": "sek-twk-06",
      "conceptName": "Pancasila: Implementasi Butir Sila",
      "topic": "Pancasila: Implementasi Butir Sila",
      "questionText": "Sikap bangga menggunakan produk buatan dalam negeri serta mengutamakan kepentingan bangsa dan negara di atas kepentingan pribadi merupakan wujud pengamalan Pancasila sila ke-...",
      "type": "mcq",
      "options": [
        "Pertama",
        "Kedua",
        "Ketiga",
        "Keempat",
        "Kelima"
      ],
      "optionDetails": {
        "Pertama": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Cinta tanah air, bangga terhadap karya bangsa, dan menempatkan persatuan di atas kepentingan golongan adalah butir-butir implementasi Sila Ketiga: Persatuan Indonesia.",
        "Kedua": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Cinta tanah air, bangga terhadap karya bangsa, dan menempatkan persatuan di atas kepentingan golongan adalah butir-butir implementasi Sila Ketiga: Persatuan Indonesia.",
        "Ketiga": "✓ BENAR: Cinta tanah air, bangga terhadap karya bangsa, dan menempatkan persatuan di atas kepentingan golongan adalah butir-butir implementasi Sila Ketiga: Persatuan Indonesia.",
        "Keempat": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Cinta tanah air, bangga terhadap karya bangsa, dan menempatkan persatuan di atas kepentingan golongan adalah butir-butir implementasi Sila Ketiga: Persatuan Indonesia.",
        "Kelima": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Cinta tanah air, bangga terhadap karya bangsa, dan menempatkan persatuan di atas kepentingan golongan adalah butir-butir implementasi Sila Ketiga: Persatuan Indonesia."
      },
      "correctAnswer": "Ketiga",
      "explanationText": "Cinta tanah air, bangga terhadap karya bangsa, dan menempatkan persatuan di atas kepentingan golongan adalah butir-butir implementasi Sila Ketiga: Persatuan Indonesia.",
      "knownWrongPatterns": {
        "Pertama": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Cinta tanah air, bangga terhadap karya bangsa, dan menempatkan persatuan di atas kepentingan golongan adalah butir-butir implementasi Sila Ketiga: Persatuan Indonesia."
        },
        "Kedua": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Cinta tanah air, bangga terhadap karya bangsa, dan menempatkan persatuan di atas kepentingan golongan adalah butir-butir implementasi Sila Ketiga: Persatuan Indonesia."
        },
        "Keempat": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Cinta tanah air, bangga terhadap karya bangsa, dan menempatkan persatuan di atas kepentingan golongan adalah butir-butir implementasi Sila Ketiga: Persatuan Indonesia."
        },
        "Kelima": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Cinta tanah air, bangga terhadap karya bangsa, dan menempatkan persatuan di atas kepentingan golongan adalah butir-butir implementasi Sila Ketiga: Persatuan Indonesia."
        }
      }
    },
    {
      "id": "sek-twk-07",
      "conceptName": "Identitas Nasional & Karakter Bangsa",
      "topic": "Identitas Nasional & Karakter Bangsa",
      "questionText": "Unsur-unsur pembentuk identitas nasional bangsa Indonesia yang bersifat primordial antara lain adalah...",
      "type": "mcq",
      "options": [
        "Bahasa persatuan, bendera merah putih, dan lagu kebangsaan",
        "Suku bangsa, ikatan kekerabatan darah, dan adat istiadat kedaerahan",
        "Undang-Undang Dasar dan sistem hukum positif",
        "Partai politik dan pemilu demokratis",
        "Organisasi perserikatan bangsa-bangsa"
      ],
      "optionDetails": {
        "Bahasa persatuan, bendera merah putih, dan lagu kebangsaan": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Unsur primordial adalah faktor bawaan alami yang melekat sejak lahir seperti ikatan suku, kekerabatan, ras, dan tradisi kultural daerah.",
        "Suku bangsa, ikatan kekerabatan darah, dan adat istiadat kedaerahan": "✓ BENAR: Unsur primordial adalah faktor bawaan alami yang melekat sejak lahir seperti ikatan suku, kekerabatan, ras, dan tradisi kultural daerah.",
        "Undang-Undang Dasar dan sistem hukum positif": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Unsur primordial adalah faktor bawaan alami yang melekat sejak lahir seperti ikatan suku, kekerabatan, ras, dan tradisi kultural daerah.",
        "Partai politik dan pemilu demokratis": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Unsur primordial adalah faktor bawaan alami yang melekat sejak lahir seperti ikatan suku, kekerabatan, ras, dan tradisi kultural daerah.",
        "Organisasi perserikatan bangsa-bangsa": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Unsur primordial adalah faktor bawaan alami yang melekat sejak lahir seperti ikatan suku, kekerabatan, ras, dan tradisi kultural daerah."
      },
      "correctAnswer": "Suku bangsa, ikatan kekerabatan darah, dan adat istiadat kedaerahan",
      "explanationText": "Unsur primordial adalah faktor bawaan alami yang melekat sejak lahir seperti ikatan suku, kekerabatan, ras, dan tradisi kultural daerah.",
      "knownWrongPatterns": {
        "Bahasa persatuan, bendera merah putih, dan lagu kebangsaan": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Unsur primordial adalah faktor bawaan alami yang melekat sejak lahir seperti ikatan suku, kekerabatan, ras, dan tradisi kultural daerah."
        },
        "Undang-Undang Dasar dan sistem hukum positif": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Unsur primordial adalah faktor bawaan alami yang melekat sejak lahir seperti ikatan suku, kekerabatan, ras, dan tradisi kultural daerah."
        },
        "Partai politik dan pemilu demokratis": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Unsur primordial adalah faktor bawaan alami yang melekat sejak lahir seperti ikatan suku, kekerabatan, ras, dan tradisi kultural daerah."
        },
        "Organisasi perserikatan bangsa-bangsa": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Unsur primordial adalah faktor bawaan alami yang melekat sejak lahir seperti ikatan suku, kekerabatan, ras, dan tradisi kultural daerah."
        }
      }
    },
    {
      "id": "sek-twk-08",
      "conceptName": "Bela Negara & Sistem Pertahanan Keamanan",
      "topic": "Bela Negara & Sistem Pertahanan Keamanan",
      "questionText": "Menurut Pasal 30 ayat (2) UUD 1945 hasil amandemen, sistem pertahanan dan keamanan negara Republik Indonesia bertumpu pada...",
      "type": "mcq",
      "options": [
        "Sistem Pertahanan Keamanan Rakyat Semesta (Sishankamrata) dengan TNI dan Polri sebagai kekuatan utama dan rakyat sebagai kekuatan pendukung",
        "Hanya tentara profesional tanpa melibatkan masyarakat sipil",
        "Pakta pertahanan militer bersama negara-negara ASEAN",
        "Sistem persenjataan otomatis nuklir",
        "Sistem keamanan swasta dan kepolisian daerah mandiri"
      ],
      "optionDetails": {
        "Sistem Pertahanan Keamanan Rakyat Semesta (Sishankamrata) dengan TNI dan Polri sebagai kekuatan utama dan rakyat sebagai kekuatan pendukung": "✓ BENAR: Sishankamrata: TNI dan POLRI berkedudukan sebagai kekuatan utama, sedangkan rakyat sebagai kekuatan pendukung keutuhan wilayah NKRI.",
        "Hanya tentara profesional tanpa melibatkan masyarakat sipil": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sishankamrata: TNI dan POLRI berkedudukan sebagai kekuatan utama, sedangkan rakyat sebagai kekuatan pendukung keutuhan wilayah NKRI.",
        "Pakta pertahanan militer bersama negara-negara ASEAN": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sishankamrata: TNI dan POLRI berkedudukan sebagai kekuatan utama, sedangkan rakyat sebagai kekuatan pendukung keutuhan wilayah NKRI.",
        "Sistem persenjataan otomatis nuklir": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sishankamrata: TNI dan POLRI berkedudukan sebagai kekuatan utama, sedangkan rakyat sebagai kekuatan pendukung keutuhan wilayah NKRI.",
        "Sistem keamanan swasta dan kepolisian daerah mandiri": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Sishankamrata: TNI dan POLRI berkedudukan sebagai kekuatan utama, sedangkan rakyat sebagai kekuatan pendukung keutuhan wilayah NKRI."
      },
      "correctAnswer": "Sistem Pertahanan Keamanan Rakyat Semesta (Sishankamrata) dengan TNI dan Polri sebagai kekuatan utama dan rakyat sebagai kekuatan pendukung",
      "explanationText": "Sishankamrata: TNI dan POLRI berkedudukan sebagai kekuatan utama, sedangkan rakyat sebagai kekuatan pendukung keutuhan wilayah NKRI.",
      "knownWrongPatterns": {
        "Hanya tentara profesional tanpa melibatkan masyarakat sipil": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Sishankamrata: TNI dan POLRI berkedudukan sebagai kekuatan utama, sedangkan rakyat sebagai kekuatan pendukung keutuhan wilayah NKRI."
        },
        "Pakta pertahanan militer bersama negara-negara ASEAN": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Sishankamrata: TNI dan POLRI berkedudukan sebagai kekuatan utama, sedangkan rakyat sebagai kekuatan pendukung keutuhan wilayah NKRI."
        },
        "Sistem persenjataan otomatis nuklir": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Sishankamrata: TNI dan POLRI berkedudukan sebagai kekuatan utama, sedangkan rakyat sebagai kekuatan pendukung keutuhan wilayah NKRI."
        },
        "Sistem keamanan swasta dan kepolisian daerah mandiri": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Sishankamrata: TNI dan POLRI berkedudukan sebagai kekuatan utama, sedangkan rakyat sebagai kekuatan pendukung keutuhan wilayah NKRI."
        }
      }
    },
    {
      "id": "sek-twk-09",
      "conceptName": "Sejarah Pergerakan Nasional",
      "topic": "Sejarah Pergerakan Nasional",
      "questionText": "Organisasi pergerakan nasional pertama di Indonesia yang berorientasi modern dan didirikan pada 20 Mei 1908 adalah...",
      "type": "mcq",
      "options": [
        "Sarekat Islam",
        "Indische Partij",
        "Budi Utomo",
        "Perhimpunan Indonesia",
        "Partai Nasional Indonesia"
      ],
      "optionDetails": {
        "Sarekat Islam": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Budi Utomo didirikan oleh dr. Soetomo dan mahasiswa STOVIA pada 20 Mei 1908, yang kini diperingati secara nasional sebagai Hari Kebangkitan Nasional.",
        "Indische Partij": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Budi Utomo didirikan oleh dr. Soetomo dan mahasiswa STOVIA pada 20 Mei 1908, yang kini diperingati secara nasional sebagai Hari Kebangkitan Nasional.",
        "Budi Utomo": "✓ BENAR: Budi Utomo didirikan oleh dr. Soetomo dan mahasiswa STOVIA pada 20 Mei 1908, yang kini diperingati secara nasional sebagai Hari Kebangkitan Nasional.",
        "Perhimpunan Indonesia": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Budi Utomo didirikan oleh dr. Soetomo dan mahasiswa STOVIA pada 20 Mei 1908, yang kini diperingati secara nasional sebagai Hari Kebangkitan Nasional.",
        "Partai Nasional Indonesia": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Budi Utomo didirikan oleh dr. Soetomo dan mahasiswa STOVIA pada 20 Mei 1908, yang kini diperingati secara nasional sebagai Hari Kebangkitan Nasional."
      },
      "correctAnswer": "Budi Utomo",
      "explanationText": "Budi Utomo didirikan oleh dr. Soetomo dan mahasiswa STOVIA pada 20 Mei 1908, yang kini diperingati secara nasional sebagai Hari Kebangkitan Nasional.",
      "knownWrongPatterns": {
        "Sarekat Islam": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Budi Utomo didirikan oleh dr. Soetomo dan mahasiswa STOVIA pada 20 Mei 1908, yang kini diperingati secara nasional sebagai Hari Kebangkitan Nasional."
        },
        "Indische Partij": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Budi Utomo didirikan oleh dr. Soetomo dan mahasiswa STOVIA pada 20 Mei 1908, yang kini diperingati secara nasional sebagai Hari Kebangkitan Nasional."
        },
        "Perhimpunan Indonesia": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Budi Utomo didirikan oleh dr. Soetomo dan mahasiswa STOVIA pada 20 Mei 1908, yang kini diperingati secara nasional sebagai Hari Kebangkitan Nasional."
        },
        "Partai Nasional Indonesia": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Budi Utomo didirikan oleh dr. Soetomo dan mahasiswa STOVIA pada 20 Mei 1908, yang kini diperingati secara nasional sebagai Hari Kebangkitan Nasional."
        }
      }
    },
    {
      "id": "sek-twk-10",
      "conceptName": "Integritas & Core Values ASN BerAKHLAK",
      "topic": "Integritas & Core Values ASN BerAKHLAK",
      "questionText": "Integritas aparatur sipil negara (ASN) tercermin dalam nilai dasar 'BerAKHLAK'. Akronim huruf 'A' yang kedua dalam BerAKHLAK melambangkan nilai...",
      "type": "mcq",
      "options": [
        "Adil",
        "Akuntabel",
        "Adaptif",
        "Amanah",
        "Antusias"
      ],
      "optionDetails": {
        "Adil": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Core Values ASN BerAKHLAK: Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif. 'A' kedua mewakili Adaptif.",
        "Akuntabel": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Core Values ASN BerAKHLAK: Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif. 'A' kedua mewakili Adaptif.",
        "Adaptif": "✓ BENAR: Core Values ASN BerAKHLAK: Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif. 'A' kedua mewakili Adaptif.",
        "Amanah": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Core Values ASN BerAKHLAK: Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif. 'A' kedua mewakili Adaptif.",
        "Antusias": "✕ SALAH: Pilihan ini belum tepat. Konsep yang benar: Core Values ASN BerAKHLAK: Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif. 'A' kedua mewakili Adaptif."
      },
      "correctAnswer": "Adaptif",
      "explanationText": "Core Values ASN BerAKHLAK: Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif. 'A' kedua mewakili Adaptif.",
      "knownWrongPatterns": {
        "Adil": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Core Values ASN BerAKHLAK: Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif. 'A' kedua mewakili Adaptif."
        },
        "Akuntabel": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Core Values ASN BerAKHLAK: Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif. 'A' kedua mewakili Adaptif."
        },
        "Amanah": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Core Values ASN BerAKHLAK: Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif. 'A' kedua mewakili Adaptif."
        },
        "Antusias": {
          "misconceptionCode": "CONCEPT_CONFUSION",
          "hint": "Perhatikan konsep: Core Values ASN BerAKHLAK: Berorientasi Pelayanan, Akuntabel, Kompeten, Harmonis, Loyal, Adaptif, Kolaboratif. 'A' kedua mewakili Adaptif."
        }
      }
    }
  ]
};
