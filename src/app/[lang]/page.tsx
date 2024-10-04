import Link from "next/link";
import Image from "next/image";
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
import { NavigationArrow } from "@phosphor-icons/react/dist/ssr";
import HeroScroll from "./components/HeroScroll";

import { getDictionary } from "./dictionaries";

type Locale = "en" | "sv";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
  params: {
    lang: Locale;
  };
};

export default async function Home({
  searchParams,
  params: { lang },
}: SearchParamProps) {
  const bookDemo = searchParams?.BookDemo === "true";
  const dict = await getDictionary(lang);

  return (
    <main className="flex select-none flex-col items-center justify-center overflow-x-hidden bg-black px-0 text-left tracking-tight text-zinc-100">
      {bookDemo && <CommandK isVisible={bookDemo} />}

      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="flex w-full flex-col items-center"
      >
        <Navbar lang={lang} dict={dict} />
        {/* Hero */}
        <section className="mt-[4.5rem] flex h-full w-full max-w-8xl flex-col items-center bg-black px-4 sm:px-16">
          <div className="relative h-full w-full overflow-hidden rounded-md py-12 sm:py-20">
            <Image
              src="/images/hero-small.webp"
              alt="Hero image"
              width={1000}
              height={1000}
              className="pointer-events-none absolute left-0 top-0 h-full w-full object-left blur-lg sm:w-full sm:scale-105 sm:object-cover"
              priority
              loading="eager"
            />
            <Motion
              initial={{ opacity: 0, y: -20, filter: "blur(1rem)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ ease: "easeInOut", delay: 0.2, duration: 0.5 }}
              className="flex w-full flex-col items-start px-4 sm:px-16"
            >
              <div className="flex items-center rounded-full text-sm">
                <Link
                  href={"/"}
                  className="pl-0 font-basier opacity-100 hover:underline "
                >
                  {dict.home.announcement.tag} /
                  <span className="opacity-75">
                    {" "}
                    {dict.home.announcement.text}
                  </span>
                </Link>
              </div>
            </Motion>
            <Motion
              initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ ease: "easeInOut", delay: 0.2, duration: 0.5 }}
              className="flex w-full flex-col items-start px-4 sm:px-16"
            >
              <div className="relative mt-4 border border-white bg-gradient-to-tl from-white to-white bg-clip-text px-2 pb-3 text-[clamp(36px,6vw,72px)] font-medium leading-[1.1] tracking-tight text-transparent sm:leading-[1]">
                <h1>
                  {dict.home.hero.title.line1} <br />
                  <span className="font-freight text-[clamp(40px,6.666vw,80px)] italic">
                    {dict.home.hero.title.line2}
                  </span>
                </h1>
                <span className="absolute -bottom-1 -right-1 hidden translate-x-full translate-y-full items-start gap-1 sm:flex">
                  <NavigationArrow weight="fill" fill="#fff" size={16} />
                  <div className="mt-3 h-4 rounded-sm bg-white px-1 text-xs font-medium leading-[1.4] tracking-tight text-black">
                    Alex
                  </div>
                </span>
                {/* Boxes */}
                <span className="absolute -left-1 -top-1 h-2 w-2 border border-white bg-white"></span>
                <span className="absolute -right-1 -top-1 h-2 w-2 border border-white bg-white"></span>
                <span className="absolute -bottom-1 -left-1 h-2 w-2 border border-white bg-white"></span>
                <span className="absolute -bottom-1 -right-1 h-2 w-2 border border-white bg-white"></span>
                {/* <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 border bg-white px-1">
                  <p className="text-sm tracking-tight text-black">
                    1440 × 900
                  </p>
                </span> */}
              </div>
            </Motion>
            <Motion
              initial={{ opacity: 0, y: -20, filter: "blur(1rem)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ ease: "easeInOut", delay: 0.4, duration: 0.5 }}
              className="flex w-full flex-col items-start"
            >
              <HeroScroll />
            </Motion>
            <Motion
              initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ ease: "easeInOut", delay: 0.6, duration: 0.5 }}
              className="mt-8 flex w-full flex-col items-start justify-between px-4 sm:mt-16 sm:flex-row sm:items-center sm:px-16"
            >
              <h2 className="max-w-md text-xl opacity-100">
                {dict.home.hero.subtext.line1}
                <br className="hidden sm:block" />
                <span className="opacity-50">
                  {" "}
                  {dict.home.hero.subtext.line2}
                </span>
              </h2>
              <div className="mt-8 flex flex-row-reverse items-center justify-center gap-8 sm:mt-0 sm:flex-row">
                <Link
                  href="mailto:hello@kindredlab.io"
                  className="font-basier text-sm hover:underline"
                >
                  {dict.home.hero.cta1}
                </Link>
                <Link
                  href={`/${lang}/?BookDemo=true`}
                  className="flex items-center justify-center gap-3 rounded-full bg-white px-8 py-3 font-basier text-sm text-black hover:bg-zinc-100"
                  scroll={false}
                  replace
                >
                  {dict.home.hero.cta2}
                  <span className="flex h-6 w-8 items-center justify-center rounded-[4px] border border-zinc-200 bg-zinc-100 text-[12px]">
                    ⌘ K
                  </span>
                </Link>
              </div>
            </Motion>
          </div>
        </section>

        {/* Logos */}
        <section className="my-24">
          <Motion
            initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ ease: "easeInOut", delay: 0.8, duration: 0.5 }}
            className="flex w-full max-w-8xl flex-col items-center"
          >
            <p className="font-basier text-sm opacity-50">
              TRUSTED BY TEAMS AT
            </p>
            <div className="mt-5 px-2 sm:px-4">
              <Logos />
            </div>
          </Motion>
        </section>

        {/* Services */}
        <section className="flex h-full w-full flex-col items-center rounded-md bg-white px-0 py-32 backdrop-blur-sm">
          <ServicesSection dict={dict} />
        </section>

        {/* Testimonials */}
        <section className="mt-36 flex w-full flex-col items-center justify-center ">
          <TestimonialSection />
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
        <section className="bg-gradient-radial-to-bottom mt-40 flex h-full w-full flex-col items-center rounded-[2rem] px-4 pb-16 pt-32 text-center backdrop-blur-sm">
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
