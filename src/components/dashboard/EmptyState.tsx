export function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-3xl border border-(--line-soft) bg-(--surface) p-8 text-center shadow-(--shadow-card)">
      <p className="font-display text-2xl font-bold">{title}</p>
      <p className="mt-2 text-sm text-(--ink-muted)">{text}</p>
    </div>
  );
}
