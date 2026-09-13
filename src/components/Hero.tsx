"use client";

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

function SplitLine({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 20, mass: 0.7 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 20, mass: 0.7 });
  const imageX = useTransform(smoothX, [-1, 1], [-16, 16]);
  const imageY = useTransform(smoothY, [-1, 1], [-12, 12]);

  useEffect(() => setMounted(true), []);

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  }

  return (
    <section
      id="top"
      onPointerMove={handlePointerMove}
      className="relative min-h-screen overflow-hidden bg-[#080808] text-white"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ opacity: [0.22, 0.34, 0.22], scale: [1, 1.04, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 50% 38%, rgba(255,255,255,.10), transparent 35%), radial-gradient(circle at 82% 78%, rgba(120,120,120,.08), transparent 28%)",
        }}
      />

      <div className="absolute inset-x-0 top-0 z-20 flex items-center justify-between px-6 py-6 md:px-10">
        <motion.a
          href="#top"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="text-sm font-medium tracking-[-0.02em]"
        >
          Abdulkarim<span className="text-zinc-500">.</span>
        </motion.a>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease }}
          className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-zinc-500"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-white" />
          Visual Designer
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1500px] flex-col justify-between px-6 pb-7 pt-32 md:px-10 md:pb-9 md:pt-36">
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_340px]">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mb-6 text-[11px] uppercase tracking-[0.22em] text-zinc-500"
            >
              Branding · Campaigns · Digital · Print
            </motion.p>

            <h1 className="max-w-[1050px] text-[clamp(4.5rem,11.5vw,11.5rem)] font-medium leading-[0.78] tracking-[-0.075em]">
              <SplitLine delay={0.25}>Visual</SplitLine>
              <SplitLine delay={0.34}>designer<span className="text-zinc-600">.</span></SplitLine>
            </h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease }}
            className="max-w-[300px] pb-2 lg:pb-5"
          >
            <p className="text-base leading-7 text-zinc-400 md:text-lg">
              I turn ideas into visual systems that are clear, distinctive, and built to actually ship.
            </p>
            <a
              href="#projects"
              className="group mt-7 inline-flex items-center gap-3 text-sm font-medium"
            >
              Explore selected work
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-700 transition-transform duration-500 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </a>
          </motion.div>
        </div>

        <div className="relative mt-12 h-[25vh] min-h-[190px] overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900 md:h-[29vh]">
          <motion.div
            initial={{ scale: 1.16, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.45, ease }}
            style={{ x: mounted ? imageX : 0, y: mounted ? imageY : 0 }}
            className="absolute -inset-8"
          >
            <div className="h-full w-full bg-[radial-gradient(circle_at_25%_45%,rgba(255,255,255,.16),transparent_20%),radial-gradient(circle_at_72%_35%,rgba(255,255,255,.08),transparent_24%),linear-gradient(120deg,#161616,#303030_48%,#101010)]" />
            <div className="absolute left-[14%] top-[18%] h-40 w-40 rounded-full border border-white/10 md:h-64 md:w-64" />
            <div className="absolute right-[14%] bottom-[-35%] h-72 w-72 rounded-full border border-white/10 md:h-[30rem] md:w-[30rem]" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/30" />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.05, ease }}
            className="absolute bottom-0 left-0 h-px w-full origin-left bg-white/30"
          />
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-[10px] uppercase tracking-[0.18em] text-zinc-400 md:bottom-7 md:left-7 md:right-7">
            <span>Selected work / 2024—26</span>
            <motion.a
              href="#projects"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="hidden items-center gap-2 sm:flex"
            >
              Scroll to explore <ArrowDown className="h-3 w-3" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
