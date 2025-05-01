import React from 'react';
import aboutMeImage from '../assets/images/about-me.png';

export default function About() {
    return (
        <section className="flex flex-col items-center justify-between gap-4 md:px-12 pt-14 md:pt-60 animate-fade-in-up">
            <div className="">
                <h1>About <span>Me</span></h1>
            </div>
            <div flex className="flex flex-row">
                <img src={aboutMeImage}></img>
                <div>I am someone fascinated by complexity and system interactions, and I
                    thrive on the challenge of building meaningful products. I believe
                    that teamwork is essential to success; sharing knowledge and
                    collaborating with diverse minds leads to the best outcomes. Web
                    development gives me the opportunity to engage with complex systems
                    while working alongside talented individuals.
                </div>
            </div>
            <div className="w-full h-1-6 bg-gradient-frame-line" />
        </section>
    )

}