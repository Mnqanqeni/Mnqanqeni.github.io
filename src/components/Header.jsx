import React from "react";
import { useEffect } from "react";
import logo from '../assets/logos/logo.png';
import navbar from "../assets/icons/bars-solid.svg";
import xIcon from "../assets/icons/xmark-solid.svg";

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const toggleDropdown = () => setDropdownOpen(prev => !prev);

    const navItems = ["Home", "About", "Projects", "Skills", "Certifications", "Experience", "Contact"];
    useEffect(() => {
        document.body.style.overflow = dropdownOpen ? 'hidden' : 'auto';
    }, [dropdownOpen]);


    return (
        <header className="w-full flex flex-col items-center">
            <nav className="flex fixed justify-between items-center p-2 shadow-navShadow z-50 bg-primary w-full">
                <div href="#home" className="flex items-center gap-3 cursor-pointer">
                    <img src={logo} alt="Logo" className="h-12" />
                    <div className="flex flex-col items-start justify-center leading-tight">
                        <h1 className="text-fourth text-xl font-playfair">Ndiyakholwa Mnqanqeni</h1>
                        <h6 className="text-secondary text-xs">CODE CREATE INNOVATE</h6>
                    </div>
                </div>
                <div>
                    <img
                        src={dropdownOpen ? xIcon : navbar}
                        alt={dropdownOpen ? "Close Menu" : "Open Menu"}
                        className="w-8 h-8 md:hidden cursor-pointer"
                        onClick={toggleDropdown}
                    />

                    <ul className="hidden md:flex gap-5 text-fourth font-playfair">
                        {navItems.map(item => (
                            <li key={item} className="hover:text-secondary cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>
            </nav>

            {dropdownOpen && (
                <div className="w-full h-screen md:hidden fixed top-16 left-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ease-in-out animate-fade-slide-down">
                    <div className="p-6 h-full shadow-2xl bg-primary text-fourth border border-white/10">
                        <ul className="flex flex-col items-center gap-6 font-playfair text-lg">
                            {navItems.map((item) => (
                                <li
                                    key={item}
                                    className="hover:text-secondary hover:bg-red-600 px-6 py-3 rounded-lg transition-colors duration-200 cursor-pointer text-center w-full"
                                    onClick={toggleDropdown}
                                >
                                    <a href={`#${item.toLowerCase()}`}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}


        </header>
    );
}
