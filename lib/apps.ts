export type App = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  pricing: string;
  href: string;
  highlights: string[];
};

export const apps: App[] = [
  {
    slug: "streamforge",
    name: "StreamForge",
    tagline: "Plan, schedule, and syndicate your live shows.",
    description:
      "StreamForge helps creators orchestrate cross-platform streams with smart scheduling, reusable templates, and automated social drops.",
    category: "Scheduling",
    pricing: "Pro",
    href: "https://example.com/streamforge",
    highlights: [
      "Multi-platform stream scheduling",
      "Auto-generated social posts",
      "Team collaboration workspaces",
    ],
  },
  {
    slug: "clipwave",
    name: "ClipWave",
    tagline: "Turn live moments into shareable clips.",
    description:
      "ClipWave detects hype moments, exports vertical clips instantly, and pushes them to TikTok, Reels, and Shorts.",
    category: "Clipping",
    pricing: "Free +",
    href: "https://example.com/clipwave",
    highlights: [
      "AI highlight detection",
      "Instant captioning",
      "Auto-publish to social",
    ],
  },
  {
    slug: "hypehub",
    name: "HypeHub",
    tagline: "Engage your community before, during, and after streams.",
    description:
      "HypeHub unifies chat, polls, and announcements so your audience never misses a drop.",
    category: "Engagement",
    pricing: "Starter",
    href: "https://example.com/hypehub",
    highlights: [
      "Unified community inbox",
      "Interactive overlays",
      "Automated announcements",
    ],
  },
  {
    slug: "brandpulse",
    name: "BrandPulse",
    tagline: "Measure sponsor impact in real time.",
    description:
      "BrandPulse tracks impressions, click-throughs, and engagement during live campaigns.",
    category: "Analytics",
    pricing: "Enterprise",
    href: "https://example.com/brandpulse",
    highlights: [
      "Live sponsor dashboards",
      "Custom UTM tracking",
      "Weekly executive reports",
    ],
  },
];

export const getAppBySlug = (slug: string) =>
  apps.find((app) => app.slug === slug);
