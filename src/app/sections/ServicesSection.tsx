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
    <>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 text-left md:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10 px-4 py-6 md:p-8">
          {/* <p className="text-xs">Step 2</p> */}
          <h3 className="mt-2 text-3xl font-medium">Websites</h3>
          <p className="mt-2 opacity-75">Refresh your website and branding.</p>
          <div className="mt-8 w-full border-t border-white border-opacity-10 pt-8">
            <div className="relative flex aspect-[16/9] w-full -rotate-0 flex-col items-center justify-center rounded-3xl border border-white border-opacity-40 bg-white bg-opacity-10 p-2 text-center">
              <div className="relative flex aspect-[16/9] w-full -rotate-0 flex-col items-center justify-center rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10 p-2 text-center">
                <div className="relative flex aspect-[16/9] w-full -rotate-0 flex-col items-center justify-center rounded-lg border border-white border-opacity-40 bg-white bg-opacity-10 p-2 text-center">
                  <p className="text-[12px] font-medium  leading-[1.2]">
                    Supercharge your <br />{" "}
                    <span className="font-freight  text-[14px] italic">
                      design & marketing
                    </span>
                  </p>
                  <p className="mt-1 max-w-[4rem] text-[4px] opacity-75">
                    We&apos;re a fully remote design partner for next-gen
                    businesses that iterate fast.
                  </p>
                </div>
              </div>
              <div className="absolute bottom-8 right-12 flex gap-1">
                <NavigationArrow
                  className="duocolor-orange"
                  weight="duotone"
                  fill="white"
                />
                <div className="rounded-xs mt-3 bg-orange-600 px-1 text-xs font-medium leading-[1.4]">
                  Alex A
                </div>
              </div>
              <div className="absolute left-8 top-8 flex gap-1">
                <NavigationArrow
                  className="duocolor-green"
                  weight="duotone"
                  fill="white"
                />
                <div className="rounded-xs mt-3 text-nowrap bg-green-600 px-1 text-xs font-medium leading-[1.4]">
                  Eric B
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10 px-4 py-6 md:p-8">
          {/* <p className="text-xs">Step 1</p> */}
          <h3 className="mt-2 text-3xl font-medium">Design</h3>
          <p className="mt-2 opacity-75">Your extended design team.</p>
          <div className="relative mt-8 grid grid-cols-1 gap-4 border-t border-white border-opacity-10 pb-28 pt-8 text-xs md:grid-cols-2">
            <div className="absolute bottom-24 right-24 flex gap-1">
              <NavigationArrow
                className="duocolor-purple"
                weight="duotone"
                fill="white"
              />
              <div className="rounded-xs z-50 mt-3 bg-purple-600 px-1 text-xs font-semibold leading-[1.4]">
                You
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium">To do</p>
              <div className="max-w-[240px] rotate-0 rounded-md border border-white border-opacity-40 bg-white bg-opacity-10 px-4 py-2">
                Ads for campaign
              </div>
              <div className="max-w-[240px] rotate-0 rounded-md border border-white border-opacity-40 bg-white bg-opacity-10 px-4 py-2">
                New UI for search
              </div>
              <div className="absolute bottom-8 left-14 max-w-[240px] rotate-6 rounded-md border  border-white border-opacity-40 bg-white bg-opacity-10 px-4 py-2 md:left-32">
                Design new website
              </div>
            </div>
            <div className="hidden flex-col gap-2 md:flex">
              <p className="font-medium">Done</p>
              <div className="max-w-[240px] rotate-0 rounded-md border border-white border-opacity-40 bg-white bg-opacity-10 px-4 py-2">
                Create new logo
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10 px-4 py-6 md:p-8">
          {/* <p className="text-xs">Step 3</p> */}
          <h3 className="mt-2 text-3xl font-medium">Content</h3>
          <p className="mt-2 opacity-75">
            Fresh content for ads, socials & the web.
          </p>
          <div className="relative mt-8 h-full w-full border-t border-white border-opacity-10 pt-8">
            <div className="absolute bottom-16 right-2 z-50 flex gap-1">
              <NavigationArrow
                className="duocolor-pink"
                weight="duotone"
                fill="white"
              />
              <div className="rounded-xs mt-3 bg-pink-600 px-1 text-xs font-semibold leading-[1.4]">
                Marketing Team
              </div>
            </div>
            <div className="h relative flex aspect-[16/9] w-full -rotate-0 flex-col items-center justify-center p-2 text-center">
              <div className="absolute left-0 top-0 flex aspect-[16/9] w-2/3 -rotate-0 flex-col items-center justify-center rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10 p-2 text-center"></div>
              <div className="absolute right-0 top-8 flex aspect-[16/9] w-2/3 -rotate-0 flex-col items-center justify-center rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10 p-2 text-center"></div>
              <div className="absolute left-8 top-16 flex aspect-[16/9] w-2/3 -rotate-0 flex-col items-center justify-center rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10 p-2 text-center"></div>
            </div>
            {/* <div className="flex aspect-[16/9] w-full -rotate-0 flex-col items-center justify-center rounded-xl border border-white border-opacity-0 bg-white bg-opacity-0 p-2 text-center">
                <div className="absolute -left-8 top-4 -rotate-[3deg] rounded-full border border-white border-opacity-40 bg-white bg-opacity-20 px-2 py-1 text-white">
                  <p className="text-sm opacity-100">+12% conversion</p>
                </div>
                <div className="absolute -right-8 top-0 rotate-[4deg] scale-105 rounded-full border border-white border-opacity-40 bg-white bg-opacity-20 px-2 py-1 text-white">
                  <p className="text-sm opacity-100">+24 sign ups</p>
                </div>
                <div className="absolute right-12 top-20 rotate-[2deg] scale-150 rounded-full border border-white border-opacity-40 bg-white bg-opacity-20 px-2 py-1 text-white">
                  <p className="text-sm opacity-100">+$10,000 revenue</p>
                </div>
                <div className="absolute -bottom-4 right-16 -rotate-[2deg] scale-110 rounded-full border border-white border-opacity-40 bg-white bg-opacity-20 px-2 py-1 text-white">
                  <p className="text-sm opacity-100">+87 new leads</p>
                </div>
                <div className="absolute -left-8 bottom-10 rotate-[6deg] scale-125 rounded-full border border-white border-opacity-40 bg-white bg-opacity-20 px-2 py-1 text-white">
                  <p className="text-sm opacity-100">98% retention rate</p>
                </div>
              </div> */}
          </div>
        </div>

        {/* <div className="flex flex-col rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10 px-4 py-6 md:p-8">
          <p className="text-xs">Step 4</p>
          <h3 className="mt-2 text-2xl font-medium">
            Iterate on user feedback
          </h3>
          <p className="mt-2 opacity-75">
            Gather feedback and we iterate on our design.
          </p>
          <div className="relative mt-8 border-t border-white border-opacity-10 px-0 pt-8 md:px-8">
            <div className="mx-2 flex flex-col justify-between rounded-2xl border border-white border-opacity-20 bg-white bg-opacity-10 p-6 shadow-sm ">
              <div className="flex items-center gap-2">
                <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-purple-200">
                  <p className="text-lg">🦄</p>
                </div>
                <div className="">
                  <p className="font-medium">User</p>
                  <p className="text-xs tracking-normal opacity-50">4h ago</p>
                </div>
              </div>
              <p className="mt-5">
                The app looks fantastic — so much better than before! Would it
                be possible to add a back button to the navigation?{" "}
              </p>
              <div className="mt-5 flex items-center justify-between rounded-lg border-white border-opacity-40 bg-white bg-opacity-20 px-2 py-2">
                <p>Thanks for your feedback! | </p>
                <div className="flex h-6 w-8 items-center justify-center rounded-full border border-white border-opacity-40 bg-white bg-opacity-30">
                  <ArrowBendRightUp />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="mt-24 flex w-full max-w-4xl flex-wrap justify-between gap-10">
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
              <p className="mt-1 whitespace-pre-wrap text-center text-xs leading-relaxed tracking-normal text-white opacity-75">

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
      </div> */}
    </>
  );
}
