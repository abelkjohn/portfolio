

import React from "react";
import Link from 'next/link'
import { FaInstagram, FaGit, FaFacebook, FaLinkedin } from 'react-icons/fa'

export default function Footer(){


    return (
        <div className="flex gap-10 justify-center text-3xl m-4">
            <Link href="https://github.com/abelkjohn" target="_blank"><FaGit /></Link>
            <Link href="https://www.facebook.com/adona.john.10" target="_blank"><FaFacebook /></Link>
            <Link href="https://www.instagram.com/abel_kjohn/" target="_blank"><FaInstagram /></Link>
            <Link href="https://www.linkedin.com/in/abel-john-585a831b0/" target="_blank"><FaLinkedin /></Link>
        </div>
    )
}