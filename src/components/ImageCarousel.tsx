"use client";
import { useState, useCallback, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import ImageLightbox from "./ImageLightbox";

interface CloudinaryImage {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
}

interface ImageCarouselProps {
  images: CloudinaryImage[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  const nextImage = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, [images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevImage();
      } else if (e.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [prevImage, nextImage]);

  // If no images, show a loading state
  if (!images.length) {
    return (
      <div className="w-full aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-figata-cup border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full aspect-video">
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        {images.map((image, index) => (
          <div
            key={image.public_id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <ImageLightbox
              src={image.secure_url}
              alt={`Gallery image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 100vw, 80vw"
              className="object-cover"
              priority={index === currentIndex}
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer text-figata-cup p-2 rounded-full z-10 shadow-md"
        aria-label="Previous image"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer text-figata-cup p-2 rounded-full z-10 shadow-md"
        aria-label="Next image"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Pagination indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-figata-cup w-4"
                : "bg-white/60 hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
