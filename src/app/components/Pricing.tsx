export default function Pricing({
  title,
  price,
  included,
  bgColor,
  borderColor,
  textColor,
}: {
  title: string;
  price: string;
  included: string[];
  bgColor: string;
  borderColor: string;
  textColor: string;
}) {
  return (
    <div
      className={`flex h-full w-full flex-col rounded-md border ${borderColor} shadow-sm tracking-tight ${textColor} ${bgColor} py-12 px-8`}
    >
      <p className="text-3xl font-medium tracking-tight">{title}</p>

      <p className="mt-16 text-5xl font-medium tracking-tighter">{price}</p>
      <p className="mt-2 text-sm font-normal tracking-tight opacity-50">
        One time fee
      </p>
      <div className="mt-16">
        {included.map((item, index) => (
          <p key={index} className="font-normal max-w-xs tracking-tight mb-5 opacity-80">{item}</p>
        ))}
      </div>
    </div>
  );
}
