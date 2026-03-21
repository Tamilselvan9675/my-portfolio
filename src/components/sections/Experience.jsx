import useGsapFadeIn from "../../hooks/useGsapFadeIn";

export default function Experience() {
  const ref = useGsapFadeIn();

  return (
    <section ref={ref} className="py-20 bg-[#0a0a0a] min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <div className="flex flex-col items-start">
          <p className="text-[#a1a1aa] tracking-[0.2em] text-sm mb-6 font-['Google_Sans_Code',_monospace] uppercase">
            More About Me
          </p>

          <h1 className="text-5xl lg:text-7xl mb-2 font-['EB_Garamond',_serif] font-normal">
            I'm Dhiraj, a
          </h1>
          <h1 className="text-5xl lg:text-7xl mb-8 font-['EB_Garamond',_serif] italic text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#06b6d4] to-[#a855f7] drop-shadow-[0_0_15px_rgba(6,182,212,0.4)] relative">
            Innovative Creator
          </h1>

          <div className="space-y-6 text-[#a1a1aa] text-[15px] leading-[1.8] font-['Google_Sans_Code',_monospace] max-w-lg">
            <p>
              I'm Dhiraj Bhawsar, a passionate full-stack developer who loves turning ideas into interactive web experiences. From designing responsive frontends to building efficient backends, I thrive on creating solutions that just work.
            </p>
            <p>
              When I'm not coding, I enjoy exploring new technologies, experimenting with creative projects, and challenging myself to grow every day. Curiosity and learning are what keep me moving forward.
            </p>
            <p>
              I believe in making the most of every day and building things that leave a positive impact!
            </p>
          </div>

          {/* Socials & Download CV */}
          <div className="flex items-center gap-6 mt-10">
            {/* Social Icons */}
            <div className="flex items-center gap-4 text-[#d4d4d8]">
              {/* GitHub */}
              <a href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              {/* Peerlist/Polywork (Approximation of the 'P' icon) */}
              <a href="#" className="hover:text-white transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="4" ry="4"/><path d="M9 8h4a2 2 0 1 1 0 4H9v5"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
            </div>

            {/* Download Button */}
            <button className="flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-lg font-['Google_Sans_Code',_monospace] font-bold text-sm hover:bg-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              Download CV
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto">
          {/* Add your image path to the src below */}
          <img
            src="/your-image-path.jpg" 
            alt="Dhiraj"
            className="w-full h-auto object-cover rounded-2xl bg-[#111] shadow-[0_0_30px_rgba(0,0,0,0.5)]"
          />
        </div>

      </div>
    </section>
  );
}