import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import heroImage from '../assets/images/hero2.png';
import linkedinIcon from '../assets/icons/linkedin-in-brands-solid.svg';
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
            <div className="flex flex-col items-center justify-center">
                <div className="md:self-start z-10">
                    <h1 className="text-fourth text-2xl md:text-4xl font-bold">
                        Hi, I'm Ndiyakholwa Mnqanqeni
                    </h1>
                    <h2 className="text-xl md:text-2xl text-secondary">
                        a <span ref={el} className="text-accent font-semibold"></span>
                    </h2>
                </div>
                <div>
                    <div className="flex flex-row  w-full justify-between items-center  mt-6">
                        <div className="flex-1">
                            <p className=" md:hidden text-fourth text-base leading-relaxed z-10">
                                Welcome to my portfolio! I'm Ndiyakholwa, a full-stack developer excited about creating responsive and user-friendly web applications. With foundational skills in HTML, CSS, JavaScript, Node.js."
                            </p>
                            <p className="hidden md:block lg:hidden  text-fourth leading-relaxed text-2xl z-10">
                                Welcome to my portfolio! I'm Ndiyakholwa, a full-stack developer excited about creating responsive and user-friendly web applications. With foundational skills in HTML, CSS, JavaScript, Node.js, Express, Docker, and PostgreSQL, I focus on building functional solutions.
                            </p>
                            <p className="hidden lg:block xl:hidden  text-fourth leading-relaxed text-2xl z-10">
                                Welcome to my portfolio! I'm Ndiyakholwa, a full-stack developer excited about creating responsive and user-friendly web applications. With foundational skills in HTML, CSS, JavaScript, Node.js, Express, Docker, and PostgreSQL, I focus on building functional solutions.  With foundational skills in HTML, CSS, JavaScript, Node.js, Express, Docker, and PostgreSQL, I focus on building functional solutions.
                            </p>

                            <p className="hidden lg:hidden xl:block  text-fourth leading-relaxed text-2xl z-10">
                                Welcome to my portfolio! I'm Ndiyakholwa, a full-stack developer excited about creating responsive and user-friendly web applications. With foundational skills in HTML, CSS, JavaScript, Node.js, Express, Docker, and PostgreSQL, I focus on building functional solutions.  With foundational skills in HTML, CSS, JavaScript, Node.js, Express, Docker, and PostgreSQL, I focus on building functional solutions. With foundational skills in HTML, CSS, JavaScript, Node.js, Express, Docker, and PostgreSQL, I focus on building functional solutions.
                            </p>
                            <div className="hidden lg:flex flex-col gap-4">
                                <div className="flex flex-row gap-8">
                                    <button className="text-fourth px-6 bg-secondary min-w-[10rem] py-2 rounded-md hover:bg-accent-dark transition duration-300">
                                        Get in Touch
                                    </button>

                                    <a href="https://github.com/Mnqanqeni/Mnqanqeni" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                        <img src={githubIcon} alt="GitHub Profile" className="w-10 h-10 hover:scale-110 transition-transform" />
                                    </a>
                                    <a href="https://www.linkedin.com/in/ndiyakholwamnqanqeni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                        <img src={linkedinIcon} alt="LinkedIn Profile" className="w-10 h-10 hover:scale-110 transition-transform" />
                                    </a>
                                    <a href="https://twitter.com/Mnqanqeni" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                        <img src={twitterIcon} alt="Twitter Profile" className="w-10 h-10 hover:scale-110 transition-transform" />
                                    </a>
                                </div>
                                <div className="flex">
                                    <a href={cvFile} download className="justify-center items-end gap-2 text-fourth">
                                        <img src={downloadIcon} alt="Download CV Icon" className=" w-8 h-8" />
                                        <span className="text-xl h-6">Download My CV</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex-1 flex justify-center items-center relative">
                            <div className="h-full w-auto bg-gradient-to-tr from-transparent via-black/30 shadow-customBlue xl:shadow-customBlueXl to-cyan-500/80 flex justify-center items-center z-10">
                                <img src={heroImage} alt="my image" className="object-contain max-h-[400px] lg:max-h-[600px]" />
                            </div>

                            <div className="absolute w-44 md:w-80 lg:w-96 h-44  md:h-80 lg:h-96  bg-gradient-to-br from-cyan-500/60 via-black/30 to-transparent rounded-full right-[40%] lg:right-[50%] bottom-[50%]  lg:bottom-[50%] animate-fadeIn move-left"></div>
                            <div className="absolute w-44 md:w-80 lg:w-[28rem] h-44  md:h-80 lg:h-[28rem] bg-gradient-to-br from-cyan-500/60 via-black/30 to-transparent rounded-full rotate-[240deg] left-[40%] lg:left-[45%] top-[50%] animate-fadeIn move-right"></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 mt-5 md:mt-32 py-8 w-full  xl:w-2/3 xl:self-start lg:hidden">
                    <div className="flex flex-row items-center justify-between gap-2 w-full">
                        <button className="text-fourth px-6 bg-secondary min-w-[10rem] py-2 rounded-md hover:bg-accent-dark transition duration-300">
                            Get in Touch
                        </button>


                        <div>
                            <a href={cvFile} download className="hidden  md:flex justify-center items-end gap-2 mt-4 text-fourth">
                                <img src={downloadIcon} alt="Download CV Icon" className=" w-8 h-8" />
                                <span className="text-xl h-6">Download My CV</span>
                            </a>

                        </div>

                        <div className="flex gap-4 z-10">
                            <a href="https://github.com/Mnqanqeni/Mnqanqeni" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <img src={githubIcon} alt="GitHub Profile" className="w-10 h-10 hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://www.linkedin.com/in/ndiyakholwamnqanqeni" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <img src={linkedinIcon} alt="LinkedIn Profile" className="w-10 h-10 hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://twitter.com/Mnqanqeni" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <img src={twitterIcon} alt="Twitter Profile" className="w-10 h-10 hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
            <div className="w-full h-1-6 bg-gradient-frame-line" />
        </section>
    );
}
