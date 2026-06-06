"use client";

import type { FeePlan } from "@/lib/supabase/types";
import { saveFeePlan } from "@/app/dashboard/actions";

export function FeePlanForm({ plan }: { plan?: FeePlan }) {
  return (
    <form
      action={saveFeePlan}
      className="grid gap-4 rounded-3xl border border-(--line-soft) bg-(--surface) p-5 shadow-(--shadow-card)"
    >
      <input type="hidden" name="id" value={plan?.id ?? ""} />
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <label className="grid min-w-0 gap-2 text-sm font-extrabold text-(--emerald)">
          Plan name
          <input
            required
            name="name"
            defaultValue={plan?.name ?? ""}
            className="focus-ring min-h-12 w-full min-w-0 rounded-2xl border border-(--line-soft) bg-white/80 px-4 font-normal text-black"
          />
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-extrabold text-(--emerald)">
          Price
          <input
            required
            name="price"
            defaultValue={plan?.price ?? ""}
            className="focus-ring min-h-12 w-full min-w-0 rounded-2xl border border-(--line-soft) bg-white/80 px-4 font-normal text-black"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <label className="grid min-w-0 gap-2 text-sm font-extrabold text-(--emerald)">
          Billing period
          <select
            name="billing_period"
            defaultValue={plan?.billing_period ?? "monthly"}
            className="focus-ring min-h-12 w-full min-w-0 rounded-2xl border border-(--line-soft) bg-white/80 px-4 font-normal text-black"
          >
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="one_time">One time</option>
          </select>
        </label>
        <label className="grid min-w-0 gap-2 text-sm font-extrabold text-(--emerald)">
          Display order
          <input
            required
            name="display_order"
            type="number"
            defaultValue={plan?.display_order ?? 0}
            className="focus-ring min-h-12 w-full min-w-0 rounded-2xl border border-(--line-soft) bg-white/80 px-4 font-normal text-black"
          />
        </label>
      </div>
      <label className="grid min-w-0 gap-2 text-sm font-extrabold text-(--emerald)">
        Features (one per line)
        <textarea
          required
          name="features"
          rows={5}
          defaultValue={plan?.features.join("\n") ?? ""}
          className="focus-ring w-full min-w-0 rounded-2xl border border-(--line-soft) bg-white/80 p-4 font-normal text-black"
        />
      </label>
      <div className="flex flex-wrap gap-5">
        <label className="flex items-center gap-2 text-sm font-extrabold text-(--emerald)">
          <input name="is_recommended" type="checkbox" defaultChecked={plan?.is_recommended ?? false} />
          Recommended
        </label>
        <label className="flex items-center gap-2 text-sm font-extrabold text-(--emerald)">
          <input name="is_active" type="checkbox" defaultChecked={plan?.is_active ?? true} />
          Active
        </label>
      </div>
      <button
        type="submit"
        className="focus-ring justify-self-start rounded-full bg-(--gold) px-6 py-3 text-sm font-extrabold text-white"
      >
        Save Plan
      </button>
    </form>
  );
}
