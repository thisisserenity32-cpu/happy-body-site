import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/dr-uriah-hero.jpg";
import portrait from "@/assets/dr-uriah-portrait.png";
import {
  ChevronLeft, ChevronRight, ArrowRight, Home, Video, CheckCircle2,
} from "lucide-react";
import { InteractiveGuide } from "@/components/InteractiveGuide";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Absolute PT South Bay — Concierge Physical Therapy in Your Home" },
      { name: "description", content: "Expert orthopedic and sports physical therapy delivered to your door across South Bay. Telehealth available statewide." },
      { property: "og:title", content: "Absolute PT South Bay — Concierge Physical Therapy" },
      { property: "og:description", content: "Real results. Your home. Expert care from Dr. Uriah, DPT." },
    ],
  }),
  component: HomePage,
});

const clients = [
  { name: "Georges St-Pierre", tag: "MMA / UFC", note: "3× UFC Welterweight Champion", img: "https://images.unsplash.com/photo-1583473848882-f9a5bc7fd2ee?auto=format&fit=crop&w=900&q=80" },
  { name: "Jon Jones", tag: "MMA / UFC", note: "UFC Light Heavyweight Champion", img: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?auto=format&fit=crop&w=900&q=80" },
  { name: "Rashad Evans", tag: "MMA / UFC", note: "UFC Light Heavyweight Champion", img: "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?auto=format&fit=crop&w=900&q=80" },
  { name: "Kris Letang", tag: "NHL Hockey", note: "2× Stanley Cup Champion", img: "https://images.unsplash.com/photo-1515703407324-5f51d2ad8423?auto=format&fit=crop&w=900&q=80" },
  { name: "Jean Pascal", tag: "Boxing", note: "World Boxing Champion", img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&w=900&q=80" },
];

const treatments = [
  { title: "Orthopedic & Sports Injuries", desc: "Manual therapy and progressive strengthening to restore function after injury." },
  { title: "Pre-hab & Rehabilitation", desc: "Prepare for surgery or recover post-op with guided protocols." },
  { title: "Geriatrics", desc: "Specialized care to maintain mobility and independence." },
  { title: "Parkinson's Dynamic Movement", desc: "Evidence-based LSVT BIG–style movement therapy." },
  { title: "Medical Exercise Programs", desc: "Physician-guided exercise prescriptions for chronic conditions." },
  { title: "Strength & Conditioning", desc: "Periodized CSCS programming for athletes and active adults." },
];

const bodyRegions = [
  { id: "neck", label: "Head & Neck", desc: "Stiffness, headaches, and limited rotation in the cervical spine.", feels: "Often a dull ache that radiates into the shoulders or skull, sometimes with tingling down the arm." },
  { id: "shoulder", label: "Shoulder", desc: "Rotator cuff strains, impingement, and post-surgical recovery.", feels: "Sharp pain when reaching overhead, weakness lifting objects, and restless nights from side-sleeping." },
  { id: "arm", label: "Arm & Elbow", desc: "Tennis elbow, golfer's elbow, and repetitive stress conditions.", feels: "Burning along the outer or inner elbow, weak grip strength, and pain when twisting or lifting." },
  { id: "back", label: "Back & Core", desc: "Disc-related pain, postural fatigue, and core instability.", feels: "Tight, locked-up sensation across the low back, sometimes shooting into the hip or down the leg." },
  { id: "hip", label: "Hip & Pelvis", desc: "Hip impingement, bursitis, and post-replacement rehab.", feels: "Pinching in the front of the hip when sitting and a deep ache walking up stairs." },
  { id: "knee", label: "Leg & Knee", desc: "ACL/MCL injuries, patellar tracking issues, and arthritis.", feels: "Swelling, instability, and a grinding sensation under the kneecap when bending." },
  { id: "foot", label: "Foot & Ankle", desc: "Plantar fasciitis, sprains, and post-fracture recovery.", feels: "Stabbing pain in the heel with the first morning steps, or unstable ankle on uneven ground." },
];

function HomePage() {
  return (
    <>
      <Hero />
      <CertificationsBar />
      <ClientsCarousel />
      <AboutPreview />
      <InteractiveGuide />
      <HowWeServe />
      <WhatWeTreat />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-prose grid items-center gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <div className="eyebrow">Absolute PT South Bay</div>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] text-primary md:text-6xl lg:text-7xl">
            Expert care.<br/>
            <span className="text-foreground">Your home.</span><br/>
            Real results.
          </h1>
          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Orthopedic and sports physical therapy delivered to your door across South Bay,
            Southern California. Telehealth available statewide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02]">
              Book Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-cream px-6 py-3 text-sm font-semibold text-primary hover:bg-primary-soft">
              See What We Treat
            </Link>
          </div>
        </div>

        {/* Image takes >half horizontally on desktop (7/12 = 58%) */}
        <div className="lg:col-span-7">
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary-soft/60 blur-2xl" />
            <img
              src={heroImg}
              alt="Dr. Uriah delivering in-home physical therapy"
              className="ring-soft aspect-[4/3] w-full rounded-[2rem] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function CertificationsBar() {
  const items = ["ACSM Certified", "NSCA Certified", "Doctor of Physical Therapy", "Cal Poly Humboldt", "University of St. Augustine"];
  return (
    <div className="border-y border-border/60 bg-cream-deep">
      <div className="container-prose flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5">
        {items.map((i) => (
          <div key={i} className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.14em] text-primary">
            <CheckCircle2 className="h-4 w-4 text-accent" /> {i}
          </div>
        ))}
      </div>
    </div>
  );
}

