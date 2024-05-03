import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute left-0 top-0 z-10 flex w-full justify-between px-3 py-6 sm:px-8">
      <div className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.1"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="feather feather-layers"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
        <p className="text-xl font-medium ">Teel</p>
      </div>
      <div className="flex gap-2 tracking-tight">
        <Link
          href={"/"}
          className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50"
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
          className="flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-50"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}
