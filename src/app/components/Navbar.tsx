import Link from "next/link";

export default function Navbar() {
  return (
    // <nav className="mt-8 max-w-2xl rounded-full flex w-full items-center justify-between bg-gray-100 px-8 py-3">
    //   <Link href={"/"} className="z-10 flex items-center gap-1">
    //     <svg
    //       width="14"
    //       height="30"
    //       viewBox="0 0 133 183"
    //       fill="none"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         d="M79.4453 52.6755L79.4453 0.853027L53.1617 0.853026L53.1617 52.6755L79.4453 52.6755Z"
    //         fill="black"
    //       />
    //       <path
    //         d="M105.758 78.9778L105.758 52.6753L79.4553 52.6753L79.4553 78.9778L105.758 78.9778Z"
    //         fill="black"
    //       />
    //       <path
    //         d="M105.742 182.62L105.742 130.799L79.4586 130.799L79.4586 182.62L105.742 182.62Z"
    //         fill="black"
    //       />
    //       <path
    //         d="M132.062 182.616L132.062 156.313L0.663742 156.313L0.663741 182.616L132.062 182.616Z"
    //         fill="black"
    //       />
    //       <path
    //         d="M132.031 130.796L132.031 78.9731L105.748 78.9731L105.748 130.796L132.031 130.796Z"
    //         fill="black"
    //       />
    //       <path
    //         d="M79.4219 130.796L79.4219 104.493L26.8479 104.493L26.8479 130.796L79.4219 130.796Z"
    //         fill="black"
    //       />
    //       <path
    //         fill-rule="evenodd"
    //         clip-rule="evenodd"
    //         d="M105.75 52.6743L132.04 78.9647V78.9731L105.75 78.9731V52.6743Z"
    //         fill="black"
    //       />
    //     </svg>
    //     <p className="text-xs font-[450] leading-[0.95] tracking-tight mix-blend-difference ">
    //       Kindred <br />
    //       Laboratory
    //     </p>
    //   </Link>
    //   <Link href="mailto:hello@kindredlab.io" className="text-sm font-medium">Say hello</Link>
    // </nav>
    <nav className="top-0 z-20 flex w-full max-w-8xl items-center justify-center pt-8 sm:px-10 sm:pt-12">
      <div className="flex flex-col items-center justify-center gap-1">
        <svg
          width="28"
          height="28"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0H24V8V16H16V24H24V16H32H40V40H0V0ZM40 8V0H32V8H40Z"
            fill="black"
          />
        </svg>

        <p className="relative font-freight text-xl font-semibold leading-[1] tracking-tight">
          first
          <span className="font-medium italic">house</span>
          {/* <span className="absolute top-2 font-normal -right-1 font-inter text-[0.3rem]">®</span> */}
        </p>
      </div>
    </nav>
  );
}
