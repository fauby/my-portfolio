import { ArrowRightIcon, ArrowUpRightIcon, GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/content/profile";
import { Button } from "@/components/ui/button";
import { PortraitImage } from "@/components/ui/project-image";
import { images } from "@/content/images";

const STACK = ["React", "React Native", "TypeScript", "Laravel", "Python", "Machine Learning"];

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-14 pb-20 sm:pt-20">
      <p className="font-mono text-xs tracking-[0.18em] text-foreground-muted uppercase">
        Field notes <span className="text-accent">/</span> 2024 - 2026
      </p>

      <div className="mt-6 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-10">
        <div>
          <h1 className="text-[clamp(1.9rem,4.6vw,3.1rem)] leading-[1.03] font-medium tracking-tighter text-foreground uppercase">
            Muhammad
            <br />
            Fauzan Abyandani
          </h1>
          <p className="mt-3 text-[clamp(2.75rem,8vw,6rem)] leading-[0.9] font-medium tracking-tighter text-foreground uppercase">
            Software
            <br />
            Engineer
          </p>

          <p className="mt-8 max-w-md text-base leading-relaxed text-foreground-muted sm:text-lg">
            I build and work across mobile, web, testing, infrastructure, and machine
            learning, currently as a frontend software developer in Jakarta.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/#work" variant="primary">
              View My Work
              <ArrowRightIcon size={15} weight="bold" />
            </Button>
            <Button href={`mailto:${profile.email}`} variant="secondary">
              Get in Touch
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-5 font-mono text-xs text-foreground-muted">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-accent"
            >
              <GithubLogoIcon size={14} />
              {profile.githubLabel}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-accent"
            >
              <LinkedinLogoIcon size={14} />
              {profile.linkedinLabel}
              <ArrowUpRightIcon size={10} />
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <PortraitImage src={images.portrait} alt={profile.name} />
        </div>
      </div>

      <div className="mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-border pt-6 font-mono text-[11px] text-foreground-muted">
        {STACK.map((item, i) => (
          <span key={item} className="flex items-center gap-3">
            {item}
            {i < STACK.length - 1 && <span className="text-border">/</span>}
          </span>
        ))}
      </div>
    </section>
  );
}
