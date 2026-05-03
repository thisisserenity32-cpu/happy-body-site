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
      { title: "Absolute PT South Bay. Concierge Physical Therapy in Your Home" },
      { name: "description", content: "Expert orthopedic and sports physical therapy delivered to your door across South Bay. Telehealth available statewide." },
      { property: "og:title", content: "Absolute PT South Bay. Concierge Physical Therapy" },
      { property: "og:description", content: "Real results. Your home. Expert care from Dr. Uriah, DPT." },
    ],
  }),
  component: HomePage,
});

const clients = [
  { name: "Jonathan Chaimberg", tag: "Strength & Conditioning Coach", note: "Mentor. Owner of Adrenaline Performance Center, Montreal", img: "https://static.wixstatic.com/media/64b1f1_8b8ed6d3837c4f3c9c5f900311824ac9~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_8b8ed6d3837c4f3c9c5f900311824ac9~mv2.jpg" },
  { name: "Voráček & Letang", tag: "NHL. Ice Hockey", note: "Philadelphia Flyers · 3× Stanley Cup Champion", img: "https://static.wixstatic.com/media/64b1f1_c4d17ddcea7c4c808a2a970410d2ac59~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_c4d17ddcea7c4c808a2a970410d2ac59~mv2.jpg" },
  { name: "Firas Zahabi & GSP", tag: "Tristar Gym. UFC", note: "3× UFC Welterweight Champion", img: "https://static.wixstatic.com/media/64b1f1_52bb4b9a1aeb4b2bb256b6a3bdc6407d~mv2.jpeg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_52bb4b9a1aeb4b2bb256b6a3bdc6407d~mv2.jpeg" },
  { name: "Chad Laprise", tag: "UFC. Mixed Martial Arts", note: "Winner. The Ultimate Fighter Nations", img: "https://static.wixstatic.com/media/64b1f1_01eb9b2deca94c1aa5cfab183757f6f4~mv2.jpg/v1/fill/w_449,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_01eb9b2deca94c1aa5cfab183757f6f4~mv2.jpg" },
  { name: "Jiří Hudler", tag: "NHL. Ice Hockey", note: "Calgary Flames · Detroit Red Wings", img: "https://static.wixstatic.com/media/64b1f1_494866173fe7436e9479c556850ed8a9~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_494866173fe7436e9479c556850ed8a9~mv2.jpg" },
  { name: "Jean Pascal", tag: "Boxing. Professional", note: "World Boxing Champion", img: "https://static.wixstatic.com/media/64b1f1_9be03d3bc0774b0fbe957d158e177528~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_9be03d3bc0774b0fbe957d158e177528~mv2.jpg" },
  { name: "Cheick Kongo", tag: "MMA. Professional", note: "Heavyweight MMA & Kickboxing", img: "https://static.wixstatic.com/media/64b1f1_1d853b354f88496f90cf0535875f99f8~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_1d853b354f88496f90cf0535875f99f8~mv2.jpg" },
  { name: "Alex Garcia", tag: "UFC. Mixed Martial Arts", note: "'Dominican Nightmare'. UFC Welterweight", img: "https://static.wixstatic.com/media/64b1f1_e8eab62fd8784ec6b5c8fbbfc2a30fe8~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_e8eab62fd8784ec6b5c8fbbfc2a30fe8~mv2.jpg" },
  { name: "Rory MacDonald", tag: "UFC. Mixed Martial Arts", note: "Bellator Welterweight Champion. 'The Red King'", img: "https://static.wixstatic.com/media/64b1f1_ff40f4315e774eaf84a12179ee23b06a~mv2.jpeg/v1/fill/w_449,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_ff40f4315e774eaf84a12179ee23b06a~mv2.jpeg" },
  { name: "Kris Letang", tag: "NHL. Pittsburgh Penguins", note: "3× Stanley Cup Champion Defenseman", img: "https://static.wixstatic.com/media/64b1f1_4653d7aff21f4ec69dad80e7efa992d3~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_4653d7aff21f4ec69dad80e7efa992d3~mv2.jpg" },
  { name: "Antoni Mckee", tag: "MMA Professional Fighter and Coach", note: "Professional MMA Fighter and Coach", img: "https://static.wixstatic.com/media/64b1f1_42bd0562829c4071acae7cf943cf02cf~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_42bd0562829c4071acae7cf943cf02cf~mv2.jpg" },
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
      <InteractiveGuide />
      <ClientsCarousel />
      <AboutPreview />
      <WhatWeTreat />
      <HowWeServe />
      <FAQSection />
      <CTASection />
    </>
  );
}

