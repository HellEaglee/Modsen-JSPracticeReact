import RandomImage from "@/components/RandomImage/RandomImage";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-6">Random Dog Image</h1>
      <RandomImage />
    </div>
  );
}
