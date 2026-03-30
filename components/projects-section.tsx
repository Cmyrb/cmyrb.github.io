"use client";
import { GlowCard } from "@/components/ui/spotlight-card";
import { ExternalLink, Code2, GitBranch } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
  glowColor?: 'blue' | 'purple' | 'green' | 'red' | 'orange';
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "Details",
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/cmyrb",
    glowColor: "orange",
  },
  {
    title: "Project Two",
    description: "Details",
    tags: ["Python", "FastAPI", "Docker"],
    github: "https://github.com/cmyrb",
    live: "#",
    glowColor: "purple",
  },
  {
    title: "Project Three",
    description: "Details",
    tags: ["TypeScript", "Next.js", "Tailwind"],
    github: "https://github.com/cmyrb",
    live: "#",
    glowColor: "blue",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0a0a0f] px-6 py-24"
    >
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <p className="text-orange-400 text-sm uppercase tracking-widest mb-3 font-medium">
          My Work
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Featured Projects
        </h2>
        <p className="text-white/40 text-lg max-w-xl mx-auto">
          A selection of things I've built. Each one taught me something new.
        </p>
      </div>

      {/* Cards row */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <GlowCard
            key={i}
            glowColor={project.glowColor as "green" | "orange" | "red"}
            className="p-6 flex flex-col gap-4 min-h-[320px]"
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
              <Code2 className="w-5 h-5 text-orange-400" />
            </div>

            {/* Title + description */}
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg mb-2">
                {project.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, j) => (
                <span
                  key={j}
                  className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/60 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-2 border-t border-white/10">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white/50 hover:text-white text-sm transition-colors"
                >
                  <GitBranch className="w-4 h-4" />
                  Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-white/50 hover:text-orange-400 text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live
                </a>
              )}
            </div>
          </GlowCard>
        ))}
      </div>
    </section>
  );
}