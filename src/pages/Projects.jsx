import React from "react";
import { Helmet } from "react-helmet-async";
import { buildSEO } from "../utils/seo";
import projectsData from "../content/home/projects.content";
import WorksHero from "../components/background/WorksHero";
import DotGrid from "../components/background/DotGrid";
import TimelineCard from "../components/ui/TimelineCard";

export default function Projects() {
  const seo = buildSEO({
    title: "Projects | Tamilselvan",
    description: "Projects built using React, Tailwind, and modern tools.",
  });

  return (
    <div className="relative bg-[#000000] min-h-screen font-sans">
      <DotGrid
        className="absolute inset-0 opacity-25 w-full h-full pointer-events-none"
        dotSize={3}
        gap={24}
        baseColor="#666666"
        activeColor="#a855f7"
      />

      <div className="relative z-10">
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
        </Helmet>

        <WorksHero
          title="MY WORKS"
          subtitleTop="Building Modern Interfaces"
          subtitleBottom="with creativity & logic."
        />
        <TimelineCard projects={projectsData} />
      </div>
    </div>
  );
}
