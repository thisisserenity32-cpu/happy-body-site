import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import portrait from "@/assets/dr-uriah-portrait.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Uriah. Absolute PT South Bay" },
      { name: "description", content: "South Bay native with over 20 years in performance and rehabilitation. Trained alongside UFC champions and NHL stars." },
      { property: "og:title", content: "About Dr. Uriah J. Maimone, DPT" },
      { property: "og:description", content: "Doctor of Physical Therapy with elite-level training experience, serving South Bay in your home." },
    ],
  }),
  component: AboutPage,
});

/* ------- Reveal helper ------- */
function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "p" | "h2" | "h3" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (setShow(true), io.disconnect())),
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref as never}
      style={{
        transitionDelay: `${delay}ms`,
        opacity: show ? 1 : 0,
        transform: show ? "translateY(0)" : "translateY(18px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        willChange: "transform, opacity",
      }}
      className={className}
    >
      {children}
    </Tag>
  );
}

const PILLS = [
  "Board Certified DPT",
  "CSCS",
  "EP-C",
  "MS Kinesiology",
  "20+ Yrs MMA",
  "South Bay Native",
];

const STATS: Array<[string, string]> = [
  ["20+", "Years Experience"],
  ["3", "Advanced Degrees"],
  ["11", "Specialties"],
  ["100%", "Personalized Care"],
];

const CREDENTIALS = [
  "University of St. Augustine. Doctor of Physical Therapy (DPT)",
  "Cal Polytechnic Humboldt. MS, Kinesiology: Exercise Science",
  "Cal Polytechnic Humboldt. BS, Kinesiology: Exercise Science",
  "ACSM. Certified Exercise Physiologist (EP-C)",
  "NSCA. Certified Strength & Conditioning Specialist (CSCS)",
];

