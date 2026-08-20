import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — Tavryz Studio",
  description: "Privacy Policy for Tavryz Studio. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-[#fafafa] relative z-10">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-32">
        {/* Back link */}
        <Link
          href="/"
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
            Privacy Policy
          </h1>
          <p className="text-[13px] text-[#737373] font-mono">
            Last updated: August 21, 2026
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12 text-[14px] text-[#a3a3a3] leading-relaxed body-text">
          <section>
            <h2 className="text-lg font-display font-bold text-white mb-4 tracking-tight">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              When you visit Tavryz Studio&apos;s website or contact us, we may collect the following information:
            </p>
            <ul className="list-none space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-[#525252] mt-1.5">•</span>
                <span><strong className="text-white">Personal Information:</strong> Name, email address, and any details you provide when submitting a contact form or testimonial.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#525252] mt-1.5">•</span>
                <span><strong className="text-white">Usage Data:</strong> Browser type, device information, pages visited, time spent on pages, and referring URLs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#525252] mt-1.5">•</span>
                <span><strong className="text-white">Cookies:</strong> We use essential cookies to maintain site functionality. We do not use third-party advertising cookies.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-display font-bold text-white mb-4 tracking-tight">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-none space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-[#525252] mt-1.5">•</span>
                <span>Respond to your inquiries and project requests</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#525252] mt-1.5">•</span>
                <span>Display testimonials you choose to submit on our website</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#525252] mt-1.5">•</span>
                <span>Improve our website and services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#525252] mt-1.5">•</span>
                <span>Communicate with you about projects, updates, or changes to this policy</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-display font-bold text-white mb-4 tracking-tight">
              3. Data Storage & Security
            </h2>
            <p>
              Your data is stored securely using Firebase (Google Cloud infrastructure). We implement industry-standard security measures to protect your personal information. Testimonials submitted through our website are stored in Firestore and are publicly visible. We do not sell, trade, or rent your personal information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-bold text-white mb-4 tracking-tight">
              4. Third-Party Services
            </h2>
            <p className="mb-4">We use the following third-party services:</p>
            <ul className="list-none space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="text-[#525252] mt-1.5">•</span>
                <span><strong className="text-white">Firebase:</strong> Hosting, Firestore database, and analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#525252] mt-1.5">•</span>
                <span><strong className="text-white">GitHub:</strong> Code repository and CI/CD workflows</span>
              </li>
            </ul>
            <p className="mt-4">
              These services may collect usage data in accordance with their own privacy policies. We encourage you to review their policies for more information.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-bold text-white mb-4 tracking-tight">
              5. Your Rights
            </h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal data. To exercise any of these rights, or to request removal of a testimonial you submitted, contact us at{" "}
              <a href="mailto:tavryzofficial@gmail.com" className="text-white underline underline-offset-4 hover:text-[#a3a3a3] transition-colors">
                tavryzofficial@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-bold text-white mb-4 tracking-tight">
              6. Changes to This Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of the site after changes constitutes acceptance of the revised policy.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-display font-bold text-white mb-4 tracking-tight">
              7. Contact
            </h2>
            <p>
              For questions about this policy, reach us at{" "}
              <a href="mailto:tavryzofficial@gmail.com" className="text-white underline underline-offset-4 hover:text-[#a3a3a3] transition-colors">
                tavryzofficial@gmail.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
