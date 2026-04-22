import type { ReactNode } from "react";

type Props = {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function SectionWrapper({ id, eyebrow, title, intro, children }: Props) {
  return (
    <section id={id} className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <header className="mb-14 max-w-2xl">
          {eyebrow && (
            <div className="mb-5 flex items-center gap-3 text-sm sm:text-base font-mono tracking-widest uppercase text-[color:var(--fg)]">
              <span className="inline-block h-px w-10 bg-[color:var(--fg)]" />
              {eyebrow}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-balance">
            {title}
          </h2>
          {intro && (
            <p className="mt-4 text-[color:var(--muted)] text-pretty leading-relaxed">
              {intro}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}
