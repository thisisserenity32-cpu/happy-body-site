import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./services";

export const Route = createFileRoute("/fitness-principles")({
  head: () => ({
    meta: [
      { title: "Fitness Principles — Absolute PT South Bay" },
      { name: "description", content: "The training philosophy behind elite athletic performance — strength, power, and smart programming." },
      { property: "og:title", content: "Fitness Principles" },
      { property: "og:description", content: "Strength is the foundation of all athleticism." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80" },
    ],
  }),
  component: FitnessPage,
});

const sections = [
  { title: "Strength and Power", body: "Muscular strength is the maximal ability to produce force — your ability to handle and move your body weight or external loads. Strength is the foundation of all athleticism. Without a strong base of strength you cannot develop power, speed, or agility to its full potential. Think of strength as a cup: you fill it with power, speed, agility, and skill — but if your cup is small, only so much fits. Strength training increases the size of your cup." },
  { title: "Conditioning", body: "Conditioning is the ability to sustain effort. We pair strength work with sport- and life-specific conditioning so your engine can match your power. The goal isn't just to be strong — it's to express that strength repeatedly without breaking down." },
  { title: "Smart Programming", body: "Periodization, progressive overload, recovery, and deload weeks are not optional. Programs are individualized to your training age, schedule, and goals — built to deliver consistent results without injury." },
  { title: "Skill Acquisition", body: "Movement is a skill. From squat patterns to sport-specific mechanics, we coach the small details that separate good performance from great performance — and from injury." },
];

function FitnessPage() {
  return (
    <>
      <PageHero
        eyebrow="Performance"
        title="Fitness Principles"
        subtitle="The training philosophy behind elite athletic performance — built on strength, power, and smart programming."
        image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="container-prose py-20">
        <div className="mx-auto max-w-3xl space-y-12">
          {sections.map((s) => (
            <article key={s.title}>
              <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">{s.title}</h2>
              <p className="mt-4 text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
