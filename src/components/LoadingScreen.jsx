import React from "react";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function LoadingScreen(onComplete) {
     const el = useRef(null);
    
        useEffect(() => {
            const typed = new Typed(el.current, {
                strings: [
                    "hello world",
                ],
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 3000,
                loop: true,
            });
    
            return () => typed.destroy();
        }, []);
    return (
        <div className="fixed inset-0 flex items-center justify-center flex-col bg-primary text-gray-100  h-screen bg-gradient-to-br from-cyan-500/60 via-black/30 to-transparent">
        <div className=" text-4xl font-mono font-bold"><span ref={el}> | </span></div>
        <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
            <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                {" "}
            </div>
        </div>
        </div>
    );
    }