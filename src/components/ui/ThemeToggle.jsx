import { motion } from "framer-motion";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={`
        relative w-16 h-8 flex items-center px-1 rounded-full transition-colors duration-500
        ${isDark ? "bg-purple-900/40" : "bg-blue-400/30"}
        backdrop-blur-md border border-white/10 shadow-inner group
      `}
    >
      {/* Background Glow - mimicking the purple light in your image */}
      <div 
        className={`absolute inset-0 transition-opacity duration-500 blur-md
          ${isDark ? "bg-purple-600/20 opacity-100" : "opacity-0"}`} 
      />

      {/* Floating Glass Sphere (The Handle) */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        animate={{ x: isDark ? 32 : 0 }}
        className="z-10 relative w-6 h-6 rounded-full flex items-center justify-center 
                   bg-white/10 backdrop-blur-xl border border-white/30 shadow-xl"
      >
        {/* Internal Icon Glow */}
        <div className={`absolute inset-0 rounded-full blur-[4px] opacity-40 
          ${isDark ? "bg-purple-400" : "bg-yellow-200"}`} 
        />
        
        {isDark ? (
          <HiOutlineMoon className="relative z-20 text-white drop-shadow-md" size={14} />
        ) : (
          <HiOutlineSun className="relative z-20 text-white drop-shadow-md" size={14} />
        )}
      </motion.div>

      {/* Static Label (Optional - like the "Sleep" text in your image) */}
      <span className="absolute right-2 text-[8px] font-bold text-white/40 uppercase tracking-tighter select-none">
        {isDark ? "" : "Light"}
      </span>
      <span className="absolute left-2 text-[8px] font-bold text-white/40 uppercase tracking-tighter select-none">
        {isDark ? "Dark" : ""}
      </span>
    </button>
  );
}