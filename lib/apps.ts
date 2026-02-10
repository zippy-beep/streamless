export type App = {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  description: string;
  category: string;
  pricing: string;
  href: string;
  highlights: string[];
  whyChoose: string[];
};

export const apps: App[] = [
  {
    slug: "netflix",
    name: "Netflix",
    icon: "🎬",
    tagline: "Stream unlimited movies and TV shows.",
    description:
      "Netflix is the world's leading streaming entertainment service with over 200 million memberships. Watch award-winning series, films, documentaries, and more.",
    category: "Paid",
    pricing: "$6.99 - $19.99/mo",
    href: "https://netflix.com",
    highlights: [
      "Exclusive Netflix Originals",
      "4K Ultra HD available",
      "Download and watch offline",
    ],
    whyChoose: [
      "Netflix stands as the world's most popular streaming service, with original content that cannot be found anywhere else. From award-winning series like The Crown and Stranger Things to blockbuster films, Netflix offers unparalleled entertainment variety.",
      "With flexible subscription plans, 4K content, and the ability to download and watch offline, Netflix provides the ultimate convenience for entertainment lovers.",
    ],
  },
  {
    slug: "disney-plus",
    name: "Disney+",
    icon: "✨",
    tagline: "The streaming home of Disney, Pixar, Marvel, Star Wars & more.",
    description:
      "Disney+ brings you the best stories from Disney, Pixar, Marvel, Star Wars, and National Geographic all in one place.",
    category: "Paid",
    pricing: "$7.99/mo",
    href: "https://disneyplus.com",
    highlights: [
      "Marvel & Star Wars exclusives",
      "Pixar & Disney classics",
      "Family-friendly content",
    ],
    whyChoose: [
      "Disney+ is the ultimate streaming destination for families and entertainment enthusiasts. With exclusive Marvel and Star Wars content, classic Disney films, and Pixar masterpieces, it offers a unique collection unavailable on other platforms.",
      "The service provides family-friendly entertainment suitable for all ages, making it the perfect choice for households looking for quality content they can enjoy together.",
    ],
  },
  {
    slug: "tubi",
    name: "Tubi",
    icon: "📺",
    tagline: "Free movies and TV shows with ads.",
    description:
      "Tubi offers thousands of free movies and TV shows with no subscription fees. Watch on-demand content supported by ads.",
    category: "Free",
    pricing: "Free with ads",
    href: "https://tubitv.com",
    highlights: [
      "40,000+ movies & TV shows",
      "No credit card required",
      "New content added weekly",
    ],
    whyChoose: [
      "Tubi is the world's largest free streaming service with over 40,000 movies and TV shows. You get a massive library of content without paying a single dollar or needing to provide a credit card.",
      "With new content added weekly and a diverse collection spanning multiple genres, Tubi ensures there's always something new to watch without any subscription commitment.",
    ],
  },
  {
    slug: "pluto-tv",
    name: "Pluto TV",
    icon: "🌎",
    tagline: "Free live TV and on-demand movies.",
    description:
      "Pluto TV is a free streaming service with 250+ live TV channels and thousands of on-demand movies.",
    category: "Free",
    pricing: "Free with ads",
    href: "https://pluto.tv",
    highlights: [
      "250+ live TV channels",
      "On-demand library",
      "No subscription needed",
    ],
    whyChoose: [
      "Pluto TV revolutionizes free streaming by offering 250+ live TV channels and an extensive on-demand library, all without any subscription fees. It brings the traditional TV experience into the streaming era.",
      "Whether you want to enjoy live channels or explore thousands of on-demand movies, Pluto TV delivers comprehensive entertainment options completely free.",
    ],
  },
  {
    slug: "poweramp",
    name: "Poweramp",
    icon: "🎵",
    tagline: "Powerful music player for Android with advanced audio features.",
    description:
      "Poweramp is a premium music player for Android with high-resolution audio support, 10-band equalizer, and extensive format compatibility. Features a beautiful, customizable interface and advanced audio engine.",
    category: "Players",
    pricing: "$4.99 one-time",
    href: "https://powerampapp.com",
    highlights: [
      "Hi-Res audio support",
      "10-band graphic equalizer",
      "Gapless playback",
    ],
    whyChoose: [
      "Poweramp is the ultimate music player for audiophiles and music enthusiasts on Android. With hi-resolution audio support and a 10-band graphic equalizer, you have full control over your audio experience.",
      "The beautiful customizable interface combined with advanced features like gapless playback and extensive format support makes Poweramp the go-to choice for serious music lovers.",
    ],
  },
  {
    slug: "vlc",
    name: "VLC Media Player",
    icon: "🎥",
    tagline: "Free, open-source multimedia player for all platforms.",
    description:
      "VLC is a free and open-source cross-platform multimedia player that plays most multimedia files, DVDs, Audio CDs, VCDs, and various streaming protocols. No ads, no spyware, just a powerful media player.",
    category: "Players",
    pricing: "Free",
    href: "https://www.videolan.org/vlc/",
    highlights: [
      "Plays all formats",
      "Cross-platform support",
      "Hardware acceleration",
    ],
    whyChoose: [
      "VLC is the world's most versatile media player, trusted by millions for its ability to play virtually any media format without requiring additional codecs. Being open-source means it's constantly improved by the community.",
      "Available on every platform imaginable with no ads, no spyware, and no hassles, VLC delivers pure media playback performance without compromise.",
    ],
  },
  {
    slug: "mx-player",
    name: "MX Player",
    icon: "▶️",
    tagline: "Advanced video player with subtitle support and streaming.",
    description:
      "MX Player is one of the best video players for Android with powerful video decoding, multi-core decoding, and subtitle gestures. Now includes streaming content alongside local playback.",
    category: "Players",
    pricing: "Free with ads",
    href: "https://www.mxplayer.in",
    highlights: [
      "Hardware acceleration",
      "Subtitle support",
      "Kids mode available",
    ],
    whyChoose: [
      "MX Player is one of the most popular Android video players with powerful video decoding capabilities and multi-core support for smooth playback. Its advanced subtitle features including subtitle gestures make it stand out.",
      "With features like hardware acceleration, kids mode, and now streaming capabilities, MX Player provides a comprehensive entertainment solution for all members of your family.",
    ],
  },
  {
    slug: "infuse",
    name: "Infuse",
    icon: "🎬",
    tagline: "Beautiful, powerful video player for Apple ecosystem.",
    description:
      "Infuse is a premium video player designed for Apple devices including iPhone, iPad, and Apple TV. It features a beautiful interface, support for virtually all video formats, and seamless integration with cloud storage services.",
    category: "Players",
    pricing: "Free with Pro",
    href: "https://firecore.com/infuse",
    highlights: [
      "Stunning UI design",
      "Cloud storage support",
      "AirPlay streaming",
    ],
    whyChoose: [
      "Infuse is the preferred video player for Apple users, offering a stunningly beautiful interface that seamlessly integrates with the Apple ecosystem. Support for virtually all video formats and cloud storage services makes it incredibly versatile.",
      "Whether you're streaming from the cloud or playing local files, Infuse delivers a premium experience with AirPlay support and a design that matches Apple's high standards.",
    ],
  },
  {
    slug: "plex",
    name: "Plex",
    icon: "📺",
    tagline: "Media server and streaming platform for your entire library.",
    description:
      "Plex is a comprehensive media management system that lets you organize, access, and share your media collection across all devices. Features both local and streaming capabilities with intelligent recommendations.",
    category: "Players",
    pricing: "Free with Premium",
    href: "https://www.plex.tv",
    highlights: [
      "Media server included",
      "Multi-device support",
      "Original content",
    ],
    whyChoose: [
      "Plex transforms how you manage and enjoy media, combining a powerful media server with streaming capabilities. Organize your entire library and access it from anywhere on any device with seamless integration.",
      "With intelligent recommendations, original exclusive content, and both local and cloud streaming options, Plex provides the most comprehensive media solution available.",
    ],
  },
  {
    slug: "kodi",
    name: "Kodi",
    icon: "🎮",
    tagline: "Open-source media center for home entertainment.",
    description:
      "Kodi is a free and open-source software media player and entertainment hub that can be installed on multiple platforms. It supports virtually all media formats and offers extensive customization through add-ons.",
    category: "Players",
    pricing: "Free",
    href: "https://kodi.tv",
    highlights: [
      "Open-source",
      "Highly customizable",
      "Add-on ecosystem",
    ],
    whyChoose: [
      "Kodi is the ultimate open-source media center for serious home entertainment enthusiasts. Its highly customizable interface and extensive support for all media formats make it the perfect centerpiece for any media room.",
      "With a massive add-on ecosystem and installation on virtually all platforms, Kodi provides unlimited possibilities for personalizing your media experience.",
    ],
  },
  {
    slug: "potplayer",
    name: "PotPlayer",
    icon: "▶️",
    tagline: "Feature-rich video player for Windows.",
    description:
      "PotPlayer is a powerful and feature-rich multimedia player for Windows. It supports a wide range of codecs and formats, offers hardware acceleration, and provides advanced playback features for professionals and enthusiasts.",
    category: "Players",
    pricing: "Free",
    href: "https://potplayer.daum.net",
    highlights: [
      "Codec support",
      "Hardware acceleration",
      "Advanced controls",
    ],
    whyChoose: [
      "PotPlayer is the go-to choice for Windows users who demand advanced features and powerful playback capabilities. With extensive codec support, hardware acceleration, and professional-grade controls, it handles everything.",
      "Designed for both casual viewers and professionals, PotPlayer delivers exceptional performance and flexibility in a lightweight package.",
    ],
  },
  {
    slug: "iina",
    name: "IINA",
    icon: "🎯",
    tagline: "Modern media player for macOS.",
    description:
      "IINA is a free and open-source media player for macOS based on mpv. It features a modern interface, support for various subtitle formats, and customizable keyboard shortcuts.",
    category: "Players",
    pricing: "Free",
    href: "https://iina.io",
    highlights: [
      "Modern interface",
      "Subtitle support",
      "Open-source",
    ],
    whyChoose: [
      "IINA is the modern media player macOS deserves, featuring a sleek interface that feels native to the platform. Built on the powerful mpv engine, it combines aesthetics with powerful performance.",
      "With excellent subtitle support, customizable controls, and open-source transparency, IINA provides Mac users with an elegant video playback solution.",
    ],
  },
  {
    slug: "splayer",
    name: "SPlayer",
    icon: "🎞️",
    tagline: "Intelligent video player with streaming support.",
    description:
      "SPlayer Video Player for Mobile \n Among the best free video players out there, SPlayer is an incredible powerful video player that allows you to stream videos in all formats, and up to 4k resolution. With our simple UI and UX, you can easily configure your favorite setting for streaming. What sets SPlayer apart is the fact that it is not a video player only, but a media hub with file management tools and your own password-protected private box. Enhance your video viewing experience with SPlayer with our great built-in features NOW.",
    category: "Players",
    pricing: "Free",
    href: "https://splayer.dev",
    highlights: [
      "Auto subtitle download",
      "Streaming support",
      "Lightweight design",
    ],
    whyChoose: [
      "SPlayer stands out as an intelligent video player that goes beyond basic playback. With automatic subtitle downloading, 4K streaming support, and a clean, intuitive interface, it delivers a premium experience.",
      "What truly sets SPlayer apart is its all-in-one approach with file management tools and a password-protected private box, making it not just a player but a complete media hub for your entertainment needs.",
    ],
  },
  {
    slug: "zippy-player",
    name: "Zippy Player",
    icon: "⚡",
    tagline: "Fast and simple video player.",
    description:
      "Zippy Player is a fast, simple, and efficient video player designed for quick playback. It supports a wide range of video formats, offers smooth playback performance, and has a minimalist interface that gets out of your way.",
    category: "Players",
    pricing: "Free",
    href: "https://zippyplayer.com",
    highlights: [
      "Fast performance",
      "Minimalist UI",
      "Format support",
    ],
    whyChoose: [
      "Zippy Player lives up to its name with lightning-fast performance and smooth playback across all video formats. The minimalist interface stays out of your way, letting you focus on the content.",
      "If you value simplicity, efficiency, and speed over complex features, Zippy Player is the perfect choice for a no-fuss video viewing experience.",
    ],
  },
];

export const getAppBySlug = (slug: string) =>
  apps.find((app) => app.slug === slug);
