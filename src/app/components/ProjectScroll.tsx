import ProjectCard from "./ProjectCard";

export default function ProjectScroll() {
  return (
    <div className="project-scroll-container relative flex w-full gap-4 overflow-x-auto px-16">
      <ProjectCard
        images={[
          { type: "full", url: "/images/qura/qura-1.png" },
          { type: "half", url: "/images/qura/qura-2.png" },
          { type: "half", url: "/images/qura/qura-3.png" },
          { type: "full", url: "/images/airbon/airbon-1.png" },
          { type: "full", url: "/images/airbon/airbon-2.png" },
          { type: "full", url: "/images/mycomine/mycomine-1.png" },
          { type: "full", url: "/images/mycomine/mycomine-2.png" },
          { type: "half", url: "/images/payable/payable-1.png" },
          { type: "half", url: "/images/payable/payable-2.png" },
          { type: "full", url: "/images/payable/payable-3.png" },
          { type: "full", url: "/images/flexiwaggon/flexiwaggon-1.png" },
          { type: "full", url: "/images/flexiwaggon/flexiwaggon-2.png" },
          { type: "half", url: "/images/flexiwaggon/flexiwaggon-3.png" },
          { type: "half", url: "/images/flexiwaggon/flexiwaggon-4.png" },
          { type: "full", url: "/images/redpoint/redpoint-1.png" },
          { type: "full", url: "/images/redpoint/redpoint-2.png" },
          { type: "half", url: "/images/redpoint/redpoint-3.png" },
          { type: "half", url: "/images/redpoint/redpoint-4.png" },
          { type: "full", url: "/images/tts/tts-1.png" },
          { type: "full", url: "/images/tts/tts-2.png" },
          { type: "half", url: "/images/tts/tts-3.png" },
          { type: "half", url: "/images/tts/tts-4.png" },
        ]}
      />
    </div>
  );
}
