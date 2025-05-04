import React from 'react';
import aboutMeImage from '../assets/images/about-me.png';

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">
          About <span className="text-secondary">Me</span>
        </h1>
      </div>

      <div className="flex flex md:flex-row items-center gap-10 max-w-5xl">
        <img
          src={aboutMeImage}
          alt="About me"
          className=" h-64 rounded-2xl"
        />
        <div className="text-fourth text-lg leading-relaxed max-w-xl">
          I am someone fascinated by complexity and system interactions.
          I enjoy solving challenging problems, building scalable software, and continuously learning how technology shapes the world.
        </div>
      </div>

      {/* Divider Line */}
      <div className="w-full h-1 mt-12 bg-gradient-frame-line" />
    </section>
  );
}
