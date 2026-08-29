import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { GridGlow } from "@/components/GridGlow";
import { Eyebrow } from "@/components/Badge";
import { Reveal, RevealGroup, revealItem } from "@/components/Reveal";
import { TextReveal } from "@/components/TextReveal";
import { process } from "@/lib/process";

const manifesto = [
  {
    label: "01 — Precision",
    title: "We don't guess. We engineer.",
    body: "Every line of code, every design decision, every campaign metric is backed by research and data. Precision isn't a buzzword here — it's the process.",
  },
  {
    label: "02 — Ownership",
    title: "One team. The whole build.",
    body: "Architecture, UI, API, infrastructure, security, growth — one team owns all of it. No handoffs, no finger-pointing, no one relearning your codebase halfway through.",
  },
  {
    label: "03 — Scale",
    title: "Built for what's next, not just what's now.",
    body: "Performance, accessibility, and security get built into the foundation. We don't patch things in later — we plan for scale from day one.",
  },
  {
    label: "04 — Velocity",
    title: "Ship fast. Ship right.",
    body: "Speed and quality aren't opposites. Our process is designed to move quickly without cutting corners — sprint cycles, continuous deployment, and real feedback loops.",
  },
];

const principles = [
  { id: "RULE.01", title: "Full-stack ownership", body: "One team handles architecture through deployment: UI, API, infrastructure. No handoffs.", tag: "NON-NEGOTIABLE" },
  { id: "RULE.02", title: "Engineering over guesswork", body: "Every decision backed by research and data, not opinions.", tag: "NON-NEGOTIABLE" },
  { id: "RULE.03", title: "Built for scale", body: "Performance, accessibility, and security built into the foundation from day one.", tag: "NON-NEGOTIABLE" },
  { id: "RULE.04", title: "Everything under one roof", body: "Web, mobile, AI, security, commerce, design, growth — all under one roof.", tag: "NON-NEGOTIABLE" },
  { id: "RULE.05", title: "Direct communication", body: "You talk to the people building your product. No middlemen.", tag: "NON-NEGOTIABLE" },
  { id: "RULE.06", title: "Fixed process, flexible scope", body: "Same four-phase process, adjusted to what your project actually needs.", tag: "NON-NEGOTIABLE" },
];

const capabilities = [
  { value: 11, label: "Engineering Domains", tag: "ACTIVE" },
  { value: 4, label: "Process Phases", tag: "COMPLETE" },
  { value: 3, label: "Projects Shipped", tag: "SHIPPED" },
  { value: 99, suffix: "%", label: "Client Retention", tag: "ONGOING" },
];

function CountUp({ target, suffix = "", inView }: { target: number; suffix?: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);
  return (
    <>
      {count}
      {suffix}
    </>
  );
}

function ManifestoBlock({ item, index }: { item: (typeof manifesto)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`relative py-16 md:py-24 ${isLeft ? "md:pr-[15%]" : "md:pl-[15%] md:ml-auto"} max-w-2xl`}
    >
      <span className="mb-4 block font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-accent-teal">
        {item.label}
      </span>
      <h3 className="mb-4 font-display text-3xl font-bold leading-[1.15] tracking-tight dark:text-white text-[var(--text-primary)] md:text-4xl">
        {item.title}
      </h3>
      <p className="text-[15px] leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
        {item.body}
      </p>
    </motion.div>
  );
}

