import Navbar from "@/components/Navbar";
import SectionWrapper from "@/components/SectionWrapper";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />

      {/* Hero Section */}
      <SectionWrapper id="hero">
        <div className="text-center space-y-8">
          <h1 className="text-6xl md:text-8xl font-bold text-amber-900 mb-8 animate-fade-in">
            Figata
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Where every cup tells a story
          </p>
        </div>
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper id="about">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-amber-900">Our Story</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Founded in 2015, Figata has been the heart of the community,
              serving artisanal coffee crafted with passion...
            </p>
          </div>
          <div
            className="relative h-96 rounded-2xl overflow-hidden 
                         bg-gray-100 shadow-lg transform hover:scale-105 transition-all"
          >
            {/* Placeholder for image */}
          </div>
        </div>
      </SectionWrapper>

      {/* Gallery Section */}
      <SectionWrapper id="gallery">
        <div className="space-y-12">
          <h2 className="text-4xl font-bold text-amber-900 text-center">
            Gallery
          </h2>
          <div className="columns-1 md:columns-3 gap-4">
            {/* Cloudinary images will go here */}
          </div>
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact">
        <div className="max-w-2xl mx-auto space-y-8">
          <h2 className="text-4xl font-bold text-amber-900 text-center">
            Find Us
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Info</h3>
              <p className="text-gray-600">123 Coffee Street</p>
              <p className="text-gray-600">contact@figata.com</p>
            </div>
            <div className="h-64 bg-gray-100 rounded-xl overflow-hidden">
              {/* Google Map Embed */}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
