'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, Star } from 'lucide-react';
import { useState } from 'react';
import { Property } from '@/lib/dummy-data';

interface PropertyCardProps {
  property: Property;
  variant?: 'default' | 'compact';
  priority?: boolean;
}

export function PropertyCard({ property, variant = 'default', priority = false }: PropertyCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <Link href={`/property/${property.id}`} className="group cursor-pointer block border-0">
      <div className="flex flex-col gap-3">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-[14px] bg-muted aspect-[20/19]">
          <Image
            src={property.image}
            alt={property.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            priority={priority}
          />

          {/* Badge */}
          <div className="absolute left-3 top-3 rounded-full bg-white shadow-md border border-black/5 px-3 py-1 text-[13px] font-medium text-foreground">
            Guest favourite
          </div>

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsSaved(!isSaved);
            }}
            className="absolute right-3 top-3 flex items-center justify-center p-2 transition-transform hover:scale-105"
            aria-label="Save property"
          >
            <Heart
              size={24}
              className={`transition-colors drop-shadow-md ${
                isSaved ? 'fill-primary text-primary' : 'fill-black/30 text-white stroke-[1.5]'
              }`}
            />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-0.5 mt-1">
          {/* Title Row */}
          <h3 className="text-[15px] font-semibold text-foreground leading-tight truncate">
            {property.title}
          </h3>

          {/* Price and Rating Row */}
          <p className="text-[15px] text-muted-foreground leading-tight truncate flex items-center">
            <span className="text-foreground">₹{Math.round(property.pricePerNight * 100).toLocaleString()} for 2 nights</span>
            <span className="mx-1.5 font-bold">·</span>
            <span className="flex items-center gap-1">
              <Star size={11} className="fill-foreground text-foreground" />
              {property.rating.toFixed(2)}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}
