"use client";

import type { FeePlan } from "@/lib/supabase/types";
import { ButtonLink } from "./ButtonLink";

function formatPeriod(period: FeePlan["billing_period"]) {
  if (period === "one_time") {
    return "one-time";
  }

  return period;
}

export function FeeTabs({ plans }: { plans: FeePlan[] }) {
  return (
    <div className="mt-10 rounded-3xl border border-(--line-soft) bg-(--surface) p-4 shadow-(--shadow-card) sm:p-6">
      {plans.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`rounded-[1.25rem] border p-5 ${
                plan.is_recommended
                  ? "border-(--gold) bg-(--gold-soft)"
                  : "border-(--line-soft) bg-white/78"
              }`}
            >
              {plan.is_recommended ? (
                <p className="mb-3 inline-flex rounded-full bg-(--gold) px-3 py-1 text-xs font-extrabold text-white">
                  Recommended
                </p>
              ) : null}
              <h3 className="font-display text-xl font-bold text-(--emerald-deep)">
                {plan.name}
              </h3>
              <p className="mt-3 text-3xl font-black text-(--emerald)">
                {plan.price}
                <span className="text-sm font-bold text-(--ink-muted)">
                  {" "}
                  / {formatPeriod(plan.billing_period)}
                </span>
              </p>
              <ul className="mt-5 grid gap-2 text-sm font-semibold text-(--ink-muted)">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-(--gold)" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-[1.25rem] bg-(--surface-soft) p-6 text-center">
          <p className="font-bold text-(--emerald)">No active fee plans available.</p>
        </div>
      )}
      <div className="mt-8 grid gap-5 rounded-[1.25rem] bg-(--surface-soft) p-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="font-bold text-(--emerald)">1-on-1 Live Separate Lessons</p>
          <p className="mt-1 text-sm text-(--ink-muted)">
            30 minutes per session. Flexible scheduling for children and adults.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <ButtonLink href="/registration">Book Free Trial</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">Contact Us</ButtonLink>
        </div>
      </div>
    </div>
  );
}
