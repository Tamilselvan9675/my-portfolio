import React, { memo, useLayoutEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../../utils/utils";

gsap.registerPlugin(ScrollTrigger);

const staggerTimings = {
  text: 0.06,
  word: 0.05,
  character: 0.05,
  line: 0.06,
};

const TextAnimateBase = ({
  children,
  delay = 0,
  duration = 0.3,
  variants,
  className,
  segmentClassName,
  as: Component = "p",
  startOnView = true,
  once = false,
  by = "word",
  animation = "fadeIn",
  accessible = true,
  ...props
}) => {
  const rootRef = useRef(null);

  const text = typeof children === "string" ? children : String(children ?? "");

  const segments = useMemo(() => {
    switch (by) {
      case "word":
        return text.split(/(\s+)/);
      case "character":
        return text.split("");
      case "line":
        return text.split("\n");
      case "text":
      default:
        return [text];
    }
  }, [text, by]);

  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const container = rootRef.current;
      const items = container.querySelectorAll('[data-ta="seg"]');

      const segStagger = staggerTimings[by] ?? 0.06;

      const applyPresetFrom = el => {
        switch (animation) {
          case "blurIn":
            return { opacity: 0, filter: "blur(10px)" };
          case "blurInUp":
            return { opacity: 0, y: 60, filter: "blur(10px)" };
          case "blurInDown":
            return { opacity: 0, y: -60, filter: "blur(10px)" };
          case "slideUp":
            return { opacity: 0, y: 100 };
          case "slideDown":
            return { opacity: 0, y: -100 };
          case "slideLeft":
            return { opacity: 0, x: 60 };
          case "slideRight":
            return { opacity: 0, x: -60 };
          case "scaleUp":
            return { opacity: 0, scale: 0.5 };
          case "scaleDown":
            return { opacity: 0, scale: 1.5 };
          case "fadeIn":
          default:
            return { opacity: 0 };
        }
      };

      const applyPresetTo = () => {
        switch (animation) {
          case "blurIn":
          case "blurInUp":
          case "blurInDown":
            return { opacity: 1, y: 0, x: 0, filter: "blur(0px)" };
          case "slideUp":
          case "slideDown":
          case "slideLeft":
          case "slideRight":
            return { opacity: 1, y: 0, x: 0 };
          case "scaleUp":
          case "scaleDown":
            return { opacity: 1, scale: 1 };
          case "fadeIn":
          default:
            return { opacity: 1 };
        }
      };

      const fromVars = variants ?? applyPresetFrom();
      const toVars = variants
        ? { ...variants, opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }
        : applyPresetTo();

      gsap.set(items, fromVars);

      const tl = gsap.timeline({ paused: true });
      tl.to(items, {
        ...toVars,
        duration: Math.max(0.01, duration),
        ease: "power2.out",
        delay,
        stagger: segStagger,
        overwrite: true,
      });

      if (startOnView) {
        ScrollTrigger.create({
          trigger: container,
          start: "top 85%",
          once,
          onEnter: () => tl.play(0),
          onLeaveBack: () => {
            if (!once) tl.pause(0).progress(0);
          },
        });
      } else {
        tl.play(0);
      }

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === container) st.kill();
        });
      };
    }, rootRef);

    return () => ctx.revert();
  }, [
    animation,
    by,
    delay,
    duration,
    once,
    startOnView,
    variants,
    segments.length,
  ]);

  return (
    <Component
      ref={rootRef}
      className={cn("whitespace-pre-wrap", className)}
      aria-label={accessible ? text : undefined}
      {...props}
    >
      {accessible && <span className="sr-only">{text}</span>}
      {segments.map((segment, i) => (
        <span
          key={`${by}-${segment}-${i}`}
          data-ta="seg"
          className={cn(
            by === "line" ? "block" : "inline-block whitespace-pre",
            segmentClassName,
          )}
          aria-hidden={accessible ? true : undefined}
        >
          {segment}
        </span>
      ))}
    </Component>
  );
};

export const TextAnimate = memo(TextAnimateBase);
