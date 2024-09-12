import Pricing from "../components/Pricing";

export default function PricingSection() {
  const pricingPlans = [
    {
      title: "Starter",
      tag: "For teams getting started",
      price: "67,000",
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
      tag: "For teams that are scaling",
      price: "97,000",
      included: [
        "100 credits / mo",
        "At least 1 designer always available",
        "Unlimited design requests",
        "Average delivery time 2-7 days",
        "Unlimited revisions",
      ],
      bgColor:
        "bg-[radial-gradient(170%_100%_at_top,_#010314_30%,_#592ED3_60%,_#fff_100%)]",
      borderColor: "border border-zinc-500",
      textColor: "text-white",
    },
    {
      title: "Superpowered",
      tag: "For teams that want full time access",
      price: "137,000",
      included: [
        "160 credits / mo",
        "24/7 access & on call support",
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
    <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-3">
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