function CapabilityCard({ cap, index }: { cap: (typeof capabilities)[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const sweepRef = useRef<HTMLDivElement>(null);
  const sweepInView = useInView(sweepRef, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="glass-card group relative overflow-hidden rounded-2xl p-8"
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04] dark:opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`cap-pcb-${index}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="10" x2="40" y2="10" stroke="currentColor" strokeWidth="0.4" />
            <line x1="0" y1="30" x2="40" y2="30" stroke="currentColor" strokeWidth="0.4" />
            <line x1="10" y1="0" x2="10" y2="40" stroke="currentColor" strokeWidth="0.4" />
            <line x1="30" y1="0" x2="30" y2="40" stroke="currentColor" strokeWidth="0.4" />
            <circle cx="10" cy="10" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.4" />
            <circle cx="30" cy="30" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.4" />
            <circle cx="20" cy="20" r="1" fill="currentColor" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#cap-pcb-${index})`} className="text-accent-teal" />
      </svg>

      <div className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-accent-teal/20 transition-colors duration-300 group-hover:border-accent-teal/60" />
      <div className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-accent-teal/20 transition-colors duration-300 group-hover:border-accent-teal/60" />
      <div className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-accent-teal/20 transition-colors duration-300 group-hover:border-accent-teal/60" />
      <div className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-accent-teal/20 transition-colors duration-300 group-hover:border-accent-teal/60" />

      <div className="relative z-10">
        <div className="mb-3 flex items-center gap-2">
          <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} className="h-1.5 w-1.5 rounded-full bg-accent-teal" />
          <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-accent-teal/60">{cap.tag}</span>
        </div>
        <div className="text-gradient mb-2 font-display text-5xl font-extrabold md:text-6xl">
          <CountUp target={cap.value} suffix={cap.suffix || ""} inView={inView} />
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] dark:text-slate-500 text-[var(--text-muted)]">{cap.label}</div>
      </div>

      <div ref={sweepRef}>
        <motion.div initial={{ x: "-100%" }} animate={sweepInView ? { x: "200%" } : {}} transition={{ duration: 1.5, delay: 0.3 + index * 0.15, ease: "easeInOut" }} className="absolute bottom-0 left-0 h-[1px] w-1/3 bg-gradient-to-r from-transparent via-accent-teal/50 to-transparent" />
      </div>
    </motion.div>
  );
}

function TechyPrincipleCard({ principle, index }: { principle: (typeof principles)[0]; index: number }) {
  const sweepRef = useRef<HTMLDivElement>(null);
  const sweepInView = useInView(sweepRef, { once: true });

  return (
    <motion.div
      variants={revealItem}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-2xl border dark:border-white/[0.06] border-accent-teal/15 dark:bg-white/[0.03] bg-white/80 p-6 backdrop-blur-sm"
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04] dark:opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`principle-pcb-${index}`} x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <line x1="0" y1="12" x2="50" y2="12" stroke="currentColor" strokeWidth="0.3" />
            <line x1="0" y1="38" x2="50" y2="38" stroke="currentColor" strokeWidth="0.3" />
            <line x1="12" y1="0" x2="12" y2="50" stroke="currentColor" strokeWidth="0.3" />
            <line x1="38" y1="0" x2="38" y2="50" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="12" cy="12" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="38" cy="38" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="25" cy="25" r="1" fill="currentColor" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#principle-pcb-${index})`} className="text-accent-teal" />
      </svg>

      <div className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l border-t border-accent-teal/25 transition-colors duration-300 group-hover:border-accent-teal/70" />
      <div className="pointer-events-none absolute right-2 top-2 h-3 w-3 border-r border-t border-accent-teal/25 transition-colors duration-300 group-hover:border-accent-teal/70" />
      <div className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b border-l border-accent-teal/25 transition-colors duration-300 group-hover:border-accent-teal/70" />
      <div className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b border-r border-accent-teal/25 transition-colors duration-300 group-hover:border-accent-teal/70" />

      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-accent-teal/50">{principle.id}</span>
          <div className="flex items-center gap-1.5">
            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.3 }} className="h-1 w-1 rounded-full bg-accent-teal" />
            <span className="font-mono text-[8px] font-bold tracking-[0.2em] text-accent-teal/40">{principle.tag}</span>
          </div>
        </div>

        <h3 className="mb-2 font-display text-base font-bold tracking-tight dark:text-white text-[var(--text-primary)] group-hover:text-accent-teal transition-colors duration-300">
          {principle.title}
        </h3>
        <p className="text-[13px] leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
          {principle.body}
        </p>
      </div>

      <div ref={sweepRef}>
        <motion.div initial={{ x: "-100%" }} animate={sweepInView ? { x: "200%" } : {}} transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: "easeInOut" }} className="absolute bottom-0 left-0 h-[1px] w-1/4 bg-gradient-to-r from-transparent via-accent-teal/40 to-transparent" />
      </div>
    </motion.div>
  );
}

