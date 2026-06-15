import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Mic2,
  Tent,
  Speaker,
  Camera,
  Video,
  UtensilsCrossed,
  CalendarRange,
  ArrowUpRight,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "../../Reveal";
import { SectionHeading } from "../SectionHeading";
import tentImg from "@/assets/service-tent.jpg";
import soundImg from "@/assets/service-sound.jpg";
import photoImg from "@/assets/service-photo.jpg";
import cateringImg from "@/assets/service-catering.jpg";
import mcImg from "@/assets/mc-portrait.jpg";
import weddingImg from "@/assets/gallery-wedding.jpg";
import corporateImg from "@/assets/gallery-corporate.jpg";

const services = [
  {
    icon: Mic2,
    title: "MC Services",
    desc: "Charismatic hosting for weddings, corporate galas, funerals, birthdays, graduations and religious functions.",
    img: mcImg,
    featured: true,
  },
  {
    icon: Tent,
    title: "Tent & Equipment Hire",
    desc: "VIP and standard tents, chairs, tables, stage setups and elegant event decor.",
    img: tentImg,
  },
  {
    icon: Speaker,
    title: "Sound Systems",
    desc: "Professional PA systems, DJ equipment, wireless microphones and stage monitors.",
    img: soundImg,
  },
  {
    icon: Camera,
    title: "Photography",
    desc: "Editorial-grade photography that preserves the soul of every moment.",
    img: photoImg,
  },
  {
    icon: Video,
    title: "Videography",
    desc: "Cinematic event coverage, highlight reels, drone footage and live streaming.",
    img: weddingImg,
  },
  {
    icon: UtensilsCrossed,
    title: "Catering",
    desc: "Curated menus and refined buffet services for any guest count.",
    img: cateringImg,
  },
  {
    icon: CalendarRange,
    title: "Event Planning",
    desc: "Scheduling, vendor management, venue coordination and full program planning.",
    img: corporateImg,
  },
];

export function ServicesPreview() {
  return (
    <section id="services" className="relative py-28 sm:py-36 bg-section">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              A Complete <span className="italic text-gradient-gold">Production</span>
              <br /> for Every Occasion
            </>
          }
          description="From the first guest's arrival to the closing applause — we orchestrate every detail with cinematic precision."
        />

        <Stagger className="mt-20 grid gap-5 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => {
            const span =
              i === 0
                ? "lg:col-span-3 lg:row-span-2"
                : i === 1
                  ? "lg:col-span-3"
                  : i === 6
                    ? "lg:col-span-3"
                    : "lg:col-span-2";
            const tall = i === 0 ? "min-h-[420px] lg:min-h-[640px]" : "min-h-[320px]";
            return (
              <StaggerItem key={s.title} className={`${span}`}>
                <ServiceCard {...s} className={tall} />
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal className="mt-14 text-center">
          <Link to="/services" className="btn-ghost text-sm hover:btn-ghost-hover group">
            Explore All Services
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  desc,
  img,
  icon: Icon,
  className = "",
  featured,
}: {
  title: string;
  desc: string;
  img: string;
  icon: React.ComponentType<{ className?: string }>;
  className?: string;
  featured?: boolean;
}) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={`group relative overflow-hidden rounded-3xl border border-border bg-card ${className}`}
    >
      <div className="absolute inset-0">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover opacity-60 transition-all duration-1000 group-hover:scale-110 group-hover:opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0_0)] via-[oklch(0.08_0_0/0.5)] to-transparent" />
      </div>

      {/* Gold glow on hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{ boxShadow: "inset 0 0 80px -20px var(--gold)" }} />

      <div className="relative z-10 flex h-full flex-col justify-between p-7 sm:p-9">
        <div className="flex items-start justify-between">
          <div className="grid h-12 w-12 place-items-center rounded-2xl glass-light">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <ArrowUpRight className="h-5 w-5 text-foreground/40 transition-all duration-500 group-hover:text-primary group-hover:-translate-y-1 group-hover:translate-x-1" />
        </div>
        <div>
          <h3 className={`font-display tracking-tight ${featured ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl"}`}>
            {title}
          </h3>
          <p className={`mt-3 text-foreground/75 leading-relaxed ${featured ? "max-w-md text-base" : "text-sm"}`}>
            {desc}
          </p>
        </div>
      </div>
    </motion.article>
  );
}
