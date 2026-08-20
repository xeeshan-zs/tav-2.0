import { useState, useEffect } from "react";
import { Mail, Copy, Check, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";
import Magnetic from "@/components/Magnetic";
import { motion } from "framer-motion";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const email = "tavryzofficial@gmail.com";

  useEffect(() => {
    const updateClock = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setCurrentTime(formatter.format(new Date()));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const socials = [
    { name: "GitHub", href: "https://github.com/xeeshan-zs", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/company/tavryz", icon: Linkedin },
    { name: "Twitter", href: "https://x.com", icon: Twitter },
  ];

  return (
    <footer id="contact" className="bg-transparent relative overflow-hidden z-10 sm:pb-0 pb-24">
      {/* Editorial Contact Section */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        {/* Main CTA - Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden mb-20 max-w-5xl mx-auto"
        >
          {/* Glass background */}
          <div className="absolute inset-0 bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl rounded-3xl" />
          
          <div className="relative p-10 md:p-16 lg:p-20">
            {/* Top label */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-white/20" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-[#737373]">
                Get in touch
              </span>
            </div>

            {/* Editorial headline */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-14">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-[1.1] tracking-[-0.03em] mb-6">
                  Let&apos;s build<br />
                  <span className="text-[#737373]">something great.</span>
                </h2>
                <p className="text-sm text-[#a3a3a3] leading-relaxed max-w-md body-text">
                  Tell us about your project. We&apos;ll outline feasibility, technical specs, timeline, and exact scope within 48 hours.
                </p>
              </div>

              {/* Contact cards */}
              <div className="flex flex-col gap-4">
                {/* Email card */}
                <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-5 hover:bg-white/[0.06] transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#737373]">Email</span>
                    <Mail className="w-4 h-4 text-[#737373]" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white font-medium truncate mr-4">{email}</span>
                    <button
                      onClick={handleCopy}
                      className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#a3a3a3] hover:text-white transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3 h-3" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Availability card */}
                <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#737373]">Availability</span>
                    <span className="w-2 h-2 rounded-full bg-white"></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-white font-medium">Accepting new projects</span>
                    <span className="text-[10px] font-mono text-[#737373]">Q3/Q4 2026</span>
                  </div>
                </div>

                {/* Time card */}
                <div className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#737373]">Local Time</span>
                    <span className="text-[10px] font-mono text-[#737373]">PKT</span>
                  </div>
                  <span className="text-sm text-white font-medium font-mono">{currentTime || "00:00:00"}</span>
                </div>

                {/* CTA button */}
                <Magnetic range={20} strength={0.2}>
                  <a
                    href={`mailto:${email}?subject=Project%20Inquiry`}
                    className="flex items-center justify-center gap-2 bg-white text-black font-bold text-[13px] py-4 rounded-full hover:bg-zinc-200 transition-colors active:scale-[0.97] shadow-[0_2px_8px_rgba(255,255,255,0.1)]"
                  >
                    Start a Conversation
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Footer */}
        <div className="border-t border-white/[0.06] pt-10">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
            {/* Brand */}
            <div className="flex flex-col gap-3 max-w-xs">
              <span className="font-display font-extrabold text-sm uppercase tracking-widest text-white">
                Tavryz Studio®
              </span>
              <p className="text-[11px] text-[#a3a3a3] leading-relaxed body-text">
                Custom software engineering studio. High-converting web platforms, mobile apps, and digital systems.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#737373]">Navigate</span>
              <div className="flex gap-6">
                {["Domains", "Projects", "FAQ"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-[13px] text-[#a3a3a3] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#737373]">Connect</span>
              <div className="flex items-center gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Magnetic key={social.name} range={15} strength={0.3}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center text-[#737373] bg-white/[0.04] border border-white/[0.06] hover:text-white hover:bg-white/[0.08] transition-colors active:scale-[0.95]"
                        aria-label={social.name}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    </Magnetic>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-[#525252]">
            <span>© {new Date().getFullYear()} Tavryz Studio. All rights reserved.</span>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
