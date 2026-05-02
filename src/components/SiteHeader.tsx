import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const primaryNav = [
  { to: "/" as const, label: "Home" },
  { to: "/services" as const, label: "Treatment" },
  { to: "/about" as const, label: "About" },
  // Resources dropdown is rendered separately
  { to: "/contact" as const, label: "Contact" },
];

const resources = [
  { to: "/fitness-principles" as const, label: "Fitness Principles", desc: "Strength, conditioning, mobility" },
  { to: "/nutrition" as const, label: "Nutrition", desc: "Fuel for performance & recovery" },
  { to: "/patients-clients" as const, label: "Clients", desc: "UFC champions, NHL stars, real patients" },
];

const resourcePaths = new Set(resources.map((r) => r.to));

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [resOpen, setResOpen] = useState(false);
  const [mobileResOpen, setMobileResOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click + escape
  useEffect(() => {
    if (!resOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setResOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setResOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [resOpen]);

  // Highlight Resources when on a child page
  const currentPath = typeof window !== "undefined" ? window.location.pathname : "/";
  const resourcesActive = resourcePaths.has(currentPath as never);

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

        {/* Desktop nav: Home / Treatment / About / Resources / Contact */}
        <nav className="hidden items-center gap-1 lg:flex">
          {primaryNav.slice(0, 3).map((item) => (
            <NavLinkItem key={item.to} to={item.to} label={item.label} />
          ))}

          {/* Resources dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setResOpen((v) => !v)}
              onMouseEnter={() => setResOpen(true)}
              aria-haspopup="menu"
              aria-expanded={resOpen}
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                resourcesActive
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/80 hover:bg-primary-soft hover:text-primary"
              }`}
            >
              Resources
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${resOpen ? "rotate-180" : ""}`}
              />
            </button>
            {resOpen && (
              <div
                role="menu"
                onMouseLeave={() => setResOpen(false)}
                className="ring-soft absolute left-1/2 top-full z-50 mt-2 w-72 -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-card p-2"
              >
                {resources.map((r) => (
                  <Link
                    key={r.to}
                    to={r.to}
                    onClick={() => setResOpen(false)}
                    role="menuitem"
                    className="block rounded-xl px-4 py-3 transition-colors hover:bg-primary-soft/60"
                  >
                    <div className="font-display text-sm font-semibold text-foreground">
                      {r.label}
                    </div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{r.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLinkItem to="/contact" label="Contact" />
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="btn-recovery rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-sm sm:px-5 sm:py-2.5 sm:text-sm"
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
      </div>

      {open && (
        <div className="border-t border-border/60 bg-cream lg:hidden">
          <div className="container-prose flex flex-col gap-1 py-4">
            {primaryNav.slice(0, 3).map((item) => (
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

            {/* Mobile Resources accordion */}
            <button
              type="button"
              onClick={() => setMobileResOpen((v) => !v)}
              className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-primary-soft"
            >
              Resources
              <ChevronDown
                className={`h-4 w-4 transition-transform ${mobileResOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileResOpen && (
              <div className="ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
                {resources.map((r) => (
                  <Link
                    key={r.to}
                    to={r.to}
                    onClick={() => {
                      setOpen(false);
                      setMobileResOpen(false);
                    }}
                    className="rounded-lg px-3 py-2 text-sm text-foreground/75 hover:bg-primary-soft hover:text-primary"
                  >
                    {r.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-primary-soft"
              activeProps={{ className: "bg-primary text-primary-foreground" }}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-recovery mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Start Your Recovery
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLinkItem({ to, label }: { to: "/" | "/services" | "/about" | "/contact"; label: string }) {
  return (
    <Link
      to={to}
      className="rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-primary-soft hover:text-primary"
      activeProps={{
        className:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
      }}
      activeOptions={{ exact: to === "/" }}
    >
      {label}
    </Link>
  );
}
