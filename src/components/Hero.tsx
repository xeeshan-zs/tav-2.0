"use client";

import { ArrowDownRight, Award, ShieldCheck, Flame, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import CardStack from "@/components/CardStack";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const wordVariants = {
    hidden: { y: "110%" },
    visible: {
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const headlineLines = [
    "We Engineer Digital",
    "Products & Brands",
    "Built to Scale.",
  ];

  const metrics = [
    { value: "$150M+", label: "Client Capital Raised", icon: Globe },
    { value: "98%", label: "On-Time Delivery", icon: ShieldCheck },
    { value: "24+", label: "Global Design Awards", icon: Award },
    { value: "12+", label: "Active Retainer Partners", icon: Flame },
  ];

  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-transparent">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 w-full"
          >
            {/* Status Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2.5 bg-[#2196F3]/10 border border-[#2196F3]/20 px-3.5 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#2196F3] pulse-teal"></span>
              <span className="text-[10px] uppercase tracking-widest font-semibold text-[#90CAF9]">
                Independent Digital Product & Brand Studio
              </span>
            </motion.div>

            {/* Headline with staggered mask reveal */}
            <div className="mb-8 select-none">
              {headlineLines.map((line, lineIdx) => (
                <div key={lineIdx} className="overflow-hidden py-1">
                  <motion.div
                    variants={wordVariants}
                    className={`text-4xl md:text-7xl font-display font-bold tracking-tighter leading-none ${
                      lineIdx === 1 ? "text-[#AEABC5]" : "text-white"
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
              className="text-base md:text-xl font-sans text-[#AEABC5] leading-relaxed max-w-2xl mb-10"
            >
              A multidisciplinary studio partnering with ambitious founders, tech companies, and forward-thinking brands to design high-converting web systems and digital products.
            </motion.p>

            {/* Dual CTAs with Magnetic triggers */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5">
              <Magnetic range={35} strength={0.35}>
                <a
                  href="#projects"
                  className="bg-white text-black font-semibold text-xs py-4 px-8 rounded-full hover:bg-zinc-200 transition-colors duration-200"
                >
                  Explore Studio Work
                </a>
              </Magnetic>
              
              <Magnetic range={30} strength={0.3}>
                <a
                  href="#domains"
                  className="group flex items-center gap-1.5 text-xs uppercase tracking-widest font-bold text-white hover:text-[#AEABC5] transition-colors py-2"
                >
                  Our Capabilities
                  <ArrowDownRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-200" />
                </a>
              </Magnetic>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="lg:col-span-5 flex justify-center lg:justify-end w-full"
          >
            <CardStack />
          </motion.div>
        </div>

        {/* Metrics Strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-white/10 pt-10"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="group p-5 bg-white/[0.01] border border-white/5 rounded-2xl hover:border-white/10 hover:bg-white/[0.02] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-3 text-[#AEABC5] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5 stroke-[1.5]" />
                  <span className="text-[10px] uppercase tracking-widest font-mono text-[#AEABC5]/60">0{index + 1}</span>
                </div>
                <div className="text-2xl md:text-3xl font-display font-bold text-white tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs text-[#AEABC5] mt-1 font-medium">{metric.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
