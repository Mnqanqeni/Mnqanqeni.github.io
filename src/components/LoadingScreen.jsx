import React from "react";

export default function LoadingScreen(onComplete) {
    const [text, setText] = React.useState("");
    const fullText = "<Hello World/>";

    
    return (
        <div className="fixed inset-0 flex items-center justify-center flex-col bg-black text-gray-100  h-screen bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="mb-4 text-4xl font-mono font-bold">Hello World<span> | </span></div>
        <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
            <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar">
                {" "}
            </div>
        </div>
        </div>
    );
    }