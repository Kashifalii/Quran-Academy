import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { materials } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import { BookOpenText } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Quran Reading Materials | Quran Academy",
  description:
    "Access Quran reading materials, Tajweed guides, Quran basics, and daily duas for online Quran students.",
  path: "/materials",
});

export default function MaterialsPage() {
  return (
    <>
      <PageHero
        title="Reading Materials"
        subtitle="Helpful educational resources for Quran learners."
        icon={<BookOpenText className="size-8" />}
      />
      <section className="container-page py-16 sm:py-20">
        <SectionHeader
          eyebrow="Resources"
          title="Islamic Educational Materials"
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {materials.map((material) => (
            <article
              key={material.slug}
              className="rounded-[1.35rem] border border-(--line-soft) bg-(--surface) p-6 shadow-(--shadow-card) transition hover:-translate-y-1 hover:shadow-(--shadow-soft)"
            >
              <span className="islamic-shape mb-5 grid size-14 place-items-center bg-(--gold) font-bold text-white">
                PDF
              </span>
              <h2 className="font-display text-2xl font-bold">
                {material.title}
              </h2>
              <p className="mt-3 text-sm font-bold text-(--gold)">
                {material.level}
              </p>
              <p className="mt-3 leading-7 text-(--ink-muted)">
                {material.description}
              </p>
              <Link
                href={`${material.downloadLink}`}
                target="_blank"
                className="focus-ring mt-6 inline-flex rounded-full border border-(--gold) px-5 py-2 text-sm font-extrabold text-(--emerald) hover:bg-(--gold-soft)"
              >
                {material.downloadLabel}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
