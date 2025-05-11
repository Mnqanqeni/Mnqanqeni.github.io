import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import heroImage from '../assets/images/hero2.png';
import linkedinIcon from '../assets/icons/linkedin-in-brands-solid.svg';
import githubIcon from '../assets/icons/github-brands-solid.svg';
import twitterIcon from '../assets/icons/twitter-brands-solid.svg';
import downloadIcon from '../assets/icons/download-solid.svg';
import cvFile from '../assets/doc/cv.pdf';
import css from '../assets/icons/css.svg';
import html from '../assets/icons/html.svg';
import javascript from '../assets/icons/js.png';
import docker from '../assets/icons/docker.svg';
import express from '../assets/icons/expressLogo.png';
import reactIcon from '../assets/icons/react-96.png';
import django from '../assets/icons/django-96.png';
import nodejs from '../assets/icons/nodejs.svg';
import python from '../assets/icons/python.png';
import postcsSQL from '../assets/icons/postgresql-96.png';
import linux from '../assets/icons/linux-100.png';


export default function Hero() {
    const mobileTypedRef = useRef(null);
    const desktopTypedRef = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
                "Fullstack Developer",
                "Software Engineer",
                "Cyber Security Enthusiast",
            ],
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 3000,
            loop: true,
        };
    
        const mobileTyped = new Typed(mobileTypedRef.current, options);
        const desktopTyped = new Typed(desktopTypedRef.current, options);
    
        return () => {
            mobileTyped.destroy();
            desktopTyped.destroy();
        };
    }, []);
    
    return (
        <section className="flex flex-col items-center justify-between gap-4 pt-28  md:pt-44  px-4">
            <div className="flex flex-col items-center justify-center">
                <div className="md:self-start z-10  lg:hidden">
                    <h1 className="text-fourth text-2xl md:text-4xl font-bold">
                        Hi, I'm Ndiyakholwa Mnqanqeni
                    </h1>
                    <h2 className="text-xl md:text-2xl text-secondary">
                        a <span ref={mobileTypedRef} className="text-accent font-semibold"></span>
                    </h2>
                </div>
                <div>
                    <div className="flex flex-row  w-full justify-between items-center  mt-6">
                        <div className="flex-1 flex flex-col gap-16">
                            <div className="hidden lg:block md:self-start z-10 ">
                                <h1 className="text-fourth text-2xl md:text-4xl font-bold">
                                    Hi, I'm Ndiyakholwa Mnqanqeni
                                </h1>
                                <h2 className="text-xl md:text-2xl text-secondary">
                                    a <span ref={desktopTypedRef} className="text-accent font-semibold"></span>
                                </h2>
                            </div>

                            <div className="flex flex-col gap-4 text-base md:text-lg lg:text-xl xl:text-2xl text-fourth leading-relaxed z-10">
                                <p>Turning curiosity into code, and ideas into impact.</p>
                                <div>
                                    <p className="hidden md:block">I'm a Software Engineer passionate about crafting elegant, end-to-end solutions—from backend architecture to frontend experiences.</p>
                                    <p className="md:hidden">I'm a Software Engineer building elegant, full-stack solutions.</p>
                                </div>
                                <div>
                                    <p className="hidden md:block">Let's create something meaningful—one line of code at a time.</p>
                                    <p className="md:hidden">Let’s build something meaningful.</p>
                                </div>
                                <p className="hidden">Explore my work and feel free to reach out if you’ve got something exciting in mind.</p>

                            </div>


                            <div className="hidden lg:flex flex-col gap-8">
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
                                    <a href={cvFile} download className="flex flex-row justify-center items-end gap-2 text-fourth">
                                        <img src={downloadIcon} alt="Download CV Icon" className=" w-10 h-10" />
                                        <span className="text-2xl h-6">Download CV</span>
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

                            <img src={css} alt="CSS icon" className="hidden brp1:block absolute right-6 sm:right-20 lg:right-[210px] top-10  opacity-20 w-10 sm:w-16 lg:w-20" />

                            <img src={html} alt="HTML icon" className="hidden brp1:block absolute left-10 sm:left-20 lg:left-[250px] top-40 sm:top-52 lg:top-[250px]  opacity-50 w-10 sm:w-14 lg:w-20" />

                            <img src={javascript} alt="JavaScript icon" className="hidden brp1:block absolute left-[0%] bottom-[92%] opacity-80 w-24" />

                            <img src={docker} alt="Docker icon" className="hidden brp1:block absolute w-28 h-auto right-[17%] bottom-[70%]" />

                            <img src={express} alt="Express icon" className="hidden lg:block  absolute h-20 w-auto  left-[10%] top-[110%] opacity-50" />

                            <img src={django} alt="Django icon" className="hidden lg:block  absolute right-[85%] top-20 w-30" />

                            <img src={reactIcon} alt="React icon" className="hidden lg:block  absolute left-[85%] top-36 opacity-50 w-20" />

                            <img src={nodejs} alt="Node.js icon" className="hidden lg:block absolute right-[47%] bottom-[100%] w-20 opacity-50" />

                            <img src={python} alt="Python icon" className="hidden lg:block absolute right-[20%] top-[100%] w-32 h-auto opacity-50" />

                            <img src={postcsSQL} alt="PostgreSQL icon" className="hidden lg:block  absolute left-[80%]  bottom-[100%]  opacity-20 w-28" />

                            <img
                                src={linux}
                                alt="Linux"
                                className="hidden lg:block absolute right-[100%] top-[90%] -z-1 w-44  h-auto opacity-50"
                            />
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
                                <span className="text-xl h-6">Download CV</span>
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
            <div className="w-full h-1-6 bg-gradient-frame-line lg:mt-56" />
        </section>
    );
}
