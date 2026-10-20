import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-server";

const DEMO_USERS = [
  // 1. ADMINISTRATOR SEKOLAH
  {
    email: "admin@sekolah.sch.id",
    password: "password123",
    role: "admin",
    full_name: "Administrator Sekolah",
    status: "active",
  },

  // 2. TIM DEWAN GURU LENGKAP (12 GURU SESUAI STRUKTUR KURIKULUM RESMI)
  {
    email: "brio@gmail.com",
    password: "password123",
    role: "teacher",
    teacher_type: "homeroom",
    full_name: "Brio Pratama, S.Pd",
    homeroom_class: "Kelas 2-A (XI-A)",
    subject_name: "Bahasa Indonesia",
    nip: "198804152012011002",
    grade_level: "Kelas 1 & Kelas 2",
    status: "active",
  },
  {
    email: "guru@sekolah.sch.id",
    password: "password123",
    role: "teacher",
    teacher_type: "homeroom",
    full_name: "Dra. Sri Wahyuni",
    homeroom_class: "Kelas 2-B (XI-B)",
    subject_name: "Matematika",
    nip: "197508122000032001",
    grade_level: "Kelas 1, Kelas 2 & Kelas 3",
    status: "active",
  },
  {
    email: "sarah.annisa@sekolah.sch.id",
    password: "password123",
    role: "teacher",
    teacher_type: "subject",
    full_name: "Sarah Annisa, M.Pd",
    subject_name: "Bahasa Inggris",
    nip: "198902142014022003",
    grade_level: "Semua Jenjang (X, XI, XII)",
    status: "active",
  },
  {
    email: "guru.kimia@sekolah.sch.id",
    password: "password123",
    role: "teacher",
    teacher_type: "homeroom",
    full_name: "Dr. Hendra Wijaya, M.Si",
    homeroom_class: "Kelas 3-A (XII-A)",
    subject_name: "Fisika & IPA Terpadu",
    nip: "197805152003121004",
    grade_level: "Kelas 1 & Kelas 3",
    status: "active",
  },
  {
    email: "rina.marlina@sekolah.sch.id",
    password: "password123",
    role: "teacher",
    teacher_type: "subject",
    full_name: "Rina Marlina, S.Pd",
    subject_name: "Kimia & Biologi",
    nip: "198711032011012015",
    grade_level: "Kelas 1 & Kelas 2",
    status: "active",
  },
  {
    email: "rian.hidayat@sekolah.sch.id",
    password: "password123",
    role: "teacher",
    teacher_type: "subject",
    full_name: "Rian Hidayat, S.Kom, M.T",
    subject_name: "Informatika & Komputasi",
    nip: "199106252018011002",
    grade_level: "Kelas 1 & Kelas 2",
    status: "active",
  },
  {
    email: "guru.ekonomi@sekolah.sch.id",
    password: "password123",
    role: "teacher",
    teacher_type: "subject",
    full_name: "Siti Rahayu, S.E, M.Ak",
    subject_name: "Ekonomi & Akuntansi",
    nip: "198307192008012011",
    grade_level: "Kelas 2 & Kelas 3",
    status: "active",
  },
  {
    email: "guru.indo@sekolah.sch.id",
    password: "password123",
    role: "teacher",
    teacher_type: "subject",
    full_name: "Ahmad Fauzi, S.Sos, M.Pd",
    subject_name: "Sosiologi & IPS Terpadu",
    nip: "198203152006041005",
    grade_level: "Kelas 1, Kelas 2 & Kelas 3",
    status: "active",
  },
  {
    email: "bambang.hermanto@sekolah.sch.id",
    password: "password123",
    role: "teacher",
    teacher_type: "subject",
    full_name: "Bambang Hermanto, M.Pd",
    subject_name: "Geografi",
    nip: "197909182005011007",
    grade_level: "Kelas 1 & Kelas 2",
    status: "active",
  },
  {
    email: "m.subhan@sekolah.sch.id",
    password: "password123",
    role: "teacher",
    teacher_type: "subject",
    full_name: "Drs. M. Subhan",
    subject_name: "Pendidikan Pancasila (PPKn)",
    nip: "196803201994121001",
    grade_level: "Semua Jenjang",
    status: "active",
  },
  {
    email: "nurhayati@sekolah.sch.id",
    password: "password123",
    role: "teacher",
    teacher_type: "subject",
    full_name: "Dra. Nurhayati",
    subject_name: "Sejarah Indonesia",
    nip: "197104101997022002",
    grade_level: "Semua Jenjang",
    status: "active",
  },
  {
    email: "guru.sekdin@sekolah.sch.id",
    password: "password123",
    role: "teacher",
    teacher_type: "subject",
    full_name: "Bambang Sudarmono, M.Si",
    subject_name: "Persiapan Kedinasan (SEKDIN) & UTBK",
    nip: "198006202005011003",
    grade_level: "Kelas 3 (Kelas XII)",
    status: "active",
  },

  // 3. DATA SISWA REGULER (X, XI, XII)
  {
    email: "andi@sekolah.sch.id",
    password: "password123",
    role: "student",
    full_name: "Andi Pratama",
    nisn: "0081234567",
    class_name: "Kelas 2-A (XI-A)",
    grade_level: "SMA Kelas 11 (Fase F)",
    status: "active",
  },
  {
    email: "doni.s@sekolah.sch.id",
    password: "password123",
    role: "student",
    full_name: "Doni Setiawan",
    nisn: "0081234568",
    class_name: "Kelas 2-A (XI-A)",
    grade_level: "SMA Kelas 11 (Fase F)",
    status: "active",
  },
  {
    email: "siti.n@sekolah.sch.id",
    password: "password123",
    role: "student",
    full_name: "Siti Nurhaliza",
    nisn: "0081234569",
    class_name: "Kelas 2-A (XI-A)",
    grade_level: "SMA Kelas 11 (Fase F)",
    status: "active",
  },
  {
    email: "budi.s@sekolah.sch.id",
    password: "password123",
    role: "student",
    full_name: "Budi Santoso",
    nisn: "0081234570",
    class_name: "Kelas 2-B (XI-B)",
    grade_level: "SMA Kelas 11 (Fase F)",
    status: "active",
  },
  {
    email: "rina.w@sekolah.sch.id",
    password: "password123",
    role: "student",
    full_name: "Rina Wulandari",
    nisn: "0081234571",
    class_name: "Kelas 3-A (XII-A)",
    grade_level: "SMA Kelas 12 (Fase F)",
    status: "active",
  },
];

