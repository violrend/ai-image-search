"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Page() {

  const [imageURL, setImageURL] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
          placeholder={ imageURL ?"+ Additional info..." :"Search for Items..."}
          className={cn(
            "w-full rounded-full py-6 pr-26",
            imageURL ? "pl-14" : "pl-6"
          )}
        />
        <Button variant="primary" className="rounded-full absolute right-2 cursor-pointer">
          <Search size={6} />
        </Button>
        <Button variant="outline" className="rounded-full absolute right-13 cursor-pointer" onClick={handleCameraClick}>
          <Camera size={6}/>
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
    </div>
  );
}
