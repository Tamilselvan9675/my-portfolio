export default function SkillCard({ name, icon }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 bg-[#121212] border border-[#27272a] rounded-xl hover:border-[#52525b] hover:bg-[#18181b] transition-all cursor-default">
      {/* Icon Wrapper - You can put an <img /> or <svg /> here later */}
      <span className="flex items-center justify-center w-5 h-5 text-sm">
        {icon}
      </span>
      <span className="text-[15px] font-medium text-[#d4d4d8]">{name}</span>
    </div>
  );
}
