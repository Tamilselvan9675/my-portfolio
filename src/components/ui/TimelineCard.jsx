import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./ProjectCard";

gsap.registerPlugin(ScrollTrigger);

export default function TimelineCard({
  projects,
  items,
  renderCard,
  getId,
  getTitle,
  getDescription,
  getFeatures,
  getTechStack,
}) {
  const containerRef = useRef(null);
  const progressFillRef = useRef(null);
  const avatarRef = useRef(null);
  const leftPanelRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const list = useMemo(() => {
    const source = Array.isArray(projects)
      ? projects
      : Array.isArray(items)
        ? items
        : [];
    return source;
  }, [projects, items]);

  const idOf = useMemo(() => getId ?? ((x, i) => x?.id ?? `${i}`), [getId]);

  const titleOf = useMemo(
    () => getTitle ?? (x => x?.title ?? x?.company ?? ""),
    [getTitle],
  );

  const descOf = useMemo(
    () => getDescription ?? (x => x?.mainDescription ?? x?.description ?? ""),
    [getDescription],
  );

  const featuresOf = useMemo(
    () => getFeatures ?? (x => (Array.isArray(x?.features) ? x.features : [])),
    [getFeatures],
  );

  const techOf = useMemo(
    () =>
      getTechStack ??
      (x => {
        const ts = x?.techStack;
        if (!Array.isArray(ts)) return [];
        if (ts.length && typeof ts[0] === "object") return ts;
        return ts.map(name => ({ name, icon: "" }));
      }),
    [getTechStack],
  );

  const CardRenderer = renderCard ?? (item => <ProjectCard project={item} />);

  useEffect(() => {
    if (!list.length) setActiveIndex(0);
    else if (activeIndex > list.length - 1) setActiveIndex(list.length - 1);
  }, [list.length]);

  useLayoutEffect(() => {
    if (!containerRef.current) return;
    if (!list.length) return;

    const ctx = gsap.context(() => {
      const container = containerRef.current;
      const fillEl = progressFillRef.current;
      const avatarEl = avatarRef.current;

      if (fillEl)
        gsap.set(fillEl, { transformOrigin: "top center", scaleY: 0 });
      if (avatarEl) gsap.set(avatarEl, { top: "0%" });

      let lastIndex = -1;

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate(self) {
          const p = self.progress;

          if (fillEl) gsap.set(fillEl, { scaleY: p });
          if (avatarEl) gsap.set(avatarEl, { top: `${p * 100}%` });

          const total = list.length;
          let next = Math.floor(p * total);
          if (next >= total) next = total - 1;
          if (next < 0) next = 0;

          if (next !== lastIndex) {
            lastIndex = next;
            setActiveIndex(next);
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [list]);

  const activeItem = list[activeIndex] ?? list[0];

  useLayoutEffect(() => {
    if (!leftPanelRef.current) return;
    if (!activeItem) return;

    const root = leftPanelRef.current;
    const titleRow = root.querySelector('[data-tl="title-row"]');
    const desc = root.querySelector('[data-tl="desc"]');
    const features = root.querySelectorAll('[data-tl="feature"]');
    const tech = root.querySelectorAll('[data-tl="tech"]');

    gsap.killTweensOf([titleRow, desc, features, tech]);

    gsap.set([titleRow, desc, ...features], { opacity: 0, y: 15 });
    gsap.set(tech, { opacity: 0, scale: 0.7 });

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    if (titleRow) tl.to(titleRow, { opacity: 1, y: 0, duration: 0.35 }, 0);
    if (desc) tl.to(desc, { opacity: 1, y: 0, duration: 0.35 }, 0.06);

    if (features?.length) {
      tl.to(
        features,
        { opacity: 1, y: 0, duration: 0.35, stagger: 0.06 },
        0.12,
      );
    }

    if (tech?.length) {
      tl.to(
        tech,
        {
          opacity: 1,
          scale: 1,
          duration: 0.35,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        0.18,
      );
    }

    return () => tl.kill();
  }, [activeIndex, activeItem]);

  if (!list.length) return null;

  return (
    <section
      ref={containerRef}
      className="relative w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-start gap-8 lg:gap-12"
    >
      <div className="hidden lg:flex sticky top-0 h-screen flex-1 max-w-[400px] flex-col justify-center z-20">
        <div ref={leftPanelRef} className="text-white space-y-6">
          <div data-tl="title-row" className="flex items-center gap-4">
            <div className="h-[2px] w-6 bg-red-500"></div>
            <h2 className="text-3xl font-bold tracking-wide">
              {titleOf(activeItem)}
            </h2>
          </div>

          <p data-tl="desc" className="text-gray-300 text-sm leading-relaxed">
            {descOf(activeItem)}
          </p>

          <ul className="space-y-4">
            {featuresOf(activeItem)?.map((feature, idx) => (
              <li
                key={idx}
                data-tl="feature"
                className="flex items-start gap-3 text-sm text-gray-300"
              >
                <span className="text-red-500 mt-0.5">✦</span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3 pt-4">
            {techOf(activeItem)?.map((tech, idx) => (
              <div
                key={`${tech?.name ?? idx}-${idx}`}
                data-tl="tech"
                className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-700 bg-black/50 text-xs font-medium text-gray-300 shadow-sm"
              >
                <span>{tech?.icon}</span>
                {tech?.name ?? tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden lg:flex sticky top-0 h-screen w-12 flex-col items-center justify-center py-32 z-10">
        <div className="relative w-2 h-full bg-[#111] rounded-full border border-gray-800">
          <div
            ref={progressFillRef}
            className="absolute top-0 w-full bg-gradient-to-b from-[#111] via-yellow-700 to-yellow-600 rounded-full origin-top"
            style={{ height: "100%", transform: "scaleY(0)" }}
          />
          <div
            ref={avatarRef}
            className="absolute -left-[14px] w-8 h-8 rounded-full border-[3px] border-[#111] bg-black overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.8)] z-10"
            style={{ top: "0%", transform: "translateY(-50%)" }}
          >
            <img
              src="/avatar-placeholder.png"
              alt="Progress Avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex-[2] flex flex-col pt-32 pb-32 gap-16">
        {list.map((item, idx) => (
          <div
            key={idOf(item, idx)}
            className="w-full flex items-center justify-center min-h-[60vh]"
          >
            {CardRenderer(item, idx)}
          </div>
        ))}
      </div>
    </section>
  );
}
