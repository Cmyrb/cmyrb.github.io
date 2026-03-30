'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Code2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const contactLinks = [
  {
    title: 'Email',
    value: 'colbym0724@gmail.com',
    href: 'mailto:colbym0724@gmail.com',
    icon: FaEnvelope,
  },
  {
    title: 'Phone',
    value: '+1 (774) 994-0452',
    href: 'tel:+7749940452',
    icon: FaPhone,
  },
  {
    title: 'GitHub',
    value: 'github.com/cmyrb',
    href: 'https://github.com/cmyrb',
    icon: FaGithub,
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/cmyrb',
    href: 'https://linkedin.com/in/ColbyMyrbeck',
    icon: FaLinkedin,
  },
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full bg-[#0a0a0f] border-t border-white/5 px-6 py-16 lg:py-20"
    >
      {/* Top glow line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/3 bg-orange-500/30 blur-sm rounded-full" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <AnimatedContainer delay={0.1} className="text-center mb-14">
          <p className="text-orange-400 text-sm uppercase tracking-widest mb-3 font-medium">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <p className="text-white/40 text-lg max-w-md mx-auto">
            Open to opportunities, collaborations, or any questions.
          </p>
        </AnimatedContainer>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactLinks.map((contact, index) => (
            <AnimatedContainer key={contact.title} delay={0.2 + index * 0.1}>
              <a
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex flex-col gap-3 p-5 rounded-2xl bg-white/3 border border-white/8 hover:border-orange-500/30 hover:bg-orange-500/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-300">
                  <contact.icon className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                    {contact.title}
                  </p>
                  <p className="text-white/80 text-sm font-medium group-hover:text-white transition-colors duration-300 break-all">
                    {contact.value}
                  </p>
                </div>
              </a>
            </AnimatedContainer>
          ))}
        </div>

        {/* Bottom bar */}
        <AnimatedContainer delay={0.6}>
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                <Code2 className="w-4 h-4 text-orange-400" />
              </div>
              <span className="text-white/20 text-xs">
                © {new Date().getFullYear()} Colby. Built with Next.js · TypeScript · Tailwind CSS
              </span>
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-white/20 hover:text-orange-400 text-xs transition-colors duration-300"
            >
              ↑ Back to top
            </button>
          </div>
        </AnimatedContainer>

      </div>
    </footer>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof motion.div>['className'];
  children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <>{children}</>;
  return (
    <motion.div
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}