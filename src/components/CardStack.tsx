"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Image from "next/image";

interface CardItem {
  id: string;
  title: string;
  category: string;
  image: string;
  glowColor: string;
}

const CARDS_DATA: CardItem[] = [
  {
    id: "01",
    title: "AETHER Engine",
    category: "AI & Machine Learning",
    image: "/liquid_glass.jpg",
    glowColor: "#1E88E5",
  },
  {
    id: "02",
    title: "Aroush Works",
    category: "Web App Development",
    image: "/aroush_works.jpg",
    glowColor: "#90CAF9",
  },
  {
    id: "03",
    title: "Z Nectar",
    category: "Mobile App Development",
    image: "/z_nectar.jpg",
    glowColor: "#2563eb",
  },
  {
    id: "04",
    title: "ICCS Global Portal",
    category: "Cybersecurity & Compliance",
    image: "/iccs_global.jpg",
    glowColor: "#1E88E5",
  },
  {
    id: "05",
    title: "Cryptx DApp",
    category: "Blockchain & Web3",
    image: "/liquid_glass.jpg",
    glowColor: "#90CAF9",
  },
  {
    id: "06",
    title: "Cohesion Space",
    category: "UI/UX & Product Design",
    image: "/aroush_works.jpg",
    glowColor: "#2563eb",
  },
];

const SWIPE_THRESHOLD = 80;
const FLICK_VELOCITY = 0.3;
const COOLDOWN_MS = 2200;

