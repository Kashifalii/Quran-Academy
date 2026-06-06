"use client";

import { LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export function SignOutButton() {
  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    window.location.href = "/login";
  }

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="focus-ring mt-4 flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-sm font-extrabold text-red-700 hover:bg-red-50"
    >
      <LogOut className="size-4" />
      Sign Out
    </button>
  );
}
