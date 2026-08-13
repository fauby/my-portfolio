"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { id: "work", href: "/#work", label: "Work" },
  { id: "experience", href: "/#experience", label: "Experience" },
  { id: "research", href: "/#research", label: "Research" },
  { id: "about", href: "/#about", label: "About" },
  { id: "contact", href: "/#contact", label: "Contact" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));
  const reduce = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-baseline gap-2.5 font-mono text-[13px] font-medium tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          FAUZAN BYAN
          <span className="hidden text-[10px] font-normal tracking-[0.1em] text-foreground-muted sm:inline">
            [ FIELD NOTES ]
          </span>
        </Link>

        <div className="hidden items-center gap-9 lg:flex">
          <ul className="flex items-center gap-8 font-mono text-[12px] tracking-[0.1em] text-foreground-muted uppercase">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative py-1 transition-colors duration-200 hover:text-foreground ${
                    active === link.id ? "text-accent" : ""
                  }`}
                >
                  {link.label}
                  {active === link.id && (
                    <span className="absolute -bottom-[1px] left-0 h-[1.5px] w-full bg-accent" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <span className="flex items-center gap-2 border-l border-border pl-6 font-mono text-[11px] tracking-[0.1em] text-foreground-muted uppercase">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Available for opportunities
          </span>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-[var(--radius-xs)] border border-border text-foreground"
          >
            <span
              className={`h-px w-4 bg-current transition-transform duration-200 ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-4 bg-current transition-transform duration-200 ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-16 bottom-0 z-40 bg-background lg:hidden"
          >
            <div className="flex h-full flex-col justify-between px-6 py-10">
              <ul className="flex flex-col gap-1 font-mono text-4xl tracking-tight text-foreground uppercase">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={reduce ? false : { opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="border-b border-border py-4"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block transition-colors duration-200 ${
                        active === link.id ? "text-accent" : ""
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.1em] text-foreground-muted uppercase">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
                Available for opportunities
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
