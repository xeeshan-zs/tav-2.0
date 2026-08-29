export type FaqItem = { question: string; answer: string };

export const faqs: FaqItem[] = [
  {
    question: "What does the Discovery phase actually involve?",
    answer:
      "Stakeholder interviews, a technical architecture plan, competitive analysis, and a timeline estimate — all before a single line of code gets written. It's how we scope accurately instead of guessing.",
  },
  {
    question: "Do you work with early-stage startups or only established companies?",
    answer:
      "Both. Our four-phase process scales down for a lean MVP and up for a multi-domain enterprise build. The process stays the same either way — only the depth of each phase changes.",
  },
  {
    question: "Can you take over an existing codebase, or only greenfield builds?",
    answer:
      "Both. We take on existing codebases regularly. Discovery includes a technical audit of what's already there before we plan anything new on top of it.",
  },
  {
    question: "How do you price engagements?",
    answer:
      "Every engagement is scoped individually based on complexity and domain mix. Reach out with a project brief and we'll walk you through a clear estimate before any commitment.",
  },
  {
    question: "Do you offer support after launch?",
    answer:
      "Yes. The Launch phase includes post-launch support and maintenance, plus monitoring and alerts so issues get caught before they become real problems.",
  },
  {
    question: "Can you handle multiple domains on one project — say, a web app plus SEO plus paid ads?",
    answer:
      "That's the point of having eleven domains under one studio. A single team stays coherent across the build and the growth work, instead of you coordinating separate vendors.",
  },
];
