"use client";

import { motion } from "motion/react";
const items = [
  ["01", "Brand identity", "Building visual identities that stay distinctive without becoming rigid."],
  ["02", "Campaign design", "Turning one strong idea into a visual language that travels across touchpoints."],
  ["03", "Packaging design", "Designing packaging that works in the hand, on the shelf and inside the wider system."],
  ["04", "Digital design", "Creating digital visuals and experiences that feel like a natural extension of the brand."],
  ["05", "Environmental design", "Taking the identity beyond the screen and into physical spaces."],
  ["06", "Art direction", "Defining the visual direction, composition and details that bring an idea together."],
];

export default function Practice() {
  return <section id="practice" className="practice section-pad"><div className="section-head compact"><div><p className="eyebrow">05 / What I do</p><h2>How I<br /><em>work.</em></h2></div><p className="section-intro">The areas I work across, from the first visual idea to the final piece in the real world.</p></div><div className="practice-list">{items.map(([num, title, copy], i) => <motion.div key={num} className="practice-row" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .25 }} transition={{ delay: i * .05 }}><span>{num}</span><h3>{title}</h3><p>{copy}</p><b>↗</b></motion.div>)}</div></section>;
}
