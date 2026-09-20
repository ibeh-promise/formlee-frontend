import Image from "next/image";
import Hero from "@/components/landingpage/Hero";
import ContactForm from "@/components/landingpage/ContactForm";
import HowItWorks from "@/components/landingpage/HowItWorks";
import Features from "@/components/landingpage/Features";
import { DashboardInteractiveSection } from "@/components/landingpage/DashboardInteractiveSection";
import CtaSection from "@/components/landingpage/CtaSection";

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans">
      <Hero />
      <HowItWorks />
      <ContactForm />
      <Features />
      <DashboardInteractiveSection />
      <CtaSection />
    </div>
  );
}
