import { Code2, Palette, TrendingUp, ShieldCheck, type LucideIcon } from "lucide-react";

export type Discipline = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const disciplines: Discipline[] = [
  {
    icon: Code2,
    title: "Engineering",
    body: "Full-stack, mobile, and AI engineers who own a build from architecture through deployment. The people who scope the project are the same ones who ship it.",
  },
  {
    icon: Palette,
    title: "Design",
    body: "Product and brand designers who work from research, not guesswork. Wireframes, design systems, and visual identity all live under one roof.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    body: "SEO, paid media, and content specialists who pick up where the build ends, so launch is the start of measurable growth, not the finish line.",
  },
  {
    icon: ShieldCheck,
    title: "Security & Delivery",
    body: "Security review and delivery discipline are built into every phase of the process, not bolted on at the end. Audits, monitoring, and support are part of the plan from day one.",
  },
];

export type Leader = {
  name: string;
  title: string;
  image?: string;
};

export const leaders: Leader[] = [
  {
    name: "Haseeb Tariq",
    title: "CEO & Founder",
    image: "/assets/haseeb.jpeg",
  },
];
