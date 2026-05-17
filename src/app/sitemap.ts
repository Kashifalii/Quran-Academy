import type { MetadataRoute } from "next";
import { courses, materials } from "@/data/site";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/courses", "/teachers/male", "/teachers/female", "/fee-plans", "/materials", "/registration", "/contact"];
  const courseRoutes = courses.map((course) => `/courses/${course.slug}`);
  const materialRoutes = materials.map((material) => `/materials/${material.slug}`);

  return [...staticRoutes, ...courseRoutes, ...materialRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date("2026-05-06"),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
