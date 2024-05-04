import Link from "next/link";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

export default function Home() {
  return (
    <main className="flex flex-col px-3 sm:px-8 items-center bg-gray-50 tracking-tight">
      <Navbar />
      <section className="absolute top-0 w-full">
        <div
          className="relative h-72 w-full bg-gray-50"
          style={{
            backgroundSize: "180px 180px",
            backgroundPosition: "top",
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.07) 1px, transparent 1px)
            `,
          }}
        >
          {/* Grid Overlay */}
          <div
            className="absolute inset-0 overflow-hidden bg-gray-50"
            style={{
              background:
                "radial-gradient(circle at top, transparent 1%, rgb(249 250 251) 100%)",
            }}
          />
        </div>
      </section>

      <section className="z-10 mt-40 text-center flex flex-col items-center sm:mt-52">
        <h1 className="mt-4 max-w-2xl text-center text-[clamp(36px,5.5vw,60px)] font-semibold leading-[1.1] tracking-tighter">
          We help startups raise <br /> their next round
        </h1>
        <p className="mt-4 text-xl opacity-75">
          Design and development partner for startups.
        </p>
        <div className="mt-6 flex gap-3 tracking-normal">
          <Link
            href={"/"}
            className="rounded-full bg-gradient-to-t from-gray-200 to-gray-200 p-px shadow-sm hover:shadow-none"
          >
            {/* bg-gradient-to-tl from-gray-50 to-white */}
            <div className="rounded-full  bg-white px-5 py-2.5 text-sm  font-medium hover:bg-gray-100">
              Start scaling
            </div>
          </Link>

          <Link
            href={"/"}
            className="group flex items-center gap-1 rounded-full bg-gray-50 border border-gray-50 hover:border-gray-200 px-5 py-2.5 text-sm font-medium  hover:bg-gray-100"
          >
            Say hello{" "}
            <span className="inline-block translate-x-[1px] tracking-normal transition-transform duration-200 group-hover:translate-x-1">
              -&gt;
            </span>
          </Link>
        </div>
      </section>

      <section className="my-20 flex flex-col items-center md:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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
