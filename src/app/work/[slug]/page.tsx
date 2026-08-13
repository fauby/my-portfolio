import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon, LockIcon } from "@phosphor-icons/react/dist/ssr";
import { projects } from "@/content/projects";
import { ProjectImage } from "@/components/ui/project-image";
import { Diagram } from "@/components/ui/diagram";
import { images } from "@/content/images";

export function generateStaticParams() {
  return projects.filter((p) => p.caseStudy).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: `${project.name} - Case Study`,
      description: project.description,
    },
  };
}

const SECTIONS = (cs: NonNullable<(typeof projects)[number]["caseStudy"]>) => [
  { num: "01", title: "Overview", body: cs.overview },
  { num: "02", title: "My Role", body: cs.role },
  { num: "03", title: "Technology", body: null, list: cs.technology },
  { num: "04", title: "Engineering", body: cs.engineering },
  { num: "05", title: "Outcome", body: cs.outcome },
  { num: "06", title: "Reflection", body: cs.reflection },
];

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.caseStudy) notFound();
  const cs = project.caseStudy;
  const nameLines = project.titleLines ?? [project.name];

  return (
    <article>
      <div className="mx-auto max-w-6xl px-6 pt-10">
        <Link
          href="/#work"
          className="group/back inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-foreground-muted transition-colors duration-200 hover:text-accent"
        >
          <ArrowLeftIcon size={13} className="transition-transform duration-200 group-hover/back:-translate-x-1" />
          Back to selected work
        </Link>
      </div>

      <header className="mx-auto max-w-6xl px-6 pt-10 pb-14 sm:pt-16">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground-muted">
          <span className="text-accent">Project {project.number}</span> / {project.category}
        </p>
        <h1 className="mt-6 text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] font-medium tracking-tighter text-foreground uppercase">
          {nameLines.map((word, i) => (
            <span key={i} className="block">
              {word}
            </span>
          ))}
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs text-foreground-muted">
          <span>{project.year}</span>
          <span className="flex flex-wrap items-center gap-x-3">
            {project.technologies.map((t, i) => (
              <span key={t} className="flex items-center gap-3">
                {t}
                {i < project.technologies.length - 1 && <span className="text-border">/</span>}
              </span>
            ))}
          </span>
        </div>

        {project.confidential && (
          <div className="mt-8 flex items-start gap-3 border border-border px-5 py-4 text-sm text-foreground-muted">
            <LockIcon size={16} className="mt-0.5 shrink-0 text-accent" />
            <span>
              This is a commercial product built for a client. Descriptions below are kept
              general to respect confidentiality; no proprietary details or internal screens
              are shown.
            </span>
          </div>
        )}

        {project.category.includes("Research") && (
          <div className="mt-8 flex items-start gap-3 border border-accent/40 px-5 py-4 text-sm">
            <span className="font-mono text-xs text-accent">RESEARCH</span>
            <span className="text-foreground-muted">
              Academic thesis work, presented at an international conference rather than
              shipped as a product.
            </span>
          </div>
        )}
      </header>

      <div className="mx-auto max-w-6xl px-6">
        <div className={`grid gap-4 ${project.diagram ? "sm:grid-cols-[1fr_18rem]" : ""}`}>
          <ProjectImage
            src={images[project.slug] ?? null}
            alt={project.name}
            id={`IMG_0${project.number}`}
            label={nameLines.join(" ")}
            path={`/work/${project.slug}`}
            aspect={`${project.imageAspect ?? "aspect-[21/9]"} sm:aspect-auto sm:h-full`}
            fit={project.imageFit}
            confidential={project.confidential}
          />
          {project.diagram && <Diagram lines={project.diagram} className="sm:h-full" />}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="divide-y divide-border border-t border-border">
          {SECTIONS(cs).map((section) => (
            <section
              key={section.num}
              className="grid gap-4 py-12 sm:grid-cols-[6rem_1fr] sm:gap-8 lg:grid-cols-[8rem_1fr]"
            >
              <div className="flex items-baseline gap-3 sm:block">
                <span className="font-mono text-sm text-accent">{section.num}</span>
                <h2 className="text-lg font-medium text-foreground sm:hidden">
                  {section.title}
                </h2>
              </div>
              <div>
                <h2 className="hidden text-2xl font-medium tracking-tight text-foreground sm:block">
                  {section.title}
                </h2>
                {section.body && (
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted">
                    {section.body}
                  </p>
                )}
                {section.list && (
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 font-mono text-sm text-foreground">
                    {section.list.map((item, i) => (
                      <span key={item} className="flex items-center gap-4">
                        {item}
                        {i < section.list!.length - 1 && <span className="text-border">/</span>}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-24">
        <Link
          href="/#work"
          className="group/back inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors duration-200 hover:text-accent"
        >
          <ArrowLeftIcon size={13} className="transition-transform duration-200 group-hover/back:-translate-x-1" />
          Back to selected work
        </Link>
      </div>
    </article>
  );
}