function FAQSection() {
  const faqs = [
    {
      q: "Do I need a doctor's referral to see a physical therapist?",
      a: "In California, you can see a physical therapist without a physician referral through direct access. However, some insurance plans may require one. We'll help guide you through the process.",
    },
    {
      q: "Do you accept insurance?",
      a: "We work with insurance through Luna Physical Therapy. Call 834-444-LUNA and request Dr. Uriah Maimone, and we'll handle verification from there.",
    },
    {
      q: "What areas do you serve?",
      a: "In-home visits across South Bay including Manhattan Beach, Hermosa Beach, Redondo Beach, Torrance, Palos Verdes, El Segundo, and surrounding cities. Telehealth is available statewide across California.",
    },
    {
      q: "How long is each session?",
      a: "Initial in-home evaluations run 60+ minutes. Follow-up sessions are 50 minutes, and telehealth visits are 60 minutes. Fully personalized one-on-one with Dr. Uriah.",
    },
    {
      q: "What should I expect during my first visit?",
      a: "A comprehensive evaluation, hands-on treatment, and a personalized plan with home exercises. All in the comfort of your own space, with no commute or waiting room.",
    },
  ];
  return (
    <section className="bg-cream-deep py-20">
      <div className="container-prose">
        <div className="text-center">
          <div className="eyebrow">Common Questions</div>
          <h2 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
          {faqs.map((f) => (
            <details key={f.q} className="group p-6">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-semibold text-foreground marker:hidden [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="text-2xl text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
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
            <Link to="/contact" className="btn-recovery inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm">
              Start Your Recovery <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-cream px-6 py-3 text-sm font-semibold text-primary hover:bg-primary-soft">
              See Treatment
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
            Dr. Uriah has trained alongside world champions and elite athletes , 
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
                <img src={c.img} alt={c.name} className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105" />
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
        <Link to="/patients-clients" className="inline-flex items-center gap-2 rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary-soft">
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
              <div key={l} className="flex min-h-[110px] flex-col items-center justify-center rounded-2xl border border-border bg-cream p-4 text-center">
                <div className="font-display text-3xl font-semibold leading-none text-primary">{n}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
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

        {/* Pricing tiers */}
        <div className="mt-16">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Transparent Pricing</div>
          <h3 className="mt-3 font-display text-3xl font-semibold md:text-4xl">Choose the visit that fits you</h3>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Free Consultation", time: "15–20 min", price: "Free", desc: "Phone or video call to discuss your needs", featured: false },
            { name: "Initial Session", time: "60+ min", price: "$200", desc: "Comprehensive in-home evaluation & treatment", featured: true },
            { name: "Follow-Up", time: "50 min", price: "$150", desc: "Continued in-home therapy session", featured: false },
            { name: "Telehealth", time: "60 min", price: "$85", desc: "Video session from anywhere in California", featured: false },
          ].map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-6 text-center transition-transform hover:-translate-y-1 ${
                p.featured
                  ? "bg-accent text-accent-foreground ring-2 ring-accent"
                  : "border border-primary-foreground/15 bg-primary-foreground/5 text-primary-foreground"
              }`}
            >
              <div className="font-display text-lg font-semibold">{p.name}</div>
              <div className={`mt-1 text-sm ${p.featured ? "text-accent-foreground/80" : "text-primary-foreground/70"}`}>{p.time}</div>
              <div className="mt-5 font-display text-5xl font-semibold">{p.price}</div>
              <p className={`mt-4 text-sm ${p.featured ? "text-accent-foreground/90" : "text-primary-foreground/80"}`}>{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/contact" className="btn-recovery inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground">
            Start Your Recovery <ArrowRight className="h-4 w-4" />
          </Link>
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
          <h2 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">Treatment</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Comprehensive physical therapy across 11 specialties. Delivered with personalized attention in your home.
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
          <a href="tel:310-704-7177" className="rounded-full border border-primary/20 bg-cream px-6 py-3 text-sm font-semibold text-primary hover:bg-primary-soft">
            Call 310-704-7177
          </a>
          <Link to="/contact" className="btn-recovery rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground">
            Start Your Recovery
          </Link>
        </div>
      </div>
    </section>
  );
}
