import { useState } from "react";
import { LuCopy, LuCheck, LuCheckCheck } from "react-icons/lu";

export default function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const email = "tamilselvan9675@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      onClick={handleCopy}
      className={`flex items-center gap-2 px-4 py-3 rounded-lg border backdrop-blur-sm cursor-pointer transition-all duration-300
        ${copied ? "bg-white/10 border-white/30" : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"}`}
    >
      {copied ? (
        <LuCheckCheck
          size={20}
          className="text-white transition-all duration-300"
        />
      ) : (
        <LuCopy
          size={16}
          className="text-white/70 transition-all duration-300"
        />
      )}
      <span
        className={`text-sm transition-all duration-300 ${copied ? "text-white" : "text-white/70"}`}
      >
        {copied ? "Copied to clipboard!" : email}
      </span>
    </div>
  );
}
