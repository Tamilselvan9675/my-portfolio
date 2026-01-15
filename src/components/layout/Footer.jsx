import AvailabilityBadge from "../ui/AvailabilityBadge";


export default function Footer() {
  return (
    <footer className="border-t py-6 text-center text-sm bg-white dark:bg-slate-900 text-black dark:text-white">
      <div className="flex flex-col items-center gap-3">
        <AvailabilityBadge />

        <p>© {new Date().getFullYear()} Tamilselvan. All rights reserved.</p>

        <div className="flex gap-4">
          <a href="https://github.com/" target="_blank">GitHub</a>
          <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
          <a href="mailto:youremail@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
