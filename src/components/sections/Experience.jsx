import useGsapFadeIn from "../../hooks/useGsapFadeIn";
import {
  LuGithub,
  LuLinkedin,
  LuInstagram,
  LuSquareDashedBottomCode,
  LuDownload,
} from "react-icons/lu";

const SOCIAL_LINKS = [
  { key: "github", href: "#", Icon: LuGithub, size: 22 },
  { key: "linkedin", href: "#", Icon: LuLinkedin, size: 22 },
  { key: "peerlist", href: "#", Icon: LuSquareDashedBottomCode, size: 22 },
  { key: "instagram", href: "#", Icon: LuInstagram, size: 22 },
];

export default function Experience() {
  const ref = useGsapFadeIn();

  return (
    <section
      ref={ref}
      className="py-20 bg-[#0a0a0a] min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 text-white"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col items-start">
          <p className="text-[#a1a1aa] tracking-[0.2em] text-sm mb-6 font-['Google_Sans_Code',_monospace] uppercase">
            More About Me
          </p>

          <h1 className="text-5xl lg:text-7xl mb-2 font-['EB_Garamond',_serif] font-normal">
            I'm Tamilselvan G, a
          </h1>
          <h1 className="text-5xl lg:text-7xl mb-8 font-['EB_Garamond',_serif] italic text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#a855f7] drop-shadow-[0_0_15px_rgba(6,182,212,0.4)] relative">
            Innovative Creator
          </h1>

          <div className="space-y-6 text-[#a1a1aa] text-[15px] leading-[1.8] font-['Google_Sans_Code',_monospace] max-w-lg">
            <p>
              I'm Tamilselvan G, a passionate full-stack developer who loves
              turning ideas into interactive web experiences. From designing
              responsive frontends to building efficient backends, I thrive on
              creating solutions that just work.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies,
              experimenting with creative projects, and challenging myself to
              grow every day. Curiosity and learning are what keep me moving
              forward.
            </p>
            <p>
              I believe in making the most of every day and building things that
              leave a positive impact!
            </p>
          </div>

          <div className="flex items-center gap-6 mt-10">
            <div className="flex items-center gap-4 text-[#d4d4d8]">
              {SOCIAL_LINKS.map(({ key, href, Icon, size }) => (
                <a
                  key={key}
                  href={href}
                  className="hover:text-white transition-colors"
                >
                  <Icon size={size} />
                </a>
              ))}
            </div>

            <button className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg font-['Google_Sans_Code',_monospace] font-bold text-sm hover:bg-gray-200 transition-colors">
              <LuDownload size={18} />
              Download CV
            </button>
          </div>
        </div>

        <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
          <img
            src="/your-image-path.jpg"
            alt="Tamilselvan G"
            className="w-full h-auto object-cover rounded-2xl bg-[#111] shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>
    </section>
  );
}
