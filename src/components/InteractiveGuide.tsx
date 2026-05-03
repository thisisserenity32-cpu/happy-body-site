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
      { name: "Cervical strain / whiplash", desc: "A soft-tissue injury of the neck, often from a sudden jolt like a car accident, fall, or sports collision that whips the head forward and back." },
      { name: "Cervicogenic headaches", desc: "Headaches that originate from tight muscles or stiff joints in the upper neck, commonly triggered by poor posture, long screen time, or sleeping awkwardly." },
      { name: "TMJ dysfunction", desc: "Jaw pain, clicking, or limited opening, often caused by clenching, grinding, stress, or trauma to the jaw." },
      { name: "Cervical radiculopathy", desc: "A pinched nerve in the neck, often from a herniated disc or arthritis, that sends pain, tingling, or weakness down the arm." },
      { name: "Post-concussion balance / vestibular issues", desc: "Lingering dizziness, fogginess, or visual disturbance after a head impact from sports, a fall, or a car accident." },
    ],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    intro: "Rotator cuff injuries, impingement, instability, and post-surgical recovery.",
    conditions: [
      { name: "Rotator cuff strain / tear", desc: "Pain reaching overhead or sleeping on the shoulder, often from repetitive overhead activity, lifting, or a fall." },
      { name: "Subacromial impingement", desc: "A pinching pain when raising the arm, usually from poor posture, weak scapular muscles, or repetitive overhead motion." },
      { name: "Frozen shoulder (adhesive capsulitis)", desc: "Gradual stiffness and loss of motion in the shoulder, often appearing after a period of disuse, injury, or with diabetes." },
      { name: "Post-op rotator cuff / labral repair", desc: "Recovery after shoulder surgery to repair a torn tendon or labrum, typically following a tear from injury or wear." },
      { name: "AC joint sprain", desc: "Pain on the top of the shoulder, usually from a fall onto the shoulder or a direct contact hit in sports." },
    ],
  },
  {
    id: "arm",
    label: "Arm & Elbow",
    intro: "Tendinopathies, nerve entrapments, and overuse injuries of the elbow and forearm.",
    conditions: [
      { name: "Tennis elbow (lateral epicondylalgia)", desc: "Outer-elbow pain from repetitive gripping or wrist extension. common in racquet sports, painters, and desk workers." },
      { name: "Golfer's elbow (medial epicondylalgia)", desc: "Inner-elbow pain from repeated wrist flexion or gripping, common in golf, throwing sports, and manual labor." },
      { name: "Cubital / radial tunnel syndrome", desc: "Numbness or tingling into the hand from a nerve being compressed at the elbow, often from leaning on the elbow or repetitive bending." },
      { name: "Distal biceps strain", desc: "Front-of-elbow pain after sudden heavy lifting or an awkward catch that overstretched the biceps tendon." },
    ],
  },
  {
    id: "back",
    label: "Back & Core",
    intro: "Disc-related pain, postural fatigue, and core instability across the spine.",
    conditions: [
      { name: "Lumbar disc herniation", desc: "Low back and leg pain caused when a spinal disc bulges and irritates a nearby nerve, often after lifting, twisting, or years of strain." },
      { name: "SI joint dysfunction", desc: "One-sided low back or buttock pain from the joint between the pelvis and spine, often from pregnancy, a fall, or repetitive asymmetric activity." },
      { name: "Lumbar strain", desc: "Acute muscle pain and guarding in the low back, typically after lifting something heavy, twisting, or a sudden movement." },
      { name: "Thoracic stiffness / postural pain", desc: "Mid-back tightness and ache from prolonged sitting, slouched posture, or long hours at a desk or driving." },
      { name: "Sciatica", desc: "Sharp pain radiating from the low back down the leg, caused by irritation of the sciatic nerve. often from a disc, tight muscles, or prolonged sitting." },
    ],
  },
  {
    id: "hip",
    label: "Hip & Pelvis",
    intro: "Hip impingement, bursitis, labral injuries, and post-replacement rehab.",
    conditions: [
      { name: "Femoroacetabular impingement (FAI)", desc: "A pinching sensation deep in the hip with squatting or sitting, caused by extra bone shape in the hip joint." },
      { name: "Greater trochanteric bursitis", desc: "Pain on the side of the hip when lying on it or walking, from inflammation of the bursa. often linked to weak glutes or repetitive activity." },
      { name: "Labral tear", desc: "Catching, clicking, or deep groin pain from a tear of the cartilage rim of the hip socket, often from sports or repetitive twisting." },
      { name: "Total hip replacement rehab", desc: "Recovery after surgery to replace the hip joint, usually following years of arthritis pain and stiffness." },
      { name: "Hip flexor / adductor strain", desc: "Front or inner-thigh pain from a sudden sprint, kick, or change of direction that overstretched the muscle." },
    ],
  },
  {
    id: "knee",
    label: "Leg & Knee",
    intro: "ACL/MCL injuries, patellar tracking issues, tendinopathies, and arthritis.",
    conditions: [
      { name: "ACL reconstruction rehab", desc: "Recovery after surgery to repair a torn ACL. a ligament commonly injured during pivoting sports like soccer, basketball, or skiing." },
      { name: "Patellofemoral pain", desc: "Aching at the front of the knee with stairs, squatting, or sitting too long. often from muscle imbalance, overuse, or kneecap tracking." },
      { name: "Meniscus injury", desc: "Pain along the joint line, sometimes with catching or locking, from a twist or squat that tore the cartilage cushion." },
      { name: "Patellar / quad tendinopathy", desc: "Pain just below the kneecap, common in jumping sports, from repetitive loading that irritated the tendon." },
      { name: "Knee osteoarthritis", desc: "Stiffness and ache that worsens with activity, from gradual wearing down of the cartilage in the knee over years." },
    ],
  },
  {
    id: "foot",
    label: "Foot & Ankle",
    intro: "Plantar fasciitis, sprains, Achilles issues, and post-fracture recovery.",
    conditions: [
      { name: "Plantar fasciitis", desc: "Sharp heel pain with the first steps in the morning, from inflammation of the band of tissue along the bottom of the foot. often from long standing or new running." },
      { name: "Lateral ankle sprain", desc: "Pain on the outside of the ankle after rolling it on uneven ground, in sports, or stepping off a curb." },
      { name: "Achilles tendinopathy", desc: "Pain at the back of the heel that warms up with activity but stiffens after rest, often from a sudden increase in running or jumping." },
      { name: "Post-fracture recovery", desc: "Restoring motion and strength after a broken bone in the foot or ankle, typically caused by a fall, twist, or impact." },
      { name: "Posterior tibial tendon dysfunction", desc: "Pain along the inside of the ankle and arch fatigue, often from overuse, flat feet, or aging tendons." },
    ],
  },
];

