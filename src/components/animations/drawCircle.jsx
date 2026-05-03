import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const DrawCircleText = ({
  beforeText = "Scale your",
  highlightText = "Marketing",
  afterText = "with Simple AI Tools",
  duration = 1.25,
}) => {
  const rootRef = useRef(null);
  const pathRef = useRef(null);

  useLayoutEffect(() => {
    if (!rootRef.current || !pathRef.current) return;

    const ctx = gsap.context(() => {
      const path = pathRef.current;
      const length = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 80%",
          once: true,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, [duration]);

  return (
    <div
      ref={rootRef}
      className="grid place-content-center bg-emerald-950 px-4 py-24 text-yellow-50"
    >
      <h1 className="max-w-2xl text-center text-5xl leading-snug">
        {beforeText}{" "}
        <span className="relative">
          {highlightText}
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -left-2 -right-2 -top-2 bottom-0 translate-y-1"
          >
            <path
              ref={pathRef}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 2.46816 50.2542 20.1721"
              stroke="#FACC15"
              strokeWidth="3"
            />
          </svg>
        </span>{" "}
        {afterText}
      </h1>
    </div>
  );
};
