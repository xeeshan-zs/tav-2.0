const GRADIENT_ID = "tavryzMarkGradient";

export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={GRADIENT_ID} x1="10" y1="18" x2="110" y2="104" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#024243" />
          <stop offset="45%" stopColor="#007C7D" />
          <stop offset="100%" stopColor="#00A6A6" />
        </linearGradient>
      </defs>
      <path
        d="M20 26 H100"
        stroke={`url(#${GRADIENT_ID})`}
        strokeWidth="18"
        strokeLinecap="round"
      />
      <path
        d="M28 26 L60 98"
        stroke={`url(#${GRADIENT_ID})`}
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M92 26 L60 98"
        stroke={`url(#${GRADIENT_ID})`}
        strokeWidth="18"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 30 L58 88"
        stroke="currentColor"
        strokeOpacity="0.15"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  className = "",
  markClassName = "h-9 w-9",
  variant = "light",
}: {
  className?: string;
  markClassName?: string;
  variant?: "dark" | "light";
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} />
      <span
        className={`font-display font-extrabold tracking-[0.14em] text-lg ${
          variant === "dark" ? "text-[#07080A]" : "dark:text-white text-[var(--text-primary)]"
        }`}
      >
        TAVRYZ
      </span>
    </span>
  );
}
