"use client";

import { motion, useScroll, useSpring } from "motion/react";

const links = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Practice", "#practice"],
  ["Contact", "#contact"],
];

export default function Navigation() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.25 });

  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />
      <header className="nav">
        <a href="#top" className="nav-logo">AB<span>.</span></a>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="nav-link">{label}</a>
          ))}
        </nav>
        <a href="#contact" className="nav-status"><i /> Available for select projects</a>
      </header>
    </>
  );
}
