import React from "react";
import contactContent from "../../content/home/contact.content";
import {
  LuX,
  LuArrowRight,
  LuSquare,
  LuCalendar,
  LuCopy,
  LuMail,
  LuLinkedin,
  LuGithub,
  LuTwitter,
} from "react-icons/lu";

export default function ContactModal({ isOpen, onClose }) {
  const socials = [
    {
      key: "linkedin",
      href: contactContent.socials.linkedin,
      Icon: LuLinkedin,
      size: 20,
    },
    {
      key: "github",
      href: contactContent.socials.github,
      Icon: LuGithub,
      size: 20,
    },
    {
      key: "twitter",
      href: contactContent.socials.twitter,
      Icon: LuTwitter,
      size: 18,
    },
  ];

  return (
    <>
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] bg-[#0a0a0a] border border-[#27272a] border-b-0 rounded-t-3xl p-6 md:p-8 z-[70] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="w-12 h-1.5 bg-[#27272a] rounded-full mx-auto mb-8 cursor-grab" />

        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-3xl font-bold text-white font-['EB_Garamond',_serif] mb-2 tracking-wide">
              {contactContent.modalTitle}
            </h3>
            <p className="text-[10px] text-[#a1a1aa] tracking-[0.15em] font-['Google_Sans_Code',_monospace] uppercase font-bold">
              {contactContent.modalSubtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 bg-[#121212] rounded-md text-[#a1a1aa] hover:text-white border border-[#27272a] transition-colors"
          >
            <LuX size={16} />
          </button>
        </div>

        <div className="w-full border-t border-dashed border-[#27272a] mb-6" />

        <div className="flex flex-col gap-4 mb-8">
          <div className="relative group p-5 border border-dashed border-[#27272a] rounded-xl bg-[#0f0f0f] hover:bg-[#151515] cursor-pointer transition-colors overflow-hidden flex justify-between items-center">
            <div className="relative z-10">
              <h4 className="text-white font-bold font-['EB_Garamond',_serif] text-xl mb-1 group-hover:text-blue-400 transition-colors">
                Send me a message
              </h4>
              <p className="text-[#71717a] font-['Google_Sans_Code',_monospace] text-xs">
                I reply within a day
              </p>
            </div>
            <LuArrowRight
              className="relative z-10 text-[#a1a1aa] group-hover:text-white transition-colors"
              size={18}
            />
            <LuSquare className="absolute -bottom-4 -right-2 w-20 h-20 text-[#1e1e24] group-hover:text-[#2a2a35] transition-colors transform -rotate-12" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative group p-5 border border-dashed border-[#27272a] rounded-xl bg-[#0f0f0f] hover:bg-[#151515] cursor-pointer transition-colors overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-white font-bold font-['EB_Garamond',_serif] text-xl mb-1 group-hover:text-yellow-500 transition-colors">
                  Schedule a call
                </h4>
                <p className="text-[#71717a] font-['Google_Sans_Code',_monospace] text-[11px]">
                  30 min • video or phone
                </p>
              </div>
              <LuCalendar className="absolute -bottom-4 -right-3 w-16 h-16 text-[#1e1e24] group-hover:text-[#332b1a] transition-colors transform rotate-12" />
            </div>

            <div className="relative group p-5 border border-dashed border-[#27272a] rounded-xl bg-[#0f0f0f] hover:bg-[#151515] cursor-pointer transition-colors overflow-hidden flex flex-col justify-between">
              <div className="relative z-10 flex justify-between items-start mb-2">
                <h4 className="text-white font-bold font-['EB_Garamond',_serif] text-xl group-hover:text-blue-400 transition-colors">
                  Send an email
                </h4>
                <button
                  className="text-[#71717a] hover:text-white transition-colors"
                  onClick={e => {
                    e.stopPropagation();
                    navigator.clipboard.writeText(contactContent.email);
                  }}
                >
                  <LuCopy size={14} />
                </button>
              </div>
              <p className="relative z-10 text-[#71717a] font-['Google_Sans_Code',_monospace] text-[11px] break-all">
                {contactContent.email}
              </p>
              <LuMail className="absolute -bottom-4 -right-3 w-16 h-16 text-[#1e1e24] group-hover:text-[#1a2b38] transition-colors transform rotate-12" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-8 pt-4">
          {socials.map(({ key, href, Icon, size }) => (
            <a
              key={key}
              href={href}
              className="text-[#71717a] hover:text-white transition-colors"
            >
              <Icon size={size} />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
