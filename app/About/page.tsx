import React from "react";
import Hero from "../components/Hero";

export default function About() {
  return (
    <main className="space-y-16 bg-surface-50 text-white">
      <Hero
        slides={[
          {
            title: "About GetMeLixked Events",
            subtitle:
              "Crafting memorable experiences for every occasion. Discover our story, our passion, and our commitment to making your event extraordinary.",
            ctaLabel: "See Our Services",
            ctaHref: "/services",
            imageSrc:
              "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageAlt: "Event celebration",
          },
        ]}
      />
      <section className="mx-auto max-w-3xl px-6 py-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-brand">Our Story</h2>
        <p className="mb-6 text-lg text-white/90">
          GetMeLixked Events was founded with a simple mission: to bring people
          together through unforgettable food, drinks, and entertainment. From
          intimate cocktail parties to large-scale BBQs, our team is dedicated
          to delivering unique experiences tailored to your vision.
        </p>
        <h3 className="mb-2 text-2xl font-semibold text-brand">
          Why Choose Us?
        </h3>
        <ul className="mb-6 list-disc list-inside text-left text-white/80">
          <li>Expert mixologists and chefs</li>
          <li>Custom event packages</li>
          <li>Passionate, friendly staff</li>
          <li>Attention to every detail</li>
        </ul>
        <p className="text-lg text-white/80">
          Whether you&apos;re planning a birthday, corporate event, or just a
          great night with friends, we make it easy and memorable. Let us help
          you create your next great moment!
        </p>
      </section>
    </main>
  );
}
