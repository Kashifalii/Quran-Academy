import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export async function getCurrentUserRole() {
  const supabase = await createClient();

  if (!supabase) {
    return null;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  const metadataRole = user.user_metadata?.role;
  if (metadataRole === "admin" || metadataRole === "user") {
    return metadataRole;
  }

  const { data } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .single();

  return data?.role ?? null;
}

export async function isAdminUser() {
  return (await getCurrentUserRole()) === "admin";
}

export async function requireAdmin() {
  if (!(await isAdminUser())) {
    redirect("/login?next=/dashboard");
  }
}
