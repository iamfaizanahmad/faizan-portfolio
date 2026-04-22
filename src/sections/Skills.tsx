import { SectionWrapper } from "@/components/SectionWrapper";
import { Reveal } from "@/components/Reveal";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <SectionWrapper
      id="skills"
      eyebrow="04 · Technical"
      title="The stack I reach for."
      intro="Grouped by concern, not by recency. Everything here has shipped to production under load."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((g, i) => (
          <Reveal
            key={g.group}
            delay={i * 50}
            className="bg-[color:var(--surface)] p-6 sm:p-7"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-[color:var(--subtle)]">
              {g.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-[color:var(--border)] bg-[color:var(--bg)] px-2 py-0.5 font-mono text-xs text-[color:var(--fg)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
