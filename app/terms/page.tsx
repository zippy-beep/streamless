export default function TermsPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Terms</p>
      <h1 className="mt-3 text-3xl font-semibold text-black dark:text-white">
        Terms of Service
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
        By using Streamless, you agree to the following terms and conditions.
      </p>
      <div className="mt-6 space-y-4 text-base text-zinc-600 dark:text-zinc-300">
        <div>
          <h2 className="font-semibold text-black dark:text-white">Information Accuracy</h2>
          <p className="mt-2">Streamless provides curated information about streaming services for
          informational purposes. Pricing, availability, and features may change at any time.
          We strive to keep information accurate but cannot guarantee it.</p>
        </div>
        <div>
          <h2 className="font-semibold text-black dark:text-white">No Content Hosting</h2>
          <p className="mt-2">Streamless does not host, stream, or provide access to any copyrighted
          content. We only provide information and links to official streaming platforms.</p>
        </div>
        <div>
          <h2 className="font-semibold text-black dark:text-white">Affiliate Disclosure</h2>
          <p className="mt-2">Some links on our site are affiliate links. We may earn a commission
          when you sign up for services through our links. This does not affect your pricing.</p>
        </div>
        <div>
          <h2 className="font-semibold text-black dark:text-white">Acceptable Use</h2>
          <p className="mt-2">By using this site, you agree to use the directory responsibly and
          legally. Any misuse may result in termination of access.</p>
        </div>
      </div>
    </section>
  );
}
