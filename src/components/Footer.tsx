import { useRef } from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, ArrowUpRight, Mail } from "lucide-react";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { NewsletterForm } from "./NewsletterForm";
import { getServiceBySlug } from "@/lib/services";
import { MagneticButton } from "./MagneticButton";
import { motion, useInView } from "framer-motion";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Work", path: "/work" },
  { label: "Team", path: "/team" },
  { label: "Contact", path: "/contact" },
];

const footerServiceSlugs = [
  "web-development",
  "mobile-app-development",
  "ai-machine-learning",
  "cybersecurity-compliance",
  "seo",
  "media-creative-services",
];

const resourceLinks = [
  { label: "Brand Guide", path: "/brand" },
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Terms of Service", path: "/terms" },
];

const socials = [
  { name: "LinkedIn", href: "https://linkedin.com/company/tavryz", icon: Linkedin },
  { name: "X", href: "https://x.com", icon: Twitter },
];

function SocialLink({ s, index }: { s: typeof socials[0]; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.a
      ref={ref}
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={s.name}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -3, scale: 1.1 }}
      className="flex h-10 w-10 items-center justify-center rounded-full dark:border-white/10 border-black/[0.08] dark:text-slate-400 text-[var(--text-secondary)] transition-colors hover:border-accent-teal/40 hover:text-accent-teal"
    >
      <s.icon className="h-4 w-4" />
    </motion.a>
  );
}

export function Footer() {
  const footerServices = footerServiceSlugs.map((slug) => getServiceBySlug(slug)).filter(Boolean);

  return (
    <footer className="relative z-10 overflow-hidden border-t dark:border-white/5 border-black/[0.06] dark:bg-[#07080A] bg-[var(--bg-subtle)]">
      <div className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <Reveal>
          <div className="glass-strong relative mx-auto mb-20 max-w-4xl overflow-hidden rounded-3xl p-10 text-center md:p-16">
            <div
              className="glow-blob left-1/2 top-[-140px] h-[360px] w-[500px] -translate-x-1/2 opacity-70"
              style={{ background: "radial-gradient(circle, rgba(0,124,125,0.2), rgba(0,166,166,0.06) 45%, transparent 65%)" }}
            />
            <div
              className="glow-blob left-[20%] bottom-[-80px] h-[200px] w-[200px] opacity-40"
              style={{ background: "radial-gradient(circle, rgba(0,166,166,0.15), transparent 70%)" }}
            />
            <div className="relative">
              <h2 className="mb-4 font-display text-4xl font-extrabold tracking-tight dark:text-white text-[var(--text-primary)] md:text-5xl">
                Ready to start?
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
                Bring your next project to our engineering team and let&apos;s build something that actually performs.
              </p>
              <MagneticButton>
                <Link
                  to="/contact"
                  className="btn-shine mx-auto inline-flex max-w-xs items-center justify-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-sm font-bold uppercase tracking-wider text-white shadow-glow transition-transform hover:-translate-y-0.5"
                >
                  Start a Project <ArrowUpRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-12 border-t dark:border-white/5 border-black/[0.06] pt-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-4">
            <Logo markClassName="h-8 w-8" />
            <p className="max-w-xs text-[13px] leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
              Custom software engineering studio. High-converting web platforms, mobile apps, and digital
              systems.
            </p>
            <a
              href="mailto:tavryzofficial@gmail.com"
              className="flex items-center gap-2 text-sm dark:text-slate-400 text-[var(--text-secondary)] hover:text-accent-teal"
            >
              <Mail className="h-4 w-4" />
              tavryzofficial@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] dark:text-slate-500 text-[var(--text-muted)]">Quick Links</span>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-sm dark:text-slate-400 text-[var(--text-secondary)] hover:text-accent-teal">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] dark:text-slate-500 text-[var(--text-muted)]">Services</span>
            <div className="flex flex-col gap-2.5">
              {footerServices.map((s) => (
                <Link key={s!.slug} to={`/services/${s!.slug}`} className="text-sm dark:text-slate-400 text-[var(--text-secondary)] hover:text-accent-teal">
                  {s!.title}
                </Link>
              ))}
              <Link to="/services" className="text-sm font-semibold text-accent-teal hover:text-accent-bright">
                View All →
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] dark:text-slate-500 text-[var(--text-muted)]">Resources</span>
            <div className="flex flex-col gap-2.5">
              {resourceLinks.map((link) => (
                <Link key={link.path} to={link.path} className="text-sm dark:text-slate-400 text-[var(--text-secondary)] hover:text-accent-teal">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-10 border-t dark:border-white/5 border-black/[0.06] pt-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <span className="mb-3 block font-display text-base font-bold dark:text-white text-[var(--text-primary)]">Stay Updated</span>
            <p className="mb-4 text-[13px] leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
              Occasional notes on what we&apos;re building and shipping. No spam.
            </p>
            <NewsletterForm />
          </div>

          <div>
            <span className="mb-4 block font-mono text-[10px] uppercase tracking-[0.25em] dark:text-slate-500 text-[var(--text-muted)]">
              Follow Us
            </span>
            <div className="flex items-center gap-3">
              {socials.map((s, i) => (
                <SocialLink key={s.name} s={s} index={i} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t dark:border-white/5 border-black/[0.06] pt-6 text-[11px] font-mono dark:text-slate-500 text-[var(--text-muted)] sm:flex-row">
          <span>© {new Date().getFullYear()} Tavryz Studio. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-accent-teal">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-accent-teal">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
