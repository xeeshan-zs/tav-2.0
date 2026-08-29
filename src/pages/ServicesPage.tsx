import { Helmet } from "react-helmet-async";
import { GridGlow } from "@/components/GridGlow";
import { Eyebrow } from "@/components/Badge";
import { Reveal, RevealGroup } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/lib/services";

export function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Services — Tavryz Studio</title>
        <meta name="description" content="Eleven engineering domains covering web, mobile, AI, security, design, and growth." />
      </Helmet>
      <section className="relative px-6 pb-24 pt-40">
        <GridGlow variant="section" />
        <div className="relative mx-auto max-w-6xl">
          <Reveal className="mb-16">
            <div className="glass-card max-w-2xl rounded-3xl p-8 md:p-10">
              <Eyebrow>What We Do</Eyebrow>
              <h1 className="mb-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight dark:text-white text-[var(--text-primary)] md:text-5xl">
                Our <span className="text-gradient">Capabilities.</span>
              </h1>
              <p className="text-base leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
                Eleven domains, each backed by real technical expertise, covering everything from the first
                line of code to the growth work after launch. Open any one below for the full breakdown.
              </p>
            </div>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} slug={service.slug} />
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
