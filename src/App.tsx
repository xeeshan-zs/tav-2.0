import { lazy, Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ParticleBackground from "@/components/ParticleBackground";

const HomePage = lazy(() => import("./app/page"));
const PrivacyPage = lazy(() => import("./app/privacy/page"));
const TermsPage = lazy(() => import("./app/terms/page"));
const NotFoundPage = lazy(() => import("./app/not-found"));

function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  // Prevent text cursor / caret appearing on body when clicking
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isFormField = target.closest("input, textarea, select, [contenteditable='true'], .ql-editor");
      if (!isFormField && document.activeElement && document.activeElement !== document.body) {
        (document.activeElement as HTMLElement).blur();
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="min-h-full flex flex-col bg-black text-[#fafafa] selection:bg-white/20 selection:text-white relative">
      <ParticleBackground />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
