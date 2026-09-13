"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Chopstx",
    category: "Branding / Campaigns / Spatial",
    year: "2026",
    tone: "from-[#161616] via-[#262626] to-[#0d0d0d]",
    accent: "CHOPSTX",
  },
  {
    number: "02",
    title: "Abo Wadih",
    category: "Identity / Packaging / Campaign",
    year: "2026",
    tone: "from-[#262626] via-[#171717] to-[#0b0b0b]",
    accent: "ABO WADIH",
  },
  {
    number: "03",
    title: "Over!",
    category: "Identity / Packaging / Activation",
    year: "2025",
    tone: "from-[#101010] via-[#292929] to-[#151515]",
    accent: "OVER!",
  },
];

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 18 });
  const sy = useSpring(y, { stiffness: 120, damping: 18 });
  const rotate = useTransform(sx, [-50, 50], [-1.5, 1.5]);

  return (
    <motion.div
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.05);
        y.set((e.clientY - r.top - r.height / 2) * 0.05);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-zinc-900"
    >
      <motion.div
        style={{ x: sx, y: sy, rotate }}
        className={`absolute -inset-6 bg-gradient-to-br ${project.tone}`}
      >
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute left-[10%] top-[16%] text-[clamp(3rem,8vw,8rem)] font-semibold tracking-[-0.08em] text-white/10">
          {project.accent}
        </div>
        <div className="absolute bottom-[12%] right-[10%] h-24 w-24 rounded-full border border-white/15 md:h-44 md:w-44" />
        <div className="absolute bottom-[20%] right-[17%] h-12 w-12 rounded-full bg-white/10 blur-xl md:h-24 md:w-24" />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="projects" className="relative bg-[#080808] px-6 py-28 text-white md:px-10 md:py-40">
      <div className="mx-auto max-w-[1500px]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 grid gap-8 md:grid-cols-[1fr_320px] md:items-end"
        >
          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-zinc-500">01 / Selected work</p>
            <h2 className="text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.82] tracking-[-0.07em]">
              Work that<br />moves people.
            </h2>
          </div>
          <p className="max-w-[300px] text-base leading-7 text-zinc-500">
            A selection of identities, campaigns and experiences created across food, hospitality and culture.
          </p>
        </motion.div>

        <div className="border-t border-white/10">
          {projects.map((project, index) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setActive(index)}
              onMouseLeave={() => setActive(null)}
              className="group border-b border-white/10 py-7 md:py-10"
            >
              <div className="mb-7 grid grid-cols-[44px_1fr_auto] items-start gap-4 md:grid-cols-[70px_1fr_auto] md:gap-8">
                <span className="pt-1 text-xs text-zinc-600">{project.number}</span>
                <div>
                  <h3 className="text-[clamp(2.5rem,6vw,6rem)] font-medium leading-[0.88] tracking-[-0.065em] transition-transform duration-700 ease-out group-hover:translate-x-2">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-zinc-600 md:text-xs">
                    {project.category}
                  </p>
                </div>
                <div className="flex items-center gap-4 pt-1 text-xs text-zinc-600">
                  <span className="hidden md:block">{project.year}</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition-all duration-500 group-hover:-rotate-45 group-hover:border-white/40 group-hover:bg-white group-hover:text-black">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </div>

              <motion.div
                animate={{
                  height: active === index ? "auto" : "0px",
                  opacity: active === index ? 1 : 0,
                  marginTop: active === index ? 4 : 0,
                }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <ProjectVisual project={project} />
              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
