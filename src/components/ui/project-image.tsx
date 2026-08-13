import Image from "next/image";
import { LockIcon } from "@phosphor-icons/react/dist/ssr";

type ProjectImageProps = {
  src: string | null;
  alt: string;
  id: string;
  label: string;
  path: string;
  aspect?: string;
  fit?: "cover" | "contain";
  confidential?: boolean;
  className?: string;
};

export function ProjectImage({
  src,
  alt,
  id,
  label,
  path,
  aspect = "aspect-[16/10]",
  fit = "cover",
  confidential = false,
  className = "",
}: ProjectImageProps) {
  if (src) {
    return (
      <div
        className={`relative ${aspect} overflow-hidden border border-border ${
          fit === "contain" ? "bg-surface-muted" : ""
        } ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          quality={95}
          className={fit === "contain" ? "object-contain p-3" : "object-cover"}
          sizes="(max-width: 1024px) 100vw, 60vw"
        />
      </div>
    );
  }

  if (confidential) {
    return (
      <div
        className={`relative flex ${aspect} flex-col justify-between overflow-hidden border border-border bg-surface-muted p-6 ${className}`}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, var(--border) 0, var(--border) 1px, transparent 1px, transparent 10px)",
          }}
          aria-hidden="true"
        />
        <div className="relative flex items-start justify-between font-mono text-[10px] tracking-[0.14em] text-foreground-muted uppercase">
          <span>{id}</span>
          <span>Client work</span>
        </div>
        <div className="relative flex flex-1 flex-col items-center justify-center gap-2 text-center">
          <LockIcon size={18} className="text-accent" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-foreground uppercase">
            Private
          </span>
          <span className="max-w-[26ch] text-xs leading-relaxed text-foreground-muted">
            Screenshots withheld to protect client confidentiality.
          </span>
        </div>
        <div className="relative flex items-end justify-between font-mono text-[10px] text-foreground-muted">
          <span>{path}</span>
          <span className="border border-accent/40 px-1.5 py-0.5 text-accent">NDA</span>
        </div>
        <CropMarks />
      </div>
    );
  }

  return (
    <div
      data-cursor="explore"
      className={`relative flex ${aspect} flex-col justify-between overflow-hidden border border-border bg-surface-muted p-6 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />
      <div className="relative flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-muted">
        <span>{id}</span>
        <span>JKT / ID</span>
      </div>
      <div className="relative flex flex-1 flex-col items-center justify-center gap-2 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-muted">
          Project Visual
        </span>
        <span className="max-w-[16ch] text-sm leading-tight font-medium tracking-tight text-foreground uppercase">
          {label}
        </span>
      </div>
      <div className="relative flex items-end justify-between font-mono text-[10px] text-foreground-muted">
        <span>{path}</span>
        <span className="border border-border px-1.5 py-0.5 text-accent">RAW</span>
      </div>
      <CropMarks />
    </div>
  );
}

export function PortraitImage({
  src,
  alt,
  className = "",
}: {
  src: string | null;
  alt: string;
  className?: string;
}) {
  if (src) {
    return (
      <div className={`relative aspect-[3/4] overflow-hidden border border-border ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          quality={95}
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex aspect-[3/4] flex-col justify-between overflow-hidden border border-border bg-surface-muted p-6 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
        aria-hidden="true"
      />
      <div className="relative flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.14em] text-foreground-muted">
        <span>Fauzan / 001</span>
        <span>1200 &times; 1600</span>
      </div>
      <div className="relative flex flex-1 flex-col items-center justify-center gap-1 text-center">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-muted">
          Portrait
        </span>
        <span className="text-sm text-foreground-muted">Image placeholder</span>
      </div>
      <div className="relative flex items-end justify-between font-mono text-[10px] text-foreground-muted">
        <span>JKT / ID</span>
        <span className="border border-border px-1.5 py-0.5 text-accent">RAW</span>
      </div>
      <CropMarks />
    </div>
  );
}

function CropMarks() {
  return (
    <>
      <span className="absolute top-2 left-2 h-3 w-3 border-t border-l border-foreground-muted/40" aria-hidden="true" />
      <span className="absolute top-2 right-2 h-3 w-3 border-t border-r border-foreground-muted/40" aria-hidden="true" />
      <span className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-foreground-muted/40" aria-hidden="true" />
      <span className="absolute right-2 bottom-2 h-3 w-3 border-r border-b border-foreground-muted/40" aria-hidden="true" />
    </>
  );
}
