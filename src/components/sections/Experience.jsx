import useGsapFadeIn from "../../hooks/useGsapFadeIn";


export default function Experience() {
  const ref = useGsapFadeIn();

  return (
    <section ref={ref} className="py-20 border-b">
      <h2 className="text-3xl font-bold text-center">Experience</h2>
    </section>
  );
}
