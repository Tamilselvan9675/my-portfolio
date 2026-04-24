"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function LoadingScreen({ progress, isComplete, onDone }) {
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);
  const progressRef = useRef(0);
  const rafRef = useRef(null);
  const exitStartedRef = useRef(false);
  const [displayProgress, setDisplayProgress] = useState(0);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const state = { value: progressRef.current };
    gsap.to(state, {
      value: progress,
      duration: 0.4,
      ease: "power2.out",
      onUpdate: () => {
        progressRef.current = state.value;
        const next = Math.floor(state.value);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => setDisplayProgress(next));
      },
    });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [progress]);

  useEffect(() => {
    if (!progressBarRef.current) return;
    gsap.to(progressBarRef.current, {
      width: `${progress}%`,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [progress]);

  useEffect(() => {
    if (!isComplete || exitStartedRef.current) return;
    exitStartedRef.current = true;

    const tl = gsap.timeline({ onComplete: onDone });
    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 0.3,
      ease: "power2.inOut",
    }).to(
      containerRef.current,
      {
        yPercent: -100,
        duration: 0.9,
        ease: "power4.inOut",
      },
      "+=0.2",
    );

    return () => {
      tl.kill();
    };
  }, [isComplete, onDone]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(255,255,255,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative flex flex-col items-center gap-10 w-full px-8 max-w-lg">
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/30 mb-3">
            Loading...
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Jeevan Rebeiro
          </h1>
        </div>

        <div className="w-full flex flex-col gap-3">
          <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              ref={progressBarRef}
              className="h-full rounded-full"
              style={{
                width: "0%",
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.9) 100%)",
                boxShadow: "0 0 12px rgba(255,255,255,0.5)",
              }}
            />
          </div>

          <div className="flex justify-between items-center">
            <span className="text-[10px] uppercase tracking-widest text-white/25">
              Initializing
            </span>
            <span className="text-sm font-semibold tabular-nums text-white/70">
              {displayProgress}%
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 text-[9px] uppercase tracking-[0.3em] text-white/15">
        Full Stack Developer
      </div>
    </div>
  );
}
