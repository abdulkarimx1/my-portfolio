"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Navigation from "./Navigation";

const ease = [0.16, 1, 0.3, 1] as const;

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <span className={`reveal ${className}`}><motion.span initial={{ y: "115%" }} animate={{ y: 0 }} transition={{ duration: 1.05, delay, ease }}>{children}</motion.span></span>;
}

export default function Hero() {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const imageX = useTransform(sx, [-1, 1], [-18, 18]);
  const imageY = useTransform(sy, [-1, 1], [-12, 12]);

  const pointer = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - .5) * 2);
    my.set(((e.clientY - r.top) / r.height - .5) * 2);
  };

  return <section id="top" className="hero" onPointerMove={pointer}>
    <Navigation />
    <div className="hero-noise" />
    <motion.div className="hero-orb" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />

    <div className="hero-grid">
      <div className="hero-copy">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .2 }}>UAE / VISUAL DESIGNER</motion.p>
        <div className="hero-name" aria-label="Abdulkarim Bayassi">
          <Reveal delay={.15}>ABDULKARIM</Reveal>
          <Reveal delay={.23} className="hero-surname">BAYASSI</Reveal>
        </div>
        <h1>
          <Reveal delay={.32}>Visual</Reveal>
          <Reveal delay={.40}>designer</Reveal>
          <Reveal delay={.48}>with a <em>point of view.</em></Reveal>
        </h1>
        <motion.p className="hero-lead" initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .78, ease }}>
          I work across branding, campaigns, digital and print — building visual systems that are clear, distinctive and ready for the real world.
        </motion.p>
        <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: 1, ease }}>
          <a href="#work" className="pill-button">Explore selected work <ArrowUpRight size={16} /></a>
          <a href="#about" className="text-link">More about me</a>
        </motion.div>
      </div>

      <motion.div className="portrait-wrap" initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.06 }} animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }} transition={{ duration: 1.25, delay: .3, ease }} data-cursor="portrait">
        <motion.div className="portrait-inner" style={{ x: imageX, y: imageY }}>
          <Image src="/portrait-placeholder.svg" alt="Abdulkarim Bayassi" fill priority sizes="(max-width: 900px) 90vw, 42vw" className="portrait" />
          <div className="portrait-placeholder"><span>YOUR<br />PORTRAIT</span></div>
        </motion.div>
        <motion.div className="arabic-signature" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ pathLength: { duration: 2.1, delay: 1.15, ease }, opacity: { duration: .2, delay: 1.15 } }}>عبدالكريم</motion.div>
        <div className="portrait-meta"><span>01 / 09</span><span>Scroll to explore ↓</span></div>
      </motion.div>
    </div>

    <div className="hero-bottom">
      <span>Branding</span><span>Campaigns</span><span>Packaging</span><span>Digital</span><span>Print</span>
      <a href="#work">Selected work <ArrowDown size={14} /></a>
    </div>
  </section>;
}
