"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, Globe, Code, Shield, Brain, Smartphone, Figma, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/Magnetic";

const dropdownContent: Record<string, { title: string; description: string; items: { icon: React.ElementType; label: string; desc: string }[] }> = {
  Domains: {
    title: "Our Expertise",
    description: "Specialized engineering across five core domains.",
    items: [
      { icon: Brain, label: "Artificial Intelligence", desc: "LLM integrations, agents, ML pipelines" },
      { icon: Shield, label: "Cyber Security", desc: "Zero-trust, API security, audits" },
      { icon: Code, label: "Web Designing", desc: "Performant, editorial web platforms" },
      { icon: Smartphone, label: "App Designing", desc: "Native Kotlin, Jetpack Compose" },
      { icon: Figma, label: "UI / UX Design", desc: "Design systems, micro-interactions" },
    ],
  },
  Projects: {
    title: "Selected Work",
    description: "High-impact digital products we've engineered.",
    items: [
      { icon: Globe, label: "Aroush Works", desc: "Creative studio portfolio — 99 Perf" },
      { icon: Globe, label: "ICCS Global", desc: "Institutional web system — 100 A11y" },
      { icon: Smartphone, label: "Z Nectar", desc: "E-commerce mobile app — Kotlin" },
      { icon: Code, label: "Liquid Glass", desc: "Design system — Real-time shaders" },
    ],
  },
  FAQ: {
    title: "Common Questions",
    description: "Everything you need to know before starting.",
    items: [
      { icon: Sparkles, label: "How does the retainer work?", desc: "Weekly sprints, Slack access, pause anytime" },
      { icon: Code, label: "What tech stacks?", desc: "Next.js, React, Kotlin, PostgreSQL" },
      { icon: Globe, label: "Communication cadence?", desc: "Slack channel, Friday demo URLs" },
      { icon: Sparkles, label: "Turnaround time?", desc: "24–48h minor, weekly milestones major" },
    ],
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hovering, setHovering] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHovering(true);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHovering(false);
      setActiveDropdown(null);
    }, 150);
  };

  const navLinks = [
    { name: "Domains", href: "#domains" },
    { name: "Projects", href: "#projects" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* Desktop: Apple Glass Pill Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden sm:flex justify-center pt-4 px-4">
        {/* Apple Glass Pill Nav */}
        <div
          ref={navRef}
          onMouseLeave={handleMouseLeave}
          className={`relative flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-500 ${
            scrolled
              ? "bg-white/[0.08] border border-white/[0.12] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]"
              : "bg-white/[0.04] border border-white/[0.06] backdrop-blur-xl shadow-[0_4px_16px_rgba(0,0,0,0.2)]"
          }`}
        >
          {/* Logo */}
          <Magnetic range={30} strength={0.3}>
            <a
              href="#"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full hover:bg-white/[0.08] transition-colors active:scale-[0.97]"
            >
              <span className="uppercase tracking-widest text-[11px] font-bold text-white">Tavryz</span>
            </a>
          </Magnetic>

          {/* Divider */}
          <div className="w-px h-5 bg-white/[0.08]" />

          {/* Nav Links with Dropdown */}
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => handleMouseEnter(link.name)}
            >
              <a
                href={link.href}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 active:scale-[0.97] ${
                  activeDropdown === link.name
                    ? "bg-white/[0.1] text-white"
                    : "text-[#a3a3a3] hover:text-white hover:bg-white/[0.06]"
                }`}
              >
                {link.name}
              </a>
            </div>
          ))}

          {/* Divider */}
          <div className="w-px h-5 bg-white/[0.08]" />

          {/* CTA Button */}
          <Magnetic range={25} strength={0.25}>
            <a
              href="#contact"
              className="flex items-center gap-1.5 bg-white text-black text-[12px] font-bold px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors active:scale-[0.97] shadow-[0_2px_8px_rgba(255,255,255,0.1)]"
            >
              Start a Project
              <ArrowRight className="w-3 h-3" />
            </a>
          </Magnetic>
        </div>

        {/* Expanding Card Dropdown - Glass Material */}
        <AnimatePresence>
          {activeDropdown && hovering && dropdownContent[activeDropdown] && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              onMouseEnter={() => {
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
                setHovering(true);
              }}
              onMouseLeave={handleMouseLeave}
              className="absolute top-full mt-3 w-[420px] bg-white/[0.08] border border-white/[0.1] backdrop-blur-2xl rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden"
            >
              <div className="p-5 border-b border-white/[0.06]">
                <h3 className="text-sm font-bold text-white mb-1">{dropdownContent[activeDropdown].title}</h3>
                <p className="text-[11px] text-[#a3a3a3]">{dropdownContent[activeDropdown].description}</p>
              </div>
              <div className="p-2">
                {dropdownContent[activeDropdown].items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={`#${activeDropdown.toLowerCase()}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/[0.06] transition-all group cursor-pointer active:scale-[0.98]"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.1] transition-colors">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-semibold text-white">{item.label}</div>
                        <div className="text-[11px] text-[#a3a3a3] truncate">{item.desc}</div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#a3a3a3] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile: Glassy Floating Bottom Nav */}
      <div className="fixed bottom-6 left-4 right-4 z-50 sm:hidden flex justify-center">
        <div className="flex items-center gap-1 rounded-full px-2 py-2 bg-white/[0.08] border border-white/[0.12] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.06)]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="whitespace-nowrap px-3 py-2 rounded-full text-[12px] font-medium text-[#a3a3a3] hover:text-white hover:bg-white/[0.06] transition-all active:scale-[0.97]"
            >
              {link.name}
            </a>
          ))}
          {/* Divider */}
          <div className="w-px h-4 bg-white/[0.08]" />
          <a
            href="#contact"
            className="whitespace-nowrap flex items-center gap-1 bg-white text-black text-[11px] font-bold px-3 py-2 rounded-full hover:bg-zinc-200 transition-colors active:scale-[0.97] shadow-[0_2px_8px_rgba(255,255,255,0.1)]"
          >
            Start a Project
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </>
  );
}
