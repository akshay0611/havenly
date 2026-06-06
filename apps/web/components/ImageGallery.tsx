'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Grid Gallery */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-4 rounded-2xl overflow-hidden bg-muted">
        {/* Main Image */}
        <div
          className="col-span-1 md:col-span-2 md:row-span-2 relative aspect-video md:aspect-square cursor-pointer group"
          onClick={() => setIsLightboxOpen(true)}
        >
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover group-hover:opacity-90 transition-opacity"
            priority
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        </div>

        {/* Thumbnail Grid */}
        {images.slice(1, 5).map((image, index) => (
          <div
            key={index}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
            onClick={() => {
              setCurrentImageIndex(index + 1);
              setIsLightboxOpen(true);
            }}
          >
            <Image
              src={image}
              alt={`${title} - image ${index + 2}`}
              fill
              className="object-cover group-hover:opacity-90 transition-opacity"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />

            {/* Show more overlay for last image */}
            {index === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-semibold">
                  +{images.length - 5} more
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute right-4 top-4 p-2 hover:bg-white/10 rounded-full transition z-10"
            aria-label="Close lightbox"
          >
            <X size={32} className="text-white" />
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center px-4">
            <Image
              src={images[currentImageIndex]}
              alt={`${title} - image ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 p-2 hover:bg-white/10 rounded-full transition"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} className="text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 p-2 hover:bg-white/10 rounded-full transition"
            aria-label="Next image"
          >
            <ChevronRight size={32} className="text-white" />
          </button>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/50 rounded-full text-white text-sm font-medium">
            {currentImageIndex + 1} / {images.length}
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 flex-wrap justify-center max-w-2xl px-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative w-12 h-12 rounded-lg overflow-hidden transition-all ${
                  currentImageIndex === index
                    ? 'ring-2 ring-primary opacity-100'
                    : 'opacity-50 hover:opacity-75'
                }`}
                aria-label={`Go to image ${index + 1}`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
