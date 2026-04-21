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
    <Link href={`/property/${property.id}`}>
      <div className="group cursor-pointer">
        {/* Image Container */}
        <div className="relative mb-3 overflow-hidden rounded-xl bg-muted">
          <div className="aspect-square relative">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={priority}
            />
          </div>

          {/* Favorite Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsSaved(!isSaved);
            }}
            className="absolute right-3 top-3 rounded-full bg-white/80 p-2 backdrop-blur-sm transition-all hover:bg-white"
            aria-label="Save property"
          >
            <Heart
              size={20}
              className={`transition-colors ${
                isSaved ? 'fill-red-500 text-red-500' : 'text-foreground'
              }`}
            />
          </button>

          {/* Badge */}
          {property.category && (
            <div className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white capitalize">
              {property.category}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="space-y-1">
          {/* Title */}
          <h3 className="text-base font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {property.title}
          </h3>

          {/* Location */}
          <p className="text-sm text-muted-foreground">
            {property.location.city}, {property.location.state}
          </p>

          {/* Rating and Price Row */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1">
              <Star size={16} className="fill-foreground text-foreground" />
              <span className="text-sm font-medium">
                {property.rating.toFixed(2)}
              </span>
              <span className="text-xs text-muted-foreground">
                ({property.reviewCount})
              </span>
            </div>
            <p className="text-sm font-semibold text-foreground">
              ${property.pricePerNight}
              <span className="text-xs font-normal text-muted-foreground">/night</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
