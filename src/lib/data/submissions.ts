import { createClient } from "@/lib/supabase/server";
import type { ContactSubmission, RegistrationSubmission } from "@/lib/supabase/types";

export async function getContactSubmissions() {
  const supabase = await createClient();

  if (!supabase) {
    return [] as ContactSubmission[];
  }

  const { data } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("submitted_at", { ascending: false });

  return (data ?? []) as ContactSubmission[];
}

export async function getRegistrationSubmissions() {
  const supabase = await createClient();

  if (!supabase) {
    return [] as RegistrationSubmission[];
  }

  const { data } = await supabase
    .from("registration_submissions")
    .select("*")
    .order("submitted_at", { ascending: false });

  return (data ?? []) as RegistrationSubmission[];
}
