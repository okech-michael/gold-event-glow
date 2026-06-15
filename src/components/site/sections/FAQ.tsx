import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../../Reveal";

const faqs = [
  {
    q: "How far in advance should I book MC Maticha?",
    a: "We recommend booking at least 4–8 weeks in advance for weddings and large corporate events. For smaller events, 1–2 weeks is usually enough, though we do accommodate urgent requests when our calendar allows.",
  },
  {
    q: "Do you travel outside Nairobi?",
    a: "Absolutely. We work across all of Kenya and have hosted events in Mombasa, Kisumu, Nakuru, Eldoret and beyond. Travel and accommodation logistics are included in your custom quote.",
  },
  {
    q: "Can I customize the services in my package?",
    a: "Yes. Every package is fully customizable. Use our package builder or speak with our team to combine MC services, tents, sound, photography and catering exactly the way you need.",
  },
  {
    q: "What languages do you MC in?",
    a: "We MC fluently in English, Kiswahili, and Sheng, and can incorporate vernacular touches on request — perfect for weddings and cultural ceremonies.",
  },
  {
    q: "What does the booking process look like?",
    a: "Submit the booking form or WhatsApp us. We respond within hours, send a tailored quote, secure your date with a deposit, and schedule a planning call. From there we handle everything.",
  },
  {
    q: "Do you offer same-day or last-minute MC services?",
    a: "When our calendar allows, yes. Call or WhatsApp us directly for urgent bookings and we will confirm availability immediately.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-28 sm:py-36">
      <div className="container-luxe max-w-4xl">
        <SectionHeading
          eyebrow="Common Questions"
          title={
            <>
              Everything you need
              <br />
              to <span className="italic text-gradient-gold">know</span>.
            </>
          }
        />

        <div className="mt-16 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.04}>
                <div
                  className={`glass rounded-2xl overflow-hidden transition-all duration-500 ${
                    isOpen ? "shadow-gold border-primary/40" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 p-6 sm:p-7 text-left"
                  >
                    <span className="font-display text-lg sm:text-xl text-foreground">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-gold text-[oklch(0.13_0_0)]"
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 sm:px-7 pb-7 text-muted-foreground leading-relaxed">
                          {f.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
