"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  industry: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  description: string;
  link: string;
  image: string;
}

function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calculate rotation coordinates (range: -6deg to 6deg)
    const rotX = -((y - height / 2) / (height / 2)) * 6;
    const rotY = ((x - width / 2) / (width / 2)) * 6;
    
    setRotateX(rotX);
    setRotateY(rotY);
    setGlowPos({ x: (x / width) * 100, y: (y / height) * 100 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
      className="group flex flex-col gap-6"
    >
      {/* Mockup Container with 3D Tilt and Spotlight */}
      <a
        ref={cardRef}
        href={project.link}
        target={project.link.startsWith("http") ? "_blank" : undefined}
        rel="noopener noreferrer"
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="block relative aspect-[4/3] rounded-2xl bg-card/30 border border-white/5 overflow-hidden group select-none shadow-2xl transition-all duration-300 hover:border-blue-500/20"
        style={{
          transformStyle: "preserve-3d",
          transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: isHovered ? "none" : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease",
        }}
      >
        {/* Spotlight Overlay for Blue Mode */}
        <div
          className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
          style={{
            background: isHovered
              ? `radial-gradient(circle 200px at ${glowPos.x}% ${glowPos.y}%, rgba(33, 150, 243, 0.18), transparent 80%)`
              : "none",
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Live rendering container with AI Mockup image */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-103"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-85" />
        </div>

        {/* Dark glass overlay tags in Blue Mode */}
        <div className="absolute top-4 left-4 flex gap-2 z-10">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="px-2.5 py-1 bg-black/60 border border-white/5 backdrop-blur-md text-[9px] font-mono tracking-widest text-[#EDEDED] rounded-full uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-black/50 border border-white/10 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <ArrowUpRight className="w-4 h-4 text-[#2196F3]" />
        </div>
      </a>

      {/* Text elements */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#2196F3] tracking-widest uppercase font-semibold">
              {project.id}
            </span>
            <h3 className="text-xl md:text-2xl font-display font-semibold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
          
          {/* Metric Display */}
          <div className="flex gap-4">
            {project.metrics.map((m, i) => (
              <div key={i} className="text-right">
                <div className="font-mono text-[9px] uppercase tracking-wider text-[#AEABC5]/60">{m.label}</div>
                <div className="font-display font-bold text-sm text-[#90CAF9]">{m.value}</div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-xs md:text-sm text-[#AEABC5] leading-relaxed max-w-xl">
          {project.description}
        </p>

        <a
          href={project.link}
          target={project.link.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-white hover:text-[#2196F3] transition-colors mt-1 w-max"
        >
          View selected work
          <ArrowUpRight className="w-3.5 h-3.5 text-[#2196F3]" />
        </a>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  const projects = [
    {
      id: "01",
      title: "Aroush Works",
      industry: "Creative Studio Portfolio",
      tags: ["Website", "Brand Identity", "SEO"],
      metrics: [
        { label: "Performance", value: "99" },
        { label: "SEO Score", value: "100" },
      ],
      description: "High-impact web presence engineered with modern performance and editorial typography.",
      link: "https://www.aroushworks.com",
      image: "/aroush_works.jpg",
    },
    {
      id: "02",
      title: "ICCS Global",
      industry: "Institutional Operations",
      tags: ["Web System", "Clean Architecture", "Technical SEO"],
      metrics: [
        { label: "Performance", value: "98" },
        { label: "Accessibility", value: "100" },
      ],
      description: "Institutional web presence with clean architecture and responsive layout integrations.",
      link: "https://iccsglobalized.com",
      image: "/iccs_global.jpg",
    },
    {
      id: "03",
      title: "Z Nectar",
      industry: "E-Commerce Mobile",
      tags: ["Mobile App", "Android Native", "Kotlin"],
      metrics: [
        { label: "Platforms", value: "2" },
        { label: "LCP Response", value: "Sub-1s" },
      ],
      description: "Cross-platform grocery app with real-time sync, offline storage and production packaging.",
      link: "https://github.com/xeeshan-zs/z-nectar",
      image: "/z_nectar.jpg",
    },
    {
      id: "04",
      title: "Liquid Glass",
      industry: "Refraction Design System",
      tags: ["Design System", "Shader Code", "Retina Ready"],
      metrics: [
        { label: "Refraction", value: "Real-time" },
        { label: "Contrast", value: "AAA" },
      ],
      description: "Internal refractory system UI, sub-second latency, and custom glass refraction shaders.",
      link: "#",
      image: "/liquid_glass.jpg",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="border-b border-white/5 pb-8 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[10px] uppercase tracking-widest font-mono text-[#AEABC5] block mb-3">
              02 / OUR PROJECTS
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
              Selected Studio Work, <br />
              <span className="text-[#AEABC5]">delivering business impact.</span>
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-[#AEABC5]">SCROLL TO EXPLORE</span>
          </div>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
