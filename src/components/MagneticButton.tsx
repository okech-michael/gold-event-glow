import { useRef, useState, type ReactNode, type CSSProperties } from "react";
import { motion } from "motion/react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  as?: "button" | "a";
  style?: CSSProperties;
  strength?: number;
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  as = "button",
  style,
  strength = 0.25,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * strength;
    const y = (e.clientY - (rect.top + rect.height / 2)) * strength;
    setPos({ x, y });
  }

  function handleLeave() {
    setPos({ x: 0, y: 0 });
  }

  const inner = (
    <motion.div
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.3 }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );

  if (as === "a" && href) {
    return (
      <a
        href={href}
        ref={ref as unknown as React.RefObject<HTMLAnchorElement>}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        className="inline-block"
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {inner}
      </a>
    );
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      className="inline-block cursor-pointer"
    >
      {inner}
    </div>
  );
}
