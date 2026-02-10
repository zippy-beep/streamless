import Link from "next/link";
import type { Device } from "../lib/devices";

type DeviceCardProps = {
  device: Device;
};

export default function DeviceCard({ device }: DeviceCardProps) {
  return (
    <Link
      href={`/devices/${device.slug}`}
      className="group flex h-full flex-col justify-between rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-black/20 hover:shadow-md dark:border-white/10 dark:bg-zinc-900"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            {device.category}
          </span>
          <span className="text-xs text-zinc-500">{device.pricing}</span>
        </div>
        <div className="mt-4 text-4xl">{device.icon}</div>
        <h3 className="mt-3 text-xl font-semibold text-black dark:text-white">
          {device.name}
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          {device.tagline}
        </p>
      </div>
      <div className="mt-6 text-sm font-medium text-black transition group-hover:text-zinc-700 dark:text-white dark:group-hover:text-zinc-200">
        View details →
      </div>
    </Link>
  );
}
