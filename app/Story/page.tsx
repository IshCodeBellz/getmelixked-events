"use client";

import React from "react";

export default function StoryPage() {
  return (
    <main className="bg-surface-50 min-h-screen py-12 text-white">
      <section className="mx-auto max-w-2xl px-4 mb-12 text-center">
        <h1 className="text-4xl font-bold text-brand mb-4">Our Story</h1>
        <p className="text-lg text-white/80 mb-6">
          How GetMeLixked began, our passion for cocktails, and the journey so
          far.
        </p>
        <div className="bg-graphite rounded-xl shadow-lg p-8 text-left">
          <h2 className="text-2xl font-semibold text-brand mb-4">
            From Dream to Reality
          </h2>
          <p className="mb-4 text-white/90">
            GetMeLixked was born from a love of mixology and a desire to bring
            people together over unforgettable drinks and experiences. What
            started as a small gathering of friends experimenting with flavors
            has grown into a vibrant events company, serving signature cocktails
            and BBQ favorites at celebrations across the city.
          </p>
          <h2 className="text-2xl font-semibold text-brand mb-4">
            Our Mission
          </h2>
          <p className="mb-4 text-white/90">
            We believe every event deserves a touch of magic. Our team is
            dedicated to crafting unique menus, delivering top-notch service,
            and making every guest feel special. Whether it&apos;s a wedding,
            birthday, or corporate event, we pour our passion into every detail.
          </p>
          <h2 className="text-2xl font-semibold text-brand mb-4">
            Looking Ahead
          </h2>
          <p className="text-white/90">
            As we continue to grow, our commitment remains the same: to create
            memorable moments, one cocktail at a time. Thank you for being part
            of our story!
          </p>
        </div>
      </section>
    </main>
  );
}
