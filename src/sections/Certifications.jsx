import React from "react";

export default function Certification() {
    const Certifications = {
        "AWS Certified Cloud Practitioner": {
            date: "2023-09-01",
            credentialUrl: "https://www.credly.com/badges/9c8f0a6e-4b5d-4c1f-a1d2-7d2d1e4f9c3b/public_url",
            

        },
        "AWS Certified Solutions Architect - Associate": {
            date: "2023-09-01",
            credentialUrl: "https://www.credly.com/badges/9c8f0a6e-4b5d-4c1f-a1d2-7d2d1e4f9c3b/public_url",
        },
        "AWS Certified Developer - Associate": {
            date: "2023-09-01",
            credentialUrl: "https://www.credly.com/badges/9c8f0a6e-4b5d-4c1f-a1d2-7d2d1e4f9c3b/public_url",
        },
    }
    return (
        <section id="certifications"className="flex flex-col items-center justify-between">
            <div className="text-3xl font-bold py-16">
                <h1> <span className="text-secondary">My </span>Certifications</h1>
            </div>
            <div className="w-full h-1-6 bg-gradient-frame-line" />
        </section>
    );
}