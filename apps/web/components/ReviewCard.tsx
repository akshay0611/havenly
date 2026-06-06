'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { Review } from '@/lib/dummy-data';
import { Card } from '@/components/ui/card';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-muted-foreground'
        }`}
      />
    ));
  };

  const formattedDate = review.createdAt.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <Card className="p-4 md:p-6 border-border">
      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-muted flex-shrink-0">
            <Image
              src={review.guestAvatar}
              alt={review.guestName}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
          <div>
            <p className="font-semibold text-foreground">{review.guestName}</p>
            <p className="text-xs text-muted-foreground">{formattedDate}</p>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex gap-1 flex-shrink-0">
          {renderStars(review.rating)}
        </div>
      </div>

      {/* Comment */}
      <p className="text-sm text-foreground leading-relaxed">
        {review.comment}
      </p>
    </Card>
  );
}
