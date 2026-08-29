import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — Tavryz Studio</title>
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
            Privacy Policy
          </h1>
          <p className="font-mono text-[13px] dark:text-slate-500 text-[var(--text-muted)]">Last updated: August 25, 2026</p>
        </div>

        <div className="space-y-12 text-[14px] leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
          <section>
            <h2 className="mb-4 font-display text-lg font-bold tracking-tight dark:text-white text-[var(--text-primary)]">1. Information We Collect</h2>
            <p className="mb-4">When you visit Tavryz Studio&apos;s website or contact us, we may collect the following information:</p>
            <ul className="ml-4 list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 dark:text-slate-500 text-[var(--text-muted)]">•</span>
                <span><strong className="dark:text-white text-[var(--text-primary)]">Personal Information:</strong> Name, email address, and any details you provide when submitting the contact form.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 dark:text-slate-500 text-[var(--text-muted)]">•</span>
                <span><strong className="dark:text-white text-[var(--text-primary)]">Usage Data:</strong> Browser type, device information, pages visited, time spent on pages, and referring URLs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 dark:text-slate-500 text-[var(--text-muted)]">•</span>
                <span><strong className="dark:text-white text-[var(--text-primary)]">Cookies:</strong> We use only essential cookies required for site functionality. We do not use third-party advertising cookies.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-display text-lg font-bold tracking-tight dark:text-white text-[var(--text-primary)]">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="ml-4 list-none space-y-2">
              {[
                "Respond to your inquiries and project requests",
                "Improve our website and services",
                "Communicate with you about projects, updates, or changes to this policy",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 dark:text-slate-500 text-[var(--text-muted)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-4 font-display text-lg font-bold tracking-tight dark:text-white text-[var(--text-primary)]">3. Data Storage &amp; Security</h2>
            <p>
              Our contact form does not submit your details to a server or database — it opens your email
              client with the message pre-filled, and the email is sent directly to us. We do not sell, trade,
              or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-lg font-bold tracking-tight dark:text-white text-[var(--text-primary)]">4. Third-Party Services</h2>
            <p className="mb-4">We use the following third-party services to operate this website:</p>
            <ul className="ml-4 list-none space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 dark:text-slate-500 text-[var(--text-muted)]">•</span>
                <span><strong className="dark:text-white text-[var(--text-primary)]">Hosting provider:</strong> Website hosting, deployment, and delivery infrastructure.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 dark:text-slate-500 text-[var(--text-muted)]">•</span>
                <span><strong className="dark:text-white text-[var(--text-primary)]">GitHub:</strong> Code repository and CI/CD workflows.</span>
              </li>
            </ul>
            <p className="mt-4">These services may collect usage data in accordance with their own privacy policies. We encourage you to review their policies for more information.</p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-lg font-bold tracking-tight dark:text-white text-[var(--text-primary)]">5. Your Rights</h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal data. To
              exercise any of these rights, contact us at{" "}
              <a href="mailto:tavryzofficial@gmail.com" className="dark:text-white text-[var(--text-primary)] underline underline-offset-4 hover:text-accent-teal">
                tavryzofficial@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-lg font-bold tracking-tight dark:text-white text-[var(--text-primary)]">6. Changes to This Policy</h2>
            <p>We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of the site after changes constitutes acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 className="mb-4 font-display text-lg font-bold tracking-tight dark:text-white text-[var(--text-primary)]">7. Contact</h2>
            <p>
              For questions about this policy, reach us at{" "}
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
