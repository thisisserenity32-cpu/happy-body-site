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
      { name: "Cervicogenic headaches", desc: "A headache that starts in the neck rather than the head itself. It is usually caused by stiff joints or tight muscles in the upper neck, often triggered by long hours at a desk or poor posture." },
      { name: "TMJ dysfunction", desc: "Pain, clicking, or limited movement in the jaw joint, often felt while chewing, yawning, or talking. It is commonly caused by clenching, grinding, stress, or postural strain through the neck and jaw." },
      { name: "Cervical radiculopathy", desc: "A pinched nerve in the neck that sends pain, numbness, or tingling down the shoulder, arm, or hand. It is usually caused by a herniated disc, bone spur, or wear-and-tear changes pressing on the nerve root." },
      { name: "Post-concussion balance / vestibular issues", desc: "Dizziness, brain fog, or balance problems that linger after a concussion or head impact. It is caused by disruption to the inner ear and brain pathways that control balance and vision." },
    ],
  },
  {
    id: "shoulder",
    label: "Shoulder",
    intro: "Rotator cuff injuries, impingement, instability, and post-surgical recovery.",
    conditions: [
      { name: "Rotator cuff strain or tear", desc: "Pain, weakness, or trouble lifting the arm overhead, often with night pain when lying on the sore side. It is caused by repetitive overhead motion, sudden lifting, or age-related tendon wear." },
      { name: "Shoulder impingement syndrome", desc: "A pinching pain at the top or front of the shoulder that flares when reaching overhead or behind your back. It is caused by tendons getting compressed under the shoulder blade during arm motion." },
      { name: "Frozen shoulder (adhesive capsulitis)", desc: "A slow stiffening of the shoulder that severely limits movement in all directions, often with deep aching pain. It commonly develops after periods of immobility, surgery, or in those with diabetes or thyroid conditions." },
      { name: "AC joint sprain / separation", desc: "Pain and tenderness right on top of the shoulder, sometimes with a visible bump if severe. It is caused by a fall onto the shoulder or a direct hit that disrupts the joint between the collarbone and shoulder blade." },
      { name: "Labral tear (SLAP / Bankart)", desc: "A deep, catching pain inside the shoulder, often with clicking, instability, or weakness during overhead or throwing motions. It is caused by trauma, dislocations, or repetitive overhead stress on the shoulder's cartilage rim." },
      { name: "Bicep tendinopathy", desc: "A dull ache at the front of the shoulder that worsens with lifting or reaching forward. It is caused by overuse or chronic irritation of the biceps tendon as it travels through the shoulder." },
    ],
  },
  {
    id: "arm",
    label: "Arm & Elbow",
    intro: "Tendinopathies, nerve entrapments, and overuse injuries of the elbow and forearm.",
    conditions: [
      { name: "Tennis elbow (lateral epicondylalgia)", desc: "A burning pain on the outside of the elbow that worsens with gripping, lifting, or twisting motions. It is caused by overuse of the wrist tendons, common in desk workers, tradespeople, and racquet sport athletes." },
      { name: "Golfer's elbow (medial epicondylalgia)", desc: "Pain and tenderness on the inside of the elbow, often radiating into the forearm with gripping or wrist bending. It is caused by repeated stress to the flexor tendons from throwing, lifting, or repetitive hand work." },
      { name: "Cubital / radial tunnel syndrome", desc: "Numbness, tingling, or aching in the forearm and hand from a pinched nerve at the elbow. It is caused by long periods of elbow bending, leaning on the elbow, or repetitive forearm rotation." },
      { name: "Distal biceps strain", desc: "Sharp pain at the front of the elbow with weakness when bending the arm or turning the forearm. It is caused by sudden heavy lifting or a forceful pull, often during weightlifting or catching a falling object." },
    ],
  },
  {
    id: "back",
    label: "Back & Core",
    intro: "Disc-related pain, postural fatigue, and core instability across the spine.",
    conditions: [
      { name: "Lumbar strain / sprain", desc: "A sudden, sharp lower back pain that limits bending, twisting, or standing upright. It is caused by lifting heavy objects, awkward movements, or overloading the back muscles and ligaments." },
      { name: "Herniated disc / sciatica", desc: "Lower back pain that travels down the buttock and leg, often with numbness, tingling, or weakness. It is caused by a disc bulging or rupturing and pressing on a nearby spinal nerve." },
      { name: "SI joint dysfunction", desc: "A deep ache in the lower back or buttock that worsens with long sitting, standing, or moving between positions. It is caused by too much or too little movement at the joint where the spine meets the pelvis." },
      { name: "Spinal stenosis", desc: "Lower back and leg pain that worsens with standing or walking and eases when bending forward or sitting. It is caused by gradual narrowing of the spinal canal, most often from age-related arthritis." },
      { name: "Core weakness / postural dysfunction", desc: "Chronic lower back fatigue, poor posture, or pain that keeps coming back despite rest. It is caused by weak deep core muscles failing to support the spine during daily activity." },
      { name: "Thoracic spine stiffness", desc: "Tightness, aching, or restricted rotation in the mid-back, often paired with neck or shoulder discomfort. It is caused by long sitting, poor desk setup, and shallow breathing patterns." },
    ],
  },
  {
    id: "hip",
    label: "Hip & Pelvis",
    intro: "Hip impingement, bursitis, labral injuries, and post-replacement rehab.",
    conditions: [
      { name: "Hip impingement (FAI)", desc: "A pinching pain in the front of the hip or groin during deep squats, sitting, or athletic movements. It is caused by abnormal contact between the thigh bone and hip socket, often from anatomy or repetitive sport stress." },
      { name: "Hip labral tear", desc: "A deep groin or outer hip pain with catching, clicking, or locking sensations. It is caused by trauma, repetitive twisting, or impingement that damages the cartilage ring around the hip socket." },
      { name: "Greater trochanteric pain syndrome (hip bursitis)", desc: "Tenderness and aching on the outer hip that worsens with lying on the side, walking, or climbing stairs. It is caused by inflammation of the tendons and bursa over the side of the hip." },
      { name: "Gluteal tendinopathy", desc: "A dull ache or weakness on the outer hip and buttock, often after long walks, runs, or standing. It is caused by chronic overload of the gluteal tendons that stabilize the hip and pelvis." },
      { name: "Sacroiliac joint pain", desc: "Pain at the base of the spine on one side, often radiating into the buttock or upper thigh. It is caused by joint stiffness, too much motion, or uneven loading through the pelvis." },
      { name: "Hip osteoarthritis", desc: "Stiffness and aching in the groin or front of the hip, especially after rest or long activity. It is caused by gradual wear of the cartilage that cushions the hip joint." },
    ],
  },
  {
    id: "knee",
    label: "Leg & Knee",
    intro: "ACL/MCL injuries, patellar tracking issues, tendinopathies, and arthritis.",
    conditions: [
      { name: "Patellofemoral pain syndrome (runner's knee)", desc: "A dull ache around or behind the kneecap that worsens with stairs, squatting, or sitting too long. It is caused by poor kneecap tracking from muscle imbalances, weak hips, or overtraining." },
      { name: "ACL / MCL / meniscus injury", desc: "Sudden knee pain, swelling, or instability after a twisting injury, awkward landing, or direct hit. It is caused by tearing of the knee's ligaments or shock-absorbing cartilage during sport or accidents." },
      { name: "IT band syndrome", desc: "A sharp, burning pain on the outer side of the knee that flares during running or repeated bending. It is caused by friction between the IT band and the outer knee from training overload or hip weakness." },
      { name: "Patellar / quadriceps tendinopathy (jumper's knee)", desc: "Pain just above or below the kneecap that worsens with jumping, squatting, or running. It is caused by chronic overload of the tendons that drive knee extension, common in athletes and weekend warriors." },
      { name: "Knee osteoarthritis", desc: "Stiffness, aching, or swelling in the knee, especially in the morning or after activity. It is caused by gradual cartilage wear in the joint, often combined with weak muscles around the knee." },
      { name: "Calf strain / muscle tear", desc: "A sudden sharp pain in the back of the lower leg, often described as a kick sensation. It is caused by an explosive push-off, sprinting, or sudden direction change that overloads the calf muscle." },
      { name: "Hamstring strain", desc: "A pulling, tightening pain at the back of the thigh, usually during sprinting, kicking, or sudden acceleration. It is caused by overstretching or rapid load on the hamstring muscles." },
    ],
  },
  {
    id: "foot",
    label: "Foot & Ankle",
    intro: "Plantar fasciitis, sprains, Achilles issues, and post-fracture recovery.",
    conditions: [
      { name: "Ankle sprain (lateral / high ankle)", desc: "Pain, swelling, and instability after rolling, twisting, or landing awkwardly on the foot. It is caused by overstretching or tearing of the ligaments that stabilize the ankle." },
      { name: "Plantar fasciitis", desc: "Sharp heel pain that is worst with the first steps in the morning or after long periods of rest. It is caused by inflammation and overload of the thick band of tissue along the bottom of the foot." },
      { name: "Achilles tendinopathy", desc: "Stiffness and aching at the back of the heel that worsens with running, jumping, or stair climbing. It is caused by chronic overload of the Achilles tendon, often from training spikes or weak calves." },
      { name: "Posterior tibial tendon dysfunction", desc: "Pain along the inner ankle and arch, with the foot slowly flattening over time. It is caused by gradual breakdown of the tendon that supports the arch, common in runners and people on their feet all day." },
      { name: "Stress fracture (foot / lower leg)", desc: "A sharp, focused pain in the foot or shin that worsens with weight-bearing and improves with rest. It is caused by repetitive impact that exceeds the bone's ability to repair itself, common in runners and military personnel." },
      { name: "Turf toe / metatarsalgia", desc: "Pain at the base of the big toe or across the ball of the foot, often during push-off or walking. It is caused by hyperextension of the toe (turf toe) or repetitive overload of the forefoot (metatarsalgia)." },
    ],
  },
];

// (hotspot dots removed per design. Labels flank the figure instead)

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
