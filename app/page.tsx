import Image from "next/image";
import Header from "@/app/components/landingpage/Header"
import Hero from "@/app/components/layout/Hero"
import ContactForm from "@/app/components/landingpage/ContactForm"
import HowItWorks from "@/app/components/landingpage/HowItWorks"
import Features from "@/app/components/landingpage/Features"
import {DashboardInteractiveSection} from "@/app/components/landingpage/DashboardInteractiveSection"
import CtaSection from "@/app/components/landingpage/CtaSection"
import Footer from "@/app/components/layout/Foorter"

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans">
      <Header />
      <Hero />
      <HowItWorks />
      <ContactForm />
      <Features />
      <DashboardInteractiveSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
