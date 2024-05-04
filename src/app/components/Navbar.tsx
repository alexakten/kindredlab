import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 z-10 flex w-full justify-between px-3 py-6 sm:px-8">
      <div className="flex  gap-1">
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

        <p className="text-xl font-medium leading-[0.90] ">
          Kindred <br />
          Laboratory
        </p>
      </div>
      <div className="flex gap-2">
        <Link
          href={"/"}
          className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0A0A0A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-user"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Log in
        </Link>
        <Link
          href={"/"}
          className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium hover:bg-gray-100"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}
