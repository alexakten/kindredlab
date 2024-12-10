"use client";
import { useEffect } from "react";
import Image from "next/image";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export default function HeroScroll() {
  useEffect(() => {
    // Initialize Splide when the component mounts
    new Splide(".splide", {
      type: "loop",
      perPage: 5, // Adjust according to the number of items you want visible
      gap: "0.25rem",
      autoScroll: {
        speed: 0.4, // Customize the scroll speed
      },
      drag: false,
      arrows: false,
      pagination: false,
      updateOnMove: false,
      flickPower: 0.0,
      flickMaxPages: 1, // Limit to moving only one page at a time
    }).mount({ AutoScroll });
  }, []);

  // Array of image objects with orientation and source
  const images = [
    { orientation: "landscape", src: "/images/hero-scroll/hero-scroll-2.webp" },
    { orientation: "portrait", src: "/images/hero-scroll/hero-scroll-3.webp" },
    { orientation: "square", src: "/images/hero-scroll/hero-scroll-4.webp" },
    { orientation: "landscape", src: "/images/hero-scroll/qura-website.png" },
    { orientation: "portrait", src: "/images/hero-scroll/hero-scroll-1.webp" },
    // { orientation: "portrait", src: "/images/hero-scroll/hero-scroll-6.webp" },
    { orientation: "square", src: "/images/hero-scroll/hero-scroll-7.webp" },
  ];

  // Function to determine aspect ratio and min width based on orientation
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
    <div className="splide relative z-10 mt-8 w-full text-white sm:mt-6">
      <div className="splide__track">
        <ul
          className="splide__list flex gap-1"
          style={{ willChange: "transform", transform: "translate3d(0, 0, 0)" }}
        >
          {images.map((image, index) => {
            const { minWidth } = getAspectAndMinWidth(image.orientation);
            return (
              <li
                key={index}
                className={`splide__slide relative h-80 ${minWidth} overflow-hidden rounded-2xl  border-opacity-100`}
              >
                <Image
                  src={image.src}
                  alt={`Hero image ${index + 1}`}
                  width={1000}
                  height={1000}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
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
