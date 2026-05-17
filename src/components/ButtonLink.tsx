import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
};

const styles = {
  primary:
    "bg-[var(--gold)] text-white shadow-[0_10px_24px_rgba(184,119,25,0.24)] hover:bg-[var(--gold-deep)]",
  secondary:
    "border border-[var(--line-soft)] bg-white/86 text-(--emerald) shadow-[var(--shadow-card)] hover:bg-[var(--surface-soft)]",
  light:
    "border border-white/45 bg-white/92 text-[var(--emerald-dark)] shadow-[0_12px_28px_rgba(0,0,0,0.12)] hover:bg-[var(--gold-soft)]",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-11 items-center justify-center rounded-full px-5 text-xs font-extrabold tracking-wide transition sm:px-6 min-[480px]:text-sm ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
