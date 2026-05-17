import Image from "next/image";
import { ButtonLink } from "./ButtonLink";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden text-white">
      <div className="hidden md:block">
        <Image
          src="/images/Hero-bg.webp"
          alt="Online Quran Academy"
          fill
          priority
          fetchPriority="high"
          quality={70}
          sizes="100vw"
          className="object-cover object-center -z-20"
        />
      </div>

      <div className="absolute md:hidden inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-r from-(--emerald-deep) to-(--emerald-deep)" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_22%,rgba(230,169,54,0.22),transparent_18rem)]" />
      </div>

      <div className="container-page relative grid h-auto md:min-h-190 items-center gap-10 pb-16 pt-44 sm:pt-40 lg:min-h-195 lg:pb-0 lg:pt-32 md:grid-cols-[1fr_0.86fr]">
           <div className="md:max-w-2xl w-full">
          <p className="mb-3 w-fit rounded-full border border-white/14 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-(--gold-soft) backdrop-blur-md sm:text-sm">
            Online Quran Academy
          </p>

          <h1 className="font-display text-3xl font-bold sm:text-5xl md:text-6xl xl:text-7xl">
            Pray to Allah and Learning Quran with Confidence
          </h1>

          <p className="mt-4 max-w-2xl text-sm text-white/82 sm:mt-5 sm:text-lg">
            Live one-on-one Quran classes with certified male and female
            teachers, flexible schedules, and a caring Islamic learning
            environment for every family.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/registration">Book Free Trial</ButtonLink>

            <ButtonLink href="/courses" variant="light">
              Explore Courses
            </ButtonLink>
          </div>
        </div>

        <div className="relative hidden min-h-107.5 overflow-hidden rounded-4xl border border-white/18 bg-white/10 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur md:block">
          <Image
            src="/images/heroImg.webp"
            alt="Student learning Quran online"
            fill
            quality={75}
            sizes="(max-width:768px) 0px, (max-width:1024px) 40vw, 420px"
            className="object-cover p-3"
          />
        </div>
      </div>
    </section>
  );
}