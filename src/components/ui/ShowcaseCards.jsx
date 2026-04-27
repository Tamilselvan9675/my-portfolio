import React from "react";
import { LuGithub, LuLinkedin, LuArrowRight } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import { FaSpotify } from "react-icons/fa";
import showcaseContent from "../../content/home/showcase.content";
import MagicCard from "./MagicCard";

const socialIconMap = {
  github: { Icon: LuGithub, size: 20 },
  linkedin: { Icon: LuLinkedin, size: 20 },
  twitter: { Icon: RiTwitterXLine, size: 20 },
};

function GithubCard({ content }) {
  const socialEntries = Object.entries(content.socials || {}).map(
    ([key, href]) => ({
      id: key,
      href,
      ...(socialIconMap[key] || {}),
    }),
  );

  return (
    <div className="relative z-10 h-full flex flex-col">
      <div className="px-6 md:px-7 pt-6 md:pt-7 pb-5">
        <div className="flex items-center gap-2.5 text-white">
          <LuGithub size={24} />
          <h3 className="text-[24px] md:text-[28px] leading-none italic font-['EB_Garamond',_serif]">
            {content.title}
          </h3>
        </div>

        <div className="mt-7">
          <div className="flex items-center gap-2.5">
            <p className="text-[11px] text-[#666] tracking-[0.2em] font-semibold">
              {content.label}
            </p>
            <span className="text-[#00d084] text-[10px] border border-[#00d08440] bg-[#00d08412] rounded-full px-2.5 py-1">
              {content.status}
            </span>
          </div>

          <p className="mt-3 text-white text-[18px] md:text-[22px] leading-[1.2] font-semibold tracking-[-0.01em]">
            {content.headline}
          </p>

          <p className="mt-3 text-[13px] text-[#888]">
            Repo: <span className="text-[#f87171]">{content.repoName}</span>
          </p>
        </div>
      </div>

      <div className="mt-auto px-6 md:px-7 py-4 border-t border-[#1a1a1a] flex justify-center items-center gap-6 text-[#8d8d8d]">
        {socialEntries.map(({ id, href, Icon, size }) =>
          Icon ? (
            <a key={id} href={href} className="transition-colors duration-300">
              <Icon size={size} />
            </a>
          ) : null,
        )}
      </div>
    </div>
  );
}

function VisitorsCard({ content }) {
  return (
    <div className="relative z-10 h-full flex flex-col">
      <div className="px-6 md:px-7 pt-6 md:pt-7 pb-5">
        <p className="text-[11px] text-[#5f5f63] tracking-[0.2em] font-semibold">
          {content.label}
        </p>
        <h3 className="mt-5 text-white text-[36px] md:text-[44px] leading-[0.95] font-semibold tracking-[-0.02em]">
          {content.headingLine1}
        </h3>
        <h4 className="text-[40px] md:text-[50px] leading-[0.9] italic font-['EB_Garamond',_serif] text-[#7c3aed]">
          {content.headingLine2}
        </h4>
        <p className="mt-6 text-[18px] md:text-[22px] text-[#8b8b8f]">
          {content.description}
        </p>
      </div>

      <div className="mt-auto px-6 md:px-7 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center min-w-0">
          <div className="flex -space-x-2">
            {content.visitors?.map(person => (
              <img
                key={person.id}
                src={person.image}
                alt={person.name}
                className="h-8 w-8 rounded-full border border-[#111] object-cover"
              />
            ))}
          </div>
          <span className="ml-3 text-[14px] md:text-[15px] text-[#8b8b8f] truncate">
            {content.visitorsText}
          </span>
        </div>

        <a
          href={content.ctaLink}
          className="h-10 md:h-11 px-4 md:px-5 rounded-full border border-[#f59e0b80] bg-[#0d0d0d] text-white text-[13px] md:text-[14px] font-semibold inline-flex items-center gap-2.5 shadow-[0_0_20px_rgba(245,158,11,0.28)] transition-all duration-300 shrink-0"
        >
          {content.ctaText}
          <LuArrowRight />
        </a>
      </div>
    </div>
  );
}

function MusicCard({ content }) {
  return (
    <div className="relative z-10 h-full flex flex-col">
      <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/55 to-black/90" />

      <div className="relative z-20 px-6 md:px-7 pt-6 md:pt-7 pb-5 h-full flex flex-col">
        <div className="flex items-center gap-2.5">
          <FaSpotify className="text-[#1ed760]" size={20} />
          <p className="text-white text-[22px] md:text-[24px] font-semibold">
            {content.title}
          </p>
        </div>

        <p className="mt-3 text-[15px] md:text-[17px] leading-[1.35] text-[#c4c4c7] max-w-[95%]">
          {content.description}
        </p>

        <div className="mt-auto flex justify-center pb-1">
          <div className="w-full max-w-[290px] rounded-xl overflow-hidden shadow-lg border border-white/10">
            <iframe
              title="spotify-player"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcYHCSWjSx6A?utm_source=generator&theme=0"
              width="100%"
              height="400"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CreativeCard({ card }) {
  const baseClass =
    "relative rounded-2xl border border-[#1f1f1f] overflow-hidden h-full min-h-[420px] xl:min-h-[440px]";
  const bgClassByType = {
    github:
      "bg-linear-to-t from-[#040404] to-[#090909] before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5",
    visitors:
      "bg-linear-to-t from-[#050a0a] to-[#051818] before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5",
    music:
      "bg-linear-to-t from-[#171c35] to-[#000000] before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5",
  };

  return (
    <MagicCard
      mode="gradient"
      gradientSize={220}
      gradientFrom="#9E7AFF"
      gradientTo="#FE8BBB"
      gradientColor="#1f1f1f"
      gradientOpacity={0.35}
      className={`${baseClass} ${bgClassByType[card.type] || "bg-[#060606]"}`}
    >
      {card.type === "github" && <GithubCard content={card} />}
      {card.type === "visitors" && <VisitorsCard content={card} />}
      {card.type === "music" && <MusicCard content={card} />}
    </MagicCard>
  );
}

export default function ShowcaseCards() {
  return (
    <section className="w-full bg-black px-4 md:px-6 xl:px-8 py-5 md:py-6">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-5">
        {showcaseContent.cards.map(card => (
          <CreativeCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
