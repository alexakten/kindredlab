// Card.tsx
import React from "react";

type ServiceCardProps = {
  title: string;
  cost: number;
  features: string[];
  isSelected: boolean;
  onToggle: () => void;
  lang: "en" | "sv";
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  cost,
  features,
  isSelected,
  onToggle,
  lang,
}) => {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat("en-US").format(num);
  };

  return (
    <div className="col-span-1">
      <div
        className={`flex w-full flex-col rounded-md border p-8
        ${
          isSelected
            ? "border-white bg-white text-black"
            : "border-zinc-500 bg-black text-white"
        } `}
      >
        <h3 className="text-4xl tracking-tight">{title}</h3>
        <h2 className="pt-12 text-5xl tracking-tight">
          ${formatNumber(cost)}/mo
        </h2>
        <p className="text-md pt-2 text-zinc-500">Pause or cancel any time</p>
        <div className="pt-12">
          <button
            className={`rounded-full border border-zinc-500 px-4 py-2 ${
              isSelected
                ? "bg-white text-black hover:border-black"
                : "bg-black text-white hover:border-white hover:bg-black"
            }  `}
            type="button"
            onClick={onToggle}
          >
            {lang === "en"
              ? isSelected
                ? "Remove from plan"
                : "Add to plan"
              : isSelected
                ? "Added"
                : "Lägg till"}{" "}
          </button>
        </div>
        <div className="max-w-xs pt-8">
          {features.map((feature, index) => (
            <p
              key={index}
              className={`text-md text-zinc-500 ${
                index !== features.length - 1 ? "border-b border-zinc-800" : ""
              } py-2  `}
            >
              {feature}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
