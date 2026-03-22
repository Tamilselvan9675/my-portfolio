import { useState } from "react";
import { cn } from "../../utils/utils";

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      {...props}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      className={cn(
        "flex gap-[var(--gap)] overflow-hidden p-2 [--duration:40s] [--gap:1rem]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {/* Keyframes */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-100% - var(--gap))); }
          }

          @keyframes marquee-vertical {
            from { transform: translateY(0); }
            to { transform: translateY(calc(-100% - var(--gap))); }
          }
        `}
      </style>

      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            style={{
              animationPlayState: isPaused ? "paused" : "running", // ✅ CORE FIX
              animationDirection: reverse ? "reverse" : "normal",
              animation: vertical
                ? "marquee-vertical var(--duration) linear infinite"
                : "marquee var(--duration) linear infinite",
            }}
            className={cn(
              "flex shrink-0 justify-around gap-[var(--gap)]",
              vertical ? "flex-col" : "flex-row",
            )}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
