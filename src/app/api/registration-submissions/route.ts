import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

type RegistrationPayload = {
  studentName?: string;
  parentName?: string;
  email?: string;
  phone?: string;
  country?: string;
  selectedCourse?: string;
  preferredTiming?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as RegistrationPayload;
  const studentName = payload.studentName?.trim() ?? "";
  const parentName = payload.parentName?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const phone = payload.phone?.trim() ?? "";

  if (!studentName || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const supabase = createAdminClient();

  if (!supabase) {
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabase.from("registration_submissions").insert({
    full_name: parentName ? `${studentName} (${parentName})` : studentName,
    email,
    phone,
    selected_plan_id: null,
    selected_course: payload.selectedCourse?.trim() || null,
    country: payload.country?.trim() || null,
    preferred_timing: payload.preferredTiming?.trim() || null,
    message: payload.message?.trim() || null,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
