import { createClient } from "@/lib/supabase/server";
import type { Blog } from "@/lib/supabase/types";
import { fallbackBlogs } from "./fallback";

const pageSize = 8;

export async function getPublishedBlogs(page = 1) {
  const supabase = await createClient();
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  if (!supabase) {
    const blogs = fallbackBlogs.slice(from, to + 1);
    return {
      blogs,
      total: fallbackBlogs.length,
      pageSize,
      pageCount: Math.ceil(fallbackBlogs.length / pageSize),
    };
  }

  const { data, count } = await supabase
    .from("blogs")
    .select("*, author:profiles(full_name, avatar_url)", { count: "exact" })
    .eq("status", "published")
    .order("published_at", { ascending: false })
    .range(from, to);

  return {
    blogs: (data ?? []) as Blog[],
    total: count ?? 0,
    pageSize,
    pageCount: Math.max(1, Math.ceil((count ?? 0) / pageSize)),
  };
}

export async function getPublishedBlogBySlug(slug: string) {
  const supabase = await createClient();

  if (!supabase) {
    return fallbackBlogs.find((blog) => blog.slug === slug) ?? null;
  }

  const { data } = await supabase
    .from("blogs")
    .select("*, author:profiles(full_name, avatar_url)")
    .eq("slug", slug)
    .eq("status", "published")
    .single();

  return (data as Blog | null) ?? null;
}

export async function getAllBlogsForAdmin() {
  const supabase = await createClient();

  if (!supabase) {
    return fallbackBlogs;
  }

  const { data } = await supabase
    .from("blogs")
    .select("*, author:profiles(full_name, avatar_url)")
    .order("updated_at", { ascending: false });

  return (data ?? []) as Blog[];
}

export async function getBlogForAdmin(id: string) {
  const supabase = await createClient();

  if (!supabase) {
    return fallbackBlogs.find((blog) => blog.id === id) ?? null;
  }

  const { data } = await supabase.from("blogs").select("*").eq("id", id).single();
  return (data as Blog | null) ?? null;
}
