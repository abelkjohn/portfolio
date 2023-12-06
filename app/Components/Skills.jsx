import React from "react";


export default function Skills(){
    return (
        <div className="flex w-11/12 justify-center mx-auto gap-6 flex-wrap lg:flex-nowrap">
            <div className="pt-4 md:w-1/3 lg:w-1/3">
                <h1  className="text-lg text-center md:text-left lg:text-left">Get to know me:</h1>
                <div className="p-2 pt-1 mx-3 mb-5 text-center md:text-left lg:text-left">My background is in Business Administration and Marketing/Sales . I&apos;am currently working on a bachelors degree in Business Administration from Amity University Online. When I&apos;m not coding, I play the guitar or explore.
                <a className="p-2 bg-cyan-200 w-fit rounded-lg mt-4 mx-auto md:ml-0 lg:ml-0 block" href="/resumeThree.pdf" download="resumeThree.pdf">My Résumé</a>
            </div>
            </div>
            <div className="flex flex-col justify-start w-96 my-4 ">
            <div className="mb-1">My Technical Skills:</div>
            <div className="flex gap-2 flex-wrap">
                <div className="skill-button">HTML5</div>
                <div className="skill-button">CSS3</div>
                <div className="skill-button">JavaScript</div>
                <div className="skill-button">React.js</div>
                <div className="skill-button">Next.js</div>
                <div className="skill-button">Firebase</div>
                <div className="skill-button">MongoDB</div>
                <div className="skill-button">Node.js</div>
                <div className="skill-button">TailwindCss</div>
                <div className="skill-button">Responsive Design</div>     
                <div className="skill-button">Git</div>     
            </div>       
        </div>
        <div className="flex flex-col justify-start w-96 my-4 ">
            <div className="mb-1">My Social Skills:</div>
            <div className="flex gap-2 flex-wrap">
                <div className="skill-button">Servant Leadership</div>
                <div className="skill-button">Active Listening</div>
                <div className="skill-button">Building Consensus</div>
                <div className="skill-button">Conflict Resolution</div>
            </div>       
        </div>
        </div>
    )
}