export default function CardStack() {
  const [cards, setCards] = useState<CardItem[]>(CARDS_DATA);
  const pausedRef = useRef(false);
  const cooldownRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const dismissingRef = useRef(false);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 0, 200], [-15, 0, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 0.8, 1, 0.8, 0.5]);

  const dismissTopCard = useCallback(
    (direction: "left" | "right") => {
      dismissingRef.current = true;
      pausedRef.current = true;
      if (cooldownRef.current) clearTimeout(cooldownRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);

      const flyX = direction === "left" ? -400 : 400;
      animate(x, flyX, {
        type: "spring",
        stiffness: 200,
        damping: 25,
      }).then(() => {
        setCards((prev) => {
          const next = [...prev];
          const top = next.shift();
          if (top) next.push(top);
          return next;
        });
        x.set(0);
        dismissingRef.current = false;

        cooldownRef.current = setTimeout(() => {
          pausedRef.current = false;
        }, COOLDOWN_MS);
      });
    },
    [x]
  );

  // Auto-rotate ticker
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      if (!pausedRef.current) {
        setCards((prev) => {
          const next = [...prev];
          const top = next.shift();
          if (top) next.push(top);
          return next;
        });
      }
    }, 3500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (cooldownRef.current) clearTimeout(cooldownRef.current);
    };
  }, []);

  const handleDragStart = () => {
    pausedRef.current = true;
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleDragEnd = (
    _: never,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    const swipeDistance = info.offset.x;
    const swipeVelocity = info.velocity.x;

    if (swipeDistance > SWIPE_THRESHOLD || swipeVelocity > FLICK_VELOCITY) {
      dismissTopCard("right");
    } else if (
      swipeDistance < -SWIPE_THRESHOLD ||
      swipeVelocity < -FLICK_VELOCITY
    ) {
      dismissTopCard("left");
    } else {
      animate(x, 0, { type: "spring", stiffness: 300, damping: 25 }).then(
        () => {
          cooldownRef.current = setTimeout(() => {
            pausedRef.current = false;
          }, 1200);
        }
      );
    }
  };

  const handleMouseEnter = () => {
    pausedRef.current = true;
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    if (cooldownRef.current) clearTimeout(cooldownRef.current);
    cooldownRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, 800);
  };

  const stackVariants = {
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
      x: 60,
      y: 30,
      scale: 0.82,
      opacity: 0,
      zIndex: 0,
      rotate: 0,
    },
  };

  const getStackVariant = (index: number) => {
    if (index === 1) return "second";
    if (index === 2) return "third";
    return "hidden";
  };

  return (
    <div
      className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[400px] h-[360px] sm:h-[400px] flex items-center justify-center select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {cards.map((card, index) => {
        const isTop = index === 0;

        if (isTop) {
          return (
            <motion.div
              key={`top-${card.id}`}
              drag="x"
              dragElastic={0.7}
              // Only apply constraints when NOT dismissing
              dragConstraints={
                dismissingRef.current
                  ? { left: -9999, right: 9999 }
                  : { left: 0, right: 0 }
              }
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              style={{
                x,
                rotate,
                opacity,
                position: "absolute",
                transformOrigin: "bottom center",
              }}
              className="w-full h-full max-h-[320px] sm:max-h-[360px] z-[3] cursor-grab active:cursor-grabbing"
            >
              <div
                className="relative w-full h-full rounded-2xl bg-[#121212] border border-white/10 overflow-hidden"
                style={{
                  boxShadow: `0 15px 35px -10px ${card.glowColor}60, 0 0 25px 2px ${card.glowColor}30, 0 0 0 1px ${card.glowColor}25, 0 30px 60px -15px rgba(0,0,0,0.95)`,
                }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] z-10"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${card.glowColor}, transparent)`,
                    boxShadow: `0 0 14px 2px ${card.glowColor}`,
                  }}
                />

                {/* Swipe hints */}
                <motion.div
                  className="absolute top-4 right-4 z-20"
                  style={{ opacity: useTransform(x, [0, 60], [0, 1]) }}
                >
                  <span className="text-[9px] font-mono text-white/60 uppercase tracking-wider">
                    Swipe →
                  </span>
                </motion.div>
                <motion.div
                  className="absolute top-4 left-4 z-20"
                  style={{ opacity: useTransform(x, [-60, 0], [1, 0]) }}
                >
                  <span className="text-[9px] font-mono text-white/60 uppercase tracking-wider">
                    ← Swipe
                  </span>
                </motion.div>

                <div className="relative w-full h-[65%] overflow-hidden bg-zinc-950">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90" />
                </div>

                <div className="p-5 flex flex-col justify-between h-[35%] bg-[#121212]">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[9px] uppercase font-mono tracking-widest text-[#c4cad6]/60 mb-1 block">
                        {card.category}
                      </span>
                      <h3 className="text-lg font-display font-bold text-white tracking-tight leading-tight">
                        {card.title}
                      </h3>
                    </div>
                    <span className="font-mono text-[10px] text-[#c4cad6]/40 font-bold bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                      {card.id}
                    </span>
                  </div>
                  <div
                    className="absolute bottom-0 right-0 w-32 h-32 rounded-full filter blur-[50px] opacity-25 pointer-events-none transition-colors duration-500"
                    style={{ backgroundColor: card.glowColor }}
                  />
                </div>
              </div>
            </motion.div>
          );
        }

        const variant = getStackVariant(index);
        return (
          <motion.div
            key={card.id}
            variants={stackVariants}
            animate={variant}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            style={{
              position: "absolute",
              transformOrigin: "bottom center",
            }}
            className="w-full h-full max-h-[320px] sm:max-h-[360px]"
          >
            <div
              className="relative w-full h-full rounded-2xl bg-[#121212] border border-white/10 overflow-hidden"
              style={{ boxShadow: "0 30px 60px -15px rgba(0,0,0,0.95)" }}
            >
              <div className="relative w-full h-[65%] overflow-hidden bg-zinc-950">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-90" />
              </div>
              <div className="p-5 flex flex-col justify-between h-[35%] bg-[#121212]">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[9px] uppercase font-mono tracking-widest text-[#c4cad6]/60 mb-1 block">
                      {card.category}
                    </span>
                    <h3 className="text-lg font-display font-bold text-white tracking-tight leading-tight">
                      {card.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-[#c4cad6]/40 font-bold bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                    {card.id}
                  </span>
                </div>
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-full filter blur-[50px] opacity-25 pointer-events-none transition-colors duration-500"
                  style={{ backgroundColor: card.glowColor }}
                />
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Dot indicator */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
        {cards.slice(0, Math.min(cards.length, 6)).map((_, i) => (
          <motion.div
            key={i}
            className="w-1.5 h-1.5 rounded-full"
            animate={{
              backgroundColor:
                i === 0 ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.15)",
              scale: i === 0 ? 1.2 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          />
        ))}
      </div>
    </div>
  );
}
