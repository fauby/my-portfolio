import { projects } from "@/content/projects";
import { ProjectRow } from "./project-row";
import { ProjectComposition } from "./project-composition";
import { SectionHeading } from "@/components/ui/section-heading";

export function SelectedWork() {
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        index="01"
        label="Selected Work"
        title="Case studies"
        description="Systems I've built and maintained, spanning mobile, web, infrastructure, and machine learning."
      />

      <div className="mt-14">
        {featured.map((project, i) => (
          <ProjectComposition key={project.slug} project={project} index={i} />
        ))}
      </div>

      {other.length > 0 && (
        <div className="mt-8">
          <p className="font-mono text-[11px] tracking-[0.18em] text-foreground-muted uppercase">
            Additional work
          </p>
          <div className="mt-6 border-t border-border">
            {other.map((project, i) => (
              <ProjectRow key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
