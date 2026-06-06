"use client";

import { useMemo, useState } from "react";

export type SubmissionColumn<T> = {
  key: keyof T;
  label: string;
};

export function SubmissionTable<T extends Record<string, string | null>>({
  rows,
  columns,
}: {
  rows: T[];
  columns: SubmissionColumn<T>[];
}) {
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<keyof T>(columns[0].key);
  const [direction, setDirection] = useState<"asc" | "desc">("desc");

  const filteredRows = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return rows
      .filter((row) =>
        normalizedQuery
          ? Object.values(row).some((value) =>
              String(value ?? "").toLowerCase().includes(normalizedQuery),
            )
          : true,
      )
      .sort((a, b) => {
        const left = String(a[sortKey] ?? "");
        const right = String(b[sortKey] ?? "");
        return direction === "asc" ? left.localeCompare(right) : right.localeCompare(left);
      });
  }, [direction, query, rows, sortKey]);

  return (
    <div className="rounded-3xl border border-(--line-soft) bg-(--surface) p-4 shadow-(--shadow-card)">
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search submissions"
        className="focus-ring mb-4 min-h-12 w-full rounded-2xl border border-(--line-soft) bg-white/80 px-4 text-sm"
      />
      <div className="overflow-x-auto">
        <table className="w-full min-w-190 text-left">
          <thead>
            <tr className="bg-(--emerald-dark) text-white">
              {columns.map((column) => (
                <th key={String(column.key)} className="px-4 py-3 text-sm">
                  <button
                    type="button"
                    className="font-extrabold"
                    onClick={() => {
                      setSortKey(column.key);
                      setDirection((value) => (value === "asc" ? "desc" : "asc"));
                    }}
                  >
                    {column.label}
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredRows.map((row, index) => (
              <tr key={`${row.id ?? index}`} className="border-b border-(--line-soft)">
                {columns.map((column) => (
                  <td key={String(column.key)} className="max-w-90 px-4 py-3 text-sm text-(--ink-muted)">
                    {String(row[column.key] ?? "-")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
