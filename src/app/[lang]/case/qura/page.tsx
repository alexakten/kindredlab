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
            text: ["Qura.law"],
          },
          {
            title: "Year",
            text: ["Ongoing"],
          },
        ]}
      />

      <GapLarge />

      <Quote
        quote="Kindred helped us refine the UX/UI of Qura to make legal research easier"
        author="Arvid Winterfeldt"
        role="CEO at Qura"
      />

      <GapLarge />

      <FullWidthImage image="/images/qura/qura-1.webp" />

      <GapMedium />

      <Paragraph
        blackTitle="Optimizing legal research with better UX"
        grayTitle="A product designed for clarity and trust"
        text={`Qura is revolutionizing legal research with AI, but to secure funding and adoption, they needed an intuitive and seamless user experience. 
  
  Our team at Kindred collaborated with Qura to refine their product design, ensuring that legal professionals could navigate vast legal databases effortlessly. Through a human-centered approach, we simplified complex workflows and created a clear, accessible interface that elevates user confidence and efficiency.`}
      />
      <GapTiny />
      <LineText
        title="From complexity to simplicity"
        text={`Legal research requires precision, clarity, and trust. We designed an interface that prioritizes structured results, making it easy for legal professionals to find and validate sources without unnecessary friction.`}
      />
      <GapTiny />
      <LineText
        title="A design built for funding and growth"
        text={`Our work with Qura helped them present a polished, investor-ready product, supporting their successful €2.1M funding round led by Cherry Ventures.`}
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
