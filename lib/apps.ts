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
    slug: "netflix",
    name: "Netflix",
    tagline: "Stream unlimited movies and TV shows.",
    description:
      "Netflix is the world's leading streaming entertainment service with over 200 million memberships. Watch award-winning series, films, documentaries, and more.",
    category: "Paid",
    pricing: "$6.99 - $19.99/mo",
    href: "https://netflix.com",
    highlights: [
      "Exclusive Netflix Originals",
      "4K Ultra HD available",
      "Download and watch offline",
    ],
  },
  {
    slug: "disney-plus",
    name: "Disney+",
    tagline: "The streaming home of Disney, Pixar, Marvel, Star Wars & more.",
    description:
      "Disney+ brings you the best stories from Disney, Pixar, Marvel, Star Wars, and National Geographic all in one place.",
    category: "Paid",
    pricing: "$7.99/mo",
    href: "https://disneyplus.com",
    highlights: [
      "Marvel & Star Wars exclusives",
      "Pixar & Disney classics",
      "Family-friendly content",
    ],
  },
  {
    slug: "tubi",
    name: "Tubi",
    tagline: "Free movies and TV shows with ads.",
    description:
      "Tubi offers thousands of free movies and TV shows with no subscription fees. Watch on-demand content supported by ads.",
    category: "Free",
    pricing: "Free with ads",
    href: "https://tubitv.com",
    highlights: [
      "40,000+ movies & TV shows",
      "No credit card required",
      "New content added weekly",
    ],
  },
  {
    slug: "pluto-tv",
    name: "Pluto TV",
    tagline: "Free live TV and on-demand movies.",
    description:
      "Pluto TV is a free streaming service with 250+ live TV channels and thousands of on-demand movies.",
    category: "Free",
    pricing: "Free with ads",
    href: "https://pluto.tv",
    highlights: [
      "250+ live TV channels",
      "On-demand library",
      "No subscription needed",
    ],
  },
];

export const getAppBySlug = (slug: string) =>
  apps.find((app) => app.slug === slug);
