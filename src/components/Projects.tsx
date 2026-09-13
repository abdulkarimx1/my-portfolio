"use client";

import { motion } from "motion/react";
import ProjectCard, { Project } from "./ProjectCard";

export const projects: Project[] = [
  { number: "01", slug: "chopstx", title: "Chopstx", category: "Branding · Campaigns · Spatial", year: "2026", description: "Refreshing a Japanese-inspired hospitality brand across identity, campaigns and physical space.", tone: "tone-red" },
  { number: "02", slug: "abo-wadih", title: "Abo Wadih", category: "Identity · Packaging · Campaign", year: "2026", description: "A bold Shami street-food identity built to feel familiar, loud and unmistakably local.", tone: "tone-sand" },
  { number: "03", slug: "over", title: "Over!", category: "Identity · Packaging · Activation", year: "2025", description: "A playful burger brand system designed to move comfortably from packaging to pop-ups.", tone: "tone-pink" },
  { number: "04", slug: "rang", title: "Rang", category: "Identity · Digital · Environment", year: "2025", description: "A refined Indian dining identity balancing richness, restraint and a strong sense of place.", tone: "tone-gold" },
];

export default function Projects() {
  return <section id="work" className="work section-pad">
    <div className="section-head"><div><p className="eyebrow">02 / Selected work</p><h2>Work worth<br /><em>looking at.</em></h2></div><p className="section-intro">A selection of identities, campaigns and visual systems created across hospitality, lifestyle and culture.</p></div>
    <div className="project-list">{projects.map((project, i) => <ProjectCard key={project.slug} project={project} index={i} />)}</div>
    <motion.a href="#brands" className="all-work" whileHover={{ x: 8 }}>View all work <span>→</span></motion.a>
  </section>;
}
