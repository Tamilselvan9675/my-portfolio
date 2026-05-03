import React from "react";
import { LuGithub, LuLinkedin, LuArrowRight } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import showcaseContent from "../../content/home/showcase.content";
import MagicCard from "../ui/MagicCard";
import EvervaultCard from "../ui/EvervaultCard";
import FavoriteToolsPanel from "./FavoriteToolsPanel";
import MusicMoodPanel from "./MusicMoodPanel";

/* ─── Font injection (add to global CSS if preferred) ─── */
const fontLink = (
  <style>{`@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=Syne:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');`}</style>
);

/* ─── Social icon map ─────────────────────────────────────────────── */
const socialIconMap = {
  github: { Icon: LuGithub, size: 16 },
  linkedin: { Icon: LuLinkedin, size: 16 },
  twitter: { Icon: RiTwitterXLine, size: 16 },
};

function GithubCard({ content }) {
  const socialEntries = Object.entries(content?.socials || {}).map(
    ([key, href]) => ({ id: key, href, ...(socialIconMap[key] || {}) })
  );

  return (
    <div
      className="relative z-10 h-full flex flex-col"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-center gap-2">
          <LuGithub size={18} className="text-white/50" />
          <h3
            className="text-[18px] leading-none text-white/80"
            style={{ fontFamily: "'EB Garamond', serif", fontStyle: "italic" }}
          >
            {content?.title}
          </h3>
        </div>

        <div className="mt-5">
          <div className="flex items-center gap-2">
            <p className="text-[9px] text-[#444] tracking-[0.18em] font-semibold uppercase">
              {content?.label}
            </p>
            <span
              className="text-[10px] px-2.5 py-[3px] rounded-full"
              style={{
                color: "#34d399",
                border: "1px solid rgba(52,211,153,0.25)",
                background: "rgba(52,211,153,0.07)",
              }}
            >
              {content?.status}
            </span>
          </div>

          <p className="mt-3 text-white text-[15px] leading-[1.3] font-semibold tracking-[-0.01em]">
            {content?.headline}
          </p>

          <p
            className="mt-2 text-[11px] text-[#444]"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Repo: <span className="text-[#f87171]">{content?.repoName}</span>
          </p>
        </div>
      </div>

      <div
        className="mt-auto px-5 py-3 flex justify-center items-center gap-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        {socialEntries.map(({ id, href, Icon }) =>
          Icon ? (
            <a
              key={id}
              href={href}
              className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.07)",
                background: "rgba(255,255,255,0.03)",
                color: "#555",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.color = "#aaa";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.color = "#555";
              }}
            >
              <Icon size={14} />
            </a>
          ) : null
        )}
      </div>
    </div>
  );
}

