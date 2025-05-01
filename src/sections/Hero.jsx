import React from "react";
import heroImage from '../assets/images/hero2.png';
export default function Hero() {

    return (
        <div className="py-8 px-7">
            <div className="">
                <h1 className="text-secondary">HI I'm Ndiyakholwa Mnqanqeni</h1>
                <h2>Junior<span id="career"></span></h2>
            </div>
            <img src={heroImage} />
        </div>
    );
}