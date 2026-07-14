"use client";

import Image from "next/image";
import { useState } from "react";

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

export default function ProjectCarousel({
  images,
  title,
}: ProjectCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="mb-6">

      <div className="relative overflow-hidden rounded-xl">

        <Image
          src={images[currentImage]}
          alt={title}
          width={900}
          height={500}
          className="w-full rounded-xl"
        />

      </div>

      <div className="mt-4 flex items-center justify-center gap-4">

        <button
          onClick={previousImage}
          className="rounded-lg bg-gray-800 px-4 py-2 hover:bg-cyan-500"
        >
          Previous
        </button>

        <span className="text-gray-400">
          {currentImage + 1} / {images.length}
        </span>

        <button
          onClick={nextImage}
          className="rounded-lg bg-gray-800 px-4 py-2 hover:bg-cyan-500"
        >
          Next
        </button>

      </div>

    </div>
  );
}