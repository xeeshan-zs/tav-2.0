import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FaqItem } from "@/lib/faq";

export function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y dark:divide-white/[0.06] divide-black/[0.06] rounded-2xl border dark:border-white/[0.06] border-black/[0.06] dark:bg-white/[0.03] bg-white/80 backdrop-blur-sm"
      style={{
        boxShadow: "var(--glass-shadow)",
      }}
    >
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors dark:hover:bg-white/[0.02] hover:bg-black/[0.02]"
            >
              <span className="font-display text-[15px] font-semibold tracking-tight dark:text-white text-[var(--text-primary)]">
                {item.question}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0, scale: isOpen ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-gradient-soft text-accent-teal dark:shadow-[0_0_12px_-2px_rgba(0,124,125,0.2)]"
              >
                <Plus className="h-3.5 w-3.5" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-[13px] leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">{item.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
