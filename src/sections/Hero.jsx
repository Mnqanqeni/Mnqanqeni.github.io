import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import heroImage from '../assets/images/hero22.png';
import linkedinIcon from '../assets/icons/linkedin-in-brands-solid (2).svg';
import githubIcon from '../assets/icons/github-brands-solid.svg';
import twitterIcon from '../assets/icons/twitter-brands-solid.svg';
import downloadIcon from '../assets/icons/download-solid.svg';
import cvFile from '../assets/doc/cv.pdf'; // Make sure you have the actual file

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

        return () => typed.destroy();
    }, []);

    return (
        <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 pt-40 md:pt-60 gap-12">
            <div className="w-full md:w-1/2 space-y-6 animate-fade-in-up">
                <h1 className="text-fourth text-3xl md:text-4xl font-bold">
                    Hi, I'm Ndiyakholwa Mnqanqeni
                </h1>
                <h2 className="text-fourth text-xl md:text-2xl">
                    Junior <span ref={el} className="text-accent font-semibold"></span>
                </h2>

                <button className="bg-secondary text-fourth px-5 py-2 rounded-lg hover:bg-secondary-dark transition duration-300 shadow-md">
                    <a href="#contact">Contact Me</a>
                </button>

                <div className="flex gap-5 mt-4">
                    <a href="https://github.com/Mnqanqeni/Mnqanqeni" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <img src={githubIcon} alt="GitHub Profile" className="w-6 h-6 hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://www.linkedin.com/in/ndiyakholwamnqanqeni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <img src={linkedinIcon} alt="LinkedIn Profile" className="w-6 h-6 hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://twitter.com/Mnqanqeni" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <img src={twitterIcon} alt="Twitter Profile" className="w-6 h-6 hover:scale-110 transition-transform" />
                    </a>
                </div>

                <a href={cvFile} download className="flex items-center gap-2 mt-4 text-fourth hover:underline">
                    <img src={downloadIcon} alt="Download CV Icon" className="w-5 h-5" />
                    <p className="text-sm">Download CV</p>
                </a>
            </div>

            <div className="w-full md:w-1/2 flex justify-center animate-fade-in-up">
                <img src={heroImage} alt="Illustration of Ndiyakholwa Mnqanqeni" className="object-contain max-h-[400px]" />
            </div>
        </section>
    );
}
