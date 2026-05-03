import React, { useMemo } from "react";
import { toTechPills } from "../ui/tectIcons";


export default function FavoriteToolsPanel({ content }) {
  const pills = useMemo(() => toTechPills(content?.tools ?? []), [content?.tools]);

  return (
    <div className="relative z-10 h-full flex flex-col">
      <div className="px-6 md:px-7 pt-6 md:pt-7 pb-6">
        <p className="text-[11px] text-[#5f5f63] tracking-[0.2em] font-semibold">
          {content?.title ?? "Favorite Tools"}
        </p>

        <div className="mt-6 flex items-center flex-wrap gap-4">
          {pills.map((t) => (
            <div
              key={t.name}
              className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 grid place-items-center"
              title={t.name}
            >
              {t.icon}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto px-6 md:px-7 py-4 border-t border-[#1a1a1a]">
        <p className="text-[12px] text-[#8b8b8f]">
          AI + automation tools I use daily.
        </p>
      </div>
    </div>
  );
}