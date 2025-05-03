import React from "react";

export default function Contact() {
  return (
    <section className="flex flex-col items-center py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <p className="text-[#ffffffb2] text-xs mt-2">
          I’m open to collaborations — reach out below!
        </p>
      </div>

      <form className="flex flex-col mt-8 w-full max-w-2xl gap-6">
        <div className="flex flex-row gap-4">
          <div className="flex-1 relative">
            <label htmlFor="name" className="block text-sm mb-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              required
              className="w-full border-b-2 border-secondary bg-transparent p-2"
            />
          </div>
          <div className="flex-1 relative">
            <label htmlFor="lastName" className="block text-sm mb-1">Last Name</label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Your last name"
              className="w-full border-b-2 border-secondary bg-transparent p-2"
            />
          </div>
        </div>

        <div className="flex flex-row gap-4">
          <div className="flex-1 relative">
            <label htmlFor="email" className="block text-sm mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              className="w-full border-b-2 border-secondary bg-transparent p-2"
            />
          </div>
          <div className="flex-1 relative">
            <label htmlFor="phone" className="block text-sm mb-1">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Your phone number"
              className="w-full border-b-2 border-secondary bg-transparent p-2"
            />
          </div>
        </div>

        <div className="relative">
          <label htmlFor="message" className="block text-sm mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Type your message..."
            className="w-full border-2 border-secondary bg-transparent p-2 min-h-[100px] focus-outline-none"
          />
        </div>

        <button
          type="submit"
          className="self-start bg-secondary text-fourth font-bold py-2 px-6 rounded"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
