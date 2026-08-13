import { profile } from "@/content/profile";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <p className="font-mono text-[11px] tracking-[0.18em] text-foreground-muted uppercase">
        <span className="text-accent">05</span> / About
      </p>
      <h2 className="mt-6 max-w-4xl text-[clamp(2rem,5.5vw,3.75rem)] leading-[1.05] font-medium tracking-tight text-foreground uppercase">
        I like understanding what happens behind the interface.
      </h2>

      <div className="mt-10 max-w-[65ch] space-y-5 border-t border-border pt-10 text-base leading-relaxed text-foreground-muted sm:text-lg">
        {profile.about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
