import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  useTransform,
} from "framer-motion";
import ProjectCard from "./ProjectCard";

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.15 },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
};

export default function TimelineCard({ projects }) {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const avatarY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", latest => {
    const totalProjects = projects.length;
    let newIndex = Math.floor(latest * totalProjects);
    if (newIndex >= totalProjects) newIndex = totalProjects - 1;
    if (newIndex < 0) newIndex = 0;
    if (newIndex !== activeIndex) {
      setActiveIndex(newIndex);
    }
  });

  if (!projects || projects.length === 0) return null;

  const activeProject = projects[activeIndex];

  return (
    <section
      ref={containerRef}
      className="relative w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-start gap-8 lg:gap-12"
    >
      {/* Left Side: Sticky Text Information */}
      <div className="hidden lg:flex sticky top-0 h-screen flex-1 max-w-[400px] flex-col justify-center z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            variants={textContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="text-white space-y-6"
          >
            <motion.div
              variants={textItemVariants}
              className="flex items-center gap-4"
            >
              <div className="h-[2px] w-6 bg-red-500"></div>
              <h2 className="text-3xl font-bold tracking-wide">
                {activeProject.title}
              </h2>
            </motion.div>

            <motion.p
              variants={textItemVariants}
              className="text-gray-300 text-sm leading-relaxed"
            >
              {activeProject.mainDescription}
            </motion.p>

            <motion.ul variants={textContainerVariants} className="space-y-4">
              {activeProject.features?.map((feature, idx) => (
                <motion.li
                  key={idx}
                  variants={textItemVariants}
                  className="flex items-start gap-3 text-sm text-gray-300"
                >
                  <span className="text-red-500 mt-0.5">✦</span>
                  <span className="leading-relaxed">{feature}</span>
                </motion.li>
              ))}
            </motion.ul>

            <div className="flex flex-wrap gap-3 pt-4">
              {activeProject.techStack?.map((tech, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                  }}
                  className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-700 bg-black/50 text-xs font-medium text-gray-300 shadow-sm"
                >
                  <span>{tech.icon}</span>
                  {tech.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Middle Side: Timeline Progress Bar */}
      <div className="hidden lg:flex sticky top-0 h-screen w-12 flex-col items-center justify-center py-32 z-10">
        <div className="relative w-2 h-full bg-[#111] rounded-full border border-gray-800">
          <motion.div
            className="absolute top-0 w-full bg-gradient-to-b from-[#111] via-yellow-700 to-yellow-600 rounded-full origin-top"
            style={{ height: "100%", scaleY: scrollYProgress }}
          />
          <motion.div
            className="absolute -left-[14px] w-8 h-8 rounded-full border-[3px] border-[#111] bg-black overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.8)] z-10"
            style={{ top: avatarY, y: "-50%" }}
          >
            <img
              src="/avatar-placeholder.png"
              alt="Progress Avatar"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Right Side: Scrolling Project Cards */}
      <div className="flex-[2] flex flex-col pt-32 pb-32 gap-16">
        {projects.map(project => (
          <div
            key={project.id}
            className="w-full flex items-center justify-center min-h-[60vh]"
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
