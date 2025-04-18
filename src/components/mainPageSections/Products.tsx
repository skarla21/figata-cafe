import { useTranslations } from "next-intl";
import ImageLightbox from "../ImageLightbox";

export default function Products() {
  const productsText = useTranslations("products");

  return (
    <div className="grid md:grid-cols-2 gap-12 items-center py-12">
      {/* Left side: Section Title and Description */}
      <div className="space-y-6 md:order-2">
        <h2 className="text-4xl font-bold text-figata-cup">
          {productsText("title")}
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          {productsText("description")}
        </p>
      </div>

      {/* Right side: Product placeholders */}
      <div className="grid grid-cols-2 gap-6 md:order-1">
        <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg transform hover:scale-105 transition-all aspect-square">
          <ImageLightbox
            src="/assets/imgs/product1.jpg"
            alt="Product 1"
            className="object-cover"
            width={600}
            height={600}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg transform hover:scale-105 transition-all aspect-square">
          <ImageLightbox
            src="/assets/imgs/product2.jpg"
            alt="Product 2"
            className="object-cover"
            width={600}
            height={600}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg transform hover:scale-105 transition-all aspect-square">
          <ImageLightbox
            src="/assets/imgs/product3.jpg"
            alt="Product 3"
            className="object-cover"
            width={600}
            height={600}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>
        <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg transform hover:scale-105 transition-all aspect-square">
          <ImageLightbox
            src="/assets/imgs/product4.jpg"
            alt="Product 4"
            className="object-cover"
            width={600}
            height={600}
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
