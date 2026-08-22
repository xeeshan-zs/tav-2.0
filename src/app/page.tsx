import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Domains from "@/components/Domains";
import CaseStudies from "@/components/CaseStudies";
import Process from "@/components/Process";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Domains />
        <CaseStudies />
        <Process />
      </main>
      <Footer />
    </>
  );
}

