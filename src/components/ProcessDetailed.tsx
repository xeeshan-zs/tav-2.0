import { CheckCircle2 } from "lucide-react";
import { Reveal } from "./Reveal";
import { CodeTerminal } from "./CodeTerminal";
import { process } from "@/lib/process";

export function ProcessDetailed() {
  return (
    <section className="relative z-10 border-t dark:border-white/[0.04] border-black/[0.06] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 max-w-xl">
          <span className="mb-5 block font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-accent-teal">
            Standard Operating Procedure
          </span>
          <h2 className="font-display text-4xl font-bold leading-[1.1] tracking-tight dark:text-white text-[var(--text-primary)] md:text-5xl">
            How We <span className="text-accent-teal">Work</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.3fr] md:gap-16">
          <div className="hidden md:block">
            <div className="sticky top-32 flex h-[420px] items-center justify-center overflow-hidden rounded-3xl">
              <CodeTerminal />
            </div>
          </div>

          <div>
            {process.map((phase, i) => (
              <Reveal key={phase.id} delay={i * 0.08}>
                <div className={`group py-8 transition-all duration-300 dark:hover:bg-white/[0.02] hover:bg-black/[0.02] -mx-4 px-4 rounded-xl ${i !== 0 ? "border-t dark:border-white/[0.06] border-black/[0.06]" : ""}`}>
                  <span className="mb-3 block font-mono text-xs font-semibold text-accent-teal transition-all duration-300 group-hover:text-accent-bright">[{phase.id}]</span>
                  <h3 className="mb-3 font-display text-2xl font-bold uppercase tracking-normal dark:text-white text-[var(--text-primary)] md:text-3xl">
                    {phase.title}
                  </h3>
                  <p className="mb-5 max-w-lg text-sm leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">{phase.description}</p>
                  <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {phase.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-[13px] dark:text-slate-400 text-[var(--text-secondary)]">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-accent-teal/70" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
