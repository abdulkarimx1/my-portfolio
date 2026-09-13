"use client";

import TransitionLink from "./TransitionLink";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export type Project = { number: string; slug: string; title: string; category: string; year: string; description: string; tone: string; };

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });
  const rotate = useTransform(sx, [-60, 60], [-1.2, 1.2]);
  return <motion.article className="project-card" initial={{ opacity: 0, y: 80 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .95, delay: index * .08 }}>
    <TransitionLink href={`/brands/${project.slug}`} title={project.title} className="project-link" data-cursor="project">
      <div className={`project-visual ${project.tone}`} onPointerMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); x.set((e.clientX-r.left-r.width/2)*.06); y.set((e.clientY-r.top-r.height/2)*.06); }} onPointerLeave={() => { x.set(0); y.set(0); }}>
        <motion.div className="project-art" style={{ x: sx, y: sy, rotate }}>
          <span>{project.title}</span><b>{project.number}</b><i />
        </motion.div>
        <div className="project-overlay" />
        <div className="project-view">View project <ArrowUpRight size={17} /></div>
      </div>
      <div className="project-info"><div><span className="project-number">{project.number}</span><h3>{project.title}</h3></div><div className="project-side"><span>{project.category}</span><span>{project.year}</span></div></div>
      <p className="project-description">{project.description}</p>
    </TransitionLink>
  </motion.article>;
}
