import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { apps, getAppBySlug } from "../../../../lib/apps";
import AdUnit from "../../../../components/AdUnit";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const generateStaticParams = () =>
  apps
    .filter((app) => app.category === "Players")
    .map((app) => ({ slug: app.slug }));

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app || app.category !== "Players") {
    return {
      title: "Player not found",
    };
  }

  return {
    title: `${app.name} · Streamless`,
    description: app.tagline,
  };
};

export default async function PlayerDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const app = getAppBySlug(slug);

  if (!app || app.category !== "Players") {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <section>
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
          Media Player
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-black dark:text-white">
          {app.name}
        </h1>
        <p className="mt-2 text-lg text-zinc-600 dark:text-zinc-400">
          {app.tagline}
        </p>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300">
          {app.description}
        </p>
      </section>

      <div className="mt-8 rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Pricing</p>
            <p className="mt-1 text-lg font-semibold text-black dark:text-white">{app.pricing}</p>
          </div>
          <a
            href={app.href}
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get {app.name}
          </a>
        </div>
        <div className="mt-6">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Key Features</p>
          <ul className="mt-3 grid gap-3 text-sm text-zinc-600 dark:text-zinc-300 sm:grid-cols-2">
            {app.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-2 rounded-xl border border-black/5 bg-zinc-50 px-4 py-3 dark:border-white/10 dark:bg-zinc-800"
              >
                <span className="text-blue-600">✓</span>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="my-8">
        <AdUnit />
      </div>

      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-black dark:text-white">
          Why Choose {app.name}?
        </h2>
        <div className="mt-6 space-y-4 text-zinc-600 dark:text-zinc-300">
          {app.whyChoose.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </section>
    </div>
  );
}
