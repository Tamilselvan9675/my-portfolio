import React from "react";

export default function ContactHero({
  avatarSrc = "/avatar.jpg",
  titleTop = "Let's create",
  titleBottom = "something real.",
  className = ""
}) {
  return (
    <section className={`relative w-full min-h-[320px] md:min-h-[380px] bg-black border border-[#111] overflow-hidden ${className}`}>
      <div className="mx-auto max-w-[1400px] px-4 md:px-8 lg:px-10 py-10 md:py-12 h-full flex items-center justify-between gap-6 md:gap-8">
        <div className="flex flex-col">
          <div className="flex items-center gap-3 md:gap-5">
            <img
              src={avatarSrc}
              alt="Avatar"
              className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover shrink-0"
            />
            <h2 className="text-white font-semibold tracking-[-0.03em] text-[44px] md:text-[72px] lg:text-[84px] leading-[0.92]">
              {titleTop}
            </h2>
          </div>
          <h3 className="mt-1 md:mt-2 text-[#6f6f74] font-semibold tracking-[-0.03em] text-[44px] md:text-[72px] lg:text-[84px] leading-[0.92]">
            {titleBottom}
          </h3>
        </div>

        <div className="relative hidden md:block mr-2 lg:mr-6 group">
          <div className="h-[130px] w-[130px] lg:h-[170px] lg:w-[170px] rounded-full orb-3d transition-all duration-500 group-hover:scale-[1.06] group-hover:-translate-y-1" />
          <div className="absolute inset-[-20px] rounded-full orb-ambient opacity-70 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </div>
    </section>
  );
}