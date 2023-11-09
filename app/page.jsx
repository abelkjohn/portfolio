import React from "react"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import WebLinks from "./Components/Websites"
import About from "./Components/About"
import Skills from "./Components/Skills"
import Hi from "./Components/Hi"

export default function Home() {
  return <div className="overflow-clip">
    <Header />
    <Hi />
    <Skills />
    <WebLinks />
    <Footer />
    </div>
}