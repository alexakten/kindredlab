import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  client,
  services,
  description,
  year,
  image,
}: {
  client: string;
  services: string;
  description: string;
  year: string;
  image: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="relative aspect-[16/9] w-[800px] overflow-hidden border rounded-2xl border-zinc-200 bg-zinc-100">
        <Image src={image} alt={client} layout="fill" objectFit="cover" />
      </div>
      <div className="mt-2 grid grid-cols-6 text-sm">
        <div className="col-span-2 flex flex-col">
          <p className="opacity-50">
            {/* {client} <br /> */}
            {/* <span className="opacity-45">{services}</span> */}
          </p>
        </div>
        {/* <div className="col-span-3 opacity-45">{description}</div> */}
        {/* <div className="col-span-1 flex w-full justify-end">{year}</div> */}
      </div>
    </div>
  );
}
