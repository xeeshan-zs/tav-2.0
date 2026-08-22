import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, Globe, Code, Shield, Brain, Smartphone, Figma, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "@/components/Magnetic";
import ThemeToggle from "./ThemeToggle";

const dropdownContent: Record<string, { title: string; description: string; items: { icon: React.ElementType; label: string; desc: string; link?: string }[] }> = {
  Services: {
    title: "Our Expertise",
    description: "Specialized engineering across twelve core domains.",
    items: [
      { icon: Brain, label: "AI & Machine Learning", desc: "Agents, RAG, automation, predictive models" },
      { icon: Code, label: "Web App Development", desc: "Frontend, backend, SaaS, full-stack" },
      { icon: Smartphone, label: "Mobile App Development", desc: "iOS, Android, cross-platform" },
      { icon: Shield, label: "Cybersecurity & Compliance", desc: "Audits, data protection, pen testing" },
      { icon: Figma, label: "UI/UX & Product Design", desc: "Wireframing, design systems, user research" },
    ],
  },
  Work: {
    title: "Selected Work",
    description: "High-impact digital products we've engineered.",
    items: [
      { icon: Globe, label: "Aroush Works", desc: "Creative studio portfolio — 99 Perf", link: "https://www.aroushworks.com" },
      { icon: Globe, label: "ICCS Global", desc: "Institutional web system — 100 A11y", link: "https://iccsglobalized.com" },
      { icon: Smartphone, label: "Z Nectar", desc: "E-commerce mobile app — Kotlin", link: "https://github.com/xeeshan-zs/z-nectar" },
    ],
  },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hovering, setHovering] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
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

  const closeDropdown = () => {
    timeoutRef.current = setTimeout(() => {
      setHovering(false);
      setActiveDropdown(null);
    }, 150);
  };

  const cancelClose = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleLinkEnter = (name: string) => {
    cancelClose();
    setHovering(true);
    setActiveDropdown(name);
    setHoveredTab(name);
  };

  const handleLinkLeave = () => {
    closeDropdown();
    setHoveredTab(null);
  };

  const [activeSection, setActiveSection] = useState("");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  useEffect(() => {
    const sectionIds = ["hero", "domains", "projects", "process", "contact"];
    const navIds = new Set(["domains", "projects", "process", "contact"]);

    const update = () => {
      const offset = window.scrollY + window.innerHeight * 0.35;
      let current = ""; // default = hero, no highlight

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= offset) {
          current = id;
        }
      }

      // Only highlight nav-linked sections; hero = no highlight
      setActiveSection(navIds.has(current) ? current : "");
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { name: "Services", id: "domains" },
    { name: "Work", id: "projects" },
    { name: "Process", id: "process" },
  ];

  return (
    <>
      {/* Desktop: Liquid Neomorphic Glass Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 hidden sm:flex justify-center pt-4 px-4">
        <div
          ref={navRef}
          className={`relative flex items-center gap-1 rounded-none px-2 py-2 transition-all duration-500 ${
            scrolled
              ? "neo-glass-scrolled"
              : "neo-glass"
          }`}
        >
          {/* Top-edge refraction highlight */}
          <div className="absolute inset-0 rounded-none pointer-events-none overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
            <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-white/20 via-white/[0.06] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-[1px] bg-gradient-to-b from-white/20 via-white/[0.06] to-transparent" />
          </div>

          {/* Logo — leaving logo closes dropdown */}
          <Magnetic range={30} strength={0.3}>
            <a
              href={isHome ? "#hero" : "/#hero"}
              onClick={(e) => {
                e.preventDefault();
                if (isHome) {
                  document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/#hero";
                }
              }}
              onMouseEnter={handleLinkLeave}
              className="flex items-center gap-2 px-3 py-1.5 rounded-none hover:bg-white/[0.08] transition-colors active:scale-[0.97]"
            >
              <img 
                src="/tav files/tavryz-wordmark.png" 
                alt="Tavryz" 
                className="h-4.5 w-auto object-contain theme-invert" 
              />
            </a>
          </Magnetic>

          {/* Divider */}
          <div className="w-px h-5 bg-gradient-to-b from-white/20 via-white/[0.08] to-white/20" />

          {/* Nav Links — each triggers dropdown */}
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => handleLinkEnter(link.name)}
              onMouseLeave={handleLinkLeave}
            >
              <button
                onClick={() => scrollTo(link.id)}
                className={`relative px-4 py-2 rounded-none text-[13px] font-medium transition-colors duration-200 active:scale-[0.97] ${
                  activeSection === link.id || hoveredTab === link.id
                    ? "text-white"
                    : "text-[#a3a3a3]"
                }`}
              >
                {(hoveredTab === link.id || (!hoveredTab && activeSection === link.id)) && (
                  <motion.div
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-none ${
                      hoveredTab === link.id ? "neo-pill-hover" : "neo-pill-active"
                    }`}
                    transition={{ type: "spring", stiffness: 500, damping: 26 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            </div>
          ))}

          {/* Divider */}
          <div className="w-px h-5 bg-gradient-to-b from-white/20 via-white/[0.08] to-white/20" />

          {/* CTA Button */}
          <button
            onClick={() => scrollTo("contact")}
            onMouseEnter={handleLinkLeave}
            className="btn-primary font-mono text-[11px] px-4 py-2 uppercase font-bold hover:bg-[#4edea3] transition-colors duration-200 active:scale-[0.97] mr-1"
          >
            Book a Call
          </button>

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Expanding Card Dropdown — hovering it cancels close */}
        <AnimatePresence>
          {activeDropdown && hovering && dropdownContent[activeDropdown] && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              onMouseEnter={cancelClose}
              onMouseLeave={handleLinkLeave}
              className="absolute top-full mt-3 w-[420px] neo-glass-dropdown rounded-none overflow-hidden"
            >
              {/* Dropdown refraction edges */}
              <div className="absolute inset-0 rounded-none pointer-events-none overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
              </div>

              <div className="relative p-5 border-b border-white/[0.06]">
                <h3 className="text-sm font-bold text-white mb-1">{dropdownContent[activeDropdown].title}</h3>
                <p className="text-[11px] text-[#a3a3a3]">{dropdownContent[activeDropdown].description}</p>
              </div>
              <div className="relative p-2">
                {dropdownContent[activeDropdown].items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={i}
                      href={item.link || `#${activeDropdown.toLowerCase()}`}
                      target={item.link ? "_blank" : undefined}
                      rel={item.link ? "noopener noreferrer" : undefined}
                      onClick={(e) => {
                        if (!item.link) {
                          e.preventDefault();
                          const targetId = activeDropdown.toLowerCase();
                          setHovering(false);
                          setActiveDropdown(null);
                          requestAnimationFrame(() => scrollTo(targetId));
                        } else {
                          setHovering(false);
                          setActiveDropdown(null);
                        }
                      }}
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

      {/* Mobile: Neomorphic Glass Floating Bottom Nav */}
      <div className="fixed bottom-6 left-4 right-4 z-50 sm:hidden flex justify-center">
        <div className="neo-glass-mobile flex items-center justify-between w-full rounded-none px-2 py-1.5 relative">
          {/* Mobile refraction edges */}
          <div className="absolute inset-0 rounded-none pointer-events-none overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
          </div>

          {/* Stylized T logo replaced with tavryz-icon.png */}
          <a
            href={isHome ? "#hero" : "/#hero"}
            onClick={(e) => {
              e.preventDefault();
              if (isHome) {
                document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
              } else {
                window.location.href = "/#hero";
              }
            }}
            className="relative flex items-center justify-center w-8 h-8 rounded-none bg-white/[0.04] border border-white/[0.08] hover:border-white/[0.22] hover:bg-white/[0.08] transition-all duration-300 active:scale-[0.9] overflow-hidden"
          >
            <img 
              src="/tav files/tavryz-icon.png" 
              alt="T" 
              className="w-full h-full object-contain p-1.5 theme-invert" 
            />
          </a>
          <div className="w-px h-4 bg-gradient-to-b from-white/20 via-white/[0.08] to-white/20" />
          
          {/* Navigation links */}
          <div className="flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className={`relative whitespace-nowrap px-2 py-1.5 rounded-none text-[11px] font-medium transition-colors active:scale-[0.97] ${
                  activeSection === link.id || hoveredTab === link.id
                    ? "text-white"
                    : "text-[#a3a3a3]"
                }`}
              >
                {(hoveredTab === link.id || (!hoveredTab && activeSection === link.id)) && (
                  <motion.div
                    layoutId="nav-pill-mobile"
                    className={`absolute inset-0 rounded-none ${
                      hoveredTab === link.id ? "neo-pill-hover" : "neo-pill-active"
                    }`}
                    transition={{ type: "spring", stiffness: 500, damping: 26 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-px h-4 bg-gradient-to-b from-white/20 via-white/[0.08] to-white/20" />
          <button
            onClick={() => scrollTo("contact")}
            className="whitespace-nowrap btn-primary font-mono text-[10px] px-2.5 py-1.5 uppercase font-bold hover:bg-[#4edea3] transition-colors duration-200 active:scale-[0.97]"
          >
            Book a Call
          </button>
        </div>
      </div>
    </>
  );
}
