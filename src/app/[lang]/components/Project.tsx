import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  thumbnail1: string;
  thumbnail2: string;
  thumbnail3: string;
  company: string;
  logo: string;
  topTag: string;
  tagline?: string;
  tags?: string[]; // Update tags to be an array of strings
  testimonial?: string;
  profile?: string;
  name?: string;
  role?: string;
  thumbnailLocation?: "left" | "right"; // Add the thumbnailLocation prop
}

export default function Project({
  thumbnail1,
  thumbnail2,
  thumbnail3,
  company,
  logo,
  topTag,
  tagline,
  tags,
  testimonial,
  profile,
  name,
  role,
  thumbnailLocation = "right", // Default to "right"
}: ProjectProps) {
  return (
    <div
      className={`flex w-full flex-col items-center gap-4 rounded-2xl bg-white px-4 py-4 text-left shadow-sm sm:h-[28rem] sm:flex-row ${
        thumbnailLocation === "left" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="relative h-48 w-full flex-shrink-0 gap-2 overflow-hidden rounded-xl sm:h-full sm:w-1/2">
        <Image
          className="object-cover"
          src={thumbnail1}
          alt="Thumbnail Image"
          layout="fill"
        />
      </div>
      <div className="flex h-full flex-col items-start justify-between px-6 py-4">
        <aside className="w-full">
          <aside className="flex w-full items-center justify-between">
            <div className="relative flex h-4 items-center">
              <Image
                src={logo}
                alt="Logo"
                height={1000} // Fixed height
                width={1000} // Let width adjust dynamically
                className="h-full w-auto" // Tailwind ensures height consistency and width scaling
                priority // Ensures faster loading
                quality={100} // High image quality
              />
            </div>
            <p className="rounded-full bg-neutral-100 px-2 py-1 font-basier text-xs text-neutral-900 text-opacity-50">
              {topTag}
            </p>
          </aside>
          <p className="mb-6 mt-6 text-xl font-medium tracking-tight sm:text-3xl md:mb-0">
            {tagline}
          </p>
          <div className="mb-6 mt-6 hidden flex-wrap gap-2 sm:mb-0 md:flex">
            {tags?.map((tag, index) => (
              <p
                key={index}
                className="py rounded-full border border-neutral-300 px-2 font-basier text-sm"
              >
                {tag}
              </p>
            ))}
          </div>
        </aside>
        <aside className="border-t border-neutral-200">
          <p className="mt-4 text-base italic tracking-tight">
            &quot;{testimonial}&quot;
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
              <p className="text-sm font-medium">{name}</p>
              <p className="text-sm opacity-50">{role}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
