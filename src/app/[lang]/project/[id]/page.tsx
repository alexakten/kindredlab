import { notFound } from "next/navigation";
import Image from "next/image";
import { projectsData } from "@/app/ProjectData";
import Navbar from "@/app/[lang]/components/Navbar";
import CommandK from "@/app/[lang]/components/CommandK";
import { Motion } from "@/app/[lang]/components/Motion";
import { getDictionary } from "@/app/[lang]/dictionaries"; // Adjust the path to where your dictionaries are stored

type Locale = "en" | "sv"; // Define Locale types

type ProjectPageParams = {
  params: {
    lang: Locale; // Use the Locale type
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

export default async function ProjectPage({
  params,
  searchParams,
}: {
  params: ProjectPageParams["params"];
  searchParams: SearchParamProps["searchParams"];
}) {
  const bookDemo = searchParams?.BookDemo === "true";
  const { id: projectId, lang } = params; // Destructure lang and id from params

  // Get the dictionary for the current language
  const dict = await getDictionary(lang); // Fetch the dictionary using lang

  // Find the project by its ID (in this case, the slugified version of the client name)
  const project = projectsData.find(
    (project) =>
      project.client.toLowerCase().replace(/\s+/g, "-") === projectId,
  );

  if (!project) {
    return notFound();
  }

  return (
    <section className="bg-gradient-radial-to-top flex flex-col items-center justify-center overflow-x-hidden bg-black px-0 text-left tracking-tight text-zinc-100 sm:px-2">
      {bookDemo && <CommandK isVisible={bookDemo} />}

      <Motion
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0 }}
        className="flex w-full max-w-8xl flex-col items-center"
      >
        {/* Pass lang and dict as props to Navbar */}
        <Navbar lang={lang} dict={dict} />

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
