"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import type { Project } from "@/content/projects";
import { ProjectImage } from "@/components/ui/project-image";
import { images } from "@/content/images";

const META_LABELS = ["Type", "Stack", "Year", "Role"] as const;

export function ProjectComposition({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const hasCaseStudy = Boolean(project.caseStudy);
  const isPhone = project.frame === "phone";

  const metaValues = [
    project.category,
    project.technologies.join(" / "),
    project.year,
    project.contribution.split(".")[0],
  ];

  const body = (
    <div className="grid gap-10 lg:grid-cols-[7rem_1fr] lg:gap-12">
      <span className="font-mono text-5xl font-medium tabular-nums text-border transition-colors duration-300 group-hover:text-accent lg:text-6xl">
        {project.number}
      </span>

      <div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h3 className="text-3xl leading-[1.05] font-medium tracking-tight text-foreground uppercase transition-transform duration-300 ease-out sm:text-4xl group-hover:translate-x-1.5">
            {project.name}
          </h3>
          {hasCaseStudy && (
            <ArrowRightIcon
              size={22}
              className="mt-1 shrink-0 text-foreground-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
            />
          )}
        </div>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground-muted">
          {project.description}
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-border pt-5 sm:grid-cols-4">
          {META_LABELS.map((label, i) => (
            <div key={label}>
              <dt className="font-mono text-[10px] tracking-[0.14em] text-foreground-muted uppercase">
                {label}
              </dt>
              <dd className="mt-1 text-sm leading-snug text-foreground">{metaValues[i]}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-6">
          <ProjectImage
            src={images[project.slug] ?? null}
            alt={project.name}
            id={`IMG_0${project.number}`}
            label={project.titleLines?.join(" ") ?? project.name}
            path={`/work/${project.slug}`}
            aspect={project.imageAspect ?? (isPhone ? "aspect-[9/17]" : "aspect-[21/9]")}
            fit={project.imageFit}
            confidential={project.confidential}
            className={isPhone ? "max-w-[220px]" : ""}
          />
        </div>

        {hasCaseStudy && (
          <p className="mt-6 font-mono text-xs tracking-[0.1em] text-foreground uppercase">
            View case <span aria-hidden="true">&rarr;</span>
          </p>
        )}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.06, ease: [0.16, 1, 0.3, 1] }}
      className="group border-t border-border py-14 first:pt-0 first:border-t-0"
    >
      {hasCaseStudy ? (
        <Link href={`/work/${project.slug}`} className="block" data-cursor="view">
          {body}
        </Link>
      ) : (
        body
      )}
    </motion.div>
  );
}
