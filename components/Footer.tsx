const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/80 dark:border-white/10 dark:bg-black/70">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-6 py-6 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} Streamless</span>
        <span>Built for creators, streamers, and marketers.</span>
      </div>
    </footer>
  );
}
