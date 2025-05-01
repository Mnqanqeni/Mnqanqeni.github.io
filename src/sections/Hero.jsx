import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import heroImage from '../assets/images/hero22.png';
import linkedinIcon from '../assets/icons/linkedin-in-brands-solid (2).svg';
import githubIcon from '../assets/icons/github-brands-solid.svg';
import twitterIcon from '../assets/icons/twitter-brands-solid.svg';
import downloadIcon from '../assets/icons/download-solid.svg';

export default function Hero() {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "Fullstack Developer",
                "Software Engineer",
                "Cyber Security Enthusiast",
            ],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 3000,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="flex flex-row items-center justify-between pt-10 px-7">
            <div className="space-y-4">
                <h1 className="text-secondary text-2xl font-bold">Hi, I'm Ndiyakholwa Mnqanqeni</h1>
                <h2 className="text-xl">
                    Junior <span ref={el} className="text-accent"></span>
                </h2>
                
                <button className="bg-secondary text-fourth px-4 py-2 rounded hover:bg-secondary-dark transition">
                    <a href="#contact">Contact Me</a>
                </button>

                <div className="flex gap-4 mt-4">
                    <a href="https://github.com/Mnqanqeni/Mnqanqeni" target="_blank" rel="noopener noreferrer">
                        <img src={githubIcon} alt="GitHub Profile" className="w-6 h-6 hover:opacity-80" />
                    </a>
                    <a href="https://www.linkedin.com/in/ndiyakholwamnqanqeni" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn Profile" className="w-6 h-6 hover:opacity-80" />
                    </a>
                    <a href="https://twitter.com/Mnqanqeni" target="_blank" rel="noopener noreferrer">
                        <img src={twitterIcon} alt="Twitter Profile" className="w-6 h-6 hover:opacity-80" />
                    </a>
                </div>

                <a href="/path/to/cv.pdf" download className="flex items-center gap-2 mt-4 landing-column-1__CV-download hover:opacity-80">
                    <img src={downloadIcon} alt="Download CV Icon" className="w-5 h-5" />
                    <p className="text-sm">Download CV</p>
                </a>
            </div>

            <div className="mt-6 md:mt-0 md:ml-8">
                <img src={heroImage} alt="Illustration of Ndiyakholwa Mnqanqeni" className="w-full max-w-sm" />
            </div>
        </section>
    );
}
