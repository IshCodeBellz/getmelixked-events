// app/page.tsx
import Hero from "./components/Hero";
import Services from "./components/Services";
import EventPromo from "./components/EventsPromo";
import CocktailSelection from "./components/CocktailSelection";
import SignatureCocktails from "./components/SignatureCocktails";
import React from "react";

export default function HomePage() {
  return (
    <main className="space-y-16 bg-surface-50 text-white">
      <Hero
        slides={[
          {
            title: "Savor the Flavor Today",
            subtitle: "Unique culinary experiences for all ages and tastes.",
            ctaLabel: "Book Now",
            ctaHref: "/booking",
            imageSrc:
              "https://images.unsplash.com/photo-1591243315780-978fd00ff9db?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageAlt: "Hero background",
          },
          {
            title: "Savor the Flavor Today",
            subtitle: "Unique culinary experiences for all ages and tastes.",
            ctaLabel: "Book Now",
            ctaHref: "/booking",
            imageSrc:
              "https://images.unsplash.com/photo-1485872299829-c673f5194813?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageAlt: "Hero background",
          },
          {
            title: "Savor the Flavor Today",
            subtitle: "Unique culinary experiences for all ages and tastes.",
            ctaLabel: "Book Now",
            ctaHref: "/booking",
            imageSrc:
              "https://images.unsplash.com/photo-1627558009791-2280bfc9fe14?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageAlt: "Hero background",
          },
          {
            title: "Savor the Flavor Today",
            subtitle: "Unique culinary experiences for all ages and tastes.",
            ctaLabel: "Book Now",
            ctaHref: "/booking",
            imageSrc:
              "https://images.unsplash.com/photo-1704564872119-0e6b4ff0d7e7?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1704564872119-0e6b4ff0d7e7?q=80&w=2043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageAlt: "Hero background",
          },
        ]}
      />
      <Services
        items={[
          {
            id: 1,
            title: "Cocktail Making",
            priceLabel: "£75",
            imageSrc:
              "https://images.unsplash.com/photo-1697793275956-9f74bb9c9005?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            id: 2,
            title: "BBQ Workshop",
            priceLabel: "£85",
            imageSrc:
              "https://images.unsplash.com/photo-1680919502568-bc69dd26427d?q=80&w=3376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            id: 3,
            title: "Event Consultation",
            priceLabel: "£150",
            imageSrc:
              "https://images.unsplash.com/photo-1662152334753-6bc27d300fe6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ]}
      />
      <EventPromo
        title="BBQ & Beats: Live Music Extravaganza"
        dateTimeLabel="29 Sept 2025, 15:41 – 17:41"
        locationLabel="Carnival Grounds"
        imageSrc="https://images.unsplash.com/photo-1718267052366-f8994de82edf?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <CocktailSelection
        items={[
          {
            id: 1,
            title: "Signature Drinks",
            description: "Handcrafted cocktails...",
            imageSrc:
              "https://images.unsplash.com/photo-1601925088924-aad72e86b894?q=80&w=3688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            id: 2,
            title: "Classic Cocktails",
            description: "Timeless favorites...",
            imageSrc:
              "https://images.unsplash.com/photo-1605270012917-bf157c5a9541?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ]}
      />
      <SignatureCocktails
        items={[
          {
            id: 1,
            name: "Mojito",
            tagline: "Minty and fresh.",
            imageSrc:
              "https://images.unsplash.com/photo-1659046842567-2787b5c9c2fe?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            id: 2,
            name: "Rum Punch",
            tagline: "Timeless classic.",
            imageSrc:
              "https://images.unsplash.com/photo-1591027198400-37abc8a3575d?q=80&w=970&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
          {
            id: 3,
            name: "Porn Star Martini",
            tagline: "Timeless classic.",
            imageSrc:
              "https://images.unsplash.com/photo-1728376336159-9ef10b4a8ffe?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          },
        ]}
      />
    </main>
  );
}
