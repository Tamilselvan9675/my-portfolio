import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const HorizontalScrollCarousel = ({
  cards = [],
  start = "1%",
  end = "-95%",
}) => {
  const targetRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    if (!targetRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: targetRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
        onUpdate(self) {
          const s = parseFloat(start);
          const e = parseFloat(end);
          const v = gsap.utils.interpolate(s, e, self.progress);
          gsap.set(trackRef.current, { xPercent: v });
        },
      });
    }, targetRef);

    return () => ctx.revert();
  }, [start, end, cards.length]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <div ref={trackRef} className="flex gap-4">
          {cards.map(card => {
            return <Card card={card} key={card.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200">
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>

      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};
