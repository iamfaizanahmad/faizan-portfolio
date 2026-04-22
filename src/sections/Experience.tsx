import { SectionWrapper } from "@/components/SectionWrapper";
import { Reveal } from "@/components/Reveal";
import { Tag } from "@/components/Tag";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <SectionWrapper
      id="experience"
      eyebrow="02 · Experience"
      title="Roles, owned end-to-end."
      intro="Not a timeline — a record of ownership. What the product was, what I ran, the technical bar, and the outcomes that moved the business."
    >
      <ol className="relative space-y-16 border-l border-[color:var(--hairline)] pl-6 sm:pl-10">
        {experience.map((role, i) => (
          <Reveal as="li" key={role.company + role.period} delay={i * 40} className="relative">
            <span
              aria-hidden
              className="absolute -left-[29px] sm:-left-[45px] top-2 h-2.5 w-2.5 rounded-full bg-[color:var(--fg)] ring-4 ring-[color:var(--bg)]"
            />

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {role.role}
                  <span className="text-[color:var(--subtle)]"> · {role.company}</span>
                </h3>
                <p className="mt-1 text-sm text-[color:var(--muted)]">{role.product}</p>
              </div>
              <div className="text-right font-mono text-xs text-[color:var(--subtle)]">
                <div>{role.period}</div>
                <div>{role.region}</div>
              </div>
            </div>

            <div className="mt-6 grid gap-8 sm:grid-cols-[max-content_1fr] sm:gap-x-10">
              <dt className="font-mono text-xs uppercase tracking-widest text-[color:var(--subtle)] pt-0.5">Owned</dt>
              <dd className="text-sm text-[color:var(--fg)] leading-relaxed text-pretty">{role.owned}</dd>

              <dt className="font-mono text-xs uppercase tracking-widest text-[color:var(--subtle)] pt-0.5">Challenges</dt>
              <dd>
                <ul className="space-y-2 text-sm text-[color:var(--muted)] leading-relaxed">
                  {role.challenges.map((c) => (
                    <li key={c} className="flex gap-3">
                      <span aria-hidden className="self-center h-px w-3 shrink-0 bg-[color:var(--subtle)]" />
                      <span className="text-pretty">{c}</span>
                    </li>
                  ))}
                </ul>
              </dd>

              <dt className="font-mono text-xs uppercase tracking-widest text-[color:var(--subtle)] pt-0.5">Impact</dt>
              <dd>
                <ul className="space-y-2 text-sm leading-relaxed">
                  {role.impact.map((c) => (
                    <li key={c} className="flex gap-3">
                      <span aria-hidden className="self-center h-px w-3 shrink-0 bg-[color:var(--fg)]" />
                      <span className="text-pretty">{c}</span>
                    </li>
                  ))}
                </ul>
              </dd>

              <dt className="font-mono text-xs uppercase tracking-widest text-[color:var(--subtle)] pt-0.5">Stack</dt>
              <dd className="flex flex-wrap gap-1.5">
                {role.stack.map((s) => <Tag key={s}>{s}</Tag>)}
              </dd>
            </div>
          </Reveal>
        ))}
      </ol>
    </SectionWrapper>
  );
}
