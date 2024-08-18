import Image from "next/image";

interface ProjectCardProps {
  images: Array<{ type: "full" | "half"; url: string }>;
}

export default function ProjectCard({ images }: ProjectCardProps) {
  return (
    <div className="flex gap-4">
      {images.map((image, index) => {
        const isFull = image.type === "full";
        return (
          <div
            key={index}
            className={`relative ${
              isFull ? "h-[450px] w-[800px]" : "h-[450px] w-[400px]"
            } flex-shrink-0 overflow-hidden rounded-3xl border border-gray-200 bg-gray-100`}
          >
            <Image
              src={image.url}
              alt={`Project Image ${index + 1}`}
              layout="fill"
              loading="eager"
              objectFit="cover"
            />
          </div>
        );
      })}
    </div>
  );
}
