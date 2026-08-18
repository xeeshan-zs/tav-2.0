"use client";

import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {
      name: "Aroush Shah",
      title: "Founder",
      company: "Aroush Works",
      initials: "AS",
      color: "from-teal-400 to-indigo-500",
      quote:
        "Tavryz delivered our studio site in under 3 weeks. The sub-second loading time and fluid micro-interactions have elevated our brand's presence completely. In-house engineering craft at its best.",
    },
    {
      name: "Alexander Becker",
      title: "VP of Product",
      company: "ICCS Global",
      initials: "AB",
      color: "from-emerald-400 to-teal-500",
      quote:
        "Tavryz stands out for their commitment to constraints. Their weekly demo cadence and transparent pipeline meant we always saw progress in code, not in slide decks. Highly recommended.",
    },
    {
      name: "Zeeshan Safdar",
      title: "CTO",
      company: "Z Nectar Mobile",
      initials: "ZS",
      color: "from-cyan-400 to-emerald-500",
      quote:
        "The native Kotlin and Jetpack Compose mobile app they delivered is offline-first, robust, and performs flawlessly under field tests. Shipped production-ready to the Play Store within schedule.",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-widest font-mono text-[#AEABC5] block mb-3">
            03 / TRUST & FEEDBACK
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-xs md:text-sm text-[#AEABC5] leading-relaxed mt-4">
            Hear from founders, CTOs, and product leaders who partner with Tavryz Studio to build high-performance products.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="group p-8 bg-[#2D2144]/30 border border-white/5 rounded-2xl hover:border-teal-500/20 hover:bg-[#2D2144]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-teal-500/15 group-hover:text-teal-500/25 transition-colors mb-6 stroke-[1.5]" />
                <p className="text-xs md:text-sm text-zinc-300 leading-relaxed italic mb-8">
                  "{review.quote}"
                </p>
              </div>

              {/* Author details */}
              <div className="flex items-center gap-3.5 border-t border-white/5 pt-6">
                {/* Custom Vector Avatar */}
                <div className={`w-10 h-10 rounded-full bg-gradient-to-tr ${review.color} flex items-center justify-center font-bold text-xs text-white uppercase shadow-inner`}>
                  {review.initials}
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white tracking-tight">
                    {review.name}
                  </h4>
                  <p className="text-[10px] text-[#AEABC5] font-medium mt-0.5">
                    {review.title} · <span className="text-zinc-600">{review.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
