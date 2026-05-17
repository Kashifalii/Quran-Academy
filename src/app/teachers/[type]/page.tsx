import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { teachers } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import Link from "next/link";
import { Users } from "lucide-react";

type TeacherPageProps = { params: Promise<{ type: string }> };

export function generateStaticParams() {
  return [{ type: "male" }, { type: "female" }];
}

export async function generateMetadata({
  params,
}: TeacherPageProps): Promise<Metadata> {
  const { type } = await params;
  const title =
    type === "female" ? "Female Quran Teachers" : "Male Quran Teachers";
  return createMetadata({
    title: `${title} | Quran Academy`,
    description: `Meet qualified ${type} Quran teachers for online Quran classes, Tajweed, Hifz, and Islamic Studies.`,
    path: `/teachers/${type}`,
    image: "/images/teachers-quran.jpg",
  });
}

export default async function TeachersPage({ params }: TeacherPageProps) {
  const { type } = await params;
  if (type !== "male" && type !== "female") notFound();
  const list = teachers[type];

  return (
    <>
      <PageHero
        title={`${type} Quran Teachers`}
        subtitle="Qualified instructors for one-on-one Quran learning."
        icon={<Users className="size-8" />}
      />

      <section className="container-page py-16 sm:py-20">
        <SectionHeader
          eyebrow="Our Scholars"
          title={
            type === "female" ? "Female Quran Teachers" : "Male Quran Teachers"
          }
        />

        {/* links */}
        <div className="z-10 mx-auto mt-7 flex w-fit items-center justify-center gap-3 rounded-full border border-[var(--line-soft)] bg-[var(--surface)] p-2 shadow-[var(--shadow-card)]">
          <Link
            href="/teachers/male"
            aria-label="Male Teachers"
            className={`focus-ring min-w-[120px] rounded-full bg-[var(--gold-soft)] px-4 py-2 text-center text-sm font-extrabold text-[var(--emerald)] transition hover:bg-[var(--gold)] hover:text-white`}
          >
            Male
          </Link>
          <Link
            href="/teachers/female"
            aria-label="Female Teachers"
            className={`focus-ring min-w-[120px] rounded-full bg-[var(--gold-soft)] px-4 py-2 text-center text-sm font-extrabold text-[var(--emerald)] transition hover:bg-[var(--gold)] hover:text-white`}
          >
            Female
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((teacher) => (
            <article
              key={teacher.name}
              className="rounded-[1.35rem] border border-[var(--line-soft)] bg-[var(--surface)] p-6 text-center shadow-[var(--shadow-card)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="relative mx-auto size-48 overflow-hidden rounded-[1.5rem] border border-[var(--line-soft)] bg-[var(--surface-soft)] p-2">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  className="object-cover"
                  sizes="220px"
                />
              </div>
              <h2 className="font-display mt-6 text-2xl font-bold">
                {teacher.name}
              </h2>
              <p className="mt-1 font-bold text-[var(--gold)]">
                {teacher.qualification}
              </p>
              <dl className="mt-5 grid gap-3 text-left text-sm text-[var(--ink-muted)]">
                <div>
                  <dt className="font-bold text-[var(--emerald)]">
                    Experience
                  </dt>
                  <dd>{teacher.experience}</dd>
                </div>
                <div>
                  <dt className="font-bold text-[var(--emerald)]">Languages</dt>
                  <dd>{teacher.languages}</dd>
                </div>
                <div>
                  <dt className="font-bold text-[var(--emerald)]">
                    Specialization
                  </dt>
                  <dd>{teacher.specialization}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
