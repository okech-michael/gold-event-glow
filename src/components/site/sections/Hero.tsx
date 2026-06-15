import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-wedding.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-[100svh] min-h-[680px] w-full overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        style={{ scale, y }}
        className="absolute inset-0 will-change-transform"
      >
        <img
          src={heroImg}
          alt="Luxury wedding reception under chandeliers"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        {/* Cinematic gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0_0/0.55)] via-[oklch(0.08_0_0/0.35)] to-[oklch(0.08_0_0/0.95)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.08_0_0/0.7)] via-transparent to-[oklch(0.08_0_0/0.4)]" />
      </motion.div>

      {/* Floating gold orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="orb"
          style={{ width: 420, height: 420, top: "20%", left: "-8%", background: "var(--gold)" }}
        />
        <div
          className="orb"
          style={{
            width: 520,
            height: 520,
            bottom: "-15%",
            right: "-10%",
            background: "var(--gold-soft)",
            animationDelay: "5s",
          }}
        />
      </div>

      {/* Foreground content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="container-luxe relative z-10 flex h-full flex-col justify-end pb-20 pt-32 sm:justify-center sm:pb-0"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1], delay: 0.3 }}
          className="eyebrow inline-flex items-center gap-3"
        >
          <Sparkles className="h-3.5 w-3.5" />
          <span>Premium Events · Est. Excellence</span>
        </motion.div>

        <h1 className="mt-6 max-w-5xl font-display text-[clamp(2.6rem,6.5vw,5.8rem)] leading-[0.98] tracking-tight">
          <SplitLine delay={0.45}>Bringing Life</SplitLine>
          <SplitLine delay={0.6}>to Every </SplitLine>
          <SplitLine delay={0.75} highlight>
            Celebration.
          </SplitLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1], delay: 1.05 }}
          className="mt-7 max-w-2xl text-base sm:text-lg text-foreground/80 leading-relaxed"
        >
          Professional MC services and complete event solutions for weddings, corporate events,
          funerals, birthdays, graduations and special occasions — orchestrated with cinematic
          elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1], delay: 1.25 }}
          className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4"
        >
          <Link
            to="/contact"
            className="btn-gold text-sm sm:text-base hover:btn-gold-hover group"
          >
            Book Your Event
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/pricing" className="btn-ghost text-sm sm:text-base hover:btn-ghost-hover">
            Request a Quote
          </Link>
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors link-shimmer"
          >
            <MessageCircle className="h-4 w-4" />
            Chat on WhatsApp
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-foreground/50"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="h-10 w-px bg-gradient-to-b from-primary/80 to-transparent" />
      </motion.div>
    </section>
  );
}

function SplitLine({
  children,
  delay = 0,
  highlight,
}: {
  children: string;
  delay?: number;
  highlight?: boolean;
}) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1], delay }}
        className={`block ${highlight ? "italic text-gradient-gold font-normal" : ""}`}
      >
        {children}
      </motion.span>
    </span>
  );
}
