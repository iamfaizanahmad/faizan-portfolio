import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--hairline)]">
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-4 px-6 py-8 font-mono text-xs text-[color:var(--subtle)]">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}
