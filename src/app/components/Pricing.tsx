export default function Pricing({
  title,
  tag,
  price,
  included,
  bgColor,
  borderColor,
  textColor,
  mostPopular = false, // New property for "Most popular"
}: {
  title: string;
  tag?: string;
  price: string;
  included: string[];
  bgColor: string;
  borderColor: string;
  textColor: string;
  mostPopular?: boolean; // Optional boolean property
}) {
  return (
    <div
      className={`flex h-full w-full flex-col rounded-2xl ${borderColor} overflow-hidden tracking-tight ${textColor} ${bgColor} px-8 py-10`}
    >
      <div className="flex w-full justify-between">
        <p className="text-3xl font-medium tracking-tight">{title}</p>
        {mostPopular && ( // Conditionally render "Most popular" if true
          <div className="flex bg-white bg-opacity-10 border-white border-opacity-40 px-4 items-center rounded-full text-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
            </span>
            <p className="pl-2 opacity-75">Most popular</p>
          </div>
        )}
      </div>

      <p className="mt-16 text-5xl font-medium tracking-tight">
        {price}
        <span className="text-2xl"> SEK / month</span>
      </p>

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
