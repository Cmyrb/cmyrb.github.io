"use client";

import Hero from "@/components/ui/animated-shader-hero";

export default function Home() {
  return (
    <main>
      <Hero
        trustBadge={{
          text: "Cyber Operations & Visual Intelligence / Innovation · Barnstable, MA",
          
        }}
        headline={{
          line1: "Welcome to",
          line2: "Colby's Portfolio"
        }}
        subtitle="Currently looking for new opportunities in Cybersecurity & Software / Platform engineering."
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