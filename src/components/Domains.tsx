"use client";

import { motion } from "framer-motion";
import { Brain, Shield, Code, Smartphone, Figma } from "lucide-react";

export default function Domains() {
  const domains = [
    {
      id: "01",
      title: "Artificial Intelligence (AI)",
      description:
        "Building intelligent agentic systems, LLM integrations, and custom neural workflows. We architect AI capabilities that automate operations and deliver cognitive value.",
      details: ["Autonomous Agent Systems", "LLM Fine-Tuning & Prompt Pipelines", "Predictive ML Data Models", "RAG & Vector Search Architectures"],
      icon: Brain,
      gradient: "from-[#1a1030] via-[#120a22] to-[#0a0614]",
      accentColor: "#41AEAC",
      glowColor: "rgba(65, 174, 172, 0.15)",
      graphic: (
        <div className="w-full h-full neo-inset rounded-xl p-5 flex flex-col gap-4 overflow-hidden relative select-none">
          <div className="flex items-center gap-1.5 border-b border-white/5 pb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500/80 pulse-teal" />
            <span className="text-[9px] font-mono text-teal-400">neuron_mesh.sys</span>
          </div>
          <div className="flex-1 flex items-center justify-center relative">
            {/* Synapse nodes */}
            <div className="absolute w-24 h-24 rounded-full border border-teal-500/10 flex items-center justify-center animate-[spin_12s_linear_infinite]">
              <div className="w-2 h-2 bg-teal-400 rounded-full absolute -top-1" />
              <div className="w-2 h-2 bg-teal-400 rounded-full absolute -bottom-1" />
            </div>
            <div className="absolute w-14 h-14 rounded-full border border-teal-500/20 flex items-center justify-center animate-[spin_6s_linear_infinite_reverse]">
              <div className="w-1.5 h-1.5 bg-[#41AEAC] rounded-full absolute -left-1" />
              <div className="w-1.5 h-1.5 bg-[#41AEAC] rounded-full absolute -right-1" />
            </div>
            <div className="neo-circle w-6 h-6 rounded-lg flex items-center justify-center z-10">
              <Brain className="w-3.5 h-3.5 text-teal-400" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "02",
      title: "Cyber Security",
      description:
        "Protecting your assets with clean code, secure APIs, and network hardening guidelines. We run comprehensive security checks and build zero-trust models.",
      details: ["API Access Controls & Auth", "Encrypted Database Architecture", "OWASP Security Audits", "Incident Response Strategies"],
      icon: Shield,
      gradient: "from-[#0f1525] via-[#0a0f1a] to-[#070a12]",
      accentColor: "#A1E9E0",
      glowColor: "rgba(161, 233, 224, 0.15)",
      graphic: (
        <div className="w-full h-full neo-inset rounded-xl p-5 flex flex-col gap-4 overflow-hidden relative select-none">
          <div className="flex items-center gap-1.5 border-b border-white/5 pb-2">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500/80" />
            <span className="text-[9px] font-mono text-teal-400">firewall_protect.bin</span>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center gap-3">
            <div className="neo-circle w-12 h-12 rounded-full flex items-center justify-center relative">
              <Shield className="w-6 h-6 text-teal-400" />
              <div className="absolute inset-0 rounded-full border border-teal-400/40 animate-ping opacity-25" />
            </div>
            <div className="flex gap-1 text-[8px] font-mono text-teal-400 neo-inset px-2 py-1 rounded">
              <span>Zero-Trust:</span>
              <span className="text-[#A1E9E0] font-bold">Enabled</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "03",
      title: "Web Designing",
      description:
        "Developing editorial, lightweight, performant web platforms. We focus on sub-second loading time, SEO architectures, and luxury aesthetic details.",
      details: ["Custom Layout Systems", "Responsive Core Fluidity", "Sub-second LCP Speeds", "Technical SEO Foundations"],
      icon: Code,
      gradient: "from-[#1a1030] via-[#120a22] to-[#0a0614]",
      accentColor: "#41AEAC",
      glowColor: "rgba(65, 174, 172, 0.15)",
      graphic: (
        <div className="w-full h-full neo-inset rounded-xl p-5 flex flex-col gap-4 overflow-hidden relative select-none">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[9px] font-mono text-teal-400">web_renderer.sys</span>
            <span className="text-[8px] font-mono text-[#41AEAC]">99%</span>
          </div>
          <div className="flex-1 flex flex-col gap-2.5 pt-2">
            <div className="neo-inset flex items-center justify-between rounded p-2">
              <div className="h-2 w-12 bg-white/10 rounded" />
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </div>
            <div className="flex-1 neo-inset rounded-t p-2 flex flex-col gap-2">
              <div className="h-1.5 w-full bg-white/10 rounded" />
              <div className="h-1.5 w-4/5 bg-white/5 rounded" />
              <div className="grid grid-cols-2 gap-2 mt-1">
                <div className="h-8 neo-raised rounded flex items-center justify-center">
                  <span className="text-[9px] font-bold text-teal-400">LCP 0.3s</span>
                </div>
                <div className="h-8 neo-inset rounded" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "04",
      title: "App Designing",
      description:
        "Building native applications with offline-first local databases, background sync services, and packaging for direct Play Store packaging.",
      details: ["Native Kotlin Development", "Jetpack Compose Fluid UI", "Room Database & Sync", "Android Release Deployment"],
      icon: Smartphone,
      gradient: "from-[#0f1525] via-[#0a0f1a] to-[#070a12]",
      accentColor: "#A1E9E0",
      glowColor: "rgba(161, 233, 224, 0.15)",
      graphic: (
        <div className="w-full h-full flex justify-center items-end select-none">
          <div className="neo-raised w-[140px] h-[160px] rounded-t-xl p-3 flex flex-col gap-2 overflow-hidden relative">
            <div className="neo-inset w-8 h-2 rounded-full mx-auto" />
            <div className="flex items-center justify-between border-b border-white/5 pb-1">
              <span className="text-[7px] text-teal-400 font-mono">mobile_core</span>
              <span className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
            </div>
            <div className="flex-1 flex flex-col gap-1.5 pt-1">
              <div className="neo-inset h-10 rounded p-1.5 flex gap-2 items-center">
                <div className="w-5 h-5 bg-teal-500/15 rounded flex items-center justify-center text-[8px] text-teal-400">📱</div>
                <div className="flex-1 flex flex-col gap-0.5">
                  <div className="h-1.5 w-8 bg-white/10 rounded" />
                  <div className="h-1 w-4 bg-white/5 rounded" />
                </div>
              </div>
              <div className="neo-inset h-10 rounded p-1.5 flex gap-2 items-center">
                <div className="w-5 h-5 neo-circle rounded flex items-center justify-center text-[8px]">⚙️</div>
                <div className="flex-1 flex flex-col gap-0.5">
                  <div className="h-1.5 w-10 bg-white/10 rounded" />
                  <div className="h-1 w-6 bg-white/5 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "05",
      title: "UI / UX Design",
      description:
        "Structuring design systems and interaction wireframes. We design premium aesthetic systems with detailed kerning and consistent vertical rhythms.",
      details: ["Aesthetic Design Systems", "High-fidelity Wireframes", "Detailed Micro-interactions", "Vertical Rhythm & Kerning"],
      icon: Figma,
      gradient: "from-[#1a1030] via-[#120a22] to-[#0a0614]",
      accentColor: "#41AEAC",
      glowColor: "rgba(65, 174, 172, 0.15)",
      graphic: (
        <div className="w-full h-full neo-inset rounded-xl p-5 flex flex-col gap-4 overflow-hidden relative select-none">
          <div className="flex items-center gap-1.5 border-b border-white/5 pb-2">
            <span className="text-[9px] font-mono text-teal-400">design_canvas.fig</span>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-2 relative">
            <div className="neo-raised rounded p-1 relative">
              <span className="text-[6px] text-teal-400 block mb-1">Canvas</span>
              <div className="neo-inset w-full h-8 rounded" />
              <div className="w-2 h-2 bg-teal-400 rounded-sm absolute -top-1 -left-1" />
              <div className="w-2 h-2 bg-teal-400 rounded-sm absolute -bottom-1 -right-1" />
            </div>
            <div className="neo-inset rounded p-1 flex flex-col justify-between">
              <span className="text-[6px] text-zinc-500">Colors</span>
              <div className="flex gap-1 mt-1">
                <span className="w-3.5 h-3.5 rounded bg-teal-500" />
                <span className="w-3.5 h-3.5 rounded bg-purple-500" />
              </div>
            </div>
            <div className="neo-inset rounded p-1 flex flex-col justify-between">
              <span className="text-[6px] text-zinc-500">Layout</span>
              <div className="flex flex-col gap-1 mt-1">
                <div className="h-1 w-full bg-white/10 rounded" />
                <div className="h-1 w-2/3 bg-white/5 rounded" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="domains" className="py-20 md:py-32 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="border-b border-white/[0.06] pb-8 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-mono text-[#AEABC5] block mb-3 caption-text">
              01 / WHAT WE CAN DO
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white heading-lg">
              Bespoke specialization <br />
              <span className="text-[#AEABC5]">across core domains.</span>
            </h2>
          </div>
          <p className="text-sm text-[#c4cad6] max-w-sm leading-relaxed body-text">
            Scroll down to review the specialized domains we design and engineer for, stacking in depth as you navigate.
          </p>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="flex flex-col gap-16 relative">
          {domains.map((dom, index) => {
            const Icon = dom.icon;
            return (
              <motion.div
                key={dom.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
                className="sticky w-full neo-raised-lg rounded-3xl overflow-hidden"
                style={{
                  top: `calc(120px + ${index * 24}px)`,
                  zIndex: 10 + index * 10,
                }}
              >
                {/* Background Gradient */}
                <div className={`w-full h-full bg-gradient-to-br ${dom.gradient} p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-stretch gap-10`}>
                  {/* Text Details (Left) */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      {/* Top Row */}
                      <div className="flex items-center gap-3 mb-6">
                        <div
                          className="neo-circle w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{
                            borderColor: `${dom.accentColor}30`,
                            backgroundColor: `${dom.accentColor}10`,
                          }}
                        >
                          <Icon className="w-5 h-5" style={{ color: dom.accentColor }} />
                        </div>
                        <span className="text-[10px] font-mono tracking-widest uppercase text-white/60 caption-text">
                          Domain {dom.id}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-4 heading-lg">
                        {dom.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs md:text-sm text-[#c4cad6] leading-relaxed max-w-xl mb-8 body-text">
                        {dom.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-3.5 border-t border-white/[0.06] pt-6 mt-auto">
                      {dom.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-[#EDEDED] font-medium">
                          <span
                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: dom.accentColor }}
                          />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Graphic / Visual Mockup (Right) - Neomorphic inset */}
                  <div className="w-full lg:w-[320px] xl:w-[380px] aspect-[4/3] lg:aspect-auto flex-shrink-0 relative neo-inset rounded-2xl p-4 flex items-stretch">
                    {/* Outline big number in bg */}
                    <div
                      className="absolute right-6 top-2 font-display font-extrabold text-[120px] md:text-[150px] leading-none select-none pointer-events-none opacity-[0.03]"
                      style={{
                        WebkitTextStroke: "1px white",
                        color: "transparent",
                      }}
                    >
                      {dom.id}
                    </div>

                    <div className="w-full h-full relative z-10">
                      {dom.graphic}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
