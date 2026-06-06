import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function Pagination({
  currentPage,
  pageCount,
}: {
  currentPage: number;
  pageCount: number;
}) {
  if (pageCount <= 1) {
    return null;
  }

  const pages = Array.from({ length: pageCount }, (_, index) => index + 1);

  return (
    <nav className="mt-12 flex flex-wrap justify-center gap-3" aria-label="Blog pagination">
      {pages.map((page) => (
        <Link
          key={page}
          href={`/blog?page=${page}`}
          className={`focus-ring grid size-12 place-items-center rounded-lg text-sm font-extrabold shadow-(--shadow-card) ${
            currentPage === page
              ? "bg-(--gold) text-white"
              : "bg-(--surface) text-(--emerald) hover:bg-(--gold-soft)"
          }`}
        >
          {page}
        </Link>
      ))}
      {currentPage < pageCount ? (
        <Link
          href={`/blog?page=${currentPage + 1}`}
          className="focus-ring grid size-12 place-items-center rounded-lg bg-(--surface) text-(--emerald) shadow-(--shadow-card) hover:bg-(--gold-soft)"
          aria-label="Next page"
        >
          <ChevronRight className="size-5" />
        </Link>
      ) : null}
    </nav>
  );
}
