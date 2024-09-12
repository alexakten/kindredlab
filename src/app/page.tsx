import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Motion } from "./components/Motion";
import Logos from "./components/Logos";
import ProjectCard from "./components/ProjectCard";
import CommandK from "./components/CommandK";
import TestimonialSection from "./sections/TestimonialSection";
import ServicesSection from "./sections/ServicesSection";
import PricingSection from "./sections/PricingSection";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: SearchParamProps) {
  const bookDemo = searchParams?.BookDemo === "true";

  return (
    <main className="flex flex-col  items-center justify-center overflow-x-hidden bg-black px-0 tracking-tight text-zinc-100 sm:px-2">
      {bookDemo && <CommandK isVisible={bookDemo} />}

      <Motion
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0 }}
        className="flex w-full max-w-8xl flex-col items-center"
      >
        <Navbar />
        {/* Hero */}
        <section className="z-10 mt-8 flex h-full w-full flex-col items-center rounded-[2rem] bg-[radial-gradient(170%_100%_at_top,_#010314_30%,_#592ED3_60%,_#fff_100%)] py-40 text-center backdrop-blur-sm">
          <Motion
            initial={{ opacity: 0, y: -20, filter: "blur(1rem)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ ease: "easeInOut", delay: 0.2, duration: 0.5 }}
            className="flex w-full max-w-8xl flex-col items-center"
          >
            <div className="bg-indigo-950"></div>
            <div className="flex items-center rounded-full text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <p className="pl-2 opacity-50 ">2 spots open for September</p>
            </div>
          </Motion>
          <Motion
            initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ ease: "easeInOut", delay: 0.2, duration: 0.5 }}
            className="flex w-full max-w-8xl flex-col items-center"
          >
            <h1 className="mt-4 max-w-2xl bg-gradient-to-t from-zinc-100 to-white bg-clip-text pb-3 text-[clamp(48px,6vw,80px)] font-[450] leading-[1] tracking-tight text-transparent">
              Supercharge your <br />
              <span className="font-freight text-[clamp(53.33px,6.666vw,90px)] font-medium italic">
                design & marketing
              </span>
            </h1>
          </Motion>
          <Motion
            initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ ease: "easeInOut", delay: 0.4, duration: 0.5 }}
            className="flex w-full max-w-8xl flex-col items-center"
          >
            <h2 className="mt-3 max-w-lg px-4 text-xl opacity-50">
              We&apos;re a fully remote studio designing landing pages and
              products for startups that iterate fast.
            </h2>
          </Motion>

          <Motion
            initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ ease: "easeInOut", delay: 0.6, duration: 0.5 }}
            className="flex w-full max-w-8xl flex-col items-center"
          >
            <div className="mt-8 flex gap-4">
              <Link
                href="/?BookDemo=true"
                scroll={false}
                className="flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 hover:bg-zinc-800"
                replace
              >
                <p className="text-base font-medium">Book demo</p>
                <span className="flex h-6 w-8 items-center justify-center rounded-[4px] border border-zinc-700 bg-zinc-800 text-[12px]">
                  ⌘ K
                </span>
              </Link>
              <Link
                href="mailto:hello@kindredlab.io"
                className="rounded-lg bg-zinc-50 px-4 py-2.5 text-base font-medium text-zinc-950 hover:bg-white"
              >
                Say hello
              </Link>
            </div>
          </Motion>
          <Motion
            initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ ease: "easeInOut", delay: 0.8, duration: 0.5 }}
            className="flex w-full max-w-8xl flex-col items-center"
          >
            <p className="mt-32 text-sm opacity-50">Trusted by teams at</p>
            <div className="mt-5 px-8">
              <Logos />
            </div>
          </Motion>
        </section>

        <section className="mt-32 flex max-w-6xl flex-col items-center justify-center">
          <h2 className="mb-16 bg-gradient-to-t from-zinc-300 to-white bg-clip-text text-center text-5xl font-[450] leading-[1.2] tracking-tight text-transparent ">
            What our users are saying
          </h2>
          <TestimonialSection />
        </section>

        <section className="mt-32 flex h-full w-full flex-col items-center rounded-[2rem] bg-[radial-gradient(170%_100%_at_bottom,_#010314_30%,_#592ED3_60%,_#fff_100%)] py-32 text-center backdrop-blur-sm">
          <h2 className="mb-16 max-w-2xl bg-gradient-to-t from-zinc-300 to-white bg-clip-text text-center text-5xl font-[450] leading-[1.2] tracking-tight text-transparent">
            Boost your team&apos;s productivity and ship products faster
          </h2>
          <ServicesSection />
        </section>

        <section className="m-16 flex w-full max-w-5xl flex-col items-center justify-center">
          <h2 className="mb-16 mt-1 bg-gradient-to-t from-zinc-300 to-white bg-clip-text text-center text-5xl font-[450] leading-[1.2] tracking-tight text-transparent ">
            Pricing
          </h2>
          <PricingSection />
        </section>

        {/* <Footer /> */}
      </Motion>
    </main>
  );
}
