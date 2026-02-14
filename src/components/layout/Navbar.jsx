import { NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";
import AvailabilityBadge from "../ui/AvailabilityBadge";

// Import React Icons (Adjust icons to your preference)
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

const navLinks = [
  { to: "/", label: "Home", icon: <HiOutlineHome size={22} /> },
  { to: "/about", label: "About", icon: <HiOutlineUser size={22} /> },
  {
    to: "/projects",
    label: "Projects",
    icon: <HiOutlineBriefcase size={22} />,
  },
  { to: "/skill", label: "Skill", icon: <HiOutlineCode size={22} /> },
  { to: "/blogs", label: "Blogs", icon: <HiOutlineBookOpen size={22} /> },
  { to: "/contact", label: "Contact", icon: <HiOutlineMail size={22} /> },
];

const linkClass = ({ isActive }) =>
  `relative flex items-center justify-center p-3 transition-all duration-300 rounded-full group ${
    isActive
      ? "bg-white/20 text-white shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-md border border-white/10"
      : "text-white/60 hover:text-white hover:bg-white/5"
  }`;

export default function Navbar() {
  return (
    // Floating Pill Container
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1 px-4 py-2 bg-black/20 dark:bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem] shadow-2xl ring-1 ring-white/5">
        {/* Navigation Links */}
        <div className="flex items-center gap-1">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClass}
              title={link.label}
            >
              {link.icon}
              {/* Tooltip for accessibility */}
              <span className="absolute -top-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100">
                {link.label}
              </span>
            </NavLink>
          ))}
        </div>

        {/* Subtle Vertical Divider */}
        <div className="w-[1px] h-8 bg-white/10 mx-2" />

        {/* Actions Section */}
        <div className="flex items-center gap-2">
          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="p-3 text-white/60 hover:text-white transition-colors"
            title="Resume"
          >
            <AiOutlineFilePdf size={22} />
          </a>

          {/* Book a Call */}
          <a
            href="https://calendly.com/"
            target="_blank"
            className="p-3 text-white/60 hover:text-white transition-colors"
            title="Book a Call"
          >
            <FiCalendar size={20} />
          </a>

          {/* Badge & Theme Toggle */}
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
