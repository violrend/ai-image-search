import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Camera, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col items-center p-5 gap-2">
      <div className="flex h-24 relative items-center w-9/10 md:w-auto">
        <Input
          placeholder="Search for Items..."
          className="max-w-screen w-120 rounded-full p-6"
        />
        <Button variant="primary" className="rounded-full absolute right-2 cursor-pointer">
          <Search size={6} />
        </Button>
        <Button variant="outline" className="rounded-full absolute right-13 cursor-pointer">
          <Camera size={6}/>
        </Button>
      </div>
    </div>
  );
}
