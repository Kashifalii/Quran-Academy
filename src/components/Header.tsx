"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navItems } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute inset-x-0 top-0 z-30 text-white">
      <div className="border-b border-white/10 bg-(--emerald-deep)/55 backdrop-blur-xl">
        <div className="container-page flex min-h-11 items-center justify-between gap-4 text-xs font-semibold sm:text-sm">
          <p className="cursor-pointer">
            <span className="font-bold">Call Us:</span> +1 800 123 4567
          </p>
          <p className="hidden sm:block">Online Quran classes for families worldwide</p>
          <div
            className=" items-center gap-4 flex"
            aria-label="Social links"
          >
            <Link
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="focus-ring font-bold text-white/86 transition hover:text-(--gold)"
            >
              f
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="linkedin"
              className="focus-ring font-bold text-white/86 transition hover:text-(--gold)"
            >
              in
            </Link>
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="focus-ring font-bold text-white/86 transition hover:text-(--gold)"
            >
              ig
            </Link>
          </div>
        </div>
      </div>
      <nav
        className="container-page mt-3 flex min-h-16 items-center justify-between gap-5 rounded-full border border-white/14 bg-black/24 px-4 backdrop-blur-xl sm:px-5"
        aria-label="Main navigation"
      >
        <Link href="/" className="focus-ring flex items-center gap-3">
          <span className="flex size-11 items-center justify-center rounded-full bg-(--gold) p-2 text-lg font-black text-white shadow-[0_10px_22px_rgba(230,169,54,0.22)] outline-4 outline-yellow-500/20">
            قرآن
          </span>
          <span className="font-display text-md md:text-xl font-bold">
            Quran Academy
          </span>
        </Link>
        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`focus-ring rounded-full px-2 py-1 text-sm font-extrabold transition hover:text-(--gold)
                pathname === item.href ? "text-[var(--gold)]" : "text-white/88"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/fee-plans"
            className="focus-ring rounded-full bg-(--gold) px-5 py-2.5 text-sm font-extrabold shadow-[0_10px_24px_rgba(184,119,25,0.24)] transition hover:bg-(--gold-deep)"
          >
            Fee Plans
          </Link>
        </div>
        <button
          type="button"
          className="focus-ring grid size-11 place-items-center rounded-full border border-white/30 bg-white/10 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <span className="h-0.5 w-5 bg-white shadow-[0_7px_0_white,0_-7px_0_white]" />
        </button>
      </nav>
      {open ? (
        <div className="container-page mt-3 rounded-3xl border border-white/10 bg-(--emerald-dark)/96 p-4 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring rounded-2xl px-3 py-2.5 text-sm font-bold hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
