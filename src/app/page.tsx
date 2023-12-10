"use client";

import Image from "next/image";
import { useState, useEffect, ChangeEvent, useMemo } from "react";
import ServiceCard from "./components/ServiceCard";
import TotalPriceCard from "./components/TotalPriceCard";
import Logo from "../../public/logo.js";

export default function Home() {
  //#region

  const [lang, setLang] = useState("en");

  const serviceTitles = ["Web", "Design", "Content"];

  // Costs for each service
  const serviceCosts = useMemo(
    () => ({
      service1: 4999,
      service2: 2999,
      service3: 2999,
    }),
    [],
  );

  // Features for each service
  const serviceFeatures = [
    ["Web design", "Web development", "SEO & Analytics"],
    ["Branding", "UX/UI", "Graphic design"],
    ["Social media", "Productions", "E-commerce"],
  ];

  // State for each service's selection status
  const [isService1Selected, setIsService1Selected] = useState(false);
  const [isService2Selected, setIsService2Selected] = useState(false);
  const [isService3Selected, setIsService3Selected] = useState(false);

  // Handlers to toggle the selection of each service
  const handleService1Toggle = () => setIsService1Selected(!isService1Selected);
  const handleService2Toggle = () => setIsService2Selected(!isService2Selected);
  const handleService3Toggle = () => setIsService3Selected(!isService3Selected);

  // Calculate the total price based on selected services
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    if (isService1Selected) total += serviceCosts.service1;
    if (isService2Selected) total += serviceCosts.service2;
    if (isService3Selected) total += serviceCosts.service3;
    setTotalPrice(total);
  }, [
    isService1Selected,
    isService2Selected,
    isService3Selected,
    serviceCosts,
  ]);

  const [requests, setRequests] = useState<string[]>(["TikTok video"]);
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

  //#endregion

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
      <nav className="fixed top-5 z-20 flex w-full items-center justify-between px-4 xs:px-6">
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
            className="gradient-text text-4xl font-semibold tracking-tight xs:text-5xl sm:text-6xl"
            style={{ lineHeight: 1.1 }}
          >
            {lang === "en"
              ? "Unlimited design + unlimited content. One membership."
              : "Obegränsad design. Obegränsad revision. En prenumeration."}
          </h1>
          <div style={{ maxWidth: 640 }}>
            <p
              className="text-md font-normal text-zinc-200 xs:text-lg"
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
              onClick={() =>
                (window.location.href = "mailto:alex.akten@outlook.com")
              }
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
            <h2 className="gradient-text text-4xl tracking-tight text-white xs:text-5xl">
              {lang === "en" ? "Create your plan" : "Välj en plan"}
            </h2>
          </div>
          <p className="text-md max-w-xs text-center font-normal text-zinc-200 xs:text-lg">
            {lang === "en"
              ? "Create your own plan. Each month you only pay for what you need."
              : "Välj mellan en eller två requests åt gången. Obegränsad revision, alltid."}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid w-full max-w-5xl gap-4 lg:grid-cols-3 lg:grid-rows-2">
          <div className="col-span-1 row-span-1">
            {" "}
            <ServiceCard
              title={serviceTitles[0]}
              cost={serviceCosts.service1}
              features={serviceFeatures[0]}
              isSelected={isService1Selected}
              onToggle={handleService1Toggle}
              lang="en"
            />
          </div>
          <div className="col-span-1 row-span-1">
            {" "}
            <ServiceCard
              title={serviceTitles[1]}
              cost={serviceCosts.service2}
              features={serviceFeatures[1]}
              isSelected={isService2Selected}
              onToggle={handleService2Toggle}
              lang="en"
            />
          </div>
          <div className="col-span-1 row-span-1">
            {" "}
            <ServiceCard
              title={serviceTitles[2]}
              cost={serviceCosts.service3}
              features={serviceFeatures[2]}
              isSelected={isService3Selected}
              onToggle={handleService3Toggle}
              lang="en"
            />
          </div>
          <div className="col-span-3 row-span-1">
            <TotalPriceCard
              serviceTitles={serviceTitles}
              serviceCosts={serviceCosts}
              selectedServices={[
                isService1Selected,
                isService2Selected,
                isService3Selected,
              ]}
              totalPrice={totalPrice}
              lang="en"
            />
          </div>
        </div>
      </section>

      {/* Request Section */}
      <section className="relative flex w-screen flex-col items-center justify-center gap-16 overflow-hidden bg-black px-4 pb-40">
        {/* Heading */}
        <div className="flex max-w-sm flex-col items-center gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-zinc-500">Step 2</p>
            <h2 className="gradient-text text-4xl tracking-tight text-white xs:text-5xl">
              {lang === "en" ? "Make requests" : "Skapa requests"}
            </h2>
          </div>
          <p className="text-md max-w-xs text-center font-normal text-zinc-200 xs:text-lg">
            {lang === "en"
              ? "We use a kanban board in Notion where you can make requests."
              : "Vi använder en kanban board i Notion där ni kan göra requests."}
          </p>
        </div>
        <div className="grid h-full w-full max-w-5xl gap-4 rounded-md border border-zinc-500 bg-black p-8 text-white md:grid-cols-2 lg:grid-cols-4">
          {/* Requests*/}
          <div className="col-span-1">
            <div className="flex w-full flex-col rounded-md">
              <div className="pt">
                <p className="pb-3">Create new request</p>
                <div className="pb-4">
                  <input
                    className="w-48 rounded-md border border-zinc-500 bg-black px-4 py-2 text-white"
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
          <div className="col-span-1">
            <div className="flex w-full flex-col gap-3 rounded-md">
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
          <div className="col-span-1">
            <div className="flex w-full flex-col gap-3 rounded-md">
              <p className="text-md">Working</p>
              <div className="text-md w-48 rounded-md bg-zinc-200 px-4 py-2 font-medium text-black">
                Change hero image
              </div>
              <div className="text-md w-48 rounded-md bg-zinc-200 px-4 py-2 font-medium text-black">
                Social media content
              </div>
            </div>
          </div>
          {/* Done*/}
          <div className="col-span-1">
            <div className="flex w-full flex-col gap-3 rounded-md">
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
            <h2 className="gradient-text text-4xl tracking-tight text-white xs:text-5xl">
              {lang === "en" ? "Get delivery" : "Få leverans"}
            </h2>
          </div>
          <p className="text-md max-w-xs text-center font-normal text-zinc-200 xs:text-lg">
            {lang === "en"
              ? "This is an example of what we deliver in a month."
              : "Det här är ett exempel på vad vi levererar under en månad."}
          </p>
        </div>
        {/* Bento Grid */}
        <div className="grid h-96 w-full max-w-5xl grid-cols-4 grid-rows-4 gap-4 ">
          <div className="relative col-span-1 row-span-1 rounded-md border border-zinc-500">
            <Image
              src="/flexiwaggon-logo.png"
              alt="Flexiwaggon Logo"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="col-span-1 row-span-1 rounded-md border border-zinc-500"></div>
          <div className="relative col-span-2 row-span-3 rounded-md border border-zinc-500">
            <Image
              src="/flexiwaggon-hero.png"
              alt="Flexiwaggon Hero"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="col-span-1 row-span-3 rounded-md border border-zinc-500"></div>
          <div className="col-span-1 row-span-1 rounded-md border border-zinc-500"></div>
          <div className="col-span-1 row-span-2 rounded-md border border-zinc-500"></div>
          <div className="col-span-2 row-span-1 rounded-md border border-zinc-500"></div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative flex w-screen flex-col items-center justify-center gap-16 overflow-hidden bg-black px-4 pb-40">
        {/* Heading */}
        <div className="flex flex-col items-center gap-6">
          <h2 className="gradient-text text-4xl tracking-tight text-white xs:text-5xl">
            {lang === "en" ? "Testimonials" : "Recensioner"}
          </h2>
          <p className="text-md max-w-xs text-center font-normal text-zinc-200 xs:text-lg">
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
                <p className="text-md pt-12 text-zinc-200 xs:text-lg">
                  {lang === "en"
                    ? '"Professional team that does a very good job. After the first job, I hired them again. Received a very good and professional treatment."'
                    : '"Professionellt team som gör ett mycket bra jobb. Efter första jobbet anlitade jag dom igen. Fick ett väldigt bra och proffesionellt bemötande."'}
                </p>
              </div>
              {/* Bottom Container */}
              <div className="flex flex-col items-center justify-between gap-4 pt-12 xs:flex-row">
                {/* Name and Title */}
                <div className="w-full">
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
                <div className="flex w-full justify-end">
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
                <p className="text-md pt-12 text-zinc-200 xs:text-lg">
                  {lang === "en"
                    ? '"Kindred Lab understood our company and how to best communicate our vision. We are grateful to have worked with them and hope to do so again in the future."'
                    : '"Kindred Lab förstod vårt företag och hur man bäst kommunicerar vår vision. Vi är tacksamma över att få ha arbetat med dem, och hoppas på att göra det igen i framtiden."'}
                </p>
              </div>
              {/* Bottom Container */}
              <div className="flex flex-col items-end justify-between gap-4 pt-12 xs:flex-row xs:items-center">
                {/* Name and Title */}
                <div className="w-full">
                  <div className="flex w-full flex-row items-center gap-4">
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
                <div className="flex w-full justify-end">
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
            className="gradient-text text-4xl font-semibold tracking-tight xs:text-5xl sm:text-6xl"
            style={{ lineHeight: 1.1 }}
          >
            {lang === "en"
              ? "Ready to give it a try?"
              : "Redo att komma igång?"}
          </h1>
          <div style={{ maxWidth: 640 }}>
            <p
              className="text-md font-normal text-zinc-200 xs:text-lg"
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
              onClick={() =>
                (window.location.href = "mailto:alex.akten@outlook.com")
              }
            >
              {lang === "en" ? "Book a call" : "Boka samtal"} -&gt;
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
