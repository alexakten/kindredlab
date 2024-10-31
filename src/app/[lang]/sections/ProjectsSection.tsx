import Link from "next/link"; // Import the Link component
import { projectsData } from "../../ProjectData"; // adjust the path as necessary
import Project from "../components/Project";

export default function ProjectsSection() {
  return (
    <section className="flex h-full w-full flex-col items-start rounded-md bg-white px-4 py-28 text-center text-black backdrop-blur-sm sm:px-16">
      <p className="font-basier text-sm text-black opacity-50">OUR CASES</p>
      <h2 className="mb-12 mt-2 overflow-visible bg-gradient-to-t from-black to-black bg-clip-text text-center text-4xl font-semibold leading-[1.2] tracking-tight text-transparent sm:text-4xl">
        Recent work
      </h2>
      <div className="grid w-full max-w-8xl grid-cols-1 gap-x-4 gap-y-16  md:grid-cols-2">
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
              tagline={project.tagline}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
