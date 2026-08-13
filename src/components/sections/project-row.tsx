"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import type { Project } from "@/content/projects";

export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const reduce = useReducedMotion();
  const hasCaseStudy = Boolean(project.caseStudy);

  const inner = (
    <div className="grid grid-cols-[3.5rem_1fr] gap-5 sm:grid-cols-[5.5rem_1fr] sm:gap-8 lg:grid-cols-[5.5rem_1fr_2.5rem]">
      <span className="pt-1 font-mono text-4xl font-medium tabular-nums text-border transition-colors duration-300 sm:text-5xl group-hover:text-accent">
        {project.number}
      </span>

      <div className="min-w-0 transition-transform duration-300 ease-out group-hover:translate-x-2">
        <h3 className="text-2xl leading-tight font-medium tracking-tight text-foreground uppercase sm:text-3xl">
          {project.name}
        </h3>
        <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-foreground-muted">
          {project.category}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted">
          {project.description}
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground-muted">
          <span className="text-foreground">Role </span> {project.contribution}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-[11px] text-foreground-muted">
          {project.technologies.map((tech, i) => (
            <span key={tech} className="flex items-center gap-2.5">
              {tech}
              {i < project.technologies.length - 1 && <span className="text-border">/</span>}
            </span>
          ))}
        </div>
      </div>

      <div className="hidden items-start justify-end pt-2 lg:flex">
        {hasCaseStudy && (
          <ArrowRightIcon
            size={20}
            weight="regular"
            className="text-foreground-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
          />
        )}
      </div>
    </div>
  );

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="group">
        {hasCaseStudy ? (
          <Link href={`/work/${project.slug}`} className="block py-10">
            {inner}
          </Link>
        ) : (
          <div className="block py-10">{inner}</div>
        )}
        <div className="relative h-px w-full overflow-hidden bg-border">
          <div className="absolute inset-y-0 left-0 h-full w-0 bg-accent transition-all duration-500 ease-out group-hover:w-full" />
        </div>
      </div>
    </motion.div>
  );
}
