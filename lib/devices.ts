export type Device = {
  slug: string;
  name: string;
  icon: string;
  image?: string; // Main product image
  images?: string[]; // Gallery of additional images (different angles, accessories, etc.)
  tagline: string;
  description: string;
  category: string;
  pricing: string;
  href: string;
  highlights: string[];
  whyChoose: string[];
};

export const devices: Device[] = [
  {
    slug: "roku",
    name: "Roku",
    icon: "📺",
    tagline: "Simple, affordable streaming on your TV.",
    description:
      "Roku is one of the most popular streaming platforms globally, offering access to thousands of streaming channels. Available in various models from Roku Express to Roku Ultra, it supports 4K and HDR content with an intuitive remote.",
    category: "Streaming Devices",
    pricing: "$29.99 - $99.99",
    href: "https://amzn.to/4qspwgw",
    highlights: [
      "4K Ultra HD support",
      "Thousands of channels",
      "Easy setup and use",
    ],
    whyChoose: [
      "Roku is the most affordable way to add streaming to your TV with thousands of channels available. From Netflix to HBO Max, Roku supports all major streaming services with a simple, intuitive interface.",
      "With multiple options ranging from budget-friendly to premium, Roku offers something for everyone. 4K support and easy setup make it the go-to choice for casual streamers.",
    ],
  },
  {
    slug: "apple-tv",
    name: "Apple TV 4K",
    icon: "🍎",
    tagline: "Premium streaming and smart home hub.",
    description:
      "Apple TV 4K delivers exceptional picture and sound quality with Dolby Vision, Dolby Atmos, and lossless audio. It integrates seamlessly with Apple's ecosystem and serves as a HomeKit hub for your smart home.",
    category: "Streaming Devices",
    pricing: "$129.99",
    href: "https://amzn.to/4tuEvcC",
    highlights: [
      "Dolby Vision & Dolby Atmos",
      "HomeKit hub included",
      "Apple Arcade support",
    ],
    whyChoose: [
      "If you're an Apple ecosystem user, Apple TV 4K is the perfect choice with seamless integration across all your devices. The premium audio and video quality with Dolby Vision and Atmos support delivers theater-quality experiences at home.",
      "Beyond streaming, Apple TV 4K functions as your HomeKit hub, controlling smart home devices while providing access to Apple Arcade games and exclusive content.",
    ],
  },
  {
    slug: "fire-stick",
    name: "Amazon Fire TV Stick",
    icon: "🔥",
    tagline: "Fire TV brings entertainment to every room.",
    description:
      "Amazon Fire TV Stick offers flexible streaming options with access to thousands of apps and channels. With Alexa voice control, it's easy to search and navigate. Available in 4K Max for premium experience.",
    category: "Streaming Devices",
    pricing: "$39.99 - $54.99",
    href: "https://amzn.to/4rbO3I4",
    highlights: [
      "Alexa voice control",
      "4K Max option available",
      "HDR support",
    ],
    whyChoose: [
      "Fire TV Stick combines affordability with powerful features like Alexa voice control, making it incredibly easy to search and navigate your favorite content. The 4K Max option offers excellent value for premium performance.",
      "With integration into the Amazon ecosystem, Prime Video access, and thousands of apps, Fire TV Stick brings entertainment to every room of your home at competitive prices.",
    ],
  },
  {
    slug: "chromecast",
    name: "Google Chromecast with Google TV",
    icon: "🎬",
    tagline: "Cast and watch your entertainment.",
    description:
      "Google Chromecast brings thousands of streaming apps and games to your TV. With Google TV interface and voice control, discover personalized recommendations across all your favorite apps in one place.",
    category: "Streaming Devices",
    pricing: "$29.99 - $39.99",
    href: "https://amzn.to/4bNO5Rr",
    highlights: [
      "Google Assistant built-in",
      "4K option available",
      "Easy app casting",
    ],
    whyChoose: [
      "Google Chromecast with Google TV brings intelligent recommendations powered by Google, making it incredibly easy to discover what to watch next. With built-in Google Assistant, voice control is natural and intuitive.",
      "At an affordable price point with 4K support, Chromecast offers excellent value for Google ecosystem users and anyone looking for an easy casting solution.",
    ],
  },
  {
    slug: "nvidia-shield",
    name: "Nvidia Shield TV",
    icon: "🛡️",
    tagline: "The ultimate streaming device for enthusiasts.",
    description:
      "Nvidia Shield TV is a powerhouse for 4K streaming with advanced AI upscaling, gaming capabilities, and support for high-quality audio formats. It also functions as a HomeKit hub and supports MicroSD for storage expansion.",
    category: "Streaming Devices",
    pricing: "$149.99 - $199.99",
    href: "https://amzn.to/3OhxoUI",
    highlights: [
      "8K support",
      "Gaming capabilities",
      "AI upscaling technology",
    ],
    whyChoose: [
      "Nvidia Shield TV is the ultimate choice for enthusiasts who demand the best performance and features. With 8K support, advanced AI upscaling that enhances any content, and gaming capabilities, it's a complete entertainment powerhouse.",
      "Whether you're streaming 4K content, gaming, or building a smart home, Shield TV handles everything with exceptional performance and expandable storage options.",
    ],
  },
  {
    slug: "samsung-tv",
    name: "Samsung Smart TV",
    icon: "🖥️",
    tagline: "Smart TV with built-in apps and stunning picture.",
    description:
      "Samsung Smart TVs come with built-in streaming apps and Tizen OS, offering easy access to entertainment. With QLED technology and supporting 4K/8K resolutions, Samsung delivers exceptional picture quality.",
    category: "Smart TVs",
    pricing: "$299.99 - $2,999.99",
    href: "https://amzn.to/403Uwsq",
    highlights: [
      "Built-in streaming apps",
      "QLED technology",
      "Object Tracking Sound",
    ],
    whyChoose: [
      "Samsung Smart TVs offer an all-in-one solution with built-in streaming apps and no need for additional hardware. The QLED technology delivers stunning picture quality with vibrant colors and deep blacks.",
      "With Tizen OS and smart features like Object Tracking Sound, Samsung provides a premium viewing experience right out of the box, perfect for those who want simplicity and excellence.",
    ],
  },
  {
    slug: "lg-tv",
    name: "LG Smart TV",
    icon: "📺",
    tagline: "OLED excellence with WebOS.",
    description:
      "LG Smart TVs feature OLED or QLED technology with WebOS operating system, providing access to all major streaming apps. Known for exceptional contrast and color accuracy with support for 4K and 8K content.",
    category: "Smart TVs",
    pricing: "$399.99 - $3,999.99",
    href: "https://amzn.to/4refl0m",
    highlights: [
      "OLED/QLED options",
      "WebOS platform",
      "Excellent picture quality",
    ],
    whyChoose: [
      "LG Smart TVs are renowned for their exceptional OLED technology that delivers perfect blacks and incredible contrast ratios. With WebOS, you get a smooth, intuitive interface with access to all major streaming services.",
      "Whether you choose OLED or QLED, LG provides outstanding picture quality that brings your favorite content to life with color accuracy and detail that professionals appreciate.",
    ],
  },
  {
    slug: "xbox-series-x",
    name: "Xbox Series X",
    icon: "🎮",
    tagline: "Next-gen gaming and streaming powerhouse.",
    description:
      "Xbox Series X is a next-generation gaming console that also excels as a streaming device. With its powerful hardware, it supports 4K/120fps gaming and streaming, plus Game Pass for thousands of entertainment options.",
    category: "Gaming Consoles",
    pricing: "$499",
    href: "https://amzn.to/4bTza8x",
    highlights: [
      "4K/120fps gaming",
      "Game Pass included",
      "Quick Resume feature",
    ],
    whyChoose: [
      "Xbox Series X is the most powerful next-gen console, delivering 4K/120fps gaming performance unmatched by competitors. With Game Pass, you get instant access to hundreds of games and streaming content.",
      "Beyond gaming, Xbox Series X serves as a premium streaming device with quick resume features and integration with your entire digital entertainment library.",
    ],
  },
  {
    slug: "playstation-5",
    name: "PlayStation 5",
    icon: "🎮",
    tagline: "Ultimate gaming and entertainment system.",
    description:
      "PlayStation 5 combines cutting-edge gaming with built-in streaming services. With backward compatibility, exclusive games, and support for various streaming apps, it's a complete entertainment solution.",
    category: "Gaming Consoles",
    pricing: "$499 - $649",
    href: "https://amzn.to/4tpZUUt",
    highlights: [
      "Ultra HD Blu-ray Drive",
      "Exclusive games",
      "Fast SSD storage",
    ],
    whyChoose: [
      "PlayStation 5 offers exclusive games and cutting-edge gaming performance combined with excellent streaming capabilities. The ultra-fast SSD ensures quick load times for both games and apps.",
      "With backward compatibility for PS4 games, exclusive next-gen titles, and built-in streaming services, PS5 is the complete entertainment system for gamers and entertainment enthusiasts.",
    ],
  }
];

export const getDeviceBySlug = (slug: string) =>
  devices.find((device) => device.slug === slug);
