import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { CTA } from "@/components/site/sections/CTA";
import wedding from "@/assets/gallery-wedding.jpg";
import corporate from "@/assets/gallery-corporate.jpg";
import birthday from "@/assets/gallery-birthday.jpg";
import graduation from "@/assets/gallery-graduation.jpg";
import traditional from "@/assets/gallery-traditional.jpg";
import funeral from "@/assets/gallery-funeral.jpg";
import tent from "@/assets/service-tent.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Weddings, Corporate, Birthdays & More | MC Maticha" },
      {
        name: "description",
        content:
          "Browse a curated portfolio of weddings, corporate galas, birthdays, graduations and traditional ceremonies hosted by MC Maticha.",
      },
      { property: "og:title", content: "Gallery — MC Maticha Events" },
      {
        property: "og:description",
        content: "A curated portfolio of premium events hosted by MC Maticha.",
      },
      { property: "og:image", content: wedding },
    ],
  }),
  component: GalleryPage,
});

const categories = [
  "All",
  "Weddings",
  "Funerals",
  "Birthdays",
  "Corporate",
  "Graduations",
  "Traditional",
] as const;

const items = [
  { src: wedding, cat: "Weddings", h: "tall" },
  { src: corporate, cat: "Corporate", h: "tall" },
  { src: birthday, cat: "Birthdays", h: "short" },
  { src: traditional, cat: "Traditional", h: "tall" },
  { src: graduation, cat: "Graduations", h: "short" },
  { src: funeral, cat: "Funerals", h: "short" },
  { src: tent, cat: "Weddings", h: "short" },
  { src: wedding, cat: "Weddings", h: "short" },
  { src: corporate, cat: "Corporate", h: "short" },
  { src: birthday, cat: "Birthdays", h: "tall" },
  { src: graduation, cat: "Graduations", h: "tall" },
  { src: traditional, cat: "Traditional", h: "short" },
];

function GalleryPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const visible = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <Layout>
      <section className="pt-40 sm:pt-48 pb-12">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="The Portfolio"
            title={
              <>
                Moments we've
                <br />
                <span className="italic text-gradient-gold">had the honor</span> to host.
              </>
            }
          />
        </div>
      </section>

      <section className="pb-28">
        <div className="container-luxe">
          {/* Filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.25em] transition-all duration-500 ${
                  active === c
                    ? "bg-gradient-gold text-[oklch(0.13_0_0)] shadow-gold"
                    : "glass text-foreground/70 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Masonry */}
          <div className="columns-2 lg:columns-3 gap-4 sm:gap-5 [&>*]:mb-4 sm:[&>*]:mb-5">
            <AnimatePresence mode="popLayout">
              {visible.map((it, i) => (
                <motion.button
                  layout
                  key={`${active}-${i}`}
                  type="button"
                  onClick={() => setLightbox(it.src)}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.04 }}
                  className={`group relative block w-full overflow-hidden rounded-2xl ${it.h === "tall" ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                >
                  <img
                    src={it.src}
                    alt={it.cat}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0_0)] via-transparent to-transparent opacity-80" />
                  <span className="absolute bottom-4 left-4 text-xs uppercase tracking-[0.3em] text-foreground/90">
                    {it.cat}
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[100] grid place-items-center bg-[oklch(0.05_0_0/0.9)] backdrop-blur-md p-6 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              src={lightbox}
              alt="Expanded"
              className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-elevated object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <CTA />
    </Layout>
  );
}
