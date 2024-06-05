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
      <section className="absolute top-0 w-full">
        <div
          className="relative h-72 w-full bg-gray-50"
          style={{
            backgroundSize: "180px 180px",
            backgroundPosition: "top",
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.07) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.07) 1px, transparent 1px)
            `,
          }}
        >
          {/* Grid Overlay */}
          <div
            className="absolute inset-0 overflow-hidden bg-gray-50"
            style={{
              background:
                "radial-gradient(circle at top, transparent 1%, rgb(249 250 251) 100%)",
            }}
          />
        </div>
      </section>

      <div className="overlay"></div>

      {/* Hero */}
      <section className="z-10 mt-40 flex flex-col items-center text-center sm:mt-52">
        <h1 className="mt-4 max-w-2xl text-center text-[clamp(36px,5.5vw,60px)] font-semibold leading-[1.1] tracking-tighter">
          We help startups raise <br /> their next round
        </h1>
        <p className="mt-4 text-xl opacity-75">
          Design and development partner for startups.
        </p>
        <div className="mt-6 flex gap-3 tracking-normal">
          <Link
            href={"/"}
            className="rounded-full bg-gradient-to-t from-gray-200 to-gray-200 p-px shadow-sm hover:shadow-none"
          >
            {/* bg-gradient-to-tl from-gray-50 to-white */}
            <div className="rounded-full  bg-white px-5 py-2.5 text-sm  font-medium hover:bg-gray-100">
              Start scaling
            </div>
          </Link>

          <Link
            href={"/"}
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
      <section className="mt-40 flex w-full flex-col items-center">
        <h2 className="mt-4 max-w-2xl text-center text-[clamp(32px,5.5vw,48px)] font-semibold leading-[1.1] tracking-tighter">
          Recent projects
        </h2>
        <p className="mt-4 text-xl opacity-75">Here are our recent project.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full mt-12 gap-4">
          <Project
            client="Airbon"
            imageUrl="/images/airbon.webp"
            websiteUrl="https://www.airbon.co/"
            description="Qura asked us for help building their website from scratch."
            bgColor="bg-white"
            borderColor="border-gray-200"
            textColor="text-black"
          />
          <Project
            client="SWT"
            imageUrl="/images/stockholm.webp"
            websiteUrl="https://www.stockholmwater.com/"
            description="Qura asked us for help building their website from scratch."
            bgColor="bg-white"
            borderColor="border-gray-200"
            textColor="text-black"
          />
          <Project
            client="Flexiwaggon"
            imageUrl="/images/flexiwaggon.webp"
            websiteUrl="https://flexiwaggon.webflow.io/"
            description="Qura asked us for help building their website from scratch."
            bgColor="bg-white"
            borderColor="border-gray-200"
            textColor="text-black"
          />
          <Project
            client="MycoMine"
            imageUrl="/images/mycomine.webp"
            websiteUrl="https://www.mycomine.se/"
            description="Qura asked us for help building their website from scratch."
            bgColor="bg-white"
            borderColor="border-gray-200"
            textColor="text-black"
          />
          <Project
            client="Darwin"
            imageUrl="/images/darwin.webp"
            websiteUrl="https://www.hiredarwin.ai/"
            description="Qura asked us for help building their website from scratch."
            bgColor="bg-white"
            borderColor="border-gray-200"
            textColor="text-black"
          />
          <Project
            client="Qura"
            imageUrl="/images/qura.webp"
            websiteUrl="https://www.qura.law/"
            description="Qura asked us for help building their website from scratch."
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
              "A̶p̶p̶ ̶D̶e̶s̶i̶g̶n̶",
              "B̶u̶s̶i̶n̶e̶s̶s̶ S̶t̶r̶a̶t̶e̶g̶y̶",
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
              "Business Strategy",
            ]}
            bgColor="bg-black"
            borderColor="border-black"
            textColor="text-white"
          />
        </div>
        <div className="mt-12 flex gap-3 tracking-normal">
          <Link
            href={"/"}
            className="rounded-full bg-gradient-to-t from-gray-200 to-gray-200 p-px shadow-sm hover:shadow-none"
          >
            {/* bg-gradient-to-tl from-gray-50 to-white */}
            <div className="rounded-full  bg-white px-5 py-2.5 text-sm  font-medium hover:bg-gray-100">
              Start scaling
            </div>
          </Link>

          <Link
            href={"/"}
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
