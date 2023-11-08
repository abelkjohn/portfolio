import React from "react";
import Me from '../images/Me2.jpg'

export default function Hi(){
    return (
        <div className=" relative h-96 flex justify-center items-center ">
            <img className="absolute top-10 custom-right w-60 shadow-2xl shadow-indigo-500/50" src={Me.src}></img>
            <div className="flex flex-col items-end">
                <p className="text-2xl w-1/2 text-left pl-3">Hi, I am</p>
                <p className="text-2xl w-1/2 text-left pl-3"><strong>Abel K John</strong></p>
                <p className="text-xl p-2 bg-indigo-200 custom-width text-right">Front-End Developer</p>
            </div>
        </div>
    )
}