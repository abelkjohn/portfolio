import React from "react";
import Link from "next/link";
import Header from "../Components/Header";
import nilambur from '../images/Nilambur.jpeg'

export default function Nilambur(){

    return (
        <div>
            <Header />
            <img src={nilambur.src}></img>
        </div>
    )
}