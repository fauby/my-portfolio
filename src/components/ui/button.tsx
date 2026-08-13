import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  className?: string;
};

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-[var(--radius-xs)] px-6 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200";

const VARIANTS = {
  primary: "bg-foreground text-background hover:bg-accent hover:text-accent-foreground",
  secondary:
    "border border-border text-foreground hover:border-foreground bg-transparent",
};

export function Button({ href, children, variant = "primary", external, className = "" }: ButtonProps) {
  const classes = `${BASE} ${VARIANTS[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
