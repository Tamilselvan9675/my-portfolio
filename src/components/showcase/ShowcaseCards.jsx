import React from "react";
import { LuGithub, LuArrowRight } from "react-icons/lu";
import MagicCard from "../ui/MagicCard";
import EvervaultCard from "../ui/EvervaultCard";
import FavoriteToolsPanel from "./FavoriteToolsPanel";
import MusicMoodPanel from "./MusicMoodPanel";
import showcaseContent from "../../content/home/showcase.content";
import { toTechPills } from "../ui/tectIcons";
import useLatestCommit from "../../hooks/useLatestCommit";

const CardShell = ({ children, className = "" }) => (
  <div
    className={[
      "relative h-full w-full rounded-3xl overflow-hidden border border-white/10",
      "transition-transform duration-200 hover:-translate-y-1",
      className,
    ].join(" ")}
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.12),transparent_40%)]" />
    <div className="relative z-10 h-full w-full">{children}</div>
  </div>
);

function GithubCard({ content }) {
  // Use your actual repo owner/name
  const { commit, loading } = useLatestCommit("Tamilselvan9675", "my-portfolio");

  const socials = Object.entries(content?.socials || {}).map(([key, href]) => {
    const [tech] = toTechPills([key]);
    return {
      id: key,
      href,
      Icon: tech?.Icon,
      size: tech?.size,
      className: tech?.className,
    };
  });

  return (
    <div className="h-full w-full flex flex-col">
      <div className="px-5 pt-5 pb-6">
        <div className="flex items-center gap-2">
          <LuGithub size={18} className="text-white/50" />
          <h3 className="text-[18px] leading-none text-white/80 italic">
            {content?.title || "My Github"}
          </h3>
        </div>

        <div className="mt-5">
          <div className="flex items-center gap-2">
            <p className="text-[9px] text-[#444] tracking-[0.18em] font-semibold uppercase">
              LATEST PUSH
            </p>
            <span className="text-[10px] px-2.5 py-[3px] rounded-full text-emerald-400 border border-emerald-400/25 bg-emerald-400/10">
              {commit ? new Date(commit.date).toLocaleString() : "Loading..."}
            </span>
          </div>

          <p className="mt-3 text-white text-[15px] leading-[1.3] font-semibold tracking-[-0.01em]">
            {loading ? (
              "Loading last commit..."
            ) : commit ? (
              <a href={commit.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {commit.message}
              </a>
            ) : (
              "No commit found."
            )}
          </p>

          <p className="mt-2 text-[11px] text-[#444] font-mono">
            Repo: <span className="text-red-400">my-portfolio</span>
          </p>
        </div>
      </div>

      <div className="mt-auto px-5 py-3 flex justify-center items-center gap-3 border-t border-white/5">
        {socials.map(({ id, href, Icon, size, className }) =>
          Icon ? (
            <a
              key={id}
              href={href}
              className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/10 bg-white/5 text-[#555] hover:text-[#aaa] hover:bg-white/10 transition"
            >
              <Icon size={size || 14} className={className} />
            </a>
          ) : null,
        )}
      </div>
    </div>
  );
}


function VisitorsCard({ content }) {
  return (
    <div className="h-full w-full flex flex-col">
      <div className="px-5 pt-5 pb-4">
        <p className="text-[9px] text-[#444] tracking-[0.18em] font-semibold uppercase">
          {content?.label}
        </p>

        <div className="mt-3">
          <h3 className="text-[30px] md:text-[36px] leading-[1] font-bold text-white tracking-[-0.02em]">
            {content?.headingLine1}
          </h3>
          <h4 className="text-[32px] md:text-[40px] leading-[0.9] italic text-violet-500 tracking-[0.1em] font-['Outfit',_monospace]">
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
            {content?.visitors?.map(person => (
              <img
                key={person.id}
                src={person.image}
                alt={person.name}
                className="h-7 w-7 rounded-full object-cover border-2 border-[#111]"
              />
            ))}
          </div>
          <span className="ml-2.5 text-[11px] text-[#444] truncate">
            {content?.visitorsText}
          </span>
        </div>

        <a
          href={content?.ctaLink}
          className="inline-flex items-center gap-1.5 text-white text-[11px] font-semibold px-4 py-2 rounded-full border border-amber-400/30 hover:bg-amber-400/10 transition"
        >
          {content?.ctaText}
          <LuArrowRight size={12} />
        </a>
      </div>
    </div>
  );
}

export default function ShowcaseCards() {
  const evervault = showcaseContent.cards.find(c => c.type === "evervault");
  const github = showcaseContent.cards.find(c => c.type === "github");
  const visitors = showcaseContent.cards.find(c => c.type === "visitors");
  const tools = showcaseContent.cards.find(c => c.type === "tools");
  const music = showcaseContent.cards.find(c => c.type === "musicMood");

  return (
    <section className="w-full px-4 md:px-6 xl:px-8 py-5 md:py-6 bg-[#050505]">
      <div
        className={[
          "mx-auto grid gap-3 max-w-7xl",
          "grid-cols-1 md:grid-cols-2 xl:grid-cols-3",
          "auto-rows-[180px] md:auto-rows-[200px] xl:auto-rows-[220px]",
        ].join(" ")}
      >
        {/* Col 1 Row 1 — EvervaultCard */}
        <MagicCard
          mode="gradient"
          gradientSize={220}
          gradientOpacity={0.35}
          className="h-full w-full"
        >
          <CardShell className="bg-gradient-to-br from-[#0d0d0d] to-[#111016]">
            <div className="h-full flex flex-col">
              <div className="p-1 flex-1 flex items-center justify-center">
                <EvervaultCard
                  text={evervault?.text ?? "EV"}
                  subtitle={evervault?.subtitle}
                />
              </div>

              <div className="  border-t border-white/5 flex items-center justify-center w-full px-5 py-2">
                <p className="mt-1 text-[10.5px] leading-[1.6] text-white/60 text-center">
                  A quick summary of my experience, projects, and skills —
                  available for download.
                </p>
              </div>
            </div>
          </CardShell>
        </MagicCard>

        {/* Col 2 Row 1 — VisitorsCard */}
        <MagicCard
          mode="gradient"
          gradientSize={220}
          gradientOpacity={0.35}
          className="h-full w-full"
        >
          <CardShell className="bg-gradient-to-br from-[#0a0a10] to-[#0d0f1a]">
            <VisitorsCard content={visitors} />
          </CardShell>
        </MagicCard>

        {/* Col 3 Row 1–2 — MusicMoodPanel (tall, spans 2 rows) */}
        <MagicCard
          mode="gradient"
          gradientSize={260}
          gradientOpacity={0.35}
          className="h-full w-full md:col-start-2 md:row-start-1 md:row-span-2 xl:col-start-3 xl:row-start-1 xl:row-span-2"
        >
          <CardShell className="bg-gradient-to-br from-[#0e0b1a] via-[#060609] to-[#07100d] h-full w-full flex flex-col">
            <MusicMoodPanel content={music} />
          </CardShell>
        </MagicCard>

        {/* Col 1 Row 2 — GithubCard */}
        <MagicCard
          mode="gradient"
          gradientSize={220}
          gradientOpacity={0.35}
          className="h-full xl:col-start-1 xl:row-start-2"
        >
          <CardShell className="bg-gradient-to-br from-[#0a0a10] to-[#0d0f1a] h-full w-full">
            <GithubCard content={github} />
          </CardShell>
        </MagicCard>

        {/* Col 2 Row 2 — FavoriteToolsPanel */}
        <MagicCard
          mode="gradient"
          gradientSize={220}
          gradientOpacity={0.35}
          className="h-full w-full xl:col-start-2 xl:row-start-2"
        >
          <CardShell className="bg-gradient-to-br from-[#080d0a] to-[#0b100d]">
            <FavoriteToolsPanel content={tools} />
          </CardShell>
        </MagicCard>
      </div>
    </section>
  );
}
