import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { CourseCard } from "@/components/CourseCard";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HomeHero } from "@/components/HomeHero";
import { SectionHeader } from "@/components/SectionHeader";
import { courses } from "@/data/site";
import {
  CalendarClock,
  CircleDollarSign,
  LaptopMinimal,
  ShieldCheck,
  Users,
  Video,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck />,
    title: "Certified Quran teachers",
    para: "Learn with qualified Quran teachers focused on Tajweed, proper recitation, Islamic values, and steady student improvement in every lesson.",
  },
  {
    icon: <Users />,
    title: "Male and female teachers",
    para: "Choose experienced male or female Quran teachers to create a comfortable, respectful, and effective learning environment for students.",
  },
  {
    icon: <CalendarClock />,
    title: "Flexible schedules",
    para: "Pick class timings that fit your daily routine with flexible schedules designed for kids, students, and working professionals.",
  },
  {
    icon: <Video />,
    title: "One-on-one live classes",
    para: "Enjoy personalized one-on-one live Quran classes with focused attention, better interaction, and lessons tailored to your learning pace.",
  },
  {
    icon: <CircleDollarSign />,
    title: "Affordable fee plans",
    para: "Access quality Quran education through affordable fee plans designed to provide excellent learning without financial pressure.",
  },
  {
    icon: <LaptopMinimal />,
    title: "Online learning support",
    para: "Get reliable online learning support with guided lessons, regular progress tracking, and help whenever students need assistance.",
  },
];

const testimonials = [
  {
    name: "Amina S.",
    text: "The trial class helped us choose the right level, and my son became comfortable reading within weeks.",
  },
  {
    name: "Omar K.",
    text: "Patient teachers, clear lesson plans, and flexible timings made Quran learning practical for our family.",
  },
  {
    name: "Fatima R.",
    text: "The female teacher option and regular feedback gave us confidence from the first month.",
  },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="container-page grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div>
          <SectionHeader
            align="left"
            eyebrow="Welcome to Quran Academy"
            title="In the Name of Allah, the Beneficent, the Merciful"
          />
          <p className="mt-6 leading-8 text-(--ink-muted)">
            Quran Academy is a frontend educational portal for families seeking
            structured online Quran learning. Our programs combine qualified
            teachers, personal attention, flexible schedules, and a calm Islamic
            environment for children and adults.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-[1.25rem] border border-(--line-soft) bg-(--surface) p-5 shadow-(--shadow-card)">
              <h3 className="font-display text-xl font-bold">Our Vision</h3>
              <p className="mt-2 text-sm leading-6 text-(--ink-muted)">
                Make Quran learning accessible, respectful, and consistent for
                students worldwide.
              </p>
            </div>
            <div className="rounded-[1.25rem] border border-(--line-soft) bg-(--surface) p-5 shadow-(--shadow-card)">
              <h3 className="font-display text-xl font-bold">Our Mission</h3>
              <p className="mt-2 text-sm leading-6 text-(--ink-muted)">
                Deliver high-quality Quran instruction through caring teachers
                and practical lesson plans.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <ButtonLink href="/registration" variant="secondary">
              Book Free Trial
            </ButtonLink>
          </div>
        </div>
        <div className="relative min-h-90 overflow-hidden rounded-[1.75rem] border border-(--line-soft) shadow-(--shadow-soft)">
          <Image
            src="/images/aboutImg.webp"
            alt="Quran Academy learning environment"
            fill
            priority
            className="object-cover"
            sizes="(min-width: 1024px) 45vw, 100vw"
          />
        </div>
      </section>

      <section className="bg-(--surface-soft) py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Featured Courses"
            title="Online Quran Classes"
            description="Explore structured programs for Quran reading, Tajweed, Hifz, Islamic Studies, and Arabic language."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 3).map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <ButtonLink href="/courses">Explore All Courses</ButtonLink>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="Together We Prosper the House of Allah"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[1.35rem] group border border-(--line-soft) bg-(--surface) p-6 shadow-(--shadow-card) transition-all duration-200 cursor-pointer hover:-translate-y-1 hover:shadow-(--shadow-soft)"
            >
              <span className="rounded-full shadow-sm mb-5 grid size-12 place-items-center bg-(--emerald) text-white group-hover:bg-(--gold) transition-colors duration-300">
                {feature.icon}
              </span>
              <h3 className="font-display text-xl font-bold">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-(--ink-muted)">
                {feature.para}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-16 text-white sm:py-20">
        {/* Overlay */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-r from-(--emerald-deep) via-(--emerald-dark)/82 to-(--emerald-deep)" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_22%,rgba(230,169,54,0.22),transparent_18rem)]" />
        </div>

        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div className="relative min-h-90 overflow-hidden rounded-[1.75rem] border border-white/14 p-3 shadow-[0_22px_70px_rgba(0,0,0,0.2)] outline-4 outline-yellow-500/12">
            <Image
              src="/images/oriantation.webp"
              alt="Student reciting Quran during online lesson"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-(--gold)">
              Upcoming Event
            </p>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl font-bold">
              Grand Quran Learning Orientation
            </h2>
            <p className="mt-5 max-w-xl  text-white/80">
              Join our upcoming Quran learning orientation to explore our
              teaching approach, interact with experienced instructors, and
              understand how online classes are structured for students of all
              ages. This session will help parents and learners choose the right
              program, ask questions directly, and begin their Quran learning
              journey with clarity and confidence.
            </p>
            <div className="mt-8">
              <ButtonLink href="/registration">Register Today</ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-16 sm:py-20">
        <SectionHeader
          eyebrow="Student Feedback"
          title="Trusted by Families Worldwide"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[1.35rem] border border-(--line-soft) bg-(--surface) p-6 shadow-(--shadow-card)"
            >
              <p className="text-(--gold)" aria-label="5 star rating">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </p>
              <p className="mt-4 leading-normal  text-(--ink-muted)">
                {item.text}
              </p>
              <h3 className="mt-5 font-bold text-(--emerald)">{item.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="ornament-bg py-16 sm:py-20">
        <div className="container-page">
          <SectionHeader
            eyebrow="Questions"
            title="Frequently Asked Questions"
          />
          <FAQAccordion />
        </div>
      </section>
    </>
  );
}
