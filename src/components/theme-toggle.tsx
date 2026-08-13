"use client";

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@phosphor-icons/react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="flex h-9 w-9 items-center justify-center rounded-[var(--radius-xs)] border border-border text-foreground-muted transition-colors duration-200 hover:border-foreground hover:text-accent"
    >
      {isDark === null ? (
        <span className="h-4 w-4" />
      ) : isDark ? (
        <SunIcon size={16} weight="regular" />
      ) : (
        <MoonIcon size={16} weight="regular" />
      )}
    </button>
  );
}
