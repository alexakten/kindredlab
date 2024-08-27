import Link from "next/link";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";
import { Motion } from "./components/Motion";
import ProjectScroll from "./components/ProjectScroll";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white px-3 tracking-tight sm:px-8">
      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <Navbar />
        {/* Hero */}
        <section className="z-10 mt-16 flex flex-col items-center text-center sm:mt-24">
          <h1 className="max-w-2xl text-center text-[clamp(32px,5.5vw,56px)] font-normal leading-[1.15] tracking-tighter">
            Product design for <br />
            startups that{" "}
            <span className="font-freight text-[clamp(37.12px,6.38vw,64.96px)] italic">
              iterate fast
            </span>
          </h1>
          <p className="opacity-1 mt-4 max-w-2xl text-xl">
            World-class UX/UI design. Simple monthly fee.{" "}
          </p>
          <div className="mt-6 flex gap-3 tracking-normal">
            <Link
              href={"mailto:hello@kindredlab.io"}
              className="rounded-full bg-gradient-to-t from-gray-200 to-gray-200 p-px shadow-sm hover:shadow-none"
            >
              {/* bg-gradient-to-tl from-gray-50 to-white */}
              <div className="rounded-full  bg-white px-5 py-2.5 text-sm  font-medium hover:bg-gray-50">
                Book a call
              </div>
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

        <section className="mt-20 w-screen">
          <ProjectScroll />
        </section>

        {/* Testimonials */}
        <section className="mt-40 flex flex-col items-center md:px-16">
          {/* <h2 className="mt-4 max-w-2xl text-center text-[clamp(32px,5.5vw,48px)] font-normal leading-[1.1] tracking-tighter">
            Testimonials
          </h2>
          <p className="mt-4 text-xl opacity-75">What our clients say. </p> */}
          <div className="">
            <Marquee />
          </div>
        </section>
      </Motion>

      {/* Pricing */}
      <section className="mt-56 flex w-full max-w-4xl flex-col items-center">
        {/* <h2 className="mt-4 max-w-2xl text-center text-[clamp(32px,5.5vw,48px)] font-normal leading-[1.1] tracking-tighter">
          Get started
        </h2>
        <p className="mt-4 text-xl opacity-75">Choose a pricing plan. </p> */}
        <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <Pricing
            title="Starter"
            price="At request"
            included={["Branding", "Copywriting", "Website"]}
            bgColor="bg-white"
            borderColor="border-gray-100"
            textColor="text-black"
          />
          <Pricing
            title="Scaleup"
            price="80,000 SEK/mo"
            included={[
              "Branding",
              "Copywriting",
              "Website",
              "Product Design",
              "Content",
            ]}
            bgColor="bg-black"
            borderColor="border-black"
            textColor="text-white"
          />
        </div>
        <div className="mt-12 flex gap-3 tracking-normal">
          <Link
            href={"mailto:hello@kindredlab.io"}
            className="rounded-full bg-gradient-to-t from-gray-200 to-gray-200 p-px shadow-sm hover:shadow-none"
          >
            <div className="rounded-full  bg-white px-5 py-2.5 text-sm  font-medium hover:bg-gray-100">
              Book a call
            </div>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
