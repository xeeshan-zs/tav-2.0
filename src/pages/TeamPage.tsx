import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { GridGlow } from "@/components/GridGlow";
import { Eyebrow } from "@/components/Badge";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { DisciplineCard } from "@/components/DisciplineCard";
import { TeamLeaders } from "@/components/TeamLeaders";
import { disciplines } from "@/lib/team";

export function TeamPage() {
  return (
    <>
      <Helmet>
        <title>Team — Tavryz Studio</title>
        <meta name="description" content="The people and disciplines behind Tavryz — a small, senior, full-stack team." />
      </Helmet>
      <div
        className="pointer-events-none fixed inset-0 z-0 dark:opacity-100 opacity-40"
        style={{
          background: "radial-gradient(ellipse 1100px 900px at 100% 100%, rgba(0,124,125,0.3), transparent 60%)",
        }}
      />

      <section className="relative z-10 px-6 pb-20 pt-40">
        <GridGlow variant="hero" />
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>
              <span className="mx-auto">Our Team</span>
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mb-6 font-display text-4xl font-extrabold leading-[1.1] tracking-tight dark:text-white text-[var(--text-primary)] md:text-6xl">
              The people behind <span className="text-gradient">Tavryz.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto max-w-2xl text-base leading-relaxed dark:text-slate-400 text-[var(--text-secondary)] md:text-lg">
              Tavryz stays small and senior on purpose. You talk directly to the people building your
              product, not an account manager relaying messages. Every project draws from four core
              disciplines.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 border-t dark:border-white/5 border-black/[0.06] px-6 py-24">
        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <Eyebrow>
              <span className="mx-auto">Leadership</span>
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mb-14 font-display text-3xl font-extrabold tracking-tight dark:text-white text-[var(--text-primary)] md:text-5xl">
              Our <span className="text-gradient">Leaders</span>
            </h2>
          </Reveal>
        </div>
        <div className="relative">
          <TeamLeaders />
        </div>
      </section>

      <section className="relative z-10 border-t dark:border-white/5 border-black/[0.06] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-12 text-center">
            <Eyebrow>
              <span className="mx-auto">Disciplines</span>
            </Eyebrow>
            <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight dark:text-white text-[var(--text-primary)] md:text-4xl">
              Four core <span className="text-accent-teal">disciplines.</span> One team.
            </h2>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {disciplines.map((d, i) => (
              <DisciplineCard key={d.title} index={i} />
            ))}
          </RevealGroup>

          <Reveal delay={0.2} className="mt-16 text-center">
            <p className="mx-auto mb-6 max-w-lg text-sm leading-relaxed dark:text-slate-500 text-[var(--text-muted)]">
              The rest of the team works quietly behind the scenes. The fastest way to meet the people
              who&apos;d work on your project is to start a conversation.
            </p>
            <Link
              to="/contact"
              className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-glow transition-transform hover:-translate-y-0.5"
            >
              Get in Touch <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
