import Header from "../components/Header";
import Footer from "../components/Footer";
import HashScroll from "../components/HashScroll";
import Hero from "../components/sections/Hero";
import ValueStrip from "../components/sections/ValueStrip";
import MenuTeaser from "../components/sections/MenuTeaser";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import About from "../components/sections/About";
import GalleryStrip from "../components/sections/GalleryStrip";
import Visit from "../components/sections/Visit";

export default function Home({ locale }: { locale: string }) {
  return (
    <>
      <HashScroll />
      <Header />
      <main>
        <Hero locale={locale} />
        <ValueStrip locale={locale} />
        <MenuTeaser locale={locale} />
        <FeaturedProducts locale={locale} />
        <About locale={locale} />
        <GalleryStrip locale={locale} />
        <Visit locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
