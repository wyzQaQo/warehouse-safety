import type { MetadataRoute } from "next";
import { navLinks } from "@/data/navigation";

/**
 * Routes are derived from the same navigation source the header renders, so the
 * sitemap cannot drift from the real site structure. Hash-only targets
 * (e.g. "/about#industries") collapse to their parent route, because anchor
 * fragments are not indexable URLs.
 *
 * Note: product browsing is a client-side category filter in app/products/page.tsx
 * and has no per-product URLs, so no product slugs are emitted here — that would
 * be the source of "Not found (404)" entries in Search Console.
 */
const BASE_URL = "https://100guards.com";
const LAST_MODIFIED = new Date();

const EXTRA_ROUTES = ["/resources"] as const;

function priorityFor(href: string): number {
  if (href === "/") return 1.0;
  if (href.startsWith("/products")) return 0.9;
  if (href === "/contact") return 0.7;
  return 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const candidates = [...navLinks.map((l) => l.href), ...EXTRA_ROUTES];

  // Strip hash fragments and dedupe, then normalise "" -> "/".
  const paths = Array.from(
    new Set(
      candidates
        .map((href) => href.split("#")[0])
        .filter(Boolean)
        .map((p) => (p === "/" ? "/" : p.replace(/\/$/, "")))
    )
  );

  return paths.map((path) => ({
    url: `${BASE_URL}${path === "/" ? "" : path}`,
    lastModified: LAST_MODIFIED,
    changeFrequency: "monthly",
    priority: priorityFor(path),
  }));
}
