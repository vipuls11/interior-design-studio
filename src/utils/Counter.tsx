"use client";
import { useEffect, useRef } from "react";
import { useMotionValue, useTransform, animate, motion, useInView } from "framer-motion";

export function Counter({ from, to }: { from: number; to: number }) {
  const count = useMotionValue(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Transform the raw number into a formatted string with spaces
  const rounded = useTransform(count, (latest) => 
    Math.round(latest).toLocaleString('ru-RU').replace(/,/g, ' ')
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 3, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [isInView, count, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}