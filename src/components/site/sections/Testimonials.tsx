import { Star } from "lucide-react";
import { Reveal } from "../../Reveal";
import { SectionHeading } from "../SectionHeading";

const testimonials = [
  {
    name: "Grace & Kevin Mwangi",
    event: "Wedding · Nairobi",
    quote:
      "MC Maticha turned our wedding into a story our guests still talk about. Every moment flowed beautifully.",
  },
  {
    name: "Safaricom Events Team",
    event: "Corporate Gala",
    quote:
      "Effortlessly professional. The team handled every detail — sound, MC, coordination — like clockwork.",
  },
  {
    name: "The Otieno Family",
    event: "Memorial Service",
    quote:
      "Dignified, calm and deeply respectful. They held the room with grace during our hardest day.",
  },
  {
    name: "Wanjiru K.",
    event: "40th Birthday",
    quote: "The energy, the timing, the music — absolutely unforgettable. Worth every shilling.",
  },
  {
    name: "Brian & Atieno",
    event: "Traditional Ceremony",
    quote:
      "They honored every tradition while bringing modern elegance. Our parents were overjoyed.",
  },
  {
    name: "KCB Graduate Cohort",
    event: "Graduation Dinner",
    quote: "Polished, charismatic, on-time. Exactly the standard our event demanded.",
  },
];

export function Testimonials() {
  // duplicate for seamless marquee
  const row = [...testimonials, ...testimonials];

  return (
    <section className="relative py-28 sm:py-36 bg-section overflow-hidden">
      <div className="container-luxe">
        <SectionHeading
          eyebrow="Kind Words"
          title={
            <>
              Trusted by clients who
              <br />
              <span className="italic text-gradient-gold">demand the best</span>.
            </>
          }
        />
      </div>

      <Reveal className="mt-20">
        <div className="relative">
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-[oklch(0.13_0_0)] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-[oklch(0.13_0_0)] to-transparent" />

          <div className="flex gap-6 animate-marquee w-max">
            {row.map((t, i) => (
              <article
                key={i}
                className="glass rounded-3xl p-8 w-[360px] sm:w-[420px] shrink-0 transition-all duration-500 hover:shadow-gold"
              >
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-5 font-display text-xl leading-snug text-foreground/95">
                  "{t.quote}"
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold font-display text-sm text-[oklch(0.13_0_0)]">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.event}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
