import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Motion } from "./components/Motion";
import Logos from "./components/Logos";
import CommandK from "./components/CommandK";
import TestimonialSection from "./sections/TestimonialSection";
import ServicesSection from "./sections/ServicesSection";
import PricingSection from "./sections/PricingSection";
import Project from "./components/Project";
import DetailsSection from "./sections/DetailsSection";
import ProjectsSection from "./sections/ProjectsSection";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Home({ searchParams }: SearchParamProps) {
  const bookDemo = searchParams?.BookDemo === "true";

  return (
    <main className="flex flex-col  items-center justify-center overflow-x-hidden bg-black px-0 tracking-tight text-zinc-100">
      {bookDemo && <CommandK isVisible={bookDemo} />}

      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="flex w-full max-w-8xl flex-col items-center"
      >
        <Navbar />
        {/* Hero */}
        <section className="bg-linear-gradient flex h-full w-full flex-col items-center px-4 pt-44 pb-28 text-center backdrop-blur-sm sm:px-0">
          <Motion
            initial={{ opacity: 0, y: -20, filter: "blur(1rem)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ ease: "easeInOut", delay: 0.2, duration: 0.5 }}
            className="flex w-full max-w-8xl flex-col items-center"
          >
            <div className="bg-indigo-950"></div>
            <div className="flex items-center rounded-full text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
              </span>
              <p className="pl-2 opacity-50 ">2 spots open for October</p>
            </div>
          </Motion>
          <Motion
            initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ ease: "easeInOut", delay: 0.2, duration: 0.5 }}
            className="flex w-full max-w-8xl flex-col items-center"
          >
            <h1 className="mt-4 max-w-2xl bg-gradient-to-tl from-zinc-400 to-white bg-clip-text pb-3 text-[clamp(40px,6vw,72px)] font-[450] leading-[1.1] tracking-tight text-transparent sm:leading-[1]">
              Supercharge your <br />
              <span className="font-freight text-[clamp(44px,6.666vw,80px)] font-medium italic">
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
            <h2 className="mt-3 max-w-md px-4 text-xl opacity-50">
              We&apos;re a fully remote design & content agency for next-gen
              businesses that iterate fast.
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
                className="rounded-lg bg-zinc-50 px-4 py-2.5 text-base font-medium text-zinc-950 hover:bg-zinc-200"
              >
                Say hello
              </Link>
            </div>
          </Motion>
        </section>

        <section className="pb-28">
          <Motion
            initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ ease: "easeInOut", delay: 0.8, duration: 0.5 }}
            className="flex w-full max-w-8xl flex-col items-center"
          >
            <p className="text-sm opacity-50">Trusted by teams at</p>
            <div className="mt-5 px-2 sm:px-4">
              <Logos />
            </div>
          </Motion>
        </section>

        {/* Services */}
        {/* <section className="mt-12 flex h-full w-full flex-col items-center rounded-[2rem]  px-4 py-32 text-center backdrop-blur-sm">
          <h2 className="mb-16 overflow-visible bg-gradient-to-t from-zinc-300 to-white bg-clip-text text-center text-4xl font-[450] leading-[1.2] tracking-tight text-transparent sm:text-[4rem]">
            This is{" "}
            <span className="overflow-visible bg-gradient-to-r from-purple-200 to-purple-400 bg-clip-text text-transparent">
              what we do
            </span>
          </h2>
          <ServicesSection />
        </section> */}

        {/* Services */}
        <section className="bg-linear-gradient flex h-full w-full flex-col items-center rounded-[2rem] from-black  px-4 pt-32 text-center backdrop-blur-sm">
          <h2 className="mb-16 overflow-visible bg-gradient-to-t from-zinc-400 to-white bg-clip-text text-center text-4xl font-[450] leading-[1.2] tracking-tight text-transparent sm:text-[3rem]">
            This is what we do
            <span className="overflow-visible bg-clip-text text-transparent"></span>
          </h2>
          <ServicesSection />
        </section>

        {/* <section className="flex h-full w-full flex-col items-center rounded-[2rem] bg-gradient-radial-to-bottom from-black  px-4 pb-16 pt-32 text-center backdrop-blur-sm">
          <h2 className="mb-16 overflow-visible bg-gradient-to-t from-zinc-200 to-white bg-clip-text text-center text-4xl font-[450] leading-[1.2] tracking-tight text-transparent sm:text-[3rem]">
            Here is how it works
            <span className="overflow-visible bg-clip-text text-transparent"></span>
          </h2>
          <DetailsSection />
        </section> */}

        {/* Testimonials */}
        <section className="bg-linear-gradient mt-36 flex w-full flex-col items-center justify-center">
          <h2 className="m-16 overflow-visible bg-gradient-to-t from-zinc-400 to-white bg-clip-text text-center text-4xl font-[450] leading-[1.2] tracking-tight text-transparent sm:text-[3rem]">
            What our users are saying
          </h2>
          <div className="flex max-w-6xl items-center">
            <TestimonialSection />
          </div>
        </section>

        <ProjectsSection />

        {/* Pricing */}
        <section className="mt-40 flex w-full max-w-6xl flex-col items-center justify-center px-4">
          <h2 className="mb-16 overflow-visible bg-gradient-to-t from-zinc-300 to-white bg-clip-text text-center text-4xl font-[450] leading-[1.2] tracking-tight text-transparent sm:text-[3rem]">
            Pricing
          </h2>

          <PricingSection />
        </section>

        {/* CTA */}
        <section className="mt-40 flex h-full w-full flex-col items-center rounded-[2rem] bg-gradient-radial-to-bottom px-4 pb-16 pt-32 text-center backdrop-blur-sm">
          {/* <h2 className="max-w-2xl bg-gradient-to-t from-zinc-300 to-white bg-clip-text text-center text-4xl sm:text-5xl font-[450] leading-9 tracking-tight text-transparent">
            Ready to get started?
          </h2> */}
          <h2 className="mt-4 max-w-3xl bg-gradient-to-t from-zinc-100 to-white bg-clip-text pb-3 text-[clamp(36px,6vw,64px)] font-[450] leading-[1] tracking-tight text-transparent">
            Ready to{" "}
            <span className="font-freight text-[clamp(40px,6.666vw,71px)] font-medium italic">
              get started?
            </span>
          </h2>
          <h2 className="mt-3 max-w-sm px-4 text-xl opacity-50">
            Leave your details and we&apos;ll contact you to see if we&apos;re a
            good fit.
          </h2>
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
          {/* <div className="mt-24 w-full max-w-6xl border-t border-white border-opacity-40"></div> */}
          <div className="mt-32 flex w-full max-w-6xl justify-between gap-2 text-sm">
            <p className="opacity-50">© 2024 Kindred House</p>
            <div className="flex flex-col items-end gap-2">
              <Link
                className="opacity-50 hover:opacity-100"
                href={"mailto:hello@kindredlab.io"}
              >
                hello@kindredlab.io
              </Link>
              <Link
                className="opacity-50 hover:opacity-100"
                href={"tel:+46709513830"}
              >
                +46 70-951 38 30{" "}
              </Link>
            </div>
          </div>
        </section>

        {/* <Footer /> */}
      </Motion>
    </main>
  );
}
