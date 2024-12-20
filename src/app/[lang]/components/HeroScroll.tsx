"use client";
import { useEffect } from "react";
import Image from "next/image";
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export default function HeroScroll() {
  useEffect(() => {
    new Splide(".splide", {
      type: "loop",
      autoWidth: true,
      gap: "0.5rem",
      autoScroll: {
        speed: 0.5,
      },
      drag: "free",
      arrows: false,
      pagination: false,
      updateOnMove: false,
      easing: "linear",
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

  const getClassesForOrientation = (orientation: string) => {
    switch (orientation) {
      case "landscape":
        // Smaller min-width on mobile, larger on md and above
        return "aspect-[16/9] min-w-[20rem] md:min-w-[36rem]";
      case "square":
        return "aspect-square min-w-[12rem] md:min-w-[18rem]";
      case "portrait":
      default:
        return "aspect-[9/16] min-w-[8rem] md:min-w-[12rem]";
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
            const classes = getClassesForOrientation(image.orientation);
            return (
              <li
                key={index}
                className={`splide__slide relative overflow-hidden rounded-2xl ${classes}`}
                style={{ flex: "0 0 auto" }}
              >
                <Image
                  src={image.src}
                  alt={`Hero image ${index + 1}`}
                  fill
                  priority={true}
                  className="pointer-events-none object-cover"
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
