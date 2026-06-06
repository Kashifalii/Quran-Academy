"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import type { BillingPeriod, BlogStatus } from "@/lib/supabase/types";

function stringValue(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function optionalString(value: string) {
  return value.length > 0 ? value : null;
}

function parseTags(value: string) {
  return value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function parseFeatures(value: string) {
  return value
    .split("\n")
    .map((feature) => feature.trim())
    .filter(Boolean);
}

export async function saveBlogPost(formData: FormData) {
  await requireAdmin();
  const supabase = await createClient();

  if (!supabase) {
    redirect("/dashboard/blogs?error=missing-supabase");
  }

  const id = stringValue(formData, "id");
  const title = stringValue(formData, "title");
  const slug = stringValue(formData, "slug");
  const status = stringValue(formData, "status") as BlogStatus;
  const coverImage = formData.get("cover_image");
  let coverImageUrl = stringValue(formData, "cover_image_url");

  if (coverImage instanceof File && coverImage.size > 0) {
    const extension = coverImage.name.split(".").pop() ?? "webp";
    const filePath = `blogs/${slug}-${Date.now()}.${extension}`;
    const { error: uploadError } = await supabase.storage
      .from("blog-covers")
      .upload(filePath, coverImage, { upsert: true });

    if (uploadError) {
      redirect("/dashboard/blogs?error=upload-failed");
    }

    const { data } = supabase.storage.from("blog-covers").getPublicUrl(filePath);
    coverImageUrl = data.publicUrl;
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const payload = {
    title,
    slug,
    excerpt: stringValue(formData, "excerpt"),
    cover_image_url: optionalString(coverImageUrl),
    body: stringValue(formData, "body"),
    author_id: user?.id ?? null,
    category: stringValue(formData, "category"),
    tags: parseTags(stringValue(formData, "tags")),
    status,
    read_time_minutes: Number(stringValue(formData, "read_time_minutes") || "1"),
    published_at: status === "published" ? new Date().toISOString() : null,
  };

  if (id) {
    await supabase.from("blogs").update(payload).eq("id", id);
  } else {
    await supabase.from("blogs").insert(payload);
  }

  revalidatePath("/blog");
  revalidatePath("/dashboard/blogs");
  redirect("/dashboard/blogs");
}

export async function deleteBlogPost(formData: FormData) {
  await requireAdmin();
  const supabase = await createClient();

  if (!supabase) {
    redirect("/dashboard/blogs?error=missing-supabase");
  }

  await supabase.from("blogs").delete().eq("id", stringValue(formData, "id"));
  revalidatePath("/blog");
  revalidatePath("/dashboard/blogs");
}

export async function saveFeePlan(formData: FormData) {
  await requireAdmin();
  const supabase = await createClient();

  if (!supabase) {
    redirect("/dashboard/fee-plans?error=missing-supabase");
  }

  const id = stringValue(formData, "id");
  const payload = {
    name: stringValue(formData, "name"),
    price: stringValue(formData, "price"),
    billing_period: stringValue(formData, "billing_period") as BillingPeriod,
    features: parseFeatures(stringValue(formData, "features")),
    is_recommended: formData.get("is_recommended") === "on",
    is_active: formData.get("is_active") === "on",
    display_order: Number(stringValue(formData, "display_order") || "0"),
  };

  if (id) {
    await supabase.from("fee_plans").update(payload).eq("id", id);
  } else {
    await supabase.from("fee_plans").insert(payload);
  }

  revalidatePath("/fee-plans");
  revalidatePath("/dashboard/fee-plans");
}

export async function deleteFeePlan(formData: FormData) {
  await requireAdmin();
  const supabase = await createClient();

  if (!supabase) {
    redirect("/dashboard/fee-plans?error=missing-supabase");
  }

  await supabase.from("fee_plans").delete().eq("id", stringValue(formData, "id"));
  revalidatePath("/fee-plans");
  revalidatePath("/dashboard/fee-plans");
}
