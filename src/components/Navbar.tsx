"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/Magnetic";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Domains", href: "#domains" },
    { name: "Projects", href: "#projects" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-[#030816]/70 border-b border-white/5 backdrop-blur-md"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo with Magnetic effect */}
          <Magnetic range={40} strength={0.4}>
            <a
              href="#"
              className="flex items-center gap-2.5 font-display font-extrabold text-lg tracking-tight text-white hover:opacity-90 transition-opacity"
            >
              <div className="w-5 h-5 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center flex-shrink-0">
                <span className="w-1.5 h-1.5 rounded-sm bg-[#41AEAC] pulse-teal"></span>
              </div>
              <span className="uppercase tracking-widest text-sm font-semibold text-white">Tavryz Studio®</span>
            </a>
          </Magnetic>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 bg-white/[0.03] border border-white/5 px-2 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <Magnetic key={link.name} range={25} strength={0.3}>
                <a
                  href={link.href}
                  className="px-4 py-1.5 rounded-full text-xs font-medium text-[#AEABC5] hover:text-white hover:bg-white/[0.04] transition-all duration-200"
                >
                  {link.name}
                </a>
              </Magnetic>
            ))}
          </nav>

          {/* Action Badge & Button */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Pulsing Client Roster Status */}
            <div className="flex items-center gap-2 bg-[#41AEAC]/10 border border-[#41AEAC]/20 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#41AEAC] pulse-teal"></span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#A1E9E0]">
                Accepting Q3/Q4 Client Roster
              </span>
            </div>

            <Magnetic range={35} strength={0.3}>
              <a
                href="#contact"
                className="group relative inline-flex items-center gap-1 bg-white text-black text-xs font-semibold px-4.5 py-2.5 rounded-full hover:bg-zinc-200 transition-colors"
              >
                Start a Project
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 md:hidden">
            <Magnetic range={30} strength={0.3}>
              <a
                href="#contact"
                className="bg-white text-black text-xs font-semibold px-3.5 py-2 rounded-full hover:bg-zinc-200 transition-colors"
              >
                Start
              </a>
            </Magnetic>
            
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white bg-white/[0.02]"
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#030816]/95 backdrop-blur-lg flex flex-col justify-between p-6"
          >
            <div className="flex items-center justify-between">
              <a
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 font-display font-extrabold text-sm tracking-widest text-white"
              >
                <div className="w-4 h-4 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-sm bg-[#41AEAC]"></span>
                </div>
                TAVRYZ STUDIO®
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white bg-white/[0.02]"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-6 my-auto pl-4">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-display font-bold text-[#AEABC5] hover:text-white transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2 px-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#41AEAC] pulse-teal"></span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-[#A1E9E0]">
                  Accepting Q3/Q4 Client Roster
                </span>
              </div>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-white text-black font-semibold py-4 rounded-full text-center hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 text-sm"
              >
                Book Discovery Call
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
