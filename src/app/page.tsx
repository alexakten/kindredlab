"use client";

import Image from "next/image";
import { useState } from "react";
import Logo from "../../public/logo.js";

export default function Home() {
  const [lang, setLang] = useState("en");

  const [isWebSelected, setIsWebSelected] = useState(false);
  const [isDesignSelected, setIsDesignSelected] = useState(false);
  const [isContentSelected, setIsContentSelected] = useState(false);

  // Handlers for each card
  const handleWebToggle = () => setIsWebSelected(!isWebSelected);
  const handleDesignToggle = () => setIsDesignSelected(!isDesignSelected);
  const handleContentToggle = () => setIsContentSelected(!isContentSelected);

  return (
    <main
      className="flex flex-col items-center justify-between overflow-hidden"
      style={{
        backgroundSize: "96px 96px",
        backgroundImage: `
      linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
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
          background: "radial-gradient(circle, transparent 20%, black 90%)",
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
        <div className="flex max-w-4xl flex-col items-center gap-6 text-center text-white">
          <div className="rounded-full border border-zinc-500 bg-zinc-900 px-4 py-1 font-normal text-zinc-500">
            {lang === "en" ? "Limited availability | " : "Begränsat antal | "}
            <span className="font-medium text-white">
              {lang === "en" ? "2 spots left" : "2 platser kvar"}
            </span>
          </div>
          <h1
            className="xs:text-5xl text-4xl font-semibold tracking-tight sm:text-6xl"
            style={{ lineHeight: 1.1 }}
          >
            {lang === "en"
              ? "Unlimited design + unlimited content. One subscription."
              : "Obegränsad design. Obegränsad revision. En prenumeration."}
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
              className="glow-on-hover rounded-full border border-white bg-white px-4 py-2 text-black"
              type="button"
            >
              {lang === "en" ? "Book a call" : "Boka samtal"} -&gt;
            </button>
          </div>
        </div>
      </section>

      <section className="relative flex w-screen flex-col items-center justify-center gap-16 overflow-hidden bg-black px-4 pb-40">
        <div className="flex flex-col items-center gap-6">
          <h2 className="xs:text-5xl text-4xl tracking-tight text-white">
            {lang === "en" ? "How it works" : "Hur det går till"}
          </h2>
          <p className="text-md xs:text-lg max-w-xs text-center font-normal text-zinc-200">
            {lang === "en"
              ? "Create your own plan. Only add the services you need each month."
              : "Välj mellan en eller två requests åt gången. Obegränsad revision, alltid."}
          </p>
        </div>
        <div className="flex w-full max-w-4xl flex-col gap-4 md:flex-row">
          {/* Web Card */}
          <div
            className={`flex w-full flex-col rounded-md border border-zinc-500 ${
              isWebSelected ? "bg-white text-black" : "bg-black text-white"
            } p-8`}
          >
            <h3 className="text-4xl tracking-tight ">Web</h3>
            <h2 className="pt-12 text-5xl tracking-tight">$3,999/mo</h2>
            <p className="text-md pt-2 text-zinc-500">
              {lang === "en"
                ? "Pause or cancel anytime"
                : "Pausa eller avbryt när du vill"}
            </p>
            <div className="pt-12">
              <button
                className={`rounded-full border ${
                  isWebSelected
                    ? "border-zinc-500 bg-white text-black hover:border-black hover:bg-black hover:text-white"
                    : "border-zinc-500 bg-black text-white hover:border-white hover:bg-black"
                } px-4 py-2 `}
                type="button"
                onClick={handleWebToggle}
              >
                {lang === "en"
                  ? isWebSelected
                    ? "Remove from plan"
                    : "Add to plan"
                  : isWebSelected
                    ? "Ta bort från planen"
                    : "Lägg till"}{" "}
                -&gt;
              </button>
            </div>
            <div className="max-w-xs pt-8">
              <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                {lang === "en" ? "- Web development" : "- 2 requests åt gången"}
              </p>
              <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                {lang === "en"
                  ? "- App development"
                  : "- Genomsnitt 2-4 dagar leverans"}
              </p>
              <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                {lang === "en"
                  ? "- Unlimited brands"
                  : "- Obegränsade varumärken"}
              </p>
              <p className="text-md py-2 text-zinc-500">
                {lang === "en"
                  ? "- Unlimited users"
                  : "- Obegränsade användare"}
              </p>
            </div>
          </div>
          {/* Design Card */}
          <div
            className={`flex w-full flex-col rounded-md border border-zinc-500 ${
              isDesignSelected ? "bg-white text-black" : "bg-black text-white"
            } p-8`}
          >
            <h3 className="text-4xl tracking-tight ">Design</h3>
            <h2 className="pt-12 text-5xl tracking-tight">$2,999/mo</h2>
            <p className="text-md pt-2 text-zinc-500">
              {lang === "en"
                ? "Pause or cancel anytime"
                : "Pausa eller avbryt när du vill"}
            </p>
            <div className="pt-12">
              <button
                className={`rounded-full border ${
                  isDesignSelected
                    ? "border-zinc-500 bg-white text-black hover:border-black hover:bg-black hover:text-white"
                    : "border-zinc-500 bg-black text-white hover:border-white hover:bg-black"
                } px-4 py-2 `}
                type="button"
                onClick={handleDesignToggle}
              >
                {lang === "en"
                  ? isDesignSelected
                    ? "Remove from plan"
                    : "Add to plan"
                  : isDesignSelected
                    ? "Ta bort från planen"
                    : "Lägg till"}{" "}
                -&gt;
              </button>
            </div>
            <div className="max-w-xs pt-8">
              <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                {lang === "en" ? "- Web development" : "- 2 requests åt gången"}
              </p>
              <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                {lang === "en"
                  ? "- App development"
                  : "- Genomsnitt 2-4 dagar leverans"}
              </p>
              <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                {lang === "en"
                  ? "- Unlimited brands"
                  : "- Obegränsade varumärken"}
              </p>
              <p className="text-md py-2 text-zinc-500">
                {lang === "en"
                  ? "- Unlimited users"
                  : "- Obegränsade användare"}
              </p>
            </div>
          </div>
          {/*Content Card */}
          <div
            className={`flex w-full flex-col rounded-md border border-zinc-500 ${
              isContentSelected ? "bg-white text-black" : "bg-black text-white"
            } p-8`}
          >
            <h3 className="text-4xl tracking-tight ">Content</h3>
            <h2 className="pt-12 text-5xl tracking-tight">$2,999/mo</h2>
            <p className="text-md pt-2 text-zinc-500">
              {lang === "en"
                ? "Pause or cancel anytime"
                : "Pausa eller avbryt när du vill"}
            </p>
            <div className="pt-12">
              <button
                className={`rounded-full border ${
                  isContentSelected
                    ? "border-zinc-500 bg-white text-black hover:border-black hover:bg-black hover:text-white"
                    : "border-zinc-500 bg-black text-white hover:border-white hover:bg-black"
                } px-4 py-2 `}
                type="button"
                onClick={handleContentToggle}
              >
                {lang === "en"
                  ? isContentSelected
                    ? "Remove from plan"
                    : "Add to plan"
                  : isContentSelected
                    ? "Ta bort från planen"
                    : "Lägg till"}{" "}
                -&gt;
              </button>
            </div>
            <div className="max-w-xs pt-8">
              <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                {lang === "en" ? "- Web development" : "- 2 requests åt gången"}
              </p>
              <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                {lang === "en"
                  ? "- App development"
                  : "- Genomsnitt 2-4 dagar leverans"}
              </p>
              <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                {lang === "en"
                  ? "- Unlimited brands"
                  : "- Obegränsade varumärken"}
              </p>
              <p className="text-md py-2 text-zinc-500">
                {lang === "en"
                  ? "- Unlimited users"
                  : "- Obegränsade användare"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative flex w-screen flex-col items-center justify-center gap-16 overflow-hidden bg-black px-4 pb-40">
        <div className="flex flex-col items-center gap-6">
          <h2 className="xs:text-5xl text-4xl tracking-tight text-white">
            {lang === "en" ? "Support & delivery" : "Support & leverans"}
          </h2>
          <p className="text-md xs:text-lg max-w-xs text-center font-normal text-zinc-200">
            {lang === "en"
              ? "Choose between one or two requests at a time. Unlimited revisions, always."
              : "Välj mellan en eller två requests åt gången. Obegränsad revision, alltid."}
          </p>
        </div>
        <div className="flex w-full max-w-4xl flex-col gap-4 md:flex-row">
          {/* Card Left */}
          <div className="flex w-full flex-col rounded-md bg-white p-8">
            <div className="flex flex-row justify-between">
              <h3 className="text-4xl tracking-tight text-black">Standard</h3>
              <div className="flex items-center rounded-full bg-zinc-200 px-4 py-1 font-medium text-black">
                <p>{lang === "en" ? "1 spot left " : "1 plats kvar "}</p>
              </div>
            </div>
            <h2 className="pt-12 text-5xl tracking-tight text-black">
              $499/mo
            </h2>
            <p className="text-md pt-2 text-zinc-500">
              {lang === "en"
                ? "Pause or cancel anytime"
                : "Pausa eller avbryt när du vill"}
            </p>
            <div className="pt-12">
              <button
                className="rounded-full border border-black bg-black px-4 py-2 text-white hover:border-black hover:bg-white hover:text-black"
                type="button"
              >
                {lang === "en"
                  ? "Get started with a call"
                  : "Kom igång med ett samtal"}{" "}
                -&gt;
              </button>
            </div>
            <div className="max-w-xs pt-8">
              <p className="text-md border-b border-zinc-100 py-2 text-zinc-500">
                {lang === "en"
                  ? "- 1 request at a time"
                  : "- 1 request åt gången"}
              </p>
              <p className="text-md border-b border-zinc-100 py-2 text-zinc-500">
                {lang === "en"
                  ? "- Average 4-7 days delivery"
                  : "- Genomsnitt 4-7 dagar leverans"}
              </p>
              <p className="text-md border-b border-zinc-100 py-2 text-zinc-500">
                {lang === "en" ? "- 1 brand" : "- 1 varumärke"}
              </p>
              <p className="text-md py-2 text-zinc-500">
                {lang === "en" ? "- 1 user" : "- 1 användare"}
              </p>
            </div>
          </div>
          {/* Card Right */}
          <div className="flex w-full flex-col rounded-md border border-zinc-500 bg-black p-8">
            <div className="flex flex-row justify-between">
              <h3 className="text-4xl tracking-tight text-white">Priority</h3>
              <div className="flex items-center rounded-full bg-zinc-800 px-4 py-1 font-medium text-white">
                <p>{lang === "en" ? "1 spot left " : "1 plats kvar "}</p>
              </div>
            </div>
            <h2 className="pt-12 text-5xl tracking-tight text-white">
              $999/mo
            </h2>
            <p className="text-md pt-2 text-zinc-500">
              {lang === "en"
                ? "Pause or cancel anytime"
                : "Pausa eller avbryt när du vill"}
            </p>
            <div className="pt-12">
              <button
                className="rounded-full border border-white bg-white px-4 py-2 text-black hover:border-zinc-500 hover:bg-black hover:text-white"
                type="button"
              >
                {lang === "en"
                  ? "Get started with a call"
                  : "Kom igång med ett samtal"}{" "}
                -&gt;
              </button>
            </div>
            <div className="max-w-xs pt-8">
              <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                {lang === "en"
                  ? "- 2 requests at a time"
                  : "- 2 requests åt gången"}
              </p>
              <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                {lang === "en"
                  ? "- Average 2-4 days delivery"
                  : "- Genomsnitt 2-4 dagar leverans"}
              </p>
              <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                {lang === "en"
                  ? "- Unlimited brands"
                  : "- Obegränsade varumärken"}
              </p>
              <p className="text-md py-2 text-zinc-500">
                {lang === "en"
                  ? "- Unlimited users"
                  : "- Obegränsade användare"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
