import type { MetadataRoute } from "next";
import { apps } from "../lib/apps";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://stream-promoter.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/privacy", "/terms"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
  }));

  const appRoutes = apps.map((app) => ({
    url: `${baseUrl}/apps/${app.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...appRoutes];
}
