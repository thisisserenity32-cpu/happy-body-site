import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight, Calendar } from "lucide-react";

type Props = {
  eyebrow?: string;
  title: string;
  body: string;
  primaryLabel?: string;
  primaryTo?: string;
  /** dark green panel (default) or cream */
  variant?: "dark" | "cream";
};

export function BookingCTA({
  eyebrow = "Get Started",
  title,
  body,
  primaryLabel = "Start Your Recovery",
  primaryTo = "/contact",
  variant = "dark",
}: Props) {
  const isDark = variant === "dark";
  return (
    <section
      className={
        isDark
          ? "bg-primary text-primary-foreground"
          : "border-y border-border bg-cream-deep text-foreground"
      }
    >
      <div className="container-prose py-20 md:py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p
              className={`text-xs font-semibold uppercase tracking-[0.22em] ${
                isDark ? "text-accent" : "text-primary"
              }`}
            >
              {eyebrow}
            </p>
            <h2
              className={`mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl ${
                isDark ? "" : "text-foreground"
              }`}
            >
              {title}
            </h2>
            <p
              className={`mt-5 text-base leading-relaxed md:text-lg ${
                isDark ? "text-primary-foreground/85" : "text-muted-foreground"
              }`}
            >
              {body}
            </p>
          </div>

          <div
            className={`ring-soft flex flex-col gap-4 rounded-2xl p-7 ${
              isDark
                ? "bg-[rgba(255,255,255,0.08)] backdrop-blur-sm"
                : "bg-card"
            }`}
          >
            <div className="flex items-start gap-3">
              <Calendar
                className={`mt-0.5 h-5 w-5 shrink-0 ${
                  isDark ? "text-accent" : "text-primary"
                }`}
              />
              <div>
                <p
                  className={`font-display text-lg font-semibold ${
                    isDark ? "" : "text-foreground"
                  }`}
                >
                  Free 15–20 minute consultation
                </p>
                <p
                  className={`mt-1 text-sm ${
                    isDark
                      ? "text-primary-foreground/80"
                      : "text-muted-foreground"
                  }`}
                >
                  No commitment. Just a conversation about your goals and how
                  Dr. Uriah can help.
                </p>
              </div>
            </div>

            <Link
              to={primaryTo}
              className={`btn-recovery inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold ${
                isDark
                  ? "bg-accent text-accent-foreground"
                  : "bg-primary text-primary-foreground"
              }`}
            >
              {primaryLabel} <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="tel:310-704-7177"
              className={`inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition hover:bg-white/10 ${
                isDark
                  ? "border-white/30 text-primary-foreground"
                  : "border-border text-foreground hover:bg-primary-soft"
              }`}
            >
              <Phone className="h-4 w-4" /> Call 310-704-7177
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
