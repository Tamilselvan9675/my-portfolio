import testimonials from "../../content/home/testimonial.content";
import TestimonialCard from "../ui/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#050505] overflow-hidden flex flex-col items-center w-full">
      
      {/* Header Section */}
      <div className="text-center mb-16 flex flex-col items-center px-4">
        <p className="text-[#a1a1aa] tracking-[0.25em] text-xs font-bold uppercase mb-6 font-['Google_Sans_Code',_monospace]">
          Testimonials
        </p>
        
        <h2 className="text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-white tracking-tight font-['EB_Garamond',_serif]">
          Word on the street{" "}
          <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#ec4899] to-[#a855f7] drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]">
            about me
          </span>
        </h2>
      </div>

      {/* Horizontal Scrolling Carousel Container */}
      {/* Using snap-x for smooth snapping and hiding the scrollbar */}
      <div className="w-full max-w-[100vw] overflow-x-auto snap-x snap-mandatory flex gap-6 px-6 md:px-12 lg:px-24 pb-8 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="snap-center">
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>
      
    </section>
  );
}