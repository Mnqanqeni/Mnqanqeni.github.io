import React from "react";

export default function Contact() {
  return (
    <section id="contact"className="flex flex-col items-center p-8 w-full">
      <div className="text-center">
        <h1 className="text-3xl font-bold xl:text-5xl">
          Contact <span className="text-secondary">Me</span>
        </h1>
        <p className="text-[#ffffffb2] text-xl md:text-2xl mt-2">
          I’m open to collaborations — reach out below!
        </p>
      </div>

      <form className="flex flex-col mt-8 w-full max-w-7xl gap-6 md:gap-10 p-6 bg-dark-gradient">
        {/* Name and Last Name */}
        <div className="flex flex-row gap-4">
          {/* First Name */}
          <div className="relative w-full">
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder=" "
              className="peer w-full border-b-2 border-secondary bg-transparent focus:outline-none pt-6"
            />
            <label
              htmlFor="name"
              className="absolute left-0 top-1 text-sm text-gray-500 transition-all 
                peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-secondary
                after:ml-1 after:text-red-500 after:transition-opacity
                peer-focus:after:content-['*'] peer-placeholder-shown:after:content-['']"
            >
              Name
            </label>
          </div>

          {/* Last Name */}
          <div className="relative w-full">
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              placeholder=" "
              className="peer w-full border-b-2 border-secondary bg-transparent focus:outline-none pt-6"
            />
            <label
              htmlFor="lastName"
              className="absolute left-0 top-1 text-sm text-gray-500 transition-all 
                peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-secondary
                after:ml-1 after:text-red-500 after:transition-opacity
                peer-focus:after:content-['*'] peer-placeholder-shown:after:content-['']"
            >
              Last Name
            </label>
          </div>
        </div>

        {/* Email and Phone */}
        <div className="flex flex-row gap-4">
          {/* Email */}
          <div className="relative w-full">
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder=" "
              className="peer w-full border-b-2 border-secondary bg-transparent focus:outline-none pt-6"
            />
            <label
              htmlFor="email"
              className="absolute left-0 top-1 text-sm text-gray-500 transition-all 
                peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-secondary
                after:ml-1 after:text-red-500 after:transition-opacity
                peer-focus:after:content-['*'] peer-placeholder-shown:after:content-['']"
            >
              Email
            </label>
          </div>

          {/* Phone Number */}
          <div className="relative w-full">
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder=" "
              className="peer w-full border-b-2 border-secondary bg-transparent focus:outline-none pt-6"
            />
            <label
              htmlFor="phone"
              className="absolute left-0 top-1 text-sm text-gray-500 transition-all 
                peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                peer-focus:top-1 peer-focus:text-sm peer-focus:text-secondary
                after:ml-1 after:text-red-500 after:transition-opacity
                peer-focus:after:content-['*'] peer-placeholder-shown:after:content-['']"
            >
              Phone Number
            </label>
          </div>
        </div>

        {/* Message */}
        <div className="relative w-full">
          <textarea
            id="message"
            name="message"
            required
            placeholder=" "
            className="peer w-full border-2 border-secondary bg-transparent focus:outline-none pt-6 pb-2 min-h-[120px] px-2"
          />
          <label
            htmlFor="message"
            className="absolute left-2 top-1 text-sm text-gray-500 transition-all 
              peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
              peer-focus:top-1 peer-focus:text-sm peer-focus:text-secondary
              after:ml-1 after:text-red-500 after:transition-opacity
              peer-focus:after:content-['*'] peer-placeholder-shown:after:content-['']"
          >
            Message
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-secondary text-fourth font-bold py-2 px-6 rounded"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
