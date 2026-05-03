import React from "react";
import useGsapFadeIn from "../../hooks/useGsapFadeIn";
import {
  LuGithub,
  LuLinkedin,
  LuInstagram,
  LuSquareDashedBottomCode,
  LuDownload,
} from "react-icons/lu";

const ICONS = {
  github: LuGithub,
  linkedin: LuLinkedin,
  instagram: LuInstagram,
  peerlist: LuSquareDashedBottomCode,
};

export default function Experience({
  eyebrow,
  headingTop,
  headingHighlight,
  paragraphs = [],
  socials = [],
  cv,
  image,
}) {
  const ref = useGsapFadeIn();

  return (
    <section
      ref={ref}
      className="py-20 bg-[#0a0a0a] min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 text-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col items-start">
          {eyebrow ? (
            <p className="text-[#a1a1aa] tracking-[0.2em] text-sm mb-6 font-['Google_Sans_Code',_monospace] uppercase">
              {eyebrow}
            </p>
          ) : null}

          {headingTop ? (
            <h1 className="text-5xl lg:text-7xl mb-2 font-['EB_Garamond',_serif] font-normal">
              {headingTop}
            </h1>
          ) : null}

          {headingHighlight ? (
            <h1 className="text-5xl lg:text-7xl mb-8 font-['EB_Garamond',_serif] italic text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#a855f7] drop-shadow-[0_0_15px_rgba(6,182,212,0.4)] relative">
              {headingHighlight}
            </h1>
          ) : null}

          {Array.isArray(paragraphs) && paragraphs.length ? (
            <div className="space-y-6 text-[#a1a1aa] text-[15px] leading-[1.8] font-['Google_Sans_Code',_monospace] max-w-lg">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          ) : null}

          <div className="flex items-center gap-6 mt-10">
            <div className="flex items-center gap-4 text-[#d4d4d8]">
              {socials.map(({ key, href, icon, size }) => {
                const Icon = ICONS[icon];
                if (!Icon) return null;
                return (
                  <a
                    key={key}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    <Icon size={size ?? 22} />
                  </a>
                );
              })}
            </div>

            {cv?.label ? (
              <a
                href={cv?.href ?? "#"}
                className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg font-['Google_Sans_Code',_monospace] font-bold text-sm hover:bg-gray-200 transition-colors"
              >
                <LuDownload size={18} />
                {cv.label}
              </a>
            ) : null}
          </div>
        </div>

        <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
          <img
            src={image?.src ?? "/your-image-path.jpg"}
            alt={image?.alt ?? "Profile"}
            className="w-full h-auto object-cover rounded-2xl bg-[#111] shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}
