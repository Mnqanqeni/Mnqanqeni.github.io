import React from 'react';
import aboutMeImage from '../assets/images/about-me.png';

export default function About() {
  return (
    <section id="about" className="flex flex-col items-center justify-center px-4 py-8 scroll-mt-16">
      <h1 className=" md:hidden text-3xl font-bold m-8 xl:text-4xl">
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
            <h1 className="text-2xl font-bold xl:text-5xl mb-4">
              About <span className="text-secondary">Me</span>
            </h1>
            <div className='flex flex-col text-xl md:text-xl xl:text-3xl gap-4'>
              <p>Welcome to My Digital Workshop</p>
              <p>I’m a tech enthusiast, but that wasn’t always the case. I used to say I disliked certain aspects of technology, calling them boring or uninteresting. But I eventually realized those feelings came from not understanding them. The more I learned and started connecting the dots, the more everything made sense. The more it clicked, the more I fell in love with technology. I’ve come to believe that nothing is truly boring, it’s usually just unfamiliar. Now, I’m genuinely curious about everything related to tech.</p>

              <p>
                Today, I'm a dedicated Software Engineer with a mission to build reliable, high-performance solutions that solve real-world problems. My specialty lies in translating complex concepts into clean, efficient code and creating intuitive user experiences.
                Whether I'm architecting scalable backend systems or crafting responsive frontends, I approach each project with creativity, precision, and an insatiable curiosity. Every line of code is an opportunity to learn, improve, and create something meaningful.
                Let me show you what happens when passion meets persistence.
              </p>

            </div>

          </div>

        </div>
      </div>

      {/* Mobile-only second paragraph */}
      <div className="flex flex-col md:hidden text-fourth px-4 mt-4 text-xl gap-4">
        <p>
          Welcome to my portfolio!  I consider myself a tech enthusiast, though that wasn’t always the case.  I used to say I disliked some aspects of technology and label them name like boring and so on, but I've realized it was simply because I knew so little to none about them.  The more I learning, the more the dots connect, the more it clicks, the more I love, and the more exciting everything about technology is.</p>

        <p>Now  I am a passionate Software Engineer who is committed to developing dependable, high-performance products that address real-world challenges.  I specialize at transforming difficult concepts into clear, efficient code and intuitive user experiences.  Whether I'm creating scalable backend systems or responsive frontends, I bring creativity, precision, and a strong desire to learn to every project I work on.
        </p>
      </div>

      <div className="w-full h-1 bg-gradient-frame-line mt-10" />
    </section>
  );
}
