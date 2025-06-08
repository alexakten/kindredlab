import {
  AlignLeft,
  Code,
  MagicWand,
  CubeTransparent,
  Cube,
  NavigationArrow,
  Confetti,
  Cursor,
  CubeFocus,
  DeviceMobileCamera,
  ArrowBendRightUp,
} from "@phosphor-icons/react/dist/ssr";

import Image from "next/image";

const services = [
  {
    name: "Web Design",
    icon: AlignLeft,
  },
  {
    name: "Brand Design",
    icon: CubeTransparent,
  },
  {
    name: "UX/UI Design",
    icon: MagicWand,
  },
  {
    name: "Web Development",
    icon: Code,
  },
  // {
  //   name: "SEO Optimization",
  //   icon: Cursor,
  // },
  // {
  //   name: "App Design",
  //   icon: DeviceMobileCamera,
  // },
  // {
  //   name: "Content Creation",
  //   icon: CubeFocus,
  // },
  // {
  //   name: "Ad Creatives",
  //   icon: Confetti,
  // },
];
export default function DetailsSection() {
  return (
    <div className="flex w-full max-w-6xl flex-col gap-8 text-left">
      <div className="grid grid-cols-5 gap-16 rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10 px-4 py-6 md:p-8">
        <div className="col-span-2 py-6">
          {/* <p className="text-xs">Step 2</p> */}
          <h3 className="text-5xl font-medium">Websites</h3>
          <p className="mt-3 opacity-75">
            Refresh your website and branding. We build stunning websites in
            Webflow that showcase your products and services in an engaging way.{" "}
          </p>

          <p className="mt-5 text-xs font-semibold">
            PRICE: 70,000 - 150,000 SEK
          </p>
          <p className="mt-2 text-xs font-semibold">TIME: 4-8 WEEKS</p>
          <div className="mt-8 w-full border-t border-white border-opacity-10 pt-8">
            <div className="flex w-full max-w-4xl flex-wrap justify-between gap-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-1 flex-col items-center gap-2"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <p className="mt-0.5 whitespace-pre-wrap text-center text-xs leading-normal tracking-normal text-white opacity-75">
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
          </div>
        </div>

        <div className="relative col-span-3 flex w-full -rotate-0 flex-col items-center justify-center rounded-3xl border border-white border-opacity-40 bg-white bg-opacity-10 p-2 text-center"></div>
      </div>

      <div className="grid grid-cols-5 gap-16 rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10 px-4 py-6 md:p-8">
        <div className="relative col-span-3 flex w-full -rotate-0 flex-col items-center justify-center rounded-3xl border border-white border-opacity-40 bg-white bg-opacity-10 p-2 text-center"></div>
        <div className="col-span-2 py-6">
          {/* <p className="text-xs">Step 2</p> */}
          <h3 className="text-5xl font-medium">Websites</h3>
          <p className="mt-3 opacity-75">
            Refresh your website and branding. We build stunning websites in
            Webflow that showcase your products and services in an engaging way.{" "}
          </p>

          <p className="mt-5 text-xs font-semibold">
            PRICE: 70,000 - 150,000 SEK
          </p>
          <p className="mt-2 text-xs font-semibold">TIME: 4-8 WEEKS</p>
          <div className="mt-8 w-full border-t border-white border-opacity-10 pt-8">
            <div className="flex w-full max-w-4xl flex-wrap justify-between gap-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-1 flex-col items-center gap-2"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <p className="mt-0.5 whitespace-pre-wrap text-center text-xs leading-normal tracking-normal text-white opacity-75">
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
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-16 rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10 px-4 py-6 md:p-8">
        <div className="col-span-2 py-6">
          {/* <p className="text-xs">Step 2</p> */}
          <h3 className="text-5xl font-medium">Websites</h3>
          <p className="mt-3 opacity-75">
            Refresh your website and branding. We build stunning websites in
            Webflow that showcase your products and services in an engaging way.{" "}
          </p>

          <p className="mt-5 text-xs font-semibold">
            PRICE: 70,000 - 150,000 SEK
          </p>
          <p className="mt-2 text-xs font-semibold">TIME: 4-8 WEEKS</p>
          <div className="mt-8 w-full border-t border-white border-opacity-10 pt-8">
            <div className="flex w-full max-w-4xl flex-wrap justify-between gap-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-1 flex-col items-center gap-2"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10">
                      <IconComponent className="h-5 w-5 text-white" />
                    </div>
                    <p className="mt-0.5 whitespace-pre-wrap text-center text-xs leading-normal tracking-normal text-white opacity-75">
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
          </div>
        </div>

        <div className="relative col-span-3 flex w-full -rotate-0 flex-col items-center justify-center rounded-3xl border border-white border-opacity-40 bg-white bg-opacity-10 p-2 text-center"></div>
      </div>
    </div>
  );
}
