import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  client?: string;
  description?: Array<{ type: "text" | "link"; content: string; url?: string }>;
  images: Array<{ type: "full" | "half"; url: string }>;
}

export default function Project({ client, description, images }: ProjectProps) {
  return (
    <div className="flex flex-col items-start text-left">
      <p className={`max-w-md text-xl font-medium tracking-tight sm:text-2xl`}>
        {client}
      </p>
      <div className="mt-2 max-w-xs text-lg font-normal tracking-tight sm:max-w-sm sm:text-xl">
        {description?.map((item, index) => {
          if (item.type === "text") {
            return <span key={index}>{item.content}</span>;
          } else if (item.type === "link" && item.url) {
            return (
              <Link key={index} href={item.url} passHref>
                <span className="cursor-pointer underline">{item.content}</span>
              </Link>
            );
          }
          return null;
        })}
      </div>

      <div className="mt-2 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        {images.map((image, index) => {
          if (image.type === "full") {
            return (
              <div
                key={index}
                className={`aspect-h-9 aspect-w-16 relative col-span-1 w-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 md:col-span-2`}
              >
                <Image
                  src={image.url}
                  alt={`Project Image ${index + 1}`}
                  layout="fill"
                  loading="eager"
                  objectFit="cover"
                  className="object-top"
                />
              </div>
            );
          } else if (image.type === "half") {
            return (
              <div
                key={index}
                className={`aspect-h-9 aspect-w-8 relative col-span-1 w-full overflow-hidden rounded-3xl border border-gray-200 bg-gray-100`}
              >
                <Image
                  src={image.url}
                  alt={`Project Image ${index + 1}`}
                  layout="fill"
                  loading="eager"
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
