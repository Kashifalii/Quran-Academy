import { notFound } from "next/navigation";
import { BlogForm } from "@/components/dashboard/BlogForm";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { getBlogForAdmin } from "@/lib/data/blogs";

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const blog = await getBlogForAdmin(id);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <DashboardHeader title="Edit Blog Post" description="Update article content, media, and publishing status." />
      <BlogForm blog={blog} />
    </>
  );
}
