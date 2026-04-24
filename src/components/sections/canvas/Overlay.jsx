"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const OVERLAY_CONFIG = {
  start: "top top",
  end: "+=400%",
  scrub: 1,
  indicatorEnd: "+=5%",
};

export default function Overlay() {
  const overlayRef = useRef(null);
  const text1Line1Ref = useRef(null);
  const text1Line2Ref = useRef(null);
  const text2Ref = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const trigger = overlayRef.current?.parentElement;
      if (!trigger) return;

      gsap.set(
        [text1Line1Ref.current, text1Line2Ref.current, text2Ref.current],
        {
          opacity: 0,
          y: 80,
          filter: "blur(12px)",
          scale: 0.95,
        },
      );

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger,
          start: OVERLAY_CONFIG.start,
          end: OVERLAY_CONFIG.end,
          scrub: OVERLAY_CONFIG.scrub,
        },
      });

      tl.to(
        text1Line1Ref.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          scale: 1,
          duration: 0.15,
          ease: "power3.out",
        },
        0,
      )
        .to(
          text1Line2Ref.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            duration: 0.15,
            ease: "power3.out",
          },
          0.05,
        )
        .to(
          [text1Line1Ref.current, text1Line2Ref.current],
          {
            opacity: 0,
            y: -80,
            filter: "blur(8px)",
            scale: 1.05,
            duration: 0.15,
            ease: "power3.in",
          },
          0.35,
        )
        .to(
          text2Ref.current,
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            scale: 1,
            duration: 0.2,
            ease: "power3.out",
          },
          0.3,
        )
        .to(
          text2Ref.current,
          {
            opacity: 0,
            y: -80,
            filter: "blur(8px)",
            scale: 1.05,
            duration: 0.2,
            ease: "power3.in",
          },
          0.75,
        );

      const indicatorTween = gsap.to(scrollIndicatorRef.current, {
        opacity: 0,
        y: 12,
        duration: 0.2,
        ease: "power2.in",
        scrollTrigger: {
          trigger,
          start: OVERLAY_CONFIG.start,
          end: OVERLAY_CONFIG.indicatorEnd,
          scrub: true,
        },
      });

      return () => {
        tl.kill();
        indicatorTween.kill();
      };
    },
    { scope: overlayRef },
  );

  return (
    <div ref={overlayRef} className="absolute inset-0 z-10 pointer-events-none">
      <div className="absolute top-24 left-8 md:top-32 md:left-16 lg:top-40 lg:left-24 text-left drop-shadow-2xl">
        <span
          ref={text1Line1Ref}
          className="block text-sm tracking-[0.3em] text-[#ff9159] uppercase mb-4"
        >
          Hi I'm
        </span>

        <div
          ref={text1Line2Ref}
          className="leading-[0.85] font-black text-5xl md:text-7xl lg:text-[90px] overflow-hidden"
        >
          <span className="block bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
            Tamilselvan
          </span>
        </div>
      </div>

      <div
        ref={text2Ref}
        className="absolute bottom-0 right-8 md:right-16 lg:right-2 pb-10 md:pb-16 flex flex-col items-end gap-2 text-right"
      >
        <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">
          Specializing in
        </span>
        <div className="flex items-center gap-2">
          <span className="text-white font-medium">Full Stack Developer</span>
          <span className="text-[#ff9159]">|</span>
          <span className="text-white font-medium">AI Enthusiast</span>
        </div>
      </div>

      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-5 md:bottom-8 left-20 md:left-30 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div
          style={{
            width: 24,
            height: 38,
            border: "2px solid #8a66f4",
            borderRadius: 12,
            display: "flex",
            justifyContent: "center",
            paddingTop: 6,
          }}
        >
          <div
            style={{
              width: 4,
              height: 8,
              background: "#ff9159",
              borderRadius: 2,
              animation: "scrollBounce 1.4s ease-in-out infinite",
            }}
          />
        </div>

        <span
          style={{
            fontSize: 9,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
          }}
          className="bg-gradient-to-r from-[#734de5] to-[#d1571e] bg-clip-text text-transparent"
        >
          Scroll to explore
        </span>
      </div>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(8px); opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}
