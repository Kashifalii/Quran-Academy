"use client";

import { useState } from "react";
import { courses } from "@/data/site";

export function RegistrationForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="mt-10 grid gap-4 rounded-[1.5rem] border border-[var(--line-soft)] bg-[var(--surface)] p-5 shadow-[var(--shadow-card)] sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {["Student Name", "Parent Name", "Email Address", "Phone Number", "Country"].map((label, index) => (
          <label key={label} className="grid gap-2 text-sm font-extrabold text-[var(--emerald)]">
            {label}
            <input required type={index === 2 ? "email" : "text"} className="focus-ring min-h-12 rounded-2xl border border-[var(--line-soft)] bg-white/78 px-4 font-normal text-black shadow-inner shadow-black/[0.02]" />
          </label>
        ))}
        <label className="grid gap-2 text-sm font-extrabold text-[var(--emerald)]">
          Gender
          <select required className="focus-ring min-h-12 rounded-2xl border border-[var(--line-soft)] bg-white/78 px-4 font-normal text-black shadow-inner shadow-black/[0.02]">
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm font-extrabold text-[var(--emerald)]">
          Selected Course
          <select required className="focus-ring min-h-12 rounded-2xl border border-[var(--line-soft)] bg-white/78 px-4 font-normal text-black shadow-inner shadow-black/[0.02]">
            <option value="">Select course</option>
            {courses.map((course) => <option key={course.slug}>{course.title}</option>)}
          </select>
        </label>
        <label className="grid gap-2 text-sm font-extrabold text-[var(--emerald)]">
          Preferred Timing
          <input required className="focus-ring min-h-12 rounded-2xl border border-[var(--line-soft)] bg-white/78 px-4 font-normal text-black shadow-inner shadow-black/[0.02]" placeholder="Morning, evening, or timezone" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-extrabold text-[var(--emerald)]">
        Message
        <textarea rows={5} className="focus-ring rounded-2xl border border-[var(--line-soft)] bg-white/78 p-4 font-normal text-black shadow-inner shadow-black/[0.02]" />
      </label>
      <button type="submit" className="focus-ring justify-self-start rounded-full bg-[var(--gold)] px-8 py-3 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(184,119,25,0.24)] transition hover:bg-[var(--gold-deep)]">
        Register Today
      </button>
      {sent ? <p className="rounded-2xl bg-[var(--gold-soft)] p-4 font-bold text-[var(--emerald)]">Registration inquiry received in demo mode. Connect Formspree, EmailJS, or Netlify Forms when ready for production submissions.</p> : null}
    </form>
  );
}
