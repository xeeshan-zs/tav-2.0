import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Brain,
  Code,
  Smartphone,
  Shield,
  Figma,
  ArrowUpRight,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

/* ─── Services Preview Data ─── */
const featuredDomains = [
  {
    id: "01",
    title: "AI & Machine Learning",
    subdomains: ["Agents", "RAG", "Automation", "Predictive Models"],
    icon: Brain,
  },
  {
    id: "02",
    title: "Web App Development",
    subdomains: ["Frontend", "Backend", "SaaS", "Full-Stack"],
    icon: Code,
  },
  {
    id: "03",
    title: "Mobile App Development",
    subdomains: ["iOS", "Android", "Cross-Platform"],
    icon: Smartphone,
  },
  {
    id: "04",
    title: "Cybersecurity & Compliance",
    subdomains: ["Security Audits", "Data Protection", "Pen Testing"],
    icon: Shield,
  },
  {
    id: "07",
    title: "UI/UX & Product Design",
    subdomains: ["Wireframing", "Mobile/Web Design", "User Research"],
    icon: Figma,
  },
];

/* ─── Work Preview Data ─── */
const featuredProject = {
  id: "01",
  title: "Aroush Works",
  industry: "Creative Studio Portfolio",
  tags: ["Next.js", "TypeScript", "Tailwind", "Vercel", "SEO Audit"],
  metrics: [
    { label: "Performance", value: "99" },
    { label: "SEO Score", value: "100" },
    { label: "Load Time", value: "0.8s" },
    { label: "Lighthouse", value: "100" },
  ],
  description:
    "High-impact web presence engineered with modern performance and editorial typography. Built with Next.js, optimized for sub-second loads, and designed to convert visitors into clients.",
  link: "https://www.aroushworks.com",
};

/* ─── Process Data ─── */
const processSteps = [
  { id: "01", title: "Discover", description: "Requirements gathering & system blueprinting." },
  { id: "02", title: "Design", description: "Tokenization & structural wireframing." },
  { id: "03", title: "Build", description: "Iterative development & QA protocols." },
  { id: "04", title: "Launch", description: "Deployment & post-launch monitoring." },
];

/* ─── Section Header Pattern ─── */
function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-px bg-white/20" />
      <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#737373]">
        {text}
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* ═══════════════════════════════════════════════
            SERVICES PREVIEW
        ═══════════════════════════════════════════════ */}
        <section className="py-24 px-6 border-b border-outline-variant bg-transparent relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <SectionLabel text="What We Do" />
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] tracking-[-0.03em]">
                  Our
                  <br />
                  <span className="text-[#737373]">Capabilities.</span>
                </h2>
                <a
                  href="/services"
                  className="text-[11px] uppercase tracking-[0.2em] font-mono font-bold text-white hover:text-[#10b981] transition-colors flex items-center gap-2"
                >
                  All 12 Domains
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredDomains.map((dom, index) => {
                const Icon = dom.icon;
                return (
                  <motion.a
                    key={dom.id}
                    href="/services"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    whileHover={{ scale: 1.02 }}
                    transition={{
                      type: "spring",
                      stiffness: 140,
                      damping: 18,
                      delay: (index % 3) * 0.08,
                    }}
                    className="group card-level-1 p-6 transition-all duration-300 relative overflow-hidden"
                  >
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
                    <h3 className="text-lg font-display font-bold text-white mb-3 tracking-tight leading-snug">
                      {dom.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {dom.subdomains.map((sub, i) => (
                        <span
                          key={i}
                          className="text-[10px] text-[#bbcabf] bg-[#0c0c0c] border border-outline-variant/30 rounded-md px-2.5 py-1"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            WORK / CASE STUDY PREVIEW
        ═══════════════════════════════════════════════ */}
        <section className="py-24 px-6 border-b border-outline-variant bg-transparent relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <SectionLabel text="Selected Work" />
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] tracking-[-0.03em]">
                  Our Work
                  <br />
                  <span className="text-[#737373]">delivering impact.</span>
                </h2>
                <a
                  href="/work"
                  className="text-[11px] uppercase tracking-[0.2em] font-mono font-bold text-white hover:text-[#10b981] transition-colors flex items-center gap-2"
                >
                  All Projects
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Featured Project Card */}
            <motion.a
              href="/work"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group card-level-1 p-6 md:p-8 transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <span className="text-[10px] font-mono text-[#525252] tracking-widest uppercase block mb-1">
                      {featuredProject.id}
                    </span>
                    <h3 className="font-display font-bold text-white tracking-tight text-xl sm:text-2xl">
                      {featuredProject.title}
                    </h3>
                    <p className="text-[11px] text-[#737373] mt-1">
                      {featuredProject.industry}
                    </p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-[#525252] group-hover:text-[#10b981] transition-colors flex-shrink-0" />
                </div>

                <p className="text-[#bbcabf] leading-relaxed mb-6 body-text text-sm sm:text-[14px]">
                  {featuredProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-[#bbcabf] bg-black border border-outline-variant/30 rounded-md px-2.5 py-1 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-end gap-6 pt-5 border-t border-outline-variant/20 mt-4">
                <div className="flex flex-wrap gap-6 sm:gap-10">
                  {featuredProject.metrics.map((m, i) => (
                    <div key={i}>
                      <div className="text-[9px] font-mono uppercase tracking-wider text-[#525252] mb-1">
                        {m.label}
                      </div>
                      <div className="font-bold text-white text-lg sm:text-xl font-display">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="ml-auto flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] font-mono font-bold text-[#737373] group-hover:text-[#10b981] transition-colors">
                  View Project
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </motion.a>

            {/* Start a project CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-8 text-center"
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase font-bold tracking-wider text-[#10b981] hover:text-[#4edea3] transition-colors"
              >
                Start a Project
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════
            PROCESS PREVIEW
        ═══════════════════════════════════════════════ */}
        <section className="py-24 px-6 border-b border-outline-variant bg-transparent relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 text-center"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight leading-[1.1]">
                Execution Protocol
              </h2>
              <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#10b981] mb-2">
                Standard Operating Procedure
              </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative">
              <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-zinc-800">
                <div className="h-full bg-[#10b981] w-[28%]" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 text-center">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative z-10 flex flex-col items-center group"
                  >
                    <div
                      className={`w-12 h-12 bg-black flex items-center justify-center font-mono text-[14px] mb-6 transition-all duration-300 ${
                        index === 0
                          ? "border border-[#10b981] text-[#10b981] shadow-[0_0_10px_rgba(16,185,129,0.15)]"
                          : "border border-outline-variant text-[#bbcabf] opacity-60 group-hover:opacity-100 group-hover:border-[#bbcabf]"
                      }`}
                    >
                      {step.id}
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-2 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="font-mono text-[11px] text-[#bbcabf] opacity-80 max-w-[200px] leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Learn more link */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <a
                href="/process"
                className="inline-flex items-center gap-2 font-mono text-[11px] uppercase font-bold tracking-wider text-[#10b981] hover:text-[#4edea3] transition-colors"
              >
                Learn How We Work
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
