"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
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
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="border-b border-white/5 pb-8 mb-12">
          <span className="text-[10px] uppercase tracking-widest font-mono text-[#AEABC5] block mb-3">
            04 / FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div
                key={index}
                className="bg-[#2D2144]/30 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300 hover:border-teal-500/20 shadow-2xl"
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6 cursor-pointer"
                >
                  <span className="text-sm md:text-base font-semibold text-white tracking-tight">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-teal-500/5 border border-teal-500/10 flex items-center justify-center text-white flex-shrink-0">
                    {isOpen ? <Minus className="w-3.5 h-3.5 text-teal-400" /> : <Plus className="w-3.5 h-3.5 text-teal-400" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 border-t border-white/[0.01] pt-4 text-xs md:text-sm text-[#AEABC5] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
