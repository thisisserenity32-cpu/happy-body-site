import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/patients-clients")({
  head: () => ({
    meta: [
      { title: "Patients & Clients — Absolute PT South Bay" },
      { name: "description", content: "Dr. Uriah trained alongside UFC champions, NHL stars, and boxing legends at the Adrenaline Performance Center in Montreal." },
      { property: "og:title", content: "Trained Alongside Legends — Absolute PT South Bay" },
      { property: "og:description", content: "UFC Champions, NHL Stars, Boxing Legends — Dr. Uriah's journey through elite athletic performance." },
    ],
  }),
  component: PatientsClientsPage,
});

type FeaturedCard = {
  src: string;
  alt: string;
  badge: string;
  name: string;
  description: string;
};

const featured: FeaturedCard[] = [
  { src: "https://static.wixstatic.com/media/64b1f1_8b8ed6d3837c4f3c9c5f900311824ac9~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_8b8ed6d3837c4f3c9c5f900311824ac9~mv2.jpg",
    alt: "Dr. Uriah with Jonathan Chaimberg", badge: "Strength & Conditioning Coach", name: "Jonathan Chaimberg",
    description: "Dr. Uriah's mentor. President and Owner of Adrenaline Performance Center in Montreal. Trainer to GSP, Jon Jones, Rashad Evans, and Shane Carwin." },
  { src: "https://static.wixstatic.com/media/64b1f1_c4d17ddcea7c4c808a2a970410d2ac59~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_c4d17ddcea7c4c808a2a970410d2ac59~mv2.jpg",
    alt: "Jakub Voracek and Kris Letang", badge: "NHL — Ice Hockey", name: "Voráček & Letang",
    description: "Jakub Voráček (left) — former Philadelphia Flyers winger, 7th overall pick in the 2007 NHL Draft. Kris Letang (right) — 3x Stanley Cup Champion defenseman, Pittsburgh Penguins." },
  { src: "https://static.wixstatic.com/media/64b1f1_52bb4b9a1aeb4b2bb256b6a3bdc6407d~mv2.jpeg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_52bb4b9a1aeb4b2bb256b6a3bdc6407d~mv2.jpeg",
    alt: "Firas Zahabi and Georges St-Pierre", badge: "Tristar Gym — UFC", name: "Firas Zahabi & GSP",
    description: "Firas Zahabi — Owner of legendary Tristar Fight Gym, former world kickboxing champion. Georges St-Pierre — retired 3-time UFC Welterweight Champion, greatest MMA fighter of all time." },
  { src: "https://static.wixstatic.com/media/64b1f1_01eb9b2deca94c1aa5cfab183757f6f4~mv2.jpg/v1/fill/w_449,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_01eb9b2deca94c1aa5cfab183757f6f4~mv2.jpg",
    alt: "Chad Laprise", badge: "UFC — Mixed Martial Arts", name: "Chad Laprise",
    description: "Canadian MMA fighter competing in the UFC Lightweight division. Winner of The Ultimate Fighter Nations: Canada vs. Australia." },
  { src: "https://static.wixstatic.com/media/64b1f1_494866173fe7436e9479c556850ed8a9~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_494866173fe7436e9479c556850ed8a9~mv2.jpg",
    alt: "Jiri Hudler", badge: "NHL — Ice Hockey", name: "Jiří Hudler",
    description: "Czech professional ice hockey player with the Calgary Flames of the National Hockey League." },
  { src: "https://static.wixstatic.com/media/64b1f1_9be03d3bc0774b0fbe957d158e177528~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_9be03d3bc0774b0fbe957d158e177528~mv2.jpg",
    alt: "Jean Pascal", badge: "Boxing — World Champion", name: "Jean Pascal",
    description: "Former WBC Light Heavyweight Champion of the World. Canadian professional boxer renowned for his speed, power, and elite conditioning — trained at Adrenaline Performance Center in Montreal." },
  { src: "https://static.wixstatic.com/media/64b1f1_1d853b354f88496f90cf0535875f99f8~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_1d853b354f88496f90cf0535875f99f8~mv2.jpg",
    alt: "Cheick Kongo", badge: "MMA — Professional", name: "Cheick Kongo",
    description: "MMA Professional Fighter and former Kickboxer. A powerful heavyweight competitor with a long career in professional MMA and kickboxing." },
  { src: "https://static.wixstatic.com/media/64b1f1_332512f85b5b41299ec930f589e64470~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_332512f85b5b41299ec930f589e64470~mv2.jpg",
    alt: "Group photo APC Montreal", badge: "Adrenaline Performance Center", name: "APC Montreal",
    description: "Group photo from Adrenaline Performance Center in Montreal — where Dr. Uriah trained alongside elite world-class athletes." },
  { src: "https://static.wixstatic.com/media/64b1f1_e8eab62fd8784ec6b5c8fbbfc2a30fe8~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_e8eab62fd8784ec6b5c8fbbfc2a30fe8~mv2.jpg",
    alt: "Alex Garcia", badge: "UFC — Mixed Martial Arts", name: "Alex Garcia",
    description: "'Dominican Nightmare' — Dominican-Canadian MMA fighter competing in the UFC Welterweight division. Known for his aggressive power striking." },
  { src: "https://static.wixstatic.com/media/64b1f1_ff40f4315e774eaf84a12179ee23b06a~mv2.jpeg/v1/fill/w_449,h_336,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_ff40f4315e774eaf84a12179ee23b06a~mv2.jpeg",
    alt: "Rory MacDonald", badge: "UFC — Mixed Martial Arts", name: "Rory MacDonald",
    description: "Canadian MMA fighter signed with the UFC Welterweight division. Former King of the Cage and Bellator Welterweight Champion — 'The Red King.'" },
  { src: "https://static.wixstatic.com/media/64b1f1_3c5a787ed95d488fbfd3475599bf3f85~mv2.jpg/v1/fill/w_450,h_600,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_3c5a787ed95d488fbfd3475599bf3f85~mv2.jpg",
    alt: "Nordine Taleb", badge: "Bellator MMA", name: "Nordine Taleb",
    description: "French professional MMA fighter. Competed in Bellator Fighting Championships and the Bellator Season 7 Welterweight Tournament." },
  { src: "https://static.wixstatic.com/media/64b1f1_4653d7aff21f4ec69dad80e7efa992d3~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_4653d7aff21f4ec69dad80e7efa992d3~mv2.jpg",
    alt: "Kris Letang", badge: "NHL — Pittsburgh Penguins", name: "Kris Letang",
    description: "3x Stanley Cup Champion. Canadian professional ice hockey defenseman for the Pittsburgh Penguins — one of the NHL's most elite blue-liners." },
  { src: "https://static.wixstatic.com/media/64b1f1_aabecb5eedc745f797e7ca14d49bf918~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_aabecb5eedc745f797e7ca14d49bf918~mv2.jpg",
    alt: "Jean Pascal and Chris Byrd", badge: "Boxing — World Champions", name: "Pascal & Chris Byrd",
    description: "Boxing Champions Jean Pascal and Chris Byrd (left to right). Chris Byrd is a former IBF and WBO Heavyweight Champion of the World." },
  { src: "https://static.wixstatic.com/media/64b1f1_e640a1972ada43269dc562deb36aa587~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_e640a1972ada43269dc562deb36aa587~mv2.jpg",
    alt: "Antoni Mckee", badge: "MMA Professional Fighter and Coach", name: "Antoni Mckee",
    description: "MMA Professional Fighter and Coach Antoni Mckee — a highly skilled fighter connected to the elite performance world." },
];

