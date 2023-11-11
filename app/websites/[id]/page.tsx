
import React from "react";
import { useParams } from 'next/navigation'
import Header from '../../Components/Header'
import Link from "next/link"

const getProjectById = async (id) => {
    try {
        const res =  await fetch(`https://portfolio-delta-dun-62.vercel.app/api/projects/${id}`, {
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

export default async function Website({params}){
    const { id } = params
    const {topic} = await getProjectById(id)
    const { title, description, liveUrl, gitUrl, image, skills} = topic
    
    return (
        <div>
            <Header />
            <div className="m-6 mt-20">
                <h1 className="text-3xl m-4 text-center">{title}</h1>
                <img className="custom-webpage-ind-img rounded-xl shadow-2xl shadow-indigo-400/50 mx-auto" src={image}></img>
                <div className="flex justify-center gap-4 m-8">
                    <Link className="p-2 border-2 bg-white" href={liveUrl} target="_blank">Live Link</Link>
                    {gitUrl ? <Link className="p-2 border-2 bg-white" href={gitUrl} target="_blank">Git Repo</Link> : null}
                </div>
                <div className="flex gap-2 flex-wrap">
                    {skills.map(i => <p key={i} className="px-4 py-2 text-center border-none bg-indigo-500 shadow-xl shadow-indigo-700/50 rounded-sm text-slate-100">{i}</p>)}
                </div>
                <p className="mt-5">{description}</p>
            </div>
        </div>
    )
}