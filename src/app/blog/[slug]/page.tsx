import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { MarkdownBody } from "@/components/blog/MarkdownBody";
import { getPublishedBlogBySlug } from "@/lib/data/blogs";
import { createMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function formatDate(value: string | null) {
  if (!value) {
    return "Draft";
  }

  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);

  if (!blog) {
    return createMetadata({
      title: "Blog Not Found | Quran Academy",
      description: "The requested Quran Academy blog article could not be found.",
    });
  }

  return createMetadata({
    title: `${blog.title} | Quran Academy Blog`,
    description: blog.excerpt,
    path: `/blog/${blog.slug}`,
  });
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getPublishedBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <article>
      <section className="relative min-h-130 overflow-hidden bg-black pt-36 text-white">
        <Image
          src={blog.cover_image_url || "/images/cards/card1.webp"}
          alt={blog.title}
          fill
          priority
          className="object-cover opacity-38"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-(--emerald-deep)/86 via-black/56 to-(--emerald-deep)/94" />
        <div className="container-page relative z-10 pb-16">
          <Link
            href="/blog"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white backdrop-blur hover:bg-white/18"
          >
            <ArrowLeft className="size-4" />
            Back to Blog
          </Link>
          <div className="mt-8 max-w-4xl">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-(--gold) px-3 py-1 text-xs font-extrabold text-white">
                {blog.category}
              </span>
              {blog.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-white/12 px-3 py-1 text-xs font-bold">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="font-display mt-5 text-3xl font-bold leading-tight sm:text-5xl">
              {blog.title}
            </h1>
            <p className="mt-5 max-w-3xl text-white/82">{blog.excerpt}</p>
            <div className="mt-6 flex flex-wrap gap-5 text-sm font-bold text-white/82">
              <span>{blog.author?.full_name ?? "Quran Academy"}</span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="size-4 text-(--gold)" />
                {formatDate(blog.published_at)}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="size-4 text-(--gold)" />
                {blog.read_time_minutes} min read
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="container-page py-14 sm:py-18">
        <div className="mx-auto max-w-4xl rounded-3xl border border-(--line-soft) bg-(--surface) p-5 shadow-(--shadow-card) sm:p-10">
          <MarkdownBody body={blog.body} />
        </div>
      </section>
    </article>
  );
}
