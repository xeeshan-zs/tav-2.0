import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  drift: number;
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated: Particle[] = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 5 + 2,
      duration: Math.random() * 25 + 25,
      delay: Math.random() * -25,
      opacity: Math.random() * 0.25 + 0.08,
      drift: Math.random() * 10 - 5,
    }));
    setParticles(generated);
  }, []);

  if (!particles.length) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#030816]">
      {/* CSS-animated ambient glow blobs — much cheaper than framer-motion */}
      <div
        className="absolute top-[-20%] left-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full bg-[#ffffff]/[0.07] blur-[150px] will-change-transform"
        style={{ animation: "floatBlob1 30s ease-in-out infinite" }}
      />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[600px] md:w-[900px] h-[600px] md:h-[900px] rounded-full bg-[#ffffff]/[0.03] blur-[180px] will-change-transform"
        style={{ animation: "floatBlob2 35s ease-in-out infinite" }}
      />

      {/* Floating crisp particles — pure CSS animations */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-r from-white to-gray-300 will-change-transform"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            boxShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
            animation: `floatParticle ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(33,150,243,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(33,150,243,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
    </div>
  );
}
