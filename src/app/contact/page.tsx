import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ContactPage() {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setStatus("sending");
    setError("");

    try {
      // 1. Save to Firestore
      await addDoc(collection(db, "contact_messages"), {
        subject: subject.trim() || "No Subject",
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        createdAt: serverTimestamp(),
      });

      // 2. Open mail app with pre-filled fields
      const mailtoSubject = encodeURIComponent(subject.trim() || "Project Inquiry");
      const mailtoBody = encodeURIComponent(
        `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nMessage:\n${message.trim()}`
      );
      const mailtoUrl = `mailto:tavryzofficial@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      window.open(mailtoUrl, "_blank");

      setStatus("sent");
      // Reset form after success
      setTimeout(() => {
        setSubject("");
        setName("");
        setEmail("");
        setMessage("");
        setStatus("idle");
      }, 3000);
    } catch (err) {
      console.error("Failed to send message:", err);
      setError("Something went wrong. Please try again or email us directly.");
      setStatus("idle");
    }
  };

  const inputClasses =
    "w-full bg-white/[0.04] border border-white/[0.08] rounded-none px-4 py-3 text-sm text-white placeholder:text-[#525252] outline-none focus:border-[#10b981] focus:bg-white/[0.06] transition-colors body-text";

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <section className="py-24 px-6 bg-transparent relative z-10 min-h-screen">
          <div className="max-w-3xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="w-8 h-px bg-white/20" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#737373]">
                  Contact
                </span>
                <div className="w-8 h-px bg-white/20" />
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-[1.1] mb-4">
                Get in Touch
              </h1>
              <p className="text-sm text-[#bbcabf] max-w-lg mx-auto leading-relaxed body-text">
                Fill out the form below and we&apos;ll open your email client with the details pre-filled. A copy is also saved for our records.
              </p>
            </motion.div>

            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-black/60 border border-outline-variant/30 p-8 md:p-10 space-y-5"
            >
              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] font-mono text-[#737373] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className={inputClasses}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] font-mono text-[#737373] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={inputClasses}
                    required
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] font-mono text-[#737373] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={inputClasses}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.25em] font-mono text-[#737373] mb-2">
                  Message
                </label>
                <textarea
                  placeholder="Tell us about your project..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  className={`${inputClasses} resize-none`}
                  required
                />
              </div>

              {error && (
                <p className="text-red-400 text-xs font-mono">{error}</p>
              )}

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={`w-full font-mono text-[12px] uppercase font-bold tracking-wider py-4 px-8 flex items-center justify-center gap-2 transition-colors duration-200 active:scale-[0.97] ${
                  status === "sent"
                    ? "bg-[#10b981] text-black"
                    : "bg-[#10b981] hover:bg-[#4edea3] text-black"
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : status === "sent" ? (
                  <>
                    <Check className="w-4 h-4" />
                    Sent — Check your email
                  </>
                ) : (
                  <>
                    Submit <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
