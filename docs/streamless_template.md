# 🎬 Streamless --- Streaming Apps Promotion Platform

> Discover the best movie & TV streaming apps (paid + free) with
> reviews, comparisons, and guides.\
> Monetized with ads and affiliate links.

------------------------------------------------------------------------

# 🧠 Architecture Overview

    Domain        → Namecheap
    DNS + CDN     → Cloudflare
    Frontend      → Next.js (Vercel)
    Backend       → NestJS (optional)
    Ads           → Google AdSense
    Affiliate     → Streaming apps + VPN referrals

------------------------------------------------------------------------

# 📁 Project Folder Structure

    streamless/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── robots.ts
    │   ├── sitemap.ts
    │   ├── apps/
    │   │   └── [slug]/
    │   │       └── page.tsx
    │   ├── guides/
    │   │   └── [slug]/
    │   │       └── page.tsx
    │   ├── about/
    │   │   └── page.tsx
    │   ├── privacy/
    │   │   └── page.tsx
    │   ├── terms/
    │   │   └── page.tsx
    │
    ├── components/
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   ├── AppCard.tsx
    │   ├── AdUnit.tsx
    │
    ├── lib/
    │   ├── apps.ts
    │   ├── guides.ts
    │
    ├── public/
    ├── styles/
    │   └── globals.css
    │
    ├── next.config.js
    ├── tailwind.config.js
    └── package.json

------------------------------------------------------------------------

# 🚀 Create Project

``` bash
npx create-next-app streamless --ts --tailwind --app
cd streamless
npm run dev
```

------------------------------------------------------------------------

# 🧩 Global Layout (SEO + AdSense)

``` tsx
// app/layout.tsx
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Streamless – Best Streaming Apps",
  description: "Discover the best movie and TV streaming apps (free & paid).",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          crossOrigin="anonymous"
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

------------------------------------------------------------------------

# 🏠 Homepage

``` tsx
// app/page.tsx
import { apps } from "@/lib/apps";
import AppCard from "@/components/AppCard";
import AdUnit from "@/components/AdUnit";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold">🎬 Streamless</h1>
      <p className="text-gray-400 mt-2">
        Discover the best streaming apps for movies & TV — free and premium.
      </p>

      <div className="my-6">
        <AdUnit />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {apps.map(app => (
          <AppCard key={app.slug} app={app} />
        ))}
      </div>
    </div>
  );
}
```

------------------------------------------------------------------------

# 📦 Streaming Apps Database

``` ts
// lib/apps.ts
export const apps = [
  { slug: "netflix", name: "Netflix", type: "Paid", desc: "Movies & TV originals" },
  { slug: "disney-plus", name: "Disney+", type: "Paid", desc: "Marvel, Star Wars, Pixar" },
  { slug: "tubi", name: "Tubi", type: "Free", desc: "Free ad-supported movies" },
  { slug: "pluto-tv", name: "Pluto TV", type: "Free", desc: "Live TV & movies" },
];
```

------------------------------------------------------------------------

# 🔗 Dynamic App Pages

``` tsx
// app/apps/[slug]/page.tsx
import { apps } from "@/lib/apps";
import AdUnit from "@/components/AdUnit";

export async function generateStaticParams() {
  return apps.map(a => ({ slug: a.slug }));
}

export default function AppPage({ params }: any) {
  const app = apps.find(a => a.slug === params.slug);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold">{app?.name}</h1>
      <p className="text-gray-400 mt-2">{app?.desc}</p>

      <a
        href="https://your-affiliate-link"
        className="bg-blue-600 px-4 py-2 rounded mt-4 inline-block"
      >
        Watch on {app?.name}
      </a>

      <div className="my-6">
        <AdUnit />
      </div>
    </div>
  );
}
```

------------------------------------------------------------------------

# 💰 Google AdSense Component

``` tsx
// components/AdUnit.tsx
"use client";
import { useEffect } from "react";

export default function AdUnit() {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {}
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-XXXX"
      data-ad-slot="XXXX"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
```

------------------------------------------------------------------------

# 🤖 SEO Robots & Sitemap

``` ts
// app/robots.ts
export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://streamless.cloud/sitemap.xml",
  };
}
```

``` ts
// app/sitemap.ts
export default function sitemap() {
  return [{ url: "https://streamless.cloud", lastModified: new Date() }];
}
```

------------------------------------------------------------------------

# 📜 Legal Pages

Create: - /about - /privacy - /terms

Disclaimer: \> Streamless does not host or stream any content. We
provide information and links to official streaming platforms only.

------------------------------------------------------------------------

# ☁️ Deploy to Vercel

``` bash
git init
git add .
git commit -m "Streamless init"
git push
```

------------------------------------------------------------------------

# 🌍 Cloudflare DNS for Vercel

  Type    Name   Value
  ------- ------ ----------------------
  CNAME   @      cname.vercel-dns.com
  CNAME   www    cname.vercel-dns.com

------------------------------------------------------------------------

# 💸 Monetization Strategy

-   Google AdSense ads
-   Affiliate streaming apps
-   VPN referrals (high CPM)
-   SEO content pages

------------------------------------------------------------------------

# ⚠️ AdSense Safety Rules

-   No pirated streaming links
-   No IPTV illegal services
-   Only official platforms and reviews

------------------------------------------------------------------------

# ✅ Next Steps

-   Add blog (MDX)
-   Add comparison tool
-   Add NestJS affiliate tracking API
-   Add admin dashboard
