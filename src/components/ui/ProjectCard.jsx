export default function ProjectCard({ title, description, tech }) {
  return (
    <div className="border rounded-lg p-6">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 border rounded"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
