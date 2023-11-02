import React from "react";
import Link from "next/link";
import nilambur from '../images/Nilambur.jpeg'
import burger from '../images/Burger.jpeg'
import chats from '../images/Chats.jpeg'
import funding from '../images/Funding.jpeg'
import pass from '../images/GenPass.jpeg'
import gtd from '../images/GTD.jpeg'
import converter from '../images/Converter.jpeg'
import scoreboard from '../images/Scoreboard.jpeg'


export default function WebLinks(){
    return (
        <div className="flex flex-wrap gap-6 my-8 mx-auto w-11/12 justify-center">
            <Link className="ind-web" href='https://teal-shortbread-702f8c.netlify.app/' target="_blank"><img src={nilambur.src} /></Link>
            <Link className="ind-web" href='https://6543d93bd052e22381dc3020--vermillion-kitten-ebe710.netlify.app/'target='_blank'><img src={burger.src} /></Link>
            <Link className="ind-web" href='https://6543dafbe0e90d1e3276f639--dainty-pika-ccf3b3.netlify.app/' target="_blank"><img src={pass.src} /></Link>
            <Link className="ind-web" href='https://6543dc07c8cb3a2b2ad7b5a0--dreamy-licorice-4a4e96.netlify.app/' target="_blank"><img src={scoreboard.src} /></Link>
            <Link className="ind-web bg-gray-100" href='https://transcendent-sopapillas-e2eaee.netlify.app/' target="_blank"><img src={converter.src} /></Link>
            <Link className="ind-web" href='https://timely-lollipop-fb855f.netlify.app/' target="_blank"><img src={chats.src} /></Link>
            <Link className="ind-web" href='https://dainty-blini-640110.netlify.app/login' target="_blank"><img src={funding.src} /></Link>
            <Link className="ind-web" href='https://gtdlast-git-master-abelkjohns-projects.vercel.app' target="_blank"><img src={gtd.src} /></Link>
            
        </div>
    )
}

// import nilambur from '../images/Nilambur.jpeg'
