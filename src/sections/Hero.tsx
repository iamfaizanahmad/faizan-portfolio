import { profile } from "@/lib/data";
import { ArrowRight, Download, Mail, MapPin, Dot } from "@/components/Icon";
import { Reveal } from "@/components/Reveal";

export function Hero() {
  return (
    <section id="work" className="relative isolate pt-32 sm:pt-40 pb-24 sm:pb-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_35%,transparent_75%)]" />

      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-3 py-1 font-mono text-xs text-[color:var(--muted)]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            Available for Senior / Staff / Tech Lead roles
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05] text-balance">
            {profile.name}.
            <br />
            <span className="text-[color:var(--muted)]">
              {profile.title}.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-lg sm:text-xl leading-relaxed text-[color:var(--muted)] text-pretty">
            {profile.tagline}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-mono text-[color:var(--subtle)]">
            {profile.positioning.map((p) => (
              <span key={p} className="inline-flex items-center gap-2">
                <Dot className="h-3 w-3" />
                {p}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={280}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="focus-ring group inline-flex items-center gap-2 rounded-full bg-[color:var(--fg)] px-5 py-2.5 text-sm font-medium text-[color:var(--bg)] transition-transform hover:-translate-y-0.5"
            >
              View Work
              <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="focus-ring group inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[color:var(--hairline)]"
            >
              <Download />
              Download CV
            </a>
            <a
              href="#contact"
              className="focus-ring inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-[color:var(--muted)] transition-colors hover:text-[color:var(--fg)]"
            >
              <Mail />
              Contact
            </a>
          </div>
        </Reveal>

        <Reveal delay={340}>
          <div className="mt-14 flex items-center gap-6 border-t border-[color:var(--hairline)] pt-6 text-xs font-mono text-[color:var(--subtle)]">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5" />
              {profile.location}
            </span>
            <span className="hidden sm:inline">9+ yrs · EU · US · ZA</span>
            <span className="hidden md:inline">SvelteKit · React · Real-Time</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
