import DeviceCard from "../../components/DeviceCard";
import AdUnit from "../../components/AdUnit";
import { devices } from "../../lib/devices";

export default function DevicesPage() {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-16">
      <section className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold text-black dark:text-white">📺 Streaming Devices</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Explore the best streaming devices and smart TVs for your entertainment setup — from budget-friendly options to premium experiences.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="grid gap-6 sm:grid-cols-2">
          {devices.map((device) => (
            <DeviceCard key={device.slug} device={device} />
          ))}
        </div>
        <div className="space-y-6">
          <AdUnit />
          <AdUnit
            title="Find Your Device"
            description="Compare streaming devices and find the perfect fit for your home entertainment system."
            cta="Compare now"
          />
        </div>
      </section>
    </div>
  );
}
