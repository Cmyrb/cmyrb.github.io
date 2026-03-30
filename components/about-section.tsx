"use client";
import { CircularTestimonials } from "@/components/ui/circular-testimonials";

const slides = [
  {
    name: "Who I Am",
    designation: "Colby Myrbeck",
    quote:
      "I’m a hands-on problem solver with experience in mechanical work, security, and technical projects. As a college student and former collegiate athlete, communicate clearly and effectively under pressure and adapt quickly to new challenges.",
    src: "/PortfolioHS.jpg",
  },
  {
    name: "Academic background",
    designation: "Stonehill College",
    quote:
      "I've pursued computer science with a focus on cyber operations — Programming, Operating Systems, Data Structures, Discrete Mathematics, Theory of Computation, Cybersecurity. Interdisciplinary Concentration: Criminology, Machine Learning, Image Processing, Image Deconstruction ",
    src: "/PortfolioST.jpg",
  },
  {
    name: "What are you doing here",
    designation: "Under Construction",
    quote:
      "Nothing here for now...",
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&auto=format&fit=crop",
  },
  
 
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center px-6 py-24 border-t border-white/5"
    >
      {/* Section header */}
      <div className="max-w-6xl w-full mx-auto mb-12 text-center">
        <p className="text-orange-400 text-sm uppercase tracking-widest mb-3 font-medium">
          Learn A Bit
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About Me
        </h2>
       
      </div>

      {/* Carousel */}
      <div className="w-full max-w-6xl mx-auto flex justify-center">
        <CircularTestimonials
          testimonials={slides}
          autoplay={true}
          colors={{
            name: "#ffffff",
            designation: "#f97316",
            testimony: "rgba(255,255,255,0.65)",
            arrowBackground: "#1a1a2e",
            arrowForeground: "#f1f1f7",
            arrowHoverBackground: "#f97316",
          }}
          fontSizes={{
            name: "24px",
            designation: "14px",
            quote: "17px",
          }}
        />
      </div>

      {/* Dot indicators */}
      <div className="flex gap-2 mt-8">
        {slides.map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-white/20"
          />
        ))}
      </div>
    </section>
  );
}