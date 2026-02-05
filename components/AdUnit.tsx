"use client";
import { useEffect, useRef } from "react";

type AdUnitProps = {
  title?: string;
  description?: string;
  cta?: string;
};

export default function AdUnit({
  title,
  description,
  cta,
}: AdUnitProps) {
  const adRef = useRef<boolean>(false);

  useEffect(() => {
    if (!title && !description && !cta && !adRef.current) {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        adRef.current = true;
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, [title, description, cta]);

  // If props provided, show custom ad unit
  if (title || description || cta) {
    return (
      <aside className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-zinc-900">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Sponsored</p>
        <h3 className="mt-2 text-xl font-semibold text-black dark:text-white">
          {title || "Premium Streaming"}
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          {description || "Get access to exclusive content and premium features."}
        </p>
        <button className="mt-4 inline-flex items-center justify-center rounded-full bg-black px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
          {cta || "Learn more"}
        </button>
      </aside>
    );
  }

  // Otherwise show Google AdSense
  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-XXXX"
      data-ad-slot="XXXX"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
}
