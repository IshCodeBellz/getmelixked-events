// components/SignatureCocktails.tsx
import Image from "next/image";
import React from "react";

type SignatureItem = {
  id: string | number;
  name: string;
  tagline?: string;
  imageSrc: string;
  imageAlt?: string;
};

type SignatureCocktailsProps = {
  heading?: string;
  eyebrow?: string;
  items: SignatureItem[];
};

export default function SignatureCocktails({
  heading = "Our Signature Cocktails",
  eyebrow = "Beverages Crafted with Passion",
  items,
}: SignatureCocktailsProps) {
  return (
    <section className="bg-surface-100 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="mb-8 flex items-start justify-between gap-4">
          <h2 className="text-4xl font-semibold md:text-5xl">{heading}</h2>
          <span className="hidden text-sm text-white/70 md:block">
            {eyebrow}
          </span>
        </div>
        <ul className="grid gap-10 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.id} className="flex flex-col">
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl ring-1 ring-white/15">
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt ?? ""}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-2xl font-semibold">{item.name}</h3>
              {item.tagline && (
                <p className="mt-2 text-sm text-white/80">{item.tagline}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
