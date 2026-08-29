import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { services } from "@/lib/services";
import { process } from "@/lib/process";
import { projects } from "@/lib/portfolio";

const stats = [
  {
    value: services.length,
    suffix: "",
    label: "Engineering Domains",
    body: "From web and mobile to AI, security, and growth, every discipline your product needs lives under one roof.",
    progress: 0.85,
    tag: "ACTIVE",
  },
  {
    value: process.length,
    suffix: "",
    label: "Phase Delivery Process",
    body: "Discovery, Design, Build, and Launch — the same process runs through every project, scaled to fit.",
    progress: 1.0,
    tag: "COMPLETE",
  },
  {
    value: projects.length,
    suffix: "",
    label: "Shipped Projects",
    body: "Real products with real metrics, every build documented with the numbers behind it.",
    progress: 0.6,
    tag: "SHIPPED",
  },
];

function HudCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <Reveal delay={index * 0.1}>
      <div
        ref={ref}
        className="glass-card group relative h-full overflow-hidden rounded-2xl p-8 text-left"
      >
        <div className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-accent-teal/30 transition-colors duration-300 group-hover:border-accent-teal/70" />
        <div className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-accent-teal/30 transition-colors duration-300 group-hover:border-accent-teal/70" />
        <div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-accent-teal/30 transition-colors duration-300 group-hover:border-accent-teal/70" />
        <div className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-accent-teal/30 transition-colors duration-300 group-hover:border-accent-teal/70" />

        <div className="mb-4 flex items-center gap-2">
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-1.5 w-1.5 rounded-full bg-accent-teal"
          />
          <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-accent-teal/70">
            {stat.tag}
          </span>
        </div>

        <Counter value={stat.value} suffix={stat.suffix} />
        <div className="mb-3 mt-1 text-sm font-semibold dark:text-white text-[var(--text-primary)] group-hover:text-accent-teal transition-colors duration-300">
          {stat.label}
        </div>
        <p className="mb-5 text-[13px] leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
          {stat.body}
        </p>

        <div className="relative h-1 w-full overflow-hidden rounded-full dark:bg-white/[0.06] bg-black/[0.06]">
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: `${stat.progress * 100}%` } : { width: 0 }}
            transition={{ duration: 1.2, delay: 0.3 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-0 top-0 h-full rounded-full bg-accent-teal"
          />
        </div>
        <div className="mt-1.5 flex justify-between font-mono text-[9px] dark:text-slate-600 text-slate-400">
          <span>0</span>
          <span>{stat.value}{stat.suffix}</span>
        </div>
      </div>
    </Reveal>
  );
}

export function StatsSection() {
  return (
    <section className="relative z-10 border-t dark:border-white/[0.04] border-black/[0.06] px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <Reveal>
          <h2 className="mx-auto mb-16 max-w-3xl font-display text-4xl font-bold leading-[1.25] tracking-tight dark:text-white text-[var(--text-primary)] md:text-5xl">
            <span className="text-accent-teal">Engineering</span> platforms,{" "}
            <span className="text-accent-teal">shipping</span> products, and{" "}
            <span className="text-accent-teal">compounding</span> growth.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <HudCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
