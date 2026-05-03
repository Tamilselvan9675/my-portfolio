import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const VelocityText = ({
  text,
  height = "1000vh",
  scrollDistance = -4000,
}) => {
  const targetRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    if (!targetRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      const el = textRef.current;

      gsap.set(el, { x: 0, skewX: 0, transformOrigin: "bottom left" });

      let prev = 0;

      ScrollTrigger.create({
        trigger: targetRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate(self) {
          const p = self.progress;
          const x = p * scrollDistance;

          const v = p - prev;
          prev = p;

          const skew = gsap.utils.clamp(-45, 45, -v * 900);

          gsap.to(el, {
            x,
            skewX: skew,
            duration: 0.15,
            ease: "power3.out",
            overwrite: true,
          });
        },
      });
    }, targetRef);

    return () => ctx.revert();
  }, [scrollDistance]);

  return (
    <section
      ref={targetRef}
      className="bg-neutral-50 text-neutral-950"
      style={{ height }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <p
          ref={textRef}
          className="origin-bottom-left whitespace-nowrap text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
        >
          {text}
        </p>
      </div>
    </section>
  );
};
