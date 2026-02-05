import AppCard from "../components/AppCard";
import AdUnit from "../components/AdUnit";
import { apps } from "../lib/apps";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16">
      <section className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-black dark:text-white">🎬 Streamless</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Discover the best streaming apps|devices for movies & TV — free and premium.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="grid gap-6 sm:grid-cols-2">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
        <div className="space-y-6">
          <AdUnit />
          <AdUnit
            title="Stream Smarter"
            description="Compare plans and find the best streaming service for your budget."
            cta="Compare now"
          />
        </div>
      </section>
    </div>
  );
}
