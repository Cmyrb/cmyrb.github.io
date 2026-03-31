"use client";
import React, { useState } from "react";

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "education" | "skills">("experience");

  return (
    <section
      id="resume"
      className="min-h-screen bg-[#0a0a0f] px-6 py-24 border-t border-white/5"
    >
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <p className="text-orange-400 text-sm uppercase tracking-widest mb-3 font-medium">
          My Background
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Resume
        </h2>
        <p className="text-white/40 text-lg max-w-xl mx-auto">
          A full breakdown of my experience, education, and technical skills.
        </p>
      </div>

      {/* Name Card */}
      <div className="max-w-4xl mx-auto mb-8 p-6 rounded-2xl bg-white/3 border border-white/8 text-center">
        <h1 className="text-2xl font-bold text-white tracking-wide mb-1">COLBY MYRBECK</h1>
        <p className="text-white/50 text-sm">
          Barnstable, MA &nbsp;·&nbsp; (774) 994-0452 &nbsp;·&nbsp;
          <a href="mailto:Colbym0724@gmail.com" className="text-orange-400 hover:underline">Colbym0724@gmail.com</a>
          &nbsp;·&nbsp;
          <a href="https://linkedin.com/in/cmyrb" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:underline">LinkedIn</a>
        </p>
      </div>

      {/* Tab Nav */}
      <div className="max-w-4xl mx-auto mb-8 flex gap-2 p-1 rounded-xl bg-white/3 border border-white/8 w-fit mx-auto">
        {(["experience", "education", "skills"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 capitalize ${
              activeTab === tab
                ? "bg-orange-500 text-black"
                : "text-white/50 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto space-y-6">

        {/* EXPERIENCE */}
        {activeTab === "experience" && (
          <>
            <ResumeCard
              title="Systems Operations Intern"
              org="Sencorp White"
              location="Hyannis, MA"
              date="June 2023 – August 2025"
              bullets={[
                "Diagnosed and resolved OS, network, and hardware failures for 100+ Windows & Linux systems",
                "Led employee phishing training program, ensuring workforce education on safe online practices",
                "Installed, configured, and maintained enterprise hardware systems and storage infrastructure",
                "Investigated endpoint security issues involving OS configuration, permissions, and system failures",
                "Supported incident response using a ticketing system, prioritizing issues based on operations impact",
                "Assisted in maintaining system, network, and server integrity across 100+ endpoints",
              ]}
            />
            <ResumeCard
              title="Bouncer / Shift Lead"
              org="Anejo Restaurant"
              location="Hyannis, MA"
              date="May 2024 – Current"
              bullets={[
                "Organized and directed a team of security guards to ensure safety across the property",
                "De-escalated conflicts in a professional manner, maintaining compliance with procedures",
                "Conducted patrols, identifying risks, and intervened with suspicious or unsafe activities",
                "Verified 21+ age compliance by checking IDs and controlling entrance and exit points",
              ]}
            />
            <div className="p-6 rounded-2xl bg-white/3 border border-white/8">
              <p className="text-orange-400 text-xs uppercase tracking-widest mb-3 font-medium">Leadership</p>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">▸</span>Shift Lead — Anejo Security Division</li>
                <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">▸</span>Division I Athlete — Football, Stonehill College</li>
                <li className="flex items-start gap-2"><span className="text-orange-400 mt-1">▸</span>Power Skating Coach — Laura Stamm Power Skating</li>
              </ul>
            </div>
          </>
        )}

        {/* EDUCATION */}
        {activeTab === "education" && (
          <ResumeCard
            title="Bachelor of Arts — Cyber Operations & Visual Intelligence"
            org="Stonehill College"
            location="Easton, MA"
            date="Sept 2022 – May 2026 (Expected)"
            bullets={[
              "Computer Science Coursework: Programming, Operating Systems, Data Structures, Discrete Mathematics, Theory of Computation, Cybersecurity",
              "Interdisciplinary Concentration: Criminology, Machine Learning, Image Processing, Image Deconstruction",
              "Technical coursework equivalent to Bachelor of Science",
            ]}
          />
        )}

        {/* SKILLS */}
        {activeTab === "skills" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SkillCard label="Languages" items={["C", "Java", "Python", "Bash"]} />
            <SkillCard label="Systems" items={["Linux", "Windows", "Docker"]} />
            <SkillCard label="Infrastructure" items={["Hardware Troubleshooting", "Networking", "Endpoint Security"]} />
            <SkillCard label="Tools" items={["Git", "OpenCV", "Microsoft 365 Admin", "BIOS/UEFI Configuration"]} />
            <SkillCard label="Other" items={["AutoCAD", "Excel", "3D Printing", "Web Design", "Adobe Premiere Pro", "Photoshop"]} />
          </div>
        )}
      </div>
    </section>
  );
}

function ResumeCard({
  title, org, location, date, bullets,
}: {
  title: string; org: string; location: string; date: string; bullets: string[];
}) {
  return (
    <div className="p-6 rounded-2xl bg-white/3 border border-white/8 hover:border-orange-500/30 transition-colors duration-300">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
        <div>
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <p className="text-orange-400 text-sm font-medium">{org}</p>
        </div>
        <div className="text-right shrink-0">
          <p className="text-white/50 text-sm">{date}</p>
          <p className="text-white/30 text-xs">{location}</p>
        </div>
      </div>
      <ul className="space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2 text-white/65 text-sm leading-relaxed">
            <span className="text-orange-400 mt-1 shrink-0">▸</span>
            {b}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SkillCard({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="p-5 rounded-2xl bg-white/3 border border-white/8">
      <p className="text-orange-400 text-xs uppercase tracking-widest mb-3 font-medium">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((item, i) => (
          <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 border border-white/10">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}