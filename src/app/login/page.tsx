import type { Metadata } from "next";
import { LockKeyhole } from "lucide-react";
import { LoginForm } from "@/components/LoginForm";
import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Admin Login | Quran Academy",
  description: "Sign in to access the Quran Academy admin dashboard.",
  path: "/login",
});

export default function LoginPage() {
  return (
    <>
      <PageHero
        title="Admin Login"
        subtitle="Sign in with an admin account to manage Quran Academy content."
        icon={<LockKeyhole className="size-8" />}
      />
      <section className="container-page py-16 sm:py-20">
        <LoginForm />
      </section>
    </>
  );
}
