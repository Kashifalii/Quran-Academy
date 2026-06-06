import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import type { Blog } from "@/lib/supabase/types";

function formatDate(value: string | null) {
  if (!value) {
    return "Draft";
  }

  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}

export function BlogCard({ blog }: { blog: Blog }) {
  return (
    <article className="group grid overflow-hidden rounded-lg border border-(--line-soft) bg-(--surface) shadow-(--shadow-card) transition hover:-translate-y-1 hover:shadow-(--shadow-soft) sm:grid-cols-[minmax(12rem,0.9fr)_1fr]">
      <Link href={`/blog/${blog.slug}`} className="relative min-h-60 sm:min-h-52">
        <Image
          src={blog.cover_image_url || "/images/cards/card1.webp"}
          alt={blog.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(min-width: 1024px) 28vw, (min-width: 640px) 42vw, 100vw"
        />
      </Link>
      <div className="flex min-h-52 flex-col p-5 sm:p-6">
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="rounded-full bg-(--surface-soft) px-3 py-1 text-xs font-extrabold text-(--emerald)">
            {blog.category}
          </span>
          {blog.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-(--gold-soft) px-3 py-1 text-xs font-bold text-(--gold-deep)"
            >
              {tag}
            </span>
          ))}
        </div>
        <h2 className="font-display text-xl font-bold leading-snug text-(--emerald-deep)">
          <Link href={`/blog/${blog.slug}`} className="focus-ring rounded-sm hover:text-(--gold-deep)">
            {blog.title}
          </Link>
        </h2>
        <div className="mt-3 flex flex-wrap gap-4 text-xs font-bold text-(--ink-muted)">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4 text-(--gold)" />
            {formatDate(blog.published_at)}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4 text-(--gold)" />
            {blog.read_time_minutes} min read
          </span>
        </div>
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-(--ink-muted)">
          {blog.excerpt}
        </p>
        <p className="mt-auto pt-5 text-sm font-extrabold text-(--emerald)">
          {blog.author?.full_name ?? "Quran Academy"}
        </p>
      </div>
    </article>
  );
}
