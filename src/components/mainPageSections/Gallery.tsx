"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { getGalleryImages, CloudinaryImage } from "@/actions/cloudinary";
import ImageCarousel from "../ImageCarousel";

export default function Gallery() {
  const galleryText = useTranslations("gallery");
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadImages() {
      try {
        setLoading(true);
        const fetchedImages = await getGalleryImages();
        setImages(fetchedImages);
        setError(null);
      } catch (err) {
        console.error("Failed to load gallery images:", err);
        setError("Failed to load gallery images. Please try again later.");
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, []);

  return (
    <div className="md:space-y-12">
      <h2 className="text-4xl font-bold text-figata-cup text-center">
        {galleryText("title")}
      </h2>

      <div className="w-full">
        {loading ? (
          <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-figata-cup border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-red-500 text-center p-8 bg-red-50 rounded-xl">
            {error}
          </div>
        ) : images.length === 0 ? (
          <div className="text-gray-500 text-center p-8 bg-gray-50 rounded-xl">
            No images found in the gallery.
          </div>
        ) : (
          <ImageCarousel images={images} />
        )}
      </div>
    </div>
  );
}
