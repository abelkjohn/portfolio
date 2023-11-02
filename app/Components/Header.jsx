import React from "react";
import me from '../images/Me.jpg'

export default function Header(){
    return (
        <div className="flex w-full py-2 justify-around items-center shadow-indigo-100 shadow-lg">
            <img className="w-20 rounded-full" src={me.src} alt='pic' />
            <h1 className="text-2xl">helloWorld.</h1>
            <ul className="flex gap-4">
                <li>About</li>
                <li>Websites</li>
                <li>Contacts</li>
            </ul>
        </div>
    )
}