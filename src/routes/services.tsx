import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { CTA } from "@/components/site/sections/CTA";
import mcImg from "@/assets/mc-portrait.jpg";
import tentImg from "@/assets/service-tent.jpg";
import soundImg from "@/assets/service-sound.jpg";
import photoImg from "@/assets/service-photo.jpg";
import videoImg from "@/assets/gallery-wedding.jpg";
import cateringImg from "@/assets/service-catering.jpg";
import planImg from "@/assets/gallery-corporate.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — MC, Tents, Sound, Catering & More | MC Maticha" },
      {
        name: "description",
        content:
          "Explore our full range of event services: MC hosting, tent hire, sound systems, photography, videography, catering and event planning.",
      },
      { property: "og:title", content: "Services — MC Maticha Events" },
      {
        property: "og:description",
        content:
          "Full-service event production: MC, tents, sound, photography, videography, catering and planning.",
      },
      { property: "og:image", content: mcImg },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    img: mcImg,
    title: "MC Services",
    desc: "Charismatic, professional hosting tailored to your event's tone — from formal corporate galas to vibrant weddings and dignified memorials.",
    features: [
      "Wedding MC",
      "Funeral MC",
      "Birthday MC",
      "Corporate MC",
      "Graduation MC",
      "Religious Functions",
      "Political Gatherings",
    ],
  },
  {
    img: tentImg,
    title: "Tent & Equipment Hire",
    desc: "Stunning VIP tents, premium furniture and complete event infrastructure delivered, installed and styled.",
    features: ["VIP Tents", "Standard Tents", "Chairs & Tables", "Stage Setup", "Event Decor"],
  },
  {
    img: soundImg,
    title: "Sound Systems",
    desc: "Crystal-clear PA systems and DJ rigs sized exactly to your venue and guest count.",
    features: ["PA Systems", "DJ Equipment", "Wireless Microphones", "Stage Monitors"],
  },
  {
    img: photoImg,
    title: "Photography",
    desc: "Editorial-grade event photography that captures candid moments and posed elegance with equal care.",
    features: [
      "Weddings",
      "Funerals",
      "Birthdays",
      "Corporate Events",
      "Family Portraits",
    ],
  },
  {
    img: videoImg,
    title: "Videography",
    desc: "Cinematic event films, highlight reels, aerial drone coverage and professional live streaming.",
    features: ["Event Coverage", "Highlight Reels", "Drone Coverage", "Live Streaming"],
  },
  {
    img: cateringImg,
    title: "Catering",
    desc: "Curated menus, attentive service and flawless presentation — for ten guests or a thousand.",
    features: [
      "Weddings",
      "Funerals",
      "Corporate Events",
      "Outdoor Catering",
      "Buffet Services",
    ],
  },
  {
    img: planImg,
    title: "Event Planning",
    desc: "End-to-end coordination so you can be a guest at your own event.",
    features: [
      "Scheduling",
      "Vendor Management",
      "Venue Coordination",
      "Guest Management",
      "Program Planning",
    ],
  },
];

function ServicesPage() {
  return (
    <Layout>
      {/* Page Hero */}
      <section className="relative pt-40 sm:pt-48 pb-20">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Our Services"
            title={
              <>
                Full-service event production,
                <br />
                <span className="italic text-gradient-gold">crafted to perfection</span>.
              </>
            }
            description="Each service stands alone with excellence — and combines into something unforgettable."
          />
        </div>
      </section>

      {/* Alternating service rows */}
      <section className="relative">
        <div className="container-luxe space-y-28 sm:space-y-40 pb-28">
          {services.map((s, i) => (
            <ServiceRow key={s.title} {...s} reverse={i % 2 === 1} />
          ))}
        </div>
      </section>

      <CTA />
    </Layout>
  );
}

function ServiceRow({
  img,
  title,
  desc,
  features,
  reverse,
}: {
  img: string;
  title: string;
  desc: string;
  features: string[];
  reverse: boolean;
}) {
  return (
    <div
      className={`grid gap-10 lg:gap-16 items-center lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      <Reveal direction={reverse ? "right" : "left"}>
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-elevated group">
          <img
            src={img}
            alt={title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[oklch(0.08_0_0/0.5)] via-transparent to-transparent" />
        </div>
      </Reveal>

      <div>
        <Reveal direction={reverse ? "left" : "right"}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">{desc}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary/15 text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="text-foreground/85">{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-10">
            <Link to="/contact" className="btn-gold text-sm hover:btn-gold-hover group">
              Enquire about {title}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
