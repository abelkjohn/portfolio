import React from "react";
import me from '../images/Me.jpg'
import Image from "next/image";

export default function Header(){
    return (
        <div className="bg-white  fixed left-0 top-0 flex w-full py-2 justify-around items-center shadow-indigo-100 shadow-lg">
            <Image className="w-10 md:w-20 rounded-full" src={me.src} alt='pic' />
            <h1 className=" text-lg md:text-3xl">helloWorld.</h1>
            <ul className="flex gap-2 text-sm md:gap-4 md:text-lg">
                <li>About</li>
                <li>Websites</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}