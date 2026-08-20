import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 relative z-10">
        <div className="max-w-3xl mx-auto px-6 pt-32 md:pt-40 pb-20 md:pb-32">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] font-mono text-[#737373] hover:text-white transition-colors mb-16 group"
          >
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-white/20" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#737373]">
                Legal
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white leading-[1.1] tracking-[-0.03em] mb-4">
              Terms of Service
            </h1>
            <p className="text-[13px] text-[#737373] font-mono">
              Last updated: August 21, 2026
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12 text-[14px] text-[#a3a3a3] leading-relaxed body-text">
            <section>
              <h2 className="text-lg font-display font-bold text-white mb-4 tracking-tight">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the Tavryz Studio website (tavryz-live.web.app), you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-display font-bold text-white mb-4 tracking-tight">
                2. Services
              </h2>
              <p>
                Tavryz Studio provides custom software engineering, web development, mobile app development, UI/UX design, and related digital services. All project scope, timelines, pricing, and deliverables are agreed upon in writing before work begins. These terms govern website use only; client engagements are governed by separate service agreements.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-display font-bold text-white mb-4 tracking-tight">
                3. Intellectual Property
              </h2>
              <p className="mb-4">
                Unless otherwise agreed in a separate contract:
              </p>
              <ul className="list-none space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#525252] mt-1.5">•</span>
                  <span>All content on this website (text, images, code, design) is owned by Tavryz Studio and protected by applicable intellectual property laws.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#525252] mt-1.5">•</span>
                  <span>Project deliverables and ownership are defined in individual client agreements.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-display font-bold text-white mb-4 tracking-tight">
                4. Testimonials
              </h2>
              <p>
                By submitting a testimonial through our website, you grant Tavryz Studio permission to display it publicly on our website and marketing materials. You may request removal of your testimonial at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-display font-bold text-white mb-4 tracking-tight">
                5. Limitation of Liability
              </h2>
              <p>
                Tavryz Studio strives to keep website information accurate and up to date. However, we make no warranties about the completeness, reliability, or availability of the content. We are not liable for any damages arising from the use of or inability to use this website.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-display font-bold text-white mb-4 tracking-tight">
                6. External Links
              </h2>
              <p>
                Our website may contain links to external sites (e.g., client projects, social media). We are not responsible for the content or privacy practices of these third-party sites.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-display font-bold text-white mb-4 tracking-tight">
                7. Changes to Terms
              </h2>
              <p>
                We reserve the right to update these terms at any time. Changes will be posted on this page with an updated revision date. Your continued use of the site after changes are posted constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-display font-bold text-white mb-4 tracking-tight">
                8. Contact
              </h2>
              <p>
                For questions about these terms, contact us at{" "}
                <a href="mailto:tavryzofficial@gmail.com" className="text-white underline underline-offset-4 hover:text-[#a3a3a3] transition-colors">
                  tavryzofficial@gmail.com
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
