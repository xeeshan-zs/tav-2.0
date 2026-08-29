import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Parallax({
  children,
  speed = 0.15,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: "up" | "down";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const factor = direction === "up" ? -1 : 1;
  const y = useTransform(scrollYProgress, [0, 1], [factor * speed * 100, factor * -speed * 100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
