import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  thumbnail1: string;
  thumbnail2: string;
  thumbnail3: string;
  company: string;
  logo: string;
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
      className={`flex h-[28rem] w-full items-center gap-4 rounded-2xl bg-white px-4 py-4 text-left shadow-sm ${
        thumbnailLocation === "left" ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div className="relative h-full w-1/2 flex-shrink-0 gap-2 overflow-hidden rounded-xl">
        <Image
          className="object-cover"
          src={thumbnail1}
          alt="Thumbnail Image"
          layout="fill"
        />
      </div>
      <div className="flex h-full flex-col items-start justify-between px-6 py-4">
        <aside>
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
          <p className="mt-6 text-3xl font-medium tracking-tight">{tagline}</p>
          <div className="mt-6 flex gap-2">
            {tags?.map((tag, index) => (
              <p
                key={index}
                className="py rounded-full border border-zinc-300 px-2 font-basier text-sm"
              >
                {tag}
              </p>
            ))}
          </div>
        </aside>
        <aside className="border-t border-zinc-200">
          <p className="mt-4 text-base italic tracking-tight">
            &quot;{testimonial}&quot;
          </p>
          <div className="mt-4 flex gap-4">
            <div className="relative h-10 w-10 overflow-hidden rounded-md bg-zinc-200">
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