function ClientsCarousel() {
  const [idx, setIdx] = useState(0);
  const visible = 3;
  const max = clients.length - visible;
  const go = (n: number) => setIdx(Math.max(0, Math.min(max, n)));

  return (
    <section className="container-prose py-20">
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="eyebrow">Notable Clients</div>
          <h2 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">Patients & Clients</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Dr. Uriah has trained alongside world champions and elite athletes —
            bringing that same caliber of expertise to every patient.
          </p>
        </div>
        <div className="hidden gap-2 md:flex">
          <button onClick={() => go(idx - 1)} disabled={idx === 0}
            className="rounded-full border border-border bg-cream p-3 text-primary hover:bg-primary-soft disabled:opacity-40">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button onClick={() => go(idx + 1)} disabled={idx >= max}
            className="rounded-full border border-border bg-cream p-3 text-primary hover:bg-primary-soft disabled:opacity-40">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-10 overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-500"
          style={{ transform: `translateX(calc(-${idx} * (100% / ${visible} + 0px)))` }}
        >
          {clients.map((c) => (
            <article key={c.name} className="ring-soft shrink-0 basis-full overflow-hidden rounded-2xl bg-card sm:basis-1/2 lg:basis-1/3">
              <div className="aspect-[4/5] overflow-hidden">
                <img src={c.img} alt={c.name} className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
              <div className="p-6">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">{c.tag}</div>
                <h3 className="mt-2 font-display text-2xl font-semibold text-foreground">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.note}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary-soft">
          View More <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="bg-cream-deep py-20">
      <div className="container-prose grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-3xl bg-primary/10" />
          <img src={portrait} alt="Dr. Uriah J. Maimone" className="ring-soft w-full rounded-3xl bg-cream object-cover" />
        </div>
        <div>
          <div className="eyebrow">Meet Your Therapist</div>
          <h2 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">Dr. Uriah J. Maimone</h2>
          <div className="mt-2 text-sm font-semibold tracking-wider text-primary">PT, DPT, CSCS, EP-C</div>
          <p className="mt-5 text-muted-foreground">
            South Bay native with over 20 years in the performance and rehabilitation space.
            Trained alongside UFC champions Georges St-Pierre and Jon Jones, Dr. Uriah brings
            elite-level expertise directly to your home.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[["20+","Years"],["3","Degrees"],["11","Specialties"],["100%","Personalized"]].map(([n,l]) => (
              <div key={l} className="rounded-2xl border border-border bg-cream p-4 text-center">
                <div className="font-display text-3xl font-semibold text-primary">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
          <Link to="/about" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Learn More About Dr. Uriah <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function HowWeServe() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container-prose py-20">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">How We Serve You</div>
          <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">Visit Options</h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {[
            { icon: Home, title: "In-Home Visits", body: "Dr. Uriah comes to your home across South Bay. Full hands-on evaluation in your own environment.",
              points: ["No commute or waiting rooms", "Full 60+ minute sessions", "Personalized home exercise programs"] },
            { icon: Video, title: "Telehealth", body: "Statewide across California via secure video call. Perfect for follow-ups and consultations.",
              points: ["Available across all of California", "HIPAA-compliant video", "Affordable $85/session"] },
          ].map(({ icon: Icon, title, body, points }) => (
            <div key={title} className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-8 backdrop-blur">
              <Icon className="h-8 w-8 text-accent" />
              <h3 className="mt-4 font-display text-2xl font-semibold">{title}</h3>
              <p className="mt-2 text-primary-foreground/80">{body}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeTreat() {
  return (
    <section className="container-prose py-20">
      <div className="flex items-end justify-between gap-6">
        <div>
          <div className="eyebrow">Specialties</div>
          <h2 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">What We Treat</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Comprehensive physical therapy across 11 specialties — delivered with personalized attention in your home.
          </p>
        </div>
        <Link to="/services" className="hidden shrink-0 items-center gap-2 rounded-full border border-primary/20 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary-soft md:inline-flex">
          See All <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {treatments.map((t) => (
          <Link key={t.title} to="/services"
            className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
            <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary">{t.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
              Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="container-prose py-20">
      <div className="ring-soft overflow-hidden rounded-3xl bg-cream-deep p-10 text-center md:p-16">
        <div className="eyebrow">Get In Touch</div>
        <h2 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">Ready to start?</h2>
        <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
          Schedule your free 15–20 minute consultation and take the first step toward recovery.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="tel:310-704-7177" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Call 310-704-7177
          </a>
          <Link to="/contact" className="rounded-full border border-primary/20 bg-cream px-6 py-3 text-sm font-semibold text-primary hover:bg-primary-soft">
            Send a Message
          </Link>
        </div>
      </div>
    </section>
  );
}
