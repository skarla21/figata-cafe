import { useTranslations } from "next-intl";

export default function Gallery() {
  const galleryText = useTranslations("gallery");

  return (
    <div className="space-y-12">
      <h2 className="text-4xl font-bold text-figata-cup text-center">
        {galleryText("title")}
      </h2>
      <div className="columns-1 md:columns-3 gap-4">
        {/* Cloudinary images will go here */}
      </div>
    </div>
  );
}
