import Link from "next/link";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white tracking-tight">
      <Navbar />
      <section className="absolute top-0 w-full">
        <div
          className="relative h-72 w-full"
          style={{
            backgroundSize: "180px 180px",
            backgroundPosition: "top",
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.065) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.065) 1px, transparent 1px)
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

      <section className="z-10 mt-40 flex flex-col items-center sm:mt-52">
        <h1 className="mt-4 max-w-2xl text-center text-6xl font-semibold leading-[1.1] tracking-tighter">
          We help startups raise <br /> their next round
        </h1>
        <p className="mt-4 text-xl opacity-75">
          Design and development partner for startups.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            href={"/"}
            className="rounded-full bg-gradient-to-t from-gray-200 to-gray-100 p-px shadow-sm"
          >
            {/* bg-gradient-to-tl from-gray-50 to-white */}
            <div className="rounded-full bg-white px-5 py-2.5 text-sm  font-medium hover:bg-gray-100">
              Start scaling
            </div>
          </Link>

          <Link
            href={"/"}
            className="group flex items-center gap-1 rounded-full bg-white px-5 py-2.5 text-sm font-medium hover:border-gray-50 hover:bg-gray-100"
          >
            Say hello{" "}
            <span className="inline-block translate-x-[1px] tracking-normal transition-transform duration-200 group-hover:translate-x-1">
              -&gt;
            </span>
          </Link>
        </div>
      </section>

      <section className="m-20 flex flex-col items-center px-3 sm:px-24">
        <div className="grid grid-cols-3 gap-4">
          <Testimonial
            text="Professional team doing a really good job. After the first job I hired them again."
            user="CEO @ Flexiwaggon"
          />
          <Testimonial
            text="These guys are so fast! We got a complete brand and website in like a week, and customers are loving it."
            user="CEO @ Darwin"
          />
          <Testimonial
            text="My highlight of the week is when I get to work with the team at Kindred Lab."
            user="CEO @ Qura"
          />
          <Testimonial
            text="My highlight of the week is when I get to work with the team at Kindred Lab."
            user="CEO @ Qura"
          />
          <Testimonial
            text="Professional team doing a really good job. After the first job I hired them again."
            user="CEO @ Flexiwaggon"
          />
          <Testimonial
            text="These guys are so fast! We got a complete brand and website in like a week, and customers are loving it."
            user="CEO @ Darwin"
          />
        </div>
      </section>
    </main>
  );
}
