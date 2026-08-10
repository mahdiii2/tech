"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageSliderProps {
  title: string;
  caption?: string;
  leftImage: string;
  rightImage: string;
  leftImageAlt: string;
  rightImageAlt: string;
  sliderLabel: string;
}

export default function ImageSlider({
  title,
  caption,
  leftImage,
  rightImage,
  leftImageAlt,
  rightImageAlt,
  sliderLabel,
}: ImageSliderProps) {
  const [position, setPosition] = useState(50);
  const imageSizes = "(max-width: 1024px) calc(100vw - 2rem), 1024px";

  return (
    <section className="mx-auto mb-12 mt-24 w-full max-w-5xl px-4 text-center sm:mt-32 lg:mt-40">
      <h2 className="mx-auto mb-8 max-w-3xl text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl md:mb-10 md:text-4xl">
        {title}
      </h2>
      <div className="group mx-2 overflow-hidden rounded-2xl shadow-xl outline-none focus-within:ring-4 focus-within:ring-[#94adff]/35">
        <div
          className="relative w-full overflow-hidden"
          style={{ aspectRatio: "2496 / 1208" }}
        >
          <Image
            src={rightImage}
            alt={rightImageAlt}
            fill
            sizes={imageSizes}
            className="object-cover"
            style={{ clipPath: `inset(0 0 0 ${position}%)` }}
            unoptimized={rightImage.endsWith(".svg")}
          />
          <Image
            src={leftImage}
            alt={leftImageAlt}
            fill
            sizes={imageSizes}
            className="object-cover"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          />

          <div
            className="pointer-events-none absolute inset-y-0 z-10 w-10"
            style={{ left: `calc(${position}% - 20px)` }}
            aria-hidden="true"
          >
            <span className="absolute inset-y-0 left-1/2 w-[3px] -translate-x-1/2 bg-[#94adff] shadow-sm" />
            <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 rounded-full border-[3px] border-[#94adff] bg-white text-sm font-bold text-[#7595ff] shadow-md">
              <span>‹</span>
              <span>›</span>
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={position}
            onChange={(event) => setPosition(Number(event.target.value))}
            aria-label={sliderLabel}
            className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
            dir="ltr"
          />
        </div>
      </div>
      {caption ? (
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-neutral-500">
          {caption}
        </p>
      ) : null}
    </section>
  );
}
