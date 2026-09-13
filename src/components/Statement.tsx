"use client";
import { motion } from "motion/react";
export default function Statement(){return <section className="statement"><motion.p initial={{opacity:0,scale:.96}} whileInView={{opacity:1,scale:1}} viewport={{once:true,amount:.5}} transition={{duration:1}}>Good design<br /><em>should feel inevitable.</em></motion.p><span>08 / A point of view</span></section>}
