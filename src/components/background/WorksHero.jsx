export default function WorksHero({ title, subtitleTop, subtitleBottom }) {
  return (
    // Removed bg-[#050505] from the className below
    <section className="relative flex flex-col items-center justify-center py-32 overflow-hidden min-h-[50vh]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Content */}
      <div className="relative z-10 text-center flex flex-col items-center px-4">
        {/* Title */}
        <h1
          className="text-white text-[12vw] sm:text-8xl md:text-9xl font-black tracking-tighter mb-8 leading-none"
          style={{ fontFamily: '"Arial Black", Impact, system-ui, sans-serif' }}
        >
          {title}
        </h1>

        {/* Subtitles */}
        <div className="flex flex-col items-center gap-3 mt-4">
          <p className="text-gray-400 text-xs sm:text-sm tracking-[0.4em] uppercase font-semibold">
            {subtitleTop}
          </p>
          <p className="text-white text-3xl sm:text-4xl md:text-5xl italic font-serif">
            {subtitleBottom}
          </p>
        </div>
      </div>
    </section>
  );
}