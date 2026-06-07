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
        title={`Quran Teachers`}
        subtitle="Qualified instructors for one-on-one Quran learning."
        icon={<Users className="size-8" />}
      />

      {/* <section className="container-page py-16 sm:py-20">
        <SectionHeader
          eyebrow="Our Scholars"
          title={
            type === "female" ? "Female Quran Teachers" : "Male Quran Teachers"
          }
        />

     
        <div className="z-10 mx-auto mt-7 flex w-fit items-center justify-center gap-3 rounded-full border border-(--line-soft) bg-(--surface) p-2 shadow-(--shadow-card)">
          <Link
            href="/teachers/male"
            aria-label="Male Teachers"
            className={`focus-ring min-w-30 rounded-full bg-(--gold-soft) px-4 py-2 text-center text-sm font-extrabold text-black transition hover:bg-(--gold) hover:text-white`}
          >
            Male
          </Link>
          <Link
            href="/teachers/female"
            aria-label="Female Teachers"
            className={`focus-ring min-w-30 rounded-full bg-(--gold-soft) px-4 py-2 text-center text-sm font-extrabold text-black transition hover:bg-(--gold) hover:text-white`}
          >
            Female
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((teacher) => (
            <article
              key={teacher.name}
              className="rounded-[1.35rem] border border-(--line-soft) bg-(--surface) p-6 text-center flex flex-col items-center  shadow-(--shadow-card) transition hover:-translate-y-1 hover:shadow-(--shadow-soft)"
            >
              <div className="relative mx-auto size-40 sm:size-48 overflow-hidden rounded-full border border-(--line-soft) bg-(--surface-soft) p-2">
                <Image
                  src={teacher.image}
                  alt={teacher.name}
                  fill
                  quality={75}
                  className="object-cover"
                  sizes="220px"
                />
              </div>
              <h2 className="font-display mt-6 text-xl sm:text-2xl font-bold">
                {teacher.name}
              </h2>
              <p className="mt-0 sm:mt-1 font-bold sm:text-base text-sm text-(--gold)">
                {teacher.qualification}
              </p>
              <dl className="mt-5 grid gap-3 text-left text-sm text-(--ink-muted)">
                <div className="text-center">
                  <dt className="font-bold text-(--emerald)">
                    Experience
                  </dt>
                  <dd>{teacher.experience}</dd>
                </div>
                <div className="text-center">
                  <dt className="font-bold text-(--emerald)">Languages</dt>
                  <dd>{teacher.languages}</dd>
                </div>
                <div className="text-center">
                  <dt className="font-bold text-(--emerald)">
                    Specialization
                  </dt>
                  <dd>{teacher.specialization}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section> */}

      <section className="container-page py-16 sm:py-20">
        <SectionHeader
          eyebrow="Our Expert Teachers"
          title="Our Expert Quran Teachers"
          description="Highly qualified, patient, and professional instructors guiding students step-by-step."
        />

        <div className="mt-8 space-y-8">
          <p className="text-(--ink-muted)">We take pride in having highly qualified and experienced Quran teachers dedicated to providing authentic Islamic education with patience, care, and professionalism. Our teachers are not just instructors — they are mentors who guide students step by step in learning the Holy Quran with correct pronunciation, understanding, and confidence.</p>

          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-3">Teacher Skills & Expertise</h3>
              <ul className="list-inside list-disc text-(--ink-muted) space-y-1">
                <li>Noorani Qaida Experts for beginners</li>
                <li>Quran Reading with Proper Tajweed Rules</li>
                <li>Quran Memorization (Hifz) Specialists</li>
                <li>Quran Translation & Understanding Teachers</li>
                <li>Islamic Studies for Children & Beginners</li>
                <li>One-on-One Personalized Teaching Approach</li>
                <li>Experienced in Teaching Kids & Adults</li>
                <li>Friendly, Patient & Student-Focused Teaching Style</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">What Students Learn</h3>
              <ul className="list-inside list-disc text-(--ink-muted) space-y-1">
                <li>Basic Noorani Qaida Course (for beginners)</li>
                <li>Quran Reading Course with Tajweed</li>
                <li>Quran Memorization (Hifz) Program</li>
                <li>Quran Translation & Tafseer Basics</li>
                <li>Islamic Studies for Kids</li>
                <li>Daily Practice & Progress Evaluation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Why Our Teachers Are Different</h3>
              <ul className="list-inside list-disc text-(--ink-muted) space-y-1">
                <li>Certified & Experienced Quran Teachers</li>
                <li>Structured Learning Plans for Every Student</li>
                <li>Flexible Class Timing</li>
                <li>Interactive Online Learning Sessions</li>
                <li>Regular Progress Reports & Feedback</li>
                <li>Focus on Correct Tajweed from Day One</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-display text-lg font-bold">Start Learning With Confidence</h4>
            <p className="mt-3 text-(--ink-muted)">Whether you are a beginner or want to improve your recitation, our teachers are here to guide you at every step.</p>
            <Link href="/contact" className="focus-ring mt-6 inline-block rounded-full bg-(--gold) px-5 py-3 text-sm font-bold text-black hover:bg-(--gold-soft)">Book your free trial class</Link>
          </div>
        </div>
      </section>
    </>
  );
}
