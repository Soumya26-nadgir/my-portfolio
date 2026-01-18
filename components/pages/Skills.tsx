"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiFigma,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import FluidGlass from "../ui/FluidGlass";

interface Skill {
  name: string;
  icon: React.ElementType;
  level: number;
  color: string;
}

// Placeholder skills - replace with your actual skills
const skills: Skill[] = [
  { name: "React", icon: SiReact, level: 90, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, level: 85, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, level: 88, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, level: 92, color: "#F7DF1E" },
  { name: "Tailwind CSS", icon: SiTailwindcss, level: 90, color: "#06B6D4" },
  { name: "HTML5", icon: SiHtml5, level: 95, color: "#E34F26" },
  { name: "CSS3", icon: SiCss3, level: 93, color: "#1572B6" },
  { name: "Node.js", icon: SiNodedotjs, level: 75, color: "#339933" },
  { name: "Git", icon: SiGit, level: 85, color: "#F05032" },
  { name: "Figma", icon: SiFigma, level: 80, color: "#F24E1E" },
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 rounded-2xl p-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Technologies and tools I work with
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="h-full rounded-xl"
                >
                  <FluidGlass
                    className="rounded-xl p-6 group cursor-pointer h-full"
                    blur={15}
                    opacity={0.1}
                  >
                    <div className="flex flex-col items-center space-y-4">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon
                          className="text-5xl"
                          style={{ color: skill.color }}
                        />
                      </motion.div>
                      <h3 className="font-semibold text-white text-center">
                        {skill.name}
                      </h3>
                      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                  </FluidGlass>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
