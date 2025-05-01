import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import heroImage from '../assets/images/hero2.png';

export default function Hero() {
    const el = useRef(null); // Create a ref for the span element

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

        // Destroy Typed instance during cleanup to prevent memory leaks
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="py-8 px-7">
            <div>
                <h1 className="text-secondary">Hi, I'm Ndiyakholwa Mnqanqeni</h1>
                <h2>Junior <span ref={el}></span></h2>
            </div>
            <img src={heroImage} alt="Hero" />
        </div>
    );
}
