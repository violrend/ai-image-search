import { cn } from "@/lib/utils";
import { Star, StarHalf } from "lucide-react";

type RatingProps = {
  rating: number;
};

export default function RatingStars({ rating }: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} fill="currentColor" stroke="none" size={16} />
      ))}
      {hasHalfStar && <StarHalf fill="currentColor" stroke="none" size={16} />}
      <p className={cn("text-sm text-black", rating === 0 && "invisible")}>
        {rating}
      </p>
    </div>
  );
}
