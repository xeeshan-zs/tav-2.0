import { useState, useEffect } from "react";
import { Mail, Copy, Check, Github, Linkedin, Twitter, Power } from "lucide-react";
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

  return (
    <footer id="contact" className="bg-transparent relative overflow-hidden z-10 w-full pb-6">
      {/* Contact Section - Centered layout with metadata cards */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-none overflow-hidden mb-20 max-w-5xl mx-auto"
        >
          {/* Glass background */}
          <div className="absolute inset-0 bg-white/[0.03] border border-white/[0.06] backdrop-blur-xl rounded-none" />

          <div className="relative p-10 md:p-16 lg:p-20 text-center">
            {/* Title & Subtitle */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Ready to Initialize?
            </h2>
            <p className="text-base md:text-lg text-[#bbcabf] mb-12 max-w-xl mx-auto leading-relaxed body-text">
              Engage our engineering team to architect your next high-performance digital product.
            </p>

            {/* Interactive Cards Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12 text-left">
              {/* Email Card */}
              <div className="bg-black/60 border border-outline-variant/30 rounded-none p-5 hover:bg-black/80 transition-colors group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-[#737373]">Email</span>
                  <Mail className="w-3.5 h-3.5 text-[#737373]" />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <span className="text-[13px] text-white font-medium truncate mr-2">{email}</span>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-[9px] font-mono font-bold uppercase tracking-wider text-[#bbcabf] hover:text-[#10b981] transition-colors self-start sm:self-auto"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Availability Card */}
              <div className="bg-black/60 border border-outline-variant/30 rounded-none p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-[#737373]">Availability</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[13px] text-white font-medium">Accepting new projects</span>
                  <span className="text-[9px] font-mono text-[#737373]">Q3/Q4 2026</span>
                </div>
              </div>

              {/* Local Time Card */}
              <div className="bg-black/60 border border-outline-variant/30 rounded-none p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] uppercase tracking-[0.25em] font-mono text-[#737373]">Local Time</span>
                  <span className="text-[9px] font-mono text-[#737373]">PKT</span>
                </div>
                <span className="text-[13px] text-white font-medium font-mono block mt-1">{currentTime || "00:00:00"}</span>
              </div>
            </div>

            {/* Sharp Matrix Button */}
            <a
              href={`mailto:${email}?subject=Project%20Inquiry`}
              className="btn-primary rounded-none bg-[#10b981] hover:bg-[#4edea3] text-black font-bold font-mono tracking-widest text-[12px] uppercase py-4 px-8 flex items-center justify-center gap-2 mx-auto active:scale-[0.97] max-w-xs transition-colors duration-200"
            >
              Start Project <Power className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="border-t border-white/[0.06] pt-10">
          <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
            {/* Brand */}
            <div className="flex flex-col gap-3 max-w-xs">
              <img 
                src="/tav files/tavryz-wordmark.png" 
                alt="Tavryz Studio" 
                className="h-4.5 w-auto object-contain self-start" 
              />
              <p className="text-[11px] text-[#bbcabf] leading-relaxed body-text">
                Custom software engineering studio. High-converting web platforms, mobile apps, and digital systems.
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-4 font-mono text-[11px]">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#737373]">Navigate</span>
              <div className="flex gap-6">
                {["Services", "Work", "Process"].map((link) => (
                  <a
                    key={link}
                    href={`#${link === "Services" ? "domains" : link === "Work" ? "projects" : "process"}`}
                    className="text-[#bbcabf] hover:text-[#10b981] transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Socials */}
            <div className="flex flex-col gap-4">
              <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#737373]">Connect</span>
              <div className="flex items-center gap-3">
                {[
                  { name: "Twitter", href: "https://x.com", icon: Twitter },
                  { name: "LinkedIn", href: "https://linkedin.com/company/tavryz", icon: Linkedin },
                  { name: "GitHub", href: "https://github.com/xeeshan-zs", icon: Github },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <Magnetic key={social.name} range={15} strength={0.3}>
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full flex items-center justify-center text-[#737373] bg-white/[0.04] border border-white/[0.06] hover:text-white hover:bg-white/[0.08] hover:border-[#10b981] hover:text-[#10b981] transition-colors active:scale-[0.95]"
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
              <a href="/privacy" className="hover:text-[#10b981] transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-[#10b981] transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
