"use client";

import { useState } from "react";
import { deleteBlogPost, deleteFeePlan } from "@/app/dashboard/actions";

type DeleteKind = "blog" | "fee-plan";

export function DeleteConfirmButton({
  id,
  kind,
  label = "Delete",
}: {
  id: string;
  kind: DeleteKind;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const action = kind === "blog" ? deleteBlogPost : deleteFeePlan;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="focus-ring rounded-full border border-red-200 px-4 py-2 text-xs font-extrabold text-red-700"
      >
        {label}
      </button>
      {open ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/45 p-4">
          <div className="w-full max-w-sm rounded-3xl border border-(--line-soft) bg-(--surface) p-6 shadow-2xl">
            <h2 className="font-display text-2xl font-bold">Confirm delete</h2>
            <p className="mt-2 text-sm text-(--ink-muted)">
              This item will be permanently removed from the dashboard.
            </p>
            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="focus-ring rounded-full bg-(--surface-soft) px-5 py-2.5 text-sm font-extrabold text-(--emerald)"
              >
                Cancel
              </button>
              <form action={action}>
                <input type="hidden" name="id" value={id} />
                <button
                  type="submit"
                  className="focus-ring rounded-full bg-red-700 px-5 py-2.5 text-sm font-extrabold text-white"
                >
                  Delete
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