type ExtraImage = { src: string; alt: string; height: number };

const extras: ExtraImage[] = [
  { src: "https://static.wixstatic.com/media/64b1f1_9be03d3bc0774b0fbe957d158e177528~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_9be03d3bc0774b0fbe957d158e177528~mv2.jpg", alt: "APC training moment", height: 280 },
  { src: "https://static.wixstatic.com/media/64b1f1_e640a1972ada43269dc562deb36aa587~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_e640a1972ada43269dc562deb36aa587~mv2.jpg", alt: "APC elite training", height: 320 },
  { src: "https://static.wixstatic.com/media/64b1f1_63388dd153f2458fae12b3a9f253ed8e~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_63388dd153f2458fae12b3a9f253ed8e~mv2.jpg", alt: "APC Montreal session", height: 280 },
  { src: "https://static.wixstatic.com/media/64b1f1_1863f89c08844f3f9cba224fa0b0000d~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_1863f89c08844f3f9cba224fa0b0000d~mv2.jpg", alt: "APC athletes", height: 340 },
  { src: "https://static.wixstatic.com/media/64b1f1_295be27a2ff044d3a63e864794cb8ace~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_295be27a2ff044d3a63e864794cb8ace~mv2.jpg", alt: "APC performance training", height: 280 },
  { src: "https://static.wixstatic.com/media/64b1f1_828fb9448b1445128237ced00837399a~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_828fb9448b1445128237ced00837399a~mv2.jpg", alt: "APC group training", height: 300 },
  { src: "https://static.wixstatic.com/media/64b1f1_1c28d51a4ce143e096596fd0a77f37d6~mv2.jpg/v1/fill/w_450,h_563,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_1c28d51a4ce143e096596fd0a77f37d6~mv2.jpg", alt: "APC Montreal group photo", height: 360 },
  { src: "https://static.wixstatic.com/media/64b1f1_828fb9448b1445128237ced00837399a~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_828fb9448b1445128237ced00837399a~mv2.jpg", alt: "APC elite athletes training", height: 300 },
  { src: "https://static.wixstatic.com/media/64b1f1_1c28d51a4ce143e096596fd0a77f37d6~mv2.jpg/v1/fill/w_450,h_563,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_1c28d51a4ce143e096596fd0a77f37d6~mv2.jpg", alt: "APC performance center session", height: 360 },
  { src: "https://static.wixstatic.com/media/64b1f1_fb6c975027644fa18e32dd77d221257a~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_fb6c975027644fa18e32dd77d221257a~mv2.jpg", alt: "APC training floor", height: 280 },
  { src: "https://static.wixstatic.com/media/64b1f1_5f688eed99a4412ba8537a92852d7534~mv2.jpg/v1/fill/w_450,h_450,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_5f688eed99a4412ba8537a92852d7534~mv2.jpg", alt: "APC athletes working out", height: 300 },
  { src: "https://static.wixstatic.com/media/64b1f1_bad2e55a19b747be8dfbd7ec941cab60~mv2.jpg/v1/fill/w_450,h_601,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_bad2e55a19b747be8dfbd7ec941cab60~mv2.jpg", alt: "APC performance moment", height: 360 },
  { src: "https://static.wixstatic.com/media/64b1f1_c5ddb26a7d564a58aab613884c2bae76~mv2.jpg/v1/fill/w_451,h_601,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/64b1f1_c5ddb26a7d564a58aab613884c2bae76~mv2.jpg", alt: "Dr. Uriah at APC Montreal", height: 340 },
];

