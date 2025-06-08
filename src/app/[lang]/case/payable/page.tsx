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
        image="/images/payable/payable-hero.webp"
        description={dict.case.payable.tagline}
        tags={dict.case.payable.tags}
      />

      <GapLarge />

      <Quote
        quote={dict.case.payable.quote}
        author={dict.case.payable.author}
        role={dict.case.payable.role}
      />

      <GapLarge />

      <FullWidthImage image="/images/payable/payable-1.webp" />

      <GapMedium />

      <Paragraph
        blackTitle={dict.case.payable.paragraph.blackTitle}
        grayTitle={dict.case.payable.paragraph.grayTitle}
        text={dict.case.payable.paragraph.text}
      />
      <GapTiny />
      <LineText
        title={dict.case.payable.lineText[0].title}
        text={dict.case.payable.lineText[0].text}
      />
      <GapTiny />
      <LineText
        title={dict.case.payable.lineText[1].title}
        text={dict.case.payable.lineText[1].text}
      />

      <GapMedium />

      <FullWidthImage image="/images/payable/payable-2.webp" />

      <GapMedium />

      <FullWidthImage image="/images/payable/payable-3.webp" />

      <GapMedium />

      <CTAFooter dict={dict} />
    </CaseWrapper>
  );
}
