import type { Metadata } from "next";
import { CourseFilter } from "@/components/CourseFilter";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { createMetadata } from "@/lib/seo";
import { LaptopMinimal } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Online Quran Courses | Quran Academy",
  description:
    "Browse online Quran courses including Noorani Qaida, Quran Reading, Tajweed, Hifz, Islamic Studies, and Arabic Language.",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <>
      <PageHero
        title="Online Classes"
        subtitle="Search, filter, and explore course pages with detailed outcomes and fee information."
        icon={<LaptopMinimal className="size-8" />}
      />
      <section className="container-page py-16 sm:py-20">
        <SectionHeader
          align="left"
          eyebrow="We Have Started Online Courses"
          title="Online Quran Classes"
        />
        <CourseFilter />
      </section>
    </>
  );
}
