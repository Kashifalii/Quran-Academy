import type { Blog, FeePlan } from "@/lib/supabase/types";

const now = new Date("2026-06-04T10:00:00.000Z").toISOString();

export const fallbackBlogs: Blog[] = [
  {
    id: "tajweed-classes-online",
    title: "Quran Tajweed Classes Online: Comprehensive Guide for Kids and Adults",
    slug: "quran-tajweed-classes-online",
    excerpt:
      "Learning the Quran with proper pronunciation is essential for every Muslim family seeking accurate and confident recitation.",
    cover_image_url: "/images/cards/card3.webp",
    body: `## Why Tajweed Is Important in Quran Learning

Tajweed is the art of correct Quranic recitation. It teaches students how to pronounce each Arabic letter accurately, apply rules of elongation, and maintain the rhythm and beauty of Quran recitation.

## Benefits of Quran Tajweed Classes Online

Online classes make structured Quran education accessible for families with busy schedules and different time zones.

### 1. Personalised Attention

One-on-one lessons let teachers focus on pronunciation errors, revision needs, and steady improvement.

### 2. Flexible Scheduling

Families can choose timings that fit school, work, and home routines.

### 3. Qualified Teachers

Experienced teachers guide students through makharij, rules, and practical recitation.

## Final Thoughts

With consistency, patient teaching, and regular revision, online Tajweed classes can help students build a lifelong relationship with Quran recitation.`,
    author_id: null,
    category: "Tajweed",
    tags: ["Tajweed", "Online Classes"],
    status: "published",
    read_time_minutes: 5,
    published_at: now,
    created_at: now,
    updated_at: now,
    author: { full_name: "Quran Academy", avatar_url: null },
  },
  {
    id: "surah-mulk-benefits",
    title: "Surah Al-Mulk: Meaning, Virtues, Benefits, and Lessons for Every Muslim",
    slug: "surah-al-mulk-benefits",
    excerpt:
      "A concise guide to the meaning, virtues, and daily lessons found in Surah Al-Mulk.",
    cover_image_url: "/images/cards/card2.webp",
    body: `## Introduction

Surah Al-Mulk reminds believers of Allah's complete authority over creation and invites reflection on accountability, gratitude, and worship.

## Key Lessons

The surah encourages humility, awareness of the Hereafter, and trust in Allah during daily life.

## Benefits for Families

Reading together can create a calm home routine and help children connect Quran recitation with meaning.`,
    author_id: null,
    category: "Quran",
    tags: ["Surah", "Reflection"],
    status: "published",
    read_time_minutes: 4,
    published_at: "2026-05-19T10:00:00.000Z",
    created_at: "2026-05-19T10:00:00.000Z",
    updated_at: "2026-05-19T10:00:00.000Z",
    author: { full_name: "Quran Academy", avatar_url: null },
  },
  {
    id: "surah-rahman-benefits",
    title: "Surah Rahman Benefits for Mental Peace and Calmness",
    slug: "surah-rahman-benefits",
    excerpt:
      "Explore how Surah Rahman nurtures gratitude, reflection, and calm remembrance.",
    cover_image_url: "/images/cards/card5.webp",
    body: `## A Surah of Mercy

Surah Rahman repeatedly reminds us of Allah's favors and invites the heart to respond with gratitude.

## Daily Reflection

Reciting and studying its meanings can support a peaceful Quran routine for adults and children.`,
    author_id: null,
    category: "Reflection",
    tags: ["Surah Rahman", "Peace"],
    status: "published",
    read_time_minutes: 3,
    published_at: "2026-05-13T10:00:00.000Z",
    created_at: "2026-05-13T10:00:00.000Z",
    updated_at: "2026-05-13T10:00:00.000Z",
    author: { full_name: "Quran Academy", avatar_url: null },
  },
  {
    id: "daily-quran-reading",
    title: "The Power of Daily Quran Reading in Transforming Your Life",
    slug: "daily-quran-reading",
    excerpt:
      "Small, consistent reading habits can transform a family's connection with the Quran.",
    cover_image_url: "/images/cards/card6.webp",
    body: `## Consistency Matters

A short daily Quran routine is often easier to maintain than occasional long sessions.

## Build a Family Rhythm

Set a regular time, keep the goal realistic, and pair recitation with meaning where possible.`,
    author_id: null,
    category: "Habits",
    tags: ["Reading", "Family"],
    status: "published",
    read_time_minutes: 3,
    published_at: "2026-04-20T10:00:00.000Z",
    created_at: "2026-04-20T10:00:00.000Z",
    updated_at: "2026-04-20T10:00:00.000Z",
    author: { full_name: "Quran Academy", avatar_url: null },
  },
];

export const fallbackFeePlans: FeePlan[] = [
  {
    id: "usa-5-lessons",
    name: "5 Lessons/Week",
    price: "$85",
    billing_period: "monthly",
    features: ["20 lessons per month", "30 minute sessions", "Sibling fee: $69"],
    is_recommended: true,
    is_active: true,
    display_order: 1,
    created_at: now,
    updated_at: now,
  },
  {
    id: "usa-3-lessons",
    name: "3 Lessons/Week",
    price: "$58",
    billing_period: "monthly",
    features: ["12 lessons per month", "30 minute sessions", "Sibling fee: $47"],
    is_recommended: false,
    is_active: true,
    display_order: 2,
    created_at: now,
    updated_at: now,
  },
  {
    id: "usa-2-lessons",
    name: "2 Lessons/Week",
    price: "$42",
    billing_period: "monthly",
    features: ["8 lessons per month", "30 minute sessions", "Sibling fee: $34"],
    is_recommended: false,
    is_active: true,
    display_order: 3,
    created_at: now,
    updated_at: now,
  },
];
