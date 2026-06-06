import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const firstName = payload.firstName?.trim() ?? "";
  const lastName = payload.lastName?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (!firstName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const supabase = createAdminClient();

  if (!supabase) {
    return NextResponse.json({ ok: true, stored: false });
  }

  const { error } = await supabase.from("contact_submissions").insert({
    name: [firstName, lastName].filter(Boolean).join(" "),
    email,
    message,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true, stored: true });
}
