"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="grid gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          aria-label="First name"
          placeholder="Your Name"
          className="focus-ring min-h-12 rounded-2xl border border-[var(--line-soft)] bg-white/80 px-4 shadow-inner shadow-black/[0.02]"
        />
        <input
          required
          aria-label="Last name"
          placeholder="Last Name"
          className="focus-ring min-h-12 rounded-2xl border border-[var(--line-soft)] bg-white/80 px-4 shadow-inner shadow-black/[0.02]"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          type="email"
          aria-label="Email"
          placeholder="Your Email"
          className="focus-ring min-h-12 rounded-2xl border border-[var(--line-soft)] bg-white/80 px-4 shadow-inner shadow-black/[0.02]"
        />
        <input
          required
          aria-label="Subject"
          placeholder="Add Subject"
          className="focus-ring min-h-12 rounded-2xl border border-[var(--line-soft)] bg-white/80 px-4 shadow-inner shadow-black/[0.02]"
        />
      </div>
      <textarea
        required
        aria-label="Message"
        placeholder="Your Message/Question Goes Here..."
        rows={7}
        className="focus-ring rounded-2xl border border-[var(--line-soft)] bg-white/80 p-4 shadow-inner shadow-black/[0.02]"
      />
      <button
        type="submit"
        className="focus-ring justify-self-end rounded-full bg-(--gold) px-8 py-3 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(184,119,25,0.24)] cursor-pointer transition hover:bg-[var(--gold-deep)]"
      >
        Send Now
      </button>
      {sent ? (
        <p className="rounded-2xl bg-(--gold-soft) p-3 text-sm font-bold text-(--emerald)">
          Thank you. This demo form has been validated successfully.
        </p>
      ) : null}
    </form>
  );
}
