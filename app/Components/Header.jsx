import React from "react";
import me from '../images/Me.jpg'

export default function Header(){
    return (
        <div className="z-50 header-shadow bg-white  fixed left-0 top-0 flex w-full py-2 justify-around items-center">
            <img className="w-10 lg:w-20 rounded-full" src={me.src} alt='pic' />
            <p className="text-lg md:text-3xl">helloWorld.</p>
            <ul className="flex gap-2 text-sm md:gap-4 md:text-lg">
                <li className="hover:underline hover:text-indigo-300"><a href="#about">About</a></li>
                <li className="hover:underline hover:text-indigo-300"><a href="#websites">Websites</a></li>
                <li className="hover:underline hover:text-indigo-300"><a href="#contacts">Contact</a></li>
            </ul>
        </div>
    )
}