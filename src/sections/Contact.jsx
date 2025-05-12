import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState({ message: '', type: '' });

  const closeModal = () => setStatus({ message: '', type: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(() => {
        setStatus({ message: 'Message sent successfully!', type: 'success' });
        form.current.reset();

        // auto-close modal after 4s
        setTimeout(closeModal, 4000);
      })
      .catch((error) => {
        console.error('FAILED...', error.text);
        setStatus({ message: 'Failed to send message. Please try again.', type: 'error' });

        setTimeout(closeModal, 4000);
      });
  };

  return (
    <>
      <section id="contact" className="flex flex-col items-center p-8 w-full">
        <div className="text-center">
          <h1 className="text-3xl font-bold xl:text-5xl">
            Contact <span className="text-secondary">Me</span>
          </h1>
          <p className="text-[#ffffffb2] text-xl md:text-2xl mt-2">
            I’m open to collaborations — reach out below!
          </p>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col mt-8 w-full max-w-7xl gap-6 md:gap-10 p-6 bg-dark-gradient"
        >
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
              <label htmlFor="name" className="floating-label">
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
              <label htmlFor="lastName" className="floating-label">
                Last Name
              </label>
            </div>
          </div>

          {/* Email and Phone */}
          <div className="flex flex-row gap-4">
            <div className="relative w-full">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder=" "
                className="peer w-full border-b-2 border-secondary bg-transparent focus:outline-none pt-6"
              />
              <label htmlFor="email" className="floating-label">
                Email
              </label>
            </div>

            <div className="relative w-full">
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder=" "
                className="peer w-full border-b-2 border-secondary bg-transparent focus:outline-none pt-6"
              />
              <label htmlFor="phone" className="floating-label">
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
            <label htmlFor="message" className="floating-label left-2">
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

      {status.message && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 px-4">
          <div
            className={`relative rounded-lg p-6 w-full max-w-md shadow-customBlueXl border-l-4 ${status.type === 'success'
                ? 'border-l-accent bg-gradient-to-br from-black/50 via-slate-900/60 to-cyan-800/40 text-fourth'
                : 'border-l-red-600 bg-gradient-to-br from-black/50 via-slate-900/60 to-red-900/40 text-fourth'
              }`}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-fourth text-2xl hover:text-accent transition-colors"
              aria-label="Close"
            >
              &times;
            </button>

            <div className="flex flex-col items-center text-center">
              <img
                src={
                  status.type === 'success'
                    ? 'https://img.icons8.com/color/96/000000/checked--v1.png'
                    : 'https://img.icons8.com/color/96/000000/cancel--v1.png'
                }
                alt={status.type === 'success' ? 'Success' : 'Error'}
                className="mb-4 w-16 h-16"
              />
              <p className="text-lg font-semibold">{status.message}</p>
            </div>
          </div>
        </div>
      )}


    </>
  );
}