function AboutPage() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      {/* ============ SECTION 1. HERO ============ */}
      <section
        style={{
          background: "#ffffff",
          padding: "120px clamp(2rem,7%,7rem) 80px",
          minHeight: "88vh",
          overflow: "visible",
        }}
      >
        <div
          className="about-hero-grid"
          style={{
            display: "grid",
            gap: "4rem",
            alignItems: "center",
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          <Reveal>
            <span
              style={{
                color: "#1a7a4a",
                fontSize: "0.76rem",
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "0.9rem",
                display: "block",
              }}
            >
              About Dr. Uriah
            </span>
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 900,
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                color: "#0f1a12",
                lineHeight: 1.06,
                marginBottom: "0.6rem",
                background: "transparent",
                textDecoration: "none",
                letterSpacing: "-0.01em",
              }}
            >
              Dr. Uriah J. Maimone
            </h1>
            <div
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "1.05rem",
                color: "#1a7a4a",
                letterSpacing: "0.06em",
                marginBottom: "1.4rem",
              }}
            >
              PT, DPT, CSCS, EP-C
            </div>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 400,
                fontSize: "1.05rem",
                color: "#566059",
                lineHeight: 1.85,
                maxWidth: 480,
                marginBottom: "2rem",
              }}
            >
              South Bay native. Board Certified Doctor of Physical Therapy with over 20 years in
              the performance and rehabilitation space. Expert in sports rehab, geriatrics,
              Parkinson's care, and strength and conditioning.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", margin: "-0.25rem" }}>
              {PILLS.map((p, i) => (
                <Reveal key={p} delay={i * 55} as="span">
                  <span
                    style={{
                      display: "inline-block",
                      background: "#e4f0e8",
                      border: "1.5px solid #c8e6d4",
                      color: "#1a7a4a",
                      fontWeight: 700,
                      fontSize: "0.7rem",
                      padding: "0.34rem 0.88rem",
                      borderRadius: 50,
                      letterSpacing: "0.08em",
                      margin: "0.25rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {p}
                  </span>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <img
              src={portrait}
              alt="Dr. Uriah J. Maimone, DPT"
              style={{
                width: "100%",
                aspectRatio: "3 / 4",
                objectFit: "cover",
                objectPosition: "center top",
                borderRadius: 14,
                display: "block",
              }}
            />
          </Reveal>
        </div>
      </section>

      {/* ============ SECTION 2. MISSION ============ */}
      <section
        style={{
          background: "#1a7a4a",
          padding: "90px clamp(2rem,7%,7rem)",
        }}
      >
        <div
          className="about-mission-grid"
          style={{
            display: "grid",
            gap: "3rem",
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          <Reveal>
            <span
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "0.74rem",
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                fontWeight: 700,
                marginBottom: "0.8rem",
                display: "block",
              }}
            >
              Our Mission
            </span>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontWeight: 900,
                color: "white",
                fontSize: "clamp(1.7rem, 3vw, 2.5rem)",
                lineHeight: 1.18,
                margin: 0,
              }}
            >
              Enhancing Lives Through Movement
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
              {[
                "Absolute Physical Therapy South Bay's (APTSB) Home Health Services exists to enhance the quality of life for those facing mobility challenges, pain, disease, and disorders. helping people regain movement and prevent future injuries and disabilities.",
                "From geriatrics to youth, recreational to elite athletes. we understand that people want to push themselves to greater heights. Our mission is to communicate and treat all aspects of pre-habilitation, rehabilitation, exercise, sports science, and physiology in a way that is relevant, easy to understand, backed by facts, and results-driven.",
                "We are confident that you will enjoy and use our services to enhance your performance and abilities. in your daily life, household chores, job duties, and sports. Thank you for visiting and hopefully choosing APTSB.",
              ].map((p) => (
                <p
                  key={p.slice(0, 30)}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.88)",
                    lineHeight: 1.88,
                    margin: 0,
                    textAlign: "left",
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ SECTION 3. STATS BAND ============ */}
      <section
        style={{
          background: "#0f1a12",
          padding: "56px clamp(2rem,7%,7rem)",
        }}
      >
        <div
          className="about-stats"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "2rem",
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          {STATS.map(([num, label], i) => (
            <Reveal key={label} delay={i * 80}>
              <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontWeight: 900,
                      fontSize: "clamp(2.6rem, 5vw, 3.8rem)",
                      color: "#ffffff",
                      lineHeight: 1,
                    }}
                  >
                    {num}
                  </div>
                  <div
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.76rem",
                      color: "rgba(255,255,255,0.52)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      marginTop: "0.5rem",
                    }}
                  >
                    {label}
                  </div>
                </div>
                {i < STATS.length - 1 && (
                  <div
                    className="about-stat-divider"
                    style={{
                      width: 1,
                      height: 48,
                      background: "rgba(255,255,255,0.1)",
                      alignSelf: "center",
                    }}
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ SECTION 4. BIO ============ */}
      <section
        style={{
          background: "#f3f7f4",
          padding: "90px clamp(2rem,7%,7rem)",
        }}
      >
        <div
          className="about-bio-grid"
          style={{
            display: "grid",
            gap: "5rem",
            alignItems: "start",
            maxWidth: 1280,
            margin: "0 auto",
          }}
        >
          <div className="about-bio-photo" style={{ position: "sticky", top: "6rem", alignSelf: "start" }}>
            <div style={{ position: "relative" }}>
              <img
                src={portrait}
                alt="Dr. Uriah J. Maimone"
                style={{
                  width: "100%",
                  aspectRatio: "3 / 4",
                  objectFit: "cover",
                  objectPosition: "center top",
                  borderRadius: 16,
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  right: "1rem",
                  background: "#1a7a4a",
                  color: "white",
                  padding: "0.65rem 1rem",
                  borderRadius: 8,
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "0.68rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                DPT · CSCS · EP-C
              </div>
            </div>
          </div>

          <div>
            <Reveal>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#1a7a4a",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    color: "#1a7a4a",
                    fontSize: "0.74rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    fontWeight: 700,
                  }}
                >
                  BIO
                </span>
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontWeight: 900,
                  fontSize: "clamp(1.55rem, 2.6vw, 2.1rem)",
                  color: "#0f1a12",
                  lineHeight: 1.22,
                  marginTop: "0.6rem",
                  marginBottom: "0.4rem",
                }}
              >
                Two Decades of Elite Performance and Rehabilitation
              </h2>
            </Reveal>

            {[
              {
                h: "Education & Research",
                p: "Dr. Uriah Maimone, a South Bay native, holds a Bachelor of Science and Master of Science in Kinesiology from Cal Polytechnic Humboldt with a focus in Exercise Science Human Performance. His thesis. the first of its kind. compared elite and amateur MMA athletes in body composition, skill-related physical tests, and muscular fitness. Submitted to the Journal of Strength and Conditioning.",
              },
              {
                h: "Elite Performance Training",
                p: "Dr. Uriah interned and worked at an Elite Performance Center in Montreal, Quebec, specializing in athletic performance enhancement for top-level athletes in the UFC and NHL. Working under world-renowned strength coach Jonathan Chaimberg alongside champions including Georges St-Pierre, Jon Jones, and Kris Letang.",
              },
              {
                h: "Clinical Expertise",
                p: "He earned his Doctorate in Physical Therapy from the University of St. Augustine for Health Sciences in San Marcos, CA. His training includes manual techniques, movement-based methods, and weight training. using functional movement assessments and current research to create personalized rehabilitation programs that help patients manage pain, regain movement, and prevent future injury.",
              },
            ].map((b, i) => (
              <Reveal key={b.h} delay={i * 90}>
                <h3
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    color: "#1a7a4a",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: "1.6rem",
                    marginBottom: "0.4rem",
                  }}
                >
                  {b.h}
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "0.96rem",
                    color: "#566059",
                    lineHeight: 1.88,
                    margin: 0,
                  }}
                >
                  {b.p}
                </p>
              </Reveal>
            ))}

            <div
              style={{
                borderTop: "1px solid #c8e6d4",
                marginTop: "1.6rem",
                paddingTop: "1.4rem",
              }}
            >
              <Reveal>
                <div
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.76rem",
                    color: "#1a7a4a",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "1rem",
                  }}
                >
                  Credentials & Education
                </div>
              </Reveal>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {CREDENTIALS.map((c, i) => (
                  <Reveal key={c} delay={i * 60} as="li">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.55rem",
                        marginBottom: "0.55rem",
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: "#1a7a4a",
                          flexShrink: 0,
                          marginTop: "0.6rem",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 400,
                          fontSize: "0.9rem",
                          color: "#566059",
                          lineHeight: 1.65,
                        }}
                      >
                        {c}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 5. CLOSING ============ */}
      <section
        style={{
          background: "#0f1a12",
          padding: "70px clamp(2rem,7%,7rem)",
          textAlign: "center",
        }}
      >
        <Reveal>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontWeight: 900,
              color: "white",
              fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
              margin: 0,
            }}
          >
            Ready to Start Your Recovery?
          </h2>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              color: "rgba(255,255,255,0.72)",
              fontSize: "1rem",
              maxWidth: 480,
              margin: "0.8rem auto 2rem",
              lineHeight: 1.85,
            }}
          >
            Book a free 15–20 minute consultation and let Dr. Uriah build a plan built
            specifically around you.
          </p>
          <Link
            to="/contact"
            className="about-cta"
            style={{
              display: "inline-block",
              background: "#1a7a4a",
              color: "white",
              fontWeight: 700,
              fontSize: "0.95rem",
              padding: "1rem 2.4rem",
              borderRadius: 50,
              textDecoration: "none",
              transition: "background 0.2s ease, transform 0.2s ease",
            }}
          >
            Start Your Recovery
          </Link>
        </Reveal>
      </section>

      <style>{`
        .about-hero-grid { grid-template-columns: 1fr; }
        .about-mission-grid { grid-template-columns: 1fr; }
        .about-bio-grid { grid-template-columns: 1fr; }
        @media (min-width: 900px) {
          .about-hero-grid { grid-template-columns: 55fr 45fr; }
          .about-mission-grid { grid-template-columns: 38fr 62fr; }
          .about-bio-grid { grid-template-columns: 42fr 58fr; }
        }
        @media (max-width: 700px) {
          .about-stat-divider { display: none !important; }
          .about-bio-photo { position: static !important; top: auto !important; }
        }
        .about-cta:hover { background: #145c38 !important; transform: translateY(-2px); }
      `}</style>
    </div>
  );
}
