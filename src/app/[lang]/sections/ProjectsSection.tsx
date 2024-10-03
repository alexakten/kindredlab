import Link from "next/link"; // Import the Link component
import { projectsData } from "../../ProjectData"; // adjust the path as necessary
import Project from "../components/Project";

export default function ProjectsSection() {
  return (
    <section className="mt-16 flex h-full w-full flex-col items-center rounded-[2rem] bg-gradient-radial-to-top py-32 text-center backdrop-blur-sm">
      <h2 className="mb-16 overflow-visible bg-gradient-to-t from-zinc-300 to-white bg-clip-text text-center text-4xl font-[450] leading-[1.2] tracking-tight text-transparent sm:text-[3rem]">
        Recent work
      </h2>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-x-8 gap-y-16 px-4 md:grid-cols-2">
        {projectsData.map((project) => (
          <Link
            key={project.client}
            href={`/project/${project.client.toLowerCase().replace(/\s+/g, "-")}`}
            passHref
          >
            {" "}
            {/* Ensure the whole project is clickable */}
            <Project
              client={project.client}
              year={project.year}
              tags={project.tags}
              thumbnail={project.thumbnail}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
