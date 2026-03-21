import React from "react";
import contactContent from "../../content/home/contact.content";

export default function ContactModal({ isOpen, onClose }) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sliding Drawer */}
      <div
        className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[600px] bg-[#0a0a0a] border border-[#27272a] border-b-0 rounded-t-3xl p-6 md:p-8 z-[70] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Drag Handle */}
        <div className="w-12 h-1.5 bg-[#27272a] rounded-full mx-auto mb-8 cursor-grab" />

        {/* Header */}
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18" /><path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-dashed border-[#27272a] mb-6" />

        {/* Action Cards */}
        <div className="flex flex-col gap-4 mb-8">
          
          {/* Send Message Card */}
          <div className="relative group p-5 border border-dashed border-[#27272a] rounded-xl bg-[#0f0f0f] hover:bg-[#151515] cursor-pointer transition-colors overflow-hidden flex justify-between items-center">
            <div className="relative z-10">
              <h4 className="text-white font-bold font-['EB_Garamond',_serif] text-xl mb-1 group-hover:text-blue-400 transition-colors">
                Send me a message
              </h4>
              <p className="text-[#71717a] font-['Google_Sans_Code',_monospace] text-xs">
                I reply within a day
              </p>
            </div>
            <svg className="relative z-10 text-[#a1a1aa] group-hover:text-white transition-colors" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            {/* Decorative Background Icon */}
            <svg className="absolute -bottom-4 -right-2 w-20 h-20 text-[#1e1e24] group-hover:text-[#2a2a35] transition-colors transform -rotate-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Schedule Call Card */}
            <div className="relative group p-5 border border-dashed border-[#27272a] rounded-xl bg-[#0f0f0f] hover:bg-[#151515] cursor-pointer transition-colors overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-white font-bold font-['EB_Garamond',_serif] text-xl mb-1 group-hover:text-yellow-500 transition-colors">
                  Schedule a call
                </h4>
                <p className="text-[#71717a] font-['Google_Sans_Code',_monospace] text-[11px]">
                  30 min • video or phone
                </p>
              </div>
              {/* Decorative Calendar Icon */}
              <svg className="absolute -bottom-4 -right-3 w-16 h-16 text-[#1e1e24] group-hover:text-[#332b1a] transition-colors transform rotate-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            </div>

            {/* Send Email Card */}
            <div className="relative group p-5 border border-dashed border-[#27272a] rounded-xl bg-[#0f0f0f] hover:bg-[#151515] cursor-pointer transition-colors overflow-hidden flex flex-col justify-between">
              <div className="relative z-10 flex justify-between items-start mb-2">
                <h4 className="text-white font-bold font-['EB_Garamond',_serif] text-xl group-hover:text-blue-400 transition-colors">
                  Send an email
                </h4>
                <button className="text-[#71717a] hover:text-white transition-colors" onClick={(e) => { e.stopPropagation(); navigator.clipboard.writeText(contactContent.email); }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                </button>
              </div>
              <p className="relative z-10 text-[#71717a] font-['Google_Sans_Code',_monospace] text-[11px] break-all">
                {contactContent.email}
              </p>
              {/* Decorative Envelope Icon */}
              <svg className="absolute -bottom-4 -right-3 w-16 h-16 text-[#1e1e24] group-hover:text-[#1a2b38] transition-colors transform rotate-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-8 pt-4">
          <a href={contactContent.socials.linkedin} className="text-[#71717a] hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a href={contactContent.socials.github} className="text-[#71717a] hover:text-white transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
          </a>
          <a href={contactContent.socials.twitter} className="text-[#71717a] hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
          </a>
        </div>
      </div>
    </>
  );
}