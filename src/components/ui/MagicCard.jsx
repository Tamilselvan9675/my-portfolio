import React, { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function isOrbMode(props) {
  return props.mode === "orb";
}

export default function MagicCard(props) {
  const {
    children,
    className,
    gradientSize = 200,
    gradientColor = "#262626",
    gradientOpacity = 0.8,
    gradientFrom = "#9E7AFF",
    gradientTo = "#FE8BBB",
    mode = "gradient",
  } = props;

  const glowFrom = isOrbMode(props) ? (props.glowFrom ?? "#ee4f27") : "#ee4f27";
  const glowTo = isOrbMode(props) ? (props.glowTo ?? "#6b21ef") : "#6b21ef";
  const glowAngle = isOrbMode(props) ? (props.glowAngle ?? 90) : 90;
  const glowSize = isOrbMode(props) ? (props.glowSize ?? 420) : 420;
  const glowBlur = isOrbMode(props) ? (props.glowBlur ?? 60) : 60;
  const glowOpacity = isOrbMode(props) ? (props.glowOpacity ?? 0.9) : 0.9;

  const rootRef = useRef(null);
  const overlayRef = useRef(null);
  const orbRef = useRef(null);

  const modeRef = useRef(mode);
  const gradientSizeRef = useRef(gradientSize);
  const glowOpacityRef = useRef(glowOpacity);

  const orbTweenRef = useRef(null);
  const orbOpacityTweenRef = useRef(null);

  useEffect(() => {
    modeRef.current = mode;
  }, [mode]);

  useEffect(() => {
    gradientSizeRef.current = gradientSize;
  }, [gradientSize]);

  useEffect(() => {
    glowOpacityRef.current = glowOpacity;
  }, [glowOpacity]);

  // Set initial CSS vars + background once (and when colors/sizes change)
  useLayoutEffect(() => {
    if (!rootRef.current) return;

    const el = rootRef.current;
    const off = -gradientSize;

    el.style.setProperty("--mc-x", `${off}px`);
    el.style.setProperty("--mc-y", `${off}px`);
    el.style.setProperty("--mc-size", `${gradientSize}px`);
    el.style.setProperty("--mc-from", gradientFrom);
    el.style.setProperty("--mc-to", gradientTo);
    el.style.setProperty("--mc-color", gradientColor);
    el.style.setProperty("--mc-opacity", `${gradientOpacity}`);

    // Border gradient background (same as motion template)
    el.style.background = `
      linear-gradient(#0b0b0b 0 0) padding-box,
      radial-gradient(var(--mc-size) circle at var(--mc-x) var(--mc-y),
        var(--mc-from),
        var(--mc-to),
        #2a2a2a 100%
      ) border-box
    `;
  }, [gradientSize, gradientFrom, gradientTo, gradientColor, gradientOpacity]);

  const setPointerVars = useCallback((x, y) => {
    const el = rootRef.current;
    if (!el) return;
    el.style.setProperty("--mc-x", `${x}px`);
    el.style.setProperty("--mc-y", `${y}px`);
  }, []);

  const reset = useCallback(
    (reason = "leave") => {
      const currentMode = modeRef.current;

      if (currentMode === "orb") {
        if (!orbRef.current) return;

        if (orbOpacityTweenRef.current) orbOpacityTweenRef.current.kill();

        orbOpacityTweenRef.current = gsap.to(orbRef.current, {
          opacity: reason === "enter" ? glowOpacityRef.current : 0,
          duration: 0.25,
          ease: "power2.out",
          overwrite: true,
        });

        return;
      }

      const off = -gradientSizeRef.current;
      setPointerVars(off, off);
    },
    [setPointerVars],
  );

  const handlePointerMove = useCallback(
    e => {
      const el = rootRef.current;
      if (!el) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const currentMode = modeRef.current;

      if (currentMode === "orb") {
        if (!orbRef.current) return;

        if (orbTweenRef.current) orbTweenRef.current.kill();

        // Smooth orb follow (replaces springs)
        orbTweenRef.current = gsap.to(orbRef.current, {
          x,
          y,
          duration: 0.25,
          ease: "power3.out",
          overwrite: true,
        });

        return;
      }

      setPointerVars(x, y);
    },
    [setPointerVars],
  );

  useEffect(() => {
    reset("init");
  }, [reset]);

  useEffect(() => {
    const handleGlobalPointerOut = e => {
      if (!e.relatedTarget) reset("global");
    };
    const handleBlur = () => reset("global");
    const handleVisibility = () => {
      if (document.visibilityState !== "visible") reset("global");
    };

    window.addEventListener("pointerout", handleGlobalPointerOut);
    window.addEventListener("blur", handleBlur);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.removeEventListener("pointerout", handleGlobalPointerOut);
      window.removeEventListener("blur", handleBlur);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [reset]);

  return (
    <div
      ref={rootRef}
      className={cn(
        "group relative isolate overflow-hidden rounded-3xl border border-transparent",
        className,
      )}
      onPointerMove={handlePointerMove}
      onPointerLeave={() => reset("leave")}
      onPointerEnter={() => reset("enter")}
    >
      <div className="absolute inset-px z-20 rounded-[inherit] bg-[#0b0b0b]" />

      {mode === "gradient" && (
        <div
          ref={overlayRef}
          className="pointer-events-none absolute inset-px z-30 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `
              radial-gradient(var(--mc-size) circle at var(--mc-x) var(--mc-y),
                var(--mc-color),
                transparent 100%
              )
            `,
            opacity: gradientOpacity,
          }}
        />
      )}

      {mode === "orb" && (
        <div
          ref={orbRef}
          aria-hidden="true"
          className="pointer-events-none absolute z-30"
          style={{
            width: glowSize,
            height: glowSize,
            transform: "translate(-50%, -50%)",
            borderRadius: 9999,
            filter: `blur(${glowBlur}px)`,
            opacity: 0,
            background: `linear-gradient(${glowAngle}deg, ${glowFrom}, ${glowTo})`,
            mixBlendMode: "screen",
            willChange: "transform, opacity",
            left: 0,
            top: 0,
          }}
        />
      )}

      <div className="relative z-40">{children}</div>
    </div>
  );
}
