import { Helmet } from "react-helmet-async";
import { buildSEO } from "../utils/seo";
import projectsData from "../content/home/projects.content";
import ProjectCard from "../components/ui/ProjectCard";
import WorksHero from "../components/background/WorksHero";
import DotGrid from "../components/background/DotGrid";
import DarkVeil from "../components/background/DarkVeil";

export default function Projects() {
  const seo = buildSEO({
    title: "Projects | Tamilselvan",
    description: "Projects built using React, Tailwind, and modern tools.",
  });

  return (
    <div className="relative bg-[#000000] min-h-screen pb-32 overflow-hidden font-sans">
      {/* ✅ DARK VEIL (BASE LAYER) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      {/* ✅ DOT GRID (ABOVE DARKVEIL) */}
      <DotGrid
        className="absolute inset-0 opacity-25 w-full h-full"
        dotSize={3}
        gap={24}
        baseColor="#666666"
        activeColor="#a855f7"
      />

      {/* ✅ CONTENT */}
      <div className="relative z-10">
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
        </Helmet>

        {/* Hero Section */}
        <WorksHero
          title="MY PROJECTS"
          subtitleTop="Building Modern Interfaces"
          subtitleBottom="with creativity & logic."
        />

        {/* Project List Layout matching the image */}
        <section className="px-6 md:px-10 w-full flex flex-col gap-32 mt-10">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </section>
      </div>
    </div>
  );
}