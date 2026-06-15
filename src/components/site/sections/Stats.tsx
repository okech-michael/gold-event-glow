import { Counter } from "../../Counter";
import { Reveal, Stagger, StaggerItem } from "../../Reveal";

const stats = [
  { value: 500, suffix: "+", label: "Events Hosted" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Client Support" },
];

export function Stats() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow text-center mb-12">A Legacy of Celebration</p>
        </Reveal>
        <Stagger className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-3xl overflow-hidden glass">
          {stats.map((s) => (
            <StaggerItem
              key={s.label}
              className="bg-[oklch(0.13_0_0)] p-8 sm:p-12 text-center transition-colors duration-500 hover:bg-[oklch(0.16_0.005_60)]"
            >
              <div className="font-display text-5xl sm:text-6xl lg:text-7xl text-gradient-gold leading-none">
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-4 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                {s.label}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
