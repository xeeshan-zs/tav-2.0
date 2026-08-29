import { Layers, Target, ShieldCheck, Grid3x3, MessageSquare, Workflow, type LucideIcon } from "lucide-react";

export type WhyPoint = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export const whyTavryz: WhyPoint[] = [
  {
    icon: Layers,
    title: "Full-stack ownership",
    body: "One team handles a project from architecture through deployment: UI, API, infrastructure, all of it. No handoffs, no one relearning your codebase halfway through.",
  },
  {
    icon: Target,
    title: "Engineering over guesswork",
    body: "Every decision, whether it's a design choice, a line of code, or an ad campaign, is backed by research and data — not someone's opinion.",
  },
  {
    icon: ShieldCheck,
    title: "Structural integrity",
    body: "We plan for scale from day one. Performance, accessibility, and security get built into the foundation instead of patched in later.",
  },
  {
    icon: Grid3x3,
    title: "Everything under one roof",
    body: "Web, mobile, AI, security, commerce, design, and growth all live under one roof, so the pieces of your product actually fit together instead of feeling stitched from different vendors.",
  },
  {
    icon: MessageSquare,
    title: "Direct communication",
    body: "You talk directly to the people building your product. No account manager relaying messages, no details getting lost along the way.",
  },
  {
    icon: Workflow,
    title: "Fixed process, flexible scope",
    body: "Every project runs through the same four-phase process, adjusted to what it actually needs.",
  },
];
