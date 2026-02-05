import AppCard from "../components/AppCard";
import AdUnit from "../components/AdUnit";
import { apps } from "../lib/apps";

export default function Home() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16">
      <section className="flex flex-col gap-6">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
          Streamless
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-black dark:text-white sm:text-5xl">
          Promote your stream with the best creator tools.
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
          Explore a curated directory of scheduling, clipping, engagement, and
          analytics platforms built for live creators.
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
            title="Creator ops toolkit"
            description="Streamline brand briefs, invoices, and post-stream reporting in one workspace."
            cta="Learn more"
          />
        </div>
      </section>
    </div>
  );
}
