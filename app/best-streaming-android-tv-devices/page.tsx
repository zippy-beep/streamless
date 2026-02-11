import { Metadata } from "next";
import Link from "next/link";
import { devices } from "@/lib/devices";
import { apps } from "@/lib/apps";

export const metadata: Metadata = {
  title: "Top 3 Android TV Devices for Free Streaming Apps 2026 | Streamless",
  description:
    "Comprehensive review of the best Android TV streaming devices that support sideloading free streaming apps. Compare Nvidia Shield TV, Fire TV Stick, and Chromecast with Google TV for installing apps outside the official store.",
  keywords: [
    "android tv devices",
    "sideload streaming apps",
    "free streaming",
    "best android tv box",
    "fire stick sideload",
    "nvidia shield apps",
    "chromecast sideload",
    "streaming device comparison",
  ],
};

interface DeviceReview {
  device: typeof devices[0];
  rank: number;
  sideloadScore: number;
  freeAppSupport: string[];
  pros: string[];
  cons: string[];
  sideloadDifficulty: "Easy" | "Moderate" | "Advanced";
  bestFor: string;
  popularFreeApps: string[];
}

export default function BestStreamingAndroidTVDevices() {
  // Get Android TV compatible devices
  const nvidiaSh = devices.find((d) => d.slug === "nvidia-shield");
  const fireStick = devices.find((d) => d.slug === "fire-stick");
  const chromecast = devices.find((d) => d.slug === "chromecast");

  // Get free streaming apps from our apps data
  const freeApps = apps.filter((app) => app.category === "Free");

  const deviceReviews: DeviceReview[] = [
    {
      device: nvidiaSh!,
      rank: 1,
      sideloadScore: 10,
      freeAppSupport: [
        "Tubi",
        "Pluto TV",
        "All APK files",
        "Third-party app stores",
        "Kodi",
        "Stremio",
        "Cinema HD",
        "BeeTV",
      ],
      pros: [
        "Most powerful Android TV device on the market",
        "Full Android TV OS with root access capabilities",
        "Easiest sideloading experience via USB or network",
        "Built-in file manager and APK installer",
        "Supports all Android apps including free streaming apps",
        "8K upscaling and excellent 4K performance",
        "Large storage capacity with microSD expansion",
        "Active community with extensive guides",
        "Can install custom launchers and modify system",
      ],
      cons: [
        "Premium price point ($149-$199)",
        "Might be overkill for casual users",
        "Requires some technical knowledge for advanced features",
      ],
      sideloadDifficulty: "Easy",
      bestFor:
        "Power users, cord-cutters, and enthusiasts who want maximum flexibility with free streaming apps",
      popularFreeApps: [
        "Tubi (40,000+ free movies)",
        "Pluto TV (250+ live channels)",
        "Kodi (open-source media center)",
        "Stremio (torrent streaming)",
        "Cinema HD (free movies & TV)",
        "BeeTV (free content aggregator)",
        "TeaTV (international content)",
        "Showbox (classic free streaming)",
      ],
    },
    {
      device: fireStick!,
      rank: 2,
      sideloadScore: 9,
      freeAppSupport: [
        "Tubi",
        "Pluto TV",
        "APK via Downloader app",
        "File-linked supported",
        "Kodi",
        "Cinema HD",
        "BeeTV",
      ],
      pros: [
        "Best value for money ($39.99-$54.99)",
        "Fire OS based on Android - supports sideloading",
        "Huge community with tutorials for sideloading",
        "Downloader app makes sideloading simple",
        "Alexa voice control for navigation",
        "4K Max version offers excellent performance",
        "Portable and easy to set up",
        "Works with all free streaming APKs",
      ],
      cons: [
        "Amazon's interface promotes Prime Video heavily",
        "Less storage than Shield TV",
        "Some apps may not appear in home screen",
        "Requires enabling 'Apps from Unknown Sources'",
        "Occasional updates may affect sideloaded apps",
      ],
      sideloadDifficulty: "Easy",
      bestFor:
        "Budget-conscious users who want easy access to free streaming apps with minimal setup",
      popularFreeApps: [
        "Tubi (completely free with ads)",
        "Pluto TV (live TV and on-demand)",
        "Kodi (customizable media center)",
        "Cinema HD (latest movies and shows)",
        "BeeTV (clean interface, huge library)",
        "Filelinked (app store for free apps)",
        "Morpheus TV (free streaming)",
        "CyberFlix TV (Netflix-like free app)",
      ],
    },
    {
      device: chromecast!,
      rank: 3,
      sideloadScore: 7,
      freeAppSupport: [
        "Tubi",
        "Pluto TV",
        "Limited APK sideloading",
        "Requires ADB setup",
        "Some free apps via Play Store",
      ],
      pros: [
        "Most affordable option ($29.99-$39.99)",
        "Clean Google TV interface",
        "Official Play Store has many free apps",
        "Google Assistant integration",
        "Casting from phone is seamless",
        "Compact design",
        "Regular security updates",
      ],
      cons: [
        "Sideloading requires ADB and computer",
        "More restrictive than Fire Stick or Shield",
        "Limited storage space",
        "Not all APKs work properly",
        "More difficult for non-technical users",
        "Google may restrict certain apps",
        "Less community support for sideloading",
      ],
      sideloadDifficulty: "Advanced",
      bestFor:
        "Users who primarily want official free apps from Play Store with occasional sideloading",
      popularFreeApps: [
        "Tubi (official Play Store)",
        "Pluto TV (official Play Store)",
        "Select apps via ADB sideload",
        "Kodi (with effort)",
        "Limited third-party app support",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Best Android TV Devices for Free Streaming Apps in 2026
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
          Complete guide to Android TV streaming devices ranked by their ability
          to install and run free streaming applications outside the official
          store. Perfect for cord-cutters looking to maximize entertainment
          without subscriptions.
        </p>
        <div className="flex flex-wrap gap-3 justify-center text-sm">
          <span className="px-4 py-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full font-medium">
            ✅ Sideloading Support
          </span>
          <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full font-medium">
            📱 Free Apps Compatible
          </span>
          <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full font-medium">
            🎬 No Subscription Needed
          </span>
        </div>
      </header>

      {/* Quick Comparison Table */}
      <section className="mb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Quick Comparison Table
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300 dark:border-gray-600">
                <th className="py-4 px-4 font-bold">Rank</th>
                <th className="py-4 px-4 font-bold">Device</th>
                <th className="py-4 px-4 font-bold">Sideload Score</th>
                <th className="py-4 px-4 font-bold">Price</th>
                <th className="py-4 px-4 font-bold">Difficulty</th>
                <th className="py-4 px-4 font-bold">Best For</th>
              </tr>
            </thead>
            <tbody>
              {deviceReviews.map((review) => (
                <tr
                  key={review.device.slug}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition"
                >
                  <td className="py-4 px-4">
                    <span className="text-2xl font-bold text-blue-600">
                      #{review.rank}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <Link
                      href={`/devices/${review.device.slug}`}
                      className="font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      {review.device.name}
                    </Link>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">
                        {review.sideloadScore}/10
                      </span>
                      <div className="w-20 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500"
                          style={{ width: `${review.sideloadScore * 10}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">{review.device.pricing}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        review.sideloadDifficulty === "Easy"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : review.sideloadDifficulty === "Moderate"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                      }`}
                    >
                      {review.sideloadDifficulty}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-sm">
                    {review.bestFor.substring(0, 50)}...
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Detailed Reviews */}
      <section className="space-y-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Detailed Device Reviews & Rankings
        </h2>

        {deviceReviews.map((review, index) => (
          <article
            key={review.device.slug}
            id={review.device.slug}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-2 border-gray-100 dark:border-gray-700"
          >
            {/* Rank Badge */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white text-blue-600 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold shadow-lg">
                    #{review.rank}
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{review.device.name}</h3>
                    <p className="text-blue-100 mt-1">
                      {review.device.tagline}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold mb-1">
                    {review.sideloadScore}/10
                  </div>
                  <div className="text-sm text-blue-100">Sideload Score</div>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Device Info */}
              <div className="mb-6 grid md:grid-cols-3 gap-4">
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Price Range
                  </div>
                  <div className="text-xl font-bold mt-1">
                    {review.device.pricing}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Sideload Difficulty
                  </div>
                  <div className="text-xl font-bold mt-1">
                    {review.sideloadDifficulty}
                  </div>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Category
                  </div>
                  <div className="text-xl font-bold mt-1">
                    {review.device.category}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3">Overview</h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {review.device.description}
                </p>
              </div>

              {/* Best For */}
              <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-600">
                <h4 className="text-lg font-bold mb-2 text-blue-900 dark:text-blue-100">
                  🎯 Best For
                </h4>
                <p className="text-gray-700 dark:text-gray-300">
                  {review.bestFor}
                </p>
              </div>

              {/* Popular Free Apps */}
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <span>📱</span>
                  Popular Free Streaming Apps Supported
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {review.popularFreeApps.map((app, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"
                    >
                      <span className="text-green-600 dark:text-green-400 mt-0.5">
                        ✓
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {app}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros and Cons */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xl font-bold mb-3 text-green-700 dark:text-green-400">
                    ✅ Advantages
                  </h4>
                  <ul className="space-y-2">
                    {review.pros.map((pro, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-green-600 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-red-700 dark:text-red-400">
                    ⚠️ Disadvantages
                  </h4>
                  <ul className="space-y-2">
                    {review.cons.map((con, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      >
                        <span className="text-red-600 mt-1 flex-shrink-0">
                          •
                        </span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Device Highlights */}
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-3">Key Features</h4>
                <div className="flex flex-wrap gap-2">
                  {review.device.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href={`/devices/${review.device.slug}`}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  View Full Details
                </Link>
                <a
                  href={review.device.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
                >
                  Check Price on Amazon →
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Free Streaming Apps Section */}
      <section className="mt-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Popular Free Streaming Apps You Can Install
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          These devices support installing free streaming applications that
          provide thousands of hours of entertainment without any subscription
          fees. Here are some of the most popular free apps:
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeApps.slice(0, 6).map((app) => (
            <Link
              key={app.slug}
              href={`/apps/${app.slug}`}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{app.icon}</div>
              <h3 className="text-xl font-bold mb-2">{app.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {app.tagline}
              </p>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 rounded-full text-xs font-medium">
                  {app.pricing}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/apps"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition shadow-lg"
          >
            View All Free Apps →
          </Link>
        </div>
      </section>

      {/* Buying Guide */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6">
          How to Choose the Right Android TV Device
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              🎯 For Power Users & Cord-Cutters
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you want maximum flexibility, extensive app support, and the
              ability to customize everything, the{" "}
              <strong>Nvidia Shield TV</strong> is your best choice. It's the
              most powerful device with the easiest sideloading experience.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li>✓ Unlimited app installation</li>
              <li>✓ Best performance for 4K streaming</li>
              <li>✓ Active modding community</li>
              <li>✓ Worth the premium price</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-green-600 dark:text-green-400">
              💰 For Budget-Conscious Users
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              The <strong>Amazon Fire TV Stick</strong> offers the best value
              for money. It's easy to sideload apps, widely supported by the
              community, and costs a fraction of the Shield TV.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li>✓ Best price-to-performance ratio</li>
              <li>✓ Simple sideloading with Downloader app</li>
              <li>✓ Tons of tutorials available</li>
              <li>✓ 4K support in Max version</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
              🏠 For Google Ecosystem Users
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              If you're invested in Google services and primarily want official
              apps with occasional sideloading, the{" "}
              <strong>Chromecast with Google TV</strong> is adequate but not
              ideal for extensive sideloading.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li>✓ Clean Google TV interface</li>
              <li>✓ Most affordable option</li>
              <li>✓ Good for official free apps</li>
              <li>✗ Sideloading requires ADB</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4 text-orange-600 dark:text-orange-400">
              🔰 For Beginners
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Start with the <strong>Fire TV Stick</strong>. It has the easiest
              learning curve, massive community support with step-by-step
              guides, and won't break the bank if you decide it's not for you.
            </p>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
              <li>✓ Easiest to learn</li>
              <li>✓ Video tutorials everywhere</li>
              <li>✓ Low risk investment</li>
              <li>✓ Can upgrade later</li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="mt-16 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-8">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
              Is sideloading apps legal?
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Yes, sideloading apps is completely legal. You own the device and
              have the right to install any software you want. However, make
              sure the apps you install don't violate copyright laws. Free apps
              like Tubi, Pluto TV, and Kodi are completely legal.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
              Which device is easiest for sideloading?
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Both the Nvidia Shield TV and Amazon Fire TV Stick are extremely
              easy for sideloading. The Shield TV has built-in file management,
              while the Fire Stick uses the Downloader app which is very simple
              to use. Chromecast requires ADB which is more technical.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
              Can I really watch free content legally?
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Absolutely! Apps like Tubi, Pluto TV, and many others offer
              thousands of movies and TV shows completely free with ads. These
              are legitimate services that have licensing agreements with
              content providers.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
              Will sideloaded apps void my warranty?
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              No, simply sideloading apps will not void your warranty. However,
              rooting or modifying the system firmware might. Basic sideloading
              is a standard feature of Android and doesn't require any system
              modifications.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-2 text-blue-600 dark:text-blue-400">
              Do I need a VPN for streaming?
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              For legal, free streaming apps like Tubi and Pluto TV, you don't
              need a VPN. However, a VPN can provide additional privacy and may
              help access geo-restricted content. It's optional but recommended
              for privacy-conscious users.
            </p>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Explore More Devices & Apps
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/devices"
            className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            <div className="text-4xl mb-3">📺</div>
            <h3 className="text-xl font-bold mb-2">All Streaming Devices</h3>
            <p className="text-blue-100 text-sm">
              Compare all streaming devices including Smart TVs and gaming
              consoles
            </p>
          </Link>

          <Link
            href="/apps"
            className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            <div className="text-4xl mb-3">🎬</div>
            <h3 className="text-xl font-bold mb-2">Free Streaming Apps</h3>
            <p className="text-purple-100 text-sm">
              Discover all free streaming apps available for your devices
            </p>
          </Link>

          <Link
            href="/apps/players"
            className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1"
          >
            <div className="text-4xl mb-3">▶️</div>
            <h3 className="text-xl font-bold mb-2">Media Players</h3>
            <p className="text-green-100 text-sm">
              Best media players for streaming and local content playback
            </p>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-12 text-center shadow-2xl">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Start Free Streaming?
        </h2>
        <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
          Choose your Android TV device and start enjoying thousands of free
          movies and TV shows today. No subscriptions, no commitments, just
          endless entertainment.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href={nvidiaSh?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Buy Nvidia Shield TV
          </a>
          <a
            href={fireStick?.href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-white text-purple-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition shadow-lg"
          >
            Buy Fire TV Stick
          </a>
        </div>
      </section>
    </div>
  );
}
