import Link from "next/link";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden items-center bg-white px-3 tracking-tight sm:px-8">
      <Navbar />
      <section className="absolute max-w-8xl top-0 w-full">
        <div
          className="relative h-56 w-full bg-white"
          style={{
            backgroundSize: "120px 120px",
            backgroundPosition: "top",
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 1px, transparent 1px)
            `,
          }}
        >
          {/* Grid Overlay */}
          <div
            className="absolute inset-0 overflow-hidden bg-white"
            style={{
              background:
                "radial-gradient(circle at top, transparent 0%, rgb(255 255 255) 100%)",
                // "radial-gradient(circle at top, transparent 0%, rgb(249 250 251) 100%)",
            }}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="z-10 mt-28 flex flex-col items-center text-center sm:mt-52">
        <h1 className="mt-4 max-w-2xl font text-center text-[clamp(32px,5.5vw,60px)] font-semibold leading-[1.15] tracking-tighter">
          We help startups raise <br /> their next round
        </h1>
        <p className="mt-4 text-xl opacity-75">
          Design and development partner <br className="sm:hidden" />for startups.
        </p>
        <div className="mt-6 flex gap-3 tracking-normal">
          <Link
            href={"mailto:hello@kindredlab.io"}
            className="rounded-full bg-gradient-to-t from-gray-200 to-gray-200 p-px shadow-sm hover:shadow-none"
          >
            {/* bg-gradient-to-tl from-gray-50 to-white */}
            <div className="rounded-full  bg-white px-5 py-2.5 text-sm  font-medium hover:bg-gray-50">
              Start scaling
            </div>
          </Link>

          <Link
            href={"mailto:alex@thefirsthouse.se"}
            className="group flex items-center gap-1 rounded-full border border-white bg-white px-5 py-2.5 text-sm font-medium hover:border-gray-100  hover:bg-gray-50"
          >
            Say hello{" "}
            <span className="inline-block translate-x-[1px] tracking-normal transition-transform duration-200 group-hover:translate-x-1">
              -&gt;
            </span>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-20 flex flex-col gap-4 items-center md:px-16">
        <Marquee />
      </section>

      {/* Projects */}
      <section className=" max-w-8xl flex w-full flex-col items-center">
        {/* <h2 className="mt-4 max-w-2xl text-center text-[clamp(32px,5.5vw,48px)] font-semibold leading-[1.1] tracking-tighter">
          Recent projects
        </h2> */}
        <div className="grid grid-cols-1 max-w-5xl w-full">
          <Project
            client="Qura"
            description={[
              { type: "text", content: "Legal research powered by AI — " },
              { type: "link", content: "qura.law", url: "https://www.qura.law" },

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
              { type: "text", content: "A climate tech startup tackling emissions in agriculture — " },
              { type: "link", content: "airbon.co", url: "https://www.airbon.co" },

            ]}
            images={[
              { type: "full", url: "/images/airbon/airbon-1.png" },
              { type: "full", url: "/images/airbon/airbon-2.png" },
            ]}
          />
          <Project
            client="MycoMine"
            description={[
              { type: "text", content: "Sustainable treatment of pollutants using microbial processes —  " },
              { type: "link", content: "mycomine.se", url: "https://www.mycomine.se" },

            ]}
            images={[
              { type: "full", url: "/images/mycomine/mycomine-1.png" },
              { type: "full", url: "/images/mycomine/mycomine-2.png" },
              { type: "full", url: "/images/mycomine/mycomine-3.png" },
            ]}
          />
          <Project
            client="Payable"
            description={[
              { type: "text", content: "A modern debt collection company — " },
              { type: "link", content: "payable.se", url: "https://www.payable.se" },

            ]}
            images={[
              { type: "half", url: "/images/payable/payable-1.png" },
              { type: "half", url: "/images/payable/payable-2.png" },
              { type: "full", url: "/images/payable/payable-3.png" },
            ]}
          />
          <Project
            client="Redpoint"
            description={[
              { type: "text", content: "Loyalty program app for climbing gyms — " },
              { type: "link", content: "redpoint.top", url: "https://www.redpoint.top" },

            ]}
            images={[
              { type: "full", url: "/images/redpoint/redpoint-1.png" },
              { type: "full", url: "/images/redpoint/redpoint-2.png" },
            ]}
          />
          <Project
            client="Stockholm Water Technology"
            description={[
              { type: "text", content: "Sustainable water cleaning — " },
              { type: "link", content: "stockholmwater.se", url: "https://www.stockholmwater.se" },

            ]}
            images={[
              { type: "full", url: "/images/swt/swt-1.png" },
            ]}
          />

        </div>
      </section>

      {/* Pricing */}
      {/* <section className="mt-56 flex w-full max-w-4xl flex-col items-center">
        <h2 className="mt-4 max-w-2xl text-center text-[clamp(32px,5.5vw,48px)] font-semibold leading-[1.1] tracking-tighter">
          Get started
        </h2>
        <p className="mt-4 text-xl opacity-75">Choose a pricing plan. </p>
        <div className="mt-12 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          <Pricing
            title="Standard"
            price="100,000 SEK"
            included={[
              "Branding",
              "Copywriting",
              "Website",
            ]}
            bgColor="bg-gray-100"
            borderColor="border-gray-200"
            textColor="text-black"
          />
          <Pricing
            title="Scaleup"
            price="250,000 SEK"
            included={[
              "Branding",
              "Copywriting",
              "Website",
              "App Design",
              "Content"
            ]}
            bgColor="bg-black"
            borderColor="border-black"
            textColor="text-white"
          />
        </div>
        <div className="mt-12 flex gap-3 tracking-normal">
          <Link
            href={"mailto:hello@kindredlab.io"}
            className="rounded-full bg-gradient-to-t from-gray-200 to-gray-200 p-px shadow-sm hover:shadow-none"
          >
            <div className="rounded-full  bg-white px-5 py-2.5 text-sm  font-medium hover:bg-gray-100">
              Start scaling
            </div>
          </Link>

          <Link
            href={"mailto:hello@kindredlab.io"}
            className="group flex items-center gap-1 rounded-full border border-gray-50 bg-gray-50 px-5 py-2.5 text-sm font-medium hover:border-gray-200  hover:bg-gray-100"
          >
            Say hello{" "}
            <span className="inline-block translate-x-[1px] tracking-normal transition-transform duration-200 group-hover:translate-x-1">
              -&gt;
            </span>
          </Link>
        </div>
      </section> */}

      <Footer />
    </main>
  );
}
