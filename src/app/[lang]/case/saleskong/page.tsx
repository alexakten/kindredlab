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
        image="/images/saleskong/saleskong-hero.avif"
        description={dict.case.saleskong.tagline}
        tags={dict.case.saleskong.tags}
      />

      <GapLarge />

      <Quote
        quote={dict.case.saleskong.quote}
        author={dict.case.saleskong.author}
        role={dict.case.saleskong.role}
      />

      <GapLarge />

      <FullWidthImage image="/images/saleskong/saleskong-1.avif" />

      <GapMedium />

      <Paragraph
        blackTitle={dict.case.saleskong.paragraph.blackTitle}
        grayTitle={dict.case.saleskong.paragraph.grayTitle}
        text={dict.case.saleskong.paragraph.text}
      />
      <GapTiny />
      <LineText
        title={dict.case.saleskong.lineText[0].title}
        text={dict.case.saleskong.lineText[0].text}
      />
      <GapTiny />
      <LineText
        title={dict.case.saleskong.lineText[1].title}
        text={dict.case.saleskong.lineText[1].text}
      />

      <GapMedium />

      <FullWidthImage image="/images/saleskong/saleskong-2.avif" />

      <GapMedium />

      <HalfImage
        leftImage="/images/saleskong/saleskong-3.avif"
        rightImage="/images/saleskong/saleskong-4.avif"
        altText="Saleskong"
      />

      <GapMedium />

      <FullWidthImage image="/images/saleskong/saleskong-5.avif" />

      <GapMedium />

      <CTAFooter dict={dict} />
    </CaseWrapper>
  );
}
