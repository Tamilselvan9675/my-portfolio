import { Helmet } from "react-helmet-async";
import { buildSEO } from "../utils/seo";
import projects from "../content/home/projects.content";
import ProjectCard from "../components/ui/ProjectCard";
import WorksHero from "../components/background/WorksHero";
import DotGrid from "../components/background/DotGrid";

export default function Projects() {
  const seo = buildSEO({
    title: "Projects | Tamilselvan",
    description: "Projects built using React, Tailwind, and modern tools.",
  });

  return (
    <div className="relative bg-[#000000] min-h-screen pb-20 overflow-hidden">
      {/* ✅ DOT GRID */}
      <DotGrid
        className="absolute inset-0 z-0 opacity-60 w-full h-full"
        dotSize={2}
        gap={21}
        baseColor="#666666"
        activeColor="#a855f7"
      />

      {/* ✅ CONTENT */}
      <div className="relative z-10">
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
        </Helmet>

        <WorksHero
          title="MY PROJECTS"
          subtitleTop="Building Modern Interfaces"
          subtitleBottom="with creativity & logic."
        />

        <section className="px-6 md:px-10 max-w-7xl mx-auto mt-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
