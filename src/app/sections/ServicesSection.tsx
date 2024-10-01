import {
  HeartStraight,
  ChatCircle,
  PaperPlaneTilt,
  AlignLeft,
  Code,
  MagicWand,
  CubeTransparent,
  NavigationArrow,
  Cursor,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

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
  {
    name: "SEO Optimization",
    icon: Cursor,
  },
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

export default function ServicesSection() {
  return (
    <>
      <div className="flex items-start gap-4 overflow-x-auto text-white">
        {/* Websites */}
        <div className="relative flex w-[36rem] flex-col overflow-hidden rounded-3xl border border-white border-opacity-40 bg-zinc-100 px-4 py-6 backdrop-blur-md md:p-8">
          <Image
            src="/images/websites.png"
            alt="Websites"
            width={100}
            height={100}
            className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full scale-105 object-cover blur-md"
          />
          <p className="font-basier text-xs opacity-50">WEB DEVELOPMENT</p>
          <h3 className="mt-12 text-6xl font-semibold">
            Stunning websites built in Webflow
          </h3>
          <p className="mt-4 max-w-sm opacity-50">
            Refresh your website and branding. We build stunning websites in
            Webflow that showcase your products.
          </p>
          <div className="mt-12 h-64 w-full ">
            <div
              className="relative flex aspect-[16/9] w-full -rotate-0 flex-col items-center justify-center rounded-3xl border-2 border-white border-opacity-100 bg-white bg-opacity-10 p-2 text-center"
              style={{ mixBlendMode: "plus-lighter" }}
            >
              <div className="relative flex aspect-[16/9] h-auto w-2/3 flex-col items-center justify-center border border-white">
                {/* Navbar */}
                <div className="absolute top-0 flex w-full justify-between  px-2 py-1">
                  <div className="h-1 w-4 rounded-sm bg-gradient-to-r from-white/50 to-white"></div>
                  <div className="flex gap-1">
                    <div className="h-1.5 w-4 rounded-sm bg-gradient-to-r from-white/50 to-white"></div>
                    <div className="h-1.5 w-4 rounded-sm bg-gradient-to-r from-white to-white"></div>
                  </div>
                </div>
                <div className="h-3 w-full max-w-[8rem] rounded-sm bg-gradient-to-r from-white/50 to-white"></div>
                <div className="mt-1 h-3 w-full max-w-[8rem] rounded-sm bg-gradient-to-r from-white/50 to-white"></div>
                <div className="mt-2 h-1 w-full max-w-[6rem] rounded-sm bg-gradient-to-r from-white/50 to-white"></div>
                <div className="mt-1 h-1 w-full max-w-[6rem] rounded-sm bg-gradient-to-r from-white/50 to-white"></div>
                <div className="mt-2 flex w-full flex-row items-center justify-center gap-1">
                  <div className="h-2 w-full max-w-[2rem] rounded-sm bg-gradient-to-r from-white/50 to-white"></div>
                  <div className=" h-2 w-full max-w-[2rem] rounded-sm bg-gradient-to-r from-white to-white"></div>
                </div>
                <div className="absolute left-6 top-2 flex gap-1">
                  <NavigationArrow
                    // className="duocolor-green"
                    weight="fill"
                    fill="#fff"
                  />
                  <div className="mt-3 text-nowrap rounded-sm bg-white px-1 text-xs font-medium leading-[1.4] text-black">
                    Eric B
                  </div>
                </div>
                {/* Boxes in corners */}
                <div className="absolute -left-1 -top-1 h-2 w-2 border border-white bg-white"></div>
                <div className="absolute -right-1 -top-1 h-2 w-2 border border-white bg-white"></div>
                <div className="absolute -bottom-1 -left-1 h-2 w-2 border border-white bg-white"></div>
                <div className="absolute -bottom-1 -right-1 h-2 w-2 border border-white bg-white"></div>
                {/* --- */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 border border-white bg-white px-1">
                  <p className="text-sm text-black">1440 × 900</p>
                </div>
                <div className="absolute -bottom-1 -right-1 flex translate-x-full translate-y-full gap-1">
                  <NavigationArrow
                    // className="duocolor-orange"
                    weight="fill"
                    fill="#fff"
                  />
                  <div className="mt-3 rounded-sm bg-white px-1 text-xs font-medium leading-[1.4] text-black">
                    Bianca
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex w-full items-center justify-between">
            <p className="font-basier text-xs opacity-50">BOOK A FREE DEMO </p>
            <Link
              href={"/"}
              className="rounded-full  bg-white px-16 py-3 font-basier text-xs text-black hover:bg-zinc-100"
              style={{ mixBlendMode: "plus-lighter" }}
            >
              LEARN MORE
            </Link>
          </div>
        </div>
        {/* Design */}
        <div className="relative flex w-[36rem] flex-col overflow-hidden rounded-3xl border border-white border-opacity-40 bg-zinc-100 px-4 py-6 backdrop-blur-md md:p-8">
          <Image
            src="/images/design.png"
            alt="Websites"
            width={100}
            height={100}
            className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full scale-105 object-cover blur-md"
          />
          <p className="font-basier text-xs opacity-50">DESIGN SUBSCRIPTION</p>
          <h3 className="mt-12 text-6xl font-semibold">
            Flexible design subscription
          </h3>
          <p className="mt-4 max-w-sm opacity-50">
            Refresh your website and branding. We build stunning websites in
            Webflow that showcase your products.
          </p>
          <div className="mt-12 h-64 w-full ">
            <div className="relative mt-8 grid grid-cols-1 gap-4 pb-28 pt-8 text-xs md:grid-cols-2">
              <div className="absolute bottom-24 right-24 flex gap-1">
                <NavigationArrow
                  // className="duocolor-purple"
                  weight="fill"
                  fill="#fff"
                />
                <div className="z-50 mt-3 rounded-sm bg-white px-1 text-xs font-medium leading-[1.4] text-black">
                  You
                </div>
              </div>

              <div className="text-b flex flex-col gap-2">
                <p className="font-medium">To do</p>
                <div className="max-w-[240px] rotate-0 rounded-md border border-white bg-white bg-opacity-10 px-4 py-2 shadow-sm">
                  Ads for campaign
                </div>
                <div className="max-w-[240px] rotate-0 rounded-md border border-white bg-white bg-opacity-10 px-4 py-2 shadow-sm">
                  New UI for search
                </div>
                <div className="absolute bottom-8 left-14 w-full max-w-[240px] rotate-6 rounded-md border  border-white bg-white bg-opacity-10 px-4 py-2 shadow-sm md:left-32">
                  Design new website
                </div>
              </div>
              <div className="hidden flex-col gap-2 md:flex">
                <p className="font-medium">Done</p>
                <div className="max-w-[240px] rotate-0 rounded-md border border-white bg-white bg-opacity-10 px-4 py-2 shadow-sm">
                  Create new logo
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex w-full items-center justify-between">
            <p className="font-basier text-xs opacity-50">BOOK A FREE DEMO </p>
            <Link
              href={"/"}
              className="rounded-full  bg-white px-16 py-3 font-basier text-xs text-black hover:bg-zinc-100"
              style={{ mixBlendMode: "plus-lighter" }}
            >
              LEARN MORE
            </Link>
          </div>
        </div>

        {/* Content */}
        <div className="relative flex w-[36rem] flex-col overflow-hidden rounded-3xl border border-white border-opacity-40 bg-zinc-100 px-4 py-6 backdrop-blur-md md:p-8">
          <Image
            src="/images/content.png"
            alt="Websites"
            width={100}
            height={100}
            className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full scale-105 object-cover blur-md"
          />
          <p className="font-basier text-xs opacity-50">DESIGN SUBSCRIPTION</p>
          <h3 className="mt-12 text-6xl font-semibold">
            Content to elevate your marketing
          </h3>
          <p className="mt-4 max-w-sm opacity-50">
            Refresh your website and branding. We build stunning websites in
            Webflow that showcase your products.
          </p>
          <div className="mt-12 h-64 w-full ">
            <div className="relative mt-8 grid grid-cols-1 gap-4 pb-28 pt-8 text-xs md:grid-cols-2">
              <div className="absolute bottom-24 right-24 flex gap-1">
                <NavigationArrow
                  // className="duocolor-purple"
                  weight="fill"
                  fill="#fff"
                />
                <div className="z-50 mt-3 rounded-sm bg-white px-1 text-xs font-semibold leading-[1.4] text-black">
                  You
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <p className="font-medium">To do</p>
                <div className="max-w-[240px] rotate-0 rounded-md bg-white px-4 py-2 shadow-sm">
                  Ads for campaign
                </div>
                <div className="max-w-[240px] rotate-0 rounded-md bg-white px-4 py-2 shadow-sm">
                  New UI for search
                </div>
                <div className="absolute bottom-8 left-14 w-full max-w-[240px] rotate-6 rounded-md bg-white px-4 py-2 shadow-sm md:left-32">
                  Design new website
                </div>
              </div>
              <div className="hidden flex-col gap-2 md:flex">
                <p className="font-medium">Done</p>
                <div className="max-w-[240px] rotate-0 rounded-md bg-white px-4 py-2 shadow-sm">
                  Create new logo
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex w-full items-center justify-between">
            <p className="font-basier text-xs opacity-50">BOOK A FREE DEMO </p>
            <Link
              href={"/"}
              className="rounded-full  bg-white px-16 py-3 font-basier text-xs text-black hover:bg-zinc-100"
              style={{ mixBlendMode: "plus-lighter" }}
            >
              LEARN MORE
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
