export default function BlogCard({ title, excerpt, date }) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-md transition">
      <p className="text-sm text-gray-500">{date}</p>
      <h3 className="text-xl font-semibold mt-2">{title}</h3>
      <p className="mt-3 text-sm">{excerpt}</p>

      <button className="mt-4 text-primary text-sm font-medium">
        Read more →
      </button>
    </div>
  );
}
