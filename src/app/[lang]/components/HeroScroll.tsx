"use client";
import { useEffect } from "react";
import Image from "next/image";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export default function HeroScroll() {
  useEffect(() => {
    new Splide(".splide", {
      type: "loop", // Enable infinite loop
      autoWidth: true, // Allow dynamic widths for slides
      gap: "0.5rem", // Gap between slides
      autoScroll: {
        speed: 1.5, // Smooth and continuous scrolling
      },
      drag: false, // Disable manual dragging
      arrows: false,
      pagination: false,
      updateOnMove: false,
      easing: "linear", // Linear easing for consistent scrolling
    }).mount({ AutoScroll });
  }, []);

  const images = [
    { orientation: "landscape", src: "/images/hero-scroll/hero-scroll-2.webp" },
    { orientation: "portrait", src: "/images/hero-scroll/hero-scroll-3.webp" },
    { orientation: "square", src: "/images/hero-scroll/hero-scroll-4.webp" },
    { orientation: "landscape", src: "/images/hero-scroll/qura-website.png" },
    { orientation: "portrait", src: "/images/hero-scroll/hero-scroll-1.webp" },
    { orientation: "portrait", src: "/images/hero-scroll/hero-scroll-6.webp" },
    { orientation: "square", src: "/images/hero-scroll/hero-scroll-7.webp" },
  ];

  const getAspectAndMinWidth = (orientation: string) => {
    if (orientation === "landscape") {
      return { minWidth: "min-w-[36rem]" };
    } else if (orientation === "square") {
      return { minWidth: "min-w-[18rem]" };
    } else {
      return { minWidth: "min-w-[12rem]" };
    }
  };

  return (
    <div
      className="splide relative z-10 mt-8 w-full text-white sm:mt-6"
      style={{ transform: "translate3d(0, 0, 0)" }}
    >
      <div className="splide__track">
        <ul
          className="splide__list flex gap-1"
          style={{
            willChange: "transform",
            transform: "translate3d(0, 0, 0)",
            backfaceVisibility: "hidden",
          }}
        >
          {images.map((image, index) => {
            const { minWidth } = getAspectAndMinWidth(image.orientation);
            return (
              <li
                key={index}
                className={`splide__slide relative h-80 ${minWidth} overflow-hidden rounded-2xl`}
                style={{ flex: "0 0 auto" }} // Ensure each slide has its own width
              >
                <Image
                  src={image.src}
                  alt={`Hero image ${index + 1}`}
                  width={1000}
                  height={1000}
                  priority={true} // Ensure images are preloaded
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                  className="pointer-events-none absolute left-0 top-0"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
