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
        title={`Our Expert Quran Teachers`}
        subtitle="Our highly qualified Quran teachers are dedicated to providing authentic, structured, and easy-to-understand Islamic education for students of all ages."
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
          <p className="text-(--ink-muted)">
            We take pride in having experienced and professional Quran teachers
            who guide students with patience, care, and dedication. Our
            instructors focus on building a strong foundation in Quran reading,
            Tajweed, and understanding while ensuring every student learns with
            confidence and clarity.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="font-bold mb-3">Teacher Skills & Expertise</h3>
              <ul className="list-inside list-disc text-(--ink-muted) space-y-1">
                <li>Noorani Qaida (Basic foundation)</li>
                <li>Quran Reading with proper Tajweed</li>
                <li>Quran Memorization (Hifz Program)</li>
                <li>Quran Translation & Tafseer basics</li>
                <li>Islamic Studies for children and beginners</li>
                <li>Regular practice and progress tracking</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">What Students Will Learn</h3>
              <ul className="list-inside list-disc text-(--ink-muted) space-y-1">
                <li>Structured step-by-step learning plans</li>
                <li>Quran Reading Course with Tajweed</li>
                <li>Quran Memorization (Hifz) Program</li>
                <li>Quran Translation & Tafseer Basics</li>
                <li>Islamic Studies for Kids</li>
                <li>Daily Practice & Progress Evaluation</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Why Choose Our Teachers</h3>
              <ul className="list-inside list-disc text-(--ink-muted) space-y-1">
                <li>Structured step-by-step learning plans</li>
                <li>Flexible online class timings</li>
                <li>Interactive and engaging teaching style</li>
                <li>Regular feedback and progress reports</li>
                <li>Focus on correct recitation from day one</li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <h4 className="font-display text-lg font-bold">
              Quran Learning Resources & Reading Materials
            </h4>
            <p className="mt-3 text-(--ink-muted)">
              Access a collection of helpful educational resources designed to
              support your Quran learning journey. Explore reading materials,
              practice guides, and learning tools to improve your understanding,
              recitation, and Islamic knowledge.
            </p>
            <Link
              href="/contact"
              className="focus-ring mt-6 inline-block rounded-full bg-(--gold) px-5 py-3 text-sm font-bold text-black hover:bg-(--gold-soft)"
            >
              Book your free trial class
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
