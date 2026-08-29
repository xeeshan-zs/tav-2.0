import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const HOLD_MS = 1300;

export function IntroSplash() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => setVisible(false), reduceMotion ? 0 : HOLD_MS);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-splash"
          className="fixed inset-0 z-[100] flex items-center justify-center dark:bg-[#07080A] bg-[#FAFBFC]"
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="grid-overlay-dark pointer-events-none absolute inset-0" />
          <span
            data-text="TAVRYZ"
            className="intro-glitch font-display text-4xl font-extrabold tracking-[0.22em] dark:text-white text-[#111827] sm:text-6xl"
          >
            TAVRYZ
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
