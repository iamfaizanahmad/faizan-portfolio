import { SectionWrapper } from "@/components/SectionWrapper";
import { Reveal } from "@/components/Reveal";
import { Tag } from "@/components/Tag";
import { ArrowUpRight } from "@/components/Icon";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <SectionWrapper
      id="projects"
      eyebrow="03 · Projects"
      title="Case studies, not screenshots."
      intro="Each one framed as problem → system design → contribution → outcome. The interesting part is the architecture, not the CSS."
    >
      <div className="space-y-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <article className="group relative overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-10 transition-all duration-300 hover:border-[color:var(--fg)]/30 hover:shadow-[0_1px_0_0_var(--hairline),0_20px_40px_-24px_rgba(0,0,0,0.15)]">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {p.name}
                    <ArrowUpRight className="ml-2 inline h-4 w-4 -translate-y-0.5 text-[color:var(--subtle)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-1 group-hover:text-[color:var(--fg)]" />
                  </h3>
                  <p className="mt-1 text-sm text-[color:var(--muted)]">{p.tagline}</p>
                </div>
                <span className="font-mono text-xs text-[color:var(--subtle)]">{p.period}</span>
              </div>

              <dl className="mt-8 grid gap-x-10 gap-y-6 sm:grid-cols-2">
                <Field label="Problem" value={p.problem} />
                <Field label="System design" value={p.design} />
                <Field label="My contribution" value={p.contribution} />
                <Field label="Outcome" value={p.outcome} />
              </dl>

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[color:var(--hairline)] pt-5">
                <div className="font-mono text-xs text-[color:var(--subtle)]">
                  <span className="text-[color:var(--fg)]">Scale · </span>
                  {p.scale}
                </div>
                <div className="flex flex-wrap justify-end gap-1.5">
                  {p.stack.map((s) => <Tag key={s}>{s}</Tag>)}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-xs uppercase tracking-widest text-[color:var(--subtle)]">{label}</dt>
      <dd className="mt-2 text-sm leading-relaxed text-[color:var(--fg)]/90 text-pretty">{value}</dd>
    </div>
  );
}
