import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Briefcase, GitBranch, Mail } from "lucide-react";

const sections = [
  {
    title: "Services",
    description: "AI, web, mobile, security, design — twelve engineering domains.",
    href: "/services",
    icon: Brain,
  },
  {
    title: "Work",
    description: "Case studies and projects we've delivered.",
    href: "/work",
    icon: Briefcase,
  },
  {
    title: "Process",
    description: "Our four-phase execution protocol from discovery to launch.",
    href: "/process",
    icon: GitBranch,
  },
  {
    title: "Contact",
    description: "Ready to start? Reach out and we'll get things moving.",
    href: "/contact",
    icon: Mail,
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />

        {/* Minimal overview section */}
        <section className="py-24 px-6 border-b border-outline-variant bg-transparent relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-px bg-white/20" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#737373]">
                  Explore
                </span>
                <div className="w-px h-3 bg-white/20" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white tracking-tight leading-[1.1]">
                What we do, how we work, and who we&apos;ve helped.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {sections.map((section, i) => {
                const Icon = section.icon;
                return (
                  <motion.a
                    key={section.title}
                    href={section.href}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    whileHover={{ scale: 1.02 }}
                    className="group card-level-1 p-6 flex flex-col justify-between min-h-[180px] transition-all duration-300 relative overflow-hidden"
                  >
                    <div>
                      <div className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-4 group-hover:bg-white/[0.1] transition-colors">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-base font-display font-bold text-white mb-1.5 tracking-tight">
                        {section.title}
                      </h3>
                      <p className="text-[12px] text-[#bbcabf] leading-relaxed body-text">
                        {section.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] font-mono font-bold text-[#737373] group-hover:text-[#10b981] transition-colors mt-4">
                      Go to {section.title}
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
