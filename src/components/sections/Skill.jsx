import skills from "../../content/home/skills.content";
import SkillCard from "../ui/SkillCard";

export default function Skill() {
  return (
    <section className="py-20 bg-[#0a0a0a] min-h-screen flex flex-col items-center justify-center px-4">
      {/* Headings */}
      <div className="text-center mb-12 flex flex-col items-center">
        <p className="text-[#a1a1aa] tracking-[0.2em] text-xs font-bold uppercase mb-4 font-['Google_Sans_Code',_monospace]">
          My Skillset
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          The Magic{" "}
          <span className="font-['EB_Garamond',_serif] font-normal italic text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#a855f7] to-[#ec4899] drop-shadow-[0_0_15px_rgba(168,85,247,0.4)] relative">
            Behind
          </span>
        </h2>

        {/* Requested description text */}
        <p className="text-[#a1a1aa] max-w-xl mx-auto text-base md:text-lg font-['Google_Sans_Code',_monospace]">
          From code to deployment, enabling digital visions to become reality.
        </p>
      </div>

      {/* Skill Badges Grid */}
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <SkillCard key={index} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
}
