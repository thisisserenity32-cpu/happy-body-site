import { Outlet, Link, createRootRoute, HeadContent, Scripts, useLocation } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Absolute PT South Bay — Concierge Physical Therapy" },
      { name: "description", content: "Expert in-home orthopedic and sports physical therapy across South Bay, with telehealth statewide. Real results, in your home." },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Absolute PT South Bay — Concierge Physical Therapy" },
      { name: "twitter:title", content: "Absolute PT South Bay — Concierge Physical Therapy" },
      { property: "og:description", content: "Expert in-home orthopedic and sports physical therapy across South Bay, with telehealth statewide. Real results, in your home." },
      { name: "twitter:description", content: "Expert in-home orthopedic and sports physical therapy across South Bay, with telehealth statewide. Real results, in your home." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5c967b1e-46df-4859-bcb7-2da201bb61c5/id-preview-ec986fae--b1fedc16-7574-4f16-a707-101aa48e6767.lovable.app-1777438753626.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5c967b1e-46df-4859-bcb7-2da201bb61c5/id-preview-ec986fae--b1fedc16-7574-4f16-a707-101aa48e6767.lovable.app-1777438753626.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;500;600;700;900&family=Playfair+Display:wght@700;900&family=Inter:wght@400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}


function RootComponent() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const main = document.querySelector("main");
    if (!main) return;

    const sections = Array.from(main.querySelectorAll("main > section")) as HTMLElement[];
    // Skip the first section (hero) — that animates via CSS on mount.
    const targets = sections.slice(1);
    targets.forEach((s) => s.classList.add("lov-reveal"));

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );
    targets.forEach((t) => io.observe(t));

    return () => io.disconnect();
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
