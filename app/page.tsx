"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { useProductSearch } from "@/hooks/useProductSearch";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import RatingStars from "@/components/StarsRating";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [imageURL, setImageURL] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    data: products = [],
    isLoading,
    isError,
  } = useProductSearch(submittedQuery, !!submittedQuery);

  const handleSearch = () => {
    setSubmittedQuery(searchQuery.trim());
  };

  const handleCameraClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageURL(url);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="h-screen w-full flex flex-col items-center p-5 gap-2">
      <div className="flex h-24 relative items-center w-9/10 md:w-full md:max-w-160">
        {/* Image Preview inside the input */}
        {imageURL && (
          <img
            src={imageURL}
            alt="Preview"
            className="absolute left-4 h-9 w-9 rounded-none object-cover z-10 border-1 border-stone-600"
          />
        )}
        <Input
          placeholder={
            imageURL ? "+ Additional info..." : "Search for Items..."
          }
          className={cn(
            "w-full rounded-full py-6 pr-26",
            imageURL ? "pl-14" : "pl-6"
          )}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          disabled={isLoading}
          onKeyDown={handleKeyDown}
        />
        <Button
          variant="primary"
          className="rounded-full absolute right-2 cursor-pointer"
          onClick={handleSearch}
          disabled={isLoading}
        >
          <Search size={6} />
        </Button>
        <Button
          variant="outline"
          className="rounded-full absolute right-13 cursor-pointer"
          onClick={handleCameraClick}
          disabled={isLoading}
        >
          <Camera size={6} />
        </Button>
        {/* Hidden File Input */}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>

      {/* Loading/Error states */}
      {isLoading && (
        <p className="text-sm text-muted-foreground">Loading products...</p>
      )}
      {isError && (
        <p className="text-sm text-destructive">Failed to fetch products.</p>
      )}

      {/* Product Results */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {products.map((product: any, idx: number) => (
          <Card className="justify-between" key={idx}>
            <CardContent>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="h-40 object-contain mb-2 rounded-2xl"
              />
              <RatingStars rating={product.rating || 0} />
              <h2 className="text-md font-medium">{product.title}</h2>
              <p className="text-sm text-muted-foreground">{product.price}</p>
            </CardContent>
            <CardFooter className="justify-end">
              <Button variant="primary" className="cursor-pointer">
                <Link
                  href={product.product_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Go To Site
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
