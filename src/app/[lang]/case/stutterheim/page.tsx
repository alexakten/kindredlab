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
        image="/images/stutterheim/stutterheim-hero.webp"
        description={dict.case.stutterheim.tagline}
        tags={dict.case.stutterheim.tags}
      />

      <GapMedium />

      <FullWidthImage image="/images/stutterheim/stutterheim-1.webp" />

      <GapMedium />

      <Paragraph
        blackTitle={dict.case.stutterheim.paragraph.blackTitle}
        grayTitle={dict.case.stutterheim.paragraph.grayTitle}
        text={dict.case.stutterheim.paragraph.text}
      />
      <GapTiny />
      <LineText
        title={dict.case.stutterheim.lineText[0].title}
        text={dict.case.stutterheim.lineText[0].text}
      />
      <GapTiny />
      <LineText
        title={dict.case.stutterheim.lineText[1].title}
        text={dict.case.stutterheim.lineText[1].text}
      />

      <GapMedium />

      <FullWidthImage image="/images/stutterheim/stutterheim-2.webp" />

      <GapMedium />

      <CTAFooter dict={dict} />
    </CaseWrapper>
  );
}
