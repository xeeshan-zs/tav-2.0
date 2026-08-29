import { Link } from "react-router-dom";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  external?: boolean;
};

export function Button({ href, children, variant = "primary", className = "", external = false }: ButtonProps) {
  const base =
    "btn-shine inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 active:scale-[0.97]";

  const styles: Record<string, string> = {
    primary: "bg-brand-gradient text-white shadow-glow hover:shadow-lg hover:-translate-y-0.5",
    outline: "border border-white/15 text-white bg-white/5 hover:border-accent-orange/50 hover:-translate-y-0.5",
    ghost: "text-white hover:text-accent-orange",
  };

  const props = external ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Link to={href} className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}
