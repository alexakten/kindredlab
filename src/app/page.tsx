import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Motion } from "./components/Motion";
import Logos from "./components/Logos";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-white px-3 tracking-tight sm:px-8">
      <Motion
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="flex w-full max-w-8xl flex-col items-center"
      >
        <Navbar />
        {/* Hero */}
        <section className="z-10 mt-24 flex w-full max-w-2xl flex-col items-center text-center">
          <h1 className="text-7xl font-medium leading-[1] tracking-tight">
            Web and product <span className="font-freight italic text-[80px]">design studio</span>{" "}
          </h1>
          <h2 className="mt-6 max-w-xl text-xl opacity-50">
            We&apos;re a fully remote studio designing landing pages and
            products for startups that iterate fast.
          </h2>
          <div className="mt-8 flex items-center gap-3 tracking-normal">
            <Link
              href={"mailto:hello@kindredlab.io"}
              className="rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium hover:bg-zinc-800"
            >
              Book a call
            </Link>

            <Link
              href={"/work"}
              className="group flex items-center gap-1 rounded-full border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium   hover:bg-gray-50"
            >
              See work{" "}
              <span className="inline-block translate-x-[1px] tracking-normal transition-transform duration-200 group-hover:translate-x-1">
                -&gt;
              </span>
            </Link>
          </div>
          <p className="mt-24 text-sm opacity-50">Trusted by teams at</p>
          <div className="mt-6">
            <Logos />
          </div>
        </section>

        <Footer />
      </Motion>
    </main>
  );
}
