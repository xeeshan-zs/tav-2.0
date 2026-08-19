import type { Metadata } from "next";
import { Geist, Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ParticleBackground from "@/components/ParticleBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tavryz Studio — Custom Web Platforms & Mobile Apps",
  description: "Tavryz is a premium software engineering and design studio. We craft high-performance web systems, native Android apps, and custom brands with absolute precision.",
  keywords: ["custom software development", "web app development", "android app development", "design studio", "software studio", "Tavryz", "Tavryz Studio"],
  robots: "index, follow",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${jakarta.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-[#0a0e1a] text-[#EDEDED] selection:bg-[#2196F3]/30 selection:text-white relative">
        <ParticleBackground />
        {children}
      </body>
    </html>
  );
}
