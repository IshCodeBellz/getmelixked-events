import React from "react";

export default function Services() {
  return (
    <section className="bg-surface-50 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-4xl font-bold sm:text-5xl text-brand drop-shadow-sm">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Discover our unique culinary experiences and event services for all
            ages and tastes.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Cocktail Making */}
          <div className="rounded-3xl bg-graphite/80 p-8 shadow-lg flex flex-col items-center text-center border border-brand/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-brand mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665-6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              Cocktail Making
            </h3>
            <p className="mt-2 text-base text-white/70">
              Learn to craft signature drinks with our expert mixologists.
            </p>
            <span className="mt-4 inline-block rounded-full bg-brand px-4 py-1 text-sm font-medium text-graphite">
              £75
            </span>
          </div>
          {/* BBQ Workshop */}
          <div className="rounded-3xl bg-graphite/80 p-8 shadow-lg flex flex-col items-center text-center border border-brand/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-brand mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665-6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              BBQ Workshop
            </h3>
            <p className="mt-2 text-base text-white/70">
              Master the grill and enjoy a hands-on BBQ experience.
            </p>
            <span className="mt-4 inline-block rounded-full bg-brand px-4 py-1 text-sm font-medium text-graphite">
              £85
            </span>
          </div>
          {/* Event Consultation */}
          <div className="rounded-3xl bg-graphite/80 p-8 shadow-lg flex flex-col items-center text-center border border-brand/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-brand mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665-6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              Event Consultation
            </h3>
            <p className="mt-2 text-base text-white/70">
              Personalised event planning and consultation for your special day.
            </p>
            <span className="mt-4 inline-block rounded-full bg-brand px-4 py-1 text-sm font-medium text-graphite">
              £150
            </span>
          </div>
          {/* Additional services can be added here */}

          <div className="col-span-full flex justify-center mt-8">
            <a
              href="#"
              className="inline-block rounded-full bg-brand px-10 py-3 text-base font-semibold text-graphite shadow-lg transition hover:bg-brand/90 focus:outline-none focus:ring-2 focus:ring-brand/40"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
