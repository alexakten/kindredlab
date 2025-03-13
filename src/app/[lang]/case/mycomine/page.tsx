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
        description={
          "MycoMine gets a complete facelift with a new brand and website."
        }
        tags={[
          {
            title: "Industry",
            text: ["Cleantech"],
          },
          {
            title: "Headquarters",
            text: ["Stockholm, SE"],
          },
          {
            title: "Website",
            text: ["MycoMine.se"],
          },
          {
            title: "Year",
            text: ["Ongoing"],
          },
        ]}
      />

      <GapLarge />

      <Quote
        quote="I got goosebumps when I saw the new website. We are grateful to have worked with Kindred, and hope to do so again in the future."
        author="Magnus Ivarsson"
        role="CEO at Mycomine"
      />

      <GapLarge />

      <FullWidthImage image="/images/mycomine/mycomine-1.webp" />

      <GapMedium />

      <Paragraph
        blackTitle="Bioremediation as a Service"
        grayTitle="Harnessing nature for sustainability"
        text={`MycoMine is pioneering bioremediation with cutting-edge fungal technology, and they needed a compelling brand and digital presence to match their innovation. 

  We worked with MycoMine to refine their brand identity and design a website that effectively communicates their mission, impact, and scalability. By creating a clear, investor-friendly platform, we helped them attract funding and position themselves as a leader in sustainable waste management.`}
      />
      <GapTiny />
      <LineText
        title="A brand built for trust and innovation"
        text={`To resonate with investors and industry stakeholders, we developed a visual identity that balances scientific credibility with an approachable, modern aesthetic.`}
      />
      <GapTiny />
      <LineText
        title="A website designed to drive funding"
        text={`We crafted a structured, compelling web experience that highlights MycoMine’s technology, success stories, and measurable impact—ensuring clarity for investors and partners.`}
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
