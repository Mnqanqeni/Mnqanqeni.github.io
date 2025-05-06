import React from 'react';
import aboutMeImage from '../assets/images/about-me.png';

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center px-4 py-8">
      <h1 className=" md:hidden text-3xl font-bold m-8">
        About <span className="text-secondary">Me</span>
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-between relative">
        {/* Image and Circles */}
        <div className="relative flex-1 flex items-center justify-center my-2">
          <div className="relative w-[416px] h-[444px] left-8 md:left-0">
            <div className="h-[300px] w-[300px] rotate-[-48deg] bg-gradient-to-br from-[#00a8cda5] to-transparent absolute left-[15%] rounded-full" />
            <div className="h-[162px] w-[162px] bg-gradient-to-br from-[#00a8cda5] to-transparent absolute bottom-0 rounded-[80px]" />
            <div className="absolute inset-0">
              <div className="h-[267px] w-[267px] bg-gradient-to-b from-[#00a8cd] to-transparent rotate-[5deg] absolute bottom-[70px] left-[40px] shadow-[4px_4px_0px_0px_#00a8cd]" />
              <div className="h-[267px] w-[267px] bg-gradient-to-br from-black to-transparent absolute bottom-[15%] left-[8%]">
                <img src={aboutMeImage} alt="About me" className="h-[266px] absolute ml-[40px]" />
              </div>
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="flex flex-col flex-1 text-fourth gap-4 px-4 text-3xl">
          <div className="hidden md:block">
            <h1 className="text-3xl font-bold mb-4">
              About <span className="text-secondary">Me</span>
            </h1>
            <div className='flex flex-col gap-4'>
              <p>
                I am someone fascinated by complexity and system interactions, and I
                thrive on the challenge of building meaningful products. I believe
                that teamwork is essential to success; sharing knowledge and
                collaborating with diverse minds leads to the best outcomes.
              </p>
              <p className="">
                I believe that every feature should align with business goals and
                enhance the user experience. I enjoy collaborating to bring creative
                ideas to life, turning visions into fully realized digital products.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Mobile-only second paragraph */}
      <div className="flex flex-col md:hidden text-fourth px-4 mt-4 text-xl gap-4">
        <p>
          I am someone fascinated by complexity and system interactions, and I
          thrive on the challenge of building meaningful products. I believe
          that teamwork is essential to success; sharing knowledge and
          collaborating with diverse minds leads to the best outcomes.
        </p>
        <p>
          I believe that every feature should align with business goals and
          enhance the user experience. I enjoy collaborating to bring creative
          ideas to life, turning visions into fully realized digital products.
        </p>
      </div>

      <div className="w-full h-1 bg-gradient-frame-line mt-10" />
    </section>
  );
}
