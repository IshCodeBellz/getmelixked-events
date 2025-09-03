// components/EventPromo.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type EventPromoProps = {
  sectionTitle?: string;
  title: string;
  dateTimeLabel: string;
  locationLabel: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt?: string;
};

export default function EventPromo({
  sectionTitle = "Event Planning",
  title,
  dateTimeLabel,
  locationLabel,
  ctaLabel = "Register Now",
  ctaHref = "#",
  imageSrc,
  imageAlt = "",
}: EventPromoProps) {
  return (
    <section className="bg-surface-100 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <h2 className="mb-8 text-4xl font-semibold md:text-5xl">
          {sectionTitle}
        </h2>
        <div className="rounded-2xl border border-white/20 p-4 md:p-6">
          <div className="grid items-stretch gap-6 md:grid-cols-2">
            <div className="flex flex-col justify-center gap-5 p-4 md:p-8">
              <h3 className="text-3xl font-semibold md:text-4xl">{title}</h3>
              <p className="text-sm opacity-85">{dateTimeLabel}</p>
              <p className="text-sm opacity-85">{locationLabel}</p>
              <div>
                <Link
                  href={ctaHref}
                  className="inline-flex items-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-graphite shadow-brand transition hover:bg-brand-400 focus-visible:ring-2 focus-visible:ring-brand-200"
                >
                  {ctaLabel}
                </Link>
              </div>
            </div>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
