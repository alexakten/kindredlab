"use client";
import {
  AlignLeft,
  Code,
  MagicWand,
  Cube,
  Confetti,
  Cursor,
  CubeFocus,
  DeviceMobileCamera,
} from "@phosphor-icons/react";

const services = [
  {
    name: "Web Design",
    icon: AlignLeft,
  },
  {
    name: "Brand Design",
    icon: Cube,
  },
  {
    name: "UX/UI Design",
    icon: MagicWand,
  },
  {
    name: "Web Development",
    icon: Code,
  },
  {
    name: "SEO Optimization",
    icon: Cursor,
  },
  {
    name: "App Design",
    icon: DeviceMobileCamera,
  },
  {
    name: "Content Creation",
    icon: CubeFocus,
  },
  {
    name: "Ad Creatives",
    icon: Confetti,
  },
];

export default function ServicesSection() {
  return (
    <div className="flex flex-wrap gap-10">
      {services.map((service, index) => {
        const IconComponent = service.icon;
        return (
          <div key={index} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10">
              <IconComponent className="h-5 w-5 text-white" />
            </div>
            <p className="mt-1 whitespace-pre-wrap text-center text-xs leading-relaxed tracking-normal text-white opacity-75">
              {/* Replace spaces with line breaks */}
              {service.name.split(" ").map((word, i) => (
                <span key={i}>
                  {word}
                  <br />
                </span>
              ))}
            </p>
          </div>
        );
      })}
    </div>
  );
}
