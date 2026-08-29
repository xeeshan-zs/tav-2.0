export function GridGlow({
  variant = "hero",
  theme = "dark",
  className = "",
}: {
  variant?: "hero" | "section";
  theme?: "light" | "dark";
  className?: string;
}) {
  const height = variant === "hero" ? "h-[720px]" : "h-[420px]";
  const gridClass = theme === "dark" ? "grid-overlay-dark" : "grid-overlay";
  const glowOpacity = theme === "dark" ? 1 : 0.5;

  return (
    <div className={`pointer-events-none absolute inset-x-0 top-0 ${height} overflow-hidden ${className}`}>
      <div className={`${gridClass} absolute inset-0`} />

      <div
        className="glow-blob left-1/2 top-[-180px] h-[480px] w-[700px] -translate-x-1/2"
        style={{
          background: "radial-gradient(circle, rgba(0,124,125,0.25), rgba(0,166,166,0.08) 45%, transparent 65%)",
          opacity: 0.7 * glowOpacity,
        }}
      />

      <div
        className="glow-blob left-[15%] top-[60px] h-[320px] w-[320px]"
        style={{
          background: "radial-gradient(circle, rgba(0,166,166,0.2), rgba(0,124,125,0.06) 50%, transparent 70%)",
          opacity: 0.55 * glowOpacity,
        }}
      />

      <div
        className="glow-blob right-[12%] top-[120px] h-[260px] w-[260px]"
        style={{
          background: "radial-gradient(circle, rgba(2,66,67,0.22), rgba(0,124,125,0.06) 50%, transparent 70%)",
          opacity: 0.5 * glowOpacity,
        }}
      />

      {variant === "hero" && (
        <div
          className="glow-blob left-1/2 bottom-[-100px] h-[300px] w-[500px] -translate-x-1/2"
          style={{
            background: "radial-gradient(circle, rgba(0,124,125,0.1), transparent 60%)",
            opacity: 0.35 * glowOpacity,
          }}
        />
      )}
    </div>
  );
}
