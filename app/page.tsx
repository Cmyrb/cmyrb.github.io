"use client";

import Hero from "@/components/ui/animated-shader-hero";
import AboutSection from "@/components/about-section";
import ProjectsSection from "@/components/projects-section";
import { Footer } from "@/components/ui/footer-section";
import ResumeSection from "@/components/resume-section";

export default function Home() {
  return (
    <main>
      <Hero
        trustBadge={{
          text: "- Cyber Operations · Boston, MA -",
          //icons: ["⚡"]
        }}
        headline={{
          line1: "Colby",
          line2: "Myrbeck"
        }}
        subtitle="Seeking Cybersecurity & Software / System Engineering roles."
        buttons={{
  primary: {
    text: "View Projects",
    onClick: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  },
  secondary: {
    text: "About Me",
    onClick: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  },
  tertiary: {
    text: "Contact Me",
    onClick: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
}}
      />
      <AboutSection />
      <ProjectsSection />
      <ResumeSection />
      <Footer />
    </main>
  );
}