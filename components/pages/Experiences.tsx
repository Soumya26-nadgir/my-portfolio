"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import FluidGlass from "../ui/FluidGlass";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

// Placeholder data - replace with your actual experiences
const experiences: Experience[] = [
  {
    title: "Senior Frontend Developer",
    company: "Paktolus Solutions Pvt Ltd",
    period: "Jan 2025 - Present",
    description:
      "Leading frontend development initiatives and building scalable web applications.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Frontend Developer",
    company: "Paktolus Solutions Pvt Ltd",
    period: "Aug 2021 - Jan 2025",
    description:
      "Developed and maintained multiple client-facing applications with modern frameworks.",
    technologies: ["React", "JavaScript", "SCSS", "Redux", "Jira"],
  },
  {
    title: "Junior Frontend Developer",
    company: "Micro Technologies",
    period: "Jan 2021 - Apr 2021",
    description:
      "Built responsive websites and collaborated with design teams to implement UI/UX designs.",
    technologies: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="min-h-screen py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 rounded-2xl p-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Experiences</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Professional journey and career milestones
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-700 hidden md:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-8 top-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-gray-900 hidden md:block" />

                  <div className="ml-0 md:ml-16">
                    <FluidGlass
                      className="rounded-xl p-6 group"
                      blur={15}
                      opacity={0.1}
                    >
                      <div className="flex items-start gap-4">
                        <div className="glass-dark p-4 rounded-lg group-hover:bg-primary-500/20 transition-all">
                          <FaBriefcase className="text-2xl text-primary-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className="text-2xl font-bold text-white">
                              {exp.title}
                            </h3>
                            <span className="text-primary-400 font-semibold text-sm">
                              {exp.period}
                            </span>
                          </div>
                          <p className="text-primary-300 text-lg mb-3">
                            {exp.company}
                          </p>
                          <p className="text-gray-300 mb-4 leading-relaxed">
                            {exp.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm border border-primary-500/30"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </FluidGlass>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
