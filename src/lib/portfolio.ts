export type Project = {
  id: string;
  title: string;
  industry: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  link: string;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "Aroush Works",
    industry: "Creative Studio Portfolio",
    description:
      "A web presence built for performance and clean editorial typography. Built with Next.js, loads in under a second, and designed to turn visitors into clients.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Vercel", "SEO Audit"],
    metrics: [
      { label: "Performance", value: "99" },
      { label: "SEO Score", value: "100" },
      { label: "Load Time", value: "0.8s" },
      { label: "Lighthouse", value: "100" },
    ],
    link: "https://www.aroushworks.com",
  },
  {
    id: "02",
    title: "ICCS Global",
    industry: "Institutional Operations",
    description:
      "An institutional website with clean architecture and a responsive layout, built with accessibility and cross-device support in mind.",
    tags: ["React", "Node.js", "PostgreSQL", "WCAG 2.1"],
    metrics: [
      { label: "Performance", value: "98" },
      { label: "A11y", value: "100" },
    ],
    link: "https://iccsglobalized.com",
  },
  {
    id: "03",
    title: "Z Nectar",
    industry: "E-Commerce Mobile",
    description:
      "A cross-platform grocery app with real-time sync and offline storage, built natively in Kotlin with Jetpack Compose.",
    tags: ["Kotlin", "Jetpack Compose", "Room DB", "Play Store"],
    metrics: [
      { label: "Platforms", value: "2" },
      { label: "LCP", value: "Sub-1s" },
    ],
    link: "https://github.com/xeeshan-zs/z-nectar",
  },
];
