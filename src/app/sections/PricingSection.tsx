import Pricing from "../components/Pricing";

export default function PricingSection() {
  const pricingPlans = [
    {
      title: "Starter",
      tag: "For teams getting started",
      price: "67,000 SEK / mo",
      included: [
        "1 Project",
        "5 Pages",
        "Basic Support",
        "SEO Optimization",
        "Hosting included",
      ],
      bgColor: "bg-white bg-opacity-10",
      borderColor: "border border-zinc-500",
      textColor: "text-white",
    },
    {
      title: "Superpowered",
      tag: "For teams that are scaling",
      price: "87,000 SEK / mo",
      included: [
        "Unlimited Projects",
        "Unlimited Pages",
        "Priority Support",
        "Advanced SEO",
        "Custom Integrations",
        "Free Hosting",
      ],
      bgColor:
        "bg-[radial-gradient(170%_100%_at_top,_#010314_30%,_#592ED3_60%,_#fff_100%)]",
      borderColor: "border border-zinc-500",
      textColor: "text-white",
    },
  ];

  return (
    <div className="grid w-full grid-cols-1 gap-8 px-12 md:grid-cols-2">
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
        />
      ))}
    </div>
  );
}
