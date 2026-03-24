import { TextAnimate } from "../animations/textAnimations";
import DarkVeil from "../background/DarkVeil";

export default function WorksHero({ title, subtitleTop, subtitleBottom }) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none ">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] bg-white/5 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 text-center flex flex-col items-center justify-center">
        <h1
          className="pointer-events-none 
                     bg-gradient-to-b from-white to-gray-400/20 
                     bg-clip-text text-transparent 
                     font-black tracking-[-0.05em] leading-none 
                     text-[18vw] sm:text-[14vw] md:text-[12vw] lg:text-[16rem] px-10"
          style={{ fontFamily: "Outfit, sans-serif" }}
        >
          {title}
        </h1>

        <div className="flex flex-col items-center mt-4 gap-6">
          <TextAnimate
            as="p"
            animation="blurInUp"
            by="word"
            delay={0.3}
            className="text-gray-400 text-[10px] sm:text-xl tracking-[0.5em] uppercase font-semibold"
          >
            {subtitleTop}
          </TextAnimate>

          <TextAnimate
            as="p"
            animation="blurInUp"
            by="character"
            delay={0.5}
            className="text-gray-400 text-4xl sm:text-5xl md:text-6xl italic font-serif font-semibold"
          >
            {subtitleBottom}
          </TextAnimate>
        </div>
      </div>
    </section>
  );
}
