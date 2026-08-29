import { Eyebrow } from "./Badge";
import { Reveal } from "./Reveal";
import { Faq } from "./Faq";
import { faqs } from "@/lib/faq";

export function FaqSection() {
  return (
    <section className="relative z-10 border-t dark:border-white/5 border-black/[0.06] px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-12 text-center">
          <Eyebrow>
            <span className="mx-auto">FAQ</span>
          </Eyebrow>
          <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight dark:text-white text-[var(--text-primary)] md:text-5xl">
            Questions, <span className="text-gradient">answered.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Faq items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
