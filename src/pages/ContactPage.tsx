import { useState, FormEvent } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, Send } from "lucide-react";
import { GridGlow } from "@/components/GridGlow";
import { Eyebrow } from "@/components/Badge";

const CONTACT_EMAIL = "tavryzofficial@gmail.com";

export function ContactPage() {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const inputClass =
    "w-full rounded-xl border dark:border-white/[0.06] border-black/[0.08] dark:bg-white/[0.03] bg-white/80 px-4 py-3 text-sm dark:text-white text-[var(--text-primary)] placeholder:dark:text-slate-500 placeholder:text-[var(--text-muted)] outline-none transition-all duration-300 focus:border-accent-teal focus:dark:shadow-[0_0_0_2px_rgba(0,124,125,0.15),0_0_20px_-4px_rgba(0,124,125,0.15)] dark:focus:bg-white/[0.04] focus:bg-white backdrop-blur-sm";

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    const mailSubject = encodeURIComponent(subject.trim() || "Project Inquiry");
    const body = encodeURIComponent(`Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`);
    window.open(`mailto:${CONTACT_EMAIL}?subject=${mailSubject}&body=${body}`, "_blank");

    setStatus("sent");
    setTimeout(() => {
      setSubject("");
      setName("");
      setEmail("");
      setMessage("");
      setStatus("idle");
    }, 3000);
  }

  return (
    <>
      <Helmet>
        <title>Contact — Tavryz Studio</title>
        <meta name="description" content="Get in touch with Tavryz Studio for custom software engineering, design, and growth services." />
      </Helmet>
      <section className="relative min-h-screen px-6 pb-24 pt-40">
        <GridGlow variant="hero" />
        <div className="relative mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <Eyebrow>
              <span className="mx-auto">Contact</span>
            </Eyebrow>
            <h1 className="mb-4 font-display text-4xl font-extrabold leading-[1.1] tracking-tight dark:text-white text-[var(--text-primary)] md:text-5xl">
              Get in <span className="text-gradient">Touch.</span>
            </h1>
            <p className="mx-auto max-w-lg text-sm leading-relaxed dark:text-slate-400 text-[var(--text-secondary)]">
              Fill out the form below and we&apos;ll open your email client with the details pre-filled.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border dark:border-white/[0.06] border-black/[0.06] dark:bg-white/[0.03] bg-white/80 p-8 backdrop-blur-sm md:p-10"
            style={{
              boxShadow: "var(--glass-shadow)",
            }}
          >
            <div>
              <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] dark:text-slate-500 text-[var(--text-muted)]">Subject</label>
              <input type="text" placeholder="Project Inquiry" value={subject} onChange={(e) => setSubject(e.target.value)} className={inputClass} />
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] dark:text-slate-500 text-[var(--text-muted)]">Name</label>
                <input type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} required />
              </div>
              <div>
                <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] dark:text-slate-500 text-[var(--text-muted)]">Email</label>
                <input type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClass} required />
              </div>
            </div>

            <div>
              <label className="mb-2 block font-mono text-[10px] uppercase tracking-[0.25em] dark:text-slate-500 text-[var(--text-muted)]">Message</label>
              <textarea
                placeholder="Tell us about your project..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className={`${inputClass} resize-none`}
                required
              />
            </div>

            <button
              type="submit"
              disabled={status === "sent"}
              className="btn-shine flex w-full items-center justify-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-[12px] font-bold uppercase tracking-wider text-white dark:shadow-[0_0_0_1px_rgba(0,124,125,0.2),0_4px_20px_-2px_rgba(0,124,125,0.4),0_8px_40px_-4px_rgba(0,124,125,0.2)] shadow-glow transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70"
            >
              {status === "sent" ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Sent — Check your email
                </>
              ) : (
                <>
                  Submit <Send className="h-4 w-4" />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
