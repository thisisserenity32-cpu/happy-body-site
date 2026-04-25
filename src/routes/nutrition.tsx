import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./services";

export const Route = createFileRoute("/nutrition")({
  head: () => ({
    meta: [
      { title: "Nutrition — Absolute PT South Bay" },
      { name: "description", content: "Fuel your body for optimal performance, recovery, and long-term health with evidence-based nutrition guidance." },
      { property: "og:title", content: "Nutrition for Performance & Recovery" },
      { property: "og:description", content: "Five key nutrients for bone health and performance." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=80" },
    ],
  }),
  component: NutritionPage,
});

const nutrients = [
  { name: "Calcium", img: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=900&q=80",
    body: "99% is found in the bone, the most abundant mineral in our body. Adults need ~1,000mg daily.",
    foods: "Cheese, milk, cauliflower, nuts, yogurt, broccoli, cabbage, greens" },
  { name: "Vitamin D", img: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=900&q=80",
    body: "Synthesized from sunlight and consumed in food. Prevents bone loss, regulates blood calcium, and increases calcium absorption. Adults: 600–2,000 IU/day.",
    foods: "Milk, yogurt, fish, fatty fish, mushrooms exposed to UV light" },
  { name: "Vitamin K", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=900&q=80",
    body: "Critical for bone formation and proper calcium binding to bone matrix.",
    foods: "Leafy greens (kale, spinach), broccoli, brussels sprouts" },
  { name: "Potassium", img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=900&q=80",
    body: "Helps neutralize acids that can leach calcium from bones.",
    foods: "Bananas, sweet potatoes, beans, oranges, avocado" },
  { name: "Magnesium", img: "https://images.unsplash.com/photo-1584473457409-ce95a9c00018?auto=format&fit=crop&w=900&q=80",
    body: "About 60% of body magnesium is in bone. Essential for converting Vitamin D to its active form.",
    foods: "Almonds, spinach, cashews, dark chocolate, whole grains" },
];

function NutritionPage() {
  return (
    <>
      <PageHero
        eyebrow="Foundation"
        title="Nutrition"
        subtitle="Fuel your body for optimal performance, recovery, and long-term health with evidence-based nutrition guidance."
        image="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=80"
      />
      <section className="container-prose py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">Nutrients for Optimal Bone Strength</h2>
          <p className="mt-4 text-muted-foreground">
            Five key nutrients for optimal bone health: Calcium, Vitamin D, Vitamin K, Potassium, and Magnesium.
            Athletes — recreational, collegiate, or professional — should regulate daily intake to support performance.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {nutrients.map((n) => (
            <article key={n.name} className="ring-soft overflow-hidden rounded-2xl bg-card">
              <img src={n.img} alt={n.name} className="aspect-[4/3] w-full object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground">{n.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{n.body}</p>
                <p className="mt-3 text-xs text-foreground/70"><span className="font-semibold text-primary">Food sources: </span>{n.foods}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
