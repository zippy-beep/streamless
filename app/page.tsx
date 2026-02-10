import AppCard from "../components/AppCard";
import DeviceCard from "../components/DeviceCard";
import AdUnit from "../components/AdUnit";
import { apps } from "../lib/apps";
import { devices } from "../lib/devices";
import Link from "next/link";

export default function Home() {
  const featuredDevices = devices.slice(0, 4);

  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16">
      <section className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-black dark:text-white">🎬 Streamless</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Discover the best streaming apps & devices for movies & TV — free and premium.
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

      <section>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-black dark:text-white">📺 Popular Streaming Devices</h2>
          <Link
            href="/devices"
            className="text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredDevices.map((device) => (
            <DeviceCard key={device.slug} device={device} />
          ))}
        </div>
      </section>
    </div>
  );
}
