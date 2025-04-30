import React from "react";
import logo from '../assets/logos/logo.png';
import navbar from "../assets/logos/bars-solid.svg";

export default function Header() {
    return (
        <header>
            <nav className="flex justify-between items-center bg-primary p-2">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="Logo" className="h-10" />
                    <div className="flex flex-col items-start">
                        <h1 className="text-fourth md:text-xl">Ndiyakholwa Mnqanqenindiya</h1>
                        <h5 className="text-secondary">CODE CREATE INNOVATE</h5>
                    </div>
                </div>
                <div>
                    <img src={navbar} alt="Menu" className="h-14 cursor-pointer" />
                </div>
            </nav>
        </header>
    );
}
