import { NavLink } from "react-router-dom";
import ThemeToggle from "../ui/ThemeToggle";
import AvailabilityBadge from "../ui/AvailabilityBadge";

const linkClass = ({ isActive }) =>
  `hover:text-primary ${
    isActive ? "text-primary font-semibold" : ""
  }`;

export default function Navbar() {
  return (
    <header className="h-16 border-b bg-white dark:bg-slate-900">
      <nav className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <div className="font-bold text-lg text-black dark:text-white">
          MyPortfolio
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-sm text-black dark:text-white">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/skill" className={linkClass}>Skill</NavLink>
          <NavLink to="/blogs" className={linkClass}>Blogs</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-3 py-1 border rounded hover:bg-primary hover:text-white transition"
          >
            Resume
          </a>

          {/* Book a Call */}
          <a
            href="https://calendly.com/"
            target="_blank"
            className="px-3 py-1 bg-primary text-white rounded hover:opacity-90"
          >
            Book a Call
          </a>

          {/* Book a Call */}
          <a
            href="https://calendly.com/"
            target="_blank"
            className="px-3 py-1 bg-primary text-white rounded hover:opacity-90"
          >
            <AvailabilityBadge />
          </a>  

          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
