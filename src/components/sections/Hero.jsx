import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Aurora from "../background/Aurora";
import LightRays from "../background/LightRays";
import { SparklesCore } from "../background/SparklesCore";
import ProfilePhoto from "../ui/ProfilePhoto";
import { FlipWords } from "../animations/flipwords";
import ShinyText from "../animations/shinyText";
import CopyEmail from "../animations/copyEmail";

export default function Hero() {
  const roles = ["Web Developer", "React JS Developer", "Full Stack Developer"];
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const badge = gsap.utils.toArray('[data-hero="badge"]');
      const h1 = gsap.utils.toArray('[data-hero="h1"]');
      const h2 = gsap.utils.toArray('[data-hero="h2"]');
      const profileLine = gsap.utils.toArray('[data-hero="profile"]');
      const ctas = gsap.utils.toArray('[data-hero="cta"]');
      const photo = gsap.utils.toArray('[data-hero="photo"]');

      gsap.set([...badge, ...h1, ...h2, ...profileLine, ...ctas], { opacity: 0, y: 40 });
      gsap.set(badge, { y: -20 });
      gsap.set(photo, { opacity: 0, scale: 0.9, x: 30 });

      gsap
        .timeline({ defaults: { ease: "power2.out" } })
        .to(badge, { opacity: 1, y: 0, duration: 0.6 }, 0)
        .to(h1, { opacity: 1, y: 0, duration: 0.7 }, 0.05)
        .to(h2, { opacity: 1, y: 0, duration: 0.7 }, 0.15)
        .to(profileLine, { opacity: 1, y: 0, duration: 0.7 }, 0.25)
        .to(ctas, { opacity: 1, y: 0, duration: 0.7 }, 0.35)
        .to(photo, { opacity: 1, scale: 1, x: 0, duration: 0.7 }, 0.1);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative h-screen overflow-hidden flex items-center border-b"
    >
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#7C3AED", "#FF7A18", "#FF7A18", "#7C3AED"]}
          amplitude={0.35}
          blend={10}
          speed={1.0}
        />
      </div>

      <div className="absolute inset-0 z-[2] pointer-events-none">
        <LightRays
          raysOrigin="top-left"
          raysColor="#ffffff"
          raysSpeed={0.1}
          lightSpread={0.2}
          rayLength={1.3}
          followMouse={true}
          mouseInfluence={0.5}
          noiseAmount={0.5}
          distortion={0}
          className="w-full h-full"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <div className="absolute inset-0 z-[5] pointer-events-none fading-grid-bg" />

      <div className="absolute inset-0 z-10 pointer-events-none">
        <SparklesCore
          background="transparent"
          particleColor="#ffffff"
          particleDensity={10}
          minSize={0.1}
          maxSize={1}
          speed={3}
          className="w-full h-full"
        />
      </div>

      <div className="relative z-20 w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div data-hero="badge" className="mb-8 inline-flex items-center gap-3">
              <div className="inline-flex items-center  gap-2 px-2 py-[2px] rounded-full bg-blue-500/20 border border-blue-500/40 backdrop-blur-sm transition-all duration-300 hover:bg-transparent group">
                <span className="text-sm font-medium animate-pulse text-blue-400 hover:animate-none group-hover:text-blue-500 transition-colors duration-300">
                  Upcoming
                </span>
              </div>

              <div className="text-sm font-medium">
                <ShinyText
                  text="Expense Karo is launching soon!"
                  speed={2.1}
                  delay={0}
                  color="#ffffff"
                  shineColor="#666666"
                  spread={300}
                  direction="left"
                  yoyo={false}
                  pauseOnHover={false}
                  disabled={false}
                />
              </div>
            </div>

            <h1
              data-hero="h1"
              className="text-5xl sm:text-6xl lg:text-6xl font-normal text-white leading-tight mb-4"
              style={{ fontFamily: "'Instrument Serif', 'Garamond', serif" }}
            >
              <ShinyText
                text="Code that feels designed."
                speed={2.1}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={300}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </h1>

            <h2
              data-hero="h2"
              className="text-4xl sm:text-5xl italic font-light text-white/90 leading-tight mb-8"
              style={{ fontFamily: "'Instrument Serif', 'Garamond', serif" }}
            >
              <ShinyText
                text="Engineering that actually ships."
                speed={2.1}
                delay={0}
                color="#b5b5b5"
                shineColor="#ffffff"
                spread={300}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
              />
            </h2>

            <div data-hero="profile" className="flex items-center gap-4 mb-10">
              <span className="text-xl bg-gradient-to-t from-white via-white/80 to-white/30 bg-clip-text text-transparent">
                Hey World, I'm Tamilselvan a
                <FlipWords
                  words={roles}
                  className="text-indigo-400 font-medium inline-block"
                />
              </span>
            </div>

            <div
              data-hero="cta"
              className="flex flex-col sm:flex-row items-center gap-6"
            >
              <button className="relative group flex items-center gap-3 pl-7 pr-2 py-2 rounded-full bg-white/10 border border-white/15 text-white font-medium overflow-hidden transition-colors duration-300 hover:bg-white/15">
                <span className="absolute right-[18px] top-1/2 translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white scale-0 group-hover:scale-[12] transition-transform duration-450 ease-out" />
                <span className="relative z-10">Let's Connect</span>
                <span className="relative z-10 w-9 h-9 rounded-full bg-white flex items-center justify-center flex-shrink-0 transition-colors duration-400 group-hover:bg-[#1e2235]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-black group-hover:text-white transition-colors duration-400"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </button>
              <CopyEmail />
            </div>
          </div>

          <div data-hero="photo" className="flex justify-center lg:justify-end">
            <ProfilePhoto
              href="#"
              height={450}
              coverImage="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
              titleImage="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
              profileImage="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
              alt="Tamilselvan Profile"
            />
          </div>
        </div>
      </div>

      <style>{`
        .fading-grid-bg::before {
          --size: 60px;
          --line: rgba(255, 255, 255, 0.12);
          content: "";
          height: 100%;
          width: 100%;
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, var(--line) 1px, transparent 1px var(--size)) 50% 50% / var(--size) var(--size),
            linear-gradient(var(--line) 1px, transparent 1px var(--size)) 50% 50% / var(--size) var(--size);
          mask: radial-gradient(113% 91% at 45% -3%, #fff 5%, transparent 100%);
          opacity: 0.25;
        }
      `}</style>
    </section>
  );
}