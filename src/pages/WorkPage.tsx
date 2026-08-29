import { Helmet } from "react-helmet-async";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GridGlow } from "@/components/GridGlow";
import { Eyebrow } from "@/components/Badge";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/portfolio";

export function WorkPage() {
  return (
    <>
      <Helmet>
        <title>Work — Tavryz Studio</title>
        <meta name="description" content="High-impact digital products we've engineered for our clients." />
      </Helmet>
      <section className="relative px-6 pb-24 pt-40">
        <GridGlow variant="section" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal className="mb-16 max-w-2xl">
            <Eyebrow>Selected Work</Eyebrow>
            <h1 className="mb-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight dark:text-white text-[var(--text-primary)] md:text-5xl">
              Our Work, <span className="text-gradient">delivering impact.</span>
            </h1>
            <p className="text-base leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
              Digital products we&apos;ve built — real projects, real metrics.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="md:col-span-2">
              <ProjectCard project={projects[0]} featured />
            </div>
            {projects.slice(1).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-wider text-accent-teal hover:text-accent-bright"
            >
              Start a Project <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ProjectCard({ project, featured = false }: { project: (typeof projects)[number]; featured?: boolean }) {
  return (
    <Reveal className="h-full">
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="card-border-glow group flex h-full flex-col justify-between overflow-hidden rounded-2xl border dark:border-white/8 border-black/[0.06] dark:bg-white/[0.04] bg-white/80 p-6 shadow-card transition-all duration-300 md:p-8 backdrop-blur-sm"
      >
        <div>
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest dark:text-slate-500 text-[var(--text-muted)]">{project.id}</span>
              <h3 className="font-display text-xl font-bold tracking-tight dark:text-white text-[var(--text-primary)] sm:text-2xl">{project.title}</h3>
              <p className="mt-1 text-[11px] dark:text-slate-500 text-[var(--text-muted)]">{project.industry}</p>
            </div>
            <ExternalLink className="h-5 w-5 flex-shrink-0 dark:text-slate-600 text-[var(--text-muted)] transition-colors group-hover:text-accent-teal" />
          </div>
          <p className="mb-6 text-sm leading-relaxed dark:text-slate-400 text-[var(--text-secondary)] sm:text-[14px]">{project.description}</p>
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-md dark:border-white/8 border-black/[0.06] dark:bg-white/[0.05] bg-black/[0.03] px-2.5 py-1 font-mono text-[10px] dark:text-slate-400 text-[var(--text-secondary)]">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 flex flex-wrap items-end gap-6 border-t dark:border-white/8 border-black/[0.06] pt-5 sm:gap-10">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <div className="mb-1 font-mono text-[9px] uppercase tracking-wider dark:text-slate-500 text-[var(--text-muted)]">{m.label}</div>
              <div className="font-display text-lg font-bold dark:text-white text-[var(--text-primary)] sm:text-xl">{m.value}</div>
            </div>
          ))}
          <div className="ml-auto font-mono text-[10px] font-bold uppercase tracking-[0.15em] dark:text-slate-400 text-[var(--text-muted)] transition-colors group-hover:text-accent-teal sm:text-[11px]">
            View Project
          </div>
        </div>
      </a>
    </Reveal>
  );
}
