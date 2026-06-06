import Link from "next/link";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { getAllBlogsForAdmin } from "@/lib/data/blogs";
import { getAllFeePlansForAdmin } from "@/lib/data/fee-plans";
import { getContactSubmissions, getRegistrationSubmissions } from "@/lib/data/submissions";

export default async function DashboardPage() {
  const [blogs, feePlans, contacts, registrations] = await Promise.all([
    getAllBlogsForAdmin(),
    getAllFeePlansForAdmin(),
    getContactSubmissions(),
    getRegistrationSubmissions(),
  ]);

  const stats = [
    ["Blog posts", blogs.length, "/dashboard/blogs"],
    ["Fee plans", feePlans.length, "/dashboard/fee-plans"],
    ["Contacts", contacts.length, "/dashboard/contacts"],
    ["Registrations", registrations.length, "/dashboard/registrations"],
  ] as const;

  return (
    <>
      <DashboardHeader
        title="Dashboard Overview"
        description="Manage Quran Academy articles, inquiries, registration submissions, and public fee plans."
      />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(([label, value, href]) => (
          <Link
            key={label}
            href={href}
            className="focus-ring rounded-3xl border border-(--line-soft) bg-(--surface) p-6 shadow-(--shadow-card) hover:bg-(--surface-soft)"
          >
            <p className="text-sm font-extrabold text-(--emerald)">{label}</p>
            <p className="font-display mt-3 text-4xl font-bold">{value}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
