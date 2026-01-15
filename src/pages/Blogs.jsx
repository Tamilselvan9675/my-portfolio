import BlogCard from "../components/ui/BlogCard";
import blogs from "../data/blogs";

export default function Blogs() {
  return (
    <section className="p-10 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Blogs</h2>

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
    </section>
  );
}
