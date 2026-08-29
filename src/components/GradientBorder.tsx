import { type ReactNode } from "react";

export function GradientBorder({
  children,
  className = "",
  glowOnHover = true,
}: {
  children: ReactNode;
  className?: string;
  glowOnHover?: boolean;
}) {
  return (
    <div className={`group relative ${className}`}>
      <div
        className="absolute -inset-[1px] rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, #007C7D, transparent, #00A6A6, transparent)",
          animation: "borderRotate 4s linear infinite",
        }}
      />
      <div className="relative rounded-2xl bg-ink-light">{children}</div>
      {glowOnHover && (
        <div className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30"
          style={{ background: "radial-gradient(circle, rgba(0,166,166,0.4), transparent 70%)" }}
        />
      )}
    </div>
  );
}
