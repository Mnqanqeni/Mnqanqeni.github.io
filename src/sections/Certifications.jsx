import React from "react";
import CertificationCard from "../components/CertificationCard";
import { certificationsList } from "../data/certificationsList";


export default function Certification() {

    return (
        <section id="certifications" className="flex flex-col items-center justify-between w-full h-auto">
            <div className="text-3xl font-bold py-16 xl:text-5xl">
                <h1> <span className="text-secondary">My </span>Certifications</h1>
            </div >
            <div className="flex flex-wrap justify-center gap-8">
                {certificationsList.map((certification, index) => (
                    <CertificationCard
                        key={index}
                        certification={certification}
                    />
                ))}
            </div>

            <div className="w-full h-1-6 bg-gradient-frame-line mt-8" />
        </section>
    );
}