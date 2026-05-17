"use client";

import { useMemo, useState } from "react";
import { courses } from "@/data/site";
import { CourseCard } from "./CourseCard";

const categories = [
  "All",
  ...Array.from(new Set(courses.map((course) => course.category))),
];

export function CourseFilter() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return courses.filter((course) => {
      const matchesCategory =
        category === "All" || course.category === category;
      const haystack =
        `${course.title} ${course.shortDescription} ${course.category}`.toLowerCase();
      return matchesCategory && haystack.includes(query.toLowerCase());
    });
  }, [category, query]);

  return (
    <div className="mt-10">
      <div className="grid gap-3 rounded-3xl border border-(--line-soft) bg-(--surface) p-4 shadow-(--shadow-card) md:grid-cols-[1fr_auto]">
        <label className="sr-only" htmlFor="course-search">
          Search courses
        </label>
        <input
          id="course-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search courses"
          className="focus-ring min-h-12 rounded-full border border-(--line-soft) bg-white/78 px-5 shadow-inner shadow-black/2"
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`focus-ring cursor-pointer rounded-full px-4 py-2 text-sm font-extrabold transition ${category === item ? "bg-(--gold) text-white shadow-[0_10px_24px_rgba(184,119,25,0.18)]" : "bg-(--surface-soft) text-(--emerald) hover:bg-(--gold-soft)"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="mt-8 text-center text-(--ink-muted)">
          No courses match your search.
        </p>
      ) : null}
    </div>
  );
}
