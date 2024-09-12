import ProjectCard from "./ProjectCard";

type ImageData = {
  type: "landscape" | "portrait";
  url: string;
};

export default function ProjectScroll() {
  const images: ImageData[] = [
    { type: "landscape", url: "/images/qura/qura-1.png" },
    { type: "portrait", url: "/images/qura/qura-2.png" },
    { type: "portrait", url: "/images/qura/qura-3.png" },
    { type: "landscape", url: "/images/airbon/airbon-1.png" },
    { type: "landscape", url: "/images/airbon/airbon-2.png" },
    { type: "landscape", url: "/images/mycomine/mycomine-1.png" },
    { type: "landscape", url: "/images/mycomine/mycomine-2.png" },
    { type: "portrait", url: "/images/payable/payable-1.png" },
    { type: "portrait", url: "/images/payable/payable-2.png" },
    { type: "landscape", url: "/images/payable/payable-3.png" },
    { type: "landscape", url: "/images/flexiwaggon/flexiwaggon-1.png" },
    { type: "landscape", url: "/images/flexiwaggon/flexiwaggon-2.png" },
    { type: "portrait", url: "/images/flexiwaggon/flexiwaggon-3.png" },
    { type: "portrait", url: "/images/flexiwaggon/flexiwaggon-4.png" },
    { type: "landscape", url: "/images/redpoint/redpoint-1.png" },
    { type: "landscape", url: "/images/redpoint/redpoint-2.png" },
    { type: "portrait", url: "/images/redpoint/redpoint-3.png" },
    { type: "portrait", url: "/images/redpoint/redpoint-4.png" },
    { type: "landscape", url: "/images/tts/tts-1.png" },
    { type: "landscape", url: "/images/tts/tts-2.png" },
    { type: "portrait", url: "/images/tts/tts-3.png" },
    { type: "portrait", url: "/images/tts/tts-4.png" },
  ];

  return (
    <div className="project-scroll-container flex w-full space-x-8 overflow-x-auto px-36">
      {images.map((image, index) => (
        <ProjectCard key={index} image={image.url} orientation={image.type} />
      ))}
    </div>
  );
}
