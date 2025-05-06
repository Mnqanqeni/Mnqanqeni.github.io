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
        <section className="flex flex-col items-center justify-between gap-4 pt-28  md:pt-44  px-8">
            <div className="flex flex-col items-center justify-center">
                <div>
                    <h1 className="text-fourth text-2xl md:text-4xl font-bold">
                        Hi, I'm Ndiyakholwa Mnqanqeni
                    </h1>
                    <h2 className="text-xl md:text-2xl text-secondary">
                        I'm a <span ref={el} className="text-accent font-semibold"></span>
                    </h2>
                </div>
                <div>
                    <div className="flex flex-row  w-full justify-center items-center gap-4 mt-6">
                        <p className="flex-1 text-fourth text-base leading-relaxed md:text-xl">
                            Welcome to my portfolio! I'm Ndiyakholwa, a full-stack developer excited about creating responsive and user-friendly web applications. With foundational skills in HTML, CSS, JavaScript, Node.js."
                        </p>
                        <div className="flex-1 flex justify-center items-center relative">
                            <div className="h-full w-auto bg-gradient-to-tr from-transparent via-black/30 shadow-customBlue to-cyan-500/80 flex justify-center items-center z-10">
                                <img src={heroImage} alt="my image" className="object-contain max-h-[400px]" />
                            </div>

                            <div className="absolute w-44 md:w-80 h-44  md:h-80 bg-gradient-to-br from-cyan-500/60 via-black/30 to-transparent rounded-full right-[40%] bottom-[50%] animate-fadeIn move-left"></div>
                            <div className="absolute w-44 md:w-80 h-44  md:h-80 bg-gradient-to-br from-cyan-500/60 via-black/30 to-transparent rounded-full rotate-[240deg] left-[40%] top-[50%] animate-fadeIn move-right"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center gap-6 mt-36 w-full pr-52">
                    <div className="flex flex-col md:flex-row items-center justify-between w-full gap-6">

                        {/* Get in Touch Button */}
                        <button className="text-white font-semibold bg-secondary hover:bg-accent-dark transition duration-300 px-6 py-3 rounded-md shadow-md min-w-[10rem]">
                            Get in Touch
                        </button>

                        {/* Download CV */}
                        <a
                            href={cvFile}
                            download
                            className="hidden md:flex items-center gap-2 text-fourth hover:text-accent-dark transition duration-300"
                        >
                            <img src={downloadIcon} alt="Download CV" className="w-6 h-6" />
                            <span className="text-lg font-medium">Download My CV</span>
                        </a>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/Mnqanqeni/Mnqanqeni"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="transition-transform hover:scale-110"
                            >
                                <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ndiyakholwamnqanqeni"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="transition-transform hover:scale-110"
                            >
                                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
                            </a>
                            <a
                                href="https://twitter.com/Mnqanqeni"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                className="transition-transform hover:scale-110"
                            >
                                <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="w-full h-1-6 bg-gradient-frame-line" />
        </section>
    );
}