function VisitorsCard({ content }) {
  return (
    <div
      className="relative z-10 h-full flex flex-col"
      style={{ fontFamily: "'Syne', sans-serif" }}
    >
      <div className="px-5 pt-5 pb-4">
        <p className="text-[9px] text-[#444] tracking-[0.18em] font-semibold uppercase">
          {content?.label}
        </p>

        <div className="mt-3">
          <h3 className="text-[30px] md:text-[36px] leading-[1] font-bold text-white tracking-[-0.02em]">
            {content?.headingLine1}
          </h3>
          <h4
            className="text-[32px] md:text-[40px] leading-[0.9]"
            style={{
              fontFamily: "'EB Garamond', serif",
              fontStyle: "italic",
              color: "#7c3aed",
            }}
          >
            {content?.headingLine2}
          </h4>
        </div>

        <p className="mt-3 text-[12px] text-[#555] leading-[1.5]">
          {content?.description}
        </p>
      </div>

      <div className="mt-auto px-5 py-3 flex items-center justify-between gap-3">
        <div className="flex items-center min-w-0">
          <div className="flex -space-x-2">
            {content?.visitors?.map((person) => (
              <img
                key={person.id}
                src={person.image}
                alt={person.name}
                className="h-7 w-7 rounded-full object-cover"
                style={{ border: "2px solid #111" }}
              />
            ))}
          </div>
          <span className="ml-2.5 text-[11px] text-[#444] truncate">
            {content?.visitorsText}
          </span>
        </div>

        <a
          href={content?.ctaLink}
          className="inline-flex items-center gap-1.5 shrink-0 text-white text-[11px] font-semibold px-4 py-2 rounded-full transition-all duration-200"
          style={{
            border: "1px solid rgba(245,158,11,0.3)",
            background: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(245,158,11,0.08)";
            e.currentTarget.style.borderColor = "rgba(245,158,11,0.5)";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(245,158,11,0.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {content?.ctaText}
          <LuArrowRight size={12} />
        </a>
      </div>
    </div>
  );
}

function CardShell({ children, glowColor = "rgba(124,58,237,0.1)", style = {}, className = "" }) {
  return (
    <div
      className={`relative rounded-[18px] overflow-hidden h-full ${className}`}
      style={{
        border: "1px solid rgba(255,255,255,0.06)",
        transition: "border-color 0.3s ease, transform 0.3s ease",
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          opacity: 0.025,
        }}
      />
      <div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 200,
          height: 200,
          top: -60,
          right: -40,
          background: glowColor,
          filter: "blur(50px)",
        }}
      />
      {children}
    </div>
  );
}

export default function ShowcaseCards() {
  const evervault = showcaseContent.cards.find((c) => c.type === "evervault");
  const github = showcaseContent.cards.find((c) => c.type === "github");
  const visitors = showcaseContent.cards.find((c) => c.type === "visitors");
  const tools = showcaseContent.cards.find((c) => c.type === "tools");
  const music = showcaseContent.cards.find((c) => c.type === "musicMood");

  return (
    <>
      {fontLink}

      <section className="w-full px-4 md:px-6 xl:px-8 py-5 md:py-6" style={{ background: "#050505" }}>
        <style>{`
          .sc-main-grid{
            {/* max-width: 960px; */}
            margin: 0 auto;
            display: grid;
            gap: 12px;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 240px 240px;
          }
          .sc-tall { grid-row: 1 / 3; }

          @media (max-width: 860px) {
            .sc-main-grid{
              grid-template-columns: 1fr 1fr;
              grid-template-rows: auto;
            }
            .sc-music-cell{
              grid-column: 1 / -1;
              grid-row: auto;
            }
            .sc-tall { grid-row: auto; }
          }

          @media (max-width: 560px) {
            .sc-main-grid{ grid-template-columns: 1fr; }
            .sc-music-cell{ grid-column: auto; }
          }
        `}</style>

        <div className="sc-main-grid">
          {/* LEFT COLUMN: stacked */}
          <div className="sc-tall flex flex-col gap-3">
            <MagicCard mode="gradient" gradientSize={220} gradientOpacity={0.35}>
              <CardShell
                glowColor="rgba(124,58,237,0.12)"
                style={{
                  background: "linear-gradient(135deg,#0d0d0d,#111016)",
                }}
              >
                <div className="p-5 h-full">
                  <EvervaultCard text={evervault?.text ?? "EV"} />
                </div>
              </CardShell>
            </MagicCard>

            <MagicCard mode="gradient" gradientSize={220} gradientOpacity={0.35}>
              <CardShell
                glowColor="rgba(99,102,241,0.1)"
                style={{
                  background: "linear-gradient(135deg,#0a0a10,#0d0f1a)",
                }}
              >
                <GithubCard content={github} />
              </CardShell>
            </MagicCard>
          </div>

          {/* MIDDLE COLUMN: stacked */}
          <div className="sc-tall flex flex-col gap-3">
            <MagicCard mode="gradient" gradientSize={220} gradientOpacity={0.35}>
              <CardShell
                glowColor="rgba(99,102,241,0.1)"
                style={{
                  background: "linear-gradient(135deg,#0a0a10,#0d0f1a)",
                }}
              >
                <VisitorsCard content={visitors} />
              </CardShell>
            </MagicCard>

            <MagicCard mode="gradient" gradientSize={220} gradientOpacity={0.35}>
              <CardShell
                glowColor="rgba(16,185,129,0.08)"
                style={{
                  background: "linear-gradient(135deg,#080d0a,#0b100d)",
                }}
              >
                <FavoriteToolsPanel content={tools} />
              </CardShell>
            </MagicCard>
          </div>

          {/* RIGHT: music spans both rows */}
          <div className="sc-tall sc-music-cell">
            <MagicCard mode="gradient" gradientSize={260} gradientOpacity={0.35} className="h-full">
              <CardShell
                glowColor="rgba(124,58,237,0.14)"
                style={{
                  background:
                    "linear-gradient(160deg,#0e0b1a 0%,#060609 60%,#07100d 100%)",
                  height: "100%",
                }}
              >
                <MusicMoodPanel content={music} />
              </CardShell>
            </MagicCard>
          </div>
        </div>
      </section>
    </>
  );
}