import React, { useState, useEffect, useRef } from "react";
import CertificationCard from "../components/CertificationCard";
import { certificationsList } from "../data/certificationsList";
import ProjectFilter from "../components/ProjectFilter";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";


export default function Certification() {
    const [filteredCertification, setFilteredCertification] = useState(certificationsList);
    const cerficationRef = useRef(null);
    const [initialVisibleCount, setInitialVisibleCount] = useState(2);
    const [visibleCount, setVisibleCount] = useState(4);

    useEffect(() => {
            const handleResize = () => {
                const isMobile = window.innerWidth < 768;
                const count = isMobile ? 2 : 4;
                setInitialVisibleCount(count);
                setVisibleCount(count);
            };
    
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, []);
    
    
        const toggleVisibility = () => {
            if (visibleCount >= filteredCertification.length) {
              setVisibleCount(initialVisibleCount);
              setTimeout(() => {
                cerficationRef.current?.scrollIntoView({ behavior: "smooth" });
              }, 100); 
            } else {
              setVisibleCount((prev) => prev + initialVisibleCount);
            }
          };
          

    return (
        <section ref={cerficationRef} id="certifications" className="flex flex-col items-center justify-between w-full h-auto scroll-mt-14">
            <div className="text-3xl font-bold py-12 xl:text-5xl">
                <h1> <span className="text-secondary">My </span>Certifications</h1>
            </div >
            <ProjectFilter allProjects={certificationsList} setProjects={setFilteredCertification} />

            <div className="flex flex-wrap justify-center gap-8 mt-12">
                {filteredCertification.map((certification, index) => (
                    <CertificationCard
                        key={index}
                        index={index} 
                        visibleCount={visibleCount}
                        certification={certification}
                    />
                ))}
            </div>
            {filteredCertification.length > initialVisibleCount && (
                <button
                onClick={toggleVisibility}
                className="mt-8 px-6 py-2 rounded-full border border-accent text-accent hover:bg-accent/10 transition-colors duration-300 flex items-center gap-2"
              >
                {visibleCount >= filteredCertification.length ? (
                  <>
                    Show Less <FaChevronUp />
                  </>
                ) : (
                  <>
                    Show More <FaChevronDown />
                  </>
                )}
              </button>
              

            )}

            <div className="w-full h-1-6 bg-gradient-frame-line mt-12" />
        </section>
    );
}