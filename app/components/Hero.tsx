"use client";

import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type Slide = {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc: string;
  imageAlt?: string;
  overlayOpacity?: number;
  children?: ReactNode;
};

type HeroCarouselProps = {
  slides: Slide[];
};

export default function HeroCarousel({ slides }: HeroCarouselProps) {
  const [current, setCurrent] = React.useState(0);
  const [direction, setDirection] = React.useState<"left" | "right">("right");
  React.useEffect(() => {
    if (!slides || slides.length === 0) return;
    const timer = setInterval(() => {
      setDirection("right");
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000); // Change every 10 seconds
    return () => clearInterval(timer);
  }, [slides]);

  if (!slides || slides.length === 0) {
    return null; // Or render a fallback UI
  }
  const slide = slides[current];

  const goToPrev = () => {
    setDirection("left");
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  const goToNext = () => {
    setDirection("right");
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const slidesExist = slides && slides.length > 0;

  return (
    <section className="relative isolate min-h-[70vh] w-full overflow-hidden rounded-b-3xl md:min-h-[80vh]">
      <div
        className={`absolute inset-0 h-full w-full transition-transform duration-700 ease-in-out will-change-transform ${
          direction === "right" ? "animate-slide-right" : "animate-slide-left"
        }`}
        style={{ zIndex: 1 }}
      >
        <Image
          src={slide.imageSrc}
          alt={slide.imageAlt || ""}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-graphite"
          style={{ opacity: slide.overlayOpacity ?? 0.55 }}
        />
      </div>
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-8 px-6 text-center text-white">
          <h1 className="text-4xl font-semibold tracking-tight drop-shadow-sm sm:text-5xl md:text-6xl">
            {slide.title}
          </h1>
          {slide.subtitle && (
            <p className="mx-auto max-w-2xl text-base md:text-lg opacity-95">
              {slide.subtitle}
            </p>
          )}
          <div className="flex items-center gap-4">
            {slide.ctaLabel && (
              <Link
                href={slide.ctaHref || "#"}
                className="rounded-full bg-brand px-6 py-3 text-base font-medium text-graphite shadow-brand transition hover:bg-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-200"
              >
                {slide.ctaLabel}
              </Link>
            )}
            {slide.children}
          </div>
        </div>
      </div>
      {slides.length > 1 && (
        <>
          {/* Carousel Controls */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
            aria-label="Previous Slide"
          >
            &#8592;
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-2 text-white hover:bg-black/60"
            aria-label="Next Slide"
          >
            &#8594;
          </button>
          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx > current ? "right" : "left");
                  setCurrent(idx);
                }}
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === current ? "bg-brand" : "bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
