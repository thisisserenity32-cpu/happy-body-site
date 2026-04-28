import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, Instagram, MapPin, Send } from "lucide-react";
import { PageHero } from "./services";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Absolute PT South Bay" },
      { name: "description", content: "Schedule a free 15–20 minute consultation with Dr. Uriah. In-home physical therapy across South Bay, telehealth statewide." },
      { property: "og:title", content: "Contact Absolute PT South Bay" },
      { property: "og:description", content: "Concierge physical therapy from the comfort of your home." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1597864489948-0d65fdcb29d4?auto=format&fit=crop&w=1600&q=80" },
    ],
  }),
  component: ContactPage,
});

const concerns = ["Back / Neck Pain","Shoulder Injury","Knee / Hip Pain","Post-Surgery Rehab","Sports Injury","Geriatric / Balance","Parkinson's","Strength & Conditioning","Pain Management","Other"];
const visits = ["In-Home Visit","Telehealth (Video)","Free Phone Consultation"];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Concierge Services"
        title="Contact Us"
        subtitle="Concierge services from the comfort of your home — let's start with a free 15–20 minute call."
        image="https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=1600&q=80"
      />

      <section className="container-prose py-20">
        <div className="ring-soft mb-14 rounded-3xl bg-primary p-10 text-center text-primary-foreground md:p-14">
          <h2 className="font-display text-3xl font-semibold md:text-4xl">Schedule Your Free 15–20 Minute Consultation</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
            Not sure if in-home physical therapy is right for you? Talk directly with Dr. Uriah —
            no commitment, no cost.
          </p>
          <a href="tel:310-704-7177" className="mt-7 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90">
            <Phone className="h-4 w-4" /> Call Now — It's Free
          </a>
        </div>

        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground">Get In Touch</h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li><a href="tel:310-704-7177" className="flex items-center gap-3 text-foreground/85 hover:text-primary"><Phone className="h-4 w-4 text-primary" /> 310-704-7177</a></li>
                <li><a href="mailto:dr@absoluteptsb.com" className="flex items-center gap-3 text-foreground/85 hover:text-primary"><Mail className="h-4 w-4 text-primary" /> dr@absoluteptsb.com</a></li>
                <li><a href="https://instagram.com/DOCTOR_URIAH" className="flex items-center gap-3 text-foreground/85 hover:text-primary"><Instagram className="h-4 w-4 text-primary" /> @DOCTOR_URIAH</a></li>
                <li className="flex items-center gap-3 text-foreground/85"><MapPin className="h-4 w-4 text-primary" /> South Bay, Southern California</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-cream-deep p-6">
              <h4 className="font-display text-lg font-semibold text-foreground">Insurance Verification</h4>
              <p className="mt-2 text-sm text-muted-foreground">We work with insurance through Luna Physical Therapy. Call and request Dr. Uriah Maimone.</p>
              <a href="tel:8344445862" className="mt-3 inline-block text-sm font-semibold text-primary hover:underline">834-444-LUNA</a>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h4 className="font-display text-lg font-semibold text-foreground">Service Areas</h4>
              <div className="mt-3 grid grid-cols-2 gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
                {["Manhattan Beach","Hermosa Beach","Redondo Beach","Torrance","Palos Verdes","El Segundo","Hawthorne","Gardena","Lomita","Harbor City","San Pedro","Rolling Hills"].map((a) => <div key={a}>{a}</div>)}
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="ring-soft lg:col-span-3 space-y-4 rounded-3xl border border-border bg-card p-8"
          >
            <h3 className="font-display text-2xl font-semibold text-foreground">Send a Message</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name *"><input required className="field-input" /></Field>
              <Field label="Email *"><input type="email" required className="field-input" /></Field>
              <Field label="Phone *"><input type="tel" required className="field-input" /></Field>
              <Field label="Visit Type Preference *">
                <select required className="field-input">
                  <option value="">Select visit type</option>
                  {visits.map((v) => <option key={v}>{v}</option>)}
                </select>
              </Field>
            </div>
            <Field label="Area of Concern *">
              <select required className="field-input">
                <option value="">Select an area of concern</option>
                {concerns.map((c) => <option key={c}>{c}</option>)}
              </select>
            </Field>
            <Field label="Message (Optional)">
              <textarea rows={4} className="field-input resize-none" />
            </Field>
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              <Send className="h-4 w-4" /> Send Message
            </button>
            {sent && <p className="text-sm text-primary">Thanks — Dr. Uriah will be in touch shortly.</p>}
            <style>{`.field-input{width:100%;border-radius:0.75rem;border:1px solid var(--color-border);background:var(--color-cream);padding:0.75rem 1rem;font-size:0.875rem;color:var(--color-foreground);outline:none;transition:border-color .15s}.field-input:focus{border-color:var(--color-primary);box-shadow:0 0 0 3px color-mix(in oklab, var(--color-primary) 18%, transparent)}`}</style>
          </form>
        </div>

        {/* Transparent Pricing */}
        <div className="mt-20 text-center">
          <div className="eyebrow">Transparent Pricing</div>
          <h2 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
            Investment in Your Health
          </h2>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Free Consultation", time: "15–20 min", price: "Free", desc: "Phone or video call to discuss your needs", featured: false },
            { name: "Initial Session", time: "60+ min", price: "$200", desc: "Comprehensive in-home evaluation & treatment", featured: true },
            { name: "Follow-Up", time: "50 min", price: "$150", desc: "Continued in-home therapy session", featured: false },
            { name: "Telehealth", time: "60 min", price: "$85", desc: "Video session from anywhere in California", featured: false },
          ].map((p) => (
            <div
              key={p.name}
              className={`ring-soft rounded-2xl p-6 text-center transition-transform hover:-translate-y-1 ${
                p.featured
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-card text-foreground"
              }`}
            >
              <div className={`font-display text-lg font-semibold ${p.featured ? "" : "text-foreground"}`}>{p.name}</div>
              <div className={`mt-1 text-sm ${p.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>{p.time}</div>
              <div className={`mt-5 font-display text-5xl font-semibold ${p.featured ? "" : "text-primary"}`}>{p.price}</div>
              <p className={`mt-4 text-sm ${p.featured ? "text-primary-foreground/85" : "text-muted-foreground"}`}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}