// (hotspot dots removed per design. labels flank the figure instead)

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
    { id: "neck",     top: "16%", left: "38%", size: 48 },
    { id: "shoulder", top: "24%", left: "50%", size: 56 },
    { id: "arm",      top: "32%", left: "27%", size: 52 },
    { id: "back",     top: "36%", left: "46%", size: 64 },
    { id: "hip",      top: "47%", left: "53%", size: 60 },
    { id: "knee",     top: "68%", left: "63%", size: 56 },
    { id: "foot",     top: "86%", left: "78%", size: 50 },
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

        <div className="mx-auto mt-12 grid max-w-6xl items-center gap-5 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
          {/* Left labels */}
          <div className="order-2 flex flex-col gap-4 lg:order-1">
            {leftIds.map((id) => {
              const r = regions.find((x) => x.id === id)!;
              return <RegionButton key={id} region={r} active={active === id} onClick={() => setActive(id)} align="right" />;
            })}
          </div>

          {/* Figure */}
          <div className="relative order-1 mx-auto h-[480px] w-[340px] rounded-2xl border border-border bg-white lg:order-2 lg:h-[540px] lg:w-[420px]">
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
                      ? "radial-gradient(circle, rgba(251,146,60,0.95) 0%, rgba(249,115,22,0.7) 30%, rgba(234,88,12,0.25) 60%, rgba(234,88,12,0) 80%)"
                      : "radial-gradient(circle, rgba(251,146,60,0.55) 0%, rgba(249,115,22,0.3) 35%, rgba(234,88,12,0) 70%)",
                  }}
                  className={`absolute rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${isActive ? "animate-pulse" : ""}`}
                >
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.9)]"
                  />
                </button>
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
            <p className="mt-3 text-sm text-muted-foreground">Tap an ailment to learn what it feels like and how it commonly happens.</p>

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
      className={`group rounded-2xl border-2 px-6 py-5 text-center md:text-${align} transition-all ${
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
