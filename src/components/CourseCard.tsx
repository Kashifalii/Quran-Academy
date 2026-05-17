import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/data/site";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="overflow-hidden cursor-pointer rounded-[1.35rem] border border-[var(--line-soft)] bg-[var(--surface)] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
      <div className="relative aspect-[4/2.4]">
        <Image
          src={course.image}
          alt={`${course.title} course`}
          fill
          priority
          fetchPriority="high"
          quality={100}
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-5 sm:p-6">
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.16em] text-(--gold)">
          {course.category}
        </p>
        <h3 className="font-display text-2xl font-bold leading-snug">
          {course.title}
        </h3>
        <p className="mt-3 text-sm leading-6 text-(--ink-muted)">
          {course.shortDescription}
        </p>
        <div className="mt-5 flex items-center justify-between gap-4">
          <span className="text-sm font-extrabold text-(--emerald)">
            {course.duration}
          </span>
          <Link
            href={`/courses/${course.slug}`}
            className="focus-ring rounded-full bg-(--gold) px-4 py-2 text-sm font-extrabold text-white transition hover:bg-(--emerald)"
          >
            Details
          </Link>
        </div>
      </div>
    </article>
  );
}
