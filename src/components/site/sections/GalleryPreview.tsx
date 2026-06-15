import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../../Reveal";
import { SectionHeading } from "../SectionHeading";
import wedding from "@/assets/gallery-wedding.jpg";
import corporate from "@/assets/gallery-corporate.jpg";
import birthday from "@/assets/gallery-birthday.jpg";
import graduation from "@/assets/gallery-graduation.jpg";
import traditional from "@/assets/gallery-traditional.jpg";
import funeral from "@/assets/gallery-funeral.jpg";

const items = [
  { src: wedding, label: "Wedding", tall: false },
  { src: corporate, label: "Corporate Gala", tall: true },
  { src: birthday, label: "Birthday", tall: false },
  { src: traditional, label: "Traditional", tall: true },
  { src: graduation, label: "Graduation", tall: false },
  { src: funeral, label: "Memorial", tall: false },
];

export function GalleryPreview() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="container-luxe">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-5">The Portfolio</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Moments we've had the
                <br />
                <span className="italic text-gradient-gold">privilege</span> to host.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/gallery" className="btn-ghost text-sm hover:btn-ghost-hover group">
              View Full Gallery
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {items.map((it, i) => (
            <GalleryTile key={i} {...it} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryTile({
  src,
  label,
  tall,
  index,
}: {
  src: string;
  label: string;
  tall: boolean;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 1.04]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1], delay: index * 0.05 }}
      className={`group relative overflow-hidden rounded-2xl ${tall ? "row-span-2 aspect-[3/5]" : "aspect-[4/5]"}`}
    >
      <motion.img
        src={src}
        alt={label}
        loading="lazy"
        style={{ scale, y }}
        className="absolute inset-0 h-[120%] w-full object-cover will-change-transform transition-all duration-1000 group-hover:opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0_0)] via-transparent to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between">
        <span className="text-xs uppercase tracking-[0.3em] text-foreground/90">{label}</span>
        <ArrowUpRight className="h-4 w-4 text-primary opacity-0 -translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0" />
      </div>
    </motion.div>
  );
}
