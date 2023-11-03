import React from "react";
import Me from '../images/Me.jpg'
import Image from "next/image";

export default function About(){
    return <div className="flex flex-col md:flex-row mx-3 gap-4 md:m-32 text-center md:text-left">
        <Image className="rounded-full h-min" src={Me.src} alt="Profile pic"/>
        <div className="flex flex-col justify-center">
            <h1 className="text-lg">About Abel K John</h1>
            <p className="mx-3 mb-5">I'm Abel K John, a budding React.js front-end developer. Proficient in HTML, CSS, and JavaScript, I specialize in crafting user-friendly web experiences. My projects are born from a desire to meet unique needs, showcasing a blend of creativity and technical skill.</p>
            <h1 className="text-lg">Passion Meets Growth</h1>
            <p className="mx-3 mb-5">With a foundation in HTML, CSS, and JavaScript, I'm on a journey to refine my skills in React.js development. I approach each project with a blend of creativity and technical curiosity. Committed to continuous learning, I'm eager to collaborate and create user-friendly web experiences that leave a lasting impact.</p>
            <h1 className="text-lg">Embracing Growth Together</h1>
            <p className="mx-3 mb-5">As I embark on my journey in React.js development, I'm enthusiastic about sharing my progress and projects with you. Your insights and collaboration are invaluable as I navigate the early stages of this exciting career. Feel free to reach out and let's learn and grow together in the world of web development.</p>
        </div>
        </div>
}