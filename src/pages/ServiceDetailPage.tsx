import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Layers, Sparkles } from "lucide-react";
import { GridGlow } from "@/components/GridGlow";
import { Reveal } from "@/components/Reveal";
import { services, getServiceBySlug } from "@/lib/services";
import { MagneticButton } from "@/components/MagneticButton";
import { ServiceCard } from "@/components/ServiceCard";

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return (
      <section className="relative min-h-screen px-6 pb-24 pt-40">
        <GridGlow variant="hero" />
        <div className="relative mx-auto max-w-2xl text-center">
          <h1 className="mb-4 font-display text-4xl font-bold dark:text-white text-[var(--text-primary)]">Service Not Found</h1>
          <p className="mb-8 text-sm dark:text-slate-400 text-[var(--text-secondary)]">The service you&apos;re looking for doesn&apos;t exist.</p>
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-white">
            <ArrowLeft className="h-4 w-4" /> All Services
          </Link>
        </div>
      </section>
    );
  }

  const Icon = service.icon;

  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <Helmet>
        <title>{service.title} — Tavryz Studio</title>
        <meta name="description" content={service.fullDescription} />
      </Helmet>
      <section className="relative px-6 pb-24 pt-40">
        <GridGlow variant="section" />
        <div className="relative mx-auto max-w-3xl">
          <Link
            to="/services"
            className="group mb-16 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] dark:text-slate-500 text-[var(--text-muted)] hover:text-accent-teal"
          >
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
            All Services
          </Link>

          <Reveal>
            <div className="glass-card mb-10 rounded-3xl p-8 md:p-12">
              <div className="mb-8 flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient-soft animate-fade-in-scale">
                  <Icon className="h-8 w-8 text-accent-teal" />
                </div>
                <div>
                  <span className="mb-1 block font-mono text-[10px] uppercase tracking-widest dark:text-slate-500 text-[var(--text-muted)]">
                    Domain {service.id}
                  </span>
                  <h1 className="font-display text-3xl font-bold leading-snug tracking-tight dark:text-white text-[var(--text-primary)] md:text-4xl">
                    {service.title}
                  </h1>
                </div>
              </div>
              <div className="mb-8 flex flex-wrap gap-2">
                {service.subdomains.map((tag) => (
                  <span key={tag} className="rounded-full dark:border-white/10 border-black/[0.08] dark:bg-white/[0.06] bg-black/[0.03] px-3 py-1.5 font-mono text-[10px] font-medium dark:text-slate-300 text-[var(--text-secondary)]">
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-[15px] leading-[1.8] dark:text-slate-300 text-[var(--text-secondary)]">{service.fullDescription}</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Reveal delay={0.1}>
              <div className="glass-card h-full rounded-2xl p-7">
                <div className="mb-5 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient-soft">
                    <CheckCircle2 className="h-4 w-4 text-accent-teal" />
                  </div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-wider dark:text-slate-400 text-[var(--text-secondary)]">What We Build</p>
                </div>
                <ul className="space-y-3">
                  {service.useCases.map((useCase) => (
                    <li key={useCase} className="flex items-start gap-3 text-[13px] leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent-teal/70" />
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass-card h-full rounded-2xl p-7">
                <div className="mb-5 flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient-soft">
                    <Layers className="h-4 w-4 text-accent-teal" />
                  </div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-wider dark:text-slate-400 text-[var(--text-secondary)]">Tech Stack</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech) => (
                    <span key={tech} className="rounded-full dark:border-white/10 border-black/[0.08] dark:bg-white/[0.06] bg-black/[0.03] px-3 py-1.5 font-mono text-[10px] font-medium dark:text-slate-300 text-[var(--text-secondary)]">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t dark:border-white/8 border-black/[0.06] pt-8 sm:flex-row">
              <MagneticButton>
                <Link
                  to="/contact"
                  className="btn-shine inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-glow"
                >
                  Discuss This Service <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </MagneticButton>
              <Link to="/services" className="font-mono text-[11px] font-bold uppercase tracking-wider dark:text-slate-500 text-[var(--text-muted)] hover:text-accent-teal transition-colors">
                Back to All Domains
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-20">
              <div className="mb-8 flex items-center gap-3">
                <Sparkles className="h-4 w-4 text-accent-teal" />
                <h2 className="font-display text-xl font-bold tracking-tight dark:text-white text-[var(--text-primary)]">Related Services</h2>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {relatedServices.map((s) => (
                  <ServiceCard key={s.slug} slug={s.slug} />
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
