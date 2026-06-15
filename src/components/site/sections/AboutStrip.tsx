import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../../Reveal";
import mcImg from "@/assets/mc-portrait.jpg";

export function AboutStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1, 1.05]);

  return (
    <section ref={ref} className="relative py-28 sm:py-36 overflow-hidden">
      <div className="container-luxe">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-border shadow-elevated">
              <motion.img
                src={mcImg}
                alt="MC Maticha on stage"
                loading="lazy"
                style={{ y: imgY, scale: imgScale }}
                className="h-[110%] w-full object-cover will-change-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0_0/0.5)] via-transparent to-transparent" />
            </div>
            {/* Floating gold card */}
            <Reveal direction="scale" delay={0.3}>
              <div className="absolute -bottom-8 -right-4 sm:-right-10 glass rounded-2xl p-5 sm:p-6 w-56 shadow-elevated">
                <div className="font-display text-3xl text-gradient-gold">10+</div>
                <div className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  Years on Stage
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <Reveal>
              <p className="eyebrow mb-5">About MC Maticha</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                The voice behind the
                <br />
                <span className="italic text-gradient-gold">most memorable</span> moments.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
                For over a decade, MC Maticha has hosted celebrations that demand presence,
                precision and personality. From intimate family gatherings to corporate galas with
                thousands of guests, every event receives the same uncompromising standard of
                excellence.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-10 grid sm:grid-cols-3 gap-6">
                {[
                  { label: "Our Mission", value: "Elevate every event into a memory worth retelling." },
                  { label: "Our Vision", value: "Be East Africa's most trusted name in event production." },
                  { label: "Core Values", value: "Excellence · Integrity · Joy · Reliability." },
                ].map((v) => (
                  <div key={v.label}>
                    <div className="text-xs uppercase tracking-[0.25em] text-primary mb-2">
                      {v.label}
                    </div>
                    <p className="text-sm text-foreground/80 leading-relaxed">{v.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-10">
                <Link to="/about" className="btn-ghost text-sm hover:btn-ghost-hover group">
                  Read our story
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
