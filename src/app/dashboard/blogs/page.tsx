import Link from "next/link";
import { Pencil } from "lucide-react";
import { BlogForm } from "@/components/dashboard/BlogForm";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DeleteConfirmButton } from "@/components/dashboard/DeleteConfirmButton";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { getAllBlogsForAdmin } from "@/lib/data/blogs";

export default async function DashboardBlogsPage() {
  const blogs = await getAllBlogsForAdmin();

  return (
    <>
      <DashboardHeader
        title="Blog Management"
        description="Create, edit, publish, draft, and delete Quran Academy blog posts."
      />
      <div className="grid gap-7 xl:grid-cols-[1fr_0.9fr]">
        <BlogForm />
        <div className="grid gap-4">
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <article
                key={blog.id}
                className="rounded-3xl border border-(--line-soft) bg-(--surface) p-5 shadow-(--shadow-card)"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-extrabold ${
                        blog.status === "published"
                          ? "bg-(--surface-soft) text-(--emerald)"
                          : "bg-(--gold-soft) text-(--gold-deep)"
                      }`}
                    >
                      {blog.status}
                    </span>
                    <h2 className="font-display mt-3 text-xl font-bold">{blog.title}</h2>
                    <p className="mt-1 text-sm text-(--ink-muted)">{blog.slug}</p>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href={`/dashboard/blogs/${blog.id}`}
                      className="focus-ring grid size-10 place-items-center rounded-full bg-(--surface-soft) text-(--emerald)"
                      aria-label={`Edit ${blog.title}`}
                    >
                      <Pencil className="size-4" />
                    </Link>
                    <DeleteConfirmButton id={blog.id} kind="blog" />
                  </div>
                </div>
              </article>
            ))
          ) : (
            <EmptyState title="No blog posts" text="Create the first article with the form." />
          )}
        </div>
      </div>
    </>
  );
}
