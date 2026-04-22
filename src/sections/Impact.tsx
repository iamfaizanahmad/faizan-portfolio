import { SectionWrapper } from "@/components/SectionWrapper";
import { Reveal } from "@/components/Reveal";
import { highlights } from "@/lib/data";

export function Impact() {
  return (
    <SectionWrapper
      id="impact"
      eyebrow="01 · Impact"
      title="What I've actually shipped."
      intro="Metrics first, narrative second. Every number below comes from production systems I architected, owned, or led."
    >
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-2 lg:grid-cols-3">
        {highlights.map((h, i) => (
          <Reveal
            as="li"
            key={h.label}
            delay={i * 60}
            className="bg-[color:var(--surface)] p-6 sm:p-8 transition-colors hover:bg-[color:var(--bg)]"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl font-semibold tracking-tight">
                {h.metric}
              </span>
            </div>
            <div className="mt-1 text-sm font-mono text-[color:var(--subtle)]">
              {h.label}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)] text-pretty">
              {h.detail}
            </p>
          </Reveal>
        ))}
      </ul>
    </SectionWrapper>
  );
}
