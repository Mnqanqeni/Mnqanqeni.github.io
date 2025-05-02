import React from "react";

export default function Contact() {
    return (
        <section className="flex flex-col items-center justify-between relative">
            <div className="py-16 ">
                <div className="flex flex-col items-center text-3xl font-bold ">
                    <h1>Contact <span className="text-secondary">Me</span></h1>
                    <p className="text-[#ffffffb2] text-xs mt-2">
                    I’m open to collaborations — reach out below!
                    </p>
                </div>
                <form className="flex flex-col items-center mt-8">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-64"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-64"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-64 h-32"
                    />
                    <button className="bg-secondary text-white py-2 px-4 rounded-lg">
                        Send Message
                    </button>
                </form>
            </div>

            <div className="w-full h-1-6 bg-gradient-frame-line" />
        </section>
    );
}