type LightboxItem = { src: string; alt: string; name?: string; description?: string };

const allLightboxItems: LightboxItem[] = [
  ...featured.map((f) => ({ src: f.src, alt: f.alt, name: f.name, description: f.description })),
  ...extras.map((e) => ({ src: e.src, alt: e.alt })),
];

function PatientsClientsPage() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowRight") setLightboxIdx((i) => (i === null ? null : (i + 1) % allLightboxItems.length));
      if (e.key === "ArrowLeft") setLightboxIdx((i) => (i === null ? null : (i - 1 + allLightboxItems.length) % allLightboxItems.length));
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
        className="flex items-center justify-center px-6 py-20 text-center"
        style={{ minHeight: "380px", background: "#0f1a12" }}
      >
        <div className="max-w-3xl">
          <div style={{ color: "#1a7a4a", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            UFC Champions · NHL Stars · Boxing Legends
          </div>
          <h1
            className="mt-5 font-display text-white"
            style={{ fontWeight: 900, fontSize: "clamp(2.6rem, 5vw, 4rem)", lineHeight: 1.05 }}
          >
            Trained Alongside Legends
          </h1>
          <p
            className="mx-auto mt-6"
            style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", maxWidth: 580, lineHeight: 1.7 }}
          >
            During his time at the Adrenaline Performance Center in Montreal under world-renowned
            coach Jonathan Chaimberg, Dr. Uriah worked alongside some of the greatest athletes in
            combat sports and professional hockey.
          </p>
        </div>
      </section>

      {/* SECTION 1 — FEATURED GALLERY */}
      <section style={{ background: "#ffffff", padding: "80px 6%" }}>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center">
              <div style={{ color: "#1a7a4a", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" }}>
                Clients & Connections
              </div>
              <h2
                className="font-display"
                style={{ fontWeight: 900, fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)", color: "#0f1a12", marginTop: "0.6rem" }}
              >
                The Athletes
              </h2>
              <p
                className="mx-auto"
                style={{ color: "#566059", fontSize: "1rem", maxWidth: 560, marginTop: "1rem", marginBottom: "3.5rem", lineHeight: 1.7 }}
              >
                Each photo represents a real connection from Dr. Uriah's career. Click any card to
                view the full photo.
              </p>
            </div>
          </Reveal>

          <div
            className="grid"
            style={{
              background: "#c8e6d4",
              gap: "1.5px",
              gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
            }}
          >
            <style>{`
              @media (min-width: 480px) { .featured-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } }
              @media (min-width: 768px) { .featured-grid { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; } }
              @media (min-width: 1280px) { .featured-grid { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; } }
              .featured-card:hover .card-desc { opacity: 1; transform: translateY(0); }
              .extras-grid { grid-template-columns: repeat(1, minmax(0, 1fr)); }
              @media (min-width: 480px) { .extras-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
              @media (min-width: 768px) { .extras-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
              @media (min-width: 1280px) { .extras-grid { grid-template-columns: repeat(4, minmax(0, 1fr)); } }
              .extra-tile img { transition: transform 0.22s ease, filter 0.22s ease; }
              .extra-tile:hover img { transform: scale(1.02); filter: brightness(1.15); }
            `}</style>
          </div>

          <div
            className="featured-grid grid"
            style={{ background: "#c8e6d4", gap: "1.5px", gridTemplateColumns: "repeat(1, minmax(0, 1fr))" }}
          >
            {featured.map((card, i) => (
              <Reveal key={card.src + i} delay={i * 60}>
                <FeaturedCardEl card={card} onClick={() => setLightboxIdx(i)} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — ADDITIONAL PHOTOS */}
      <section style={{ background: "#0f1a12", padding: "80px 6%" }}>
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center">
              <div style={{ color: "#1a7a4a", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase" }}>
                Behind the Scenes
              </div>
              <h2
                className="font-display text-white"
                style={{ fontWeight: 900, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", marginTop: "0.6rem" }}
              >
                More From the Training Floor
              </h2>
              <p
                className="mx-auto"
                style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", marginTop: "1rem", marginBottom: "3rem", maxWidth: 560, lineHeight: 1.7 }}
              >
                Additional moments from Dr. Uriah's time training alongside elite athletes at the
                Adrenaline Performance Center in Montreal and beyond.
              </p>
            </div>
          </Reveal>

          <div
            className="extras-grid grid"
            style={{ background: "#1a3020", gap: "3px" }}
          >
            {extras.map((ex, i) => (
              <Reveal key={ex.src + i} delay={i * 60}>
                <button
                  onClick={() => setLightboxIdx(featured.length + i)}
                  className="extra-tile block w-full overflow-hidden"
                  style={{ cursor: "pointer", padding: 0, border: 0, background: "#0f1a12" }}
                  aria-label={ex.alt}
                >
                  <img
                    src={ex.src}
                    alt={ex.alt}
                    loading="lazy"
                    style={{
                      display: "block",
                      width: "100%",
                      height: `${ex.height}px`,
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                    onError={(e) => {
                      const t = e.currentTarget;
                      t.style.display = "none";
                      const fb = t.nextElementSibling as HTMLElement | null;
                      if (fb) fb.style.display = "flex";
                    }}
                  />
                  <div
                    style={{
                      display: "none",
                      width: "100%",
                      height: `${ex.height}px`,
                      background: "#0f1a12",
                      color: "white",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.85rem",
                    }}
                  >
                    Photo
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3 — CTA */}
      <section className="text-center" style={{ background: "#1a7a4a", padding: "90px 7%" }}>
        <div className="mx-auto max-w-2xl">
          <div style={{ color: "white", fontSize: "0.74rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", opacity: 0.72 }}>
            Your Story Starts Here
          </div>
          <h2
            className="font-display text-white"
            style={{ fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.2rem)", marginTop: "1rem", lineHeight: 1.1 }}
          >
            With Future Patients<br />
            <span className="italic">Like You.</span>
          </h2>
          <p
            className="mx-auto"
            style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.02rem", maxWidth: 540, margin: "1.5rem auto 2.5rem", lineHeight: 1.9 }}
          >
            Every person on this page started exactly where you are right now. Whether you're
            recovering from injury, preparing for surgery, managing chronic pain, or looking to
            move and perform better — Dr. Uriah builds a plan around you specifically.
            <br /><br />
            Join the roster of people who trusted Absolute PT South Bay with their health, their
            performance, and their future.
          </p>

          <div className="flex flex-col items-center justify-center sm:flex-row" style={{ gap: "0.8rem" }}>
            <Link
              to="/contact"
              style={{
                background: "white", color: "#1a7a4a", fontWeight: 700, fontSize: "0.95rem",
                padding: "1rem 2.4rem", borderRadius: "50px", transition: "all 0.2s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#f3f7f4"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Book Your Free Consultation
            </Link>
            <Link
              to="/about"
              style={{
                background: "transparent", color: "white", fontWeight: 700, fontSize: "0.92rem",
                padding: "0.95rem 2.2rem", borderRadius: "50px",
                border: "2px solid rgba(255,255,255,0.5)", transition: "all 0.2s ease",
                display: "inline-block",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "white"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.background = "transparent"; }}
            >
              Learn About Dr. Uriah
            </Link>
          </div>

          <p className="italic text-white" style={{ opacity: 0.6, fontSize: "0.8rem", marginTop: "1.2rem" }}>
            Free 15–20 minute consultation — no commitment required.
          </p>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center animate-fade-in"
          style={{ background: "rgba(0,0,0,0.96)", padding: "2rem" }}
          onClick={() => setLightboxIdx(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx(null); }}
            className="absolute top-4 right-6 text-white"
            style={{ fontSize: "2.5rem", lineHeight: 1, background: "transparent", border: 0, cursor: "pointer" }}
            aria-label="Close"
          >
            <X className="h-10 w-10" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => (i === null ? null : (i - 1 + allLightboxItems.length) % allLightboxItems.length)); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white md:left-8"
            style={{ background: "transparent", border: 0, cursor: "pointer" }}
            aria-label="Previous"
          >
            <ChevronLeft className="h-12 w-12" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => (i === null ? null : (i + 1) % allLightboxItems.length)); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white md:right-8"
            style={{ background: "transparent", border: 0, cursor: "pointer" }}
            aria-label="Next"
          >
            <ChevronRight className="h-12 w-12" />
          </button>

          <div className="flex flex-col items-center" onClick={(e) => e.stopPropagation()} style={{ maxWidth: "90vw" }}>
            <img
              src={allLightboxItems[lightboxIdx].src}
              alt={allLightboxItems[lightboxIdx].alt}
              style={{ maxHeight: "80vh", maxWidth: "90vw", objectFit: "contain", display: "block" }}
            />
            {allLightboxItems[lightboxIdx].name && (
              <div className="mt-4 text-center text-white" style={{ maxWidth: 640 }}>
                <div className="font-display" style={{ fontWeight: 700, fontSize: "1.2rem" }}>
                  {allLightboxItems[lightboxIdx].name}
                </div>
                {allLightboxItems[lightboxIdx].description && (
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", lineHeight: 1.6, marginTop: "0.5rem" }}>
                    {allLightboxItems[lightboxIdx].description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function FeaturedCardEl({ card, onClick }: { card: FeaturedCard; onClick: () => void }) {
  const [errored, setErrored] = useState(false);
  return (
    <button
      onClick={onClick}
      className="featured-card relative block w-full overflow-hidden text-left"
      style={{ background: "white", padding: 0, border: 0, cursor: "pointer" }}
      aria-label={card.name}
    >
      {!errored ? (
        <img
          src={card.src}
          alt={card.alt}
          loading="lazy"
          onError={() => setErrored(true)}
          style={{
            display: "block",
            width: "100%",
            height: "280px",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
      ) : (
        <div
          style={{
            width: "100%", height: "280px", background: "#0f1a12", color: "white",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: "1rem", padding: "0 1rem", textAlign: "center",
          }}
        >
          {card.name}
        </div>
      )}

      <div
        style={{
          position: "absolute", left: 0, right: 0, bottom: 0,
          background:
            "linear-gradient(to top, rgba(15,26,18,0.97) 0%, rgba(15,26,18,0.85) 60%, rgba(15,26,18,0) 100%)",
          padding: "1.4rem 1.2rem 1.2rem",
        }}
      >
        <p
          className="card-desc"
          style={{
            color: "rgba(255,255,255,0.82)", fontSize: "0.8rem", lineHeight: 1.6,
            opacity: 0, transform: "translateY(6px)", transition: "all 0.25s ease",
            display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
            overflow: "hidden", marginBottom: "0.5rem",
          }}
        >
          {card.description}
        </p>
        <span
          style={{
            background: "#1a7a4a", color: "white", fontSize: "0.62rem", fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.22rem 0.7rem",
            borderRadius: "50px", marginBottom: "0.4rem", display: "inline-block",
          }}
        >
          {card.badge}
        </span>
        <div
          className="font-display"
          style={{ color: "white", fontWeight: 700, fontSize: "1rem", lineHeight: 1.2, marginTop: "0.3rem" }}
        >
          {card.name}
        </div>
      </div>
    </button>
  );
}

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.07 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.65s ease, transform 0.65s ease",
      }}
    >
      {children}
    </div>
  );
}
