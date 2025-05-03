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
                <form className="flex flex-col mt-8 ">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div>
                            <label for="name">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="border-b-2 border-secondary bg-transparent "
                            />
                        </div>
                        <div>
                            <label for="last-name">Last Name</label>
                            <input
                                type="text"
                                placeholder="Your Email"
                                className="border-b-2 border-secondary bg-transparent "
                            />
                        </div>
                    </div>

                    <div>
                        <label for="email">Email</label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border-b-2 border-secondary bg-transparent "
                        />
                    </div>
                    <div>
                        <label for="phone-number">Phone Number</label>
                        <input
                            type="tel"
                            placeholder="Your Phone Number"
                            className="border-b-2 border-secondary bg-transparent "
                        />
                    </div>

                    <div>
                        <label for="message">Message</label>
                        <textarea
                            placeholder="Your Message"
                            className="border-b-2 border-secondary bg-transparent "
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-secondary text-fourth font-bold py-2 px-4 rounded mt-4"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            <div className="w-full h-1-6 bg-gradient-frame-line" />
        </section>
    );
}