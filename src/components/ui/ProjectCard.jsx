export default function ProjectCard({ 
  title, 
  mainDescription, 
  features, 
  techStack, 
  mobileImage1, 
  mobileImage2, 
  desktopImage 
}) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full max-w-7xl mx-auto items-stretch">
      
      {/* Left Column: Text Content */}
      <div className="flex-1 lg:max-w-[400px] flex flex-col justify-center text-white space-y-6">
        {/* Title with decorative line */}
        <div className="flex items-center gap-4">
          <div className="h-[2px] w-6 bg-red-500"></div>
          <h2 className="text-3xl font-bold tracking-wide">{title}</h2>
        </div>

        {/* Main Description */}
        <p className="text-gray-300 text-sm leading-relaxed">
          {mainDescription}
        </p>

        {/* Feature List */}
        <ul className="space-y-4">
          {features?.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-300">
              <span className="text-red-500 mt-0.5">✦</span>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-3 pt-4">
          {techStack?.map((tech, idx) => (
            <div 
              key={idx} 
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-700 bg-black/50 text-xs font-medium text-gray-300"
            >
              <span>{tech.icon}</span>
              {tech.name}
            </div>
          ))}
        </div>
      </div>

      {/* Middle Divider (Vertical Line with Icon) */}
      <div className="hidden lg:flex flex-col items-center relative w-12">
        <div className="w-8 h-8 rounded-full bg-gray-800 border-2 border-gray-600 z-10 flex items-center justify-center overflow-hidden">
          {/* Placeholder for small avatar/icon in the center of the line */}
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-black"></div>
        </div>
        <div className="w-[1px] h-full bg-gray-700 absolute top-4 bottom-0 z-0"></div>
      </div>

      {/* Right Column: Images */}
      <div className="flex-[2] grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Mobile Images (Stacked vertically on desktop) */}
        <div className="flex flex-col gap-4 col-span-1">
          <div className="bg-[#b91c1c] rounded-2xl p-4 h-full min-h-[200px] flex items-center justify-center overflow-hidden">
             <img src={mobileImage1} alt={`${title} mobile view 1`} className="w-full h-auto rounded-lg shadow-lg object-cover" />
          </div>
          <div className="bg-[#b91c1c] rounded-2xl p-4 h-full min-h-[200px] flex items-center justify-center overflow-hidden">
             <img src={mobileImage2} alt={`${title} mobile view 2`} className="w-full h-auto rounded-lg shadow-lg object-cover" />
          </div>
        </div>

        {/* Desktop Image */}
        <div className="md:col-span-2 bg-[#b91c1c] rounded-2xl p-4 lg:p-6 flex items-center justify-center overflow-hidden">
          <img src={desktopImage} alt={`${title} desktop view`} className="w-full h-auto rounded-xl shadow-2xl border border-gray-800" />
        </div>
      </div>
      
    </div>
  );
}