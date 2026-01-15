import { Helmet } from "react-helmet-async";
import { buildSEO } from "../utils/seo";

import Hero from "../components/sections/Hero";
import Experience from "../components/sections/Experience";
import Skill from "../components/sections/Skill";
import Projects from "../components/sections/Projects";
import ContactCTA from "../components/sections/ContactCTA";

export default function Home() {
  const seo = buildSEO({
    title: "Home | Tamilselvan",
    description: "Personal portfolio home page of Tamilselvan.",
  });
  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />

        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />
        <meta property="og:url" content={seo.url} />
      </Helmet>
      <Hero />
      <Experience />
      <Skill />
      <Projects />
      <ContactCTA />
    </>
  );
}
