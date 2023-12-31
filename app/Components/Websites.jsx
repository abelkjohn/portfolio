import React from "react";
import Link from "next/link";

const getProjects = async () => {
    try {
        const res =  await fetch(`https://portfolio-delta-dun-62.vercel.app/api/projects`, {
            cache: "no-store"
        })

        if (!res.ok) {
            throw new Error("Failed to fetch Projects")
        }
        
        return res.json()
    } catch (error) {
        console.log("Error loading Projects")
    }
}


export default async function WebLinks(){
    
    const {projects} = await getProjects()
    
    return (
        <div id="websites" className="flex flex-col items-center ">
            <h1 className="text-3xl mt-28 md:mt-32 lg:32 ">My Projects</h1>
            <div  className="flex flex-wrap gap-6 my-8 mx-auto w-11/12 justify-center ">
                {projects.map(i => {
                    return <Link href={`websites/${i._id}`} key={i._id} className="w-96">
                        <h1 className="text-2xl ">{i.title}</h1>
                        <img src={i.image} className="rounded-lg shadow-xl shadow-indigo-200"></img>
                        </Link>}).reverse()
                    }
            </div>
        </div>
    )
}

// 



// <Link className="ind-web" href='/nilambur'><img src={nilambur.src} /></Link>
// <Link className="ind-web" href='/menu' target='_blank'><img src={burger.src} /></Link>
// <Link className="ind-web" href='https://6543dafbe0e90d1e3276f639--dainty-pika-ccf3b3.netlify.app/' target="_blank"><img src={pass.src} /></Link>
// <Link className="ind-web" href='https://6543dc07c8cb3a2b2ad7b5a0--dreamy-licorice-4a4e96.netlify.app/' target="_blank"><img src={scoreboard.src} /></Link>
// <Link className="ind-web bg-gray-100" href='https://6543dfdb8452f2347c61cbcb--deluxe-cranachan-f3c317.netlify.app/' target="_blank"><img src={converter.src} /></Link>
// <Link className="ind-web" href='https://timely-lollipop-fb855f.netlify.app/' target="_blank"><img src={chats.src} /></Link>
// <Link className="ind-web" href='https://movies-list-ivory.vercel.app/' target="_blank"><img src={movie.src} /></Link>
// <Link className="ind-web" href='https://dainty-blini-640110.netlify.app/login' target="_blank"><img src={funding.src} /></Link>
// <Link className="ind-web" href='https://gtdlast-git-master-abelkjohns-projects.vercel.app' target="_blank"><img src={gtd.src} /></Link>


