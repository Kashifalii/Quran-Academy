import Link from "next/link";
import { navItems } from "@/data/site";
import { ButtonLink } from "./ButtonLink";

export function Footer() {
  return (
    <footer className="relative mt-20 bg-[url('/images/footer-bg.jpg')] bg-cover bg-center bg-no-repeat text-white">
      <span className="absolute inset-0 z-0 bg-(--emerald-deep)/82"></span>
      <div className="container-page relative z-10 py-14">
        <div className="flex flex-col gap-6 border-b border-white/15 pb-12 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm font-semibold text-white/78">
              Become a Part of Our Community
            </p>
            <h2 className="font-display mt-2 text-3xl font-bold sm:text-4xl">
              Inspired? Join Us Right Now!
            </h2>
          </div>
          <ButtonLink href="/registration">Join Community</ButtonLink>
        </div>
        <div className="grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1fr_1.1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="focus-ring flex flex-col items-start gap-4 md:items-center"
            >
              <span className="flex size-24 items-center justify-center rounded-full bg-(--gold) p-2 text-3xl font-black text-white shadow-[0_18px_36px_rgba(0,0,0,0.18)] outline-4 outline-yellow-500/20 sm:size-28 sm:text-4xl">
                قرآن
              </span>
              <span className="font-display text-xl font-bold">
                Quran Academy
              </span>
            </Link>
          </div>
          <div>
            <h3 className="font-display mb-4 text-lg font-bold">Information</h3>
            <p className="max-w-xs text-sm leading-6 text-white/76">
              Quran Academy provides live one-on-one Quran learning with
              qualified male and female teachers, flexible schedules, and
              family-friendly fee plans.
            </p>
          </div>
          <div>
            <h3 className="font-display mb-4 text-lg font-bold">
              Contact Info
            </h3>
            <ul className="space-y-3 text-sm text-white/76">
              <li>Hotline: +1 800 123 4567</li>
              <li>Email: admissions@quranacademy.com</li>
              <li>WhatsApp support available</li>
            </ul>
          </div>
          <div>
            <h3 className="font-display mb-4 text-lg font-bold">Quick Links</h3>
            <ul className="space-y-3 text-sm text-white/76">
              {navItems.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="focus-ring transition hover:text-(--gold)"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 border-t border-white/15 pt-6 text-sm text-white/70 sm:flex-row sm:justify-between">
          <p>Quran Academy © 2026, All Rights Reserved</p>
          <p>Designed for fast, accessible Quran learning.</p>
        </div>
      </div>
    </footer>
  );
}
