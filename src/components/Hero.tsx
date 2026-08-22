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
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent grid-bg border-b border-outline-variant">
      {/* Mobile-only wordmark at top-left corner */}
      <div className="absolute top-6 left-6 z-20 block sm:hidden">
        <img 
          src="/tav files/tavryz-wordmark.png" 
          alt="Tavryz" 
          className="h-[22px] w-auto object-contain" 
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Centered Active Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block px-3 py-1 mb-6 border border-[#10b981] text-[#10b981] font-mono text-[11px] uppercase tracking-widest bg-black/80"
          >
            System Active v2.4.1
          </motion.div>

          {/* Centered Statement Headline */}
          <div className="mb-6 select-none">
            <div className="overflow-hidden py-1">
              <motion.div
                variants={lineVariants}
                className="text-4xl md:text-6xl lg:text-[5rem] font-display font-bold leading-[1.05] tracking-[-0.03em] text-white"
              >
                Engineering Precision for the
              </motion.div>
            </div>
            <div className="overflow-hidden py-1">
              <motion.div
                variants={lineVariants}
                className="text-4xl md:text-6xl lg:text-[5rem] font-display font-bold leading-[1.05] tracking-[-0.03em] matrix-text"
              >
                Next Wave of Innovation
              </motion.div>
            </div>
          </div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-[#bbcabf] leading-relaxed max-w-2xl mb-10 body-text"
          >
            We build high-performance web platforms, robust Android applications, and scalable design systems for technology leaders who demand structural integrity and data density.
          </motion.p>

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
            <a
              href="#contact"
              className="btn-primary px-8 py-3.5 font-mono text-[11px] uppercase font-bold flex items-center justify-center gap-2 active:scale-[0.97]"
            >
              Initialize Project
            </a>
            <a
              href="#domains"
              className="btn-ghost px-8 py-3.5 font-mono text-[11px] uppercase flex items-center justify-center gap-2 active:scale-[0.97]"
            >
              View Technical Docs
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
