import React, { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { buildSEO } from "../utils/seo";
import { toTechPills } from "../components/ui/tectIcons";
import aboutContent from "../content/home/about.content";

import WorksHero from "../components/background/WorksHero";
import DotGrid from "../components/background/DotGrid";
import Experience from "../components/sections/Experience";
import TimelineCard from "../components/ui/TimelineCard";

export default function About() {
const { seo, hero, experienceTimeline, aboutSection } = aboutContent;

  const seoData = buildSEO({
    title: seo.title,
    description: seo.description,
  });

  const timelineProjects = useMemo(() => {
    if (!Array.isArray(experienceTimeline)) return [];
    return experienceTimeline.map(item => ({
      id: item.id,
      title: item.company,
      mainDescription: item.description,
      features: [
        item.role ? `Role: ${item.role}` : null,
        item.duration ? `Duration: ${item.duration}` : null,
      ].filter(Boolean),
      techStack: toTechPills(item.techStack),
    }));
  }, [experienceTimeline]);

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
          <title>{seoData.title}</title>
          <meta name="description" content={seoData.description} />
        </Helmet>

        <WorksHero
          title={hero.title}
          subtitleTop={hero.subtitleTop}
          subtitleBottom={hero.subtitleBottom}
          hueShift={hero.hueShift}
        />

        <Experience {...aboutSection} />

        <TimelineCard projects={timelineProjects} />
      </div>
    </div>
  );
}
