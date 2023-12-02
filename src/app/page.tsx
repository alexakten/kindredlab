"use client";

import Image from "next/image";
import { useState, useEffect, ChangeEvent, useMemo } from "react";
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

  const [requests, setRequests] = useState<string[]>([]);
  const [newRequest, setNewRequest] = useState<string>("Design ad template");

  const handleAddRequest = () => {
    if (newRequest.trim() !== "") {
      setRequests([...requests, newRequest]);
      setNewRequest(""); // Clear the input field after adding
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewRequest(e.target.value);
  };

  const cost = useMemo(
    () => ({
      web: 4999,
      design: 2999,
      content: 2999,
      priority: 799,
    }),
    [],
  );
  const formatNumber = (num: any) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  // State to store the total price
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      let total = 0;
      if (isWebSelected) total += cost.web;
      if (isDesignSelected) total += cost.design;
      if (isContentSelected) total += cost.content;
      if (isPrioritySelected) total += cost.priority;
      return total;
    };

    setTotalPrice(calculateTotal());
  }, [
    isWebSelected,
    isDesignSelected,
    isContentSelected,
    isPrioritySelected,
    cost,
  ]);

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
            className="xs:text-5xl gradient-text text-4xl font-semibold tracking-tight sm:text-6xl"
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
                ? "Increase conversion and grow your business with stunning design and content. Make (almost) any request and we'll design it."
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

      {/* Price Section */}
      <section className="relative flex w-screen flex-col items-center justify-center gap-16 overflow-hidden bg-black px-4 pb-40">
        {/* Heading */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <p className="text-zinc-500">Step 1</p>
            <h2 className="xs:text-5xl gradient-text text-4xl tracking-tight text-white">
              {lang === "en" ? "Select a plan" : "Välj en plan"}
            </h2>
          </div>
          <p className="text-md xs:text-lg max-w-xs text-center font-normal text-zinc-200">
            {lang === "en"
              ? "Create your own plan. Each month you only pay for what you need."
              : "Välj mellan en eller två requests åt gången. Obegränsad revision, alltid."}
          </p>
        </div>
        {/* Cards Container */}
        <div className="flex w-full flex-col items-center gap-4">
          {/* Top Cards Container */}
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
                    {lang === "en" ? "- E-commerce" : "- E-handel"}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom Cards Container */}
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
                  {/* Selected Services */}
                  <div className="max-w-xs pt-1">
                    {isWebSelected && (
                      <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                        <span className="font-medium text-white">
                          ${formatNumber(cost.web)}/mo
                        </span>
                        {lang === "en" ? " | Web" : " | Webb"}
                      </p>
                    )}
                    {isDesignSelected && (
                      <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                        <span className="font-medium text-white">
                          ${formatNumber(cost.design)}/mo
                        </span>
                        {lang === "en" ? " | Design" : " | Design"}
                      </p>
                    )}
                    {isContentSelected && (
                      <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                        <span className="font-medium text-white">
                          ${formatNumber(cost.content)}/mo
                        </span>
                        {lang === "en" ? " | Content" : " | Content"}
                      </p>
                    )}
                    {isPrioritySelected && (
                      <p className="text-md border-b border-zinc-800 py-2 text-zinc-500">
                        <span className="font-medium text-white">
                          ${formatNumber(cost.priority)}/mo
                        </span>
                        {lang === "en"
                          ? " | Priority Service"
                          : " | Prioriterad Service"}
                      </p>
                    )}
                  </div>
                </div>
                <div className="pt-8">
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

      {/* Request Section */}
      <section className="relative flex w-screen flex-col items-center justify-center gap-16 overflow-hidden bg-black px-4 pb-40">
        {/* Heading */}
        <div className="flex max-w-sm flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-zinc-500">Step 2</p>
            <h2 className="xs:text-5xl gradient-text text-4xl tracking-tight text-white">
              {lang === "en" ? "Make requests" : "Skapa requests"}
            </h2>
          </div>
          <p className="text-md xs:text-lg max-w-xs text-center font-normal text-zinc-200">
            {lang === "en"
              ? "We use a kanban board in Notion where you can make requests."
              : "Vi använder en kanban board i Notion där ni kan göra requests."}
          </p>
        </div>
        <div className="grid h-full w-full max-w-5xl gap-2 rounded-md border border-zinc-500 bg-black p-8 text-white md:grid-cols-2 lg:grid-cols-4">
          {/* Requests*/}
          <div className="col-span-1">
            <div className="flex w-full flex-col rounded-md">
              <h3 className="text-4xl tracking-tight ">Requests</h3>
              <div className="pt-6">
                <p className="pb-3">Create new request</p>
                <div className="pb-4">
                  <input
                    className="rounded-md border border-zinc-500 bg-black px-4 py-2 text-white"
                    title="request"
                    value={newRequest}
                    onChange={handleInputChange}
                  ></input>
                </div>
                <button
                  className="rounded-full border border-zinc-500 bg-black px-4 py-2 text-white hover:border-white"
                  type="button"
                  onClick={handleAddRequest}
                >
                  {lang === "en" ? "Add request " : "Lägg till "}+
                </button>
              </div>
            </div>
          </div>
          {/* To do */}
          <div className="col-span-1 pt-8">
            <div className="flex w-full flex-col gap-3 rounded-md p-8">
              <p className="text-md">Requests</p>
              {requests.map((request, index) => (
                <div
                  key={index}
                  className="text-md w-48 rounded-md bg-zinc-200 px-4 py-2 font-medium text-black"
                >
                  {request}
                </div>
              ))}
            </div>
          </div>
          {/* Doing*/}
          <div className="col-span-1 pt-8">
            <div className="flex w-full flex-col gap-3 rounded-md p-8">
              <p className="text-md">Doing</p>
              <div className="text-md w-48 rounded-md bg-zinc-200 px-4 py-2 font-medium text-black">
                Change images
              </div>
              <div className="text-md w-48 rounded-md bg-zinc-200 px-4 py-2 font-medium text-black">
                Social media content
              </div>
            </div>
          </div>
          {/* Done*/}
          <div className="col-span-1 pt-8">
            <div className="flex w-full flex-col gap-3 rounded-md p-8">
              <p className="text-md">Done</p>
              <div className="text-md w-48 rounded-md bg-zinc-200 px-4 py-2 font-medium text-black">
                Add testimonials
              </div>
              <div className="text-md w-48 rounded-md bg-zinc-200 px-4 py-2 font-medium text-black">
                Design landing page
              </div>
              <div className="text-md w-48 rounded-md bg-zinc-200 px-4 py-2 font-medium text-black">
                Create new logo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Figma Section */}
      <section className="relative flex w-screen flex-col items-center justify-center gap-16 overflow-hidden bg-black px-4 pb-40">
        {/* Heading */}
        <div className="flex max-w-sm flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-zinc-500">Step 3</p>
            <h2 className="xs:text-5xl gradient-text text-4xl tracking-tight text-white">
              {lang === "en" ? "Get delivery" : "Få leverans"}
            </h2>
          </div>
          <p className="text-md xs:text-lg max-w-xs text-center font-normal text-zinc-200">
            {lang === "en"
              ? "This is an example of what we deliver in a month."
              : "Det här är ett exempel på vad vi levererar under en månad."}
          </p>
        </div>
        <div className="flex h-full w-full max-w-5xl flex-col justify-between rounded-md border border-zinc-500 bg-black p-1 text-white">
          <iframe
            title="figma"
            width="100%"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F0WhZBjMZkuuruMV2Ge5I7c%2FAirspace%3Ftype%3Ddesign%26node-id%3D158%253A698%26mode%3Ddesign%26t%3Dt0b5imcT1tXMwyW9-1"
          ></iframe>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative flex w-screen flex-col items-center justify-center gap-16 overflow-hidden bg-black px-4 pb-40">
        {/* Heading */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="xs:text-5xl gradient-text text-4xl tracking-tight text-white">
            {lang === "en" ? "Testimonials" : "Recensioner"}
          </h2>
          <p className="text-md xs:text-lg max-w-xs text-center font-normal text-zinc-200">
            {lang === "en"
              ? "Here is what our customers are saying about our work."
              : "Här är vad våra kunder säger om oss."}
          </p>
        </div>
        <div className="grid w-full max-w-5xl gap-4 lg:grid-cols-2">
          {/* Quote 1 */}
          <div className="col-span-1">
            <div className="flex h-full w-full flex-col justify-between rounded-md border border-zinc-500 bg-black p-8 text-white">
              {/* Logo and Quote */}
              <div>
                <h3 className="text-4xl tracking-tight ">Flexiwaggon</h3>
                <p className="text-md xs:text-lg pt-12 text-zinc-200">
                  {lang === "en"
                    ? '"Professional team that does a very good job. After the first job, I hired them again. Received a very good and professional treatment."'
                    : '"Professionellt team som gör ett mycket bra jobb. Efter första jobbet anlitade jag dom igen. Fick ett väldigt bra och proffesionellt bemötande."'}
                </p>
              </div>
              {/* Bottom Container */}
              <div className="flex flex-row items-center justify-between pt-12">
                {/* Name and Title */}
                <div>
                  <div className="flex flex-row items-center gap-4">
                    {/* Image */}
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full">
                      <Image
                        src="/jan.png"
                        alt="Collect"
                        width={48} // Adjust the width and height as needed
                        height={48} // The values must be equal for a perfect circle
                        objectFit="cover" // This ensures the image covers the entire area
                      />
                    </div>
                    {/* Text */}
                    <div>
                      <p className="text-md text-white">Jan Eriksson</p>
                      <p className="text-md text-zinc-500">
                        {lang === "en" ? "CEO, Flexiwaggon" : "VD, Flexiwaggon"}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Button */}
                <div>
                  <button
                    className="rounded-full border border-zinc-500 bg-black px-4 py-2 text-white hover:border-white hover:bg-black"
                    type="button"
                    onClick={() =>
                      (window.location.href = "https://www.flexiwaggon.se/")
                    }
                  >
                    {lang === "en" ? "Visit site" : "Besök hemsida"} -&gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Quote 2 */}
          <div className="col-span-1">
            <div className="flex h-full w-full flex-col justify-between rounded-md border border-zinc-500 bg-black p-8 text-white">
              {/* Logo and Quote */}
              <div>
                <h3 className="text-4xl tracking-tight ">MycoMine</h3>
                <p className="text-md xs:text-lg pt-12 text-zinc-200">
                  {lang === "en"
                    ? '"Kindred Lab understood our company and how to best communicate our vision. We are grateful to have worked with them and hope to do so again in the future."'
                    : '"Kindred Lab förstod vårt företag och hur man bäst kommunicerar vår vision. Vi är tacksamma över att få ha arbetat med dem, och hoppas på att göra det igen i framtiden."'}
                </p>
              </div>
              {/* Bottom Container */}
              <div className="flex flex-row items-center justify-between pt-12">
                {/* Name and Title */}
                <div>
                  <div className="flex flex-row items-center gap-4">
                    {/* Image */}
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full">
                      <Image
                        src="/magnus.png"
                        alt="Collect"
                        width={48} //
                        height={48}
                        objectFit="cover"
                      />
                    </div>
                    {/* Text */}
                    <div>
                      <p className="text-md text-white">Magnus Ivarsson</p>
                      <p className="text-md text-zinc-500">
                        {lang === "en" ? "CEO, MycoMine" : "VD, MycoMine"}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Button */}
                <div>
                  <button
                    className="rounded-full border border-zinc-500 bg-black px-4 py-2 text-white hover:border-white hover:bg-black"
                    type="button"
                    onClick={() =>
                      (window.location.href = "https://www.mycomine.se/")
                    }
                  >
                    {lang === "en" ? "Visit site" : "Besök hemsida"} -&gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready Section */}
      <section className="flex w-screen flex-col items-center justify-center gap-16 overflow-hidden bg-black px-4 pb-40">
        <div className="flex max-w-4xl flex-col items-center gap-6 text-center text-white">
          <h1
            className="xs:text-5xl gradient-text text-4xl font-semibold tracking-tight sm:text-6xl"
            style={{ lineHeight: 1.1 }}
          >
            {lang === "en"
              ? "Ready to give it a try?"
              : "Redo att komma igång?"}
          </h1>
          <div style={{ maxWidth: 640 }}>
            <p
              className="text-md xs:text-lg font-normal text-zinc-200"
              style={{ lineHeight: 1.6 }}
            >
              {lang === "en"
                ? "Let's have a quick chat to see if we're a good fit."
                : "Låt oss ta ett snabbt möte för att se om vi passar."}
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
    </main>
  );
}
