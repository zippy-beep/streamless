import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { apps, getAppBySlug } from "../../../lib/apps";

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
    <section className="mx-auto w-full max-w-4xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
        {app.category}
      </p>
      <h1 className="mt-3 text-4xl font-semibold text-black dark:text-white">
        {app.name}
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
        {app.description}
      </p>
      <div className="mt-6 rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <span className="text-sm text-zinc-500">Pricing: {app.pricing}</span>
          <a
            href={app.href}
            className="inline-flex items-center justify-center rounded-full bg-black px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            target="_blank"
            rel="noreferrer"
          >
            Visit website
          </a>
        </div>
        <ul className="mt-6 grid gap-3 text-sm text-zinc-600 dark:text-zinc-300 sm:grid-cols-2">
          {app.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-xl border border-black/5 bg-zinc-50 px-4 py-3 dark:border-white/10 dark:bg-zinc-800"
            >
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
