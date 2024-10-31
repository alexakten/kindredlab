import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  client?: string;
  tagline?: string;
  year?: string;
  tags?: string[]; // Update tags to be an array of strings
  thumbnail: string;
}

export default function Project({
  client,
  tagline,
  year,
  tags,
  thumbnail,
}: ProjectProps) {
  return (
    <div className="flex flex-col items-start text-left">
      <div className="aspect-h-9 border border-black border-opacity-10 rounded-2xl aspect-w-16 relative w-full overflow-hidden ">
        <Image
          src={thumbnail}
          alt="Thumbnail Image"
          layout="fill"
          loading="eager"
          objectFit="cover"
          className="rounded-2xl object-top"
        />
      </div>

      <div className="mt-3 grid w-full grid-cols-5 items-baseline">
        <h3 className="col-span-1 text-sm">{client}</h3>
        <p className="col-span-3 text-sm opacity-50">{tagline}</p>
        <p className="col-span-1 flex w-full justify-end text-sm">{year}</p>
      </div>
    </div>
  );
}
