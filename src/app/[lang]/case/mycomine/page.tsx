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
        image="/images/mycomine/mycomine-hero.webp"
        description={dict.case.mycomine.tagline}
        tags={dict.case.mycomine.tags}
      />

      <GapLarge />

      <Quote
        quote={dict.case.mycomine.quote}
        author={dict.case.mycomine.author}
        role={dict.case.mycomine.role}
      />

      <GapLarge />

      <FullWidthImage image="/images/mycomine/mycomine-1.webp" />

      <GapMedium />

      <Paragraph
        blackTitle={dict.case.mycomine.paragraph.blackTitle}
        grayTitle={dict.case.mycomine.paragraph.grayTitle}
        text={dict.case.mycomine.paragraph.text}
      />
      <GapTiny />
      <LineText
        title={dict.case.mycomine.lineText[0].title}
        text={dict.case.mycomine.lineText[0].text}
      />
      <GapTiny />
      <LineText
        title={dict.case.mycomine.lineText[1].title}
        text={dict.case.mycomine.lineText[1].text}
      />

      <GapMedium />

      <FullWidthImage image="/images/mycomine/mycomine-2.webp" />

      <GapMedium />

      <FullWidthImage image="/images/mycomine/mycomine-3.webp" />

      <GapMedium />

      <CTAFooter dict={dict} />
    </CaseWrapper>
  );
}
