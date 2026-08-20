import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How does the monthly retainer work?",
      answer: "Our retainer allocates dedicated weekly design and engineering sprints. You gain direct shared Slack access to our team. We queue and execute requests one at a time, ensuring absolute focus and high quality. You can pause or cancel the subscription anytime without penalty.",
    },
    {
      question: "What tech stacks do you build with?",
      answer: "We engineer headless web architectures using Next.js, React, Node.js, and PostgreSQL. For mobile products, we write native Kotlin with Jetpack Compose. For marketing and corporate presences, we combine custom Next.js configurations or Webflow Enterprise builds for performance and SEO.",
    },
    {
      question: "How do we communicate during a sprint?",
      answer: "We maintain a direct Slack or Microsoft Teams channel with your product stakeholders. We avoid long, unproductive status meetings by delivering a working demo URL and video walkthrough every Friday, so you see real, tangible progress in code.",
    },
    {
      question: "What is your typical turnaround time?",
      answer: "Minor requests (landing page tweaks, component enhancements, copy changes) are delivered within 24–48 hours. Major features, custom API integrations, or dashboard modules are scoped into weekly milestones and shipped continuously.",
    },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-transparent relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left - Header */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-white/20" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#737373]">
                  FAQ
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] tracking-[-0.03em] mb-6">
                Questions<br />
                <span className="text-[#737373]">& Answers</span>
              </h2>

              <p className="text-sm text-[#a3a3a3] leading-relaxed max-w-sm mb-8 body-text">
                Everything you need to know before working with us. Can&apos;t find what you&apos;re looking for? Reach out directly.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-bold text-white hover:text-[#a3a3a3] transition-colors group"
              >
                Ask a question
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right - Accordions */}
          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ type: "spring", stiffness: 300, damping: 24, delay: index * 0.05 }}
                  className={`bg-white/[0.03] border border-white/[0.06] rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.08] ${
                    isOpen ? "bg-white/[0.05] border-white/[0.1]" : ""
                  }`}
                >
                  <button
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between gap-6 cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono text-[#525252] w-6">
                        0{index + 1}
                      </span>
                      <span className="text-sm md:text-base font-semibold text-white tracking-tight group-hover:text-white transition-colors">
                        {faq.question}
                      </span>
                    </div>
                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-white/[0.06] border border-white/[0.08] group-hover:bg-white/[0.1] transition-colors">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-white" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-[#a3a3a3]" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 300, damping: 28 }}
                      >
                        <div className="px-6 pb-6 pl-16 md:pl-[52px] border-t border-white/[0.04] pt-4 text-xs md:text-sm text-[#a3a3a3] leading-relaxed body-text">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
