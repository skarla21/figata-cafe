"use client";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import ImageLightbox from "../ImageLightbox";
import { getProductsImages, CloudinaryImage } from "@/actions/cloudinary";

export default function Products() {
  const productsText = useTranslations("products");
  const [images, setImages] = useState<CloudinaryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadImages() {
      try {
        setLoading(true);
        const fetchedImages = await getProductsImages();
        setImages(fetchedImages);
        setError(null);
      } catch (err) {
        console.error("Failed to load product images:", err);
        setError(productsText("error"));
      } finally {
        setLoading(false);
      }
    }

    loadImages();
  }, [productsText]);

  return (
    <div className="flex flex-col py-12 space-y-12">
      {/* Section Title and Description */}
      <div className="text-center max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-figata-cup mb-6">
          {productsText("title")}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          {productsText("description")}
        </p>
      </div>

      {/* Product images grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 px-4">
        {loading ? (
          // Loading state
          Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg aspect-square flex items-center justify-center"
            >
              <div className="w-12 h-12 border-4 border-figata-cup border-t-transparent rounded-full animate-spin"></div>
            </div>
          ))
        ) : error ? (
          // Error state
          <div className="col-span-full text-red-500 text-center p-8 bg-red-50 rounded-xl">
            {error}
          </div>
        ) : images.length === 0 ? (
          // No images state
          <div className="col-span-full text-gray-500 text-center p-8 bg-gray-50 rounded-xl">
            {productsText("noImages")}
          </div>
        ) : (
          // Images grid
          images.map((image, index) => (
            <div
              key={image.public_id}
              className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg transform hover:scale-105 transition-all aspect-square"
            >
              <ImageLightbox
                src={image.secure_url}
                alt={`Product ${index + 1}`}
                className="object-cover"
                width={image.width}
                height={image.height}
                style={{ width: "auto", height: "auto" }}
                priority={index < 4} // Only prioritize first 4 images
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