function ProcessPreview() {
  return (
    <section className="relative z-10 border-t dark:border-white/[0.04] border-black/[0.06] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 text-center">
          <Eyebrow>Standard Operating Procedure</Eyebrow>
          <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight dark:text-white text-[var(--text-primary)] md:text-5xl">
            How We <span className="text-accent-teal">Work</span>
          </h2>
        </Reveal>

        <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2">
          <ProcessGridLines />
          {process.map((phase, i) => (
            <ProcessPhaseCard key={phase.id} phase={phase} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessGridLines() {
  const vRef = useRef<HTMLDivElement>(null);
  const vInView = useInView(vRef, { once: true });
  const hRef = useRef<HTMLDivElement>(null);
  const hInView = useInView(hRef, { once: true });

  return (
    <>
      <div className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 dark:bg-white/[0.04] bg-black/[0.06] sm:block">
        <div ref={vRef} className="h-full">
          <motion.div initial={{ height: 0 }} animate={vInView ? { height: "100%" } : {}} transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} className="w-full bg-gradient-to-b from-accent-teal/40 via-accent-teal/20 to-transparent" />
        </div>
      </div>
      <div className="pointer-events-none absolute top-1/2 hidden h-px w-full -translate-y-1/2 dark:bg-white/[0.04] bg-black/[0.06] sm:block">
        <div ref={hRef} className="w-full">
          <motion.div initial={{ width: 0 }} animate={hInView ? { width: "100%" } : {}} transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="h-full bg-gradient-to-r from-transparent via-accent-teal/20 to-transparent" />
        </div>
      </div>
    </>
  );
}

function ProcessPhaseCard({ phase, index }: { phase: typeof process[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const sweepRef = useRef<HTMLDivElement>(null);
  const sweepInView = useInView(sweepRef, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-2xl border dark:border-white/[0.06] border-accent-teal/15 dark:bg-white/[0.03] bg-white/80 p-8 backdrop-blur-sm"
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03] dark:opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`process-pcb-${index}`} x="0" y="0" width="45" height="45" patternUnits="userSpaceOnUse">
            <line x1="0" y1="11" x2="45" y2="11" stroke="currentColor" strokeWidth="0.3" />
            <line x1="0" y1="34" x2="45" y2="34" stroke="currentColor" strokeWidth="0.3" />
            <line x1="11" y1="0" x2="11" y2="45" stroke="currentColor" strokeWidth="0.3" />
            <line x1="34" y1="0" x2="34" y2="45" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="11" cy="11" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="34" cy="34" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="22" cy="22" r="1" fill="currentColor" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#process-pcb-${index})`} className="text-accent-teal" />
      </svg>

      <div className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-accent-teal/20 transition-colors duration-300 group-hover:border-accent-teal/60" />
      <div className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-accent-teal/20 transition-colors duration-300 group-hover:border-accent-teal/60" />
      <div className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b border-l border-accent-teal/20 transition-colors duration-300 group-hover:border-accent-teal/60" />
      <div className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b border-r border-accent-teal/20 transition-colors duration-300 group-hover:border-accent-teal/60" />

      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-accent-teal/50">[{phase.id}]</span>
          <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }} className="h-1.5 w-1.5 rounded-full bg-accent-teal" />
        </div>
        <h3 className="mb-2 font-display text-2xl font-bold uppercase tracking-tight dark:text-white text-[var(--text-primary)] group-hover:text-accent-teal transition-colors duration-300">
          {phase.title}
        </h3>
        <p className="mb-5 text-sm leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
          {phase.description}
        </p>
        <ul className="grid grid-cols-1 gap-2">
          {phase.details.map((detail) => (
            <li key={detail} className="flex items-start gap-2 text-[12px] dark:text-slate-400 text-[var(--text-secondary)]">
              <CheckCircle2 className="mt-0.5 h-3 w-3 flex-shrink-0 text-accent-teal/60" />
              {detail}
            </li>
          ))}
        </ul>
      </div>

      <div ref={sweepRef}>
        <motion.div initial={{ x: "-100%" }} animate={sweepInView ? { x: "200%" } : {}} transition={{ duration: 1.2, delay: 0.3 + index * 0.15, ease: "easeInOut" }} className="absolute bottom-0 left-0 h-[1px] w-1/3 bg-gradient-to-r from-transparent via-accent-teal/40 to-transparent" />
      </div>
    </motion.div>
  );
}

export function AboutContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorInView = useInView(scrollIndicatorRef, { once: true });

  return (
    <>
      <section ref={heroRef} className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32">
        <GridGlow variant="hero" />
        <motion.div style={{ opacity: heroOpacity, scale: heroScale, y: heroY }} className="relative z-10 mx-auto max-w-4xl text-center">
          <Reveal>
            <Eyebrow><span className="mx-auto">About Tavryz</span></Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <TextReveal text="We don't build software. We engineer it." className="mb-8 font-display text-4xl font-extrabold leading-[1.08] tracking-tight dark:text-white text-[var(--text-primary)] md:text-6xl lg:text-7xl" delay={0.1} stagger={0.04} />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed dark:text-slate-400 text-[var(--text-secondary)] md:text-lg">
              Tavryz is a software engineering and design studio. We build web platforms, mobile apps, and the brand and growth systems around them — for teams who need things done right, not just done fast.
            </p>
          </Reveal>
          <motion.div ref={scrollIndicatorRef} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }} className="mt-16 flex flex-col items-center gap-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.3em] dark:text-slate-600 text-[var(--text-muted)]">Scroll</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="h-8 w-px bg-gradient-to-b from-accent-teal/40 to-transparent" />
          </motion.div>
        </motion.div>
      </section>

      <section className="relative z-10 border-t dark:border-white/[0.04] border-black/[0.06] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <Reveal className="mb-16 text-center">
            <Eyebrow>By the Numbers</Eyebrow>
            <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight dark:text-white text-[var(--text-primary)] md:text-4xl">
              The scale of what we <span className="text-accent-teal">build.</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {capabilities.map((cap, i) => (
              <CapabilityCard key={cap.label} cap={cap} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t dark:border-white/[0.04] border-black/[0.06] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <Reveal className="mb-8 text-center">
            <Eyebrow>Our Philosophy</Eyebrow>
            <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight dark:text-white text-[var(--text-primary)] md:text-4xl">
              What drives every <span className="text-accent-teal">decision.</span>
            </h2>
          </Reveal>
          {manifesto.map((item, i) => (
            <ManifestoBlock key={item.label} item={item} index={i} />
          ))}
        </div>
      </section>

      <section className="relative z-10 border-t dark:border-white/[0.04] border-black/[0.06] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-16 text-center">
            <Eyebrow>Principles</Eyebrow>
            <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight dark:text-white text-[var(--text-primary)] md:text-4xl">
              Six rules we <span className="text-accent-teal">never</span> break.
            </h2>
          </Reveal>
          <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {principles.map((p, i) => (
              <TechyPrincipleCard key={p.title} principle={p} index={i} />
            ))}
          </RevealGroup>
        </div>
      </section>

      <ProcessPreview />
    </>
  );
}
