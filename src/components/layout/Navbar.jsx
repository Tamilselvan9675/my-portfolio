import ThemeToggle from "../ui/ThemeToggle";
import AvailabilityBadge from "../ui/AvailabilityBadge";
import FloatingDock from "../animations/floatingDock";

import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineBriefcase,
  HiOutlineCode,
  HiOutlineBookOpen,
  HiOutlineMail,
} from "react-icons/hi";
import { AiOutlineFilePdf } from "react-icons/ai";
import { FiCalendar } from "react-icons/fi";

const navItems = [
  { title: "Home", href: "/", icon: <HiOutlineHome size={22} /> },
  { title: "About", href: "/about", icon: <HiOutlineUser size={22} /> },
  {
    title: "Projects",
    href: "/projects",
    icon: <HiOutlineBriefcase size={22} />,
  },
  { title: "Skill", href: "/skill", icon: <HiOutlineCode size={22} /> },
  { title: "Blogs", href: "/blogs", icon: <HiOutlineBookOpen size={22} /> },
  { title: "Contact", href: "/contact", icon: <HiOutlineMail size={22} /> },
];

export default function Navbar() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1 px-4 py-2 bg-black/20 dark:bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl ring-1 ring-white/5">
        {/* Navigation Dock */}
        <FloatingDock items={navItems} />

        {/* Divider */}
        <div className="w-[1px] h-8 bg-white/10 mx-2" />

        {/* Right Section */}
        <div className="flex items-center gap-2">
          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            download
            className="p-3 text-white/60 hover:text-white hover:scale-110 transition-all duration-200"
            title="Resume"
          >
            <AiOutlineFilePdf size={22} />
          </a>

          {/* Calendly */}
          <a
            href="https://calendly.com/"
            target="_blank"
            rel="noreferrer"
            className="p-3 text-white/60 hover:text-white hover:scale-110 transition-all duration-200"
            title="Book a Call"
          >
            <FiCalendar size={20} />
          </a>

          {/* Status + Theme */}
          <div className="flex items-center gap-3 px-2">
            <AvailabilityBadge />
            <div className="w-[1px] h-4 bg-white/10" />
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
