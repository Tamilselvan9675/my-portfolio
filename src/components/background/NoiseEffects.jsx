"use client";
import React, { useState, useCallback } from "react";

export default function SectionNoise({
  children,
  defaultOpacity = 0.05,
  showControl = true,
  noiseSrc = "/noise.gif",
  className = "",
}) {
  const [opacity, setOpacity] = useState(defaultOpacity);

  const handleOpacityChange = useCallback(event => {
    setOpacity(parseFloat(event.target.value));
  }, []);

  return (
    <section className={`relative border rounded-lg w-full ${className}`}>
      {/* ✅ Control (optional) */}
      {showControl && (
        <div className="absolute top-4 right-4 z-10 flex justify-end pb-2">
          <label htmlFor="opacity-slider" className="mr-2 inline-block">
            Noise Opacity:
          </label>
          <input
            id="opacity-slider"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={opacity}
            onChange={handleOpacityChange}
          />
          <span className="ml-2">{opacity.toFixed(2)}</span>
        </div>
      )}

      {/* ✅ Noise Layer */}
      <div
        className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"
        style={{
          backgroundImage: `url(${noiseSrc})`,
          opacity,
        }}
      />

      {/* ✅ Content (same design wrapper) */}
      <section className="font-semibold 2xl:h-[450px] sm:h-[450px] h-[400px] bg-linear-to-t dark:to-neutral-950 dark:from-neutral-950 to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center dark:text-white text-black">
        {/* Grid overlay (unchanged) */}
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-size-[35px_34px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

        {/* Dynamic content */}
        {children}
      </section>
    </section>
  );
}
