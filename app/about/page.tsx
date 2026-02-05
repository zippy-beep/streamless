export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">About</p>
      <h1 className="mt-3 text-3xl font-semibold text-black dark:text-white">
        Your Guide to Streaming Services
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
        Streamless helps you discover the best movie and TV streaming apps,
        both free and paid. We provide honest reviews, comparisons, and guides
        to help you find the perfect streaming service for your entertainment needs.
      </p>
      <p className="mt-4 text-base text-zinc-600 dark:text-zinc-300">
        Whether you&apos;re looking for the latest Netflix originals, Disney classics,
        or free ad-supported options like Tubi and Pluto TV, we&apos;ve got you covered.
      </p>
      <div className="mt-6 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          <strong>Disclaimer:</strong> Streamless does not host or stream any content.
          We provide information and links to official streaming platforms only.
        </p>
      </div>
      <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
        Questions or suggestions? Contact us at hello@streamless.cloud
      </p>
    </section>
  );
}
