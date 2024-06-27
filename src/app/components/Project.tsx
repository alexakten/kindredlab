import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  client: string;
  description: Array<{ type: "text" | "link"; content: string; url?: string }>;
  images: Array<{ type: "full" | "half"; url: string }>;
}

export default function Project({
  client,
  description,
  images,
}: ProjectProps) {
  return (
    <div className="mt-56 flex flex-col items-center text-center">
      <p className={`max-w-md text-2xl font-medium tracking-tight`}>{client}</p>
      <div className="mt-2 max-w-sm text-xl font-normal tracking-tight">
        {description.map((item, index) => {
          if (item.type === "text") {
            return <span key={index}>{item.content}</span>;
          } else if (item.type === "link" && item.url) {
            return (
              <Link key={index} href={item.url} passHref>
                <span className="underline cursor-pointer">{item.content}</span>
              </Link>
            );
          }
          return null;
        })}
      </div>

      <div className="mt-12 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {images.map((image, index) => {
          if (image.type === "full") {
            return (
              <div
                key={index}
                className={`aspect-w-16 aspect-h-9 relative col-span-1 w-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 md:col-span-2`}
              >
                <Image
                  src={image.url}
                  alt={`Project Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="object-top"
                />
              </div>
            );
            
          } else if (image.type === "half") {
            return (
              <div
                key={index}
                className={`aspect-w-8 aspect-h-9 relative col-span-1 w-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-100`}
              >
                <Image
                  src={image.url}
                  alt={`Project Image ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className="object-top"
                />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
