import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import Hero from "@/components/mainPageSections/Hero";
import About from "@/components/mainPageSections/About";
import Products from "@/components/mainPageSections/Products";
import Gallery from "@/components/mainPageSections/Gallery";
import Contact from "@/components/mainPageSections/Contact";
import DecorativeBackground from "@/components/DecorativeBackground";

export default async function Home() {
  return (
    <main className="relative">
      <Navbar />

      <div className="relative">
        <DecorativeBackground />
        <div className="relative z-10">
          <SectionWrapper id="hero">
            <Hero />
          </SectionWrapper>

          <SectionWrapper id="about">
            <About />
          </SectionWrapper>

          <SectionWrapper id="products">
            <Products />
          </SectionWrapper>

          <SectionWrapper id="gallery">
            <Gallery />
          </SectionWrapper>

          <SectionWrapper id="findus">
            <Contact />
          </SectionWrapper>
        </div>
      </div>

      <Footer />
    </main>
  );
}
