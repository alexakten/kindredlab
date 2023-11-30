"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Logo from "../../public/logo.js";

export default function Home() {
  const [lang, setLang] = useState("en");

  const [isWebSelected, setIsWebSelected] = useState(false);
  const [isDesignSelected, setIsDesignSelected] = useState(false);
  const [isContentSelected, setIsContentSelected] = useState(false);
  const [isPrioritySelected, setIsPrioritySelected] = useState(false);

  // Handlers for each card
  const handleWebToggle = () => setIsWebSelected(!isWebSelected);
  const handleDesignToggle = () => setIsDesignSelected(!isDesignSelected);
  const handleContentToggle = () => setIsContentSelected(!isContentSelected);
  const handlePriorityToggle = () => setIsPrioritySelected(!isPrioritySelected);

  const cost = {
    web: 4999,
    design: 2999,
    content: 2999,
    priority: 999,
  };

  const formatNumber = (num: any) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  // State to store the total price
  const [totalPrice, setTotalPrice] = useState(0);

  // Function to calculate total price
  const calculateTotal = () => {
    let total = 0;
    if (isWebSelected) total += cost.web;
    if (isDesignSelected) total += cost.design;
    if (isContentSelected) total += cost.content;
    if (isPrioritySelected) total += cost.priority;
    return total;
  };

  // Update the total price when the selection state changes
  useEffect(() => {
    setTotalPrice(calculateTotal());
  }, [isWebSelected, isDesignSelected, isContentSelected, isPrioritySelected]);

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
      {/* Grid Overlay */}
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

      {/* Hero Section */}
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
                ? "Increase conversion and grow your business with stunning design and eye-catching content. Make (almost) any request and we'll design it."
                : "Öka din konvertering och väx ditt varumärke med fantastisk design och content. Gör (nästan) vilken request som helst och vi designar det."}
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

      {/* How Section */}
      <section className="relative flex w-screen flex-col items-center justify-center gap-16 overflow-hidden bg-black px-4 pb-40">
        {/* Heading */}
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
        {/* Outer Cards Container */}
        <div className="flex w-full flex-col items-center gap-4">
          {/* Cards Container */}
          <div className="grid w-full max-w-5xl gap-4 lg:grid-cols-3">
            {/* Web Card */}
            <div className="col-span-1">
              <div
                className={`flex w-full flex-col rounded-md border  ${
                  isWebSelected
                    ? "border-white bg-white text-black"
                    : "border-zinc-500 bg-black text-white"
                } p-8`}
              >
                <h3 className="text-4xl tracking-tight ">Web</h3>
                <h2 className="pt-12 text-5xl tracking-tight">
                  ${formatNumber(cost.web)}/mo
                </h2>
                <p className="text-md pt-2 text-zinc-500">
                  {lang === "en"
                    ? "Pause or cancel anytime"
                    : "Pausa eller avbryt när du vill"}
                </p>
                <div className="pt-12">
                  <button
                    className={`rounded-full border ${
                      isWebSelected
                        ? "border-zinc-500 bg-white text-black hover:border-black"
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
                    {lang === "en" ? "- Web design" : "- Webbdesign"}
                  </p>
                  <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                    {lang === "en" ? "- Web development" : "- Webbutveckling"}
                  </p>
                  <p className="text-md py-2 text-zinc-500">
                    {lang === "en" ? "- SEO & Analytics" : "- SEO & Analytics"}
                  </p>
                </div>
              </div>
            </div>
            {/* Design Card */}
            <div className="col-span-1">
              <div
                className={`flex w-full flex-col rounded-md border  ${
                  isDesignSelected
                    ? "border-white bg-white text-black"
                    : "border-zinc-500 bg-black text-white"
                } p-8`}
              >
                <h3 className="text-4xl tracking-tight ">Design</h3>
                <h2 className="pt-12 text-5xl tracking-tight">
                  ${formatNumber(cost.design)}/mo
                </h2>
                <p className="text-md pt-2 text-zinc-500">
                  {lang === "en"
                    ? "Pause or cancel anytime"
                    : "Pausa eller avbryt när du vill"}
                </p>
                <div className="pt-12">
                  <button
                    className={`rounded-full border ${
                      isDesignSelected
                        ? "border-zinc-500 bg-white text-black hover:border-black"
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
                    {lang === "en" ? "- Branding" : "- Branding"}
                  </p>
                  <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                    {lang === "en" ? "- UX/UI" : "- UX/UI"}
                  </p>
                  <p className="text-md py-2 text-zinc-500">
                    {lang === "en" ? "- Graphic design" : "- Grafisk design"}
                  </p>
                </div>
              </div>
            </div>
            {/*Content Card */}
            <div className="col-span-1">
              <div
                className={`flex w-full flex-col rounded-md border  ${
                  isContentSelected
                    ? "border-white bg-white text-black"
                    : "border-zinc-500 bg-black text-white"
                } p-8`}
              >
                <h3 className="text-4xl tracking-tight ">Content</h3>
                <h2 className="pt-12 text-5xl tracking-tight">
                  ${formatNumber(cost.content)}/mo
                </h2>
                <p className="text-md pt-2 text-zinc-500">
                  {lang === "en"
                    ? "Pause or cancel anytime"
                    : "Pausa eller avbryt när du vill"}
                </p>
                <div className="pt-12">
                  <button
                    className={`rounded-full border ${
                      isContentSelected
                        ? "border-zinc-500 bg-white text-black hover:border-black"
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
                    {lang === "en" ? "- Social media" : "- Sociala medier"}
                  </p>
                  <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                    {lang === "en" ? "- Photo & video" : "- Foto & video"}
                  </p>
                  <p className="text-md py-2 text-zinc-500">
                    {lang === "en" ? "- E-commerce" : "- E-commerce"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Container */}
          <div className="grid w-full max-w-5xl gap-4 lg:grid-cols-3">
            {/* Priority Card*/}
            <div className="col-span-2 lg:col-span-1">
              <div
                className={`flex w-full flex-col rounded-md border ${
                  isPrioritySelected
                    ? "border-white bg-white text-black"
                    : "border-zinc-500 bg-black text-white"
                } p-8`}
              >
                <h3 className="text-4xl tracking-tight ">Priority Service</h3>
                <h2 className="pt-12 text-5xl tracking-tight">
                  ${formatNumber(cost.priority)}/mo
                </h2>
                <p className="text-md pt-2 text-zinc-500">
                  {lang === "en"
                    ? "Pause or cancel anytime"
                    : "Pausa eller avbryt när du vill"}
                </p>
                <div className="pt-12">
                  <button
                    className={`rounded-full border ${
                      isPrioritySelected
                        ? "border-zinc-500 bg-white text-black hover:border-black"
                        : "border-zinc-500 bg-black text-white hover:border-white hover:bg-black"
                    } px-4 py-2 `}
                    type="button"
                    onClick={handlePriorityToggle}
                  >
                    {lang === "en"
                      ? isPrioritySelected
                        ? "Remove from plan"
                        : "Add to plan"
                      : isPrioritySelected
                        ? "Ta bort från planen"
                        : "Lägg till"}{" "}
                    -&gt;
                  </button>
                </div>
                <div className="max-w-xs pt-8">
                  <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                    {lang === "en"
                      ? "- Two requests at a time"
                      : "- Två requests åt gången"}
                  </p>
                  <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                    {lang === "en"
                      ? "- Faster delivery"
                      : "- Snabbare leverans"}
                  </p>
                  <p className="text-md py-2 text-zinc-500">
                    {lang === "en"
                      ? "- Priority support"
                      : "- Prioriterad support"}
                  </p>
                </div>
              </div>
            </div>
            {/* Total Price Card */}
            <div className="col-span-2">
              <div className="flex h-full w-full flex-col justify-between rounded-md border border-zinc-500 bg-black p-8">
                <div>
                  <div className="flex flex-row justify-between">
                    <h3 className="text-4xl tracking-tight text-white">
                      {lang === "en" ? "Your plan" : "Din plan"}
                    </h3>
                    <div className="flex items-center rounded-full border border-zinc-500 bg-zinc-900 px-4 py-1 font-normal text-zinc-500">
                      <p className="font-medium text-white">
                        {lang === "en" ? "2 spots left" : "2 platser kvar"}
                      </p>
                    </div>
                  </div>
                  <h2 className="pt-12 text-5xl tracking-tight text-white">
                    ${formatNumber(totalPrice)}/mo
                  </h2>
                  <p className="text-md pt-2 text-zinc-500">
                    {lang === "en"
                      ? "Pause or cancel anytime"
                      : "Pausa eller avbryt när du vill"}
                  </p>
                </div>
                <div className="pt-12">
                  <button
                    className="glow-on-hover rounded-full border border-white bg-white px-4 py-2 text-black"
                    type="button"
                  >
                    {lang === "en"
                      ? "Get started with a call"
                      : "Kom igång med ett samtal"}{" "}
                    -&gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
