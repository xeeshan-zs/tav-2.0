import { Reveal } from "./Reveal";
import { WhyTimeline } from "./WhyTimeline";

export function WhySection() {
  return (
    <section className="relative z-10 border-t dark:border-white/5 border-black/[0.06] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 text-center">
          <span className="mb-5 block font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-accent-teal">
            Why Tavryz
          </span>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold leading-[1.2] tracking-tight dark:text-white text-[var(--text-primary)] md:text-5xl">
            What makes us an <span className="text-accent-teal">engineering partner,</span> not just another vendor.
          </h2>
        </Reveal>
        <WhyTimeline />
      </div>
    </section>
  );
}
