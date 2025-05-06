import React, { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

export default function LoadingScreen({ onComplete }) {
  const el = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Welcome!", "Loading..."],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (onComplete) onComplete(); // optional callback
          return 100;
        }
        return prev + 1;
      });
    }, 50); // progress increases every 50ms

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center h-screen px-4 bg-gradient-to-br from-cyan-500/60 via-primary to-transparent text-fourth">
      <h1 className="text-5xl font-mono font-bold mb-8 text-center min-w-[12ch]">
        <span ref={el}>|</span>
      </h1>
      <div className="w-64 h-4 bg-gray-800 rounded-full overflow-hidden shadow-md">
        <div
          className="h-full bg-blue-500 transition-all duration-200 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
