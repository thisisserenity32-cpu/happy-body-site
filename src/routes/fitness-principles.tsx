import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./services";
import { Dumbbell, Flame, ShieldCheck, HeartPulse, Zap, Move, Target } from "lucide-react";

export const Route = createFileRoute("/fitness-principles")({
  head: () => ({
    meta: [
      { title: "Fitness Principles — Absolute PT South Bay" },
      { name: "description", content: "The training philosophy behind elite athletic performance — strength, power, conditioning, prehab, rehab, speed, agility, and skill." },
      { property: "og:title", content: "Fitness Principles" },
      { property: "og:description", content: "Strength is the foundation of all athleticism." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80" },
    ],
  }),
  component: FitnessPage,
});

type Section = {
  title: string;
  icon: typeof Dumbbell;
  image: string;
  body: string;
  pull?: string;
};

const sections: Section[] = [
  {
    title: "Strength and Power",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1400&q=80",
    pull: "Strength is the cup. Power, speed, agility, and skill are what fills it.",
    body: "Muscular strength is the maximal ability to produce force — your ability to handle and move your body weight and/or external loads. Strength is the foundation of all athleticism. Without a strong base of strength you cannot develop power, speed or agility to its full potential. Think of strength as a cup. You can fill that cup with power, speed, agility and skill, but if your cup is small then you can only fit so much in there. Strength training increases the total amount of maximal force you can produce, and therefore increases the size of your cup.",
  },
  {
    title: "Conditioning",
    icon: Flame,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=80",
    pull: "Don't mistake cardio for conditioning — they are not the same thing.",
    body: "Once you can execute high-speed skilled athletic movements with tremendous force, then you need the ability to execute at a high level repeatedly under fatigued conditions. If strength and power are your engine, then conditioning is your fuel tank. Many athletes mistakenly do long, slow cardio to build aerobic capacity. Traditional cardio decreases strength and power gains, which in turn decreases speed and agility — exactly the qualities team, power, and combat sport athletes need. Most sports require intermittent bursts of high intensity (sprinting, jumping, tackling) broken up by walking or jogging. Instead of traditional cardio, we use conditioning drills with repeated high-intensity efforts and incomplete rest periods — extremely effective at developing both aerobic and anaerobic capacity while preparing athletes for the real demands of competition.",
  },
  {
    title: "Prehabilitation",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1400&q=80",
    pull: "Build armor for your body before going into battle.",
    body: "Prehabilitation is the proactive approach to preventing injuries before they happen. By identifying muscular imbalances, movement dysfunction, and areas of weakness, we design targeted exercise programs that fortify the body against the rigors of sport and daily life. Prehab includes corrective exercises, mobility work, stability training, and sport-specific movement preparation. The goal is to build resilient joints, balanced muscle groups, and proper movement patterns so your body can withstand the demands placed on it — whether you're an elite athlete or a weekend warrior.",
  },
  {
    title: "Rehabilitation",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=80",
    pull: "You don't just recover — you come back stronger and more resilient than before.",
    body: "Rehabilitation is the structured process of restoring function, strength, and mobility after injury or surgery. Dr. Uriah combines hands-on manual therapy with progressive exercise programming to guide patients through every phase of recovery — from initial pain management and tissue healing to full return-to-sport or return-to-life activities. Each rehab program is individualized based on your specific injury, surgical procedure, goals, and timeline. We use evidence-based protocols while drawing from real-world athletic training experience.",
  },
  {
    title: "Speed",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1400&q=80",
    pull: "Speed is the functional use of strength and power.",
    body: "Simply put, speed is the ability to get from point A to point B in as little time as possible. Elite sprinters produce much higher forces into the ground with much shorter ground contact times than their sub-elite counterparts. With a foundation of strength and power, becoming a capable sprinter is a matter of mastering the skill of sprinting. Before any sprint training session we teach proper sprint mechanics with acceleration and maximum velocity drills, helping athletes apply ground reaction forces most efficiently for maximal horizontal hip and body mass projection. Unlike conditioning, speed training uses shorter distances with near-complete recovery so every rep is at maximum velocity.",
  },
  {
    title: "Agility",
    icon: Move,
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1400&q=80",
    pull: "Develop your brakes first — then you can reaccelerate explosively out of any cut.",
    body: "Agility is the ability to change body position or direction efficiently without losing balance — the functional use of speed. Muscular power, coordination, mobility, and reactive ability are the foundations of efficient change-of-direction technique. Once you've mastered applying strength and power in a linear sprint, the next step is applying it in different directions. We use deceleration drills to develop your brakes, then progress to turn-and-run drills like short shuttles and figure 8s, plus transitions between modes of locomotion (back pedal or lateral shuffle into a sprint).",
  },
  {
    title: "Skill",
    icon: Target,
    image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1400&q=80",
    pull: "We aren't sport-specific in the weight room — we're strength and power specific.",
    body: "Skill is best developed in practice with specific drills and quality instruction. Practice is where you apply all the physical tools you've developed into sport-specific skill. The last thing you want to do is bring practice into the weight room — like a boxer doing punches while holding dumbbells. Most so-called 'sport specific' exercises aren't nearly as effective at developing skill as actual practice, and they can develop bad habits by changing movement mechanics. They also can't be loaded heavily enough to trigger a strength adaptation. The application of strength and power during practice is what makes it sport-specific.",
  },
];

function FitnessPage() {
  return (
    <>
      <PageHero
        eyebrow="Performance"
        title="Fitness Principles"
        subtitle="The training philosophy behind elite athletic performance — strength, power, conditioning, prehab, rehab, speed, agility, and skill."
        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80"
        imageAlt="Athletic fitness training performance"
        variant="dark"
        overlay="rgba(10,20,12,0.65)"
      />

      {/* Pillars overview */}
      <section className="border-b border-border bg-muted/30 py-16">
        <div className="container-prose">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">The Seven Pillars</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
              A complete framework for athletic development
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sections.map(({ title, icon: Icon }) => (
              <a
                key={title}
                href={`#${title.toLowerCase().replace(/\s+/g, "-")}`}
                className="ring-soft group flex items-center gap-3 rounded-xl bg-card p-4 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-display font-semibold text-foreground">{title}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Detail sections */}
      <section className="container-prose py-20">
        <div className="mx-auto max-w-5xl space-y-24">
          {sections.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <article
                key={s.title}
                id={s.title.toLowerCase().replace(/\s+/g, "-")}
                className={`grid items-center gap-10 md:grid-cols-2 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="ring-soft overflow-hidden rounded-2xl">
                  <img
                    src={s.image}
                    alt={s.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Pillar {i + 1}</p>
                  </div>
                  <h2 className="mt-4 font-display text-3xl font-semibold text-foreground md:text-4xl">{s.title}</h2>
                  {s.pull && (
                    <p className="mt-4 border-l-2 border-primary pl-4 font-display text-lg italic text-foreground/80">
                      "{s.pull}"
                    </p>
                  )}
                  <p className="mt-4 leading-relaxed text-muted-foreground">{s.body}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
