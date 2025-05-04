import React from 'react';
import aboutMeImage from '../assets/images/about-me.png';

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center py-12 px-4">
      <div className='flex flex-col items-center justify-center gap-8 py-4'>
        <div className="mb-8 ">
          <h1 className="text-3xl font-bold">
            About <span className="text-secondary">Me</span>
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-center relative justify-center">
          <div className="flex flex-col relative flex-1">
            <div className="w-[416.55px] h-[443.92px] relative flex">
              {/* big circle */}
              <div className="h-[300px] w-[300px] rotate-[-48deg] bg-gradient-to-br from-[#00a8cda5] to-transparent absolute left-[15%] rounded-full" />

              {/* small circle */}
              <div className="h-[162px] w-[162px] bg-gradient-to-br from-[#00a8cda5] to-transparent absolute bottom-[0.39px] rounded-[80px]" />

              {/* Stackview Three */}
              <div className="absolute inset-0">
                {/* Inner Stack */}
                <div className="h-[266.89px] w-[266.89px] bg-gradient-to-b from-[#00a8cd] to-transparent rotate-[5.11deg] flex flex-col absolute bottom-[70px] left-[40px] shadow-[4px_4px_0px_0px_#00a8cd]" />

                {/* Image Container */}
                <div className="h-[266.89px] w-[266.89px] bg-gradient-to-br from-black to-transparent flex flex-col absolute bottom-[15%] left-[8%]">
                  <img
                    src={aboutMeImage}
                    alt="About me"
                    className="h-[266px] absolute ml-[40px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-fourth flex-[0.3] text-lg leading-relaxed max-w-xl">
          I am someone fascinated by complexity and system interactions.
          I enjoy solving challenging problems, building scalable software, and continuously learning how technology shapes the world.
        </div>
      </div>

      <div className="w-full h-1-6 bg-gradient-frame-line" />
    </section>
  );
}
