import Image from "next/image";
import Header from "@/app/components/landingpage/Header"
import Hero from "@/app/components/landingpage/Hero"
import ContactForm from "@/app/components/landingpage/ContactForm"

export default function Home() {
  return (
    <div className="bg-zinc-50 font-sans">
      <Header />
      <Hero />
      <ContactForm />
    </div>
  );
}
