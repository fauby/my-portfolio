export function Diagram({ lines, className = "" }: { lines: string[]; className?: string }) {
  return (
    <div className={`border border-border bg-surface-muted px-5 py-4 ${className}`}>
      <p className="mb-2 font-mono text-[10px] tracking-[0.14em] text-foreground-muted uppercase">
        System path
      </p>
      <pre className="overflow-x-auto font-mono text-[12px] leading-[1.6] whitespace-pre text-foreground">
        {lines.join("\n")}
      </pre>
    </div>
  );
}
