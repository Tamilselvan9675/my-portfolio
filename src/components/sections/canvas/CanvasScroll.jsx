"use client";

import { useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Overlay from "./Overlay";
import LoadingScreen from "../../animations/initLoader";

const FRAME_COUNT = 120;
const SCROLL_DISTANCE = 400;
const CLOUDINARY_BASE =
  "https://res.cloudinary.com/dhaacrzw4/image/upload/q_auto,f_auto/v1777006178";

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const frameSrc = index =>
  `${CLOUDINARY_BASE}/ezgif-frame-${String(index).padStart(3, "0")}.webp`;
console.log(frameSrc(1));

export default function ScrollyCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const imagesRef = useRef([]);
  const frameRef = useRef(0);

  const [loadProgress, setLoadProgress] = useState(0);
  const [loadComplete, setLoadComplete] = useState(false);
  const [loaderDone, setLoaderDone] = useState(false);

  const handleLoaderDone = useCallback(() => setLoaderDone(true), []);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.config({ ignoreMobileResize: true });

      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const render = index => {
        const img = imagesRef.current[index];
        if (!img?.complete) return;

        const cw = canvas.width;
        const ch = canvas.height;
        const iw = img.naturalWidth || img.width;
        const ih = img.naturalHeight || img.height;
        if (!iw || !ih) return;

        const scale = Math.max(cw / iw, ch / ih);
        const w = iw * scale;
        const h = ih * scale;
        const x = (cw - w) / 2;
        const y = (ch - h) / 2;

        ctx.clearRect(0, 0, cw, ch);
        ctx.drawImage(img, x, y, w, h);
      };

      const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.visualViewport?.height ?? window.innerHeight;
        render(frameRef.current);
      };

      let loaded = 0;
      let cancelled = false;

      imagesRef.current = Array.from({ length: FRAME_COUNT }, (_, i) => {
        const img = new Image();

        const completeOne = () => {
          if (cancelled) return;
          loaded += 1;
          setLoadProgress(Math.round((loaded / FRAME_COUNT) * 100));

          if (i === 0) render(0);

          if (loaded === FRAME_COUNT) {
            setLoadComplete(true);
            ScrollTrigger.refresh();
            render(frameRef.current);
          }
        };

        img.onload = completeOne;
        img.onerror = completeOne;
        img.src = frameSrc(i);
        return img;
      });

      resize();
      window.addEventListener("resize", resize);
      window.visualViewport?.addEventListener("resize", resize);

      const trigger = ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: `+=${SCROLL_DISTANCE}%`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: self => {
          const next = Math.round(
            clamp(self.progress, 0, 1) * (FRAME_COUNT - 1),
          );
          if (next === frameRef.current) return;
          frameRef.current = next;
          requestAnimationFrame(() => render(next));
        },
      });

      return () => {
        cancelled = true;
        imagesRef.current.forEach(img => {
          img.onload = null;
          img.onerror = null;
        });
        trigger.kill();
        window.removeEventListener("resize", resize);
        window.visualViewport?.removeEventListener("resize", resize);
      };
    },
    { scope: containerRef },
  );

  return (
    <>
      {!loaderDone && (
        <LoadingScreen
          progress={loadProgress}
          isComplete={loadComplete}
          onDone={handleLoaderDone}
        />
      )}

      <div
        ref={containerRef}
        className="scrolly-container relative w-full h-[100dvh] bg-[#121212] overflow-hidden"
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <Overlay />
      </div>
    </>
  );
}
