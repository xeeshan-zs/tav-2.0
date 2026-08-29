import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getServiceBySlug } from "@/lib/services";

export function ServiceListRow({ slug, index }: { slug: string; index: number }) {
  const [hovered, setHovered] = useState(false);
  const service = getServiceBySlug(slug);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  if (!service) return null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 6) * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative border-b dark:border-white/10 border-black/[0.06] first:border-t transition-colors duration-300 dark:hover:bg-white/[0.02] hover:bg-black/[0.02] -mx-4 px-4 rounded-xl"
    >
      <Link to={`/services/${service.slug}`} className="flex items-center justify-between gap-6 py-6 md:py-7">
        <div className="flex items-baseline gap-4">
          <span className="hidden font-mono text-xs dark:text-slate-600 text-[var(--text-muted)] md:inline">{service.id}</span>
          <h3
            className={`font-display text-2xl font-extrabold uppercase tracking-normal transition-colors duration-300 sm:text-3xl md:text-4xl ${
              hovered ? "text-accent-teal" : "dark:text-slate-200 text-[var(--text-primary)]"
            }`}
          >
            {service.title}
          </h3>
        </div>
        <span
          className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 md:h-14 md:w-14 ${
            hovered
              ? "border-accent-teal bg-accent-teal text-white -rotate-45"
              : "dark:border-white/15 border-black/[0.1] dark:text-slate-400 text-[var(--text-muted)]"
          }`}
        >
          <ArrowRight className="h-4 w-4 md:h-5 md:w-5" />
        </span>
      </Link>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 4 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none glass-strong absolute left-[22%] top-1/2 z-20 hidden w-72 -translate-y-1/2 rounded-xl p-4 md:block"
          >
            <p className="text-[13px] leading-relaxed dark:text-slate-300 text-[var(--text-secondary)]">{service.shortDescription}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
