import useInViewAnim from "../hooks/useInViewAnim";


export default function Skills() {
  const { ref, inView } = useInViewAnim();

  return (
    <section
      ref={ref}
      className={`py-20 border-b transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <h2 className="text-3xl font-bold text-center">Skills</h2>
    </section>
  );
}
