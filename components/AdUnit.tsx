type AdUnitProps = {
  title?: string;
  description?: string;
  cta?: string;
};

export default function AdUnit({
  title = "Boost your launch",
  description = "Promote your stream across every platform with curated tooling.",
  cta = "Get featured",
}: AdUnitProps) {
  return (
    <aside className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Sponsored</p>
      <h3 className="mt-2 text-xl font-semibold text-black dark:text-white">
        {title}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
        {description}
      </p>
      <button className="mt-4 inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
        {cta}
      </button>
    </aside>
  );
}
