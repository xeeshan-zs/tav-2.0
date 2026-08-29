import { motion } from "framer-motion";

export type Step = {
  id: string;
  title: string;
  description: string;
};

export function ProcessTimeline({ steps }: { steps: Step[] }) {
  return (
    <div className="relative">
      <div className="absolute left-[10%] right-[10%] top-6 hidden h-px dark:bg-white/[0.04] bg-black/[0.06] md:block">
        <div className="h-full w-[28%] bg-brand-gradient" />
      </div>
      <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-4 md:gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative z-10 flex flex-col items-center"
          >
            <motion.div
              whileHover={{ scale: 1.15, y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className={`mb-6 flex h-12 w-12 items-center justify-center rounded-full font-mono text-sm font-bold transition-all ${
                i === 0
                  ? "bg-brand-gradient text-white dark:shadow-[0_0_24px_-4px_rgba(0,124,125,0.5),0_0_48px_-12px_rgba(0,166,166,0.3)] shadow-glow"
                  : "dark:border-white/[0.08] border-black/[0.08] dark:bg-white/[0.03] bg-white/80 dark:text-slate-400 text-[var(--text-secondary)] hover:border-accent-teal/40 hover:text-[var(--text-primary)]"
              }`}
            >
              {step.id}
            </motion.div>
            <h3 className="mb-2 font-display text-xl font-bold tracking-tight dark:text-white text-[var(--text-primary)]">{step.title}</h3>
            <p className="max-w-[200px] text-[13px] leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
