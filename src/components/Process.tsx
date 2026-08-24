import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discover",
    tagline: "Requirements gathering & system blueprinting.",
    description:
      "We dive deep into your business goals, user needs, and technical constraints. Every project starts with clarity — no assumptions, no shortcuts. We map the problem space before writing a single line of code.",
    deliverables: [
      "Product Requirements Document (PRD)",
      "Technical architecture blueprint",
      "User persona & journey mapping",
      "Risk assessment & mitigation plan",
    ],
    activities: [
      "Stakeholder interviews & workshops",
      "Competitive & technical analysis",
      "Success metrics definition",
      "Resource & timeline estimation",
    ],
  },
  {
    id: "02",
    title: "Design",
    tagline: "Tokenization & structural wireframing.",
    description:
      "From low-fidelity wireframes to polished, pixel-perfect interfaces — our design phase translates strategy into visual reality. We establish design systems, component libraries, and interaction patterns that scale.",
    deliverables: [
      "Wireframes & interactive prototypes",
      "Design system & component tokens",
      "Responsive layout specifications",
      "Accessibility (WCAG 2.1) compliance docs",
    ],
    activities: [
      "Information architecture planning",
      "UI component design & iteration",
      "Usability testing & feedback loops",
      "Design-to-code handoff preparation",
    ],
  },
  {
    id: "03",
    title: "Build",
    tagline: "Iterative development & QA protocols.",
    description:
      "We build in sprints with continuous integration, automated testing, and code reviews at every stage. Transparency is built in — you see progress in real-time and can course-correct at any point.",
    deliverables: [
      "Production-ready codebase",
      "Automated test suites (unit, integration, e2e)",
      "CI/CD pipeline configuration",
      "Performance & security audit reports",
    ],
    activities: [
      "Agile sprint cycles with demos",
      "Code reviews & pair programming",
      "API development & integration",
      "Bug tracking & resolution",
    ],
  },
  {
    id: "04",
    title: "Launch",
    tagline: "Deployment & post-launch monitoring.",
    description:
      "Launch day isn't the finish line — it's the starting gun. We handle deployment, monitoring, and optimization to ensure your product performs flawlessly under real-world conditions from day one.",
    deliverables: [
      "Production deployment & DNS setup",
      "Monitoring & alerting dashboards",
      "Performance baseline reports",
      "Post-launch support & maintenance plan",
    ],
    activities: [
      "Staged rollout & canary deployments",
      "Real-time performance monitoring",
      "User feedback collection & analysis",
      "Iterative optimization & updates",
    ],
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-6 border-b border-outline-variant bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 tracking-tight leading-[1.1]">
            Execution Protocol
          </h2>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-[#10b981]">
            Standard Operating Procedure
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-zinc-800">
            <div className="h-full bg-[#10b981] w-[28%]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6 text-center">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center group"
              >
                {/* Step Number Circle */}
                <div
                  className={`w-12 h-12 bg-black flex items-center justify-center font-mono text-[14px] mb-6 transition-all duration-300 ${
                    index === 0
                      ? "border border-[#10b981] text-[#10b981] shadow-[0_0_10px_rgba(16,185,129,0.15)]"
                      : "border border-outline-variant text-[#bbcabf] opacity-60 group-hover:opacity-100 group-hover:border-[#bbcabf]"
                  }`}
                >
                  {step.id}
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-white mb-2 tracking-tight">
                  {step.title}
                </h3>

                {/* Tagline */}
                <p className="font-mono text-[11px] text-[#bbcabf] opacity-80 max-w-[200px] leading-relaxed mb-4">
                  {step.tagline}
                </p>

                {/* Description */}
                <p className="text-[12px] text-[#bbcabf] leading-relaxed body-text max-w-[220px] mb-5">
                  {step.description}
                </p>

                {/* Deliverables */}
                <div className="w-full text-left">
                  <p className="text-[9px] font-mono uppercase tracking-wider text-[#525252] mb-2">
                    Key Deliverables
                  </p>
                  <ul className="space-y-1.5">
                    {step.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] text-[#bbcabf] leading-relaxed">
                        <CheckCircle className="w-3 h-3 text-[#10b981] mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Activities */}
                <div className="w-full text-left mt-4">
                  <p className="text-[9px] font-mono uppercase tracking-wider text-[#525252] mb-2">
                    Activities
                  </p>
                  <ul className="space-y-1.5">
                    {step.activities.map((item, i) => (
                      <li key={i} className="flex items-start gap-1.5 text-[11px] text-[#bbcabf] leading-relaxed">
                        <div className="w-1 h-1 rounded-full bg-[#525252] mt-1.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
