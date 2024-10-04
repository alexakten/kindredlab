"use client";
import Image from "next/image";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export default function HeroScroll() {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref, {});
  return (
    <div
      className="mt-8 flex w-full items-start gap-4 overflow-x-auto px-4 text-white [-ms-overflow-style:'none'] [scrollbar-width:'none'] hover:cursor-grab sm:mt-16 sm:px-16 [&::-webkit-scrollbar]:hidden"
      {...events}
      ref={ref}
    >
      <div className="relative aspect-[2/3] h-64 min-w-[12rem] overflow-hidden rounded-2xl border-2 border-white border-opacity-40 bg-white">
        <Image
          src="/images/hero-scroll/hero-5.png"
          alt="Hero image 5"
          width={1000}
          height={1000}
          className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
      <div className="relative aspect-[3/2] h-64 min-w-[24rem] overflow-hidden rounded-2xl border-2 border-white border-opacity-10 bg-white">
        <Image
          src="/images/hero-scroll/hero-1.png"
          alt="Hero image 1"
          width={1000}
          height={1000}
          className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
      <div className="relative aspect-[2/3] h-64 min-w-[12rem] overflow-hidden rounded-2xl border-2 border-white border-opacity-40 bg-white">
        <Image
          src="/images/hero-scroll/hero-2.png"
          alt="Hero image 2"
          width={1000}
          height={1000}
          className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
      <div className="relative aspect-[2/3] h-64 min-w-[12rem] overflow-hidden rounded-2xl border-2 border-white border-opacity-40 bg-white">
        <Image
          src="/images/hero-scroll/hero-3.png"
          alt="Hero image 3"
          width={1000}
          height={1000}
          className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
      <div className="relative aspect-[3/2] h-64 min-w-[24rem] overflow-hidden rounded-2xl border-2 border-white border-opacity-40 bg-white">
        <Image
          src="/images/hero-scroll/hero-6.jpg"
          alt="Hero image 4"
          width={1000}
          height={1000}
          className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
      <div className="relative aspect-[2/3] h-64 min-w-[12rem] overflow-hidden rounded-2xl border-2 border-white border-opacity-40 bg-white">
        <Image
          src="/images/hero-scroll/hero-7.png"
          alt="Hero image 3"
          width={1000}
          height={1000}
          className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
      <div className="relative aspect-[2/3] h-64 min-w-[12rem] overflow-hidden rounded-2xl border-2 border-white border-opacity-40 bg-white">
        <Image
          src="/images/hero-scroll/hero-9.png"
          alt="Hero image 3"
          width={1000}
          height={1000}
          className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
      <div className="relative aspect-[3/2] h-64 min-w-[24rem] overflow-hidden rounded-2xl border-2 border-white border-opacity-40 bg-white">
        <Image
          src="/images/hero-scroll/hero-4.jpg"
          alt="Hero image 4"
          width={1000}
          height={1000}
          className="pointer-events-none absolute left-0 top-0 h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
