"use client";

import { useState, useEffect } from "react";
import { Mail, Copy, Check, Github, Linkedin, Twitter, Sparkles } from "lucide-react";
import Magnetic from "@/components/Magnetic";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const email = "tavryzofficial@gmail.com";

  // Dynamic Pakistan clock
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
    <footer id="contact" className="bg-transparent border-t border-white/[0.06] relative overflow-hidden z-10">
      {/* Main CTA Section - Glass strong with neomorphic inner elements */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="glass-strong p-8 md:p-16 rounded-3xl border border-white/[0.06] text-center relative overflow-hidden mb-20 max-w-4xl mx-auto">
          {/* Decorative grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(65,174,172,0.002)_1px,transparent_1px),linear-gradient(90deg,rgba(65,174,172,0.002)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
          
          <span className="text-[10px] uppercase tracking-widest font-mono text-[#A1E9E0] neo-inset px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-6 caption-text">
            <Sparkles className="w-3 h-3" /> Ready when you are
          </span>

          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white leading-tight max-w-xl mx-auto mb-4 heading-lg">
            Ready to elevate your product? <span className="text-[#AEABC5]">Let&apos;s build together.</span>
          </h2>
          <p className="text-xs md:text-sm text-[#c4cad6] leading-relaxed max-w-md mx-auto mb-10 body-text">
            Tell us about your project constraints. We&apos;ll outline feasibility, technical specs, timeline, and exact scope estimations.
          </p>

          {/* Email Card Interaction - Neomorphic buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <Magnetic range={30} strength={0.3}>
              <a
                href={`mailto:${email}?subject=Project%20Inquiry`}
                className="neo-button w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-black px-6 py-4 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                {email}
              </a>
            </Magnetic>
            
            <Magnetic range={30} strength={0.3}>
              <button
                onClick={handleCopy}
                className="neo-button-dark w-full sm:w-auto flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] text-white px-6 py-4 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#41AEAC]" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Email
                  </>
                )}
              </button>
            </Magnetic>
          </div>

          {/* Studio Clock & Status - Neomorphic inset */}
          <div className="flex items-center justify-center gap-6 mt-10 text-[10px] font-mono text-[#c4cad6] caption-text">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#41AEAC]"></span>
              <span>STUDIO: REMOTE WORLDWIDE</span>
            </div>
            <div className="h-3 w-px bg-white/[0.08]"></div>
            <div>
              <span>PST TIME (PKT): {currentTime || "00:00:00"}</span>
            </div>
          </div>
        </div>

        {/* Bottom footer links */}
        <div className="border-t border-white/[0.06] pt-10 flex flex-col md:flex-row gap-6 justify-between items-center text-center md:text-left">
          <div className="flex flex-col gap-2">
            <span className="font-display font-extrabold text-sm uppercase tracking-widest text-white">
              Tavryz Studio®
            </span>
            <p className="text-[11px] text-[#c4cad6] max-w-xs leading-relaxed body-text">
              Custom software engineering studio. High-converting web platforms, mobile apps, and digital systems.
            </p>
          </div>

          {/* Social icons - Neomorphic circles */}
          <div className="flex items-center gap-3">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <Magnetic key={social.name} range={20} strength={0.35}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neo-circle w-10 h-10 rounded-full flex items-center justify-center text-[#AEABC5]"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                </Magnetic>
              );
            })}
          </div>
        </div>

        {/* Legal copyrights */}
        <div className="mt-12 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-[#AEABC5]/60 caption-text">
          <span>© {new Date().getFullYear()} Tavryz Studio. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#41AEAC] pulse-teal"></span> All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
