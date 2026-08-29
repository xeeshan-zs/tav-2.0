import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { whyTavryz } from "@/lib/why";

function PcbOverlay() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07] dark:opacity-[0.05]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="pcb" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <line x1="0" y1="15" x2="60" y2="15" stroke="currentColor" strokeWidth="0.5" />
          <line x1="0" y1="45" x2="60" y2="45" stroke="currentColor" strokeWidth="0.5" />
          <line x1="15" y1="0" x2="15" y2="60" stroke="currentColor" strokeWidth="0.5" />
          <line x1="45" y1="0" x2="45" y2="60" stroke="currentColor" strokeWidth="0.5" />
          <path d="M15 15 L30 15 L30 45 L45 45" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="15" cy="15" r="2" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="45" cy="15" r="2" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="15" cy="45" r="2" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="45" cy="45" r="2" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="30" cy="30" r="1.5" fill="currentColor" opacity="0.5" />
          <rect x="28" y="13" width="4" height="4" rx="0.5" fill="none" stroke="currentColor" strokeWidth="0.4" />
          <rect x="28" y="43" width="4" height="4" rx="0.5" fill="none" stroke="currentColor" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#pcb)" className="text-accent-teal" />
    </svg>
  );
}

function BranchWire({ isLeft, index }: { isLeft: boolean; index: number }) {
  const yJitter = ((index * 7) % 16) - 8;
  const curveHeight = 12 + (index % 3) * 6;

  const dir = isLeft ? -1 : 1;
  const endX = dir * 65;
  const endY = yJitter;
  const cp1X = dir * 25;
  const cp1Y = -curveHeight;
  const cp2X = dir * 50;
  const cp2Y = endY + curveHeight * 0.5;

  const d = `M 0 0 C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${endX} ${endY}`;

  return (
    <svg
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible"
      width="160"
      height="60"
      viewBox="-80 -30 160 60"
    >
      <motion.path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        className="text-accent-teal/10"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.path
        d={d}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-accent-teal/40"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.circle
        cx={endX}
        cy={endY}
        r="2.5"
        className="fill-accent-teal/50"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.3, delay: 0.7 }}
      />
    </svg>
  );
}

function ScrollWire() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 80%", "end 20%"] });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0.3]);
  const dotTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="absolute left-1/2 top-0 bottom-0 hidden -translate-x-1/2 md:block">
      <div className="h-full w-px dark:bg-white/[0.04] bg-black/[0.06]" />

      <motion.div
        className="absolute left-0 top-0 w-px origin-top"
        style={{ height: pathHeight, opacity: glowOpacity }}
      >
        <div className="h-full w-px bg-gradient-to-b from-accent-teal via-accent-teal to-transparent" />
        <div className="absolute -left-1 top-0 h-full w-[3px] blur-sm bg-gradient-to-b from-accent-teal/60 via-accent-teal/40 to-transparent" />
        <div className="absolute -left-2 top-0 h-full w-[5px] blur-md bg-gradient-to-b from-accent-teal/30 via-accent-teal/15 to-transparent" />
      </motion.div>

      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ top: dotTop }}
      >
        <motion.div
          animate={{ scale: [1, 1.6, 1], opacity: [0.8, 0.4, 0.8] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <div className="h-2 w-2 rounded-full bg-accent-teal" />
          <div className="absolute inset-0 h-2 w-2 rounded-full bg-accent-teal blur-sm" />
          <div className="absolute -inset-2 h-6 w-6 rounded-full bg-accent-teal/20 blur-md" />
        </motion.div>
      </motion.div>

      {whyTavryz.map((_, i) => {
        const fraction = (i + 0.5) / whyTavryz.length;
        const topPercent = fraction * 100;
        const isLeft = i % 2 === 0;
        return (
          <div
            key={i}
            className="absolute left-1/2 -translate-x-1/2"
            style={{ top: topPercent + "%" }}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="relative -translate-y-1/2"
            >
              <div className="h-3 w-3 rounded-full border-2 border-accent-teal bg-[var(--bg-primary)] dark:bg-[#07080A]" />
              <div className="absolute inset-0 h-3 w-3 rounded-full border border-accent-teal/30" />
            </motion.div>

            <BranchWire isLeft={isLeft} index={i} />
          </div>
        );
      })}
    </div>
  );
}

export function WhyTimeline() {
  return (
    <div className="relative mx-auto max-w-4xl">
      <ScrollWire />

      <div className="relative flex flex-col gap-6 md:gap-10">
        {whyTavryz.map((point, i) => {
          const Icon = point.icon;
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full md:w-[45%] ${isLeft ? "md:mr-auto" : "md:ml-auto"} ${
                i % 3 === 1 ? "md:mt-10" : ""
              }`}
            >
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="card-border-glow relative overflow-hidden rounded-2xl border dark:border-white/[0.06] border-accent-teal/20 dark:bg-white/[0.03] bg-white/80 p-6 dark:shadow-card shadow-sm backdrop-blur-sm"
              >
                <PcbOverlay />
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent-teal text-white dark:shadow-[0_0_20px_-4px_rgba(0,124,125,0.5)] shadow-[0_0_12px_-2px_rgba(0,124,125,0.3)]"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.div>
                  <h3 className="mb-2 font-display text-base font-bold tracking-tight dark:text-white text-[var(--text-primary)]">{point.title}</h3>
                  <p className="text-[13px] leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">{point.body}</p>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
