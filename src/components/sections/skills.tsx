import { skillGroups } from "@/content/skills";
import { profile } from "@/content/profile";
import { SectionHeading } from "@/components/ui/section-heading";

export function Skills() {
  const groups = [...skillGroups, { title: "Working Style", items: profile.softSkills }];

  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        index="03"
        label="Technical Skills"
        title="What I work with"
        description="Grouped by where each tool sits in the systems I build, from interface down to infrastructure."
      />

      <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-border pt-12 sm:grid-cols-3 lg:grid-cols-4">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="text-[15px] leading-snug text-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
