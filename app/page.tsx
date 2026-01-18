"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import About from "@/components/pages/About";
import Experiences from "@/components/pages/Experiences";
import Journey from "@/components/pages/Journey";
import Skills from "@/components/pages/Skills";
import Projects from "@/components/pages/Projects";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <About />
        <Experiences />
        <Journey />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
