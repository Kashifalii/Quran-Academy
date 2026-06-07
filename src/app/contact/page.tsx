import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { createMetadata } from "@/lib/seo";
import { UserSearch } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Contact Quran Academy | Online Quran Classes Support",
  description:
    "Contact Quran Academy for online Quran class inquiries, registration support, teacher availability, and fee plan questions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Have questions about courses, teachers, timings, or registration? Send us a message."
        icon={<UserSearch className="size-8" />}
      />
      <section className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Have any Questions...!"
            title="Get in Touch"
          />
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>
        <div className="relative mx-auto min-h-90 w-full max-w-md overflow-hidden rounded-[1.75rem] border border-(--line-soft) bg-(--surface) shadow-(--shadow-card)">
          <Image
            src="/images/contactImg.webp"
            alt="Quran Academy contact and mosque reference"
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 38vw, 100vw"
          />
        </div>
      </section>
      <section className="container-page grid gap-10 py-8 lg:grid-cols-2">
        <div>
          <p className="mb-2 text-sm font-bold text-(--gold)">
            Contact Details
          </p>
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Get Information</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {[
              ["Email", "taleemulqurancampus786@gmail.com"],
              ["Phone", "+923120702891 / +966547301072"],
              ["Address", "Online Academy, Global"],
              ["WhatsApp", "24/7 inquiry support"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[1.25rem] border border-(--line-soft) bg-(--surface) p-5 shadow-(--shadow-card)">
                <h3 className="font-bold text-(--emerald)">{label}</h3>
                <p className="mt-2 text-xs font-medium text-(--ink-muted)">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="min-h-80 overflow-hidden rounded-3xl border border-(--line-soft) bg-(--gold-soft) shadow-(--shadow-card)">
          <iframe
            title="Quran Academy service map"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3308.300618945985!2d72.97017537571361!3d33.98481137318239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDU5JzA1LjMiTiA3MsKwNTgnMjEuOSJF!5e0!3m2!1sen!2s!4v1780820853542!5m2!1sen!2s"
            className="h-full min-h-80 w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
      <section className="ornament-bg py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader eyebrow="Support" title="Common Questions" />
          <FAQAccordion />
        </div>
      </section>
    </>
  );
}
