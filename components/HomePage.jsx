import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import PartnerSection from "@/components/sections/PartnerSection";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import WhyChoosePakDev from "./sections/WhyChoosePakDev";
import TeamSection from "./sections/TeamSection";

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Projects />
      <PartnerSection />
      <Services />
      <WhyChoosePakDev />
      <WhyChoose />
      <Testimonials />
      <TeamSection />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
