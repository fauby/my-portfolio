import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react/dist/ssr";

type ArrowLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  className?: string;
};

const BASE =
  "group/arrow inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors duration-200 hover:text-accent";

export function ArrowLink({ href, children, external, className = "" }: ArrowLinkProps) {
  const content = (
    <>
      <span className="border-b border-transparent pb-0.5 transition-colors duration-200 group-hover/arrow:border-accent">
        {children}
      </span>
      <ArrowRightIcon
        size={15}
        weight="bold"
        className="transition-transform duration-200 group-hover/arrow:translate-x-1"
      />
    </>
  );

  const classes = `${BASE} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  if (href.startsWith("mailto:") || href.startsWith("#")) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
