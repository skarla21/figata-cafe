import { useTranslations } from "next-intl";
import ImageLightbox from "../ImageLightbox";

export default function Products() {
  const productsText = useTranslations("products");

  // Array of product images for easy expansion
  const productImages = [
    { src: "/assets/imgs/product1.jpg", alt: "Product 1" },
    { src: "/assets/imgs/product2.jpg", alt: "Product 2" },
    { src: "/assets/imgs/product3.jpg", alt: "Product 3" },
    { src: "/assets/imgs/product4.jpg", alt: "Product 4" },
    { src: "/assets/imgs/product5.jpg", alt: "Product 5" },
    { src: "/assets/imgs/product6.jpg", alt: "Product 6" },
    { src: "/assets/imgs/product7.jpg", alt: "Product 7" },
    { src: "/assets/imgs/product8.jpg", alt: "Product 8" },
  ];

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
        {productImages.map((product, index) => (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg transform hover:scale-105 transition-all aspect-square"
          >
            <ImageLightbox
              src={product.src}
              alt={product.alt}
              className="object-cover"
              width={600}
              height={600}
              style={{ width: "auto", height: "auto" }}
              priority={index < 4} // Only prioritize first 4 images
            />
          </div>
        ))}
      </div>
    </div>
  );
}
