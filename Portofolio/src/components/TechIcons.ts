// config/techIcons.ts
import {
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiBootstrap,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiPython,
} from "react-icons/si";
import { type IconType } from "react-icons";
import { FaJava } from "react-icons/fa";

export type TechIcon = {
  icon: IconType;
  colorClass: string;
  label?: string;
};

export const techIcons: TechIcon[] = [
  { icon: SiReact, colorClass: "text-sky-500", label: "React" },
  { icon: SiTailwindcss, colorClass: "text-teal-400", label: "Tailwind CSS" },
  { icon: SiRedux, colorClass: "text-purple-500", label: "Redux" },
  { icon: SiBootstrap, colorClass: "text-purple-400", label: "Boostrap" },
  { icon: SiJavascript, colorClass: "text-yellow-300", label: "JavaScript" },
  { icon: SiTypescript, colorClass: "text-blue-600", label: "TypeScript" },
  //----------------------------------------------------------------------------
  { icon: SiNodedotjs, colorClass: "text-green-400", label: "Node.js" },
  {
    icon: SiExpress,
    colorClass: "text-gray-800 bg-gray-300 p-1 rounded-lg",
    label: "ExpressJS",
  },
  { icon: FaJava, colorClass: "text-orange-400", label: "Java" },
  { icon: SiPython, colorClass: "text-blue-400", label: "Python" },
  //----------------------------------------------------------------------------
  { icon: SiMongodb, colorClass: "text-green-500", label: "MongoDB" },
  { icon: SiMysql, colorClass: "text-red-500", label: "MySQL" },
  { icon: SiPostgresql, colorClass: "text-blue-700", label: "PostgreSQL" },
  //----------------------------------------------------------------------------
  { icon: SiGit, colorClass: "text-orange-500", label: "Git" },
  { icon: SiGithub, colorClass: "text-gray-600", label: "GitHub" },
  { icon: SiRedux, colorClass: "text-purple-500", label: "Redux" },
  { icon: SiFigma, colorClass: "text-pink-500", label: "Figma" },
];
