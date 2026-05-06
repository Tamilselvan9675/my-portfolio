import React from "react";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { LuGithub, LuLinkedin } from "react-icons/lu";
import { RiTwitterXLine } from "react-icons/ri";
import {
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
  SiVite,
  SiJest,
  SiGreensock,
  SiClaude,
  SiGooglegemini,
  SiN8N,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";

const DEFAULT_SIZE = 16;
const DEFAULT_CLASSNAME = "text-sm text-gray-300";

export const techIconMap = {
  react: { Icon: FaReact, size: DEFAULT_SIZE, className: DEFAULT_CLASSNAME },
  "react.js": {
    Icon: FaReact,
    size: DEFAULT_SIZE,
    className: DEFAULT_CLASSNAME,
  },
  "react js": {
    Icon: FaReact,
    size: DEFAULT_SIZE,
    className: DEFAULT_CLASSNAME,
  },

  javascript: {
    Icon: DiJavascript1,
    size: DEFAULT_SIZE,
    className: DEFAULT_CLASSNAME,
  },
  js: { Icon: DiJavascript1, size: DEFAULT_SIZE, className: DEFAULT_CLASSNAME },

  typescript: {
    Icon: SiTypescript,
    size: DEFAULT_SIZE,
    className: DEFAULT_CLASSNAME,
  },
  ts: { Icon: SiTypescript, size: DEFAULT_SIZE, className: DEFAULT_CLASSNAME },

  redux: { Icon: SiRedux, size: DEFAULT_SIZE, className: DEFAULT_CLASSNAME },

  "tailwind css": {
    Icon: SiTailwindcss,
    size: DEFAULT_SIZE,
    className: DEFAULT_CLASSNAME,
  },
  tailwind: {
    Icon: SiTailwindcss,
    size: DEFAULT_SIZE,
    className: DEFAULT_CLASSNAME,
  },

  "next.js": {
    Icon: SiNextdotjs,
    size: DEFAULT_SIZE,
    className: DEFAULT_CLASSNAME,
  },
  nextjs: {
    Icon: SiNextdotjs,
    size: DEFAULT_SIZE,
    className: DEFAULT_CLASSNAME,
  },
  next: { Icon: SiNextdotjs, size: DEFAULT_SIZE, className: DEFAULT_CLASSNAME },

  graphql: {
    Icon: SiGraphql,
    size: DEFAULT_SIZE,
    className: DEFAULT_CLASSNAME,
  },

  gsap: { Icon: SiGreensock, size: DEFAULT_SIZE, className: DEFAULT_CLASSNAME },
  greensock: {
    Icon: SiGreensock,
    size: DEFAULT_SIZE,
    className: DEFAULT_CLASSNAME,
  },

  vite: { Icon: SiVite, size: DEFAULT_SIZE, className: DEFAULT_CLASSNAME },

  jest: { Icon: SiJest, size: DEFAULT_SIZE, className: DEFAULT_CLASSNAME },

  "framer motion": {
    Icon: TbBrandFramerMotion,
    size: DEFAULT_SIZE,
    className: DEFAULT_CLASSNAME,
  },
  framer: {
    Icon: TbBrandFramerMotion,
    size: DEFAULT_SIZE,
    className: DEFAULT_CLASSNAME,
  },

  node: { Icon: FaNodeJs, size: DEFAULT_SIZE, className: DEFAULT_CLASSNAME },
  "node.js": {
    Icon: FaNodeJs,
    size: DEFAULT_SIZE,
    className: DEFAULT_CLASSNAME,
  },

  git: { Icon: FaGitAlt, size: DEFAULT_SIZE, className: DEFAULT_CLASSNAME },

  claude: { Icon: SiClaude, size: DEFAULT_SIZE, className: DEFAULT_CLASSNAME },
  gemini: {
    Icon: SiGooglegemini,
    size: DEFAULT_SIZE,
    className: DEFAULT_CLASSNAME,
  },
  "google gemini": {
    Icon: SiGooglegemini,
    size: DEFAULT_SIZE,
    className: DEFAULT_CLASSNAME,
  },
  n8n: { Icon: SiN8N, size: DEFAULT_SIZE, className: DEFAULT_CLASSNAME },

  github: { Icon: LuGithub, size: DEFAULT_SIZE, className: DEFAULT_CLASSNAME },
  linkedin: {
    Icon: LuLinkedin,
    size: DEFAULT_SIZE,
    className: DEFAULT_CLASSNAME,
  },
  twitter: {
    Icon: RiTwitterXLine,
    size: DEFAULT_SIZE,
    className: DEFAULT_CLASSNAME,
  },
};

export function toTechPills(techStack) {
  if (!Array.isArray(techStack)) return [];

  return techStack.map(raw => {
    const name = String(raw ?? "").trim();
    const key = name.toLowerCase();
    const mapped = techIconMap[key];

    return {
      name,
      Icon: mapped?.Icon ?? null,
      size: mapped?.size ?? DEFAULT_SIZE,
      className: mapped?.className ?? DEFAULT_CLASSNAME,
    };
  });
}
