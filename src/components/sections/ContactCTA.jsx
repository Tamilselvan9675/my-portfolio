import React, { useState } from "react";
import contactContent from "../../content/home/contact.content";
import GradientGrain from "../background/gradientGrain";
import ContactModal from "../ui/ContactModal";
import { LuArrowRight } from "react-icons/lu";

export default function ContactCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full rounded-4xl py-32 min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        <GradientGrain
          color1="#000000"
          color2="#0a84c6"
          color3="#021526"
          grainAmount={0.15}
          warpSpeed={0.5}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto">
        <div className="relative mb-14 w-full flex justify-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#d4d4d8] font-['Google_Sans_Code',_monospace] tracking-tight leading-tight">
            {contactContent.heading1Start}{" "}
            <span className="font-bold text-white drop-shadow-md">
              {contactContent.heading1Highlight}
            </span>
            <br />
            {contactContent.heading2Start}{" "}
            <span className="font-bold text-white drop-shadow-md">
              {contactContent.heading2Highlight}
            </span>
          </h2>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="group flex items-center gap-4 bg-[#18181b]/80 backdrop-blur-sm border border-[#3f3f46] hover:bg-[#27272a]/90 hover:border-[#52525b] text-white rounded-full pl-6 pr-2 py-2 transition-all duration-300 shadow-lg"
        >
          <span className="font-['Google_Sans_Code',_monospace] font-semibold text-sm tracking-wide">
            {contactContent.buttonText}
          </span>
          <div className="bg-white text-black rounded-full p-2.5 flex items-center justify-center group-hover:bg-[#f4f4f5] transition-colors">
            <LuArrowRight size={16} />
          </div>
        </button>

        <div className="mt-20 flex flex-col items-center gap-4">
          <h3 className="text-2xl md:text-[28px] font-bold text-white font-['EB_Garamond',_serif] tracking-wide">
            {contactContent.subheading}
          </h3>
          <p className="text-[#a1a1aa] font-['Google_Sans_Code',_monospace] max-w-[600px] text-sm md:text-base leading-[1.8]">
            {contactContent.description}
          </p>
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
}
