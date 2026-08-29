import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { ThemeToggle } from "./ThemeToggle";
import { services } from "@/lib/services";

const preLinks = [{ name: "Home", path: "/" }, { name: "About", path: "/about" }];
const postLinks = [{ name: "Team", path: "/team" }];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onPop = () => setPathname(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    setOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  // Listen for react-router navigation
  useEffect(() => {
    const handleClick = () => setTimeout(() => setPathname(window.location.pathname), 0);
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  const isServiceRoute = pathname.startsWith("/services");

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur-xl transition-all duration-500 ${
          scrolled
            ? "dark:shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_8px_40px_-8px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.03)] shadow-lg"
            : ""
        }`}
        style={{
          borderColor: "var(--nav-border)",
          backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
        }}
      >
        <Link to="/" className="pl-1">
          <Logo markClassName="h-8 w-8" />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {preLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                pathname === link.path
                  ? "dark:bg-white/10 bg-accent/[0.08] text-[var(--text-primary)]"
                  : "dark:text-slate-400 text-[var(--text-secondary)] dark:hover:text-white hover:text-[var(--text-primary)]"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              to="/services"
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                isServiceRoute
                  ? "dark:bg-white/10 bg-accent/[0.08] text-[var(--text-primary)]"
                  : "dark:text-slate-400 text-[var(--text-secondary)] dark:hover:text-white hover:text-[var(--text-primary)]"
              }`}
            >
              Services
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </Link>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 top-full mt-3 w-[560px] -translate-x-1/2 rounded-2xl p-3 dark:bg-[#0A0C0E]/95 bg-white/95 dark:border-white/[0.06] border-black/[0.08] backdrop-blur-xl"
                  style={{
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 16px 64px -12px rgba(0,0,0,0.7), 0 4px 20px -4px rgba(0,124,125,0.08), inset 0 1px 0 rgba(255,255,255,0.03)",
                  }}
                >
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link
                          key={service.slug}
                          to={`/services/${service.slug}`}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors dark:hover:bg-white/[0.06] hover:bg-black/[0.03]"
                        >
                          <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-gradient-soft">
                            <Icon className="h-4 w-4 text-accent-teal" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[13px] font-semibold text-[var(--text-primary)]">{service.title}</span>
                            <span className="block truncate text-[11px] dark:text-slate-500 text-[var(--text-muted)]">{service.shortDescription}</span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                  <Link
                    to="/services"
                    className="mt-2 flex items-center justify-center gap-2 rounded-xl border-t dark:border-white/[0.06] border-black/[0.06] py-3 font-mono text-[11px] font-bold uppercase tracking-wider text-accent-teal hover:text-accent-bright"
                  >
                    View All Services <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {postLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                pathname === link.path
                  ? "dark:bg-white/10 bg-accent/[0.08] text-[var(--text-primary)]"
                  : "dark:text-slate-400 text-[var(--text-secondary)] dark:hover:text-white hover:text-[var(--text-primary)]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Link
            to="/contact"
            className="btn-shine inline-flex items-center rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Book a Call
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full dark:border-white/[0.08] border-black/[0.08] dark:text-white text-[var(--text-primary)] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div
          className="absolute left-4 right-4 top-[72px] flex max-h-[75vh] flex-col gap-1 overflow-y-auto rounded-2xl p-3 dark:bg-[#0A0C0E]/95 bg-white/95 dark:border-white/[0.06] border-black/[0.08] backdrop-blur-xl md:hidden"
          style={{
            boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 16px 64px -12px rgba(0,0,0,0.7), 0 4px 20px -4px rgba(0,124,125,0.08)",
          }}
        >
          {preLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-xl px-4 py-3 text-sm font-medium ${
                pathname === link.path
                  ? "dark:bg-white/10 bg-accent/[0.08] text-[var(--text-primary)]"
                  : "dark:text-slate-300 text-[var(--text-secondary)]"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <button
            onClick={() => setMobileServicesOpen((v) => !v)}
            className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium ${
              isServiceRoute
                ? "dark:bg-white/10 bg-accent/[0.08] text-[var(--text-primary)]"
                : "dark:text-slate-300 text-[var(--text-secondary)]"
            }`}
          >
            Services
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {mobileServicesOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-0.5 py-1 pl-2">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      to={`/services/${service.slug}`}
                      className="rounded-lg px-4 py-2.5 text-[13px] dark:text-slate-400 text-[var(--text-secondary)] dark:hover:bg-white/[0.06] hover:bg-black/[0.03] dark:hover:text-white hover:text-[var(--text-primary)]"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {postLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`rounded-xl px-4 py-3 text-sm font-medium ${
                pathname === link.path
                  ? "dark:bg-white/10 bg-accent/[0.08] text-[var(--text-primary)]"
                  : "dark:text-slate-300 text-[var(--text-secondary)]"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="mt-1 flex items-center gap-2">
            <ThemeToggle />
            <Link
              to="/contact"
              className="flex-1 rounded-xl bg-brand-gradient px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
