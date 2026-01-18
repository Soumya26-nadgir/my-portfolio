"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaTimes } from "react-icons/fa";
import FluidGlass from "../ui/FluidGlass";

interface Project {
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  githubUrl: string;
  liveUrl: string;
  technologies: string[];
}

// Placeholder projects - replace with your actual projects
const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, and secure checkout.",
    image: "/api/placeholder/600/400",
    videoUrl: "https://example.com/video1.mp4",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "/api/placeholder/600/400",
    videoUrl: "https://example.com/video2.mp4",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
    image: "/api/placeholder/600/400",
    videoUrl: "https://example.com/video3.mp4",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
  },
  {
    title: "MineSweeper Game",
    description:
      "A classic Minesweeper game built with React and TypeScript. Features include different difficulty levels, timer, and score tracking.",
    image: "/api/placeholder/600/400",
    videoUrl: "https://example.com/video3.mp4",
    githubUrl: "https://github.com/Soumya26-nadgir/minesweeper",
    liveUrl: "https://minesweeper-five-phi.vercel.app/",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
];

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="projects" className="min-h-screen py-20 px-4 bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 rounded-2xl p-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg">
              Showcase of my recent work and contributions
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-full rounded-2xl overflow-hidden"
              >
                <FluidGlass
                  className="h-full rounded-2xl overflow-hidden group"
                  blur={15}
                  opacity={0.1}
                >
                  {/* Project Image/Video Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-primary-500/20 to-primary-700/20 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-primary-400/30">FD</div>
                    </div>

                    {/* Video Play Button */}
                    {project.videoUrl && (
                      <motion.button
                        onClick={() =>
                          setSelectedVideo(project.videoUrl || null)
                        }
                        className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-all"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="glass p-4 rounded-full">
                          <FaPlay className="text-3xl text-white ml-1" />
                        </div>
                      </motion.button>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs border border-primary-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 pt-4">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-primary-500/20 transition-all flex-1 justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="text-primary-400" />
                        <span className="text-sm">Code</span>
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg hover:shadow-lg hover:shadow-primary-500/50 transition-all flex-1 justify-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="text-white" />
                        <span className="text-sm text-white">Live</span>
                      </motion.a>
                    </div>
                  </div>
                </FluidGlass>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary-400 transition-colors"
              >
                <FaTimes size={24} />
              </button>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <video
                  src={selectedVideo}
                  controls
                  autoPlay
                  className="w-full h-full"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
