import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle?: string;
  image?: string;
  icon?: React.ReactNode;
};

export function PageHero({ title, subtitle, icon }: PageHeroProps) {
  return (
    <section className="relative grid min-h-[420px] place-items-center overflow-hidden bg-black text-center text-white">
      <Image
        src="/images/course.jpg"
        alt={title + " Image"}
        fill
        priority
        className="object-cover object-center opacity-42"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-linear-to-b from-[var(--emerald-deep)]/86 via-black/52 to-[var(--emerald-deep)]/88" />
      <div className="container-page relative z-10 pt-28">
        <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-2xl border border-white/18 bg-(--gold) shadow-[0_14px_34px_rgba(184,119,25,0.24)]">
          {icon}
        </div>
        <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/82 sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
