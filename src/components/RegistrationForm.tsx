"use client";

import { useState } from "react";
import { courses } from "@/data/site";

export function RegistrationForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="mt-10 grid gap-4 rounded-3xl border border-(--line-soft) bg-(--surface) p-5 shadow-(--shadow-card) sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {[
          "Student Name",
          "Parent Name",
          "Email Address",
          "Phone Number",
          "Country",
        ].map((label, index) => (
          <label
            key={label}
            className="grid gap-2 text-sm font-extrabold text-(--emerald)"
          >
            {label}
            <input
              required
              type={index === 2 ? "email" : "text"}
              className="focus-ring min-h-12 rounded-2xl border border-(--line-soft) bg-white/78 px-4 font-normal text-black shadow-inner shadow-black/2"
            />
          </label>
        ))}
        <label className="grid gap-2 text-sm font-extrabold text-(--emerald)">
          Gender
          <div className="relative">
            <select
              required
              className="focus-ring min-h-12 w-full appearance-none rounded-2xl border cursor-pointer border-(--line-soft) bg-white/78 px-4 pr-12 font-normal text-black shadow-inner shadow-black/2 outline-none"
            >
              <option value="">Select gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-(--emerald)"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </label>
        <label className="grid gap-2 text-sm font-extrabold text-(--emerald)">
          Selected Course
          <div className="relative">
            <select
              required
              className="focus-ring min-h-12 w-full appearance-none rounded-2xl border border-(--line-soft) bg-white/78 px-4 pr-12 text-sm font-medium text-black shadow-inner shadow-black/2 outline-none transition-all duration-200 cursor-pointer focus:border-(--emerald)"
            >
              <option value="" className="bg-white text-black">
                Select course
              </option>

              {courses.map((course) => (
                <option
                  key={course.slug}
                  value={course.slug}
                  className="bg-white text-black"
                >
                  {course.title}
                </option>
              ))}
            </select>

            <svg
              className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-(--emerald)"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </label>
        <label className="grid gap-2 text-sm font-extrabold text-(--emerald)">
          Preferred Timing
          <input
            required
            className="focus-ring min-h-12 rounded-2xl border border-(--line-soft) bg-white/78 px-4 font-normal text-black shadow-inner shadow-black/2"
            placeholder="Morning, evening, or timezone"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-extrabold text-(--emerald)">
        Message
        <textarea
          rows={5}
          className="focus-ring rounded-2xl border border-(--line-soft) bg-white/78 p-4 font-normal text-black shadow-inner shadow-black/2"
        />
      </label>
      <button
        type="submit"
        className="focus-ring justify-self-start rounded-full bg-(--gold) px-8 py-3 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(184,119,25,0.24)] transition hover:bg-(--gold-deep)"
      >
        Register Today
      </button>
      {sent ? (
        <p className="rounded-2xl bg-(--gold-soft) p-4 font-bold text-(--emerald)">
          Registration inquiry received in demo mode. Connect Formspree,
          EmailJS, or Netlify Forms when ready for production submissions.
        </p>
      ) : null}
    </form>
  );
}
