"use client";

import { motion } from "motion/react";

export default function About() {
  return <section id="about" className="about section-pad">
    <div className="section-head"><div><p className="eyebrow">04 / About me</p><h2>A visual designer<br /><em>with a practical side.</em></h2></div><p className="section-intro">Good ideas matter. So does making them work.</p></div>
    <div className="about-grid"><motion.div className="about-statement" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><p>I'm a visual designer based in the UAE, working across branding, campaigns, digital experiences and print.</p></motion.div><div className="about-details"><p>My focus is simple: build visual systems that are distinctive enough to be remembered and practical enough to work.</p><p>Currently a Visual Designer at Kyan Creative Studio, with previous freelance experience across Ureed, Mostaql and Upwork.</p><div className="about-stats"><div><strong>4+</strong><span>Years experience</span></div><div><strong>UAE</strong><span>Based in</span></div><div><strong>English / Arabic</strong><span>Languages</span></div></div></div></div>
  </section>;
}
