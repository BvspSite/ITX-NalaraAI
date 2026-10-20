"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Lock,
  GraduationCap,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Compass,
  Award,
  KeyRound,
  CheckCircle2,
  UserCheck,
  AlertTriangle,
  School,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { supabase } from "@/lib/supabase";

const ALL_TEACHERS_LIST = [
  { email: "brio@gmail.com", name: "Brio Pratama, S.Pd", role: "Wali Kelas XI-A & B. Indonesia" },
  { email: "guru@sekolah.sch.id", name: "Dra. Sri Wahyuni", role: "Wali Kelas XI-B & Matematika" },
  { email: "sarah.annisa@sekolah.sch.id", name: "Sarah Annisa, M.Pd", role: "Bahasa Inggris" },
  { email: "guru.kimia@sekolah.sch.id", name: "Dr. Hendra Wijaya, M.Si", role: "Wali Kelas XII-A & Fisika" },
  { email: "rina.marlina@sekolah.sch.id", name: "Rina Marlina, S.Pd", role: "Kimia & Biologi" },
  { email: "rian.hidayat@sekolah.sch.id", name: "Rian Hidayat, S.Kom, M.T", role: "Informatika & Komputasi" },
  { email: "guru.ekonomi@sekolah.sch.id", name: "Siti Rahayu, S.E, M.Ak", role: "Ekonomi & Akuntansi" },
  { email: "guru.indo@sekolah.sch.id", name: "Ahmad Fauzi, S.Sos, M.Pd", role: "Sosiologi & IPS" },
  { email: "bambang.hermanto@sekolah.sch.id", name: "Bambang Hermanto, M.Pd", role: "Geografi" },
  { email: "m.subhan@sekolah.sch.id", name: "Drs. M. Subhan", role: "Pendidikan Pancasila (PPKn)" },
  { email: "nurhayati@sekolah.sch.id", name: "Dra. Nurhayati", role: "Sejarah Indonesia" },
  { email: "guru.sekdin@sekolah.sch.id", name: "Bambang Sudarmono, M.Si", role: "Kedinasan & UTBK" },
];

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [seeding, setSeeding] = useState(false);
  const [seedSuccess, setSeedSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedTeacherEmail, setSelectedTeacherEmail] = useState("");

  // Check URL query parameters for deactivated redirection
  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("error") === "account_deactivated") {
        const deactUser = params.get("email") || "Akun Anda";
        setError(`Akses Ditolak: Akun Guru (${decodeURIComponent(deactUser)}) telah DINONAKTIFKAN oleh Administrator Sekolah. Akses login ditolak.`);
      }
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const cleanEmail = email.trim().toLowerCase();

      if (!cleanEmail || !password.trim()) {
        setError("Email dan password wajib diisi");
        setLoading(false);
        return;
      }

      // === PRE-CHECK: VERIFIKASI STATUS GURU NONAKTIF DI PENYIMPANAN SISTEM ===
      let isTeacherDeactivated = false;
      if (typeof window !== "undefined") {
        try {
          const deactRaw = localStorage.getItem("nalara_deactivated_teachers");
          if (deactRaw) {
            const deactList: string[] = JSON.parse(deactRaw);
            if (Array.isArray(deactList) && deactList.includes(cleanEmail)) {
              isTeacherDeactivated = true;
            }
          }
        } catch {}

        try {
          const regRaw = localStorage.getItem("nalara_registered_teachers");
          if (regRaw) {
            const regList = JSON.parse(regRaw);
            if (Array.isArray(regList)) {
              const match = regList.find((t: any) => (t.email || "").toLowerCase().trim() === cleanEmail);
              if (match && match.status === "inactive") {
                isTeacherDeactivated = true;
              }
            }
          }
        } catch {}
      }

      if (isTeacherDeactivated) {
        // Hapus token session jika ada
        await supabase.auth.signOut();
        if (typeof document !== "undefined") {
          document.cookie = "sb-auth-token=; path=/; max-age=0";
          document.cookie = "sb-user-role=; path=/; max-age=0";
          document.cookie = "sb-user-email=; path=/; max-age=0";
          document.cookie = "sb-user-status=; path=/; max-age=0";
        }
        setError(
          `🚫 Akses Ditolak: Akun Guru (${cleanEmail}) telah DINONAKTIFKAN oleh Administrator Sekolah. Guru tersebut tidak diizinkan login lagi ke dalam sistem. Silakan hubungi Administrator Sekolah untuk aktivasi.`
        );
        setLoading(false);
        return;
      }

      // 1. Authenticate with Supabase Auth
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: cleanEmail,
        password: password.trim(),
      });

      if (authError) {
        if (authError.message.includes("Invalid login credentials")) {
          setError("Email atau password tidak sesuai. Pastikan akun sudah terdaftar atau gunakan sinkronisasi akun demo di bawah.");
        } else {
          setError(authError.message);
        }
        setLoading(false);
        return;
      }

      if (data?.user) {
        const userEmail = (data.user.email || "").toLowerCase().trim();
        const meta = data.user.user_metadata || {};
        const userRole =
          meta.role ||
          (userEmail.includes("admin")
            ? "admin"
            : userEmail.includes("guru") ||
              userEmail.includes("brio") ||
              userEmail.includes("sarah") ||
              userEmail.includes("rina") ||
              userEmail.includes("rian") ||
              userEmail.includes("bambang") ||
              userEmail.includes("subhan") ||
              userEmail.includes("nurhayati")
            ? "teacher"
            : "student");

        // === POST-AUTH CHECK: PERIKSA USER METADATA STATUS DARI SUPABASE AUTH ===
        if (userRole === "teacher" && (meta.status === "inactive" || meta.is_active === false)) {
          await supabase.auth.signOut();
          if (typeof document !== "undefined") {
            document.cookie = "sb-auth-token=; path=/; max-age=0";
            document.cookie = "sb-user-role=; path=/; max-age=0";
            document.cookie = "sb-user-email=; path=/; max-age=0";
            document.cookie = "sb-user-status=; path=/; max-age=0";
          }
          setError(
            `🚫 Akses Ditolak: Akun Guru (${userEmail}) telah DINONAKTIFKAN oleh Administrator Sekolah. Guru tersebut tidak diizinkan login lagi ke dalam sistem. Silakan hubungi Administrator Sekolah.`
          );
          setLoading(false);
          return;
        }

        // Set auth cookies for middleware detection
        if (typeof document !== "undefined") {
          document.cookie = `sb-auth-token=${data.session?.access_token || "auth-active"}; path=/; max-age=604800; SameSite=Lax`;
          document.cookie = `sb-user-role=${userRole}; path=/; max-age=604800; SameSite=Lax`;
          document.cookie = `sb-user-email=${encodeURIComponent(userEmail)}; path=/; max-age=604800; SameSite=Lax`;
          document.cookie = `sb-user-status=active; path=/; max-age=604800; SameSite=Lax`;
        }

        const urlParams = new URLSearchParams(window.location.search);
        const redirectPath = urlParams.get("redirect");

        if (redirectPath && redirectPath.startsWith("/")) {
          if (redirectPath.startsWith("/admin") && userRole !== "admin") {
            // Not authorized for admin
          } else if (redirectPath.startsWith("/teacher") && userRole === "student") {
            // Not authorized for teacher
          } else {
            window.location.href = `${redirectPath}${redirectPath.includes("?") ? "&" : "?"}user=${encodeURIComponent(userEmail)}`;
            return;
          }
        }

        // 2. Automatic Role Detection & Redirection
        if (userRole === "admin" || userEmail.includes("admin")) {
          window.location.href = `/admin?user=${encodeURIComponent(userEmail)}`;
        } else if (userRole === "teacher") {
          window.location.href = `/teacher?user=${encodeURIComponent(userEmail)}`;
        } else {
          window.location.href = `/quiz?user=${encodeURIComponent(userEmail)}`;
        }
      }
    } catch {
      setError("Terjadi kendala koneksi ke server autentikasi.");
      setLoading(false);
    }
  };

  const fillQuickPreset = (presetEmail: string) => {
    setEmail(presetEmail);
    setPassword("password123");
    setError(null);
  };

  const handleSelectTeacher = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setSelectedTeacherEmail(val);
    if (val) {
      fillQuickPreset(val);
    }
  };

  const handleSeedDemoAccounts = async () => {
    setSeeding(true);
    setError(null);
    try {
      const res = await fetch("/api/auth/seed-demo", { method: "POST" });
      const data = await res.json();
      if (data.success) {
        setSeedSuccess(true);
        setError(null);
      } else {
        setError(data.error || "Gagal membuat akun demo");
      }
    } catch {
      setError("Gagal menghubungi server seed");
    } finally {
      setSeeding(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Branding Panel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-6 space-y-6"
        >
          <a href="/" className="inline-flex items-center gap-2 group">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform"
              style={{
                background: "linear-gradient(135deg, var(--brand), var(--brand-light))",
                boxShadow: "0 0 20px rgba(var(--brand-rgb), 0.35)",
              }}
            >
              <GraduationCap className="w-5 h-5 text-bg" />
            </div>
            <span
              className="text-2xl font-bold font-serif"
              style={{
                background: "linear-gradient(135deg, var(--brand), var(--brand-light))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              NALARA
            </span>
            <Badge variant="brand" className="text-xs uppercase tracking-wider font-semibold">
              Portal Akademik
            </Badge>
          </a>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold font-serif tracking-tight text-text">
              Masuk ke Ekosistem Pembelajaran NALARA
            </h1>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Platform evaluasi penalaran konseptual, kurikulum sekolah terpadu, dan portal bimbingan karier masa depan siswa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl border border-border/80 bg-surface/50 backdrop-blur-sm space-y-1">
              <div className="w-7 h-7 rounded-lg bg-brand/10 text-brand flex items-center justify-center mb-1">
                <GraduationCap size={16} />
              </div>
              <div className="text-xs font-bold text-text">Siswa &amp; Alumni</div>
              <div className="text-xs text-muted">Latihan nalar &amp; modul karier</div>
            </div>

            <div className="p-3.5 rounded-xl border border-border/80 bg-surface/50 backdrop-blur-sm space-y-1">
              <div className="w-7 h-7 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-1">
                <BookOpen size={16} />
              </div>
              <div className="text-xs font-bold text-text">Dewan Guru (12 Mapel)</div>
              <div className="text-xs text-muted">Bank soal &amp; pantau siswa</div>
            </div>

            <div className="p-3.5 rounded-xl border border-border/80 bg-surface/50 backdrop-blur-sm space-y-1">
              <div className="w-7 h-7 rounded-lg bg-brand-light/10 text-brand-light flex items-center justify-center mb-1">
                <ShieldCheck size={16} />
              </div>
              <div className="text-xs font-bold text-text">Admin Sekolah</div>
              <div className="text-xs text-muted">Hak akses &amp; penugasan</div>
            </div>
          </div>
        </motion.div>

        {/* Right Form Panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-6"
        >
          <Card className="p-6 sm:p-8 space-y-5 border-border shadow-2xl backdrop-blur-xl bg-surface/90">
            <div>
              <h2 className="text-xl font-bold font-serif text-text">Sign In Akun</h2>
              <p className="text-xs text-muted mt-1">
                Masukkan email dan password Anda untuk mengakses portal akademik.
              </p>
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3.5 rounded-xl bg-danger/10 border border-danger/30 text-danger text-xs flex items-start gap-2.5 leading-relaxed"
              >
                <AlertTriangle size={16} className="shrink-0 mt-0.5" />
                <span>{error}</span>
              </motion.div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                label="Email Terdaftar"
                type="email"
                icon={Mail}
                placeholder="nama@sekolah.sch.id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <Input
                label="Password"
                icon={Lock}
                showPasswordToggle
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Button type="submit" variant="primary" loading={loading} className="w-full font-semibold shadow-lg py-3">
                <span>Sign In ke Portal</span>
                <ArrowRight size={16} />
              </Button>
            </form>

            {/* Quick Demo Fillers for Easy Testing */}
            <div className="p-3.5 rounded-xl border border-border/70 space-y-3" style={{ background: "var(--surface2)" }}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-text flex items-center gap-1.5">
                  <UserCheck size={14} className="text-brand" />
                  Pilihan Akun Resmi untuk Pengujian
                </span>
                {seedSuccess && (
                  <span className="text-xs text-brand font-semibold flex items-center gap-1">
                    <CheckCircle2 size={12} /> Akun Terverifikasi
                  </span>
                )}
              </div>

              {/* Quick Select Buttons: Siswa & Admin */}
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => fillQuickPreset("andi@sekolah.sch.id")}
                  className="px-2.5 py-2 rounded-lg border border-border bg-surface text-xs font-medium text-muted hover:text-text hover:border-brand/40 transition-all text-left flex items-center gap-1.5"
                >
                  <GraduationCap size={15} className="text-brand shrink-0" />
                  <div className="truncate">
                    <div className="font-semibold text-text truncate">Siswa (Andi)</div>
                    <div className="text-xs text-muted truncate">Kelas XI-A</div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => fillQuickPreset("admin@sekolah.sch.id")}
                  className="px-2.5 py-2 rounded-lg border border-border bg-surface text-xs font-medium text-muted hover:text-text hover:border-brand/40 transition-all text-left flex items-center gap-1.5"
                >
                  <ShieldCheck size={15} className="text-accent shrink-0" />
                  <div className="truncate">
                    <div className="font-semibold text-text truncate">Admin Sekolah</div>
                    <div className="text-xs text-muted truncate">Administrator</div>
                  </div>
                </button>
              </div>

              {/* Complete Teacher Selector (12 Genuine Teachers) */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-muted flex items-center gap-1">
                  <BookOpen size={12} className="text-brand" />
                  Pilih Akun Guru (12 Guru Resmi Kurikulum):
                </label>
                <select
                  value={selectedTeacherEmail}
                  onChange={handleSelectTeacher}
                  className="w-full p-2.5 rounded-lg border border-border bg-surface text-xs font-medium text-text outline-none focus:border-brand transition-colors"
                >
                  <option value="">-- Pilih Akun Guru Pengampu --</option>
                  {ALL_TEACHERS_LIST.map((t) => (
                    <option key={t.email} value={t.email}>
                      {t.name} ({t.role})
                    </option>
                  ))}
                </select>
              </div>

              <div className="pt-2 border-t border-border/50 flex items-center justify-between">
                <span className="text-xs text-muted">Password: <code>password123</code></span>
                <button
                  type="button"
                  onClick={handleSeedDemoAccounts}
                  disabled={seeding}
                  className="text-xs text-brand hover:underline font-semibold flex items-center gap-1"
                >
                  <KeyRound size={11} />
                  <span>{seeding ? "Menyinkronkan..." : "Sinkronkan 12 Akun Guru"}</span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-muted pt-2 border-t border-border">
              <a href="/" className="hover:text-text transition-colors">
                ← Kembali ke Beranda
              </a>
              <span className="flex items-center gap-1 text-xs">
                <ShieldCheck size={13} className="text-brand" />
                Sistem Terautentikasi Supabase
              </span>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
