import { useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const pageVariants = {
  initial: {
    opacity: 0,
    y: 12,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.2,
      ease,
    },
  },
};

export function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
