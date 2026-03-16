"use client";

import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaRocket, FaTrophy } from "react-icons/fa";
import FluidGlass from "../ui/FluidGlass";

interface JourneyStep {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const journeySteps: JourneyStep[] = [
  {
    year: "2020",
    title: "The Fundamentals",
    description:
      "Started by building static web pages, learning the core building blocks of the web and transforming UI designs into interactive code.",
    icon: FaCode,
  },
  {
    year: "2021",
    title: "The Framework Era",
    description:
      "Transitioned into building robust SPAs. Mastered React, Redux, and SCSS while tackling complex state management at Paktolus.",
    icon: FaRocket,
  },
  {
    year: "2025",
    title: "Mastering the Craft",
    description:
      "Shifted focus towards modern full-stack tools. Embraced Next.js, TypeScript, and Tailwind CSS to build lightning-fast web apps.",
    icon: FaGraduationCap,
  },
  {
    year: "2026",
    title: "Next-Level Engineering",
    description:
      "Currently engineering high-impact, responsive applications at Elsevier, continuously pushing the boundaries of modern web experiences.",
    icon: FaTrophy,
  },
];

export default function Journey() {
  return (
    <section id="journey" className="min-h-screen py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 rounded-2xl p-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-gray-400 text-lg">
              The path that led me to where I am today
            </p>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full relative rounded-2xl"
                >
                  <FluidGlass
                    className="rounded-2xl p-6 h-full group cursor-pointer"
                    blur={15}
                    opacity={0.1}
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <motion.div
                        className="glass-dark p-4 rounded-full group-hover:bg-primary-500/20 transition-all"
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="text-3xl text-primary-400" />
                      </motion.div>
                      <div className="text-primary-400 font-bold text-lg">
                        {step.year}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </FluidGlass>

                  {/* Connector Line (hidden on last item) */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-500 to-transparent" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
