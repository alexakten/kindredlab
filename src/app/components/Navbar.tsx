import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-start pt-8">
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
        <p className="text-base font-[450] leading-[0.95] tracking-tight mix-blend-difference ">
          Kindred <br />
          Laboratory
        </p>
      </Link>
    </nav>
  );
}
