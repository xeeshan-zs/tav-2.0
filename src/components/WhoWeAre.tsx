import { useEffect, useRef, useState } from "react";
import { Eyebrow } from "./Badge";
import { Reveal } from "./Reveal";
import { motion, useInView } from "framer-motion";
import { Terminal, Layers, Code2 } from "lucide-react";

const facts = [
  { label: "Engineering Domains", value: 11, icon: Code2, suffix: "" },
  { label: "Process Phases", value: 4, icon: Layers, suffix: "" },
  { label: "Project Ownership", value: null, display: "Full-Stack", icon: Terminal },
];

function CountUp({ target, inView }: { target: number; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <>{count}</>;
}

function BinaryGrid() {
  const cells = Array.from({ length: 24 }, (_, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0.08 }}
      animate={{ opacity: [0.08, 0.25, 0.08] }}
      transition={{
        duration: 2 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
      className="h-[2px] w-[2px] rounded-full bg-accent-teal"
    />
  ));
  return <div className="pointer-events-none absolute inset-0 flex flex-wrap gap-[6px] p-4 opacity-40">{cells}</div>;
}

function FactCard({ f, index, inView }: { f: typeof facts[0]; index: number; inView: boolean }) {
  const sweepRef = useRef<HTMLDivElement>(null);
  const sweepInView = useInView(sweepRef, { once: true });
  const Icon = f.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="glass-card group relative overflow-hidden rounded-2xl p-6 text-center transition-shadow duration-300 hover:shadow-[0_0_24px_-4px_rgba(0,124,125,0.4),0_0_48px_-12px_rgba(0,166,166,0.2)] dark:hover:shadow-[0_0_24px_-4px_rgba(0,124,125,0.5),0_0_48px_-12px_rgba(0,166,166,0.3)]"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-transparent transition-all duration-300 group-hover:border-accent-teal/30" />
      <div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(circle at 50% 50%, rgba(0,124,125,0.15), transparent 70%)" }} />
      <BinaryGrid />
      <div className="relative z-10">
        <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-lg dark:bg-accent-teal/10 bg-accent-teal/10">
          <Icon className="h-4 w-4 text-accent-teal" strokeWidth={2} />
        </div>
        <div className="text-gradient mb-1 font-display text-3xl font-extrabold">
          {f.value !== null ? <CountUp target={f.value} inView={inView} /> : f.display}
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] dark:text-slate-500 text-[var(--text-muted)]">{f.label}</div>
      </div>
      <div ref={sweepRef}>
        <motion.div
          initial={{ x: "-100%" }}
          animate={sweepInView ? { x: "200%" } : {}}
          transition={{ duration: 1.5, delay: 0.3 + index * 0.15, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 h-[1px] w-1/3 bg-gradient-to-r from-transparent via-accent-teal/60 to-transparent"
        />
      </div>
    </motion.div>
  );
}

export function WhoWeAre() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section className="relative z-10 border-t dark:border-white/5 border-black/[0.06] px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 md:grid-cols-2 md:items-center">
        <Reveal>
          <Eyebrow>Who We Are</Eyebrow>
          <motion.div
            ref={headingRef}
            initial={{ opacity: 0, y: 24 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="mb-6 font-display text-4xl font-bold leading-[1.15] tracking-tight dark:text-white text-[var(--text-primary)] md:text-5xl">
              A software engineering and design studio that owns the whole build, not just a piece of it.
            </h2>
          </motion.div>
          <p className="max-w-lg text-[15px] leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
            Tavryz is a software engineering and design studio. We build web platforms, mobile apps, and
            the brand and growth systems around them, all under one roof. One team covers eleven domains,
            so you&apos;re not chasing down a different vendor for every piece of the project.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div ref={ref} className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {facts.map((f, i) => (
              <FactCard key={f.label} f={f} index={i} inView={inView} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
