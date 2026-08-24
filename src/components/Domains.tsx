"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  X,
  CheckCircle,
  Layers,
} from "lucide-react";

interface Domain {
  id: string;
  title: string;
  subdomains: string[];
  icon: typeof Brain;
  shortDescription: string;
  fullDescription: string;
  useCases: string[];
  techStack: string[];
}

const domains: Domain[] = [
  {
    id: "01",
    title: "AI & Machine Learning Engineering",
    subdomains: ["Agents", "RAG", "Automation", "Predictive Models"],
    icon: Brain,
    shortDescription: "Intelligent systems that learn, adapt, and automate.",
    fullDescription:
      "We design and deploy intelligent systems that learn, adapt, and automate. From custom LLM-powered agents to production-grade RAG pipelines, our AI solutions are built for real-world scale and reliability. We handle the full lifecycle — data preparation, model selection, fine-tuning, deployment, and monitoring.",
    useCases: [
      "Conversational AI agents for customer support",
      "Document ingestion & retrieval systems (RAG)",
      "Predictive analytics for business intelligence",
      "Workflow automation with intelligent decision-making",
    ],
    techStack: ["Python", "LangChain", "OpenAI API", "Pinecone", "FastAPI", "TensorFlow"],
  },
  {
    id: "02",
    title: "Web App Development",
    subdomains: ["Frontend", "Backend", "SaaS", "Full-Stack"],
    icon: Code,
    shortDescription: "Fast, accessible web applications engineered to scale.",
    fullDescription:
      "From high-performance SPAs to complex SaaS platforms, we build web applications that are fast, accessible, and engineered to scale. Every project follows strict performance budgets and modern architecture patterns. We own the full stack — UI, API, database, and infrastructure.",
    useCases: [
      "SaaS dashboards & admin panels",
      "Real-time collaborative platforms",
      "Headless CMS & content-driven sites",
      "API-first microservice architectures",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Vercel"],
  },
  {
    id: "03",
    title: "Mobile App Development",
    subdomains: ["iOS", "Android", "Cross-Platform"],
    icon: Smartphone,
    shortDescription: "Native and cross-platform apps built for every device.",
    fullDescription:
      "Native and cross-platform mobile applications built for performance and polish. We handle everything from architecture to App Store deployment, ensuring your app feels right on every device. Offline-first capabilities, push notifications, and deep linking included.",
    useCases: [
      "Native iOS & Android applications",
      "Cross-platform apps with shared codebases",
      "Offline-first apps with local data sync",
      "Push notifications & deep linking",
    ],
    techStack: ["Kotlin", "Swift", "Jetpack Compose", "React Native", "Expo", "Firebase"],
  },
  {
    id: "04",
    title: "Cybersecurity & Compliance",
    subdomains: ["Security Audits", "Data Protection", "Penetration Testing"],
    icon: Shield,
    shortDescription: "Hardening systems and ensuring regulatory compliance.",
    fullDescription:
      "We harden your systems against threats and ensure regulatory compliance. Our security-first approach covers code audits, infrastructure hardening, and ongoing vulnerability management. We make security an integrated part of your development lifecycle, not an afterthought.",
    useCases: [
      "Full-stack security audits & code reviews",
      "GDPR, HIPAA & SOC 2 compliance readiness",
      "Penetration testing & vulnerability assessments",
      "Secure authentication & authorization systems",
    ],
    techStack: ["OWASP", "Snyk", "Vault", "Cloudflare", "Let's Encrypt", "AWS IAM"],
  },
  {
    id: "05",
    title: "Blockchain & Web3 Development",
    subdomains: ["Smart Contracts", "Crypto / DApp Development"],
    icon: Link2,
    shortDescription: "Decentralized apps and smart contracts, production-ready.",
    fullDescription:
      "We build decentralized applications and smart contracts that are secure, gas-efficient, and production-ready. From DeFi protocols to NFT platforms, our Web3 solutions are built to last. We handle smart contract development, auditing, and frontend integration.",
    useCases: [
      "Smart contract development & auditing",
      "Decentralized application (DApp) frontends",
      "Token economics & governance design",
      "Wallet integration & on-chain analytics",
    ],
    techStack: ["Solidity", "Ethers.js", "Hardhat", "The Graph", "IPFS", "Polygon"],
  },
  {
    id: "06",
    title: "E-Commerce Solutions",
    subdomains: ["Shopify", "WooCommerce", "Custom Storefronts"],
    icon: ShoppingCart,
    shortDescription: "Commerce experiences that convert and scale.",
    fullDescription:
      "We build and optimize e-commerce experiences that convert. Whether it's a custom storefront or a Shopify build, we focus on performance, UX, and the infrastructure that drives revenue. From product pages to checkout flows, every pixel is optimized for conversion.",
    useCases: [
      "Custom headless commerce storefronts",
      "Shopify & WooCommerce store builds",
      "Payment gateway integration (Stripe, PayPal)",
      "Inventory management & order automation",
    ],
    techStack: ["Shopify", "WooCommerce", "Stripe", "Next.js", "Medusa.js", "Algolia"],
  },
  {
    id: "07",
    title: "UI/UX & Product Design",
    subdomains: ["Wireframing", "Mobile/Web Design", "GenUI", "User Research"],
    icon: Figma,
    shortDescription: "Research-grounded interfaces that are precise and fluid.",
    fullDescription:
      "Design that's grounded in research, not guesswork. We create interfaces that are visually precise, interactionally fluid, and validated by real user data before a single pixel ships. Our process covers discovery, wireframing, prototyping, testing, and handoff.",
    useCases: [
      "End-to-end product design from research to handoff",
      "Design system creation & maintenance",
      "Usability testing & heuristic evaluation",
      "Rapid prototyping & concept validation",
    ],
    techStack: ["Figma", "Framer", "Storybook", "Maze", "Hotjar", "Tailwind CSS"],
  },
  {
    id: "08",
    title: "SEO (Search Engine Optimization)",
    subdomains: ["On-Page", "Off-Page", "Technical SEO", "Rankings", "Organic Growth"],
    icon: Search,
    shortDescription: "Engineering sites for search visibility from the ground up.",
    fullDescription:
      "We engineer sites for search visibility from the ground up. Technical SEO, content strategy, and performance optimization work together to drive sustainable organic growth. We don't just fix issues — we build SEO into the foundation of every project.",
    useCases: [
      "Technical SEO audits & fix implementation",
      "On-page optimization & structured data",
      "Core Web Vitals & page speed optimization",
      "Content strategy for organic acquisition",
    ],
    techStack: ["Google Search Console", "Screaming Frog", "Ahrefs", "Lighthouse", "Schema.org", "Vercel Analytics"],
  },
  {
    id: "09",
    title: "Digital Marketing",
    subdomains: ["Social Media Marketing", "Content Strategy", "Growth Marketing"],
    icon: Megaphone,
    shortDescription: "Data-driven strategies that reach the right audience.",
    fullDescription:
      "Data-driven marketing strategies that reach the right audience at the right time. We combine organic growth tactics with paid campaigns to maximize ROI and build lasting brand presence. Every campaign is measured, optimized, and iterated on.",
    useCases: [
      "Social media strategy & content calendars",
      "Email marketing automation & funnels",
      "Brand positioning & messaging frameworks",
      "Growth hacking & viral loop design",
    ],
    techStack: ["Meta Business Suite", "Mailchimp", "Google Analytics", "HubSpot", "Buffer", "Notion"],
  },
  {
    id: "10",
    title: "Marketing & Performance Ads",
    subdomains: ["Google Ads", "Meta Ads", "Paid Campaigns"],
    icon: Target,
    shortDescription: "Precision-targeted campaigns that deliver measurable ROI.",
    fullDescription:
      "Precision-targeted ad campaigns that deliver measurable results. We manage budgets, optimize creatives, and track every conversion to ensure your ad spend works as hard as possible. Full-funnel tracking from impression to conversion.",
    useCases: [
      "Google Ads search & display campaigns",
      "Meta (Facebook/Instagram) ad management",
      "Retargeting & lookalike audience strategies",
      "A/B testing & conversion rate optimization",
    ],
    techStack: ["Google Ads", "Meta Ads Manager", "Google Tag Manager", "Looker Studio", "Unbounce", "Hotjar"],
  },
  {
    id: "11",
    title: "Media & Creative Services",
    subdomains: ["Video Editing", "Motion Graphics", "Animation", "3D Design"],
    icon: Play,
    shortDescription: "Visual content that commands attention and drives engagement.",
    fullDescription:
      "We produce visual content that commands attention. From motion graphics to 3D product renders, our creative team delivers broadcast-quality media for web, social, and presentation. Every piece is crafted to align with your brand and goals.",
    useCases: [
      "Product demo & explainer videos",
      "Social media motion content & Reels",
      "3D product visualization & rendering",
      "Brand animation & motion identity",
    ],
    techStack: ["After Effects", "Premiere Pro", "Blender", "Cinema 4D", "Lottie", "Rive"],
  },
  {
    id: "12",
    title: "Graphic & Brand Design",
    subdomains: ["Logos", "Branding", "Marketing Assets"],
    icon: Palette,
    shortDescription: "Memorable visual identities that scale across every touchpoint.",
    fullDescription:
      "Visual identities that are memorable, scalable, and consistent across every touchpoint. We design brand systems — not just logos — that communicate who you are at a glance. From mark to full brand guidelines, we build the visual foundation your business needs.",
    useCases: [
      "Logo design & visual identity systems",
      "Brand guidelines & style documentation",
      "Marketing collateral & social templates",
      "Icon sets & illustration systems",
    ],
    techStack: ["Figma", "Illustrator", "Photoshop", "After Effects", "Brandfolder", "Frontify"],
  },
];

export default function Domains() {
  const [selected, setSelected] = useState<Domain | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

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
              Twelve engineering domains, each backed by deep technical expertise. Click any domain to learn more.
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
                  boxShadow: "0 12px 30px rgba(16, 185, 129, 0.06)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 18,
                  delay: (index % 3) * 0.08,
                }}
                onClick={() => setSelected(dom)}
                className="group card-level-1 p-6 transition-all duration-300 relative overflow-hidden cursor-pointer"
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
                <h3 className="text-lg font-display font-bold text-white mb-2 tracking-tight leading-snug">
                  {dom.title}
                </h3>

                {/* Short Description */}
                <p className="text-[12px] text-[#bbcabf] leading-relaxed body-text mb-4">
                  {dom.shortDescription}
                </p>

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

      {/* ═══════════════════════════════════════════════
          DOMAIN DETAIL MODAL
      ═══════════════════════════════════════════════ */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
            onClick={() => setSelected(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 w-full max-w-2xl max-h-[85vh] overflow-y-auto card-level-1"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-lg bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.12] transition-colors text-[#737373] hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header — accent bar + icon + number */}
              <div className="px-8 md:px-10 pt-8 md:pt-10 pb-6 border-b border-outline-variant/20">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl bg-[#10b981]/[0.1] border border-[#10b981]/20 flex items-center justify-center">
                    <selected.icon className="w-7 h-7 text-[#10b981]" />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest text-[#525252] block mb-0.5">
                      Domain {selected.id}
                    </span>
                    <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight leading-snug">
                      {selected.title}
                    </h3>
                  </div>
                </div>

                {/* Subdomains */}
                <div className="flex flex-wrap gap-1.5">
                  {selected.subdomains.map((sub, i) => (
                    <span
                      key={i}
                      className="text-[10px] text-[#10b981] bg-[#10b981]/[0.08] border border-[#10b981]/20 rounded-md px-2.5 py-1 font-mono"
                    >
                      {sub}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Body */}
              <div className="px-8 md:px-10 py-6">
                {/* Description */}
                <div className="mb-8">
                  <p className="text-[13px] text-[#bbcabf] leading-[1.8] body-text">
                    {selected.fullDescription}
                  </p>
                </div>

                {/* Two-column layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Use Cases */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Layers className="w-3.5 h-3.5 text-[#10b981]" />
                      <p className="text-[9px] font-mono uppercase tracking-wider text-[#737373]">
                        What We Build
                      </p>
                    </div>
                    <ul className="space-y-2.5">
                      {selected.useCases.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[12px] text-[#bbcabf] leading-relaxed">
                          <CheckCircle className="w-3.5 h-3.5 text-[#10b981] mt-0.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Code className="w-3.5 h-3.5 text-[#10b981]" />
                      <p className="text-[9px] font-mono uppercase tracking-wider text-[#737373]">
                        Tech Stack
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {selected.techStack.map((tech, i) => (
                        <span
                          key={i}
                          className="text-[10px] text-[#bbcabf] bg-[#0c0c0c] border border-outline-variant/30 rounded-md px-2.5 py-1 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-8 md:px-10 py-6 border-t border-outline-variant/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <a
                  href="/contact"
                  className="btn-primary font-mono text-[11px] px-6 py-3 uppercase font-bold tracking-wider hover:bg-[#4edea3] transition-colors active:scale-[0.97] flex items-center gap-2"
                >
                  Discuss This Service
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setSelected(null)}
                  className="font-mono text-[11px] uppercase font-bold tracking-wider text-[#737373] hover:text-white transition-colors"
                >
                  Back to All Domains
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
