import React from "react";
import { Helmet } from "react-helmet-async";
import { buildSEO } from "../utils/seo";
import WorksHero from "../components/background/WorksHero";
import DotGrid from "../components/background/DotGrid";
import TimelineCard from "../components/ui/TimelineCard";
import BlogCard from "../components/ui/BlogCard";
import blogs from "../content/home/blogs.content";

export default function Blogs() {
  const seo = buildSEO({
    title: "Blogs | Tamilselvan",
    description: "Read the latest blogs and articles from Tamilselvan.",
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
          title="BLOGS"
          subtitleTop="Sharing knowledge, sparking conversations: My blog posts"
          subtitleBottom="From insights to inspiration: My thoughts, your takeaways on the future"
          hueShift={250}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map(blog => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              excerpt={blog.excerpt}
              date={blog.date}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
