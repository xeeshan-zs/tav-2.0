import { Helmet } from "react-helmet-async";
import { AboutContent } from "@/components/AboutContent";

export function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About — Tavryz Studio</title>
        <meta name="description" content="A software engineering and design studio built on precision, ownership, and accountability." />
      </Helmet>
      <AboutContent />
    </>
  );
}
