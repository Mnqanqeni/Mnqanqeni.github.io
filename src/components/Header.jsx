import React from "react";
import logo from '../assets/logos/logo.png';
import navbar from "../assets/logos/bars-solid.svg";

export default function Header() {
    return (
        <header>
            <nav className="flex justify-between items-center p-2 shadow-navShadow">
                <div className="flex items-center gap-3 cursor-pointer">
                    <img src={logo} alt="Logo" className="h-12" />
                    <div className="flex flex-col items-start justify-center leading-tight">
                        <h1 className="text-fourth text-xl font-playfair">Ndiyakholwa Mnqanqeni</h1>
                        <h6 className="text-secondary text-xs">CODE CREATE INNOVATE</h6>
                    </div>
                </div>
                <div>
                    <img src={navbar} alt="Menu" className="h-9 cursor-pointer" />
                </div>
            </nav>
        </header>
    );
}
