"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { experience } from "@/content/experience";
import { SectionHeading } from "@/components/ui/section-heading";
import { Terminal, TerminalLine } from "@/components/ui/terminal";

export function Experience() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.75", "end 0.4"],
  });
  const progress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:items-end">
        <SectionHeading
          index="02"
          label="Experience"
          title="Where I've worked"
          description="A path from Android and applied machine learning into full-stack software engineering."
        />
        <Terminal title="current.txt" className="hidden lg:block">
          <TerminalLine prompt="$">cat ./experience/current.txt</TerminalLine>
          <div className="mt-1" />
          <TerminalLine muted>{experience[0].company}</TerminalLine>
          <TerminalLine muted>{experience[0].role}</TerminalLine>
          <TerminalLine muted>{experience[0].period}</TerminalLine>
        </Terminal>
      </div>

      <div className="mt-16">
        <div ref={trackRef} className="relative">
          <div className="absolute top-3 bottom-3 left-[3px] w-px bg-border" aria-hidden="true" />
          <motion.div
            className="absolute top-3 left-[3px] w-px bg-accent"
            style={{ height: reduce ? "100%" : progress }}
            aria-hidden="true"
          />

          {experience.map((role, i) => {
            const current = role.end === "present";

            return (
              <motion.div
                key={role.id}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`relative grid gap-3 border-border py-10 pl-8 first:pt-0 sm:grid-cols-[11rem_1fr] sm:gap-8 sm:pl-10 ${
                  i > 0 ? "border-t" : ""
                }`}
              >
                <span className="absolute top-1.5 left-0 h-[7px] w-[7px] shrink-0" aria-hidden="true">
                  <span
                    className={`block h-full w-full rounded-full ${
                      current ? "bg-accent" : "border border-foreground-muted bg-background"
                    }`}
                  />
                </span>
                <p className="font-mono text-xs tracking-[0.06em] text-foreground-muted uppercase">
                  {current ? <span className="text-accent">{role.period}</span> : role.period}
                </p>

                <div>
                  <h3 className="text-xl font-medium tracking-tight text-foreground uppercase">
                    {role.role}
                  </h3>
                  <p className="mt-1 font-mono text-xs tracking-[0.08em] text-foreground-muted uppercase">
                    {role.company}
                  </p>

                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-foreground-muted">
                    {role.summary}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-foreground-muted"
                      >
                        <span className="mt-2 h-[3px] w-[3px] shrink-0 bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 font-mono text-[11px] text-foreground-muted">
                    {role.tags.map((tag, idx) => (
                      <span key={tag} className="flex items-center gap-3">
                        {tag}
                        {idx < role.tags.length - 1 && <span className="text-border">/</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
