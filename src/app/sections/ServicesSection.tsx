import {
  HeartStraight,
  ChatCircle,
  PaperPlaneTilt,
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
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 text-left text-black md:grid-cols-2 lg:grid-cols-2">
        <div className="flex flex-col rounded-3xl border border-white border-opacity-40 bg-zinc-100 px-4 py-6 md:p-8">
          <div className="h-80 w-full ">
            <div className="relative flex aspect-[16/9] w-full -rotate-0 flex-col items-center justify-center rounded-3xl border border-white border-opacity-40 bg-white bg-opacity-100 p-2 text-center">
              <div className="relative flex aspect-[16/9] h-auto w-2/3 flex-col items-center justify-center border border-blue-500">
                {/* Navbar */}
                <div className="absolute top-0 flex w-full justify-between  px-2 py-1">
                  <div className="h-1 w-4 rounded-sm bg-gradient-to-r from-blue-100 to-blue-500"></div>
                  <div className="flex gap-1">
                    <div className="h-1.5 w-4 rounded-sm bg-gradient-to-r from-blue-300 to-blue-500"></div>
                    <div className="h-1.5 w-4 rounded-sm bg-gradient-to-r from-zinc-100 to-zinc-300"></div>
                  </div>
                </div>
                <div className="h-3 w-full max-w-[8rem] rounded-sm bg-gradient-to-r from-blue-100 to-blue-400"></div>
                <div className="mt-1 h-3 w-full max-w-[8rem] rounded-sm bg-gradient-to-r from-blue-100 to-blue-400"></div>
                <div className="mt-2 h-1 w-full max-w-[6rem] rounded-sm bg-gradient-to-r from-blue-100 to-blue-400"></div>
                <div className="mt-1 h-1 w-full max-w-[6rem] rounded-sm bg-gradient-to-r from-blue-100 to-blue-400"></div>
                <div className="mt-2 flex w-full flex-row items-center justify-center gap-1">
                  <div className="h-2 w-full max-w-[2rem] rounded-sm bg-gradient-to-r from-blue-300 to-blue-500"></div>
                  <div className=" h-2 w-full max-w-[2rem] rounded-sm bg-gradient-to-r from-zinc-100 to-zinc-300"></div>
                </div>
                <div className="absolute left-6 top-2 flex gap-1">
                  <NavigationArrow
                    className="duocolor-green"
                    weight="fill"
                    fill="#16a34a"
                  />
                  <div className="mt-3 text-nowrap rounded-sm bg-green-600 px-1 text-xs font-medium leading-[1.4] text-white">
                    Eric B
                  </div>
                </div>
                {/* Boxes in corners */}
                <div className="absolute -left-1 -top-1 h-2 w-2 border border-blue-500 bg-white"></div>
                <div className="absolute -right-1 -top-1 h-2 w-2 border border-blue-500 bg-white"></div>
                <div className="absolute -bottom-1 -left-1 h-2 w-2 border border-blue-500 bg-white"></div>
                <div className="absolute -bottom-1 -right-1 h-2 w-2 border border-blue-500 bg-white"></div>
                {/* --- */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 border border-blue-500 bg-blue-500 px-1">
                  <p className="text-sm text-white">1440 × 900</p>
                </div>
                <div className="absolute -bottom-1 -right-1 flex translate-x-full translate-y-full gap-1">
                  <NavigationArrow
                    className="duocolor-orange"
                    weight="fill"
                    fill="#ea580c"
                  />
                  <div className="mt-3 rounded-sm bg-orange-600 px-1 text-xs font-medium leading-[1.4] text-white">
                    Alex A
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="mt-12 text-2xl font-medium">Websites</h3>
          <p className="mt-1 max-w-sm opacity-50">
            Refresh your website and branding. We build stunning websites in
            Webflow that showcase your products.
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
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-300 bg-zinc-200 bg-opacity-10">
                      <IconComponent className="h-5 w-5 text-black" />
                    </div>
                    <p className="mt-0.5 whitespace-pre-wrap text-center text-xs leading-normal tracking-normal text-black opacity-50">
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

        <div className="flex flex-col rounded-2xl border border-white border-opacity-40 bg-zinc-100 px-4 py-6 md:p-8">
          <div className="h-80 w-full ">
            <div className="relative mt-8 grid grid-cols-1 gap-4 pb-28 pt-8 text-xs md:grid-cols-2">
              <div className="absolute bottom-24 right-24 flex gap-1">
                <NavigationArrow
                  className="duocolor-purple"
                  weight="fill"
                  fill="#d946ef"
                />
                <div className="z-50 mt-3 rounded-sm bg-fuchsia-500 px-1 text-xs font-semibold leading-[1.4] text-white">
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
          {/* <p className="text-xs">Step 1</p> */}
          <h3 className="mt-12 text-2xl font-medium">Design</h3>
          <p className="mt-2 max-w-sm opacity-50">
            Your extended design team. Make any design request and get it
            delivered within days to your developers.
          </p>
        </div>

        <div className="flex flex-col rounded-3xl border border-white border-opacity-40 bg-zinc-100 px-4 py-6 md:p-8">
          <div className="h-80 w-full ">
            <div className="relative flex aspect-[16/9] w-full -rotate-0 flex-col items-center justify-center rounded-3xl border border-white border-opacity-40 bg-white bg-opacity-0 p-2">
              {/* Code snippet */}
              <div className="font-mono text-xs">
                <div>
                  <p>
                    <span className="text-blue-500">export default</span>{" "}
                    <span className="text-fuchsia-500">async function</span>{" "}
                    Blog() &#123;
                  </p>
                  <p className="ml-4">
                    <span className="text-fuchsia-500">let</span> data ={" "}
                    <span className="text-fuchsia-500">await</span> fetch(
                    <span className="text-green-500">
                      &apos;https://api.kindredhouse.se/blog&apos;
                    </span>
                    );
                  </p>
                  <p className="ml-4">
                    <span className="text-fuchsia-500">let</span> posts ={" "}
                    <span className="text-fuchsia-500">await</span> data.json();
                  </p>
                  <p className="ml-4">
                    <span className="text-fuchsia-500">return</span> {"("}
                  </p>
                  <p className="ml-8">
                    &lt;<span className="text-blue-500">ul</span>&gt;
                  </p>
                  <p className="ml-12">&#123;posts.map((post) =&gt; {"("}</p>
                  <p className="ml-16">
                    &lt;<span className="text-blue-500">li</span>{" "}
                    <span className="text-orange-600">key</span>
                    =&#123;post.id&#125;&gt;&#123;post.title&#125;&lt;/
                    <span className="text-blue-500">li</span>&gt;
                  </p>
                  <p className="ml-12">&#41;&#125;</p>
                  <p className="ml-8">
                    &lt;/<span className="text-blue-500">ul</span>&gt;
                  </p>
                  <p className="ml-4">);</p>
                  <p>&#125;</p>
                </div>
              </div>
            </div>
          </div>
          <h3 className="mt-12 text-2xl font-medium">Development</h3>
          <p className="mt-1 max-w-sm opacity-50">
            Refresh your website and branding. We build stunning websites in
            Webflow that showcase your products.
          </p>
        </div>

        <div className="flex flex-col rounded-3xl border border-white border-opacity-40 bg-zinc-100 px-4 py-6 md:p-8">
          <div className="relative flex h-80 w-full items-center justify-center ">
            <div className="relative grid aspect-[16/9] h-auto w-full -rotate-0 grid-cols-2 grid-rows-2 flex-col items-center justify-center gap-4 rounded-3xl border border-white border-opacity-40 bg-white bg-opacity-100 p-8 text-center">
              <div className="flex h-full w-full flex-col gap-1">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                  <div className="h-0.5 w-8  rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                </div>
                <div className="aspect-[3/2] h-auto w-full rounded-lg bg-gradient-to-r from-blue-100 to-blue-500"></div>
                <div className="mt-1 flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-red-300 to-red-400"></div>
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-200"></div>
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-200"></div>
                  {/* <HeartStraight weight="fill" size={8} color="#f87171" />
                  <ChatCircle weight="regular" size={8} color="#a1a1aa" />
                  <PaperPlaneTilt weight="regular" size={8} color="#a1a1aa" /> */}
                </div>
                <div className="mt-1 flex flex-col gap-1">
                  <div className="h-0.5 w-full  rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                  <div className="h-0.5 w-4/5  rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                </div>
              </div>
              <div className="row-span-2 h-full w-full rounded-lg bg-gradient-to-r from-zinc-50 to-zinc-200 p-4 ">
                {/* Comment */}
                <div className="flex items-start gap-1">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                  <div className="flex w-full flex-col gap-1">
                    <div className="h-0.5 w-8  rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                    <div className="h-0.5 w-2/3  rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                    <div className="h-0.5 w-2/5  rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                  </div>
                </div>

                {/* Comment */}
                <div className="mt-4 flex items-start gap-1">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                  <div className="flex w-full flex-col gap-1">
                    <div className="h-0.5 w-8  rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                    <div className="h-0.5 w-4/5  rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                    <div className="h-0.5 w-3/5  rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                  </div>
                </div>

                {/* Comment */}
                <div className="mt-4 flex items-start gap-1">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                  <div className="flex w-full flex-col gap-1">
                    <div className="h-0.5 w-8  rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                    <div className="h-0.5 w-2/3  rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                    <div className="h-0.5 w-2/5  rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                  </div>
                </div>

                {/* Comment */}
                <div className="mt-4 flex items-start gap-1">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                  <div className="flex w-full flex-col gap-1">
                    <div className="h-0.5 w-8  rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                    <div className="h-0.5 w-4/5  rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                    <div className="h-0.5 w-3/5  rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                  </div>
                </div>

                {/* Comment */}
                <div className="mt-4 flex items-start gap-1">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                  <div className="flex w-full flex-col gap-1">
                    <div className="h-0.5 w-8  rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                    <div className="h-0.5 w-2/3  rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                    <div className="h-0.5 w-2/5  rounded-lg bg-gradient-to-r from-zinc-100 to-zinc-400"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="mt-12 text-2xl font-medium">Content</h3>
          <p className="mt-1 max-w-sm opacity-50">
            Refresh your website and branding. We build stunning websites in
            Webflow that showcase your products.
          </p>
        </div>
      </div>
    </>
  );
}
