"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import ProfileCard from "../ui/ProfileCard";
import profileImage from "../../assets/images/avatar.png";

export default function About() {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/Soumya26-nadgir",
      label: "GitHub",
    },
    {
      icon: FaLinkedin,
      href: "https://www.linkedin.com/in/soumya-nadgir-100b76155/",
      label: "LinkedIn",
    },
    {
      icon: FaEnvelope,
      href: "mailto:nadgir.soumya26@gmail.com",
      label: "Email",
    },
  ];

  const handleContactClick = () => {
    window.location.href = "mailto:nadgir.soumya26@gmail.com";
  };
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 py-20 pt-32"
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="w-full h-[600px] flex items-center justify-center relative">
              <ProfileCard
                name="Soumya Nadgir"
                title="Frontend Developer"
                handle="Soumya26-nadgir"
                status="Available for Hire"
                contactText="Contact Me"
                avatarUrl={profileImage.src}
                innerGradient="none"
                className="w-full max-w-[320px]"
                enableMobileTilt={false}
                showUserInfo={false}
                onContactClick={handleContactClick}
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm a{" "}
              <span className="text-gradient">Frontend Developer</span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {/* Add your about text here */}
              Passionate about creating beautiful, interactive, and
              user-friendly web experiences. I specialize in building modern,
              responsive applications with cutting-edge technologies.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass p-4 rounded-full hover:bg-primary-500/20 transition-all group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <social.icon className="text-2xl text-gray-300 group-hover:text-primary-400 transition-colors" />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
