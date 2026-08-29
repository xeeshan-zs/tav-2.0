import { Helmet } from "react-helmet-async";
import { GridGlow } from "@/components/GridGlow";
import { Eyebrow } from "@/components/Badge";
import { Reveal } from "@/components/Reveal";
import { Logo, LogoMark } from "@/components/Logo";

const colors = [
  { name: "Background", hex: "#07080A", swatch: "bg-ink border border-white/10", text: "text-white" },
  { name: "Primary Teal", hex: "#007C7D", swatch: "bg-accent-teal", text: "text-white" },
  { name: "Bright Teal", hex: "#00A6A6", swatch: "bg-accent-bright", text: "text-white" },
  { name: "Deep Teal", hex: "#024243", swatch: "bg-accent-deep", text: "text-white" },
  { name: "Surface", hex: "#16181A", swatch: "bg-ink-soft border border-white/10", text: "text-white" },
  { name: "Elevated Surface", hex: "#232425", swatch: "bg-surface-mist border border-white/10", text: "text-white" },
];

export function BrandPage() {
  return (
    <>
      <Helmet>
        <title>Brand Guide — Tavryz Studio</title>
        <meta name="description" content="The Tavryz visual identity: color system, typography, logo usage, and components." />
      </Helmet>
      <section className="relative px-6 pb-24 pt-40">
        <GridGlow variant="hero" />
        <div className="relative mx-auto max-w-5xl">
          <Reveal className="mb-20 max-w-2xl">
            <Eyebrow>Brand System</Eyebrow>
            <h1 className="mb-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight dark:text-white text-[var(--text-primary)] md:text-5xl">
              The Tavryz <span className="text-gradient">visual identity.</span>
            </h1>
            <p className="text-base leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
              One gradient, one type system, one mark — used consistently across the website and every
              LinkedIn post, so Tavryz is recognizable at a glance.
            </p>
          </Reveal>

          <Reveal className="mb-20">
            <h2 className="mb-6 font-display text-xl font-bold tracking-tight dark:text-white text-[var(--text-primary)]">Logo</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border dark:border-white/8 border-black/[0.06] dark:bg-white/[0.04] bg-white/80 p-10 shadow-card backdrop-blur-sm">
                <Logo markClassName="h-12 w-12" />
                <span className="font-mono text-[10px] uppercase tracking-wider dark:text-slate-500 text-[var(--text-muted)]">Primary Lockup</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border dark:border-white/8 border-black/[0.06] dark:bg-white/[0.04] bg-white/80 p-10 shadow-card backdrop-blur-sm">
                <LogoMark className="h-16 w-16" />
                <span className="font-mono text-[10px] uppercase tracking-wider dark:text-slate-500 text-[var(--text-muted)]">Icon Mark</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border dark:border-white/10 border-black/[0.08] bg-white p-10 shadow-card">
                <Logo variant="dark" markClassName="h-12 w-12" />
                <span className="font-mono text-[10px] uppercase tracking-wider text-black/40">On Light</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="mb-20">
            <h2 className="mb-6 font-display text-xl font-bold tracking-tight dark:text-white text-[var(--text-primary)]">Color System</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {colors.map((c) => (
                <div key={c.name} className="overflow-hidden rounded-2xl border dark:border-white/8 border-black/[0.06] shadow-card">
                  <div className={`flex h-24 items-end p-4 ${c.swatch} ${c.text}`}>
                    <span className="font-mono text-xs font-semibold">{c.hex}</span>
                  </div>
                  <div className="dark:bg-white/[0.04] bg-white/80 px-4 py-3 backdrop-blur-sm">
                    <span className="text-sm font-medium dark:text-white text-[var(--text-primary)]">{c.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl shadow-card">
              <div className="flex h-24 items-end bg-brand-gradient p-4">
                <span className="font-mono text-xs font-semibold text-white">
                  linear-gradient(135deg, #024243, #007C7D, #00A6A6)
                </span>
              </div>
              <div className="dark:bg-white/[0.04] bg-white/80 px-4 py-3 backdrop-blur-sm">
                <span className="text-sm font-medium dark:text-white text-[var(--text-primary)]">Signature Gradient</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="mb-20">
            <h2 className="mb-6 font-display text-xl font-bold tracking-tight dark:text-white text-[var(--text-primary)]">Typography</h2>
            <div className="space-y-6 rounded-2xl border dark:border-white/8 border-black/[0.06] dark:bg-white/[0.04] bg-white/80 p-8 shadow-card backdrop-blur-sm">
              <div>
                <span className="mb-2 block font-mono text-[10px] uppercase tracking-wider dark:text-slate-500 text-[var(--text-muted)]">
                  Display — Plus Jakarta Sans / 800
                </span>
                <p className="font-display text-4xl font-extrabold tracking-tight dark:text-white text-[var(--text-primary)]">Engineering Precision</p>
              </div>
              <div>
                <span className="mb-2 block font-mono text-[10px] uppercase tracking-wider dark:text-slate-500 text-[var(--text-muted)]">
                  Body — Geist Sans / 400–600
                </span>
                <p className="max-w-lg text-base leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
                  We build high-performance web platforms, native mobile applications, and scalable design
                  systems for technology leaders who demand precision.
                </p>
              </div>
              <div>
                <span className="mb-2 block font-mono text-[10px] uppercase tracking-wider dark:text-slate-500 text-[var(--text-muted)]">
                  Mono — Geist Mono / labels &amp; eyebrows
                </span>
                <p className="font-mono text-xs uppercase tracking-[0.25em] dark:text-slate-400 text-[var(--text-secondary)]">
                  What We Do — Selected Work — Standard Operating Procedure
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal className="mb-20">
            <h2 className="mb-6 font-display text-xl font-bold tracking-tight dark:text-white text-[var(--text-primary)]">Components</h2>
            <div className="flex flex-wrap items-center gap-4 rounded-2xl border dark:border-white/8 border-black/[0.06] dark:bg-white/[0.04] bg-white/80 p-8 shadow-card backdrop-blur-sm">
              <span className="btn-shine inline-flex items-center rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-glow">
                Primary Button
              </span>
              <span className="inline-flex items-center rounded-full border dark:border-white/15 border-black/[0.1] dark:bg-white/5 bg-white/80 px-6 py-3 text-sm font-semibold dark:text-white text-[var(--text-primary)]">
                Outline Button
              </span>
              <span className="inline-flex items-center gap-2 rounded-full dark:border-white/10 border-black/[0.08] dark:bg-white/5 bg-white/80 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] dark:text-slate-300 text-[var(--text-secondary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-teal" /> Badge
              </span>
            </div>
          </Reveal>

          <Reveal>
            <h2 className="mb-3 font-display text-xl font-bold tracking-tight dark:text-white text-[var(--text-primary)]">Social Templates</h2>
            <p className="mb-6 max-w-xl text-sm leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
              Ready-to-export LinkedIn assets using the same gradient and grid motif. Open the SVGs directly
              from <code className="rounded dark:bg-white/[0.08] bg-black/[0.06] px-1.5 py-0.5 text-[12px]">/public/brand/</code> and
              export as PNG for posting.
            </p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border dark:border-white/8 border-black/[0.06] shadow-card">
                <img src="/brand/linkedin-banner.svg" alt="LinkedIn banner template" className="w-full" />
                <div className="dark:bg-white/[0.04] bg-white/80 px-4 py-3 text-sm dark:text-slate-400 text-[var(--text-secondary)] backdrop-blur-sm">LinkedIn Banner — 1584×396</div>
              </div>
              <div className="overflow-hidden rounded-2xl border dark:border-white/8 border-black/[0.06] shadow-card">
                <img src="/brand/linkedin-post.svg" alt="LinkedIn post template" className="w-full" />
                <div className="dark:bg-white/[0.04] bg-white/80 px-4 py-3 text-sm dark:text-slate-400 text-[var(--text-secondary)] backdrop-blur-sm">LinkedIn Post — 1200×1200</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
