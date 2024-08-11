import Project from "../components/Project";
import Navbar from "../components/Navbar";
import { Motion } from "../components/Motion";

export default function Work() {
  return (
    <>
      <Navbar />
      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <section className="flex w-full max-w-8xl flex-col items-center">
          <div className="grid w-full max-w-5xl grid-cols-1">
            <Project
              client="Qura"
              description={[
                { type: "text", content: "Legal research powered by AI — " },
                {
                  type: "link",
                  content: "qura.law",
                  url: "https://www.qura.law",
                },
              ]}
              images={[
                { type: "full", url: "/images/qura/qura-1.png" },
                { type: "half", url: "/images/qura/qura-2.png" },
                { type: "half", url: "/images/qura/qura-3.png" },
              ]}
            />
            <Project
              client="Airbon"
              description={[
                {
                  type: "text",
                  content:
                    "A climate tech startup tackling emissions in agriculture — ",
                },
                {
                  type: "link",
                  content: "airbon.co",
                  url: "https://www.airbon.co",
                },
              ]}
              images={[
                { type: "full", url: "/images/airbon/airbon-1.png" },
                { type: "full", url: "/images/airbon/airbon-2.png" },
              ]}
            />
            <Project
              client="MycoMine"
              description={[
                {
                  type: "text",
                  content:
                    "Sustainable treatment of pollutants using microbial processes —  ",
                },
                {
                  type: "link",
                  content: "mycomine.se",
                  url: "https://www.mycomine.se",
                },
              ]}
              images={[
                { type: "full", url: "/images/mycomine/mycomine-1.png" },
                { type: "full", url: "/images/mycomine/mycomine-2.png" },
                // { type: "full", url: "/images/mycomine/mycomine-3.png" },
              ]}
            />
            <Project
              client="Payable"
              description={[
                { type: "text", content: "A modern debt collection company. " },
                // { type: "link", content: "payable.se", url: "https://www.payable.se" },
              ]}
              images={[
                { type: "half", url: "/images/payable/payable-1.png" },
                { type: "half", url: "/images/payable/payable-2.png" },
                { type: "full", url: "/images/payable/payable-3.png" },
              ]}
            />
            <Project
              client="Flexiwaggon"
              description={[
                { type: "text", content: "Intermodal truck transport." },
                // { type: "link", content: "redpoint.top", url: "https://www.redpoint.top" },
              ]}
              images={[
                { type: "full", url: "/images/flexiwaggon/flexiwaggon-1.png" },
                { type: "full", url: "/images/flexiwaggon/flexiwaggon-2.png" },
                { type: "half", url: "/images/flexiwaggon/flexiwaggon-3.png" },
                { type: "half", url: "/images/flexiwaggon/flexiwaggon-4.png" },
              ]}
            />
            <Project
              client="Redpoint"
              description={[
                {
                  type: "text",
                  content: "Loyalty program for climbing gyms — ",
                },
                {
                  type: "link",
                  content: "redpoint.top",
                  url: "https://www.redpoint.top",
                },
              ]}
              images={[
                { type: "full", url: "/images/redpoint/redpoint-1.png" },
                { type: "full", url: "/images/redpoint/redpoint-2.png" },
                { type: "half", url: "/images/redpoint/redpoint-3.png" },
                { type: "half", url: "/images/redpoint/redpoint-4.png" },
              ]}
            />
            <Project
              client="Stockholm Water Technology"
              description={[
                { type: "text", content: "Sustainable water cleaning — " },
                {
                  type: "link",
                  content: "stockholmwater.se",
                  url: "https://www.stockholmwater.se",
                },
              ]}
              images={[{ type: "full", url: "/images/swt/swt-1.png" }]}
            />
            <Project
              client="Truck on Track Solutions"
              description={[
                { type: "text", content: "Freight transport on tracks. " },
              ]}
              images={[
                { type: "full", url: "/images/tts/tts-1.png" },
                { type: "full", url: "/images/tts/tts-2.png" },
                { type: "half", url: "/images/tts/tts-3.png" },
                { type: "half", url: "/images/tts/tts-4.png" },
              ]}
            />
          </div>
        </section>
      </Motion>
    </>
  );
}
