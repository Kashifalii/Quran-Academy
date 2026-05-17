import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { RegistrationForm } from "@/components/RegistrationForm";
import { SectionHeader } from "@/components/SectionHeader";
import { createMetadata } from "@/lib/seo";
import { Form } from "lucide-react";

export const metadata: Metadata = createMetadata({
  title: "Register for Online Quran Classes | Quran Academy",
  description:
    "Submit a registration inquiry for online Quran classes, choose a course, preferred timing, and request a free trial.",
  path: "/registration",
});

export default function RegistrationPage() {
  return (
    <>
      <PageHero
        title="Register Today"
        subtitle="Start with a free trial class and choose the best program for your family."
        icon={<Form className="size-8" />}
      />
      <section className="container-page py-16 sm:py-20">
        <SectionHeader
          align="left"
          eyebrow="Student Registration"
          title="Book Your Free Trial Class"
        />
        <RegistrationForm />
      </section>
    </>
  );
}
