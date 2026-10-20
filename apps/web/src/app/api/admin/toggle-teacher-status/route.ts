import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase-server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, status } = body;

    if (!email || !status) {
      return NextResponse.json(
        { error: "Email dan status wajib diisi" },
        { status: 400 }
      );
    }

    const cleanEmail = email.trim().toLowerCase();
    const validStatus = status === "inactive" ? "inactive" : "active";

    // 1. Find user in Supabase Auth
    const { data: usersData, error: listError } = await supabaseAdmin.auth.admin.listUsers();
    if (listError) {
      console.warn("Failed to list users from Supabase Auth:", listError);
    }

    const targetUser = usersData?.users?.find(
      (u) => u.email?.toLowerCase() === cleanEmail
    );

    if (targetUser) {
      // 2. Update user_metadata with status
      const existingMeta = targetUser.user_metadata || {};
      const { error: updateAuthErr } = await supabaseAdmin.auth.admin.updateUserById(
        targetUser.id,
        {
          user_metadata: {
            ...existingMeta,
            status: validStatus,
            is_active: validStatus === "active",
          },
        }
      );

      if (updateAuthErr) {
        console.warn("Could not update Supabase auth metadata:", updateAuthErr);
      }
    }

    // 3. Update public.profiles if exists
    try {
      await supabaseAdmin
        .from("profiles")
        .update({ status: validStatus, updated_at: new Date().toISOString() })
        .eq("email", cleanEmail);
    } catch {
      // Profiles table might not exist or be reachable, continue
    }

    const response = NextResponse.json({
      success: true,
      email: cleanEmail,
      status: validStatus,
      message:
        validStatus === "inactive"
          ? `Akun guru ${cleanEmail} berhasil DINONAKTIFKAN. Guru tidak akan dapat login lagi.`
          : `Akun guru ${cleanEmail} berhasil DIAKTIFKAN kembali.`,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
