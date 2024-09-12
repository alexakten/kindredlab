import Image from "next/image";

export default function ProjectCard({
  image,
  orientation = "landscape",
}: {
  image: string;
  orientation?: "landscape" | "portrait";
}) {
  // Determine width based on the orientation prop
  const width = orientation === "landscape" ? "w-[800px]" : "w-[450px]";
  const height = "h-[500px]"; // Fixed height for both orientations

  return (
    <div className="flex flex-col">
      <div
        className={`relative ${width} ${height} overflow-hidden rounded-2xl`}
      >
        <Image src={image} alt="Design" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
