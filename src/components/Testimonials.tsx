"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      name: "Aroush Shah",
      title: "Founder",
      company: "Aroush Works",
      initials: "AS",
      quote: "Tavryz delivered our studio site in under 3 weeks. The sub-second loading time and fluid micro-interactions have elevated our brand's presence completely.",
    },
    {
      name: "Alexander Becker",
      title: "VP of Product",
      company: "ICCS Global",
      initials: "AB",
      quote: "Tavryz stands out for their commitment to constraints. Weekly demo cadence and transparent pipeline meant we always saw progress in code, not in slide decks.",
    },
    {
      name: "Zeeshan Safdar",
      title: "CTO",
      company: "Z Nectar Mobile",
      initials: "ZS",
      quote: "The native Kotlin and Jetpack Compose mobile app they delivered is offline-first, robust, and performs flawlessly under field tests. Shipped production-ready within schedule.",
    },
    {
      name: "Sarah Chen",
      title: "Head of Design",
      company: "Meridian Labs",
      initials: "SC",
      quote: "Their design systems are meticulous. Every token, every spacing value — intentional and documented.",
    },
    {
      name: "Marcus Reid",
      title: "CEO",
      company: "FlowState",
      initials: "MR",
      quote: "From concept to deployment in 6 weeks. The technical architecture they built scales effortlessly.",
    },
    {
      name: "Elena Volkov",
      title: "Product Lead",
      company: "NovaTech",
      initials: "EV",
      quote: "Rare to find a team that understands both the engineering depth and the design craft required for premium products.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-white/20" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#737373]">
              Testimonials
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] tracking-[-0.03em]">
            What our clients<br />
            <span className="text-[#737373]">say about us.</span>
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 300, damping: 24, delay: idx * 0.05 }}
              className="break-inside-avoid bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 hover:bg-white/[0.05] hover:border-white/[0.08] transition-all group"
            >
              {/* Quote */}
              <p className="text-[13px] text-[#d4d4d4] leading-relaxed mb-4 body-text">
                &ldquo;{review.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-2.5 pt-3 border-t border-white/[0.04]">
                <div className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[9px] font-bold text-white group-hover:bg-white/[0.1] transition-colors">
                  {review.initials}
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-white">{review.name}</div>
                  <div className="text-[9px] text-[#737373]">
                    {review.title} · {review.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
