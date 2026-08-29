import {
  Globe,
  AppWindow,
  BrainCircuit,
  LayoutDashboard,
  Smartphone,
  ShieldCheck,
  ShoppingCart,
  PenTool,
  Search,
  Megaphone,
  Clapperboard,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  id: string;
  slug: string;
  title: string;
  subdomains: string[];
  icon: LucideIcon;
  shortDescription: string;
  fullDescription: string;
  useCases: string[];
  techStack: string[];
};

export const services: Service[] = [
  {
    id: "01",
    slug: "web-development",
    title: "Web Development",
    subdomains: ["Marketing Sites", "CMS", "Landing Pages", "Accessibility"],
    icon: Globe,
    shortDescription: "Institutional-grade websites built for clarity and speed.",
    fullDescription:
      "We build marketing sites, corporate websites, and content-driven pages with clean architecture and typography that actually reads well. Every site loads in under a second, works on every device, and is built to be accessible and easy to maintain long after launch.",
    useCases: [
      "Corporate & institutional websites",
      "CMS-driven content platforms",
      "Landing pages & campaign microsites",
      "Accessibility & cross-device compliance",
    ],
    techStack: ["Next.js", "Tailwind CSS", "Sanity", "Contentful", "Vercel", "Cloudflare"],
  },
  {
    id: "02",
    slug: "app-development",
    title: "App Development",
    subdomains: ["Custom Software", "Internal Tools", "Cross-Platform", "Systems Integration"],
    icon: AppWindow,
    shortDescription: "Custom software built around how your business actually works.",
    fullDescription:
      "We build custom software around how your business actually works, from internal tools to client-facing platforms. Every app is built to hold up under real use, not just demo well.",
    useCases: [
      "Internal tooling & admin platforms",
      "Cross-platform desktop applications",
      "Third-party systems & API integrations",
      "Legacy system modernization",
    ],
    techStack: ["Electron", "Node.js", "TypeScript", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: "03",
    slug: "ai-machine-learning",
    title: "AI & Machine Learning Engineering",
    subdomains: ["Agents", "RAG", "Automation", "Predictive Models"],
    icon: BrainCircuit,
    shortDescription: "Intelligent systems that learn, adapt, and automate.",
    fullDescription:
      "We design and deploy AI systems that automate real business processes, from RAG pipelines to custom agents and production ML infrastructure.",
    useCases: [
      "Conversational AI agents for customer support",
      "Document ingestion & retrieval systems (RAG)",
      "Predictive analytics for business intelligence",
      "Workflow automation with intelligent decision-making",
    ],
    techStack: ["Python", "LangChain", "OpenAI API", "Pinecone", "FastAPI", "TensorFlow"],
  },
  {
    id: "04",
    slug: "web-app-development",
    title: "Web App Development",
    subdomains: ["Frontend", "Backend", "SaaS", "Full-Stack"],
    icon: LayoutDashboard,
    shortDescription: "Fast, accessible web applications engineered to scale.",
    fullDescription:
      "We build fast, accessible web applications, from complex SaaS platforms to real-time dashboards. Every app is tested across devices and built to grow without needing a rewrite later.",
    useCases: [
      "SaaS dashboards & admin panels",
      "Real-time collaborative platforms",
      "Headless CMS & content-driven sites",
      "API-first microservice architectures",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Vercel"],
  },
  {
    id: "05",
    slug: "mobile-app-development",
    title: "Mobile App Development",
    subdomains: ["iOS", "Android", "Cross-Platform"],
    icon: Smartphone,
    shortDescription: "Native and cross-platform apps built for every device.",
    fullDescription:
      "We build native and cross-platform mobile apps for performance and reliability at scale, whether it's a consumer product or an internal enterprise tool.",
    useCases: [
      "Native iOS & Android applications",
      "Cross-platform apps with shared codebases",
      "Offline-first apps with local data sync",
      "Push notifications & deep linking",
    ],
    techStack: ["Kotlin", "Swift", "Jetpack Compose", "React Native", "Expo", "Firebase"],
  },
  {
    id: "06",
    slug: "cybersecurity-compliance",
    title: "Cybersecurity & Compliance",
    subdomains: ["Security Audits", "Data Protection", "Penetration Testing"],
    icon: ShieldCheck,
    shortDescription: "Hardening systems and ensuring regulatory compliance.",
    fullDescription:
      "We harden systems, audit codebases, and handle regulatory compliance across your stack, so security is built into the foundation instead of patched on after launch.",
    useCases: [
      "Full-stack security audits & code reviews",
      "GDPR, HIPAA & SOC 2 compliance readiness",
      "Penetration testing & vulnerability assessments",
      "Secure authentication & authorization systems",
    ],
    techStack: ["OWASP", "Snyk", "Vault", "Cloudflare", "Let's Encrypt", "AWS IAM"],
  },
  {
    id: "07",
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    subdomains: ["Shopify", "WooCommerce", "Custom Storefronts"],
    icon: ShoppingCart,
    shortDescription: "Commerce experiences that convert and scale.",
    fullDescription:
      "We build commerce experiences that convert, from headless storefronts to fully custom platforms, built for performance, SEO, and growth.",
    useCases: [
      "Custom headless commerce storefronts",
      "Shopify & WooCommerce store builds",
      "Payment gateway integration (Stripe, PayPal)",
      "Inventory management & order automation",
    ],
    techStack: ["Shopify", "WooCommerce", "Stripe", "Next.js", "Medusa.js", "Algolia"],
  },
  {
    id: "08",
    slug: "ui-ux-product-design",
    title: "UI/UX & Product Design",
    subdomains: ["Wireframing", "Mobile/Web Design", "User Research"],
    icon: PenTool,
    shortDescription: "Research-grounded interfaces that are precise and fluid.",
    fullDescription:
      "We design interfaces grounded in research, not guesswork, from wireframes and prototypes to complete design systems. Every decision gets tested against real user behavior and your business goals.",
    useCases: [
      "End-to-end product design from research to handoff",
      "Design system creation & maintenance",
      "Usability testing & heuristic evaluation",
      "Rapid prototyping & concept validation",
    ],
    techStack: ["Figma", "Framer", "Storybook", "Maze", "Hotjar", "Tailwind CSS"],
  },
  {
    id: "09",
    slug: "seo",
    title: "SEO",
    subdomains: ["On-Page", "Technical SEO", "Rankings", "Organic Growth"],
    icon: Search,
    shortDescription: "Engineering sites for search visibility from the ground up.",
    fullDescription:
      "We build sites for search visibility from the ground up: technical SEO baked into the architecture, on-page work baked into the content, and performance that keeps rankings climbing instead of stalling.",
    useCases: [
      "Technical SEO audits & fix implementation",
      "On-page optimization & structured data",
      "Core Web Vitals & page speed optimization",
      "Content strategy for organic acquisition",
    ],
    techStack: ["Google Search Console", "Screaming Frog", "Ahrefs", "Lighthouse", "Schema.org", "Vercel Analytics"],
  },
  {
    id: "10",
    slug: "digital-marketing-performance-ads",
    title: "Digital Marketing & Performance Ads",
    subdomains: ["Social Media Marketing", "Google & Meta Ads", "Growth Marketing"],
    icon: Megaphone,
    shortDescription: "Campaigns built around data, aimed at ROI you can actually measure.",
    fullDescription:
      "Campaigns built around data and targeted to convert, from paid media to organic growth. Every dollar gets tracked, so you know what's actually working.",
    useCases: [
      "Social media strategy & content calendars",
      "Google Ads search & display campaigns",
      "Meta (Facebook/Instagram) ad management",
      "Retargeting, A/B testing & conversion rate optimization",
    ],
    techStack: ["Google Ads", "Meta Ads Manager", "Google Analytics", "HubSpot", "Looker Studio", "Unbounce"],
  },
  {
    id: "11",
    slug: "media-creative-services",
    title: "Media & Creative Services",
    subdomains: ["Video Editing", "Motion Graphics", "Animation", "3D Design", "Brand Design"],
    icon: Clapperboard,
    shortDescription: "Visual content and brand systems built to grab attention.",
    fullDescription:
      "Visual content and brand systems built to grab attention, from motion graphics and video production to full creative direction.",
    useCases: [
      "Product demo & explainer videos",
      "Motion graphics, 3D rendering & brand animation",
      "Logo design & visual identity systems",
      "Brand guidelines, icon sets & marketing collateral",
    ],
    techStack: ["After Effects", "Premiere Pro", "Blender", "Cinema 4D", "Figma", "Illustrator"],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
