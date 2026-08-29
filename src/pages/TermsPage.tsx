import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms of Service — Tavryz Studio</title>
      </Helmet>
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-40">
        <Link to="/" className="group mb-16 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] dark:text-slate-500 text-[var(--text-muted)] hover:text-accent-teal">
          <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <div className="mb-16">
          <span className="mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-accent-teal/30" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-teal">Legal</span>
          </span>
          <h1 className="mb-4 font-display text-4xl font-bold leading-[1.1] tracking-tight dark:text-white text-[var(--text-primary)] md:text-5xl">
            Terms of Service
          </h1>
          <p className="font-mono text-[13px] dark:text-slate-500 text-[var(--text-muted)]">Last updated: August 25, 2026</p>
        </div>

        <div className="space-y-12 text-[14px] leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
          <section>
            <h2 className="mb-4 font-display text-lg font-bold tracking-tight dark:text-white text-[var(--text-primary)]">1. Services</h2>
            <p>
              Tavryz Studio provides custom software engineering, design, and digital marketing services,
              including but not limited to web development, mobile app development, AI &amp; machine learning
              engineering, cybersecurity, e-commerce, UI/UX design, SEO, and creative media production.
              Unless otherwise agreed in a separate contract, project scope, deliverables, and ownership are
              defined in individual client agreements.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-lg font-bold tracking-tight dark:text-white text-[var(--text-primary)]">2. Project Deliverables</h2>
            <p>Project deliverables and ownership are defined in individual client agreements. This website provides general information about our services and does not itself constitute a service contract.</p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-lg font-bold tracking-tight dark:text-white text-[var(--text-primary)]">3. Website Use</h2>
            <p>
              Tavryz Studio strives to keep website information accurate and up to date. However, we make no
              warranties about the completeness, reliability, or availability of the content. We are not
              liable for any damages arising from the use of or inability to use this website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-lg font-bold tracking-tight dark:text-white text-[var(--text-primary)]">4. Intellectual Property</h2>
            <p>All logos, brand marks, and content on this website are the property of Tavryz Studio unless otherwise credited, and may not be reproduced without permission.</p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-lg font-bold tracking-tight dark:text-white text-[var(--text-primary)]">5. Changes to These Terms</h2>
            <p>We reserve the right to update these terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of the site after changes are posted constitutes acceptance of the revised terms.</p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-lg font-bold tracking-tight dark:text-white text-[var(--text-primary)]">6. Contact</h2>
            <p>
              For questions about these terms, contact us at{" "}
              <a href="mailto:tavryzofficial@gmail.com" className="dark:text-white text-[var(--text-primary)] underline underline-offset-4 hover:text-accent-teal">
                tavryzofficial@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
