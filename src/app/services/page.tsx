import Navbar from "@/components/Navbar";
import Domains from "@/components/Domains";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Domains />
      </main>
      <Footer />
    </>
  );
}
