"use client";
import { useState, useEffect } from "react";
import Image, { ImageProps } from "next/image";
import { FiX } from "react-icons/fi";
import { createPortal } from "react-dom";

interface ImageLightboxProps extends Omit<ImageProps, "onLoad"> {
  alt: string;
}

export default function ImageLightbox({
  src,
  alt,
  width,
  height,
  className,
  fill,
  sizes,
  ...rest
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Handle component mount for portal
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Handle escape key and body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleImageClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  // Component for thumbnail image with loading state
  const ThumbnailImage = (
    <div
      className="relative rounded-xl overflow-hidden"
      style={fill ? { width: "100%", height: "100%" } : undefined}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl">
          <div className="w-8 h-8 border-4 border-figata-cup border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        sizes={sizes}
        className={`${className || ""} cursor-pointer rounded-xl ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onClick={handleImageClick}
        onLoad={() => setIsLoading(false)}
        {...rest}
      />
    </div>
  );

  // Lightbox component that will be rendered in portal
  const Lightbox =
    isOpen && mounted
      ? createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4"
            onClick={handleClose}
          >
            <button
              className="absolute top-4 right-4 z-[10000] text-white bg-figata-cup p-2 rounded-full hover:bg-figata-cup/80 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                handleClose();
              }}
              aria-label="Close lightbox"
            >
              <FiX size={24} />
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-auto h-auto max-w-[90vw] max-h-[90vh] rounded-xl overflow-hidden"
            >
              <Image
                src={src}
                alt={alt}
                width={1200}
                height={800}
                className="object-contain rounded-xl"
                style={{
                  maxWidth: "90vw",
                  maxHeight: "85vh",
                  height: "auto",
                  width: "auto",
                }}
                priority
              />
            </div>
          </div>,
          document.body
        )
      : null;

  return (
    <>
      {ThumbnailImage}
      {Lightbox}
    </>
  );
}
