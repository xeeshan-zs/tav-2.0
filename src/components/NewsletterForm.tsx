import { useState, FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setEmail("");
      setSubmitted(false);
    }, 3000);
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-w-sm items-center gap-2 rounded-full border dark:border-white/10 border-black/[0.08] dark:bg-white/[0.04] bg-white/80 p-1.5 pl-5 backdrop-blur-sm">
      <input
        type="email"
        required
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full bg-transparent text-sm dark:text-white text-[var(--text-primary)] placeholder:dark:text-slate-500 placeholder:text-[var(--text-muted)] outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow transition-transform hover:-translate-y-0.5"
      >
        {submitted ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
      </button>
    </form>
  );
}
