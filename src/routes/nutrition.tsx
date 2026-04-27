import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./services";
import { Bone, Beef, Wheat, Droplets, Sun, Apple, Leaf } from "lucide-react";

export const Route = createFileRoute("/nutrition")({
  head: () => ({
    meta: [
      { title: "Nutrition — Absolute PT South Bay" },
      { name: "description", content: "Fuel your body for optimal performance, recovery, and long-term health with evidence-based nutrition guidance." },
      { property: "og:title", content: "Nutrition for Performance & Recovery" },
      { property: "og:description", content: "Foundational nutrients for bone health, muscle growth, and athletic performance." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1600&q=80" },
    ],
  }),
  component: NutritionPage,
});

const boneNutrients = [
  {
    name: "Calcium",
    icon: Bone,
    img: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=900&q=80",
    body: "Stored inside bones for strength and protection from fractures. 99% is found in the bone — the most abundant mineral in our body. Adults need ~1,000mg per day.",
    foods: "Cheese, milk, cauliflower, nuts, yogurt, broccoli, cabbage, greens",
  },
  {
    name: "Vitamin D",
    icon: Sun,
    img: "https://images.unsplash.com/photo-1504387828636-abeb50778c0c?auto=format&fit=crop&w=900&q=80",
    body: "Synthesized from direct sunlight in skin and consumed in food. Prevents bone loss, regulates blood calcium, and increases calcium absorption. Skin pigmentation, age, sunscreen, smog, and geography all affect production. Adults: 600–2,000 IU/day.",
    foods: "Milk, yogurt, fish, fatty fish, mushrooms exposed to UV light",
  },
  {
    name: "Vitamin K",
    icon: Leaf,
    img: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=900&q=80",
    body: "Vitamin K1 aids blood clotting; Vitamin K2 supports a healthy heart and bones. No formal daily dose recommendation.",
    foods: "Eggs, spinach, kale, greens, cabbage",
  },
  {
    name: "Potassium",
    icon: Apple,
    img: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=900&q=80",
    body: "Regulates pH, prevents calcium loss through urine, and conserves bone mass. Recommended daily intake is 4,700mg for adults.",
    foods: "Bananas, vegetables, orange juice, citrus fruits, meats, potatoes",
  },
  {
    name: "Magnesium",
    icon: Wheat,
    img: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=900&q=80",
    body: "Used in bone formation, increases calcium absorption from the small intestines, and influences bone mineralization. Daily recommended intake is 420mg for adults.",
    foods: "Nuts, grains, green vegetables, legumes, whole grains",
  },
];

const macros = [
  {
    name: "Protein",
    icon: Beef,
    body: "The building blocks for gaining and maintaining muscle. Broken down into amino acids — the most basic structure of proteins. Composes actin and myosin, the filaments that drive muscle contraction. Critical for immune function.",
    foods: "Meat, low-fat milk, eggs, whey, legumes",
  },
  {
    name: "Carbohydrates",
    icon: Wheat,
    body: "The body's first-choice energy source, stored as glycogen in muscle and liver. Broken down into glucose to power immediate muscle contraction.",
    foods: "Green vegetables, fruit, whole grains",
  },
  {
    name: "Fats",
    icon: Droplets,
    body: "An important energy source, especially for athletes. The primary fuel at rest and during low-intensity exercise. Lower the risk of heart disease and stored efficiently in the body.",
    foods: "Avocados, peanut butter, fatty fish, nuts, olive oil",
  },
];

const performance = [
  {
    name: "Water",
    icon: Droplets,
    body: "Water is 60% of body weight — the most abundant substance in the body. Fluid intake vs loss matters during training, influenced by temperature, humidity, altitude, and sweat rate.",
    rec: "5–7 ml/kg at least 4 hours before exercise. 1.5L per kg body weight lost after exercise.",
  },
  {
    name: "Carbohydrates",
    icon: Wheat,
    body: "Primary energy source, stored as glycogen. Exercise utilizes blood glucose and increases CHO metabolism capacity.",
    rec: "6–10 g per kg body weight per day, varying by sport, training type, and gender.",
  },
  {
    name: "Protein",
    icon: Beef,
    body: "Builds and maintains muscle through amino acids that compose contractile filaments.",
    rec: "Endurance: 1.2–1.7 g/kg/day. Strength: 1.5–2.0 g/kg/day.",
  },
  {
    name: "Fat",
    icon: Droplets,
    body: "Important energy source, primary fuel at rest and low intensity. Stored as triglycerides in liver, muscle, and fat cells.",
    rec: "20–35% of total calories. Less than 20% may hinder performance.",
  },
  {
    name: "Vitamin D",
    icon: Sun,
    body: "Regulates calcium for bone and muscle development. Supports skeletal, cardiac, and smooth tissue. Helps prevent osteoporosis.",
    rec: "800–2,000 IU daily. 5–30 min sunlight exposure between 10am–3pm twice weekly.",
  },
];

function NutritionPage() {
  return (
    <>
      <PageHero
        eyebrow="Foundation"
        title="Nutrition"
        subtitle="Fuel your body for optimal performance, recovery, and long-term health with evidence-based nutrition guidance."
        image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1600&q=80"
      />

      {/* Foundation: Bone Health */}
      <section className="container-prose py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Foundation</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
            Nutrients for Optimal Bone Strength
          </h2>
          <p className="mt-4 text-muted-foreground">
            Five key nutrients for optimal bone health: Calcium, Vitamin D, Vitamin K, Potassium, and Magnesium.
            Athletes — recreational, collegiate, or professional — should regulate daily intake to support performance.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {boneNutrients.map((n) => {
            const Icon = n.icon;
            return (
              <article key={n.name} className="ring-soft group overflow-hidden rounded-2xl bg-card transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative">
                  <img src={n.img} alt={n.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-background/95 text-primary shadow">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground">{n.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{n.body}</p>
                  <p className="mt-3 text-xs text-foreground/70">
                    <span className="font-semibold text-primary">Food sources: </span>{n.foods}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Macronutrients */}
      <section className="border-y border-border bg-muted/30 py-20">
        <div className="container-prose">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Macronutrients</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
              Why Macronutrients Matter
            </h2>
            <p className="mt-4 text-muted-foreground">
              Macronutrients are needed by the body in relatively large amounts — energy, carbohydrate, fat, protein, and fiber.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {macros.map((m) => {
              const Icon = m.icon;
              return (
                <article key={m.name} className="ring-soft rounded-2xl bg-card p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{m.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{m.body}</p>
                  <p className="mt-3 text-xs text-foreground/70">
                    <span className="font-semibold text-primary">Food sources: </span>{m.foods}
                  </p>
                </article>
              );
            })}
          </div>

          {/* Vitamins & Minerals callouts */}
          <div className="mx-auto mt-14 max-w-4xl rounded-2xl bg-card p-8 ring-1 ring-border">
            <h3 className="font-display text-2xl font-semibold text-foreground">Vitamins A, C, D</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-primary">Vitamin A</p>
                <p className="mt-1 text-sm text-muted-foreground">Aids nerve and muscle function, reproduction, and maintains healthy bones and skin. Sources: milk, green vegetables, orange fruits.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Vitamin C</p>
                <p className="mt-1 text-sm text-muted-foreground">Protects cells from damage and supports wound healing. Sources: orange juice, mango, citrus, cabbage.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Vitamin D</p>
                <p className="mt-1 text-sm text-muted-foreground">Prevents bone loss, regulates blood calcium, increases calcium absorption. Sources: fish, greens, milk.</p>
              </div>
            </div>

            <h3 className="mt-10 font-display text-2xl font-semibold text-foreground">Minerals That Matter</h3>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-primary">Calcium</p>
                <p className="mt-1 text-sm text-muted-foreground">Bone strength, fracture protection, blood clotting, nerve transmission. Sources: milk, nuts, cabbage.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Potassium</p>
                <p className="mt-1 text-sm text-muted-foreground">Helps prevent muscle cramps, supports nerve transmission and fluid balance. Sources: leafy greens, beans, bananas.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary">Iron</p>
                <p className="mt-1 text-sm text-muted-foreground">Supports energy metabolism, immune function, oxygen transport. Sources: meat, fish, dried fruit, legumes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Performance: Muscle Growth */}
      <section className="container-prose py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Performance</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
            Nutrients for Optimal Muscle Growth
          </h2>
          <p className="mt-4 text-muted-foreground">
            Five key nutrients for optimal muscle growth and development: Water, Carbohydrate, Protein, Fat, and Vitamin D.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {performance.map((p) => {
            const Icon = p.icon;
            return (
              <article key={p.name} className="ring-soft rounded-2xl bg-card p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-foreground">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                <div className="mt-3 rounded-lg bg-primary/5 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">Recommendation</p>
                  <p className="mt-1 text-sm text-foreground/80">{p.rec}</p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Food sources strip */}
        <div className="mt-16">
          <h3 className="text-center font-display text-2xl font-semibold text-foreground">Food Sources for Muscle Growth</h3>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {[
              { label: "Water", value: "Electrolyte beverages, tea, plain water", img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600&q=80" },
              { label: "Carbohydrates", value: "Green vegetables, fruit, whole grains", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80" },
              { label: "Protein", value: "Meats, whey, eggs", img: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=600&q=80" },
              { label: "Fat", value: "Olive oil, nuts, peanut butter, avocados, fatty fish", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80" },
              { label: "Vitamin D", value: "Sunlight, beef, fatty fish, greens, milk", img: "https://images.unsplash.com/photo-1535914254981-b5012eebbd15?auto=format&fit=crop&w=600&q=80" },
            ].map((f) => (
              <div key={f.label} className="ring-soft overflow-hidden rounded-xl bg-card">
                <img src={f.img} alt={f.label} loading="lazy" className="aspect-square w-full object-cover" />
                <div className="p-4">
                  <p className="font-display font-semibold text-foreground">{f.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{f.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
