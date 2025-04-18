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

  // Get indexes for left and right images
  const leftIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const rightIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

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
    <div className="relative w-full h-[60vh] rounded-xl">
      {/* Left adjacent image (half-visible, reduced opacity) - only visible on lg screens and above */}
      <div
        className="absolute top-0 left-0 h-full w-[25%] transform -translate-x-1/2 opacity-50 z-10 hidden lg:block"
        style={{ pointerEvents: "none" }}
      >
        <div className="relative h-full w-[200%]">
          <div className="absolute inset-0" style={{ borderRadius: "12px" }}>
            <ImageLightbox
              src={images[leftIndex].secure_url}
              alt={`Gallery image ${leftIndex + 1}`}
              fill
              sizes="25vw"
              className="object-contain"
              style={{ borderRadius: "12px" }}
            />
          </div>
        </div>
      </div>

      {/* Main image container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {images.map((image, index) => (
          <div
            key={image.public_id}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
              index === currentIndex
                ? "opacity-100 z-20"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="relative flex items-center justify-center h-full w-full">
              <div
                className="relative"
                style={{
                  maxHeight: "95%",
                  maxWidth: "85%",
                  borderRadius: "12px",
                }}
              >
                <ImageLightbox
                  src={image.secure_url}
                  alt={`Gallery image ${index + 1}`}
                  width={image.width}
                  height={image.height}
                  className="object-contain max-h-[calc(60vh-20px)] max-w-full mx-auto"
                  priority={index === currentIndex}
                  style={{ borderRadius: "12px" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Right adjacent image (half-visible, reduced opacity) - only visible on lg screens and above */}
      <div
        className="absolute top-0 right-0 h-full w-[25%] transform translate-x-1/2 opacity-50 z-10 hidden lg:block"
        style={{ pointerEvents: "none" }}
      >
        <div className="relative h-full w-[200%] right-full">
          <div className="absolute inset-0" style={{ borderRadius: "12px" }}>
            <ImageLightbox
              src={images[rightIndex].secure_url}
              alt={`Gallery image ${rightIndex + 1}`}
              fill
              sizes="25vw"
              className="object-contain"
              style={{ borderRadius: "12px" }}
            />
          </div>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer text-figata-cup p-2 rounded-full z-30 shadow-md"
        aria-label="Previous image"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer text-figata-cup p-2 rounded-full z-30 shadow-md"
        aria-label="Next image"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Pagination indicators - moved inside the image area */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1.5 z-30 bg-black/20 px-3 py-1.5 rounded-full">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex
                ? "bg-figata-cup w-4"
                : "bg-white/80 hover:bg-white hover:scale-110 transition-all duration-300 cursor-pointer"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
