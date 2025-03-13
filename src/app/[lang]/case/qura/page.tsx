import Link from "next/link";
import Navbar from "../../components/Navbar";
import { Motion } from "../../components/Motion";
import Intro from "../components/Intro";
import GapLarge from "../components/GapLarge";
import GapMedium from "../components/GapMedium";
import GapSmall from "../components/GapSmall";
import GapTiny from "../components/GapTiny";
import FullWidthImage from "../components/FullWidthImage";
import Paragraph from "../components/Paragraph";
import LineText from "../components/LineText";
import Quote from "../components/Quote";
import KindredLogo from "../../components/KindredLogo";

import { getDictionary } from "../../dictionaries";
import HalfImage from "../components/HalfImage";

type Locale = "en" | "se";

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
  const dict = await getDictionary(lang);

  return (
    <main className="flex select-none flex-col items-center justify-center overflow-x-hidden bg-white px-1.5 py-1 text-left tracking-tight text-black sm:px-4 sm:py-4  ">
      <Motion
        initial={{ opacity: 0, y: 0, filter: "blur(1rem)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
        transition={{ ease: "easeInOut", delay: 0.6, duration: 0.5 }}
        className="flex w-full flex-col items-center"
      >
        <GapTiny />
        <KindredLogo />
        <Intro
          image="/images/qura/qura-hero.webp"
          description={
            "Helping Qura raise $2.1M through lightning fast design iteration"
          }
          quote={
            "Kindred helped us refine the UX of Qura to make legal research easier"
          }
          tags={[
            {
              title: "Industry",
              text: ["Legal Tech"],
            },
            {
              title: "Headquarters",
              text: ["Stockholm, SE"],
            },
            {
              title: "Funding",
              text: ["$2.1M"],
            },
            {
              title: "Backed by",
              text: ["Cherry Ventures"],
            },
          ]}
        />

        <GapLarge />

        <Quote
          quote="Kindred helped us refine the UX of Qura to make legal research easier"
          author="Arvid Winterfeldt"
          role="CEO at Qura"
        />

        <GapLarge />

        <FullWidthImage image="/images/qura/qura-1.webp" />

        <GapMedium />

        <Paragraph
          blackTitle="The complexities of legal research"
          grayTitle="Simplifying workflows with AI"
          text={`Qura is an AI-driven legal search engine that transforms how legal professionals access and analyze vast databases of legal information.
            
            Our team collaborated with Qura to refine its product design and UX, ensuring that legal professionals could effortlessly interact with the platform while maintaining accuracy, efficiency, and trust in the AI-driven results.`}
        />
        <GapTiny />
        <LineText
          title="Complexity of Legal Research"
          text={`Legal professionals require precision and clarity when searching for sources, making UX crucial for trust and usability.`}
        />
        <GapTiny />
        <LineText
          title="Overwhelming Information"
          text={`Legal professionals require precision and clarity when searching for sources, making UX crucial for trust and usability.`}
        />

        <GapMedium />

        <FullWidthImage image="/images/qura/qura-2.webp" />

        <GapMedium />

        <HalfImage
          leftImage="/images/qura/qura-3.webp"
          rightImage="/images/qura/qura-4.webp"
          altText="Qura"
        />

        <GapMedium />

        {/* CTA */}

        <section className="my-12 flex w-full flex-col items-center justify-center">
          <p className="mb-6 text-center font-medium">
            See how Kindred can help you <br /> — Book a demo today
          </p>
          <Link
            href="https://cal.com/kindred-house/30min"
            className="relative flex items-center justify-center gap-3 rounded-full bg-black px-6 py-2 font-basier text-xs text-white hover:bg-neutral-800 sm:text-sm"
            scroll={false}
            replace
          >
            {dict.home.hero.cta2}
            <span className="hidden h-6 w-8 items-center justify-center rounded-[4px] border border-neutral-600 bg-neutral-900 text-[12px] sm:flex">
              ⌘ K
            </span>
          </Link>
        </section>

        <div className="relative z-10 mt-12 flex w-full max-w-8xl items-end justify-between gap-2 px-4 text-sm text-black sm:px-16">
          <p className="opacity-50">© 2025 Kindred House</p>
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
      </Motion>
    </main>
  );
}
