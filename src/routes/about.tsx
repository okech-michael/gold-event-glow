import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { AboutStrip } from "@/components/site/sections/AboutStrip";
import { Stats } from "@/components/site/sections/Stats";
import { Testimonials } from "@/components/site/sections/Testimonials";
import { CTA } from "@/components/site/sections/CTA";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { Award, Heart, Sparkles, Users } from "lucide-react";
import mcImg from "@/assets/mc-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About MC Maticha — A Decade of Premium Event Hosting" },
      {
        name: "description",
        content:
          "Meet MC Maticha. Over a decade of hosting weddings, corporate galas and special occasions across Kenya with elegance and presence.",
      },
      { property: "og:title", content: "About MC Maticha" },
      {
        property: "og:description",
        content: "The story, mission and values behind MC Maticha Events & Entertainment.",
      },
      { property: "og:image", content: mcImg },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Award, label: "Excellence", desc: "Standards refined over a decade of stage time." },
  { icon: Heart, label: "Integrity", desc: "Honest pricing. Honest promises. Honest service." },
  { icon: Sparkles, label: "Joy", desc: "Every event deserves to feel like a celebration." },
  { icon: Users, label: "Reliability", desc: "We show up early, prepared, and unforgettable." },
];

function AboutPage() {
  return (
    <Layout>
      <section className="pt-40 sm:pt-48 pb-12">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Our Story"
            title={
              <>
                A decade of voices,
                <br />
                <span className="italic text-gradient-gold">vows and vision</span>.
              </>
            }
            description="MC Maticha Events & Entertainment was built on a simple belief: every celebration deserves to feel cinematic."
          />
        </div>
      </section>

      <AboutStrip />

      <section className="py-28 bg-section">
        <div className="container-luxe">
          <SectionHeading eyebrow="What We Stand For" title="Our core values." />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.label} delay={i * 0.08}>
                <div className="glass rounded-3xl p-8 h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-gold">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-gold shadow-gold">
                    <v.icon className="h-5 w-5 text-[oklch(0.13_0_0)]" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl">{v.label}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Testimonials />
      <CTA />
    </Layout>
  );
}
