import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero } from "./services";
import portrait from "@/assets/dr-uriah-portrait.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Uriah — Absolute PT South Bay" },
      { name: "description", content: "South Bay native with over 20 years in performance and rehabilitation. Trained alongside UFC champions." },
      { property: "og:title", content: "About Dr. Uriah J. Maimone, DPT" },
      { property: "og:description", content: "Doctor of Physical Therapy with elite-level training experience, serving South Bay in your home." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1600&q=80" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Absolute PT South Bay"
        title="About Dr. Uriah"
        subtitle="South Bay native with over 20 years in the performance and rehabilitation space."
        image="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="container-prose py-20">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="ring-soft rounded-3xl bg-cream-deep p-4">
              <img src={portrait} alt="Dr. Uriah J. Maimone, DPT" className="w-full rounded-2xl object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="eyebrow">Meet Your Therapist</div>
            <h2 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">Dr. Uriah J. Maimone</h2>
            <div className="mt-2 text-sm font-semibold tracking-wider text-primary">PT, DPT, CSCS, EP-C</div>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>South Bay native with over 20 years in the performance and rehabilitation space.
              His thesis at Cal Poly Humboldt — the first of its kind — compared elite and amateur MMA athletes
              across body composition, skill-related physical tests, and muscular fitness, and was submitted
              to the Journal of Strength and Conditioning.</p>
              <p>Dr. Uriah interned at the Adrenaline Performance Center in Montreal under coach Jonathan Chaimberg,
              training alongside UFC champions Georges St-Pierre, Jon Jones, Rashad Evans, and NHL stars Kris Letang
              and Jakub Voráček. He brings this elite-level training expertise directly to your home.</p>
              <p>Outside of PT, Dr. Uriah enjoys movies, Marvel and DC comics, exercise, and spending time with
              family and friends.</p>
            </div>

            <h3 className="mt-10 font-display text-2xl font-semibold text-foreground">Education & Certifications</h3>
            <ul className="mt-4 grid gap-3 text-sm text-foreground/85 sm:grid-cols-2">
              {[
                "University of St. Augustine — DPT",
                "Cal Poly Humboldt — M.S. Kinesiology",
                "Cal Poly Humboldt — B.S. Kinesiology",
                "ACSM — Certified Exercise Physiologist (EP-C)",
                "NSCA — Certified Strength & Conditioning Specialist (CSCS)",
              ].map((c) => (
                <li key={c} className="rounded-xl border border-border bg-card px-4 py-3">{c}</li>
              ))}
            </ul>
            <Link to="/contact" className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
              Book a Free Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
