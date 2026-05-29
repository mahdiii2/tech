"use client";
import ReactCompareImage from "react-compare-image";

interface ImageSliderProps {
  title: string;
  leftImage: string;
  rightImage: string;
}

export default function ImageSlider({
  title,
  leftImage,
  rightImage,
}: ImageSliderProps) {
  return (
    <section className="mx-auto mb-12 mt-24 w-full max-w-5xl px-4 text-center sm:mt-32 lg:mt-40">
      <h2 className="mx-auto mb-8 max-w-3xl text-2xl font-semibold leading-tight text-neutral-900 sm:text-3xl md:mb-10 md:text-4xl">
        {title}
      </h2>
      <div className="overflow-hidden rounded-2xl shadow-xl mx-2">
        <ReactCompareImage
          leftImage={leftImage}
          rightImage={rightImage}
          sliderLineWidth={3}
          sliderLineColor="#94adff"
        />
      </div>
    </section>
  );
}
