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
} from "@phosphor-icons/react/dist/ssr";

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
      <div className="flex w-full max-w-4xl flex-wrap justify-between gap-10">
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
      <div className="mt-24 grid w-full max-w-6xl grid-cols-2 gap-4 px-4 text-left">
        <div className="flex flex-col rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10 p-8">
          <p className="text-xs">Step 1</p>
          <h3 className="mt-2 text-2xl font-medium">Make any design request</h3>
          <p className="mt-2 opacity-75">
            Use our custom board to make any request.
          </p>
          <div className="relative mt-8 grid grid-cols-2 gap-4 border-t border-white border-opacity-10 pb-28 pt-8">
            <div className="absolute bottom-24 right-24 flex gap-1">
              <NavigationArrow
                className="duocolor-purple"
                weight="duotone"
                fill="white"
              />
              <div className="rounded-xs mt-3 bg-purple-600 px-1 text-xs font-semibold leading-[1.4]">
                You
              </div>
            </div>
            <div className=" flex flex-col gap-2">
              <p className="font-medium">To do</p>
              <div className="rotate-0 rounded-md border border-white border-opacity-40 bg-white bg-opacity-10 px-4 py-2">
                Create ads for campaign
              </div>
              <div className="rotate-0 rounded-md border border-white border-opacity-40 bg-white bg-opacity-10 px-4 py-2">
                New UI for search feature
              </div>
              <div className="absolute bottom-8  left-48 rotate-6 rounded-md  border border-white border-opacity-40 bg-white bg-opacity-10 px-4 py-2">
                Design a new website
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium">Done</p>
              <div className="rotate-0 rounded-md border border-white border-opacity-40 bg-white bg-opacity-10 px-4 py-2">
                Create a new logo
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10 p-8">
          <p className="text-xs">Step 2</p>
          <h3 className="mt-2 text-2xl font-medium">
            Get designs delivered within 2-7 days
          </h3>
          <p className="mt-2 opacity-75">Access your own Figma board.</p>
          <div className="mt-8 w-full border-t border-white border-opacity-10 pt-8">
            <div className="relative flex aspect-[16/9] w-full -rotate-0 flex-col items-center justify-center rounded-3xl border border-white border-opacity-40 bg-white bg-opacity-10 p-2 text-center">
              <div className="relative flex aspect-[16/9] w-full -rotate-0 flex-col items-center justify-center rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10 p-2 text-center">
                <div className="relative flex aspect-[16/9] w-full -rotate-0 flex-col items-center justify-center rounded-lg border border-white border-opacity-40 bg-white bg-opacity-10 p-2 text-center">
                  <p className="text-[20px] font-medium  leading-[1.2]">
                    Supercharge your <br />{" "}
                    <span className="font-freight  text-[22px] italic">
                      design & marketing
                    </span>
                  </p>
                  <p className="mt-2 max-w-[9rem] text-[8px] opacity-75">
                    We're a fully remote design partner for next-gen businesses
                    that iterate fast.
                  </p>
                </div>
              </div>
              <div className="absolute right-24 top-36 flex gap-1">
                <NavigationArrow
                  className="duocolor-orange"
                  weight="duotone"
                  fill="white"
                />
                <div className="rounded-xs mt-3 bg-orange-600 px-1 text-xs font-medium leading-[1.4]">
                  Alex A
                </div>
              </div>
              <div className="absolute bottom-14 right-52 flex gap-1">
                <NavigationArrow
                  className="duocolor-green"
                  weight="duotone"
                  fill="white"
                />
                <div className="rounded-xs mt-3 bg-green-600 px-1 text-xs font-medium leading-[1.4]">
                  Eric B
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10 p-8">
          <p className="text-xs">Step 3</p>
          <h3 className="mt-2 text-2xl font-medium">
            Implement your designs and test
          </h3>
          <p className="mt-2 opacity-75">
            From the ground up, we refresh all your visuals — from logo to font
            and colors.
          </p>
        </div>
        <div className="flex flex-col rounded-2xl border border-white border-opacity-40 bg-white bg-opacity-10 p-8">
          <p className="text-xs">Step 4</p>
          <h3 className="mt-2 text-2xl font-medium">
            Iterate on user feedback
          </h3>
          <p className="mt-2 opacity-75">
            From the ground up, we refresh all your visuals — from logo to font
            and colors.
          </p>
        </div>
      </div>
    </>
  );
}
