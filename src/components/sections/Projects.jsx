import projects from "../../content/home/projects.content";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section className="py-24 bg-[#050505] min-h-screen px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Interactive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5a1f] to-[#ff2a00]">
              Project Showcase
            </span>
          </h2>

          <p className="text-[#a1a1aa] text-lg mb-2">
            Explore my{" "}
            <span className="relative inline-block">
              portfolio projects
              <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-orange-500 rounded-full transform -rotate-1"></span>
            </span>{" "}
            with interactive{" "}
            <span className="bg-[#1e3a5f] text-[#60a5fa] px-2 py-0.5 rounded">
              following pointer effects
            </span>
          </p>

          <p className="text-[#a1a1aa] text-sm mb-12">
            Hover over any card to experience the magic ✨
          </p>

          <p className="text-[#71717a] text-sm mb-6 font-['Google_Sans_Code',_monospace]">
            Showing 1-3 of 5 projects
          </p>
        </div>

        {/* Projects Showcase List (Replaced Grid with Stack for the new layout) */}
        <div className="flex flex-col gap-32 mb-16 w-full">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-3 text-sm font-['Google_Sans_Code',_monospace]">
          <button className="text-[#71717a] hover:text-white transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            Previous
          </button>
          
          <button className="w-8 h-8 flex items-center justify-center bg-[#ff5a1f] text-white rounded-md font-bold">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-[#a1a1aa] hover:bg-[#1c2128] hover:text-white rounded-md transition-colors">
            2
          </button>

          <button className="text-white hover:text-[#ff5a1f] transition-colors flex items-center gap-1 font-medium">
            Next
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>

      </div>
    </section>
  );
}