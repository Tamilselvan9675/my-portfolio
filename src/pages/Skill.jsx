import React from "react";
import { Helmet } from "react-helmet-async";
import { buildSEO } from "../utils/seo";
import WorksHero from "../components/background/WorksHero";
import DotGrid from "../components/background/DotGrid";
import TimelineCard from "../components/ui/TimelineCard";

export default function Skill() {
  const seo = buildSEO({
    title: "Skills | Tamilselvan",
    description: "Explore Tamilselvan's technical skills and expertise.",
  });

  return (
    <div className="relative bg-[#000000] min-h-screen font-sans">
      <DotGrid
        className="absolute inset-0 opacity-25 w-full h-full pointer-events-none"
        dotSize={3}
        gap={24}
        baseColor="#666666"
        activeColor="#FF6565"
      />

      <div className="relative z-10">
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
        </Helmet>

        <WorksHero
          title="SKILLS"
          subtitleTop="Crafting code, shaping dreams: My skillset in action"
          subtitleBottom="From code to creation: My skills, your vision, our future"
          hueShift={450}
        />
      </div>
    </div>
  );
}
