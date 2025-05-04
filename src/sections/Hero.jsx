import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import heroImage from '../assets/images/hero2.png';
import linkedinIcon from '../assets/icons/linkedin-in-brands-solid (2).svg';
import githubIcon from '../assets/icons/github-brands-solid.svg';
import twitterIcon from '../assets/icons/twitter-brands-solid.svg';
import downloadIcon from '../assets/icons/download-solid.svg';
import cvFile from '../assets/doc/cv.pdf';

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
        <section className="flex flex-col items-center justify-between gap-4 pt-28  md:pt-44  px-4">
            <div flxex className="flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-fourth text-2xl md:text-4xl font-bold">
                        Hi, I'm Ndiyakholwa Mnqanqeni
                    </h1>
                    <h2 className="text-fourth text-xl md:text-2xl">
                        I'm a <span ref={el} className="text-accent font-semibold"></span>
                    </h2>
                </div>
                <div>
                    <div className="flex flex-row  w-full justify-center items-center gap-4 mt-6">
                        <p className="flex-1 text-fourth text-sm">
                            I am a passionate full-stack developer with a keen interest in software engineering and cyber security. I specialize in creating dynamic and responsive web applications, and I am always eager.
                        </p>
                        <div className="flex-1 flex justify-center items-center relative">
                            <div className="h-full w-full bg-gradient-to-tr from-transparent via-black/30 shadow-customBlue to-cyan-500/80 flex justify-center items-center z-10">
                                <img src={heroImage} alt="my image" className="object-contain max-h-[400px]" />
                            </div>

                            <div className="absolute w-[10rem] h-[10rem] bg-gradient-to-br from-cyan-500/60 via-black/30 to-transparent rounded-full right-10 bottom-20 animate-fadeIn move-left"></div>
                            <div className="absolute w-[10rem] h-[10rem] bg-gradient-to-br from-cyan-500/60 via-black/30 to-transparent rounded-full rotate-[240deg] left-16 top-24 animate-fadeIn move-right"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-14 w-full">
                    <div className="flex flex-row items-center justify-between gap-2">
                        <button className="bg-accent text-white px-4 bg-secondary py-2 rounded-md hover:bg-accent-dark transition duration-300">
                            <a href="#projects">Contact Me</a>
                        </button>
                        <div className="flex gap-4">
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

                    </div>

                    <div>
                        <a href={cvFile} download className="flex items-center gap-2 mt-4 text-fourth">
                            <img src={downloadIcon} alt="Download CV Icon" className="w-5 h-5" />
                            <p className="text-sm">Download CV</p>
                        </a>

                    </div>
                </div>
            </div>
            <div className="w-full h-1-6 bg-gradient-frame-line" />
        </section>
    );
}
