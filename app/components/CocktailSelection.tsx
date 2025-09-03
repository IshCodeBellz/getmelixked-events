// components/CocktailSelection.tsx
import Image from "next/image";
import React from "react";

export type CocktailFeature = {
  id: string | number;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
};

type CocktailSelectionProps = {
  heading?: string;
  items: CocktailFeature[];
};

export default function CocktailSelection({
  heading = "Our Cocktail Selection",
  items,
}: CocktailSelectionProps) {
  return (
    <section className="bg-surface-100 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <h2 className="mb-8 text-3xl font-semibold md:text-4xl">{heading}</h2>
        <ul className="grid gap-8 md:grid-cols-2">
          {items.map((f) => (
            <li key={f.id} className="flex flex-col gap-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl ring-1 ring-white/15">
                <Image
                  src={f.imageSrc}
                  alt={f.imageAlt ?? ""}
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="max-w-prose text-sm text-white/90">
                {f.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
