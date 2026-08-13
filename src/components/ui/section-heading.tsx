type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  description?: string;
};

export function SectionHeading({ index, label, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-muted">
        <span className="text-accent">{index}</span> / {label}
      </p>
      <h2 className="mt-4 text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-foreground-muted">{description}</p>
      )}
    </div>
  );
}
