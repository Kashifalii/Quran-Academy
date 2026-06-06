import Link from "next/link";

export default function BlogPostNotFound() {
  return (
    <section className="container-page py-40">
      <div className="rounded-3xl border border-(--line-soft) bg-(--surface) p-8 text-center shadow-(--shadow-card)">
        <h1 className="font-display text-3xl font-bold">Article not found</h1>
        <Link
          href="/blog"
          className="focus-ring mt-5 inline-flex rounded-full bg-(--gold) px-6 py-3 text-sm font-extrabold text-white"
        >
          Back to Blog
        </Link>
      </div>
    </section>
  );
}
