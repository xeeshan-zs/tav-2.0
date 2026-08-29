import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#07080A",
          light: "#0E0F11",
          soft: "#16181A",
        },
        surface: {
          DEFAULT: "#0E0F11",
          alt: "#16181A",
          mist: "#232425",
        },
        slate: {
          950: "#07080A",
        },
        accent: {
          orange: "#007C7D",
          amber: "#00A6A6",
          rust: "#024243",
          teal: "#007C7D",
          bright: "#00A6A6",
          deep: "#024243",
        },
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "system-ui", "sans-serif"],
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #024243 0%, #007C7D 55%, #00A6A6 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, rgba(0,124,125,0.12) 0%, rgba(0,166,166,0.12) 100%)",
        "grid-pattern":
          "linear-gradient(rgba(7,8,10,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(7,8,10,0.045) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "44px 44px",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shine: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(120%)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        floatSlow: "floatSlow 7s ease-in-out infinite",
        shine: "shine 1.6s ease-in-out infinite",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0,124,125,0.08), 0 20px 60px -20px rgba(0,166,166,0.35)",
        card: "0 1px 0 rgba(255,255,255,0.04) inset, 0 20px 40px -24px rgba(0,0,0,0.6)",
      },
    },
  },
  plugins: [],
};

export default config;
