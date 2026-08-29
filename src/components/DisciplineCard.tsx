import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { revealItem } from "./Reveal";
import { disciplines } from "@/lib/team";

const tags = ["CORE", "CORE", "GROWTH", "INFRA"];

export function DisciplineCard({ index }: { index: number }) {
  const d = disciplines[index];
  if (!d) return null;
  const { icon: Icon, title, body } = d;
  const tag = tags[index] || "CORE";

  const sweepRef = useRef<HTMLDivElement>(null);
  const sweepInView = useInView(sweepRef, { once: true });

  return (
    <motion.div
      variants={revealItem}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-2xl border dark:border-white/[0.06] border-accent-teal/15 dark:bg-white/[0.03] bg-white/80 p-7 backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_0_24px_-4px_rgba(0,124,125,0.3)]"
    >
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.04] dark:opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`disc-pcb-${index}`} x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <line x1="0" y1="12" x2="50" y2="12" stroke="currentColor" strokeWidth="0.3" />
            <line x1="0" y1="38" x2="50" y2="38" stroke="currentColor" strokeWidth="0.3" />
            <line x1="12" y1="0" x2="12" y2="50" stroke="currentColor" strokeWidth="0.3" />
            <line x1="38" y1="0" x2="38" y2="50" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="12" cy="12" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="38" cy="38" r="1.5" fill="none" stroke="currentColor" strokeWidth="0.3" />
            <circle cx="25" cy="25" r="1" fill="currentColor" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#disc-pcb-${index})`} className="text-accent-teal" />
      </svg>

      <div className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l border-t border-accent-teal/20 transition-colors duration-300 group-hover:border-accent-teal/60" />
      <div className="pointer-events-none absolute right-2 top-2 h-3 w-3 border-r border-t border-accent-teal/20 transition-colors duration-300 group-hover:border-accent-teal/60" />
      <div className="pointer-events-none absolute bottom-2 left-2 h-3 w-3 border-b border-l border-accent-teal/20 transition-colors duration-300 group-hover:border-accent-teal/60" />
      <div className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b border-r border-accent-teal/20 transition-colors duration-300 group-hover:border-accent-teal/60" />

      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex h-11 w-11 items-center justify-center rounded-xl dark:bg-accent-teal/10 bg-accent-teal/10 transition-colors duration-300 group-hover:bg-accent-teal/20"
          >
            <Icon className="h-5 w-5 text-accent-teal" />
          </motion.div>
          <div className="flex items-center gap-1.5">
            <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }} className="h-1 w-1 rounded-full bg-accent-teal" />
            <span className="font-mono text-[8px] font-bold tracking-[0.2em] text-accent-teal/50">{tag}</span>
          </div>
        </div>

        <h3 className="mb-2.5 font-display text-lg font-bold tracking-tight dark:text-white text-[var(--text-primary)] group-hover:text-accent-teal transition-colors duration-300">
          {title}
        </h3>
        <p className="text-[13px] leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
          {body}
        </p>
      </div>

      <div ref={sweepRef}>
        <motion.div initial={{ x: "-100%" }} animate={sweepInView ? { x: "200%" } : {}} transition={{ duration: 1.2, delay: 0.2 + index * 0.1, ease: "easeInOut" }} className="absolute bottom-0 left-0 h-[1px] w-1/3 bg-gradient-to-r from-transparent via-accent-teal/40 to-transparent" />
      </div>
    </motion.div>
  );
}
