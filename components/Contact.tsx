"use client";

import { useState } from "react";
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setSubmitted(true);

  // Clear all form fields
  e.currentTarget.reset();

  setTimeout(() => {
    setSubmitted(false);
  }, 5000);
};
  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-white py-20"
    >
      <div className="mx-auto max-w-[1500px] px-8">

        {/* Heading */}
        <div className="mb-12 text-center">

          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.25em] text-sky-600">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl font-bold text-blue-950 md:text-5xl">
            Contact Us
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Have a question or need a quotation?
            Send us a message and our team will get back to you.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-2xl bg-slate-50 p-8">

            <h3 className="text-2xl font-bold text-blue-950">
              Let's Connect
            </h3>

            <p className="mt-4 leading-relaxed text-gray-600">
              Whether you are looking for packaged drinking water,
              bulk orders or business enquiries, we would be happy
              to hear from you.
            </p>

            <div className="mt-8 space-y-6">

              {/* Phone */}
              <div>
                <p className="text-sm font-semibold uppercase text-sky-600">
                  Phone
                </p>

                <p className="mt-1 text-lg font-medium text-gray-800">
                  +91 8080177676
                </p>
              </div>

              {/* Email */}
              <div>
                <p className="text-sm font-semibold uppercase text-sky-600">
                  Email
                </p>

                <p className="mt-1 text-lg font-medium text-gray-800">
                  sudhir.shinde@skyoceans.com
                </p>
              </div>

              {/* Address */}
              <div>
                <p className="text-sm font-semibold uppercase text-sky-600">
                  Address
                </p>

                <p className="mt-1 leading-relaxed text-gray-700">
                  SKYOCEAN Packaged Drinking Water<br />
                  Ghargaon (Wakdi), Tal. Kallamb, Dist. Dharashiv - 413507<br />
                  Maharashtra, India
                </p>
              </div>

            </div>

          </div>


          {/* Contact Form */}
          <div>
            {submitted && (
              <div className="mb-4 rounded-lg border border-green-200 bg-green-50 p-4 text-green-700">
                ✅ Thank you for your enquiry! We will get back to you as soon as possible.
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >

            <div className="grid gap-6 md:grid-cols-2">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Phone
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
                />
              </div>

            </div>


            {/* Email */}
            <div className="mt-6">

              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="Your email address"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              />

            </div>


            {/* Subject */}
            <div className="mt-6">

              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Subject
              </label>

              <input
                id="subject"
                type="text"
                placeholder="How can we help?"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              />

            </div>


            {/* Message */}
            <div className="mt-6">

              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
              />

            </div>


            {/* Submit */}
            <button
              type="submit"
              className="mt-6 w-full rounded-lg bg-sky-600 px-6 py-3 font-semibold text-white transition hover:bg-sky-700"
            >
              Send Enquiry
            </button>

          </form>
          </div>

        </div>

      </div>
    </section>
  );
}