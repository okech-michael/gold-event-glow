import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Send, Youtube } from "lucide-react";
import { Layout } from "@/components/site/Layout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book — MC Maticha Events & Entertainment" },
      {
        name: "description",
        content:
          "Book MC Maticha for your wedding, corporate event, birthday or special occasion. Fast response via form, WhatsApp or phone.",
      },
      { property: "og:title", content: "Contact MC Maticha" },
      {
        property: "og:description",
        content: "Book your event in minutes — form, WhatsApp or phone.",
      },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(30),
  email: z.string().trim().email("Please enter a valid email").max(255),
  eventType: z.string().min(1, "Select an event type"),
  date: z.string().min(1, "Please select an event date"),
  venue: z.string().trim().max(200).optional().or(z.literal("")),
  guests: z.string().max(10).optional().or(z.literal("")),
  services: z.string().max(500).optional().or(z.literal("")),
  budget: z.string().max(50).optional().or(z.literal("")),
  notes: z.string().max(1000).optional().or(z.literal("")),
});

const eventTypes = ["Wedding", "Corporate", "Birthday", "Funeral", "Graduation", "Traditional", "Other"];
const budgets = ["Under 50k", "50k – 150k", "150k – 350k", "350k+", "Not sure yet"];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    setPending(true);
    setTimeout(() => {
      setPending(false);
      setSubmitted(true);
    }, 1000);
  }

  return (
    <Layout>
      <section className="pt-40 sm:pt-48 pb-12">
        <div className="container-luxe">
          <SectionHeading
            eyebrow="Get in Touch"
            title={
              <>
                Let's plan something
                <br />
                <span className="italic text-gradient-gold">extraordinary</span>.
              </>
            }
            description="Share a few details. We typically respond within a few hours."
          />
        </div>
      </section>

      <section className="pb-28">
        <div className="container-luxe">
          <div className="grid gap-10 lg:grid-cols-12">
            {/* Contact info column */}
            <div className="lg:col-span-4 space-y-4">
              <Reveal>
                <ContactCard
                  icon={Phone}
                  title="Call us"
                  value="+254 700 000 000"
                  href="tel:+254700000000"
                />
              </Reveal>
              <Reveal delay={0.05}>
                <ContactCard
                  icon={MessageCircle}
                  title="WhatsApp"
                  value="Chat in real time"
                  href="https://wa.me/254700000000"
                />
              </Reveal>
              <Reveal delay={0.1}>
                <ContactCard
                  icon={Mail}
                  title="Email"
                  value="bookings@mcmaticha.com"
                  href="mailto:bookings@mcmaticha.com"
                />
              </Reveal>
              <Reveal delay={0.15}>
                <ContactCard
                  icon={MapPin}
                  title="Based in"
                  value="Nairobi, Kenya — Available nationwide"
                />
              </Reveal>

              <Reveal delay={0.2}>
                <div className="glass rounded-3xl p-6">
                  <div className="eyebrow mb-4">Follow</div>
                  <div className="flex items-center gap-3">
                    {[Instagram, Facebook, Youtube].map((Icon, i) => (
                      <a
                        key={i}
                        href="#"
                        className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-primary/15 hover:border-primary/60 transition-colors"
                        aria-label="Social"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="glass rounded-3xl overflow-hidden aspect-[4/3]">
                  <iframe
                    title="Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.4514!2d36.70730!3d-1.30326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1700000000000"
                    className="h-full w-full grayscale"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>

            {/* Form column */}
            <div className="lg:col-span-8">
              <Reveal>
                <div className="glass rounded-[2rem] p-8 sm:p-10 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    {submitted ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                        className="py-16 text-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                          className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-gold shadow-gold"
                        >
                          <Check className="h-8 w-8 text-[oklch(0.13_0_0)]" />
                        </motion.div>
                        <h3 className="mt-6 font-display text-3xl sm:text-4xl">
                          Booking received.
                        </h3>
                        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
                          Thank you. Our team will be in touch within a few hours with a tailored
                          proposal for your event.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.form
                        key="form"
                        onSubmit={onSubmit}
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="grid gap-5 sm:grid-cols-2"
                      >
                        <Field
                          label="Full Name"
                          name="name"
                          required
                          error={errors.name}
                        />
                        <Field
                          label="Phone Number"
                          name="phone"
                          type="tel"
                          required
                          error={errors.phone}
                        />
                        <Field
                          label="Email Address"
                          name="email"
                          type="email"
                          required
                          className="sm:col-span-2"
                          error={errors.email}
                        />
                        <Select
                          label="Event Type"
                          name="eventType"
                          options={eventTypes}
                          required
                          error={errors.eventType}
                        />
                        <Field
                          label="Event Date"
                          name="date"
                          type="date"
                          required
                          error={errors.date}
                        />
                        <Field label="Venue" name="venue" />
                        <Field label="Number of Guests" name="guests" type="number" />
                        <Field
                          label="Services Required"
                          name="services"
                          placeholder="e.g. MC, sound, catering"
                          className="sm:col-span-2"
                        />
                        <Select
                          label="Budget Range"
                          name="budget"
                          options={budgets}
                          placeholder="Select a range"
                          className="sm:col-span-2"
                        />
                        <div className="sm:col-span-2">
                          <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                            Additional Notes
                          </label>
                          <textarea
                            name="notes"
                            rows={4}
                            maxLength={1000}
                            className="mt-2 w-full rounded-2xl bg-input/40 border border-border focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none px-5 py-4 text-sm transition-all"
                            placeholder="Tell us anything else we should know…"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={pending}
                          className="sm:col-span-2 btn-gold text-sm hover:btn-gold-hover disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                          {pending ? (
                            <span className="inline-flex items-center gap-2">
                              <span className="h-3 w-3 rounded-full border-2 border-[oklch(0.13_0_0)] border-t-transparent animate-spin" />
                              Sending…
                            </span>
                          ) : (
                            <>
                              <Send className="h-4 w-4" />
                              Send Booking Request
                            </>
                          )}
                        </button>
                      </motion.form>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="glass rounded-3xl p-6 flex items-start gap-4 transition-all duration-500 hover:-translate-y-1 hover:shadow-gold">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/15 text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{title}</div>
        <div className="mt-1 text-sm sm:text-base text-foreground truncate">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
  placeholder,
  error,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        maxLength={255}
        className={`mt-2 w-full rounded-2xl bg-input/40 border ${error ? "border-destructive" : "border-border"} focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none px-5 py-3.5 text-sm transition-all`}
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Select({
  label,
  name,
  options,
  required,
  className = "",
  placeholder = "Select…",
  error,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  className?: string;
  placeholder?: string;
  error?: string;
}) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
        {label}
        {required && <span className="text-primary"> *</span>}
      </label>
      <select
        name={name}
        required={required}
        defaultValue=""
        className={`mt-2 w-full rounded-2xl bg-input/40 border ${error ? "border-destructive" : "border-border"} focus:border-primary focus:ring-2 focus:ring-primary/30 outline-none px-5 py-3.5 text-sm transition-all appearance-none cursor-pointer`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-card text-foreground">
            {o}
          </option>
        ))}
      </select>
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}
