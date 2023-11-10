"use client"

import React from "react";
import { useParams } from 'next/navigation'
import Header from '../Components/Header'

export default function Website(){
    const params = useParams()
    return (
        <div>
            <Header />
            <div className="m-40">{params.id}</div>
        </div>
    )
}