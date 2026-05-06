import React from "react";
import { FaSpotify } from "react-icons/fa";

export default function MusicMoodPanel({ content }) {
  return (
    <div className="relative z-10 h-full flex flex-col">
      <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/55 to-black/90" />

      <div className="relative z-20 px-6 md:px-7 pt-6 md:pt-7 pb-6 h-full flex flex-col">
        <div className="flex items-center gap-2.5">
          <FaSpotify className="text-[#1ed760]" size={20} />
          <p className="text-white text-[22px] md:text-[24px] font-semibold">
            Music &amp; Mood
          </p>
        </div>

        <p className="mt-2 text-[15px] md:text-[12px] leading-[1.45] text-[#c4c4c7] max-w-[95%]">
          From deep focus to feel-good vibes, I create playlists that fuel my day
          — “Working Energy“ is one of my favorites.
        </p>

        <div className="mt-4 flex justify-center pb-1">
          <div className="w-full rounded-xl overflow-hidden shadow-lg border border-white/10">
            <iframe
              title="spotify-player"
              style={{ borderRadius: "12px" }}
              src={content?.embedUrl}
              width="100%"
              height="520"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>

        <div className="mt-auto pt-6" />
      </div>
    </div>
  );
}