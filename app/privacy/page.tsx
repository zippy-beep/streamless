export default function PrivacyPage() {
  return (
    <section className="mx-auto w-full max-w-3xl px-6 py-16">
      <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Privacy</p>
      <h1 className="mt-3 text-3xl font-semibold text-black dark:text-white">
        Privacy Policy
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300">
        At Streamless, we respect your privacy. We collect minimal analytics
        to understand which streaming services our visitors are interested in.
      </p>
      <div className="mt-6 space-y-4 text-base text-zinc-600 dark:text-zinc-300">
        <div>
          <h2 className="font-semibold text-black dark:text-white">Information We Collect</h2>
          <p className="mt-2">We collect basic analytics data including page views, referral sources,
          and general geographic information. We do not collect personal information unless
          you voluntarily provide it.</p>
        </div>
        <div>
          <h2 className="font-semibold text-black dark:text-white">Third-Party Services</h2>
          <p className="mt-2">We use Google AdSense to display ads. Google may use cookies to serve
          ads based on your prior visits to our website or other websites.</p>
        </div>
        <div>
          <h2 className="font-semibold text-black dark:text-white">Affiliate Links</h2>
          <p className="mt-2">Some links on our site are affiliate links. We may earn a commission
          when you sign up for streaming services through our links, at no extra cost to you.</p>
        </div>
      </div>
      <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
        For data requests or questions, contact support@streamless.cloud
      </p>
    </section>
  );
}
