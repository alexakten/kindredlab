import Link from "next/link";
import { Motion } from "./Motion";

export default function Navbar() {
  return (
    <Motion
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", delay: 0, duration: 0.5 }}
      className="fixed mix-blend-exclusion z-50 flex w-full flex-col items-center"
    >
      <nav className="z-50 mt-5 flex w-full max-w-8xl items-center justify-between px-4 text-xs font-medium sm:px-32">
        <Link href={"/"} className="z-10 flex items-center gap-1.5">
          <div className="flex items-center justify-center gap-1">
            {/* <svg
              width="23"
              height="23"¯
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
            href={"/"}
            className="flex items-center justify-center gap-3 rounded-full bg-white px-4 py-1.5 font-basier text-xs text-black hover:bg-zinc-200"
            style={{ mixBlendMode: "plus-lighter" }}
          >
            BOOK DEMO
            <span className="flex h-6 w-8 items-center justify-center rounded-[4px] border border-zinc-200 bg-zinc-100 text-[12px]">
              ⌘ K
            </span>
          </Link>
        </div>
      </nav>
    </Motion>
  );
}
