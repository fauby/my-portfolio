import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/content/profile";
import { Button } from "@/components/ui/button";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <p className="font-mono text-[11px] tracking-[0.18em] text-foreground-muted uppercase">
          <span className="text-accent">06</span> / Contact
        </p>
        <h2 className="mt-6 text-[clamp(2.5rem,8vw,5.5rem)] leading-[1] font-medium tracking-tight text-foreground uppercase">
          End of file.
          <br />
          Not the end of the work.
        </h2>
        <p className="mt-6 max-w-md text-base leading-relaxed text-foreground-muted">
          Open to software engineering roles across frontend, mobile, and backend systems.
        </p>

        <div className="mt-9">
          <Button href={`mailto:${profile.email}`} variant="primary">
            {profile.email}
            <ArrowUpRightIcon size={15} weight="bold" />
          </Button>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-8 sm:grid-cols-3">
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-foreground-muted uppercase">
              Email
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-2 block text-foreground transition-colors duration-200 hover:text-accent"
            >
              {profile.email}
            </a>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-foreground-muted uppercase">
              LinkedIn
            </p>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-foreground transition-colors duration-200 hover:text-accent"
            >
              {profile.linkedinLabel} <span aria-hidden="true">&#8599;</span>
            </a>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-[0.18em] text-foreground-muted uppercase">
              GitHub
            </p>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-foreground transition-colors duration-200 hover:text-accent"
            >
              {profile.githubLabel} <span aria-hidden="true">&#8599;</span>
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono text-[13px] font-medium tracking-tight text-foreground">
              {profile.name.toUpperCase()}
            </p>
            <p className="mt-1 font-mono text-[11px] tracking-[0.14em] text-foreground-muted uppercase">
              Software Engineer
            </p>
          </div>
          <p className="font-mono text-[11px] text-foreground-muted">&copy; {year}</p>
        </div>
      </div>
    </footer>
  );
}
