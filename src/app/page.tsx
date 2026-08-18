import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Domains from "@/components/Domains";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Domains />
        <CaseStudies />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}

