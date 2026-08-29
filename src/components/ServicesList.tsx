import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { ServiceListRow } from "./ServiceListRow";
import { services } from "@/lib/services";

export function ServicesList() {
  return (
    <section className="relative z-10 border-t dark:border-white/5 border-black/[0.06] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <span className="mb-5 block font-mono text-[11px] font-semibold uppercase tracking-[0.3em] text-accent-teal">
                Our Services
              </span>
              <h2 className="font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-normal dark:text-white text-[var(--text-primary)] md:text-5xl">
                Top services we <span className="text-accent-teal">specialize</span> in
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
              Eleven domains, one team, covering everything from the first line of code to the growth work
              that comes after launch.
            </p>
          </div>
        </Reveal>

        <div>
          {services.map((service, i) => (
            <ServiceListRow key={service.id} slug={service.slug} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] dark:text-slate-400 text-[var(--text-muted)] hover:text-accent-teal"
          >
            View All Services <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
