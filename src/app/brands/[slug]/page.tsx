"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/components/Projects";
import { useParams } from "next/navigation";

export default function BrandPage() {
  const { slug } = useParams<{slug:string}>();
  const project = projects.find((p) => p.slug === slug) ?? projects[0];
  return <main className="brand-page"><div className={`brand-hero ${project.tone}`}><Link href="/#work" className="back-link"><ArrowLeft size={16}/> Back to work</Link><motion.div initial={{opacity:0,y:70}} animate={{opacity:1,y:0}} transition={{duration:.9}}><span>{project.number} / {project.category}</span><h1>{project.title}<em>.</em></h1><p>{project.description}</p></motion.div><div className="brand-mark">{project.title}</div></div><section className="brand-intro"><p className="eyebrow">Project overview</p><h2>A visual system built to give the brand a stronger point of view.</h2><p>This project page is ready for the final case-study content: identity development, campaign applications, packaging, environmental work and selected final artwork.</p><Link href="/#contact" className="pill-button">Start a conversation <ArrowUpRight size={16}/></Link></section></main>;
}
