import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function LoadingScreen(onComplete) {
     const el = useRef(null);
    
        useEffect(() => {
            const typed = new Typed(el.current, {
                strings: ["Welcome!", "Loading..."],
                typeSpeed: 80,
                backSpeed: 40,
                backDelay: 2000,
                loop: true,
                smartBackspace: true,
            });
    
            return () => typed.destroy();
        }, []);
    return (
        <div className="inset-0 flex items-center justify-center flex-col bg-primary text-gray-100  h-screen bg-gradient-to-br from-cyan-500/60 via-black/30 to-transparent">
        <h1 className="pl-4 text-4xl font-mono font-bold min-w-[12ch] min-h-[1em]"><span ref={el}> | </span></h1>
        <div className="w-[240px] h-[3px] bg-fourth rounded relative overflow-hidden">
            <div className="w-full h-full bg-secondary shadow-customBlue animate-loading-bar">
                {" "}
            </div>
        </div>
        </div>
    );
    }