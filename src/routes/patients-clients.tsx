import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { User, Camera, X, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/patients-clients")({
  head: () => ({
    meta: [
      { title: "Patients & Clients — Absolute PT South Bay" },
      { name: "description", content: "Dr. Uriah has trained alongside UFC champions, Stanley Cup winners, and world boxing champions. A glimpse into that journey." },
      { property: "og:title", content: "Patients & Clients — Absolute PT South Bay" },
      { property: "og:description", content: "Elite athletes, champions, and legends Dr. Uriah has trained alongside." },
    ],
  }),
  component: PatientsClientsPage,
});

type Athlete = { badge: string; name: string; description: string };

const athletes: Athlete[] = [
  { badge: "Strength & Conditioning Coach", name: "Jonathan Chaimberg",
    description: "Dr. Uriah's mentor and one of the most renowned Strength & Conditioning coaches in the world. Jonathan Chaimberg is the President and Owner of Adrenaline Performance Center (APC) in Montreal, Quebec — a facility specialising in athletic performance enhancement for top-level athletes. On the short list of world-class athletes J.C. has worked with are UFC legends and champions including Georges St-Pierre, Rashad Evans, Shane Carwin, and Jon Jones." },
  { badge: "UFC — Mixed Martial Arts", name: "Georges St-Pierre (GSP)",
    description: "Often referred to as GSP and Rush, Georges St-Pierre is a retired Canadian mixed martial artist and the former 3-time Welterweight Champion of the Ultimate Fighting Championship. Widely regarded as one of the greatest MMA fighters of all time. Dr. Uriah had the privilege of being in the same performance environment as GSP during his time at Adrenaline Performance Center, trained under coach Jonathan Chaimberg and Firas Zahabi at Tristar Gym in Montreal." },
  { badge: "UFC — Mixed Martial Arts", name: "Rashad Evans",
    description: "Former UFC Light Heavyweight Champion known for his explosive power, elite wrestling base, and fierce competitive spirit. Rashad trained at the Adrenaline Performance Center in Montreal under Jonathan Chaimberg." },
  { badge: "UFC — Mixed Martial Arts", name: "Shane Carwin",
    description: "Former UFC Interim Heavyweight Champion and one of the hardest punchers in UFC history. Shane trained at the Adrenaline Performance Center in Montreal under Jonathan Chaimberg alongside Dr. Uriah." },
  { badge: "UFC — Mixed Martial Arts", name: "Jon Jones",
    description: "UFC Light Heavyweight Champion and one of the most dominant fighters in UFC history. Known for his extraordinary reach, creative striking, and unmatched grappling. Jon trained at the Adrenaline Performance Center in Montreal." },
  { badge: "NHL — Ice Hockey", name: "Jakub Voráček",
    description: "Czech professional ice hockey right winger who played for the Philadelphia Flyers of the National Hockey League. Drafted seventh overall by the Columbus Blue Jackets at the 2007 NHL Entry Draft. Trained under Jonathan Chaimberg at the Adrenaline Performance Center in Montreal, alongside Dr. Uriah." },
  { badge: "NHL — Ice Hockey", name: "Kris Letang",
    description: "2x Stanley Cup Champion Kristopher Allen Letang is a Canadian professional ice hockey defenseman currently playing for the Pittsburgh Penguins of the National Hockey League. One of the most elite blue-liners of his generation. Trained at Adrenaline Performance Center in Montreal under Jonathan Chaimberg." },
  { badge: "NHL — Ice Hockey", name: "Jiří Hudler",
    description: "Czech professional ice hockey player who played for the Calgary Flames and Detroit Red Wings of the National Hockey League. Trained at the Adrenaline Performance Center in Montreal under Jonathan Chaimberg alongside Dr. Uriah." },
  { badge: "Tristar Gym — MMA & Kickboxing", name: "Firas Zahabi",
    description: "Owner and Head Instructor at the legendary Tristar Fight Gym in Montreal — one of the most famous MMA gyms in the world. Former world kickboxing champion. Dr. Uriah thanks Firas and his brother Aiemann Zahabi for their guidance and the opportunity to be part of the Tristar environment." },
  { badge: "UFC — Mixed Martial Arts", name: "Chad Laprise",
    description: "Canadian mixed martial artist competing in the UFC Lightweight division. Winner of The Ultimate Fighter Nations: Canada vs. Australia. Chad trained at the Adrenaline Performance Center in Montreal under Jonathan Chaimberg." },
  { badge: "Boxing — Professional", name: "Jean Pascal",
    description: "Former Canadian Professional World Boxing Champion renowned for his speed, power, and elite conditioning. Jean Pascal trained at the Adrenaline Performance Center in Montreal." },
  { badge: "Boxing — Professional", name: "Chris Byrd",
    description: "Former IBF and WBO Heavyweight Champion of the World, known for his exceptional defensive boxing technique and movement. Pictured alongside Jean Pascal. Boxing Champions Jean Pascal and Chris Byrd." },
  { badge: "UFC — Mixed Martial Arts", name: "Alex Garcia",
    description: "Alex Garcia — 'Dominican Nightmare' — is a Dominican-Canadian mixed martial artist competing in the Welterweight division of the UFC. Known for his aggressive style and powerful striking." },
  { badge: "UFC — Mixed Martial Arts", name: "Rory MacDonald",
    description: "Canadian mixed martial artist signed with the UFC in the Welterweight division. Former King of the Cage and Bellator Welterweight Champion, known as 'The Red King.' One of the most technically gifted welterweights of his era." },
  { badge: "MMA — Professional", name: "Nordine Taleb",
    description: "French professional mixed martial artist and professional MMA competitor since 2007. Most known for competing in Bellator Fighting Championships and participating in the Bellator Season 7 Welterweight Tournament." },
  { badge: "MMA — Fighter & Coach", name: "Antoni McKee",
    description: "MMA Professional Fighter and Coach Antoni McKee — a highly skilled fighter and trainer connected to the elite performance world Dr. Uriah was part of during his time in Montreal." },
  { badge: "MMA — Professional", name: "Cheick Kongo",
    description: "MMA Professional Fighter and former Kickboxer Cheick Kongo — a powerful and durable heavyweight competitor with a long career in professional mixed martial arts and kickboxing." },
];

