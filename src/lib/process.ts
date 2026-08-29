export type ProcessPhase = {
  id: string;
  title: string;
  description: string;
  details: string[];
};

export const process: ProcessPhase[] = [
  {
    id: "01",
    title: "Discover",
    description: "Requirements gathering and system planning.",
    details: [
      "Stakeholder interviews & workshops",
      "Technical architecture blueprint",
      "Competitive & technical analysis",
      "Resource & timeline estimation",
    ],
  },
  {
    id: "02",
    title: "Design",
    description: "Design tokens and wireframing.",
    details: [
      "Wireframes & interactive prototypes",
      "Design system & component tokens",
      "Information architecture planning",
      "Usability testing & feedback loops",
    ],
  },
  {
    id: "03",
    title: "Build",
    description: "Iterative development and QA.",
    details: [
      "Agile sprint cycles with demos",
      "Code reviews & pair programming",
      "API development & integration",
      "Performance & security audit reports",
    ],
  },
  {
    id: "04",
    title: "Launch",
    description: "Deployment & post-launch monitoring.",
    details: [
      "Production deployment & DNS setup",
      "Staged rollout & canary deployments",
      "Monitoring & alerting dashboards",
      "Post-launch support & maintenance plan",
    ],
  },
];
