import Link from "next/link";
import { BookOpenText, ClipboardList, LayoutDashboard, Mail, ReceiptText } from "lucide-react";
import { SignOutButton } from "./SignOutButton";

const dashboardNav = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/blogs", label: "Blogs", icon: BookOpenText },
  { href: "/dashboard/contacts", label: "Contacts", icon: Mail },
  { href: "/dashboard/registrations", label: "Registrations", icon: ClipboardList },
  { href: "/dashboard/fee-plans", label: "Fee Plans", icon: ReceiptText },
];

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-(--background) pt-32">
      <div className="container-page grid gap-6 py-8 lg:grid-cols-[17rem_1fr]">
        <aside className="rounded-3xl border border-(--line-soft) bg-(--surface) p-4 shadow-(--shadow-card) lg:sticky lg:top-28 lg:h-fit">
          <p className="px-3 text-xs font-extrabold uppercase tracking-[0.18em] text-(--gold)">
            Admin
          </p>
          <nav className="mt-4 grid gap-2" aria-label="Dashboard">
            {dashboardNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-extrabold text-(--emerald) hover:bg-(--surface-soft)"
              >
                <item.icon className="size-4" />
                {item.label}
              </Link>
            ))}
          </nav>
          <SignOutButton />
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
