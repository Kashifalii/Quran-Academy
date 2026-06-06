"use client";

import { useMemo, useState } from "react";
import type { Blog } from "@/lib/supabase/types";
import { saveBlogPost } from "@/app/dashboard/actions";

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function BlogForm({ blog }: { blog?: Blog | null }) {
  const [title, setTitle] = useState(blog?.title ?? "");
  const generatedSlug = useMemo(() => slugify(title), [title]);
  const [slug, setSlug] = useState(blog?.slug ?? generatedSlug);

  return (
    <form
      action={saveBlogPost}
      className="grid gap-4 rounded-3xl border border-(--line-soft) bg-(--surface) p-5 shadow-(--shadow-card) sm:p-7"
    >
      <input type="hidden" name="id" value={blog?.id ?? ""} />
      <label className="grid min-w-0 gap-2 text-sm font-extrabold text-(--emerald)">
        Title
        <input
          required
          name="title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
            if (!blog) {
              setSlug(slugify(event.target.value));
            }
          }}
          className="focus-ring min-h-12 w-full min-w-0 rounded-2xl border border-(--line-soft) bg-white/80 px-4 font-normal text-black"
        />
      </label>
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <label className="grid min-w-0 gap-2 text-sm font-extrabold text-(--emerald)">
          Slug
          <input
            required
            name="slug"
            value={slug}
            onChange={(event) => setSlug(event.target.value)}
            className="focus-ring min-h-12 w-full min-w-0 rounded-2xl border border-(--line-soft) bg-white/80 px-4 font-normal text-black"
          />
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-extrabold text-(--emerald)">
          Category
          <input
            required
            name="category"
            defaultValue={blog?.category ?? ""}
            className="focus-ring min-h-12 w-full min-w-0 rounded-2xl border border-(--line-soft) bg-white/80 px-4 font-normal text-black"
          />
        </label>
      </div>
      <label className="grid min-w-0 gap-2 text-sm font-extrabold text-(--emerald)">
        Excerpt
        <textarea
          required
          name="excerpt"
          defaultValue={blog?.excerpt ?? ""}
          rows={3}
          className="focus-ring w-full min-w-0 rounded-2xl border border-(--line-soft) bg-white/80 p-4 font-normal text-black"
        />
      </label>
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <label className="grid min-w-0 gap-2 text-sm font-extrabold text-(--emerald)">
          Cover image upload
          <input
            name="cover_image"
            type="file"
            accept="image/*"
            className="focus-ring min-h-12 w-full min-w-0 rounded-2xl border border-(--line-soft) bg-white/80 px-4 py-3 text-sm font-normal text-black"
          />
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-extrabold text-(--emerald)">
          Cover image URL
          <input
            name="cover_image_url"
            defaultValue={blog?.cover_image_url ?? ""}
            className="focus-ring min-h-12 w-full min-w-0 rounded-2xl border border-(--line-soft) bg-white/80 px-4 font-normal text-black"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <label className="grid min-w-0 gap-2 text-sm font-extrabold text-(--emerald)">
          Tags
          <input
            name="tags"
            defaultValue={blog?.tags.join(", ") ?? ""}
            placeholder="Tajweed, Kids"
            className="focus-ring min-h-12 w-full min-w-0 rounded-2xl border border-(--line-soft) bg-white/80 px-4 font-normal text-black"
          />
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-extrabold text-(--emerald)">
          Read time
          <input
            required
            name="read_time_minutes"
            type="number"
            min="1"
            defaultValue={blog?.read_time_minutes ?? 3}
            className="focus-ring min-h-12 w-full min-w-0 rounded-2xl border border-(--line-soft) bg-white/80 px-4 font-normal text-black"
          />
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-extrabold text-(--emerald)">
          Status
          <select
            name="status"
            defaultValue={blog?.status ?? "draft"}
            className="focus-ring min-h-12 w-full min-w-0 rounded-2xl border border-(--line-soft) bg-white/80 px-4 font-normal text-black"
          >
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </label>
      </div>
      <label className="grid min-w-0 gap-2 text-sm font-extrabold text-(--emerald)">
        Body (Markdown or HTML)
        <textarea
          required
          name="body"
          defaultValue={blog?.body ?? ""}
          rows={14}
          className="focus-ring w-full min-w-0 rounded-2xl border border-(--line-soft) bg-white/80 p-4 font-mono text-sm font-normal text-black"
        />
      </label>
      <button
        type="submit"
        className="focus-ring justify-self-start rounded-full bg-(--gold) px-8 py-3 text-sm font-extrabold text-white shadow-[0_10px_24px_rgba(184,119,25,0.24)]"
      >
        Save Blog
      </button>
    </form>
  );
}
