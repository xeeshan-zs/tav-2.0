import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    {
      id: "01",
      title: "Discover",
      description: "Requirements gathering & system blueprinting.",
      active: true,
    },
    {
      id: "02",
      title: "Design",
      description: "Tokenization & structural wireframing.",
      active: false,
    },
    {
      id: "03",
      title: "Build",
      description: "Iterative development & QA protocols.",
      active: false,
    },
    {
      id: "04",
      title: "Launch",
      description: "Deployment & post-launch monitoring.",
      active: false,
    },
  ];

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
                    step.active
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

                {/* Description */}
                <p className="font-mono text-[11px] text-[#bbcabf] opacity-80 max-w-[200px] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
