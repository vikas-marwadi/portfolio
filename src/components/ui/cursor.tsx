"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const dotX = useSpring(x, { stiffness: 700, damping: 40 });
  const dotY = useSpring(y, { stiffness: 700, damping: 40 });
  const ringX = useSpring(x, { stiffness: 130, damping: 18 });
  const ringY = useSpring(y, { stiffness: 130, damping: 18 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const el = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
      setHovering(!!el?.closest("a, button, [role=button], label, input, textarea"));
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, [x, y]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
        style={{ x: dotX, y: dotY }}
        animate={{ width: clicking ? 6 : 10, height: clicking ? 6 : 10 }}
        transition={{ duration: 0.1 }}
      />
      <motion.div
        className="pointer-events-none fixed z-[9998] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/70"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: hovering ? 54 : clicking ? 22 : 38,
          height: hovering ? 54 : clicking ? 22 : 38,
          opacity: 0.75,
          boxShadow: hovering ? "0 0 28px 6px oklch(0.65 0.2 265 / 0.2)" : "none",
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