export async function POST() {
  try {
    const results = [];

    // Fetch existing users once
    const { data: existingUsers } = await supabaseAdmin.auth.admin.listUsers();

    // Create or update Demo Users in Supabase Auth
    for (const u of DEMO_USERS) {
      const userMetadata: Record<string, any> = {
        full_name: u.full_name,
        role: u.role,
        status: u.status || "active",
        is_active: u.status !== "inactive",
      };
      if ("class_name" in u) userMetadata.class_name = u.class_name;
      if ("grade_level" in u) userMetadata.grade_level = u.grade_level;
      if ("nisn" in u) userMetadata.nisn = u.nisn;
      if ("nip" in u) userMetadata.nip = u.nip;
      if ("teacher_type" in u) userMetadata.teacher_type = u.teacher_type;
      if ("homeroom_class" in u) userMetadata.homeroom_class = u.homeroom_class;
      if ("subject_name" in u) userMetadata.subject_name = u.subject_name;

      let user = existingUsers?.users?.find(
        (item) => item.email?.toLowerCase() === u.email.toLowerCase()
      );

      if (!user) {
        const { data: newUser, error: createErr } = await supabaseAdmin.auth.admin.createUser({
          email: u.email,
          password: u.password,
          email_confirm: true,
          user_metadata: userMetadata,
        });

        if (createErr) {
          results.push({ email: u.email, status: "error", error: createErr.message });
          continue;
        }
        user = newUser.user;
      } else {
        // Update user metadata & password to ensure consistency
        try {
          await supabaseAdmin.auth.admin.updateUserById(user.id, {
            password: u.password,
            user_metadata: userMetadata,
          });
        } catch (updateErr) {
          console.warn("Failed to update existing user metadata:", updateErr);
        }
      }

      if (user) {
        // Try inserting into public profiles if table exists
        try {
          await supabaseAdmin.from("profiles").upsert({
            user_id: user.id,
            role: u.role,
            full_name: u.full_name,
            email: u.email,
            status: u.status || "active",
          });
        } catch {
          // Table might not be created yet, but Auth is ready
        }

        results.push({
          email: u.email,
          role: u.role,
          full_name: u.full_name,
          status: "ready",
        });
      }
    }

    return NextResponse.json({
      success: true,
      message: `${results.length} Akun resmi sekolah (Admin, 12 Guru Lengkap, dan Siswa) berhasil disiapkan di Supabase Auth`,
      accounts: results,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Error";
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
