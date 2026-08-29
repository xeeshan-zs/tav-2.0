import { ReactNode } from "react";

export function Badge({ children, dot = false }: { children: ReactNode; dot?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full dark:border-white/10 border-black/[0.08] dark:bg-white/5 bg-white/80 px-4 py-1.5 text-[11px] font-mono font-medium uppercase tracking-[0.2em] dark:text-slate-300 text-[var(--text-secondary)] backdrop-blur">
      {dot && <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-teal" />}
      {children}
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div className="h-px w-8 bg-accent-teal/30" />
      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-teal">{children}</span>
    </div>
  );
}
