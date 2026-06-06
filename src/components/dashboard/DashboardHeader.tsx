export function DashboardHeader({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6">
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-(--gold)">
        Dashboard
      </p>
      <h1 className="font-display mt-2 text-3xl font-bold text-(--foreground) sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-2 max-w-3xl text-sm text-(--ink-muted)">{description}</p>
      ) : null}
    </div>
  );
}
