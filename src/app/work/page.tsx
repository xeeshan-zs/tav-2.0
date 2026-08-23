import Navbar from "@/components/Navbar";
import CaseStudies from "@/components/CaseStudies";
import Footer from "@/components/Footer";

export default function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <CaseStudies />
      </main>
      <Footer />
    </>
  );
}
