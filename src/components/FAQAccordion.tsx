"use client";

import { useState } from "react";
import { faqs } from "@/data/site";

export function FAQAccordion() {
  const [active, setActive] = useState(0);

  return (
    <div className="mx-auto mt-10 max-w-3xl divide-y divide-(--line-soft) overflow-hidden rounded-3xl border border-(--line-soft) bg-(--surface) shadow-(--shadow-card)">
      {faqs.map((item, index) => (
        <div key={item.question}>
          <button
            type="button"
            className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-bold transition hover:bg-(--surface-soft)"
            onClick={() => setActive(active === index ? -1 : index)}
            aria-expanded={active === index}
          >
            <span className="font-medium text-sm sm:text-base">
              {item.question}
            </span>
            <span className="flex items-center justify-center size-8 shrink-0 place-items-center font-bold rounded-full bg-(--gold-soft) text-(--gold) cursor-pointer">
              {active === index ? "-" : "+"}
            </span>
          </button>
          {active === index ? (
            <p className="px-5 pb-5 text-sm text-(--ink-muted) sm:text-base">
              {item.answer}
            </p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
