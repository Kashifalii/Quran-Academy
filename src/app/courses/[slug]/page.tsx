import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ButtonLink";
import { PageHero } from "@/components/PageHero";
import { courses } from "@/data/site";
import { createMetadata } from "@/lib/seo";
import { LaptopMinimal } from "lucide-react";

type CoursePageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) return {};
  return createMetadata({
    title: `${course.title} Online Course | Quran Academy`,
    description: course.shortDescription,
    path: `/courses/${course.slug}`,
    image: course.image,
  });
}

export default async function CourseDetailPage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = courses.find((item) => item.slug === slug);
  if (!course) notFound();

  return (
    <>
      <PageHero
        title={course.title}
        subtitle={course.shortDescription}
        icon={<LaptopMinimal className="size-8" />}
      />
      <section className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_0.8fr]">
        <article>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--gold)]">
            {course.category}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold sm:text-4xl">
            Course Overview
          </h2>
          <p className="mt-5 leading-8 text-[var(--ink-muted)]">
            {course.description}
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.25rem] bg-[var(--surface-soft)] p-5 shadow-[var(--shadow-card)]">
              <h3 className="font-bold text-[var(--emerald)]">Duration</h3>
              <p className="mt-2 text-[var(--ink-muted)]">{course.duration}</p>
            </div>
            <div className="rounded-[1.25rem] bg-[var(--surface-soft)] p-5 shadow-[var(--shadow-card)]">
              <h3 className="font-bold text-[var(--emerald)]">
                Class Schedule
              </h3>
              <p className="mt-2 text-[var(--ink-muted)]">{course.schedule}</p>
            </div>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-display text-2xl font-bold">
                Learning Objectives
              </h3>
              <ul className="mt-4 space-y-3 text-[var(--ink-muted)]">
                {course.objectives.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold">
                Learning Outcomes
              </h3>
              <ul className="mt-4 space-y-3 text-[var(--ink-muted)]">
                {course.outcomes.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <ButtonLink href="/registration">Start Learning</ButtonLink>
          </div>
        </article>
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <div className="overflow-hidden rounded-[1.5rem] border border-[var(--line-soft)] bg-[var(--surface)] shadow-[var(--shadow-card)]">
            <div className="relative aspect-[4/3]">
              <Image
                src={course.image}
                alt={`${course.title} online Quran lesson`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl font-bold">Fee Snapshot</h3>
              <dl className="mt-4 grid gap-3 text-sm">
                {Object.entries(course.fees).map(([region, fee]) => (
                  <div
                    key={region}
                    className="flex justify-between gap-4 border-b border-[var(--line-soft)] pb-2"
                  >
                    <dt className="font-bold text-[var(--emerald)]">
                      {region}
                    </dt>
                    <dd className="text-[var(--ink-muted)]">{fee}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}
