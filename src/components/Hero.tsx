import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

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


      {/* Mobile-only theme toggle at top-right corner of hero */}
      <div className="absolute top-5 right-5 z-20 block sm:hidden">
        <ThemeToggle />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center text-center">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >

          {/* Centered Statement Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.05] mb-8 max-w-4xl">
            <motion.span 
              variants={itemVariants} 
              className="block overflow-hidden pb-1"
            >
              Engineering Precision
            </motion.span>
            <motion.span 
              variants={itemVariants} 
              className="block overflow-hidden text-[#737373] pb-1"
            >
              for the
            </motion.span>
            <motion.span 
              variants={itemVariants} 
              className="block overflow-hidden matrix-text pb-1"
            >
              Next Wave of Innovation
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base text-[#bbcabf] max-w-2xl leading-relaxed mb-10 body-text"
          >
            We build high-performance web platforms, robust Android applications, and scalable design systems for technology leaders who demand structural integrity and data density.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/contact"
              className="btn-primary font-mono text-[12px] px-8 py-3.5 uppercase font-bold tracking-wider hover:bg-[#4edea3] transition-colors active:scale-[0.97]"
            >
              Initialize Project
            </a>
            <a
              href="/work"
              className="btn-ghost font-mono text-[12px] px-8 py-3.5 uppercase font-bold tracking-wider hover:border-[#10b981] hover:text-[#10b981] transition-colors active:scale-[0.97]"
            >
              View Technical Docs
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative vertical lines / wireframe details */}
      <div className="absolute left-1/4 top-0 bottom-0 w-px bg-outline-variant/10 pointer-events-none hidden md:block" />
      <div className="absolute right-1/4 top-0 bottom-0 w-px bg-outline-variant/10 pointer-events-none hidden md:block" />
    </section>
  );
}
