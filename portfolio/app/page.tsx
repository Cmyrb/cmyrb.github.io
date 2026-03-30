"use client";

import Hero from "@/components/ui/animated-shader-hero";

export default function Home() {
  return (
    <main>
      <Hero
        trustBadge={{
          text: "Software Engineer · Brockton, MA",
          icons: ["⚡"]
        }}
        headline={{
          line1: "Welcome to",
          line2: "Colby's Portfolio"
        }}
        subtitle="I build fast, clean, and scalable software. Scroll to see my work."
        buttons={{
          primary: {
            text: "View Projects",
            onClick: () => console.log("projects")
          },
          secondary: {
            text: "Contact Me",
            onClick: () => console.log("contact")
          }
        }}
      />
    </main>
  );
}