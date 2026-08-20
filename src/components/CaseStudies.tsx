import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

interface Project {
  id: string;
  title: string;
  industry: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  description: string;
  link: string;
  features: string[];
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`group bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all ${
        featured ? "col-span-full" : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-5">
        <div>
          <span className="text-[10px] font-mono text-[#525252] tracking-widest uppercase block mb-1">
            {project.id}
          </span>
          <h3 className={`font-display font-bold text-white tracking-tight ${featured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
            {project.title}
          </h3>
          <p className="text-[11px] text-[#737373] mt-1">{project.industry}</p>
        </div>
        <a
          href={project.link}
          target={project.link.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-[#737373] group-hover:text-white group-hover:bg-white/[0.1] transition-all flex-shrink-0"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Description */}
      <p className={`text-[#a3a3a3] leading-relaxed mb-6 body-text ${featured ? "text-sm md:text-base max-w-2xl" : "text-[13px]"}`}>
        {project.description}
      </p>

      {/* Features */}
      <div className={`mb-6 ${featured ? "grid grid-cols-2 md:grid-cols-4 gap-3" : "flex flex-wrap gap-2"}`}>
        {project.features.map((feature, i) => (
          <span
            key={i}
            className="text-[11px] text-[#737373] bg-white/[0.04] border border-white/[0.06] rounded-lg px-3 py-1.5"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Metrics */}
      <div className="flex items-center gap-6 pt-5 border-t border-white/[0.04]">
        {project.metrics.map((m, i) => (
          <div key={i}>
            <div className="text-[9px] font-mono uppercase tracking-wider text-[#525252] mb-0.5">{m.label}</div>
            <div className={`font-bold text-white ${featured ? "text-lg" : "text-sm"}`}>{m.value}</div>
          </div>
        ))}
        
        <div className="ml-auto">
          <a
            href={project.link}
            target={project.link.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-[11px] uppercase tracking-[0.15em] font-bold text-white hover:text-[#a3a3a3] transition-colors flex items-center gap-1.5 group/link"
          >
            View project
            <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const projects: Project[] = [
    {
      id: "01",
      title: "Aroush Works",
      industry: "Creative Studio Portfolio",
      tags: ["Website", "Brand Identity", "SEO"],
      metrics: [
        { label: "Performance", value: "99" },
        { label: "SEO Score", value: "100" },
        { label: "Load Time", value: "0.8s" },
        { label: "Lighthouse", value: "100" },
      ],
      description: "High-impact web presence engineered with modern performance and editorial typography. Built with Next.js, optimized for sub-second loads, and designed to convert visitors into clients.",
      link: "https://www.aroushworks.com",
      features: ["Next.js", "TypeScript", "Tailwind", "Vercel", "SEO Audit", "Analytics"],
    },
    {
      id: "02",
      title: "ICCS Global",
      industry: "Institutional Operations",
      tags: ["Web System", "Architecture", "SEO"],
      metrics: [
        { label: "Performance", value: "98" },
        { label: "A11y", value: "100" },
      ],
      description: "Institutional web presence with clean architecture and responsive layout integrations. Focused on accessibility and cross-device compatibility.",
      link: "https://iccsglobalized.com",
      features: ["React", "Node.js", "PostgreSQL", "WCAG 2.1"],
    },
    {
      id: "03",
      title: "Z Nectar",
      industry: "E-Commerce Mobile",
      tags: ["Mobile App", "Android", "Kotlin"],
      metrics: [
        { label: "Platforms", value: "2" },
        { label: "LCP", value: "Sub-1s" },
      ],
      description: "Cross-platform grocery app with real-time sync, offline storage and production packaging. Native Kotlin with Jetpack Compose.",
      link: "https://github.com/xeeshan-zs/z-nectar",
      features: ["Kotlin", "Jetpack Compose", "Room DB", "Play Store"],
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-transparent relative z-10">
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
              Selected Work
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] tracking-[-0.03em]">
              Our Work<br />
              <span className="text-[#737373]">delivering impact.</span>
            </h2>
            <a
              href="#contact"
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-white hover:text-[#a3a3a3] transition-colors flex items-center gap-2 group"
            >
              Start a project
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Featured Project (full width) */}
        <div className="mb-6">
          <ProjectCard project={projects[0]} featured />
        </div>

        {/* Smaller Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.slice(1).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
