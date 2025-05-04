import React from "react";
import logo from '../assets/logos/logo.png';
import navbar from "../assets/icons/bars-solid.svg";
import xIcon from "../assets/icons/xmark-solid.svg";

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const toggleDropdown = () => setDropdownOpen(prev => !prev);

    const navItems = ["Home", "About", "Projects", "Skills", "Certifications", "Experience", "Contact"];

    return (
        <header className="w-full flex flex-col items-center">
            <nav className="flex fixed justify-between items-center p-2 shadow-navShadow z-50 bg-primary w-full">
                <div className="flex items-center gap-3 cursor-pointer">
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
                <div className="w-1/2 md:hidden h-auto fixed right-0 top-16 bg-dark-gradient rounded-md p-4 z-50">
                    <ul className="flex flex-col items-center gap-5 text-fourth font-playfair">
                        {navItems.map(item => (
                            <li key={item} className="hover:text-secondary cursor-pointer">{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
}
