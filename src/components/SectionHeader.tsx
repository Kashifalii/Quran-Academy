type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      {eyebrow ? (
        <p className="mb-2 text-xs font-extrabold uppercase tracking-[0.18em] text-(--gold) sm:text-sm">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold leading-tight text-[var(--foreground)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-sm leading-7 text-(--ink-muted) sm:mt-4 sm:text-base">
          {description}
        </p>
      ) : null}
      <div
        className={
          align === "center"
            ? "mx-auto mt-5 h-1.5 w-16 rounded-full bg-[var(--gold)]"
            : "mt-5 h-1.5 w-16 rounded-full bg-[var(--gold)]"
        }
      />
    </div>
  );
}
