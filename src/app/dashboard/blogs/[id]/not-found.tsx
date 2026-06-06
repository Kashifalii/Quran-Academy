import Link from "next/link";

export default function AdminBlogNotFound() {
  return (
    <div className="rounded-3xl border border-(--line-soft) bg-(--surface) p-8 text-center shadow-(--shadow-card)">
      <h1 className="font-display text-3xl font-bold">Blog post not found</h1>
      <Link href="/dashboard/blogs" className="focus-ring mt-5 inline-flex rounded-full bg-(--gold) px-6 py-3 text-sm font-extrabold text-white">
        Back to Blogs
      </Link>
    </div>
  );
}
