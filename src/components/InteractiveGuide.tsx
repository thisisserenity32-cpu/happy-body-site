import { useEffect, useState } from "react";
import { X, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import figure from "@/assets/body-runner.jpg";

type Condition = { name: string; desc: string };
type Region = {
  id: string;
  label: string;
  intro: string;
  conditions: Condition[];
};

const regions: Region[] = [
  {
    id: "neck",
    label: "Head & Neck",
    intro: "Cervical spine pain, headaches, and post-concussion mobility issues.",
    conditions: [
      { name: "Cervical strain / whiplash", desc: "Soft-tissue injury of the neck from sudden acceleration-deceleration; manual therapy + graded mobility restore range and reduce guarding." },
      { name: "Cervicogenic headaches", desc: "Headaches originating from upper cervical joints or musculature; treated with joint mobilizations, postural retraining, and deep neck flexor activation." },
      { name: "TMJ dysfunction", desc: "Jaw pain, clicking, or limited opening; addressed with intra-/extra-oral release and motor control retraining." },
      { name: "Cervical radiculopathy", desc: "Nerve root compression causing arm pain, tingling, or weakness; nerve glides, traction, and directional preference exercises." },
      { name: "Post-concussion balance / vestibular issues", desc: "Dizziness and visual disturbance after concussion; vestibular and oculomotor rehab progressed to sport-specific activity." },
    ],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    intro: "Rotator cuff injuries, impingement, instability, and post-surgical recovery.",
    conditions: [
      { name: "Rotator cuff strain / tear", desc: "Pain reaching overhead or sleeping on the shoulder; progressive cuff and scapular strengthening with manual therapy." },
      { name: "Subacromial impingement", desc: "Pinching pain with elevation; addressed with scapular mechanics, posture, and graded loading." },
      { name: "Frozen shoulder (adhesive capsulitis)", desc: "Stiffness and loss of motion; joint mobilizations, capsular stretching, and patient-specific dosing." },
      { name: "Post-op rotator cuff / labral repair", desc: "Protocol-driven return to motion, strength, and sport after surgery." },
      { name: "AC joint sprain", desc: "Top-of-shoulder pain after a fall or contact; taping, scapular control, and progressive loading." },
    ],
  },
  {
    id: "arm",
    label: "Arm & Elbow",
    intro: "Tendinopathies, nerve entrapments, and overuse injuries of the elbow and forearm.",
    conditions: [
      { name: "Tennis elbow (lateral epicondylalgia)", desc: "Outer-elbow pain with gripping; eccentric loading, manual therapy, and ergonomic tweaks." },
      { name: "Golfer's elbow (medial epicondylalgia)", desc: "Inner-elbow pain with wrist flexion; progressive tendon loading and grip mechanics." },
      { name: "Cubital / radial tunnel syndrome", desc: "Tingling into the hand from nerve entrapment at the elbow; nerve glides and posture work." },
      { name: "Distal biceps strain", desc: "Front-of-elbow pain after lifting; progressive isometric to heavy-slow loading." },
    ],
  },
  {
    id: "back",
    label: "Back & Core",
    intro: "Disc-related pain, postural fatigue, and core instability across the spine.",
    conditions: [
      { name: "Lumbar disc herniation", desc: "Low back and leg pain with directional sensitivity; McKenzie-style exposure, nerve glides, and graded strengthening." },
      { name: "SI joint dysfunction", desc: "One-sided low back / buttock pain; manual therapy and pelvic stabilization." },
      { name: "Lumbar strain", desc: "Acute muscle guarding after lifting or twisting; pain-modulation, mobility, and re-loading." },
      { name: "Thoracic stiffness / postural pain", desc: "Mid-back tightness from desk posture; mobility, breathing, and scapular control." },
      { name: "Sciatica", desc: "Radiating leg pain; nerve mobilizations, directional exercise, and progressive return to activity." },
    ],
  },
  {
    id: "hip",
    label: "Hip & Pelvis",
    intro: "Hip impingement, bursitis, labral injuries, and post-replacement rehab.",
    conditions: [
      { name: "Femoroacetabular impingement (FAI)", desc: "Pinching with deep hip flexion; mobility, motor control, and hip strengthening." },
      { name: "Greater trochanteric bursitis", desc: "Side-of-hip pain lying or walking; glute medius loading and load management." },
      { name: "Labral tear", desc: "Catching or deep groin pain; capsular stability and progressive loading." },
      { name: "Total hip replacement rehab", desc: "Protocol-driven return to walking, stairs, and full activity." },
      { name: "Hip flexor / adductor strain", desc: "Front or inner-thigh pain in athletes; eccentric strengthening and return-to-sport." },
    ],
  },
  {
    id: "knee",
    label: "Leg & Knee",
    intro: "ACL/MCL injuries, patellar tracking issues, tendinopathies, and arthritis.",
    conditions: [
      { name: "ACL reconstruction rehab", desc: "Protocol-driven recovery through swelling control, strength, neuromuscular control, and return to sport." },
      { name: "Patellofemoral pain", desc: "Front-of-knee pain with stairs and squatting; quad/glute strengthening and loading tweaks." },
      { name: "Meniscus injury", desc: "Joint-line pain or catching; progressive loading and motor control." },
      { name: "Patellar / quad tendinopathy", desc: "Jumper's knee; isometric and heavy-slow tendon loading." },
      { name: "Knee osteoarthritis", desc: "Stiffness and ache with activity; strengthening, weight management, and education." },
    ],
  },
  {
    id: "foot",
    label: "Foot & Ankle",
    intro: "Plantar fasciitis, sprains, Achilles issues, and post-fracture recovery.",
    conditions: [
      { name: "Plantar fasciitis", desc: "Stabbing heel pain with first morning steps; loading, mobility, and footwear guidance." },
      { name: "Lateral ankle sprain", desc: "Outside ankle pain after rolling; balance, strength, and return-to-sport drills." },
      { name: "Achilles tendinopathy", desc: "Back-of-heel pain that warms up with activity; eccentric and heavy-slow loading." },
      { name: "Post-fracture recovery", desc: "Restoring motion, strength, and gait after immobilization." },
      { name: "Posterior tibial tendon dysfunction", desc: "Inner-ankle pain and arch fatigue; orthotic guidance and progressive strengthening." },
    ],
  },
];

// (hotspot dots removed per design — labels flank the figure instead)

export function InteractiveGuide() {
  const [active, setActive] = useState<string | null>(null);
  const region = regions.find((r) => r.id === active) ?? null;

  useEffect(() => {
    if (!region) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [region]);

  // Split labels left/right of figure
  const leftIds = ["neck", "shoulder", "arm"];
  const rightIds = ["back", "hip", "knee", "foot"];

  // Hotspot positions on the figure (percent of container).
  // Figure is a side-view runner facing left; coordinates tuned to that pose.
  const hotspots: { id: string; top: string; left: string; size: number }[] = [
    { id: "neck",     top: "14%", left: "47%", size: 56 },
    { id: "shoulder", top: "26%", left: "55%", size: 64 },
    { id: "arm",      top: "38%", left: "38%", size: 60 },
    { id: "back",     top: "40%", left: "60%", size: 76 },
    { id: "hip",      top: "55%", left: "55%", size: 72 },
    { id: "knee",     top: "75%", left: "48%", size: 64 },
    { id: "foot",     top: "94%", left: "62%", size: 56 },
  ];

  return (
    <section className="bg-cream-deep py-20">
      <div className="container-prose">
        <div className="text-center">
          <div className="eyebrow">Interactive Guide</div>
          <h2 className="mt-3 font-display text-4xl font-semibold text-foreground md:text-5xl">Where Does It Hurt?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Tap a region to see common conditions Dr. Uriah treats and how they're addressed.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl items-center gap-5 md:grid-cols-[1fr_auto_1fr] md:gap-6">
          {/* Left labels */}
          <div className="order-2 flex flex-col gap-4 md:order-1">
            {leftIds.map((id) => {
              const r = regions.find((x) => x.id === id)!;
              return <RegionButton key={id} region={r} active={active === id} onClick={() => setActive(id)} align="right" />;
            })}
          </div>

          {/* Figure */}
          <div className="relative order-1 mx-auto h-[480px] w-[340px] rounded-2xl border border-border bg-white md:order-2 md:h-[540px] md:w-[420px]">
            <img src={figure} alt="Body diagram" className="h-full w-full object-contain p-4" />
            {hotspots.map((h) => {
              const r = regions.find((x) => x.id === h.id)!;
              const isActive = active === h.id;
              return (
                <button
                  key={h.id}
                  onClick={() => setActive(h.id)}
                  aria-label={r.label}
                  title={r.label}
                  style={{
                    top: h.top,
                    left: h.left,
                    width: h.size,
                    height: h.size,
                    transform: "translate(-50%, -50%)",
                    background: isActive
                      ? "radial-gradient(circle, rgba(251,146,60,0.85) 0%, rgba(249,115,22,0.55) 40%, rgba(234,88,12,0) 75%)"
                      : "radial-gradient(circle, rgba(251,146,60,0.0) 0%, rgba(249,115,22,0.0) 60%)",
                  }}
                  className="absolute rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent hover:[background:radial-gradient(circle,rgba(251,146,60,0.75)_0%,rgba(249,115,22,0.45)_40%,rgba(234,88,12,0)_75%)]"
                />
              );
            })}
          </div>

          {/* Right labels */}
          <div className="order-3 flex flex-col gap-4">
            {rightIds.map((id) => {
              const r = regions.find((x) => x.id === id)!;
              return <RegionButton key={id} region={r} active={active === id} onClick={() => setActive(id)} align="left" />;
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {region && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-card p-8 shadow-2xl animate-scale-in md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="eyebrow">Treatment Area</div>
            <h3 className="mt-2 font-display text-3xl font-semibold text-foreground md:text-4xl">{region.label}</h3>
            <p className="mt-3 text-sm text-muted-foreground">Tap an ailment to see a short description.</p>

            <ul className="mt-6 space-y-2">
              {region.conditions.map((c) => (
                <ConditionItem key={c.name} condition={c} />
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                onClick={() => setActive(null)}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                Talk to Dr. Uriah <ArrowRight className="h-4 w-4" />
              </Link>
              <button
                onClick={() => setActive(null)}
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function RegionButton({
  region, active, onClick, align,
}: { region: Region; active: boolean; onClick: () => void; align: "left" | "right" }) {
  return (
    <button
      onClick={onClick}
      className={`group rounded-2xl border-2 px-6 py-5 text-${align} transition-all ${
        active
          ? "border-primary bg-primary text-primary-foreground shadow-lg"
          : "border-border bg-card text-foreground hover:border-primary/50 hover:bg-primary-soft/40 hover:shadow-md"
      }`}
    >
      <div className="font-display text-xl font-semibold md:text-2xl">{region.label}</div>
    </button>
  );
}

function ConditionItem({ condition }: { condition: Condition }) {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition-colors ${
          open
            ? "border-primary bg-primary-soft/40"
            : "border-border bg-cream-deep/50 hover:border-primary/40 hover:bg-primary-soft/30"
        }`}
      >
        <span className="font-display text-base font-semibold text-foreground">{condition.name}</span>
        <span className={`text-primary transition-transform ${open ? "rotate-45" : ""}`} aria-hidden>+</span>
      </button>
      {open && (
        <p className="mt-2 rounded-xl bg-card px-4 py-3 text-sm text-muted-foreground animate-fade-in">
          {condition.desc}
        </p>
      )}
    </li>
  );
}
