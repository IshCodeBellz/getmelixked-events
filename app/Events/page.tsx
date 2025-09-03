import React from "react";
import Image from "next/image";

export default function EventsPage() {
  type Event = {
    id: number;
    title: string;
    date: string;
    location: string;
    description: string;
    imageSrc: string;
    mapUrl: string;
  };

  const events: Event[] = [
    {
      id: 1,
      title: "BBQ & Beats: Summer Kickoff",
      date: "2025-09-15",
      location: "Carnival Grounds",
      description:
        "Live music, sizzling BBQ, and signature cocktails. Join us for the ultimate summer party!",
      imageSrc:
        "https://images.unsplash.com/photo-1718267052366-f8994de82edf?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.1.0",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Carnival+Grounds",
    },
    {
      id: 2,
      title: "Cocktail Masterclass",
      date: "2025-09-22",
      location: "Mixology Studio",
      description:
        "Learn to craft classic and signature cocktails with our expert mixologists. Includes tastings and recipes.",
      imageSrc:
        "https://images.unsplash.com/photo-1601925088924-aad72e86b894?q=80&w=3688&auto=format&fit=crop&ixlib=rb-4.1.0",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Mixology+Studio",
    },
    {
      id: 3,
      title: "Family BBQ Day",
      date: "2025-10-05",
      location: "Riverside Park",
      description:
        "A fun-filled day for all ages with games, BBQ, and refreshing drinks. Bring your friends and family!",
      imageSrc:
        "https://images.unsplash.com/photo-1680919502568-bc69dd26427d?q=80&w=3376&auto=format&fit=crop&ixlib=rb-4.1.0",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Riverside+Park",
    },
    {
      id: 4,
      title: "Corporate Event Planning",
      date: "2025-10-20",
      location: "Downtown Event Hall",
      description:
        "Discover our custom packages for corporate gatherings, team-building BBQs, and cocktail parties.",
      imageSrc:
        "https://images.unsplash.com/photo-1662152334753-6bc27d300fe6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0",
      mapUrl:
        "https://www.google.com/maps/search/?api=1&query=Downtown+Event+Hall",
    },
  ];

  return (
    <main className="space-y-16 bg-surface-50 text-white min-h-screen py-12">
      <section className="mx-auto max-w-4xl px-4">
        <h1 className="text-4xl font-bold mb-8 text-brand text-center">
          Upcoming Events
        </h1>
        <ul className="space-y-8">
          {events.map((event) => (
            <li
              key={event.id}
              className="rounded-2xl bg-graphite p-6 shadow-lg border border-brand/30 flex flex-col md:flex-row gap-6 items-center md:items-stretch"
            >
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <Image
                  src={event.imageSrc}
                  alt={event.title}
                  width={600}
                  height={400}
                  className="w-full h-auto max-h-96 object-cover rounded-xl"
                  priority
                />
              </div>
              <div className="flex-1 flex flex-col justify-center md:pl-8">
                <h2 className="text-2xl font-semibold text-brand mb-2">
                  {event.title}
                </h2>
                <p className="text-white/80 mb-1">
                  <span className="font-medium">{event.date}</span> &mdash;{" "}
                  <span>{event.location}</span>
                </p>
                <p className="mt-2 text-white/90">{event.description}</p>
                {event.mapUrl && (
                  <div className="mt-4">
                    <iframe
                      title={`Map of ${event.location}`}
                      src={`https://www.google.com/maps?q=${encodeURIComponent(
                        event.location
                      )}&output=embed`}
                      width="100%"
                      height="150"
                      style={{ border: 0, borderRadius: "0.5rem" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full rounded-lg shadow"
                    ></iframe>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
