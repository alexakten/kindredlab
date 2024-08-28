import Link from "next/link";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import { Motion } from "./components/Motion";
import ProjectScroll from "./components/ProjectScroll";
import ProjectCard from "./components/ProjectCard";
import { useRef } from "react";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-white px-3 tracking-tight sm:px-8">
      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="flex w-full max-w-xl flex-col items-center"
      >
        <Navbar />
        {/* Hero */}
        <section className="z-10 mt-20 flex w-full flex-col items-start text-left">
          <h1 className="text-3xl font-normal leading-[1.4] tracking-tight">
            We&apos;re a brand, web and product design studio{" "}
            <span className="opacity-50">
              for startups that iterate fast.
              {/* — all with one simple monthly fee. */}
            </span>
            <br />
            <br />
            Make any design request{" "}
            <span className="opacity-50">
              — we&apos;ll deliver it to you by the end of the week.
            </span>
            <br />
            <br />
            <span className="opacity-50">There are currently </span>
            2 spots available.
            <br />
            <br />
            <span className="opacity-50">Our pricing starts at </span>
            80,000 SEK per month.{" "}
          </h1>
          <div className="mt-12 flex items-center gap-3 tracking-normal">
            <Link
              href={"mailto:hello@kindredlab.io"}
              className="rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium shadow-sm  hover:bg-gray-50 hover:shadow-none"
            >
              Book a call
            </Link>

            <Link
              href={"/work"}
              className="group flex items-center gap-1 rounded-full border border-white bg-white px-5 py-2.5 text-sm font-medium hover:border-gray-200  hover:bg-gray-50"
            >
              See work{" "}
              <span className="inline-block translate-x-[1px] tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </Link>
          </div>
        </section>

        <Footer />
      </Motion>
    </main>
  );
}
