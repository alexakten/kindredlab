import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Motion } from "./components/Motion";
import Logos from "./components/Logos";

import Project from "./components/Project";
import { NavigationArrow } from "@phosphor-icons/react/dist/ssr";
import HeroScroll from "./components/HeroScroll";
import { AnimatePresence, motion } from "motion/react";

import { getDictionary } from "./dictionaries";
import SlackMessage from "./components/SlackMessage";
import PostIt from "./components/PostIt";
import Polaroid from "./components/Polaroid";
import Kanban from "./components/Kanban";
import CalendarEvent from "./components/CalendarEvent";
import FAQ from "./components/FAQ";
import CalEmbed from "./components/CalEmbed";
import KindredLogo from "./components/KindredLogo";

type Locale = "en" | "se";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
  params: {
    lang: Locale;
  };
};

// Define the type for the items in the list
type ListItem = {
  image: string;
  title: string;
  description: string;
};

export default async function Home({
  searchParams,
  params: { lang },
}: SearchParamProps) {
  const dict = await getDictionary(lang);

  return (
    <main className="flex select-none flex-col items-center justify-center overflow-x-hidden bg-white px-1.5 py-1 text-left tracking-tight text-neutral-100 sm:px-4 sm:py-4">
      <Motion
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="flex w-full flex-col items-center"
      >
        {/* <Navbar lang={lang} dict={dict} /> */}
        {/* Hero */}
        <section className="relative flex w-full max-w-8xl flex-col items-center overflow-hidden rounded-4xl bg-neutral-950 pb-20">
          {/* <Image
            src="/images/hero.webp"
            alt="Hero image"
            layout="fill"
            objectFit="cover"
            className="pointer-events-none brightness-100"
            priority
            loading="eager"
          /> */}
          <div className="rounded-m relative flex h-full w-full flex-col items-center overflow-hidden pt-8 sm:pt-10">
            <Motion
              initial={{ opacity: 0, y: -20, filter: "blur(1rem)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ ease: "easeInOut", delay: 0.6, duration: 0.5 }}
              className="flex w-full flex-col items-center"
            >
              <div className="invert">
                <KindredLogo />
              </div>
            </Motion>
            <Motion
              initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ ease: "easeInOut", delay: 0.2, duration: 0.5 }}
              className="flex w-full flex-col items-center px-4 sm:items-center sm:px-16"
            >
              <div className="relative mt-16 pb-3 sm:mt-28">
                <h1 className="text-center font-minion text-[clamp(40px,6.666vw,80px)] leading-[1.1] tracking-tight text-white sm:text-center sm:leading-[1.1]">
                  {dict.home.hero.title.line1}
                  <span className="relative ml-1 border-white pl-1 pr-2.5 sm:ml-2 md:ml-3 md:border lg:ml-4">
                    {dict.home.hero.title.highlight}
                    {/* <span className="md:hidden">.</span> */}
                    <span className="absolute -right-1 -top-1 hidden -translate-y-full translate-x-full items-end gap-1 md:flex">
                      <NavigationArrow
                        weight="fill"
                        fill="#571CFF"
                        size={16}
                        style={{ transform: "scaleY(-1)" }}
                      />
                      <div className="mb-3 flex h-5 items-center justify-center rounded-full bg-[#571CFF] px-2 font-inter text-xs font-medium leading-[1.4] tracking-tight text-white">
                        Kindred
                      </div>
                    </span>
                    {/* Boxes */}
                    <span className="-left-1 -top-1 hidden h-2 w-2 border border-white bg-white md:absolute md:block"></span>
                    <span className="-right-1 -top-1 hidden h-2 w-2 border border-white bg-white md:absolute md:block"></span>
                    <span className="-bottom-1 -left-1 hidden h-2 w-2 border border-white bg-white md:absolute md:block"></span>
                    <span className="-bottom-1 -right-1 hidden h-2 w-2 border border-white bg-white md:absolute md:block"></span>
                  </span>
                  <br />
                  {dict.home.hero.title.line2}
                </h1>
              </div>
              <Motion
                initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
                transition={{ ease: "easeInOut", delay: 0.6, duration: 0.5 }}
                className="mt-4"
              >
                <h2 className="max-w-xl text-center text-lg opacity-100 sm:text-center">
                  {dict.home.hero.subtext.line1}
                  <br className="hidden sm:block" />
                  <span className="opacity-50">
                    {" "}
                    {dict.home.hero.subtext.line2}
                  </span>
                </h2>
                <div className="mt-8 flex flex-row-reverse items-center justify-center gap-8 sm:mt-8 sm:flex-row">
                  {/* <Link
                    href="mailto:hello@kindredlab.io"
                    className="font-basier text-sm hover:underline"
                  >
                    {dict.home.hero.cta1}
                  </Link> */}
                  <Link
                    href="https://cal.com/kindred-house/30min"
                    className="relative flex items-center justify-center gap-3 rounded-full bg-white px-6 py-2 font-basier text-xs text-black hover:bg-neutral-200 sm:text-sm"
                    scroll={false}
                    replace
                  >
                    {dict.home.hero.cta2}
                    {/* <span className="hidden h-6 w-8 items-center justify-center rounded-[4px] border border-neutral-600 bg-neutral-900 text-[12px] sm:flex">
                      ⌘ K
                    </span> */}
                    <span className="absolute -right-1 bottom-1/2 flex translate-x-full translate-y-full items-start gap-1 md:hidden">
                      <NavigationArrow weight="fill" fill="#571CFF" size={16} />
                      <div className="mt-3 flex h-5 items-center justify-center rounded-full bg-[#571CFF] px-2 font-inter text-xs font-medium leading-[1.4] tracking-tight text-white">
                        Kindred
                      </div>
                    </span>
                  </Link>
                </div>
              </Motion>
            </Motion>
            <Motion
              initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ ease: "easeInOut", delay: 0.8, duration: 0.5 }}
              className="flex w-full max-w-8xl flex-col items-center"
            >
              <div className="mt-12 px-2 sm:px-4">
                <Logos />
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
          </div>
        </section>

        {/* Services */}
        <section className="rounded-m flex h-full w-full flex-col items-center bg-white py-2 text-neutral-900 sm:py-4">
          <div className="relative flex w-full max-w-8xl flex-col items-center overflow-hidden rounded-4xl bg-neutral-100 px-2 py-64">
            {/* Artwork */}

            <AnimatePresence>
              {/* Slack */}
              <Motion
                className="absolute -right-20 top-6 z-10 rotate-6 sm:-right-8 sm:top-16 md:absolute md:-right-4 md:block"
                initial={{ x: 100, opacity: 0, rotate: 0 }} // Start off-screen to the right with no rotation
                whileInView={{ x: 0, opacity: 1, rotate: 6 }} // Animate to rotated position
                exit={{ x: 100, opacity: 0, rotate: 0 }} // Slide out with no rotation
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <SlackMessage
                  channel={dict.home.services.slack.channel}
                  author={dict.home.services.slack.author}
                  messageParts={[
                    { text: "", highlight: false },
                    { text: "@kindred", highlight: true },
                    {
                      text: ` ${dict.home.services.slack.message}`,
                      highlight: false,
                    },
                  ]}
                  date="Today at 14:32"
                />
              </Motion>

              {/* Postit */}
              <Motion
                className="absolute left-10 top-80 hidden -rotate-6 lg:block"
                initial={{ x: -100, opacity: 0, rotate: 0 }} // Start off-screen to the left with no rotation
                whileInView={{ x: 0, opacity: 1, rotate: -6 }} // Animate to rotated position
                exit={{ x: -100, opacity: 0, rotate: 0 }} // Slide out with no rotation
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <PostIt
                  color="bg-yellow-300"
                  message={dict.home.services.postit}
                />
              </Motion>

              {/* Figma Website */}
              <Motion
                className="absolute -left-32 -top-8 aspect-[16/9] w-96 rotate-6 sm:-left-8 sm:-top-8"
                initial={{ y: -100, opacity: 0, rotate: 0 }} // Start off-screen at the top with no rotation
                whileInView={{ y: 0, opacity: 1, rotate: 6 }} // Animate to rotated position
                exit={{ y: -100, opacity: 0, rotate: 0 }} // Slide out with no rotation
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <div className="relative h-full w-full border border-blue-500">
                  <Image
                    src="/images/qura-hero-screen.webp"
                    alt="Hero image"
                    width={1000}
                    height={1000}
                    className="absolute left-0 top-0 h-full w-full object-cover"
                  />
                  <span className="absolute -right-2 top-24 flex translate-x-full translate-y-full items-start gap-1">
                    <NavigationArrow weight="fill" fill="#f97316" size={16} />
                    <div className="mt-3 flex h-5 items-center justify-center rounded-full bg-orange-500 px-2 font-inter text-xs font-medium leading-[1.4] tracking-tight text-white">
                      Alex
                    </div>
                  </span>
                  <span className="absolute -left-1 -top-1 h-2 w-2 border border-blue-500 bg-white"></span>
                  <span className="absolute -right-1 -top-1 h-2 w-2 border border-blue-500 bg-white"></span>
                  <span className="absolute -bottom-1 -left-1 h-2 w-2 border border-blue-500 bg-white"></span>
                  <span className="absolute -bottom-1 -right-1 h-2 w-2 border border-blue-500 bg-white"></span>
                  <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 bg-blue-500 px-1">
                    <p className="text-xs font-medium tracking-tight text-white">
                      1440 × 900
                    </p>
                  </span>
                </div>
              </Motion>

              {/* Polaroid */}
              <Motion
                className="absolute -bottom-40 -right-8 z-10 hidden rotate-6 lg:block "
                initial={{ y: 100, opacity: 0, rotate: 0 }} // Start off-screen at the bottom with no rotation
                whileInView={{ y: 0, opacity: 1, rotate: 6 }} // Animate to rotated position
                exit={{ y: 100, opacity: 0, rotate: 0 }} // Slide out with no rotation
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <Polaroid image="/images/hero-scroll/hero-scroll-3.webp" />
              </Motion>

              {/* Kanban */}
              <Motion
                className="absolute -bottom-12 -right-20 z-10 rotate-6 sm:-right-12 sm:-rotate-6 lg:top-56"
                initial={{ x: 100, opacity: 0, rotate: 0 }} // Start off-screen to the right with no rotation
                whileInView={{ x: 0, opacity: 1, rotate: -6 }} // Animate to rotated position
                exit={{ x: 100, opacity: 0, rotate: 0 }} // Slide out with no rotation
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <Kanban
                  group={dict.home.services.kanban.group}
                  items={dict.home.services.kanban.items}
                  task1={dict.home.services.kanban.task1}
                  task2={dict.home.services.kanban.task2}
                  comments={dict.home.services.kanban.comments}
                  days={dict.home.services.kanban.days}
                />
              </Motion>

              {/* Calendar */}
              <Motion
                className="absolute bottom-8 left-4 rotate-6 flex-col gap-0.5 md:absolute md:bottom-16 md:left-8 md:flex"
                initial={{ x: -100, opacity: 0, rotate: 0 }} // Start off-screen to the left with no rotation
                whileInView={{ x: 0, opacity: 1, rotate: 6 }} // Animate to rotated position
                exit={{ x: -100, opacity: 0, rotate: 0 }} // Slide out with no rotation
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <CalendarEvent
                  event={dict.home.services.calendar.event1.title}
                  location={dict.home.services.calendar.event1.type}
                  time={dict.home.services.calendar.event1.time}
                />
                <CalendarEvent
                  event={dict.home.services.calendar.event2.title}
                  location={dict.home.services.calendar.event2.type}
                  time={dict.home.services.calendar.event2.time}
                />
              </Motion>
            </AnimatePresence>

            <aside className="flex items-center justify-center">
              <KindredLogo />
              <span className="ml-1 font-basier text-sm font-normal opacity-50">
                {dict.home.services.tag}
              </span>
            </aside>
            <h2 className="mt-2 max-w-2xl px-6 text-center font-minion text-[clamp(40px,6.666vw,80px)] leading-[1.1] tracking-tighter sm:leading-[1]">
              {dict.home.services.title}
            </h2>
            <div className="mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-2 px-4">
              {dict.home.services.list.map((service: string, index: number) => (
                <p
                  key={index}
                  className="rounded-full bg-white px-4 py-1 font-basier text-xs tracking-normal"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="flex h-full w-full max-w-8xl flex-col items-center rounded-4xl bg-neutral-100 px-4 py-16 text-neutral-900 sm:px-16 md:py-40">
          <p className="font-basier text-sm opacity-50">
            {dict.home.projects.tag}
          </p>
          <h2 className="mt-2 max-w-2xl text-center font-minion text-[clamp(40px,6.666vw,80px)] leading-[1.1] tracking-tighter sm:leading-[1]">
            {dict.home.projects.title}
          </h2>

          <div className="mt-16 flex w-full max-w-6xl flex-col gap-4 md:mt-32">
            <AnimatePresence>
              {Object.entries(dict.case).map(([key, project]) => {
                // Explicitly define the type of `project`
                const typedProject = project as {
                  thumbnailLocation: "left" | "right";
                  comingSoon?: boolean;
                  thumbnail: string;
                  link: string;
                  logo: string;
                  topTag?: string;
                  tagline?: string;
                  services?: string[];
                  quote?: string;
                  profile?: string;
                  author?: string;
                  role?: string;
                };

                return (
                  <Motion
                    key={key}
                    initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                    exit={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
                    transition={{ ease: "easeInOut", duration: 0.5 }}
                    viewport={{ once: false, margin: "-100px" }}
                  >
                    <Project
                      thumbnailLocation={typedProject.thumbnailLocation}
                      comingSoon={typedProject.comingSoon}
                      thumbnail={typedProject.thumbnail}
                      link={`/${lang}${typedProject.link}`}
                      logo={typedProject.logo}
                      topTag={typedProject.topTag}
                      tagline={typedProject.tagline}
                      services={typedProject.services}
                      quote={typedProject.quote}
                      profile={typedProject.profile}
                      author={typedProject.author}
                      role={typedProject.role}
                    />
                  </Motion>
                );
              })}
            </AnimatePresence>
          </div>
        </section>

        {/* How */}
        <section className="rounded-m flex h-full w-full flex-col items-center bg-white px-4 py-16 text-neutral-900 sm:px-16 md:py-40">
          <p className="font-basier text-sm opacity-50">{dict.home.how.tag}</p>
          <h2 className="mt-2 max-w-5xl text-center font-minion text-[clamp(40px,6.666vw,80px)] leading-[1.1] tracking-tighter sm:leading-[1]">
            {dict.home.how.title}
          </h2>

          <div className="mt-16 flex w-full max-w-8xl flex-col gap-4 md:mt-32">
            <AnimatePresence>
              <Motion
                className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2, // Add a delay between each child's animation
                    },
                  },
                  hidden: {
                    opacity: 0,
                    transition: {
                      staggerChildren: 0.2,
                      staggerDirection: -1, // Reverse the stagger when exiting
                    },
                  },
                }}
              >
                {dict.home.how.list.map((item: ListItem, index: number) => (
                  <Motion
                    key={index}
                    className="flex w-full flex-col"
                    initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }} // Initial state
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }} // Trigger when in view
                    exit={{ opacity: 0, y: 20, filter: "blur(1rem)" }} // Exit state
                    transition={{
                      ease: "easeInOut",
                      duration: 0.5,
                      delay: index * 0.2, // Stagger effect per item
                    }}
                    viewport={{ once: false, margin: "-100px" }} // Trigger both on scroll in and out
                  >
                    {/* Image */}
                    <aside className="relative h-[32rem] w-full overflow-hidden rounded-xl">
                      <Image
                        src={item.image} // Use dynamic image source
                        alt={item.title} // Use the title as alt text for accessibility
                        width={1000}
                        height={1000}
                        className="absolute left-0 top-0 h-full w-full object-cover"
                      />
                      <div className="absolute left-4 top-4 rounded-full bg-white px-8 py-1">
                        <p className="font-basier text-sm font-medium tracking-tight">
                          {index + 1}
                        </p>
                      </div>
                    </aside>

                    {/* Title and Description */}
                    <aside className="mt-8 flex flex-col">
                      <p className="text-2xl tracking-tight">{item.title}</p>
                      <p className="mt-2 max-w-sm opacity-50">
                        {item.description}
                      </p>
                    </aside>
                  </Motion>
                ))}
              </Motion>
            </AnimatePresence>
          </div>
        </section>

        {/* FAQ */}
        <section className="flex h-full w-full flex-col items-center rounded-4xl bg-white text-neutral-900 md:px-0 md:py-4">
          <div className="relative flex w-full max-w-8xl flex-col items-center overflow-hidden bg-neutral-100 px-6 pb-64 pt-16 sm:px-16 md:rounded-4xl md:py-64">
            <p className="font-basier text-sm opacity-50">
              {dict.home.faq.tag}
            </p>
            <h2 className="mt-2 max-w-3xl text-center font-minion text-[clamp(40px,6.666vw,80px)] leading-[1.1] tracking-tighter sm:leading-[1]">
              {dict.home.faq.title}
            </h2>
            <AnimatePresence>
              <Motion
                className="absolute bottom-6 right-10 hidden rotate-6 md:right-24 md:top-24  md:block"
                initial={{ x: 100, opacity: 0, rotate: 0 }} // Start off-screen to the right with no rotation
                whileInView={{ x: 0, opacity: 1, rotate: 6 }} // Animate to rotated position
                exit={{ x: 100, opacity: 0, rotate: 0 }} // Slide out to the right with no rotation
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <PostIt color="bg-blue-200" message={dict.home.faq.postit} />
              </Motion>
            </AnimatePresence>

            <div className="mt-16 w-full max-w-2xl">
              <FAQ questions={dict.home.faq.questions} />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative flex h-full w-full max-w-8xl flex-col items-center overflow-hidden rounded-4xl bg-neutral-950  px-4 pb-16 pt-32 text-center">
          {/* <Image
            src="/images/hero-green.png"
            alt="Hero image"
            width={1000}
            height={1000}
            className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full object-left blur-lg sm:w-full sm:scale-105 sm:object-cover"
            priority
            loading="eager"
          /> */}
          {/* <p className="font-basier text-sm opacity-50">{dict.home.cta.tag}</p> */}
          <h2 className="z-10  text-center font-minion text-[clamp(40px,6.666vw,80px)] leading-[1.1] tracking-tight text-white sm:leading-[1]">
            {dict.home.cta.title}
          </h2>

          <div className="z-10 mt-20 w-full rounded-2xl">
            <CalEmbed />
          </div>

          {/* <h2 className="z-10 mt-8 max-w-lg text-center text-lg opacity-100 sm:text-center">
            {dict.home.cta.subtext.line1}
            <br className="hidden sm:block" />
            <span className="opacity-50"> {dict.home.cta.subtext.line2}</span>
          </h2>
          <div className="relative z-10 mt-8 flex flex-row-reverse items-center justify-center gap-8 sm:mt-8 sm:flex-row">
            <Link
              href={`/${lang}/?BookDemo=true`}
              className="flex items-center justify-center gap-3 rounded-full bg-white px-8 py-3 font-basier text-sm text-black hover:bg-neutral-100"
              scroll={false}
              replace
            >
              {dict.home.cta.cta1}
              <span className="flex h-6 w-8 items-center justify-center rounded-[4px] border border-neutral-200 bg-neutral-100 text-[12px]">
                ⌘ K
              </span>
            </Link>
          </div> */}
          {/* <div className="mt-24 w-full max-w-6xl border-t border-white border-opacity-40"></div> */}
          <div className="relative z-10 mt-12 flex w-full max-w-8xl justify-between gap-2 px-4 text-sm text-white sm:px-16">
            <p className="opacity-50">© 2025 Kindred Lab</p>
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
      {/* <div
        className="pointer-events-none max-w-8xl fixed inset-x-0 bottom-0 h-16 bg-transparent  backdrop-blur-md"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, white 80%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, white 80%)",
        }}
      ></div> */}
    </main>
  );
}
