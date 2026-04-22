export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[color:var(--border)] bg-[color:var(--surface)] px-2.5 py-0.5 font-mono text-[11px] tracking-tight text-[color:var(--muted)]">
      {children}
    </span>
  );
}
