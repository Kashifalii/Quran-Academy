import type { Metadata } from "next";
import { BookOpenText } from "lucide-react";
import { BlogCard } from "@/components/blog/BlogCard";
import { Pagination } from "@/components/blog/Pagination";
import { PageHero } from "@/components/PageHero";
import { SectionHeader } from "@/components/SectionHeader";
import { getPublishedBlogs } from "@/lib/data/blogs";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Quran Academy Blog | Quran Learning Guides and Reflections",
  description:
    "Read Quran learning guides, Tajweed tips, Surah reflections, and family-focused online Quran education articles.",
  path: "/blog",
});

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Math.max(1, Number(params.page ?? "1"));
  const { blogs, pageCount } = await getPublishedBlogs(currentPage);

  return (
    <>
      <PageHero
        title="Quran Academy Blog"
        subtitle="Guides, reflections, and practical help for families learning Quran online."
        icon={<BookOpenText className="size-8" />}
      />
      <section className="container-page py-16 sm:py-20">
        <SectionHeader
          align="left"
          eyebrow="Latest Articles"
          title="Quran Learning Resources"
          description="Browse published articles from Quran Academy teachers and coordinators."
        />
        {blogs.length > 0 ? (
          <>
            <div className="mt-10 grid gap-7 lg:grid-cols-2">
              {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
            <Pagination currentPage={currentPage} pageCount={pageCount} />
          </>
        ) : (
          <div className="mt-10 rounded-3xl border border-(--line-soft) bg-(--surface) p-8 text-center shadow-(--shadow-card)">
            <p className="font-bold text-(--emerald)">No published articles yet.</p>
            <p className="mt-2 text-sm text-(--ink-muted)">
              Published blog posts will appear here automatically.
            </p>
          </div>
        )}
      </section>
    </>
  );
}
