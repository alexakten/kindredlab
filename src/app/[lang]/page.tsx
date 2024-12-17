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
  const bookDemo = searchParams?.BookDemo === "true";
  const dict = await getDictionary(lang);

  return (
    <main className="flex select-none flex-col items-center justify-center overflow-x-hidden bg-black px-0 text-left tracking-tight text-zinc-100">
      {bookDemo && <CommandK isVisible={bookDemo} />}

      <Motion
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="flex w-full flex-col items-center"
      >
        <Navbar lang={lang} dict={dict} />
        {/* Hero */}
        <section className="flex min-h-[100svh] w-full max-w-8xl flex-col items-center overflow-hidden bg-black">
          <div className="rounded-m relative h-full w-full overflow-hidden py-20 pt-28 sm:pt-36">
            <Image
              src="/images/hero-green.png"
              alt="Hero image"
              width={1000}
              height={1000}
              className="pointer-events-none absolute left-0 top-0 h-full w-full blur-xl brightness-75 sm:w-full sm:scale-105 sm:object-cover"
              priority
              loading="eager"
            />
            {/* <Motion
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
            </Motion> */}
            <Motion
              initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ ease: "easeInOut", delay: 0.2, duration: 0.5 }}
              className="flex w-full flex-col items-start px-4 sm:items-center sm:px-16"
            >
              <div className="relative mt-4 px-0 pb-3 sm:px-2  ">
                <h1 className="text-left font-sabon text-[clamp(40px,6.666vw,80px)] leading-[1.1] tracking-tight text-white sm:text-center sm:leading-[1]">
                  {dict.home.hero.title.line1}
                  <span className="relative ml-2 border border-white pl-1 pr-2 sm:ml-2 md:ml-3 lg:ml-4">
                    {dict.home.hero.title.highlight}
                    <span className="absolute -bottom-1 -right-1 hidden translate-x-full translate-y-full items-start gap-1 sm:flex">
                      <NavigationArrow weight="fill" fill="#4C00F1" size={16} />
                      <div className="mt-3 flex h-5 items-center justify-center rounded-full bg-[#4C00F1] px-2 font-inter text-xs font-medium leading-[1.4] tracking-tight text-white">
                        Kindred
                      </div>
                    </span>
                    {/* Boxes */}
                    <span className="absolute -left-1 -top-1 h-2 w-2 border border-white bg-white"></span>
                    <span className="absolute -right-1 -top-1 h-2 w-2 border border-white bg-white"></span>
                    <span className="absolute -bottom-1 -left-1 h-2 w-2 border border-white bg-white"></span>
                    <span className="absolute -bottom-1 -right-1 h-2 w-2 border border-white bg-white"></span>
                    {/* <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 border bg-white px-1">
                  <p className="text-xs tracking-tight text-black">
                    1440 × 900
                  </p>
                </span> */}
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
                <h2 className="max-w-lg text-left text-lg opacity-100 sm:text-center">
                  {dict.home.hero.subtext.line1}
                  <br className="hidden sm:block" />
                  <span className="opacity-50">
                    {" "}
                    {dict.home.hero.subtext.line2}
                  </span>
                </h2>
                <div className="mt-8 flex flex-row-reverse items-center justify-center gap-8 sm:mt-6 sm:flex-row">
                  {/* <Link
                    href="mailto:hello@kindredlab.io"
                    className="font-basier text-sm hover:underline"
                  >
                    {dict.home.hero.cta1}
                  </Link> */}
                  <Link
                    href={`/${lang}/?BookDemo=true`}
                    className="flex items-center justify-center gap-3 rounded-full bg-black px-8 py-3 font-basier text-sm text-white hover:bg-zinc-900"
                    scroll={false}
                    replace
                  >
                    {dict.home.hero.cta2}
                    <span className="flex h-6 w-8 items-center justify-center rounded-[4px] border border-zinc-700 bg-zinc-900 text-[12px]">
                      ⌘ K
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
        <section className="rounded-m flex h-full w-full flex-col items-center bg-white px-4 py-8 text-zinc-900 sm:px-16">
          <div className="relative flex w-full max-w-8xl flex-col items-center overflow-hidden rounded-3xl bg-zinc-100 py-64">
            {/* Artwork */}

            <AnimatePresence>
              <Motion
                className="absolute z-10 -right-24 md:-right-4 top-6 rotate-6 sm:-right-8 sm:top-16"
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

              <Motion
                className="absolute left-10 top-80 hidden -rotate-6 md:block"
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

              <Motion
                className="absolute -left-24 -top-8 aspect-[16/9] w-96 rotate-6 scale-75 sm:-left-8 sm:-top-8"
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
                    src="/images/qura-hero.png"
                    alt="Hero image"
                    width={1000}
                    height={1000}
                    className="absolute left-0 top-0 h-full w-full object-cover"
                  />
                  <span className="absolute -right-2 top-24 hidden translate-x-full translate-y-full items-start gap-1 sm:flex">
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

              <Motion
                className="absolute z-10 -bottom-40 md:-bottom-28 -right-8 rotate-6"
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

              <Motion
                className="absolute -right-12 top-56 hidden -rotate-6 md:block"
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

              <Motion
                className="absolute bottom-8 md:bottom-16 left-4 md:left-8 flex rotate-6 flex-col gap-0.5"
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

            <p className="font-sabon text-lg font-bold">
              kindred
              <span className="ml-1 font-basier text-sm font-normal opacity-50">
                {dict.home.services.tag}
              </span>
            </p>
            <h2 className="mt-2 max-w-2xl text-center font-sabon text-[clamp(40px,6.666vw,80px)] leading-[1.1] tracking-tighter sm:leading-[1]">
              {dict.home.services.title}
            </h2>
            <div className="mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-2">
              {dict.home.services.list.map((service: string, index: number) => (
                <p
                  key={index}
                  className="rounded-full bg-white px-4 py-1 font-basier tracking-normal"
                >
                  {service}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="rounded-m flex h-full w-full flex-col items-center bg-zinc-100 px-4 py-40 text-zinc-900 sm:px-16">
          <p className="font-basier text-sm opacity-50">
            {dict.home.projects.tag}
          </p>
          <h2 className="mt-2 max-w-2xl text-center font-sabon text-[clamp(40px,6.666vw,80px)] leading-[1.1] tracking-tighter sm:leading-[1]">
            {dict.home.projects.title}
          </h2>

          <div className="mt-32 flex w-full max-w-6xl flex-col gap-4">
            <AnimatePresence>
              <Motion
                initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                exit={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                viewport={{ once: false, margin: "-100px" }} // Animates both on enter and exit
              >
                <Project
                  thumbnailLocation="left"
                  thumbnail1="/images/qura/qura-3.png"
                  thumbnail2="/images/qura/qura-3.png"
                  thumbnail3="/images/qura/qura-2.png"
                  company="Qura"
                  logo="/images/qura/qura-logo.png"
                  tagline="Hjälper Qura att resa $2.1M genom blixtsnabb designiteration."
                  tags={["UX/UI", "PRODUCT DESIGN", "DESIGN SYSTEM", "WEB"]}
                  testimonial="Med Kindred kan vi testa nya versioner av vår app och få feedback direkt från användare. Varje design som levereras är helt magisk!"
                  profile="/images/profiles/arvid.png"
                  name="Arvid Winterfeldt"
                  role="CEO at Qura"
                />
              </Motion>

              <Motion
                initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                exit={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                viewport={{ once: false, margin: "-100px" }} // Animates both on enter and exit
              >
                <Project
                  thumbnailLocation="right"
                  thumbnail1="/images/mycomine/mycomine-1.png"
                  thumbnail2="/images/mycomine/mycomine-2.png"
                  thumbnail3="/images/mycomine/mycomine-3.png"
                  company="MycoMine"
                  logo="/images/mycomine/mycomine-logo.png"
                  tagline="MycoMine får ett komplett facelift med en ny hemsida. "
                  tags={["UX/UI", "PRODUCT DESIGN", "DESIGN SYSTEM", "WEB"]}
                  testimonial="Med Kindred kan vi testa nya versioner av vår app och få feedback direkt från användare. Varje design som levereras är helt magisk!"
                  profile="/images/profiles/magnus.png"
                  name="Magnus Ivarsson"
                  role="CEO at MycoMine"
                />
              </Motion>

              <Motion
                initial={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
                exit={{ opacity: 0, y: 20, filter: "blur(1rem)" }}
                transition={{ ease: "easeInOut", duration: 0.5 }}
                viewport={{ once: false, margin: "-100px" }} // Animates both on enter and exit
              >
                <Project
                  thumbnailLocation="left"
                  thumbnail1="/images/payable/payable-2.png"
                  thumbnail2="/images/payable/payable-2.png"
                  thumbnail3="/images/payable/payable-3.png"
                  company="Payable"
                  logo="/images/payable/payable-logo.png"
                  tagline="Lanserar Payable på den Nordiska marknaden."
                  tags={["UX/UI", "PRODUCT DESIGN", "DESIGN SYSTEM", "WEB"]}
                  testimonial="Med Kindred kan vi testa nya versioner av vår app och få feedback direkt från användare. Varje design som levereras är helt magisk!"
                  profile="/images/profiles/hans.png"
                  name="Hans Delking"
                  role="CEO at Payable"
                />
              </Motion>
            </AnimatePresence>
          </div>
        </section>

        {/* How */}
        <section className="rounded-m flex h-full w-full flex-col items-center bg-white px-4 py-40 text-zinc-900 sm:px-16">
          <p className="font-basier text-sm opacity-50">{dict.home.how.tag}</p>
          <h2 className="mt-2 max-w-5xl text-center font-sabon text-[clamp(40px,6.666vw,80px)] leading-[1.1] tracking-tighter sm:leading-[1]">
            {dict.home.how.title}
          </h2>

          <div className="mt-32 flex w-full max-w-8xl flex-col gap-4">
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
        <section className="rounded-m flex h-full w-full flex-col items-center bg-white px-4 py-8 text-zinc-900 sm:px-16">
          <div className="relative flex w-full max-w-8xl flex-col items-center overflow-hidden rounded-3xl bg-zinc-100 py-64">
            <p className="font-basier text-sm opacity-50">
              {dict.home.faq.tag}
            </p>
            <h2 className="mt-2 max-w-3xl text-center font-sabon text-[clamp(40px,6.666vw,80px)] leading-[1.1] tracking-tighter sm:leading-[1]">
              {dict.home.faq.title}
            </h2>
            <AnimatePresence>
              {/* <Motion
                className="absolute left-4 top-4 -rotate-6 sm:left-8 sm:top-16"
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
              </Motion> */}

              <Motion
                className="absolute right-10 top-24  rotate-6"
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

              {/* <Motion
                className="absolute -bottom-24 left-10 -rotate-6"
                initial={{ y: 100, opacity: 0, rotate: 0 }} // Start off-screen at the bottom with no rotation
                whileInView={{ y: 0, opacity: 1, rotate: -6 }} // Animate to rotated position
                exit={{ y: 100, opacity: 0, rotate: 0 }} // Slide out with no rotation
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20,
                }}
                viewport={{ once: false, margin: "-100px" }}
              >
                <Polaroid image="/images/hero-scroll/hero-scroll-4.webp" />
              </Motion> */}
            </AnimatePresence>

            <div className="mt-16 w-full max-w-2xl">
              <FAQ questions={dict.home.faq.questions} />
            </div>
          </div>
        </section>

        {/* Pricing */}
        {/* <section className="relative flex w-full max-w-8xl flex-col items-start justify-center overflow-hidden px-4 py-28 sm:px-16">
          <Image
            src="/images/hero.png"
            alt="Hero image"
            width={1000}
            height={1000}
            className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full object-left blur-lg sm:w-full sm:scale-105 sm:object-cover"
            priority
            loading="eager"
          />
          <div className="relative z-10 flex w-full max-w-8xl flex-col text-white">
            <div className="flex w-full max-w-8xl flex-col items-start">
              <p className="font-basier text-sm opacity-50">OUR PLANS</p>
              <h2 className="mb-12 mt-2 text-center text-4xl font-semibold leading-[1.2] tracking-tight sm:text-4xl">
                Pricing
              </h2>
            </div>
          </div>

          <PricingSection />
        </section> */}

        {/* CTA */}
        <section className="rounded-m relative flex h-full w-full flex-col items-center overflow-hidden  px-4 pb-16 pt-32 text-center">
          <Image
            src="/images/hero-green.png"
            alt="Hero image"
            width={1000}
            height={1000}
            className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full object-left blur-lg sm:w-full sm:scale-105 sm:object-cover"
            priority
            loading="eager"
          />
          {/* <p className="font-basier text-sm opacity-50">{dict.home.cta.tag}</p> */}
          <h2 className="z-10  text-center font-sabon text-[clamp(40px,6.666vw,80px)] leading-[1.1] tracking-tight text-white sm:leading-[1]">
            {dict.home.cta.title}
          </h2>
          <h2 className="z-10 mt-8 max-w-lg text-left text-lg opacity-100 sm:text-center">
            {dict.home.cta.subtext.line1}
            <br className="hidden sm:block" />
            <span className="opacity-50"> {dict.home.cta.subtext.line2}</span>
          </h2>
          <div className="relative z-10 mt-8 flex flex-row-reverse items-center justify-center gap-8 sm:mt-8 sm:flex-row">
            {/* <Link
              href="mailto:hello@kindredlab.io"
              className="font-basier text-sm hover:underline"
            >
              {dict.home.hero.cta1}
            </Link> */}
            <Link
              href={`/${lang}/?BookDemo=true`}
              className="flex items-center justify-center gap-3 rounded-full bg-white px-8 py-3 font-basier text-sm text-black hover:bg-zinc-100"
              scroll={false}
              replace
            >
              {dict.home.cta.cta1}
              <span className="flex h-6 w-8 items-center justify-center rounded-[4px] border border-zinc-200 bg-zinc-100 text-[12px]">
                ⌘ K
              </span>
            </Link>
          </div>
          {/* <div className="mt-24 w-full max-w-6xl border-t border-white border-opacity-40"></div> */}
          <div className="relative z-10 mt-32 flex w-full max-w-8xl justify-between gap-2 px-4 text-sm text-white sm:px-16">
            <p className="opacity-50">© 2024 Kindred Laboratory</p>
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
        className="pointer-events-none fixed inset-x-0 bottom-0 h-16 bg-transparent  backdrop-blur-sm"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 60%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 60%)",
        }}
      ></div> */}
    </main>
  );
}
