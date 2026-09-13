"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { ComponentProps, MouseEvent } from "react";

export default function TransitionLink({ href, children, className = "", title, ...props }: ComponentProps<typeof Link> & { title?: string }) {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || leaving) return;
    e.preventDefault();
    setLeaving(true);
    window.setTimeout(() => router.push(href.toString()), 720);
  };

  return <>
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
    {leaving && <motion.div className="route-transition" initial={{ clipPath: "inset(100% 0 0 0)" }} animate={{ clipPath: "inset(0% 0 0 0)" }} transition={{ duration: .68, ease: [0.76, 0, 0.24, 1] }}>
      <span>{title}</span>
    </motion.div>}
  </>;
}
