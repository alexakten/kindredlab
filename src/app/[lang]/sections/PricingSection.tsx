import Pricing from "../components/Pricing";
import Image from "next/image";
export default function PricingSection() {
  const pricingPlans = [
    {
      title: "Starter",
      tag: "For teams just getting started",
      price: "100,000",
      included: [
        "60 credits / mo",
        "Unlimited design requests",
        "Average delivery time 2-7 days",
        "Unlimited revisions",
      ],
      bgColor: "bg-white bg-opacity-10",
      borderColor: "border border-zinc-500",
      textColor: "text-white",
    },
    {
      title: "Boost",
      mostPopular: true, // This flag is already set
      tag: "For teams that are scaling fast",
      price: "180,000",
      included: [
        "100 credits / mo",
        "At least 1 designer always available",
        "Unlimited design requests",
        "Average delivery time 2-7 days",
        "Unlimited revisions",
      ],
      bgColor: "bg-black",
      borderColor: "border border-zinc-500",
      textColor: "text-white",
    },
    {
      title: "Superpowered",
      tag: "For teams that want full time access",
      price: "250,000",
      included: [
        "160 credits / mo",
        "Full time access",
        "At least 1 designer always available",
        "Unlimited design requests",
        "Average delivery time 2-7 days",
        "Unlimited revisions",
      ],
      bgColor: "bg-white bg-opacity-10",
      borderColor: "border border-zinc-500",
      textColor: "text-white",
    },
  ];

  return (
    <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
      <Image
        src="/images/hero.png"
        alt="Hero image"
        width={1000}
        height={1000}
        className="pointer-events-none absolute left-0 top-0 z-0 h-full w-full object-left blur-lg sm:w-full sm:scale-105 sm:object-cover"
        priority
        loading="eager"
      />
      {pricingPlans.map((plan, index) => (
        <Pricing
          key={index}
          title={plan.title}
          tag={plan.tag}
          price={plan.price}
          included={plan.included}
          bgColor={plan.bgColor}
          borderColor={plan.borderColor}
          textColor={plan.textColor}
          mostPopular={plan.mostPopular} // Pass the mostPopular prop here
        />
      ))}
    </div>
  );
}
