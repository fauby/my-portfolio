import { education, research } from "@/content/education";
import { NetworkDiagram } from "@/components/ui/network-diagram";

export function Education() {
  return (
    <section id="research" className="bg-[#111111] text-[#f4f2ec]">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <p className="font-mono text-[11px] tracking-[0.18em] text-white/45 uppercase">
          <span className="text-accent">04</span> / Education &amp; Research
        </p>
        <h2 className="mt-6 text-3xl font-medium tracking-tight uppercase sm:text-4xl">
          Background
        </h2>

        <div className="mt-14 grid gap-16 border-t border-white/15 pt-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-white/45 uppercase">
              Education
            </p>
            <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-xl font-medium tracking-tight">{education.university}</h3>
              <span className="font-mono text-xs text-white/45">{education.period}</span>
            </div>
            <p className="mt-1 text-white/60">{education.degree}</p>
            <p className="mt-4 font-mono text-xs text-white/45">
              GPA <span className="text-accent">{education.gpa}</span>
            </p>

            <p className="mt-8 font-mono text-[11px] tracking-[0.14em] text-white/45 uppercase">
              Coursework
            </p>
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-white/80">
              {education.coursework.map((item, i) => (
                <span key={item} className="flex items-center gap-3">
                  {item}
                  {i < education.coursework.length - 1 && (
                    <span className="text-white/20">/</span>
                  )}
                </span>
              ))}
            </div>

            <p className="mt-6 font-mono text-[11px] tracking-[0.14em] text-white/45 uppercase">
              Languages and tools
            </p>
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5 text-sm text-white/80">
              {[...education.languages, ...education.tools].map((item, i, arr) => (
                <span key={item} className="flex items-center gap-3">
                  {item}
                  {i < arr.length - 1 && <span className="text-white/20">/</span>}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase">
              Research <span className="text-white/45">/ {research.venue}</span>
            </p>
            <h3 className="mt-3 text-xl leading-snug font-medium tracking-tight">
              {research.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60">{research.summary}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/60">{research.venueFull}</p>
            <a
              href={research.doi}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 font-mono text-[11px] text-accent transition-colors duration-200 hover:text-white"
            >
              View on IEEE Xplore <span aria-hidden="true">&#8599;</span>
            </a>

            <div className="mt-6 flex items-end justify-between gap-6 border-t border-white/15 pt-6">
              <div className="flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-[11px] text-white/45">
                {research.technologies.map((item, i) => (
                  <span key={item} className="flex items-center gap-3">
                    {item}
                    {i < research.technologies.length - 1 && (
                      <span className="text-white/20">/</span>
                    )}
                  </span>
                ))}
              </div>
              <NetworkDiagram className="h-20 w-28 shrink-0 text-white/70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
