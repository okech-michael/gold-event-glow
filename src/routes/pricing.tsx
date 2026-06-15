import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { CTA } from "@/components/site/sections/CTA";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing & Packages — MC Maticha Events" },
      {
        name: "description",
        content:
          "Premium MC and event packages — Basic, Silver, Gold and Platinum. Build a custom package tailored to your event.",
      },
      { property: "og:title", content: "Pricing & Packages — MC Maticha" },
      {
        property: "og:description",
        content: "Transparent packages and a custom builder for premium event services.",
      },
    ],
  }),
  component: PricingPage,
});

const packages = [
  {
    name: "Basic",
    tagline: "Intimate gatherings",
    price: "Ksh 35,000",
    features: [
      "Professional MC (4 hours)",
      "Basic PA & 2 mics",
      "Event timeline planning",
      "Standard music playlist",
    ],
  },
  {
    name: "Silver",
    tagline: "Mid-size celebrations",
    price: "Ksh 75,000",
    features: [
      "Professional MC (6 hours)",
      "Full PA & DJ rig",
      "Standard tent (up to 100 guests)",
      "Lighting setup",
      "Photography (2 hours)",
    ],
  },
  {
    name: "Gold",
    tagline: "Premium weddings & galas",
    price: "Ksh 150,000",
    features: [
      "Professional MC (full day)",
      "Premium sound & DJ",
      "VIP tent + decor",
      "Photography & videography",
      "Catering for up to 150 guests",
      "Event coordination",
    ],
  },
  {
    name: "Platinum",
    tagline: "The signature experience",
    price: "Ksh 320,000",
    featured: true,
    features: [
      "MC Maticha personally hosting",
      "Concert-grade sound & lighting",
      "VIP tent, stage & full decor",
      "Cinematic videography + drone",
      "Highlight reel within 7 days",
      "Catering for up to 300 guests",
      "Dedicated event manager",
      "24/7 support throughout",
    ],
  },
];

function PricingPage() {
  return (
    <Layout>
      <section className="pt-40 sm:pt-48 pb-12">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Packages"
            title={
              <>
                Transparent pricing.
                <br />
                <span className="italic text-gradient-gold">Tailored to you</span>.
              </>
            }
            description="Every event is different. Pick a package or build your own — we'll refine it to match your vision and budget."
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="container-luxe">
          <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((p) => (
              <StaggerItem key={p.name} className={p.featured ? "lg:-mt-6" : ""}>
                <PriceCard {...p} />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CustomBuilder />
      <CTA />
    </Layout>
  );
}

function PriceCard({
  name,
  tagline,
  price,
  features,
  featured,
}: {
  name: string;
  tagline: string;
  price: string;
  features: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`relative h-full rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
        featured
          ? "glass border-primary/60 shadow-gold"
          : "glass hover:shadow-elevated"
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-gradient-gold text-[oklch(0.13_0_0)] text-[10px] uppercase tracking-[0.25em] px-4 py-1.5 rounded-full font-medium shadow-gold">
          <Sparkles className="h-3 w-3" /> Most Popular
        </div>
      )}

      <div className="text-center pb-6 border-b border-border">
        <h3 className="font-display text-3xl">{name}</h3>
        <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {tagline}
        </p>
        <div className="mt-6">
          <div className={`font-display text-4xl ${featured ? "text-gradient-gold" : ""}`}>
            {price}
          </div>
          <div className="mt-1 text-xs text-muted-foreground">starting from</div>
        </div>
      </div>

      <ul className="mt-6 space-y-3.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-foreground/85">
            <Check className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link
          to="/contact"
          className={
            featured
              ? "btn-gold w-full text-sm hover:btn-gold-hover"
              : "btn-ghost w-full text-sm hover:btn-ghost-hover"
          }
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}

const SERVICE_OPTIONS = [
  "MC Services",
  "Tent Hire",
  "Sound System",
  "Photography",
  "Videography",
  "Catering",
  "Event Planning",
];
const EVENT_TYPES = [
  "Wedding",
  "Corporate",
  "Birthday",
  "Funeral",
  "Graduation",
  "Traditional",
  "Other",
];

function CustomBuilder() {
  const [eventType, setEventType] = useState("Wedding");
  const [guests, setGuests] = useState(100);
  const [picks, setPicks] = useState<string[]>(["MC Services"]);

  function toggle(s: string) {
    setPicks((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));
  }

  return (
    <section className="py-28">
      <div className="container-luxe">
        <Reveal>
          <div className="glass rounded-[2rem] p-8 sm:p-12 lg:p-16">
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-5">
                <p className="eyebrow mb-5">Custom Package Builder</p>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-[1.05]">
                  Build your perfect
                  <br />
                  <span className="italic text-gradient-gold">package</span>.
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Mix and match the services you need. We'll send a tailored quotation within 24
                  hours.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-8">
                <div>
                  <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Event Type
                  </label>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {EVENT_TYPES.map((t) => (
                      <button
                        key={t}
                        onClick={() => setEventType(t)}
                        className={`px-4 py-2 rounded-full text-sm transition-all ${
                          eventType === t
                            ? "bg-gradient-gold text-[oklch(0.13_0_0)]"
                            : "glass text-foreground/75 hover:text-foreground"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                      Guest Count
                    </label>
                    <span className="font-display text-2xl text-gradient-gold">
                      {guests.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={1000}
                    step={10}
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="mt-4 w-full accent-primary"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    Services Required
                  </label>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {SERVICE_OPTIONS.map((s) => {
                      const on = picks.includes(s);
                      return (
                        <button
                          key={s}
                          onClick={() => toggle(s)}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-left transition-all ${
                            on
                              ? "glass border-primary/60 shadow-gold text-foreground"
                              : "glass text-foreground/75 hover:text-foreground"
                          }`}
                        >
                          <span
                            className={`grid h-5 w-5 place-items-center rounded-md transition-colors ${
                              on ? "bg-gradient-gold" : "border border-border"
                            }`}
                          >
                            {on && <Check className="h-3 w-3 text-[oklch(0.13_0_0)]" />}
                          </span>
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <Link to="/contact" className="btn-gold w-full text-sm hover:btn-gold-hover">
                  Request Custom Quotation
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
