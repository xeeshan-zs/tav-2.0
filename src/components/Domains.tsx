"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Code, Smartphone, Figma, ArrowUpRight } from "lucide-react";

export default function Domains() {
  const domains = [
    {
      id: "01",
      title: "Artificial Intelligence",
      description:
        "Building intelligent agentic systems, LLM integrations, and custom neural workflows. We architect AI capabilities that automate operations and deliver cognitive value.",
      capabilities: ["Autonomous Agent Systems", "LLM Fine-Tuning & Prompt Pipelines", "Predictive ML Data Models", "RAG & Vector Search Architectures"],
      icon: Brain,
    },
    {
      id: "02",
      title: "Cyber Security",
      description:
        "Protecting your assets with clean code, secure APIs, and network hardening guidelines. We run comprehensive security checks and build zero-trust models.",
      capabilities: ["API Access Controls & Auth", "Encrypted Database Architecture", "OWASP Security Audits", "Incident Response Strategies"],
      icon: Shield,
    },
    {
      id: "03",
      title: "Web Designing",
      description:
        "Developing editorial, lightweight, performant web platforms. We focus on sub-second loading time, SEO architectures, and luxury aesthetic details.",
      capabilities: ["Custom Layout Systems", "Responsive Core Fluidity", "Sub-second LCP Speeds", "Technical SEO Foundations"],
      icon: Code,
    },
    {
      id: "04",
      title: "App Designing",
      description:
        "Building native applications with offline-first local databases, background sync services, and packaging for direct Play Store deployment.",
      capabilities: ["Native Kotlin Development", "Jetpack Compose Fluid UI", "Room Database & Sync", "Android Release Deployment"],
      icon: Smartphone,
    },
    {
      id: "05",
      title: "UI / UX Design",
      description:
        "Structuring design systems and interaction wireframes. We design premium aesthetic systems with detailed kerning and consistent vertical rhythms.",
      capabilities: ["Aesthetic Design Systems", "High-fidelity Wireframes", "Detailed Micro-interactions", "Vertical Rhythm & Kerning"],
      icon: Figma,
    },
  ];

  return (
    <section id="domains" className="py-20 md:py-32 bg-transparent relative z-10">
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
              What We Do
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] tracking-[-0.03em]">
              Our<br />
              <span className="text-[#737373]">Capabilities.</span>
            </h2>
            <p className="text-sm text-[#a3a3a3] max-w-sm leading-relaxed body-text">
              Specialized engineering across five core domains, each backed by deep technical expertise.
            </p>
          </div>
        </motion.div>

        {/* Domain Cards - Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {domains.map((dom, index) => {
            const Icon = dom.icon;
            return (
              <motion.div
                key={dom.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ type: "spring", stiffness: 300, damping: 24, delay: index * 0.05 }}
                className={`group bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all ${
                  index === 0 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center group-hover:bg-white/[0.1] transition-colors">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-[10px] font-mono text-[#525252] tracking-widest">
                      {dom.id}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#525252] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-white mb-2 tracking-tight">
                  {dom.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] text-[#a3a3a3] leading-relaxed mb-5 body-text">
                  {dom.description}
                </p>

                {/* Capabilities */}
                <div className="flex flex-wrap gap-1.5">
                  {dom.capabilities.map((cap, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-[#737373] bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-1"
                    >
                      {cap}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
