import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getServiceBySlug } from "@/lib/services";
import { revealItem } from "./Reveal";
import { motion } from "framer-motion";

export function ServiceCard({ slug }: { slug: string }) {
  const service = getServiceBySlug(slug);
  if (!service) return null;
  const Icon = service.icon;
  return (
    <motion.div variants={revealItem}>
      <Link
        to={`/services/${service.slug}`}
        className="glass-card group relative flex h-full flex-col overflow-hidden rounded-2xl p-6"
      >
        <div className="mb-5 flex items-start justify-between">
          <motion.div
            whileHover={{ rotate: 10, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient-soft dark:shadow-[0_0_16px_-4px_rgba(0,124,125,0.25)]"
          >
            <Icon className="h-5 w-5 text-accent-teal" />
          </motion.div>
          <ArrowUpRight className="h-4 w-4 dark:text-slate-600 text-[var(--text-muted)] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-accent-teal" />
        </div>
        <span className="mb-1.5 font-mono text-[10px] tracking-widest dark:text-slate-500 text-[var(--text-muted)]">{service.id}</span>
        <h3 className="mb-2 font-display text-lg font-bold leading-snug tracking-tight dark:text-white text-[var(--text-primary)]">{service.title}</h3>
        <p className="mb-5 text-[13px] leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">{service.shortDescription}</p>
        <div className="mt-auto flex flex-wrap gap-1.5">
          {service.subdomains.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-md dark:border-white/[0.06] border-black/[0.06] dark:bg-white/[0.04] bg-black/[0.03] px-2.5 py-1 text-[10px] dark:text-slate-400 text-[var(--text-secondary)]">
              {tag}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
