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
import CTAFooter from "../components/CTAFooter";
import CaseWrapper from "../components/CaseWrapper";
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
    <CaseWrapper>
      <GapTiny />
      <KindredLogo />
      <Intro
        image="/images/qura/qura-hero.webp"
        description={
          "Helping Qura raise $2.1M through lightning fast design iteration"
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
            title: "Website",
            text: ["qura.law"],
          },
          {
            title: "Year",
            text: ["Ongoing"],
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

      <FullWidthImage image="/images/qura/qura-5.webp" />

      <GapMedium />

      <CTAFooter dict={dict} />
    </CaseWrapper>
  );
}
