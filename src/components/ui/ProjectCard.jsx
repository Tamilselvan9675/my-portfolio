export default function ProjectCard({ title, image, description, tech, codeLink, liveLink }) {
  return (
    <div className="flex flex-col bg-[#0e1116] border border-[#1e232b] rounded-2xl overflow-hidden hover:border-[#30363d] transition-colors relative group">
      {/* Project Image Area */}
      <div className="relative h-56 w-full bg-[#161b22] border-b border-[#1e232b] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
        />
        {/* Zoom Icon Button */}
        <button className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 p-2 rounded-full backdrop-blur-sm transition-all border border-white/10">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/><line x1="11" x2="11" y1="8" y2="14"/><line x1="8" x2="14" y1="11" y2="11"/></svg>
        </button>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-4 tracking-wide font-['Google_Sans_Code',_monospace]">
          {title}
        </h3>

        {/* Bulleted Description */}
        <ul className="space-y-3 mb-6 flex-grow">
          {description?.map((desc, idx) => (
            <li key={idx} className="flex items-start text-[#a1a1aa] text-sm leading-relaxed font-['Google_Sans_Code',_monospace]">
              <span className="w-1.5 h-1.5 bg-[#f97316] rounded-sm mt-1.5 mr-3 flex-shrink-0 shadow-[0_0_5px_#f97316]"></span>
              {desc}
            </li>
          ))}
        </ul>

        {/* Tech Stack Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tech?.map((item, index) => (
            <span
              key={index}
              className="flex items-center gap-1.5 text-xs font-medium text-[#c9d1d9] bg-[#1c2128] px-2.5 py-1.5 rounded-full border border-[#30363d]"
            >
              <span className="opacity-80">{item.icon}</span>
              {item.name}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-auto">
          <a
            href={codeLink}
            className="flex items-center gap-2 px-4 py-2 bg-[#1c2128] hover:bg-[#2d333b] text-white text-sm font-semibold rounded-lg border border-[#30363d] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            Code
          </a>
          <a
            href={liveLink}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ff5a1f] to-[#dc2626] hover:from-[#ea580c] hover:to-[#b91c1c] text-white text-sm font-semibold rounded-lg transition-colors shadow-[0_0_15px_rgba(255,90,31,0.3)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}