"use client";

import TransitionLink from "./TransitionLink";
import { motion } from "motion/react";

const brands = [
  ["CHOPSTX", "Branding · Campaigns · Spatial", "chopstx"],
  ["ABO WADIH", "Identity · Packaging · Campaign", "abo-wadih"],
  ["OVER!", "Identity · Packaging · Activation", "over"],
  ["RANG", "Identity · Digital · Environment", "rang"],
  ["ZUSHI", "Branding · Campaigns", "zushi"],
  ["NOKI", "Identity · Pop-up · Packaging", "noki"],
  ["DOUKIE'S", "Packaging · Campaigns", "doukies"],
  ["FAT COW", "Branding · Collaboration", "fat-cow"],
  ["MASH", "Branding · Uniforms", "mash"],
  ["THE BIRYANI CLUB", "Brand Identity · Campaign", "the-biryani-club"],
] as const;

export default function BrandsMarquee() {
  return <section id="brands" className="brands-section section-pad">
    <div className="section-head compact"><div><p className="eyebrow">03 / Brands</p><h2>Brands I've<br /><em>worked with.</em></h2></div><p className="section-intro">A selection of brands I've contributed to across identity, campaigns, packaging, digital and physical spaces.</p></div>
    <div className="brand-list" data-cursor="brands">
      {brands.map(([brand, category, slug], i) => <TransitionLink href={`/brands/${slug}`} title={brand} key={brand} className="brand-row">
        <span className="brand-index">{String(i + 1).padStart(2, "0")}</span>
        <motion.div className="brand-title-wrap" initial={false} whileHover={{ x: 8 }} transition={{ duration: .45, ease: [0.16, 1, 0.3, 1] }}>
          <h3>{brand}</h3>
          <span>{category}</span>
        </motion.div>
        <span className="brand-arrow">↗</span>
        <div className="brand-reveal"><span>{brand}</span><small>{category}</small></div>
      </TransitionLink>)}
    </div>
    <p className="marquee-note">Hover a brand to unfold · Select to explore</p>
  </section>;
}
