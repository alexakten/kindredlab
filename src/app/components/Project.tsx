import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  client?: string;
  year?: string;
  tags?: string[]; // Update tags to be an array of strings
  thumbnail: string;
}

export default function Project({
  client,
  year,
  tags,
  thumbnail,
}: ProjectProps) {
  return (
    <div className="flex flex-col items-start text-left">
      <div className="h-full w-full rounded-3xl border border-white border-opacity-40 bg-white bg-opacity-10 p-2">
        <div className="aspect-h-9 aspect-w-16 relative w-full overflow-hidden ">
          <Image
            src={thumbnail}
            alt="Thumbnail Image"
            layout="fill"
            loading="eager"
            objectFit="cover"
            className="rounded-2xl object-top"
          />
        </div>
      </div>

      <div className="flex mt-3 w-full items-end justify-between">
        <h3 className="text-[20px] leading-[30px]">{client}</h3>
        <p className="text-sm leading-[30px]">{year}</p>
      </div>

      {/* Display tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {tags?.map((tag, index) => (
          <div
            key={index}
            className="rounded-full border border-white border-opacity-40 bg-white bg-opacity-10 px-2 py-1"
          >
            <p className="text-sm opacity-75">{tag}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
