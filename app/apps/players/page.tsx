import type { Metadata } from "next";
import { apps } from "../../../lib/apps";
import AppCard from "../../../components/AppCard";

export const metadata: Metadata = {
  title: "Media Players · Streamless",
  description: "Discover the best media players for your device.",
};

export default function PlayersPage() {
  const players = apps.filter((app) => app.category === "Players");

  return (
    <div className="mx-auto w-full max-w-5xl px-6 py-16">
      <section className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-black dark:text-white">
          📱 Media Players
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Discover powerful media players for audio and video playback.
        </p>
      </section>

      <section className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {players.map((player) => (
          <AppCard key={player.slug} app={player} />
        ))}
      </section>
    </div>
  );
}
