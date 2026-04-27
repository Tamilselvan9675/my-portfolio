import React, { useEffect, useMemo, useState } from "react";
import { FaSpotify } from "react-icons/fa";

function normalizeTrack(item) {
  if (!item) return null;

  if (item.is_playing && item.item) {
    return {
      title: item.item.name || "",
      artists: (item.item.artists || []).map(a => a.name).join(", "),
      album: item.item.album?.name || "",
      cover: item.item.album?.images?.[0]?.url || "",
      externalUrl: item.item.external_urls?.spotify || "",
      isPlaying: true,
    };
  }

  if (item.track) {
    return {
      title: item.track.name || "",
      artists: (item.track.artists || []).map(a => a.name).join(", "),
      album: item.track.album?.name || "",
      cover: item.track.album?.images?.[0]?.url || "",
      externalUrl: item.track.external_urls?.spotify || "",
      isPlaying: false,
    };
  }

  return null;
}

export default function SpotifyLastPlayedCard({
  endpoint,
  title = "Last Played",
  fallbackText = "No recent track available right now.",
}) {
  const [loading, setLoading] = useState(true);
  const [track, setTrack] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let alive = true;

    async function loadTrack() {
      try {
        setLoading(true);
        setError("");
        const res = await fetch(endpoint, { method: "GET" });
        if (!res.ok) throw new Error(`Failed: ${res.status}`);
        const data = await res.json();
        const parsed = normalizeTrack(data);
        if (alive) setTrack(parsed);
      } catch (e) {
        if (alive) setError(e.message || "Unable to load track");
      } finally {
        if (alive) setLoading(false);
      }
    }

    loadTrack();
    const id = setInterval(loadTrack, 30000);

    return () => {
      alive = false;
      clearInterval(id);
    };
  }, [endpoint]);

  const description = useMemo(() => {
    if (!track) return fallbackText;
    return `I recently listened to ${track.title} by ${track.artists} from the album ${track.album}`;
  }, [track, fallbackText]);

  return (
    <article className="group relative rounded-2xl border border-[#1f1f1f] bg-linear-to-t from-[#171c35] to-[#000000] hover:from-[#2b131e] hover:to-[#141414] overflow-hidden transition-all duration-500 ease-in-out h-full min-h-[460px]">
      {track?.cover ? (
        <img
          src={track.cover}
          alt={track.title}
          className="absolute inset-0 w-full h-full object-cover opacity-25 transition-opacity duration-500 group-hover:opacity-35"
        />
      ) : null}

      <div className="absolute inset-0 bg-linear-to-b from-black/75 via-black/55 to-black/90" />

      <div className="relative z-20 p-5 md:p-6 h-full flex flex-col">
        <div className="flex items-center gap-2.5">
          <FaSpotify className="text-[#1ed760]" size={20} />
          <p className="text-white text-[20px] md:text-[22px] font-semibold">
            {title}
          </p>
          {track?.isPlaying ? (
            <span className="ml-1 text-[10px] border border-[#1ed76066] bg-[#1ed76022] text-[#1ed760] px-2 py-0.5 rounded-full">
              LIVE
            </span>
          ) : null}
        </div>

        <p className="mt-3 text-[14px] md:text-[15px] leading-[1.45] text-[#c4c4c7]">
          {loading ? "Loading latest Spotify track..." : description}
        </p>

        {error ? (
          <p className="mt-2 text-[12px] text-[#f87171]">{error}</p>
        ) : null}

        <div className="mt-auto flex justify-center pb-2 pt-5">
          <div className="w-full rounded-xl overflow-hidden shadow-lg border border-white/10">
            <iframe
              title="spotify-player"
              style={{ borderRadius: "12px" }}
              src={
                track?.externalUrl
                  ? `https://open.spotify.com/embed/track/${track.externalUrl.split("/track/")[1]?.split("?")[0]}?utm_source=generator&theme=0`
                  : "https://open.spotify.com/embed/playlist/37i9dQZF1DXcYHCSWjSx6A?utm_source=generator&theme=0"
              }
              width="100%"
              height="400"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
