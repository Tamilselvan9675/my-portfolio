import skills from "../../data/skills";
import SkillCard from "../ui/SkillCard";


export default function Skill() {
  return (
    <section className="p-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            category={skill.category}
            items={skill.items}
          />
        ))}
      </div>
    </section>
  );
}
