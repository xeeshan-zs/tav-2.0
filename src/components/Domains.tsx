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
    <section id="domains" className="py-20 md:py-32 bg-transparent relative z-10">
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
              What We Do
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] tracking-[-0.03em]">
              Our<br />
              <span className="text-[#737373]">Capabilities.</span>
            </h2>
            <p className="text-sm text-[#a3a3a3] max-w-sm leading-relaxed body-text">
              Specialized engineering across twelve core domains, each backed by deep technical expertise.
            </p>
          </div>
        </motion.div>

        {/* Domain Cards - Clean Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {domains.map((dom, index) => {
            const Icon = dom.icon;
            return (
              <motion.div
                key={dom.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 24,
                  delay: index * 0.05,
                }}
                className="group bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/[0.1] transition-all"
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
                      className="text-[10px] text-[#737373] bg-white/[0.04] border border-white/[0.06] rounded-md px-2 py-1"
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
