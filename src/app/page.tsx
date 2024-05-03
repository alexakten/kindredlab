import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white tracking-tighter">
      <Navbar />
      <section className="absolute top-0 w-full">
        <div
          className="relative h-72 w-full"
          style={{
            backgroundSize: "200px 200px",
            backgroundPosition: "top",
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 1px, transparent 1px)
            `,
          }}
        >
          {/* Grid Overlay */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{
              background:
                "radial-gradient(circle at top, transparent 1%, white 100%)",
            }}
          />
        </div>
      </section>

      <section className="z-10 mt-64 flex flex-col items-center">
        <h1 className="mt-4 max-w-2xl text-center text-6xl font-semibold leading-[1.1]">
          Teel
        </h1>
        <p className="mt-4 text-xl tracking-tight opacity-75">
          Raise your next round.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href={"/"}
            className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium tracking-tight shadow-sm hover:bg-gray-50"
          >
            Start scaling
          </Link>

          <Link
            href={"/"}
            className="rounded-full flex gap-1 items-center bg-white px-5 py-2.5 text-sm font-medium tracking-tight hover:border-gray-50 hover:bg-gray-50"
          >
            Say hello{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-arrow-right"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
        </div>
      </section>
    </main>
  );
}
