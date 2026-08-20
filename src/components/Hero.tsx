"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 200, damping: 24 },
    },
  };

  const lineVariants = {
    hidden: { y: "110%" },
    visible: {
      y: 0,
      transition: { type: "spring" as const, stiffness: 150, damping: 20 },
    },
  };

  const logos = [
    "Vercel",
    "Linear",
    "Notion",
    "Stripe",
    "Figma",
    "GitHub",
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 md:pt-20 overflow-hidden bg-transparent">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Tavryz Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 md:mb-8 select-none"
        >
          <img
            src="/tavryz-logo-centered.svg"
            alt="Tavryz"
            className="w-24 md:w-32 h-auto"
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Centered Statement Headline */}
          <div className="mb-6 select-none">
            {["We Engineer", "Digital Products", "& Brands Built to Scale."].map((line, lineIdx) => (
              <div key={lineIdx} className="overflow-hidden py-1">
                <motion.div
                  variants={lineVariants}
                  className={`text-5xl md:text-7xl lg:text-[5.5rem] font-display font-bold leading-[1.05] tracking-[-0.03em] ${
                    lineIdx === 2 ? "text-[#737373]" : "text-white"
                  }`}
                >
                  {line}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-[#a3a3a3] leading-relaxed max-w-xl mb-10 body-text"
          >
            A multidisciplinary studio partnering with ambitious founders and forward-thinking brands to design high-converting web systems and digital products.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <a
              href="#projects"
              className="bg-white text-black font-semibold text-[13px] py-3.5 px-8 rounded-full hover:bg-zinc-200 transition-colors duration-200 shadow-[0_2px_8px_rgba(255,255,255,0.1)]"
            >
              Explore Our Work
            </a>
            <a
              href="#domains"
              className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold text-white hover:text-[#737373] transition-colors py-2"
            >
              Capabilities
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform duration-200" />
            </a>
          </motion.div>
        </motion.div>

        {/* Logo Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-full mt-20 mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#525252] mb-8 font-mono">
            Trusted by forward-thinking teams
          </p>
          <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-4">
            {logos.map((logo, i) => (
              <span
                key={i}
                className="text-[15px] font-display font-bold text-white/[0.15] hover:text-white/[0.3] transition-colors duration-300 tracking-tight select-none cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  );
}
