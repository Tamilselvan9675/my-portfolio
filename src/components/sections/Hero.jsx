import { motion } from "framer-motion";
import Aurora from "../background/Aurora";
import LightRays from "../background/LightRays";
import { SparklesCore } from "../background/SparklesCore";
import ProfilePhoto from "../ui/ProfilePhoto";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden flex items-center border-b">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#7C3AED", "#FF7A18", "#FF7A18", "#7C3AED"]}
          amplitude={0.35}
          blend={10}
          speed={1.0}
        />
      </div>

      {/* Light Rays Layer */}
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

      {/* Grid Layer */}
      <div className="absolute inset-0 z-[5] pointer-events-none fading-grid-bg" />

      {/* Sparkles Overlay */}
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

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl font-bold text-white"
            >
              Hi, I’m Tamilselvan 👋
            </motion.h1>

            <p className="mt-4 text-white/70 text-base sm:text-lg">
              Frontend Developer • React • UI/UX
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <ProfilePhoto
              href="#"
              height={450}
              coverImage="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
              titleImage="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
              profileImage="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
              alt="Tamilselvan Profile"
            />
          </motion.div>
        </div>
      </div>

      {/* Grid CSS */}
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
