import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "../../Reveal";
import { Orbs } from "../Orbs";

export function CTA() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="container-luxe">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[3rem] glass p-10 sm:p-16 lg:p-24 text-center">
          <Orbs />

          <Reveal>
            <p className="eyebrow mb-5">Ready When You Are</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-7xl leading-[1.02] tracking-tight max-w-4xl mx-auto">
              Let's craft a celebration
              <br />
              <span className="italic text-gradient-gold">worth remembering.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Tell us about your event. We'll send a tailored proposal within 24 hours.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link to="/contact" className="btn-gold text-sm sm:text-base hover:btn-gold-hover group">
                Book Your Event
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="tel:0714058103"
                className="btn-ghost text-sm sm:text-base hover:btn-ghost-hover"
              >
                <Phone className="h-4 w-4" />
                Call Us
              </a>
              <a
                href="https://wa.me/0714058103"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-sm sm:text-base hover:btn-ghost-hover"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
