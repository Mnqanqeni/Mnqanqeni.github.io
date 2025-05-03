import React from "react";
import logo from '../assets/logos/logo.png';
import navbar from "../assets/logos/bars-solid.svg";

export default function Header() {
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const toggleDropdown = () => setDropdownOpen(prev => !prev);
  
    return (
        <header>
            <nav className="flex fixed justify-between items-center p-2 shadow-navShadow z-50 bg-primary w-full">
                <div className="flex items-center gap-3 cursor-pointer">
                    <img src={logo} alt="Logo" className="h-12" />
                    <div className="flex flex-col items-start justify-center leading-tight">
                        <h1 className="text-fourth text-xl font-playfair">Ndiyakholwa Mnqanqeni</h1>
                        <h6 className="text-secondary text-xs">CODE CREATE INNOVATE</h6>
                    </div>
                </div>
                <div>
                    { !dropdownOpen && (
                        <img
                            src={navbar}
                            alt="Navbar Icon"
                            className="w-8 h-8 md:hidden cursor-pointer"
                            onClick={toggleDropdown}
                        />
                    )}
                    
                    <div>
                        <ul className="hidden md:flex gap-5 text-fourth font-playfair">
                            <li className="hover:text-secondary cursor-pointer">Home</li>
                            <li className="hover:text-secondary cursor-pointer">About</li>
                            <li className="hover:text-secondary cursor-pointer">Projects</li>
                            <li className="hover:text-secondary cursor-pointer">Skills</li>
                            <li className="hover:text-secondary cursor-pointer">Certifications</li>
                            <li className="hover:text-secondary cursor-pointer">Experience</li>
                            <li className="hover:text-secondary cursor-pointer">Contact</li>

                        </ul>
                    </div>
                </div>
            </nav>
            {dropdownOpen && (
                        <div className="w-full h-full absolute left-0 top-16 bg-red-900 rounded-md p-4">
                            <ul className="flex flex-col items-center gap-5 text-fourth font-playfair">
                                <li className="hover:text-secondary cursor-pointer" onClick={toggleDropdown}>X</li>
                                <li className="hover:text-secondary cursor-pointer">Home</li>
                                <li className="hover:text-secondary cursor-pointer">About</li>
                                <li className="hover:text-secondary cursor-pointer">Projects</li>
                                <li className="hover:text-secondary cursor-pointer">Skills</li>
                                <li className="hover:text-secondary cursor-pointer">Certifications</li>
                                <li className="hover:text-secondary cursor-pointer">Experience</li>
                                <li className="hover:text-secondary cursor-pointer">Contact</li>
                            </ul>
                        </div>
                    )}
        </header>
    );
}
