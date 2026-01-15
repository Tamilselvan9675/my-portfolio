export default function SkillCard({ category, items }) {
  return (
    <div className="border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">{category}</h3>

      <ul className="flex flex-wrap gap-2">
        {items.map((skill, index) => (
          <li
            key={index}
            className="text-sm px-3 py-1 border rounded"
          >
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
