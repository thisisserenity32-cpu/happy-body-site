import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { InteractiveGuide } from "@/components/InteractiveGuide";
import { BookingCTA } from "@/components/BookingCTA";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Treatment. Absolute PT South Bay" },
      { name: "description", content: "Comprehensive physical therapy across 11 specialties. orthopedic, sports, geriatrics, Parkinson's, and more, delivered to your home." },
      { property: "og:title", content: "Treatment. Absolute PT South Bay" },
      { property: "og:description", content: "Eleven specialties, fully personalized, delivered in your home across South Bay." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { id: "orthopedic-sports", title: "Orthopedic & Sports Injuries", lead: "Expert treatment for musculoskeletal injuries and sports-related conditions.",
    body: "Dr. Uriah uses evidence-based manual therapy and therapeutic exercise to restore function after injury. from weekend recreation to elite competition.",
    img: "https://images.unsplash.com/photo-1535743686920-55e4145369b9?w=800&q=80", alt: "Sports rehabilitation treatment",
    points: ["Fractures, sprains, strains, post-surgical recovery", "ACL/MCL tears and rotator cuff injuries", "Tennis & golfer's elbow, repetitive stress", "Sport-specific return-to-play protocols"] },
  { id: "prehab-rehab", title: "Pre-habilitation & Rehabilitation", lead: "Prepare for surgery or recover post-operatively with guided protocols.",
    body: "Pre-hab strengthens your body before surgery to improve outcomes and speed recovery. Post-op rehab follows structured protocols to safely restore full function.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80", alt: "Post surgical recovery therapy",
    points: ["Pre-surgical strengthening and mobility", "Joint replacement recovery (hip, knee, shoulder)", "Arthroscopic surgery rehab", "Progressive return to daily activities and sport"] },
  { id: "geriatrics", title: "Geriatrics", lead: "Specialized care for aging adults to maintain mobility and independence.",
    body: "Gentle yet effective therapy tailored for seniors. focused on independence, fall prevention, and quality of life through evidence-based exercise and balance training.",
    img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80", alt: "Back and neck pain treatment",
    points: ["Fall prevention and balance training", "Mobility restoration and gait training", "Osteoporosis-safe programs", "Home safety assessment"] },
  { id: "parkinsons", title: "Parkinson's Dynamic Movement", lead: "Evidence-based movement therapy for Parkinson's disease management.",
    body: "Using LSVT BIG and other evidence-based protocols to combat the movement challenges of Parkinson's. large-amplitude movements, functional mobility, and independence.",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80", alt: "Parkinson's dynamic movement therapy balance training",
    points: ["LSVT BIG–style movement therapy", "Large-amplitude movement training", "Balance & fall prevention strategies", "Caregiver education and support"] },
  { id: "medical-exercise", title: "Medical Exercise Programs", lead: "Physician-guided exercise prescriptions for chronic conditions.",
    body: "Safe, progressive exercise programs for patients with chronic medical conditions, monitored by a certified exercise physiologist.",
    img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80", alt: "Medical exercise program",
    points: ["Diabetes management through exercise", "Cardiovascular rehabilitation", "Weight management programs", "Chronic disease self-management"] },
  { id: "strength-conditioning", title: "Strength & Conditioning", lead: "Certified Strength & Conditioning Specialist programming for athletes and active individuals.",
    body: "Build functional strength, improve athletic performance, and reduce injury risk through periodized training programs designed by a certified Strength & Conditioning Specialist.",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80", alt: "Strength and conditioning training",
    points: ["Periodized strength training", "Athletic performance optimization", "Injury prevention & movement screening", "Sport-specific conditioning"] },
  { id: "weight-training", title: "Weight Training & Exercise Plans", lead: "Customized training plans tailored to your goals and abilities.",
    body: "Whether building muscle, losing weight, improving endurance, or enhancing fitness, Dr. Uriah creates personalized resistance and exercise programs.",
    img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?w=800&q=80", alt: "Weight training plans",
    points: ["Customized resistance programs", "Hypertrophy plans", "Body composition programs", "Progressive overload & periodization"] },
  { id: "sport-massage", title: "Sport Massage Therapy", lead: "Therapeutic massage to aid recovery and enhance performance.",
    body: "Therapeutic sports massage integrated into your treatment plan to improve tissue mobility, reduce muscle tension, and accelerate recovery.",
    img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80", alt: "Sports massage therapy hands on treatment",
    points: ["Deep tissue & myofascial release", "Pre/post-event sports massage", "Trigger point therapy", "Scar tissue management"] },
  { id: "biomechanics", title: "Optimal Biomechanics Education", lead: "Education and training for efficient, injury-free movement patterns.",
    body: "Learn how your body moves and how to move it better. gait analysis, posture correction, and movement pattern training.",
    img: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&q=80", alt: "Biomechanics movement education physical therapy",
    points: ["Gait analysis and correction", "Posture assessment & retraining", "Running mechanics", "Ergonomic workspace evaluation"] },
  { id: "modalities", title: "Modalities for Faster Recovery", lead: "Advanced recovery techniques alongside manual therapy and exercise.",
    body: "Evidence-based recovery modalities accelerate healing, reduce pain, and improve tissue recovery.",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80", alt: "Physical therapy modalities recovery treatment",
    points: ["Electrical stimulation (TENS, NMES)", "Therapeutic ultrasound", "Cryo & heat therapy", "Cupping, IASTM, kinesio taping"] },
  { id: "pain-management", title: "Pain Management", lead: "Comprehensive approaches to chronic and acute pain relief.",
    body: "Non-pharmacological pain management combining manual therapy, therapeutic exercise, neuroscience education, and self-management strategies.",
    img: "https://images.unsplash.com/photo-1616279969856-759f316a5ac1?w=800&q=80", alt: "Pain management physical therapy treatment",
    points: ["Manual therapy & joint mobilization", "Pain neuroscience education", "Graded exposure & activity modification", "Long-term self-management"] },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialties"
        title="Treatment"
        subtitle="Comprehensive physical therapy across 11 specialties. all delivered to your home across South Bay."
        image="https://images.unsplash.com/photo-1519824145371-296894a0daa9?w=1600&q=80"
        imageAlt="Therapist massaging the back of a woman during treatment"
        variant="dark"
        overlay="rgba(10,20,12,0.60)"
        objectPosition="center top"
      />
      <InteractiveGuide />
      <section className="container-prose py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <article key={s.id} id={s.id} className="overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lg">
              <img
                src={s.img}
                alt={s.alt}
                className="h-48 w-full object-cover"
                style={{ objectPosition: "center top" }}
                loading="lazy"
              />
              <div className="p-8">
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
              </div>
            </article>
          ))}
        </div>
      </section>

      <BookingCTA
        eyebrow="How Dr. Uriah Treats"
        title="A personalized, hands-on approach. delivered in your home"
        body="Every session begins with a thorough evaluation: movement screens, joint and muscle testing, and a deep conversation about your goals. From there, Dr. Uriah blends manual therapy, corrective exercise, and progressive strength work into a plan built specifically for you. No cookie-cutter protocols. just one-on-one care, focused outcomes, and the convenience of treatment in your own home or via telehealth across California."
        primaryLabel="Start Your Recovery"
      />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt = "",
  variant = "light",
  overlay,
  objectPosition = "center center",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt?: string;
  variant?: "light" | "dark";
  overlay?: string;
  objectPosition?: string;
}) {
  const isDark = variant === "dark";
  const overlayColor = overlay ?? (isDark ? "rgba(10,20,12,0.60)" : "");
  return (
    <section className="relative overflow-hidden" style={{ position: "relative" }}>
      <img
        src={image}
        alt={imageAlt}
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition, zIndex: 0 }}
      />
      {isDark ? (
        <div style={{ position: "absolute", inset: 0, background: overlayColor, zIndex: 1 }} />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/30" style={{ zIndex: 1 }} />
      )}
      <div className="container-prose py-20 md:py-28" style={{ position: "relative", zIndex: 2 }}>
        <div className="max-w-2xl">
          <div className="eyebrow" style={isDark ? { color: "#ffffff" } : undefined}>{eyebrow}</div>
          <h1
            className="mt-4 font-display text-5xl font-semibold leading-[1.05] md:text-6xl"
            style={{ color: isDark ? "#ffffff" : undefined }}
          >
            {title}
          </h1>
          <p
            className="mt-5 max-w-lg text-lg"
            style={{ color: isDark ? "rgba(255,255,255,0.9)" : undefined }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
