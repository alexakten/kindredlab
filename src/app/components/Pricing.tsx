export default function Pricing({
  title,
  tag,
  price,
  included,
  bgColor,
  borderColor,
  textColor,
}: {
  title: string;
  tag?: string;
  price: string;
  included: string[];
  bgColor: string;
  borderColor: string;
  textColor: string;
}) {
  return (
    <div
      className={`flex h-full w-full flex-col rounded-2xl ${borderColor} overflow-hidden tracking-tight ${textColor} ${bgColor} px-8 py-12`}
    >
      <p className="text-3xl font-medium tracking-tight">{title}</p>

      <p className="mt-16 text-5xl font-medium tracking-tighter">{price}</p>
      <p className="mt-2 text-sm font-normal tracking-tight opacity-50">
        {tag}
      </p>
      <div className="mt-16">
        {included.map((item, index) => (
          <p
            key={index}
            className="mb-5 max-w-xs font-normal tracking-tight opacity-80"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
