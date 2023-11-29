"use client";

import Image from "next/image";
import { useState } from "react";
import Logo from "../../public/logo.js";

export default function Home() {
  const [lang, setLang] = useState("en");
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between"
      style={{
        backgroundSize: "96px 96px",
        backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
`,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "radial-gradient(circle, transparent 20%, black 100%)",
        }}
      />
      <nav className="xs:px-6 fixed top-5 z-20 flex w-full items-center justify-between px-4">
        <Logo />
        <div className="font-regular flex flex-row gap-4 text-white ">
          <button
            type="button"
            onClick={() => setLang("sv")}
            className={lang === "sv" ? "font-bold" : ""}
          >
            Sv
          </button>
          <button
            type="button"
            onClick={() => setLang("en")}
            className={lang === "en" ? "font-bold" : ""}
          >
            En
          </button>
        </div>
      </nav>

      <section className="relative flex h-screen w-screen items-center justify-center overflow-hidden px-4">
        <div className="flex max-w-3xl flex-col items-center gap-6 text-center text-white">
          <div className="rounded-full border border-zinc-500 bg-zinc-900 px-4 py-1 font-normal text-zinc-500">
            {lang === "en" ? "Limited availability | " : "Begränsat antal | "}
            <span className="font-medium text-white">
              {lang === "en" ? "2 spots left" : "2 platser kvar"}
            </span>
          </div>
          <h1
            className="xs:text-5xl text-3xl font-semibold tracking-tight sm:text-6xl"
            style={{ lineHeight: 1.1 }}
          >
            {lang === "en"
              ? "Unlimited designs. Unlimited revisions. One subscription."
              : "Obegränsad design & revision. En prenumeration."}
          </h1>
          <div style={{ maxWidth: 640 }}>
            <p
              className="text-md xs:text-lg font-normal text-zinc-200"
              style={{ lineHeight: 1.6 }}
            >
              {lang === "en"
                ? "Increase conversion and grow your business with stunning design and blazing fast development. Make (almost) any request and we'll design it."
                : "Öka din konvertering och väx ditt varumärke med fantastisk design. Gör (nästan) vilken request som helst och vi designar det."}
            </p>
          </div>
          <div>
            <button
              className="rounded-full border border-white bg-white px-4 py-2 text-black hover:border hover:border-zinc-500 hover:bg-zinc-900 hover:text-white"
              type="button"
            >
              {lang === "en" ? "Book a call" : "Boka samtal"} -{">"}
            </button>
          </div>
        </div>
      </section>

      <section className="relative flex w-screen flex-col items-center justify-center gap-16 overflow-hidden bg-black px-4 pb-40">
        <div className="flex flex-col items-center gap-6">
          <h2 className="text-5xl text-white">Pricing plans</h2>
          <p className="text-md xs:text-lg max-w-xs text-center font-normal text-zinc-200">
            Chose between one or two requests at a time. Unlimited revisions,
            always.
          </p>
        </div>
        <div className="flex w-full max-w-4xl flex-col gap-4 md:flex-row">
          {/* Card Left */}
          <div className="flex w-full flex-col rounded-md bg-white p-8">
            <h3 className="text-4xl tracking-tight text-black">Standard</h3>
            <h2 className="pt-12 text-5xl tracking-tight text-black">
              $2,999/mo
            </h2>
            <p className="text-md pt-2 text-zinc-500">
              Pause or cancel anytime
            </p>
            <div className="pt-12">
              <button
                className="rounded-full border border-black bg-black px-4 py-2 text-white hover:border-black hover:bg-white hover:text-black"
                type="button"
              >
                {lang === "en"
                  ? "Get started with a call"
                  : "Kom igång med ett samtal"}{" "}
                -{">"}
              </button>
            </div>
            <div className="max-w-xs pt-8">
              <p className="text-md border-b border-zinc-100 py-2 text-zinc-500">
                - 1 request at a time
              </p>
              <p className="text-md border-b border-zinc-100 py-2 text-zinc-500">
                - Average 4-7 days delivery
              </p>
              <p className="text-md border-b border-zinc-100 py-2 text-zinc-500">
                - 1 brand
              </p>
              <p className="text-md py-2 text-zinc-500">- 1 user</p>
            </div>
          </div>
          {/* Card Right */}
          <div className="flex w-full flex-col rounded-md border border-zinc-500 bg-zinc-900 p-8">
            <h3 className="text-4xl tracking-tight text-white">Premium</h3>
            <h2 className="pt-12 text-5xl tracking-tight text-white">
              $5,999/mo
            </h2>
            <p className="text-md pt-2 text-zinc-500">
              Pause or cancel anytime
            </p>
            <div className="pt-12">
              <button
                className="rounded-full border border-white bg-white px-4 py-2 text-black hover:border-zinc-500 hover:bg-zinc-900 hover:text-white"
                type="button"
              >
                {lang === "en"
                  ? "Get started with a call"
                  : "Kom igång med ett samtal"}{" "}
                -{">"}
              </button>
            </div>
            <div className="max-w-xs pt-8">
              <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                - 2 request at a time
              </p>
              <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                - Average 2-4 days delivery
              </p>
              <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                - Unlimited brands
              </p>
              <p className="text-md py-2 text-zinc-500">- Unlimited users</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
