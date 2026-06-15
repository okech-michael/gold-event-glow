import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.9,
  className,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const prefersReduced = useReducedMotion();

  const offset = 40;
  const hidden: Record<Direction, Record<string, number>> = {
    up: { y: offset, opacity: 0 },
    down: { y: -offset, opacity: 0 },
    left: { x: offset, opacity: 0 },
    right: { x: -offset, opacity: 0 },
    scale: { scale: 0.94, opacity: 0 },
    none: { opacity: 0 },
  };

  const variants: Variants = {
    hidden: prefersReduced ? { opacity: 0 } : hidden[direction],
    visible: {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        duration,
        delay,
        ease: [0.2, 0.8, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
  delay = 0,
  stagger = 0.1,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const offset = 30;
  const hidden: Record<Direction, Record<string, number>> = {
    up: { y: offset, opacity: 0 },
    down: { y: -offset, opacity: 0 },
    left: { x: offset, opacity: 0 },
    right: { x: -offset, opacity: 0 },
    scale: { scale: 0.94, opacity: 0 },
    none: { opacity: 0 },
  };

  return (
    <motion.div
      variants={{
        hidden: hidden[direction],
        visible: {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
          transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
