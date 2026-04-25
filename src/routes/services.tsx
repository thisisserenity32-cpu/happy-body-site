import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { InteractiveGuide } from "@/components/InteractiveGuide";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "What We Treat — Absolute PT South Bay" },
      { name: "description", content: "Comprehensive physical therapy across 11 specialties — orthopedic, sports, geriatrics, Parkinson's, and more, delivered to your home." },
      { property: "og:title", content: "What We Treat — Absolute PT South Bay" },
      { property: "og:description", content: "Eleven specialties, fully personalized, delivered in your home across South Bay." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { id: "orthopedic-sports", title: "Orthopedic & Sports Injuries", lead: "Expert treatment for musculoskeletal injuries and sports-related conditions.",
    body: "Dr. Uriah uses evidence-based manual therapy and therapeutic exercise to restore function after injury — from weekend recreation to elite competition.",
    points: ["Fractures, sprains, strains, post-surgical recovery", "ACL/MCL tears and rotator cuff injuries", "Tennis & golfer's elbow, repetitive stress", "Sport-specific return-to-play protocols"] },
  { id: "prehab-rehab", title: "Pre-habilitation & Rehabilitation", lead: "Prepare for surgery or recover post-operatively with guided protocols.",
    body: "Pre-hab strengthens your body before surgery to improve outcomes and speed recovery. Post-op rehab follows structured protocols to safely restore full function.",
    points: ["Pre-surgical strengthening and mobility", "Joint replacement recovery (hip, knee, shoulder)", "Arthroscopic surgery rehab", "Progressive return to daily activities and sport"] },
  { id: "geriatrics", title: "Geriatrics", lead: "Specialized care for aging adults to maintain mobility and independence.",
    body: "Gentle yet effective therapy tailored for seniors — focused on independence, fall prevention, and quality of life through evidence-based exercise and balance training.",
    points: ["Fall prevention and balance training", "Mobility restoration and gait training", "Osteoporosis-safe programs", "Home safety assessment"] },
  { id: "parkinsons", title: "Parkinson's Dynamic Movement", lead: "Evidence-based movement therapy for Parkinson's disease management.",
    body: "Using LSVT BIG and other evidence-based protocols to combat the movement challenges of Parkinson's — large-amplitude movements, functional mobility, and independence.",
    points: ["LSVT BIG–style movement therapy", "Large-amplitude movement training", "Balance & fall prevention strategies", "Caregiver education and support"] },
  { id: "medical-exercise", title: "Medical Exercise Programs", lead: "Physician-guided exercise prescriptions for chronic conditions.",
    body: "Safe, progressive exercise programs for patients with chronic medical conditions, monitored by a certified exercise physiologist.",
    points: ["Diabetes management through exercise", "Cardiovascular rehabilitation", "Weight management programs", "Chronic disease self-management"] },
  { id: "strength-conditioning", title: "Strength & Conditioning", lead: "Certified CSCS programming for athletes and active individuals.",
    body: "Build functional strength, improve athletic performance, and reduce injury risk through periodized training programs designed by a certified Strength & Conditioning Specialist.",
    points: ["Periodized strength training", "Athletic performance optimization", "Injury prevention & movement screening", "Sport-specific conditioning"] },
  { id: "weight-training", title: "Weight Training & Exercise Plans", lead: "Customized training plans tailored to your goals and abilities.",
    body: "Whether building muscle, losing weight, improving endurance, or enhancing fitness, Dr. Uriah creates personalized resistance and exercise programs.",
    points: ["Customized resistance programs", "Hypertrophy plans", "Body composition programs", "Progressive overload & periodization"] },
  { id: "sport-massage", title: "Sport Massage Therapy", lead: "Therapeutic massage to aid recovery and enhance performance.",
    body: "Therapeutic sports massage integrated into your treatment plan to improve tissue mobility, reduce muscle tension, and accelerate recovery.",
    points: ["Deep tissue & myofascial release", "Pre/post-event sports massage", "Trigger point therapy", "Scar tissue management"] },
  { id: "biomechanics", title: "Optimal Biomechanics Education", lead: "Education and training for efficient, injury-free movement patterns.",
    body: "Learn how your body moves and how to move it better — gait analysis, posture correction, and movement pattern training.",
    points: ["Gait analysis and correction", "Posture assessment & retraining", "Running mechanics", "Ergonomic workspace evaluation"] },
  { id: "modalities", title: "Modalities for Faster Recovery", lead: "Advanced recovery techniques alongside manual therapy and exercise.",
    body: "Evidence-based recovery modalities accelerate healing, reduce pain, and improve tissue recovery.",
    points: ["Electrical stimulation (TENS, NMES)", "Therapeutic ultrasound", "Cryo & heat therapy", "Cupping, IASTM, kinesio taping"] },
  { id: "pain-management", title: "Pain Management", lead: "Comprehensive approaches to chronic and acute pain relief.",
    body: "Non-pharmacological pain management combining manual therapy, therapeutic exercise, neuroscience education, and self-management strategies.",
    points: ["Manual therapy & joint mobilization", "Pain neuroscience education", "Graded exposure & activity modification", "Long-term self-management"] },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialties"
        title="What We Treat"
        subtitle="Comprehensive physical therapy across 11 specialties — all delivered to your home across South Bay."
        image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="container-prose py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <article key={s.id} id={s.id} className="rounded-3xl border border-border bg-card p-8 transition-shadow hover:shadow-lg">
              <h3 className="font-display text-2xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 font-medium text-primary">{s.lead}</p>
              <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
              <ul className="mt-5 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-foreground/80">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
            Schedule a Free Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

export function PageHero({ eyebrow, title, subtitle, image }: { eyebrow: string; title: string; subtitle: string; image: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={image} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/30" />
      </div>
      <div className="container-prose py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="eyebrow">{eyebrow}</div>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[1.05] text-primary md:text-6xl">{title}</h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
