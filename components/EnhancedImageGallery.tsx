"use client";

import { useState } from "react";
import Image from "next/image";
import ImageLightbox from "./ImageLightbox";

type EnhancedImageGalleryProps = {
  images: string[];
  alt: string;
};

export default function EnhancedImageGallery({
  images,
  alt,
}: EnhancedImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!images || images.length === 0) return null;

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="space-y-4">
        {/* Main image - clickable to open lightbox */}
        <button
          onClick={() => openLightbox(selectedIndex)}
          className="group relative aspect-video w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800"
        >
          <Image
            src={images[selectedIndex]}
            alt={`${alt} - Image ${selectedIndex + 1}`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            priority={selectedIndex === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
          />
          {/* Zoom indicator */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/20">
            <div className="translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <div className="rounded-full bg-white p-3 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6 text-zinc-900"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </button>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-3 sm:grid-cols-6">
            {images.map((image, index) => (
              <button
                key={image}
                onClick={() => setSelectedIndex(index)}
                onDoubleClick={() => openLightbox(index)}
                className={`relative aspect-video overflow-hidden rounded-lg transition ${
                  index === selectedIndex
                    ? "ring-2 ring-blue-600 ring-offset-2 dark:ring-offset-zinc-900"
                    : "opacity-60 hover:opacity-100"
                }`}
                title="Click to preview, double-click to open in lightbox"
              >
                <Image
                  src={image}
                  alt={`${alt} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </button>
            ))}
          </div>
        )}

        {/* Image counter and info */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-zinc-500">
            {selectedIndex + 1} of {images.length}
          </span>
          <button
            onClick={() => openLightbox(selectedIndex)}
            className="text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            View fullscreen →
          </button>
        </div>
      </div>

      {/* Lightbox modal */}
      <ImageLightbox
        images={images}
        alt={alt}
        initialIndex={selectedIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
