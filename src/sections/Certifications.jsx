import React from "react";

export default function Certification() {
    return (
        <section className="flex flex-col items-center justify-between gap-4 md:px-12 pt-14 md:pt-60 animate-fade-in-up">
            <div className="text-3xl font-bold">
                <h1>My <span className="text-secondary">Certifications</span></h1>
            </div>
            <div className="w-full h-1-6 bg-gradient-frame-line" />
        </section>
    );
}