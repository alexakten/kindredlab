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
        description={dict.case.qura.tagline}
        tags={dict.case.qura.tags}
      />

      <GapLarge />

      <Quote
        quote={dict.case.qura.quote}
        author={dict.case.qura.author}
        role={dict.case.qura.role}
      />

      <GapLarge />

      <FullWidthImage image="/images/qura/qura-1.webp" />

      {/* <GapMedium />

      <Paragraph
        blackTitle={dict.case.qura.paragraph.blackTitle}
        grayTitle={dict.case.qura.paragraph.grayTitle}
        text={dict.case.qura.paragraph.text}
      />
      <GapTiny />
      <LineText
        title={dict.case.qura.lineText[0].title}
        text={dict.case.qura.lineText[0].text}
      />
      <GapTiny />
      <LineText
        title={dict.case.qura.lineText[1].title}
        text={dict.case.qura.lineText[1].text}
      /> */}

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
