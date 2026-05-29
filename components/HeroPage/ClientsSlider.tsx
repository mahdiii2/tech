import React, { ReactNode } from "react";
import Marquee from "react-fast-marquee";

interface InfiniteLogosProps {
  items?: string[];
  children?: ReactNode;
  speed?: number;
}

export default function InfiniteLogos({
  items,
  children,
  speed = 40,
}: InfiniteLogosProps) {
  return (
    <div
      className="relative w-full flex items-center mx-auto max-w-6xl marquee-fade"
      dir="ltr"
    >
      <Marquee speed={speed} gradient={false}>
        {children ||
          items?.map((item, i) => (
            <span
              key={i}
              className="mx-12 inline-block text-4xl font-semibold text-gray-400 hover:text-gray-800 transition"
            >
              {item}
            </span>
          ))}
      </Marquee>
    </div>
  );
}
