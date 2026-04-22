import { profile } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { Mail, Github, Linkedin, ArrowUpRight } from "@/components/Icon";

export function Contact() {
  const links = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
    { label: "GitHub", value: "@iamfaizanahmad", href: profile.github, Icon: Github },
    { label: "LinkedIn", value: "iamfaizanahmad", href: profile.linkedin, Icon: Linkedin },
  ];

  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal>
          <div className="mb-5 flex items-center gap-3 text-sm sm:text-base font-mono tracking-widest uppercase text-[color:var(--fg)]">
            <span className="inline-block h-px w-10 bg-[color:var(--fg)]" />
            06 · Contact
          </div>
          <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-balance">
            Building something real-time,
            <br />
            <span className="text-[color:var(--muted)]">at scale, that has to work?</span>
          </h2>
          <p className="mt-6 max-w-xl text-[color:var(--muted)] text-pretty leading-relaxed">
            I take on Senior, Staff, and Tech Lead roles — full-time remote, or
            focused contracts where ownership matters more than hours.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-[color:var(--border)] bg-[color:var(--border)] sm:grid-cols-3">
            {links.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="focus-ring group flex flex-col gap-3 bg-[color:var(--surface)] p-6 sm:p-8 transition-colors hover:bg-[color:var(--bg)]"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-4 w-4 text-[color:var(--subtle)]" />
                  <ArrowUpRight className="h-4 w-4 text-[color:var(--subtle)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[color:var(--fg)]" />
                </div>
                <div>
                  <div className="font-mono text-xs uppercase tracking-widest text-[color:var(--subtle)]">
                    {label}
                  </div>
                  <div className="mt-1 text-sm font-medium break-all">{value}</div>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
