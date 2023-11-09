import React from "react";
import Me from '../images/Me2.jpg'

export default function Hi(){
    return (
        <div className="relative custom-mt-hi h-96 flex justify-center items-center md:mt-20 lg:mt-20">
            <img className="absolute top-10 custom-right custom-me-img md:w-60 lg:w-60 shadow-2xl shadow-indigo-500/50" src={Me.src}></img>
            <div className="flex flex-col items-end">
                <p className="text-2xl pr-28 md:w-1/2 lg:w-1/2 text-left pl-3 custom-hi">Hi, I am</p>
                <p className="text-2xl pr-12 md:w-1/2 lg:w-1/2 text-left pl-3 custom-name"><strong>Abel K John</strong></p>
                <p className="text-lg md:text-xl lg:text-xl p-2 bg-indigo-200 custom-width text-right">Front-End Developer</p>
            </div>
        </div>
    )
}