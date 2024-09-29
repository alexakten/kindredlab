import { notFound } from "next/navigation";
import Image from "next/image";
import { projectsData } from "../../ProjectData"; // Adjust the path as necessary
import Navbar from "@/app/components/Navbar";
import CommandK from "@/app/components/CommandK";
import { Motion } from "@/app/components/Motion";

type ProjectPageParams = {
  params: {
    id: string;
  };
};

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

// Static generation for dynamic paths
export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.client.toLowerCase().replace(/\s+/g, "-"),
  }));
}

export default function ProjectPage({
  params,
  searchParams,
}: {
  params: ProjectPageParams["params"];
  searchParams: SearchParamProps["searchParams"];
}) {
  const bookDemo = searchParams?.BookDemo === "true";
  const projectId = params.id;

  // Find the project by its ID (in this case, the slugified version of the client name)
  const project = projectsData.find(
    (project) =>
      project.client.toLowerCase().replace(/\s+/g, "-") === projectId,
  );

  if (!project) {
    return notFound();
  }

  return (
    <section className="flex flex-col items-center justify-center overflow-x-hidden bg-black bg-gradient-radial-to-top px-0 text-left tracking-tight text-zinc-100 sm:px-2">
      {bookDemo && <CommandK isVisible={bookDemo} />}

      <Motion
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0 }}
        className="flex w-full max-w-8xl flex-col items-center"
      >
        <Navbar />
        <Motion
          initial={{ opacity: 0, y: -20, filter: "blur(1rem)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
          transition={{ ease: "easeInOut", delay: 0.2, duration: 0.5 }}
          className="flex w-full max-w-8xl flex-col items-center"
        >
          {/* Main Thumbnail */}
          <div className="mt-40">
            <Image
              src={project.thumbnail}
              alt={`${project.client} thumbnail`}
              width={1200}
              height={800}
              className="rounded-lg"
            />
          </div>
        </Motion>
        <h1 className="mt-40 text-7xl font-medium">{project.client}</h1>
        <h2 className="mb-4 text-xl">{project.year}</h2>
        <p className="mb-4">{project.description}</p>

        {/* Render the custom content */}
        <div className="mb-8">{project.content}</div>

        {/* Additional images */}
        {project.images && (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {project.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`${project.client} additional image ${index + 1}`}
                width={1200}
                height={800}
                className="rounded-lg"
              />
            ))}
          </div>
        )}
      </Motion>
    </section>
  );
}
