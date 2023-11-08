import React from "react";

export default function Skills(){
    return (
        <div className="flex w-11/12 justify-end mx-auto gap-6 flex-wrap lg:flex-nowrap">
            <div className="pt-4 md:w-1/3 lg:w-1/3">
                <h1>Get to know me:</h1>
                <div className="p-2 pt-1">My background is in Business Administration and Marketing/Sales . I&apos;am currently working on a bachelors degree in Business Administration from Amity University Online. When I&apos;m not coding, I play the guitar or explore.
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
                <div className="skill-button">firebase</div>
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