import Link from "next/link";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white/80 dark:border-white/10 dark:bg-black/70">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-6 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <span>© {year} Streamless</span>
          <span className="hidden sm:inline">•</span>
          <span>Streaming apps, devices</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link href="/privacy" className="hover:text-black dark:hover:text-white transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-black dark:hover:text-white transition-colors">
            Terms
          </Link>
          <Link href="/dcma" className="hover:text-black dark:hover:text-white transition-colors">
            DMCA
          </Link>
          <Link href="/about" className="hover:text-black dark:hover:text-white transition-colors">
            About
          </Link>
          
        </div>
      </div>
    </footer>
  );
}
