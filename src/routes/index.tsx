import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/sections/Hero";
import { Stats } from "@/components/site/sections/Stats";
import { ServicesPreview } from "@/components/site/sections/ServicesPreview";
import { AboutStrip } from "@/components/site/sections/AboutStrip";
import { GalleryPreview } from "@/components/site/sections/GalleryPreview";
import { Testimonials } from "@/components/site/sections/Testimonials";
import { Blog } from "@/components/site/sections/Blog";
import { FAQ } from "@/components/site/sections/FAQ";
import { CTA } from "@/components/site/sections/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MC Maticha Events & Entertainment — Bringing Life to Every Celebration" },
      {
        name: "description",
        content:
          "Premium MC services and complete event solutions for weddings, corporate events, funerals, birthdays and graduations across Kenya. Book your event today.",
      },
      { property: "og:title", content: "MC Maticha Events & Entertainment" },
      {
        property: "og:description",
        content:
          "Premium MC services and complete event solutions for weddings, corporate events, funerals, birthdays and graduations across Kenya.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <ServicesPreview />
      <AboutStrip />
      <GalleryPreview />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
    </Layout>
  );
}
