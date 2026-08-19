"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate random stable particles
    const generated: Particle[] = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 2,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * -20,
      opacity: Math.random() * 0.3 + 0.1,
    }));
    setParticles(generated);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#030816]">
      {/* Heavy ambient 3D glowing circles for Blue Mode */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -60, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[-20%] left-[-10%] w-[500px] md:w-[800px] h-[500px] md:h-[800px] rounded-full bg-[#0D47A1]/[0.1] blur-[150px]"
      />
      
      <motion.div
        animate={{
          x: [0, -30, 50, 0],
          y: [0, 50, -40, 0],
          scale: [1, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[600px] md:w-[900px] h-[600px] md:h-[900px] rounded-full bg-[#2196F3]/[0.04] blur-[180px]"
      />

      {/* Floating crisp particles in Blue Mode */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-500 to-cyan-300"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            boxShadow: "0 0 8px rgba(33, 150, 243, 0.3)",
          }}
          animate={{
            y: ["0vh", "-100vh"],
            x: ["0vw", `${Math.random() * 10 - 5}vw`],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "linear",
            delay: p.delay,
          }}
        />
      ))}

      {/* Grid line overlay in Blue Mode (subtle blue grid lines) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(33,150,243,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(33,150,243,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
    </div>
  );
}
