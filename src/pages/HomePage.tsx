import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GridGlow } from "@/components/GridGlow";
import { Reveal } from "@/components/Reveal";
import { ServicesList } from "@/components/ServicesList";
import { StatsSection } from "@/components/StatsSection";
import { ProcessDetailed } from "@/components/ProcessDetailed";
import { WhoWeAre } from "@/components/WhoWeAre";
import { WhySection } from "@/components/WhySection";
import { FaqSection } from "@/components/FaqSection";
import { LogoMark } from "@/components/Logo";
import { Eyebrow } from "@/components/Badge";
import { projects } from "@/lib/portfolio";
import { TextReveal } from "@/components/TextReveal";
import { MagneticButton } from "@/components/MagneticButton";

export function HomePage() {
  const featured = projects[0];

  return (
    <>
      {/* Hero — light/dark adaptive */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-32 dark:bg-[#060709] bg-[var(--bg-subtle)]">
        {/* Light mode: soft aurora gradient mesh */}
        <div className="dark:hidden hero-aurora-light absolute inset-0" />
        {/* Light mode: subtle gradient line at top */}
        <div className="dark:hidden absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        {/* Dark mode: ambient bottom glow for depth */}
        <div className="hidden dark:block absolute bottom-0 left-0 right-0 h-[300px] pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 100% at 50% 100%, rgba(0,124,125,0.06), transparent 70%)" }} />

        <GridGlow variant="hero" theme="dark" />
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <Reveal delay={0.08}>
            <div className="mb-2 mt-10 flex justify-center">
              <LogoMark className="h-16 w-16 drop-shadow-[0_0_28px_rgba(0,124,125,0.45)] md:h-20 md:w-20" />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <TextReveal
              text="Engineering Precision for the Next Wave of Innovation"
              className="mb-8 mt-4 font-display text-5xl font-extrabold leading-[1.05] tracking-tight dark:text-white text-[var(--text-primary)] md:text-7xl"
              delay={0.15}
              stagger={0.05}
            />
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed dark:text-slate-400 text-[var(--text-secondary)] md:text-lg">
              We build web platforms, native apps, and design systems for teams who want things built
              right — fast, reliable, and ready to handle real growth.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white dark:shadow-[0_0_0_1px_rgba(0,124,125,0.2),0_4px_20px_-2px_rgba(0,124,125,0.4),0_8px_40px_-4px_rgba(0,124,125,0.2)] shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  Start a Project
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <Link
                  to="/work"
                  className="inline-flex items-center justify-center gap-2 rounded-full dark:border-white/15 border-black/[0.1] dark:bg-white/5 bg-white/80 px-8 py-3.5 text-sm font-bold uppercase tracking-wider dark:text-white text-[var(--text-primary)] backdrop-blur transition-all hover:-translate-y-0.5 dark:hover:border-white/30 hover:border-black/[0.15] dark:hover:bg-white/10 hover:bg-white"
                >
                  View Our Work
                </Link>
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <WhoWeAre />

      <ServicesList />

      <WhySection />

      <StatsSection />

      <ProcessDetailed />

      {/* Selected work */}
      <section className="relative z-10 border-t dark:border-white/5 border-black/[0.06] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12">
            <Eyebrow>Selected Work</Eyebrow>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight dark:text-white text-[var(--text-primary)] md:text-5xl">
                Our Work <span className="dark:text-slate-500 text-[var(--text-muted)]">delivering impact.</span>
              </h2>
              <Link
                to="/work"
                className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] dark:text-white text-[var(--text-primary)] hover:text-accent-teal"
              >
                All Projects <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <a
              href={featured.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 md:p-8"
            >
              <div>
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest dark:text-slate-500 text-[var(--text-muted)]">
                      {featured.id}
                    </span>
                    <h3 className="font-display text-xl font-bold tracking-tight dark:text-white text-[var(--text-primary)] sm:text-2xl">
                      {featured.title}
                    </h3>
                    <p className="mt-1 text-[11px] dark:text-slate-500 text-[var(--text-muted)]">{featured.industry}</p>
                  </div>
                  <ExternalLink className="h-5 w-5 flex-shrink-0 dark:text-slate-600 text-[var(--text-muted)] transition-colors group-hover:text-accent-teal" />
                </div>
                <p className="mb-6 max-w-2xl text-sm leading-relaxed dark:text-slate-400 text-[var(--text-secondary)] sm:text-[14px]">
                  {featured.description}
                </p>
                <div className="mb-6 flex flex-wrap gap-2">
                  {featured.tags.map((tag) => (
                    <span key={tag} className="rounded-md dark:border-white/8 border-black/[0.06] dark:bg-white/[0.05] bg-black/[0.03] px-2.5 py-1 font-mono text-[10px] dark:text-slate-400 text-[var(--text-secondary)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-4 flex flex-wrap items-end gap-6 border-t dark:border-white/8 border-black/[0.06] pt-5 sm:gap-10">
                {featured.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="mb-1 font-mono text-[9px] uppercase tracking-wider dark:text-slate-500 text-[var(--text-muted)]">{m.label}</div>
                    <div className="font-display text-lg font-bold dark:text-white text-[var(--text-primary)] sm:text-xl">{m.value}</div>
                  </div>
                ))}
                <div className="ml-auto flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.15em] dark:text-slate-400 text-[var(--text-muted)] transition-colors group-hover:text-accent-teal sm:text-[11px]">
                  View Project
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
