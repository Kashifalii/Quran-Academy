"use client";

export default function DashboardError() {
  return (
    <section className="container-page py-40">
      <div className="rounded-3xl border border-(--line-soft) bg-(--surface) p-8 shadow-(--shadow-card)">
        <p className="font-bold text-(--emerald)">Unable to load dashboard data.</p>
      </div>
    </section>
  );
}
