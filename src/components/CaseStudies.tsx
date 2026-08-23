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
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`group card-level-1 p-6 md:p-8 transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
        featured ? "col-span-full" : ""
      }`}
    >
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <div>
            <span className="text-[10px] font-mono text-[#525252] tracking-widest uppercase block mb-1">
              {project.id}
            </span>
            <h3 className="font-display font-bold text-white tracking-tight text-xl sm:text-2xl">
              {project.title}
            </h3>
            <p className="text-[11px] text-[#737373] mt-1">{project.industry}</p>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#737373] group-hover:text-[#10b981] group-hover:bg-[#10b981]/10 group-hover:border-[#10b981] transition-all flex-shrink-0"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Description */}
        <p className="text-[#bbcabf] leading-relaxed mb-6 body-text text-sm sm:text-[14px]">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-[10px] text-[#bbcabf] bg-black border border-outline-variant/30 rounded-md px-2.5 py-1 font-mono"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Metrics Footer */}
      <div className="flex flex-wrap items-end gap-6 pt-5 border-t border-outline-variant/20 mt-4">
        <div className="flex flex-wrap gap-6 sm:gap-10">
          {project.metrics.map((m, i) => (
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

        <div className="ml-auto">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.15em] font-mono font-bold text-white hover:text-[#10b981] transition-colors flex items-center gap-1.5"
          >
            View Project
            <ArrowUpRight className="w-3.5 h-3.5" />
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
      tags: ["Next.js", "TypeScript", "Tailwind", "Vercel", "SEO Audit", "Analytics"],
      metrics: [
        { label: "Performance", value: "99" },
        { label: "SEO Score", value: "100" },
        { label: "Load Time", value: "0.8s" },
        { label: "Lighthouse", value: "100" },
      ],
      description: "High-impact web presence engineered with modern performance and editorial typography. Built with Next.js, optimized for sub-second loads, and designed to convert visitors into clients.",
      link: "https://www.aroushworks.com",
    },
    {
      id: "02",
      title: "ICCS Global",
      industry: "Institutional Operations",
      tags: ["React", "Node.js", "PostgreSQL", "WCAG 2.1"],
      metrics: [
        { label: "Performance", value: "98" },
        { label: "A11y", value: "100" },
      ],
      description: "Institutional web presence with clean architecture and responsive layout integrations. Focused on accessibility and cross-device compatibility.",
      link: "https://iccsglobalized.com",
    },
    {
      id: "03",
      title: "Z Nectar",
      industry: "E-Commerce Mobile",
      tags: ["Kotlin", "Jetpack Compose", "Room DB", "Play Store"],
      metrics: [
        { label: "Platforms", value: "2" },
        { label: "LCP", value: "Sub-1s" },
      ],
      description: "Cross-platform grocery app with real-time sync, offline storage and production packaging. Native Kotlin with Jetpack Compose.",
      link: "https://github.com/xeeshan-zs/z-nectar",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-transparent relative z-10 border-b border-outline-variant">
      <div className="max-w-6xl mx-auto">
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
              href="/contact"
              className="text-[11px] uppercase tracking-[0.2em] font-mono font-bold text-white hover:text-[#10b981] transition-colors flex items-center gap-2"
            >
              Start a Project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-full">
            <ProjectCard project={projects[0]} featured />
          </div>
          {projects.slice(1).map((project) => (
            <div key={project.id} className="flex">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
