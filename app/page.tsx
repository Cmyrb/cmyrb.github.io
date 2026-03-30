"use client";

import Hero from "@/components/ui/animated-shader-hero";
import ProjectsSection from "@/components/projects-section";

export default function Home() {
  return (
    <main>
      <Hero
        trustBadge={{
          text: "Cyber Operations & Visual Intelligence / Innovation · Barnstable, MA",
          icons: ["⚡"]
        }}
        headline={{
          line1: "Welcome to",
          line2: "Colby's Portfolio"
        }}
        subtitle="Seeking Cybersecurity, Software and Systems Engineering opportunities."
        buttons={{
          primary: {
            text: "View Projects",
            onClick: () => {
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }
          },
          secondary: {
            text: "Contact Me",
            onClick: () => console.log("contact")
          }
        }}
      />
      <ProjectsSection />
    </main>
  );
}