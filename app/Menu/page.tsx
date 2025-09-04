"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

// 👇 This ensures react-pdf never runs during SSR/prerender
const PDFMenuViewer = dynamic(
  () => import("../components/PDFMenuViewer.client"),
  {
    ssr: false,
    loading: () => (
      <div className="bg-graphite rounded-xl p-6 shadow-lg text-white text-center">
        Loading PDF…
      </div>
    ),
  }
);

const cocktails = [
  {
    name: "Classic Mojito",
    description: "Rum, mint, lime, sugar, soda. Refreshing and timeless.",
    image:
      "https://images.unsplash.com/photo-1653542772393-71ffa417b1c4?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Signature Lixked Punch",
    description: "Vodka, tropical fruits, secret mix. Our house favorite!",
    image:
      "https://images.unsplash.com/photo-1581927692308-be9e43b4d860?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Whiskey Sour",
    description: "Whiskey, lemon, sugar, bitters. Smooth and bold.",
    image:
      "https://images.unsplash.com/photo-1713720441159-466472b29b54?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pina Colada",
    description: "Rum, coconut cream, pineapple juice. Creamy and tropical.",
    image:
      "https://images.unsplash.com/photo-1607446045710-d5a8fd9bc1db?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Blue Lagoon",
    description: "Vodka, blue curaçao, lemonade. Vibrant and citrusy.",
    image:
      "https://images.unsplash.com/photo-1587888637140-849b25d80ef9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Tequila Sunrise",
    description: "Tequila, orange juice, grenadine. Fruity and colorful.",
    image:
      "https://images.unsplash.com/photo-1620393570203-ebb4ba12c05d?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const bbq = [
  {
    name: "BBQ Chicken Skewers",
    description: "Juicy chicken, grilled to perfection with our special sauce.",
    image:
      "https://images.unsplash.com/photo-1705359573325-f2006d5e459f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Smoked Beef Ribs",
    description: "Tender beef ribs, slow-cooked and smoked for hours.",
    image:
      "https://plus.unsplash.com/premium_photo-1695658519365-70ca7801998d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Veggie Grill Platter",
    description: "Seasonal veggies, marinated and flame-grilled.",
    image:
      "https://plus.unsplash.com/premium_photo-1663045476740-97cad51a7647?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jerk Chicken",
    description:
      "Spicy Jamaican-style chicken, marinated and grilled over open flames.",
    image:
      "https://images.unsplash.com/photo-1658833621083-01fd8a4acf19?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Jerk Wrap",
    description:
      "Grilled jerk chicken wrapped with fresh veggies and sauce in a soft tortilla.",
    image:
      "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=2352&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "BBQ Wings",
    description: "Crispy chicken wings tossed in our signature BBQ sauce.",
    image:
      "https://images.unsplash.com/photo-1648141643305-efb7d2542602?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const seasonalMenus = [
  {
    name: "GetMeLixked Christmas Menu",
    file: "/GetMeLixked_Christmas_Menu_2023.pdf",
  },
  {
    name: "GetMeLixked Event Menu",
    file: "/GetMeLixked_Event_Menu.pdf",
  },
];

export default function MenuPage() {
  return (
    <main className="bg-surface-50 min-h-screen py-12 text-white">
      {/* ... Cocktails + BBQ sections ... */}
      <section className="mx-auto max-w-4xl px-4 mb-12 text-center">
        <h1 className="text-4xl font-bold text-brand mb-4">Our Menu</h1>
        <p className="text-lg text-white/80 mb-2">
          Signature Cocktails & BBQ Favourites
        </p>
        <p className="text-white/60">
          Handcrafted drinks and flame-grilled bites for every occasion.
        </p>
      </section>
      <section className="mx-auto max-w-4xl px-4 mb-16">
        <h2 className="text-2xl font-semibold text-brand mb-6">Cocktails</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {cocktails.map((item) => (
            <div
              key={item.name}
              className="bg-graphite rounded-xl shadow-lg p-4 flex flex-col items-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="rounded-lg mb-3 object-cover w-full h-40"
              />
              <h3 className="text-lg font-bold text-brand mb-1">{item.name}</h3>
              <p className="text-white/80 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 mb-8">
        <h2 className="text-2xl font-semibold text-brand mb-6">
          BBQ Favourites
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {bbq.map((item) => (
            <div
              key={item.name}
              className="bg-graphite rounded-xl shadow-lg p-4 flex flex-col items-center"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={200}
                height={200}
                className="rounded-lg mb-3 object-cover w-full h-40"
              />
              <h3 className="text-lg font-bold text-brand mb-1">{item.name}</h3>
              <p className="text-white/80 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-4xl px-4 mb-16">
        <h2 className="text-2xl font-semibold text-brand mb-4 text-center">
          Seasonal Menus
        </h2>
        <p className="text-white/80 text-center mb-8">
          Check out our exclusive seasonal offerings below. Click to view or
          scroll through the menus!
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {seasonalMenus.map((menu) => (
            <PDFMenuViewer key={menu.name} name={menu.name} file={menu.file} />
          ))}
        </div>
      </section>
    </main>
  );
}
