"use client";

import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Experience",
    description: "A headless commerce platform with lightning-fast page loads and dynamic cart management.",
    tags: ["Next.js", "Tailwind", "Shopify"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Interactive analytics dashboard featuring real-time data visualization and customizable widgets.",
    tags: ["React", "Framer Motion", "Recharts"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Web3 NFT Platform",
    description: "Decentralized application for minting and trading digital assets with smart contract integration.",
    tags: ["TypeScript", "Ethers.js", "Solidity"],
    demoUrl: "#",
    githubUrl: "#",
  }
];

export default function Projects() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Work</h2>
          <p className="text-zinc-400 text-lg max-w-xl">
            A selection of my recent projects. Building scalable applications with modern technologies.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/80 transition-all duration-300 backdrop-blur-sm flex flex-col h-full"
            >
              <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-zinc-400 mb-8 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-zinc-800/50 text-zinc-300 border border-zinc-700/50">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-zinc-800/50 mt-auto">
                <a href={project.demoUrl} className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors">
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
                <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                  <Github className="w-4 h-4" /> Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}