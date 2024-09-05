import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Motion } from "./components/Motion";
import Logos from "./components/Logos";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center overflow-x-hidden bg-black px-0 tracking-tight text-zinc-100 sm:px-0">
      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="flex w-full max-w-8xl flex-col items-center"
      >
        <Navbar />
        {/* Hero */}
        <section className="z-10 mt-[5rem] flex h-full w-full flex-col items-center rounded-3xl bg-[radial-gradient(170%_100%_at_top,_#010314_30%,_#592ED3_60%,_#fff_100%)] py-40 text-center backdrop-blur-sm">
          <div className="bg-indigo-950"></div>
          <div className="flex items-center rounded-full text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <p className="pl-2 opacity-50 ">2 spots open for September</p>
          </div>
          <h1 className="mt-4 max-w-2xl text-[clamp(48px,6vw,80px)] font-[450] leading-[1] tracking-tight">
            Web and product <br />
            <span className="font-freight text-[clamp(53.33px,6.666vw,88px)] font-medium italic">
              design studio
            </span>
          </h1>
          <h2 className="mt-6 max-w-lg px-4 text-xl opacity-50">
            We&apos;re a fully remote studio designing landing pages and
            products for startups that iterate fast.
          </h2>
          {/* <div className="mt-8 flex items-center gap-3 tracking-normal">
            <Link
              href={"mailto:hello@kindredlab.io"}
              className="rounded-full bg-gradient-to-tl from-zinc-600 to-zinc-400 p-px"
            >
              <div className="rounded-full bg-black px-5 py-2.5 text-sm  font-medium hover:bg-zinc-800">
                Book a call
              </div>
            </Link>

            <Link
              href={"mailto:hello@kindredlab.io"}
              className="group rounded-full bg-gradient-to-tl from-zinc-200 to-white p-px"
            >
              <div className="rounded-full bg-zinc-50 px-5 py-2.5 text-sm font-medium text-black hover:bg-white">
                See work{" "}
                <span className="inline-block translate-x-[1px] tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                  -&gt;
                </span>
              </div>
            </Link>
          </div> */}
          <div className="mt-8 flex gap-4">
            <Link
              href="mailto:hello@kindredlab.io"
              className="flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 hover:bg-zinc-800"
            >
              <p className="text-base font-medium">Book demo</p>
              <span className="flex h-6 w-6 items-center justify-center rounded-[4px] bg-zinc-800 text-[12px]">
                B
              </span>
            </Link>
            <Link
              href="mailto:hello@kindredlab.io"
              className="rounded-lg bg-zinc-50 px-4 py-2.5 text-base font-medium text-zinc-950 hover:bg-white"
            >
              Say hello
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
