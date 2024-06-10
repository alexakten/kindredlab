import Link from "next/link";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";
import Pricing from "./components/Pricing";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";

export default function Home() {
  return (
    <main className="flex flex-col overflow-hidden items-center bg-gray-50 px-3 tracking-tight sm:px-8">
      <Navbar />
      <section className="absolute max-w-8xl top-0 w-full">
        <div
          className="relative h-56 w-full bg-gray-50"
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
            className="absolute inset-0 overflow-hidden bg-gray-50"
            style={{
              background:
                "radial-gradient(circle at top, transparent 0%, rgb(249 250 251) 100%)",
            }}
          />
        </div>
      </section>

      {/* Hero */}
      <section className="z-10 mt-28 flex flex-col items-center text-center sm:mt-52">
        <h1 className="mt-4 max-w-2xl text-center text-[clamp(32px,5.5vw,60px)] font-semibold leading-[1.15] tracking-tighter">
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
      </section>

      {/* Testimonials */}
      <section className="mt-20 flex flex-col gap-4 items-center md:px-16">
        <Marquee />
      </section>

      {/* Projects */}
      <section className="mt-40 max-w-8xl flex w-full flex-col items-center">
        <h2 className="mt-4 max-w-2xl text-center text-[clamp(32px,5.5vw,48px)] font-semibold leading-[1.1] tracking-tighter">
          Recent projects
        </h2>
        <p className="mt-4 text-xl opacity-75">Here are our recent project.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-12 gap-4">
          <Project
            client="Airbon"
            imageUrl="/images/airbon.webp"
            websiteUrl="https://www.airbon.co/"
            description="Airbon is a climate tech startup working with regenerative farming and carbon sequestration. We created the name, brand, logo, and website."
            bgColor="bg-white"
            borderColor="border-gray-200"
            textColor="text-black"
          />
          <Project
            client="SWT"
            imageUrl="/images/stockholm.webp"
            websiteUrl="https://www.stockholmwater.com/"
            description="Stockholm Water Technology deals with water purification and cleaning. They needed help refreshing their brand and website before trying to raise another round."
            bgColor="bg-white"
            borderColor="border-gray-200"
            textColor="text-black"
          />
          <Project
            client="Flexiwaggon"
            imageUrl="/images/flexiwaggon.webp"
            websiteUrl="https://flexiwaggon.webflow.io/"
            description="Flexiwaggon is a sustainable transport scaleup. Before talking to investors, they needed help with creating a brand and website that showcased their product."
            bgColor="bg-white"
            borderColor="border-gray-200"
            textColor="text-black"
          />
          <Project
            client="MycoMine"
            imageUrl="/images/mycomine.webp"
            websiteUrl="https://www.mycomine.se/"
            description="MycoMine uses microbial processes to treat waste. They asked us for help in rebranding and refreshing their website to attract new clients."
            bgColor="bg-white"
            borderColor="border-gray-200"
            textColor="text-black"
          />
          <Project
            client="Darwin"
            imageUrl="/images/darwin.webp"
            websiteUrl="https://www.hiredarwin.ai/"
            description="Darwin is an AI agent for sales outreach. They needed help with building a website from scratch that would display their product."
            bgColor="bg-white"
            borderColor="border-gray-200"
            textColor="text-black"
          />
          <Project
            client="Qura"
            imageUrl="/images/qura.webp"
            websiteUrl="https://www.qura.law/"
            description="Qura is an AI-powered legal research tool for lawyers. To help them raise their next round we created their entire website from scratch."
            bgColor="bg-white"
            borderColor="border-gray-200"
            textColor="text-black"
          />
          <Project
            client="Mendly"
            imageUrl="/images/mendly.webp"
            websiteUrl="https://www.mendly.app/"
            description="Mendly is a minimalistic writing app. We build their brand, website, and app. "
            bgColor="bg-white"
            borderColor="border-gray-200"
            textColor="text-black"
          />
          <Project
            client="Redpoint"
            imageUrl="/images/redpoint.webp"
            websiteUrl="https://www.redpoint.top/"
            description="Redpoint is a coupon system for climbing gyms. We created their brand and website from scratch, and designed their product."
            bgColor="bg-white"
            borderColor="border-gray-200"
            textColor="text-black"
          />
          <Project
            client="Tasktree"
            imageUrl="/images/tasktree.webp"
            websiteUrl="https://www.tasktree.co/"
            description="Tasktree is a task manager. We created their brand, including logo and name, and made a wailist landing page website. We also designed and built their MVP."
            bgColor="bg-white"
            borderColor="border-gray-200"
            textColor="text-black"
          />

        </div>
      </section>

      {/* Pricing */}
      <section className="mt-40 flex w-full max-w-4xl flex-col items-center">
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
            {/* bg-gradient-to-tl from-gray-50 to-white */}
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
      </section>

      <Footer />
    </main>
  );
}
