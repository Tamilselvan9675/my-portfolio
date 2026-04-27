import footerContent from "../../content/global/footer.content";
import ContactHero from "../ui/ContactHero";
import ShowcaseCards from "../ui/ShowcaseCards";

export default function Footer() {
  return (
    <>
      <ShowcaseCards />
      <ContactHero />

      <footer className="bg-black py-10 px-4 md:px-6 w-full flex justify-center">
        <div className="w-full max-w-[1400px] bg-[#0c0c0c] border border-[#1a1a1a] rounded-[2rem] p-10 md:p-16 flex flex-col lg:flex-row gap-16 lg:gap-24">
          {/* Left Section */}
          <div className="flex flex-col max-w-sm">
            <h2 className="text-white font-black text-5xl tracking-tighter uppercase mb-6 drop-shadow-sm">
              {footerContent.brandText}
            </h2>

            <p className="text-[#8e8e93] text-[15px] leading-relaxed font-['Google_Sans_Code',_monospace]">
              {footerContent.description}
            </p>
          </div>

          {/* Right Section */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
            {footerContent.columns.map((col, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-[#71717a] text-[15px] font-medium mb-6 font-['Google_Sans_Code',_monospace]">
                  {col.title}
                </h3>

                <ul className="flex flex-col gap-4">
                  {col.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-[#f4f4f5] hover:text-[#3b82f6] font-bold text-[15px] tracking-wide transition-colors font-['Google_Sans_Code',_monospace]"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>

                {col.hasExtra && (
                  <div className="mt-8 flex flex-col items-start">
                    <div className="w-full h-px bg-[#27272a] mb-6"></div>

                    <div className="flex items-center border border-[#3f3f46] rounded-[3px] overflow-hidden mb-3">
                      <span className="bg-[#166534] text-[#4ade80] text-[10px] font-bold px-1.5 py-0.5">
                        DMCA
                      </span>
                      <span className="text-[#a1a1aa] text-[10px] font-bold px-1.5 py-0.5">
                        PROTECTED
                      </span>
                    </div>

                    <p className="text-[#52525b] text-[11px] leading-snug">
                      This site is protected. Read our{" "}
                      <a href="/privacy" className="hover:text-white underline">
                        Privacy Policy
                      </a>{" "}
                      &{" "}
                      <a href="/terms" className="hover:text-white underline">
                        Terms
                      </a>
                      .
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
