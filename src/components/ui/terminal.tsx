import type { ReactNode } from "react";

type TerminalProps = {
  title: string;
  children: ReactNode;
  variant?: "light" | "dark";
  className?: string;
};

export function Terminal({ title, children, variant = "light", className = "" }: TerminalProps) {
  const isDark = variant === "dark";

  return (
    <div
      className={`overflow-hidden border ${
        isDark ? "border-white/15 bg-[#0d0d0d]" : "border-border bg-surface"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-2 border-b px-4 py-2.5 ${
          isDark ? "border-white/15" : "border-border"
        }`}
      >
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2 w-2 rounded-full bg-foreground-muted/40" />
          <span className="h-2 w-2 rounded-full bg-foreground-muted/40" />
          <span className="h-2 w-2 rounded-full bg-accent" />
        </span>
        <span
          className={`font-mono text-[11px] tracking-wide ${
            isDark ? "text-white/50" : "text-foreground-muted"
          }`}
        >
          {title}
        </span>
      </div>
      <div
        className={`px-4 py-4 font-mono text-[12.5px] leading-[1.7] ${
          isDark ? "text-white/80" : "text-foreground"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function TerminalLine({
  prompt,
  children,
  muted,
}: {
  prompt?: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <div className={`flex gap-2 ${muted ? "text-foreground-muted" : ""}`}>
      {prompt && <span className="shrink-0 text-accent">{prompt}</span>}
      <span className="min-w-0">{children}</span>
    </div>
  );
}
