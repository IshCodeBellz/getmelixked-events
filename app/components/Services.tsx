// components/Services.tsx
import Image from "next/image";
import Link from "next/link";
import React from "react";

export type Service = {
  id: string | number;
  title: string;
  priceLabel?: string;
  href?: string;
  imageSrc: string;
  imageAlt?: string;
};

type ServicesProps = {
  heading?: string;
  items: Service[];
};

export default function Services({
  heading = "Services",
  items,
}: ServicesProps) {
  return (
    <section className="bg-surface-100 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <h2 className="mb-8 text-3xl font-semibold md:text-4xl">{heading}</h2>
        <ul className="grid gap-10 md:grid-cols-3">
          {items.map((s) => (
            <li key={s.id} className="group">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl ring-1 ring-white/10">
                <Image
                  src={s.imageSrc}
                  alt={s.imageAlt ?? ""}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <div className="mt-4 h-px w-full bg-white/20" />
                {s.priceLabel && (
                  <p className="mt-4 text-sm font-medium text-white/90">
                    {s.priceLabel}
                  </p>
                )}
                <div className="mt-4">
                  <Link
                    href={s.href ?? "#"}
                    className="inline-flex items-center rounded-md bg-brand px-5 py-2.5 text-sm font-semibold text-graphite shadow-brand transition hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-200"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
