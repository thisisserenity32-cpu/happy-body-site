import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "What We Treat" },
  { to: "/about", label: "About" },
  { to: "/patients-clients", label: "Patients" },
  { to: "/fitness-principles", label: "Fitness" },
  { to: "/nutrition", label: "Nutrition" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-cream/85 backdrop-blur-md">
      <div className="container-prose flex h-18 items-center justify-between py-4">
        <Link to="/" className="group flex items-center gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight text-primary">
            Absolute<span className="text-accent">.</span>
          </span>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:block">
            PT South Bay
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary"
              activeProps={{ className: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.02] lg:inline-flex"
        >
          Start Your Recovery
        </Link>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="rounded-full p-2 text-foreground hover:bg-primary-soft lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-cream lg:hidden">
          <div className="container-prose flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-primary-soft"
                activeProps={{ className: "bg-primary text-primary-foreground" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Start Your Recovery
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
