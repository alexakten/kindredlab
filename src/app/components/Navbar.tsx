import Link from "next/link";
import { Motion } from "../components/Motion";

export default function Navbar() {
  return (
    <Motion
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", delay: 0, duration: 0.5 }}
      className="fixed z-50 flex w-full flex-col items-center px-8"
    >
      <nav className="fixed z-50 mt-4 flex w-full max-w-3xl items-center justify-between rounded-2xl border border-white border-opacity-20 bg-white bg-opacity-5  py-1.5 pl-3 pr-2 text-xs font-medium backdrop-blur-md">
        <Link href={"/"} className="z-10 flex items-center gap-1.5">
          <svg
            width="17"
            height="30"
            viewBox="0 0 133 183"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M79.4453 52.6755L79.4453 0.853027L53.1617 0.853026L53.1617 52.6755L79.4453 52.6755Z"
              fill="white"
            />
            <path
              d="M105.758 78.9778L105.758 52.6753L79.4553 52.6753L79.4553 78.9778L105.758 78.9778Z"
              fill="white"
            />
            <path
              d="M105.742 182.62L105.742 130.799L79.4586 130.799L79.4586 182.62L105.742 182.62Z"
              fill="white"
            />
            <path
              d="M132.062 182.616L132.062 156.313L0.663742 156.313L0.663741 182.616L132.062 182.616Z"
              fill="white"
            />
            <path
              d="M132.031 130.796L132.031 78.9731L105.748 78.9731L105.748 130.796L132.031 130.796Z"
              fill="white"
            />
            <path
              d="M79.4219 130.796L79.4219 104.493L26.8479 104.493L26.8479 130.796L79.4219 130.796Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M105.75 52.6743L132.04 78.9647V78.9731L105.75 78.9731V52.6743Z"
              fill="white"
            />
          </svg>
          <p className="text-sm font-[450] leading-[0.95] tracking-tight mix-blend-difference ">
            Kindred <br />
            Laboratory
          </p>
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
            About
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
          <Link
            className="opacity-75 hover:underline hover:opacity-100"
            href={"#"}
          >
            Blog
          </Link>
        </div>
        <div className="flex gap-4">
          <Link
            href="/?BookDemo=true"
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
            className="flex items-center justify-center rounded-lg bg-zinc-50 px-3 py-2 text-zinc-950 hover:bg-white"
          >
            <p className="text-xs font-medium">Say hello</p>
          </Link>
        </div>
      </nav>
    </Motion>
  );
}
