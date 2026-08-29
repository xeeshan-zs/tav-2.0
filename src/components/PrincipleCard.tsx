import { motion } from "framer-motion";
import { revealItem } from "./Reveal";

export function PrincipleCard({ title, body }: { title: string; body: string }) {
  return (
    <motion.div variants={revealItem} className="rounded-2xl border dark:border-white/8 border-black/[0.06] dark:bg-white/[0.04] bg-white/80 p-7 shadow-card backdrop-blur-sm">
      <h3 className="mb-2.5 font-display text-lg font-bold tracking-tight dark:text-white text-[var(--text-primary)]">{title}</h3>
      <p className="text-[13px] leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">{body}</p>
    </motion.div>
  );
}
