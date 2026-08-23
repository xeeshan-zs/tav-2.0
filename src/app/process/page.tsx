import Navbar from "@/components/Navbar";
import ProcessComponent from "@/components/Process";
import Footer from "@/components/Footer";

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ProcessComponent />
      </main>
      <Footer />
    </>
  );
}
