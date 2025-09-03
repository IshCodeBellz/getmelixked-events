import React from "react";
import Hero from "../components/Hero";

const ContactPage = () => {
  return (
    <main className="space-y-16 bg-surface-50 text-white">
      <Hero
        slides={[
          {
            title: "Contact Us for Your Next BBQ Event!",
            subtitle:
              "Let's make your BBQ party unforgettable. Reach out for bookings, questions, or custom packages.",
            ctaLabel: "Get in Touch",
            ctaHref: "#contact-form",
            imageSrc:
              "https://images.unsplash.com/photo-1680919502568-bc69dd26427d?q=80&w=3376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            imageAlt: "BBQ grill with food",
          },
        ]}
      />
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg text-white">
              We are independent and passionate about events. Contact us for
              BBQs, cocktail parties, or any special occasion. We&apos;ll
              recommend what&apos;s right for you!
            </p>
            <div className="mt-8">
              <a href="#" className="text-2xl font-bold text-brand">
                0151 475 4450
              </a>
              <address className="mt-2 not-italic text-white">
                282 Kevin Brook, Imogeneborough, CA 58517
              </address>
            </div>
          </div>
          <div className="rounded-lg bg-graphite p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form id="contact-form" action="#" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-700 bg-surface-100 p-3 text-sm text-white"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-700 bg-surface-100 p-3 text-sm text-white"
                    placeholder="Email address"
                    type="email"
                    id="email"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-700 bg-surface-100 p-3 text-sm text-white"
                    placeholder="Phone Number"
                    type="tel"
                    id="phone"
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full rounded-lg border-gray-700 bg-surface-100 p-3 text-sm text-white"
                  placeholder="Message"
                  rows={8}
                  id="message"
                ></textarea>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-brand px-5 py-3 font-medium text-graphite sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
