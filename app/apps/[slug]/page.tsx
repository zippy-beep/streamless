import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { apps, getAppBySlug } from "../../../lib/apps";
import AdUnit from "../../../components/AdUnit";

type PageProps = {
  params: { slug: string };
};

export const generateStaticParams = () =>
  apps.map((app) => ({ slug: app.slug }));

export const generateMetadata = ({ params }: PageProps): Metadata => {
  const app = getAppBySlug(params.slug);

  if (!app) {
    return {
      title: "App not found",
    };
  }

  return {
    title: `${app.name} · Streamless`,
    description: app.tagline,
  };
};

export default function AppDetailPage({ params }: PageProps) {
  const app = getAppBySlug(params.slug);

  if (!app) {
    notFound();
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-6 py-16">
      <section>
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
          {app.category}
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
            Watch on {app.name}
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
    </div>
  );
}
