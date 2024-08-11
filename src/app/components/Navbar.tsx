import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-full mt-12 items-center justify-center">
      <Link href={"/"} className="z-10 flex items-center gap-1">
        <svg
          width="19"
          height="30"
          viewBox="0 0 133 183"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M79.4453 52.6755L79.4453 0.853027L53.1617 0.853026L53.1617 52.6755L79.4453 52.6755Z"
            fill="black"
          />
          <path
            d="M105.758 78.9778L105.758 52.6753L79.4553 52.6753L79.4553 78.9778L105.758 78.9778Z"
            fill="black"
          />
          <path
            d="M105.742 182.62L105.742 130.799L79.4586 130.799L79.4586 182.62L105.742 182.62Z"
            fill="black"
          />
          <path
            d="M132.062 182.616L132.062 156.313L0.663742 156.313L0.663741 182.616L132.062 182.616Z"
            fill="black"
          />
          <path
            d="M132.031 130.796L132.031 78.9731L105.748 78.9731L105.748 130.796L132.031 130.796Z"
            fill="black"
          />
          <path
            d="M79.4219 130.796L79.4219 104.493L26.8479 104.493L26.8479 130.796L79.4219 130.796Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M105.75 52.6743L132.04 78.9647V78.9731L105.75 78.9731V52.6743Z"
            fill="black"
          />
        </svg>

        <p className="text-base font-medium leading-[0.90] tracking-tight mix-blend-difference ">
          Kindred
          <br />
          Laboratory
        </p>
      </Link>
    </nav>
  );
}

{
  /* <nav className="top-0 z-20 flex w-full max-w-8xl items-center justify-between py-6 sm:fixed sm:left-1/2 sm:-translate-x-1/2 sm:transform sm:px-10">
<Link href={"/"} className="flex items-center gap-1">
  <svg
    width="24"
    height="36"
    viewBox="0 0 133 183"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M79.4453 52.6755L79.4453 0.853027L53.1617 0.853026L53.1617 52.6755L79.4453 52.6755Z"
      fill="black"
    />
    <path
      d="M105.758 78.9778L105.758 52.6753L79.4553 52.6753L79.4553 78.9778L105.758 78.9778Z"
      fill="black"
    />
    <path
      d="M105.742 182.62L105.742 130.799L79.4586 130.799L79.4586 182.62L105.742 182.62Z"
      fill="black"
    />
    <path
      d="M132.062 182.616L132.062 156.313L0.663742 156.313L0.663741 182.616L132.062 182.616Z"
      fill="black"
    />
    <path
      d="M132.031 130.796L132.031 78.9731L105.748 78.9731L105.748 130.796L132.031 130.796Z"
      fill="black"
    />
    <path
      d="M79.4219 130.796L79.4219 104.493L26.8479 104.493L26.8479 130.796L79.4219 130.796Z"
      fill="black"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M105.75 52.6743L132.04 78.9647V78.9731L105.75 78.9731V52.6743Z"
      fill="black"
    />
  </svg>

  <p className="text-xl font-medium leading-[0.90] tracking-tight mix-blend-difference ">
    Kindred
    <br />
    Laboratory
  </p>
</Link>

<Link
  href={"mailto:hello@kindredlab.io"}
  className="group flex items-center gap-1 rounded-full border border-white bg-white bg-opacity-80 px-5 py-2.5 text-sm font-medium backdrop-blur-md hover:border-gray-200  hover:bg-gray-50"
>
  Say hello{" "}
  <span className="inline-block translate-x-[1px] tracking-normal transition-transform duration-200 group-hover:translate-x-1">
    -&gt;
  </span>
</Link>
</nav> */
}
