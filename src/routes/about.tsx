import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, GraduationCap, Award, Target } from "lucide-react";
import { PageHero } from "./services";
import portrait from "@/assets/dr-uriah-portrait.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Uriah — Absolute PT South Bay" },
      { name: "description", content: "South Bay native with over 20 years in performance and rehabilitation. Trained alongside UFC champions and NHL stars." },
      { property: "og:title", content: "About Dr. Uriah J. Maimone, DPT" },
      { property: "og:description", content: "Doctor of Physical Therapy with elite-level training experience, serving South Bay in your home." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1600&q=80" },
    ],
  }),
  component: AboutPage,
});

const specialties = [
  "Orthopedic and Sports Injuries",
  "Pre-habilitation and Rehabilitation",
  "Geriatrics",
  "Parkinson's Dynamic Movement",
  "Medical Exercise Programs",
  "Strength and Conditioning",
  "Weight Training and Exercise Plans",
  "Sport Massage Therapy",
  "Optimal Biomechanics Education and Training",
  "Modalities for Faster Recovery",
  "Pain Management",
];

const education = [
  { title: "Doctor of Physical Therapy", school: "University of St. Augustine for Health Sciences" },
  { title: "M.S. Kinesiology — Exercise Science", school: "Cal Polytechnic Humboldt" },
  { title: "B.S. Kinesiology — Exercise Science", school: "Cal Polytechnic Humboldt" },
  { title: "Clinical Rotations", school: "Orthopedic and Sports Physical Therapy" },
  { title: "Certified Exercise Physiologist (EP-C)", school: "American College of Sports Medicine" },
  { title: "Certified Strength & Conditioning Specialist (CSCS)", school: "National Strength and Conditioning Association" },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Me"
        title="Dr. Uriah J. Maimone"
        subtitle="South Bay native. Doctor of Physical Therapy with over 20 years in the performance and rehabilitation space."
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Mission */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-prose">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Our Mission</div>
            <h2 className="mt-3 font-display text-4xl font-semibold md:text-5xl">
              Enhancing lives through movement
            </h2>
            <div className="mt-8 space-y-5 text-left text-primary-foreground/85 md:text-center">
              <p>
                Absolute Physical Therapy South Bay's (APTSB) Home Health Services exists to
                enhance the quality of life for those facing mobility challenges, pain, disease
                and disorders — helping people regain movement and prevent future injuries and
                disabilities.
              </p>
              <p>
                From geriatrics to youth, and recreational to elite athletes, we understand that
                people want to push themselves to greater heights. Our mission is to communicate
                and treat all aspects of pre-habilitation, rehabilitation, exercise, sports
                science, and physiology in a way that is relevant, easy to understand, backed by
                facts, and results-driven.
              </p>
              <p>
                We are confident that you will enjoy and use our services to enhance your
                performance and abilities — in your daily life, household chores, job duties, and
                sports — and go far in your future career endeavors and quality of life. Thank you
                for visiting, and hopefully choosing services from APTSB.
              </p>
            </div>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground hover:opacity-90"
            >
              Start Your Recovery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro / portrait */}
      <section className="container-prose py-20">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="ring-soft sticky top-24 rounded-3xl bg-cream-deep p-4">
              <img src={portrait} alt="Dr. Uriah J. Maimone, DPT" className="w-full rounded-2xl object-cover" />
              <div className="mt-5 px-2 pb-2">
                <div className="font-display text-2xl font-semibold text-foreground">Dr. Uriah J. Maimone</div>
                <div className="mt-1 text-sm font-semibold tracking-wider text-primary">PT, DPT, CSCS, EP-C</div>
                <Link to="/contact" className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                  Book a Free Consultation <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-12">
            {/* Bio */}
            <div>
              <div className="flex items-center gap-2 text-primary">
                <Target className="h-5 w-5" />
                <div className="eyebrow !text-primary">Bio</div>
              </div>
              <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
                Two decades of elite performance and rehabilitation
              </h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Dr. Uriah Maimone, a South Bay native, holds a Bachelor of Science and Master of
                  Science, both in Kinesiology from Cal Polytechnic Humboldt (CPH) with a focus in
                  Exercise Science Human Performance. His thesis at CPH, the first of its kind,
                  compared elite and amateur Mixed Martial Art (MMA) athletes in terms of various
                  physical attributes, including body composition, skill-related physical tests,
                  and muscular fitness. This research was submitted for publication in the Journal
                  of Strength and Conditioning.
                </p>
                <p>
                  Dr. Uriah interned and worked at an Elite Performance Center in Montreal,
                  Quebec, specializing in athletic performance enhancement for top-level athletes,
                  including those in the UFC and NHL.
                </p>
                <p>
                  He pursued further education and obtained his Doctorate in Physical Therapy
                  (DPT) from the University of St. Augustine for Health Sciences in San Marcos,
                  CA. Dr. Uriah's extensive training includes manual techniques, movement-based
                  approaches, and weight training methods. He utilizes functional movement
                  assessments and current research to create personalized rehabilitation programs
                  for patients, helping them manage pain and disease, regain movement, and prevent
                  future injuries and disabilities.
                </p>
                <p>
                  Outside of his work, Dr. Uriah is deeply involved in MMA, with over 20 years of
                  experience in training and participation. He also enjoys movies, Marvel and DC
                  comics, exercise, and spending time with family and friends. His unique
                  perspective and experiences drive his commitment to pushing boundaries and
                  advancing the field to better serve others.
                </p>
              </div>
            </div>

            {/* Specialties */}
            <div>
              <div className="flex items-center gap-2 text-primary">
                <Award className="h-5 w-5" />
                <div className="eyebrow !text-primary">Specialties</div>
              </div>
              <h3 className="mt-3 font-display text-3xl font-semibold text-foreground">
                Eleven areas of expertise
              </h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {specialties.map((s) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground/90"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 text-primary">
                <GraduationCap className="h-5 w-5" />
                <div className="eyebrow !text-primary">Education & Certifications</div>
              </div>
              <h3 className="mt-3 font-display text-3xl font-semibold text-foreground">
                Three degrees, two elite certifications
              </h3>
              <ul className="mt-6 space-y-3">
                {education.map((e) => (
                  <li
                    key={e.title}
                    className="rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/40"
                  >
                    <div className="font-display text-lg font-semibold text-foreground">{e.title}</div>
                    <div className="mt-1 text-sm text-muted-foreground">{e.school}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
