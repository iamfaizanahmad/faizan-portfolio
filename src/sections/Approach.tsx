import { SectionWrapper } from "@/components/SectionWrapper";
import { Reveal } from "@/components/Reveal";
import { leadership } from "@/lib/data";

export function Approach() {
  return (
    <SectionWrapper
      id="approach"
      eyebrow="05 · Approach"
      title="How I think about systems and teams."
      intro="Architecture is a communication problem first. The code is the artifact, not the goal."
    >
      <ul className="grid gap-6 sm:grid-cols-2">
        {leadership.map((l, i) => (
          <Reveal
            as="li"
            key={l.title}
            delay={i * 60}
            className="group relative rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-6 sm:p-8 transition-colors hover:border-[color:var(--fg)]/30"
          >
            <div className="mb-3 font-mono text-xs tracking-widest uppercase text-[color:var(--subtle)]">
              0{i + 1}
            </div>
            <h3 className="text-lg font-semibold tracking-tight">{l.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[color:var(--muted)] text-pretty">
              {l.body}
            </p>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={260}>
        <figure className="mt-14 rounded-2xl border border-[color:var(--border)] bg-[color:var(--surface)] p-8 sm:p-10">
          <blockquote className="text-lg sm:text-xl leading-relaxed tracking-tight text-balance">
            <span aria-hidden className="mr-2 text-[color:var(--subtle)]">&ldquo;</span>
            The best architecture decisions are the ones you can reverse cheaply.
            My job isn&apos;t to be right the first time — it&apos;s to keep the team fast
            when we&apos;re not.
            <span aria-hidden className="ml-1 text-[color:var(--subtle)]">&rdquo;</span>
          </blockquote>
          <figcaption className="mt-6 font-mono text-xs uppercase tracking-widest text-[color:var(--subtle)]">
            — System Thinking, in one line
          </figcaption>
        </figure>
      </Reveal>
    </SectionWrapper>
  );
}
