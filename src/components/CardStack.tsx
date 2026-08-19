"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface CardItem {
  id: string;
  title: string;
  category: string;
  image: string;
  glowColor: string; // Hex color for glow effects
}

const CARDS_DATA: CardItem[] = [
  {
    id: "01",
    title: "AETHER Engine",
    category: "AI & Machine Learning",
    image: "/liquid_glass.jpg",
    glowColor: "#41AEAC", // Teal accent
  },
  {
    id: "02",
    title: "Aroush Works",
    category: "Web App Development",
    image: "/aroush_works.jpg",
    glowColor: "#A1E9E0", // Cyan accent
  },
  {
    id: "03",
    title: "Z Nectar",
    category: "Mobile App Development",
    image: "/z_nectar.jpg",
    glowColor: "#41AEAC", // Teal accent
  },
  {
    id: "04",
    title: "ICCS Global Portal",
    category: "Cybersecurity & Compliance",
    image: "/iccs_global.jpg",
    glowColor: "#A1E9E0", // Cyan accent
  },
];

export default function CardStack() {
  const [cards, setCards] = useState<CardItem[]>(CARDS_DATA);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const rotateCards = () => {
    setCards((prev) => {
      const next = [...prev];
      const top = next.shift();
      if (top) {
        next.push(top);
      }
      return next;
    });
  };

  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(rotateCards, 3000);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);

  // Framer Motion variants mapping relative order in array to visual attributes
  // Index 0: Top Card
  // Index 1: 2nd Card
  // Index 2: 3rd Card
  // Index 3+: Hidden/Exiting Card
  const variants = {
    top: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      zIndex: 3,
      rotate: 0,
    },
    second: {
      x: 20,
      y: 10,
      scale: 0.94,
      opacity: 0.8,
      zIndex: 2,
      rotate: 0,
    },
    third: {
      x: 40,
      y: 20,
      scale: 0.88,
      opacity: 0.6,
      zIndex: 1,
      rotate: 0,
    },
    hidden: {
      x: [0, -200, 100, 100],
      y: [0, 40, 20, 20],
      scale: [1, 0.92, 0.82, 0.82],
      opacity: [1, 0, 0, 0],
      zIndex: 0,
      rotate: [0, -12, 0, 0],
      transition: {
        times: [0, 0.35, 0.45, 1],
        duration: 0.85,
      },
    },
  };

  const getVariant = (index: number) => {
    if (index === 0) return "top";
    if (index === 1) return "second";
    if (index === 2) return "third";
    return "hidden";
  };

  return (
    <div
      className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[400px] h-[360px] sm:h-[400px] flex items-center justify-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {cards.map((card, index) => {
        const variant = getVariant(index);
        const isTop = index === 0;

        return (
          <motion.div
            key={card.id}
            variants={variants}
            animate={variant}
            initial={index >= 3 ? "hidden" : variant}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 24,
            }}
            style={{
              position: "absolute",
              transformOrigin: "bottom center",
            }}
            className="w-full h-full max-h-[320px] sm:max-h-[360px]"
          >
            <div
              className="relative w-full h-full rounded-2xl bg-[#121212] border border-white/10 overflow-hidden transition-all duration-500"
              style={{
                boxShadow: isTop
                  ? `0 20px 45px -15px ${card.glowColor}40, 0 0 0 1px ${card.glowColor}25, 0 30px 60px -15px rgba(0,0,0,0.95)`
                  : "0 30px 60px -15px rgba(0,0,0,0.95)",
              }}
            >
              {/* Glowing top accent border for the active top card */}
              {isTop && (
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] z-10"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${card.glowColor}, transparent)`,
                  }}
                />
              )}

              {/* Card Preview Image */}
              <div className="relative w-full h-[65%] overflow-hidden bg-zinc-950">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90" />
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex flex-col justify-between h-[35%] bg-[#121212]">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[9px] uppercase font-mono tracking-widest text-[#AEABC5]/60 mb-1 block">
                      {card.category}
                    </span>
                    <h3 className="text-lg font-display font-bold text-white tracking-tight leading-tight">
                      {card.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-[#AEABC5]/40 font-bold bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                    {card.id}
                  </span>
                </div>

                {/* Subtle light leak/glow in the corner */}
                <div
                  className="absolute bottom-0 right-0 w-20 h-20 rounded-full filter blur-[35px] opacity-10 pointer-events-none transition-colors duration-500"
                  style={{
                    backgroundColor: card.glowColor,
                  }}
                />
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
