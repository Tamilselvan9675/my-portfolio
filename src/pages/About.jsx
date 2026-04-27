import React from "react";
import { Helmet } from "react-helmet-async";
import { buildSEO } from "../utils/seo";
import projectsData from "../content/home/projects.content";
import WorksHero from "../components/background/WorksHero";
import DotGrid from "../components/background/DotGrid";
import TimelineCard from "../components/ui/TimelineCard";
import Experience from "../components/sections/Experience";

export default function About() {
  const seo = buildSEO({
    title: "About | Tamilselvan",
    description: "Learn more about Tamilselvan and his journey as a developer.",
  });

  return (
    <div className="relative bg-[#000000] min-h-screen font-sans">
      <DotGrid
        className="absolute inset-0 opacity-25 w-full h-full pointer-events-none"
        dotSize={3}
        gap={24}
        baseColor="#666666"
        activeColor="#FF653F"
      />

      <div className="relative z-10">
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
        </Helmet>

        <WorksHero
          title="ABOUT ME"
          subtitleTop="A passionate developer crafting digital experiences"
          subtitleBottom="From code to creativity: Building the future, one line at a time"
          hueShift={230}
        />
        <Experience />
        <TimelineCard projects={projectsData} />
      </div>
    </div>
  );
}
