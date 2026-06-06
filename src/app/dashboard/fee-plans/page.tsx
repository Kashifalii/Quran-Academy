import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DeleteConfirmButton } from "@/components/dashboard/DeleteConfirmButton";
import { EmptyState } from "@/components/dashboard/EmptyState";
import { FeePlanForm } from "@/components/dashboard/FeePlanForm";
import { getAllFeePlansForAdmin } from "@/lib/data/fee-plans";

export default async function FeePlansDashboardPage() {
  const plans = await getAllFeePlansForAdmin();

  return (
    <>
      <DashboardHeader
        title="Fee Plan Management"
        description="Create, edit, delete, and reorder plans shown on the public Fee Plans page."
      />
      <div className="grid gap-7 xl:grid-cols-[0.9fr_1fr]">
        <FeePlanForm />
        <div className="grid gap-4">
          {plans.length > 0 ? (
            plans.map((plan) => (
              <article
                key={plan.id}
                className="rounded-3xl border border-(--line-soft) bg-(--surface) p-5 shadow-(--shadow-card)"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-(--surface-soft) px-3 py-1 text-xs font-extrabold text-(--emerald)">
                        {plan.is_active ? "Active" : "Inactive"}
                      </span>
                      {plan.is_recommended ? (
                        <span className="rounded-full bg-(--gold-soft) px-3 py-1 text-xs font-extrabold text-(--gold-deep)">
                          Recommended
                        </span>
                      ) : null}
                    </div>
                    <h2 className="font-display mt-3 text-xl font-bold">{plan.name}</h2>
                    <p className="mt-1 text-sm font-bold text-(--emerald)">
                      {plan.price} / {plan.billing_period}
                    </p>
                  </div>
                  <DeleteConfirmButton id={plan.id} kind="fee-plan" />
                </div>
                <details className="mt-4">
                  <summary className="cursor-pointer text-sm font-extrabold text-(--emerald)">Edit</summary>
                  <div className="mt-4">
                    <FeePlanForm plan={plan} />
                  </div>
                </details>
              </article>
            ))
          ) : (
            <EmptyState title="No fee plans" text="Create a plan to publish it on the Fee Plans page." />
          )}
        </div>
      </div>
    </>
  );
}
