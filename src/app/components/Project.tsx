import Image from "next/image";
import Link from "next/link";

export default function Pricing({
  client,
  description,
  imageUrl,
  websiteUrl,
  bgColor,
  borderColor,
  textColor,
}: {
  client: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}) {
  return (
    <Link
      href={websiteUrl}
      className={`flex w-full h-full flex-col rounded-lg  border p-6 shadow-sm ${bgColor} ${borderColor} tracking-tight ${textColor}`}
    >
      <div className="relative w-full aspect-video overflow-hidden rounded-md bg-gray-100">
        <Image
          src={imageUrl}
          alt="Project Image"
          layout="fill"
          objectFit="cover"
          className="object-top"
        />
      </div>
      <div className="h-auto flex flex-col flex-grow justify-between">
        <div>
          <p className="mt-6 text-2xl font-medium tracking-tight">{client}</p>

          <p className="text-sm mt-2 tracking-normal opacity-75">{description}</p>
        </div>


        <div className="mt-8 flex justify-end">
          {/* <Link
            href={websiteUrl}
            className="group flex items-center gap-1 rounded-full border border-gray-50 bg-gray-50 px-5 py-2.5 text-sm font-medium hover:border-gray-200  hover:bg-gray-100"
          >
            Website{" "}
            <span className="inline-block translate-x-[1px] tracking-normal transition-transform duration-200 group-hover:translate-x-1">
              -&gt;
            </span>
          </Link> */}
        </div>
      </div>
    </Link>
  );
}
