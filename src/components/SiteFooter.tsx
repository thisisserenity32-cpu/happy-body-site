import { Link } from "@tanstack/react-router";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-primary text-primary-foreground">
      <div className="container-prose grid gap-10 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl font-semibold">Absolute<span className="text-accent">.</span></div>
          <p className="mt-3 max-w-sm text-sm text-primary-foreground/80">
            Concierge orthopedic and sports physical therapy delivered to your door across South Bay,
            with telehealth available statewide.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a href="tel:310-704-7177" className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent">
              <Phone className="h-4 w-4" /> 310-704-7177
            </a>
            <a href="mailto:dr@absoluteptsb.com" className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent">
              <Mail className="h-4 w-4" /> dr@absoluteptsb.com
            </a>
            <a href="https://instagram.com/DOCTOR_URIAH" className="flex items-center gap-2 text-primary-foreground/90 hover:text-accent">
              <Instagram className="h-4 w-4" /> @DOCTOR_URIAH
            </a>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <MapPin className="h-4 w-4" /> South Bay, Southern California
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/services" className="hover:text-accent">Treatment</Link></li>
            <li><Link to="/about" className="hover:text-accent">About Dr. Uriah</Link></li>
            <li><Link to="/fitness-principles" className="hover:text-accent">Fitness Principles</Link></li>
            <li><Link to="/nutrition" className="hover:text-accent">Nutrition</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Service Areas</div>
          <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 text-sm text-primary-foreground/85">
            <li>Manhattan Beach</li><li>Hermosa Beach</li>
            <li>Redondo Beach</li><li>Torrance</li>
            <li>Palos Verdes</li><li>El Segundo</li>
            <li>Hawthorne</li><li>Gardena</li>
            <li>Lomita</li><li>San Pedro</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-prose flex flex-col items-center justify-between gap-2 py-6 text-xs text-primary-foreground/70 md:flex-row">
          <div>© {new Date().getFullYear()} Absolute PT South Bay. All rights reserved.</div>
          <div>PT, DPT, CSCS, EP-C. Licensed in California</div>
        </div>
      </div>
    </footer>
  );
}
