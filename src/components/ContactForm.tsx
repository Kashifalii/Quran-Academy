"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      firstName: String(formData.get("firstName") ?? ""),
      lastName: String(formData.get("lastName") ?? ""),
      email: String(formData.get("email") ?? ""),
      subject: String(formData.get("subject") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(serviceId, templateId, payload, { publicKey });
      }

      const response = await fetch("/api/contact-submissions", {
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
      className="grid gap-4"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          name="firstName"
          aria-label="First name"
          placeholder="Your Name"
          className="focus-ring min-h-12 rounded-2xl border border-[var(--line-soft)] bg-white/80 px-4 shadow-inner shadow-black/[0.02]"
        />
        <input
          required
          name="lastName"
          aria-label="Last name"
          placeholder="Last Name"
          className="focus-ring min-h-12 rounded-2xl border border-[var(--line-soft)] bg-white/80 px-4 shadow-inner shadow-black/[0.02]"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          required
          type="email"
          name="email"
          aria-label="Email"
          placeholder="Your Email"
          className="focus-ring min-h-12 rounded-2xl border border-[var(--line-soft)] bg-white/80 px-4 shadow-inner shadow-black/[0.02]"
        />
        <input
          required
          name="subject"
          aria-label="Subject"
          placeholder="Add Subject"
          className="focus-ring min-h-12 rounded-2xl border border-[var(--line-soft)] bg-white/80 px-4 shadow-inner shadow-black/[0.02]"
        />
      </div>
      <textarea
        required
        name="message"
        aria-label="Message"
        placeholder="Your Message/Question Goes Here..."
        rows={7}
        className="focus-ring rounded-2xl border border-[var(--line-soft)] bg-white/80 p-4 shadow-inner shadow-black/[0.02]"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring justify-self-end rounded-full bg-(--gold) px-8 py-3 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(184,119,25,0.24)] cursor-pointer transition hover:bg-[var(--gold-deep)]"
      >
        {status === "loading" ? "Sending..." : "Send Now"}
      </button>
      {status === "success" ? (
        <p className="rounded-2xl bg-(--gold-soft) p-3 text-sm font-bold text-(--emerald)">
          Thank you. Your message has been sent successfully.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="rounded-2xl bg-red-50 p-3 text-sm font-bold text-red-700">
          We could not send your message. Please try again.
        </p>
      ) : null}
    </form>
  );
}
