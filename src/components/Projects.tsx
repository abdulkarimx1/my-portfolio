"use client";

import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { ExternalLink, Code } from "lucide-react";
import { MouseEvent } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Experience",
    description: "A headless commerce platform with lightning-fast page loads and dynamic cart management.",
    tags: ["Next.js", "Tailwind", "Shopify"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Interactive analytics dashboard featuring real-time data visualization and customizable widgets.",
    tags: ["React", "Framer Motion", "Recharts"],
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "Web3 NFT Platform",
    description: "Decentralized application for minting and trading digital assets with smart contract integration.",
    tags: ["TypeScript", "Ethers.js", "Solidity"],
    demoUrl: "#",
    codeUrl: "#",
  }
];

export default function Projects() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section id="projects" className="py-32 px-6 bg-black relative">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Featured Work</h2>
          <p className="text-zinc-400 text-lg max-w-xl leading-relaxed">
            A selection of my recent projects. Building scalable applications with modern technologies.
          </p>
        </motion.div>

        {/* Spotlight Grid Container */}
        <div 
          onMouseMove={handleMouseMove}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative group"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.01 }}
              className="relative p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 overflow-hidden backdrop-blur-xl flex flex-col h-full transition-colors hover:border-zinc-700"
            >
              {/* Mouse-tracking dynamic spotlight highlight */}
              <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
                style={{
                  background: useMotionTemplate`
                    radial-gradient(
                      400px circle at ${mouseX}px ${mouseY}px,
                      rgba(59, 130, 246, 0.12),
                      transparent 80%
                    )
                  `,
                }}
              />

              <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{project.title}</h3>
              <p className="text-zinc-400 mb-8 flex-grow leading-relaxed relative z-10">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-zinc-800/60 text-zinc-300 border border-zinc-700/50">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-6 pt-4 border-t border-zinc-800/60 mt-auto relative z-10">
                <a href={project.demoUrl} className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a href={project.codeUrl} className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                  <Code className="w-4 h-4" /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}