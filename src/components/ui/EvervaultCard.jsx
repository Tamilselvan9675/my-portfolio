import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";

const EvervaultCard = ({ text, className }) => {
  const mouse = useRef({ x: 0, y: 0 });
  const rafRef = useRef(0);
  const lastGenRef = useRef(0);

  const [randomString, setRandomString] = useState("");

  const rootClassName = useMemo(
    () =>
      [
        "p-0.5  bg-transparent aspect-square  flex items-center justify-center w-full h-full relative",
        className,
      ]
        .filter(Boolean)
        .join(" "),
    [className],
  );

  useEffect(() => {
    setRandomString(generateRandomString(1500));
  }, []);

  const onMouseMove = e => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.current.x = e.clientX - rect.left;
    mouse.current.y = e.clientY - rect.top;

    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        const now = performance.now();
        if (now - lastGenRef.current > 80) {
          lastGenRef.current = now;
          setRandomString(generateRandomString(1500));
        }
      });
    }
  };

  return (
    <div className={rootClassName}>
      <div
        onMouseMove={onMouseMove}
        className="group/card rounded-3xl w-full relative overflow-hidden bg-transparent flex items-center justify-center h-full"
      >
        <CardPattern mouseRef={mouse} randomString={randomString} />
        <div className="relative z-10 flex items-center justify-center">
          <div className="relative h-44 w-44  rounded-full flex items-center justify-center text-white font-bold text-4xl">
            <div className="absolute w-full h-full bg-white/[0.8] dark:bg-black/[0.8] blur-sm rounded-full" />
            <span className="dark:text-white text-black z-20">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export function CardPattern({ mouseRef, randomString }) {
  const gradientRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!gradientRef.current || !overlayRef.current) return;

    const setMask = (el, x, y) => {
      const mask = `radial-gradient(250px at ${x}px ${y}px, white, transparent)`;
      el.style.maskImage = mask;
      el.style.webkitMaskImage = mask;
    };

    const tick = () => {
      const { x, y } = mouseRef.current;
      setMask(gradientRef.current, x, y);
      setMask(overlayRef.current, x, y);
    };

    const ticker = () => tick();
    gsap.ticker.add(ticker);

    return () => {
      gsap.ticker.remove(ticker);
    };
  }, [mouseRef]);

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl  [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"></div>

      <div
        ref={gradientRef}
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-blue-700 opacity-0  group-hover/card:opacity-100 backdrop-blur-xl transition duration-500"
      />

      <div
        ref={overlayRef}
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay  group-hover/card:opacity-100"
      >
        <p className="absolute inset-x-0 text-xs h-full break-words whitespace-pre-wrap text-white font-mono font-bold transition duration-500">
          {randomString}
        </p>
      </div>
    </div>
  );
}

const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export const generateRandomString = length => {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};

export default EvervaultCard;