import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { MarketData } from "@/components/sections/MarketData";
import { Features } from "@/components/sections/Features";
import { TextReveal } from "@/components/ui/TextReveal";
import { AIDemo } from "@/components/sections/AIDemo";
import { Pricing } from "@/components/sections/Pricing";
import { CallToAction } from "@/components/sections/CallToAction";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9FAFB]">
      <Navbar />
      <Hero />
      <MarketData />
      <Features />
      <TextReveal text="Financial intelligence re-imagined for the modern age." />
      <AIDemo />
      <Pricing />
      <CallToAction />
      <Footer />
    </main>
  );
}
