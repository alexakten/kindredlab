import Link from "next/link";
import { Motion } from "./Motion";

export default function Navbar() {
  return (
    <Motion
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", delay: 0, duration: 0.5 }}
      className="fixed z-50 flex w-full flex-col items-center"
    >
      <nav className="z-50 mt-4 flex w-full max-w-3xl items-center justify-between rounded-2xl border border-white border-opacity-20 bg-white bg-opacity-[0.02] py-1.5 pl-4 pr-2 text-xs font-medium backdrop-blur-md">
        <Link href={"/"} className="z-10 flex items-center gap-1.5">
          <div className="flex items-center justify-center gap-1">
            {/* <svg
              width="23"
              height="23"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H24V8V16H16V24H24V16H32H40V40H0V0ZM40 8V0H32V8H40Z"
                fill="white"
              />
            </svg> */}

            <p className="relative font-freight text-xl font-semibold leading-[0.95] tracking-[-0.020rem]">
              kindred
              <span className="font-medium italic">house</span>
            </p>
          </div>
        </Link>
        {/* <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-8 "> */}
        <div className="hidden gap-8 sm:flex ">
          <Link
            className="opacity-75 hover:underline hover:opacity-100"
            href={"#"}
          >
            Services
          </Link>
          <Link
            className="opacity-75 hover:underline hover:opacity-100"
            href={"#"}
          >
            Projects
          </Link>
          <Link
            className="opacity-75 hover:underline hover:opacity-100"
            href={"#"}
          >
            Pricing
          </Link>
          {/* <Link
            className="opacity-75 hover:underline hover:opacity-100"
            href={"#"}
          >
            Blog
          </Link> */}
        </div>
        <div className="flex gap-4">
          <Link
            href="/?BookDemo=true"
            scroll={false}
            className="flex items-center gap-2 rounded-lg bg-zinc-900 px-3 py-2 hover:bg-zinc-800"
            replace
          >
            <p className="text-xs font-medium">Book demo</p>
            <span className="flex h-5 w-7 items-center justify-center rounded-[4px] border border-zinc-700 bg-zinc-800 text-[10px]">
              ⌘ K
            </span>
          </Link>
          <Link
            href="mailto:hello@kindredlab.io"
            className="flex items-center justify-center rounded-lg bg-zinc-50 px-3 py-2 text-zinc-950 hover:bg-zinc-200"
          >
            <p className="text-xs font-medium">Say hello</p>
          </Link>
        </div>
      </nav>
    </Motion>
  );
}
