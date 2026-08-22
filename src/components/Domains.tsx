import { motion } from "framer-motion";
import {
  Brain,
  Shield,
  Code,
  Smartphone,
  Figma,
  Link2,
  ShoppingCart,
  Search,
  Megaphone,
  Target,
  Play,
  Palette,
  ArrowUpRight,
} from "lucide-react";

export default function Domains() {
  const domains = [
    {
      id: "01",
      title: "AI & Machine Learning Engineering",
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
      subdomains: ["Security Audits", "Data Protection", "Penetration Testing"],
      icon: Shield,
    },
    {
      id: "05",
      title: "Blockchain & Web3 Development",
      subdomains: ["Smart Contracts", "Crypto / DApp Development"],
      icon: Link2,
    },
    {
      id: "06",
      title: "E-Commerce Solutions",
      subdomains: ["Shopify", "WooCommerce", "Custom Storefronts"],
      icon: ShoppingCart,
    },
    {
      id: "07",
      title: "UI/UX & Product Design",
      subdomains: ["Wireframing", "Mobile/Web Design", "GenUI", "User Research"],
      icon: Figma,
    },
    {
      id: "08",
      title: "SEO (Search Engine Optimization)",
      subdomains: ["On-Page", "Off-Page", "Technical SEO", "Rankings", "Organic Growth"],
      icon: Search,
    },
    {
      id: "09",
      title: "Digital Marketing",
      subdomains: ["Social Media Marketing", "Content Strategy", "Growth Marketing"],
      icon: Megaphone,
    },
    {
      id: "10",
      title: "Marketing & Performance Ads",
      subdomains: ["Google Ads", "Meta Ads", "Paid Campaigns"],
      icon: Target,
    },
    {
      id: "11",
      title: "Media & Creative Services",
      subdomains: ["Video Editing", "Motion Graphics", "Animation", "3D Design"],
      icon: Play,
    },
    {
      id: "12",
      title: "Graphic & Brand Design",
      subdomains: ["Logos", "Branding", "Marketing Assets"],
      icon: Palette,
    },
  ];

  return (
    <section id="domains" className="py-24 px-6 border-b border-outline-variant bg-transparent relative z-10">
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
              What We Do
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] tracking-[-0.03em]">
              Our<br />
              <span className="text-[#737373]">Capabilities.</span>
            </h2>
            <p className="text-sm text-[#bbcabf] max-w-sm leading-relaxed body-text">
              Specialized engineering across twelve core domains, each backed by deep technical expertise.
            </p>
          </div>
        </motion.div>

        {/* Domain Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" style={{ perspective: 1200 }}>
          {domains.map((dom, index) => {
            const Icon = dom.icon;
            return (
              <motion.div
                key={dom.id}
                initial={{ opacity: 0, y: 40, rotateX: 18, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 12px 30px rgba(16, 185, 129, 0.06)"
                }}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 18,
                  delay: (index % 3) * 0.08,
                }}
                className="group card-level-1 p-6 transition-all duration-300 relative overflow-hidden"
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
                <h3 className="text-lg font-display font-bold text-white mb-3 tracking-tight leading-snug">
                  {dom.title}
                </h3>

                {/* Subdomains */}
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
