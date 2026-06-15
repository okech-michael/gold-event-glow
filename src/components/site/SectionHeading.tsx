import type { ReactNode } from "react";
import { Reveal } from "../Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <Reveal direction="up">
          <div className="eyebrow mb-5 flex items-center gap-3 justify-center">
            {align === "center" && <span className="h-px w-8 bg-primary/60" />}
            <span>{eyebrow}</span>
            {align === "center" && <span className="h-px w-8 bg-primary/60" />}
          </div>
        </Reveal>
      )}
      <Reveal direction="up" delay={0.1}>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.2}>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
