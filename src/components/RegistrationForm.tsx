"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";
import { courses } from "@/data/site";

export function RegistrationForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      studentName: String(formData.get("studentName") ?? ""),
      parentName: String(formData.get("parentName") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      country: String(formData.get("country") ?? ""),
      gender: String(formData.get("gender") ?? ""),
      selectedCourse: String(formData.get("selectedCourse") ?? ""),
      preferredTiming: String(formData.get("preferredTiming") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_REGISTRATION_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, payload, { publicKey });
      }

      const response = await fetch("/api/registration-submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="mt-10 grid gap-4 rounded-3xl border border-(--line-soft) bg-(--surface) p-5 shadow-(--shadow-card) sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 md:grid-cols-2">
        {[
          ["Student Name", "studentName", "text"],
          ["Parent Name", "parentName", "text"],
          ["Email Address", "email", "email"],
          ["Phone Number", "phone", "text"],
          ["Country", "country", "text"],
        ].map(([label, name, type]) => (
          <label
            key={label}
            className="grid gap-2 text-sm font-extrabold text-(--emerald)"
          >
            {label}
            <input
              required
              name={name}
              type={type}
              className="focus-ring min-h-12 rounded-2xl border border-(--line-soft) bg-white/78 px-4 font-normal text-black shadow-inner shadow-black/2"
            />
          </label>
        ))}
        <label className="grid gap-2 text-sm font-extrabold text-(--emerald)">
          Gender
          <div className="relative">
            <select
              required
              name="gender"
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
              name="selectedCourse"
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
            name="preferredTiming"
            className="focus-ring min-h-12 rounded-2xl border border-(--line-soft) bg-white/78 px-4 font-normal text-black shadow-inner shadow-black/2"
            placeholder="Morning, evening, or timezone"
          />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-extrabold text-(--emerald)">
        Message
        <textarea
          name="message"
          rows={5}
          className="focus-ring rounded-2xl border border-(--line-soft) bg-white/78 p-4 font-normal text-black shadow-inner shadow-black/2"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring justify-self-start rounded-full bg-(--gold) px-8 py-3 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(184,119,25,0.24)] transition hover:bg-(--gold-deep)"
      >
        {status === "loading" ? "Submitting..." : "Register Today"}
      </button>
      {status === "success" ? (
        <p className="rounded-2xl bg-(--gold-soft) p-4 font-bold text-(--emerald)">
          Registration inquiry received. Our coordinator will contact you soon.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-2xl bg-red-50 p-4 font-bold text-red-700">
          We could not submit your registration. Please try again.
        </p>
      ) : null}
    </form>
  );
}
