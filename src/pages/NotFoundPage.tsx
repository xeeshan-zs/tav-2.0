import { Link } from "react-router-dom";
import { GridGlow } from "@/components/GridGlow";

export function NotFoundPage() {
  return (
    <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <GridGlow variant="hero" />
      <div className="relative z-10">
        <span className="text-gradient font-display text-7xl font-extrabold">404</span>
        <h1 className="mb-4 mt-6 font-display text-2xl font-bold tracking-tight text-white">Page not found</h1>
        <p className="mx-auto mb-8 max-w-sm text-sm leading-relaxed text-slate-400">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <Link
          to="/"
          className="btn-shine inline-flex items-center justify-center rounded-full bg-brand-gradient px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-glow"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
