"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function LoginForm() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/dashboard";
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const formData = new FormData(event.currentTarget);
      const email = String(formData.get("email") ?? "");
      const password = String(formData.get("password") ?? "");
      const supabase = createClient();

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error || !data.user) {
        throw new Error(error?.message || "Unable to sign in.");
      }

      const metadataRole = data.user.user_metadata?.role;
      let isAdmin = metadataRole === "admin";

      if (!isAdmin) {
        const { data: profile } = await supabase
          .from("profiles")
          .select("role")
          .eq("id", data.user.id)
          .single();

        isAdmin = profile?.role === "admin";
      }

      if (!isAdmin) {
        await supabase.auth.signOut();
        throw new Error("This account does not have dashboard access.");
      }

      window.location.href = next.startsWith("/") ? next : "/dashboard";
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Unable to sign in.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 grid max-w-md gap-4 rounded-3xl border border-(--line-soft) bg-(--surface) p-5 shadow-(--shadow-card) sm:p-8"
    >
      <label className="grid gap-2 text-sm font-extrabold text-(--emerald)">
        Email
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          className="focus-ring min-h-12 rounded-2xl border border-(--line-soft) bg-white/80 px-4 font-normal text-black"
        />
      </label>
      <label className="grid gap-2 text-sm font-extrabold text-(--emerald)">
        Password
        <input
          required
          name="password"
          type="password"
          autoComplete="current-password"
          className="focus-ring min-h-12 rounded-2xl border border-(--line-soft) bg-white/80 px-4 font-normal text-black"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring rounded-full bg-(--gold) px-8 py-3 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(184,119,25,0.24)] transition hover:bg-(--gold-deep)"
      >
        {status === "loading" ? "Signing in..." : "Sign In"}
      </button>
      {status === "error" ? (
        <p className="rounded-2xl bg-red-50 p-3 text-sm font-bold text-red-700">
          {message}
        </p>
      ) : null}
    </form>
  );
}
