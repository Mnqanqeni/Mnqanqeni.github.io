import React from 'react';
import aboutMeImage from '../assets/images/about-me.png';

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center px-4">
      <div className="flex flex-col md:flex-row items-center relative justify-between">
      <div className="flex flex-col gap-4 text-fourth m-8 md:hidden lg:hidden">
            <h1 className="text-3xl font-bold">
              About <span className="text-secondary">Me</span>
            </h1>
          </div>
        <div className="flex flex-col relative flex-1 md:flex-2/3  ">
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
        <div className="hidden md:flex flex-col gap-4 text-fourth flex-1 lg:flex-3 text-3xl ">
          <div className="mb-8 ">
            <h1 className="text-3xl font-bold">
              About <span className="text-secondary">Me</span>
            </h1>
          </div>

          <p>
            I am someone fascinated by complexity and system interactions, and I
            thrive on the challenge of building meaningful products. I believe
            that teamwork is essential to success; sharing knowledge and
            collaborating with diverse minds leads to the best outcomes. Web
            development gives me the opportunity to engage with complex systems
            while working alongside talented individuals.
          </p>
          <p className='md:hidden lg:block'>
            I believe that every feature should align with business goals and
            enhance the user experience. I enjoy collaborating to bring creative
            ideas to life, turning visions into fully realized digital products.
          </p>
        </div>
      </div>
      <div className="md:hidden text-fourth text-lg px-4 flex flex-col gap-4">
        <p>
          I am someone fascinated by complexity and system interactions, and I
          thrive on the challenge of building meaningful products. I believe
          that teamwork is essential to success; sharing knowledge and
          collaborating with diverse minds leads to the best outcomes. Web
          development gives me the opportunity to engage with complex systems
          while working alongside talented individuals.
        </p>
        <p className=''>
          I believe that every feature should align with business goals and
          enhance the user experience. I enjoy collaborating to bring creative
          ideas to life, turning visions into fully realized digital products.
        </p>
      </div>
      <div className="w-full h-1-6 bg-gradient-frame-line mt-10" />
    </section>
  );
}
