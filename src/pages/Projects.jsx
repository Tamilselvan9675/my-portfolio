import { Helmet } from "react-helmet-async";
import { buildSEO } from "../utils/seo";
import projects from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";

export default function Projects() {
  const seo = buildSEO({
    title: "Projects | Tamilselvan",
    description: "Projects built using React, Tailwind, and modern tools.",
  });

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>

      <section className="p-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}
