import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Motion } from "./components/Motion";
import Logos from "./components/Logos";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="flex text-black flex-col items-center justify-center overflow-x-hidden bg-white px-3 tracking-tight sm:px-8 ">
      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="flex w-full max-w-8xl flex-col items-center"
      >
        <Navbar />
        {/* Hero */}
        <section className="z-10 mt-32 flex w-full max-w-2xl flex-col items-center text-center">
          <div className="border-gray-150 flex items-center rounded-full border py-1 pl-2 pr-3 text-sm">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-black"></span>
            </span>
            <p className="pl-2 opacity-50 ">2 spots open for September</p>
          </div>
          <h1 className="mt-4 text-[clamp(48px,6vw,80px)] font-medium leading-[1] tracking-tight">
            Web and product <br />
            <span className="font-freight text-[clamp(53.33px,6.666vw,88px)] font-semibold italic">
              design studio
            </span>
          </h1>
          <h2 className="mt-6 max-w-xl text-xl opacity-50">
            We&apos;re a fully remote studio designing landing pages and
            products for startups that iterate fast.
          </h2>
          <div className="mt-8 flex items-center gap-3 tracking-normal">
            <Link
              href={"mailto:hello@kindredlab.io"}
              className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Book a call
            </Link>

            <Link
              href={"/work"}
              className="group flex items-center gap-1 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium   hover:bg-gray-50"
            >
              See work{" "}
              <span className="inline-block translate-x-[1px] tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </Link>
          </div>
          <p className="mt-32 text-sm opacity-50">Trusted by teams at</p>
          <div className="mt-5">
            <Logos />
          </div>
        </section>

        <section className="project-scroll-container mt-24 flex w-screen gap-4 overflow-y-auto px-8 ">
          <ProjectCard
            image="/images/qura/qura-1.png"
            orientation="landscape"
          />
          <ProjectCard image="/images/qura/qura-2.png" orientation="portrait" />
          <ProjectCard image="/images/qura/qura-3.png" orientation="portrait" />
          <ProjectCard
            image="/images/airbon/airbon-1.png"
            orientation="landscape"
          />
          <ProjectCard
            image="/images/airbon/airbon-2.png"
            orientation="landscape"
          />
          <ProjectCard
            image="/images/mycomine/mycomine-1.png"
            orientation="landscape"
          />
          <ProjectCard
            image="/images/mycomine/mycomine-2.png"
            orientation="landscape"
          />
          <ProjectCard
            image="/images/mycomine/mycomine-3.png"
            orientation="landscape"
          />
          <ProjectCard
            image="/images/payable/payable-1.png"
            orientation="portrait"
          />
          <ProjectCard
            image="/images/payable/payable-2.png"
            orientation="portrait"
          />
          <ProjectCard
            image="/images/payable/payable-3.png"
            orientation="landscape"
          />
          <ProjectCard image="/images/swt/swt-1.png" />
          <ProjectCard
            image="/images/redpoint/redpoint-1.png"
            orientation="landscape"
          />
          <ProjectCard
            image="/images/redpoint/redpoint-2.png"
            orientation="landscape"
          />
          <ProjectCard image="/images/flexiwaggon/flexiwaggon-1.png" />
          <ProjectCard image="/images/flexiwaggon/flexiwaggon-2.png" />
          <ProjectCard
            image="/images/flexiwaggon/flexiwaggon-4.png"
            orientation="portrait"
          />
          <ProjectCard image="/images/tts/tts-1.png" />
          <ProjectCard image="/images/tts/tts-2.png" />
          <ProjectCard image="/images/tts/tts-3.png" orientation="portrait" />
          <ProjectCard image="/images/tts/tts-4.png" orientation="portrait" />
        </section>

        <Footer />
      </Motion>
    </main>
  );
}
