import React from "react";

export default function AvailabilityBadge({ status = "available" }) {
  const isAvailable = status === "available";

  return (
    <div className="relative inline-flex items-center justify-center group">
      {/* 1. The Gradient Border Layer (The "AI Mode" effect) */}
      <div
        className={`absolute -inset-[1px] rounded-full opacity-70 group-hover:opacity-100 transition duration-500 blur-[0.5px]
          ${isAvailable 
            ? "bg-gradient-to-r from-blue-500 via-cyan-400 to-green-500" 
            : "bg-gradient-to-r from-slate-500 via-orange-500 to-red-600"
          }`}
      />

      {/* 2. The Glassy Body */}
      <div className="relative flex items-center gap-2.5 px-4 py-1.5 bg-[#0a0a0a]/80 backdrop-blur-xl rounded-full">
        
        {/* 3. Blinking Indicator */}
        <div className="relative flex h-2.5 w-2.5">
          {/* Breathing Animation */}
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 
            ${isAvailable ? "bg-green-400" : "bg-red-400"}`}
          ></span>
          
          {/* Solid Core */}
          <span className={`relative inline-flex rounded-full h-2.5 w-2.5 
            ${isAvailable ? "bg-green-500 shadow-[0_0_8px_#22c55e]" : "bg-red-500 shadow-[0_0_8px_#ef4444]"}`}
          ></span>
        </div>

        {/* 4. Text Label */}
        <span className="text-[12px] font-medium tracking-wide text-white/90 select-none">
          {isAvailable ? "Available for work" : "Busy / Full"}
        </span>
      </div>
    </div>
  );
}