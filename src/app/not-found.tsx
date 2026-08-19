"use client";

import { useState, useEffect, useMemo } from "react";
import { Search, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");
  const [sweepAngle, setSweepAngle] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Radar sweep animation
  useEffect(() => {
    setMounted(true);
    let animationFrame: number;
    let startTime: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      setSweepAngle((elapsed / 30) % 360);
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Pre-compute static ping positions (no Math on render)
  const pings = useMemo(() => [
    { angle: 45, distance: 80, x: 56.57, y: 56.57 },
    { angle: 120, distance: 120, x: -60, y: 103.92 },
    { angle: 200, distance: 90, x: -84.57, y: -30.78 },
    { angle: 310, distance: 110, x: 70.71, y: -84.27 },
  ], []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0e1a] relative overflow-hidden">
      {/* Background radar grid */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Concentric circles */}
        {[1, 2, 3, 4].map((ring) => (
          <div
            key={ring}
            className="absolute rounded-full border border-white/[0.04]"
            style={{
              width: `${ring * 200}px`,
              height: `${ring * 200}px`,
            }}
          />
        ))}

        {/* Cross hairs */}
        <div className="absolute w-full h-px bg-white/[0.04]" />
        <div className="absolute h-full w-px bg-white/[0.04]" />

        {/* Sweep line */}
        <div
          className="absolute w-[400px] h-[400px] origin-center"
          style={{
            transform: `rotate(${sweepAngle}deg)`,
          }}
        >
          <div className="absolute top-0 left-1/2 w-px h-1/2 bg-gradient-to-b from-[#ffffff]/60 to-transparent" />
        </div>

        {/* Sweep glow */}
        <div
          className="absolute w-[400px] h-[400px] origin-center pointer-events-none"
          style={{
            transform: `rotate(${sweepAngle}deg)`,
          }}
        >
          <div
            className="absolute top-0 left-1/2 w-[200px] h-[200px] -translate-x-1/2 origin-bottom"
            style={{
              background: "conic-gradient(from -90deg, transparent 0deg, rgba(65, 174, 172, 0.08) 60deg, transparent 90deg)",
            }}
          />
        </div>

        {/* Contact pings synced to sweep */}
        {pings.map((ping, i) => {
          const isLit = mounted && (Math.abs(sweepAngle - ping.angle) < 30 || Math.abs(sweepAngle - ping.angle + 360) < 30);

          return (
            <div
              key={i}
              className="absolute"
              style={{
                left: `calc(50% + ${ping.x}px)`,
                top: `calc(50% + ${ping.y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  isLit ? "bg-[#ffffff] shadow-[0_0_12px_rgba(65,174,172,0.6)]" : "bg-white/20"
                }`}
              />
              {isLit && (
                <div className="absolute inset-0 w-2 h-2 rounded-full bg-[#ffffff] animate-ping opacity-40" />
              )}
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Outline-mix numeral */}
        <div className="relative mb-8 select-none">
          <span
            className="text-[10rem] md:text-[14rem] font-display font-bold leading-none"
            style={{
              WebkitTextStroke: "2px rgba(255,255,255,0.15)",
              color: "transparent",
            }}
          >
            404
          </span>
          <span
            className="absolute inset-0 text-[10rem] md:text-[14rem] font-display font-bold leading-none"
            style={{
              WebkitTextStroke: "2px rgba(65,174,172,0.4)",
              color: "transparent",
              clipPath: mounted ? `polygon(0 0, 100% 0, 100% ${50 + Math.sin((sweepAngle * Math.PI) / 180) * 50}%, 0 ${50 + Math.sin((sweepAngle * Math.PI) / 180) * 50}%)` : 'none',
            }}
          >
            404
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-3 tracking-tight">
          Page not found
        </h1>
        <p className="text-sm text-[#a3a3a3] mb-10 max-w-md body-text">
          The page you're looking for doesn't exist or has been moved. Try searching below.
        </p>

        {/* Inline search */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (searchQuery.trim()) {
              window.open(`https://www.google.com/search?q=site:tavryz.com+${encodeURIComponent(searchQuery.trim())}`, "_blank");
            }
          }}
          className="flex items-center w-full max-w-md neo-inset rounded-full px-5 py-3 gap-3 border border-white/[0.06]"
        >
          <Search className="w-4 h-4 text-[#a3a3a3]/60 flex-shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="flex-1 bg-transparent text-sm text-white placeholder:text-[#a3a3a3]/40 outline-none"
          />
          <button
            type="submit"
            className="neo-circle w-8 h-8 rounded-full flex items-center justify-center text-white hover:bg-white/[0.05] transition-colors"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* Back to home */}
        <Link
          href="/"
          className="mt-8 text-[11px] uppercase tracking-[0.2em] font-bold text-[#a3a3a3] hover:text-white transition-colors flex items-center gap-2"
        >
          Back to Home
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