const aspectRatios = ["1/1","3/4","1/1","4/3","3/4","1/1","4/3","1/1","3/4","1/1","1/1","4/3","3/4","1/1","4/3","1/1"];

function PatientsClientsPage() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowRight") setLightboxIdx((i) => (i === null ? null : (i + 1) % aspectRatios.length));
      if (e.key === "ArrowLeft") setLightboxIdx((i) => (i === null ? null : (i - 1 + aspectRatios.length) % aspectRatios.length));
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIdx]);

  return (
    <>
      {/* HERO */}
      <section
        className="flex items-center justify-center px-6 py-24 text-center"
        style={{
          minHeight: "420px",
          background: "linear-gradient(180deg, #0f1a12 0%, #142019 100%)",
        }}
      >
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#1a7a4a" }}>
            Elite Athletes · Champions · Legends
          </div>
          <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.05] text-white md:text-6xl lg:text-7xl">
            Patients &amp; Clients
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "rgba(255,255,255,0.75)" }}>
            Dr. Uriah has had the privilege of training alongside and working with some of the most
            elite athletes in the world — from UFC champions to Stanley Cup winners. This is a
            glimpse into that journey.
          </p>
        </div>
      </section>

      {/* SECTION 1 — FEATURED CARDS */}
      <section className="bg-white" style={{ padding: "90px 7%" }}>
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#1a7a4a" }}>
              Trained Alongside Legends
            </div>
            <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl" style={{ color: "#0f1a12" }}>
              Notable Athletes &amp; Connections
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed" style={{ color: "#566059" }}>
              During his time at the Adrenaline Performance Center in Montreal under coach
              Jonathan Chaimberg, Dr. Uriah trained alongside and supported some of the greatest
              combat sports and hockey athletes on the planet.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {athletes.map((a) => (
              <AthleteCard key={a.name} athlete={a} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — GALLERY */}
      <section style={{ background: "#0f1a12", padding: "90px 7%" }}>
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "#1a7a4a" }}>
              Behind the Scenes
            </div>
            <h2 className="mt-3 font-display text-4xl font-extrabold text-white md:text-5xl">
              More From the Journey
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
              Additional moments from Dr. Uriah's time training alongside elite athletes at the
              Adrenaline Performance Center in Montreal and beyond.
            </p>
          </div>

          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
            {aspectRatios.map((ratio, i) => (
              <button
                key={i}
                onClick={() => setLightboxIdx(i)}
                className="group mb-4 block w-full overflow-hidden rounded-lg border transition-all hover:brightness-125"
                style={{
                  aspectRatio: ratio,
                  background: "rgba(255,255,255,0.06)",
                  borderColor: "rgba(255,255,255,0.1)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(26,122,74,0.6)")}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
              >
                <div className="flex h-full w-full flex-col items-center justify-center gap-2">
                  <Camera className="h-12 w-12" style={{ color: "rgba(255,255,255,0.2)" }} />
                  <div className="text-[0.65rem]" style={{ color: "rgba(255,255,255,0.35)" }}>
                    Photo Placeholder
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — CTA */}
      <section className="text-center" style={{ background: "#1a7a4a", padding: "90px 7%" }}>
        <div className="mx-auto max-w-2xl">
          <div className="text-xs font-bold uppercase text-white" style={{ letterSpacing: "0.14em", opacity: 0.75, fontSize: "0.78rem" }}>
            Your Story Starts Here
          </div>
          <h2 className="mt-4 font-display font-extrabold text-white" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", lineHeight: 1.1 }}>
            The Next Chapter Is<br />
            <span className="italic">Yours.</span>
          </h2>
          <p
            className="mx-auto mt-6 text-center"
            style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.05rem", lineHeight: 1.88, maxWidth: 560 }}
          >
            Every athlete and patient you've seen on this page started exactly where you are now.
            Whether you're recovering from injury, preparing for surgery, managing a chronic
            condition, or simply looking to move and feel better — Dr. Uriah is ready to build a
            plan around you.
            <br /><br />
            Join the roster of people who trusted Absolute PT South Bay with their health, their
            performance, and their future.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="rounded-full font-bold transition-all"
              style={{
                background: "white", color: "#1a7a4a", padding: "1rem 2.4rem", fontSize: "0.95rem",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#f3f7f4"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Book Your Free Consultation
            </Link>
            <Link
              to="/about"
              className="rounded-full font-bold text-white transition-all"
              style={{
                background: "transparent",
                border: "2px solid rgba(255,255,255,0.55)",
                padding: "0.95rem 2.2rem", fontSize: "0.92rem",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "white"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.55)"; e.currentTarget.style.background = "transparent"; }}
            >
              Learn About Dr. Uriah
            </Link>
          </div>

          <p className="mt-5 italic text-white" style={{ opacity: 0.65, fontSize: "0.82rem" }}>
            Free 15–20 minute consultation — no commitment, no pressure.
          </p>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center animate-fade-in"
          style={{ background: "rgba(0,0,0,0.95)" }}
          onClick={() => setLightboxIdx(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx(null); }}
            className="absolute right-6 top-6 text-white"
            style={{ fontSize: "2rem" }}
            aria-label="Close"
          >
            <X className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => (i === null ? null : (i - 1 + aspectRatios.length) % aspectRatios.length)); }}
            className="absolute left-4 text-white md:left-8"
            aria-label="Previous"
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => (i === null ? null : (i + 1) % aspectRatios.length)); }}
            className="absolute right-4 text-white md:right-8"
            aria-label="Next"
            style={{ top: "50%" }}
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          <div
            className="flex items-center justify-center rounded-lg border"
            style={{
              width: "min(80vw, 700px)",
              aspectRatio: aspectRatios[lightboxIdx],
              background: "rgba(255,255,255,0.06)",
              borderColor: "rgba(255,255,255,0.15)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center gap-3">
              <Camera className="h-20 w-20" style={{ color: "rgba(255,255,255,0.25)" }} />
              <div className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                Photo {lightboxIdx + 1} of {aspectRatios.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function AthleteCard({ athlete }: { athlete: Athlete }) {
  return (
    <article
      className="flex flex-col overflow-hidden transition-all md:flex-row"
      style={{
        background: "#f3f7f4",
        border: "1.5px solid #c8e6d4",
        borderRadius: "12px",
        transition: "all 0.22s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#1a7a4a";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(26,122,74,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#c8e6d4";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        className="flex shrink-0 flex-col items-center justify-center p-6"
        style={{
          width: "100%",
          minHeight: "220px",
          background: "linear-gradient(135deg, #0f1a12 0%, #1a7a4a 100%)",
        }}
      >
        <div className="md:w-[280px]">
          <User className="mx-auto" style={{ width: 64, height: 64, color: "white", opacity: 0.3 }} />
          <div
            className="mt-3 text-center"
            style={{ color: "white", opacity: 0.5, fontSize: "0.7rem" }}
          >
            {athlete.name}
          </div>
        </div>
      </div>
      <div className="flex-1 p-8">
        <span
          className="inline-block"
          style={{
            background: "#1a7a4a", color: "white",
            fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", padding: "0.3rem 0.85rem",
            borderRadius: "50px", marginBottom: "0.6rem",
          }}
        >
          {athlete.badge}
        </span>
        <h3 className="font-display font-extrabold" style={{ color: "#0f1a12", fontSize: "1.25rem", marginBottom: "0.5rem" }}>
          {athlete.name}
        </h3>
        <p style={{ color: "#566059", fontSize: "0.92rem", lineHeight: 1.78 }}>
          {athlete.description}
        </p>
      </div>
    </article>
  );
}
