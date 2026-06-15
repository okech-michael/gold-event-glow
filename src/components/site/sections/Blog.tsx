import { Link } from "@tanstack/react-router";
import { ArrowRight, Calendar } from "lucide-react";
import { Reveal } from "../../Reveal";

const posts = [
  {
    cat: "Weddings",
    title: "10 Things Every Couple Forgets When Planning Their Wedding",
    date: "Mar 14, 2026",
    read: "6 min read",
  },
  {
    cat: "Budgeting",
    title: "How to Build an Event Budget That Actually Holds Up",
    date: "Feb 22, 2026",
    read: "5 min read",
  },
  {
    cat: "MC Tips",
    title: "Choosing the Right MC: A Practical Checklist",
    date: "Jan 30, 2026",
    read: "4 min read",
  },
];

export function Blog() {
  return (
    <section className="relative py-28 sm:py-36 bg-section">
      <div className="container-luxe">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-5">Insights & Inspiration</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                From the
                <span className="italic text-gradient-gold"> journal</span>.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <Link to="/" className="link-shimmer text-sm text-foreground/80 hover:text-primary">
              All articles →
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <article className="group glass rounded-3xl p-7 sm:p-8 h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-gold cursor-pointer">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="rounded-full bg-primary/15 text-primary px-3 py-1 uppercase tracking-[0.2em] text-[10px]">
                    {p.cat}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" /> {p.date}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl leading-snug">{p.title}</h3>
                <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                  <span className="text-xs text-muted-foreground">{p.read}</span>
                  <span className="inline-flex items-center gap-2 text-sm text-primary">
                    Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
