import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-[oklch(0.10_0_0)]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="container-luxe py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold shadow-gold">
                <span className="font-display text-lg font-bold text-[oklch(0.13_0_0)]">M</span>
              </div>
              <div>
                <div className="font-display text-xl">MC Maticha</div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Events & Entertainment
                </div>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Bringing life to every celebration. Professional MC services and complete event
              solutions crafted with elegance, energy, and unmatched professionalism.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Instagram, href: "#" },
                { Icon: Facebook, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Youtube, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-primary/15 hover:border-primary/60 transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="eyebrow mb-5">Explore</h4>
            <ul className="space-y-3 text-sm">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Gallery", "/gallery"],
                ["Pricing", "/pricing"],
                ["Contact", "/contact"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="eyebrow mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-foreground/70">
              <li>MC Services</li>
              <li>Tent &amp; Equipment Hire</li>
              <li>Sound Systems</li>
              <li>Photography &amp; Videography</li>
              <li>Catering</li>
              <li>Event Planning</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="eyebrow mb-5">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-foreground/80">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-primary" />
                <span>0714058103</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-primary" />
                <span>bookings@mcmaticha.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-primary" />
                <span>Nairobi, Kenya — Available Nationwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} MC Maticha Events &amp; Entertainment. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with elegance. Designed for celebration.
          </p>
        </div>
      </div>
    </footer>
  );
}
