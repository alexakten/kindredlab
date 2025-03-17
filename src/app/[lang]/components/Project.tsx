import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  thumbnail: string;
  comingSoon?: boolean;
  link: string;
  logo: string;
  topTag?: string;
  tagline?: string;
  services?: string[];
  quote?: string;
  profile?: string;
  author?: string;
  role?: string;
  thumbnailLocation?: "left" | "right";
}

export default function Project({
  thumbnail,
  comingSoon,
  link,
  logo,
  topTag,
  tagline,
  services,
  quote,
  profile,
  author,
  role,
  thumbnailLocation = "right",
}: ProjectProps) {
  return (
    <Link
      href={comingSoon ? "#" : link}
      className={`flex w-full flex-col items-center gap-4 rounded-2xl bg-white px-4 py-4 text-left shadow-sm sm:h-[28rem] ${
        thumbnailLocation === "right" ? "sm:flex-row" : "sm:flex-row-reverse"
      } ${!comingSoon ? "cursor-pointer" : "pointer-events-none"}`}
    >
      <div className="relative h-48 w-full flex-shrink-0 gap-2 overflow-hidden rounded-xl sm:h-full sm:w-1/2">
        <Image
          className="object-cover"
          src={thumbnail}
          alt="Thumbnail Image"
          layout="fill"
        />
      </div>
      <div className="flex h-full flex-col items-start justify-between px-6 py-4">
        <aside className="w-full">
          <aside className="flex w-full items-center justify-between">
            <div className="relative flex items-center">
              <Image
                src={logo}
                alt="Logo"
                height={40}
                width={64}
                className="h-auto w-auto"
                priority
                quality={100}
              />
            </div>
            {comingSoon && (
              <p className="rounded-full bg-neutral-100 px-2 py-1 font-basier text-xs text-neutral-900 text-opacity-50">
                {topTag}
              </p>
            )}
          </aside>
          <p className="mb-6 mt-6 text-xl font-medium tracking-tight sm:text-3xl md:mb-0">
            {tagline}
          </p>
          <div className="mb-6 mt-6 hidden flex-wrap gap-2 sm:mb-0 md:flex">
            {services?.map((service, index) => (
              <p
                key={index}
                className="py rounded-full border border-neutral-200 px-2 font-basier text-sm"
              >
                {service}
              </p>
            ))}
          </div>
        </aside>
        {quote && (
          <aside className="border-t border-neutral-200">
            <p className="mt-4 text-base italic tracking-tight">
              &quot;{quote}&quot;
          </p>
          <div className="mt-4 flex gap-4">
            <div className="relative h-10 w-10 overflow-hidden rounded-md bg-neutral-200">
              <Image
                src={profile || "/path/to/default/image.jpg"}
                alt="Profile"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-medium">{author}</p>
              <p className="text-sm opacity-50">{role}</p>
            </div>
            </div>
          </aside>
        )}
      </div>
    </Link>
  );
}
