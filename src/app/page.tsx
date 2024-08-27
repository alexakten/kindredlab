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

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-white px-3 tracking-tight sm:px-8">
      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="flex flex-col items-start"
      >
        <Navbar />
        {/* Hero */}
        <section className="z-10 mt-24 flex w-full max-w-2xl flex-col items-start px-8 text-left">
          <h1 className="text-4xl font-medium leading-[1.3] tracking-tight">
            Brand design & UX/UI partner for startups{" "}
            <br className="sm:hidden" />— simple monthly fee.
            {/* <span className="opacity-1">
              for startups — all for a simple monthly fee.{" "}
            </span> */}
          </h1>
          {/* <p className="opacity-1 mt-4 text-xl"></p> */}
          <div className="mt-6 flex items-center gap-3 tracking-normal">
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

        <section className="project-scroll-container mt-24 flex w-screen gap-4 overflow-y-auto  px-8">
          <ProjectCard
            client="Qura"
            services="Product design"
            description="Qura builds AI to make legal text searchable using natural language."
            year="2024"
            image="/images/qura/qura-1.png"
          />
          <ProjectCard
            client="MycoMine"
            services="Web design"
            description="MycoMine develops green technology for sustainable waste management."
            year="2024"
            image="/images/mycomine/mycomine-1.png"
          />
          <ProjectCard
            client="Payable"
            services="Product design"
            description="Qura builds AI to make legal text searchable using natural language."
            year="2024"
            image="/images/payable/payable-1.png"
          />
          <ProjectCard
            client="Stockholm Water"
            services="Product design"
            description="Qura builds AI to make legal text searchable using natural language."
            year="2024"
            image="/images/swt/swt-1.png"
          />
          <ProjectCard
            client="Flexiwaggon"
            services="Product design"
            description="Qura builds AI to make legal text searchable using natural language."
            year="2024"
            image="/images/flexiwaggon/flexiwaggon-1.png"
          />
        </section>
      </Motion>

      {/* Pricing */}
      {/* <section className="mt-56 flex w-full max-w-4xl flex-col items-center"> */}
      {/* <h2 className="mt-4 max-w-2xl text-center text-[clamp(32px,5.5vw,48px)] font-normal leading-[1.1] tracking-tighter">
          Get started
        </h2>
        <p className="mt-4 text-xl opacity-75">Choose a pricing plan. </p> */}
      {/* <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
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
        </div> */}
      {/* </section> */}

      <Footer />
    </main>
  );
}
