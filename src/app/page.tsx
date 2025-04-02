import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import Hero from "@/components/mainPageSections/Hero";
import About from "@/components/mainPageSections/About";
import Gallery from "@/components/mainPageSections/Gallery";
import Contact from "@/components/mainPageSections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      <SectionWrapper id="hero">
        <Hero />
      </SectionWrapper>

      <SectionWrapper id="about">
        <About />
      </SectionWrapper>

      <SectionWrapper id="gallery">
        <Gallery />
      </SectionWrapper>

      <SectionWrapper id="contact">
        <Contact />
      </SectionWrapper>

      <Footer />
    </main>
  );
}
