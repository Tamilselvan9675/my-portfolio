import React from "react";
import projects from "../../content/home/projects.content";
import TimelineCard from "../ui/TimelineCard";

export default function Projects() {
  return (
    <section className="py-24 bg-[#050505] min-h-screen px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <header className="text-center mb-24 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Interactive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5a1f] to-[#ff2a00]">
              Project Showcase
            </span>
          </h2>

          <p className="text-[#a1a1aa] text-lg mb-4">
            Explore my{" "}
            <span className="relative inline-block">
              portfolio projects
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-orange-500 rounded-full transform -rotate-1"></span>
            </span>{" "}
            with an interactive{" "}
            <span className="bg-[#1e3a5f] text-[#60a5fa] px-2 py-0.5 rounded text-sm">
              scrolling timeline
            </span>
          </p>

          <p className="text-[#a1a1aa] text-sm">
            Scroll down to experience the magic ✨
          </p>
        </header>

        {/* Projects Timeline Showcase */}
        <main className="w-full">
          <TimelineCard projects={projects} />
        </main>

      </div>
    </section>
  );
}