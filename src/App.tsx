import { HelmetProvider, Helmet } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollToTopOnNavigate } from "./components/ScrollToTopOnNavigate";
import { PageTransition } from "./components/PageTransition";
import { IntroSplash } from "./components/IntroSplash";
import { CursorTrail } from "./components/CursorTrail";
import { ScrollProgressBar } from "./components/ScrollProgressBar";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { TeamPage } from "./pages/TeamPage";
import { WorkPage } from "./pages/WorkPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailPage } from "./pages/ServiceDetailPage";
import { BrandPage } from "./pages/BrandPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsPage } from "./pages/TermsPage";
import { NotFoundPage } from "./pages/NotFoundPage";

export default function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
          <Helmet>
            <title>Tavryz Studio — Custom Software, Design &amp; Growth Engineering</title>
            <meta name="description" content="Tavryz is a software engineering studio building high-performance web platforms, mobile apps, AI systems, and growth for teams who want things built right." />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Tavryz Studio — Custom Software, Design &amp; Growth Engineering" />
            <meta property="og:description" content="We build web platforms, mobile apps, AI systems, and growth marketing for teams who want things built right." />
            <meta property="og:site_name" content="Tavryz Studio" />
            <meta property="og:url" content="https://tavryz.com" />
          </Helmet>
          <body className="flex min-h-screen flex-col font-sans antialiased" style={{ color: "var(--text-primary)", background: "var(--bg)" }}>
            <IntroSplash />
            <ScrollProgressBar />
            <CursorTrail />
            <ScrollToTopOnNavigate />
            <Navbar />
            <main className="flex-1">
              <ErrorBoundary>
                <PageTransition>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/work" element={<WorkPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/services/:slug" element={<ServiceDetailPage />} />
                    <Route path="/brand" element={<BrandPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                  </Routes>
                </PageTransition>
              </ErrorBoundary>
            </main>
            <Footer />
            <ScrollToTop />
          </body>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
