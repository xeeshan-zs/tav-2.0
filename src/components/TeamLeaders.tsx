import { motion } from "framer-motion";
import { User } from "lucide-react";
import { leaders } from "@/lib/team";
import { RevealGroup, revealItem } from "@/components/Reveal";

export function TeamLeaders() {
  return (
    <RevealGroup className="flex flex-wrap justify-center gap-x-16 gap-y-14">
      {leaders.map((leader) => (
        <motion.div key={leader.name} variants={revealItem} className="flex w-60 flex-col items-center text-center">
          <div className="relative mb-5 h-60 w-60">
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, rgba(0,124,125,0.3), transparent 75%)" }}
            />
            <div className="relative h-60 w-60 overflow-hidden rounded-full border-2 dark:border-white/10 border-black/[0.08] bg-[#0a0c0f]">
              {leader.image ? (
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="h-full w-full object-cover object-[center_15%]"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-[#111318]">
                  <User className="h-24 w-24 text-slate-600" strokeWidth={1.25} />
                </div>
              )}
            </div>
          </div>
          <h3 className="font-display text-lg font-bold dark:text-white text-[var(--text-primary)]">{leader.name}</h3>
          <p className="mt-1 text-sm italic text-accent-teal">{leader.title}</p>
        </motion.div>
      ))}
    </RevealGroup>
  );
}
