export default function TestimonialCard({ testimonial }) {
  return (
    <div 
      className={`min-w-[350px] w-[380px] md:w-[420px] flex flex-col rounded-2xl border border-[#1e232b] p-8 md:p-10 shrink-0 relative overflow-hidden bg-gradient-to-b ${testimonial.gradient}`}
    >
      {/* Title */}
      <h3 className="text-[22px] md:text-2xl font-bold text-white mb-6 font-['EB_Garamond',_serif] leading-snug">
        {testimonial.title}
      </h3>

      {/* Body Text */}
      <p className="text-[#a1a1aa] text-[15px] leading-[1.8] font-['Google_Sans_Code',_monospace] mb-8">
        {testimonial.body}
      </p>

      {/* Author Info (Pushed to bottom) */}
      <div className="mt-auto flex items-center gap-4">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover grayscale-[20%] border border-[#30363d]"
        />
        <div className="flex flex-col">
          <h4 className="text-white font-bold text-[15px] font-['Google_Sans_Code',_monospace]">
            {testimonial.name}
          </h4>
          <p className="text-[#71717a] text-[13px] font-['Google_Sans_Code',_monospace]">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}