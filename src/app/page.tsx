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
import ProjectScroll from "./components/ProjectScroll";
import Project from "./components/Project";

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
        <section className="mt-8 flex h-full w-full flex-col items-center rounded-[2rem] bg-[radial-gradient(170%_100%_at_top,_#010314_30%,_#592ED3_60%,_#D6CBF5_100%)] px-4 py-40 text-center backdrop-blur-sm sm:px-0">
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
              <p className="pl-2 opacity-50 ">2 spots open for October</p>
            </div>
          </Motion>
          <Motion
            initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ ease: "easeInOut", delay: 0.2, duration: 0.5 }}
            className="flex w-full max-w-8xl flex-col items-center"
          >
            <h1 className="mt-4 max-w-2xl bg-gradient-to-t from-zinc-100 to-white bg-clip-text pb-3 text-[clamp(36px,6vw,80px)] font-[450] leading-[1] tracking-tight text-transparent">
              Supercharge your <br />
              <span className="font-freight text-[clamp(40px,6.666vw,90px)] font-medium italic">
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
              We&apos;re a fully remote design partner for next-gen businesses
              that iterate fast.
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

        {/* Testimonials */}
        <section className="mt-40 flex max-w-6xl flex-col items-center justify-center px-4">
          <h2 className="mb-16 overflow-visible bg-gradient-to-t from-zinc-300 to-white bg-clip-text text-center text-4xl font-[450] leading-[1.2] tracking-tight text-transparent sm:text-[3rem]">
            What our users are saying
          </h2>

          <TestimonialSection />
        </section>

        {/* Services */}
        <section className="mt-40 flex h-full w-full flex-col items-center rounded-[2rem] bg-[radial-gradient(170%_100%_at_bottom,_#010314_30%,_#592ED3_60%,_#D6CBF5_100%)] px-4 py-32 text-center backdrop-blur-sm">
          <h2 className="mb-16 overflow-visible bg-gradient-to-t from-zinc-300 to-white bg-clip-text text-center text-4xl font-[450] leading-[1.2] tracking-tight text-transparent sm:text-[3rem]">
            Ship products blazing fast
          </h2>
          <ServicesSection />
        </section>

        {/* Projects */}
        <section className="mt-16 flex h-full w-full  flex-col items-center rounded-[2rem] bg-[radial-gradient(170%_100%_at_top,_#010314_30%,_#592ED3_60%,_#D6CBF5_100%)] py-32 text-center backdrop-blur-sm">
          <h2 className="mb-16 overflow-visible bg-gradient-to-t from-zinc-300 to-white bg-clip-text text-center text-4xl font-[450] leading-[1.2] tracking-tight text-transparent sm:text-[3rem]">
            Recent work
          </h2>
          <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 px-4">
            <Project
              client="Qura"
              year="2024"
              tags={["Web Design", "Web Dev", "UX/UI", "Product Design"]}
              thumbnail="/images/qura/qura-1.png"
            />

            <Project
              client="Airbon"
              year="2024"
              tags={["Web Design", "Web Dev", "Branding"]}
              thumbnail="/images/airbon/airbon-1.png"
            />
            <Project
              client="MycoMine"
              year="2024"
              tags={["Web Design", "Web Dev", "Branding", "Content"]}
              thumbnail="/images/mycomine/mycomine-1.png"
            />

            <Project
              client="Payable"
              year="2024"
              tags={["Web Design", "Web Dev", "Branding"]}
              thumbnail="/images/payable/payable-3.png"
            />
            <Project
              client="Flexiwaggon"
              year="2024"
              tags={["Web Design", "Web Dev", "Branding"]}
              thumbnail="/images/flexiwaggon/flexiwaggon-1.png"
            />

            <Project
              client="Truck on Track Solutions"
              year="2024"
              tags={["Web Design", "Web Dev", "Branding"]}
              thumbnail="/images/tts/tts-1.png"
            />
          </div>

          {/* <ProjectScroll /> */}
        </section>

        {/* Pricing */}
        <section className="mt-40 flex w-full max-w-6xl flex-col items-center justify-center px-4">
          <h2 className="mb-16 overflow-visible bg-gradient-to-t from-zinc-300 to-white bg-clip-text text-center text-4xl font-[450] leading-[1.2] tracking-tight text-transparent sm:text-[3rem]">
            Pricing
          </h2>

          <PricingSection />
        </section>

        {/* CTA */}
        <section className="mt-40 flex h-full w-full flex-col items-center rounded-[2rem] bg-[radial-gradient(170%_100%_at_bottom,_#010314_30%,_#592ED3_60%,_#D6CBF5_100%)] px-4 pb-16 pt-32 text-center backdrop-blur-sm">
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
